// Testa o editor de artigos de ponta a ponta: usa cada botão de formatação, publica e confere no site
// (estrutura e aparência: negrito, itálico, sublinhado, riscado, títulos, listas, citação, link, centralizar, linha).
import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";
import pg from "pg";

const B = process.env.BASE_URL ?? "http://localhost:3000";
const pwd = readFileSync(".env.local", "utf8").match(/^ADMIN_PASSWORD=(.*)$/m)[1];
const T = `TESTE FORMATACAO ${Date.now()}`;
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));
page.on("dialog", (d) => d.accept(d.type() === "prompt" ? (d.message().includes("Endereço") ? "https://exemplo.org/teste" : "") : undefined));
const ok = (m) => console.log("✓", m);
const fail = [];
const check = (cond, m) => (cond ? ok(m) : fail.push(m));

try {
  await page.goto(`${B}/admin/login`);
  await page.fill("#password", pwd);
  await page.click("button[type=submit]");
  await page.waitForURL(`${B}/admin`);
  await page.goto(`${B}/admin/artigos/novo`, { waitUntil: "networkidle" });
  await page.fill('input[name="title"]', T);

  const ed = page.locator(".ProseMirror");
  const btn = (name) => page.getByRole("button", { name, exact: true }).click();
  await ed.click();
  const k = page.keyboard;
  await k.type("Texto com ");
  await btn("Negrito"); await k.type("negrito"); await btn("Negrito");
  await k.type(", ");
  await btn("Itálico"); await k.type("italico"); await btn("Itálico");
  await k.type(", ");
  await btn("Sublinhado"); await k.type("sublinhado"); await btn("Sublinhado");
  await k.type(" e ");
  await btn("Riscado"); await k.type("riscado"); await btn("Riscado");
  await k.type(", ");
  await btn("Vermelho (destaque)"); await k.type("vermelho"); await btn("Vermelho (destaque)");
  await k.type(". Veja o site");
  // link: seleciona a palavra "site" e aplica
  await k.down("Shift"); for (let i = 0; i < 4; i++) await k.press("ArrowLeft"); await k.up("Shift");
  await btn("Link");
  // espera a janela do link fechar e o link existir antes de seguir digitando
  await page.waitForFunction(() => document.querySelector('input[name="body"]')?.value.includes("<a "), null, { timeout: 10000 });
  const dbg = async (l) => process.env.DEBUG && console.log(l, (await page.locator('input[name="body"]').inputValue()).slice(-200));
  await dbg("link:");
  await k.press("End");
  await dbg("End:");
  await k.press("Enter");
  await dbg("Enter:");
  await btn("Título"); await k.type("Um titulo"); await k.press("Enter");
  await btn("Subtítulo"); await k.type("Um subtitulo"); await k.press("Enter");
  await btn("Lista com marcadores"); await k.type("item um"); await k.press("Enter"); await k.type("item dois"); await k.press("Enter"); await k.press("Enter");
  await btn("Lista numerada"); await k.type("passo um"); await k.press("Enter"); await k.type("passo dois"); await k.press("Enter"); await k.press("Enter");
  await btn("Citação"); await k.type("Uma citacao forte."); await k.press("Enter"); await k.press("Enter");
  await btn("Linha divisória");
  await k.type("Paragrafo centralizado"); await btn("Centralizar");
  if (process.env.DEBUG) console.log("HTML do editor:", await page.locator('input[name="body"]').inputValue());
  await page.locator('input[name="status"][value="publicado"]').check();
  await page.getByRole("button", { name: /Salvar|Publicar|Criar/ }).last().click();
  await page.waitForURL(/\/admin\/artigos\/\d+/, { timeout: 20000 }).catch(async () => {
    console.log("  não salvou; mensagens:", await page.locator("[role=alert],[role=status]").allTextContents(), page.url());
  });
  const slug = await page.locator('input[name="slug"]').first().inputValue();
  const id = page.url().match(/artigos\/(\d+)/)?.[1];
  check(Boolean(slug && id), `artigo salvo e publicado (/ideias/${slug})`);

  // site
  await page.goto(`${B}/ideias/${slug}`, { waitUntil: "networkidle" });
  const r = await page.evaluate(() => {
    const art = document.querySelector(".jf-article");
    const cs = (sel, prop) => {
      const el = art?.querySelector(sel);
      return el ? getComputedStyle(el)[prop] : null;
    };
    return {
      strong: art?.querySelector("strong")?.textContent, strongW: cs("strong", "fontWeight"), bodyW: art ? getComputedStyle(art).fontWeight : null,
      em: art?.querySelector("em")?.textContent, emStyle: cs("em", "fontStyle"),
      u: art?.querySelector("u")?.textContent, uDeco: cs("u", "textDecorationLine"),
      mark: art?.querySelector("mark")?.textContent, markColor: cs("mark", "color"), markBg: cs("mark", "backgroundColor"),
      s: art?.querySelector("s")?.textContent, sDeco: cs("s", "textDecorationLine"),
      a: art?.querySelector("a")?.getAttribute("href"), aTarget: art?.querySelector("a")?.getAttribute("target"), aColor: cs("a", "color"),
      h2: art?.querySelector("h2")?.textContent, h2Size: cs("h2", "fontSize"), h3: art?.querySelector("h3")?.textContent, h3Size: cs("h3", "fontSize"),
      ul: art?.querySelectorAll("ul li").length, ulStyle: cs("ul", "listStyleType"),
      ol: art?.querySelectorAll("ol li").length, olStyle: cs("ol", "listStyleType"),
      quote: art?.querySelector("blockquote")?.textContent, quoteBorder: cs("blockquote", "borderLeftWidth"),
      hr: Boolean(art?.querySelector("hr")),
      center: [...(art?.querySelectorAll("p") ?? [])].some((p) => getComputedStyle(p).textAlign === "center"),
      font: art ? getComputedStyle(art).fontFamily : null,
    };
  });
  check(r.strong === "negrito" && Number(r.strongW) >= 600, `negrito (peso ${r.strongW} contra ${r.bodyW} do texto)`);
  check(r.em === "italico" && r.emStyle === "italic", "itálico");
  check(r.u === "sublinhado" && r.uDeco?.includes("underline"), "sublinhado");
  check(r.mark === "vermelho" && r.markColor === "rgb(184, 12, 16)", `vermelho (cor ${r.markColor}, fundo ${r.markBg})`);
  check(r.s === "riscado" && r.sDeco?.includes("line-through"), "riscado");
  check(r.a === "https://exemplo.org/teste" && r.aTarget === "_blank", `link (abre em nova aba, cor ${r.aColor})`);
  check(r.h2 === "Um titulo" && parseFloat(r.h2Size) > 24, `título (${r.h2Size})`);
  check(r.h3 === "Um subtitulo" && parseFloat(r.h3Size) > 20, `subtítulo (${r.h3Size})`);
  check(r.ul === 2 && r.ulStyle === "disc", "lista com marcadores");
  check(r.ol === 2 && r.olStyle === "decimal", "lista numerada");
  check(r.quote?.includes("Uma citacao forte.") && parseFloat(r.quoteBorder) > 0, "citação");
  check(r.hr, "linha divisória");
  check(r.center, "parágrafo centralizado");
  console.log("  fonte do corpo no site:", r.font?.split(",")[0]);

  // limpeza pelo painel (atualiza o cache do site)
  if (id) {
    await page.goto(`${B}/admin/artigos/${id}`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Excluir este artigo" }).click();
    await page.waitForURL(`${B}/admin/artigos`, { timeout: 15000 }).catch(() => {});
  }
} catch (e) {
  fail.push("erro: " + String(e.message).slice(0, 300));
} finally {
  const db = new pg.Client({ ssl: { rejectUnauthorized: false } });
  await db.connect();
  await db.query("delete from public.articles where title like 'TESTE FORMATACAO%'");
  await db.end();
  if (fail.length) console.log("✗ falhou:", fail);
  console.log("erros:", errs);
  await browser.close();
  process.exit(fail.length ? 1 : 0);
}
