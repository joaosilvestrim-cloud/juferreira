/** Ícones de linha da timeline da trajetória (B2). Traço fino, acento vermelho. */
export type MilestoneIcon = "gear" | "laptop" | "chart" | "people" | "heart";

export function MilestoneGlyph({ name, className = "" }: { name: MilestoneIcon; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 32 32" className={`h-7 w-7 text-red-brand ${className}`} aria-hidden="true">
      {name === "gear" && (
        <g {...common}>
          <circle cx="16" cy="16" r="4.2" />
          <path d="M16 5v3.2M16 23.8V27M5 16h3.2M23.8 16H27M8.2 8.2l2.3 2.3M21.5 21.5l2.3 2.3M8.2 23.8l2.3-2.3M21.5 10.5l2.3-2.3" />
          <circle cx="16" cy="16" r="8.3" />
        </g>
      )}
      {name === "laptop" && (
        <g {...common}>
          <rect x="7" y="8" width="18" height="12" rx="1.2" />
          <path d="M4 24h24l-2-4H6z" />
        </g>
      )}
      {name === "chart" && (
        <g {...common}>
          <path d="M6 26h20M9 26v-5M14 26v-8M19 26v-11M24 26v-15" />
          <path d="M7 15 14 9l4 3 7-6M21 6h4v4" />
        </g>
      )}
      {name === "people" && (
        <g {...common}>
          <circle cx="16" cy="9.5" r="3.2" />
          <circle cx="8" cy="13" r="2.6" />
          <circle cx="24" cy="13" r="2.6" />
          <path d="M10.5 25c0-3.6 2.5-6.5 5.5-6.5s5.5 2.9 5.5 6.5M3.5 25c0-2.8 2-5 4.5-5 1 0 1.9.3 2.6.9M28.5 25c0-2.8-2-5-4.5-5-1 0-1.9.3-2.6.9" />
        </g>
      )}
      {name === "heart" && (
        <g {...common}>
          <path d="M16 26S5 19.5 5 12.2C5 8.8 7.6 6.5 10.6 6.5c2.3 0 4.2 1.3 5.4 3.2 1.2-1.9 3.1-3.2 5.4-3.2 3 0 5.6 2.3 5.6 5.7C27 19.5 16 26 16 26z" />
        </g>
      )}
    </svg>
  );
}
