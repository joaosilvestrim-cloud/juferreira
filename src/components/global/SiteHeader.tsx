"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { ArrowIcon } from "@/components/ui/Button";
import { Logo } from "./Logo";

/** Rotas dinâmicas leem o caminho só no cliente; o fallback é o mesmo header sem item ativo. */
export function SiteHeader() {
  return (
    <Suspense fallback={<SiteHeaderView pathname="" />}>
      <SiteHeaderWithPath />
    </Suspense>
  );
}

function SiteHeaderWithPath() {
  return <SiteHeaderView pathname={usePathname()} />;
}

function SiteHeaderView({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // recolhe ao descer, reaparece ao subir
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className="jf-header sticky top-0 z-50 border-b border-ink-900/5 bg-cream-50/90 backdrop-blur-md"
      data-hidden={hidden && !open}
      data-scrolled={scrolled}
    >
      <span className="jf-progress absolute inset-x-0 bottom-0 h-[2px] origin-left bg-red-brand" aria-hidden />
      <div className="mx-auto flex h-[var(--jf-header-h)] max-w-[calc(var(--jf-container)+2*var(--jf-gutter))] items-center justify-between gap-6 px-[var(--jf-gutter)]">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative py-2 text-[15px] text-ink-900 transition-colors hover:text-red-brand aria-[current=page]:text-red-brand"
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-red-brand" aria-hidden />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className="group hidden h-12 items-center gap-3 rounded-full bg-red-brand px-6 text-[15px] text-cream-50 transition-colors hover:bg-red-deep sm:inline-flex"
          >
            Contato
            <ArrowIcon />
          </Link>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-900/20 xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span
                className={`absolute left-0 h-px w-5 bg-ink-900 transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-ink-900 transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 top-[var(--jf-header-h)] z-40 overflow-y-auto bg-cream-50 px-[var(--jf-gutter)] pb-12 pt-8 xl:hidden"
        >
          <nav aria-label="Navegação principal (mobile)">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-ink-900/10">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="jf-display block py-5 text-[34px] aria-[current=page]:text-red-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-red-brand px-8 text-lg text-cream-50"
          >
            Contato
            <ArrowIcon />
          </Link>
        </div>
      )}
    </header>
  );
}
