import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Typography";
import { Underline } from "./parts";

import { tx, img, rx } from "@/lib/editable";

/** Âncoras desta página (B03 é o destino do CTA de abertura). */
export const PESSOAS_ANCHORS = {
  pergunta: "#uma-pergunta",
  portas: "#proximo-passo",
} as const;

/* ───────────────────────── B01 — ABERTURA ───────────────────────── */
export function PessoasHero() {
  return (
    <Section padded={false} className="lg:min-h-[calc(100svh-var(--jf-header-h))]" label={tx("pessoas/833a78e1cd", "Abertura")}>
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Photo
          src={img("pessoas/e747a44fdb", "/images/ensaio/home-02-biblioteca-vertical.webp")}
          alt={tx("pessoas/d393b0a5f8", "Retrato de Juliana em uma poltrona na biblioteca.")}
          priority
          sizes="46vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
      </div>

      <Container className="flex flex-col justify-center py-14 lg:min-h-[calc(100svh-var(--jf-header-h))] lg:py-20">
        <div className="jf-reveal max-w-[720px] lg:max-w-[52%]">
          <Display as="h1" size="lg">
{rx("pessoas/rca66ba0f2", "E se essa conversa for sobre a <em>sua própria vida?</em>")}
</Display>
          <Underline />

          <div className="jf-body mt-8 max-w-[600px] text-ink-700">
            <p>
{rx("pessoas/r96266e813", "Há coisas que você continua sustentando porque importam. Outras permanecem porque você dá conta, porque sempre foi assim ou porque ainda não encontrou condições para mudar.")}
</p>
          </div>

          <p className="mt-6 max-w-[600px] font-serif text-[clamp(24px,2.2vw,32px)] leading-tight text-red-brand">
{rx("pessoas/r3ea382ffd", "Talvez o primeiro passo seja perceber a diferença.")}
</p>

          <ButtonRow className="mt-10">
            <ButtonLink href={PESSOAS_ANCHORS.pergunta} size="lg">
{rx("pessoas/r3b0525c8e", "Comece por uma pergunta")}
</ButtonLink>
          </ButtonRow>
        </div>
      </Container>

      {/* mobile: foto abaixo do texto */}
      <div className="relative h-[110vw] max-h-[560px] lg:hidden">
        <Photo
          src={img("pessoas/965edb9857", "/images/ensaio/home-02-biblioteca-horizontal.webp")}
          alt={tx("pessoas/ace1405bdd", "Juliana sentada em uma poltrona na biblioteca.")}
          sizes="100vw"
          className="absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
      </div>
    </Section>
  );
}

