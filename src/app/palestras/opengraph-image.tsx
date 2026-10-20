import { ogCard, ogSize } from "@/lib/og";

export const alt = "Palestras | Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Palestras", title: "Estamos ficando mais capazes.", em: "Para construir o quê?", photo: "palco" });
}
