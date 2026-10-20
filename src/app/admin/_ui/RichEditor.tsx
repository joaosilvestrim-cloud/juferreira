"use client";

import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { Placeholder, CharacterCount } from "@tiptap/extensions";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRef, useState, type ReactNode } from "react";
import { uploadInlineImage } from "../content-actions";

const Btn = ({ on, active, label, children, disabled }: { on: () => void; active?: boolean; label: string; children: ReactNode; disabled?: boolean }) => (
  <button
    type="button"
    title={label}
    aria-label={label}
    aria-pressed={active}
    disabled={disabled}
    onMouseDown={(e) => e.preventDefault()}
    onClick={on}
    className={`min-h-9 min-w-9 rounded-md px-2 text-[14px] transition-colors disabled:opacity-30 ${active ? "bg-ink-900 text-cream-50" : "hover:bg-cream-200"}`}
  >
    {children}
  </button>
);
const Sep = () => <span className="mx-1 h-6 w-px bg-ink-900/15" aria-hidden />;

/**
 * Editor de texto completo do painel (artigos e newsletter).
 * Grava o HTML num campo oculto `name` — o servidor higieniza antes de salvar.
 */
export function RichEditor({ name, initialHtml, placeholder = "Comece a escrever…" }: { name: string; initialHtml: string; placeholder?: string }) {
  const [html, setHtml] = useState(initialHtml);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        link: { openOnClick: false, autolink: true, HTMLAttributes: { rel: "noopener noreferrer" } },
      }),
      Image.configure({ inline: false }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder }),
      CharacterCount,
    ],
    content: initialHtml,
    editorProps: {
      attributes: {
        class:
          "jf-rich min-h-[360px] px-5 py-4 font-serif text-[18px] leading-[1.75] text-ink-900 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => setHtml(editor.isEmpty ? "" : editor.getHTML()),
  });

  const state = useEditorState({
    editor,
    selector: ({ editor: e }) =>
      e
        ? {
            bold: e.isActive("bold"),
            italic: e.isActive("italic"),
            underline: e.isActive("underline"),
            strike: e.isActive("strike"),
            h2: e.isActive("heading", { level: 2 }),
            h3: e.isActive("heading", { level: 3 }),
            bullet: e.isActive("bulletList"),
            ordered: e.isActive("orderedList"),
            quote: e.isActive("blockquote"),
            link: e.isActive("link"),
            center: e.isActive({ textAlign: "center" }),
            words: e.storage.characterCount.words() as number,
            canUndo: e.can().undo(),
            canRedo: e.can().redo(),
          }
        : null,
  });

  const setLink = () => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Endereço do link (https://… ou e-mail):", prev ?? "https://");
    if (url === null) return;
    if (url === "" || url === "https://") return editor.chain().focus().extendMarkRange("link").unsetLink().run();
    const href = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url) ? `mailto:${url}` : url;
    editor.chain().focus().extendMarkRange("link").setLink({ href }).run();
  };

  const onImage = async (file?: File) => {
    if (!editor || !file) return;
    setUploading(true);
    try {
      // reduz no navegador antes de enviar
      const bmp = await createImageBitmap(file);
      const scale = Math.min(1, 1800 / Math.max(bmp.width, bmp.height));
      const c = document.createElement("canvas");
      c.width = Math.round(bmp.width * scale);
      c.height = Math.round(bmp.height * scale);
      c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
      const blob = await new Promise<Blob | null>((r) => c.toBlob(r, "image/webp", 0.86));
      const fd = new FormData();
      fd.append("file", new File([blob ?? file], "imagem.webp", { type: blob ? "image/webp" : file.type }));
      const res = await uploadInlineImage(fd);
      if (res.url) {
        const alt = window.prompt("Descrição da imagem (para acessibilidade):", "") ?? "";
        editor.chain().focus().setImage({ src: res.url, alt }).run();
      } else alert(res.error ?? "Não foi possível enviar a imagem.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const c = () => editor!.chain().focus();

  return (
    <div className="mt-1.5 overflow-hidden rounded-[10px] border border-ink-900/20 bg-cream-50 focus-within:border-red-brand">
      <input type="hidden" name={name} value={html} />
      <div className="flex flex-wrap items-center gap-0.5 border-b border-ink-900/10 bg-cream-100 p-1.5" role="toolbar" aria-label="Formatação">
        <Btn label="Desfazer" on={() => c().undo().run()} disabled={!state?.canUndo}>↶</Btn>
        <Btn label="Refazer" on={() => c().redo().run()} disabled={!state?.canRedo}>↷</Btn>
        <Sep />
        <Btn label="Título" active={state?.h2} on={() => c().toggleHeading({ level: 2 }).run()}>
          <span className="font-serif font-semibold">T</span>
        </Btn>
        <Btn label="Subtítulo" active={state?.h3} on={() => c().toggleHeading({ level: 3 }).run()}>
          <span className="font-serif text-[12px] font-semibold">T</span>
        </Btn>
        <Sep />
        <Btn label="Negrito" active={state?.bold} on={() => c().toggleBold().run()}>
          <strong>B</strong>
        </Btn>
        <Btn label="Itálico" active={state?.italic} on={() => c().toggleItalic().run()}>
          <em className="font-serif">I</em>
        </Btn>
        <Btn label="Sublinhado" active={state?.underline} on={() => c().toggleUnderline().run()}>
          <span className="underline">U</span>
        </Btn>
        <Btn label="Riscado" active={state?.strike} on={() => c().toggleStrike().run()}>
          <span className="line-through">S</span>
        </Btn>
        <Sep />
        <Btn label="Lista com marcadores" active={state?.bullet} on={() => c().toggleBulletList().run()}>
          • ≡
        </Btn>
        <Btn label="Lista numerada" active={state?.ordered} on={() => c().toggleOrderedList().run()}>
          1. ≡
        </Btn>
        <Btn label="Citação" active={state?.quote} on={() => c().toggleBlockquote().run()}>
          <span className="font-serif text-[18px] leading-none">“</span>
        </Btn>
        <Btn label="Linha divisória" on={() => c().setHorizontalRule().run()}>
          ―
        </Btn>
        <Sep />
        <Btn label="Centralizar" active={state?.center} on={() => (state?.center ? c().setTextAlign("left").run() : c().setTextAlign("center").run())}>
          ≡
        </Btn>
        <Btn label="Link" active={state?.link} on={setLink}>
          Link
        </Btn>
        <Btn label="Inserir imagem" on={() => fileRef.current?.click()} disabled={uploading}>
          {uploading ? "Enviando…" : "Imagem"}
        </Btn>
        <Btn label="Limpar formatação" on={() => c().unsetAllMarks().clearNodes().run()}>
          ⌫
        </Btn>
        <span className="ml-auto px-2 text-[12px] text-ink-500">{state?.words ?? 0} palavras</span>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => onImage(e.target.files?.[0])} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
