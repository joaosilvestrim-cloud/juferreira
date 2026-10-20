/** Converte texto simples antigo (parágrafos, "## ", "> ") para HTML ao abrir no editor. */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function plainToHtmlClient(body: string) {
  if (!body || /^\s*</.test(body)) return body;
  return body
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b) =>
      b.startsWith("## ")
        ? `<h2>${esc(b.slice(3))}</h2>`
        : b.startsWith("> ")
          ? `<blockquote><p>${esc(b.replace(/^>\s?/gm, ""))}</p></blockquote>`
          : `<p>${esc(b).replace(/\n/g, "<br>")}</p>`,
    )
    .join("");
}
