// Testa o fluxo do /admin (login errado, login certo, status, CSV, sair). Lê a senha do .env.local sem imprimir.
import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";
const B = process.env.BASE_URL ?? "http://localhost:3000";
const pwd = readFileSync(".env.local", "utf8").match(/^ADMIN_PASSWORD=(.*)$/m)[1].replace(/^'|'$/g, "");
const browser = await chromium.launch({ channel: "msedge" });
const ctx = await browser.newContext({ acceptDownloads: true, viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));

// contato de teste
await page.request.post(`${B}/api/contato`, { data: { origin: "contato", rota: "palestras", nome: "TESTE AUTOMATICO ADMIN", email: "teste-admin@example.com", contexto: "mensagem de teste do admin", evento: "Convenção X", publico: "300" } });

await page.goto(`${B}/admin`);
console.log("sem login →", new URL(page.url()).pathname);
const api = await page.request.get(`${B}/api/admin/export?type=contatos`);
console.log("export sem login →", api.status());

await page.fill("#password", "senha-errada");
await page.click("button[type=submit]");
await page.getByText("Senha incorreta.").waitFor();
console.log("senha errada → mensagem ok");

await page.fill("#password", pwd);
await page.click("button[type=submit]");
await page.waitForURL(`${B}/admin`);
await page.getByText("TESTE AUTOMATICO ADMIN").first().waitFor();
console.log("login → painel com o contato de teste");
await page.screenshot({ path: "screenshots/admin.png", fullPage: true });

const card = page.locator("li", { hasText: "TESTE AUTOMATICO ADMIN" }).first();
await card.locator("select").selectOption("respondido");
await page.waitForTimeout(1500);
await page.reload();
console.log("status após salvar →", await page.locator("li", { hasText: "TESTE AUTOMATICO ADMIN" }).first().locator("select").inputValue());

const [dl] = await Promise.all([page.waitForEvent("download"), page.click("text=Exportar CSV")]);
const csv = readFileSync(await dl.path(), "utf8");
console.log("CSV:", dl.suggestedFilename(), "| linhas:", csv.trim().split("\r\n").length, "| tem teste:", csv.includes("TESTE AUTOMATICO ADMIN"));

await page.click(`a[href="/admin?tab=newsletter"]`);
await page.waitForURL(/tab=newsletter/);
console.log("aba newsletter ok");
await page.click("text=Sair");
await page.waitForURL(/admin\/login/);
console.log("sair → login");
console.log("erros:", errs);
await browser.close();
