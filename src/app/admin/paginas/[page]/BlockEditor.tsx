"use client";

import { useState } from "react";
import { savePageBlock } from "../../content-actions";
import { ActionForm, fieldCls, ImageInput } from "../../_ui/form";
import { LibraryPicker } from "../../_ui/LibraryPicker";
import { RichLine } from "../../_ui/RichLine";

export type Item = {
  key: string;
  kind: "text" | "image" | "rich";
  original: string;
  value: string | null;
  role?: string;
  group?: string | null;
  em?: boolean;
};

const A11Y = /leitores de tela/;

/** Rótulo do campo: papel na página + marca de "alterado". */
function Label({ role, changed, onReset }: { role: string; changed: boolean; onReset?: () => void }) {
  return (
    <div className="mb-1.5 flex flex-wrap items-center gap-2 text-[12px]">
      <span className="rounded-full bg-cream-200 px-2.5 py-0.5 font-medium uppercase tracking-[0.08em] text-ink-700">{role}</span>
      {changed && <span className="rounded-full bg-blush-100 px-2.5 py-0.5 text-red-deep">alterado</span>}
      {changed && onReset && (
        <button type="button" onClick={onReset} className="text-red-brand hover:underline">
          Voltar ao original
        </button>
      )}
    </div>
  );
}

/** Um texto sozinho (parágrafo, botão, legenda…): caixa que cresce com o conteúdo. */
function TextField({ it }: { it: Item }) {
  const [v, setV] = useState(it.value ?? it.original);
  const changed = v.trim() !== it.original;
  const rows = Math.min(10, Math.max(1, Math.ceil(v.length / 85)));
  return (
    <div id={`t-${it.key.split("/")[1]}`} className="scroll-mt-28">
      <Label role={it.role ?? "Texto"} changed={changed} onReset={() => setV(it.original)} />
      <textarea
        name={changed || it.value !== null ? `t:${it.key}` : undefined} // só envia o que mudou
        value={v}
        onChange={(e) => setV(e.target.value)}
        rows={rows}
        className={`${fieldCls} mt-0 ${it.role === "Título" ? "font-serif text-[20px]" : ""} ${changed ? "border-red-brand/60 bg-blush-100/40" : ""}`}
      />
      {changed && (
        <p className="mt-1 text-[12px] text-ink-500">
          Original: <span className="italic">{it.original.length > 160 ? it.original.slice(0, 160) + "…" : it.original}</span>
        </p>
      )}
    </div>
  );
}

/** Frase com destaques: texto livre, com vermelho, itálico, negrito e quebras escolhidos no próprio editor. */
function RichField({ it }: { it: Item }) {
  const [changed, setChanged] = useState(it.value !== null);
  return (
    <div id={`t-${it.key.split("/")[1]}`} className="scroll-mt-28">
      <Label role={it.role ?? "Texto"} changed={changed} />
      <RichLine name={`t:${it.key}`} original={it.original} value={it.value} big={it.role === "Título" || it.role === "Subtítulo"} onDirty={setChanged} />
    </div>
  );
}

/** Frase dividida em partes (ex.: título com uma palavra em destaque): partes lado a lado, destaque em vermelho. */
function PhraseField({ parts }: { parts: Item[] }) {
  const [vals, setVals] = useState(parts.map((p) => p.value ?? p.original));
  const changed = vals.some((v, i) => v.trim() !== parts[i].original);
  return (
    <div className="scroll-mt-28">
      <Label role={parts[0].role ?? "Texto"} changed={changed} onReset={() => setVals(parts.map((p) => p.original))} />
      <div className={`flex flex-wrap items-center gap-1.5 rounded-[10px] border p-2 ${changed ? "border-red-brand/60 bg-blush-100/40" : "border-ink-900/20 bg-cream-50"}`}>
        {parts.map((p, i) => {
          const v = vals[i];
          const partChanged = v.trim() !== p.original;
          return (
            <input
              key={p.key}
              id={`t-${p.key.split("/")[1]}`}
              name={partChanged || p.value !== null ? `t:${p.key}` : undefined}
              value={v}
              onChange={(e) => setVals((cur) => cur.map((x, j) => (j === i ? e.target.value : x)))}
              size={Math.max(4, v.length + 1)}
              title={p.em ? "Parte em destaque (vermelho)" : undefined}
              className={`min-w-0 max-w-full rounded-md border border-transparent bg-transparent px-2 py-1.5 text-[16px] hover:border-ink-900/20 focus:border-red-brand focus:bg-cream-50 focus:outline-none ${
                p.role === "Título" ? "font-serif text-[20px]" : ""
              } ${p.em ? "text-red-brand italic underline decoration-red-brand/40 underline-offset-4" : ""}`}
            />
          );
        })}
      </div>
      <p className="mt-1 text-[12px] text-ink-500">Frase em partes: o trecho em vermelho aparece em destaque no site.</p>
    </div>
  );
}

