import { cacheLife, cacheTag } from "next/cache";
import { db } from "@/lib/db";

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
