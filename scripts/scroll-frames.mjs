// Captura quadros durante a rolagem para ver as animações (sem reduced-motion).
import { chromium } from "@playwright/test";
const B = process.env.BASE_URL ?? "http://localhost:3000";
const route = process.argv[2] ?? "/";
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(B + route, { waitUntil: "networkidle" });
await page.addStyleTag({ content: "html{scroll-behavior:auto!important}" });
await page.waitForTimeout(1200);
const ys = (process.argv[3] ?? "1100,1500,2900,3300,5200,5600").split(",").map(Number);
let i = 0;
for (const y of ys) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(250);
  await page.screenshot({ path: `screenshots/frame-${i++}.png` });
}
await browser.close();
