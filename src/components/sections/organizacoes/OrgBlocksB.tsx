import { getExternal } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, Em } from "@/components/ui/Typography";
import { CONTACT_ROUTES, LINKS } from "@/lib/site";

import { tx, img } from "@/lib/editable";

/** Mantido para links antigos que apontavam para o formulário da v1 (/organizacoes#conversa). */
export const CONTACT_ANCHOR = "#conversa";

/* ───────────────────────── O04 — TRABALHO EM COLETIVO ───────────────────────── */
export async function OrgColetivo() {
  // "Conheça a WTF" só aparece com endereço oficial cadastrado no painel; sem ele, o convite é para o contato da área
  const { wtf } = await getExternal();
  const hasWtf = /^https?:\/\//i.test(wtf.trim());
  return (
    <Section padded={false} label={tx("organizacoes/25c1aec612", "Trabalho em coletivo")} id="coletivo">
      <div className="grid lg:grid-cols-[50%_50%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:pr-10">
          <Display size="lg">
            {tx("organizacoes/311fff8bb7", "Algumas perguntas pedem")} <Em>{tx("organizacoes/0d1206a26d", "mais gente à mesa.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
              {tx("organizacoes/b670884f5c", "Integro a")} <strong className="font-semibold text-ink-900">{tx("organizacoes/281b25348e", "What The Future?!")}</strong>{tx("organizacoes/d81acaf6bd", ", um coletivo de futuristas. Quando o desafio pede outras competências e perspectivas, essa colaboração pode ampliar o trabalho.")}</p>
            <p>{tx("organizacoes/f374614fe1", "Projetos, abordagens e parceiros são definidos conforme a necessidade.")}</p>
          </Body>
          {hasWtf ? (
            <ButtonLink href={LINKS.wtf} variant="secondary" className="mt-10" target="_blank" rel="noopener noreferrer">
              {tx("organizacoes/d04cac496d", "Conheça a What The Future?!")}</ButtonLink>
          ) : (
            <ButtonLink href={CONTACT_ROUTES.futuros} variant="secondary" className="mt-10">
              {tx("organizacoes/feb4a8c336", "Converse sobre futuros aplicados")}</ButtonLink>
          )}
        </Container>
        <div className="relative min-h-[320px]">
          <Photo
            src={img("organizacoes/2a5cf8af23", "/images/ensaio/home-04c-quadro-post-its.webp")}
            alt={tx("organizacoes/650fdaf826", "Cena ilustrativa de Juliana junto a um quadro com diagrama e post-its.")}
            sizes="(min-width:1024px) 50vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── O05 — EXPERIÊNCIA ───────────────────────── */
export function OrgExperiencia() {
  return (
    <Section tone="cream" padded={false} label={tx("organizacoes/bee9b6fb26", "Experiência")} id="experiencia">
      <div className="grid lg:grid-cols-[1fr_0.8fr]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:pr-12">
          <Display size="lg">
            {tx("organizacoes/66c409d856", "As ideias precisam sobreviver")} <Em>{tx("organizacoes/d596a5e63f", "ao trabalho real.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>
              {tx("organizacoes/b8c6cbe984", "Minha trajetória em tecnologia, vendas, liderança e construção de empresas me mantém próxima de orçamento, cliente, equipe e consequência. Esse encontro ajuda a testar as perguntas que levo para as organizações.")}</p>
          </Body>
          <div className="mt-10 max-w-[560px] border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              {tx("organizacoes/aa3e3c2ead", "Possibilidade sem realidade vira fantasia.")}
              <br />
              {tx("organizacoes/e6f72a3ba7", "Realidade sem possibilidade vira resignação.")}
            </p>
            <Stroke shape="underline" className="mt-2 h-3 w-48" width={2.5} />
          </div>
          <ButtonLink href="/ju" variant="link" className="mt-10">
            {tx("organizacoes/fcb5b6255b", "Conheça minha trajetória")}</ButtonLink>
        </Container>
        <div className="relative min-h-[320px]">
          <Photo
            src={img("organizacoes/951275f686", "/images/ensaio/ju-trabalho-tecnologia.webp")}
            alt={tx("organizacoes/9d1b015056", "Juliana concentrada no trabalho em um notebook.")}
            sizes="(min-width:1024px) 44vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── O06 — CONTATO ───────────────────────── */
/* Um único formulário: o de Contato, já com a rota "organizacoes" selecionada. */
export async function OrgContato() {
  const EXTERNAL = await getExternal();
  return (
    <Section tone="wine" padded={false} label={tx("organizacoes/cf4bfb5c50", "Contato")} id={CONTACT_ANCHOR.slice(1)}>
      <Stroke shape="orbit" className="absolute -right-10 top-10 hidden h-[80%] w-[44%] opacity-60 lg:block" width={2.5} color="var(--jf-red-400)" />
      <Container className="relative py-[var(--jf-section-y)]">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <Display size="lg">
              {tx("organizacoes/df77db115f", "O que sua organização")} <Em>{tx("organizacoes/dac6621c98", "está tentando construir?")}</Em>
            </Display>
            <Body className="mt-8 max-w-[600px] text-cream-50/85">
              <p>{tx("organizacoes/c3f92f050f", "Conte o que está acontecendo, quem está envolvido e por que essa conversa importa agora.")}</p>
            </Body>
            <ButtonLink href={CONTACT_ROUTES.organizacoes} size="lg" className="mt-10">
              {tx("organizacoes/9848b72620", "Conversar sobre o desafio")}</ButtonLink>
            {(EXTERNAL.email || EXTERNAL.whatsapp) && (
              <div className="mt-12 border-t border-cream-50/20 pt-8 text-[15px] leading-relaxed text-cream-50/80">
                {EXTERNAL.email && (
                  <>
                    <p className="font-semibold text-cream-50">{tx("organizacoes/346eebaa17", "Prefere começar por e-mail?")}</p>
                    <a href={`mailto:${EXTERNAL.email}`} className="mt-2 inline-block font-medium text-red-bright underline underline-offset-4">
                      {EXTERNAL.email}
                    </a>
                  </>
                )}
                {EXTERNAL.whatsapp && (
                  <p className="mt-2">
                    <a href={EXTERNAL.whatsapp} className="font-medium text-red-bright underline underline-offset-4">
                      {tx("organizacoes/361fcbefc5", "WhatsApp")}</a>
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[var(--jf-radius-sm)] lg:justify-self-end">
            <Photo
              src={img("organizacoes/2a46c363b7", "/images/ensaio/contato-sorriso-horizontal.webp")}
              alt={tx("organizacoes/30d9e42510", "Juliana sorrindo para a câmera à mesa, com notebook aberto.")}
              sizes="(min-width:1024px) 40vw, 100vw"
              className="absolute inset-0"
              imgClassName="object-[50%_40%]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
