import { db } from "@/lib/db";
import { checkUnsubscribeToken } from "@/lib/newsletter";

/** Descadastro em um clique (link do rodapé e cabeçalho List-Unsubscribe). */
async function unsubscribe(req: Request) {
  const url = new URL(req.url);
  const email = (url.searchParams.get("e") ?? "").toLowerCase();
  const token = url.searchParams.get("t") ?? "";
  const ok = Boolean(email && token && checkUnsubscribeToken(email, token));
  if (ok) {
    await db.query(
      "update public.newsletter_subscribers set status = 'descadastrado', unsubscribed_at = now() where lower(email) = $1",
      [email],
    );
  }
  return ok;
}

const page = (title: string, text: string) =>
  new Response(
    `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="robots" content="noindex"></head>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#faf7f2;font-family:Georgia,serif;color:#181411">
<main style="max-width:520px;padding:32px;text-align:center"><p style="font:12px Arial,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#b80c10">Uma Terça-feira Qualquer</p>
<h1 style="font-weight:500;font-size:32px;line-height:1.15">${title}</h1><p style="font:16px/1.6 Arial,sans-serif;color:#5c524c">${text}</p>
<p><a href="/" style="color:#b80c10;font:15px Arial,sans-serif">Voltar ao site</a></p></main></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } },
  );

export async function GET(req: Request) {
  return (await unsubscribe(req))
    ? page("Inscrição cancelada.", "Você não vai mais receber Uma Terça-feira Qualquer. Se mudar de ideia, é só se inscrever de novo em Ideias.")
    : page("Link inválido.", "Não conseguimos confirmar este pedido. Se quiser sair da lista, responda qualquer edição da newsletter.");
}

export async function POST(req: Request) {
  await unsubscribe(req);
  return new Response(null, { status: 200 });
}
