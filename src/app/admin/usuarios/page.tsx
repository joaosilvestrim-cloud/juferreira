import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { deleteUser, toggleUser } from "../content-actions";
import { UserForm } from "./UserForm";

export default async function UsersPage() {
  const me = await requireAdminPage();
  const { rows } = await db.query<{ id: string; email: string; name: string | null; active: boolean; last_login_at: Date | null }>(
    "select id, email, name, active, last_login_at from public.admin_users order by created_at",
  );
  const fmt = (d: Date) => new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short", timeZone: "America/Sao_Paulo" }).format(d);
  return (
    <div className="mx-auto max-w-[900px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">Usuários</h1>
      <p className="mt-1 max-w-[640px] text-[15px] text-ink-500">
        Quem pode entrar no painel. Cada pessoa entra com o próprio e-mail e senha. A senha mestra continua funcionando para
        recuperação (login sem e-mail). Você está como <strong className="text-ink-900">{me.email}</strong>.
      </p>

      <ul className="mt-8 space-y-3">
        {rows.map((u) => (
          <li key={u.id} className="rounded-[14px] border border-ink-900/10 bg-cream-50 p-5">
            <details>
              <summary className="flex cursor-pointer flex-wrap items-center gap-3">
                <span className="font-serif text-[20px]">{u.name || u.email}</span>
                <span className="text-[14px] text-ink-500">{u.email}</span>
                {!u.active && <span className="rounded-full bg-cream-200 px-2.5 py-0.5 text-[12px]">Desativado</span>}
                <span className="ml-auto text-[13px] text-ink-500">
                  {u.last_login_at ? `último acesso ${fmt(u.last_login_at)}` : "nunca entrou"}
                </span>
              </summary>
              <div className="mt-5">
                <UserForm u={{ id: Number(u.id), email: u.email, name: u.name }} />
                {Number(u.id) !== me.id && (
                  <div className="mt-4 flex gap-5">
                    <form action={toggleUser}>
                      <input type="hidden" name="id" value={u.id} />
                      <button className="text-[13px] text-ink-700 hover:underline">{u.active ? "Desativar acesso" : "Reativar acesso"}</button>
                    </form>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={u.id} />
                      <button className="text-[13px] text-red-deep hover:underline">Excluir usuário</button>
                    </form>
                  </div>
                )}
              </div>
            </details>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-[14px] border border-dashed border-ink-900/25 p-6">
        <p className="mb-4 font-serif text-[22px]">Novo usuário</p>
        <UserForm u={{}} />
      </div>
    </div>
  );
}
