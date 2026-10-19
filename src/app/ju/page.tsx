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

export const metadata: Metadata = {
  title: "Primeiro de tudo, eu sou a Ju",
  description:
    "Engenheira por formação. Empreendedora por insistência. Futurista por inquietação. Mãe por transformação. Hoje, grande parte do meu trabalho nasce do encontro entre futuros, tecnologia e humanidade.",
};

export default function JuPage() {
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
