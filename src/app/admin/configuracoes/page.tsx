import { readSettings } from "@/lib/content";
import { requireAdminPage } from "@/lib/admin-guard";
import { saveSettings } from "../content-actions";
import { ActionForm, Field, fieldCls } from "../_ui/form";

export default async function ConfigPage() {
  await requireAdminPage();
  const s = await readSettings();
  return (
    <div className="mx-auto max-w-[860px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">Configurações</h1>
      <p className="mt-1 text-[15px] text-ink-500">
        Links e contatos usados em todo o site. Ao salvar, o site é atualizado na hora. Campos vazios ficam ocultos no site.
      </p>

      <ActionForm action={saveSettings} className="mt-10" submit="Salvar configurações">
        <fieldset className="rounded-[14px] border border-ink-900/10 bg-cream-50 p-6">
          <legend className="px-2 font-serif text-[22px]">Fale com a Ju</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="E-mail oficial de contato" hint="Aparece em Contato, Organizações e Palestras.">
              <input name="email" type="email" defaultValue={s.email} className={fieldCls} placeholder="contato@juferreira.com.br" />
            </Field>
            <Field label="WhatsApp comercial" hint="Só números, com DDD. Vazio = botão de WhatsApp oculto.">
              <input name="whatsapp" defaultValue={s.whatsapp} className={fieldCls} inputMode="tel" placeholder="11999999999" />
            </Field>
          </div>
        </fieldset>

        <fieldset className="rounded-[14px] border border-ink-900/10 bg-cream-50 p-6">
          <legend className="px-2 font-serif text-[22px]">Redes e links</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="LinkedIn (perfil da Ju)">
              <input name="linkedin" type="url" defaultValue={s.linkedin} className={fieldCls} placeholder="https://www.linkedin.com/in/…" />
            </Field>
            <Field label="LinkedIn (página Ju Ferreira)">
              <input name="linkedin_page" type="url" defaultValue={s.linkedin_page} className={fieldCls} placeholder="https://www.linkedin.com/company/…" />
            </Field>
            <Field label="Instagram">
              <input name="instagram" type="url" defaultValue={s.instagram} className={fieldCls} placeholder="https://www.instagram.com/…" />
            </Field>
            <Field label="Site do EPIC247" hint="Vazio = botões levam ao formulário de contato.">
              <input name="epic247_url" type="url" defaultValue={s.epic247_url} className={fieldCls} placeholder="https://…" />
            </Field>
            <Field label="Site da What The Future?!" hint="Vazio = botões levam ao formulário de contato.">
              <input name="wtf_url" type="url" defaultValue={s.wtf_url} className={fieldCls} placeholder="https://…" />
            </Field>
          </div>
        </fieldset>

        <fieldset className="rounded-[14px] border border-ink-900/10 bg-cream-50 p-6">
          <legend className="px-2 font-serif text-[22px]">Avisos por e-mail</legend>
          <div className="space-y-5">
            <Field label="Quem recebe o aviso de novo contato" hint="Um ou mais e-mails, separados por vírgula.">
              <input name="notify_to" defaultValue={s.notify_to} className={fieldCls} placeholder="ju@juferreira.com.br, equipe@juferreira.com.br" />
            </Field>
            <label className="flex items-start gap-3 text-[15px]">
              <input type="checkbox" name="autoreply" defaultChecked={s.autoreply ? s.autoreply === "1" : true} className="mt-1 h-5 w-5 accent-[var(--jf-red-500)]" />
              <span>
                Enviar confirmação automática para quem escreveu
                <span className="block text-[13px] text-ink-500">“Mensagem recebida. Obrigado por contar o contexto. A equipe dará continuidade por este e-mail.”</span>
              </span>
            </label>
          </div>
        </fieldset>
      </ActionForm>
    </div>
  );
}
