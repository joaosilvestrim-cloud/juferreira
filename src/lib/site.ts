/** Endereço público do site (trocar pelo domínio próprio quando existir, via NEXT_PUBLIC_SITE_URL). */
const ENV_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";
// endereço provisório *.vercel.app nunca vira o oficial (canonical, sitemap, e-mails)
export const SITE_URL = (ENV_URL && !/vercel\.app/.test(ENV_URL) ? ENV_URL : "https://www.juferreira.com.br").replace(/\/$/, "");

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
 * Links externos: cadastrados no painel /admin (Configurações). Para valores no HTML use getExternal() de
 * @/lib/content; para botões, os redirecionadores /ir/<destino> abaixo.
 */
export const LINKS = {
  epic247: "/ir/epic247",
  wtf: "/ir/wtf",
  newsletter: "/ideias#uma-terca-feira-qualquer",
} as const;
