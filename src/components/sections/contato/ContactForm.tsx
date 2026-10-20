"use client";

import { formToObject, postJson } from "@/lib/submit";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/Button";
import { ContatoIcon } from "./Icons";
import { EPIC_TOPICS, ROUTES, epicTopicLabel, isRouteId, type RouteId } from "./routes";

/* ───────────────────────── Campos (Site 2.0, Contato C02) ─────────────────────────
 * Campos comuns a todos os assuntos + poucos campos extras, só quando mudam o encaminhamento.
 * Os nomes (`name`) seguem os rótulos de FIELD_LABEL em src/lib/admin.ts e o schema de /api/contato.
 */

type Field = {
  name: string;
  label: ReactNode;
  hint?: ReactNode;
  kind?: "text" | "textarea" | "url" | "radio" | "checkbox";
  options?: readonly string[];
  required?: boolean;
  optional?: boolean;
  /** pergunta principal: label em destaque editorial */
  main?: boolean;
  wide?: boolean;
};

const ROUTE_FIELDS: Partial<Record<RouteId, Field[]>> = {
  palestras: [
    { name: "data", label: "Data prevista", hint: "Se ainda não estiver definida, deixe em branco.", optional: true },
    { name: "cidadeFormato", label: "Local ou formato", hint: "Presencial, online ou ainda em definição.", optional: true },
    { name: "publico", label: "Público", hint: "Quem participa e quantas pessoas, se já souber.", optional: true, wide: true },
  ],
  organizacoes: [
    {
      name: "formato",
      label: "Você já imagina algum formato?",
      optional: true,
      kind: "checkbox",
      options: ["Palestra", "Workshop", "Projeto", "Jornada", "Ainda não sei"],
      wide: true,
    },
  ],
  parcerias: [
    {
      name: "tipoConvite",
      label: "Tipo de convite",
      kind: "radio",
      optional: true,
      options: ["Entrevista", "Podcast", "Evento", "Conteúdo", "Parceria", "Outro"],
      wide: true,
    },
    { name: "dataPrazo", label: "Data ou prazo", hint: "Quando houver.", optional: true },
  ],
  epic247: [
    {
      name: "epicAssunto",
      label: "O que você precisa?",
      kind: "radio",
      options: EPIC_TOPICS.map((t) => t.label),
      required: true,
      wide: true,
    },
  ],
};

type Values = Record<string, string | string[]>;

/* ───────────────────────── UI de campo ───────────────────────── */

const inputCls =
  "w-full rounded-[10px] border border-ink-900/20 bg-cream-50 px-4 py-3 text-[16px] text-ink-900 placeholder:text-ink-500/80 transition-colors focus:border-red-brand focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2";

function Label({ htmlFor, field, as: Tag = "label" }: { htmlFor?: string; field: Field; as?: "label" | "legend" }) {
  return (
    <Tag
      {...(Tag === "label" ? { htmlFor } : {})}
      className={
        field.main
          ? "block font-serif text-[clamp(21px,1.8vw,26px)] leading-snug text-ink-900"
          : "block text-[15px] font-medium text-ink-900"
      }
    >
      {field.label}
      {field.required && (
        <span className="text-red-brand" aria-hidden>
          {" "}
          *
        </span>
      )}
      {field.optional && <span className="font-sans text-[14px] font-normal text-ink-500"> (opcional)</span>}
    </Tag>
  );
}

