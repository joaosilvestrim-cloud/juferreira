import Link from "next/link";
import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";

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
    <div className="mx-auto max-w-[1000px] px-5 py-10 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="jf-display text-[44px]">Newsletter</h1>
          <p className="mt-1 text-[15px] text-ink-500">
            Edições de Uma Terça-feira Qualquer · <strong className="text-ink-900">{c[0]?.n ?? 0}</strong> inscritos ativos
          </p>
        </div>
        <Link
          href="/admin/newsletter/nova"
          className="min-h-11 content-center rounded-full bg-red-brand px-6 text-[15px] text-cream-50 hover:bg-red-deep"
        >
          Nova edição
        </Link>
      </div>
      {rows.length === 0 ? (
        <p className="mt-16 text-center text-ink-500">Nenhuma edição ainda.</p>
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
