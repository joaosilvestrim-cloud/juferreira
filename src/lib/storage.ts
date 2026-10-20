/**
 * Onde o painel guarda vídeos e áudios enviados como arquivo.
 * Supabase Storage (bucket "midia"), que precisa de SUPABASE_SERVICE_ROLE_KEY. Sem a chave, o painel aceita só links.
 */
export const SUPABASE_BUCKET = "midia";

export function supabaseUrl(): string | null {
  if (process.env.SUPABASE_URL) return process.env.SUPABASE_URL.replace(/\/$/, "");
  const ref = process.env.PGUSER?.match(/^postgres\.([a-z0-9]+)$/)?.[1]; // usuário do pooler: postgres.<projeto>
  return ref ? `https://${ref}.supabase.co` : null;
}

export type UploadProvider = "supabase" | null;

export function uploadProvider(): UploadProvider {
  if (process.env.SUPABASE_SERVICE_ROLE_KEY && supabaseUrl()) return "supabase";
  return null;
}
