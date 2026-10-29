"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "../actions";

type IconName = "home" | "video" | "image" | "chat" | "pages" | "article" | "book" | "star" | "mail" | "search" | "users" | "gear" | "out" | "exit";

/** Ícones de traço simples (24×24), herdam a cor do texto. */
function Icon({ name }: { name: IconName }) {
  const d: Record<IconName, string> = {
    home: "M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6",
    video: "M3 6h13v12H3zM16 10l5-3v10l-5-3",
    image: "M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4M15 8.5a1 1 0 1 0 0 .01",
    chat: "M4 5h16v11H8l-4 4zM8 9h8M8 12h5",
    pages: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7",
    article: "M4 5h16M4 10h16M4 15h10M4 20h7",
    book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M9 7h6",
    star: "m12 3 2.6 5.6 6 .6-4.5 4 1.3 6L12 16.2 6.6 19.2l1.3-6-4.5-4 6-.6z",
    mail: "M3 6h18v12H3zM3 7l9 6 9-6",
    search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",
    users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21c0-4 3-6 7-6s7 2 7 6M16 3.5a4 4 0 0 1 0 7.5M18 15c2.5.5 4 2.5 4 6",
    gear: "M4 7h9M17 7h3M15 5v4M4 17h3M11 17h9M9 15v4",
    out: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6",
    exit: "M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d[name]} />
    </svg>
  );
}

const GROUPS: { title: string; items: { href: string; label: string; icon: IconName }[] }[] = [
  {
    title: "Atendimento",
    items: [
      { href: "/admin/visao-geral", label: "Visão geral", icon: "home" },
      { href: "/admin", label: "Conversas", icon: "chat" },
    ],
  },
  {
    title: "Conteúdo",
    items: [
      { href: "/admin/paginas", label: "Páginas", icon: "pages" },
      { href: "/admin/artigos", label: "Artigos", icon: "article" },
      { href: "/admin/videos", label: "Vídeos e áudios", icon: "video" },
      { href: "/admin/imagens", label: "Imagens", icon: "image" },
      { href: "/admin/referencias", label: "Referências", icon: "book" },
      { href: "/admin/provas", label: "Provas", icon: "star" },
      { href: "/admin/newsletter", label: "Newsletter", icon: "mail" },
    ],
  },
  {
    title: "Site",
    items: [
      { href: "/admin/seo", label: "SEO", icon: "search" },
      { href: "/admin/usuarios", label: "Usuários", icon: "users" },
      { href: "/admin/configuracoes", label: "Configurações", icon: "gear" },
    ],
  },
];

/** Menu lateral escuro do painel (no celular vira barra no topo com rolagem horizontal). */
export function AdminNav() {
  const pathname = usePathname();
  if (pathname === "/admin/login") return null;
  const active = (href: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));
  return (
    <aside className="sticky top-0 z-40 bg-ink-900 text-cream-50 lg:h-dvh lg:w-64 lg:shrink-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3 px-5 pb-2 pt-3 lg:h-full lg:flex-col lg:flex-nowrap lg:items-stretch lg:gap-0 lg:px-4 lg:py-6">
        <Link href="/admin" prefetch={false} className="mr-auto flex items-center gap-3 lg:mr-0 lg:px-2">
          <Image src="/brand/logo-ju-ferreira-light.svg" alt="Ju Ferreira" width={1040} height={720} unoptimized className="h-9 w-auto" />
          <span className="border-l border-cream-50/20 pl-3 text-[12px] uppercase tracking-[0.2em] text-cream-50/70">Painel</span>
        </Link>

        <nav
          aria-label="Painel"
          className="order-last -mx-5 flex w-[calc(100%+2.5rem)] gap-1 overflow-x-auto border-t border-cream-50/10 px-4 pb-1 pt-2 lg:order-none lg:mx-0 lg:mt-8 lg:w-auto lg:flex-1 lg:flex-col lg:gap-0 lg:overflow-y-auto lg:border-t-0 lg:p-0"
        >
          {GROUPS.map((g, gi) => (
            <div key={g.title} className={`flex shrink-0 gap-1 lg:flex-col ${gi ? "lg:mt-5 lg:border-t lg:border-cream-50/10 lg:pt-5" : ""}`}>
              <p className="hidden px-3 pb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-cream-50/45 lg:block">{g.title}</p>
              {g.items.map((i) => {
                const on = active(i.href);
                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    prefetch={false} // telas do painel leem o banco: carregar só ao clicar
                    aria-current={on ? "page" : undefined}
                    className={`flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-[14px] transition-colors ${
                      on ? "bg-red-brand font-medium text-cream-50" : "text-cream-50/75 hover:bg-cream-50/10 hover:text-cream-50"
                    }`}
                  >
                    <Icon name={i.icon} />
                    {i.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:mt-5 lg:flex-col lg:items-stretch lg:gap-1 lg:border-t lg:border-cream-50/10 lg:pt-5">
          <Link
            href="/"
            target="_blank"
            prefetch={false}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-[14px] text-cream-50/75 hover:bg-cream-50/10 hover:text-cream-50"
          >
            <Icon name="out" />
            <span className="max-lg:sr-only">Ver site</span>
          </Link>
          <form action={logout}>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[14px] text-cream-50/75 hover:bg-cream-50/10 hover:text-cream-50">
              <Icon name="exit" />
              Sair
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
