/**
 * Textos e imagens editáveis pelo /admin.
 *
 * As seções das páginas chamam tx("chave", "texto original") e img("chave", "/images/…").
 * Cada página carrega os ajustes salvos no painel (loadOverrides) antes de renderizar;
 * sem ajuste, vale o texto/imagem original do código. As chaves vêm de scripts/codemod-editable.mjs.
 */
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
