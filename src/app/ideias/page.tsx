import { getPublishedArticles, getReadingRefs, loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import { IdeiasAcervo, IdeiasHero } from "@/components/sections/ideias/IdeiasBlocksA";
import { IdeiasInvestigacao, IdeiasNota, IdeiasTerca } from "@/components/sections/ideias/IdeiasBlocksB";

const DEFAULT_META: Metadata = {
  title: "Ideias",
  description:
    "Algumas ideias merecem mais tempo. Textos e conversas sobre futuros, tecnologia, escolhas e aquilo que estamos construindo enquanto a vida acontece.",
  alternates: { canonical: "/ideias" },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/ideias", DEFAULT_META);
}

/** Ideias v2: I01 abertura · I02 acervo (só com publicação real) · I03 newsletter · I04 investigação · I05 nota editorial. */
export default async function IdeiasPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  // leituras em cache ("use cache" + tags articles/refs), revalidadas pelo painel
  const [articles, refs] = await Promise.all([getPublishedArticles(), getReadingRefs()]);
  return (
    <>
      <IdeiasHero hasArticles={articles.length > 0} />
      <IdeiasAcervo articles={articles} />
      <IdeiasTerca />
      <IdeiasInvestigacao />
      <IdeiasNota refs={refs} />
    </>
  );
}
