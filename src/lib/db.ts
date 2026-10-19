import { createHash } from "node:crypto";
import { Pool } from "pg";

/**
 * Conexão com o Postgres do Supabase (pooler Supavisor, modo transação).
 * Credenciais via variáveis PG* (.env.local / Vercel Environment Variables) — nunca no código.
 * Um único pool por instância serverless, com poucas conexões.
 */
const globalForDb = globalThis as unknown as { jfPool?: Pool };

export const db =
  globalForDb.jfPool ??
  new Pool({
    max: 3,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 8_000,
    ssl: { rejectUnauthorized: false },
  });

if (process.env.NODE_ENV !== "production") globalForDb.jfPool = db;

/** Hash do IP (com sal) — permite limitar abuso sem armazenar o IP. */
export function hashIp(ip: string | null) {
  if (!ip) return null;
  return createHash("sha256")
    .update(`${process.env.IP_HASH_SALT ?? "jf"}:${ip}`)
    .digest("hex")
    .slice(0, 32);
}

export function clientIp(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip");
}

/** Quantos registros este IP criou na janela informada (limite simples anti-spam). */
export async function recentCount(table: "contact_submissions" | "newsletter_subscribers", ipHash: string | null, minutes: number) {
  if (!ipHash) return 0;
  const { rows } = await db.query<{ n: number }>(
    `select count(*)::int as n from public.${table} where ip_hash = $1 and created_at > now() - make_interval(mins => $2)`,
    [ipHash, minutes],
  );
  return rows[0]?.n ?? 0;
}
