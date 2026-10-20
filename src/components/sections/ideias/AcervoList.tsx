"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowIcon } from "@/components/ui/Button";

export type AcervoItem = {
  slug: string;
  /** Tipo explícito do conteúdo (Artigo, Ensaio, Podcast, Entrevista, Registro de palestra). */
  kind: string;
  title: string;
  excerpt: string | null;
  /** Data já formatada no servidor (pt-BR), só quando houver data de publicação. */
  dateLabel: string | null;
  dateIso: string | null;
  cover: string | null;
  coverPosition?: string;
  /** Categorias (ids do painel) e seus nomes públicos. */
  cats: { id: string; name: string }[];
  epistemic: string | null;
};

/**
 * Lista do acervo com filtros por categoria. Os filtros só aparecem quando há conteúdo em mais de uma categoria;
 * seleção múltipla (mostra o que pertence a qualquer categoria marcada). Sem JavaScript, a lista aparece inteira.
 */
export function AcervoList({ items, labelledBy }: { items: AcervoItem[]; labelledBy: string }) {
  const [active, setActive] = useState<string[]>([]);

  const cats = useMemo(() => {
    const seen = new Map<string, string>();
    for (const it of items) for (const c of it.cats) if (!seen.has(c.id)) seen.set(c.id, c.name);
    return [...seen.entries()].map(([id, name]) => ({ id, name }));
  }, [items]);

  const showFilters = items.length > 1 && cats.length > 1;
  const visible = active.length ? items.filter((it) => it.cats.some((c) => active.includes(c.id))) : items;

  const toggle = (id: string) => setActive((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  return (
    <div>
      {showFilters && (
        <div className="mb-10" role="group" aria-label="Filtrar por categoria">
          <ul className="flex flex-wrap gap-2">
            <li>
              <button
                type="button"
                aria-pressed={active.length === 0}
                onClick={() => setActive([])}
                className={chipCls(active.length === 0)}
              >
                Tudo
              </button>
            </li>
            {cats.map((c) => (
              <li key={c.id}>
                <button type="button" aria-pressed={active.includes(c.id)} onClick={() => toggle(c.id)} className={chipCls(active.includes(c.id))}>
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
          <p className="sr-only" aria-live="polite">
            {visible.length === 1 ? "1 conteúdo" : `${visible.length} conteúdos`}
          </p>
        </div>
      )}

      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" aria-labelledby={labelledBy}>
        {visible.map((a) => (
          <li key={a.slug}>
            <article className="flex h-full flex-col">
              {a.cover && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                  <Image
                    src={a.cover}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                    className="object-cover"
                    style={a.coverPosition ? { objectPosition: a.coverPosition } : undefined}
                  />
                </div>
              )}
              <p className="jf-eyebrow mt-5 text-[11px] text-red-brand">
                {a.kind}
                {a.dateLabel && (
                  <>
                    <span className="text-ink-500" aria-hidden>
                      {" · "}
                    </span>
                    <time dateTime={a.dateIso ?? undefined} className="text-ink-500">
                      {a.dateLabel}
                    </time>
                  </>
                )}
              </p>
              <h3 className="mt-3 font-serif text-[clamp(22px,1.9vw,26px)] font-medium leading-[1.15]">
                <Link href={`/ideias/${a.slug}`} className="hover:text-red-brand focus-visible:text-red-brand">
                  {a.title}
                </Link>
              </h3>
              {a.excerpt && <p className="mt-3 text-[15.5px] leading-relaxed text-ink-700">{a.excerpt}</p>}
              {(a.cats.length > 0 || a.epistemic) && (
                <p className="mt-3 text-[13px] text-ink-500">
                  {[a.epistemic, ...a.cats.map((c) => c.name)].filter(Boolean).join(" · ")}
                </p>
              )}
              <div className="mt-auto pt-5">
                <Link
                  href={`/ideias/${a.slug}`}
                  className="group inline-flex items-center gap-2 border-b border-current pb-0.5 text-[15px] font-medium text-red-brand"
                  aria-label={`Leia: ${a.title}`}
                >
                  Leia o texto
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

function chipCls(on: boolean) {
  return `inline-flex min-h-11 items-center rounded-full border px-4 text-[14px] transition-colors ${
    on ? "border-red-brand bg-red-brand text-cream-50" : "border-ink-900/20 bg-cream-50 text-ink-900 hover:border-red-brand hover:text-red-brand"
  }`;
}
