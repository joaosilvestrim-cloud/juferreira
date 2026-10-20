import { z } from "zod";
import { after } from "next/server";
import { clientIp, db, hashIp, recentCount } from "@/lib/db";
import { confirmToSender, notifyNewContact } from "@/lib/notify";

const ROUTES = ["palestras", "organizacoes", "futuros-aplicados", "parcerias", "epic247", "nao-sei"] as const;
const text = (max: number) => z.string().trim().max(max);

const Schema = z.object({
  origin: z.enum(["contato", "organizacoes"]),
  rota: z.enum(ROUTES).optional().or(z.literal("").transform(() => undefined)),
  nome: text(160).min(1, "Conte como podemos te chamar."),
  email: z.email("Precisamos de um e-mail válido para responder você.").max(254),
  organizacao: text(200).optional(),
  telefone: text(40).optional(),
  contexto: text(8000).optional(),
  website: z.string().max(0).optional(), // honeypot: humanos deixam vazio
  pageUrl: text(500).optional(),
});

const KNOWN = new Set(["origin", "rota", "nome", "email", "organizacao", "telefone", "contexto", "website", "pageUrl"]);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Não conseguimos ler o envio." }, { status: 400 });
  }

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    if (first?.path[0] === "website") return Response.json({ ok: true }); // bot: finge sucesso
    return Response.json({ ok: false, error: first?.message ?? "Confira os campos." }, { status: 422 });
  }
  const d = parsed.data;

  // demais respostas da rota (campos específicos), limitadas em tamanho
  const fields: Record<string, string | string[]> = {};
  for (const [k, v] of Object.entries(body)) {
    if (KNOWN.has(k) || Object.keys(fields).length >= 30) continue;
    if (typeof v === "string" && v.trim()) fields[k] = v.trim().slice(0, 4000);
    else if (Array.isArray(v)) fields[k] = v.filter((x) => typeof x === "string").slice(0, 20).map((x) => x.slice(0, 200));
  }
  const message =
    d.contexto ||
    (["acontecendo", "pergunta", "juFizesse", "diferenteDepois"].map((k) => fields[k]).find((v) => typeof v === "string") as
      | string
      | undefined);

  const ipHash = hashIp(clientIp(req));
  try {
    if ((await recentCount("contact_submissions", ipHash, 10)) >= 5) {
      return Response.json(
        { ok: false, error: "Recebemos várias mensagens seguidas daqui. Tente de novo em alguns minutos." },
        { status: 429 },
      );
    }
    await db.query(
      `insert into public.contact_submissions
        (origin, route, name, email, organization, phone, message, fields, page_url, user_agent, ip_hash)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        d.origin,
        d.rota ?? null,
        d.nome,
        d.email.toLowerCase(),
        d.organizacao || null,
        d.telefone || null,
        message ?? null,
        JSON.stringify(fields),
        d.pageUrl ?? null,
        req.headers.get("user-agent")?.slice(0, 300) ?? null,
        ipHash,
      ],
    );
    // e-mails depois da resposta: não atrasam nem derrubam o envio do formulário
    after(async () => {
      const c = { origin: d.origin, route: d.rota, name: d.nome, email: d.email, organization: d.organizacao, phone: d.telefone, message, fields };
      await Promise.allSettled([notifyNewContact(c), confirmToSender(c)]);
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[api/contato]", err);
    return Response.json(
      { ok: false, error: "Não conseguimos enviar agora. Tente novamente em instantes." },
      { status: 500 },
    );
  }
}
