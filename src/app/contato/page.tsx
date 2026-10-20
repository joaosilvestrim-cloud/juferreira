import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import { ContatoCanais, ContatoConversa } from "@/components/sections/contato/ContatoBlocks";

const DEFAULT_META: Metadata = {
  title: "Contato",
  description:
    "Conte o que você está tentando construir, resolver ou compreender. Se ainda não souber o formato, comece pelo contexto.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/contato", DEFAULT_META);
}

export default async function ContatoPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <ContatoConversa />
      <ContatoCanais />
    </>
  );
}
