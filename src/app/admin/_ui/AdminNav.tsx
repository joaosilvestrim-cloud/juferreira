"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "../actions";

const GROUPS = [
  { title: "Atendimento", items: [{ href: "/admin", label: "Conversas" }] },
  {
    title: "Conteúdo",
    items: [
      { href: "/admin/paginas", label: "Páginas" },
      { href: "/admin/artigos", label: "Artigos" },
      { href: "/admin/referencias", label: "Referências" },
      { href: "/admin/provas", label: "Provas" },
      { href: "/admin/newsletter", label: "Newsletter" },
    ],
  },
  {
    title: "Site",
    items: [
      { href: "/admin/seo", label: "SEO" },
      { href: "/admin/usuarios", label: "Usuários" },
      { href: "/admin/configuracoes", label: "Configurações" },
    ],
  },
];

/** Menu lateral do painel (no celular vira barra no topo com rolagem horizontal). */
export function AdminNav() {
  const pathname = usePathname();
  if (pathname === "/admin/login") return null;
  const active = (href: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));
  return (
    <aside className="sticky top-0 z-40 border-b border-ink-900/10 bg-cream-50 lg:h-dvh lg:w-60 lg:shrink-0 lg:border-b-0 lg:border-r">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-5 py-3 lg:h-full lg:flex-nowrap lg:flex-col lg:items-stretch lg:gap-0 lg:px-4 lg:py-6">
        <p className="jf-eyebrow mr-auto shrink-0 text-red-brand lg:mr-0 lg:px-3">Ju Ferreira · Painel</p>
        <nav aria-label="Painel" className="order-last -mx-5 flex w-[calc(100%+2.5rem)] gap-1 overflow-x-auto px-4 pb-1 lg:order-none lg:mx-0 lg:w-auto lg:flex-1 lg:pb-0 lg:mt-8 lg:flex-col lg:gap-6 lg:overflow-y-auto lg:px-0">
          {GROUPS.map((g) => (
            <div key={g.title} className="flex shrink-0 gap-1 lg:flex-col">
              <p className="hidden px-3 pb-1 text-[11px] uppercase tracking-[0.14em] text-ink-500 lg:block">{g.title}</p>
              {g.items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  aria-current={active(i.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] lg:rounded-lg ${active(i.href) ? "bg-ink-900 text-cream-50" : "text-ink-700 hover:bg-cream-200"}`}
                >
                  {i.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3 lg:mt-6 lg:flex-col lg:items-stretch lg:gap-2 lg:border-t lg:border-ink-900/10 lg:pt-5">
          <Link href="/" className="text-[14px] text-ink-500 hover:underline lg:px-3" target="_blank">
            Ver site
          </Link>
          <form action={logout}>
            <button className="min-h-9 w-full rounded-full border border-ink-900/25 px-4 text-[14px] hover:bg-ink-900 hover:text-cream-50">Sair</button>
          </form>
        </div>
      </div>
    </aside>
  );
}
