/**
 * Rotas do formulário adaptativo de Contato.
 * Os ids precisam bater com os valores de `?rota=` em CONTACT_ROUTES (src/lib/site.ts).
 */
export const ROUTES = [
  { id: "palestras", label: "Palestras & Workshops", icon: "mic" },
  { id: "organizacoes", label: "Organizações & Projetos", icon: "people" },
  { id: "futuros-aplicados", label: "Futuros Aplicados / What The Future?!", icon: "telescope" },
  { id: "parcerias", label: "Parcerias, Imprensa & Convites", icon: "chat" },
  { id: "epic247", label: "EPIC247 & Pessoas", icon: "heart" },
  { id: "nao-sei", label: "Ainda não sei", icon: "question" },
] as const;

export type RouteId = (typeof ROUTES)[number]["id"];
export type IconName = (typeof ROUTES)[number]["icon"] | "star" | "mail" | "whatsapp" | "linkedin" | "instagram" | "form";

export function isRouteId(v: string | null | undefined): v is RouteId {
  return ROUTES.some((r) => r.id === v);
}

/** Opções do assunto EPIC247 (Bloco 3) — `?assunto=` pré-seleciona a partir dos atalhos do Bloco 4. */
export const EPIC_TOPICS = [
  { id: "conhecer", label: "Quero entender melhor o EPIC247" },
  { id: "antes-de-comprar", label: "Tenho uma dúvida antes de comprar" },
  { id: "suporte", label: "Já tenho acesso e preciso de ajuda" },
  { id: "outro", label: "Outro assunto" },
] as const;

export const epicHref = (assunto: (typeof EPIC_TOPICS)[number]["id"]) =>
  `/contato?rota=epic247&assunto=${assunto}#formulario`;
