// Testa o painel de conteúdo: configurações → site, artigo publicado → /ideias e página própria,
// referência → Ideias, newsletter (rascunho + teste para endereço de teste do Resend). Limpa tudo no fim.
import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";
import pg from "pg";

// abre o painel "+ Adicionar …" (recolhido quando já há itens) e devolve o container
async function addPanel(p, label) {
  const panel = p.locator(`[data-add-panel="${label}"]`);
  // o clique pode chegar antes da página terminar de carregar os scripts: tenta até o formulário abrir
  for (let i = 0; i < 10 && !(await panel.locator("form").count()); i++) {
    const btn = p.getByRole("button", { name: label, exact: true });
    if (await btn.count()) await btn.first().click();
    await p.waitForTimeout(400);
  }
  return panel;
}

const B = process.env.BASE_URL ?? "http://localhost:3000";
const env = readFileSync(".env.local", "utf8");
const pwd = env.match(/^ADMIN_PASSWORD=(.*)$/m)[1].replace(/^'|'$/g, "");
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));
page.on("dialog", (d) => d.accept()); // confirmações de excluir
const ok = (m) => console.log("✓", m);

// guarda configurações atuais para restaurar
const db = new pg.Client({ ssl: { rejectUnauthorized: false } });
await db.connect();
const before = (await db.query("select key, value from public.site_settings")).rows;

