import Image from "next/image";
import { useId } from "react";

/**
 * Kit de gestos vermelhos (DS §11). PROVISÓRIO até chegar o kit SVG oficial (PENDING_ASSETS P0).
 * Traços com "fibras" (vários paths finos levemente deslocados) + displacement para parecer pincel.
 */

const SHAPES = {
  /** dois arcos amplos cruzando a composição (hero, encerramento) */
  orbit: {
    viewBox: "0 0 800 900",
    paths: [
      "M790 70C620 20 380 40 230 190 90 330 40 520 120 640",
      "M800 360C640 280 430 300 300 400 170 500 120 650 160 800",
    ],
  },
  /** laço que envolve uma foto */
  loop: {
    viewBox: "0 0 600 700",
    paths: ["M520 40C330 -10 90 70 60 280 30 480 150 660 360 650 520 640 590 520 570 400"],
  },
  /** sublinhado de pincel */
  underline: {
    viewBox: "0 0 400 30",
    paths: ["M6 20C90 10 220 8 394 14", "M40 25C140 18 260 17 360 20"],
  },
  /** rabisco curto (assinatura de fechamento) */
  scribble: {
    viewBox: "0 0 200 40",
    paths: ["M4 26C60 10 130 8 196 12", "M20 32C80 20 150 18 190 22C130 26 70 30 30 34"],
  },
  /** círculo aberto */
  circle: {
    viewBox: "0 0 200 200",
    paths: ["M118 14C60 6 14 46 12 100 10 156 56 192 108 188 160 184 192 140 186 90 182 54 160 30 128 20"],
  },
  /** seta curva */
  arrow: {
    viewBox: "0 0 160 90",
    paths: ["M6 70C40 20 100 10 148 30", "M128 14L150 30 126 42"],
  },
} as const;

export type StrokeShape = keyof typeof SHAPES;

export function Stroke({
  shape,
  className = "",
  width = 3,
  fibers = true,
  draw = false,
  color = "currentColor",
}: {
  shape: StrokeShape;
  className?: string;
  width?: number;
  fibers?: boolean;
  draw?: boolean;
  color?: string;
}) {
  const id = useId().replace(/:/g, "");
  const s = SHAPES[shape];
  return (
    <svg
      viewBox={s.viewBox}
      className={`pointer-events-none text-red-brand ${draw ? "jf-draw" : ""} ${className}`}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={`rough-${id}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
      </defs>
      <g filter={`url(#rough-${id})`} stroke={color} strokeLinecap="round" strokeLinejoin="round">
        {s.paths.map((d, i) => (
          <g key={i}>
            <path d={d} strokeWidth={width} vectorEffect="non-scaling-stroke" />
            {fibers && (
              <>
                <path d={d} strokeWidth={width * 0.35} opacity={0.55} transform="translate(2.5 -2)" vectorEffect="non-scaling-stroke" />
                <path d={d} strokeWidth={width * 0.25} opacity={0.4} transform="translate(-2 3)" vectorEffect="non-scaling-stroke" />
              </>
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Espiral aprovada (referência PNG transparente). Substituir pelo SVG canônico quando existir. */
export function SpiralMark({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/spiral/spiral.webp"
      alt=""
      width={1448}
      height={1086}
      priority={priority}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
