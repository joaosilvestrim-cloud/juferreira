"use server";

import { cookies } from "next/headers";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { isValidSession, SESSION_COOKIE } from "@/lib/auth";
import { SETTING_KEYS } from "@/lib/content";
import { db } from "@/lib/db";

async function requireAdmin() {
  if (!isValidSession((await cookies()).get(SESSION_COOKIE)?.value)) redirect("/admin/login");
}

export type FormState = { ok?: boolean; error?: string; message?: string };

const str = (f: FormData, k: string, max = 20000) => String(f.get(k) ?? "").trim().slice(0, max);
const urlOk = (u: string) => !u || /^https?:\/\/[^\s]+$/i.test(u);

/* ───────────── Configurações ───────────── */
export async function saveSettings(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const v = Object.fromEntries(SETTING_KEYS.map((k) => [k, str(f, k, 500)])) as Record<string, string>;
  v.autoreply = f.get("autoreply") ? "1" : "0";
  for (const k of ["linkedin", "linkedin_page", "instagram", "epic247_url", "wtf_url"]) {
    if (!urlOk(v[k])) return { error: `Endereço inválido em "${k}". Use o link completo, começando com https://` };
  }
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) return { error: "E-mail de contato inválido." };
  for (const k of SETTING_KEYS) {
    await db.query(
      "insert into public.site_settings (key, value, updated_at) values ($1,$2,now()) on conflict (key) do update set value = excluded.value, updated_at = now()",
      [k, v[k]],
    );
  }
  updateTag("settings");
  return { ok: true, message: "Configurações salvas. O site já foi atualizado." };
}

/* ───────────── Imagens ───────────── */
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

/** Salva a imagem enviada e devolve o id (ou null se não veio arquivo). */
async function storeImage(file: FormDataEntryValue | null): Promise<string | null> {
  if (!(file instanceof File) || file.size === 0) return null;
  if (!IMAGE_TYPES.includes(file.type)) throw new Error("Formato de imagem não suportado (use JPG, PNG ou WebP).");
  if (file.size > 3.8 * 1024 * 1024) throw new Error("Imagem muito grande (máx. 3,8 MB).");
  const bytes = Buffer.from(await file.arrayBuffer());
  const { rows } = await db.query<{ id: string }>(
    "insert into public.media (filename, content_type, bytes, size) values ($1,$2,$3,$4) returning id",
    [file.name.slice(0, 200), file.type, bytes, bytes.length],
  );
  return rows[0].id;
}

/* ───────────── Artigos ───────────── */
const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

const TERRITORIES = ["futuros", "tecnologia", "escolhas", "lideranca", "vida-real"];
const EPISTEMIC = ["", "tese", "sintese", "hipotese", "investigacao"];

export async function saveArticle(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const id = Number(f.get("id")) || null;
  const title = str(f, "title", 300);
  if (!title) return { error: "O artigo precisa de um título." };
  const slug = slugify(str(f, "slug", 120) || title);
  if (!slug) return { error: "Endereço (slug) inválido." };
  const territories = f.getAll("territories").map(String).filter((t) => TERRITORIES.includes(t));
  const epistemic = str(f, "epistemic", 30);
  const status = f.get("status") === "publicado" ? "publicado" : "rascunho";
  const featured = Boolean(f.get("featured"));
  let coverId: string | null | undefined;
  try {
    coverId = await storeImage(f.get("cover"));
  } catch (e) {
    return { error: (e as Error).message };
  }
  const removeCover = Boolean(f.get("remove_cover"));

  const values = [
    slug,
    title,
    str(f, "subtitle", 600) || null,
    str(f, "excerpt", 1200) || null,
    str(f, "question", 600) || null,
    str(f, "body", 200000),
    territories,
    EPISTEMIC.includes(epistemic) && epistemic ? epistemic : null,
    featured,
    status,
  ];
  try {
    let savedId = id;
    if (id) {
      await db.query(
        `update public.articles set slug=$1, title=$2, subtitle=$3, excerpt=$4, question=$5, body=$6, territories=$7, epistemic=$8,
           featured=$9, status=$10, updated_at=now(),
           published_at = case when $10 = 'publicado' then coalesce(published_at, now()) else published_at end
         where id = $11`,
        [...values, id],
      );
    } else {
      const { rows } = await db.query<{ id: string }>(
        `insert into public.articles (slug, title, subtitle, excerpt, question, body, territories, epistemic, featured, status, published_at)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, case when $10 = 'publicado' then now() end) returning id`,
        values,
      );
      savedId = Number(rows[0].id);
    }
    if (coverId) await db.query("update public.articles set cover_id = $1 where id = $2", [coverId, savedId]);
    else if (removeCover) await db.query("update public.articles set cover_id = null where id = $1", [savedId]);
    if (featured) await db.query("update public.articles set featured = false where id <> $1", [savedId]);
    updateTag("articles");
    if (!id) redirect(`/admin/artigos/${savedId}?salvo=1`);
    return { ok: true, message: status === "publicado" ? "Artigo salvo e publicado." : "Rascunho salvo." };
  } catch (e) {
    if ((e as { code?: string }).code === "23505") return { error: "Já existe um artigo com esse endereço (slug)." };
    throw e;
  }
}

