"use server";

import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { sessionUser } from "@/lib/auth";
import { SETTING_KEYS } from "@/lib/content";
import { db } from "@/lib/db";
import { storeImage } from "@/lib/media-store";
import { sanitizeRich } from "@/lib/rich-text";

async function requireAdmin() {
  const user = await sessionUser();
  if (!user) redirect("/admin/login");
  return user;
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
    sanitizeRich(str(f, "body", 400000)),
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
  const body = sanitizeRich(str(f, "body", 200000));
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

/* ───────────── Textos e imagens das páginas ───────────── */
export async function savePageBlock(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const registry = (await import("@/content/editable-registry.json")).default as { key: string; kind: string; text: string }[];
  const byKey = new Map(registry.map((r) => [r.key, r]));
  const by = await currentUserLabel();
  let changed = 0;
  // grava o valor novo (null = volta ao original) e registra no histórico para poder desfazer
  const apply = async (key: string, next: string | null) => {
    const { rows } = await db.query<{ value: string }>("select value from public.content_overrides where key = $1", [key]);
    const old = rows[0]?.value ?? null;
    if (old === next) return;
    if (next === null) await db.query("delete from public.content_overrides where key = $1", [key]);
    else
      await db.query(
        "insert into public.content_overrides (key, value, updated_at, updated_by) values ($1,$2,now(),$3) on conflict (key) do update set value = excluded.value, updated_at = now(), updated_by = excluded.updated_by",
        [key, next, by],
      );
    await db.query("insert into public.content_history (key, old_value, new_value, changed_by) values ($1,$2,$3,$4)", [key, old, next, by]);
    changed++;
  };
  try {
    for (const [name, value] of f.entries()) {
      const [prefix, key] = [name.slice(0, 2), name.slice(2)];
      const item = byKey.get(key);
      if (!item) continue;
      if (prefix === "t:" && item.kind === "text" && typeof value === "string") {
        const v = value.replace(/\r\n/g, "\n").trim();
        await apply(key, !v || v === item.text ? null : v.slice(0, 5000));
      } else if (prefix === "i:" && item.kind === "image") {
        const id = await storeImage(value);
        if (id) await apply(key, `/midia/${id}`);
      } else if (prefix === "m:" && item.kind === "image" && typeof value === "string" && /^\/midia\/[0-9a-f-]{36}$/.test(value)) {
        await apply(key, value); // imagem escolhida da biblioteca
      } else if (prefix === "r:" && value === "1") {
        await apply(key, null);
      }
    }
  } catch (e) {
    return { error: (e as Error).message };
  }
  updateTag("content");
  return { ok: true, message: changed ? `${changed} alteração(ões) salva(s). O site já foi atualizado.` : "Nada mudou." };
}

/** Quem fez a alteração (preenchido quando houver usuários; senão "admin"). */
async function currentUserLabel() {
  const { sessionUser } = await import("@/lib/auth");
  return (await sessionUser())?.email ?? "admin";
}

/* ───────────── Usuários do painel ───────────── */
export async function saveUser(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const { hashPassword } = await import("@/lib/auth");
  const id = Number(f.get("id")) || null;
  const email = str(f, "email", 254).toLowerCase();
  const name = str(f, "name", 120) || null;
  const password = String(f.get("password") ?? "");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "E-mail inválido." };
  if ((!id || password) && password.length < 10) return { error: "A senha precisa ter pelo menos 10 caracteres." };
  try {
    if (id) {
      await db.query("update public.admin_users set email=$1, name=$2 where id=$3", [email, name, id]);
      if (password) await db.query("update public.admin_users set password_hash=$1 where id=$2", [hashPassword(password), id]);
      return { ok: true, message: password ? "Usuário e senha atualizados." : "Usuário atualizado." };
    }
    await db.query("insert into public.admin_users (email, name, password_hash) values ($1,$2,$3)", [email, name, hashPassword(password)]);
    return { ok: true, message: `Usuário ${email} criado. Ele já pode entrar com e-mail e senha.` };
  } catch (e) {
    if ((e as { code?: string }).code === "23505") return { error: "Já existe um usuário com esse e-mail." };
    throw e;
  }
}

