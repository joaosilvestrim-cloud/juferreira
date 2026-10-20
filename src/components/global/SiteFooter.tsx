import { getExternal } from "@/lib/content";
import Link from "next/link";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";

export async function SiteFooter() {
  const EXTERNAL = await getExternal();
  const social = [
    { label: "LinkedIn", href: EXTERNAL.linkedin },
    { label: "Instagram", href: EXTERNAL.instagram },
  ];

  return (
    <footer className="border-t border-ink-900/10 bg-cream-50">
      <div className="mx-auto flex max-w-[calc(var(--jf-container)+2*var(--jf-gutter))] flex-col gap-10 px-[var(--jf-gutter)] py-14 lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-red-brand">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contato" className="hover:text-red-brand">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto flex max-w-[calc(var(--jf-container)+2*var(--jf-gutter))] flex-col gap-4 border-t border-ink-900/10 px-[var(--jf-gutter)] py-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {social.filter((s) => s.href).map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-red-brand">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/privacidade" className="hover:text-red-brand">
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link href="/privacidade#cookies" className="hover:text-red-brand">
              Cookies
            </Link>
          </li>
        </ul>
        <p>© 2026 Ju Ferreira.</p>
      </div>
    </footer>
  );
}
