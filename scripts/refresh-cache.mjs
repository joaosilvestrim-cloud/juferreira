// Força o site a reler configurações/artigos/referências do banco, usando as ações do painel.
import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";
const B = process.env.BASE_URL ?? "http://localhost:3000";
const pwd = readFileSync(".env.local", "utf8").match(/^ADMIN_PASSWORD=(.*)$/m)[1];
const b = await chromium.launch({ channel: "msedge" });
const p = await b.newPage();
await p.goto(`${B}/admin/login`); await p.fill("#password", pwd); await p.click("button[type=submit]"); await p.waitForURL(`${B}/admin`);
await p.goto(`${B}/admin/configuracoes`); await p.click("text=Salvar configurações"); await p.getByText("Configurações salvas").waitFor();
// artigo e referência temporários, criados e excluídos, para invalidar os caches de artigos e referências
await p.goto(`${B}/admin/artigos/novo`); await p.fill('input[name="title"]', "zz-refresh"); await p.fill('input[name="slug"]', "zz-refresh");
await p.click("text=Criar artigo"); await p.waitForURL(/\/admin\/artigos\/\d+/);
await p.click("text=Excluir este artigo"); await p.waitForURL(`${B}/admin/artigos`);
await p.goto(`${B}/admin/referencias`);
const add = p.locator("div", { hasText: "Adicionar em “Na mesa agora”" }).last();
await add.locator('input[name="title"]').fill("zz-refresh"); await add.locator("button", { hasText: "Adicionar" }).click();
await p.getByText("Referência salva").first().waitFor(); await p.reload();
const ref = p.locator("li", { hasText: "zz-refresh" }).first(); await ref.locator("summary").click(); await ref.locator("button", { hasText: "Excluir" }).click();
await p.waitForTimeout(1500);
console.log("cache atualizado");
await b.close();
