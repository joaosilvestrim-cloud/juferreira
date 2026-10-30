import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, StickyNote } from "@/components/ui/Typography";
import { FuturesDiagram } from "./FuturesDiagram";

import { tx, img, rx, rich } from "@/lib/editable";
/** Sequência de frases curtas (uma por linha), com traço vermelho opcional. */
export function Lines({ items, dash = false, className = "" }: { items: ReactNode[]; dash?: boolean; className?: string }) {
  return (
    <ul className={`space-y-1 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          {dash && <span className="mt-[0.8em] h-px w-4 shrink-0 bg-red-brand" aria-hidden />}
          <span>{rich(it)}</span>
        </li>
      ))}
    </ul>
  );
}

/** Frase em destaque com barra vertical vermelha. */
export function Pull({ children, className = "", dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <blockquote
      className={`border-l-[3px] pl-5 font-serif text-[clamp(21px,1.8vw,27px)] leading-snug ${
        dark ? "border-red-bright" : "border-red-brand"
      } ${className}`}
    >
      {children}
    </blockquote>
  );
}

/* ───────────────────────── F01 — ABERTURA ───────────────────────── */
export function FHHero() {
  return (
    <Section padded={false} className="min-h-[calc(100svh-var(--jf-header-h))]" label={tx("futuros-humanos/f8405d4adb", "Abertura")}>
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Photo
          src={img("futuros-humanos/14410af0e0", "/images/ensaio/home-01-abertura-vertical.webp")}
          alt={tx("futuros-humanos/7369301cb5", "Juliana no mirante, em enquadramento vertical ao entardecer.")}
          priority
          sizes="46vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
      </div>
      <Stroke shape="loop" draw className="absolute -right-6 top-0 hidden h-[100%] w-[46%] lg:block" width={3} />
      <Container className="flex min-h-[calc(100svh-var(--jf-header-h))] flex-col justify-center py-16 lg:py-20">
        <div className="jf-reveal max-w-[760px]">
          <p className="jf-eyebrow text-red-brand">
{rx("futuros-humanos/rb95a827f2", "Futuros Humanos")}
</p>
          <Display as="h1" size="lg" caps className="mt-5">
{rx("futuros-humanos/r71973426b", "O futuro mais provável não é <em>o único futuro possível.</em>")}
</Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <p className="jf-body mt-8 max-w-[580px] text-ink-700">
{rx("futuros-humanos/r898bc2eaa", "Futuros Humanos reúne as perguntas que atravessam meu trabalho: o que ainda pode existir, o que vale a pena construir e do que precisamos nos tornar capazes para participar dessa construção.")}
</p>
          <ButtonRow className="mt-10">
            <ButtonLink href="#espiral" size="lg">
{rx("futuros-humanos/r4a970d17b", "Explore a Espiral")}
</ButtonLink>
            <ButtonLink href="/palestras" variant="secondary" size="lg">
{rx("futuros-humanos/r282d11cb0", "Conheça a palestra")}
</ButtonLink>
          </ButtonRow>
        </div>
      </Container>
      <div className="relative h-[90vw] max-h-[560px] lg:hidden">
        <Photo src={img("futuros-humanos/f96c13fb35", "/images/ensaio/home-01-abertura-horizontal.webp")} alt={tx("futuros-humanos/bcd05f0d79", "Juliana de preto diante de uma paisagem ampla ao entardecer.")} sizes="100vw" className="absolute inset-0 jf-paper-edge" imgClassName="object-[74%_44%]" />
      </div>
    </Section>
  );
}

/* ───────────────────────── F02 — O AUTOMÁTICO ───────────────────────── */
export function FHAutomatico() {
  const collage = [
    { src: img("futuros-humanos/514e7f8460", "/images/ensaio/contexto-tecnologia-humana.webp"), alt: tx("futuros-humanos/04b9b9bd81", "Mãos usando um notebook ao lado de caderno e café."), c: "col-span-6 row-span-5 -rotate-2" },
    { src: img("futuros-humanos/028ea3a0ab", "/images/ensaio/contexto-cidade-movimento.webp"), alt: tx("futuros-humanos/3b0ab1ae12", "Pessoas caminhando pela cidade, com movimento suavemente desfocado."), c: "col-span-6 row-span-5 rotate-2" },
    { src: img("futuros-humanos/aa10256b36", "/images/ensaio/contexto-celular-cotidiano.webp"), alt: tx("futuros-humanos/9d39509756", "Mão segurando um celular próximo a um caderno sobre a mesa."), c: "col-span-8 col-start-3 row-span-5 -rotate-1" },
  ];
  return (
    <Section label={tx("futuros-humanos/0ae6111fff", "O automático também constrói futuros")}>
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <Display size="lg">
{rx("futuros-humanos/r942d8de4d", "O automático também <em>constrói futuros.</em>")}
</Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 max-w-[560px] text-ink-700">
            <p>
{rx("futuros-humanos/r1743ec405", "Uma meta recompensa um comportamento. Uma decisão adiada mantém uma situação. Uma rotina ocupa o espaço que seria de outra coisa.")}
</p>
            <p>
{rx("futuros-humanos/r6dd1470da", "Enquanto damos conta do presente, ajudamos alguns caminhos a ganhar força.")}
</p>
            <p>
{rx("futuros-humanos/r0ef5f2a44", "Nem toda repetição é um problema. Há hábitos que sustentam cuidado, confiança e competência. A questão é perceber quais ainda servem ao que queremos construir.")}
</p>
          </Body>
          <h3 className="mt-10 max-w-[560px] border-l-[3px] border-red-brand pl-5 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
{rx("futuros-humanos/r1501bb28e", "Se continuarmos assim, <em>o que estamos ajudando a tornar mais provável?</em>")}
</h3>
        </div>
        <div className="relative">
          <div className="grid auto-rows-[40px] grid-cols-12 gap-3 sm:auto-rows-[52px]">
            {collage.map((p) => (
              <div
                key={p.src}
                className={`relative overflow-hidden border-[6px] border-cream-50 bg-cream-50 shadow-[0_12px_30px_-18px_rgba(0,0,0,.55)] ${p.c}`}
              >
                <Photo src={p.src} alt={p.alt} sizes="(min-width:1024px) 25vw, 50vw" className="absolute inset-0" />
              </div>
            ))}
          </div>
          <StickyNote className="absolute -bottom-6 right-2 hidden sm:block" rotate={4}>
{rx("futuros-humanos/rd9458402c", "Uma terça-feira qualquer.")}
</StickyNote>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── F03 — ABRIR O CAMPO ───────────────────────── */
export function FHTese() {
  const types = [
    {
      t: tx("futuros-humanos/ed5d4ef4ec", "Prováveis"),
      d: tx("futuros-humanos/35405f07af", "Futuros considerados mais propensos a acontecer, segundo as evidências e premissas adotadas."),
      dot: "bg-wine-700",
    },
    {
      t: tx("futuros-humanos/111b51a3de", "Plausíveis"),
      d: tx("futuros-humanos/9d1a1340f4", "Futuros para os quais conseguimos descrever caminhos coerentes com o conhecimento disponível."),
      dot: "bg-blush-200 ring-1 ring-red-brand/40",
    },
    {
      t: tx("futuros-humanos/c19897df17", "Possíveis"),
      d: tx("futuros-humanos/4be191f4b2", "Um campo mais amplo do que consideramos capaz de acontecer, incluindo mudanças e descobertas que ainda não compreendemos por inteiro."),
      dot: "bg-blush-100 ring-1 ring-red-brand/25",
    },
    {
      t: tx("futuros-humanos/f7055fa4b9", "Preferíveis"),
      d: tx("futuros-humanos/0394227516", "Futuros que pessoas ou grupos consideram desejáveis, segundo valores e contextos que podem divergir."),
      dot: "border-2 border-dashed border-red-brand",
    },
  ];
  return (
    <Section label={tx("futuros-humanos/325a9b6cc7", "Abrir o campo dos futuros")} id="tese">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <Display size="lg">
{rx("futuros-humanos/rf395c0ae5", "Aquilo que existe não esgota aquilo que pode existir.")}
</Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 max-w-[560px] text-ink-700">
            <p>
{rx("futuros-humanos/r55456a895", "Pensar futuros amplia o campo antes da escolha. O que parece provável merece atenção, mas não encerra a investigação.")}
</p>
            <p>
{rx("futuros-humanos/r80f023772", "Quando imaginamos apenas continuidade, procuramos no presente aquilo que confirma esse caminho. Considerar outras possibilidades pode nos ajudar a perceber perguntas e escolhas que antes passavam despercebidas.")}
</p>
          </Body>
          <figure className="relative mx-auto mt-12 max-w-[480px]">
            <FuturesDiagram />
            <figcaption className="mt-4 text-[14px] leading-relaxed text-ink-500">
{rx("futuros-humanos/r8ce467b4d", "Possível, plausível e provável organizam diferentes avaliações sobre o que pode acontecer. Preferível expressa o que desejamos: pode se sobrepor a essas regiões, inclusive ao provável. O desenho é uma simplificação para apoiar a conversa.")}
</figcaption>
          </figure>
        </div>

        <div>
          <h3 className="jf-eyebrow text-[14px] text-red-brand">
{rx("futuros-humanos/r3c3d68a69", "Quatro maneiras de olhar para futuros")}
</h3>
          <dl className="mt-6 divide-y divide-ink-900/15 border-y border-ink-900/15">
            {types.map((x) => (
              <div key={x.t} className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="flex items-center gap-3">
                  <span className={`h-4 w-4 shrink-0 rounded-full ${x.dot}`} aria-hidden />
                  <span className="font-serif text-[22px] uppercase tracking-[0.06em]">{rich(x.t)}</span>
                </dt>
                <dd className="text-ink-800">{rich(x.d)}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 font-serif text-[clamp(22px,1.9vw,28px)] font-medium leading-snug text-red-brand">
{rx("futuros-humanos/r9e81206fd", "Preferível para quem? Com quais consequências?")}
</p>
          <p className="jf-body mt-3 text-ink-700">
{rx("futuros-humanos/rd6a52c31d", "Pensar possibilidades também exige discutir valores.")}
</p>
          <p className="mt-10 max-w-[620px] border-t border-ink-900/15 pt-5 text-[14px] leading-relaxed text-ink-500">
            {tx("futuros-humanos/42b546086a", "Essas categorias não são criação minha. São referências dos Estudos de Futuros, muitas vezes representadas no desenho conhecido como cone de futuros. Uso essas distinções para organizar a conversa.")}{" "}
            {tx("futuros-humanos/c1e9362824", "Fonte:")}{" "}
            <a
              href="https://thevoroscope.com/2017/02/24/the-futures-cone-use-and-history/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-brand underline underline-offset-2"
            >
{rx("futuros-humanos/r7845382d8", "Joseph Voros, “The Futures Cone, use and history”")}
</a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── F04 — CAPACIDADE, DIREÇÃO E AUTORIA ───────────────────────── */
export function FHFerramentas() {
  const questions = [tx("futuros-humanos/251a90907e", "O que queremos ampliar?"), tx("futuros-humanos/69e6508656", "O que precisamos preservar?"), tx("futuros-humanos/1523b58667", "Quem será afetado?")];
  return (
    <Section tone="dark" padded={false} label={tx("futuros-humanos/0b172959a8", "Capacidade, direção e autoria")}>
      <div className="grid lg:grid-cols-[62%_38%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[940px] lg:pr-12">
          <Display size="md">
{rx("futuros-humanos/ra3f297f8f", "Quanto mais podemos fazer, <em>mais importa perguntar para quê.</em>")}
</Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} color="var(--jf-red-400)" />
          <Body className="mt-10 max-w-[620px] text-cream-50/85">
            <p>
{rx("futuros-humanos/rcca6a8a64", "Eu gosto de tecnologia. Ela amplia nossa capacidade de criar, compreender e colocar ideias no mundo.")}
</p>
            <p>
{rx("futuros-humanos/rdad7559b5", "Mas fazer algo com mais rapidez não resolve a escolha do objetivo. Automatizar uma decisão não elimina a responsabilidade pelos critérios e pelas consequências.")}
</p>
          </Body>
          <ul className="mt-8 space-y-2 font-serif text-[clamp(21px,1.8vw,26px)] leading-snug text-cream-50">
            {questions.map((q) => (
              <li key={q} className="flex gap-3">
                <span className="mt-[0.75em] h-px w-5 shrink-0 bg-red-bright" aria-hidden />
                <span>{rich(q)}</span>
              </li>
            ))}
          </ul>
          <p className="jf-lead mt-12 max-w-[760px] border-l-[3px] border-red-bright pl-5">
{rx("futuros-humanos/reb2e6526a", "Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.")}
</p>
          <div className="mt-12 max-w-[620px] border-t border-cream-50/20 pt-10">
            <h3 className="font-serif text-[clamp(22px,1.9vw,27px)] leading-snug">
{rx("futuros-humanos/r9d633eb8c", "Autoria, para mim, é <em>permanecer presente naquilo que ajudamos a construir.</em>")}
</h3>
            <p className="jf-body mt-4 text-cream-50/80">
{rx("futuros-humanos/rc144368ee", "Podemos delegar trabalho e contar com outras pessoas e ferramentas, mantendo atenção à direção, ao julgamento e à responsabilidade.")}
</p>
          </div>
        </Container>
        <div className="relative min-h-[460px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("futuros-humanos/ae24280b34", "/images/ensaio/ju-estudo-fones.webp")}
            alt={tx("futuros-humanos/034b972f41", "Juliana estudando com fones de ouvido, livro e notebook.")}
            sizes="(min-width:1024px) 38vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="circle" className="absolute left-[6%] top-[6%] h-[70%] w-[90%] opacity-90" width={2.5} color="var(--jf-red-400)" />
        </div>
      </div>
    </Section>
  );
}
