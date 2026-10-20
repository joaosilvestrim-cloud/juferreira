import { NextResponse } from "next/server";
import { sessionUser } from "@/lib/auth";
import { SUPABASE_BUCKET, supabaseUrl } from "@/lib/storage";
import { UPLOAD_TYPES } from "@/lib/upload-types";

/**
 * Gera uma URL assinada (uso único) para o navegador do painel enviar o arquivo direto ao Supabase Storage.
 * Recebe { name, type, size }; devolve { uploadUrl, publicUrl }.
 */
export async function POST(request: Request) {
  if (!(await sessionUser())) return NextResponse.json({ error: "Sessão expirada. Entre de novo no painel." }, { status: 401 });
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const base = supabaseUrl();
  if (!key || !base) return NextResponse.json({ error: "Armazenamento do Supabase não configurado (SUPABASE_SERVICE_ROLE_KEY)." }, { status: 503 });

  const { name, type, size } = (await request.json()) as { name?: string; type?: string; size?: number };
  if (!type || !UPLOAD_TYPES.includes(type)) return NextResponse.json({ error: "Formato não aceito. Use MP4, MOV, WebM, MP3, M4A, WAV, OGG, JPG, PNG, WebP ou GIF." }, { status: 400 });
  if (!size || size > 500 * 1024 * 1024) return NextResponse.json({ error: "Arquivo acima de 500 MB." }, { status: 400 });

  const clean = String(name ?? "arquivo")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(-80);
  const path = `uploads/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID().slice(0, 8)}-${clean || "arquivo"}`;

  const r = await fetch(`${base}/storage/v1/object/upload/sign/${SUPABASE_BUCKET}/${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, apikey: key, "Content-Type": "application/json" },
    body: "{}",
  });
  if (!r.ok) return NextResponse.json({ error: `Supabase recusou o envio (${r.status}): ${(await r.text()).slice(0, 200)}` }, { status: 502 });
  const { url } = (await r.json()) as { url: string };
  return NextResponse.json({
    uploadUrl: `${base}/storage/v1${url}`,
    publicUrl: `${base}/storage/v1/object/public/${SUPABASE_BUCKET}/${path}`,
  });
}
