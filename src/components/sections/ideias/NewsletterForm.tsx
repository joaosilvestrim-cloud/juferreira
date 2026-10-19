"use client";

import { postJson } from "@/lib/submit";
import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ui/Button";

/**
 * Inscrição em "Uma Terça-feira Qualquer".
 * SEM BACKEND: a confirmação é apenas estado local. TODO: conectar ao provedor de e-mail
 * (double opt-in) e registrar data/versão do consentimento LGPD.
 */
export function NewsletterForm({ className = "" }: { className?: string }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Confira o e-mail informado.");
      return;
    }
    if (!consent) {
      setError("Para assinar, é preciso aceitar o recebimento e a Política de Privacidade.");
      return;
    }
    setError(null);
    if (sending) return;
    setSending(true);
    const consentText = form.querySelector(`label[for="${id}-consent"]`)?.textContent?.trim() ?? "consentimento newsletter";
    const res = await postJson("/api/newsletter", {
      email: email.trim(),
      consent: true,
      consentText,
      source: "ideias",
      website: (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "",
    });
    setSending(false);
    if (res.ok) setDone(true);
    else setError(res.error ?? "Não conseguimos registrar agora. Tente novamente.");
  }

  if (done) {
    return (
      <div className={`rounded-[var(--jf-radius-sm)] border border-red-brand/30 bg-cream-50 p-6 ${className}`} role="status" aria-live="polite">
        <p className="font-serif text-[22px] leading-snug">Obrigada.</p>
        <p className="mt-2 text-[15px] text-ink-700">
          Inscrição registrada. Uma Terça-feira Qualquer vai chegar em <strong className="font-medium">{email.trim()}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className={`relative ${className}`} aria-describedby={`${id}-micro`}>
      <label htmlFor={`${id}-email`} className="sr-only">
        Seu melhor e-mail
      </label>
      <input
        id={`${id}-email`}
        type="email"
        name="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="min-h-[52px] w-full rounded-full border border-ink-900/25 bg-cream-50 px-6 text-[16px] text-ink-900 placeholder:text-ink-500 focus:border-red-brand focus:outline-none"
      />
      <div className="mt-4 flex items-start gap-3">
        <input
          id={`${id}-consent`}
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-[var(--jf-red-500)]"
        />
        <label htmlFor={`${id}-consent`} className="text-[14px] leading-snug text-ink-700">
          Concordo em receber Uma Terça-feira Qualquer por e-mail e declaro que li a{" "}
          <Link href="/privacidade" className="text-red-brand underline underline-offset-2">
            Política de Privacidade
          </Link>
          . Posso cancelar quando quiser.
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-3 text-[14px] font-medium text-red-brand">
          {error}
        </p>
      )}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="jf-btn group mt-5 disabled:cursor-wait disabled:opacity-70 inline-flex min-h-[52px] w-full items-center justify-between gap-4 rounded-full bg-red-brand px-7 text-left text-[16px] text-cream-50 transition-colors duration-300 hover:bg-red-deep"
      >
        <span>{sending ? "Enviando…" : "Assine Uma Terça-feira Qualquer"}</span>
        <ArrowIcon />
      </button>
      <p id={`${id}-micro`} className="mt-3 text-center text-[13px] text-ink-500">
        Sem ruído. Sem obrigação de responder. Apenas uma terça-feira por semana.
      </p>
    </form>
  );
}
