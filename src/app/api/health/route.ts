import { db } from "@/lib/db";

/** Diagnóstico da conexão com o banco. Não expõe valores — só presença das variáveis e o código do erro. */
export async function GET() {
  const vars = ["PGHOST", "PGPORT", "PGDATABASE", "PGUSER", "PGPASSWORD"] as const;
  const env = Object.fromEntries(vars.map((v) => [v, Boolean(process.env[v])]));
  try {
    await db.query("select 1");
    return Response.json({ ok: true, env });
  } catch (err) {
    const e = err as { code?: string; message?: string };
    const kind = e.code === "28P01" ? "senha ou usuário incorretos" : e.code === "ENOTFOUND" ? "host não encontrado" : undefined;
    return Response.json({ ok: false, env, code: e.code ?? null, kind: kind ?? null }, { status: 503 });
  }
}
