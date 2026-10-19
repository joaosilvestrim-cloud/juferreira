import type { MetadataRoute } from "next";

const BASE = "https://juferreira.com.br"; // domínio final a confirmar

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/ju", "/futuros-humanos", "/palestras", "/organizacoes", "/pessoas", "/ideias", "/contato"].map((p) => ({
    url: `${BASE}${p}`,
  }));
}
