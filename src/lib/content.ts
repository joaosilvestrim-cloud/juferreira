import { cacheLife, cacheTag } from "next/cache";
import { db } from "@/lib/db";
import { MEDIA_FORMATS, type MediaFormat, type MediaPlacement } from "@/lib/media-meta";

/**
 * Conteúdo editável pelo /admin, lido com cache (tags) e invalidado pelas ações do painel.
 * Se o banco estiver indisponível, devolve valores vazios — o site continua no ar.
 */

export const SETTING_KEYS = [
  "email",
  "whatsapp",
  "linkedin",
  "linkedin_page",
  "instagram",
  "epic247_url",
  "wtf_url",
  "notify_to",
  "autoreply",
] as const;
export type SettingKey = (typeof SETTING_KEYS)[number];
export type Settings = Record<SettingKey, string>;

const EMPTY: Settings = Object.fromEntries(SETTING_KEYS.map((k) => [k, ""])) as Settings;

/** Sem cache — para uso no servidor fora da renderização (API, e-mails). */
export async function readSettings(): Promise<Settings> {
  try {
    const { rows } = await db.query<{ key: string; value: string }>("select key, value from public.site_settings");
    const s = { ...EMPTY };
    for (const r of rows) if ((SETTING_KEYS as readonly string[]).includes(r.key)) s[r.key as SettingKey] = r.value;
    return s;
  } catch (err) {
    console.error("[content] settings", err);
    return { ...EMPTY };
  }
}

export async function getSettings(): Promise<Settings> {
  "use cache";
  cacheTag("settings");
  cacheLife("max");
  return readSettings();
}

/** Formato público usado pelos componentes (mesmos nomes do antigo EXTERNAL). */
export async function getExternal() {
  const s = await getSettings();
  const wa = s.whatsapp.replace(/\D/g, "");
  return {
    email: s.email,
    whatsapp: wa ? `https://wa.me/${wa.length <= 11 ? "55" + wa : wa}` : "",
    linkedin: s.linkedin,
    linkedinPage: s.linkedin_page,
    instagram: s.instagram,
    epic247: s.epic247_url,
    wtf: s.wtf_url,
  };
}

export const mediaUrl = (id: string | null | undefined) => (id ? `/midia/${id}` : null);

export type Article = {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string | null;
  question: string | null;
  body: string;
  territories: string[];
  epistemic: string | null;
  cover: string | null;
  featured: boolean;
  publishedAt: string | null;
};

type ArticleRow = Omit<Article, "cover" | "publishedAt"> & { cover_id: string | null; published_at: Date | null };
const toArticle = (r: ArticleRow): Article => ({
  id: Number(r.id),
  slug: r.slug,
  title: r.title,
  subtitle: r.subtitle,
  excerpt: r.excerpt,
  question: r.question,
  body: r.body,
  territories: r.territories ?? [],
  epistemic: r.epistemic,
  cover: mediaUrl(r.cover_id),
  featured: r.featured,
  publishedAt: r.published_at ? r.published_at.toISOString() : null,
});

export async function getPublishedArticles(): Promise<Article[]> {
  "use cache";
  cacheTag("articles");
  cacheLife("max");
  try {
    const { rows } = await db.query<ArticleRow>(
      "select * from public.articles where status = 'publicado' order by featured desc, published_at desc nulls last, id desc",
    );
    return rows.map(toArticle);
  } catch (err) {
    console.error("[content] articles", err);
    return [];
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  "use cache";
  cacheTag("articles");
  cacheLife("max");
  try {
    const { rows } = await db.query<ArticleRow>("select * from public.articles where slug = $1 and status = 'publicado'", [slug]);
    return rows[0] ? toArticle(rows[0]) : null;
  } catch (err) {
    console.error("[content] article", err);
    return null;
  }
}

export type ReadingRef = {
  id: number;
  section: "mesa" | "voltam";
  title: string;
  author: string | null;
  note: string | null;
  territory: string | null;
  link: string | null;
  cover: string | null;
};

export async function getReadingRefs(): Promise<ReadingRef[]> {
  "use cache";
  cacheTag("refs");
  cacheLife("max");
  try {
    const { rows } = await db.query(
      "select id, section, title, author, note, territory, link, cover_id from public.reading_refs where visible order by sort, id",
    );
    return rows.map((r) => ({ ...r, id: Number(r.id), cover: mediaUrl(r.cover_id) }));
  } catch (err) {
    console.error("[content] refs", err);
    return [];
  }
}

/** Converte o texto do artigo (parágrafos, "## subtítulo", "> citação") em blocos simples, sem HTML do usuário. */
export function parseBody(body: string) {
  return body
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b) => {
      if (b.startsWith("## ")) return { type: "h2" as const, text: b.slice(3).trim() };
      if (b.startsWith("> ")) return { type: "quote" as const, text: b.replace(/^>\s?/gm, "").trim() };
      return { type: "p" as const, text: b };
    });
}

