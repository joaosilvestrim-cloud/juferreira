import { db } from "@/lib/db";

/* Uso exclusivo do servidor (ações do painel). Não é uma server action: não fica exposto como endpoint. */
export const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

/** Salva a imagem enviada e devolve o id (ou null se não veio arquivo). */
export async function storeImage(file: FormDataEntryValue | null): Promise<string | null> {
  if (!(file instanceof File) || file.size === 0) return null;
  if (!IMAGE_TYPES.includes(file.type)) throw new Error("Formato de imagem não suportado (use JPG, PNG ou WebP).");
  if (file.size > 3.8 * 1024 * 1024) throw new Error("Imagem muito grande (máx. 3,8 MB).");
  const bytes = Buffer.from(await file.arrayBuffer());
  const { rows } = await db.query<{ id: string }>(
    "insert into public.media (filename, content_type, bytes, size) values ($1,$2,$3,$4) returning id",
    [file.name.slice(0, 200), file.type, bytes, bytes.length],
  );
  return rows[0].id;
}
