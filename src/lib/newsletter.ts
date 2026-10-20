import { createHmac, timingSafeEqual } from "node:crypto";
import { readSettings } from "@/lib/content";
import { richHtml } from "@/lib/rich-text";
import { SITE_URL } from "@/lib/site";

/** Envio da newsletter "Uma Terça-feira Qualquer" via Resend (lotes de até 100). */

const key = () => process.env.ADMIN_SECRET ?? "";

export function unsubscribeToken(email: string) {
  return createHmac("sha256", key()).update(`unsub:${email.toLowerCase()}`).digest("base64url").slice(0, 32);
}
export function checkUnsubscribeToken(email: string, token: string) {
  const a = Buffer.from(unsubscribeToken(email));
  const b = Buffer.from(token);
  return a.length === b.length && timingSafeEqual(a, b);
}
export const unsubscribeUrl = (email: string) =>
  `${SITE_URL}/newsletter/sair?e=${encodeURIComponent(email)}&t=${unsubscribeToken(email)}`;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderIssue(issue: { subject: string; preheader?: string | null; body: string }, email: string) {
  // HTML do editor, higienizado, com estilos inline (clientes de e-mail ignoram CSS externo)
  const abs = (u: string) => (u.startsWith("/") ? SITE_URL + u : u);
  const blocks = richHtml(issue.body)
    .replace(/<p(\s[^>]*)?>/g, (_m, a = "") => `<p${a} style="margin:0 0 16px;font:17px/1.7 Georgia,serif;color:#332925">`)
    .replace(/<h2(\s[^>]*)?>/g, '<h2 style="font-family:Georgia,serif;font-weight:500;font-size:24px;margin:32px 0 8px;color:#181411">')
    .replace(/<h3(\s[^>]*)?>/g, '<h3 style="font-family:Georgia,serif;font-weight:500;font-size:20px;margin:24px 0 8px;color:#181411">')
    .replace(/<h4(\s[^>]*)?>/g, '<h4 style="font:600 16px Arial,sans-serif;margin:20px 0 6px;color:#181411">')
    .replace(/<blockquote>/g, '<blockquote style="margin:24px 0;padding-left:16px;border-left:3px solid #b80c10;font-family:Georgia,serif;font-size:21px;line-height:1.4;color:#181411">')
    .replace(/<ul>/g, '<ul style="margin:0 0 16px;padding-left:22px;font:17px/1.7 Georgia,serif;color:#332925">')
    .replace(/<ol>/g, '<ol style="margin:0 0 16px;padding-left:22px;font:17px/1.7 Georgia,serif;color:#332925">')
    .replace(/<a /g, '<a style="color:#b80c10" ')
    .replace(/<hr>/g, '<hr style="border:0;border-top:1px solid #e6ddd2;margin:28px 0">')
    .replace(/<img ([^>]*?)src="([^"]+)"/g, (_m, pre, src) => `<img ${pre}style="max-width:100%;height:auto;border-radius:8px;margin:8px 0" src="${abs(src)}"`);
  const unsub = unsubscribeUrl(email);
  const html = `<!doctype html><html lang="pt-BR"><body style="margin:0;background:#faf7f2">
  <span style="display:none!important;opacity:0;color:transparent;height:0;width:0;overflow:hidden">${esc(issue.preheader ?? "")}</span>
  <div style="max-width:600px;margin:0 auto;padding:40px 24px">
    <p style="font:12px/1.4 Arial,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#b80c10;margin:0">Uma Terça-feira Qualquer</p>
    <h1 style="font-family:Georgia,serif;font-weight:500;font-size:34px;line-height:1.1;color:#181411;margin:12px 0 28px">${esc(issue.subject)}</h1>
    ${blocks}
    <hr style="border:0;border-top:1px solid #e6ddd2;margin:40px 0 20px">
    <p style="font:13px/1.6 Arial,sans-serif;color:#5c524c;margin:0">Ju Ferreira · <a href="${SITE_URL}" style="color:#b80c10">${SITE_URL.replace(/^https?:\/\//, "")}</a></p>
    <p style="font:12px/1.6 Arial,sans-serif;color:#8a7f78;margin:8px 0 0">Você recebe este e-mail porque se inscreveu em Uma Terça-feira Qualquer. <a href="${unsub}" style="color:#8a7f78">Cancelar inscrição</a></p>
  </div></body></html>`;
  return { html, unsub };
}

type Issue = { subject: string; preheader?: string | null; body: string };

export async function sendIssue(issue: Issue, recipients: string[]) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY não configurada.");
  const s = await readSettings();
  const from = process.env.NEWSLETTER_FROM || "Uma Terça-feira Qualquer <terca@juferreira.com.br>";
  let sent = 0;
  let failed = 0;
  for (let i = 0; i < recipients.length; i += 100) {
    const chunk = recipients.slice(i, i + 100);
    const payload = chunk.map((to) => {
      const { html, unsub } = renderIssue(issue, to);
      return {
        from,
        to: [to],
        subject: issue.subject,
        html,
        reply_to: s.email || undefined,
        headers: { "List-Unsubscribe": `<${unsub}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" },
      };
    });
    const res = await fetch("https://api.resend.com/emails/batch", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) sent += chunk.length;
    else {
      failed += chunk.length;
      console.error("[newsletter] Resend", res.status, (await res.text()).slice(0, 300));
    }
  }
  return { sent, failed };
}
