import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";
const B = process.env.BASE_URL ?? "http://localhost:3000";
const pwd = readFileSync(".env.local", "utf8").match(/^ADMIN_PASSWORD=(.*)$/m)[1];
const b = await chromium.launch({ channel: "msedge" });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto(`${B}/admin/login`); await p.fill("#password", pwd); await p.click("button[type=submit]"); await p.waitForURL(`${B}/admin`);
for (const r of ["configuracoes", "artigos/novo", "referencias", "newsletter/nova"]) {
  await p.goto(`${B}/admin/${r}`); await p.waitForTimeout(500);
  await p.screenshot({ path: `screenshots/admin-${r.replace("/", "-")}.png`, fullPage: true });
}
await b.close();
