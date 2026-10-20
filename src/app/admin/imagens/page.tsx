import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { PAGES, REGISTRY } from "@/lib/page-registry";
import { ConfirmSubmit } from "../_ui/ConfirmSubmit";
import { deleteLibraryImage } from "../more-actions";
import { CopyLink, UploadImages } from "./client";

type Row = { id: string; filename: string | null; size: number; created_at: Date };

export default async function ImagesAdmin() {
  await requireAdminPage();
  const { rows } = await db.query<Row>(
    "select id, filename, size, created_at from public.media where content_type like 'image/%' order by created_at desc limit 500",
  );
  // onde cada imagem é usada (para mostrar e para só permitir excluir o que não está em uso)
  const [art, refs, seo, proof, vids, ov, news] = await Promise.all([
    db.query<{ title: string; cover_id: string | null; body: string }>("select title, cover_id, body from public.articles"),
    db.query<{ title: string; cover_id: string }>("select title, cover_id from public.reading_refs where cover_id is not null"),
    db.query<{ path: string; og_image_id: string }>("select path, og_image_id from public.page_seo where og_image_id is not null"),
    db.query<{ kind: string; title: string | null; media_id: string }>("select kind, title, media_id from public.proof_items where media_id is not null"),
    db.query<{ title: string; thumb_id: string }>("select title, thumb_id from public.media_items where thumb_id is not null"),
    db.query<{ key: string; value: string }>("select key, value from public.content_overrides where value like '/midia/%'"),
    db.query<{ subject: string; body: string }>("select subject, body from public.newsletter_issues"),
  ]);
  const pageName = (key: string) => {
    const r = REGISTRY.find((x) => x.key === key);
    return PAGES.find((p) => p.id === r?.page)?.name ?? "página";
  };
  const usage = (id: string) => [
    ...art.rows.filter((a) => a.cover_id === id).map((a) => `Capa do artigo “${a.title}”`),
    ...art.rows.filter((a) => a.body?.includes(id)).map((a) => `Dentro do artigo “${a.title}”`),
    ...refs.rows.filter((r) => r.cover_id === id).map((r) => `Referência “${r.title}”`),
    ...seo.rows.filter((s) => s.og_image_id === id).map((s) => `Compartilhamento de ${s.path}`),
    ...proof.rows.filter((p) => p.media_id === id).map((p) => `Provas (${p.kind})${p.title ? `: ${p.title}` : ""}`),
    ...vids.rows.filter((v) => v.thumb_id === id).map((v) => `Capa do vídeo “${v.title}”`),
    ...ov.rows.filter((o) => o.value === `/midia/${id}`).map((o) => `Foto na página ${pageName(o.key)}`),
    ...news.rows.filter((n) => n.body?.includes(id)).map((n) => `Newsletter “${n.subject}”`),
  ];
  const total = rows.reduce((s, r) => s + r.size, 0);

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">Imagens</h1>
      <p className="mt-1 max-w-[700px] text-[15px] text-ink-500">
        Todas as imagens enviadas pelo painel. Envie várias de uma vez (JPG, PNG, WebP, GIF ou AVIF) e depois escolha nas páginas em “Escolher da
        biblioteca”. Só dá para excluir imagens que não estão em uso.
      </p>
      <p className="mt-3 text-[13px] text-ink-500">
        {rows.length} imagem(ns) · {(total / 1024 / 1024).toFixed(1)} MB
      </p>

      <div className="mt-6 rounded-[14px] border border-dashed border-ink-900/25 p-5">
        <UploadImages />
      </div>

      {rows.length === 0 ? (
        <p className="mt-10 text-center text-ink-500">Nenhuma imagem enviada ainda.</p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((r) => {
            const used = usage(r.id);
            return (
              <li key={r.id} className="overflow-hidden rounded-[14px] border border-ink-900/10 bg-cream-50">
                <a href={`/midia/${r.id}`} target="_blank" className="block bg-cream-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/midia/${r.id}`} alt={r.filename ?? ""} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                </a>
                <div className="space-y-2 p-4 text-[13px]">
                  <p className="truncate font-medium" title={r.filename ?? ""}>
                    {r.filename || "sem nome"}
                  </p>
                  <p className="text-ink-500">
                    {(r.size / 1024).toFixed(0)} KB · {r.created_at.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })}
                  </p>
                  {used.length ? (
                    <ul className="space-y-0.5 text-ink-700">
                      {used.slice(0, 3).map((u) => (
                        <li key={u}>· {u}</li>
                      ))}
                      {used.length > 3 && <li className="text-ink-500">e mais {used.length - 3}</li>}
                    </ul>
                  ) : (
                    <p className="text-ink-500">Não está em uso</p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 border-t border-ink-900/10 pt-2">
                    <CopyLink path={`/midia/${r.id}`} />
                    {!used.length && (
                      <form action={deleteLibraryImage}>
                        <input type="hidden" name="id" value={r.id} />
                        <ConfirmSubmit message="Excluir esta imagem?" className="text-red-deep hover:underline">
                          Excluir
                        </ConfirmSubmit>
                      </form>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
