import { ogCard, ogSize } from "@/lib/og";

export const alt = "Futuros Humanos — Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Futuros Humanos", title: "Aquilo que existe não esgota aquilo que", em: "pode existir.", photo: "rua" });
}
