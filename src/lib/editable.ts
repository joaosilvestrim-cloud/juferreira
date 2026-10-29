/**
 * Textos e imagens editáveis pelo /admin.
 *
 * As seções das páginas chamam tx("chave", "texto original") e img("chave", "/images/…").
 * Cada página carrega os ajustes salvos no painel (loadOverrides) antes de renderizar;
 * sem ajuste, vale o texto/imagem original do código. As chaves vêm de scripts/codemod-editable.mjs.
 */
import { createElement, Fragment, type ReactNode } from "react";
import { Em } from "@/components/ui/Typography";

let overrides: Record<string, string> = {};

export function setOverrides(map: Record<string, string>) {
  overrides = map;
}

export function tx(key: string, original: string): string {
  const v = overrides[key];
  return v === undefined || v === "" ? original : v;
}

export function img(key: string, original: string): string {
  const v = overrides[key];
  return v ? v : original;
}

/**
 * Dados declarados no topo dos módulos (listas de cards, etc.) seriam avaliados uma única vez.
 * lazy() reavalia a fábrica a cada acesso, para que os ajustes do painel valham sem reiniciar o servidor.
 */
export function lazy<T extends object>(factory: () => T): T {
  const target = (Array.isArray(factory()) ? [] : {}) as T;
  return new Proxy(target, {
    get: (_t, prop) => {
      const v = factory();
      const out = Reflect.get(v, prop);
      return typeof out === "function" && prop !== "constructor" ? out.bind(v) : out;
    },
    has: (_t, prop) => Reflect.has(factory(), prop),
    ownKeys: (t) => (Array.isArray(t) ? Reflect.ownKeys(t) : Reflect.ownKeys(factory())),
    getOwnPropertyDescriptor: (t, prop) => {
      if (Array.isArray(t)) return Reflect.getOwnPropertyDescriptor(t, prop);
      const d = Reflect.getOwnPropertyDescriptor(factory(), prop);
      return d ? { ...d, configurable: true } : undefined;
    },
  });
}

/** Bloco oculto no painel (Páginas → "Mostrar no site" desmarcado). O nome é o do componente da seção. */
export function shown(section: string): boolean {
  return overrides[`hide:${section}`] !== "1";
}

/**
 * Frase com destaques, editável inteira no painel. Marcação aceita (o resto vira texto):
 *   <em>vermelho</em>  <i>itálico</i>  <strong>negrito</strong>  <br> quebra de linha
 */
export function rx(key: string, original: string): ReactNode {
  const v = overrides[key];
  return richNodes(v === undefined || v.trim() === "" ? original : v);
}

const unescape = (s: string) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");

export function richNodes(markup: string): ReactNode {
  type Node = { tag: string; children: ReactNode[] };
  const root: Node = { tag: "", children: [] };
  const stack: Node[] = [root];
  const re = /<(\/?)(em|i|strong|br)\s*\/?>/gi;
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  const top = () => stack[stack.length - 1];
  const text = (t: string) => t && top().children.push(unescape(t.replace(/<[^>]*>/g, "")));
  while ((m = re.exec(markup))) {
    text(markup.slice(last, m.index));
    last = re.lastIndex;
    const tag = m[2].toLowerCase();
    if (tag === "br") top().children.push(createElement("br", { key: k++ }));
    else if (!m[1]) stack.push({ tag, children: [] });
    else if (stack.length > 1 && top().tag === tag) {
      const n = stack.pop()!;
      top().children.push(build(n, k++));
    }
  }
  text(markup.slice(last));
  while (stack.length > 1) {
    const n = stack.pop()!;
    top().children.push(build(n, k++));
  }
  return createElement(Fragment, null, ...root.children);
}

function build(n: { tag: string; children: ReactNode[] }, key: number): ReactNode {
  if (n.tag === "em") return createElement(Em, { key }, ...n.children);
  if (n.tag === "i") return createElement("i", { key }, ...n.children);
  return createElement("strong", { key, className: "font-semibold" }, ...n.children);
}
