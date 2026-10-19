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

export const metadata: Metadata = {
  title: "Futuros Humanos",
  description:
    "Uma investigação sobre futuros, tecnologia, escolhas e as capacidades humanas necessárias para participar conscientemente da construção daquilo que ainda pode existir.",
};

export default function FuturosHumanosPage() {
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
