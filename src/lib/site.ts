/** Endereço público do site (trocar pelo domínio próprio quando existir, via NEXT_PUBLIC_SITE_URL). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://juferreira.vercel.app").replace(/\/$/, "");

/** Navegação global (Site Master §7) e destinos padrão de CTA (Site Master §16–17). */
export const NAV = [
  { href: "/ju", label: "Ju" },
  { href: "/futuros-humanos", label: "Futuros Humanos" },
  { href: "/palestras", label: "Palestras" },
  { href: "/organizacoes", label: "Para Organizações" },
  { href: "/pessoas", label: "Para Pessoas" },
  { href: "/ideias", label: "Ideias" },
] as const;

/** Rotas do formulário adaptativo de Contato (`/contato?rota=...`). */
export const CONTACT_ROUTES = {
  palestras: "/contato?rota=palestras#formulario",
  organizacoes: "/contato?rota=organizacoes#formulario",
  futuros: "/contato?rota=futuros-aplicados#formulario",
  parcerias: "/contato?rota=parcerias#formulario",
  epic: "/contato?rota=epic247#formulario",
  naoSei: "/contato?rota=nao-sei#formulario",
} as const;

/**
 * Destinos externos ainda PENDENTES (PENDING_ASSETS P2).
 * Enquanto vazios, os CTAs apontam para Contato com a rota correspondente.
 */
export const EXTERNAL = {
  epic247: "", // URL final do EPIC247
  wtf: "", // URL What The Future?!
  linkedin: "", // perfil LinkedIn da Ju
  linkedinPage: "", // página Ju Ferreira no LinkedIn
  instagram: "",
  email: "", // e-mail oficial de contato
  whatsapp: "", // só publicar quando existir número comercial dedicado
} as const;

export const LINKS = {
  epic247: EXTERNAL.epic247 || CONTACT_ROUTES.epic,
  wtf: EXTERNAL.wtf || CONTACT_ROUTES.futuros,
  newsletter: "/ideias#uma-terca-feira-qualquer",
} as const;
