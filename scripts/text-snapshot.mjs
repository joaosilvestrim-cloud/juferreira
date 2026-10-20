// Salva o texto visível + imagens de cada página (para comparar antes/depois de refatorações).
import { chromium } from "@playwright/test";
import { writeFileSync } from "node:fs";
const B = process.env.BASE_URL ?? "http://localhost:3000";
const out = process.argv[2] ?? "screenshots/snapshot.json";
const routes = ["/", "/ju", "/futuros-humanos", "/palestras", "/organizacoes", "/pessoas", "/ideias", "/contato"];
const b = await chromium.launch({ channel: "msedge" });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const snap = {};
for (const r of routes) {
  await p.goto(B + r, { waitUntil: "networkidle" });
  snap[r] = await p.evaluate(() => ({
    text: document.querySelector("main").innerText.replace(/\s+/g, " ").trim(),
    imgs: [...document.querySelectorAll("main img")].map((i) => decodeURIComponent((i.currentSrc || i.src).replace(/.*[?&]url=([^&]+).*/, "$1"))).sort(),
    title: document.title,
  }));
}
writeFileSync(out, JSON.stringify(snap));
console.log("ok", Object.values(snap).map((s) => s.text.length).join(","));
await b.close();
