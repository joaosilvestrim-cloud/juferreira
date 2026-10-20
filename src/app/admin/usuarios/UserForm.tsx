"use client";

import { saveUser } from "../content-actions";
import { ActionForm, Field, fieldCls } from "../_ui/form";

export function UserForm({ u }: { u: { id?: number; email?: string; name?: string | null } }) {
  return (
    <ActionForm action={saveUser} submit={u.id ? "Salvar" : "Criar usuário"} resetOnSuccess={!u.id}>
      {u.id && <input type="hidden" name="id" value={u.id} />}
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Nome">
          <input name="name" defaultValue={u.name ?? ""} className={fieldCls} />
        </Field>
        <Field label="E-mail *">
          <input name="email" type="email" required defaultValue={u.email} className={fieldCls} autoComplete="off" />
        </Field>
        <Field label={u.id ? "Nova senha" : "Senha *"} hint={u.id ? "Vazio = mantém a atual." : "Mínimo de 10 caracteres."}>
          <input name="password" type="password" required={!u.id} minLength={10} className={fieldCls} autoComplete="new-password" />
        </Field>
      </div>
    </ActionForm>
  );
}
