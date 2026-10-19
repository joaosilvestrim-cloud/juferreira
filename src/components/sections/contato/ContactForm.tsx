"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/Button";
import { ContatoIcon } from "./Icons";
import { EPIC_TOPICS, ROUTES, isRouteId, type RouteId } from "./routes";

/* ───────────────────────── Definição dos campos (copy: docs/01_COPY/contato.md, Bloco 3) ───────────────────────── */

type Field = {
  name: string;
  label: ReactNode;
  hint?: ReactNode;
  kind?: "text" | "textarea" | "url" | "radio" | "checkbox";
  options?: readonly string[];
  required?: boolean;
  optional?: boolean;
  /** pergunta principal da rota — label em destaque editorial */
  main?: boolean;
  wide?: boolean;
};

const ROUTE_FIELDS: Record<Exclude<RouteId, "nao-sei">, { intro?: string; fields: Field[] }> = {
  palestras: {
    fields: [
      { name: "evento", label: "Nome do evento ou organização" },
      { name: "data", label: "Data prevista", hint: "Se ainda não estiver definida, tudo bem." },
      { name: "cidadeFormato", label: "Cidade / formato", hint: "Presencial, online ou ainda em definição." },
      { name: "publico", label: "Público estimado" },
      { name: "sala", label: "Quem estará na sala?", kind: "textarea", wide: true },
      {
        name: "diferenteDepois",
        label: "O que você gostaria que estivesse diferente depois dessa conversa?",
        hint: "Pode ser uma reflexão, uma pergunta nova, alinhamento, energia para uma transformação, ampliação de perspectiva ou outra coisa.",
        kind: "textarea",
        required: true,
        main: true,
        wide: true,
      },
      { name: "tema", label: "Existe algum tema que já está sendo considerado?", optional: true, wide: true },
    ],
  },
  organizacoes: {
    fields: [
      { name: "acontecendo", label: "O que está acontecendo na organização?", kind: "textarea", required: true, main: true, wide: true },
      { name: "porqueAgora", label: "Por que essa questão importa agora?", kind: "textarea" },
      { name: "envolvidos", label: "Quem está envolvido nessa conversa?", kind: "textarea" },
      { name: "prazo", label: "Existe algum momento importante ou prazo?", wide: true },
      {
        name: "diferenteDepoisOrg",
        label: "O que você gostaria que pudesse ser diferente depois?",
        kind: "textarea",
        required: true,
        main: true,
        wide: true,
      },
      {
        name: "formato",
        label: "Você já imagina algum formato?",
        optional: true,
        kind: "checkbox",
        options: ["Palestra", "Workshop", "Projeto", "Jornada", "Ainda não sei"],
        wide: true,
      },
    ],
  },
  "futuros-aplicados": {
    fields: [
      {
        name: "pergunta",
        label: "Qual é a pergunta que vocês gostariam de explorar?",
        kind: "textarea",
        required: true,
        main: true,
        wide: true,
      },
      { name: "porTras", label: "Que decisão, estratégia ou contexto está por trás dela?", kind: "textarea", wide: true },
      {
        name: "horizonte",
        label: "Existe algum horizonte temporal relevante?",
        hint: "Ex.: 3 anos, 5 anos, 10 anos, ainda não definido.",
      },
      { name: "participantes", label: "Quem deveria participar dessa exploração?" },
    ],
  },
  parcerias: {
    intro: "Conte o que você está imaginando.",
    fields: [
      { name: "veiculo", label: "Empresa, veículo ou projeto", wide: true },
      {
        name: "tipoConvite",
        label: "Tipo de convite",
        kind: "radio",
        options: ["Entrevista", "Podcast", "Evento", "Conteúdo", "Parceria", "Outro"],
        wide: true,
      },
      { name: "dataPrazo", label: "Data ou prazo", hint: "Quando houver." },
      { name: "link", label: "Link de referência", kind: "url", optional: true },
      {
        name: "juFizesse",
        label: "O que você gostaria que a Ju fizesse ou construísse junto?",
        kind: "textarea",
        main: true,
        wide: true,
      },
    ],
  },
  epic247: {
    fields: [
      {
        name: "epicAssunto",
        label: "Sobre o que você precisa falar?",
        kind: "radio",
        options: EPIC_TOPICS.map((t) => t.label),
        required: true,
        main: true,
        wide: true,
      },
    ],
  },
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
        <textarea {...common} rows={field.main ? 4 : 3} className={`${common.className} resize-y`} />
      ) : (
        <input {...common} type={field.kind === "url" ? "url" : "text"} />
      )}
      {!field.main && hint}
    </div>
  );
}

/* ───────────────────────── Formulário adaptativo ───────────────────────── */

const COMMON: Record<"nome" | "organizacao", Field> = {
  nome: { name: "nome", label: "Nome", required: true },
  organizacao: { name: "organizacao", label: "Organização", optional: true },
};

