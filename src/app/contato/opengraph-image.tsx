import { ogCard, ogSize } from "@/lib/og";

export const alt = "Contato — Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Contato", title: "Toda conversa começa com", em: "alguma coisa.", photo: "contato" });
}