try {
  await page.goto(`${B}/admin/login`);
  await page.fill("#password", pwd);
  await page.click("button[type=submit]");
  await page.waitForURL(`${B}/admin`);
  ok("login");

  // Configurações
  await page.goto(`${B}/admin/configuracoes`);
  await page.fill('input[name="email"]', "teste-config@juferreira.com.br");
  await page.fill('input[name="instagram"]', "https://www.instagram.com/teste-config");
  await page.click("text=Salvar configurações");
  await page.getByText("Configurações salvas").waitFor();
  await page.goto(`${B}/contato`);
  await page.getByText("teste-config@juferreira.com.br").first().waitFor({ timeout: 15000 });
  const ig = await page.locator('footer a:has-text("Instagram")').getAttribute("href");
  if (!ig?.includes("teste-config")) throw new Error("rodapé sem Instagram configurado");
  ok("configurações aparecem no site (e-mail em Contato, Instagram no rodapé)");
  const red = await page.request.get(`${B}/ir/epic247`, { maxRedirects: 0 });
  ok(`/ir/epic247 → ${red.headers().location?.replace(B, "")} (sem URL = formulário)`);

  // Artigo
  await page.goto(`${B}/admin/artigos/novo`);
  await page.fill('input[name="title"]', "TESTE CMS Artigo publicado");
  await page.fill('input[name="slug"]', "teste-cms-artigo");
  await page.fill('textarea[name="excerpt"]', "Resumo do artigo de teste.");
  // editor de texto completo
  await page.locator(".ProseMirror").first().click();
  await page.keyboard.type("Primeiro parágrafo com ");
  await page.getByRole("button", { name: "Negrito" }).first().click();
  await page.keyboard.type("negrito");
  await page.getByRole("button", { name: "Negrito" }).first().click();
  await page.keyboard.press("Enter");
  await page.getByRole("button", { name: "Título", exact: true }).first().click();
  await page.keyboard.type("Um subtítulo");
  await page.keyboard.press("Enter");
  await page.getByRole("button", { name: "Citação" }).first().click();
  await page.keyboard.type("Uma citação forte.");
  await page.check('input[name="territories"][value="futuros"]');
  await page.check('input[name="status"][value="publicado"]');
  await page.check('input[name="featured"]');
  await page.setInputFiles('input[name="cover"]', "public/images/ju/palco.webp");
  await page.waitForTimeout(800); // redução da imagem no navegador
  await page.click("text=Criar artigo");
  await page.waitForURL(/\/admin\/artigos\/\d+/);
  ok("artigo criado e publicado");
  await page.goto(`${B}/ideias/teste-cms-artigo`);
  await page.getByRole("heading", { name: "TESTE CMS Artigo publicado" }).waitFor();
  await page.getByText("Uma citação forte.").waitFor();
  if (!(await page.locator("article strong", { hasText: "negrito" }).count())) throw new Error("negrito não renderizado");
  if (!(await page.locator("article h2", { hasText: "Um subtítulo" }).count())) throw new Error("subtítulo não renderizado");
  if (!(await page.locator("article blockquote", { hasText: "Uma citação forte." }).count())) throw new Error("citação não renderizada");
  const cover = await page.locator('article img').first().getAttribute("src");
  const coverRes = await page.request.get(B + (cover?.startsWith("/") ? cover : new URL(cover).pathname + new URL(cover).search));
  if (!cover?.includes("midia") || coverRes.status() !== 200) throw new Error("capa enviada não carregou: " + cover);
  ok("página do artigo /ideias/teste-cms-artigo (com capa enviada pelo painel)");
  await page.goto(`${B}/ideias`);
  await page.getByText("TESTE CMS Artigo publicado").first().waitFor();
  ok("artigo aparece como protagonista em /ideias");
  await page.goto(`${B}/`);
  await page.getByText("TESTE CMS Artigo publicado").first().waitFor();
  ok("artigo aparece na Home");

  // Referência
  await page.goto(`${B}/admin/referencias`);
  const add = await addPanel(page, "Adicionar em “Na mesa agora”");
  await add.locator('input[name="title"]').fill("TESTE CMS Livro");
  await add.locator('input[name="author"]').fill("Autora Teste");
  await add.locator("button", { hasText: "Adicionar" }).click();
  await page.getByText("Referência salva").first().waitFor();
  await page.goto(`${B}/ideias`);
  await page.getByText("TESTE CMS Livro").first().waitFor();
  ok("referência aparece em Ideias");

  // Newsletter
  await page.goto(`${B}/admin/newsletter/nova`);
  await page.fill('input[name="subject"]', "TESTE CMS Edição");
  await page.locator(".ProseMirror").first().click();
  await page.keyboard.type("Olá. Esta é uma edição de teste.");
  await page.click("text=Criar rascunho");
  await page.waitForURL(/\/admin\/newsletter\/\d+/);
  await page.locator('iframe[title="Prévia do e-mail"]').waitFor();
  ok("edição criada com prévia");
  await page.fill('input[name="test_to"]', "delivered@resend.dev");
  await page.getByRole("button", { name: "Enviar teste" }).click();
  await page.getByText(/Teste enviado|Não foi possível/).waitFor({ timeout: 60000 });
  console.log("  envio de teste:", await page.getByText(/Teste enviado|Não foi possível/).first().textContent());

  // descadastro com token inválido
  const bad = await page.request.get(`${B}/newsletter/sair?e=x@y.com&t=errado`);
  ok(`descadastro com token inválido → ${bad.status()} (página de link inválido)`);
} finally {
  // limpeza pelo próprio painel (as ações invalidam o cache do site); o banco é a garantia final
  try {
    const art = (await db.query("select id from public.articles where slug = 'teste-cms-artigo'")).rows[0];
    if (art) {
      await page.goto(`${B}/admin/artigos/${art.id}`);
      await page.click("text=Excluir este artigo");
      await page.waitForURL(`${B}/admin/artigos`);
    }
    await page.goto(`${B}/admin/referencias`);
    const ref = page.locator("li", { hasText: "TESTE CMS Livro" }).first();
    if (await ref.count()) {
      await ref.locator("summary").click();
      await ref.locator("button", { hasText: "Excluir" }).click();
      await page.waitForTimeout(1500);
    }
    const iss = (await db.query("select id from public.newsletter_issues where subject = 'TESTE CMS Edição'")).rows[0];
    if (iss) {
      await page.goto(`${B}/admin/newsletter/${iss.id}`);
      await page.click("text=Excluir rascunho");
      await page.waitForURL(`${B}/admin/newsletter`);
    }
    // restaura configurações e salva pelo painel
    await db.query("delete from public.site_settings");
    for (const r of before) await db.query("insert into public.site_settings (key, value) values ($1,$2)", [r.key, r.value]);
    await page.goto(`${B}/admin/configuracoes`);
    await page.click("text=Salvar configurações");
    await page.getByText("Configurações salvas").waitFor();
    console.log("✓ limpeza pelo painel");
  } catch (e) {
    console.log("limpeza pelo painel falhou:", e.message);
  }
  await db.query("delete from public.media where id in (select cover_id from public.articles where slug = 'teste-cms-artigo')");
  await db.query("delete from public.articles where slug = 'teste-cms-artigo'");
  await db.query("delete from public.reading_refs where title = 'TESTE CMS Livro'");
  await db.query("delete from public.newsletter_issues where subject = 'TESTE CMS Edição'");
  await db.end();
  console.log("erros:", errs);
  await browser.close();
}
