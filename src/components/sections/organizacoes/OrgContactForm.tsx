"use client";

import { formToObject, postJson } from "@/lib/submit";
import Link from "next/link";
import { type FormEvent, useId, useState } from "react";
import { ArrowIcon } from "@/components/ui/Button";

/**
 * Formulário orientado a contexto (copy B9).
 * PROVISÓRIO: sem backend — o envio apenas mostra uma confirmação local.
 * Conectar ao destino real (e-mail/CRM) antes do go-live.
 */
const MOMENTS = [
  "Estamos discutindo estratégia ou futuros",
  "Estamos vivendo uma transformação",
  "Tecnologia / IA está criando novas perguntas",
  "Precisamos desenvolver lideranças ou capacidades",
  "Temos um evento ou convenção",
  "Existe um desafio específico",
  "Ainda não sei como nomear",
];

const field =
  "mt-2 w-full rounded-[10px] border border-ink-900/20 bg-white/70 px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-500/70 focus:border-red-brand focus:outline-none focus:ring-2 focus:ring-red-brand/20";
const label = "block text-[14px] font-medium text-ink-900";
const hint = "mt-1 block text-[13px] leading-snug text-ink-500";

function Req() {
  return (
    <span className="text-red-brand" aria-hidden>
      {" "}
      *
    </span>
  );
}

export function OrgContactForm({ className = "" }: { className?: string }) {
  const id = useId();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);
    const res = await postJson("/api/contato", { ...formToObject(e.currentTarget), origin: "organizacoes", rota: "organizacoes" });
    setSending(false);
    if (res.ok) setSent(true);
    else setError(res.error ?? "Não conseguimos enviar agora. Tente novamente.");
  }

  if (sent) {
    return (
      <div className={`rounded-[var(--jf-radius-sm)] bg-blush-100 p-8 text-center ${className}`} role="status" aria-live="polite">
        <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">Obrigada por contar o contexto.</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
          Nenhum formato será sugerido antes de entendermos o contexto.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-[14px] font-medium text-red-brand underline underline-offset-4"
        >
          Voltar ao formulário
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`relative space-y-6 ${className}`} aria-describedby={`${id}-priv`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-nome`} className={label}>
            Nome
            <Req />
          </label>
          <input id={`${id}-nome`} name="nome" required autoComplete="name" placeholder="Seu nome" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-org`} className={label}>
            Organização
            <Req />
          </label>
          <input
            id={`${id}-org`}
            name="organizacao"
            required
            autoComplete="organization"
            placeholder="Nome da sua organização"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            E-mail profissional
            <Req />
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="seu@email.com"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-tel`} className={label}>
            Telefone / WhatsApp <span className="font-normal text-ink-500">(opcional)</span>
          </label>
          <input id={`${id}-tel`} name="telefone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <fieldset>
        <legend className={label}>
          O que melhor descreve o momento da sua organização?
          <Req />
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {MOMENTS.map((m, i) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-3 rounded-[10px] border border-ink-900/15 bg-white/60 px-4 py-2.5 text-[14px] leading-snug transition-colors has-[:checked]:border-red-brand has-[:checked]:bg-blush-100/70"
            >
              <input type="radio" name="momento" value={m} required={i === 0} className="h-4 w-4 shrink-0 accent-[var(--jf-red-500)]" />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`${id}-contexto`} className={label}>
          O que está acontecendo?
          <Req />
        </label>
        <span id={`${id}-contexto-h`} className={hint}>
          Conte um pouco do contexto. O que mudou, o que está em jogo e por que essa conversa importa agora?
        </span>
        <textarea
          id={`${id}-contexto`}
          name="contexto"
          required
          rows={4}
          aria-describedby={`${id}-contexto-h`}
          className={field}
        />
      </div>

      <div>
        <label htmlFor={`${id}-diferente`} className={label}>
          O que você gostaria que pudesse ser diferente depois?
        </label>
        <span id={`${id}-diferente-h`} className={hint}>
          Mais clareza; uma decisão; alinhamento; novas possibilidades; uma conversa difícil; um movimento; uma provocação para
          lideranças.
        </span>
        <textarea id={`${id}-diferente`} name="diferente" rows={3} aria-describedby={`${id}-diferente-h`} className={field} />
      </div>

      <div>
        <label htmlFor={`${id}-prazo`} className={label}>
          Existe algum prazo ou momento importante? <span className="font-normal text-ink-500">(opcional)</span>
        </label>
        <span id={`${id}-prazo-h`} className={hint}>
          Evento; planejamento estratégico; convenção; mudança organizacional; lançamento; reunião de liderança; ou nenhuma
          data definida.
        </span>
        <textarea id={`${id}-prazo`} name="prazo" rows={2} aria-describedby={`${id}-prazo-h`} className={field} />
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Site <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {error && (
        <p role="alert" className="rounded-[10px] border border-red-brand/40 bg-blush-100/60 px-4 py-3 text-[15px] text-red-deep">
          {error}
        </p>
      )}
      <div className="flex flex-col gap-4 border-t border-ink-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p id={`${id}-priv`} className="max-w-[300px] text-[12.5px] leading-snug text-ink-500">
          Seus dados serão usados apenas para responder a este contato. Veja a{" "}
          <Link href="/privacidade" className="text-ink-700 underline underline-offset-2 hover:text-red-brand">
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={sending}
          aria-busy={sending}
          className="jf-btn group inline-flex min-h-[52px] items-center justify-between gap-4 rounded-full bg-red-brand px-7 text-[16px] text-cream-50 transition-colors hover:bg-red-deep disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? "Enviando…" : "Vamos entender essa pergunta"}
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
