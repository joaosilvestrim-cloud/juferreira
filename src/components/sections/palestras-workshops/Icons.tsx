/** Ícones de linha da página Palestras & Workshops (traço fino, ponto vermelho opcional). */
export type IconName =
  | "mic"
  | "people"
  | "sliders"
  | "bulb"
  | "compass"
  | "heart"
  | "arrow-up"
  | "eye"
  | "target"
  | "gear"
  | "laptop"
  | "rocket"
  | "leaf"
  | "chat"
  | "search"
  | "pen"
  | "stage"
  | "spark"
  | "binoculars"
  | "move";

const P: Record<IconName, string> = {
  mic: "M24 6a5 5 0 0 1 5 5v9a5 5 0 0 1-10 0v-9a5 5 0 0 1 5-5zM14 19a10 10 0 0 0 20 0M24 29v6M18 35h12",
  people:
    "M24 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 13a3.4 3.4 0 1 1 0 6.8A3.4 3.4 0 0 1 12 13zM36 13a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8zM16 34c0-5 3.6-9 8-9s8 4 8 9M5 34c0-4 3-7 7-7 1.6 0 3 .5 4 1.3M43 34c0-4-3-7-7-7-1.6 0-3 .5-4 1.3",
  sliders: "M8 12h32M8 22h32M8 32h32M16 9v6M30 19v6M20 29v6",
  bulb: "M24 6a10 10 0 0 0-6 18c1.5 1.2 2 2.5 2 4h8c0-1.5.5-2.8 2-4A10 10 0 0 0 24 6zM20 32h8M21 36h6",
  compass: "M24 6a16 16 0 1 1 0 32 16 16 0 0 1 0-32zM30 16l-4 10-8 4 4-10z",
  heart: "M24 36S9 27 9 17a7 7 0 0 1 15-3 7 7 0 0 1 15 3c0 10-15 19-15 19z",
  "arrow-up": "M8 32l10-10 6 6 14-14M30 14h8v8",
  eye: "M5 22s7-11 19-11 19 11 19 11-7 11-19 11S5 22 5 22zM24 17a5 5 0 1 1 0 10 5 5 0 0 1 0-10z",
  target: "M24 7a15 15 0 1 1 0 30 15 15 0 0 1 0-30zM24 14a8 8 0 1 1 0 16 8 8 0 0 1 0-16zM24 22l14-14M33 8h5v5",
  gear: "M24 16a6 6 0 1 1 0 12 6 6 0 0 1 0-12zM24 6v5M24 33v5M8 22h5M35 22h5M12.7 10.7l3.5 3.5M31.8 29.8l3.5 3.5M12.7 33.3l3.5-3.5M31.8 14.2l3.5-3.5",
  laptop: "M10 8h28a1.5 1.5 0 0 1 1.5 1.5V27h-31V9.5A1.5 1.5 0 0 1 10 8zM4 33h40l-3-6H7z",
  rocket: "M30 8c5 0 8 0 8 0s0 3 0 8L24 30l-8-8zM16 22l-6 2-3 5 7-1M24 30l-2 6 5-3 1-7M14 32l-5 5",
  leaf: "M24 38V20M24 24c0-8 6-14 14-14 0 8-6 14-14 14zM24 30c0-6-5-11-12-11 0 6 5 11 12 11z",
  chat: "M8 10h32v20H20l-8 6v-6H8zM16 20h.5M24 20h.5M32 20h.5",
  search: "M20 8a12 12 0 1 1 0 24 12 12 0 0 1 0-24zM29 29l11 11",
  pen: "M30 8l8 8-20 20H10v-8zM26 12l8 8",
  stage: "M8 8h32v20H8zM16 36l8-8 8 8M18 20l5-5 4 4 5-5",
  spark: "M24 6v8M24 30v8M6 22h8M34 22h8M24 14l3 8-3 8-3-8z",
  binoculars:
    "M13 18a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM35 18a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM20 25h8M10 18l4-9h5v9M38 18l-4-9h-5v9",
  move: "M24 6v32M6 22h36M19 11l5-5 5 5M19 33l5 5 5-5M11 17l-5 5 5 5M37 17l5 5-5 5",
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 48 44" className={`h-7 w-8 ${className}`} aria-hidden="true">
      <path d={P[name]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Ícone em círculo rosado (padrão dos mockups). */
export function IconBubble({ name, dark = false, className = "" }: { name: IconName; dark?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
        dark ? "bg-cream-50/10 text-red-bright" : "bg-blush-100 text-ink-900"
      } ${className}`}
    >
      <Icon name={name} />
    </span>
  );
}
