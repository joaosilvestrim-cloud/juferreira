import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import { PalestrasConversao, PalestrasLastro, PalestrasProcesso } from "@/components/sections/palestras-workshops/BlocksLastro";
import { PalestrasExperiencias, PalestrasWorkshops } from "@/components/sections/palestras-workshops/BlocksFormatos";
import {
  PalestrasFuturosHumanos,
  PalestrasHero,
  PalestrasOutrasConversas,
  PalestrasPorQue,
} from "@/components/sections/palestras-workshops/BlocksIntro";

const DEFAULT_META: Metadata = {
  title: "Palestras & Workshops",
  description:
    "Palestras, workshops e experiências para organizações que querem pensar futuros, tecnologia, liderança e transformação humana de forma conectada à realidade.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/palestras", DEFAULT_META);
}

export default async function PalestrasPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <PalestrasHero />
      <PalestrasPorQue />
      <PalestrasFuturosHumanos />
      <PalestrasOutrasConversas />
      <PalestrasWorkshops />
      <PalestrasExperiencias />
      <PalestrasLastro />
      <PalestrasProcesso />
      <PalestrasConversao />
    </>
  );
}
