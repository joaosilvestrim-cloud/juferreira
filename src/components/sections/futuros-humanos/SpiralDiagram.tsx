import { SpiralMark } from "@/components/ui/Strokes";

import { tx, lazy, rx } from "@/lib/editable";
const MOVES = lazy(() => ([tx("futuros-humanos/2377706959", "Imaginar"), tx("futuros-humanos/6fec948e79", "Escolher"), tx("futuros-humanos/a44c4d1e9e", "Tornar-se"), tx("futuros-humanos/7d802668d0", "Construir")]));

/**
 * Espiral de Futuros Humanos (F06). Mostra os quatro movimentos e o retorno transformado.
 * Sem numeração: não é uma sequência obrigatória. As perguntas de cada movimento ficam no texto ao lado,
 * para o desenho não repetir a explicação. Leitura completa sem animação (jf-breathe respeita reduced motion).
 */
export function SpiralDiagram({ className = "" }: { className?: string }) {
  const pos = ["left-[6%] top-[6%]", "right-[2%] top-[28%]", "left-[2%] top-[60%]", "right-[6%] bottom-[16%]"];
  return (
    <figure className={className}>
      <div className="relative hidden aspect-[1/1] w-full md:block" aria-hidden>
        <div className="jf-breathe absolute inset-0">
          <SpiralMark className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2 opacity-90" />
        </div>
        {MOVES.map((m, i) => (
          <p
            key={m}
            className={`absolute flex items-center gap-2 rounded-md bg-cream-50/85 px-2 py-1 font-serif text-[22px] uppercase tracking-[0.14em] text-red-brand backdrop-blur-[2px] ${pos[i]}`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-red-brand" />
            {m}
          </p>
        ))}
        <p className="jf-hand absolute bottom-[2%] left-[18%] rotate-[-3deg] bg-cream-50/85 px-2 text-[26px] text-ink-900">
{rx("futuros-humanos/r0b3351022", "↻ e a pergunta volta, de outro lugar")}
</p>
      </div>
      <ul className="relative space-y-4 border-l border-red-brand/40 pl-7 md:hidden" aria-hidden>
        {MOVES.map((m) => (
          <li key={m} className="relative font-serif text-[20px] uppercase tracking-[0.14em] text-red-brand">
            <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-red-brand" />
            {m}
          </li>
        ))}
        <li className="jf-hand text-[24px] text-ink-900">
{rx("futuros-humanos/r07df473c0", "↻ e a pergunta volta, de outro lugar")}
</li>
      </ul>
      <figcaption className="sr-only">
{rx("futuros-humanos/r0d7da9d75", "Desenho da Espiral: imaginar, escolher, tornar-se e construir. Depois de construir, a linha não volta ao ponto de partida; a pergunta retorna de outro lugar.")}
</figcaption>
    </figure>
  );
}
