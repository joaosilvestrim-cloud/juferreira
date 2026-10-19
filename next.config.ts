import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: { qualities: [75, 90] },
  turbopack: {
    rules: {
      "*.css": {
        // só o CSS do projeto — evita processar o CSS gerado por next/font
        condition: { not: "foreign" },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
