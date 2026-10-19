import type { Metadata } from "next";
import {
  ContatoAtalhos,
  ContatoCanais,
  ContatoContexto,
  ContatoFechamento,
  ContatoHero,
  ContatoPortas,
} from "@/components/sections/contato/ContatoBlocks";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Toda conversa começa com alguma coisa. Pode ser uma ideia, um desafio, uma pergunta ou um “ainda não sei”. Você não precisa chegar com a resposta.",
};

export default function ContatoPage() {
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
