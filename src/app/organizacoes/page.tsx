import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import { OrgFormatos, OrgHero, OrgSituacoes } from "@/components/sections/organizacoes/OrgBlocksA";
import { OrgColetivo, OrgContato, OrgExperiencia } from "@/components/sections/organizacoes/OrgBlocksB";

const DEFAULT_META: Metadata = {
  title: "Para Organizações",
  description:
    "Sua organização já está construindo futuros. A questão é: quais? Trabalho com lideranças e equipes para examinar escolhas, ampliar possibilidades e identificar o que pode começar a mudar no presente.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/organizacoes", DEFAULT_META);
}

/** Site 2.0 · Organizações O01–O06 (docs/v2/registro-organizacoes.md). O contato usa o formulário único de /contato. */
export default async function OrganizacoesPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <OrgHero />
      <OrgSituacoes />
      <OrgFormatos />
      <OrgColetivo />
      <OrgExperiencia />
      <OrgContato />
    </>
  );
}
