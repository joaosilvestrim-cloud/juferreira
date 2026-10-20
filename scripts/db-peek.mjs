import pg from "pg";
const c = new pg.Client({ ssl: { rejectUnauthorized: false } });
await c.connect();
const a = await c.query("select id, origin, route, name, email, left(message,40) msg, fields from public.contact_submissions order by id");
const b = await c.query("select id, email, source, status from public.newsletter_subscribers order by id");
console.log(a.rows, b.rows);
if (process.argv[2] === "--limpar-testes") {
  await c.query("delete from public.contact_submissions where name like 'TESTE AUTOMATICO%'");
  await c.query("delete from public.newsletter_subscribers where email like 'teste%@example.com'");
  // imagens que os testes enviaram (palco.webp) e que não estão em uso em lugar nenhum
  await c.query(`delete from public.media m where m.filename = 'palco.webp'
    and not exists (select 1 from public.articles a where a.cover_id = m.id or a.body like '%' || m.id || '%')
    and not exists (select 1 from public.reading_refs r where r.cover_id = m.id)
    and not exists (select 1 from public.page_seo s where s.og_image_id = m.id)
    and not exists (select 1 from public.proof_items p where p.media_id = m.id)
    and not exists (select 1 from public.media_items v where v.thumb_id = m.id)
    and not exists (select 1 from public.content_overrides o where o.value = '/midia/' || m.id)
    and not exists (select 1 from public.newsletter_issues n where n.body like '%' || m.id || '%')`);
  console.log("testes removidos");
}
await c.end();
