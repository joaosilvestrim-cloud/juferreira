import { cookies } from "next/headers";
import { CONTACT_STATUS, FIELD_LABEL, NEWS_STATUS, ROUTE_LABEL } from "@/lib/admin";
import { isValidSession, SESSION_COOKIE } from "@/lib/auth";
import { db } from "@/lib/db";

/** Exporta contatos ou inscritos em CSV (UTF-8 com BOM, separador ";" — abre direto no Excel em português). */
export async function GET(req: Request) {
  if (!isValidSession((await cookies()).get(SESSION_COOKIE)?.value)) {
    return Response.json({ ok: false, error: "Não autorizado." }, { status: 401 });
  }
  const url = new URL(req.url);
  const type = url.searchParams.get("type") === "newsletter" ? "newsletter" : "contatos";
  const status = url.searchParams.get("status") ?? "";
  const rota = url.searchParams.get("rota") ?? "";
  const q = (url.searchParams.get("q") ?? "").trim();

  const cell = (v: unknown) => {
    let s = v == null ? "" : v instanceof Date ? v.toISOString() : String(v);
    if (/^[=+\-@]/.test(s)) s = `'${s}`; // evita injeção de fórmula em planilhas
    return `"${s.replace(/"/g, '""')}"`;
  };
  const toCsv = (rows: unknown[][]) => "﻿" + rows.map((r) => r.map(cell).join(";")).join("\r\n");
  const stamp = new Date().toISOString().slice(0, 10);

  if (type === "newsletter") {
    const where: string[] = [];
    const args: unknown[] = [];
    if ((NEWS_STATUS as readonly string[]).includes(status)) where.push(`status = $${args.push(status)}`);
    if (q) where.push(`email ilike $${args.push(`%${q}%`)}`);
    const { rows } = await db.query(
      `select email, created_at, source, status, unsubscribed_at from public.newsletter_subscribers ${where.length ? "where " + where.join(" and ") : ""} order by created_at desc`,
      args,
    );
    const csv = toCsv([
      ["E-mail", "Inscrição", "Origem", "Status", "Descadastro"],
      ...rows.map((r) => [r.email, r.created_at, r.source, r.status, r.unsubscribed_at]),
    ]);
    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="newsletter-${stamp}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  }

  const where: string[] = [];
  const args: unknown[] = [];
  if ((CONTACT_STATUS as readonly string[]).includes(status)) where.push(`status = $${args.push(status)}`);
  if (rota && ROUTE_LABEL[rota]) where.push(`route = $${args.push(rota)}`);
  if (q) {
    const i = args.push(`%${q}%`);
    where.push(`(name ilike $${i} or email ilike $${i} or organization ilike $${i} or message ilike $${i} or fields::text ilike $${i})`);
  }
  const { rows } = await db.query(
    `select * from public.contact_submissions ${where.length ? "where " + where.join(" and ") : ""} order by created_at desc`,
    args,
  );
  const fieldKeys = [...new Set(rows.flatMap((r) => Object.keys(r.fields ?? {})))];
  const csv = toCsv([
    ["Data", "Status", "Página", "Rota", "Nome", "E-mail", "Organização", "Telefone", "Mensagem", ...fieldKeys.map((k) => FIELD_LABEL[k] ?? k)],
    ...rows.map((r) => [
      r.created_at,
      r.status,
      r.origin,
      r.route ? ROUTE_LABEL[r.route] ?? r.route : "",
      r.name,
      r.email,
      r.organization,
      r.phone,
      r.message,
      ...fieldKeys.map((k) => {
        const v = r.fields?.[k];
        return Array.isArray(v) ? v.join(", ") : v;
      }),
    ]),
  ]);
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="contatos-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
