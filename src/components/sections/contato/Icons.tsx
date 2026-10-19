import type { IconName } from "./routes";

/** Ícones de linha da página Contato (traço fino, acento vermelho pontual). */
export function ContatoIcon({ name, className = "h-7 w-7" }: { name: IconName; className?: string }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {name === "mic" && (
        <g {...p}>
          <rect x="15" y="4" width="9" height="13" rx="4.5" transform="rotate(35 19.5 10.5)" />
          <path d="M14 16 6 26l2 2 10-8" />
        </g>
      )}
      {name === "people" && (
        <g {...p}>
          <circle cx="16" cy="10" r="3.5" />
          <circle cx="7.5" cy="13" r="2.8" />
          <circle cx="24.5" cy="13" r="2.8" />
          <path d="M10 25c0-4 2.7-7 6-7s6 3 6 7M3 25c0-3 2-5.5 4.5-5.5M29 25c0-3-2-5.5-4.5-5.5" />
        </g>
      )}
      {name === "telescope" && (
        <g {...p}>
          <path d="m5 17 18-9 3 6-18 9z" />
          <path d="m14 19 -4 9M16 18l4 10M23 8l-1-2 4-2 1 2" />
        </g>
      )}
      {name === "chat" && (
        <g {...p}>
          <path d="M5 8.5C5 6.6 6.6 5 8.5 5h15C25.4 5 27 6.6 27 8.5v9c0 1.9-1.6 3.5-3.5 3.5H14l-6 5v-5h0.5C6.6 21 5 19.4 5 17.5z" />
        </g>
      )}
      {name === "heart" && (
        <path {...p} d="M16 27S4 19.5 4 11.8C4 8.6 6.5 6 9.6 6c2.6 0 4.6 1.6 6.4 4 1.8-2.4 3.8-4 6.4-4C25.5 6 28 8.6 28 11.8 28 19.5 16 27 16 27z" />
      )}
      {name === "question" && (
        <g {...p}>
          <path d="M11 11.5C11 8.5 13.3 6 16.3 6S21.5 8.3 21.5 11c0 4-5.3 4.6-5.3 9" />
          <circle cx="16.2" cy="25.5" r="0.9" fill="currentColor" />
        </g>
      )}
      {name === "star" && (
        <path {...p} d="m16 4 3.6 7.6 8.2 1-6 5.7 1.6 8.2L16 22.4l-7.4 4.1 1.6-8.2-6-5.7 8.2-1z" />
      )}
      {name === "mail" && (
        <g {...p}>
          <rect x="4" y="8" width="24" height="17" rx="1.5" />
          <path d="m5 9 11 9 11-9" />
        </g>
      )}
      {name === "whatsapp" && (
        <g {...p}>
          <path d="M16 4.5A11.5 11.5 0 0 0 6 21.6L4.5 27.5l6-1.5A11.5 11.5 0 1 0 16 4.5z" />
          <path d="M12 11c0 5 4 9 9 9l1.5-2.5-3-1.5-1.3 1.3c-1.6-.8-2.7-1.9-3.5-3.5L16 12.5 14.5 9.5z" />
        </g>
      )}
      {name === "linkedin" && (
        <g {...p}>
          <rect x="4" y="4" width="24" height="24" rx="3" />
          <path d="M10 14v8M10 10v.2M15 22v-8M15 17.5c0-2 1.5-3.5 3.3-3.5S22 15.3 22 17.5V22" />
        </g>
      )}
      {name === "instagram" && (
        <g {...p}>
          <rect x="4" y="4" width="24" height="24" rx="7" />
          <circle cx="16" cy="16" r="5.5" />
          <circle cx="23" cy="9" r="0.8" fill="currentColor" />
        </g>
      )}
      {name === "form" && (
        <g {...p}>
          <rect x="6" y="4" width="20" height="24" rx="2" />
          <path d="M10 11h12M10 16h12M10 21h7" />
        </g>
      )}
    </svg>
  );
}

/** Ícone dentro de um disco rosa (cards de porta / atalho / canal). */
export function IconDisc({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <span className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blush-100 text-ink-900 ${className}`}>
      <ContatoIcon name={name} className="h-8 w-8" />
    </span>
  );
}
