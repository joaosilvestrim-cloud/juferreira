import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import type { ReactNode } from "react";
import { Body, DashList, Display, Em, Eyebrow, Lead, QuoteCard, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { Icon, IconBubble, type IconName } from "./Icons";

import { tx, img, lazy } from "@/lib/editable";
/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function PalestrasHero() {
  const questions = [
    tx("palestras-workshops/ba5bb20948", "O que está mudando?"),
    tx("palestras-workshops/c00512da09", "O que estamos tratando como inevitável?"),
    tx("palestras-workshops/362923ec17", "Que futuro nossas decisões estão ajudando a tornar mais provável?"),
    tx("palestras-workshops/d7045e6ffc", "Do que nossas pessoas precisam se tornar capazes?"),
    tx("palestras-workshops/f9c45e3376", "E o que vale a pena começar a construir agora?"),
  ];
  const formats: { icon: IconName; t: string; d: string }[] = [
    { icon: "mic", t: tx("palestras-workshops/5de3e29b81", "Palestras"), d: tx("palestras-workshops/646e7a7eb3", "Para abrir perspectivas, provocar perguntas e deslocar conversas.") },
    { icon: "people", t: tx("palestras-workshops/352a353a8e", "Workshops"), d: tx("palestras-workshops/13eddbb03a", "Para transformar reflexão em escolha, participação e movimento.") },
    {
      icon: "sliders",
      t: tx("palestras-workshops/6e705d68b8", "Experiências customizadas"),
      d: tx("palestras-workshops/ac617dccd2", "Para desafios que pedem profundidade e não cabem num formato pronto."),
    },
  ];
  return (
    <Section padded={false} label={tx("palestras-workshops/9abfbb43fe", "Abertura")}>
      <div className="grid lg:grid-cols-[58%_42%]">
        <Container className="py-16 lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:py-24 lg:pr-12">
          <div className="jf-reveal">
            <Display as="h1" size="xl">
              {tx("palestras-workshops/b91914750b", "Leve essa conversa para")} <Em>{tx("palestras-workshops/9548537469", "sua organização.")}</Em>
            </Display>
            <Stroke shape="underline" draw className="mt-2 h-4 w-[min(420px,70%)]" width={4} />
            <Lead className="mt-8 max-w-[660px] text-[clamp(22px,2vw,30px)]">
              {tx("palestras-workshops/2f80846677", "Palestras, workshops e experiências para organizações que querem pensar")}{" "}
              <strong className="font-semibold">{tx("palestras-workshops/6f1dcb222c", "futuros, tecnologia, liderança e transformação humana")}</strong> {tx("palestras-workshops/badf0bb331", "de forma conectada à realidade.")}</Lead>
            <p className="jf-body mt-8 font-medium">{tx("palestras-workshops/847ebac733", "Cada trabalho começa com perguntas que importam.")}</p>
            <DashList items={questions} className="jf-body mt-4 text-ink-700" />
            <p className="mt-8 font-serif text-[clamp(22px,2vw,30px)] leading-tight">
              {tx("palestras-workshops/63adc5b4b0", "Futuros Humanos é a palestra-mãe.")}<br />
              <Em>{tx("palestras-workshops/f89e4fb24c", "Mas a conversa não precisa ser sempre a mesma.")}</Em>
            </p>
            <ButtonRow className="mt-10">
              <ButtonLink href={CONTACT_ROUTES.palestras} size="lg">
                {tx("palestras-workshops/6b261545fd", "Quero levar a Ju para minha organização")}</ButtonLink>
              <ButtonLink href="/futuros-humanos" variant="secondary" size="lg">
                {tx("palestras-workshops/a348f8d164", "Conheça Futuros Humanos")}</ButtonLink>
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
          <Stroke shape="orbit" draw className="absolute -left-10 top-0 h-full w-[85%]" width={3} />
        </div>
      </div>
      <Container>
        <ul className="grid gap-8 border-t border-ink-900/15 py-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-ink-900/15">
          {formats.map((f) => (
            <li key={f.t} className="flex gap-5 md:px-8 md:first:pl-0">
              <IconBubble name={f.icon} />
              <div>
                <h2 className="jf-title uppercase">{f.t}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{f.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — POR QUE UMA PALESTRA DA JU ───────────────────────── */
export function PalestrasPorQue() {
  const pillars: { icon: IconName; t: string; s: string; body: ReactNode }[] = [
    {
      icon: "bulb",
      t: tx("palestras-workshops/760127b037", "Pensamento"),
      s: tx("palestras-workshops/728849edae", "Não entregar respostas fáceis. Abrir perguntas melhores."),
      body: (
        <>
          <p>{tx("palestras-workshops/df34ce55cb", "A palestra não tenta prever o futuro para a plateia.")}</p>
          <p>{tx("palestras-workshops/2217437afb", "Ela oferece lentes para perceber:")}</p>
          <DashList
            className="mt-2"
            items={[
              tx("palestras-workshops/6111e74a2f", "o que está mudando;"),
              tx("palestras-workshops/0b75993b34", "o que estamos naturalizando;"),
              tx("palestras-workshops/9831edf2f1", "que possibilidades estamos ignorando;"),
              tx("palestras-workshops/45fbb83044", "que escolhas ainda existem;"),
              tx("palestras-workshops/f3f8596565", "e que futuro nossas decisões já estão ajudando a construir."),
            ]}
          />
        </>
      ),
    },
    {
      icon: "gear",
      t: tx("palestras-workshops/b7d3ac690b", "Experiência real"),
      s: tx("palestras-workshops/a0c85aebe7", "Teoria que passou pelo mundo real."),
      body: (
        <>
          <p>{tx("palestras-workshops/9e060ff9f9", "Minha visão não nasceu apenas de pesquisa.")}</p>
          <p>
            {tx("palestras-workshops/b58aa6e589", "Nasceu também de mais de duas décadas entre tecnologia, grandes empresas, vendas, liderança, empreendedorismo, clientes, risco, erros, construção e recomeços.")}</p>
          <p>{tx("palestras-workshops/441a8ea255", "Quando falo sobre transformação, conheço o peso de tentar transformar.")}</p>
          <p>{tx("palestras-workshops/3ad5c98744", "Quando falo sobre liderança, continuo liderando.")}</p>
          <p>{tx("palestras-workshops/2d7f730ce5", "Quando falo sobre tecnologia, continuo próxima dela.")}</p>
          <p>{tx("palestras-workshops/2ff81700d1", "Quando falo sobre possibilidade, sei que algumas sobrevivem ao mundo real e outras não.")}</p>
        </>
      ),
    },
    {
      icon: "people",
      t: tx("palestras-workshops/c3de4b5520", "Humanidade"),
      s: tx("palestras-workshops/8df4420388", "Tecnologia sem perder pessoas de vista."),
      body: (
        <>
          <p>{tx("palestras-workshops/b461ac67f9", "A tecnologia aparece nas minhas conversas.")}</p>
          <p>{tx("palestras-workshops/9c02b1ac28", "Mas não como espetáculo.")}</p>
          <p>{tx("palestras-workshops/7654f4c2ca", "Ela entra porque muda capacidades, relações, decisões, trabalho, poder e possibilidades.")}</p>
          <p>{tx("palestras-workshops/98d5ec8cec", "E isso traz perguntas que são, no fim, profundamente humanas:")}</p>
          <p className="font-serif text-[19px] italic text-cream-50">
            {tx("palestras-workshops/de343f777e", "Para quê? Com quais consequências? Quem queremos continuar sendo? O que vale a pena construir?")}</p>
        </>
      ),
    },
    {
      icon: "arrow-up",
      t: tx("palestras-workshops/d09d580976", "Movimento"),
      s: tx("palestras-workshops/bb85a35b49", "A palestra precisa continuar depois do aplauso."),
      body: (
        <>
          <p>
            {tx("palestras-workshops/331ab81929", "Eu não quero que alguém saia apenas pensando:")} <em>{tx("palestras-workshops/56bd9d0208", "“Que palestra interessante.”")}</em>
          </p>
          <p>
            {tx("palestras-workshops/8e4b6de510", "Quero que alguma pergunta continue trabalhando. Que uma conversa comece. Que uma decisão seja revista. Que alguma coisa antes tratada como inevitável passe a ser percebida como escolha.")}</p>
          <p>{tx("palestras-workshops/49d81ea4b2", "Que alguém consiga identificar:")}</p>
          <p className="font-semibold text-cream-50">{tx("palestras-workshops/6b4b42520e", "qual movimento pode mudar o que acontece depois?")}</p>
        </>
      ),
    },
  ];
  const audiences = [
    [tx("palestras-workshops/9ea806447b", "Convenções e encontros de liderança"), tx("palestras-workshops/abd2454a8b", "quando a organização precisa ampliar perspectiva e direção.")],
    [tx("palestras-workshops/55e65e2029", "Eventos de tecnologia e inovação"), tx("palestras-workshops/bfef351729", "quando a conversa precisa ir além da ferramenta.")],
    [
      tx("palestras-workshops/656d229ad6", "Transformação e mudança organizacional"),
      tx("palestras-workshops/87549f9796", "quando existe necessidade de envolver pessoas naquilo que está sendo construído."),
    ],
    [tx("palestras-workshops/4288a313ab", "Estratégia e futuro"), tx("palestras-workshops/046957b9d5", "quando o desafio é discutir possibilidades sem confundir previsão com destino.")],
    [tx("palestras-workshops/638611bd05", "Cultura e desenvolvimento humano"), tx("palestras-workshops/bdf7c67209", "quando a mudança exige mais do que processos.")],
  ];
  return (
    <Section tone="dark" padded={false} label={tx("palestras-workshops/50b3e82f0f", "Por que uma palestra da Ju")}>
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:pb-16 lg:pr-10">
          <Display size="md">
            {tx("palestras-workshops/d953a0d34a", "Não é uma palestra sobre o futuro.")}<br />
            <Em>{tx("palestras-workshops/d42df348f9", "É uma conversa sobre o que fazemos diante dele.")}</Em>
          </Display>
          <Body className="mt-10 max-w-[600px] text-cream-50/85">
            <p>
              {tx("palestras-workshops/9d3607946a", "Falar sobre futuro pode ser fascinante. Novas tecnologias. Mudanças no trabalho. Transformações sociais. Possibilidades que há pouco tempo pareciam improváveis.")}</p>
            <p>
              {tx("palestras-workshops/fc5fc63e7e", "Mas, para mim, a pergunta mais importante nunca é apenas:")}{" "}
              <strong className="font-semibold text-cream-50">{tx("palestras-workshops/763ee40f34", "“O que está vindo?”")}</strong>
            </p>
            <p>
              {tx("palestras-workshops/3a49e04363", "É:")} <strong className="font-semibold text-red-bright">{tx("palestras-workshops/6008083356", "“O que fazemos com aquilo que está vindo?”")}</strong>
            </p>
            <p>
              {tx("palestras-workshops/8bd71bc366", "Porque tendências não tomam decisões. Pessoas tomam. Organizações tomam. Lideranças tomam. E cada escolha ajuda a ampliar, restringir ou tornar mais provável determinado caminho.")}</p>
            <p className="font-medium text-cream-50">{tx("palestras-workshops/20d8fb67b7", "É aí que minhas palestras começam.")}</p>
          </Body>
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
        <ol className="grid gap-px overflow-hidden rounded-[var(--jf-radius-sm)] bg-cream-50/15 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((p, i) => (
            <li key={p.t} className="bg-ink-900 p-7 lg:p-8">
              <div className="flex items-center gap-4">
                <IconBubble name={p.icon} dark />
                <span className="jf-eyebrow text-cream-50/60">{tx("palestras-workshops/dbb18c4d2e", "0")}{i + 1}</span>
              </div>
              <h3 className="jf-title mt-5 text-[30px]">{p.t}</h3>
              <p className="mt-2 font-medium text-red-bright">{p.s}</p>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-cream-50/80">{p.body}</div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 border-t border-cream-50/20 pt-12 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-10">
          <div className="border-l-2 border-red-bright pl-6">
            <p className="font-serif text-[clamp(28px,2.6vw,40px)] leading-tight">
              {tx("palestras-workshops/1c59b029af", "A boa palestra não termina quando a luz do palco apaga.")}</p>
            <p className="mt-3 font-serif text-[clamp(24px,2.2vw,34px)] leading-tight text-red-bright">
              {tx("palestras-workshops/330c5cab0f", "Ela muda a conversa que acontece depois.")}</p>
            <Stroke shape="underline" className="mt-3 h-4 w-60" width={3} color="var(--jf-red-400)" />
          </div>
          <div>
            <h3 className="jf-eyebrow text-cream-50/70">{tx("palestras-workshops/e7578d2a60", "Para quem essa conversa faz especialmente sentido")}</h3>
            <ul className="mt-5 space-y-4">
              {audiences.map(([t, d]) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-[0.75em] h-px w-4 shrink-0 bg-red-bright" aria-hidden />
                  <span>
                    <strong className="font-semibold text-cream-50">{t}</strong>{" "}
                    <span className="text-cream-50/75">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-[24px] leading-snug">
              {tx("palestras-workshops/f8b1b9902f", "Meu trabalho no palco não é dizer à plateia qual futuro vai acontecer.")}</h3>
            <p className="mt-4 text-[15px] text-cream-50/80">{tx("palestras-workshops/877e91c1ed", "É ajudá-la a perceber:")}</p>
            <DashList
              className="mt-3 text-[15px] font-medium text-cream-50 [&_span.bg-red-brand]:bg-red-bright"
              items={[
                tx("palestras-workshops/4378ef1890", "o que ainda pode existir;"),
                tx("palestras-workshops/99f0e7bad8", "o que está sendo escolhido sem perceber;"),
                tx("palestras-workshops/01c2807ec1", "do que precisamos nos tornar capazes;"),
                tx("palestras-workshops/d692c66650", "e o que vale a pena começar a construir agora."),
              ]}
            />
            <p className="mt-6 font-semibold text-red-bright">{tx("palestras-workshops/af67306913", "É por isso que futuro, para mim, sempre termina no presente.")}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 3 — FUTUROS HUMANOS, A PALESTRA-MÃE ───────────────────────── */
const MOVES: { name: string; q: string; icon: IconName }[] = lazy(() => ([
  { name: "Imaginar", q: tx("palestras-workshops/333d663dd3", "E se pudesse ser diferente?"), icon: "eye" },
  { name: "Escolher", q: tx("palestras-workshops/b544606e95", "O que queremos ajudar a tornar possível?"), icon: "people" },
  { name: "Tornar-se", q: tx("palestras-workshops/cc76af012d", "Do que precisamos nos tornar capazes?"), icon: "spark" },
  { name: "Construir", q: tx("palestras-workshops/997831fecb", "O que podemos fazer agora para tornar esse futuro um pouco mais possível?"), icon: "target" },
]));

/**
 * Os 4 movimentos dispostos em ciclo (sentido horário), ligados por um arco contínuo — nunca como linha reta.
 * Mesma composição no mobile (2×2 em torno do círculo), apenas com tipografia menor.
 */
function MovementCycle() {
  // ordem visual horária: topo-esq, topo-dir, base-dir, base-esq
  const cells = [
    { m: MOVES[0], c: "col-start-1 row-start-1 items-start text-left pr-[24%]" },
    { m: MOVES[1], c: "col-start-2 row-start-1 items-end text-right pl-[24%]" },
    { m: MOVES[2], c: "col-start-2 row-start-2 items-end text-right pl-[24%] justify-end" },
    { m: MOVES[3], c: "col-start-1 row-start-2 items-start text-left pr-[24%] justify-end" },
  ];
  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[560px]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-red-brand" aria-hidden="true">
        <defs>
          <marker id="pw-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0L10 5 0 10" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </marker>
        </defs>
        {/* quatro arcos de um mesmo círculo, cada um terminando em seta: um ciclo que volta a começar */}
        {[
          tx("palestras-workshops/35c9262b51", "M150 112 A100 100 0 0 1 250 112"),
          tx("palestras-workshops/96c58130e4", "M290 150 A100 100 0 0 1 290 250"),
          tx("palestras-workshops/6e798149db", "M250 288 A100 100 0 0 1 150 288"),
          tx("palestras-workshops/4a503875fc", "M110 250 A100 100 0 0 1 110 150"),
        ].map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            markerEnd="url(#pw-arrow)"
          />
        ))}
        <circle cx="200" cy="200" r="64" fill="var(--jf-blush-100)" opacity="0.7" />
      </svg>
      <figcaption className="absolute left-1/2 top-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[clamp(13px,1.6vw,17px)] leading-tight text-ink-800">
        {tx("palestras-workshops/069fac66e3", "Não como método linear.")} <Em>{tx("palestras-workshops/5206fc18c4", "Como movimento.")}</Em>
      </figcaption>
      <ol className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        {cells.map(({ m, c }) => (
          <li key={m.name} className={`flex flex-col gap-1 ${c}`}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blush-100 text-ink-900 sm:h-11 sm:w-11">
              <Icon name={m.icon} className="h-5 w-6" />
            </span>
            <span className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-red-brand sm:text-[14px]">
              {m.name}
            </span>
            <span className="hidden max-w-[190px] font-serif text-[clamp(15px,1.5vw,18px)] leading-snug text-ink-800 sm:block">
              {m.q}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

/** No mobile as perguntas saem do ciclo (não cabem nos cantos) e ficam numa grade 2×2 na mesma ordem horária. */
function MovementQuestionsMobile() {
  const order = [MOVES[0], MOVES[1], MOVES[3], MOVES[2]]; // grade 2×2 espelhando o ciclo
  return (
    <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-6 sm:hidden">
      {order.map((m) => (
        <li key={m.name}>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-red-brand">{m.name}</p>
          <p className="mt-1 font-serif text-[17px] leading-snug">{m.q}</p>
        </li>
      ))}
    </ul>
  );
}

export function PalestrasFuturosHumanos() {
  const provokes: { icon: IconName; t: string; d: string }[] = [
    { icon: "binoculars", t: tx("palestras-workshops/58b106f9c7", "Amplia o campo"), d: tx("palestras-workshops/22d950dbcd", "Ajuda a plateia a enxergar além do caminho mais provável.") },
    { icon: "move", t: tx("palestras-workshops/29c43d1ab4", "Expõe escolhas"), d: tx("palestras-workshops/c17fea228f", "Torna visível aquilo que estava sendo tratado como inevitável.") },
    { icon: "laptop", t: tx("palestras-workshops/d2f15b3d5b", "Conecta tecnologia e humanidade"), d: tx("palestras-workshops/ac92ef042c", "Sem demonizar ferramentas nem perder pessoas de vista.") },
    {
      icon: "people",
      t: tx("palestras-workshops/89d53fd99a", "Devolve futuro ao presente"),
      d: tx("palestras-workshops/35195bb81c", "Mostra que participação acontece nas decisões e movimentos de agora."),
    },
  ];
  const contexts = [
    [tx("palestras-workshops/4f44ff01ee", "Convenções corporativas"), tx("palestras-workshops/09d28a754d", "quando a organização quer abrir um novo ciclo de reflexão e direção.")],
    [tx("palestras-workshops/ee57d258b3", "Encontros de liderança"), tx("palestras-workshops/f327378e95", "quando decisões sobre tecnologia, pessoas e futuro precisam ser conectadas.")],
    [tx("palestras-workshops/c0721e6f09", "Eventos de inovação e tecnologia"), tx("palestras-workshops/38386fe514", "quando a conversa precisa ir além da ferramenta.")],
    [tx("palestras-workshops/18c0b236b8", "Transformação organizacional"), tx("palestras-workshops/ea597dcef6", "quando mudança exige participação, não apenas comunicação.")],
    [tx("palestras-workshops/5c566527b1", "Fóruns de estratégia e futuro"), tx("palestras-workshops/54af1599b7", "quando o objetivo é discutir possibilidades sem confundir previsão com destino.")],
  ];
  return (
    <Section label={tx("palestras-workshops/d80cdc2da5", "Futuros Humanos, a palestra-mãe")} id="futuros-humanos">
      <Container className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <Eyebrow>{tx("palestras-workshops/d04f1e3186", "Futuros Humanos")}</Eyebrow>
          <Display size="lg" className="mt-6">
            {tx("palestras-workshops/c09433ec14", "Futuros Humanos é a palestra-mãe.")} <Em>{tx("palestras-workshops/9411ad77ac", "Mas é, antes de tudo, uma tese.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
              {tx("palestras-workshops/5b94ddd162", "Vivemos num tempo em que nossas ferramentas ficam mais poderosas, nossas decisões mais rápidas e as possibilidades mais amplas.")}</p>
            <p>
              {tx("palestras-workshops/d100ef2151", "Mas capacidade não é direção. O fato de conseguirmos fazer alguma coisa não responde, sozinho, se ela vale a pena ser feita.")}</p>
            <p>
              {tx("palestras-workshops/8fa9d03e31", "É desse ponto que nasce")} <strong className="font-semibold text-ink-900">{tx("palestras-workshops/829c68d82a", "Futuros Humanos")}</strong>.
            </p>
          </Body>
          <div className="mt-10 grid gap-10 sm:grid-cols-[0.8fr_1.2fr] sm:divide-x sm:divide-ink-900/15">
            <div className="border-l-2 border-red-brand pl-5 sm:border-l-0 sm:pl-0">
              <p className="font-semibold">{tx("palestras-workshops/f27368d568", "Uma conversa sobre:")}</p>
              <DashList
                className="mt-3 text-ink-700"
                items={[tx("palestras-workshops/1909148c99", "futuros;"), tx("palestras-workshops/a53e514a32", "tecnologia;"), tx("palestras-workshops/a564617e86", "agência;"), tx("palestras-workshops/f72d57bcfd", "escolhas;"), tx("palestras-workshops/11dc47224b", "capacidades humanas;"), tx("palestras-workshops/7bb27a9bd1", "e construção.")]}
              />
            </div>
            <div className="sm:pl-8">
              <p className="font-semibold">
                {tx("palestras-workshops/b6bfb37843", "Não para responder:")} <span className="font-serif text-[19px] italic">{tx("palestras-workshops/f17776f954", "“qual será o futuro?”")}</span>
              </p>
              <p className="mt-3 text-ink-700">{tx("palestras-workshops/86eba14ab9", "Mas para abrir perguntas como:")}</p>
              <DashList
                className="mt-3 font-serif text-[18px] leading-snug text-ink-900"
                items={[
                  tx("palestras-workshops/1379b9f4b6", "O que estamos tratando como inevitável?"),
                  tx("palestras-workshops/25258e0685", "Que futuro nossas decisões de hoje ajudam a tornar mais provável?"),
                  tx("palestras-workshops/cc37e6ccdf", "O que queremos ajudar a tornar possível?"),
                  tx("palestras-workshops/6ebfc0fb2f", "Do que precisamos nos tornar capazes para sustentar essa escolha?"),
                  tx("palestras-workshops/423a069395", "E o que podemos começar a construir agora?"),
                ]}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="relative mx-auto aspect-[6/5] max-w-[560px]">
            <Photo
              src={img("palestras-workshops/29ccb45b0a", "/images/ensaio/palestras-palco-frente.webp")}
              alt={tx("palestras-workshops/92a37c439d", "Cena ilustrativa de Juliana falando no palco, vista de frente.")}
              sizes="(min-width:1024px) 40vw, 100vw"
              className="absolute inset-[6%] rounded-full"
              imgClassName="object-[50%_40%]"
            />
            <Stroke shape="circle" className="absolute inset-0 h-full w-full" width={3} />
          </div>
          <h3 className="jf-display jf-display-sm mt-10 text-center">{tx("palestras-workshops/36bc516349", "A tese em quatro movimentos")}</h3>
          <div className="mt-6">
            <MovementCycle />
            <MovementQuestionsMobile />
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[220px_1fr]">
          <h3 className="jf-display jf-display-sm">{tx("palestras-workshops/3d77b5024d", "O que a palestra provoca")}</h3>
          <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {provokes.map((p) => (
              <li key={p.t} className="flex gap-4">
                <IconBubble name={p.icon} />
                <div>
                  <p className="text-[14px] font-semibold uppercase tracking-[0.12em]">{p.t}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[220px_1fr_1fr]">
          <h3 className="jf-display jf-display-sm">{tx("palestras-workshops/01214af7f2", "Para quais contextos faz mais sentido")}</h3>
          <ul className="space-y-3">
            {contexts.map(([t, d]) => (
              <li key={t} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-[0.75em] h-px w-4 shrink-0 bg-red-brand" aria-hidden />
                <span>
                  <strong className="font-semibold">{t}</strong> <span className="text-ink-700">{d}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="lg:border-l lg:border-ink-900/15 lg:pl-10">
            <p className="font-serif text-[clamp(22px,2vw,28px)] leading-tight">
              {tx("palestras-workshops/80f9f42125", "O futuro mais provável não é o único futuro possível.")}</p>
            <p className="mt-3 font-medium text-red-brand">
              {tx("palestras-workshops/4eed18eacd", "Mas futuros diferentes não acontecem apenas porque conseguimos imaginá-los.")}</p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 rounded-[var(--jf-radius-md)] bg-cream-100 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="font-serif text-[clamp(28px,2.8vw,42px)] leading-tight">
              {tx("palestras-workshops/c14f5ba523", "A palestra termina no palco.")}<br />
              <Em>{tx("palestras-workshops/909c2b526d", "A pergunta, não.")}</Em>
            </p>
            <p className="mt-4 text-ink-700">{tx("palestras-workshops/627f36b7a1", "Se ela funcionar, alguma coisa continua trabalhando depois:")}</p>
            <p className="mt-1 text-ink-700">{tx("palestras-workshops/c08526eea8", "uma decisão; uma conversa; uma escolha; uma possibilidade antes invisível.")}</p>
          </div>
          <ButtonRow className="lg:flex-col lg:items-stretch">
            <ButtonLink href={CONTACT_ROUTES.palestras}>{tx("palestras-workshops/69abf3b3e9", "Quero levar essa palestra para minha organização")}</ButtonLink>
            <ButtonLink href="/futuros-humanos" variant="secondary">
              {tx("palestras-workshops/63f9caf98c", "Conheça Futuros Humanos em profundidade")}</ButtonLink>
          </ButtonRow>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — OUTRAS CONVERSAS POSSÍVEIS ───────────────────────── */
export function PalestrasOutrasConversas() {
  const territories: { icon: IconName; t: string; body: ReactNode }[] = [
    {
      icon: "compass",
      t: tx("palestras-workshops/0279d06b9a", "Futuros, tecnologia e humanidade"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/f37d4a2a1e", "Quando o desafio é discutir como tecnologias cada vez mais poderosas mudam decisões, trabalho, liderança e responsabilidade.")}</p>
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-500">{tx("palestras-workshops/a2891d5080", "Perguntas possíveis")}</p>
          <DashList
            className="mt-2 font-medium text-ink-900"
            items={[
              tx("palestras-workshops/4973a30a06", "O que devemos continuar decidindo?"),
              tx("palestras-workshops/6669643ae4", "Que capacidades humanas ganham importância?"),
              tx("palestras-workshops/19088b4e6b", "Como usar tecnologia sem terceirizar direção?"),
            ]}
          />
        </>
      ),
    },
    {
      icon: "people",
      t: tx("palestras-workshops/c911ef5bb9", "Liderança em tempos de mudança"),
      body: (
        <>
          <p>{tx("palestras-workshops/30a90d4815", "Quando liderar exige mais do que executar um plano.")}</p>
          <p className="mt-2">{tx("palestras-workshops/8799087a34", "Uma conversa sobre incerteza, escolhas, capacidade, contexto e responsabilidade.")}</p>
          <p className="mt-2">{tx("palestras-workshops/5c94d9a8c0", "Não sobre “o líder do futuro”. Mas sobre:")}</p>
          <p className="mt-2 font-serif text-[19px] leading-snug text-ink-900">
            {tx("palestras-workshops/0d34af6c79", "o que significa liderar quando o caminho ainda não está pronto?")}</p>
        </>
      ),
    },
    {
      icon: "gear",
      t: tx("palestras-workshops/8be5dc8ade", "Transformação que não fica no PowerPoint"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/03b576d21d", "Quando a organização já sabe que precisa mudar, mas a mudança ainda não chegou ao comportamento, às decisões ou à prática.")}</p>
          <p className="mt-2">{tx("palestras-workshops/7f88907b34", "Aqui entram temas como:")}</p>
          <p className="mt-2 font-medium text-ink-900">{tx("palestras-workshops/c89a2952e0", "participação; cultura; escolhas; resistência; capacidade; movimento.")}</p>
        </>
      ),
    },
    {
      icon: "arrow-up",
      t: tx("palestras-workshops/af1ab6fa2c", "Possibilidade, estratégia e direção"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/cc932551bf", "Quando o desafio é sair da pergunta:")} <em>{tx("palestras-workshops/0900692aa3", "“o que provavelmente vai acontecer?”")}</em> {tx("palestras-workshops/d56d802c4f", "e entrar em:")}</p>
          <p className="mt-2 font-serif text-[19px] leading-snug text-ink-900">
            {tx("palestras-workshops/bfab80724d", "“o que ainda pode existir e o que queremos ajudar a tornar possível?”")}</p>
          <p className="mt-2">{tx("palestras-workshops/f31424a4cf", "Uma conversa especialmente útil para estratégia, planejamento, inovação e liderança.")}</p>
        </>
      ),
    },
    {
      icon: "heart",
      t: tx("palestras-workshops/79af94a13d", "O humano diante da IA"),
      body: (
        <>
          <p>{tx("palestras-workshops/6b7f1ad575", "Quando a discussão sobre IA precisa ir além de eficiência, ferramenta e adoção.")}</p>
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-500">{tx("palestras-workshops/e03cacff22", "Perguntas como")}</p>
          <DashList
            className="mt-2 font-medium text-ink-900"
            items={[
              tx("palestras-workshops/a6aee83167", "O que delegamos?"),
              tx("palestras-workshops/d863413e50", "O que não queremos terceirizar?"),
              tx("palestras-workshops/71d5e14f31", "Que parte da autoria queremos manter?"),
              tx("palestras-workshops/e2a21fec91", "Para quê estamos ampliando capacidade?"),
            ]}
          />
          <p className="mt-3 text-[13px]">
            {tx("palestras-workshops/670e37f8b8", "IA entra como uma tensão contemporânea dentro da tese maior, não como eixo isolado da atuação da Ju.")}</p>
        </>
      ),
    },
  ];
  return (
    <Section tone="cream" padded={false} label={tx("palestras-workshops/704fcd5b42", "Outras conversas possíveis")}>
      <div className="grid lg:grid-cols-[60%_40%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[860px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            {tx("palestras-workshops/8821167a26", "A tese dá direção.")}<br />
            <Em>{tx("palestras-workshops/4b9cc7d2bf", "O contexto define a conversa.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[640px] text-ink-700">
            <p>{tx("palestras-workshops/b2e51e7ca2", "Futuros Humanos é a palestra-mãe. Mas organizações diferentes vivem tensões diferentes.")}</p>
            <p>
              {tx("palestras-workshops/db61ad76bb", "Algumas estão tentando entender o impacto da tecnologia sobre trabalho e liderança. Outras precisam discutir mudança, cultura e capacidade de adaptação. Algumas estão olhando para inovação. Outras, para estratégia.")}</p>
            <p>{tx("palestras-workshops/c43829e04f", "Outras estão simplesmente diante de uma pergunta difícil demais para caber numa palestra pronta.")}</p>
            <p>{tx("palestras-workshops/7bd351bae3", "Por isso, eu não gosto de começar pelo título da palestra. Prefiro começar por perguntas como:")}</p>
          </Body>
          <ul className="mt-6 space-y-3">
            {[
              tx("palestras-workshops/1cf59388e2", "O que está acontecendo nessa organização agora?"),
              tx("palestras-workshops/43045fa274", "Que conversa ainda não está acontecendo e precisa acontecer?"),
              tx("palestras-workshops/9a68b1081e", "O que essa plateia precisa enxergar de outro jeito quando sair da sala?"),
            ].map((q) => (
              <li key={q} className="border-l-2 border-red-brand pl-4 font-serif text-[clamp(19px,1.6vw,23px)] leading-snug">
                {q}
              </li>
            ))}
          </ul>
          <p className="jf-body mt-6 text-ink-700">{tx("palestras-workshops/3592249464", "A partir daí, a conversa pode assumir caminhos diferentes.")}</p>
        </Container>
        <div className="relative min-h-[380px]">
          <Photo
            src={img("palestras-workshops/6735a83acb", "/images/ensaio/palestras-interacao-plateia.webp")}
            alt={tx("palestras-workshops/a90473355c", "Cena ilustrativa de Juliana interagindo com participantes de uma palestra.")}
            sizes="(min-width:1024px) 40vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {territories.map((t) => (
            <li key={t.t} className="rounded-[var(--jf-radius-sm)] bg-cream-50 p-6 shadow-[0_10px_30px_-22px_rgba(24,20,17,.5)]">
              <IconBubble name={t.icon} />
              <Title as="h3" className="mt-5">
                {t.t}
              </Title>
              <div className="mt-3 text-[15px] leading-relaxed text-ink-700">{t.body}</div>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[1fr_1fr_1.1fr] lg:gap-12">
          <div>
            <h3 className="jf-display jf-display-sm">{tx("palestras-workshops/af072a49ee", "Nem toda conversa precisa existir antes do briefing.")}</h3>
            <p className="mt-4 text-ink-700">{tx("palestras-workshops/a5c69a207d", "Algumas palestras podem nascer especificamente de:")}</p>
            <DashList
              className="mt-3 text-ink-700"
              items={[
                tx("palestras-workshops/51f206a189", "um momento estratégico;"),
                tx("palestras-workshops/9e692e6598", "uma convenção;"),
                tx("palestras-workshops/d21c437199", "uma transformação;"),
                tx("palestras-workshops/7f4271310b", "um lançamento;"),
                tx("palestras-workshops/62300ebba9", "uma mudança cultural;"),
                tx("palestras-workshops/c4776881d6", "uma provocação da liderança;"),
                tx("palestras-workshops/6960f9ef5f", "uma tensão específica da organização."),
              ]}
            />
          </div>
          <div className="space-y-6">
            <p className="text-ink-700">{tx("palestras-workshops/59c4232fe2", "Nesse caso, eu construo a palestra a partir do encontro entre:")}</p>
            <p className="font-serif text-[clamp(22px,2vw,28px)] leading-snug">
              {tx("palestras-workshops/3532e47550", "minha lente")} <Em>+</Em> {tx("palestras-workshops/c95970375a", "o contexto da organização")} <Em>+</Em> {tx("palestras-workshops/9f79086353", "a experiência da plateia.")}</p>
            <QuoteCard>
              {tx("palestras-workshops/2607f653d1", "Customizar não é trocar o logo na apresentação. É compreender por que essa conversa precisa acontecer para aquelas pessoas, naquele momento.")}</QuoteCard>
          </div>
          <div className="border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
              {tx("palestras-workshops/27d14e0b4c", "A conversa certa não começa no meu repertório.")}<br />
              <Em>{tx("palestras-workshops/dbdb78d805", "Começa no problema que vale a pena colocar na sala.")}</Em>
            </p>
            <ButtonLink href={CONTACT_ROUTES.palestras} className="mt-8">
              {tx("palestras-workshops/dd26351225", "Conte o que sua organização está tentando resolver")}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
