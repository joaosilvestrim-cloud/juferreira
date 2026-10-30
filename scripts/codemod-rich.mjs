// Conversão única: frases montadas em pedaços (tx + <Em> + <br/> + <strong>) viram um texto só, com destaques,
// via rx("chave", "texto com <em>destaque</em><br>quebra"). Assim o painel edita a frase inteira livremente.
//   node scripts/codemod-rich.mjs        → aplica e grava scripts/rich-migration.json (para migrar ajustes já feitos)
//   node scripts/codemod-rich.mjs --dry  → só conta
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import ts from "typescript";

const ROOT = process.cwd();
const SECTIONS = join(ROOT, "src", "components", "sections");
const DRY = process.argv.includes("--dry");
const INLINE = { Em: "em", strong: "strong", b: "strong", em: "i", i: "i" };
// não converter: elementos que precisam de texto puro (SVG, campos) ou que são botões/links
const SKIP_TAGS = new Set(["text", "tspan", "desc", "title", "option", "textarea", "Em", "strong", "b", "i", "em", "br"]); // SVG e campos precisam de texto puro

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : /\.tsx$/.test(f) ? [join(d, f)] : []));
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Regras de espaço do JSX: junta linhas, tira indentação, descarta linhas vazias. */
function jsxText(raw) {
  const lines = raw.split(/\r\n|\n|\r/);
  let out = "";
  lines.forEach((line, i) => {
    const first = i === 0;
    const last = i === lines.length - 1;
    let l = line.replace(/\t/g, " ");
    if (!first) l = l.replace(/^[ ]+/, "");
    if (!last) l = l.replace(/[ ]+$/, "");
    if (l) out += (out && !first ? " " : "") + l;
  });
  return out;
}

const tagOf = (el) => (ts.isJsxElement(el) ? el.openingElement.tagName : el.tagName).getText();

/** Converte os filhos em tokens; null se tiver algo que não seja texto/tx/br/ênfase. */
function tokens(children, sf) {
  const out = [];
  for (const c of children) {
    if (ts.isJsxText(c)) {
      const t = jsxText(c.text); // .text inclui os espaços (getText pula espaços iniciais)
      if (t) out.push({ t: "lit", v: esc(decode(t)) });
    } else if (ts.isJsxExpression(c)) {
      const e = c.expression;
      if (!e) continue;
      if (ts.isStringLiteral(e)) out.push({ t: "lit", v: esc(e.text) });
      else if (ts.isCallExpression(e) && ts.isIdentifier(e.expression) && e.expression.text === "tx" && e.arguments.length === 2 && ts.isStringLiteral(e.arguments[0]) && ts.isStringLiteral(e.arguments[1]))
        out.push({ t: "key", k: e.arguments[0].text, orig: e.arguments[1].text });
      else return null;
    } else if (ts.isJsxSelfClosingElement(c) && tagOf(c) === "br") {
      out.push({ t: "lit", v: "<br>" });
    } else if (ts.isJsxElement(c) && INLINE[tagOf(c)]) {
      const name = tagOf(c);
      let tag = INLINE[name];
      const italic = name === "Em" && c.openingElement.attributes.properties.some((a) => ts.isJsxAttribute(a) && a.name.getText() === "italic");
      const inner = tokens(c.children, sf);
      if (!inner) return null;
      const open = italic ? "<em><i>" : `<${tag}>`;
      const close = italic ? "</i></em>" : `</${tag}>`;
      out.push({ t: "lit", v: open }, ...inner, { t: "lit", v: close });
    } else return null;
  }
  return out;
}
const decode = (s) => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const markupOf = (toks) => toks.map((x) => (x.t === "lit" ? x.v : esc(x.orig))).join("");

const migration = [];
let converted = 0;

for (const file of walk(SECTIONS)) {
  const src = readFileSync(file, "utf8");
  if (/^\s*["']use client["']/.test(src)) continue;
  const rel = relative(ROOT, file).split(sep).join("/");
  const page = rel.split("/")[3];
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  const seen = new Map();
  const keyFor = (text) => {
    const n = (seen.get(text) ?? 0) + 1;
    seen.set(text, n);
    return `${page}/r${createHash("sha1").update(`${rel}|rich|${text}|${n}`).digest("hex").slice(0, 9)}`;
  };
  const visit = (node) => {
    if (ts.isJsxElement(node) && !SKIP_TAGS.has(tagOf(node)) && node.children.length) {
      const toks = tokens(node.children, sf);
      if (toks && toks.some((x) => x.t === "key")) {
        const markup = markupOf(toks).replace(/\s+/g, " ").replace(/\s*<br>\s*/g, "<br>").trim();
        const key = keyFor(markup);
        const first = node.children[0];
        const last = node.children[node.children.length - 1];
        edits.push({ start: first.getFullStart(), end: last.getEnd(), text: `\n{rx(${JSON.stringify(key)}, ${JSON.stringify(markup)})}\n` });
        migration.push({ key, file: rel, markup, parts: toks });
        converted++;
        return; // não desce: os filhos foram substituídos
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  if (!edits.length) continue;
  let out = src;
  for (const e of edits.sort((a, b) => b.start - a.start)) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  // importa rx junto do tx
  out = out.replace(/import \{([^}]*)\} from "@\/lib\/editable";/, (m, names) => {
    const set = new Set(names.split(",").map((s) => s.trim()).filter(Boolean));
    set.add("rx");
    return `import { ${[...set].join(", ")} } from "@/lib/editable";`;
  });
  if (!DRY) writeFileSync(file, out);
  console.log(`${rel}: ${edits.length} frase(s)`);
}
if (!DRY) writeFileSync("scripts/rich-migration.json", JSON.stringify(migration, null, 1));
console.log(`\n${converted} frases convertidas`);
