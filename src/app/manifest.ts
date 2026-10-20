import type { MetadataRoute } from "next";

/** Nome e ícones quando o site é salvo na tela inicial do celular. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ju Ferreira",
    short_name: "Ju Ferreira",
    description: "Futuros, tecnologia e transformação humana.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#b80c10",
    lang: "pt-BR",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
