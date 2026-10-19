import { ogCard, ogSize } from "@/lib/og";

export const alt = "Palestras & Workshops — Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Palestras & Workshops", title: "Leve essa conversa para", em: "sua organização.", photo: "palco" });
}
