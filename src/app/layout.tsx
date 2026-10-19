import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Jost } from "next/font/google";
import { SiteFooter } from "@/components/global/SiteFooter";
import { Motion } from "@/components/global/Motion";
import { SiteHeader } from "@/components/global/SiteHeader";
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
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juferreira.com.br"),
  title: {
    default: "Ju Ferreira — E se pudesse ser diferente?",
    template: "%s · Ju Ferreira",
  },
  description:
    "Futuros, tecnologia e transformação humana para quem não quer apenas assistir ao que vem depois.",
  openGraph: { locale: "pt_BR", type: "website", siteName: "Ju Ferreira" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('jf-motion')",
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
        <Motion />
      </body>
    </html>
  );
}
