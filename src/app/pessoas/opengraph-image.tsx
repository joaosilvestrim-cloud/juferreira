import { ogCard, ogSize } from "@/lib/og";

export const alt = "Para Pessoas — Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Para Pessoas", title: "E se essa conversa for sobre a", em: "sua própria vida?", photo: "retrato-biblioteca" });
}
