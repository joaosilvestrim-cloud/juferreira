"use server";

import { refresh, updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { sessionUser } from "@/lib/auth";
import { MEDIA_FORMATS, MEDIA_PLACEMENTS, mediaEmbed } from "@/lib/content";
import { db } from "@/lib/db";
import { storeImage } from "@/lib/media-store";

async function requireAdmin() {
  const user = await sessionUser();
  if (!user) redirect("/admin/login");
  return user;
}
async function who() {
  const u = await requireAdmin();
  return u.email ?? "admin";
}

export type FormState = { ok?: boolean; error?: string; message?: string };
const str = (f: FormData, k: string, max = 20000) => String(f.get(k) ?? "").trim().slice(0, max);

/* ───────────── Vídeos e áudios ───────────── */
export async function saveMediaItem(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const id = Number(f.get("id")) || null;
  const url = str(f, "url", 800);
  if (!/^https?:\/\/\S+$/i.test(url)) return { error: "Cole o link completo, começando com https://" };
  const title = str(f, "title", 200);
  if (!title) return { error: "Dê um título fiel ao conteúdo (ex.: “Entrevista sobre Futuros Humanos”)." };
  const format = str(f, "format", 20);
  if (!(format in MEDIA_FORMATS)) return { error: "Escolha o formato." };
  const placements = f.getAll("placements").map(String).filter((p) => p in MEDIA_PLACEMENTS);
  const date = str(f, "recorded_on", 10);
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) return { error: "Data inválida." };
  let thumb: string | null = null;
  try {
    thumb = await storeImage(f.get("thumb"));
  } catch (e) {
    return { error: (e as Error).message };
  }
  const vals = [format, title, str(f, "outlet", 200) || null, date || null, str(f, "description", 1000) || null, url, placements, Number(f.get("sort")) || 0, Boolean(f.get("visible"))];
  if (id) {
    await db.query(
      "update public.media_items set format=$1, title=$2, outlet=$3, recorded_on=$4, description=$5, url=$6, placements=$7, sort=$8, visible=$9, updated_at=now() where id=$10",
      [...vals, id],
    );
    if (thumb) await db.query("update public.media_items set thumb_id=$1 where id=$2", [thumb, id]);
    if (f.get("remove_thumb")) await db.query("update public.media_items set thumb_id=null where id=$1", [id]);
  } else {
    await db.query(
      "insert into public.media_items (format, title, outlet, recorded_on, description, url, placements, sort, visible, thumb_id) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
      [...vals, thumb],
    );
  }
  updateTag("media-items");
  const where = placements.length ? placements.map((p) => MEDIA_PLACEMENTS[p as keyof typeof MEDIA_PLACEMENTS].label).join(", ") : null;
  const player = mediaEmbed(url) ? "com player" : "como link (esse endereço não tem player incorporável)";
  return {
    ok: true,
    message: where ? `Salvo. Já aparece em: ${where}, ${player}.` : "Salvo, mas não está marcado para nenhuma página: ainda não aparece no site.",
  };
}

export async function deleteMediaItem(f: FormData) {
  await requireAdmin();
  await db.query("delete from public.media_items where id = $1", [Number(f.get("id"))]);
  updateTag("media-items");
}

export async function toggleMediaVisible(f: FormData) {
  await requireAdmin();
  await db.query("update public.media_items set visible = not visible, updated_at = now() where id = $1", [Number(f.get("id"))]);
  updateTag("media-items");
}

/* ───────────── Blocos das páginas: mostrar/ocultar ───────────── */
export async function toggleBlock(f: FormData) {
  const by = await who();
  const section = str(f, "section", 80);
  if (!/^[A-Za-z0-9]+$/.test(section)) return;
  const key = `hide:${section}`;
  const hidden = f.get("hide") === "1";
  const { rows } = await db.query<{ value: string }>("select value from public.content_overrides where key = $1", [key]);
  const old = rows[0]?.value ?? null;
  if (hidden) {
    await db.query(
      "insert into public.content_overrides (key, value, updated_at, updated_by) values ($1,'1',now(),$2) on conflict (key) do update set value='1', updated_at=now(), updated_by=excluded.updated_by",
      [key, by],
    );
  } else {
    await db.query("delete from public.content_overrides where key = $1", [key]);
  }
  await db.query("insert into public.content_history (key, old_value, new_value, changed_by) values ($1,$2,$3,$4)", [key, old, hidden ? "1" : null, by]);
  updateTag("content");
}

/* ───────────── Histórico: desfazer uma alteração ───────────── */
export async function restoreHistory(f: FormData) {
  const by = await who();
  const id = Number(f.get("id"));
  const { rows } = await db.query<{ key: string; old_value: string | null }>("select key, old_value from public.content_history where id = $1", [id]);
  const h = rows[0];
  if (!h) return;
  const { rows: cur } = await db.query<{ value: string }>("select value from public.content_overrides where key = $1", [h.key]);
  const now = cur[0]?.value ?? null;
  if (h.old_value === null) await db.query("delete from public.content_overrides where key = $1", [h.key]);
  else
    await db.query(
      "insert into public.content_overrides (key, value, updated_at, updated_by) values ($1,$2,now(),$3) on conflict (key) do update set value=excluded.value, updated_at=now(), updated_by=excluded.updated_by",
      [h.key, h.old_value, by],
    );
  await db.query("insert into public.content_history (key, old_value, new_value, changed_by) values ($1,$2,$3,$4)", [h.key, now, h.old_value, by]);
  updateTag("content");
}

/* ───────────── Biblioteca de imagens ───────────── */
export async function uploadLibraryImage(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  try {
    const files = f.getAll("files").filter((x): x is File => x instanceof File && x.size > 0);
    if (!files.length) return { error: "Escolha uma ou mais imagens." };
    for (const file of files) await storeImage(file);
    return { ok: true, message: `${files.length} imagem(ns) enviada(s).` };
  } catch (e) {
    return { error: (e as Error).message };
  }
}

export async function deleteLibraryImage(f: FormData) {
  await requireAdmin();
  const id = String(f.get("id") ?? "");
  if (!/^[0-9a-f-]{36}$/.test(id)) return;
  // só apaga se não estiver em uso (a tela já esconde o botão, isto é a garantia no servidor)
  const { rows } = await db.query<{ n: number }>(
    `select (
      (select count(*) from public.articles where cover_id = $1 or body like '%' || $1 || '%') +
      (select count(*) from public.reading_refs where cover_id = $1) +
      (select count(*) from public.page_seo where og_image_id = $1) +
      (select count(*) from public.proof_items where media_id = $1) +
      (select count(*) from public.media_items where thumb_id = $1) +
      (select count(*) from public.content_overrides where value = '/midia/' || $1) +
      (select count(*) from public.newsletter_issues where body like '%' || $1 || '%')
    )::int as n`,
    [id],
  );
  if (rows[0].n > 0) return;
  await db.query("delete from public.media where id = $1", [id]);
  refresh();
}
