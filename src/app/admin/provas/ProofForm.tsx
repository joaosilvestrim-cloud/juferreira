"use client";

import { saveProof } from "../content-actions";
import { ActionForm, Field, fieldCls, ImageInput } from "../_ui/form";

export type ProofData = {
  id?: number;
  kind: "depoimento" | "logo" | "foto" | "video";
  title?: string | null;
  role?: string | null;
  quote?: string | null;
  url?: string | null;
  sort?: number;
  visible?: boolean;
  image?: string | null;
};

export function ProofForm({ d }: { d: ProofData }) {
  const k = d.kind;
  return (
    <ActionForm action={saveProof} submit={d.id ? "Salvar" : "Adicionar"} resetOnSuccess={!d.id}>
      {d.id && <input type="hidden" name="id" value={d.id} />}
      <input type="hidden" name="kind" value={k} />
      <div className="grid gap-4 sm:grid-cols-2">
        {k === "depoimento" && (
          <>
            <div className="sm:col-span-2">
              <Field label="Depoimento *">
                <textarea name="quote" rows={3} defaultValue={d.quote ?? ""} className={fieldCls} />
              </Field>
            </div>
            <Field label="Nome">
              <input name="title" defaultValue={d.title ?? ""} className={fieldCls} />
            </Field>
            <Field label="Cargo e organização">
              <input name="role" defaultValue={d.role ?? ""} className={fieldCls} placeholder="Diretora de Pessoas, Empresa" />
            </Field>
          </>
        )}
        {k === "video" && (
          <>
            <Field label="Link do vídeo *" hint="YouTube, Vimeo ou arquivo .mp4">
              <input name="url" type="url" defaultValue={d.url ?? ""} className={fieldCls} placeholder="https://www.youtube.com/watch?v=…" />
            </Field>
            <Field label="Título">
              <input name="title" defaultValue={d.title ?? ""} className={fieldCls} />
            </Field>
          </>
        )}
        {k === "foto" && (
          <>
            <Field label={d.id ? "Trocar foto" : "Foto *"}>
              <ImageInput name="image" current={d.image} />
            </Field>
            <Field label="Legenda / descrição">
              <input name="title" defaultValue={d.title ?? ""} className={fieldCls} placeholder="Palestra Futuros Humanos, Evento X, 2026" />
            </Field>
          </>
        )}
        {k === "logo" && (
          <>
            <Field label="Nome da organização">
              <input name="title" defaultValue={d.title ?? ""} className={fieldCls} />
            </Field>
            <Field label="Logo (opcional)" hint="PNG com fundo transparente fica melhor.">
              <ImageInput name="image" current={d.image} />
            </Field>
            <Field label="Site (opcional)">
              <input name="url" type="url" defaultValue={d.url ?? ""} className={fieldCls} />
            </Field>
          </>
        )}
        <Field label="Ordem" hint="Menor aparece primeiro.">
          <input name="sort" type="number" defaultValue={d.sort ?? 0} className={fieldCls} />
        </Field>
        <label className="flex items-center gap-2 self-end pb-3 text-[15px]">
          <input type="checkbox" name="visible" defaultChecked={d.visible ?? true} className="h-4 w-4 accent-[var(--jf-red-500)]" />
          Visível no site
        </label>
      </div>
    </ActionForm>
  );
}
