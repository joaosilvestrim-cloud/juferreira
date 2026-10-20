"use client";

import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";
import type { FormState } from "../content-actions";

export const fieldCls =
  "mt-1.5 w-full rounded-[10px] border border-ink-900/20 bg-cream-50 px-4 py-2.5 text-[15px] focus:border-red-brand focus:outline-none";

/**
 * Formulário de server action: mensagem de sucesso/erro, aviso de alterações não salvas (e ao sair da página),
 * Ctrl/Cmd+S para salvar e barra do botão fixa no rodapé em formulários longos.
 */
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
  // "alterado" = houve digitação depois do último resultado de salvar (sem setState dentro de efeito)
  const [editedAfter, setEditedAfter] = useState<FormState | null>(null);
  const dirty = editedAfter === state;
  const markDirty = () => setEditedAfter(state);
  const [hiddenFor, setHiddenFor] = useState<FormState | null>(null);
  const showMsg = hiddenFor !== state;

  useEffect(() => {
    if (state.ok && resetOnSuccess) ref.current?.reset();
    if (!state.ok) return;
    const t = setTimeout(() => setHiddenFor(state), 7000); // mensagem de sucesso some sozinha
    return () => clearTimeout(t);
  }, [state, resetOnSuccess]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      ref.current?.requestSubmit();
    }
  };

  return (
    <form
      ref={ref}
      action={run}
      onInput={markDirty}
      onChange={markDirty}
      onKeyDown={onKeyDown}
      className={`space-y-5 ${className}`}
    >
      {children}
      <div className="sticky bottom-0 z-10 -mx-2 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-b-[12px] bg-gradient-to-t from-cream-50 via-cream-50/95 to-cream-50/0 px-2 pb-3 pt-4">
        <button
          disabled={pending}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-red-brand px-6 text-[15px] text-cream-50 shadow-[0_8px_20px_-12px_rgba(184,12,16,0.8)] hover:bg-red-deep disabled:cursor-wait disabled:opacity-70"
        >
          {pending && <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream-50/40 border-t-cream-50" aria-hidden />}
          {pending ? "Salvando…" : submit}
        </button>
        {dirty && !pending && <span className="rounded-full bg-blush-100 px-3 py-1 text-[12px] text-red-deep">Alterações não salvas</span>}
        {showMsg && state.error && (
          <p role="alert" className="rounded-[10px] bg-blush-100 px-3 py-1.5 text-[14px] font-medium text-red-deep">
            {state.error}
          </p>
        )}
        {showMsg && state.ok && state.message && !dirty && (
          <p role="status" className="inline-flex items-center gap-2 rounded-[10px] bg-green-50 px-3 py-1.5 text-[14px] text-green-800">
            <span aria-hidden>✓</span> {state.message}
          </p>
        )}
        <span className="ml-auto hidden text-[12px] text-ink-500 sm:inline">Ctrl+S salva</span>
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
export function ImageInput({
  name = "cover",
  current,
  onPreview,
}: {
  name?: string;
  current?: string | null;
  /** Quando informado, a prévia vai para quem chamou (sem miniatura própria). */
  onPreview?: (url: string | null) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const file = input.files?.[0];
    if (!file) return;
    const u = URL.createObjectURL(file);
    setPreview(u);
    onPreview?.(u);
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
  const clear = () => {
    if (ref.current) ref.current.value = "";
    setPreview(null);
    onPreview?.(null);
    setInfo(null);
  };
  const shown = preview ?? current;
  return (
    <div className="flex flex-wrap items-center gap-4 font-normal">
      <div className={`flex h-20 w-32 shrink-0 items-center justify-center overflow-hidden rounded-md border border-ink-900/10 bg-cream-200 ${onPreview ? "hidden" : ""}`}>
        {shown ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={shown} alt="" className="h-full w-full object-cover" />
        ) : (
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-ink-500" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4" />
          </svg>
        )}
      </div>
      <div className="min-w-0 max-w-full flex-1 space-y-1.5">
        <input
          ref={ref}
          name={name}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/avif,.jpg,.jpeg,.png,.webp,.gif,.avif"
          onChange={onChange}
          className="sr-only"
          tabIndex={-1}
        />
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => ref.current?.click()}
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/25 bg-cream-50 px-4 py-2 text-[14px] hover:border-red-brand hover:text-red-brand"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
            </svg>
            {shown ? "Trocar imagem" : "Escolher imagem"}
          </button>
          {preview && (
            <button type="button" onClick={clear} className="text-[13px] text-ink-500 hover:underline">
              Desfazer escolha
            </button>
          )}
        </div>
        <p className="break-words text-[12px] text-ink-500">{info ?? "JPG, PNG, WebP, GIF ou AVIF. Fotos grandes são reduzidas automaticamente."}</p>
      </div>
    </div>
  );
}
