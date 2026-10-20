// Testa: edição de textos/imagens das páginas, provas, SEO por página e usuários. Restaura tudo no fim.
import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";
import pg from "pg";

const B = process.env.BASE_URL ?? "http://localhost:3000";
const env = readFileSync(".env.local", "utf8");
const pwd = env.match(/^ADMIN_PASSWORD=(.*)$/m)[1];
const reg = JSON.parse(readFileSync("src/content/editable-registry.json", "utf8"));
const browser = await chromium.launch({ channel: "msedge" });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));
const ok = (m) => console.log("✓", m);
const db = new pg.Client({ ssl: { rejectUnauthorized: false } });
await db.connect();

async function login(p, email, pass) {
  await p.goto(`${B}/admin/login`);
  if (email) await p.fill("#email", email);
  await p.fill("#password", pass);
  await p.click("button[type=submit]");
  await p.waitForURL(`${B}/admin`);
}

const hero = reg.find((r) => r.page === "home" && r.section === "HomeHero" && r.text === "Aquilo que existe não esgota aquilo que pode existir.");
const heroAnchor = `#t-${hero.key.split("/")[1]}`;
const heroBlock = () => page.locator("#bloco-HomeHero");

try {
  await login(page, null, pwd);
  ok("login com senha mestra");

  // textos das páginas
  await page.goto(`${B}/admin/paginas/home`);
  await page.locator(`${heroAnchor} textarea`).fill("TESTE PAINEL frase editada pelo admin.");
  await heroBlock().getByRole("button", { name: "Salvar bloco" }).click();
  await heroBlock().getByText(/alteração\(ões\) salva/).waitFor();
  await page.goto(`${B}/`);
  await page.getByText("TESTE PAINEL frase editada pelo admin.").first().waitFor({ timeout: 20000 });
  ok("texto editado no painel aparece na Home");
  await page.goto(`${B}/admin/paginas?q=frase+editada`);
  await page.getByText("TESTE PAINEL frase editada").first().waitFor();
  ok("busca de frases no painel");

  // imagem
  await page.goto(`${B}/admin/paginas/home`);
  await heroBlock().locator('input[type="file"]').first().setInputFiles("public/images/ju/palco.webp");
  await page.waitForTimeout(800);
  await heroBlock().getByRole("button", { name: "Salvar bloco" }).click();
  await heroBlock().getByText(/alteração\(ões\) salva/).waitFor();
  await page.goto(`${B}/`);
  const srcs = await page.locator("main section").first().locator("img").evaluateAll((els) => els.map((e) => decodeURIComponent(e.getAttribute("src") ?? "")));
  if (!srcs.some((s) => s.includes("/midia/"))) throw new Error("imagem trocada não apareceu: " + srcs.join(" | "));
  ok("imagem trocada no painel aparece na Home");

  // provas
  await page.goto(`${B}/admin/provas`);
  const dep = page.locator("div.border-dashed", { hasText: "Adicionar em “Depoimentos”" });
  await dep.locator('textarea[name="quote"]').fill("TESTE PAINEL depoimento verificável.");
  await dep.locator('input[name="title"]').fill("Pessoa Teste");
  await dep.locator('input[name="role"]').fill("Diretora — Empresa Teste");
  await dep.getByRole("button", { name: "Adicionar" }).click();
  await dep.getByText(/Palestras já foi atualizada/).waitFor();
  const vid = page.locator("div.border-dashed", { hasText: "Adicionar em “Vídeos”" });
  await vid.locator('input[name="url"]').fill("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  await vid.locator('input[name="title"]').fill("TESTE PAINEL vídeo");
  await vid.getByRole("button", { name: "Adicionar" }).click();
  await vid.getByText(/Palestras já foi atualizada/).waitFor();
  await page.goto(`${B}/palestras`);
  await page.getByText("TESTE PAINEL depoimento verificável.").waitFor({ timeout: 20000 });
  if (!(await page.locator('iframe[src*="youtube-nocookie.com/embed/dQw4w9WgXcQ"]').count())) throw new Error("vídeo não incorporado");
  ok("depoimento e vídeo aparecem em Palestras (Ju em ação)");

  // SEO
  await page.goto(`${B}/admin/seo`);
  const ju = page.locator("details").nth(1);
  await ju.locator("summary").click();
  await ju.locator('input[name="title"]').fill("TESTE PAINEL título SEO");
  await ju.locator('textarea[name="description"]').fill("Descrição de teste do SEO.");
  await ju.getByRole("button", { name: "Salvar SEO" }).click();
  await ju.getByText("SEO salvo.").waitFor();
  await page.goto(`${B}/ju`);
  const t = await page.title();
  if (!t.includes("TESTE PAINEL título SEO")) throw new Error("título SEO não aplicado: " + t);
  ok(`SEO aplicado (título: "${t}")`);

  // usuários
  await page.goto(`${B}/admin/usuarios`);
  const nu = page.locator("div.border-dashed", { hasText: "Novo usuário" });
  await nu.locator('input[name="name"]').fill("Teste Painel");
  await nu.locator('input[name="email"]').fill("teste-painel@juferreira.com.br");
  await nu.locator('input[name="password"]').fill("senha-de-teste-123");
  await nu.getByRole("button", { name: "Criar usuário" }).click();
  await nu.getByText(/criado/).waitFor();
  const ctx2 = await browser.newContext();
  const p2 = await ctx2.newPage();
  await login(p2, "teste-painel@juferreira.com.br", "senha-de-teste-123");
  ok("novo usuário entra com e-mail e senha");
  await page.reload();
  const row = page.locator("li", { hasText: "teste-painel@juferreira.com.br" }).first();
  await row.locator("summary").click();
  await row.getByRole("button", { name: "Desativar acesso" }).click();
  await page.waitForTimeout(1500);
  await p2.goto(`${B}/admin/paginas`);
  await p2.waitForURL(/\/admin\/login/, { timeout: 15000 }).catch(() => {});
  if (!p2.url().includes("/admin/login")) throw new Error("usuário desativado continuou com acesso");
  if (await p2.getByText("Bloco 1").count()) throw new Error("usuário desativado viu conteúdo do painel");
  ok("usuário desativado perde o acesso na hora");
  await ctx2.close();
} finally {
  // restauração pelo painel (invalida o cache do site)
  try {
    await page.goto(`${B}/admin/paginas/home`);
    await page.locator(`${heroAnchor} textarea`).fill(hero.text);
    const restore = heroBlock().locator('input[type="checkbox"][name^="r:"]');
    for (const cb of await restore.all()) await cb.check();
    await heroBlock().getByRole("button", { name: "Salvar bloco" }).click();
    await heroBlock().getByText(/salva|Nada mudou/).waitFor();
    await page.goto(`${B}/admin/provas`);
    for (const label of ["Pessoa Teste", "TESTE PAINEL vídeo"]) {
      const li = page.locator("li", { hasText: label }).first();
      if (await li.count()) {
        await li.locator("summary").click();
        await li.getByRole("button", { name: "Excluir" }).click();
        await page.waitForTimeout(1500);
      }
    }
    await page.goto(`${B}/admin/seo`);
    const ju = page.locator("details").nth(1);
    await ju.locator("summary").click();
    await ju.locator('input[name="title"]').fill("");
    await ju.locator('textarea[name="description"]').fill("");
    await ju.getByRole("button", { name: "Salvar SEO" }).click();
    await ju.getByText("SEO salvo.").waitFor();
    console.log("✓ restauração pelo painel");
  } catch (e) {
    console.log("restauração pelo painel falhou:", e.message);
  }
  await db.query("delete from public.content_overrides where key = $1 or value like 'TESTE PAINEL%'", [hero.key]);
  await db.query("delete from public.content_overrides where key like 'home/%' and value like '/midia/%' and updated_at > now() - interval '1 hour'");
  await db.query("delete from public.proof_items where title in ('Pessoa Teste','TESTE PAINEL vídeo')");
  await db.query("delete from public.page_seo where path = '/ju' and coalesce(title,'') in ('', 'TESTE PAINEL título SEO')");
  await db.query("delete from public.admin_users where email = 'teste-painel@juferreira.com.br'");
  await db.end();
  console.log("erros:", errs);
  await browser.close();
}
