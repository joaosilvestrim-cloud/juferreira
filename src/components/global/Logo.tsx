import Link from "next/link";

/**
 * LOGO PROVISÓRIO — reconstrução da assinatura vista nos mockups.
 * Substituir pelo SVG oficial do logo Ju Ferreira (PENDING_ASSETS P0).
 */
export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="Ju Ferreira — início"
      className="group flex items-center gap-4"
      data-placeholder="logo"
    >
      <svg
        viewBox="0 0 64 64"
        className="h-11 w-11 shrink-0 text-red-brand transition-transform duration-500 group-hover:rotate-[-12deg]"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
      >
        <path
          d="M34 6c-14-1-27 9-28 24-1 15 10 27 25 28 14 1 26-9 27-23 1-12-6-22-17-26"
          strokeWidth="2.2"
        />
        <path d="M30 9c-11 2-19 11-19 22 0 13 10 22 22 22" strokeWidth="1" opacity=".7" />
      </svg>
      <span
        className={`font-sans text-[15px] font-normal uppercase tracking-[0.42em] sm:text-[17px] ${
          tone === "light" ? "text-cream-50" : "text-ink-900"
        }`}
      >
        Ju Ferreira
      </span>
    </Link>
  );
}
