import Link from "next/link";
import type { ReactNode } from "react";
import { Photo } from "@/components/ui/Photo";
import { Stroke } from "@/components/ui/Strokes";

/**
 * Peças locais da página "Para Pessoas" — estética mais íntima (papéis, fitas, post-its).
 * Rotação só a partir de md: no mobile tudo fica alinhado e linear.
 */

/** Fita adesiva no topo de um papel/foto. */
export function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-cream-200/85 shadow-[0_1px_2px_rgba(0,0,0,.08)] ${className}`}
      aria-hidden
    />
  );
}

/** Papel / post-it. `rotate` é uma classe (ex.: "md:-rotate-2") para não girar no mobile. */
export function Paper({
  children,
  className = "",
  tone = "blush",
  tape = true,
  compact = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tone?: "blush" | "paper" | "cream";
  tape?: boolean;
  compact?: boolean;
  as?: "div" | "aside" | "figure";
}) {
  const bg = tone === "blush" ? "bg-blush-100" : tone === "cream" ? "bg-cream-100" : "bg-cream-50";
  return (
    <Tag className={`relative ${compact ? "px-4 pb-3 pt-5" : "px-6 pb-6 pt-7"} text-ink-900 shadow-[0_10px_28px_-16px_rgba(24,20,17,0.45)] ${bg} ${className}`}>
      {tape && <Tape />}
      {children}
    </Tag>
  );
}

/** Foto em moldura de papel (polaroid) com fita. */
export function Snapshot({
  src,
  alt,
  className = "",
  frameClassName = "aspect-[4/5]",
  imgClassName = "",
  sizes = "(min-width:1024px) 30vw, 100vw",
  tape = true,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  imgClassName?: string;
  sizes?: string;
  tape?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`relative bg-cream-50 p-2 shadow-[0_14px_34px_-18px_rgba(24,20,17,0.55)] ${className}`}>
      {tape && <Tape />}
      <Photo src={src} alt={alt} sizes={sizes} priority={priority} className={`w-full ${frameClassName}`} imgClassName={imgClassName} />
    </div>
  );
}

/** Pergunta em destaque (citações em negrito da copy). */
export function Ask({
  children,
  className = "",
  tone = "red",
  small = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "red" | "ink";
  small?: boolean;
}) {
  return (
    <p
      className={`border-l-2 border-red-brand pl-5 font-serif leading-snug ${small ? "text-[20px]" : "text-[clamp(22px,1.9vw,28px)]"} ${
        tone === "red" ? "text-red-brand" : "text-ink-900"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Caixa rosa com pergunta (rodapé de cards). */
export function AskBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`rounded-[var(--jf-radius-sm)] bg-blush-100 px-5 py-4 font-serif text-[20px] leading-snug text-ink-900 ${className}`}>
      {children}
    </p>
  );
}

/** Sublinhado de pincel sob títulos. */
export function Underline({ className = "" }: { className?: string }) {
  return <Stroke shape="underline" className={`mt-3 block h-4 w-[min(420px,75%)] ${className}`} width={3} />;
}

/** Chip-âncora (pílula com borda vermelha). */
export function Chip({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center rounded-full border border-red-brand px-5 text-[15px] font-medium text-red-brand transition-colors duration-300 hover:bg-red-brand hover:text-cream-50 ${className}`}
    >
      {children}
    </Link>
  );
}

/** Lista manuscrita com caixinhas (papel de anotação). */
export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((it) => (
        <li key={it} className="jf-hand flex items-start gap-3 text-[23px]">
          <span className="mt-1.5 h-4 w-4 shrink-0 rounded-[3px] border-[1.5px] border-ink-900/70" aria-hidden />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const icon = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export type IconName =
  | "sprout"
  | "hourglass"
  | "cycle"
  | "eye"
  | "bulb"
  | "sign"
  | "growth"
  | "plane"
  | "bolt"
  | "play";

/** Ícones de traço fino, em círculo rosa. */
export function LineIcon({ name, className = "", plain = false }: { name: IconName; className?: string; plain?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-ink-900 ${plain ? "h-12 w-12" : "h-16 w-16 bg-blush-100"} ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8">
        <g {...icon}>
          {name === "sprout" && <path d="M16 28V15M16 15c0-5-4-8-9-8 0 5 4 8 9 8ZM16 19c0-5 4-8 9-8 0 5-4 8-9 8Z" />}
          {name === "hourglass" && <path d="M9 4h14M9 28h14M10 4c0 7 6 8 6 12s-6 5-6 12M22 4c0 7-6 8-6 12s6 5 6 12M13 24h6" />}
          {name === "cycle" && <path d="M25 13a10 10 0 0 0-17-4l-2 2M7 19a10 10 0 0 0 17 4l2-2M6 6v5h5M26 26v-5h-5" />}
          {name === "eye" && (
            <>
              <path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z" />
              <circle cx="16" cy="16" r="4" />
            </>
          )}
          {name === "bulb" && <path d="M12 22h8M13 26h6M11 18a7 7 0 1 1 10 0c-1 1-1.5 2-1.5 4h-7c0-2-.5-3-1.5-4ZM16 2v2M5 7l1.5 1.5M27 7l-1.5 1.5" />}
          {name === "sign" && <path d="M16 4v24M8 7h14l3 3-3 3H8ZM24 15H10l-3 3 3 3h14M12 28h8" />}
          {name === "growth" && <path d="M5 27h22M8 27v-6h4v6M14 27v-10h4v10M20 27V12h4v15M7 15l7-6 4 3 8-7M22 5h4v4" />}
          {name === "plane" && <path d="M28 4 3 14l9 3 3 9 4-7 6 5 3-20ZM12 17 28 4M19 19l-4 7" />}
          {name === "bolt" && <path d="M18 3 7 18h8l-2 11 12-16h-8l1-10Z" />}
          {name === "play" && <path d="M10 6v20l17-10L10 6Z" />}
        </g>
      </svg>
    </span>
  );
}
