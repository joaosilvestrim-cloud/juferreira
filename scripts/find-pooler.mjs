import pg from "pg";
const ref = "iwqqpungarkotgpvppbo";
const regions = ["sa-east-1","us-east-1","us-east-2","us-west-1","us-west-2","ca-central-1","eu-west-1","eu-west-2","eu-west-3","eu-central-1","eu-central-2","eu-north-1","ap-south-1","ap-southeast-1","ap-southeast-2","ap-northeast-1","ap-northeast-2"];
for (const pre of ["aws-0","aws-1"]) for (const r of regions) {
  const host = `${pre}-${r}.pooler.supabase.com`;
  const c = new pg.Client({ host, port: 6543, user: `postgres.${ref}`, database: "postgres", password: process.env.PGPASSWORD, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 6000 });
  try { await c.connect(); await c.query("select 1"); console.log("FOUND", host); await c.end(); process.exit(0); }
  catch (e) { if (!/Tenant or user not found|ENOTFOUND|timeout/i.test(e.message)) console.log(host, e.message); await c.end().catch(()=>{}); }
}
console.log("none");
