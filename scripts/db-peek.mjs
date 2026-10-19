import pg from "pg";
const c = new pg.Client({ ssl: { rejectUnauthorized: false } });
await c.connect();
const a = await c.query("select id, origin, route, name, email, left(message,40) msg, fields from public.contact_submissions order by id");
const b = await c.query("select id, email, source, status from public.newsletter_subscribers order by id");
console.log(a.rows, b.rows);
if (process.argv[2] === "--limpar-testes") {
  await c.query("delete from public.contact_submissions where name like 'TESTE AUTOMATICO%'");
  await c.query("delete from public.newsletter_subscribers where email like 'teste-%@example.com'");
  console.log("testes removidos");
}
await c.end();
