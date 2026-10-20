// Passa por todas as telas do painel (desktop e celular): confere erros, clica em cada item do menu e tira screenshots.
// Uso: BASE_URL=http://localhost:3210 node scripts/admin-shots.mjs   → screenshots/admin/<viewport>-<tela>.png
import { chromium } from "@playwright/test";
import { mkdirSync, readFileSync } from "node:fs";
const B = process.env.BASE_URL ?? "http://localhost:3000";
const pwd = readFileSync(".env.local", "utf8").match(/^ADMIN_PASSWORD=(.*)$/m)[1];
const ROUTES = [
  "", "paginas", "paginas/home", "paginas/futuros-humanos", "artigos", "artigos/novo", "referencias", "provas",
  "newsletter", "newsletter/nova", "seo", "usuarios", "configuracoes",
];
mkdirSync("screenshots/admin", { recursive: true });
const b = await chromium.launch({ channel: "msedge" });
let fail = 0;
for (const [vp, size] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const p = await b.newPage({ viewport: size });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message));
  p.on("console", (m) => m.type() === "error" && !m.text().startsWith("Failed to load resource") && errs.push(m.text()));
  // falhas de rede com o endereço (o Vercel Analytics só existe no ar, então é ignorado localmente)
  p.on("response", (r) => r.status() >= 400 && !r.url().includes("/_vercel/insights") && errs.push(`${r.status()} ${r.url()}`));
  await p.goto(`${B}/admin/login`);
  await p.fill("#password", pwd);
  await p.click("button[type=submit]");
  await p.waitForURL(`${B}/admin`);
  for (const r of ROUTES) {
    const res = await p.goto(`${B}/admin/${r}`, { waitUntil: "networkidle" });
    const status = res?.status();
    const h1 = await p.locator("h1").first().textContent().catch(() => null);
    const scrollX = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    const bad = status !== 200 || !h1 || scrollX;
    if (bad) fail++;
    console.log(`${bad ? "✗" : "✓"} ${vp} /admin/${r} → ${status} · "${h1?.trim()}"${scrollX ? " · ROLAGEM LATERAL" : ""}`);
    await p.screenshot({ path: `screenshots/admin/${vp}-${r.replace(/\//g, "-") || "conversas"}.png`, fullPage: vp === "desktop" });
  }
  // cada item do menu leva à tela certa e fica marcado
  await p.goto(`${B}/admin`);
  const links = await p.locator('nav[aria-label="Painel"] a').evaluateAll((as) => as.map((a) => a.getAttribute("href")));
  for (const href of links) {
    await p.locator(`nav[aria-label="Painel"] a[href="${href}"]`).click();
    await p.waitForURL(`${B}${href}`);
    const cur = await p.locator('nav[aria-label="Painel"] a[aria-current="page"]').getAttribute("href");
    if (cur !== href) { fail++; console.log(`✗ menu ${href}: marcado ${cur}`); }
  }
  console.log(`✓ ${vp}: ${links.length} itens do menu navegam e ficam marcados`);
  if (errs.length) { fail++; console.log(`✗ ${vp} erros:`, errs); }
  await p.close();
}
await b.close();
console.log(fail ? `${fail} problema(s)` : "Tudo certo.");
process.exit(fail ? 1 : 0);
