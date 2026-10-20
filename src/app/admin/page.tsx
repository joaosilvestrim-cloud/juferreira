import Link from "next/link";
import { Suspense } from "react";
import { CONTACT_STATUS, CONTACT_STATUS_LABEL, FIELD_LABEL, NEWS_STATUS, ROUTE_LABEL } from "@/lib/admin";
import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { setContactStatus, setNewsletterStatus } from "./actions";
import { StatusSelect } from "./StatusSelect";
import { EmptyState, PageHeader } from "./_ui/PageHeader";

type Search = Promise<Record<string, string | string[] | undefined>>;
const PAGE_SIZE = 40;

export default function AdminPage({ searchParams }: { searchParams: Search }) {
  return (
    <Suspense fallback={<p className="p-10 text-ink-500">Carregando painel…</p>}>
      <Dashboard searchParams={searchParams} />
    </Suspense>
  );
}

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
const fmt = (d: Date) =>
  new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short", timeZone: "America/Sao_Paulo" }).format(d);

type Contact = {
  id: string;
  created_at: Date;
  origin: string;
  route: string | null;
  name: string;
  email: string;
  organization: string | null;
  phone: string | null;
  message: string | null;
  fields: Record<string, string | string[]>;
  status: (typeof CONTACT_STATUS)[number];
};
type Subscriber = { id: string; created_at: Date; email: string; source: string | null; status: string };

