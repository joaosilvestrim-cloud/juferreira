import { chromium } from "@playwright/test";
const B = process.argv[2] ?? "https://juferreira.vercel.app";
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(B + "/", { waitUntil: "networkidle" });
const info = await page.evaluate(async () => {
  const h2 = document.querySelectorAll("main section h2")[3];
  const r = h2.getBoundingClientRect();
  window.scrollTo(0, window.scrollY + r.top - window.innerHeight + 40); // título entrando pela base
  await new Promise((r) => setTimeout(r, 300));
  const cs = getComputedStyle(h2);
  return { motion: document.documentElement.classList.contains("jf-motion"), anim: cs.animationName, timeline: cs.animationTimeline, opacity: cs.opacity, filter: cs.filter, translate: cs.translate };
});
console.log(info);
await page.screenshot({ path: "screenshots/scroll-probe.png" });
await browser.close();
