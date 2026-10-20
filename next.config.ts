import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: { qualities: [75, 90] },
  // upload de imagens pelo painel (/admin) — o navegador já reduz a imagem antes de enviar
  experimental: { serverActions: { bodySizeLimit: "4mb" } },
};

export default nextConfig;