async function Dashboard({ searchParams }: { searchParams: Search }) {
  await requireAdminPage(); // painel sempre dinâmico (sessão, dados ao vivo)
  const sp = await searchParams;
  const tab = one(sp.tab) === "newsletter" ? "newsletter" : "contatos";
  const status = one(sp.status);
  const rota = one(sp.rota);
  const q = one(sp.q).trim();
  const page = Math.max(1, Number(one(sp.p)) || 1);

  const [{ rows: counts }] = await Promise.all([
    db.query<{ novos: number; contatos: number; inscritos: number }>(
      `select (select count(*) from public.contact_submissions where status = 'novo')::int as novos,
              (select count(*) from public.contact_submissions)::int as contatos,
              (select count(*) from public.newsletter_subscribers where status = 'ativo')::int as inscritos`,
    ),
  ]);
  const c = counts[0];

  const qs = (extra: Record<string, string>) => {
    const p = new URLSearchParams({ tab, ...(status && { status }), ...(rota && { rota }), ...(q && { q }), ...extra });
    for (const [k, v] of [...p]) if (!v) p.delete(k);
    return `/admin?${p}`;
  };

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-10 sm:py-10">
      <PageHeader title="Conversas" description="Contatos recebidos pelo site e inscritos da newsletter. Clique num contato para ver a mensagem e marcar o andamento." />

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {(
          [
            ["Contatos novos", c.novos, "/admin?tab=contatos&status=novo"],
            ["Contatos no total", c.contatos, "/admin?tab=contatos"],
            ["Inscritos ativos", c.inscritos, "/admin?tab=newsletter&status=ativo"],
          ] as const
        ).map(([k, v, href]) => (
          <Link key={k} href={href} className="block rounded-[14px] border border-ink-900/10 bg-cream-50 p-5 transition hover:border-red-brand">
            <dt className="text-[12px] uppercase tracking-[0.14em] text-ink-500">{k}</dt>
            <dd className="mt-2 font-serif text-[40px] leading-none tabular-nums text-red-brand">{v}</dd>
          </Link>
        ))}
      </dl>

      <nav className="mt-10 flex gap-2 border-b border-ink-900/10" aria-label="Seções do painel">
        {[
          ["contatos", "Contatos"],
          ["newsletter", "Newsletter"],
        ].map(([id, label]) => (
          <Link
            key={id}
            href={`/admin?tab=${id}`}
            aria-current={tab === id ? "page" : undefined}
            className={`-mb-px border-b-2 px-4 py-3 text-[15px] ${tab === id ? "border-red-brand font-medium text-ink-900" : "border-transparent text-ink-500 hover:text-ink-900"}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {tab === "contatos" ? (
        <Contacts status={status} rota={rota} q={q} page={page} qs={qs} />
      ) : (
        <Newsletter status={status} q={q} page={page} qs={qs} />
      )}
    </div>
  );
}

function Filters({
  tab,
  status,
  rota,
  q,
  statusOptions,
  showRoute,
}: {
  tab: string;
  status: string;
  rota?: string;
  q: string;
  statusOptions: readonly string[];
  showRoute?: boolean;
}) {
  const field = "min-h-10 rounded-full border border-ink-900/20 bg-cream-50 px-4 text-[14px] focus:border-red-brand focus:outline-none";
  return (
    <form method="get" className="mt-6 flex flex-wrap items-center gap-3">
      <input type="hidden" name="tab" value={tab} />
      <input name="q" defaultValue={q} placeholder="Buscar nome, e-mail, organização…" className={`${field} min-w-[260px] flex-1`} />
      <select name="status" defaultValue={status} className={field} aria-label="Status">
        <option value="">Todos os status</option>
        {statusOptions.map((s) => (
          <option key={s} value={s}>
            {CONTACT_STATUS_LABEL[s as keyof typeof CONTACT_STATUS_LABEL] ?? s}
          </option>
        ))}
      </select>
      {showRoute && (
        <select name="rota" defaultValue={rota} className={field} aria-label="Assunto">
          <option value="">Todos os assuntos</option>
          {Object.entries(ROUTE_LABEL).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
      )}
      <button className="min-h-10 rounded-full bg-ink-900 px-5 text-[14px] text-cream-50">Filtrar</button>
      <a
        href={`/api/admin/export?type=${tab}&${new URLSearchParams({ ...(status && { status }), ...(rota && { rota }), ...(q && { q }) })}`}
        className="min-h-10 content-center rounded-full border border-red-brand px-5 text-[14px] text-red-brand hover:bg-red-brand hover:text-cream-50"
      >
        Exportar CSV
      </a>
    </form>
  );
}

function Pager({ page, total, qs }: { page: number; total: number; qs: (e: Record<string, string>) => string }) {
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (pages <= 1) return null;
  return (
    <div className="mt-8 flex items-center justify-between text-[14px] text-ink-500">
      <span>
        Página {page} de {pages} · {total} registros
      </span>
      <div className="flex gap-2">
        {page > 1 && (
          <Link href={qs({ p: String(page - 1) })} className="rounded-full border border-ink-900/20 px-4 py-2 hover:bg-cream-50">
            Anterior
          </Link>
        )}
        {page < pages && (
          <Link href={qs({ p: String(page + 1) })} className="rounded-full border border-ink-900/20 px-4 py-2 hover:bg-cream-50">
            Próxima
          </Link>
        )}
      </div>
    </div>
  );
}

async function Contacts({
  status,
  rota,
  q,
  page,
  qs,
}: {
  status: string;
  rota: string;
  q: string;
  page: number;
  qs: (e: Record<string, string>) => string;
}) {
  const where: string[] = [];
  const args: unknown[] = [];
  if ((CONTACT_STATUS as readonly string[]).includes(status)) where.push(`status = $${args.push(status)}`);
  if (rota && ROUTE_LABEL[rota]) where.push(`route = $${args.push(rota)}`);
  if (q) {
    const i = args.push(`%${q}%`);
    where.push(`(name ilike $${i} or email ilike $${i} or organization ilike $${i} or message ilike $${i} or fields::text ilike $${i})`);
  }
  const w = where.length ? `where ${where.join(" and ")}` : "";
  const [{ rows }, { rows: total }] = await Promise.all([
    db.query<Contact>(
      `select * from public.contact_submissions ${w} order by created_at desc limit ${PAGE_SIZE} offset ${(page - 1) * PAGE_SIZE}`,
      args,
    ),
    db.query<{ n: number }>(`select count(*)::int as n from public.contact_submissions ${w}`, args),
  ]);

  return (
    <section aria-label="Contatos">
      <Filters tab="contatos" status={status} rota={rota} q={q} statusOptions={CONTACT_STATUS} showRoute />
      {rows.length === 0 ? (
        <EmptyState title={q || status || rota ? "Nada encontrado com esses filtros" : "Nenhum contato ainda"}>
          {q || status || rota
            ? "Tente limpar a busca ou escolher outro status."
            : "Quando alguém escrever pelo site, a mensagem aparece aqui e um aviso chega por e-mail."}
        </EmptyState>
      ) : (
        <ul className="mt-6 space-y-4">
          {rows.map((r) => {
            const extra = Object.entries(r.fields ?? {});
            return (
              <li
                key={r.id}
                className={`rounded-[14px] border bg-cream-50 p-5 sm:p-6 ${r.status === "novo" ? "border-red-brand/40" : "border-ink-900/10"}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="flex flex-wrap items-center gap-2 text-[13px] text-ink-500">
                      <span>{fmt(r.created_at)}</span>
                      <span aria-hidden>·</span>
                      <span className="rounded-full bg-blush-100 px-2.5 py-0.5 text-red-deep">
                        {r.route ? ROUTE_LABEL[r.route] ?? r.route : "Sem assunto"}
                      </span>
                      <span className="rounded-full bg-cream-200 px-2.5 py-0.5">
                        {r.origin === "organizacoes" ? "Página Organizações" : "Página Contato"}
                      </span>
                    </p>
                    <h2 className="mt-2 font-serif text-[24px] leading-tight">{r.name}</h2>
                    <p className="mt-1 text-[15px]">
                      <a href={`mailto:${r.email}`} className="text-red-brand underline-offset-4 hover:underline">
                        {r.email}
                      </a>
                      {r.organization && <span className="text-ink-700"> · {r.organization}</span>}
                      {r.phone && <span className="text-ink-700"> · {r.phone}</span>}
                    </p>
                  </div>
                  <form action={setContactStatus}>
                    <input type="hidden" name="id" value={r.id} />
                    <StatusSelect
                      value={r.status}
                      label={`Status do contato de ${r.name}`}
                      options={CONTACT_STATUS.map((s) => ({ value: s, label: CONTACT_STATUS_LABEL[s] }))}
                    />
                  </form>
                </div>
                {r.message && <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-ink-800">{r.message}</p>}
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={`mailto:${r.email}?subject=${encodeURIComponent("Sua mensagem pelo site Ju Ferreira")}`}
                    className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-[13px] text-cream-50 hover:bg-red-brand"
                  >
                    Responder por e-mail
                  </a>
                  {r.phone && r.phone.replace(/\D/g, "").length >= 10 && (
                    <a
                      href={`https://wa.me/${(r.phone.replace(/\D/g, "").length <= 11 ? "55" : "") + r.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink-900/25 px-4 py-2 text-[13px] hover:border-red-brand hover:text-red-brand"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
                {extra.length > 0 && (
                  <details className="mt-4 rounded-[10px] bg-cream-100 p-4 text-[14px]">
                    <summary className="cursor-pointer font-medium">Mais respostas ({extra.length})</summary>
                    <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                      {extra.map(([k, v]) => (
                        <div key={k}>
                          <dt className="text-[12px] uppercase tracking-[0.1em] text-ink-500">{FIELD_LABEL[k] ?? k}</dt>
                          <dd className="mt-0.5 whitespace-pre-line text-ink-800">{Array.isArray(v) ? v.join(", ") : v}</dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <Pager page={page} total={total[0]?.n ?? 0} qs={qs} />
    </section>
  );
}

async function Newsletter({
  status,
  q,
  page,
  qs,
}: {
  status: string;
  q: string;
  page: number;
  qs: (e: Record<string, string>) => string;
}) {
  const where: string[] = [];
  const args: unknown[] = [];
  if ((NEWS_STATUS as readonly string[]).includes(status)) where.push(`status = $${args.push(status)}`);
  if (q) where.push(`email ilike $${args.push(`%${q}%`)}`);
  const w = where.length ? `where ${where.join(" and ")}` : "";
  const [{ rows }, { rows: total }] = await Promise.all([
    db.query<Subscriber>(
      `select id, created_at, email, source, status from public.newsletter_subscribers ${w} order by created_at desc limit ${PAGE_SIZE} offset ${(page - 1) * PAGE_SIZE}`,
      args,
    ),
    db.query<{ n: number }>(`select count(*)::int as n from public.newsletter_subscribers ${w}`, args),
  ]);
  return (
    <section aria-label="Newsletter">
      <Filters tab="newsletter" status={status} q={q} statusOptions={NEWS_STATUS} />
      {rows.length === 0 ? (
        <p className="mt-12 text-center text-ink-500">Nenhum inscrito por aqui ainda.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-[14px] border border-ink-900/10 bg-cream-50">
          <table className="w-full text-left text-[15px]">
            <thead className="border-b border-ink-900/10 text-[12px] uppercase tracking-[0.1em] text-ink-500">
              <tr>
                <th className="px-5 py-3 font-medium">E-mail</th>
                <th className="px-5 py-3 font-medium">Inscrição</th>
                <th className="px-5 py-3 font-medium">Origem</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-ink-900/5 last:border-0">
                  <td className="px-5 py-3">{r.email}</td>
                  <td className="px-5 py-3 text-ink-500">{fmt(r.created_at)}</td>
                  <td className="px-5 py-3 text-ink-500">{r.source ?? "—"}</td>
                  <td className="px-5 py-3">
                    <form action={setNewsletterStatus}>
                      <input type="hidden" name="id" value={r.id} />
                      <StatusSelect
                        value={r.status}
                        label={`Status de ${r.email}`}
                        options={[
                          { value: "ativo", label: "Ativo" },
                          { value: "descadastrado", label: "Descadastrado" },
                        ]}
                      />
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Pager page={page} total={total[0]?.n ?? 0} qs={qs} />
    </section>
  );
}
