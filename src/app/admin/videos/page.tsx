import { requireAdminPage } from "@/lib/admin-guard";
import { MEDIA_FORMATS, MEDIA_PLACEMENTS, mediaEmbed, mediaUrl, type MediaItem } from "@/lib/content";
import { db } from "@/lib/db";
import { uploadProvider } from "@/lib/storage";
import { MediaPlayer } from "@/components/ui/MediaPlayer";
import { deleteMediaItem, toggleMediaVisible } from "../more-actions";
import { ConfirmSubmit } from "../_ui/ConfirmSubmit";
import { MediaForm } from "./MediaForm";

type Row = {
  id: string;
  format: keyof typeof MEDIA_FORMATS;
  title: string;
  outlet: string | null;
  recorded_on: string | null;
  description: string | null;
  url: string;
  thumb_id: string | null;
  placements: string[];
  sort: number;
  visible: boolean;
};

export default async function VideosAdmin() {
  await requireAdminPage();
  const { rows } = await db.query<Row>(
    "select id, format, title, outlet, to_char(recorded_on,'YYYY-MM-DD') recorded_on, description, url, thumb_id, placements, sort, visible from public.media_items order by sort, recorded_on desc nulls last, id desc",
  );
  const provider = uploadProvider();
  const count = (p: string) => rows.filter((r) => r.visible && r.placements.includes(p)).length;

  return (
    <div className="mx-auto max-w-[1000px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">Vídeos e áudios</h1>
      <p className="mt-1 max-w-[700px] text-[15px] text-ink-500">
        Palestras, entrevistas e podcasts com a Ju. Cole um link (YouTube, Vimeo, Spotify, Apple Podcasts…) ou envie o arquivo, e marque em quais
        páginas aparece. Sem nenhum item marcado, a página fica como está, sem espaço vazio.
      </p>

      <ul className="mt-6 flex flex-wrap gap-2 text-[13px]">
        {Object.entries(MEDIA_PLACEMENTS).map(([k, p]) => (
          <li key={k} className="rounded-full border border-ink-900/15 bg-cream-50 px-3 py-1.5">
            {p.label}: <strong className={count(k) ? "text-red-brand" : "text-ink-500"}>{count(k)}</strong>
          </li>
        ))}
      </ul>

      <section className="mt-8 rounded-[14px] border border-dashed border-ink-900/25 p-5">
        <h2 className="mb-4 text-[17px] font-medium">Adicionar vídeo ou áudio</h2>
        <MediaForm d={{ placements: [] }} provider={provider} />
      </section>

      {rows.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-[28px]">Cadastrados ({rows.length})</h2>
          <ul className="mt-5 space-y-3">
            {rows.map((r) => {
              const m: MediaItem = {
                id: Number(r.id),
                format: r.format,
                title: r.title,
                outlet: r.outlet,
                recordedOn: r.recorded_on,
                description: r.description,
                url: r.url,
                thumb: mediaUrl(r.thumb_id),
                placements: r.placements as MediaItem["placements"],
              };
              const e = mediaEmbed(r.url);
              return (
                <li key={r.id} className="rounded-[14px] border border-ink-900/10 bg-cream-50 px-5 py-4">
                  <details>
                    <summary className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="rounded-full bg-cream-200 px-2.5 py-0.5 text-[12px]">{MEDIA_FORMATS[r.format]}</span>
                      <span className="font-serif text-[20px]">{r.title}</span>
                      {!r.visible && <span className="rounded-full bg-ink-900 px-2.5 py-0.5 text-[12px] text-cream-50">Oculto</span>}
                      <span className="ml-auto text-[13px] font-medium text-red-brand">Editar</span>
                      <span className="basis-full text-[13px] text-ink-500">
                        {r.placements.length
                          ? `Aparece em: ${r.placements.map((p) => MEDIA_PLACEMENTS[p as keyof typeof MEDIA_PLACEMENTS]?.label).join(", ")}`
                          : "Não marcado para nenhuma página"}
                        {" · "}
                        {e ? "com player" : "como link"}
                      </span>
                    </summary>
                    <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_340px]">
                      <MediaForm
                        provider={provider}
                        d={{ ...m, sort: r.sort, visible: r.visible, placements: r.placements }}
                      />
                      <div>
                        <p className="mb-3 text-[12px] uppercase tracking-[0.14em] text-ink-500">Como aparece no site</p>
                        <MediaPlayer m={m} />
                        <div className="mt-6 flex flex-wrap gap-4 border-t border-ink-900/10 pt-4 text-[13px]">
                          <form action={toggleMediaVisible}>
                            <input type="hidden" name="id" value={r.id} />
                            <button className="text-ink-700 hover:underline">{r.visible ? "Ocultar do site" : "Mostrar no site"}</button>
                          </form>
                          <form action={deleteMediaItem}>
                            <input type="hidden" name="id" value={r.id} />
                            <ConfirmSubmit message="Excluir este vídeo/áudio? Ele sai do site na hora." className="text-red-deep hover:underline">
                              Excluir
                            </ConfirmSubmit>
                          </form>
                        </div>
                      </div>
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
