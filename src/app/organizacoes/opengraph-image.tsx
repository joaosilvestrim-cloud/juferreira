import { ogCard, ogSize } from "@/lib/og";

export const alt = "Para Organizações — Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Para Organizações", title: "Sua organização já está construindo futuros.", em: "Quais?", photo: "palco" });
}
