import { readSettings } from "@/lib/content";
import { CONTACT_ROUTES } from "@/lib/site";

/**
 * Links externos configuráveis pelo /admin. Os botões do site apontam para /ir/<destino>;
 * sem URL cadastrada, a pessoa cai na rota certa do formulário de Contato.
 */
const MAP = {
  epic247: { key: "epic247_url", fallback: CONTACT_ROUTES.epic },
  wtf: { key: "wtf_url", fallback: CONTACT_ROUTES.futuros },
  linkedin: { key: "linkedin", fallback: "/contato" },
  "linkedin-pagina": { key: "linkedin_page", fallback: "/contato" },
  instagram: { key: "instagram", fallback: "/contato" },
} as const;

export async function GET(req: Request, ctx: { params: Promise<{ destino: string }> }) {
  const { destino } = await ctx.params;
  const item = MAP[destino as keyof typeof MAP];
  if (!item) return Response.redirect(new URL("/", req.url), 307);
  const s = await readSettings();
  const url = s[item.key]?.trim();
  const target = url && /^https?:\/\//i.test(url) ? url : new URL(item.fallback, req.url).toString();
  return Response.redirect(target, 307);
}
