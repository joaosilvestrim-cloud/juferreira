import { z } from "zod";
import { clientIp, db, hashIp, recentCount } from "@/lib/db";

const Schema = z.object({
  email: z.email("Confira o e-mail informado.").max(254),
  consent: z.literal(true, "Para assinar, é preciso aceitar o recebimento e a Política de Privacidade."),
  consentText: z.string().trim().min(1).max(600),
  source: z.string().trim().max(200).optional(),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Não conseguimos ler o envio." }, { status: 400 });
  }
  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    if (first?.path[0] === "website") return Response.json({ ok: true });
    return Response.json({ ok: false, error: first?.message ?? "Confira os dados." }, { status: 422 });
  }
  const d = parsed.data;
  const ipHash = hashIp(clientIp(req));

  try {
    if ((await recentCount("newsletter_subscribers", ipHash, 10)) >= 5) {
      return Response.json({ ok: false, error: "Muitas inscrições seguidas. Tente em alguns minutos." }, { status: 429 });
    }
    // reinscrição reativa quem tinha saído; e-mail já ativo não gera erro (não revela quem está na lista)
    await db.query(
      `insert into public.newsletter_subscribers (email, consent, consent_text, source, ip_hash)
       values ($1, true, $2, $3, $4)
       on conflict (lower(email)) do update
         set status = 'ativo', unsubscribed_at = null, consent = true, consent_text = excluded.consent_text`,
      [d.email.toLowerCase(), d.consentText, d.source ?? null, ipHash],
    );
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[api/newsletter]", err);
    return Response.json({ ok: false, error: "Não conseguimos registrar agora. Tente novamente em instantes." }, { status: 500 });
  }
}
