import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, StickyNote, Title } from "@/components/ui/Typography";
import { getExternal } from "@/lib/content";
import { CONTACT_ROUTES, LINKS } from "@/lib/site";

import { tx, img } from "@/lib/editable";
/** Linha vertical vermelha + frase de fechamento (padrão de citação dos mockups). */
function BarQuote({ children, className = "", dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <blockquote
      className={`border-l-[3px] pl-6 font-serif text-[clamp(26px,2.5vw,40px)] leading-[1.12] ${
        dark ? "border-red-bright" : "border-red-brand"
      } ${className}`}
    >
      {children}
    </blockquote>
  );
}

/* ───────────────────────── J01 — ABERTURA ───────────────────────── */
export function JuHero() {
  return (
    <Section padded={false} className="min-h-[calc(100svh-var(--jf-header-h))]" label={tx("ju/351db744da", "Primeiro de tudo, eu sou a Ju")}>
      <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
        <Photo
          src={img("ju/a7a31d568a", "/images/ensaio/home-02-biblioteca-vertical.webp")}
          alt={tx("ju/986ef7359f", "Retrato de Juliana em uma poltrona na biblioteca.")}
          priority
          sizes="50vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
      </div>
      <Stroke shape="loop" draw className="absolute right-[4%] top-[4%] hidden h-[92%] w-[44%] lg:block" width={2.5} />
      <Container className="flex min-h-[calc(100svh-var(--jf-header-h))] flex-col justify-center py-16 lg:py-20">
        <div className="jf-reveal max-w-[680px]">
          <Display as="h1" size="xl">
            {tx("ju/e1c88b78a4", "Primeiro de tudo,")} <Em>{tx("ju/a1e34c32ca", "eu sou a Ju.")}</Em>
          </Display>
          <Stroke shape="underline" draw className="mt-2 h-4 w-[min(340px,70%)] sm:ml-[30%]" width={4} />
          <Body className="mt-8 max-w-[580px] text-ink-700">
            <p>
              {tx("ju/ed668dae64", "Sou engenheira, empreendedora, mãe e futurista. Mas os títulos explicam menos do que uma inquietação que atravessa minha vida:")}</p>
          </Body>
          <p className="mt-3 max-w-[580px] font-serif text-[clamp(21px,1.8vw,27px)] leading-snug text-red-brand">
            {tx("ju/025cb8e8d7", "o que ainda pode existir quando a gente deixa de tratar o caminho mais provável como o único disponível?")}</p>
          <Body className="mt-6 max-w-[580px] text-ink-700">
            <p>
              {tx("ju/c15f4427e4", "Passei por tecnologia, vendas, liderança e construção de empresas. Hoje, essas experiências encontram os Estudos de Futuros e as perguntas sobre transformação humana que continuo perseguindo.")}</p>
          </Body>
          <ButtonRow className="mt-10">
            <ButtonLink href="#trajetoria" size="lg">
              {tx("ju/e942d5ec54", "Conheça essa trajetória")}</ButtonLink>
          </ButtonRow>
        </div>
      </Container>
      <div className="relative h-[90vw] max-h-[560px] lg:hidden">
        <Photo src={img("ju/8cdbcd58f7", "/images/ensaio/home-02-biblioteca-horizontal.webp")} alt={tx("ju/578a8efccf", "Juliana sentada em uma poltrona na biblioteca.")} sizes="100vw" className="absolute inset-0 jf-paper-edge" imgClassName="object-[50%_40%]" />
      </div>
    </Section>
  );
}

