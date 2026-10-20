// Preenche e envia os 3 formulários no navegador e confere a confirmação.
import { chromium } from "@playwright/test";
const B = process.env.BASE_URL ?? "http://localhost:3000";
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage();
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));

await page.goto(`${B}/contato?rota=palestras#formulario`, { waitUntil: "networkidle" });
const f = page.locator('form[aria-label="Formulário de contato"]');
await f.locator('input[name="nome"]').fill("TESTE AUTOMATICO UI");
await f.locator('input[name="email"]').fill("teste-ui@example.com");
await f.locator('textarea[name="contexto"]').fill("Teste de ponta a ponta pelo formulário.");
for (const el of await f.locator("[required]:not([name=nome]):not([name=email]):not([name=contexto])").all()) {
  const tag = await el.evaluate((n) => n.tagName + ":" + (n.type || ""));
  if (tag.startsWith("TEXTAREA") || tag.startsWith("INPUT:text") || tag.startsWith("INPUT:")) await el.fill("teste").catch(() => {});
}
await f.locator('button[type="submit"]').click();
await page.getByText("Mensagem enviada.").waitFor({ timeout: 15000 });
console.log("contato: OK");

// Organizações agora usa o formulário único de Contato, com a rota pré-selecionada
await page.goto(`${B}/organizacoes`, { waitUntil: "networkidle" });
await page.locator('main a[href*="rota=organizacoes"]').first().click();
await page.waitForURL(/rota=organizacoes/);
const fo = page.locator('form[aria-label="Formulário de contato"]');
await fo.locator('input[name="nome"]').fill("TESTE AUTOMATICO ORG");
await fo.locator('input[name="email"]').fill("teste-org@example.com");
await fo.locator('textarea[name="contexto"]').fill("Teste org.");
await fo.locator('button[type="submit"]').click();
await page.getByText("Mensagem enviada.").waitFor({ timeout: 15000 });
console.log("organizacoes: OK");

await page.goto(`${B}/ideias#uma-terca-feira-qualquer`, { waitUntil: "networkidle" });
await page.locator('#uma-terca-feira-qualquer input[name="email"]').fill("teste-news-ui@example.com");
await page.locator('#uma-terca-feira-qualquer input[name="consent"]').check();
await page.locator('#uma-terca-feira-qualquer button[type="submit"]').click();
await page.getByText("Inscrição registrada.").waitFor({ timeout: 15000 });
console.log("newsletter: OK");
console.log("erros:", errs);
await browser.close();
