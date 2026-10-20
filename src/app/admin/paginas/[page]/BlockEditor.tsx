"use client";

import { useState } from "react";
import { savePageBlock } from "../../content-actions";
import { ActionForm, fieldCls, ImageInput } from "../../_ui/form";

type Item = { key: string; kind: "text" | "image"; original: string; value: string | null };

function TextItem({ it }: { it: Item }) {
  const [v, setV] = useState(it.value ?? it.original);
  const changed = v.trim() !== it.original;
  const rows = Math.min(8, Math.max(1, Math.ceil(v.length / 90)));
  return (
    <div id={`t-${it.key.split("/")[1]}`} className="scroll-mt-28">
      <textarea
        name={changed || it.value !== null ? `t:${it.key}` : undefined} // só envia o que mudou
        value={v}
        onChange={(e) => setV(e.target.value)}
        rows={rows}
        className={`${fieldCls} mt-0 ${changed ? "border-red-brand/60 bg-blush-100/40" : ""}`}
      />
      {changed && (
        <p className="mt-1 flex flex-wrap items-center gap-2 text-[12px] text-ink-500">
          <span>
            Original: <span className="italic">{it.original.length > 140 ? it.original.slice(0, 140) + "…" : it.original}</span>
          </span>
          <button type="button" onClick={() => setV(it.original)} className="text-red-brand hover:underline">
            Voltar ao original
          </button>
        </p>
      )}
    </div>
  );
}

function ImageItem({ it }: { it: Item }) {
  const [restore, setRestore] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-[10px] border border-ink-900/10 bg-cream-100 p-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={restore ? it.original : (it.value ?? it.original)} alt="" className="h-24 w-36 rounded-md object-cover" />
      <div className="space-y-2 text-[13px]">
        <p className="text-ink-500">{it.value ? "Imagem trocada no painel" : "Imagem original"}</p>
        <ImageInput name={`i:${it.key}`} />
        {it.value && (
          <label className="flex items-center gap-2">
            <input type="checkbox" name={`r:${it.key}`} value="1" checked={restore} onChange={(e) => setRestore(e.target.checked)} />
            Voltar à imagem original
          </label>
        )}
      </div>
    </div>
  );
}

export function BlockEditor({ items }: { items: Item[] }) {
  return (
    <ActionForm action={savePageBlock} submit="Salvar bloco" className="mt-5">
      <div className="space-y-3">
        {items.map((it) => (it.kind === "image" ? <ImageItem key={it.key} it={it} /> : <TextItem key={it.key} it={it} />))}
      </div>
    </ActionForm>
  );
}
