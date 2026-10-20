import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { sessionUser } from "@/lib/auth";
import { UPLOAD_TYPES } from "@/lib/upload-types";


/**
 * Autoriza o navegador do painel a enviar o arquivo direto para o armazenamento (Vercel Blob), sem passar pelo
 * servidor — por isso aceita vídeos grandes. Só funciona com sessão válida do painel e BLOB_READ_WRITE_TOKEN configurado.
 */
export async function POST(request: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "Armazenamento de arquivos não configurado (BLOB_READ_WRITE_TOKEN)." }, { status: 503 });
  }
  const body = (await request.json()) as HandleUploadBody;
  try {
    const json = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        if (!(await sessionUser())) throw new Error("Sessão expirada. Entre de novo no painel.");
        return {
          allowedContentTypes: UPLOAD_TYPES,
          maximumSizeInBytes: 500 * 1024 * 1024, // 500 MB
          addRandomSuffix: true,
        };
      },
    });
    return NextResponse.json(json);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 400 });
  }
}
