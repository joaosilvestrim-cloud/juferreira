"use client";

import { saveIssue, sendIssueAll, sendIssueTest } from "../content-actions";
import { ActionForm, Field, fieldCls } from "../_ui/form";

export function IssueEditor({ issue }: { issue?: { id: number; subject: string; preheader: string | null; body: string } }) {
  return (
    <ActionForm action={saveIssue} submit={issue ? "Salvar rascunho" : "Criar rascunho"}>
      {issue && <input type="hidden" name="id" value={issue.id} />}
      <div className="space-y-5 rounded-[14px] border border-ink-900/10 bg-cream-50 p-6">
        <Field label="Assunto *">
          <input name="subject" required defaultValue={issue?.subject} className={`${fieldCls} font-serif text-[19px]`} />
        </Field>
        <Field label="Texto de pré-visualização" hint="Aparece ao lado do assunto na caixa de entrada.">
          <input name="preheader" defaultValue={issue?.preheader ?? ""} className={fieldCls} />
        </Field>
        <Field label="Texto *" hint="Parágrafos separados por linha em branco. ## para subtítulo, > para citação.">
          <textarea name="body" required rows={16} defaultValue={issue?.body} className={`${fieldCls} font-serif text-[17px] leading-relaxed`} />
        </Field>
      </div>
    </ActionForm>
  );
}

export function IssueSend({ id, subscribers }: { id: number; subscribers: number }) {
  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-[14px] border border-ink-900/10 bg-cream-50 p-6">
        <p className="font-serif text-[22px]">Enviar teste</p>
        <p className="text-[14px] text-ink-500">Envia só para você, com [TESTE] no assunto. Salve antes de testar.</p>
        <ActionForm action={sendIssueTest} submit="Enviar teste" className="mt-4">
          <input type="hidden" name="id" value={id} />
          <input name="test_to" type="email" required placeholder="seu@email.com" className={fieldCls} />
        </ActionForm>
      </div>
      <div className="rounded-[14px] border border-red-brand/40 bg-blush-100/50 p-6">
        <p className="font-serif text-[22px]">Enviar para todos</p>
        <p className="text-[14px] text-ink-700">
          Vai para <strong>{subscribers}</strong> inscrito(s) ativo(s). Depois de enviada, a edição não pode ser alterada.
        </p>
        <ActionForm action={sendIssueAll} submit="Enviar agora" className="mt-4">
          <input type="hidden" name="id" value={id} />
          <input name="confirm" autoComplete="off" placeholder="Digite ENVIAR para confirmar" className={fieldCls} />
        </ActionForm>
      </div>
    </div>
  );
}
