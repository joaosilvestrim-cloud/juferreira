import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

/**
 * Autenticação do /admin.
 * - Usuários com e-mail e senha (tabela admin_users, senha com scrypt).
 * - Senha mestra ADMIN_PASSWORD (uid 0), útil para o primeiro acesso e recuperação.
 * Sessão: cookie "uid.validade.assinatura" (HMAC com ADMIN_SECRET) — sem credenciais no cookie.
 */
export const SESSION_COOKIE = "jf_admin";
export const SESSION_HOURS = 12;

function secret() {
  const s = process.env.ADMIN_SECRET;
  if (!s || s.length < 32) throw new Error("ADMIN_SECRET ausente ou curto (mín. 32 caracteres).");
  return s;
}

const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

export function createSessionValue(uid = 0) {
  const exp = Date.now() + SESSION_HOURS * 3600_000;
  return `${uid}.${exp}.${sign(`${uid}.${exp}`)}`;
}

/** Verifica assinatura e validade; devolve o id do usuário (0 = senha mestra) ou null. */
export function sessionUid(value: string | undefined | null): number | null {
  if (!value || !process.env.ADMIN_SECRET) return null;
  const [uid, exp, sig] = value.split(".");
  if (!uid || !exp || !sig || !/^\d+$/.test(uid) || !/^\d+$/.test(exp) || Number(exp) < Date.now()) return null;
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(sign(`${uid}.${exp}`));
    return a.length === b.length && timingSafeEqual(a, b) ? Number(uid) : null;
  } catch {
    return null;
  }
}

export function isValidSession(value: string | undefined | null) {
  return sessionUid(value) !== null;
}

/** Compara a senha mestra em tempo constante. */
export function checkPassword(input: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("base64url");
  const hash = scryptSync(password, salt, 64).toString("base64url");
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(password: string, stored: string) {
  const [alg, salt, hash] = stored.split("$");
  if (alg !== "scrypt" || !salt || !hash) return false;
  const a = Buffer.from(hash, "base64url");
  const b = scryptSync(password, salt, 64);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_HOURS * 3600,
};

export type SessionUser = { id: number; email: string; name: string | null; master: boolean };

/** Usuário da sessão atual (servidor). Usuários desativados/excluídos perdem o acesso na hora. */
export async function sessionUser(): Promise<SessionUser | null> {
  const { cookies } = await import("next/headers");
  const uid = sessionUid((await cookies()).get(SESSION_COOKIE)?.value);
  if (uid === null) return null;
  if (uid === 0) return { id: 0, email: "admin (senha mestra)", name: "Administrador", master: true };
  const { db } = await import("@/lib/db");
  const { rows } = await db.query<{ email: string; name: string | null }>(
    "select email, name from public.admin_users where id = $1 and active",
    [uid],
  );
  return rows[0] ? { id: uid, email: rows[0].email, name: rows[0].name, master: false } : null;
}
