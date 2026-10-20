// Testa: Vídeos e áudios (cadastro e aparição em Home/Ju/Palestras/Ideias), ocultar/mostrar bloco,
// histórico com "Desfazer", biblioteca de imagens e Visão geral. Limpa tudo no fim.
import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";
import pg from "pg";

const B = process.env.BASE_URL ?? "http://localhost:3000";
const pwd = readFileSync(".env.local", "utf8").match(/^ADMIN_PASSWORD=(.*)$/m)[1];
const reg = JSON.parse(readFileSync("src/content/editable-registry.json", "utf8"));
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));
page.on("dialog", (d) => d.accept());
const ok = (m) => console.log("✓", m);
const db = new pg.Client({ ssl: { rejectUnauthorized: false } });
await db.connect();
const T = "TESTE MIDIA";

try {
  await page.goto(`${B}/admin/login`);
  await page.fill("#password", pwd);
  await page.click("button[type=submit]");
  await page.waitForURL(`${B}/admin`);

  // 1. vídeo do YouTube em todas as páginas
  await page.goto(`${B}/admin/videos`);
  const add = page.locator("section.border-dashed");
  await add.locator('input[name="url"]').fill("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  await add.locator('select[name="format"]').selectOption("entrevista");
  await add.locator('input[name="title"]').fill(`${T} entrevista`);
  await add.locator('input[name="outlet"]').fill("Programa Teste");
  for (const p of ["home", "ju", "palestras", "ideias"]) await add.locator(`input[name="placements"][value="${p}"]`).check();
  await add.getByRole("button", { name: "Adicionar" }).click();
  await add.getByText(/Já aparece em: Home, Ju, Palestras, Ideias, com player/).waitFor();
  ok("vídeo cadastrado com 4 lugares");
  for (const path of ["/", "/ju", "/palestras", "/ideias"]) {
    await page.goto(`${B}${path}`);
    await page.getByText(`${T} entrevista`).first().waitFor({ timeout: 20000 });
    if (!(await page.locator('iframe[src*="youtube-nocookie.com/embed/dQw4w9WgXcQ"]').count())) throw new Error(`sem player em ${path}`);
  }
  ok("player aparece em Home, Ju, Palestras e Ideias");

  // 2. podcast do Spotify só em Ideias
  await page.goto(`${B}/admin/videos`);
  await add.locator('input[name="url"]').fill("https://open.spotify.com/episode/4rOoJ6Egrf8K2IrywzwOMk");
  await add.locator('select[name="format"]').selectOption("podcast");
  await add.locator('input[name="title"]').fill(`${T} podcast`);
  await add.locator('input[name="placements"][value="ideias"]').check();
  await add.getByRole("button", { name: "Adicionar" }).click();
  await add.getByText(/Já aparece em: Ideias/).waitFor();
  await page.goto(`${B}/ideias`);
  await page.getByText(`${T} podcast`).waitFor({ timeout: 20000 });
  if (!(await page.locator('iframe[src*="open.spotify.com/embed/episode/"]').count())) throw new Error("sem player do Spotify");
  await page.goto(`${B}/palestras`);
  if (await page.getByText(`${T} podcast`).count()) throw new Error("podcast apareceu onde não foi marcado");
  ok("podcast do Spotify só em Ideias, com player");

  // 3. ocultar e mostrar um bloco
  await page.goto(`${B}/admin/paginas/home`);
  const tensao = page.locator("#bloco-HomeTensao");
  await tensao.getByRole("button", { name: "Ocultar este bloco" }).click();
  await tensao.getByText("Oculto no site").waitFor();
  await page.goto(`${B}/`);
  await page.waitForTimeout(500);
  if (await page.getByText("Mas mudança não é direção", { exact: false }).count()) {
    // o texto pode estar quebrado em vários elementos; confere pelo aria-label da seção
  }
  if (await page.locator('section[aria-label="A tensão"]').count()) throw new Error("bloco oculto continua na Home");
  ok("bloco ocultado some da Home");
  await page.goto(`${B}/admin/paginas/home`);
  await tensao.getByRole("button", { name: "Mostrar no site" }).click();
  await tensao.getByRole("button", { name: "Ocultar este bloco" }).waitFor();
  await page.goto(`${B}/`);
  await page.locator('section[aria-label="A tensão"]').waitFor({ timeout: 20000 });
  ok("bloco volta ao mostrar");

  // 4. editar um texto e desfazer pelo histórico
  const hero = reg.find((r) => r.page === "home" && r.section === "HomeHero" && r.text === "Aquilo que existe não esgota aquilo que pode existir.");
  await page.goto(`${B}/admin/paginas/home`);
  await page.locator(`#t-${hero.key.split("/")[1]} textarea`).fill(`${T} frase editada.`);
  const heroBlock = page.locator("#bloco-HomeHero");
  await heroBlock.getByRole("button", { name: "Salvar bloco" }).click();
  await heroBlock.getByText(/alteração\(ões\) salva/).waitFor();
  await page.goto(`${B}/`);
  await page.getByText(`${T} frase editada.`).first().waitFor({ timeout: 20000 });
  await page.goto(`${B}/admin/paginas/home`);
  await heroBlock.locator("summary", { hasText: "Histórico" }).click();
  await heroBlock.locator("li", { hasText: `${T} frase editada.` }).first().getByRole("button", { name: "Desfazer" }).click();
  await page.waitForTimeout(1500);
  await page.goto(`${B}/`);
  await page.getByText("Aquilo que existe não esgota aquilo que pode existir.").first().waitFor({ timeout: 20000 });
  if (await page.getByText(`${T} frase editada.`).count()) throw new Error("desfazer não restaurou o texto");
  ok("texto editado e desfeito pelo histórico");

  // 5. biblioteca de imagens
  await page.goto(`${B}/admin/imagens`, { waitUntil: "networkidle" });
  const before = await page.locator("ul li img").count();
  await page.locator('input[type="file"]').setInputFiles("public/images/ju/palco.webp");
  await page.getByRole("button", { name: "Enviar" }).and(page.locator(":enabled")).click();
  await page.waitForFunction((n) => document.querySelectorAll("ul li img").length > n, before, { timeout: 20000 });
  ok("imagem enviada para a biblioteca");
  const first = page.locator("ul li").filter({ hasText: "Não está em uso" }).first();
  await first.getByRole("button", { name: "Excluir" }).click();
  await page.waitForFunction((n) => document.querySelectorAll("ul li img").length === n, before, { timeout: 20000 });
  ok("imagem sem uso excluída");

  // 6. visão geral
  await page.goto(`${B}/admin/visao-geral`);
  await page.getByText("Checklist do site").waitFor();
  await page.getByText("Vídeo em Palestras").waitFor();
  ok("visão geral com checklist");

  // 7. excluir vídeos pelo painel (limpa o cache do site)
  await page.goto(`${B}/admin/videos`);
  for (let i = 0; i < 2; i++) {
    const li = page.locator("li", { hasText: T }).first();
    await li.locator("summary").click();
    await li.getByRole("button", { name: "Excluir" }).click();
    await page.waitForTimeout(1500);
    await page.reload();
  }
  await page.goto(`${B}/palestras`);
  if (await page.getByText(`${T} entrevista`).count()) throw new Error("vídeo excluído continua em Palestras");
  ok("vídeos excluídos saem do site");
} finally {
  await db.query("delete from public.media_items where title like $1", [`${T}%`]);
  await db.query("delete from public.content_overrides where key = 'hide:HomeTensao' or value like $1", [`${T}%`]);
  await db.query("delete from public.content_history where new_value like $1 or old_value like $1 or key = 'hide:HomeTensao'", [`${T}%`]);
  await db.end();
  console.log("erros:", errs);
  await browser.close();
}
