/**
 * Marcação das frases editáveis (títulos, parágrafos): só <em> (vermelho), <i> (itálico), <strong> (negrito) e <br>.
 * Usado no editor do painel (navegador) e ao salvar (servidor). Sem dependências.
 */
const ALLOWED = new Set(["em", "i", "strong"]);

const escText = (s: string) => s.replace(/&(?!(amp|lt|gt|quot|nbsp);)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Normaliza o HTML que o navegador produz (b, span, div, &nbsp;…) para a marcação aceita. */
export function cleanRich(html: string): string {
  let s = String(html ?? "").replace(/\r\n?/g, "\n");
  s = s
    .replace(/<\s*(div|p)[^>]*>\s*<\s*br\s*\/?>\s*<\s*\/\s*(div|p)\s*>/gi, "<br>") // linha vazia
    .replace(/<\s*\/\s*(div|p)\s*>\s*<\s*(div|p)[^>]*>/gi, "<br>") // parágrafos seguidos → quebra
    .replace(/<\/(div|p)>/gi, "")
    .replace(/<(div|p)(\s[^>]*)?>/gi, "<br>") // cada linha nova do editor vira quebra
    .replace(/<\s*br\s*\/?>/gi, "<br>")
    .replace(/<\s*(\/?)\s*b(\s[^>]*)?>/gi, "<$1strong>")
    .replace(/\n/g, "<br>");
  // percorre as tags: mantém só as permitidas (sem atributos) e escapa o resto do texto
  const out: string[] = [];
  const open: string[] = [];
  const re = /<(\/?)([a-z][a-z0-9]*)(?=[\s/>])[^>]*>/gi;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s))) {
    out.push(escText(decodeEntities(s.slice(last, m.index))));
    last = re.lastIndex;
    const tag = m[2].toLowerCase();
    if (tag === "br") out.push("<br>");
    else if (ALLOWED.has(tag)) {
      if (!m[1]) {
        open.push(tag);
        out.push(`<${tag}>`);
      } else if (open.includes(tag)) {
        // fecha até a tag correspondente (corrige aninhamento torto)
        while (open.length) {
          const t = open.pop()!;
          out.push(`</${t}>`);
          if (t === tag) break;
        }
      }
    }
  }
  out.push(escText(decodeEntities(s.slice(last))));
  while (open.length) out.push(`</${open.pop()}>`);
  return out
    .join("")
    .replace(/ /g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/<(em|i|strong)>\s*<\/\1>/g, "") // destaque vazio
    .replace(/<\/(em|i|strong)><\1>/g, "") // destaques colados viram um só
    .replace(/(<br>\s*){3,}/g, "<br><br>")
    .replace(/^(\s|<br>)+|(\s|<br>)+$/g, "")
    .trim();
}

function decodeEntities(s: string) {
  return s.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

/** Texto puro (para busca e comparação). */
export function richToPlain(markup: string): string {
  return decodeEntities(markup.replace(/<br>/g, " ").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}
