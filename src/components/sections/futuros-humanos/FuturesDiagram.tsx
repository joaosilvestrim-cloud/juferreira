import { tx } from "@/lib/editable";
/**
 * Diagrama dos tipos de futuro (BLOCO 3).
 * Possível ⊃ Plausível ⊃ Provável; Preferível como recorte DENTRO do Possível,
 * cruzando o Plausível e sem coincidir com o Provável (F03 v2).
 * Usa apenas os termos da copy.
 */
export function FuturesDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 500"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-labelledby="futuros-diagrama-t futuros-diagrama-d"
    >
      <title id="futuros-diagrama-t">{tx("futuros-humanos/c5b94a1ab0", "Prováveis, plausíveis, possíveis, preferíveis")}</title>
      <desc id="futuros-diagrama-d">
        {tx("futuros-humanos/cbff363c84", "Círculos encaixados: o possível contém o plausível, que contém o provável. O preferível aparece como um recorte tracejado dentro do possível, que cruza o plausível e não coincide com o provável.")}</desc>
      <defs>
        <radialGradient id="fh-possivel" cx="45%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--jf-blush-100)" />
          <stop offset="100%" stopColor="var(--jf-blush-100)" stopOpacity="0.55" />
        </radialGradient>
        <radialGradient id="fh-provavel" cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor="var(--jf-red-600)" />
          <stop offset="100%" stopColor="var(--jf-wine-700)" />
        </radialGradient>
      </defs>

      {/* POSSÍVEL — campo mais amplo */}
      <circle cx="255" cy="255" r="228" fill="url(#fh-possivel)" stroke="var(--jf-red-500)" strokeOpacity="0.25" />
      {/* PLAUSÍVEL — dentro do possível */}
      <circle cx="225" cy="275" r="152" fill="var(--jf-blush-200)" fillOpacity="0.75" stroke="var(--jf-red-500)" strokeOpacity="0.3" />
      {/* PROVÁVEL — núcleo */}
      <circle cx="205" cy="295" r="74" fill="url(#fh-provavel)" />
      {/* PREFERÍVEL — recorte dentro do possível */}
      <circle
        cx="365"
        cy="195"
        r="80"
        fill="var(--jf-red-500)"
        fillOpacity="0.08"
        stroke="var(--jf-red-500)"
        strokeWidth="2.5"
        strokeDasharray="7 6"
        strokeLinecap="round"
      />

      <g fontFamily="var(--font-serif)" textAnchor="middle" letterSpacing="0.08em">
        <text x="255" y="62" fontSize="20" fill="var(--jf-ink-900)">
          {tx("futuros-humanos/0613848ffe", "POSSÍVEL")}</text>
        <text x="190" y="166" fontSize="18" fill="var(--jf-ink-800)">
          {tx("futuros-humanos/4c46885697", "PLAUSÍVEL")}</text>
        <text x="205" y="301" fontSize="18" fill="var(--jf-cream-50)">
          {tx("futuros-humanos/8b80331178", "PROVÁVEL")}</text>
        <text x="365" y="201" fontSize="18" fill="var(--jf-red-500)">
          {tx("futuros-humanos/48517f9103", "PREFERÍVEL")}</text>
      </g>
    </svg>
  );
}
