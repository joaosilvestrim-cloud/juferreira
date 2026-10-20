import { getPublishedArticles } from "@/lib/content";
import { photoPosition } from "@/lib/photo-position";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { SpiralMark, Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, Eyebrow, HandNote, Lead, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES, LINKS } from "@/lib/site";

import { tx, img, lazy } from "@/lib/editable";
/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
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
            {tx("home/46a7d85a8c", "Futuros, tecnologia e transformação humana para quem não quer apenas assistir ao que vem depois.")}</p>
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

/* ───────────────────────── BLOCO 2 — A TENSÃO ───────────────────────── */
export function HomeTensao() {
  return (
    <Section tone="dark" padded={false} label={tx("home/cf629217fd", "A tensão")}>
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="relative z-10 py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:pr-6">
          <Display caps size="md">
            {tx("home/91e55a89bd", "O mundo está mudando.")}<br />
            {tx("home/49c6d000dc", "Mas")} <Em>{tx("home/20d926220a", "mudança")}</Em> {tx("home/2e8aad7bb5", "não é")} <Em>{tx("home/72d1a6e7a0", "direção.")}</Em>
          </Display>
          <Body className="mt-10 max-w-[560px] text-cream-50/85">
            <p>{tx("home/d8bcb5c3b6", "Tecnologia acelera. Ferramentas ganham poder. O trabalho muda. Organizações se transformam. Decisões são automatizadas.")}</p>
            <p>{tx("home/75aebf53b1", "Nunca tivemos tantas possibilidades de construir, transformar e ampliar aquilo que somos capazes de fazer.")}</p>
            <p>
              {tx("home/386165447f", "Mas existe uma diferença entre aquilo que")} <strong className="font-semibold text-cream-50">{tx("home/9e6ae4faf5", "pode")}</strong> {tx("home/41efb73ff7", "ser feito e aquilo que")} <strong className="font-semibold text-cream-50">{tx("home/f16c70e356", "vale a pena")}</strong> {tx("home/5d0b4fb900", "fazer.")}</p>
            <p>{tx("home/6b573a3a66", "E talvez essa seja uma das perguntas mais importantes do nosso tempo:")}</p>
          </Body>
          <span className="mt-10 block h-px w-20 bg-red-bright" aria-hidden />
          <Lead as="h3" className="mt-8 max-w-[520px] text-[clamp(30px,3vw,46px)]">
            {tx("home/9978704f6a", "O que queremos ajudar")} <Em>{tx("home/31f8084c8f", "a tornar possível?")}</Em>
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

/* ───────────────────────── BLOCO 3 — FUTUROS HUMANOS ───────────────────────── */
const MOVES = lazy(() => ([
  { name: "Imaginar", q: tx("home/d73997dfc9", "E se pudesse ser diferente?") },
  { name: "Escolher", q: tx("home/0f3018ac80", "O que queremos ajudar a tornar possível?") },
  { name: "Tornar-se", q: tx("home/dfd9eafaba", "Do que precisamos nos tornar capazes?") },
  { name: "Construir", q: tx("home/49bdb5651e", "O que podemos fazer agora para tornar esse futuro um pouco mais possível?") },
]));

/** Diagrama da Espiral com os 4 movimentos (desktop) — no mobile vira sequência vertical. */
export function SpiralDiagram({ className = "" }: { className?: string }) {
  const pos = [
    "left-[6%] top-[4%]",
    "right-[0%] top-[30%]",
    "left-[0%] top-[58%]",
    "right-[2%] bottom-[2%]",
  ];
  return (
    <div className={className}>
      <div className="relative hidden aspect-[1/1] w-full md:block">
        <div className="jf-breathe absolute inset-0">
          <SpiralMark className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2 opacity-90" />
        </div>
        {MOVES.map((m, i) => (
          <div key={m.name} className={`absolute max-w-[220px] rounded-md bg-cream-50/85 p-2 backdrop-blur-[2px] ${pos[i]}`}>
            <p className="flex items-center gap-2 font-serif text-[22px] uppercase tracking-[0.14em] text-red-brand">
              <span className="h-2.5 w-2.5 rounded-full bg-red-brand" aria-hidden />
              {m.name}
            </p>
            <p className="mt-1 font-serif text-[18px] leading-snug text-ink-800">{m.q}</p>
          </div>
        ))}
      </div>
      <ol className="relative space-y-7 border-l border-red-brand/40 pl-7 md:hidden">
        {MOVES.map((m, i) => (
          <li key={m.name} className="relative">
            <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-red-brand" aria-hidden />
            <p className="font-serif text-[20px] uppercase tracking-[0.14em] text-red-brand">
              {i + 1}. {m.name}
            </p>
            <p className="mt-1 font-serif text-[20px] leading-snug">{m.q}</p>
          </li>
        ))}
        <li aria-hidden className="text-2xl text-red-brand">↻</li>
      </ol>
    </div>
  );
}

export function HomeFuturos() {
  return (
    <Section label={tx("home/bc7e30f629", "Futuros Humanos")} id="futuros-humanos">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <div>
          <Eyebrow>{tx("home/0e48388695", "Futuros Humanos")}</Eyebrow>
          <Display size="lg" className="mt-6">
            {tx("home/daf49ac7e8", "Aquilo que existe não esgota aquilo que")} <Em italic>{tx("home/bfff714b38", "pode existir.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[580px] font-serif text-[19px] text-ink-800 [&_p+p]:mt-3">
            <p>{tx("home/5062ff8f7f", "O futuro mais provável não é necessariamente o único futuro possível.")}</p>
            <p>{tx("home/30c3bd43ce", "Não controlamos tudo o que vem depois.")}</p>
            <p>{tx("home/77d54de159", "Mas isso não significa que não participamos daquilo que vem depois.")}</p>
            <p className="font-semibold">{tx("home/738a23ff2b", "O automático também constrói futuros.")}</p>
            <p>{tx("home/b4712c019d", "Por isso, pensar futuro não é apenas perguntar: “O que vai acontecer?”")}</p>
            <p>
              {tx("home/9501d999e0", "É também perguntar:")} <strong className="font-semibold">{tx("home/8f728c4b93", "“O que queremos ajudar a tornar possível?”")}</strong>
            </p>
          </Body>
          <span className="mt-10 block h-px w-16 bg-red-brand" aria-hidden />
          <p className="jf-eyebrow mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-red-brand">
            {tx("home/8c1418188c", "Imaginar")} <span aria-hidden>→</span> {tx("home/d0f7ec3612", "Escolher")} <span aria-hidden>→</span> {tx("home/02d0b1840a", "Tornar-se")} <span aria-hidden>→</span>{" "}
            {tx("home/d1d0adf46d", "Construir")} <span aria-hidden>↻</span>
          </p>
          <p className="mt-4 font-serif text-[19px] text-ink-800">
            {tx("home/2dedb6168e", "Não é uma linha reta.")}<br />
            <strong className="font-semibold">{tx("home/3101562108", "Construímos futuros e somos construídos enquanto os construímos.")}</strong>
          </p>
          <ButtonLink href="/futuros-humanos" className="mt-10">
            {tx("home/2675ff3c6f", "Explore Futuros Humanos")}</ButtonLink>
        </div>
        <SpiralDiagram className="mx-auto w-full max-w-[640px]" />
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — JU FERREIRA ───────────────────────── */
function Icon({ name }: { name: "laptop" | "chart" | "people" | "circle" }) {
  const common = { fill: "none", stroke: tx("home/ca82c17913", "currentColor"), strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 48 40" className="h-10 w-12 text-ink-900" aria-hidden="true">
      {name === "laptop" && (
        <g {...common}>
          <rect x="9" y="6" width="30" height="20" rx="1.5" />
          <path d="M4 32h40l-3-6H7z" />
        </g>
      )}
      {name === "chart" && (
        <g {...common}>
          <path d="M8 34h32M12 34V24h5v10M21 34V18h5v16M30 34V12h5v22" />
          <path d="M10 18 22 9l6 4 10-8" className="text-red-brand" stroke="var(--jf-red-500)" />
        </g>
      )}
      {name === "people" && (
        <g {...common}>
          <circle cx="24" cy="10" r="4" />
          <circle cx="12" cy="15" r="3.4" />
          <circle cx="36" cy="15" r="3.4" />
          <path d="M16 32c0-5 3.6-9 8-9s8 4 8 9M5 33c0-4 3-7 7-7 1.6 0 3 .5 4 1.3M43 33c0-4-3-7-7-7-1.6 0-3 .5-4 1.3" />
        </g>
      )}
      {name === "circle" && (
        <path
          d="M27 5C15 4 8 12 8 21s7 15 16 15 16-7 16-15c0-6-3-11-8-13"
          fill="none"
          stroke="var(--jf-red-500)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function HomeJu() {
  const facts: { icon: "laptop" | "chart" | "people" | "circle"; a: string; b: string }[] = [
    { icon: "laptop", a: tx("home/c749cd2d37", "Tecnologia"), b: tx("home/697d373b97", "vivida.") },
    { icon: "chart", a: tx("home/fdd5c54e86", "Empresas"), b: tx("home/66cb8bf65e", "construídas.") },
    { icon: "people", a: tx("home/7683a76bd5", "Humanidade"), b: tx("home/a109377803", "em primeiro plano.") },
    { icon: "circle", a: tx("home/6822fca0ab", "Futuros"), b: tx("home/8e3f84c242", "em construção.") },
  ];
  return (
    <Section padded={false} label={tx("home/df4a46c48a", "Ju Ferreira")}>
      <div className="grid lg:grid-cols-[56%_44%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pr-12">
          <Display size="lg">
            {tx("home/b611194e6d", "Essa visão foi construída por dentro da")} <Em>{tx("home/705ea6cc3a", "vida real.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[640px] text-ink-700">
            <p>{tx("home/367dd3b6ad", "Engenheira de formação, Ju Ferreira passou boa parte da vida profissional dentro da tecnologia.")}</p>
            <p>
              {tx("home/a15a8fe4fe", "Viveu grandes empresas, metas, vendas, transformação digital, liderança de equipes e construção de negócios. Empreendeu, criou empresas, acertou, errou, perdeu dinheiro, mudou de direção e começou de novo mais de uma vez.")}</p>
            <p>{tx("home/fa0fd51f8b", "Então virou mãe.")}</p>
            <p>
              {tx("home/b0c6599630", "E a maternidade mudou sua relação com o futuro de um jeito que nenhum planejamento estratégico conseguiria.")}</p>
            <p>
              {tx("home/cf1ef898c9", "O futuro deixou de ser apenas o lugar onde ela viveria. Passou a ser também o mundo onde suas filhas vão viver.")}</p>
            <p>
              {tx("home/4a41e19275", "Foi nesse encontro entre tecnologia, construção, transformação humana e vida real que nasceu a lente que hoje organiza grande parte do seu trabalho.")}</p>
          </Body>
          <ul className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-ink-900/15">
            {facts.map((f) => (
              <li key={f.a} className="flex flex-col items-center px-3 text-center">
                <Icon name={f.icon} />
                <p className="mt-3 text-[15px] font-medium leading-tight">
                  {f.a}
                  <br />
                  {f.b}
                </p>
              </li>
            ))}
          </ul>
          <ButtonLink href="/ju" className="mt-12">
            {tx("home/48a6d2ba38", "Conheça Ju Ferreira")}</ButtonLink>
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

/* ───────────────────────── BLOCO 5 — PARA ORGANIZAÇÕES ───────────────────────── */
export function HomeOrganizacoes() {
  const formats = [
    {
      t: tx("home/782079c486", "Palestras"),
      d: tx("home/52914fa224", "Para eventos, convenções, encontros de liderança e experiências corporativas que precisam abrir novas perguntas, ampliar perspectivas e provocar conversa."),
    },
    { t: tx("home/2ad020a7a2", "Workshops"), d: tx("home/a5171c248d", "Para transformar reflexão em escolha, alinhamento e movimento.") },
    {
      t: tx("home/af780e70cf", "Experiências e projetos customizados"),
      d: tx("home/3b2a8fa27d", "Para desafios que pedem mais profundidade, construção conjunta e soluções que não cabem em um formato pronto."),
    },
  ];
  return (
    <Section padded={false} tone="cream" label={tx("home/f06ed0606e", "Para organizações")}>
      <div className="grid lg:grid-cols-[58%_42%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:pr-12">
          <Display size="lg">
            {tx("home/aece101c52", "Leve essa conversa para")} <Em>{tx("home/75eae50bd7", "sua organização.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[640px] text-ink-700">
            <p>{tx("home/18e482717d", "Algumas perguntas merecem sair do palco, entrar na sala de reunião e provocar decisões reais.")}</p>
            <p>
              {tx("home/8be24e642e", "A atuação de Ju Ferreira pode assumir diferentes formatos, a partir do contexto, das perguntas e dos desafios de cada organização.")}</p>
          </Body>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {formats.map((f) => (
              <div key={f.t}>
                <Dash />
                <Title className="mt-4 uppercase">{f.t}</Title>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{f.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-ink-900/15 pt-8">
            <p className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">
              {tx("home/0526db410d", "Futuros Humanos é a palestra-mãe.")}<br />
              <Em>{tx("home/78a0893c34", "Mas a conversa não precisa ser sempre a mesma.")}</Em>
            </p>
            <ButtonRow className="mt-8">
              <ButtonLink href="/palestras">{tx("home/d591a4f3e5", "Conheça palestras e workshops")}</ButtonLink>
              <ButtonLink href={CONTACT_ROUTES.organizacoes} variant="secondary">
                {tx("home/1f8630b410", "Conte o que sua organização está tentando resolver")}</ButtonLink>
            </ButtonRow>
          </div>
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

/* ───────────────────────── BLOCO 6 — PROVA / JU HANDS-ON ───────────────────────── */
export function HomeProva() {
  const proof = [
    {
      t: tx("home/6014bd69f0", "Tecnologia e mercado"),
      body: (
        <>
          {tx("home/b490a4c197", "Na Oracle, alcancei")} <strong className="text-red-brand"><span data-count="486">{tx("home/5642586c85", "486")}</span>{tx("home/e8837ae65c", "% da meta anual")}</strong> {tx("home/0fb2ecd230", "e gerei mais de")}{" "}
          <strong className="text-red-brand">{tx("home/e65e64d096", "US$")} <span data-count="20">{tx("home/06be4d5e0b", "20")}</span> {tx("home/d686c14c91", "milhões em receita")}</strong>.
        </>
      ),
    },
    { t: tx("home/57841e5d1e", "Empreendedorismo e construção"), body: <>{tx("home/124326e54f", "Cofundei e liderei a A2F por")} <strong className="text-red-brand">{tx("home/c6180a107c", "mais de")} <span data-count="13">{tx("home/a0cd698ae2", "13")}</span> {tx("home/3356c6e4ef", "anos")}</strong>.</> },
    {
      t: tx("home/c06c3ffecf", "Negócios no presente"),
      body: (
        <>
          {tx("home/cac64d3bfa", "Continuo construindo negócios como HomeCare+ e Ayumana. E sigo próxima do mercado, dos clientes e das decisões que precisam funcionar fora do papel.")}</>
      ),
    },
  ];
  const collage = [
    { src: img("home/f43d7ba1cd", "/images/ensaio/palestras-palco-frente.webp"), alt: tx("home/ac9fe70a61", "Cena ilustrativa de Juliana falando no palco, vista de frente."), c: "col-span-7 row-span-5 rotate-[-1.5deg]" },
    { src: img("home/c7b0811878", "/images/ensaio/home-04b-reuniao-notebook.webp"), alt: tx("home/62601894df", "Cena ilustrativa de Juliana em conversa de trabalho, ao lado do notebook."), c: "col-span-5 row-span-5 rotate-[1deg]" },
    { src: img("home/0bc2080b2d", "/images/ensaio/home-04c-quadro-post-its.webp"), alt: tx("home/d9cfe1aff2", "Cena ilustrativa de Juliana junto a um quadro com diagrama e post-its."), c: "col-span-6 row-span-5 rotate-[1.2deg]" },
    { src: img("home/7192613473", "/images/ensaio/home-04d-conversa-equipe.webp"), alt: tx("home/7c15345dfd", "Cena ilustrativa de Juliana conversando com uma equipe à mesa."), c: "col-span-6 row-span-5 -rotate-1" },
  ];
  return (
    <Section label={tx("home/8e46bdf2b9", "Prova")}>
      <Container className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <Display size="lg" caps>
            {tx("home/42041668f3", "Eu não estudo")} <Em>{tx("home/01ac64a45f", "futuros de fora.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
              {tx("home/dadcad99f2", "Eu estudo futuros. Mas continuo vendendo. Liderando. Construindo empresas. Tomando decisões. Errando. Mudando de direção. Começando de novo.")}</p>
            <p>
              {tx("home/cd18028e0e", "Porque, para mim, futuro não é um exercício de PowerPoint.")}{" "}
              <strong className="font-semibold text-ink-900">{tx("home/43c522f79f", "É alguma coisa que toca o mundo real.")}</strong>
            </p>
            <p>
              {tx("home/b4640881f2", "Ao longo de mais de duas décadas, trabalhei entre tecnologia, grandes empresas, vendas, empreendedorismo e liderança.")}</p>
          </Body>
          <Body className="mt-10 max-w-[600px] text-ink-700">
            <p>{tx("home/7d00d8e3dc", "Quando falo sobre transformação, conheço o peso de tentar transformar.")}</p>
            <p>{tx("home/7b35df13f0", "Quando falo sobre liderança, continuo liderando.")}</p>
            <p>{tx("home/8f4b8c3e81", "Quando falo sobre tecnologia, continuo dentro dela.")}</p>
            <p>
              {tx("home/61a65022a2", "Quando falo sobre possibilidades, sei que algumas sobrevivem à realidade — e outras quebram no primeiro encontro com ela.")}</p>
          </Body>
        </div>
        <div className="relative">
          <Stroke shape="loop" className="absolute -inset-6 h-[calc(100%+48px)] w-[calc(100%+48px)]" width={2.5} />
          <div className="relative grid auto-rows-[44px] grid-cols-12 gap-3 sm:auto-rows-[60px]">
            {collage.map((p) => (
              <div key={p.src} className={`relative overflow-hidden shadow-[0_10px_30px_-18px_rgba(0,0,0,.5)] ${p.c}`}>
                <Photo src={p.src} alt={p.alt} sizes="(min-width:1024px) 25vw, 50vw" className="absolute inset-0" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-14">
        <div className="grid gap-10 border-t border-ink-900/15 pt-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink-900/15">
          {proof.map((p, i) => (
            <div key={p.t} className={i ? "sm:pl-8" : "sm:pr-8"}>
              <Dash />
              <p className="mt-3 font-serif text-[22px] uppercase leading-tight tracking-wide">{p.t}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-700">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-16 lg:mt-20">
        <div className="grid gap-8 border-t border-ink-900/15 pt-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <Display size="md">
            {tx("home/1f7d90a781", "É desse lugar que eu falo sobre")} <Em>{tx("home/37b07221b6", "futuros.")}</Em>
          </Display>
          <div>
            <p className="jf-body text-ink-700">
              {tx("home/c47c5379fc", "Onde possibilidade encontra limite.")}<br />
              {tx("home/ab58f7212a", "Onde escolha encontra consequência.")}<br />
              {tx("home/bac7701579", "Onde tecnologia encontra gente.")}<br />
              {tx("home/da1694d2e3", "Onde ideia encontra realidade.")}</p>
            <ButtonLink href="/ju" className="mt-8">
              {tx("home/f5ac27511f", "Conheça a trajetória da Ju")}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 7 — PARA PESSOAS ───────────────────────── */
export function HomePessoas() {
  const doors = [
    {
      img: img("home/40a456fd03", "/images/ensaio/contexto-caminhos-escolhas.webp"),
      t: (
        <>
          {tx("home/1ce86bc468", "EPIC")}<Em>{tx("home/731de42408", "247")}</Em>
        </>
      ),
      s: tx("home/7d4155d111", "Quando perceber não basta e você precisa começar a se mover."),
      d: tx("home/397a5eac58", "Uma experiência prática para transformar intenção em movimento no mundo real."),
      cta: tx("home/6460151f02", "Conheça o EPIC247"),
      href: LINKS.epic247,
    },
    {
      img: img("home/994638fdda", "/images/ensaio/home-06-ideias-horizontal.webp"),
      t: (
        <>
          {tx("home/1405377896", "Uma Terça-feira")} <Em>{tx("home/0f08022033", "Qualquer")}</Em>
        </>
      ),
      s: tx("home/0f80da09a3", "Porque futuro também se constrói no meio da vida real."),
      d: tx("home/32ee06a61d", "Uma conversa semanal sobre futuros, tecnologia, humanidade e aquilo que estamos construindo enquanto damos conta da vida."),
      cta: tx("home/3540b5a5af", "Assine a newsletter"),
      href: LINKS.newsletter,
    },
    {
      img: img("home/47041f9f8f", "/images/ensaio/contexto-livros-janela.webp"),
      t: <Em>{tx("home/000de7a596", "Ideias")}</Em>,
      s: tx("home/e0735552ea", "Para continuar pensando."),
      d: tx("home/82a7d6f406", "Artigos e reflexões para enxergar possibilidades, questionar o automático e aprofundar as perguntas que importam."),
      cta: tx("home/3a27ba6939", "Explore as ideias"),
      href: "/ideias",
    },
  ];
  return (
    <Section padded={false} label={tx("home/26bb507bed", "Para pessoas")}>
      <div className="grid lg:grid-cols-[38%_62%]">
        <div className="relative min-h-[460px] lg:order-none lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("home/c195718d6d", "/images/ensaio/home-05-escrita-vertical.webp")}
            alt={tx("home/27faa97ca3", "Juliana com caderno, caneta e café à mesa, em retrato vertical.")}
            sizes="(min-width:1024px) 38vw, 100vw"
            className="absolute inset-0 jf-fade-right"
            imgClassName="object-[50%_40%]"
          />
        </div>
        <Container className="py-[var(--jf-section-y)] lg:ml-0 lg:max-w-[900px] lg:pl-12">
          <div className="relative">
            <Display size="lg">
              {tx("home/a545e45982", "E se essa conversa for sobre a")} <Em>{tx("home/6368c874aa", "sua própria vida?")}</Em>
            </Display>
            <HandNote className="mt-6 text-red-brand 2xl:absolute 2xl:-right-6 2xl:-top-10 2xl:mt-0 2xl:max-w-[200px]" rotate={-5}>
              {tx("home/9c94a56def", "Limites existem.")}<br />
              {tx("home/e276d1fec5", "Potência também.")}</HandNote>
          </div>
          <Body className="mt-8 max-w-[640px] text-ink-700">
            <p>{tx("home/a5239616c4", "Construir futuros não é assunto apenas de empresas ou futuristas.")}</p>
            <p>
              {tx("home/1169ce503f", "Todos os dias fazemos escolhas sobre aquilo que sustentamos, abandonamos, aprendemos, repetimos e tentamos transformar.")}</p>
            <p>
              {tx("home/871cfca288", "Nem tudo está nas nossas mãos. Mas entre controlar tudo e simplesmente aceitar existe um espaço enorme.")}{" "}
              <strong className="font-medium text-red-brand">{tx("home/d32857c194", "É nesse espaço que a gente participa.")}</strong>
            </p>
          </Body>

          <div className="mt-12 flex items-center gap-5">
            <h3 className="jf-eyebrow shrink-0 text-[14px] tracking-[0.3em] text-ink-900">{tx("home/c231b6d79c", "Por onde eu começo?")}</h3>
            <span className="h-px flex-1 bg-ink-900/20" aria-hidden />
          </div>
          <ul className="mt-4 divide-y divide-ink-900/15">
            {doors.map((d) => (
              <li key={d.cta} className="grid gap-5 py-6 sm:grid-cols-[150px_1fr] md:grid-cols-[150px_1fr_auto] md:items-center">
                <div className="relative hidden aspect-[16/9] overflow-hidden rounded-sm sm:block">
                  <Image src={d.img} alt="" fill sizes="150px" className="object-cover" style={{ objectPosition: photoPosition(d.img) }} />
                </div>
                <div>
                  <p className="font-serif text-[26px] uppercase leading-none">{d.t}</p>
                  <p className="mt-2 text-[15px] font-medium text-red-brand">{d.s}</p>
                  <p className="mt-1 text-[15px] text-ink-700">{d.d}</p>
                </div>
                <ButtonLink href={d.href} variant="secondary" size="sm" className="w-fit sm:col-start-2 md:col-start-auto">
                  {d.cta}
                </ButtonLink>
              </li>
            ))}
          </ul>
          <ButtonLink href="/pessoas" size="lg" className="mt-8">
            {tx("home/929c4c6feb", "Comece por aqui")}</ButtonLink>
        </Container>
      </div>
    </Section>
  );
}

/* ───────────────────────── BLOCO 8 — IDEIAS ───────────────────────── */
export async function HomeIdeias() {
  // artigos publicados no painel; sem publicações, mostra a arquitetura editorial ilustrativa
  const published = (await getPublishedArticles()).slice(0, 3);
  const TAG: Record<string, string> = { futuros: tx("home/b75169fd74", "Futuros"), tecnologia: tx("home/0bb7b0d8b8", "Tecnologia"), escolhas: tx("home/222c7f484b", "Escolhas"), lideranca: tx("home/0e929d5aba", "Liderança"), "vida-real": tx("home/6c64a27229", "Vida real") };
  const illustrative = [
    { img: img("home/9bfb8b5b1d", "/images/ensaio/contexto-tecnologia-humana.webp"), tag: tx("home/c4af189007", "Tecnologia"), t: tx("home/7c4c6af003", "Qual futuro estamos construindo quando tudo fica mais fácil?") },
    { img: img("home/52d0043244", "/images/ensaio/ju-caminhada-movimento.webp"), tag: tx("home/0705616711", "Humanidade"), t: tx("home/41d05cd461", "O que a vida real nos ensina sobre transformação?") },
    { img: img("home/9764df4f66", "/images/ensaio/contexto-caderno-escolhas.webp"), tag: tx("home/8230e4c95c", "Escolhas"), t: tx("home/81649dcd1a", "Disciplina não é rigidez. É cuidado com o futuro que importa.") },
  ];
  const articles = published.length
    ? published.map((a, i) => ({ img: a.cover ?? illustrative[i % 3].img, tag: TAG[a.territories[0]] ?? "Ideias", t: a.title, href: `/ideias/${a.slug}` }))
    : illustrative.map((a) => ({ ...a, href: "/ideias" }));
  return (
    <Section label={tx("home/5fd98951f5", "Ideias")} className="pt-0 lg:pt-0">
      <div className="grid lg:grid-cols-[55%_45%]">
        <Container className="pt-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[760px] lg:pr-12">
          <Display size="lg">
            {tx("home/9204f5924e", "Algumas ideias merecem")} <Em>{tx("home/b8e6596b82", "mais tempo.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
              {tx("home/49dcb33ec2", "Nem toda pergunta cabe em um post.")}<br />
              {tx("home/d18a2fe8c5", "Nem toda reflexão termina numa palestra.")}<br />
              {tx("home/357c77414a", "Algumas precisam de espaço para amadurecer, contradizer, aprofundar e continuar.")}</p>
          </Body>
        </Container>
        <div className="relative mt-10 min-h-[300px] lg:mt-0">
          <Photo
            src={img("home/f14fccd758", "/images/ensaio/home-06-ideias-horizontal.webp")}
            alt={tx("home/e7eab3951d", "Livros, caderno aberto, caneta e café sobre uma mesa de madeira.")}
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-fade-left"
          />
          <HandNote className="absolute bottom-6 right-6 max-w-[180px] text-ink-900 md:right-10" rotate={-6}>
            {tx("home/3eaf71ba2c", "Perguntas também constroem futuros.")}</HandNote>
        </div>
      </div>
      <Container className="mt-14 grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:gap-0 lg:divide-x lg:divide-ink-900/15">
        <div className="lg:pr-12">
          <Dash />
          <Title as="h3" className="mt-3 text-[30px] uppercase">
            {tx("home/dd139a9c84", "Artigos")}</Title>
          <p className="mt-1 font-medium text-red-brand">{tx("home/cabe05ee53", "Para pensar com mais profundidade.")}</p>
          <p className="mt-2 text-ink-700">
            {tx("home/598c7b8fbf", "Ensaios e investigações sobre futuros, tecnologia, humanidade, escolhas, liderança e transformação.")}</p>
          <ul className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6" data-placeholder={published.length ? undefined : "artigos"}>
            {articles.map((a) => (
              <li key={a.t}>
                <Link href={a.href} className="group block">
                  <div className="relative aspect-[12/5] overflow-hidden rounded-sm">
                    <Image src={a.img} alt="" fill sizes="(min-width:640px) 20vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: photoPosition(a.img) }} />
                  </div>
                  <p className="jf-eyebrow mt-4 text-[11px] text-ink-500">{a.tag}</p>
                  <p className="mt-2 font-serif text-[21px] leading-snug group-hover:text-red-brand">{a.t}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/ideias" variant="secondary" size="sm" className="mt-8">
            {tx("home/2b18add681", "Leia os artigos")}</ButtonLink>
        </div>
        <div id="newsletter" className="lg:pl-12">
          <Dash />
          <Title as="h3" className="mt-3 text-[30px] uppercase">
            {tx("home/ee1adfd09e", "Uma Terça-feira Qualquer")}</Title>
          <p className="mt-2 font-medium text-red-brand">{tx("home/4355dea148", "Porque o futuro também se constrói no meio da vida real.")}</p>
          <p className="mt-3 text-ink-700">
            {tx("home/d202a79fe4", "Uma conversa semanal sobre aquilo que estamos construindo enquanto trabalhamos, escolhemos, erramos, recomeçamos e simplesmente tentamos dar conta de uma terça-feira qualquer.")}</p>
          <ButtonLink href={LINKS.newsletter} className="mt-8">
            {tx("home/8ddaff653d", "Assine Uma Terça-feira Qualquer")}</ButtonLink>
        </div>
      </Container>
      <Container className="mt-16">
        <div className="flex flex-col gap-6 border-t border-ink-900/15 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="jf-lead">{tx("home/d4a4fe5acf", "Primeiro vem a pergunta. Depois vem o conteúdo.")}</p>
          <Link href="/ideias" className="group inline-flex items-center gap-3 font-medium text-red-brand">
            {tx("home/f0e90c5fe6", "Explore todas as ideias")} <ArrowIcon />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — ENCERRAMENTO ───────────────────────── */
export function HomeEncerramento() {
  return (
    <Section tone="wine" label={tx("home/705038aee4", "Encerramento")}>
      <div className="pointer-events-none absolute -right-[18%] top-1/2 w-[85%] max-w-[1100px] -translate-y-1/2 opacity-80 mix-blend-screen max-md:-right-1/2 max-md:w-[140%] max-md:opacity-40" aria-hidden>
        <SpiralMark className="h-auto w-full" />
      </div>
      <Container className="relative">
        <Display size="xl" className="max-w-[900px]">
          {tx("home/130bf9e337", "Temos futuros para")} <Em>{tx("home/9d01ec24ee", "construir.")}</Em>
        </Display>
        <Body className="mt-10 max-w-[620px] text-cream-50/85">
          <p>
            {tx("home/cabc2abe17", "Nem todos estarão nas nossas mãos.")}<br />
            {tx("home/c7b83651dc", "Nem todos acontecerão como imaginamos.")}</p>
          <p>
            {tx("home/23bd2a67f7", "Há limites. Há acaso. Há outras pessoas.")}<br />
            {tx("home/d1ef0ab355", "Há um mundo inteiro participando.")}</p>
          <p>
            {tx("home/f1808212ec", "Mas entre aquilo que existe e aquilo que ainda pode existir, há um espaço de escolha, participação e construção.")}</p>
        </Body>
        <p className="mt-6 text-[19px] font-semibold text-red-bright">{tx("home/60a694cc48", "É nesse espaço que a gente entra.")}</p>

        <div className="mt-14 grid max-w-[960px] gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-cream-50/25">
          <div className="md:pr-12">
            <Dash className="text-red-bright" />
            <Title className="mt-3 text-[28px] uppercase">{tx("home/4174ad54d9", "Para organizações")}</Title>
            <p className="mt-3 text-cream-50/80">
              {tx("home/d300af0c03", "Leve essa conversa para onde decisões, pessoas e futuros estão sendo construídos todos os dias.")}</p>
            <ButtonLink href={CONTACT_ROUTES.organizacoes} className="mt-8">
              {tx("home/2a3bae4c3b", "Leve a Ju para sua organização")}</ButtonLink>
          </div>
          <div className="md:pl-12">
            <Dash className="text-red-bright" />
            <Title className="mt-3 text-[28px] uppercase">{tx("home/1f3a746b54", "Para pessoas")}</Title>
            <p className="mt-3 text-cream-50/80">
              {tx("home/acb71b8caf", "Você não precisa saber exatamente onde quer chegar para começar a perceber o que pode ser diferente.")}</p>
            <ButtonLink href="/pessoas" variant="ghost-light" className="mt-8">
              {tx("home/0c79ef2b57", "Comece por aqui")}</ButtonLink>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between gap-8 border-t border-cream-50/25 pt-8">
          <p className="jf-lead text-cream-50/95">{tx("home/c3d6bb232e", "Aquilo que existe não esgota aquilo que pode existir.")}</p>
          <Stroke shape="scribble" className="hidden h-8 w-36 shrink-0 md:block" color="var(--jf-red-400)" width={4} />
        </div>
      </Container>
    </Section>
  );
}
