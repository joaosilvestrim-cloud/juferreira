import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Body, Display, Eyebrow } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como tratamos os dados enviados pelos formulários do site Ju Ferreira.",
  robots: { index: false },
};

// PROVISÓRIO — o texto jurídico definitivo (LGPD) está pendente (PENDING_ASSETS P2).
export default function PrivacidadePage() {
  return (
    <Section>
      <Container className="max-w-[860px]">
        <Eyebrow>Privacidade</Eyebrow>
        <Display as="h1" size="md" className="mt-6">
          Política de Privacidade
        </Display>
        <Body className="mt-10 text-ink-700" >
          <p>
            Esta página está em elaboração. A política completa, em conformidade com a Lei Geral de Proteção de Dados
            (LGPD), será publicada antes do lançamento do site.
          </p>
          <p>
            Os dados enviados pelos formulários são usados apenas para responder à conversa iniciada por você e não são
            compartilhados com terceiros para fins comerciais.
          </p>
        </Body>
        <h2 id="cookies" className="jf-title mt-14">
          Cookies
        </h2>
        <Body className="mt-4 text-ink-700">
          <p>As regras de uso de cookies e ferramentas de medição serão descritas aqui assim que forem definidas.</p>
        </Body>
        <ButtonLink href="/contato" variant="secondary" className="mt-12">
          Começar a conversa
        </ButtonLink>
      </Container>
    </Section>
  );
}
