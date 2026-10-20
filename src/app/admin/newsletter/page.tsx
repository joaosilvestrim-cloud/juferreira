import Link from "next/link";
import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { AdminButton, EmptyState, PageHeader } from "../_ui/PageHeader";

export default async function IssuesAdmin() {
  await requireAdminPage();
  const [{ rows }, { rows: c }] = await Promise.all([
    db.query<{ id: string; subject: string; status: string; sent_at: Date | null; sent_count: number; created_at: Date }>(
      "select id, subject, status, sent_at, sent_count, created_at from public.newsletter_issues order by created_at desc",
    ),
    db.query<{ n: number }>("select count(*)::int as n from public.newsletter_subscribers where status = 'ativo'"),
  ]);
  const fmt = (d: Date) => new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short", timeZone: "America/Sao_Paulo" }).format(d);
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-10 sm:py-10">
      <PageHeader
        title="Newsletter"
        description={
          <>
            Edições de Uma Terça-feira Qualquer · <strong className="text-ink-900">{c[0]?.n ?? 0}</strong> inscrito(s) ativo(s). A lista de inscritos
            fica em Conversas → Newsletter.
          </>
        }
        actions={<AdminButton href="/admin/newsletter/nova">+ Nova edição</AdminButton>}
      />
      {rows.length === 0 ? (
        <EmptyState title="Nenhuma edição ainda" action={<AdminButton href="/admin/newsletter/nova">+ Escrever a primeira edição</AdminButton>}>
          Escreva, veja a prévia do e-mail, mande um teste para você e só depois envie para todos os inscritos.
        </EmptyState>
      ) : (
        <ul className="mt-8 divide-y divide-ink-900/10 rounded-[14px] border border-ink-900/10 bg-cream-50">
          {rows.map((i) => (
            <li key={i.id} className="flex flex-wrap items-center gap-4 px-5 py-4">
              <Link href={`/admin/newsletter/${i.id}`} className="min-w-0 flex-1 font-serif text-[20px] hover:text-red-brand">
                {i.subject}
              </Link>
              <span className="text-[13px] text-ink-500">
                {i.status === "enviada" && i.sent_at ? `Enviada em ${fmt(i.sent_at)} · ${i.sent_count} envios` : `Criada em ${fmt(i.created_at)}`}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-[12px] ${i.status === "enviada" ? "bg-ink-900 text-cream-50" : "bg-cream-200 text-ink-700"}`}
              >
                {i.status === "enviada" ? "Enviada" : i.status === "enviando" ? "Enviando…" : "Rascunho"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
