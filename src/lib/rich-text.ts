import sanitizeHtml from "sanitize-html";

/**
 * Conteúdo rico (artigos e newsletter): HTML gerado pelo editor do painel, sempre higienizado
 * antes de salvar e de exibir. Textos antigos em formato simples (parágrafos com linha em branco,
 * "## " e "> ") continuam funcionando — são convertidos para HTML.
 */
const OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: ["p", "br", "h2", "h3", "h4", "strong", "b", "em", "i", "u", "s", "a", "ul", "ol", "li", "blockquote", "hr", "img", "figure", "figcaption", "mark", "code", "sub", "sup"],
  allowedAttributes: {
    a: ["href", "target", "rel"],
    img: ["src", "alt", "title", "width", "height"],
    p: ["style"],
    h2: ["style"],
    h3: ["style"],
    h4: ["style"],
  },
  allowedStyles: { "*": { "text-align": [/^(left|right|center|justify)$/] } },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedSchemesByTag: { img: ["http", "https"] },
  allowProtocolRelative: false,
  transformTags: {
    a: (tag, attribs) => {
      const external = /^https?:\/\//i.test(attribs.href ?? "");
      return { tagName: "a", attribs: { ...attribs, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } };
    },
    b: "strong",
    i: "em",
  },
  // imagens relativas do próprio site (/midia/…) são permitidas
  exclusiveFilter: (frame) => frame.tag === "img" && !/^(https?:\/\/|\/midia\/|\/images\/)/.test(frame.attribs.src ?? ""),
};

export function sanitizeRich(html: string) {
  // sanitize-html não aceita "/midia/..." sem esquema em allowedSchemesByTag → libera caminhos relativos
  return sanitizeHtml(html, { ...OPTIONS, allowedSchemesAppliedToAttributes: ["href"] });
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Texto simples antigo → HTML. */
export function plainToHtml(body: string) {
  return body
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b) =>
      b.startsWith("## ")
        ? `<h2>${esc(b.slice(3))}</h2>`
        : b.startsWith("> ")
          ? `<blockquote><p>${esc(b.replace(/^>\s?/gm, "")).replace(/\n/g, "<br>")}</p></blockquote>`
          : `<p>${esc(b).replace(/\n/g, "<br>")}</p>`,
    )
    .join("");
}

export const isHtml = (s: string) => /^\s*</.test(s);

/** HTML pronto para exibir (higienizado), aceitando os dois formatos. */
export function richHtml(body: string) {
  return sanitizeRich(isHtml(body) ? body : plainToHtml(body));
}

export function richToText(body: string) {
  return sanitizeHtml(richHtml(body), { allowedTags: [], allowedAttributes: {} }).replace(/\s+/g, " ").trim();
}
