"use client";

import { useEffect, useRef, useState } from "react";
import { cleanRich, richToPlain } from "@/lib/rich-inline";

/**
 * Editor de frase com destaques (títulos, parágrafos). Escreva livremente; selecione um trecho e escolha
 * Vermelho, Itálico ou Negrito. Enter quebra a linha. Colar traz só o texto. Salva marcação limpa no campo `name`.
 */
export function RichLine({
  name,
  original,
  value,
  big = false,
  onDirty,
}: {
  name: string;
  original: string;
  value: string | null;
  big?: boolean;
  onDirty?: (changed: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const start = value ?? original;
  const [current, setCurrent] = useState(cleanRich(start));
  const [active, setActive] = useState<{ em: boolean; i: boolean; strong: boolean }>({ em: false, i: false, strong: false });
  const changed = current !== cleanRich(original);

  // conteúdo inicial (e ao voltar ao original); depois disso o navegador cuida do texto
  useEffect(() => {
    if (ref.current) ref.current.innerHTML = start;
  }, [start]);

  const sync = () => {
    const v = cleanRich(ref.current?.innerHTML ?? "");
    setCurrent(v);
    onDirty?.(v !== cleanRich(original));
    refreshActive();
  };

  const refreshActive = () => {
    const sel = window.getSelection();
    let n: Node | null = sel?.anchorNode ?? null;
    const st = { em: false, i: false, strong: false };
    while (n && n !== ref.current) {
      if (n instanceof HTMLElement) {
        const t = n.tagName.toLowerCase();
        if (t === "em") st.em = true;
        if (t === "i") st.i = true;
        if (t === "strong" || t === "b") st.strong = true;
      }
      n = n.parentNode;
    }
    setActive(st);
  };

  /** Liga/desliga uma marcação no trecho selecionado. */
  const toggle = (tag: "em" | "i" | "strong") => {
    const el = ref.current;
    const sel = window.getSelection();
    if (!el || !sel || !sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    if (!el.contains(range.commonAncestorContainer)) return;
    // já está dentro da marcação → remove (desembrulha o elemento)
    let n: Node | null = range.commonAncestorContainer;
    while (n && n !== el) {
      if (n instanceof HTMLElement && (n.tagName.toLowerCase() === tag || (tag === "strong" && n.tagName === "B"))) {
        const parent = n.parentNode!;
        while (n.firstChild) parent.insertBefore(n.firstChild, n);
        parent.removeChild(n);
        sync();
        return;
      }
      n = n.parentNode;
    }
    if (range.collapsed) return; // nada selecionado
    const wrap = document.createElement(tag);
    wrap.appendChild(range.extractContents());
    // tira a mesma marcação de dentro (evita <em><em>…)
    wrap.querySelectorAll(tag).forEach((x) => x.replaceWith(...Array.from(x.childNodes)));
    range.insertNode(wrap);
    sel.removeAllRanges();
    const r = document.createRange();
    r.selectNodeContents(wrap);
    sel.addRange(r);
    sync();
  };

  const clearFormat = () => {
    const el = ref.current;
    const sel = window.getSelection();
    if (!el || !sel || !sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    if (range.collapsed) {
      // sem seleção: limpa a frase toda (mantém quebras)
      el.innerHTML = cleanRich(el.innerHTML).replace(/<\/?(em|i|strong)>/g, "");
    } else {
      const text = range.toString();
      range.deleteContents();
      range.insertNode(document.createTextNode(text));
    }
    sync();
  };

  const lineBreak = () => {
    ref.current?.focus();
    document.execCommand("insertLineBreak");
    sync();
  };

  const reset = () => {
    if (ref.current) ref.current.innerHTML = original;
    sync();
  };

  const btn = (on: boolean) =>
    `inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-[13px] transition-colors ${
      on ? "border-red-brand bg-red-brand text-cream-50" : "border-ink-900/15 bg-cream-50 hover:border-red-brand hover:text-red-brand"
    }`;

  return (
    <div>
      {/* mousedown com preventDefault: o clique no botão não tira a seleção do texto */}
      <div className="mb-1.5 flex flex-wrap items-center gap-1.5" onMouseDown={(e) => e.preventDefault()}>
        <button type="button" onClick={() => toggle("em")} className={btn(active.em)} title="Destaque em vermelho (selecione o trecho)">
          <span className="h-3 w-3 rounded-full bg-red-brand" aria-hidden /> Vermelho
        </button>
        <button type="button" onClick={() => toggle("i")} className={btn(active.i)} title="Itálico">
          <i className="font-serif">I</i> Itálico
        </button>
        <button type="button" onClick={() => toggle("strong")} className={btn(active.strong)} title="Negrito">
          <b>B</b> Negrito
        </button>
        <button type="button" onClick={lineBreak} className={btn(false)} title="Quebrar a linha aqui (ou aperte Enter)">
          ↵ Quebra de linha
        </button>
        <button type="button" onClick={clearFormat} className={btn(false)} title="Tirar destaques do trecho selecionado (ou da frase toda)">
          Limpar
        </button>
        {changed && (
          <button type="button" onClick={reset} className="ml-1 text-[13px] text-red-brand hover:underline">
            Voltar ao original
          </button>
        )}
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-multiline="true"
        spellCheck
        onInput={sync}
        onKeyUp={refreshActive}
        onMouseUp={refreshActive}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            document.execCommand("insertLineBreak");
            sync();
          }
          if ((e.ctrlKey || e.metaKey) && ["b", "i"].includes(e.key.toLowerCase())) {
            e.preventDefault();
            toggle(e.key.toLowerCase() === "b" ? "strong" : "i");
          }
        }}
        onPaste={(e) => {
          e.preventDefault();
          document.execCommand("insertText", false, e.clipboardData.getData("text/plain"));
        }}
        className={`jf-rich-line min-h-[46px] rounded-[10px] border px-4 py-2.5 leading-snug focus:border-red-brand focus:outline-none ${
          big ? "font-serif text-[22px]" : "text-[16px]"
        } ${changed ? "border-red-brand/60 bg-blush-100/40" : "border-ink-900/20 bg-cream-50"}`}
      />
      {/* só envia quando mudou (igual ao original = volta ao original) */}
      <input type="hidden" name={changed || value !== null ? name : undefined} value={current} />
      {changed && (
        <p className="mt-1 text-[12px] text-ink-500">
          Original: <span className="italic">{richToPlain(original).slice(0, 160)}</span>
        </p>
      )}
    </div>
  );
}
