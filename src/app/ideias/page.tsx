import { shown } from "@/lib/editable";
import { getMediaFor, getPublishedArticles, getReadingRefs, loadOverrides, seoFor } from "@/lib/content";
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
  const [articles, refs, media] = await Promise.all([getPublishedArticles(), getReadingRefs(), getMediaFor("ideias")]);
  return (
    <>
      {shown("IdeiasHero") && <IdeiasHero hasArticles={articles.length + media.length > 0} />}
      {shown("IdeiasAcervo") && <IdeiasAcervo articles={articles} media={media} />}
      {shown("IdeiasTerca") && <IdeiasTerca />}
      {shown("IdeiasInvestigacao") && <IdeiasInvestigacao />}
      {shown("IdeiasNota") && <IdeiasNota refs={refs} />}
    </>
  );
}
