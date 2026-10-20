"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";
import { ACCEPT_MEDIA } from "@/lib/upload-types";
import { fieldCls } from "./form";

/**
 * Link do vídeo/áudio OU arquivo enviado do computador (MP4, MOV, WebM, MP3, M4A, WAV, OGG — até 500 MB).
 * O arquivo vai direto do navegador para o armazenamento; ao terminar, o endereço é preenchido no campo.
 */
export function MediaUrlField({ defaultValue = "", uploadEnabled }: { defaultValue?: string; uploadEnabled: boolean }) {
  const [url, setUrl] = useState(defaultValue);
  const [pct, setPct] = useState<number | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const abort = useRef<AbortController | null>(null);

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    e.currentTarget.value = "";
    if (!file) return;
    setErr(null);
    setMsg(null);
    if (file.size > 500 * 1024 * 1024) return setErr("Arquivo acima de 500 MB. Para vídeos longos, publique no YouTube e cole o link.");
    abort.current = new AbortController();
    setPct(0);
    try {
      const blob = await upload(`midia/${file.name}`, file, {
        access: "public",
        handleUploadUrl: "/api/admin/upload",
        multipart: file.size > 50 * 1024 * 1024,
        abortSignal: abort.current.signal,
        onUploadProgress: (p) => setPct(Math.round(p.percentage)),
      });
      setUrl(blob.url);
      setMsg(`Arquivo enviado: ${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB). Clique em Salvar para publicar.`);
    } catch (x) {
      if ((x as Error).name !== "AbortError") setErr(`Não foi possível enviar: ${(x as Error).message}`);
    } finally {
      setPct(null);
      abort.current = null;
    }
  };

  return (
    <div>
      <input
        name="url"
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={fieldCls}
        placeholder="https://www.youtube.com/watch?v=…  ou  https://open.spotify.com/episode/…"
      />
      <div className="mt-2 flex flex-wrap items-center gap-3">
        {uploadEnabled ? (
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-900/25 bg-cream-50 px-4 py-2 text-[14px] hover:border-red-brand">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
            </svg>
            Enviar arquivo do computador
            <input type="file" accept={ACCEPT_MEDIA} onChange={onFile} className="sr-only" disabled={pct !== null} />
          </label>
        ) : (
          <span className="text-[13px] text-ink-500">
            Envio de arquivos desativado: falta ligar o armazenamento (Vercel Blob). Por enquanto, cole um link.
          </span>
        )}
        <span className="text-[12px] text-ink-500">MP4, MOV, WebM, MP3, M4A, WAV ou OGG, até 500 MB.</span>
      </div>
      {pct !== null && (
        <div className="mt-3 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream-200">
            <div className="h-full bg-red-brand transition-[width]" style={{ width: `${pct}%` }} />
          </div>
          <span className="w-12 text-right text-[13px] tabular-nums">{pct}%</span>
          <button type="button" onClick={() => abort.current?.abort()} className="text-[13px] text-ink-500 hover:underline">
            Cancelar
          </button>
        </div>
      )}
      {msg && <p className="mt-2 text-[13px] text-green-800">{msg}</p>}
      {err && <p className="mt-2 text-[13px] font-medium text-red-deep">{err}</p>}
    </div>
  );
}
