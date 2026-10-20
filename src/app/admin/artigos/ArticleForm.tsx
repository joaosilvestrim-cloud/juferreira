"use client";

import { saveArticle } from "../content-actions";
import { ActionForm, Field, fieldCls, ImageInput } from "../_ui/form";
import { RichEditor } from "../_ui/RichEditor";
import { plainToHtmlClient } from "../_ui/plain";

export type ArticleData = {
  id?: number;
  title?: string;
  slug?: string;
  subtitle?: string | null;
  excerpt?: string | null;
  question?: string | null;
  body?: string;
  territories?: string[];
  epistemic?: string | null;
  featured?: boolean;
  status?: string;
  cover?: string | null;
};

const TERR = [
  ["futuros", "Futuros"],
  ["tecnologia", "Tecnologia & Humanidade"],
  ["escolhas", "Escolhas & Agência"],
  ["lideranca", "Liderança & Organizações"],
  ["vida-real", "Transformação & Vida Real"],
];

const box = "space-y-5 rounded-[14px] border border-ink-900/10 bg-cream-50 p-6";

export function ArticleForm({ a = {} }: { a?: ArticleData }) {
  return (
    <ActionForm action={saveArticle} submit={a.id ? "Salvar artigo" : "Criar artigo"}>
      {a.id && <input type="hidden" name="id" value={a.id} />}
      <div className={box}>
        <Field label="Título *">
          <input name="title" required defaultValue={a.title} className={`${fieldCls} font-serif text-[20px]`} />
        </Field>
        <Field label="Endereço (slug)" hint="Vazio = gerado a partir do título. Ex.: o-futuro-mais-provavel vira /ideias/o-futuro-mais-provavel">
          <input name="slug" defaultValue={a.slug} className={fieldCls} />
        </Field>
        <Field label="Subtítulo">
          <input name="subtitle" defaultValue={a.subtitle ?? ""} className={fieldCls} />
        </Field>
        <Field label="Resumo" hint="Aparece no card do artigo (1 ou 2 frases).">
          <textarea name="excerpt" rows={2} defaultValue={a.excerpt ?? ""} className={fieldCls} />
        </Field>
        <Field label="Pergunta de entrada" hint="Opcional. Aparece em destaque no card e no topo do artigo.">
          <input name="question" defaultValue={a.question ?? ""} className={fieldCls} />
        </Field>
        <div>
          <p className="text-[14px] font-medium text-ink-900">Texto do artigo</p>
          <RichEditor name="body" initialHtml={plainToHtmlClient(a.body ?? "")} placeholder="Escreva o artigo. Use a barra acima para títulos, negrito, listas, citações, links e imagens." />
        </div>
      </div>

      <div className={`${box} grid gap-5 space-y-0 sm:grid-cols-2`}>
        <fieldset>
          <legend className="text-[14px] font-medium">Territórios</legend>
          <div className="mt-2 space-y-2">
            {TERR.map(([v, l]) => (
              <label key={v} className="flex items-center gap-2 text-[15px]">
                <input
                  type="checkbox"
                  name="territories"
                  value={v}
                  defaultChecked={a.territories?.includes(v)}
                  className="h-4 w-4 accent-[var(--jf-red-500)]"
                />
                {l}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="space-y-5">
          <Field label="Status epistêmico">
            <select name="epistemic" defaultValue={a.epistemic ?? ""} className={fieldCls}>
              <option value="">Nenhum</option>
              <option value="tese">[TESE]</option>
              <option value="sintese">[SÍNTESE PROVISÓRIA]</option>
              <option value="hipotese">[HIPÓTESE]</option>
              <option value="investigacao">[EM INVESTIGAÇÃO]</option>
            </select>
          </Field>
          <Field label="Imagem de capa" hint="JPG, PNG ou WebP. O navegador reduz a imagem antes de enviar.">
            <ImageInput current={a.cover} />
          </Field>
          {a.cover && (
            <label className="flex items-center gap-2 text-[14px] text-ink-700">
              <input type="checkbox" name="remove_cover" className="h-4 w-4" /> Remover capa
            </label>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-6 rounded-[14px] border border-ink-900/10 bg-cream-50 p-6">
        <label className="flex items-center gap-2 text-[15px]">
          <input type="radio" name="status" value="rascunho" defaultChecked={a.status !== "publicado"} className="h-4 w-4 accent-[var(--jf-red-500)]" />
          Rascunho
        </label>
        <label className="flex items-center gap-2 text-[15px]">
          <input type="radio" name="status" value="publicado" defaultChecked={a.status === "publicado"} className="h-4 w-4 accent-[var(--jf-red-500)]" />
          Publicado
        </label>
        <label className="flex items-center gap-2 text-[15px]">
          <input type="checkbox" name="featured" defaultChecked={a.featured} className="h-4 w-4 accent-[var(--jf-red-500)]" />
          Destaque (artigo protagonista em Ideias)
        </label>
      </div>
    </ActionForm>
  );
}
