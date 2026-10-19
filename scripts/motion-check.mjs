// Verifica que, depois de rolar a página toda, nenhum elemento animado ficou invisível.
import { chromium } from "@playwright/test";
const BASE = process.env.BASE_URL ?? "http://localhost:3210";
const routes = process.argv.slice(2).length ? process.argv.slice(2) : ["/", "/ju", "/futuros-humanos", "/palestras", "/organizacoes", "/pessoas", "/ideias", "/contato"];
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));
page.on("console", (m) => m.type() === "error" && errs.push(m.text()));
for (const r of routes) {
  await page.goto(BASE + r, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  if (r === "/") await page.screenshot({ path: "screenshots/motion-load.png" });
  const total = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < total; y += 500) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(120);
  }
  await page.waitForTimeout(1500);
  const stuck = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll("main *").forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.opacity === "0" && el.getBoundingClientRect().height > 0 && !el.closest('[aria-hidden="true"]')) out.push(el.tagName + "." + (el.className?.baseVal ?? el.className).toString().slice(0, 40));
    });
    return out;
  });
  const count = await page.evaluate(() => [...document.querySelectorAll("[data-count]")].map((e) => e.textContent));
  console.log(r, "invisíveis:", stuck.length, stuck.slice(0, 4).join(" | "), count.length ? "contadores: " + count.join(",") : "");
}
console.log("erros:", errs.slice(0, 5));
await browser.close();
