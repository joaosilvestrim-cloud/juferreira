import type { Metadata } from "next";
import {
  OrgFormatos,
  OrgHero,
  OrgMudanca,
  OrgPerguntas,
  OrgTerritorios,
} from "@/components/sections/organizacoes/OrgBlocksA";
import {
  OrgDepois,
  OrgFechamento,
  OrgFuturosAplicados,
  OrgMundoReal,
} from "@/components/sections/organizacoes/OrgBlocksB";

export const metadata: Metadata = {
  title: "Para Organizações",
  description:
    "Sua organização já está construindo futuros. A questão é: quais? Trabalho com organizações que querem ampliar sua capacidade de enxergar possibilidades, discutir direção, desenvolver capacidades e transformar reflexão em movimento.",
};

export default function OrganizacoesPage() {
  return (
    <>
      <OrgHero />
      <OrgMudanca />
      <OrgPerguntas />
      <OrgTerritorios />
      <OrgFormatos />
      <OrgFuturosAplicados />
      <OrgMundoReal />
      <OrgDepois />
      <OrgFechamento />
    </>
  );
}
