import { loadOverrides, seoFor } from "@/lib/content";
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

const DEFAULT_META: Metadata = {
  title: "Para Organizações",
  description:
    "Sua organização já está construindo futuros. A questão é: quais? Trabalho com organizações que querem ampliar sua capacidade de enxergar possibilidades, discutir direção, desenvolver capacidades e transformar reflexão em movimento.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/organizacoes", DEFAULT_META);
}

export default async function OrganizacoesPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
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
