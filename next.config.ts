import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: { qualities: [75, 90] },
  // upload de imagens pelo painel (/admin) — o navegador já reduz a imagem antes de enviar
  experimental: { serverActions: { bodySizeLimit: "4mb" } },
  // endereços do site anterior → páginas equivalentes (preserva links antigos e Google)
  async redirects() {
    return [
      { source: "/sobre", destination: "/ju", permanent: true },
      { source: "/sobremim", destination: "/ju", permanent: true },
      { source: "/manifesto", destination: "/futuros-humanos", permanent: true },
      { source: "/conteudos", destination: "/ideias", permanent: true },
      { source: "/empresas", destination: "/organizacoes", permanent: true },
      { source: "/minha-empresa/palestras-corporativas", destination: "/palestras", permanent: true },
      { source: "/minha-empresa/foresight-estrategico", destination: "/organizacoes", permanent: true },
      { source: "/minha-empresa/:rest*", destination: "/organizacoes", permanent: true },
      { source: "/minha-vida/palestras-e-mentorias", destination: "/palestras", permanent: true },
      { source: "/minha-vida/:rest*", destination: "/pessoas", permanent: true },
    ];
  },
};

export default nextConfig;
