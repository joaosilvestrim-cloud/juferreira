import { createHash, createHmac, timingSafeEqual } from "node:crypto";

/**
 * Autenticação do /admin: uma senha (ADMIN_PASSWORD) e sessão em cookie assinado (HMAC com ADMIN_SECRET).
 * O cookie guarda só a validade + assinatura — nenhuma credencial.
 */
export const SESSION_COOKIE = "jf_admin";
export const SESSION_HOURS = 12;

function secret() {
  const s = process.env.ADMIN_SECRET;
  if (!s || s.length < 32) throw new Error("ADMIN_SECRET ausente ou curto (mín. 32 caracteres).");
  return s;
}

const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

export function createSessionValue() {
  const exp = Date.now() + SESSION_HOURS * 3600_000;
  return `${exp}.${sign(String(exp))}`;
}

export function isValidSession(value: string | undefined | null) {
  if (!value || !process.env.ADMIN_SECRET) return false; // sem segredo configurado, ninguém entra
  const [exp, sig] = value.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(sign(exp));
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

/** Compara a senha em tempo constante (via hash, para igualar tamanhos). */
export function checkPassword(input: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_HOURS * 3600,
};
