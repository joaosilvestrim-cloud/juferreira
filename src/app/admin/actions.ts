"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { checkPassword, createSessionValue, SESSION_COOKIE, sessionCookieOptions, sessionUser, verifyPassword } from "@/lib/auth";
import { CONTACT_STATUS, NEWS_STATUS } from "@/lib/admin";
import { db, hashIp } from "@/lib/db";


/** Toda ação do painel revalida a sessão no servidor (não confia só no proxy). */
async function requireAdmin() {
  if (!(await sessionUser())) redirect("/admin/login");
}

export type LoginState = { error?: string };

export async function login(_prev: LoginState, form: FormData): Promise<LoginState> {
  const password = String(form.get("password") ?? "");
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const h = await headers();
  const ipHash = hashIp(h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip"));

  const { rows } = await db.query<{ n: number }>(
    "select count(*)::int as n from public.admin_login_attempts where ip_hash is not distinct from $1 and not ok and created_at > now() - interval '15 minutes'",
    [ipHash],
  );
  if ((rows[0]?.n ?? 0) >= 8) return { error: "Muitas tentativas. Aguarde 15 minutos e tente de novo." };

  // com e-mail: usuário cadastrado; sem e-mail: senha mestra
  let uid: number | null = null;
  if (email) {
    const { rows: u } = await db.query<{ id: string; password_hash: string }>(
      "select id, password_hash from public.admin_users where lower(email) = $1 and active",
      [email],
    );
    if (u[0] && verifyPassword(password, u[0].password_hash)) uid = Number(u[0].id);
  } else if (checkPassword(password)) uid = 0;
  const ok = uid !== null;
  await db.query("insert into public.admin_login_attempts (ip_hash, ok) values ($1, $2)", [ipHash, ok]);
  if (!ok) {
    await new Promise((r) => setTimeout(r, 800)); // desacelera tentativas
    return { error: email ? "E-mail ou senha incorretos." : "Senha incorreta." };
  }
  if (uid) await db.query("update public.admin_users set last_login_at = now() where id = $1", [uid]);
  (await cookies()).set(SESSION_COOKIE, createSessionValue(uid!), sessionCookieOptions);
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
