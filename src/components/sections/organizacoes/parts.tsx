import type { ReactNode } from "react";

import { tx } from "@/lib/editable";
/** Ícones de linha (provisórios) usados na página Para Organizações. */
export type OrgIconName =
  | "target"
  | "chip"
  | "people"
  | "sprout"
  | "chart"
  | "pulse"
  | "gear"
  | "compass"
  | "eye"
  | "bulb"
  | "pen"
  | "chat"
  | "book"
  | "person"
  | "heart"
  | "spark";

const PATHS: Record<OrgIconName, ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 12l7-7M16 5h3v3" />
    </>
  ),
  chip: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" />
      <path d="M12 10l2 2-2 2-2-2z" />
    </>
  ),
  people: (
    <>
      <circle cx="12" cy="7" r="2.6" />
      <circle cx="5.5" cy="9.5" r="2.1" />
      <circle cx="18.5" cy="9.5" r="2.1" />
      <path d="M7.5 19c0-3 2-5.2 4.5-5.2s4.5 2.2 4.5 5.2M2 19c0-2.4 1.5-4.2 3.5-4.2M22 19c0-2.4-1.5-4.2-3.5-4.2" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5zM12 14c0-3.4-2.6-5.5-6-5.5 0 3.4 2.6 5.5 6 5.5z" />
    </>
  ),
  chart: <path d="M4 20h16M6.5 20v-6h3v6M10.5 20V9h3v11M14.5 20V5h3v15" />,
  pulse: <path d="M2.5 12h4l2-5 3.5 11 2.5-8 1.5 2h5.5" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.6M12 18.6v2.6M21.2 12h-2.6M5.4 12H2.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3 5.5 5.5" />
      <circle cx="12" cy="12" r="6.6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.8 8.2l-2.3 5.3-5.3 2.3 2.3-5.3z" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 17.5h6M10 21h4M8.5 14.5C7 13.3 6 11.6 6 9.6 6 6.3 8.7 3.5 12 3.5s6 2.8 6 6.1c0 2-1 3.7-2.5 4.9-.6.5-.9 1.2-.9 2v.5H9.4V17c0-.8-.3-1.5-.9-2z" />
    </>
  ),
  pen: <path d="M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10zM14 7.5l2.5 2.5M4 20l1-4.5" />,
  chat: <path d="M4 5.5h16v10H10l-4.5 3.5v-3.5H4z" />,
  book: <path d="M3 5.5c3-.8 6-.5 9 1.2 3-1.7 6-2 9-1.2v13c-3-.8-6-.5-9 1.2-3-1.7-6-2-9-1.2zM12 6.7v13" />,
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20.5c0-4 3.4-7 7.5-7s7.5 3 7.5 7" />
    </>
  ),
  heart: <path d="M12 20s-8-4.6-8-10.4C4 6.8 6 5 8.3 5c1.6 0 2.9.9 3.7 2.2C12.8 5.9 14.1 5 15.7 5 18 5 20 6.8 20 9.6 20 15.4 12 20 12 20z" />,
  spark: <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3.2 3.2M15.2 15.2l3.2 3.2M18.4 5.6l-3.2 3.2M8.8 15.2l-3.2 3.2" />,
};

export function OrgIcon({ name, className = "" }: { name: OrgIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

/** Círculo rosado com ícone (mockups). */
export function IconBubble({ name, className = "" }: { name: OrgIconName; className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-ink-900 ${/h-/.test(className) ? "" : "h-14 w-14"} ${
        /bg-/.test(className) ? "" : "bg-blush-100"
      } ${className}`}
    >
      <OrgIcon name={name} className="h-[50%] w-[50%]" />
    </span>
  );
}

/** "Ler mais" nativo (<details>) para trechos longos da copy. */
export function ReadMore({
  children,
  label = "Ler mais",
  className = "",
  onDark = false,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <details className={`group ${className}`}>
      <summary
        className={`inline-flex cursor-pointer list-none items-center gap-2 border-b border-current pb-0.5 text-[14px] font-medium [&::-webkit-details-marker]:hidden ${
          onDark ? "text-red-bright" : "text-red-brand"
        }`}
      >
        <span className="group-open:hidden">{label}</span>
        <span className="hidden group-open:inline">{tx("organizacoes/f6e0963ca5", "Ler menos")}</span>
        <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform group-open:rotate-180" aria-hidden="true">
          <path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}

/** Linhas curtas uma abaixo da outra (listas poéticas da copy). */
export function Lines({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <p className={className}>
      {items.map((it, i) => (
        <span key={i} className="block">
          {it}
        </span>
      ))}
    </p>
  );
}

/** Lista com bolinha vermelha (mockups). */
export function DotList({ items, className = "", onDark = false }: { items: ReactNode[]; className?: string; onDark?: boolean }) {
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span
            className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${onDark ? "bg-red-bright" : "bg-red-brand"}`}
            aria-hidden
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Frase de destaque com fio vermelho à esquerda. */
export function Pull({ children, className = "", onDark = false }: { children: ReactNode; className?: string; onDark?: boolean }) {
  return (
    <p
      className={`border-l-2 pl-5 font-serif text-[clamp(20px,1.7vw,26px)] leading-snug ${
        onDark ? "border-red-bright" : "border-red-brand"
      } ${className}`}
    >
      {children}
    </p>
  );
}
