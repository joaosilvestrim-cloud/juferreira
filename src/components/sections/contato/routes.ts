/**
 * Assuntos (rotas) do formulário de Contato.
 * Os ids precisam bater com os valores de `?rota=` em CONTACT_ROUTES (src/lib/site.ts) e com o enum da API
 * (src/app/api/contato/route.ts). Não renomear ids: links de outras páginas e e-mails antigos dependem deles.
 */
export const ROUTES = [
  { id: "palestras", label: "Palestras e workshops", icon: "mic" },
  { id: "organizacoes", label: "Organizações e projetos", icon: "people" },
  { id: "futuros-aplicados", label: "Futuros aplicados", icon: "telescope" },
  { id: "parcerias", label: "Parcerias e imprensa", icon: "chat" },
  { id: "epic247", label: "EPIC247", icon: "heart" },
  { id: "nao-sei", label: "Ainda não sei", icon: "question" },
] as const;

export type RouteId = (typeof ROUTES)[number]["id"];
export type IconName = (typeof ROUTES)[number]["icon"] | "star" | "mail" | "whatsapp" | "linkedin" | "instagram" | "form";

export function isRouteId(v: string | null | undefined): v is RouteId {
  return ROUTES.some((r) => r.id === v);
}

/** Opções do assunto EPIC247. `?assunto=` pré-seleciona uma delas. */
export const EPIC_TOPICS = [
  { id: "conhecer", label: "Quero conhecer" },
  { id: "suporte", label: "Preciso de suporte" },
] as const;

export type EpicTopicId = (typeof EPIC_TOPICS)[number]["id"];

/** Valores antigos de `?assunto=` (v1) que continuam funcionando. */
const EPIC_ALIASES: Record<string, EpicTopicId> = { "antes-de-comprar": "conhecer" };

export function epicTopicLabel(assunto: string | null | undefined) {
  const id = assunto ? (EPIC_ALIASES[assunto] ?? assunto) : null;
  return EPIC_TOPICS.find((t) => t.id === id)?.label;
}

export const epicHref = (assunto: EpicTopicId) => `/contato?rota=epic247&assunto=${assunto}#formulario`;