function AdaptiveForm({ route, assunto }: { route: RouteId | null; assunto: string | null }) {
  const [values, setValues] = useState<Values>({});
  const [submitted, setSubmitted] = useState(false);
  const confirmRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();

  useEffect(() => {
    if (submitted) confirmRef.current?.focus();
  }, [submitted]);

  const set = (name: string, v: string | string[]) => setValues((prev) => ({ ...prev, [name]: v }));

  // Pré-seleção do assunto EPIC247 vinda dos atalhos do Bloco 4 (sem sobrescrever a escolha da pessoa).
  const epicDefault = EPIC_TOPICS.find((t) => t.id === assunto)?.label;
  const effective: Values = values.epicAssunto === undefined && epicDefault ? { ...values, epicAssunto: epicDefault } : values;

  const chooseRoute = (id: RouteId) => {
    // replaceState integra com o router do Next e atualiza useSearchParams (sem recarregar nem rolar).
    window.history.replaceState(null, "", `/contato?rota=${id}#formulario`);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO(backend): enviar `effective` + rota para o destino oficial (e-mail/CRM) quando existir.
    // Por enquanto nada é transmitido: apenas exibimos o estado de confirmação.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--jf-radius-sm,12px)] border border-ink-900/10 bg-cream-50 p-8 shadow-[0_20px_60px_-40px_rgba(24,20,17,0.5)] sm:p-12" role="status">
        <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blush-100 text-red-brand" aria-hidden>
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h3 ref={confirmRef} tabIndex={-1} className="jf-display jf-display-sm outline-none">
          Recebemos. <span className="jf-em">Obrigada por começar a conversa.</span>
        </h3>
        <p className="jf-body mt-5 max-w-[520px] text-ink-700">
          Vamos ler o contexto antes de responder para que a próxima mensagem não comece do zero.
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
  const routeCfg = route && route !== "nao-sei" ? ROUTE_FIELDS[route] : null;
  const routeLabel = ROUTES.find((r) => r.id === route)?.label;

  const universal: Field = naoSei
    ? {
        name: "contexto",
        label: "Conte com suas palavras.",
        hint: (
          <>
            Você não precisa saber em qual categoria isso cabe. Conte o que está acontecendo, a ideia que teve ou a pergunta
            que trouxe você até aqui. <strong className="font-medium text-ink-700">A gente ajuda a encontrar o lugar certo depois.</strong>
          </>
        ),
        kind: "textarea",
        required: true,
        main: true,
      }
    : {
        name: "contexto",
        label: "Conte o que trouxe você até aqui",
        hint: "O que está acontecendo? O que você está tentando resolver, construir, compreender ou tornar possível?",
        kind: "textarea",
        required: true,
        main: true,
      };

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Formulário de contato"
      className="rounded-[14px] border border-ink-900/10 bg-cream-50/90 p-6 shadow-[0_20px_60px_-40px_rgba(24,20,17,0.5)] sm:p-9"
    >
      {/* Seletor de rota (alimentado também pelos cards do Bloco 2 e atalhos do Bloco 4) */}
      <fieldset>
        <legend className="text-[15px] font-medium text-ink-900">Escolha a opção que mais se aproxima do seu momento.</legend>
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

      <div className="mt-8 grid gap-5 border-t border-ink-900/10 pt-8 sm:grid-cols-2">
        <FieldControl field={COMMON.nome} values={effective} set={set} />
        {!naoSei && <FieldControl field={COMMON.organizacao} values={effective} set={set} />}
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
        {!naoSei && (
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
        )}
      </div>

      <div className="mt-8 border-t border-ink-900/10 pt-8">
        <FieldControl field={universal} values={effective} set={set} />
      </div>

      {routeCfg && (
        <div className="mt-8 rounded-[12px] bg-blush-100/45 p-5 sm:p-7">
          <p className="jf-eyebrow flex items-center gap-3 text-[11px] text-red-brand">
            {routeLabel}
            <span className="h-px w-10 bg-current opacity-60" aria-hidden />
          </p>
          {routeCfg.intro && <p className="mt-3 font-serif text-[clamp(21px,1.8vw,26px)] leading-snug">{routeCfg.intro}</p>}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {routeCfg.fields.map((f) => (
              <div key={`${route}-${f.name}`} className={f.wide ? "sm:col-span-2" : ""}>
                <FieldControl field={f} values={effective} set={set} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-9 flex flex-col gap-5 border-t border-ink-900/10 pt-8 md:flex-row md:items-center md:gap-8">
        <button
          type="submit"
          className="group inline-flex min-h-[56px] shrink-0 items-center justify-between gap-5 rounded-full bg-red-brand px-8 text-[17px] text-cream-50 transition-colors duration-300 hover:bg-red-deep"
        >
          Continuar a conversa <ArrowIcon />
        </button>
        <div className="text-[14px] leading-relaxed text-ink-700">
          <p className="font-medium">Revise apenas se quiser. Não precisa estar perfeito.</p>
          <p>
            Ao enviar, sua mensagem vai para a equipe responsável por essa conversa.{" "}
            <Link href="/privacidade" className="text-red-brand underline underline-offset-2 hover:text-red-deep">
              Política de Privacidade
            </Link>
          </p>
        </div>
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
 * Formulário adaptativo do Bloco 3. A rota vem de `?rota=` (cards do Bloco 2 / atalhos do Bloco 4 / seletor interno).
 * `useSearchParams` fica dentro de <Suspense> (exigência do cacheComponents); o fallback pré-renderizado é o
 * formulário sem rota, funcional também sem JS.
 */
export function ContactForm() {
  return (
    <Suspense fallback={<AdaptiveForm route={null} assunto={null} />}>
      <FormFromParams />
    </Suspense>
  );
}
