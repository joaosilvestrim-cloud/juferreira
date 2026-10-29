import type { ElementType, ReactNode } from "react";

/** Palavra/trecho em vermelho de ênfase (RedEmphasis). */
export function Em({ children, italic = false }: { children?: ReactNode; italic?: boolean }) {
  return <span className={`jf-em ${italic ? "italic" : ""}`}>{children}</span>;
}

export function Eyebrow({ children, className = "", line = true }: { children: ReactNode; className?: string; line?: boolean }) {
  return (
    <p className={`jf-eyebrow flex items-center gap-4 text-red-brand ${className}`}>
      {children}
      {line && <span className="h-px w-14 bg-current opacity-70" aria-hidden />}
    </p>
  );
}

const sizes = { xl: "jf-display-xl", lg: "jf-display-lg", md: "jf-display-md", sm: "jf-display-sm" };

export function Display({
  as: Tag = "h2",
  size = "lg",
  className = "",
  caps = false,
  children,
}: {
  as?: ElementType;
  size?: keyof typeof sizes;
  className?: string;
  caps?: boolean;
  children: ReactNode;
}) {
  return <Tag className={`jf-display ${sizes[size]} ${caps ? "uppercase" : ""} ${className}`}>{children}</Tag>;
}

export function Title({ as: Tag = "h3", className = "", children }: { as?: ElementType; className?: string; children: ReactNode }) {
  return <Tag className={`jf-title ${className}`}>{children}</Tag>;
}

export function Lead({ as: Tag = "p", className = "", children }: { as?: ElementType; className?: string; children: ReactNode }) {
  return <Tag className={`jf-lead ${className}`}>{children}</Tag>;
}

export function Body({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`jf-body ${className}`}>{children}</div>;
}

/** Linha curta vermelha usada antes de títulos de coluna. */
export function Dash({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 6" className={`h-1.5 w-12 text-red-brand ${className}`} aria-hidden="true" data-stroke="">
      <path d="M2 3.5C14 2 30 2.2 58 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Divisor editorial fino. */
export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-current opacity-15 ${className}`} />;
}

/** Nota manuscrita — voz lateral, nunca informação crítica (DS §3.3). */
export function HandNote({ children, className = "", rotate = -4 }: { children: ReactNode; className?: string; rotate?: number }) {
  return (
    <p className={`jf-hand text-[clamp(24px,2.2vw,34px)] ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      {children}
    </p>
  );
}

/** Post-it / papel com fita. */
export function StickyNote({
  children,
  className = "",
  rotate = -2,
  tone = "blush",
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  tone?: "blush" | "paper";
  size?: "sm" | "md";
}) {
  return (
    <div
      className={`${/\babsolute\b/.test(className) ? "" : "relative"} w-fit ${size === "sm" ? "max-w-[210px] px-4 pb-3 pt-5" : "max-w-[280px] px-6 pb-5 pt-7"} shadow-[0_8px_24px_-12px_rgba(24,20,17,0.35)] ${
        tone === "blush" ? "bg-blush-100" : "bg-cream-50"
      } ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-cream-200/80" aria-hidden />
      <p className={`jf-hand text-ink-900 ${size === "sm" ? "text-[19px] leading-snug" : "text-[24px]"}`}>{children}</p>
    </div>
  );
}

/** Citação em caixa rosa com aspas vermelhas. */
export function QuoteCard({ children, className = "", cite }: { children: ReactNode; className?: string; cite?: ReactNode }) {
  return (
    <figure className={`relative rounded-[var(--jf-radius-sm)] bg-blush-100 p-7 pl-14 text-ink-900 ${className}`}>
      <span className="jf-display absolute left-5 top-4 text-[56px] leading-none text-red-brand" aria-hidden>
        “
      </span>
      <blockquote className="font-serif text-[clamp(20px,1.7vw,26px)] leading-snug">{children}</blockquote>
      {cite && <figcaption className="mt-3 text-sm text-ink-500">{cite}</figcaption>}
    </figure>
  );
}

/** Número em círculo (cards numerados). */
export function NumberBadge({ n, className = "" }: { n: number | string; className?: string }) {
  return (
    <span
      className={`jf-display inline-flex h-12 w-12 items-center justify-center rounded-full border border-red-brand text-[24px] text-red-brand ${className}`}
    >
      {n}
    </span>
  );
}

/** Lista simples com traço vermelho. */
export function DashList({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.8em] h-px w-3 shrink-0 bg-red-brand" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
