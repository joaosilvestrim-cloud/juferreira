import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/ju", "/futuros-humanos", "/palestras", "/organizacoes", "/pessoas", "/ideias", "/contato"].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const articles = (await getPublishedArticles()).map((a) => ({
    url: `${SITE_URL}/ideias/${a.slug}`,
    lastModified: a.publishedAt ?? undefined,
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
