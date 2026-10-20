import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import {
  FHAgencia,
  FHAutomatico,
  FHFerramentas,
  FHHero,
  FHTese,
} from "@/components/sections/futuros-humanos/FuturosHumanosBlocksA";
import {
  FHAutoria,
  FHEncerramento,
  FHEspiral,
  FHProvoca,
} from "@/components/sections/futuros-humanos/FuturosHumanosBlocksB";

const DEFAULT_META: Metadata = {
  title: "Futuros Humanos",
  description:
    "Uma investigação sobre futuros, tecnologia, escolhas e as capacidades humanas necessárias para participar conscientemente da construção daquilo que ainda pode existir.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/futuros-humanos", DEFAULT_META);
}

export default async function FuturosHumanosPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <FHHero />
      <FHFerramentas />
      <FHTese />
      <FHAgencia />
      <FHAutomatico />
      <FHEspiral />
      <FHAutoria />
      <FHProvoca />
      <FHEncerramento />
    </>
  );
}
