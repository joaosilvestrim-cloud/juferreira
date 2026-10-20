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

/** Sublinhado de pincel sob títulos. */
export function Underline({ className = "" }: { className?: string }) {
  return <Stroke shape="underline" className={`mt-3 block h-4 w-[min(420px,75%)] ${className}`} width={3} />;
}
