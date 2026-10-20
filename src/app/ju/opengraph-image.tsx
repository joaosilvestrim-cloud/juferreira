import { ogCard, ogSize } from "@/lib/og";

export const alt = "Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Ju Ferreira", title: "Primeiro de tudo,", em: "eu sou a Ju.", photo: "retrato-biblioteca" });
}
