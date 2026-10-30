// Conversão única: textos de listas/cartões exibidos no JSX ({f.d}, {m}, {x.t}) passam por rich(),
// que desenha destaques do painel (vermelho, itálico, negrito, quebra). Strings sem destaque continuam iguais.
//   node scripts/codemod-wrap-rich.mjs [--dry]
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import ts from "typescript";

const ROOT = process.cwd();
const DRY = process.argv.includes("--dry");
const SKIP_TAGS = new Set(["text", "tspan", "desc", "title", "option", "textarea", "style", "script"]);
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : /\.tsx$/.test(f) ? [join(d, f)] : []));
let total = 0;
for (const file of walk(join(ROOT, "src", "components", "sections"))) {
  const src = readFileSync(file, "utf8");
  if (/^\s*["']use client["']/.test(src)) continue;
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  const tagOf = (el) => (ts.isJsxElement(el) ? el.openingElement.tagName.getText() : "");
  const visit = (n) => {
    if (ts.isJsxExpression(n) && n.expression && ts.isJsxElement(n.parent) && !SKIP_TAGS.has(tagOf(n.parent))) {
      const e = n.expression;
      if (ts.isIdentifier(e) || ts.isPropertyAccessExpression(e) || ts.isElementAccessExpression(e)) {
        const t = e.getText();
        if (!/^(children|props\.children)$/.test(t)) edits.push({ start: e.getStart(), end: e.getEnd(), text: `rich(${t})` });
      }
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  if (!edits.length) continue;
  let out = src;
  for (const e of edits.sort((a, b) => b.start - a.start)) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  if (/import \{[^}]*\} from "@\/lib\/editable";/.test(out))
    out = out.replace(/import \{([^}]*)\} from "@\/lib\/editable";/, (m, names) => {
      const set = new Set(names.split(",").map((s) => s.trim()).filter(Boolean));
      set.add("rich");
      return `import { ${[...set].join(", ")} } from "@/lib/editable";`;
    });
  else out = `import { rich } from "@/lib/editable";\n` + out;
  if (!DRY) writeFileSync(file, out);
  total += edits.length;
  console.log(`${relative(ROOT, file).split(sep).join("/")}: ${edits.length}`);
}
console.log(`\n${total} pontos de exibição passam por rich()`);
