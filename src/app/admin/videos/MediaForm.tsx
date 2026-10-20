"use client";

import { MEDIA_FORMATS, MEDIA_PLACEMENTS } from "@/lib/media-meta";
import { saveMediaItem } from "../more-actions";
import { ActionForm, Field, FieldGroup, fieldCls, ImageInput } from "../_ui/form";
import { MediaUrlField } from "../_ui/MediaUrlField";

export type MediaData = {
  id?: number;
  format?: string;
  title?: string;
  outlet?: string | null;
  recordedOn?: string | null;
  description?: string | null;
  url?: string;
  thumb?: string | null;
  placements?: string[];
  sort?: number;
  visible?: boolean;
};

export function MediaForm({ d, uploadEnabled }: { d: MediaData; uploadEnabled: boolean }) {
  return (
    <ActionForm action={saveMediaItem} submit={d.id ? "Salvar" : "Adicionar"} resetOnSuccess={!d.id}>
      {d.id && <input type="hidden" name="id" value={d.id} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FieldGroup label="Link ou arquivo *" hint="YouTube, Vimeo, Spotify, Apple Podcasts, SoundCloud viram player. Outros links (Instagram, LinkedIn, Globoplay) aparecem como botão para abrir.">
            <MediaUrlField defaultValue={d.url ?? ""} uploadEnabled={uploadEnabled} />
          </FieldGroup>
        </div>
        <Field label="Formato *">
          <select name="format" defaultValue={d.format ?? "entrevista"} className={fieldCls}>
            {Object.entries(MEDIA_FORMATS).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Título *" hint="Fiel ao conteúdo. Ex.: “Entrevista sobre Futuros Humanos”.">
          <input name="title" defaultValue={d.title ?? ""} className={fieldCls} maxLength={200} />
        </Field>
        <Field label="Veículo, programa ou evento">
          <input name="outlet" defaultValue={d.outlet ?? ""} className={fieldCls} placeholder="Ex.: nome do podcast" />
        </Field>
        <Field label="Data">
          <input name="recorded_on" type="date" defaultValue={d.recordedOn ?? ""} className={fieldCls} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Descrição curta" hint="Escreva depois de ver ou ouvir o material. Opcional.">
            <textarea name="description" rows={2} defaultValue={d.description ?? ""} className={fieldCls} maxLength={1000} />
          </Field>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="text-[14px] font-medium">Onde aparece no site</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {Object.entries(MEDIA_PLACEMENTS).map(([k, p]) => (
              <label key={k} className="flex cursor-pointer items-start gap-3 rounded-[10px] border border-ink-900/15 bg-cream-50 p-3 hover:border-red-brand has-[:checked]:border-red-brand has-[:checked]:bg-blush-100/50">
                <input type="checkbox" name="placements" value={k} defaultChecked={d.placements?.includes(k)} className="mt-1 h-4 w-4 accent-[var(--jf-red-500)]" />
                <span>
                  <span className="block text-[15px] font-medium">{p.label}</span>
                  <span className="block text-[13px] text-ink-500">{p.where}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <FieldGroup label="Capa (opcional)" hint="Usada quando o link não tem player e como capa de arquivos de vídeo.">
          <ImageInput name="thumb" current={d.thumb} />
          {d.thumb && (
            <label className="mt-2 flex items-center gap-2 text-[13px]">
              <input type="checkbox" name="remove_thumb" value="1" /> Remover capa
            </label>
          )}
        </FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Ordem" hint="Menor aparece primeiro.">
            <input name="sort" type="number" defaultValue={d.sort ?? 0} className={fieldCls} />
          </Field>
          <label className="flex items-center gap-2 self-end pb-3 text-[15px]">
            <input type="checkbox" name="visible" defaultChecked={d.visible ?? true} className="h-4 w-4 accent-[var(--jf-red-500)]" />
            Visível no site
          </label>
        </div>
      </div>
    </ActionForm>
  );
}
