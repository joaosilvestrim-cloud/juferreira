import Link from "next/link";
import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { AdminButton, EmptyState, PageHeader } from "../_ui/PageHeader";

export default async function ArticlesAdmin() {
  await requireAdminPage();
  const { rows } = await db.query<{
    id: string;
    title: string;
    slug: string;
    status: string;
    featured: boolean;
    updated_at: Date;
  }>("select id, title, slug, status, featured, updated_at from public.articles order by updated_at desc");
  const fmt = (d: Date) => new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeZone: "America/Sao_Paulo" }).format(d);
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-10 sm:py-10">
      <PageHeader
        title="Artigos"
        description="Textos de Ideias. Os publicados aparecem em /ideias e na Home, cada um com página própria. O marcado como destaque vira o artigo protagonista."
        actions={<AdminButton href="/admin/artigos/novo">+ Novo artigo</AdminButton>}
      />
      {rows.length === 0 ? (
        <EmptyState title="Nenhum artigo ainda" action={<AdminButton href="/admin/artigos/novo">+ Escrever o primeiro</AdminButton>}>
          Enquanto não houver artigo publicado, o acervo fica oculto no site. Rascunhos não aparecem para visitantes.
        </EmptyState>
      ) : (
        <ul className="mt-8 divide-y divide-ink-900/10 rounded-[14px] border border-ink-900/10 bg-cream-50">
          {rows.map((a) => (
            <li key={a.id} className="flex flex-wrap items-center gap-4 px-5 py-4">
              <div className="min-w-0 flex-1">
                <Link href={`/admin/artigos/${a.id}`} className="font-serif text-[21px] hover:text-red-brand">
                  {a.title}
                </Link>
                <p className="text-[13px] text-ink-500">
                  /ideias/{a.slug} · atualizado em {fmt(a.updated_at)}
                </p>
              </div>
              {a.featured && <span className="rounded-full bg-blush-100 px-3 py-1 text-[12px] text-red-deep">Destaque</span>}
              <span
                className={`rounded-full px-3 py-1 text-[12px] ${a.status === "publicado" ? "bg-ink-900 text-cream-50" : "bg-cream-200 text-ink-700"}`}
              >
                {a.status === "publicado" ? "Publicado" : "Rascunho"}
              </span>
              {a.status === "publicado" && (
                <Link href={`/ideias/${a.slug}`} target="_blank" className="text-[14px] text-red-brand hover:underline">
                  Ver
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
