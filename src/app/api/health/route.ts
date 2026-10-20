import { db } from "@/lib/db";
import { SUPABASE_BUCKET, supabaseUrl } from "@/lib/storage";

/**
 * Diagnóstico: banco e armazenamento de arquivos. Não expõe valores, só presença das variáveis,
 * o código do erro e se o Supabase Storage aceita gerar uma autorização de envio (nenhum arquivo é enviado).
 */
export async function GET() {
  const vars = ["PGHOST", "PGPORT", "PGDATABASE", "PGUSER", "PGPASSWORD", "ADMIN_PASSWORD", "ADMIN_SECRET", "RESEND_API_KEY", "SUPABASE_SERVICE_ROLE_KEY"] as const;
  const env = Object.fromEntries(vars.map((v) => [v, Boolean(process.env[v])]));
  const storage = await checkStorage();
  try {
    await db.query("select 1");
    return Response.json({ ok: true, env, storage });
  } catch (err) {
    const e = err as { code?: string; message?: string };
    const kind = e.code === "28P01" ? "senha ou usuário incorretos" : e.code === "ENOTFOUND" ? "host não encontrado" : undefined;
    return Response.json({ ok: false, env, storage, code: e.code ?? null, kind: kind ?? null }, { status: 503 });
  }
}

async function checkStorage() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const base = supabaseUrl();
  if (!key || !base) return "sem chave (envio de arquivos desligado)";
  try {
    const r = await fetch(`${base}/storage/v1/object/upload/sign/${SUPABASE_BUCKET}/health/teste.mp4`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, apikey: key, "Content-Type": "application/json" },
      body: "{}",
      cache: "no-store",
    });
    return r.ok ? "ok" : `recusado (${r.status})`;
  } catch {
    return "sem conexão com o Supabase";
  }
}
