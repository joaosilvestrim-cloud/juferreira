import type { Metadata } from "next";
import { PalestrasConversao, PalestrasLastro, PalestrasProcesso } from "@/components/sections/palestras-workshops/BlocksLastro";
import { PalestrasExperiencias, PalestrasWorkshops } from "@/components/sections/palestras-workshops/BlocksFormatos";
import {
  PalestrasFuturosHumanos,
  PalestrasHero,
  PalestrasOutrasConversas,
  PalestrasPorQue,
} from "@/components/sections/palestras-workshops/BlocksIntro";

export const metadata: Metadata = {
  title: "Palestras & Workshops",
  description:
    "Palestras, workshops e experiências para organizações que querem pensar futuros, tecnologia, liderança e transformação humana de forma conectada à realidade.",
};

export default function PalestrasPage() {
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