/* ───────────── Textos e imagens editáveis das páginas ───────────── */
export async function getOverrides(): Promise<Record<string, string>> {
  "use cache";
  cacheTag("content");
  cacheLife("max");
  try {
    const { rows } = await db.query<{ key: string; value: string }>("select key, value from public.content_overrides");
    return Object.fromEntries(rows.map((r) => [r.key, r.value]));
  } catch (err) {
    console.error("[content] overrides", err);
    return {};
  }
}

/** Chamar no início de cada página, antes de renderizar as seções. */
export async function loadOverrides() {
  const { setOverrides } = await import("@/lib/editable");
  setOverrides(await getOverrides());
}

/* ───────────── SEO por página ───────────── */
export const SEO_PAGES = [
  { path: "/", name: "Home" },
  { path: "/ju", name: "Ju" },
  { path: "/futuros-humanos", name: "Futuros Humanos" },
  { path: "/palestras", name: "Palestras" },
  { path: "/organizacoes", name: "Para Organizações" },
  { path: "/pessoas", name: "Para Pessoas" },
  { path: "/ideias", name: "Ideias" },
  { path: "/contato", name: "Contato" },
] as const;

type SeoRow = { path: string; title: string | null; description: string | null; og_image_id: string | null; noindex: boolean };

export async function getSeo(): Promise<Record<string, SeoRow>> {
  "use cache";
  cacheTag("seo");
  cacheLife("max");
  try {
    const { rows } = await db.query<SeoRow>("select path, title, description, og_image_id, noindex from public.page_seo");
    return Object.fromEntries(rows.map((r) => [r.path, r]));
  } catch (err) {
    console.error("[content] seo", err);
    return {};
  }
}

