import { shown } from "@/lib/editable";
import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import { PalestrasAprofundamento, PalestrasContexto } from "@/components/sections/palestras-workshops/BlocksFormatos";
import { PalestrasExperiencia, PalestrasHero } from "@/components/sections/palestras-workshops/BlocksIntro";
import {
  PalestrasComoComeca,
  PalestrasContratacao,
  PalestrasOucaVeja,
} from "@/components/sections/palestras-workshops/BlocksLastro";

const DEFAULT_META: Metadata = {
  title: "Palestras",
  description:
    "Futuros Humanos, palestra com Ju Ferreira: uma conversa sobre as escolhas que fazemos quando tecnologia, trabalho e vida abrem novas possibilidades.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/palestras", DEFAULT_META);
}

/** Site 2.0 · Palestras P01–P07 (docs/v2/registro-palestras.md). P03 só aparece com provas reais cadastradas no painel. */
export default async function PalestrasPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      {shown("PalestrasHero") && <PalestrasHero />}
      {shown("PalestrasExperiencia") && <PalestrasExperiencia />}
      {shown("PalestrasOucaVeja") && <PalestrasOucaVeja />}
      {shown("PalestrasContexto") && <PalestrasContexto />}
      {shown("PalestrasAprofundamento") && <PalestrasAprofundamento />}
      {shown("PalestrasComoComeca") && <PalestrasComoComeca />}
      {shown("PalestrasContratacao") && <PalestrasContratacao />}
    </>
  );
}
