"use client";

import { useState, type ReactNode } from "react";

/** Formulário de criação recolhido atrás de um botão "+ Adicionar …" (a lista fica em primeiro plano). */
export function AddPanel({ label, children, defaultOpen = false }: { label: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div data-add-panel={label} className={`mt-5 rounded-[14px] border ${open ? "border-red-brand/40 bg-cream-50 p-5" : "border-dashed border-ink-900/25"}`}>
      {open ? (
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-[16px] font-medium">{label}</p>
          <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-ink-900/20 px-3 py-1 text-[13px] hover:border-red-brand">
            Fechar
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          className="flex w-full items-center gap-3 rounded-[14px] px-5 py-4 text-left text-[15px] font-medium hover:bg-cream-50 hover:text-red-brand"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-brand text-[18px] leading-none text-cream-50" aria-hidden>
            +
          </span>
          {label}
        </button>
      )}
      {open && children}
    </div>
  );
}
