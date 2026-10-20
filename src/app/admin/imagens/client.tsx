"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { uploadLibraryImage } from "../more-actions";

/** Envia várias imagens, uma por vez; cada uma é reduzida no navegador (máx. 2000px, WebP) antes de subir. */
export function UploadImages() {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [done, setDone] = useState<number | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const shrink = async (file: File) => {
    if (!file.type.startsWith("image/") || file.type === "image/gif") return file;
    try {
      const bmp = await createImageBitmap(file);
      const scale = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
      const c = document.createElement("canvas");
      c.width = Math.round(bmp.width * scale);
      c.height = Math.round(bmp.height * scale);
      c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
      const blob = await new Promise<Blob | null>((r) => c.toBlob(r, "image/webp", 0.86));
      return blob ? new File([blob], file.name.replace(/\.\w+$/, "") + ".webp", { type: "image/webp" }) : file;
    } catch {
      return file;
    }
  };
  const send = async () => {
    setErrors([]);
    setDone(0);
    const errs: string[] = [];
    for (const [i, f] of files.entries()) {
      const fd = new FormData();
      fd.append("files", await shrink(f));
      const r = await uploadLibraryImage({}, fd);
      if (r.error) errs.push(`${f.name}: ${r.error}`);
      setDone(i + 1);
    }
    setErrors(errs);
    setFiles([]);
    setDone(null);
    router.refresh();
  };
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <input
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif,image/avif,.jpg,.jpeg,.png,.webp,.gif,.avif"
          onChange={(e) => setFiles([...(e.currentTarget.files ?? [])])}
          className="text-[14px] file:mr-3 file:cursor-pointer file:rounded-full file:border file:border-ink-900/25 file:bg-cream-50 file:px-4 file:py-2 file:text-[14px] hover:file:border-red-brand"
        />
        <button
          type="button"
          onClick={send}
          disabled={!files.length || done !== null}
          className="min-h-11 rounded-full bg-red-brand px-6 text-[15px] text-cream-50 hover:bg-red-deep disabled:opacity-50"
        >
          {done !== null ? `Enviando ${done}/${files.length}…` : files.length > 1 ? `Enviar ${files.length} imagens` : "Enviar"}
        </button>
      </div>
      <p className="mt-2 text-[12px] text-ink-500">JPG, PNG, WebP, GIF ou AVIF. Fotos grandes são reduzidas automaticamente.</p>
      {errors.length > 0 && (
        <ul className="mt-2 text-[13px] text-red-deep">
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CopyLink({ path }: { path: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(new URL(path, location.origin).toString());
        setOk(true);
        setTimeout(() => setOk(false), 1500);
      }}
      className="text-red-brand hover:underline"
    >
      {ok ? "Link copiado" : "Copiar link"}
    </button>
  );
}
