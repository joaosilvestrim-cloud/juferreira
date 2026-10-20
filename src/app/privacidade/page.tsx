import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { getExternal } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Body, Display, Eyebrow } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Quais dados o site Ju Ferreira coleta pelos formulários, para que servem, onde ficam e como pedir alteração ou exclusão.",
  robots: { index: false },
};

/*
 * Site 2.0 · Privacidade (direção editorial §18).
 * Só afirmações verificáveis no código (api/contato, api/newsletter, newsletter/sair, lib/notify, lib/db, layout).
 * Responsável legal, encarregado (DPO), prazos de guarda e revisão jurídica estão pendentes:
 * docs/v2/registro-privacidade.md. Não publicar como política definitiva sem essa validação.
 */

function Block({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id ? `${id}-titulo` : undefined} id={id} className="mt-14 scroll-mt-[var(--jf-header-h)]">
      <h2 id={id ? `${id}-titulo` : undefined} className="jf-title">
        {title}
      </h2>
      <Body className="mt-4 text-ink-700 [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">{children}</Body>
    </section>
  );
}

const link = "text-red-brand underline underline-offset-2 hover:text-red-deep";

export default async function PrivacidadePage() {
  const { email } = await getExternal();
  const pedido = email ? (
    <>
      escreva para{" "}
      <a href={`mailto:${email}`} className={link}>
        {email}
      </a>{" "}
      ou use o{" "}
      <Link href="/contato" className={link}>
        formulário de contato
      </Link>
    </>
  ) : (
    <>
      use o{" "}
      <Link href="/contato" className={link}>
        formulário de contato
      </Link>
    </>
  );

  return (
    <Section>
      <Container className="max-w-[860px]">
        <Eyebrow>Privacidade</Eyebrow>
        <Display as="h1" size="md" className="mt-6">
          Como tratamos seus dados
        </Display>
        <Body className="mt-10 text-ink-700">
          <p>
            Esta página descreve o que o site faz hoje com as informações enviadas pelos formulários. O texto ainda passa
            por revisão jurídica e pode ser complementado.
          </p>
        </Body>

        <Block id="coleta" title="O que coletamos">
          <p>
            <strong className="font-medium text-ink-900">Formulários de contato</strong> (página Contato e página Para
            Organizações):
          </p>
          <ul>
            <li>nome e e-mail;</li>
            <li>organização e telefone, quando você informa;</li>
            <li>sua mensagem, o assunto escolhido e as respostas dos campos daquele assunto;</li>
            <li>o endereço da página de onde a mensagem foi enviada e a identificação do navegador;</li>
            <li>
              um código gerado a partir do seu endereço IP (o IP em si não é guardado), usado para limitar envios
              repetidos em sequência.
            </li>
          </ul>
          <p>
            <strong className="font-medium text-ink-900">Newsletter Uma Terça-feira Qualquer</strong>: e-mail, o texto do
            consentimento aceito, a data da inscrição, a página onde você se inscreveu e o mesmo código gerado a partir do
            IP.
          </p>
        </Block>

        <Block id="finalidade" title="Para que usamos">
          <ul>
            <li>responder à sua mensagem (a equipe recebe por e-mail um aviso com o conteúdo enviado);</li>
            <li>enviar a newsletter para quem se inscreveu;</li>
            <li>evitar envios automáticos e abuso dos formulários.</li>
          </ul>
          <p>Não usamos esses dados para publicidade.</p>
        </Block>

        <Block id="servicos" title="Onde ficam e quais serviços usamos">
          <ul>
            <li>
              <strong className="font-medium text-ink-900">Supabase</strong>: banco de dados onde as mensagens e as
              inscrições ficam guardadas, em servidor localizado em São Paulo.
            </li>
            <li>
              <strong className="font-medium text-ink-900">Resend</strong>: envio dos e-mails do site (aviso de nova
              mensagem para a equipe, confirmação para quem escreveu, quando ativada, e edições da newsletter).
            </li>
            <li>
              <strong className="font-medium text-ink-900">Vercel</strong>: hospedagem do site e medição de visitas às
              páginas (Vercel Analytics).
            </li>
          </ul>
          <p>
            As mensagens recebidas são consultadas pela equipe em um painel administrativo de acesso restrito, protegido
            por senha.
          </p>
        </Block>

        <Block id="cookies" title="Cookies">
          <p>
            O site não usa cookies de publicidade nem pixels de redes sociais. O único cookie criado pelo próprio site é o
            de sessão do painel administrativo, usado apenas por quem administra o conteúdo.
          </p>
        </Block>

        <Block id="pedidos" title="Sair da newsletter, corrigir ou apagar dados">
          <p>
            Toda edição da newsletter traz um link para sair da lista em um clique. Ao sair, seu e-mail fica marcado como
            descadastrado e deixa de receber envios.
          </p>
          <p>Para consultar, corrigir ou apagar os dados que você enviou, {pedido}.</p>
        </Block>

        <p className="mt-14 text-[14px] text-ink-500">Última atualização: 20 de outubro de 2026.</p>

        <ButtonLink href="/contato" variant="secondary" className="mt-8">
          Ir para o contato
        </ButtonLink>
      </Container>
    </Section>
  );
}
