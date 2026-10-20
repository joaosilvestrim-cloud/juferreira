import registry from "@/content/editable-registry.json";

export type RegistryItem = {
  key: string;
  page: string;
  block: string;
  section: string;
  order: number;
  kind: "text" | "image";
  text: string;
  file: string;
  line: number;
  /** Papel na página (Título, Texto, Botão ou link, Descrição da imagem…), gerado pelo codemod. */
  role?: string;
  /** Partes de uma mesma frase/título compartilham o grupo. */
  group?: string | null;
  /** Parte em destaque (itálico/vermelho) dentro da frase. */
  em?: boolean;
};

export const REGISTRY = registry as RegistryItem[];

export const PAGES = [
  { id: "home", name: "Home", path: "/" },
  { id: "ju", name: "Ju", path: "/ju" },
  { id: "futuros-humanos", name: "Futuros Humanos", path: "/futuros-humanos" },
  { id: "palestras-workshops", name: "Palestras", path: "/palestras" },
  { id: "organizacoes", name: "Para Organizações", path: "/organizacoes" },
  { id: "pessoas", name: "Para Pessoas", path: "/pessoas" },
  { id: "ideias", name: "Ideias", path: "/ideias" },
  { id: "contato", name: "Contato", path: "/contato" },
] as const;

const PREFIX = /^(Home|Ju|FH|Palestras|Org|Pessoas|Ideias|Contato)/;

/** "HomeTensao" → "Bloco 2 · Tensão" (nome legível do bloco). */
export function sectionLabel(section: string, order: number) {
  const name = section
    .replace(PREFIX, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/Porque|PorQue/, "Por quê")
    .replace(/Tensao/, "Tensão")
    .replace(/Mudanca/, "Mudança")
    .replace(/Conversao/, "Conversão")
    .replace(/Agencia/, "Agência")
    .replace(/Automatico/, "Automático")
    .replace(/Investigacao/, "Investigação")
    .replace(/Organizacoes/, "Organizações")
    .replace(/Tensoes/, "Tensões")
    .replace(/Trajetoria/, "Trajetória")
    .replace(/Ouca ?Veja/, "Ouça e veja")
    .replace(/Como ?Comeca/, "Como começa")
    .replace(/Situacoes/, "Situações")
    .replace(/Contratacao/, "Contratação")
    .replace(/Experiencias?/, (m) => m.replace("Experiencia", "Experiência"))
    .replace(/Conversa/, "Conversa")
    .trim();
  return order < 999 ? `Bloco ${order + 1} · ${name || "Abertura"}` : "Outros";
}
