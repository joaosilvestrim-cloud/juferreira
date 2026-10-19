import type { ReactNode } from "react";

export type Tone = "light" | "cream" | "dark" | "wine" | "blush";

const tones: Record<Tone, string> = {
  light: "bg-cream-50 text-ink-900",
  cream: "bg-cream-100 text-ink-900",
  blush: "bg-blush-100/60 text-ink-900",
  dark: "on-dark bg-ink-900",
  wine: "on-dark bg-wine-800",
};

/** Seção narrativa. `tone` dark/wine = mudança de estado (DS §16), nunca decoração. */
export function Section({
  id,
  tone = "light",
  className = "",
  padded = true,
  children,
  label,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  padded?: boolean;
  children: ReactNode;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`relative isolate overflow-hidden ${tones[tone]} ${padded ? "py-[var(--jf-section-y)]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[calc(var(--jf-container)+2*var(--jf-gutter))] px-[var(--jf-gutter)] ${className}`}>
      {children}
    </div>
  );
}
