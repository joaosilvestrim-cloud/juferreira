import { FIELD_LABEL, ROUTE_LABEL } from "@/lib/admin";
import { readSettings } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

/**
 * Avisos por e-mail via Resend (API HTTP, sem SDK).
 * Variáveis: RESEND_API_KEY, CONTACT_NOTIFY_TO (lista separada por vírgula), CONTACT_NOTIFY_FROM.
 * Falha de envio nunca derruba o formulário: o contato já está salvo no banco.
 */
const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

async function send(payload: Record<string, unknown>) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) console.error("[notify] Resend", res.status, (await res.text()).slice(0, 300));
}

/** Endereços reservados para teste (RFC 2606) — nunca recebem e-mail. */
const isTestAddress = (email: string) => /@(example\.(com|org|net)|[^@]+\.(test|example|invalid))$/i.test(email);

const from = () => process.env.CONTACT_NOTIFY_FROM || "Site Ju Ferreira <site@juferreira.com.br>";

type Contact = {
  origin: string;
  route?: string | null;
  name: string;
  email: string;
  organization?: string | null;
  phone?: string | null;
  message?: string | null;
  fields: Record<string, string | string[]>;
};

/** Avisa a equipe que chegou um contato novo (com resposta direta para a pessoa). */
export async function notifyNewContact(c: Contact) {
  if (isTestAddress(c.email)) return;
  // destinatários: painel (Configurações → "Avisos de contato para") ou variável de ambiente
  const s = await readSettings();
  const to = (s.notify_to || process.env.CONTACT_NOTIFY_TO || "").split(/[,;\s]+/).map((x) => x.trim()).filter((x) => x.includes("@"));
  if (!to.length) return;
  const rota = c.route ? ROUTE_LABEL[c.route] ?? c.route : "Sem rota";
  const rows = [
    ["Nome", c.name],
    ["E-mail", c.email],
    ["Organização", c.organization],
    ["Telefone", c.phone],
    ["Rota", rota],
    ["Página", c.origin === "organizacoes" ? "Para Organizações" : "Contato"],
    ...Object.entries(c.fields).map(([k, v]) => [FIELD_LABEL[k] ?? k, Array.isArray(v) ? v.join(", ") : v]),
  ].filter(([, v]) => v);

  const html = `
  <div style="font-family:Georgia,serif;color:#181411;max-width:620px">
    <p style="font:12px/1.4 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#b80c10">Nova conversa · ${esc(rota)}</p>
    <h1 style="font-weight:500;font-size:28px;margin:8px 0 16px">${esc(c.name)}</h1>
    ${c.message ? `<p style="font:16px/1.6 Arial,sans-serif;white-space:pre-line;background:#f6f0e7;padding:16px;border-radius:10px">${esc(c.message)}</p>` : ""}
    <table style="font:14px/1.5 Arial,sans-serif;border-collapse:collapse;margin-top:16px;width:100%">
      ${rows.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#5c524c;vertical-align:top;width:38%">${esc(k)}</td><td style="padding:6px 0">${esc(v)}</td></tr>`).join("")}
    </table>
    <p style="font:14px Arial,sans-serif;margin-top:24px"><a href="${SITE_URL}/admin" style="color:#b80c10">Abrir no painel</a> · responda este e-mail para falar direto com ${esc(c.name.split(" ")[0])}.</p>
  </div>`;

  await send({
    from: from(),
    to,
    reply_to: c.email,
    subject: `Nova conversa pelo site — ${rota} — ${c.name}`,
    html,
  });
}

/** Confirmação para quem escreveu (texto da copy de Contato). Ativada com CONTACT_AUTOREPLY=1. */
export async function confirmToSender(c: Pick<Contact, "name" | "email">) {
  if (isTestAddress(c.email)) return;
  const s = await readSettings();
  const on = s.autoreply ? s.autoreply === "1" : process.env.CONTACT_AUTOREPLY === "1";
  if (!on) return;
  const first = c.name.split(" ")[0];
  await send({
    from: from(),
    to: [c.email],
    subject: "Mensagem recebida",
    html: `
    <div style="font-family:Georgia,serif;color:#181411;max-width:560px">
      <p style="font-size:20px">Olá, ${esc(first)}.</p>
      <h1 style="font-weight:500;font-size:28px">Mensagem recebida.</h1>
      <p style="font:16px/1.6 Arial,sans-serif">Obrigado por contar o contexto. A equipe dará continuidade por este e-mail.</p>
      <p style="font:14px Arial,sans-serif;color:#5c524c;margin-top:28px">Ju Ferreira · <a href="${SITE_URL}" style="color:#b80c10">${SITE_URL.replace(/^https?:\/\//, "")}</a></p>
    </div>`,
  });
}
