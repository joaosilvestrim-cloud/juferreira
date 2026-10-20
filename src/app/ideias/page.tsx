import { loadOverrides, seoFor } from "@/lib/content";
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

const DEFAULT_META: Metadata = {
  title: "Ideias — Algumas ideias merecem mais tempo",
  description:
    "Nem toda pergunta cabe num post. Ensaios, investigações, referências e pensamento em desenvolvimento sobre futuros, tecnologia, humanidade, escolhas, liderança e transformação.",
  alternates: { canonical: "/ideias" },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/ideias", DEFAULT_META);
}

export default async function IdeiasPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
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
