import { photoPosition } from "@/lib/photo-position";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, Em, Eyebrow, HandNote, Lead, StickyNote, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES, EXTERNAL } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { ContatoIcon, IconDisc } from "./Icons";
import { epicHref, type IconName } from "./routes";

const FORM = "#formulario";

/** Lista corrida "a; b; c" vinda da copy, em linha, com separador discreto. */
function InlineList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {items.map((it, i) => (
        <li key={it} className="after:ml-2 after:text-red-brand/70 after:content-['·'] last:after:content-none">
          {it}
          {i === items.length - 1 ? "." : ""}
        </li>
      ))}
    </ul>
  );
}

/** Faixa de papel rosa (marca-texto) usada para frases-chave. */
function PaperBand({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative bg-blush-100/80 px-6 py-5 [clip-path:polygon(0_6%,100%_0,99%_94%,1%_100%)] ${className}`}>{children}</div>;
}

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function ContatoHero() {
  return (
    <Section padded={false} label="Abertura">
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="py-14 lg:ml-auto lg:mr-0 lg:max-w-[760px] lg:py-20 lg:pr-12">
          <div className="jf-reveal">
            <Eyebrow>Contato</Eyebrow>
            <Display as="h1" size="lg" className="mt-6">
              Toda conversa começa com <Em>alguma coisa.</Em>
            </Display>
            <Stroke shape="underline" className="mt-2 h-4 w-[min(420px,80%)]" width={3} />
            <Lead className="mt-6 max-w-[620px]">
              Pode ser uma ideia. Um desafio. Uma pergunta. Ou um “ainda não sei”.
            </Lead>
            <Body className="mt-7 max-w-[600px] text-ink-700">
              <p>
                Você não precisa chegar sabendo exatamente qual formato contratar. Nem ter o briefing pronto. Nem transformar
                seu desafio numa solução antes de falar com a gente.
              </p>
              <p>
                Talvez você esteja organizando um evento. Pensando uma transformação. Tentando levar uma discussão sobre futuros
                para sua liderança. Buscando uma experiência para sua equipe. Querendo propor uma parceria. Ou simplesmente
                tentando entender se alguma parte do meu trabalho conversa com aquilo que você precisa.
              </p>
              <p className="font-semibold text-ink-900">Pode começar daí.</p>
            </Body>
            <PaperBand className="mt-8 max-w-[620px]">
              <p className="jf-eyebrow text-[13px] leading-relaxed tracking-[0.14em] text-ink-900">
                <span className="text-red-brand">Você não precisa chegar com a resposta.</span>
                <br />
                Precisa apenas nos contar o que está tentando resolver, construir ou tornar possível.
              </p>
            </PaperBand>
            <ButtonRow className="mt-9">
              <ButtonLink href={FORM} size="lg">
                Começar a conversa
              </ButtonLink>
              <ButtonLink href={CONTACT_ROUTES.palestras} variant="secondary" size="lg">
                Quero contratar uma palestra
              </ButtonLink>
            </ButtonRow>
            <p className="jf-hand mt-6 flex max-w-[520px] gap-3 text-[22px] text-ink-800">
              <span className="text-red-brand" aria-hidden>
                ↳
              </span>
              <span>
                Se você ainda não souber qual opção escolher, tudo bem.{" "}
                <Link href={CONTACT_ROUTES.naoSei} className="underline decoration-red-brand underline-offset-4">
                  Existe uma porta para isso também.
                </Link>
              </span>
            </p>
          </div>
        </Container>
        <div className="relative min-h-[420px] lg:min-h-full">
          <Photo
            src="/images/ensaio/contato-sorriso-vertical.webp"
            alt="Retrato acolhedor de Juliana com notebook à mesa."
            priority
            sizes="(min-width:1024px) 48vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="orbit" draw className="absolute -left-10 top-8 hidden h-[70%] w-[85%] lg:block" width={2.5} />
          <div aria-hidden className="absolute right-5 top-6 lg:right-10 lg:top-12">
            <StickyNote rotate={-6}>Pode começar daí.</StickyNote>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — O QUE TROUXE VOCÊ ATÉ AQUI? ───────────────────────── */
type Door = {
  n: number;
  icon: IconName;
  img: string;
  title: string;
  sub: string;
  lead?: string;
  items?: string[];
  body?: ReactNode;
  note?: ReactNode;
  cta: string;
  href: string;
};

const DOORS: Door[] = [
  {
    n: 1,
    icon: "mic",
    img: "/images/ensaio/contexto-microfone-palco.webp",
    title: "Palestras & Workshops",
    sub: "Quero levar a Ju para uma conversa, evento ou experiência.",
    lead: "Para:",
    items: ["eventos", "convenções", "encontros de liderança", "kick-offs", "programas corporativos", "workshops", "experiências customizadas"],
    note: (
      <>
        Se você já tem evento, data, público ou tema em mente, conte para a gente. Se ainda está construindo o briefing,
        também serve.
      </>
    ),
    cta: "Quero falar sobre uma palestra ou workshop",
    href: CONTACT_ROUTES.palestras,
  },
  {
    n: 2,
    icon: "people",
    img: "/images/ensaio/contexto-planejamento-equipe.webp",
    title: "Organizações & Projetos",
    sub: "Existe um desafio na organização que queremos pensar de outro jeito.",
    lead: "Talvez envolva:",
    items: [
      "estratégia",
      "transformação",
      "liderança",
      "tecnologia",
      "IA",
      "cultura",
      "capacidades",
      "mudança",
      "ou uma questão que ainda não cabe bem numa categoria",
    ],
    body: "A pessoa não precisa saber se aquilo pede palestra, workshop, jornada ou projeto.",
    note: <strong className="font-semibold">Começamos pelo contexto. O formato vem depois.</strong>,
    cta: "Quero conversar sobre um desafio da organização",
    href: CONTACT_ROUTES.organizacoes,
  },
  {
    n: 3,
    icon: "telescope",
    img: "/images/ensaio/home-01-abertura-horizontal.webp",
    title: "Futuros Aplicados / What The Future?!",
    sub: "Quero explorar futuros com mais profundidade.",
    lead: "Quando a questão pede:",
    items: [
      "cenários",
      "foresight",
      "imaginação de futuros",
      "exploração estratégica",
      "SciFiXD",
      "ou outras abordagens multidisciplinares de futuros aplicados",
    ],
    note: (
      <strong className="font-semibold">
        Dependendo da pergunta, essa conversa pode envolver a Ju e também o ecossistema da What The Future?!
      </strong>
    ),
    cta: "Quero explorar um projeto de futuros",
    href: CONTACT_ROUTES.futuros,
  },
  {
    n: 4,
    icon: "chat",
    img: "/images/ensaio/organizacoes-conversa-lideranca.webp",
    title: "Parcerias, Imprensa & Convites",
    sub: "Quero propor alguma coisa.",
    lead: "Para:",
    items: [
      "entrevistas",
      "podcasts",
      "imprensa",
      "eventos editoriais",
      "colaborações",
      "parcerias",
      "participações",
      "projetos de conteúdo",
      "convites institucionais",
    ],
    note: "Conte o que você está imaginando, para quem é e onde essa conversa aconteceria.",
    cta: "Quero fazer um convite ou propor uma parceria",
    href: CONTACT_ROUTES.parcerias,
  },
  {
    n: 5,
    icon: "heart",
    img: "/images/ensaio/pessoas-cafe-manha.webp",
    title: "EPIC247 & Pessoas",
    sub: "Minha conversa é sobre uma experiência ou produto para pessoas.",
    body: (
      <>
        Aqui entram dúvidas ou assuntos relacionados ao <strong className="font-semibold">EPIC247</strong> e, futuramente,
        outras experiências B2C que realmente existirem. Esta porta serve para:
      </>
    ),
    note: (
      <strong className="font-semibold">
        dúvidas comerciais, acesso, orientação sobre a experiência ou encaminhamento para o canal correto.
      </strong>
    ),
    cta: "Quero falar sobre o EPIC247",
    href: CONTACT_ROUTES.epic,
  },
  {
    n: 6,
    icon: "question",
    img: "/images/ensaio/pessoas-janela.webp",
    title: "Ainda não sei",
    sub: "Eu cheguei até aqui, mas não sei em qual dessas opções minha conversa cabe.",
    body: (
      <>
        Talvez você tenha uma ideia. Uma pergunta. Um projeto estranho. Uma possibilidade ainda meio mal formulada. Ou só
        queira entender se existe algum ponto de encontro.
      </>
    ),
    note: <strong className="font-semibold">Pode começar assim mesmo.</strong>,
    cta: "Ainda não sei. Quero contar o contexto.",
    href: CONTACT_ROUTES.naoSei,
  },
];

export function ContatoPortas() {
  return (
    <Section tone="cream" id="portas" label="O que trouxe você até aqui?">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-14">
          <div>
            <Eyebrow>Contato</Eyebrow>
            <Display size="lg" className="mt-5">
              O que trouxe você <Em>até aqui?</Em>
            </Display>
          </div>
          <div className="relative lg:border-l lg:border-red-brand/60 lg:pl-10">
            <Body className="max-w-[560px] text-ink-700 [&_p+p]:mt-1">
              <p>Às vezes, a gente sabe exatamente o que precisa.</p>
              <p>Às vezes, sabe apenas o que está tentando resolver.</p>
              <p>Escolha a opção que mais se aproxima do seu momento.</p>
            </Body>
            <HandNote className="mt-5 max-w-[460px] text-red-brand" rotate={-2}>
              Não precisa ser perfeita. Ela só ajuda a conversa a começar pelo lugar certo.
            </HandNote>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DOORS.map((d) => (
            <li
              key={d.n}
              className="group relative flex flex-col overflow-hidden rounded-[14px] border border-ink-900/10 bg-cream-50 shadow-[0_18px_50px_-40px_rgba(24,20,17,0.6)] transition-shadow duration-300 focus-within:shadow-[0_24px_60px_-34px_rgba(24,20,17,0.6)] hover:shadow-[0_24px_60px_-34px_rgba(24,20,17,0.6)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden" data-photo-origin="generated-ai">
                <Image
                  src={d.img}
                  alt=""
                  fill
                  sizes="(min-width:1280px) 30vw, (min-width:768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: photoPosition(d.img) }} />
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 sm:px-7">
                <IconDisc name={d.icon} className="-mt-8 border-4 border-cream-50" />
                <Title as="h3" className="mt-3">
                  <span className="sr-only">{d.n}. </span>
                  {d.title}
                </Title>
                <p className="mt-2 text-[16px] font-medium leading-snug text-ink-900">{d.sub}</p>
                <div className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-ink-700">
                  {d.lead && <p>{d.lead}</p>}
                  {d.items && <InlineList items={d.items} />}
                  {d.body && <p>{d.body}</p>}
                  {d.note && <p className="border-l-2 border-red-brand/70 pl-3 text-ink-800">{d.note}</p>}
                </div>
                <Link
                  href={d.href}
                  className="mt-auto inline-flex items-start gap-3 pt-6 text-[15px] font-medium leading-snug text-red-brand after:absolute after:inset-0 after:content-['']"
                >
                  <span className="mt-[-2px] inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-brand">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                  <span className="underline-offset-4 group-hover:underline">{d.cta}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center md:gap-12">
          <PaperBand>
            <p className="jf-eyebrow text-[13px] leading-relaxed tracking-[0.14em] text-ink-900">
              Não começamos pelo produto.
              <br />
              <span className="text-red-brand">Começamos pelo que você está tentando fazer acontecer.</span>
            </p>
          </PaperBand>
          <p className="text-[16px] leading-relaxed text-ink-700 md:border-l md:border-red-brand/60 md:pl-8">
            Escolher uma porta não prende você a nada.
            <br />
            Se entendermos que outra conversa faz mais sentido, fazemos o encaminhamento por aqui.
          </p>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 3 — CONTE UM POUCO DO CONTEXTO (formulário) ───────────────────────── */
export function ContatoContexto() {
  return (
    <Section id="formulario" label="Conte um pouco do contexto" className="scroll-mt-[var(--jf-header-h)]">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div className="flex flex-col">
          <Eyebrow>Contato</Eyebrow>
          <Display size="lg" className="mt-5">
            Agora, conte um pouco do <Em>contexto.</Em>
          </Display>
          <Lead className="mt-6 max-w-[520px]">Não precisa escrever o briefing perfeito.</Lead>
          <Body className="mt-6 max-w-[500px] text-ink-700">
            <p>A gente só precisa entender o suficiente para saber:</p>
            <p className="font-semibold text-ink-900">
              o que está acontecendo;
              <br />
              por que isso importa agora;
              <br />e qual pode ser a melhor próxima conversa.
            </p>
            <p>Se faltar alguma informação, perguntamos depois.</p>
          </Body>
          <StickyNote className="mt-8" rotate={-4}>
            Comece pelo que você já sabe.
          </StickyNote>
          <div className="relative mt-10 hidden min-h-[300px] flex-1 lg:block">
            <Photo
              src="/images/ensaio/ju-trabalho-tecnologia.webp"
              alt="Juliana concentrada no trabalho em um notebook."
              sizes="38vw"
              className="absolute inset-0 rounded-[12px]"
              imgClassName="object-[50%_40%]"
            />
          </div>
        </div>

        <div className="min-w-0">
          <ContactForm />
          <div className="mt-12 border-l-2 border-red-brand pl-6">
            <p className="jf-display jf-display-sm">
              Não precisamos saber tudo agora. <Em>Precisamos saber o suficiente para dar o próximo passo certo.</Em>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — JÁ SABE O QUE PRECISA? ───────────────────────── */
function ShortcutCard({ icon, title, children }: { icon: IconName; title: string; children: ReactNode }) {
  return (
    <li className="flex flex-col rounded-[14px] border border-ink-900/10 bg-cream-50 p-6 shadow-[0_18px_50px_-40px_rgba(24,20,17,0.6)] sm:p-7">
      <div className="flex items-start gap-5">
        <IconDisc name={icon} />
        <Title as="h3" className="pt-2">
          {title}
        </Title>
      </div>
      <div className="mt-5 flex flex-1 flex-col text-[15px] leading-relaxed text-ink-700">{children}</div>
    </li>
  );
}

export function ContatoAtalhos() {
  return (
    <>
      <Section tone="cream" label="Já sabe o que precisa?">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-12">
          <div className="flex flex-col">
            <Eyebrow>Contato</Eyebrow>
            <Display size="lg" className="mt-5">
              Se você já sabe o que precisa, <Em>pode ir direto ao ponto.</Em>
            </Display>
            <Lead className="mt-6 max-w-[480px]">Nem toda conversa precisa começar do zero.</Lead>
            <Body className="mt-5 max-w-[480px] text-ink-700">
              <p>Talvez você já tenha:</p>
            </Body>
            <InlineList
              items={["uma data", "um evento", "um projeto", "um convite", "uma demanda específica"]}
              className="jf-body mt-2 max-w-[480px] text-ink-700"
            />
            <Body className="mt-2 max-w-[480px] text-ink-700">
              <p>ou simplesmente saiba exatamente com quem precisa falar.</p>
              <p>
                Nesse caso, a gente simplifica. <strong className="font-semibold text-ink-900">Escolha o atalho e siga por ali.</strong>
              </p>
            </Body>
            <div className="relative mt-10 min-h-[340px] flex-1 overflow-visible">
              <Photo
                src="/images/ensaio/home-04b-reuniao-notebook.webp"
                alt="Cena ilustrativa de Juliana em conversa de trabalho, ao lado do notebook."
                sizes="(min-width:1024px) 34vw, 100vw"
                className="absolute inset-0 rounded-[12px]"
                imgClassName="object-[50%_40%]"
              />
              <div aria-hidden className="absolute -left-2 -top-6 sm:-left-4">
                <StickyNote rotate={-8} tone="paper">
                  Clareza também pode economizar caminho.
                </StickyNote>
              </div>
            </div>
          </div>

          <div>
            <ul className="grid gap-6 md:grid-cols-2">
              <ShortcutCard icon="mic" title="Quero contratar a Ju para uma palestra ou workshop">
                <p>Você já tem um evento, convenção, encontro de liderança ou experiência em planejamento.</p>
                <p className="mt-2">Conte a data, o público, o tema e o que você gostaria que essa conversa provocasse.</p>
                <div className="mt-auto pt-6">
                  <ButtonLink href={CONTACT_ROUTES.palestras} className="w-full">
                    Falar sobre uma palestra
                  </ButtonLink>
                </div>
              </ShortcutCard>
              <ShortcutCard icon="people" title="Quero conversar sobre um projeto para minha organização">
                <p>Para quem já sabe que a questão vai além de um evento pontual.</p>
                <p className="mt-2">Pode envolver:</p>
                <InlineList
                  className="mt-1"
                  items={[
                    "estratégia",
                    "liderança",
                    "transformação",
                    "futuros",
                    "tecnologia",
                    "capacidades",
                    "workshop",
                    "jornada",
                    "experiência customizada",
                    "ou um problema que precisa ser construído junto",
                  ]}
                />
                <p className="mt-3 border-l-2 border-red-brand/70 pl-3 font-medium text-ink-800">
                  Não precisamos definir a solução antes da primeira conversa. Mas, se você já sabe que existe um desafio
                  organizacional concreto, podemos começar diretamente por ele.
                </p>
                <ButtonLink href={CONTACT_ROUTES.organizacoes} variant="secondary" className="mt-6 w-full">
                  Conversar sobre um projeto
                </ButtonLink>
              </ShortcutCard>
              <ShortcutCard icon="chat" title="Quero fazer um convite ou propor uma parceria">
                <InlineList
                  items={[
                    "Entrevista",
                    "Podcast",
                    "Evento",
                    "Participação editorial",
                    "Imprensa",
                    "Colaboração",
                    "Projeto de conteúdo",
                    "Parceria institucional",
                  ]}
                />
                <p className="mt-3">Conte o convite, contexto, data e participação imaginada.</p>
                <ButtonLink href={CONTACT_ROUTES.parcerias} variant="secondary" className="mt-6 w-full">
                  Fazer um convite
                </ButtonLink>
              </ShortcutCard>
              <ShortcutCard icon="star" title="Preciso falar sobre o EPIC247">
                <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-500">
                  Quero conhecer / tenho uma dúvida antes de comprar
                </p>
                <ButtonLink href={epicHref("conhecer")} className="mt-3 w-full">
                  Quero conhecer o EPIC247
                </ButtonLink>
                <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-500">
                  Já sou cliente / preciso de suporte
                </p>
                <ButtonLink href={epicHref("suporte")} variant="secondary" className="mt-3 w-full">
                  Já tenho acesso e preciso de ajuda
                </ButtonLink>
              </ShortcutCard>
            </ul>

            <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-0 md:divide-x md:divide-red-brand/50">
              <div className="md:pr-8">
                <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-tight">Clareza também pode economizar caminho.</p>
                <p className="mt-2 text-[15px] text-ink-700">
                  Se você já sabe o que veio buscar, não vamos obrigar você a explicar tudo novamente.
                </p>
                <p className="jf-hand mt-5 text-[22px] text-red-brand">Não encontrou exatamente o que procura?</p>
                <p className="mt-1 text-[15px] text-ink-700">
                  Volte para{" "}
                  <Link href={CONTACT_ROUTES.naoSei} className="font-medium text-red-brand underline underline-offset-2">
                    “Conte um pouco do contexto”
                  </Link>{" "}
                  e escreva com suas palavras. A equipe faz o encaminhamento.
                </p>
              </div>
              <div className="flex gap-5 md:pl-8">
                <ContatoIcon name="people" className="h-10 w-10 shrink-0 text-ink-900" />
                <div>
                  <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-tight">Do outro lado tem gente.</p>
                  <p className="mt-2 text-[15px] text-ink-700">
                    Sua mensagem não vai para um sistema que precisa adivinhar tudo sozinho. Ela chega com o contexto que você
                    compartilhou e será encaminhada para a conversa adequada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section tone="dark" padded={false} label="Se está claro, vamos direto">
        <Stroke shape="arrow" className="absolute -left-6 top-1/2 hidden h-16 w-48 -translate-y-1/2 lg:block" width={2.5} color="var(--jf-red-400)" />
        <Container className="py-12 text-center lg:py-14">
          <p className="font-serif text-[clamp(26px,2.8vw,42px)] leading-tight">
            Se está claro, vamos direto. <Em>Se ainda não está, tudo bem também.</Em>
          </p>
          <p className="mt-3 text-[16px] text-cream-50/80">O importante é a conversa conseguir começar do lugar certo.</p>
        </Container>
      </Section>
    </>
  );
}

/* ───────────────────────── BLOCO 5 — CANAIS OFICIAIS ───────────────────────── */
function ChannelCard({
  icon,
  title,
  sub,
  children,
}: {
  icon: IconName;
  title: string;
  sub: string;
  children: ReactNode;
}) {
  return (
    <li className="flex flex-col rounded-[14px] border border-ink-900/10 bg-cream-50 p-6 shadow-[0_18px_50px_-40px_rgba(24,20,17,0.6)] sm:p-7">
      <div className="flex items-start gap-5">
        <IconDisc name={icon} />
        <div>
          <Title as="h4">{title}</Title>
          <p className="mt-1 text-[15px] font-medium leading-snug text-red-brand">{sub}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-1 flex-col text-[15px] leading-relaxed text-ink-700">{children}</div>
    </li>
  );
}

/** Link externo oficial; enquanto a URL estiver pendente (EXTERNAL vazio), mostra aviso sem link. */
function ExternalCta({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  if (!href) {
    return (
      <span className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-dashed border-ink-900/25 px-6 text-[15px] text-ink-500">
        link oficial em breve
      </span>
    );
  }
  return (
    <ButtonLink href={href} variant={variant} className="mt-4 w-full" target="_blank" rel="noopener noreferrer">
      {children}
    </ButtonLink>
  );
}

export function ContatoCanais() {
  const email = EXTERNAL.email;
  const whatsapp = EXTERNAL.whatsapp;
  return (
    <Section padded={false} label="Canais oficiais">
      <div className="grid lg:grid-cols-[50%_50%]">
        <Container className="py-14 lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:py-20 lg:pr-12">
          <Eyebrow>Contato</Eyebrow>
          <Display size="lg" className="mt-5">
            Prefere começar por <Em>outro caminho?</Em>
          </Display>
          <Lead className="mt-5">Tudo bem.</Lead>
          <Body className="mt-5 max-w-[580px] text-ink-700">
            <p>Nem toda conversa precisa começar por um formulário.</p>
            <p>
              Talvez seja mais simples mandar um e-mail. Talvez você queira conhecer melhor meu trabalho antes. Talvez a
              conversa já tenha começado no LinkedIn ou no Instagram.
            </p>
            <p className="font-semibold text-ink-900">Aqui estão os canais oficiais para continuar.</p>
          </Body>
        </Container>
        <div className="relative min-h-[360px]">
          <Photo
            src="/images/ensaio/contato-sorriso-horizontal.webp"
            alt="Juliana sorrindo para a câmera à mesa, com notebook aberto."
            sizes="(min-width:1024px) 50vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="orbit" className="absolute -left-12 top-4 hidden h-[80%] w-[70%] lg:block" width={2.5} />
          <div aria-hidden className="absolute right-5 bottom-6 lg:right-10">
            <StickyNote rotate={-5}>O canal muda. A conversa continua sendo entre pessoas.</StickyNote>
          </div>
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)] pt-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-red-brand/50">
          {/* QUERO FALAR */}
          <div className="lg:pr-10">
            <h3 className="jf-eyebrow w-fit bg-blush-100 px-4 py-2 text-[14px] tracking-[0.2em] text-ink-900">Quero falar</h3>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              <ChannelCard icon="form" title="Formulário" sub="Para propostas comerciais, eventos e projetos.">
                <p>O formulário acima é o caminho mais completo porque já traz o contexto para a equipe.</p>
                <div className="mt-auto pt-5">
                  <ButtonLink href={FORM} className="w-full">
                    Começar a conversa
                  </ButtonLink>
                </div>
              </ChannelCard>
              <ChannelCard icon="mail" title="E-mail" sub="Para propostas, projetos e conversas profissionais.">
                <p>Para palestras, projetos, parcerias, imprensa e outras conversas profissionais.</p>
                {email ? (
                  <>
                    <p className="mt-4 break-all font-medium text-red-brand">{email}</p>
                    <div className="mt-auto pt-4">
                      <ButtonLink href={`mailto:${email}`} className="w-full">
                        Enviar um e-mail
                      </ButtonLink>
                    </div>
                  </>
                ) : (
                  <p className="mt-auto pt-5 text-[15px] italic text-ink-500">e-mail oficial em breve</p>
                )}
              </ChannelCard>
              {whatsapp && (
                <ChannelCard icon="whatsapp" title="WhatsApp comercial" sub="Para conversas comerciais que já começaram.">
                  <p>Se já estamos conversando sobre palestra, projeto ou parceria, você também pode continuar por aqui.</p>
                  <ExternalCta href={whatsapp}>Falar com a equipe no WhatsApp</ExternalCta>
                </ChannelCard>
              )}
            </ul>
          </div>

          {/* QUERO ACOMPANHAR */}
          <div className="lg:pl-10">
            <h3 className="jf-eyebrow w-fit bg-blush-100 px-4 py-2 text-[14px] tracking-[0.2em] text-ink-900">Quero acompanhar</h3>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              <ChannelCard icon="linkedin" title="LinkedIn" sub="Para pensamento, trabalho e conversa profissional.">
                <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-900">Ju Ferreira — Perfil</p>
                <p className="mt-1">
                  Onde vivem: reflexões, histórias, pensamento, futuros, tecnologia, liderança, vida profissional e a voz pessoal
                  da Ju.
                </p>
                <ExternalCta href={EXTERNAL.linkedin}>Conectar com a Ju no LinkedIn</ExternalCta>
                <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-900">Ju Ferreira — Página</p>
                <p className="mt-1">
                  Onde ficam: palestras, workshops, experiências, projetos, ativos institucionais e informações sobre como
                  trabalhar com a marca.
                </p>
                <ExternalCta href={EXTERNAL.linkedinPage} variant="secondary">
                  Conhecer a página Ju Ferreira
                </ExternalCta>
              </ChannelCard>
              <ChannelCard
                icon="instagram"
                title="Instagram"
                sub="Para acompanhar a vida, as perguntas e os bastidores mais de perto."
              >
                <p>
                  Espaço mais cotidiano para acompanhar: reflexões, histórias, processos, bastidores, vida real e os diferentes
                  projetos do universo Ju Ferreira.
                </p>
                <div className="mt-auto">
                  <ExternalCta href={EXTERNAL.instagram}>Acompanhar no Instagram</ExternalCta>
                </div>
              </ChannelCard>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-ink-900/15 pt-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-end">
          <div>
            <p className="font-serif text-[clamp(24px,2.2vw,34px)] leading-tight">
              O canal muda. <Em>A conversa continua sendo entre pessoas.</Em>
            </p>
            <p className="mt-4 text-[15px] text-ink-700">
              Para propostas comerciais, eventos e projetos, o formulário acima é o caminho mais completo porque já traz o
              contexto para a equipe.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-serif text-[clamp(22px,1.9vw,28px)] uppercase leading-tight">Quer falar?</p>
            <p className="jf-hand mt-1 text-[26px] text-red-brand">Escolha o canal mais fácil para você.</p>
            <p className="mt-2 text-[15px] text-ink-700">Se a conversa precisar mudar de lugar depois, a gente encaminha.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 6 — FECHAMENTO FINAL ───────────────────────── */
export function ContatoFechamento() {
  return (
    <Section tone="wine" padded={false} label="Fechamento">
      <div className="grid lg:grid-cols-[55%_45%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pr-12">
          <p className="jf-eyebrow text-[13px] text-cream-50/85">Toda conversa começa de algum lugar.</p>
          <Stroke shape="underline" className="mt-2 h-3 w-56" width={2.5} color="var(--jf-red-400)" />
          <Display size="lg" className="mt-6">
            Talvez essa conversa <Em>comece aqui.</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-cream-50/85">
            <p>
              Talvez você tenha chegado até este site sabendo exatamente o que procurava. Talvez tenha mudado de ideia no
              caminho.
            </p>
            <p>
              Talvez tenha encontrado uma palestra. Uma pergunta. Uma possibilidade para sua organização. Uma ideia para sua
              própria vida. Um texto que ficou.
            </p>
            <p>Ou talvez ainda não saiba exatamente o que fazer com nada disso. Tudo bem.</p>
            <p className="font-semibold text-cream-50">Nem toda conversa precisa começar com certeza.</p>
            <p>Às vezes, basta existir alguma coisa que vale a pena colocar na mesa.</p>
          </Body>
        </Container>
        <div className="relative min-h-[420px]">
          <Photo
            src="/images/ensaio/contato-noite-abajur.webp"
            alt="Juliana à mesa à noite, iluminada por um abajur de luz quente."
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-800/70 to-transparent lg:bg-gradient-to-r lg:from-wine-800/60" aria-hidden />
          <div aria-hidden className="absolute right-5 top-6 lg:right-10 lg:top-14">
            <StickyNote rotate={6}>Nem toda conversa precisa começar com certeza.</StickyNote>
          </div>
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-12 border-t border-cream-50/20 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Title as="h3" className="text-[clamp(26px,2.4vw,36px)] uppercase">
              E se pudesse ser <Em>diferente?</Em>
            </Title>
            <Body className="mt-6 text-cream-50/85">
              <p>
                Talvez seja uma empresa. Uma decisão. Uma relação com tecnologia. Uma liderança. Uma forma de trabalhar. Uma
                trajetória. Uma escolha. Uma ideia.
              </p>
              <p>Ou simplesmente a maneira como estamos olhando para aquilo que já existe.</p>
              <p>Não significa que tudo pode ser diferente. Não significa que não existem limites. Significa apenas que:</p>
            </Body>
            <p className="mt-5 border-l-2 border-red-bright pl-5 font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              aquilo que existe não esgota aquilo que pode existir.
            </p>
            <p className="jf-body mt-5 text-cream-50/85">
              E se alguma possibilidade merece ser investigada, podemos começar conversando sobre ela.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="jf-display jf-display-sm">
              Você não precisa saber onde a conversa vai terminar para saber que <Em>vale a pena começá-la.</Em>
            </p>
            <ButtonLink href={FORM} size="lg" className="mt-10 w-fit">
              Começar a conversa
            </ButtonLink>
            <p className="mt-5 flex items-center gap-4 text-[15px] text-cream-50/80">
              <ContatoIcon name="people" className="h-8 w-8 shrink-0" />
              Do outro lado, alguém vai ler o que você escreveu antes de responder.
            </p>
          </div>
        </div>

        {/* Fechamento de marca */}
        <div className="mt-20 grid gap-10 border-y border-cream-50/20 py-12 text-center md:grid-cols-3 md:gap-0 md:divide-x md:divide-cream-50/25">
          <p className="font-serif text-[clamp(22px,2vw,30px)] uppercase leading-tight md:px-6">
            Limites existem.
            <br />
            <Em>Potência também.</Em>
          </p>
          <p className="font-serif text-[clamp(18px,1.6vw,24px)] uppercase leading-snug tracking-[0.12em] md:px-6">
            Aquilo que existe não esgota aquilo que pode existir.
          </p>
          <div className="md:px-6">
            <p className="font-serif text-[clamp(24px,2.3vw,34px)] uppercase leading-tight">
              <Em>Temos futuros para construir.</Em>
            </p>
            <Stroke shape="scribble" className="mx-auto mt-2 h-6 w-40" color="var(--jf-red-400)" width={3} />
          </div>
        </div>
        <div className="h-10 lg:h-16" aria-hidden />
      </Container>
    </Section>
  );
}
