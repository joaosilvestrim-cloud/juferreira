"use client";

import { saveRef } from "../content-actions";
import { ActionForm, Field, fieldCls, ImageInput } from "../_ui/form";

type R = {
  id?: number;
  section: "mesa" | "voltam";
  title?: string;
  author?: string | null;
  note?: string | null;
  link?: string | null;
  sort?: number;
  visible?: boolean;
  cover?: string | null;
};

export function RefForm({ r }: { r: R }) {
  return (
    <ActionForm action={saveRef} submit={r.id ? "Salvar" : "Adicionar"} resetOnSuccess={!r.id}>
      {r.id && <input type="hidden" name="id" value={r.id} />}
      <input type="hidden" name="section" value={r.section} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Título *">
          <input name="title" required defaultValue={r.title} className={fieldCls} />
        </Field>
        <Field label="Autor(a)">
          <input name="author" defaultValue={r.author ?? ""} className={fieldCls} />
        </Field>
        {r.section === "mesa" && (
          <div className="sm:col-span-2">
            <Field label="Por que isso está na mesa agora?" hint="Nota curta da Ju (1 ou 2 frases).">
              <textarea name="note" rows={2} defaultValue={r.note ?? ""} className={fieldCls} />
            </Field>
          </div>
        )}
        <Field label="Link (opcional)">
          <input name="link" type="url" defaultValue={r.link ?? ""} className={fieldCls} placeholder="https://…" />
        </Field>
        <Field label="Ordem" hint="Menor aparece primeiro.">
          <input name="sort" type="number" defaultValue={r.sort ?? 0} className={fieldCls} />
        </Field>
        {r.section === "mesa" && (
          <div className="sm:col-span-2">
            <Field label="Capa">
              <ImageInput current={r.cover} />
            </Field>
          </div>
        )}
        <label className="flex items-center gap-2 text-[15px]">
          <input type="checkbox" name="visible" defaultChecked={r.visible ?? true} className="h-4 w-4 accent-[var(--jf-red-500)]" />
          Visível no site
        </label>
      </div>
    </ActionForm>
  );
}
