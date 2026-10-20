import Link from "next/link";
import type { ReactNode } from "react";

/** Cabeçalho padrão das telas do painel: voltar, título, descrição e ações à direita. */
export function PageHeader({
  title,
  description,
  back,
  actions,
  meta,
}: {
  title: ReactNode;
  description?: ReactNode;
  back?: { href: string; label: string };
  actions?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <header className="border-b border-ink-900/10 pb-6">
      {back && (
        <Link href={back.href} className="inline-flex items-center gap-1.5 text-[13px] text-ink-500 hover:text-red-brand">
          <span aria-hidden>←</span> {back.label}
        </Link>
      )}
      <div className={`flex flex-wrap items-end justify-between gap-4 ${back ? "mt-2" : ""}`}>
        <h1 className="jf-display text-[clamp(34px,4vw,44px)] leading-none">{title}</h1>
        {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
      </div>
      {description && <p className="mt-3 max-w-[760px] text-[15px] leading-relaxed text-ink-500">{description}</p>}
      {meta && <div className="mt-4">{meta}</div>}
    </header>
  );
}

/** Estado vazio com ícone, explicação e ação. */
export function EmptyState({ title, children, action }: { title: string; children?: ReactNode; action?: ReactNode }) {
  return (
    <div className="mt-8 flex flex-col items-center rounded-[14px] border border-dashed border-ink-900/20 bg-cream-50/60 px-6 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-100 text-red-brand" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
      <p className="mt-4 font-serif text-[22px]">{title}</p>
      {children && <p className="mt-1 max-w-[460px] text-[14px] text-ink-500">{children}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

/** Botão-link padrão do painel. */
export function AdminButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-[15px] transition-colors ${
        variant === "primary" ? "bg-red-brand text-cream-50 hover:bg-red-deep" : "border border-ink-900/25 bg-cream-50 hover:border-red-brand hover:text-red-brand"
      }`}
    >
      {children}
    </Link>
  );
}
