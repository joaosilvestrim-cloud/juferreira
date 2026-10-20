"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "../actions";

const ITEMS = [
  { href: "/admin", label: "Conversas" },
  { href: "/admin/artigos", label: "Artigos" },
  { href: "/admin/referencias", label: "Referências" },
  { href: "/admin/newsletter", label: "Newsletter" },
  { href: "/admin/configuracoes", label: "Configurações" },
];

export function AdminNav() {
  const pathname = usePathname();
  if (pathname === "/admin/login") return null;
  const active = (href: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));
  return (
    <div className="sticky top-0 z-40 border-b border-ink-900/10 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-2 px-5 py-3 sm:px-8">
        <p className="jf-eyebrow mr-2 text-red-brand">Ju Ferreira · Painel</p>
        <nav aria-label="Painel" className="flex flex-1 flex-wrap gap-1">
          {ITEMS.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              aria-current={active(i.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-[14px] ${active(i.href) ? "bg-ink-900 text-cream-50" : "text-ink-700 hover:bg-cream-200"}`}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="text-[14px] text-ink-500 hover:underline" target="_blank">
          Ver site
        </Link>
        <form action={logout}>
          <button className="min-h-9 rounded-full border border-ink-900/25 px-4 text-[14px] hover:bg-ink-900 hover:text-cream-50">Sair</button>
        </form>
      </div>
    </div>
  );
}