/** Imagem + sua descrição (para quem usa leitor de tela e para o Google). */
function ImageField({ it, alt }: { it: Item; alt?: Item }) {
  const [restore, setRestore] = useState(false);
  const [lib, setLib] = useState<string | null>(null);
  const [up, setUp] = useState<string | null>(null);
  const [altV, setAltV] = useState(alt ? (alt.value ?? alt.original) : "");
  const altChanged = alt ? altV.trim() !== alt.original : false;
  return (
    <div className="rounded-[12px] border border-ink-900/10 bg-cream-100 p-4">
      <Label role="Foto" changed={Boolean(it.value) || Boolean(lib) || Boolean(up)} />
      <div className="flex flex-wrap items-start gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={restore ? it.original : (up ?? lib ?? it.value ?? it.original)} alt="" className="h-28 w-44 rounded-md object-cover" />
        <div className="min-w-[240px] flex-1 space-y-3 text-[13px]">
          <p className="text-ink-500">{up ? "Nova foto escolhida (salve o bloco para aplicar)" : lib ? "Escolhida da biblioteca (salve o bloco para aplicar)" : it.value ? "Foto trocada no painel" : "Foto original do site"}</p>
          <ImageInput name={`i:${it.key}`} onPreview={setUp} />
          <LibraryPicker name={`m:${it.key}`} onPick={setLib} />
          {it.value && (
            <label className="flex items-center gap-2">
              <input type="checkbox" name={`r:${it.key}`} value="1" checked={restore} onChange={(e) => setRestore(e.target.checked)} />
              Voltar à foto original
            </label>
          )}
        </div>
      </div>
      {alt && (
        <div className="mt-4" id={`t-${alt.key.split("/")[1]}`}>
          <p className="mb-1 text-[12px] font-medium text-ink-700">Descrição da foto (lida por leitores de tela e pelo Google)</p>
          <input
            name={altChanged || alt.value !== null ? `t:${alt.key}` : undefined}
            value={altV}
            onChange={(e) => setAltV(e.target.value)}
            className={`${fieldCls} mt-0 ${altChanged ? "border-red-brand/60 bg-blush-100/40" : ""}`}
          />
        </div>
      )}
    </div>
  );
}

type Row = { type: "rich"; it: Item } | { type: "text"; it: Item } | { type: "phrase"; parts: Item[] } | { type: "image"; it: Item; alt?: Item };

function toRows(items: Item[]) {
  const rows: Row[] = [];
  const a11y: Item[] = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    if (it.kind === "rich") {
      rows.push({ type: "rich", it });
      continue;
    }
    if (it.kind === "text" && A11Y.test(it.role ?? "")) {
      a11y.push(it);
      continue;
    }
    if (it.kind === "image") {
      const next = items[i + 1];
      if (next && next.kind === "text" && next.role === "Descrição da imagem") {
        rows.push({ type: "image", it, alt: next });
        i++;
      } else rows.push({ type: "image", it });
      continue;
    }
    if (it.group) {
      const parts = [it];
      while (items[i + 1] && items[i + 1].group === it.group && items[i + 1].kind === "text") parts.push(items[++i]);
      rows.push(parts.length > 1 ? { type: "phrase", parts } : { type: "text", it });
      continue;
    }
    rows.push({ type: "text", it });
  }
  return { rows, a11y };
}

export function BlockEditor({ items }: { items: Item[] }) {
  const { rows, a11y } = toRows(items);
  return (
    <ActionForm action={savePageBlock} submit="Salvar bloco" className="mt-5">
      <div className="space-y-5">
        {rows.map((r) =>
          r.type === "rich" ? (
            <RichField key={r.it.key} it={r.it} />
          ) : r.type === "image" ? (
            <ImageField key={r.it.key} it={r.it} alt={r.alt} />
          ) : r.type === "phrase" ? (
            <PhraseField key={r.parts[0].key} parts={r.parts} />
          ) : (
            <TextField key={r.it.key} it={r.it} />
          ),
        )}
        {a11y.length > 0 && (
          <details className="rounded-[10px] border border-ink-900/10 bg-cream-100 px-4 py-3">
            <summary className="text-[13px] font-medium text-ink-700">Nome do bloco para leitores de tela ({a11y.length})</summary>
            <div className="mt-3 space-y-3">
              {a11y.map((it) => (
                <TextField key={it.key} it={it} />
              ))}
            </div>
          </details>
        )}
      </div>
    </ActionForm>
  );
}
