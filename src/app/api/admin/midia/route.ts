import { NextResponse } from "next/server";
import { sessionUser } from "@/lib/auth";
import { db } from "@/lib/db";

/** Imagens da biblioteca (mais recentes primeiro) para o seletor do painel. */
export async function GET() {
  if (!(await sessionUser())) return NextResponse.json({ error: "Sessão expirada." }, { status: 401 });
  const { rows } = await db.query<{ id: string; filename: string | null; created_at: Date }>(
    "select id, filename, created_at from public.media where content_type like 'image/%' order by created_at desc limit 300",
  );
  return NextResponse.json(rows.map((r) => ({ id: r.id, url: `/midia/${r.id}`, name: r.filename ?? "" })));
}