/** Mescla o SEO cadastrado no painel com os valores padrão da página. */
export async function seoFor(path: string, defaults: import("next").Metadata): Promise<import("next").Metadata> {
  const s = (await getSeo())[path];
  if (!s) return defaults;
  const title = s.title || defaults.title;
  const description = s.description || defaults.description;
  return {
    ...defaults,
    title: path === "/" && s.title ? { absolute: s.title } : title,
    description,
    openGraph: {
      ...(defaults.openGraph ?? {}),
      ...(s.title ? { title: s.title } : {}),
      ...(description ? { description: description as string } : {}),
      ...(s.og_image_id ? { images: [{ url: `/midia/${s.og_image_id}`, width: 1200, height: 630 }] } : {}),
    },
    ...(s.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* ───────────── Provas (Ju em ação) ───────────── */
export type ProofItem = {
  id: number;
  kind: "depoimento" | "logo" | "foto" | "video";
  title: string | null;
  role: string | null;
  quote: string | null;
  url: string | null;
  image: string | null;
};

export async function getProof(): Promise<ProofItem[]> {
  "use cache";
  cacheTag("proof");
  cacheLife("max");
  try {
    const { rows } = await db.query(
      "select id, kind, title, role, quote, url, media_id from public.proof_items where visible order by sort, id",
    );
    return rows.map((r) => ({ ...r, id: Number(r.id), image: mediaUrl(r.media_id) }));
  } catch (err) {
    console.error("[content] proof", err);
    return [];
  }
}

export type Embed =
  | { type: "iframe"; src: string; kind: "video" | "audio"; height?: number }
  | { type: "video"; src: string }
  | { type: "audio"; src: string };

/**
 * Reconhece o link e devolve como incorporar: YouTube, Vimeo, Spotify, Apple Podcasts e SoundCloud viram player;
 * .mp4/.webm viram vídeo; .mp3/.m4a/.ogg viram áudio. Outro link (Instagram, LinkedIn, Globoplay…) → null (cartão com link).
 */
export function mediaEmbed(url: string): Embed | null {
  const u = url.trim();
  const yt = u.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return { type: "iframe", kind: "video", src: `https://www.youtube-nocookie.com/embed/${yt[1]}` };
  const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return { type: "iframe", kind: "video", src: `https://player.vimeo.com/video/${vm[1]}` };
  const sp = u.match(/open\.spotify\.com\/(?:intl-[\w-]+\/)?(episode|show|track|playlist)\/([A-Za-z0-9]+)/);
  if (sp) return { type: "iframe", kind: "audio", src: `https://open.spotify.com/embed/${sp[1]}/${sp[2]}`, height: sp[1] === "episode" || sp[1] === "track" ? 152 : 232 };
  if (/^https?:\/\/podcasts\.apple\.com\//.test(u))
    return { type: "iframe", kind: "audio", src: u.replace("://podcasts.apple.com/", "://embed.podcasts.apple.com/"), height: /[?&]i=/.test(u) ? 175 : 450 };
  if (/^https?:\/\/(www\.)?soundcloud\.com\//.test(u))
    return { type: "iframe", kind: "audio", src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(u)}&color=%23b80c10&visual=false`, height: 166 };
  if (/^https?:\/\/.+\.(mp4|webm|mov)(\?.*)?$/i.test(u)) return { type: "video", src: u };
  if (/^https?:\/\/.+\.(mp3|m4a|ogg|wav)(\?.*)?$/i.test(u)) return { type: "audio", src: u };
  return null;
}

/** Compatibilidade: só links que viram vídeo. */
export function videoEmbed(url: string): { type: "iframe" | "video"; src: string } | null {
  const e = mediaEmbed(url);
  if (!e) return null;
  if (e.type === "video") return e;
  if (e.type === "iframe" && e.kind === "video") return { type: "iframe", src: e.src };
  return null;
}

/* ───────────── Vídeos e áudios (palestras, entrevistas, podcasts) ───────────── */
export { MEDIA_FORMATS, MEDIA_PLACEMENTS, type MediaFormat, type MediaPlacement } from "@/lib/media-meta";

export type MediaItem = {
  id: number;
  format: MediaFormat;
  title: string;
  outlet: string | null;
  recordedOn: string | null; // AAAA-MM-DD
  description: string | null;
  url: string;
  thumb: string | null;
  placements: MediaPlacement[];
};

/** Todos os vídeos e áudios visíveis; filtre por onde aparecem com `.filter(m => m.placements.includes("home"))`. */
export async function getMediaItems(): Promise<MediaItem[]> {
  "use cache";
  cacheTag("media-items");
  cacheLife("max");
  try {
    const { rows } = await db.query(
      "select id, format, title, outlet, to_char(recorded_on, 'YYYY-MM-DD') as recorded_on, description, url, thumb_id, placements from public.media_items where visible order by sort, recorded_on desc nulls last, id desc",
    );
    return rows.map((r) => ({
      id: Number(r.id),
      format: r.format,
      title: r.title,
      outlet: r.outlet,
      recordedOn: r.recorded_on,
      description: r.description,
      url: r.url,
      thumb: mediaUrl(r.thumb_id),
      placements: r.placements ?? [],
    }));
  } catch (err) {
    console.error("[content] media items", err);
    return [];
  }
}

export async function getMediaFor(placement: MediaPlacement): Promise<MediaItem[]> {
  return (await getMediaItems()).filter((m) => m.placements.includes(placement));
}

/** "Entrevista · Programa X · mar. 2026" */
export function mediaCaption(m: Pick<MediaItem, "format" | "outlet" | "recordedOn">) {
  const date = m.recordedOn
    ? new Date(m.recordedOn + "T12:00:00").toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
    : null;
  return [MEDIA_FORMATS[m.format], m.outlet, date].filter(Boolean).join(" · ");
}
