import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import { PessoasAgencia } from "@/components/sections/pessoas/PessoasAgencia";
import { PessoasAutomatico } from "@/components/sections/pessoas/PessoasAutomatico";
import { PessoasComecar } from "@/components/sections/pessoas/PessoasComecar";
import { PessoasEpic } from "@/components/sections/pessoas/PessoasEpic";
import { PessoasEspiral } from "@/components/sections/pessoas/PessoasEspiral";
import { PessoasFechamento } from "@/components/sections/pessoas/PessoasFechamento";
import { PessoasHero } from "@/components/sections/pessoas/PessoasHero";
import { PessoasJu } from "@/components/sections/pessoas/PessoasJu";
import { PessoasPortas } from "@/components/sections/pessoas/PessoasPortas";

const DEFAULT_META: Metadata = {
  title: "Para Pessoas",
  description:
    "E se essa conversa for sobre a sua própria vida? Entre controlar tudo e simplesmente aceitar existe um espaço enorme. É nesse espaço que a gente participa.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/pessoas", DEFAULT_META);
}

export default async function PessoasPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <PessoasHero />
      <PessoasAgencia />
      <PessoasAutomatico />
      <PessoasEspiral />
      <PessoasComecar />
      <PessoasEpic />
      <PessoasPortas />
      <PessoasJu />
      <PessoasFechamento />
    </>
  );
}
