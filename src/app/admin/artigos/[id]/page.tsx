import { notFound } from "next/navigation";
import { requireAdminPage } from "@/lib/admin-guard";
import { mediaUrl } from "@/lib/content";
import { db } from "@/lib/db";
import { deleteArticle } from "../../content-actions";
import { ArticleForm, type ArticleData } from "../ArticleForm";
import { ConfirmSubmit } from "../../_ui/ConfirmSubmit";
import { AdminButton, PageHeader } from "../../_ui/PageHeader";

export default async function EditArticle({ params }: { params: Promise<{ id: string }> }) {
  await requireAdminPage();
  const { id } = await params;
  let a: ArticleData = {};
  if (id !== "novo") {
    const { rows } = await db.query("select * from public.articles where id = $1", [Number(id) || 0]);
    if (!rows[0]) notFound();
    const r = rows[0];
    a = {
      id: Number(r.id),
      title: r.title,
      slug: r.slug,
      subtitle: r.subtitle,
      excerpt: r.excerpt,
      question: r.question,
      body: r.body,
      territories: r.territories,
      epistemic: r.epistemic,
      featured: r.featured,
      status: r.status,
      cover: mediaUrl(r.cover_id),
    };
  }
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-10 sm:py-10">
      <PageHeader
        back={{ href: "/admin/artigos", label: "Artigos" }}
        title={a.id ? "Editar artigo" : "Novo artigo"}
        actions={
          a.id && a.status === "publicado" ? (
            <AdminButton href={`/ideias/${a.slug}`} variant="secondary">
              Ver no site ↗
            </AdminButton>
          ) : undefined
        }
      />
      <div className="mt-8">
        <ArticleForm key={a.id ?? "novo"} a={a} />
      </div>
      {a.id && (
        <form action={deleteArticle} className="mt-10 border-t border-ink-900/10 pt-6">
          <input type="hidden" name="id" value={a.id} />
          <ConfirmSubmit message="Excluir este artigo? Ele sai do site na hora." className="text-[14px] text-red-deep underline-offset-4 hover:underline">
            Excluir este artigo
          </ConfirmSubmit>
        </form>
      )}
    </div>
  );
}