export async function deleteArticle(f: FormData) {
  await requireAdmin();
  await db.query("delete from public.articles where id = $1", [Number(f.get("id"))]);
  updateTag("articles");
  redirect("/admin/artigos");
}

/* ───────────── Referências ───────────── */
export async function saveRef(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const id = Number(f.get("id")) || null;
  const title = str(f, "title", 300);
  if (!title) return { error: "A referência precisa de um título." };
  const section = f.get("section") === "voltam" ? "voltam" : "mesa";
  const link = str(f, "link", 500);
  if (!urlOk(link)) return { error: "Link inválido — use o endereço completo, com https://" };
  let coverId: string | null = null;
  try {
    coverId = await storeImage(f.get("cover"));
  } catch (e) {
    return { error: (e as Error).message };
  }
  const vals = [section, title, str(f, "author", 200) || null, str(f, "note", 600) || null, link || null, Number(f.get("sort")) || 0, Boolean(f.get("visible"))];
  if (id) {
    await db.query(
      "update public.reading_refs set section=$1, title=$2, author=$3, note=$4, link=$5, sort=$6, visible=$7 where id=$8",
      [...vals, id],
    );
    if (coverId) await db.query("update public.reading_refs set cover_id=$1 where id=$2", [coverId, id]);
  } else {
    await db.query(
      "insert into public.reading_refs (section, title, author, note, link, sort, visible, cover_id) values ($1,$2,$3,$4,$5,$6,$7,$8)",
      [...vals, coverId],
    );
  }
  updateTag("refs");
  return { ok: true, message: "Referência salva." };
}

export async function deleteRef(f: FormData) {
  await requireAdmin();
  await db.query("delete from public.reading_refs where id = $1", [Number(f.get("id"))]);
  updateTag("refs");
}

/* ───────────── Newsletter ───────────── */
export async function saveIssue(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const id = Number(f.get("id")) || null;
  const subject = str(f, "subject", 200);
  const body = str(f, "body", 100000);
  if (!subject || !body) return { error: "Preencha o assunto e o texto." };
  const preheader = str(f, "preheader", 200) || null;
  if (id) {
    const { rowCount } = await db.query(
      "update public.newsletter_issues set subject=$1, preheader=$2, body=$3 where id=$4 and status = 'rascunho'",
      [subject, preheader, body, id],
    );
    if (!rowCount) return { error: "Esta edição já foi enviada e não pode ser alterada." };
  } else {
    const { rows } = await db.query<{ id: string }>(
      "insert into public.newsletter_issues (subject, preheader, body) values ($1,$2,$3) returning id",
      [subject, preheader, body],
    );
    redirect(`/admin/newsletter/${rows[0].id}`);
  }
  return { ok: true, message: "Rascunho salvo." };
}

export async function sendIssueTest(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const { sendIssue } = await import("@/lib/newsletter");
  const id = Number(f.get("id"));
  const to = str(f, "test_to", 254);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) return { error: "Informe um e-mail válido para o teste." };
  const { rows } = await db.query("select subject, preheader, body from public.newsletter_issues where id = $1", [id]);
  if (!rows[0]) return { error: "Edição não encontrada." };
  const r = await sendIssue({ ...rows[0], subject: `[TESTE] ${rows[0].subject}` }, [to]);
  return r.sent ? { ok: true, message: `Teste enviado para ${to}.` } : { error: "Não foi possível enviar o teste. Confira a chave do Resend." };
}

export async function sendIssueAll(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const { sendIssue } = await import("@/lib/newsletter");
  const id = Number(f.get("id"));
  if (f.get("confirm") !== "ENVIAR") return { error: "Para confirmar, digite ENVIAR no campo." };
  // trava: só uma execução por edição
  const { rows } = await db.query(
    "update public.newsletter_issues set status = 'enviando' where id = $1 and status = 'rascunho' returning subject, preheader, body",
    [id],
  );
  if (!rows[0]) return { error: "Esta edição já foi enviada (ou está sendo enviada)." };
  const subs = await db.query<{ email: string }>("select email from public.newsletter_subscribers where status = 'ativo' order by id");
  try {
    const r = await sendIssue(rows[0], subs.rows.map((s) => s.email));
    await db.query("update public.newsletter_issues set status='enviada', sent_at=now(), sent_count=$1, fail_count=$2 where id=$3", [r.sent, r.failed, id]);
    return { ok: true, message: `Enviada para ${r.sent} pessoa(s)${r.failed ? ` · ${r.failed} falharam` : ""}.` };
  } catch (e) {
    await db.query("update public.newsletter_issues set status='rascunho' where id=$1", [id]);
    return { error: (e as Error).message };
  }
}

export async function deleteIssue(f: FormData) {
  await requireAdmin();
  await db.query("delete from public.newsletter_issues where id = $1 and status = 'rascunho'", [Number(f.get("id"))]);
  redirect("/admin/newsletter");
}
