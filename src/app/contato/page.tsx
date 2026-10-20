import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import {
  ContatoAtalhos,
  ContatoCanais,
  ContatoContexto,
  ContatoFechamento,
  ContatoHero,
  ContatoPortas,
} from "@/components/sections/contato/ContatoBlocks";

const DEFAULT_META: Metadata = {
  title: "Contato",
  description:
    "Toda conversa começa com alguma coisa. Pode ser uma ideia, um desafio, uma pergunta ou um “ainda não sei”. Você não precisa chegar com a resposta.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/contato", DEFAULT_META);
}

export default async function ContatoPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <ContatoHero />
      <ContatoPortas />
      <ContatoContexto />
      <ContatoAtalhos />
      <ContatoCanais />
      <ContatoFechamento />
    </>
  );
}
