"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { checkPassword, createSessionValue, isValidSession, SESSION_COOKIE, sessionCookieOptions } from "@/lib/auth";
import { CONTACT_STATUS, NEWS_STATUS } from "@/lib/admin";
import { db, hashIp } from "@/lib/db";


/** Toda ação do painel revalida a sessão no servidor (não confia só no proxy). */
async function requireAdmin() {
  const store = await cookies();
  if (!isValidSession(store.get(SESSION_COOKIE)?.value)) redirect("/admin/login");
}

export type LoginState = { error?: string };

export async function login(_prev: LoginState, form: FormData): Promise<LoginState> {
  const password = String(form.get("password") ?? "");
  const h = await headers();
  const ipHash = hashIp(h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip"));

  const { rows } = await db.query<{ n: number }>(
    "select count(*)::int as n from public.admin_login_attempts where ip_hash is not distinct from $1 and not ok and created_at > now() - interval '15 minutes'",
    [ipHash],
  );
  if ((rows[0]?.n ?? 0) >= 8) return { error: "Muitas tentativas. Aguarde 15 minutos e tente de novo." };

  const ok = checkPassword(password);
  await db.query("insert into public.admin_login_attempts (ip_hash, ok) values ($1, $2)", [ipHash, ok]);
  if (!ok) {
    await new Promise((r) => setTimeout(r, 800)); // desacelera tentativas
    return { error: "Senha incorreta." };
  }
  (await cookies()).set(SESSION_COOKIE, createSessionValue(), sessionCookieOptions);
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/admin/login");
}

export async function setContactStatus(form: FormData) {
  await requireAdmin();
  const id = Number(form.get("id"));
  const status = String(form.get("status"));
  if (!Number.isInteger(id) || !(CONTACT_STATUS as readonly string[]).includes(status)) return;
  await db.query("update public.contact_submissions set status = $1 where id = $2", [status, id]);
  revalidatePath("/admin");
}

export async function setNewsletterStatus(form: FormData) {
  await requireAdmin();
  const id = Number(form.get("id"));
  const status = String(form.get("status"));
  if (!Number.isInteger(id) || !(NEWS_STATUS as readonly string[]).includes(status)) return;
  await db.query(
    "update public.newsletter_subscribers set status = $1, unsubscribed_at = case when $1 = 'descadastrado' then now() else null end where id = $2",
    [status, id],
  );
  revalidatePath("/admin");
}
