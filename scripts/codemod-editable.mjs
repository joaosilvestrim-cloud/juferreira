// Marca textos e imagens das seções como editáveis pelo /admin.
//   node scripts/codemod-editable.mjs        → aplica nos arquivos e gera src/content/editable-registry.json
//   node scripts/codemod-editable.mjs --dry  → só lista quantos itens seriam marcados
// Idempotente: textos já envolvidos em tx()/img() são apenas registrados de novo.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import ts from "typescript";

const ROOT = process.cwd();
const SECTIONS = join(ROOT, "src", "components", "sections");
const DRY = process.argv.includes("--dry");
const SKIP_FILES = /(Icons|JuIcons|routes)\.tsx?$/;

const EXCLUDED_PROPS = new Set([
  "id", "key", "href", "slug", "icon", "className", "imgClassName", "c", "cls", "pos", "tone", "variant", "size",
  "shape", "kind", "type", "status", "rota", "route", "value", "anchor", "as", "color", "sizes", "rel", "target",
  "territorio", "territorios", "name", "rotate", "side", "align", "layout", "accent", "assunto", "for", "htmlFor",
  "autoComplete", "inputMode", "pattern", "mode", "form", "role", "group",
]);
const JSX_TEXT_ATTRS = new Set(["alt", "placeholder", "title", "label", "hint", "caption", "aria-label", "question", "text", "cta", "lead"]);
const JSX_IMG_ATTRS = new Set(["src", "img", "image", "poster"]);

