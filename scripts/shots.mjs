// Captura screenshots de página inteira para QA visual.
// Uso: node scripts/shots.mjs [rota ...]  (BASE_URL padrão http://localhost:3210)
// Saída: screenshots/<viewport>/<rota>.png  — usa o Microsoft Edge instalado (channel msedge).
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const ROUTES = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["/", "/ju", "/futuros-humanos", "/palestras", "/organizacoes", "/pessoas", "/ideias", "/contato"];
const VIEWPORTS = (process.env.VP ?? "desktop,mobile").split(",");
const SIZES = {
  desktop: { width: 1440, height: 1000 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 },
};

const browser = await chromium.launch({ channel: "msedge" });
for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: SIZES[vp], deviceScaleFactor: 1, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  mkdirSync(`screenshots/${vp}`, { recursive: true });
  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    // captura de página inteira: renderiza todas as seções (content-visibility pularia as fora da tela)
    await page.addStyleTag({ content: "main section{content-visibility:visible!important}" });
    // força carregar imagens lazy
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    const name = route === "/" ? "home" : route.slice(1).replace(/\//g, "_");
    await page.screenshot({ path: `screenshots/${vp}/${name}.png`, fullPage: true });
    console.log(`${vp} ${route}${overflow ? "  ⚠ overflow horizontal" : ""}${errors.length ? `  ⚠ ${errors.length} erro(s): ${errors.slice(0, 2).join(" | ")}` : ""}`);
    errors.length = 0;
  }
  await ctx.close();
}
await browser.close();
