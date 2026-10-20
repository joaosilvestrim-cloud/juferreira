// QA completo do site: rode com o servidor no ar.  BASE_URL=http://localhost:3000 npm run qa
// Executa: animações (nada invisível, traços desenhados), formulários de ponta a ponta e admin.
import { spawnSync } from "node:child_process";
const steps = [
  ["Animações e conteúdo visível", "scripts/motion-check.mjs"],
  ["Formulários (Contato, Organizações, newsletter)", "scripts/forms-check.mjs"],
  ["Painel /admin", "scripts/admin-check.mjs"],
  ["Painel de conteúdo (configurações, artigos, referências, newsletter)", "scripts/cms-check.mjs"],
];
let fail = 0;
for (const [name, file] of steps) {
  console.log(`\n▶ ${name}`);
  const r = spawnSync(process.execPath, ["--env-file=.env.local", file], { stdio: "inherit", env: process.env });
  if (r.status !== 0) { fail++; console.log(`✗ ${name} falhou`); } else console.log(`✓ ${name}`);
}
// limpa registros de teste do banco
spawnSync(process.execPath, ["--env-file=.env.local", "scripts/db-peek.mjs", "--limpar-testes"], { stdio: "ignore" });
console.log(fail ? `\n${fail} etapa(s) com falha` : "\nTudo certo.");
process.exit(fail ? 1 : 0);