/* ───────────────────────── J02 — TECNOLOGIA E CONSTRUÇÃO ───────────────────────── */
export function JuTecnologia() {
  return (
    <Section id="trajetoria" tone="dark" padded={false} label={tx("ju/5208832b6a", "Tecnologia e construção")}>
      <div className="grid lg:grid-cols-[58%_42%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:pr-12">
          <Display size="lg">
            {tx("ju/17571edd79", "A tecnologia sempre chegou")} <Em>{tx("ju/5027ff477a", "acompanhada de gente.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-[min(300px,70%)]" width={4} color="var(--jf-red-400)" />
          <Body className="mt-10 max-w-[640px] text-cream-50/85">
            <p>
              {tx("ju/89afe1bd7c", "Na minha trajetória em empresas como EMC e Oracle, tecnologia vinha com")}{" "}
              <strong className="font-semibold text-cream-50">{tx("ju/25a807c6dc", "cliente, orçamento, pressão, negociação, risco e consequência.")}</strong>
            </p>
            <p>
              {tx("ju/d7f3603a79", "Ao cofundar e liderar a A2F, passei a lidar também com o que é preciso para uma empresa existir: vender, entregar, contratar, decidir, corrigir e sustentar escolhas quando a realidade muda.")}</p>
            <p>{tx("ju/488d87afad", "Nesse caminho, acertei, errei, perdi dinheiro, recomecei e mudei de direção.")}</p>
            <p>{tx("ju/959cacf0a2", "Foi nesse percurso que uma ideia ganhou força para mim:")}</p>
          </Body>
          <BarQuote dark className="mt-6 max-w-[640px]">
            {tx("ju/95c032dcf4", "nenhuma transformação tecnológica é apenas tecnológica.")}
          </BarQuote>
          <p className="jf-body mt-6 max-w-[640px] text-cream-50/85">{tx("ju/7514f8e57c", "Ela muda como pessoas trabalham, decidem e se relacionam.")}</p>
          <div className="mt-12 max-w-[640px] border-t border-cream-50/20 pt-10">
            <p className="jf-body text-cream-50/80">{tx("ju/317da0bf80", "Por isso, diante de uma nova ferramenta, minha pergunta raramente é apenas:")}</p>
            <p className="mt-3 font-serif text-[clamp(21px,1.8vw,27px)] italic leading-snug text-cream-50/90">
              {tx("ju/71d16cc997", "“O que essa ferramenta será capaz de fazer?”")}</p>
            <Display as="h3" size="sm" className="mt-6 text-red-bright">
              {tx("ju/969eec2868", "O que acontece com a gente quando ela consegue?")}</Display>
          </div>
        </Container>
        <div className="relative min-h-[420px]">
          <Photo
            src={img("ju/dd36ab4eae", "/images/ensaio/ju-trabalho-tecnologia.webp")}
            alt={tx("ju/18017c9f6c", "Juliana concentrada no trabalho em um notebook.")}
            sizes="(min-width:1024px) 42vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/10 to-transparent max-lg:bg-gradient-to-b" aria-hidden />
          <Stroke shape="circle" className="absolute left-[8%] top-[6%] h-[80%] w-[80%] opacity-90" width={2.5} color="var(--jf-red-400)" />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── J03 — CAPACIDADE E DIREÇÃO ───────────────────────── */
/* Adaptação candidata da história do professor Wilker (Contexto Mestre §13 e palestra v1.1).
   Ju revisa antes da publicação; se não quiser usar, remover o bloco inteiro (ver registro-ju.md). */
export function JuEscolher() {
  return (
    <Section label={tx("ju/2d7c2172ec", "Capacidade e direção")}>
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
        <div>
          <Display size="lg">
            {tx("ju/845089e5e6", "Ser boa num caminho não decide")} <Em>{tx("ju/29d955da32", "se quero continuar nele.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(320px,60%)] sm:ml-[40%]" width={4} />
          <Body className="mt-10 max-w-[620px] text-ink-700">
            <p>
              {tx("ju/63f790c2a4", "Na escola, um professor chamado Wilker me disse que eu seria boa em qualquer coisa que escolhesse. Guardei a frase. Demorei mais para escutar uma palavra dentro dela: escolher.")}</p>
            <p>
              {tx("ju/89a89cd634", "Gostar de muitas coisas e encontrar portas abertas pode ser maravilhoso. Também pode nos manter entrando na próxima oportunidade sem perguntar para onde o conjunto das escolhas está levando.")}</p>
            <p>{tx("ju/17cbc0716b", "Essa pergunta continua comigo:")}</p>
          </Body>
          <p className="mt-3 font-serif text-[clamp(24px,2.2vw,32px)] font-medium leading-tight text-red-brand">
            {tx("ju/90dd71241b", "onde estou colocando minha potência?")}</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <StickyNote tone="blush" rotate={-4} className="max-w-[300px]">
            {tx("ju/30eb5e06c3", "escolher.")}</StickyNote>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── J04 — MATERNIDADE ───────────────────────── */
export function JuMaternidade() {
  return (
    <Section padded={false} tone="cream" label={tx("ju/3bcde5e5a7", "Maternidade")}>
      <div className="grid lg:grid-cols-[56%_44%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pr-12">
          <Display size="lg">
            {tx("ju/73e09cce47", "Quando virei mãe, o futuro")} <Em>{tx("ju/73812407b0", "mudou de escala.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(300px,60%)] sm:ml-[30%]" width={4} />
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
              {tx("ju/a16c109441", "O futuro passou a ser também o mundo onde minhas filhas vão viver. Isso tornou algumas perguntas muito próximas: o que ensino, o que sustento, o que questiono e o que ajudo a construir?")}</p>
          </Body>
          <Display as="h3" size="sm" className="mt-10 max-w-[600px]">
            <Em>{tx("ju/39efe381f5", "eu não controlo o futuro delas.")}</Em>
          </Display>
          <p className="jf-body mt-4 max-w-[600px] text-ink-700">
            {tx("ju/09889fbcf8", "Posso participar do presente e ajudar a criar condições para que elas também façam suas escolhas.")}</p>
        </Container>
        <div className="relative min-h-[520px] lg:min-h-[640px]">
          <Photo
            src={img("ju/433d7283dd", "/images/ju/retrato-sorriso-tijolos.webp")}
            alt={tx("ju/6024d7eea6", "Retrato de Juliana sorrindo diante de uma parede de tijolos brancos.")}
            sizes="(min-width:1024px) 44vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_35%]"
          />
          <Stroke shape="underline" className="absolute bottom-8 left-[10%] h-5 w-[50%]" width={4} />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── J05 — A LENTE ATUAL ───────────────────────── */
export function JuFuturos() {
  return (
    <Section label={tx("ju/93fb0b04ae", "A lente atual")}>
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
        <div>
          <Display size="lg">
            {tx("ju/aae80b8efe", "As perguntas sobre transformação")} <Em>{tx("ju/bf98839293", "ficaram maiores.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(300px,60%)] sm:ml-[35%]" width={4} />
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
              {tx("ju/f963424eb0", "Meu interesse por escolhas, capacidades e mudança encontrou nos Estudos de Futuros um campo mais amplo. Pessoas se transformam dentro de famílias, organizações, culturas e tecnologias. Esses mundos também podem mudar.")}</p>
            <p>
              {tx("ju/c99340fc14", "Futuros Humanos nasceu nesse encontro. É onde organizo perguntas sobre possibilidade, direção, humanidade e aquilo que podemos começar a construir.")}</p>
          </Body>
          <BarQuote className="mt-10 max-w-[600px]">
            {tx("ju/0ba8b3ca76", "Eu estudo futuros porque me interesso profundamente por")} <Em>{tx("ju/3cfc7afe5f", "pessoas.")}</Em>
          </BarQuote>
          <ButtonLink href="/futuros-humanos" className="mt-10">
            {tx("ju/73150f043f", "Conheça Futuros Humanos")}</ButtonLink>
        </div>
        <div className="relative aspect-[4/4.2] w-full">
          <Photo
            src={img("ju/bd164517c4", "/images/ensaio/ju-leitura-anotacoes.webp")}
            alt={tx("ju/588ef59a0f", "Juliana lendo um livro e fazendo anotações em um caderno.")}
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-paper-edge"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── J06 — O QUE CONSTRUO HOJE ───────────────────────── */
function PaperCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative flex h-full flex-col bg-cream-100 p-7 shadow-[0_14px_34px_-22px_rgba(24,20,17,.45)] sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

type Front = { key: string; name: ReactNode; body: string; cta?: { href: string; label: string } };

export async function JuHoje() {
  // Destinos oficiais cadastrados no /admin (Configurações). Sem URL, o botão vira contato honesto.
  const ext = await getExternal();
  const fronts: Front[] = [
    {
      key: "palestras",
      name: "Palestras e experiências",
      body: tx("ju/0fd9dc1c4d", "Conversas com eventos, lideranças e equipes sobre futuros, tecnologia e transformação."),
      cta: { href: "/palestras", label: tx("ju/55ec6e9b56", "Conheça as palestras") },
    },
    {
      key: "wtf",
      name: "What The Future?!",
      body: tx("ju/8385cb1d24", "Coletivo de futuristas do qual participo, com trabalhos de futuros aplicados."),
      cta: ext.wtf
        ? { href: LINKS.wtf, label: tx("ju/62f394d042", "Conheça a WTF") }
        : { href: CONTACT_ROUTES.futuros, label: tx("ju/11c961d112", "Converse sobre futuros aplicados") },
    },
    {
      key: "epic",
      name: (
        <>
          {tx("ju/3836a57fec", "EPIC")}<Em>{tx("ju/f0dc08e0c7", "247")}</Em>
        </>
      ),
      body: tx("ju/fe5b21b07c", "Experiências de transformação pessoal para aproximar o que você quer mudar daquilo que consegue praticar no cotidiano."),
      cta: ext.epic247
        ? { href: LINKS.epic247, label: tx("ju/3672bdba1f", "Conheça o EPIC247") }
        : { href: CONTACT_ROUTES.epic, label: tx("ju/52c88aff00", "Tire uma dúvida sobre o EPIC247") },
    },
  ];
  return (
    <Section tone="cream" label={tx("ju/17052137bc", "O que construo hoje")}>
      <Container>
        <Display size="md">
          {tx("ju/d1bff588a7", "Essa visão encontra")} <Em>{tx("ju/c81cfa1d9a", "trabalhos diferentes.")}</Em>
        </Display>
        <Stroke shape="underline" className="mt-2 h-4 w-[min(260px,60%)] sm:ml-[30%]" width={4} />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {fronts.map((f, i) => (
            <li key={f.key}>
              <PaperCard className={i % 2 ? "md:rotate-[0.4deg]" : "md:-rotate-[0.4deg]"}>
                <Title as="h3" className="text-[clamp(24px,1.9vw,30px)] uppercase leading-[1.05]">
                  {f.name}
                </Title>
                <Dash className="mt-3" />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">{f.body}</p>
                {f.cta && (
                  <ButtonLink href={f.cta.href} variant="secondary" size="sm" className="mt-6 self-start">
                    {f.cta.label}
                  </ButtonLink>
                )}
              </PaperCard>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ───────────────────────── J07 — ENCERRAMENTO ───────────────────────── */
export function JuEncerramento() {
  return (
    <Section padded={false} label={tx("ju/4d5ec0fcb2", "Encerramento")}>
      <div className="grid lg:grid-cols-[60%_40%]">
        <Container className="flex flex-col justify-center py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[860px] lg:pr-12">
          <Display size="lg">
            {tx("ju/88446f0e80", "Eu não quero menos vida.")} <Em>{tx("ju/1b57174dac", "Eu quero mais vida.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(260px,50%)] sm:ml-[28%]" width={4} />
          <Body className="mt-10 max-w-[620px] text-ink-700">
            <p>
              {tx("ju/cb40d85596", "Quero construir, aprender, criar e continuar encontrando coisas que me façam mudar de ideia. Quero estar presente na vida enquanto isso acontece.")}</p>
          </Body>
          <BarQuote className="mt-12">
            {tx("ju/589522b975", "Não terminei de me tornar.")}<br />
            {tx("ju/0ac4e6a799", "Não terminei de construir.")}</BarQuote>
          <ButtonRow className="mt-12">
            <ButtonLink href="/contato" size="lg">
              {tx("ju/0460b36b28", "Vamos conversar")}</ButtonLink>
          </ButtonRow>
        </Container>
        <div className="relative min-h-[480px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("ju/efbf615e4b", "/images/ensaio/ju-caminhada-movimento.webp")}
            alt={tx("ju/6ebc79672b", "Juliana caminhando na calçada, em enquadramento de corpo inteiro.")}
            sizes="(min-width:1024px) 40vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="loop" className="absolute -left-6 top-[6%] h-[70%] w-[95%]" width={2.5} />
        </div>
      </div>
    </Section>
  );
}
