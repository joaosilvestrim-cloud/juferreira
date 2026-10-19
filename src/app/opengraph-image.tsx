import { ogCard, ogSize } from "@/lib/og";

export const alt = "Futuros, tecnologia e humanidade — Ju Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Futuros, tecnologia e humanidade", title: "E se pudesse ser", em: "diferente?", photo: "rua" });
}
