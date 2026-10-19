import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/ju", "/futuros-humanos", "/palestras", "/organizacoes", "/pessoas", "/ideias", "/contato"].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
