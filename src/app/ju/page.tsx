import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import {
  JuConstruir,
  JuEncerramento,
  JuFuturos,
  JuHero,
  JuHoje,
  JuMaternidade,
  JuTecnologia,
  JuTensoes,
  JuTrajetoria,
} from "@/components/sections/ju/JuBlocks";

const DEFAULT_META: Metadata = {
  title: "Primeiro de tudo, eu sou a Ju",
  description:
    "Engenheira por formação. Empreendedora por insistência. Futurista por inquietação. Mãe por transformação. Hoje, grande parte do meu trabalho nasce do encontro entre futuros, tecnologia e humanidade.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/ju", DEFAULT_META);
}

export default async function JuPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <JuHero />
      <JuTrajetoria />
      <JuTecnologia />
      <JuConstruir />
      <JuMaternidade />
      <JuFuturos />
      <JuHoje />
      <JuTensoes />
      <JuEncerramento />
    </>
  );
}
