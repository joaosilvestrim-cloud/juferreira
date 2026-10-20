"use client";

import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";
import type { FormState } from "../content-actions";

export const fieldCls =
  "mt-1.5 w-full rounded-[10px] border border-ink-900/20 bg-cream-50 px-4 py-2.5 text-[15px] focus:border-red-brand focus:outline-none";

/** Formulário de server action com mensagem de sucesso/erro e botão de salvar. */
export function ActionForm({
  action,
  children,
  submit = "Salvar",
  className = "",
  resetOnSuccess = false,
}: {
  action: (s: FormState, f: FormData) => Promise<FormState>;
  children: ReactNode;
  submit?: string;
  className?: string;
  resetOnSuccess?: boolean;
}) {
  const [state, run, pending] = useActionState(action, {});
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state.ok && resetOnSuccess) ref.current?.reset();
  }, [state, resetOnSuccess]);
  return (
    <form ref={ref} action={run} className={`space-y-5 ${className}`}>
      {children}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          disabled={pending}
          className="min-h-11 rounded-full bg-red-brand px-6 text-[15px] text-cream-50 hover:bg-red-deep disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Salvando…" : submit}
        </button>
        {state.error && (
          <p role="alert" className="text-[14px] text-red-deep">
            {state.error}
          </p>
        )}
        {state.ok && state.message && (
          <p role="status" className="text-[14px] text-ink-700">
            ✓ {state.message}
          </p>
        )}
      </div>
    </form>
  );
}

export function Field({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <label className="block text-[14px] font-medium text-ink-900">
      {label}
      {children}
      {hint && <span className="mt-1 block text-[13px] font-normal text-ink-500">{hint}</span>}
    </label>
  );
}

/** Igual a Field, mas sem <label> em volta: para campos que já têm botões/rótulos próprios (envio de arquivo). */
export function FieldGroup({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <div className="block text-[14px] font-medium text-ink-900">
      <span className="block">{label}</span>
      <div className="mt-1.5 font-normal">{children}</div>
      {hint && <span className="mt-1 block text-[13px] font-normal text-ink-500">{hint}</span>}
    </div>
  );
}

/** Campo de imagem (JPG, PNG, WebP, GIF, AVIF): reduz no navegador (máx. 2000px, WebP) antes de enviar e mostra a prévia. */
export function ImageInput({ name = "cover", current }: { name?: string; current?: string | null }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const file = input.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setInfo(`${file.name} · ${(file.size / 1024 / 1024).toFixed(1)} MB`);
    if (!file.type.startsWith("image/") || file.type === "image/gif") return; // GIF fica como está (animação)
    try {
      const bmp = await createImageBitmap(file);
      const scale = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(bmp.width * scale);
      canvas.height = Math.round(bmp.height * scale);
      canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/webp", 0.86));
      if (!blob) return;
      const dt = new DataTransfer();
      dt.items.add(new File([blob], file.name.replace(/\.\w+$/, "") + ".webp", { type: "image/webp" }));
      input.files = dt.files;
      setInfo(`${file.name} · otimizada para ${(blob.size / 1024 / 1024).toFixed(1)} MB`);
    } catch {
      /* mantém o arquivo original */
    }
  };
  const shown = preview ?? current;
  return (
    <div className="flex flex-wrap items-center gap-4">
      {shown && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={shown} alt="" className="h-20 w-32 rounded-md object-cover" />
      )}
      <div className="space-y-1">
        <input
          name={name}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/avif,.jpg,.jpeg,.png,.webp,.gif,.avif"
          onChange={onChange}
          className="text-[14px] file:mr-3 file:cursor-pointer file:rounded-full file:border file:border-ink-900/25 file:bg-cream-50 file:px-4 file:py-2 file:text-[14px] hover:file:border-red-brand"
        />
        <p className="text-[12px] text-ink-500">{info ?? "JPG, PNG, WebP, GIF ou AVIF. Fotos grandes são reduzidas automaticamente."}</p>
      </div>
    </div>
  );
}