const isImage = (s) => /^\/(images|spiral)\//.test(s);
function isProse(s) {
  if (!/\p{L}/u.test(s)) return false;
  if (/^(\/|#|https?:|mailto:|tel:|\.)/.test(s)) return false;
  if (/^[a-z0-9_-]+$/.test(s)) return false; // identificadores (ids, slugs)
  // classes Tailwind / tokens CSS
  if (/^[a-z0-9\-:\[\]\/%._#()!>&,*~+=]+( [a-z0-9\-:\[\]\/%._#()!>&,*~+=]+)*$/.test(s) && /[-:\[]/.test(s)) return false;
  if (/^var\(|^\d+(px|%|rem|vw|vh)/.test(s)) return false;
  return true;
}

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(tsx|ts)$/.test(f) ? [p] : [];
  });
}

const decode = (s) =>
  s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const registry = [];
let total = 0;

for (const file of walk(SECTIONS)) {
  if (SKIP_FILES.test(file)) continue;
  const src = readFileSync(file, "utf8");
  if (/^\s*["']use client["']/.test(src)) continue;
  const rel = relative(ROOT, file).split(sep).join("/");
  const page = rel.split("/")[3];
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);

  const edits = []; // { start, end, text }
  const seen = new Map();
  const keyFor = (text) => {
    const n = (seen.get(text) ?? 0) + 1;
    seen.set(text, n);
    return `${page}/${createHash("sha1").update(`${rel}|${text}|${n}`).digest("hex").slice(0, 10)}`;
  };
  const blockOf = (node) => {
    let n = node;
    let name = null;
    while (n) {
      if ((ts.isFunctionDeclaration(n) || ts.isVariableDeclaration(n)) && n.name && ts.isIdentifier(n.name) && n.parent && (ts.isSourceFile(n.parent) || ts.isVariableDeclarationList(n.parent)))
        name = n.name.text;
      n = n.parent;
    }
    return name ?? "dados";
  };
  const register = (node, kind, text) => {
    const key = keyFor(text);
    registry.push({ key, page, block: blockOf(node), kind, text, file: rel, line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1 });
    total++;
    return key;
  };
  const lit = (s) => JSON.stringify(s);
  const topLevelLazy = new Set();

  const visit = (node) => {
    // já marcado: só registra
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && (node.expression.text === "tx" || node.expression.text === "img")) {
      const [k, v] = node.arguments;
      if (k && v && ts.isStringLiteral(k) && ts.isStringLiteral(v)) {
        const text = v.text;
        seen.set(text, (seen.get(text) ?? 0) + 1);
        registry.push({ key: k.text, page, block: blockOf(node), kind: node.expression.text === "img" ? "image" : "text", text, file: rel, line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1 });
        total++;
      }
      return;
    }

    if (ts.isJsxText(node)) {
      const raw = node.getText();
      if (!/[\p{L}\p{N}]/u.test(raw)) return;
      const text = decode(raw.trim().replace(/\s*\n\s*/g, " "));
      const lead = /^[ \t]+/.test(raw) && !/^\s*\n/.test(raw) ? " " : "";
      const trail = /[ \t]+$/.test(raw) && !/\n\s*$/.test(raw) ? " " : "";
      const key = register(node, "text", text);
      edits.push({ start: node.getStart(), end: node.getEnd(), text: `${lead}{tx(${lit(key)}, ${lit(text)})}${trail}` });
      return;
    }

    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const s = node.text;
      const p = node.parent;
      let ok = false;
      let asJsxAttr = false;
      if (ts.isPropertyAssignment(p) && p.initializer === node) {
        const name = p.name && (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name)) ? p.name.text : "";
        ok = isImage(s) ? true : !EXCLUDED_PROPS.has(name) && isProse(s);
      } else if (ts.isArrayLiteralExpression(p)) {
        ok = isImage(s) || isProse(s);
      } else if (ts.isJsxAttribute(p)) {
        const name = p.name.getText();
        ok = isImage(s) ? JSX_IMG_ATTRS.has(name) : JSX_TEXT_ATTRS.has(name) && isProse(s);
        asJsxAttr = true;
      } else if (ts.isJsxExpression(p) && p.parent && (ts.isJsxElement(p.parent) || ts.isJsxFragment(p.parent))) {
        ok = isProse(s);
      } else if (ts.isConditionalExpression(p) && (p.whenTrue === node || p.whenFalse === node)) {
        ok = isProse(s) && !!p.parent && (ts.isJsxExpression(p.parent) || ts.isPropertyAssignment(p.parent));
      }
      if (!ok) return;
      const kind = isImage(s) ? "image" : "text";
      const key = register(node, kind, s);
      const call = `${kind === "image" ? "img" : "tx"}(${lit(key)}, ${lit(s)})`;
      edits.push({ start: node.getStart(), end: node.getEnd(), text: asJsxAttr ? `{${call}}` : call });
      // dado no topo do módulo → precisa ser reavaliado (lazy)
      let n = node;
      while (n.parent && !ts.isSourceFile(n.parent)) n = n.parent;
      if (ts.isVariableStatement(n)) topLevelLazy.add(n);
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  // envolve inicializadores de topo de módulo (arrays/objetos) em lazy(() => ...)
  for (const stmt of topLevelLazy) {
    for (const d of stmt.declarationList.declarations) {
      const init = d.initializer;
      if (!init || ts.isArrowFunction(init) || ts.isFunctionExpression(init)) continue;
      if (init.getText().startsWith("lazy(")) continue;
      edits.push({ start: init.getStart(), end: init.getStart(), text: "lazy(() => (" });
      edits.push({ start: init.getEnd(), end: init.getEnd(), text: "))" });
    }
  }

  if (!edits.length) continue;
  if (DRY) {
    console.log(`${rel}: ${edits.length} edições`);
    continue;
  }
  let out = src;
  for (const e of edits.sort((a, b) => b.start - a.start || b.end - a.end)) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  const needed = ["tx", "img", "lazy"].filter((f) => new RegExp(`\\b${f}\\(`).test(out));
  if (needed.length && !out.includes('from "@/lib/editable"')) {
    const m = out.match(/^(?:import[^;]+;\s*)+/m);
    const at = m ? m.index + m[0].length : 0;
    out = out.slice(0, at) + `import { ${needed.join(", ")} } from "@/lib/editable";\n` + out.slice(at);
  } else if (needed.length) {
    out = out.replace(/import \{[^}]*\} from "@\/lib\/editable";/, `import { ${needed.join(", ")} } from "@/lib/editable";`);
  }
  writeFileSync(file, out);
  console.log(`${rel}: ${edits.length} edições`);
}

// Associa cada item à seção da página onde aparece (ordem = ordem de renderização em page.tsx)
const PAGE_FILE = { home: "src/app/page.tsx", "palestras-workshops": "src/app/palestras/page.tsx" };
const sourceOf = new Map();
const wordRe = (w) => new RegExp(String.raw`\b` + w + String.raw`\b`);
const fnBody = (file, name) => {
  const key = file + "#" + name;
  if (sourceOf.has(key)) return sourceOf.get(key);
  const src = readFileSync(join(ROOT, file), "utf8");
  const m = src.match(new RegExp(String.raw`(?:function|const)\s+` + name + String.raw`\b[\s\S]*?(?=\n(?:export )?(?:async )?(?:function|const) |$)`));
  sourceOf.set(key, m ? m[0] : "");
  return sourceOf.get(key);
};
const pages = [...new Set(registry.map((r) => r.page))];
for (const page of pages) {
  const pf = PAGE_FILE[page] ?? `src/app/${page}/page.tsx`;
  const pageSrc = readFileSync(join(ROOT, pf), "utf8");
  const sections = [...pageSrc.matchAll(/<([A-Z][A-Za-z0-9]+)\s*\/>/g)].map((m) => m[1]);
  const files = [...new Set(registry.filter((r) => r.page === page).map((r) => r.file))];
  const findSection = (block, seen = new Set()) => {
    if (sections.includes(block)) return block;
    if (seen.has(block)) return null;
    seen.add(block);
    for (const f of files)
      for (const sec of sections) if (wordRe(block).test(fnBody(f, sec))) return sec;
    // usado por outro bloco auxiliar que, por sua vez, está numa seção
    for (const f of files) {
      const helpers = [...readFileSync(join(ROOT, f), "utf8").matchAll(/(?:function|const)\s+([A-Za-z0-9_]+)/g)].map((m) => m[1]);
      for (const h of helpers) if (h !== block && wordRe(block).test(fnBody(f, h))) {
        const s = findSection(h, seen);
        if (s) return s;
      }
    }
    return null;
  };
  for (const r of registry.filter((x) => x.page === page)) {
    r.section = findSection(r.block) ?? "Outros";
    r.order = sections.indexOf(r.section) === -1 ? 999 : sections.indexOf(r.section);
  }
}

if (!DRY) {
  mkdirSync(join(ROOT, "src", "content"), { recursive: true });
  writeFileSync(join(ROOT, "src", "content", "editable-registry.json"), JSON.stringify(registry, null, 1));
}
console.log(`\n${total} itens editáveis (${registry.filter((r) => r.kind === "image").length} imagens)`);
