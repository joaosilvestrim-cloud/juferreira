import { chromium } from "@playwright/test";
const B = process.env.BASE_URL ?? "http://localhost:3300";
const b = await chromium.launch({ channel: "msedge" });
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
for (const r of ["/organizacoes", "/pessoas"]) {
  await p.goto(B + r, { waitUntil: "networkidle" });
  const before = await p.evaluate(() => document.documentElement.scrollHeight);
  await p.addStyleTag({ content: "main section{content-visibility:visible!important}" });
  const after = await p.evaluate(() => document.documentElement.scrollHeight);
  const h1s = await p.evaluate(() => document.querySelectorAll("h1").length);
  console.log(r, before, after, "h1:", h1s);
}
await b.close();
