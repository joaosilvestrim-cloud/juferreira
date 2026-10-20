import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdminPage } from "@/lib/admin-guard";
import { mediaUrl } from "@/lib/content";
import { db } from "@/lib/db";
import { deleteArticle } from "../../content-actions";
import { ArticleForm, type ArticleData } from "../ArticleForm";

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
    <div className="mx-auto max-w-[900px] px-5 py-10 sm:px-8">
      <Link href="/admin/artigos" className="text-[14px] text-ink-500 hover:underline">
        ← Artigos
      </Link>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h1 className="jf-display text-[40px]">{a.id ? "Editar artigo" : "Novo artigo"}</h1>
        {a.id && a.status === "publicado" && (
          <Link href={`/ideias/${a.slug}`} target="_blank" className="text-[14px] text-red-brand hover:underline">
            Ver no site
          </Link>
        )}
      </div>
      <div className="mt-8">
        <ArticleForm key={a.id ?? "novo"} a={a} />
      </div>
      {a.id && (
        <form action={deleteArticle} className="mt-10 border-t border-ink-900/10 pt-6">
          <input type="hidden" name="id" value={a.id} />
          <button className="text-[14px] text-red-deep underline-offset-4 hover:underline">Excluir este artigo</button>
        </form>
      )}
    </div>
  );
}
