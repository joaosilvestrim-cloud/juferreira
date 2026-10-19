// Screenshot da seção que contém um texto. Uso: node scripts/shot-el.mjs /rota "texto" saida.png
import { chromium } from "@playwright/test";
const [route, text, out] = process.argv.slice(2);
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce" });
await page.goto("http://localhost:3210" + route, { waitUntil: "networkidle" });
const sec = page.locator("section", { hasText: text }).last();
await sec.scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await sec.screenshot({ path: out });
await browser.close();
