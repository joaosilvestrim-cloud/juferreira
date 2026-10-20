import { db } from "@/lib/db";

/** Imagens enviadas pelo painel. Conteúdo imutável por id → cache longo. */
export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return new Response("Not found", { status: 404 });
  const { rows } = await db.query<{ content_type: string; bytes: Buffer }>(
    "select content_type, bytes from public.media where id = $1",
    [id],
  );
  if (!rows[0]) return new Response("Not found", { status: 404 });
  return new Response(new Uint8Array(rows[0].bytes), {
    headers: {
      "Content-Type": rows[0].content_type,
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