function FieldControl({ field, values, set }: { field: Field; values: Values; set: (name: string, v: string | string[]) => void }) {
  const uid = useId();
  const id = `${uid}-${field.name}`;
  const hintId = field.hint ? `${id}-hint` : undefined;
  const hint = field.hint && (
    <p id={hintId} className="mt-1 text-[14px] leading-snug text-ink-500">
      {field.hint}
    </p>
  );

  if (field.kind === "radio" || field.kind === "checkbox") {
    const current = values[field.name];
    const list = Array.isArray(current) ? current : current ? [current] : [];
    return (
      <fieldset aria-describedby={hintId}>
        <Label as="legend" field={field} />
        {hint}
        <div className="mt-3 flex flex-wrap gap-2.5">
          {field.options!.map((opt, i) => {
            const checked = list.includes(opt);
            return (
              <label
                key={opt}
                className={`inline-flex cursor-pointer items-center gap-2.5 rounded-full border px-4 py-2 text-[15px] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-red-brand ${
                  checked ? "border-red-brand bg-blush-100 text-ink-900" : "border-ink-900/20 bg-cream-50 hover:border-ink-900/50"
                }`}
              >
                <input
                  type={field.kind}
                  name={field.name}
                  value={opt}
                  checked={checked}
                  required={field.required && field.kind === "radio" && i === 0 ? true : undefined}
                  onChange={(e) => {
                    if (field.kind === "radio") set(field.name, opt);
                    else set(field.name, e.target.checked ? [...list, opt] : list.filter((x) => x !== opt));
                  }}
                  className="h-4 w-4 accent-[var(--jf-red-500)]"
                />
                {opt}
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }

  const value = typeof values[field.name] === "string" ? (values[field.name] as string) : "";
  const common = {
    id,
    name: field.name,
    value,
    required: field.required,
    "aria-describedby": hintId,
    onChange: (e: { target: { value: string } }) => set(field.name, e.target.value),
    className: `${inputCls} mt-2`,
  };
  return (
    <div>
      <Label htmlFor={id} field={field} />
      {field.main && hint}
      {field.kind === "textarea" ? (
        <textarea {...common} rows={field.main ? 5 : 3} className={`${common.className} resize-y`} />
      ) : (
        <input {...common} type={field.kind === "url" ? "url" : "text"} />
      )}
      {!field.main && hint}
    </div>
  );
}

/* ───────────────────────── Formulário ───────────────────────── */

const COMMON = {
  nome: { name: "nome", label: "Nome", required: true },
  organizacao: { name: "organizacao", label: "Organização", optional: true },
} satisfies Record<string, Field>;

/** Mensagem genérica da API para falha de servidor: já coberta pela frase principal do erro. */
const GENERIC_SERVER_ERROR = /^Não conseguimos enviar agora/;

function AdaptiveForm({ route, assunto }: { route: RouteId | null; assunto: string | null }) {
  const [values, setValues] = useState<Values>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const confirmRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();

  useEffect(() => {
    if (submitted) confirmRef.current?.focus();
  }, [submitted]);

  const set = (name: string, v: string | string[]) => setValues((prev) => ({ ...prev, [name]: v }));

  // Pré-seleção do assunto EPIC247 vinda de `?assunto=` (sem sobrescrever a escolha da pessoa).
  const epicDefault = epicTopicLabel(assunto);
  const effective: Values = values.epicAssunto === undefined && epicDefault ? { ...values, epicAssunto: epicDefault } : values;

  const chooseRoute = (id: RouteId) => {
    // replaceState integra com o router do Next e atualiza useSearchParams (sem recarregar nem rolar).
    window.history.replaceState(null, "", `/contato?rota=${id}#formulario`);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);
    // só os campos visíveis do assunto atual + assunto escolhido
    const res = await postJson("/api/contato", { ...formToObject(e.currentTarget), origin: "contato", rota: route ?? "" });
    setSending(false);
    // sucesso só com aceite real da API (HTTP ok + { ok: true })
    if (res.ok) setSubmitted(true);
    else setError(res.error ?? "");
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--jf-radius-sm,12px)] border border-ink-900/10 bg-cream-50 p-8 shadow-[0_20px_60px_-40px_rgba(24,20,17,0.5)] sm:p-12" role="status">
        <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blush-100 text-red-brand" aria-hidden>
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h2 ref={confirmRef} tabIndex={-1} className="jf-display jf-display-sm outline-none">
          Mensagem enviada.
        </h2>
        <p className="jf-body mt-5 max-w-[520px] text-ink-700">
          Obrigado por contar o contexto. A equipe dará continuidade pelo contato informado.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex min-h-[52px] items-center gap-4 rounded-full border border-ink-900/70 px-7 text-[16px] transition-colors hover:bg-ink-900 hover:text-cream-50"
        >
          Continuar explorando o site <ArrowIcon />
        </Link>
      </div>
    );
  }

  const naoSei = route === "nao-sei";
  const routeFields = route ? ROUTE_FIELDS[route] : undefined;
  const routeLabel = ROUTES.find((r) => r.id === route)?.label;

  const contexto: Field = {
    name: "contexto",
    label: "O que trouxe você até aqui?",
    hint: naoSei
      ? "Conte com suas palavras. Você não precisa saber em qual assunto isso se encaixa."
      : "Pode ser uma ideia, um desafio, uma pergunta ou um projeto ainda em formação.",
    kind: "textarea",
    required: true,
    main: true,
  };

  const serverDetail = error && !GENERIC_SERVER_ERROR.test(error) ? error : null;

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Formulário de contato"
      className="relative rounded-[14px] border border-ink-900/10 bg-cream-50/90 p-6 shadow-[0_20px_60px_-40px_rgba(24,20,17,0.5)] sm:p-9"
    >
      {/* Assunto: pré-selecionado por ?rota= */}
      <fieldset>
        <legend className="text-[15px] font-medium text-ink-900">Sobre o que você quer conversar?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {ROUTES.map((r) => {
            const active = r.id === route;
            return (
              <label
                key={r.id}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-[14px] leading-tight transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-red-brand ${
                  active ? "border-red-brand bg-blush-100 font-medium text-ink-900" : "border-ink-900/20 text-ink-700 hover:border-ink-900/50"
                }`}
              >
                <input
                  type="radio"
                  name="rota"
                  value={r.id}
                  checked={active}
                  onChange={() => chooseRoute(r.id)}
                  className="sr-only"
                />
                <ContatoIcon name={r.icon} className={`h-5 w-5 ${active ? "text-red-brand" : ""}`} />
                {r.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <p className="mt-8 border-t border-ink-900/10 pt-6 text-[14px] text-ink-500">
        Campos marcados com <span className="text-red-brand">*</span> são obrigatórios.
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <FieldControl field={COMMON.nome} values={effective} set={set} />
        <div>
          <label htmlFor={`${uid}-email`} className="block text-[15px] font-medium text-ink-900">
            E-mail
            <span className="text-red-brand" aria-hidden>
              {" "}
              *
            </span>
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={typeof effective.email === "string" ? effective.email : ""}
            onChange={(e) => set("email", e.target.value)}
            className={`${inputCls} mt-2`}
          />
        </div>
        <FieldControl field={COMMON.organizacao} values={effective} set={set} />
        <div>
          <label htmlFor={`${uid}-tel`} className="block text-[15px] font-medium text-ink-900">
            Telefone / WhatsApp <span className="font-normal text-ink-500">(opcional)</span>
          </label>
          <input
            id={`${uid}-tel`}
            name="telefone"
            type="tel"
            autoComplete="tel"
            value={typeof effective.telefone === "string" ? effective.telefone : ""}
            onChange={(e) => set("telefone", e.target.value)}
            className={`${inputCls} mt-2`}
          />
        </div>
      </div>

      <div className="mt-8 border-t border-ink-900/10 pt-8">
        <FieldControl field={contexto} values={effective} set={set} />
      </div>

      {routeFields && (
        <div className="mt-8 rounded-[12px] bg-blush-100/45 p-5 sm:p-7">
          <p className="jf-eyebrow flex items-center gap-3 text-[11px] text-red-brand">
            {routeLabel}
            <span className="h-px w-10 bg-current opacity-60" aria-hidden />
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {routeFields.map((f) => (
              <div key={`${route}-${f.name}`} className={f.wide ? "sm:col-span-2" : ""}>
                <FieldControl field={f} values={effective} set={set} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* honeypot anti-spam: invisível para pessoas */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Site <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error !== null && (
        <div role="alert" className="mt-8 rounded-[10px] border border-red-brand/40 bg-blush-100/60 px-4 py-3 text-[15px] text-red-deep">
          <p className="font-medium">Não foi possível enviar agora. Seus dados continuam no formulário para você tentar novamente.</p>
          {serverDetail && <p className="mt-1">{serverDetail}</p>}
        </div>
      )}

      <div className="mt-9 flex flex-col gap-5 border-t border-ink-900/10 pt-8 md:flex-row md:items-center md:gap-8">
        <button
          type="submit"
          disabled={sending}
          aria-busy={sending}
          className="jf-btn group inline-flex min-h-[56px] shrink-0 items-center justify-between gap-5 rounded-full bg-red-brand px-8 text-[17px] text-cream-50 transition-colors duration-300 hover:bg-red-deep disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? "Enviando…" : "Enviar mensagem"} <ArrowIcon />
        </button>
        <p className="text-[14px] leading-relaxed text-ink-700">
          Ao enviar, sua mensagem vai para a equipe responsável por essa conversa.{" "}
          <Link href="/privacidade" className="text-red-brand underline underline-offset-2 hover:text-red-deep">
            Como tratamos seus dados
          </Link>
        </p>
      </div>
    </form>
  );
}

function FormFromParams() {
  const params = useSearchParams();
  const rota = params.get("rota");
  return <AdaptiveForm route={isRouteId(rota) ? rota : null} assunto={params.get("assunto")} />;
}

/**
 * Formulário de Contato (C02). O assunto vem de `?rota=` (links de outras páginas ou o seletor interno).
 * `useSearchParams` fica dentro de <Suspense> (exigência do cacheComponents); o fallback pré-renderizado é o
 * formulário sem assunto.
 */
export function ContactForm() {
  return (
    <Suspense fallback={<AdaptiveForm route={null} assunto={null} />}>
      <FormFromParams />
    </Suspense>
  );
}
