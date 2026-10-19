// Aplica db/schema.sql. Uso: node --env-file=.env.local scripts/db-migrate.mjs
import pg from "pg";
import { readFileSync } from "node:fs";
const c = new pg.Client({ ssl: { rejectUnauthorized: false } });
await c.connect();
await c.query(readFileSync("db/schema.sql", "utf8"));
const { rows } = await c.query(
  "select table_name, (select relrowsecurity from pg_class where relname = table_name) as rls from information_schema.tables where table_schema='public' and table_name in ('contact_submissions','newsletter_subscribers')",
);
console.log(rows);
await c.end();
