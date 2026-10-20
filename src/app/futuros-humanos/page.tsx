import { shown } from "@/lib/editable";
import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import {
  FHAutomatico,
  FHFerramentas,
  FHHero,
  FHTese,
} from "@/components/sections/futuros-humanos/FuturosHumanosBlocksA";
import {
  FHAgencia,
  FHEncerramento,
  FHEscalas,
  FHEspiral,
} from "@/components/sections/futuros-humanos/FuturosHumanosBlocksB";

const DEFAULT_META: Metadata = {
  title: "Futuros Humanos",
  description:
    "O futuro mais provável não é o único futuro possível. Perguntas sobre o que ainda pode existir, o que vale a pena construir e do que precisamos nos tornar capazes para participar dessa construção.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/futuros-humanos", DEFAULT_META);
}

/** Site 2.0 · F01–F08 (docs/v2/registro-futuros-humanos.md). */
export default async function FuturosHumanosPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      {shown("FHHero") && <FHHero />}
      {shown("FHAutomatico") && <FHAutomatico />}
      {shown("FHTese") && <FHTese />}
      {shown("FHFerramentas") && <FHFerramentas />}
      {shown("FHAgencia") && <FHAgencia />}
      {shown("FHEspiral") && <FHEspiral />}
      {shown("FHEscalas") && <FHEscalas />}
      {shown("FHEncerramento") && <FHEncerramento />}
    </>
  );
}
