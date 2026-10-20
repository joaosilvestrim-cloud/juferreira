import { shown } from "@/lib/editable";
import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import { PessoasFechamento } from "@/components/sections/pessoas/PessoasFechamento";
import { PessoasHero } from "@/components/sections/pessoas/PessoasHero";
import { PessoasMargem } from "@/components/sections/pessoas/PessoasMargem";
import { PessoasPergunta } from "@/components/sections/pessoas/PessoasPergunta";
import { PessoasPortas } from "@/components/sections/pessoas/PessoasPortas";

const DEFAULT_META: Metadata = {
  title: "Para Pessoas",
  description:
    "E se essa conversa for sobre a sua própria vida? Uma pergunta para a sua terça-feira e caminhos para continuar pensando, acompanhar a conversa ou colocar mudança em prática.",
};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/pessoas", DEFAULT_META);
}

/** Pessoas v2: B01 abertura · B02 margem · B03 experiência breve · B04 portas · B05 fechamento humano. */
export default async function PessoasPage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      {shown("PessoasHero") && <PessoasHero />}
      {shown("PessoasMargem") && <PessoasMargem />}
      {shown("PessoasPergunta") && <PessoasPergunta />}
      {shown("PessoasPortas") && <PessoasPortas />}
      {shown("PessoasFechamento") && <PessoasFechamento />}
    </>
  );
}
