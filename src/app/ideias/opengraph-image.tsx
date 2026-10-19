import { ogCard, ogSize } from "@/lib/og";

export const alt = "Ideias — Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Ideias", title: "Algumas ideias merecem", em: "mais tempo.", photo: "retrato-biblioteca" });
}
