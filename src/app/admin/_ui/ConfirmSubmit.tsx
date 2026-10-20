"use client";

import type { ReactNode } from "react";

/** Botão de envio que pede confirmação antes (para excluir e outras ações sem volta). */
export function ConfirmSubmit({ children, message, className = "" }: { children: ReactNode; message: string; className?: string }) {
  return (
    <button
      className={className}
      onClick={(e) => {
        if (!window.confirm(message)) e.preventDefault();
      }}
    >
      {children}
    </button>
  );
}