export async function toggleUser(f: FormData) {
  const me = await requireAdmin();
  const id = Number(f.get("id"));
  if (id === me.id) return; // não desativa a si mesmo
  await db.query("update public.admin_users set active = not active where id = $1", [id]);
  const { revalidatePath } = await import("next/cache");
  revalidatePath("/admin/usuarios");
}

export async function deleteUser(f: FormData) {
  const me = await requireAdmin();
  const id = Number(f.get("id"));
  if (id === me.id) return;
  await db.query("delete from public.admin_users where id = $1", [id]);
  const { revalidatePath } = await import("next/cache");
  revalidatePath("/admin/usuarios");
}

/* ───────────── SEO por página ───────────── */
export async function saveSeo(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const { SEO_PAGES } = await import("@/lib/content");
  const path = str(f, "path", 100);
  if (!SEO_PAGES.some((p) => p.path === path)) return { error: "Página inválida." };
  let og: string | null = null;
  try {
    og = await storeImage(f.get("og_image"));
  } catch (e) {
    return { error: (e as Error).message };
  }
  await db.query(
    `insert into public.page_seo (path, title, description, noindex, og_image_id, updated_at) values ($1,$2,$3,$4,$5,now())
     on conflict (path) do update set title=excluded.title, description=excluded.description, noindex=excluded.noindex,
       og_image_id = coalesce(excluded.og_image_id, case when $6 then null else page_seo.og_image_id end), updated_at=now()`,
    [path, str(f, "title", 120) || null, str(f, "description", 320) || null, Boolean(f.get("noindex")), og, Boolean(f.get("remove_og"))],
  );
  updateTag("seo");
  return { ok: true, message: "SEO salvo." };
}

/* ───────────── Provas (Ju em ação) ───────────── */
export async function saveProof(_: FormState, f: FormData): Promise<FormState> {
  await requireAdmin();
  const id = Number(f.get("id")) || null;
  const kind = str(f, "kind", 20);
  if (!["depoimento", "logo", "foto", "video"].includes(kind)) return { error: "Tipo inválido." };
  const url = str(f, "url", 500);
  if (!urlOk(url)) return { error: "Link inválido — use o endereço completo, com https://" };
  if (kind === "video") {
    const { videoEmbed } = await import("@/lib/content");
    if (!url || !videoEmbed(url)) return { error: "Use um link do YouTube, do Vimeo ou de um arquivo .mp4." };
  }
  if (kind === "depoimento" && !str(f, "quote")) return { error: "Escreva o depoimento." };
  let mediaId: string | null = null;
  try {
    mediaId = await storeImage(f.get("image"));
  } catch (e) {
    return { error: (e as Error).message };
  }
  if (kind === "foto" && !id && !mediaId) return { error: "Envie a foto." };
  const vals = [kind, str(f, "title", 200) || null, str(f, "role", 200) || null, str(f, "quote", 1500) || null, url || null, Number(f.get("sort")) || 0, Boolean(f.get("visible"))];
  if (id) {
    await db.query("update public.proof_items set kind=$1, title=$2, role=$3, quote=$4, url=$5, sort=$6, visible=$7 where id=$8", [...vals, id]);
    if (mediaId) await db.query("update public.proof_items set media_id=$1 where id=$2", [mediaId, id]);
  } else {
    await db.query("insert into public.proof_items (kind, title, role, quote, url, sort, visible, media_id) values ($1,$2,$3,$4,$5,$6,$7,$8)", [...vals, mediaId]);
  }
  updateTag("proof");
  return { ok: true, message: "Salvo. A página Palestras já foi atualizada." };
}

export async function deleteProof(f: FormData) {
  await requireAdmin();
  await db.query("delete from public.proof_items where id = $1", [Number(f.get("id"))]);
  updateTag("proof");
}

/** Imagem colada/inserida no editor de texto: devolve o endereço para usar no conteúdo. */
export async function uploadInlineImage(f: FormData): Promise<{ url?: string; error?: string }> {
  await requireAdmin();
  try {
    const id = await storeImage(f.get("file"));
    return id ? { url: `/midia/${id}` } : { error: "Nenhum arquivo." };
  } catch (e) {
    return { error: (e as Error).message };
  }
}
