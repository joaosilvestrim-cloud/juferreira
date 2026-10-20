import type { Metadata } from "next";
import { Suspense } from "react";
import { Caveat, Cormorant_Garamond, Jost } from "next/font/google";
import { SiteFooter } from "@/components/global/SiteFooter";
import { Analytics } from "@vercel/analytics/next";
import { Motion } from "@/components/global/Motion";
import { SiteHeader } from "@/components/global/SiteHeader";
import { getExternal } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// FONTES PROVISÓRIAS (OFL, Google Fonts) — trocar pelas famílias licenciadas definitivas.
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const hand = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["500", "600"],
  preload: false, // manuscrita aparece abaixo da dobra: não disputa banda com o conteúdo inicial
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  title: {
    default: "Ju Ferreira — E se pudesse ser diferente?",
    template: "%s · Ju Ferreira",
  },
  description:
    "Futuros, tecnologia e transformação humana para quem não quer apenas assistir ao que vem depois.",
  openGraph: { locale: "pt_BR", type: "website", siteName: "Ju Ferreira" },
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const EXTERNAL = await getExternal();
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${hand.variable} antialiased`}
    >
      <head>
        {/* ativa o modo de movimento antes da primeira pintura (evita "piscar" o conteúdo) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!location.pathname.startsWith('/admin')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('jf-motion')",
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded-full bg-ink-900 px-5 py-3 text-cream-50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Suspense fallback={null}>
          <Motion />
        </Suspense>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ju Ferreira",
              url: SITE_URL,
              image: `${SITE_URL}/images/ju/retrato-biblioteca.webp`,
              jobTitle: "Futurista humanista e palestrante",
              description:
                "Ju Ferreira investiga como pessoas e organizações podem ampliar sua capacidade de enxergar possibilidades, fazer escolhas mais conscientes e construir futuros.",
              knowsAbout: ["Futuros", "Tecnologia e humanidade", "Estratégia", "Liderança", "Transformação humana"],
              sameAs: [EXTERNAL.linkedin, EXTERNAL.instagram].filter(Boolean),
            }),
          }}
        />
      </body>
    </html>
  );
}
