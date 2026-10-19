import type { Metadata } from "next";
import {
  IdeiasDestaque,
  IdeiasHero,
  IdeiasInvestigacao,
  IdeiasPergunta,
  IdeiasTerritorios,
} from "@/components/sections/ideias/IdeiasBlocksA";
import {
  IdeiasConversa,
  IdeiasMundoReal,
  IdeiasRepertorio,
  IdeiasTerca,
} from "@/components/sections/ideias/IdeiasBlocksB";

export const metadata: Metadata = {
  title: "Ideias — Algumas ideias merecem mais tempo",
  description:
    "Nem toda pergunta cabe num post. Ensaios, investigações, referências e pensamento em desenvolvimento sobre futuros, tecnologia, humanidade, escolhas, liderança e transformação.",
  alternates: { canonical: "/ideias" },
};

export default function IdeiasPage() {
  return (
    <>
      <IdeiasHero />
      <IdeiasPergunta />
      <IdeiasDestaque />
      <IdeiasTerritorios />
      <IdeiasInvestigacao />
      <IdeiasTerca />
      <IdeiasRepertorio />
      <IdeiasMundoReal />
      <IdeiasConversa />
    </>
  );
}
