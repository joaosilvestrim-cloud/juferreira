import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import {
  JuEncerramento,
  JuEscolher,
  JuFuturos,
  JuHero,
  JuHoje,
  JuMaternidade,
  JuTecnologia,
} from "@/components/sections/ju/JuBlocks";

const DEFAULT_META: Metadata = {
  title: "Primeiro de tudo, eu sou a Ju",
  description:
    "Engenheira, empreendedora, mãe e futurista. Uma trajetória entre tecnologia, vendas, liderança e construção de empresas que hoje encontra os Estudos de Futuros e as perguntas sobre transformação humana.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/ju", DEFAULT_META);
}

/** Site 2.0 · J01–J07 (docs/v2/registro-ju.md). */
export default async function JuPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <JuHero />
      <JuTecnologia />
      <JuEscolher />
      <JuMaternidade />
      <JuFuturos />
      <JuHoje />
      <JuEncerramento />
    </>
  );
}
