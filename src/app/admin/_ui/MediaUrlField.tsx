"use client";

import { useRef, useState } from "react";
import { ACCEPT_MEDIA } from "@/lib/upload-types";
import { fieldCls } from "./form";

/**
 * Link do vídeo/áudio OU arquivo enviado do computador (MP4, MOV, WebM, MP3, M4A, WAV, OGG — até 500 MB).
 * O arquivo vai direto do navegador para o Supabase Storage; ao terminar, o endereço é preenchido no campo.
 */
export function MediaUrlField({ defaultValue = "", provider }: { defaultValue?: string; provider: "supabase" | null }) {
  const uploadEnabled = provider !== null;
  const [url, setUrl] = useState(defaultValue);
  const [pct, setPct] = useState<number | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const xhrRef = useRef<XMLHttpRequest | null>(null);

  /** Supabase Storage: pede ao servidor uma URL assinada e envia direto do navegador, com progresso. */
  const sendSupabase = async (file: File) => {
    const sign = await fetch("/api/admin/upload/supabase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: file.name, type: file.type, size: file.size }),
    });
    const j = (await sign.json()) as { uploadUrl?: string; publicUrl?: string; error?: string };
    if (!sign.ok || !j.uploadUrl) throw new Error(j.error ?? "não foi possível autorizar o envio");
    await new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhrRef.current = xhr;
      xhr.open("PUT", j.uploadUrl!);
      xhr.setRequestHeader("x-upsert", "false");
      xhr.upload.onprogress = (ev) => ev.lengthComputable && setPct(Math.round((ev.loaded / ev.total) * 100));
      xhr.onload = () =>
        xhr.status < 300
          ? resolve()
          : reject(new Error(xhr.status === 413 ? "arquivo maior que o limite do plano do Supabase (50 MB no plano gratuito)" : `${xhr.status} ${xhr.responseText.slice(0, 160)}`));
      xhr.onerror = () => reject(new Error("falha de conexão"));
      xhr.onabort = () => reject(Object.assign(new Error("cancelado"), { name: "AbortError" }));
      const fd = new FormData();
      fd.append("cacheControl", "31536000");
      fd.append("", file);
      xhr.send(fd);
    });
    return j.publicUrl!;
  };

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    e.currentTarget.value = "";
    if (!file) return;
    setErr(null);
    setMsg(null);
    if (file.size > 500 * 1024 * 1024) return setErr("Arquivo acima de 500 MB. Para vídeos longos, publique no YouTube e cole o link.");
    setPct(0);
    try {
      setUrl(await sendSupabase(file));
      setMsg(`Arquivo enviado: ${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB). Clique em Salvar para publicar.`);
    } catch (x) {
      if ((x as Error).name !== "AbortError") setErr(`Não foi possível enviar: ${(x as Error).message}`);
    } finally {
      setPct(null);
      xhrRef.current = null;
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
            Envio de arquivos desligado: falta a chave do Supabase Storage (SUPABASE_SERVICE_ROLE_KEY). Por enquanto, cole um link.
          </span>
        )}
        <span className="text-[12px] text-ink-500">MP4, MOV, WebM, MP3, M4A, WAV ou OGG. No plano gratuito do Supabase, até 50 MB por arquivo; vídeos longos, prefira o YouTube.</span>
      </div>
      {pct !== null && (
        <div className="mt-3 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream-200">
            <div className="h-full bg-red-brand transition-[width]" style={{ width: `${pct}%` }} />
          </div>
          <span className="w-12 text-right text-[13px] tabular-nums">{pct}%</span>
          <button type="button" onClick={() => {
              xhrRef.current?.abort();
            }} className="text-[13px] text-ink-500 hover:underline">
            Cancelar
          </button>
        </div>
      )}
      {msg && <p className="mt-2 text-[13px] text-green-800">{msg}</p>}
      {err && <p className="mt-2 text-[13px] font-medium text-red-deep">{err}</p>}
    </div>
  );
}
