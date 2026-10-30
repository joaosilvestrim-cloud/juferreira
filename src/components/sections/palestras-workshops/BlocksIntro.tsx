import { getMediaFor } from "@/lib/content";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, Eyebrow, Lead } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { OUCA_ANCHOR } from "./BlocksLastro";

import { tx, img, rx, rich } from "@/lib/editable";

/* ───────────────────────── P01 — ABERTURA ───────────────────────── */
export async function PalestrasHero() {
  // o convite para ouvir a Ju só aparece quando existe vídeo real cadastrado no painel (/admin → Provas)
  const hasVideo = (await getMediaFor("palestras")).length > 0;
  return (
    <Section padded={false} label={tx("palestras-workshops/9abfbb43fe", "Abertura")}>
      <div className="grid lg:grid-cols-[58%_42%]">
        <Container className="py-16 lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:py-24 lg:pr-12">
          <div className="jf-reveal">
            <Eyebrow>
{rx("palestras-workshops/r59e24b5c8", "Futuros Humanos | Palestra com Ju Ferreira")}
</Eyebrow>
            <Display as="h1" size="xl" className="mt-6">
{rx("palestras-workshops/re327b5c5a", "Estamos ficando mais capazes. <em>Para construir o quê?</em>")}
</Display>
            <Stroke shape="underline" draw className="mt-2 h-4 w-[min(420px,70%)]" width={4} />
            <Lead className="mt-8 max-w-[660px] text-[clamp(22px,2vw,30px)]">
{rx("palestras-workshops/rb3f2ff5e1", "Uma palestra sobre as escolhas que fazemos quando tecnologia, trabalho e vida abrem novas possibilidades.")}
</Lead>
            <p className="jf-body mt-6 max-w-[620px] text-ink-700">
{rx("palestras-workshops/r44d87411b", "Futuros Humanos conecta essas mudanças às capacidades humanas necessárias para participar do que vem depois.")}
</p>
            <ButtonRow className="mt-10">
              <ButtonLink href={CONTACT_ROUTES.palestras} size="lg">
{rx("palestras-workshops/r468898265", "Conversar sobre meu evento")}
</ButtonLink>
              {hasVideo ? (
                <ButtonLink href={OUCA_ANCHOR} variant="secondary" size="lg">
{rx("palestras-workshops/r0fb7b2fa7", "Ouça e veja a Ju")}
</ButtonLink>
              ) : (
                <ButtonLink href="/futuros-humanos" variant="secondary" size="lg">
{rx("palestras-workshops/r884900a46", "Conheça Futuros Humanos")}
</ButtonLink>
              )}
            </ButtonRow>
          </div>
        </Container>
        <div className="relative min-h-[440px] bg-ink-900 lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("palestras-workshops/3a9b665976", "/images/ensaio/home-03-palco-vertical.webp")}
            alt={tx("palestras-workshops/19316be803", "Cena ilustrativa de Juliana no palco, em enquadramento vertical.")}
            priority
            sizes="(min-width:1024px) 42vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="orbit" draw className="absolute left-2 top-0 h-full w-[85%]" width={3} />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── P02 — A EXPERIÊNCIA ───────────────────────── */
export function PalestrasExperiencia() {
  const questions = [
    tx("palestras-workshops/22f7b60faf", "Que futuro nossas escolhas de hoje ajudam a tornar mais provável?"),
    tx("palestras-workshops/b65778dfa2", "O que vale a pena fazer com as capacidades que estamos ampliando?"),
    tx("palestras-workshops/df847998a2", "Do que precisamos nos tornar capazes para sustentar essa direção?"),
  ];
  const contexts = [tx("palestras-workshops/ee57d258b3", "Encontros de liderança"), tx("palestras-workshops/55e65e2029", "Eventos de tecnologia e inovação"), tx("palestras-workshops/34636db686", "Convenções e momentos de transformação")];
  return (
    <Section tone="dark" padded={false} label={tx("palestras-workshops/84b4b21343", "A experiência")} id="a-palestra">
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:pr-10">
          <Display size="lg">
{rx("palestras-workshops/raf9ec0b7c", "Uma pergunta para levar <em>além do evento.</em>")}
</Display>
          <Body className="mt-10 max-w-[600px] text-cream-50/85">
            <p>
{rx("palestras-workshops/r2bd7753b3", "Histórias da vida, experiência em tecnologia e Estudos de Futuros se encontram para tornar visíveis escolhas que passam por inevitáveis.")}
</p>
            <p>
{rx("palestras-workshops/r222e5a26f", "A proposta é ampliar perspectivas, reconhecer critérios que orientam decisões e encontrar um primeiro movimento possível no contexto de cada pessoa ou equipe.")}
</p>
          </Body>
          <h3 className="jf-eyebrow mt-12 text-cream-50/70">
{rx("palestras-workshops/r595b5be6a", "Três perguntas atravessam a palestra")}
</h3>
          <ol className="mt-6 space-y-5">
            {questions.map((q, i) => (
              <li key={q} className="flex gap-5 border-l-2 border-red-bright pl-5">
                <span className="jf-display text-[22px] leading-none text-red-bright" aria-hidden>
                  {i + 1}
                </span>
                <p className="font-serif text-[clamp(20px,1.8vw,26px)] leading-snug text-cream-50">{rich(q)}</p>
              </li>
            ))}
          </ol>
          <p className="jf-body mt-10 max-w-[600px] text-cream-50/80">
{rx("palestras-workshops/r35be0cfd6", "No caminho, a conversa passa por imaginar, escolher, tornar-se e construir. Não como etapas a cumprir: depois de construir, a pergunta volta, mas de outro lugar.")}
</p>
          <ButtonLink href="/futuros-humanos" variant="ghost-light" className="mt-6">
{rx("palestras-workshops/r3df85b69d", "Conheça a tese em profundidade")}
</ButtonLink>
        </Container>
        <div className="relative min-h-[380px]">
          <Photo
            src={img("palestras-workshops/93417814e2", "/images/ensaio/palestras-interacao-plateia.webp")}
            alt={tx("palestras-workshops/985b2df8a3", "Cena ilustrativa de Juliana interagindo com participantes de uma palestra.")}
            sizes="(min-width:1024px) 48vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_40%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/20 to-transparent max-lg:bg-gradient-to-b"
            aria-hidden
          />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-8 border-t border-cream-50/20 pt-10 lg:grid-cols-[minmax(220px,0.8fr)_2fr] lg:gap-12">
          <h3 className="jf-display jf-display-sm">
{rx("palestras-workshops/rd7c80808a", "Onde essa conversa costuma fazer sentido")}
</h3>
          <div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {contexts.map((c) => (
                <li key={c} className="flex gap-3 text-[17px] font-medium leading-snug text-cream-50">
                  <span className="mt-[0.7em] h-px w-4 shrink-0 bg-red-bright" aria-hidden />
                  {rich(c)}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[640px] text-[15px] leading-relaxed text-cream-50/75">
{rx("palestras-workshops/r5137bd5de", "Cada público pede ênfases próprias. Por isso a adequação é conversada a partir do briefing de cada evento.")}
</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
