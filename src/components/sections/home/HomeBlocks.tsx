import { getMediaFor, getPublishedArticles } from "@/lib/content";
import { MediaPlayer } from "@/components/ui/MediaPlayer";
import { photoPosition } from "@/lib/photo-position";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { SpiralMark, Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, Lead, Title } from "@/components/ui/Typography";
import { NewsletterForm } from "@/components/sections/ideias/NewsletterForm";
import { CONTACT_ROUTES } from "@/lib/site";

import { tx, img } from "@/lib/editable";
/* ───────────────────────── H01 — ABERTURA ───────────────────────── */
export function HomeHero() {
  return (
    <Section padded={false} className="min-h-[calc(100svh-var(--jf-header-h))]" label={tx("home/84228bf523", "Abertura")}>
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <Photo
          src={img("home/cbf024f7ad", "/images/ensaio/home-01-abertura-vertical.webp")}
          alt={tx("home/68bfde2153", "Juliana no mirante, em enquadramento vertical ao entardecer.")}
          priority
          sizes="52vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
      </div>
      <Stroke shape="loop" className="absolute -right-6 top-4 z-[1] hidden h-[105%] w-[50%] lg:block" width={3} />
      <Container className="z-10 flex min-h-[calc(100svh-var(--jf-header-h))] flex-col justify-center py-16 lg:py-24">
        <div className="max-w-[860px]">
          <Display as="h1" size="xl" caps>
            {tx("home/ab905ce539", "E se pudesse")}<br />
            {tx("home/dfdcd69d81", "ser")} <Em>{tx("home/0a32d32fae", "diferente?")}</Em>
          </Display>
          <Lead className="mt-8 max-w-[640px] text-[clamp(26px,2.6vw,42px)]">
            {tx("home/593da7c513", "Aquilo que existe não esgota aquilo que pode existir.")}</Lead>
          <p className="jf-body mt-6 max-w-[560px] text-ink-700">
            {tx("home/7d832cc350", "Sou Ju Ferreira. Investigo futuros, tecnologia e transformação humana e levo essas perguntas para palestras, organizações e a vida de todos os dias.")}</p>
          <ButtonRow className="mt-10">
            <ButtonLink href={CONTACT_ROUTES.organizacoes} size="lg">
              {tx("home/f2419ab417", "Leve a Ju para sua organização")}</ButtonLink>
            <ButtonLink href="/futuros-humanos" variant="secondary" size="lg">
              {tx("home/abec1b8143", "Conheça Futuros Humanos")}</ButtonLink>
          </ButtonRow>
        </div>
      </Container>
      <div className="relative h-[60vw] max-h-[460px] lg:hidden">
        <Photo src={img("home/144dc16e5a", "/images/ensaio/home-01-abertura-horizontal.webp")} alt={tx("home/f41911fd21", "Juliana de preto diante de uma paisagem ampla ao entardecer.")} sizes="100vw" className="absolute inset-0 jf-paper-edge" />
      </div>
    </Section>
  );
}

