import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em, Lead } from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh]">
      <Stroke shape="orbit" className="absolute -right-20 top-0 h-full w-[45%] opacity-70" width={2.5} />
      <Container>
        <p className="jf-eyebrow text-red-brand">404</p>
        <Display as="h1" size="lg" className="mt-6 max-w-[760px]">
          Esta página não existe. <Em>Ainda.</Em>
        </Display>
        <Lead className="mt-8 max-w-[560px] text-ink-700">Aquilo que existe não esgota aquilo que pode existir.</Lead>
        <ButtonRow className="mt-12">
          <ButtonLink href="/">Voltar ao início</ButtonLink>
          <ButtonLink href="/contato" variant="secondary">
            Começar a conversa
          </ButtonLink>
        </ButtonRow>
      </Container>
    </Section>
  );
}
