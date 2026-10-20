import type { ReactNode } from "react";
import { EPISTEMIC, EPISTEMIC_ORDER, type Epistemic } from "./data";

import { tx } from "@/lib/editable";
/** Rótulo de bloco em "pincelada" rosa (eyebrow manuscrito dos mockups). */
export function BrushLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`jf-hand inline-block -rotate-2 bg-blush-100 px-4 py-1 text-[22px] uppercase tracking-[0.12em] text-ink-900 ${className}`}
      style={{ clipPath: tx("ideias/2af9bc9537", "polygon(1% 8%, 99% 0, 100% 88%, 3% 100%)") }}
    >
      {children}
    </p>
  );
}

const tagTone: Record<Epistemic, string> = {
  tese: "border-ink-900 text-ink-900",
  sintese: "border-red-brand/60 text-red-brand",
  hipotese: "border-red-brand text-red-brand",
  investigacao: "border-red-brand bg-red-brand text-cream-50",
};

/** Rótulo epistêmico oficial: [TESE] [SÍNTESE PROVISÓRIA] [HIPÓTESE] [EM INVESTIGAÇÃO]. */
export function EpistemicTag({ kind, className = "" }: { kind: Epistemic; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] ${tagTone[kind]} ${className}`}
    >
      [{EPISTEMIC[kind].label}]
    </span>
  );
}

/** Legenda dos quatro rótulos. */
export function EpistemicLegend({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <dl className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"} ${className}`}>
      {EPISTEMIC_ORDER.map((k) => (
        <div key={k} className="rounded-[var(--jf-radius-sm)] border border-ink-900/10 bg-cream-50 p-4">
          <dt>
            <EpistemicTag kind={k} />
          </dt>
          <dd className="mt-3 text-[14px] leading-snug text-ink-700">{EPISTEMIC[k].desc}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Pergunta destacada em caixa rosa. */
export function QBox({ children, lead, className = "" }: { children: ReactNode; lead?: string; className?: string }) {
  return (
    <div className={`rounded-[var(--jf-radius-sm)] bg-blush-100/70 px-5 py-4 ${className}`}>
      {lead && <p className="jf-eyebrow mb-2 text-[10px] text-ink-500">{lead}</p>}
      <p className="font-serif text-[19px] leading-snug text-ink-900">{children}</p>
    </div>
  );
}

/** Sequência curta de palavras/frases: "A. B. C." */
export function Inline({ items, sep = ". ", end = ".", className = "" }: { items: string[]; sep?: string; end?: string; className?: string }) {
  return <p className={className}>{items.join(sep) + end}</p>;
}