/* ───────────────────────── H02 — A TENSÃO ───────────────────────── */
export function HomeTensao() {
  return (
    <Section tone="dark" padded={false} label={tx("home/cf629217fd", "A tensão")}>
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="relative z-10 py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:pr-6">
          <Display as="h2" caps size="md">
            {tx("home/91e55a89bd", "O mundo está mudando.")}<br />
            {tx("home/49c6d000dc", "Mas")} <Em>{tx("home/20d926220a", "mudança")}</Em> {tx("home/2e8aad7bb5", "não é")} <Em>{tx("home/72d1a6e7a0", "direção.")}</Em>
          </Display>
          <Body className="mt-10 max-w-[560px] text-cream-50/85">
            <p>
              {tx("home/9c03dcb25d", "Uma equipe pode adotar IA e continuar premiando os mesmos comportamentos. Uma pessoa pode entregar tudo o que esperam dela e passar meses sem tocar no que deseja construir.")}</p>
            <p>{tx("home/84619c7c81", "Estamos fazendo mais. A pergunta é para onde isso nos leva.")}</p>
          </Body>
          <span className="mt-10 block h-px w-20 bg-red-bright" aria-hidden />
          <Lead as="p" className="mt-8 max-w-[560px] text-[clamp(28px,2.8vw,42px)]">
            {tx("home/8870d40c81", "O que estamos ajudando a tornar mais provável")} <Em>{tx("home/031c6f3d21", "com aquilo que repetimos hoje?")}</Em>
          </Lead>
        </Container>
        <div className="relative min-h-[380px] lg:min-h-full">
          <Photo
            src={img("home/867ffce5c1", "/images/ensaio/contexto-luz-direcao.webp")}
            alt={tx("home/a5d9950206", "Luz natural atravessando um ambiente escuro de concreto.")}
            sizes="(min-width:1024px) 54vw, 100vw"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/10 to-transparent max-lg:bg-gradient-to-b" aria-hidden />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── H03 — A LENTE ───────────────────────── */
export function HomeFuturos() {
  const moves = [tx("home/8c1418188c", "Imaginar"), tx("home/d0f7ec3612", "Escolher"), tx("home/02d0b1840a", "Tornar-se"), tx("home/d1d0adf46d", "Construir")];
  return (
    <Section label={tx("home/bc7e30f629", "Futuros Humanos")} id="futuros-humanos">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Display as="h2" size="lg">
            {tx("home/6822fca0ab", "Futuros")} <Em italic>{tx("home/f8e735d0f3", "Humanos")}</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] font-serif text-[20px] text-ink-800">
            <p>
              {tx("home/df4697d6fc", "O futuro mais provável não é o único possível. Entre aquilo que existe e aquilo que ainda pode existir, há espaço para imaginar, escolher, desenvolver capacidades e construir.")}</p>
            <p>{tx("home/9733976589", "Não controlamos o resultado inteiro. Podemos participar das escolhas e condições que ajudam a produzi-lo.")}</p>
          </Body>
          <ButtonLink href="/futuros-humanos" className="mt-10">
            {tx("home/e708254df4", "Explore essa visão")}</ButtonLink>
        </div>
        <figure className="relative mx-auto w-full max-w-[420px]">
          <div className="jf-breathe relative aspect-square" aria-hidden>
            <SpiralMark className="absolute inset-0 h-full w-full opacity-90" />
          </div>
          <figcaption className="mt-6">
            <p className="jf-eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-red-brand">
              {moves.map((m, i) => (
                <span key={m} className="inline-flex items-center gap-3">
                  {m}
                  <span aria-hidden>{i < moves.length - 1 ? "→" : "↻"}</span>
                </span>
              ))}
            </p>
            <p className="mt-4 font-serif text-[20px] leading-snug text-ink-800">
              {tx("home/946548222a", "O mundo responde. A gente aprende. E volta à pergunta de outro lugar.")}</p>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}

/* ───────────────────────── H04 — A PESSOA ───────────────────────── */
export async function HomeJu() {
  // vídeo ou áudio marcado para a Home no painel (Vídeos e áudios); sem nenhum, o bloco fica só com texto
  const [media] = await getMediaFor("home");
  return (
    <Section padded={false} tone="cream" label={tx("home/df4a46c48a", "Ju Ferreira")}>
      <div className="grid lg:grid-cols-[56%_44%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pr-12">
          <Display as="h2" size="lg">
            {tx("home/3b38bc492c", "Essa pergunta também atravessa")} <Em>{tx("home/139fef76a9", "a minha vida.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>
              {tx("home/d9fe9035ca", "Sou engenheira, trabalhei com tecnologia, liderei e construí empresas. Acertei, errei e precisei mudar de direção. A maternidade ampliou a pergunta: o futuro passou a ser também o mundo onde minhas filhas vão viver.")}</p>
            <p>{tx("home/c91e0b08d5", "Continuo trabalhando, construindo e tentando fazer essas ideias sobreviverem a uma terça-feira qualquer.")}</p>
          </Body>
          <ButtonLink href="/ju" className="mt-10">
            {tx("home/d4cfc4e8d1", "Conheça minha trajetória")}</ButtonLink>
          {media && (
            <div className="mt-12 max-w-[620px]">
              <MediaPlayer m={media} />
            </div>
          )}
        </Container>
        <div className="relative min-h-[520px]">
          <Photo
            src={img("home/2723ef3983", "/images/ju/retrato-biblioteca.webp")}
            alt={tx("home/86e6bdf065", "Juliana sorrindo diante de sua biblioteca.")}
            sizes="(min-width:1024px) 44vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="loop" className="absolute -left-10 top-6 h-[85%] w-[80%]" width={2.5} />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── H05 — ORGANIZAÇÕES ───────────────────────── */
export function HomeOrganizacoes() {
  const formats = [
    { t: tx("home/782079c486", "Palestras"), d: tx("home/1a86adac4e", "Uma provocação para abrir perspectivas e colocar uma questão em comum.") },
    { t: tx("home/2ad020a7a2", "Workshops"), d: tx("home/fb69dea50f", "Tempo de trabalho conjunto para examinar escolhas e definir movimentos possíveis.") },
    { t: tx("home/2c791d886d", "Projetos e experiências"), d: tx("home/8d0b8b1bf6", "Uma construção a partir de um desafio que pede continuidade ou outras competências.") },
  ];
  return (
    <Section padded={false} label={tx("home/f06ed0606e", "Para organizações")}>
      <div className="grid lg:grid-cols-[58%_42%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:pr-12">
          <Display as="h2" size="lg">
            {tx("home/42474c0a5e", "Algumas perguntas precisam")} <Em>{tx("home/e2fde2d915", "entrar na sala.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>
              {tx("home/b169df3e2d", "Levo essa conversa para eventos, lideranças e equipes que estão decidindo como trabalhar, usar tecnologia e construir o que vem depois.")}</p>
          </Body>
          <ul className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {formats.map((f) => (
              <li key={f.t}>
                <Dash />
                <Title className="mt-4 uppercase">{f.t}</Title>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{f.d}</p>
              </li>
            ))}
          </ul>
          <ButtonRow className="mt-12">
            <ButtonLink href="/palestras">{tx("home/5c3f6fc6d1", "Conheça as palestras")}</ButtonLink>
            <ButtonLink href="/organizacoes" variant="secondary">
              {tx("home/e4cb62ba6c", "Conheça o trabalho com organizações")}</ButtonLink>
          </ButtonRow>
        </Container>
        <div className="relative min-h-[480px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("home/846047fded", "/images/ensaio/home-03-palco-vertical.webp")}
            alt={tx("home/350b46f8ed", "Cena ilustrativa de Juliana no palco, em enquadramento vertical.")}
            sizes="(min-width:1024px) 42vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="orbit" className="absolute -left-16 top-0 h-full w-[90%]" width={2.5} />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── H06 — PESSOAS ───────────────────────── */
export function HomePessoas() {
  return (
    <Section padded={false} tone="cream" label={tx("home/26bb507bed", "Para pessoas")}>
      <div className="grid lg:grid-cols-[40%_60%]">
        <div className="relative min-h-[420px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("home/c195718d6d", "/images/ensaio/home-05-escrita-vertical.webp")}
            alt={tx("home/27faa97ca3", "Juliana com caderno, caneta e café à mesa, em retrato vertical.")}
            sizes="(min-width:1024px) 40vw, 100vw"
            className="absolute inset-0 jf-fade-right"
            imgClassName="object-[50%_40%]"
          />
        </div>
        <Container className="flex flex-col justify-center py-[var(--jf-section-y)] lg:ml-0 lg:max-w-[820px] lg:pl-14">
          <Display as="h2" size="lg">
            {tx("home/a545e45982", "E se essa conversa for sobre a")} <Em>{tx("home/6368c874aa", "sua própria vida?")}</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>{tx("home/638635c549", "Há coisas que continuamos fazendo porque importam. Outras permanecem porque ainda não as revimos ou não encontramos condições para mudar.")}</p>
            <p>{tx("home/d0e2dd2fad", "Você pode começar por uma pergunta, uma leitura ou uma prática que caiba na vida de hoje.")}</p>
          </Body>
          <ButtonLink href="/pessoas" size="lg" className="mt-10 w-fit">
            {tx("home/5e8fa15e6a", "Encontre um começo")}</ButtonLink>
        </Container>
      </div>
    </Section>
  );
}

/* ───────────────────────── H07 — CONTEÚDO ───────────────────────── */
export async function HomeIdeias() {
  // só conteúdo real publicado no painel; sem publicações, os cartões e o CTA da seção não aparecem
  const published = (await getPublishedArticles()).slice(0, 3);
  return (
    <Section label={tx("home/5fd98951f5", "Ideias")}>
      <Container>
        <Display as="h2" size="lg">
          {tx("home/01f4d8efe0", "Para continuar")} <Em>{tx("home/5226557e3d", "pensando.")}</Em>
        </Display>
        <div className={`mt-12 grid gap-14 ${published.length ? "lg:grid-cols-[1.45fr_1fr] lg:gap-0 lg:divide-x lg:divide-ink-900/15" : "lg:grid-cols-[1fr_1fr] lg:items-center"}`}>
          {published.length > 0 ? (
            <div className="lg:pr-12">
              <ul className="grid gap-8 sm:grid-cols-3 sm:gap-6">
                {published.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/ideias/${a.slug}`} className="group block">
                      {a.cover && (
                        <div className="relative aspect-[12/5] overflow-hidden rounded-sm">
                          <Image src={a.cover} alt="" fill sizes="(min-width:640px) 20vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: photoPosition(a.cover) }} />
                        </div>
                      )}
                      <p className="jf-eyebrow mt-4 text-[11px] text-ink-500">{tx("home/2367978c74", "Ensaio")}</p>
                      <p className="mt-2 font-serif text-[21px] leading-snug group-hover:text-red-brand">{a.title}</p>
                      {a.excerpt && <p className="mt-2 line-clamp-3 text-[15px] text-ink-700">{a.excerpt}</p>}
                    </Link>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/ideias" variant="secondary" className="mt-10">
                {tx("home/3a27ba6939", "Explore as ideias")}</ButtonLink>
            </div>
          ) : (
            <div className="relative min-h-[300px] overflow-hidden rounded-sm lg:min-h-[420px]">
              <Photo
                src={img("home/f14fccd758", "/images/ensaio/home-06-ideias-horizontal.webp")}
                alt={tx("home/e7eab3951d", "Livros, caderno aberto, caneta e café sobre uma mesa de madeira.")}
                sizes="(min-width:1024px) 45vw, 100vw"
                className="absolute inset-0"
              />
            </div>
          )}
          <div id="newsletter" className={published.length ? "lg:pl-12" : "lg:pl-4"}>
            <Dash />
            <Title as="h3" className="mt-3 text-[30px] uppercase">
              {tx("home/ee1adfd09e", "Uma Terça-feira Qualquer")}</Title>
            <p className="mt-3 max-w-[480px] text-ink-700">
              {tx("home/a70b13d59e", "Uma carta por semana sobre futuros, tecnologia e aquilo que estamos construindo enquanto damos conta da vida.")}</p>
            <NewsletterForm className="mt-6 max-w-[480px]" source="home" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── H08 — ENCERRAMENTO ───────────────────────── */
export function HomeEncerramento() {
  return (
    <Section tone="wine" label={tx("home/705038aee4", "Encerramento")}>
      <div className="pointer-events-none absolute -right-[18%] top-1/2 w-[85%] max-w-[1100px] -translate-y-1/2 opacity-80 mix-blend-screen max-md:-right-1/2 max-md:w-[140%] max-md:opacity-40" aria-hidden>
        <SpiralMark className="h-auto w-full" />
      </div>
      <Container className="relative">
        <Display as="h2" size="xl" className="max-w-[900px]">
          {tx("home/130bf9e337", "Temos futuros para")} <Em>{tx("home/9d01ec24ee", "construir.")}</Em>
        </Display>
        <p className="jf-lead mt-10 max-w-[620px] text-cream-50/95">{tx("home/029320a323", "Qual conversa merece começar agora?")}</p>
        <ButtonLink href="/contato" size="lg" className="mt-10">
          {tx("home/99d76e1c3f", "Vamos conversar")}</ButtonLink>
      </Container>
    </Section>
  );
}
