// Testa a conexão com o Postgres usando .env.local. Uso: node --env-file=.env.local scripts/db-ping.mjs
import pg from "pg";
const c = new pg.Client({ ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 10000 });
try {
  await c.connect();
  const r = await c.query("select version(), current_user, inet_server_addr()::text as addr");
  console.log("OK", r.rows[0].version.split(",")[0], r.rows[0].current_user, r.rows[0].addr);
} catch (e) {
  console.log("ERRO", e.code, e.message);
} finally {
  await c.end().catch(() => {});
}
