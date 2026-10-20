"use client";

import { useState } from "react";
import { saveSeo } from "../content-actions";
import { ActionForm, Field, fieldCls, ImageInput } from "../_ui/form";

type S = { path: string; title: string; description: string; noindex: boolean; og: string; customOg: boolean };

export function SeoForm({ s }: { s: S }) {
  const [title, setTitle] = useState(s.title);
  const [desc, setDesc] = useState(s.description);
  return (
    <ActionForm action={saveSeo} submit="Salvar SEO">
      <input type="hidden" name="path" value={s.path} />
      <Field label={`Título (${title.length}/60)`} hint="Ideal: até 60 caracteres. Aparece na aba do navegador e no Google.">
        <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} className={fieldCls} />
      </Field>
      <Field label={`Descrição (${desc.length}/160)`} hint="Ideal: 120 a 160 caracteres. Resumo que aparece no Google.">
        <textarea name="description" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} maxLength={320} className={fieldCls} />
      </Field>
      <Field label="Imagem de compartilhamento" hint="1200 × 630 px. Vazio = imagem gerada automaticamente com a foto da Ju.">
        <div className="mt-2 flex flex-wrap items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.og} alt="" className="h-[84px] w-[160px] rounded-md border border-ink-900/10 object-cover" />
          <ImageInput name="og_image" />
        </div>
      </Field>
      {s.customOg && (
        <label className="flex items-center gap-2 text-[14px]">
          <input type="checkbox" name="remove_og" className="h-4 w-4" /> Voltar para a imagem automática
        </label>
      )}
      <label className="flex items-center gap-2 text-[14px]">
        <input type="checkbox" name="noindex" defaultChecked={s.noindex} className="h-4 w-4 accent-[var(--jf-red-500)]" /> Esconder esta página do
        Google
      </label>
      <div className="rounded-[10px] border border-ink-900/10 bg-cream-100 p-4">
        <p className="text-[12px] uppercase tracking-[0.12em] text-ink-500">Prévia no Google</p>
        <p className="mt-2 truncate text-[18px] text-[#1a0dab]">{title || "Título padrão da página"}</p>
        <p className="text-[13px] text-[#006621]">juferreira{s.path === "/" ? "" : s.path}</p>
        <p className="line-clamp-2 text-[14px] text-ink-700">{desc || "Descrição padrão da página."}</p>
      </div>
    </ActionForm>
  );
}
