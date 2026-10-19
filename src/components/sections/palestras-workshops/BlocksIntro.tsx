import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import type { ReactNode } from "react";
import { Body, DashList, Display, Em, Eyebrow, Lead, QuoteCard, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { Icon, IconBubble, type IconName } from "./Icons";

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function PalestrasHero() {
  const questions = [
    "O que está mudando?",
    "O que estamos tratando como inevitável?",
    "Que futuro nossas decisões estão ajudando a tornar mais provável?",
    "Do que nossas pessoas precisam se tornar capazes?",
    "E o que vale a pena começar a construir agora?",
  ];
  const formats: { icon: IconName; t: string; d: string }[] = [
    { icon: "mic", t: "Palestras", d: "Para abrir perspectivas, provocar perguntas e deslocar conversas." },
    { icon: "people", t: "Workshops", d: "Para transformar reflexão em escolha, participação e movimento." },
    {
      icon: "sliders",
      t: "Experiências customizadas",
      d: "Para desafios que pedem profundidade e não cabem num formato pronto.",
    },
  ];
  return (
    <Section padded={false} label="Abertura">
      <div className="grid lg:grid-cols-[58%_42%]">
        <Container className="py-16 lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:py-24 lg:pr-12">
          <div className="jf-reveal">
            <Display as="h1" size="xl">
              Leve essa conversa para <Em>sua organização.</Em>
            </Display>
            <Stroke shape="underline" draw className="mt-2 h-4 w-[min(420px,70%)]" width={4} />
            <Lead className="mt-8 max-w-[660px] text-[clamp(22px,2vw,30px)]">
              Palestras, workshops e experiências para organizações que querem pensar{" "}
              <strong className="font-semibold">futuros, tecnologia, liderança e transformação humana</strong> de forma
              conectada à realidade.
            </Lead>
            <p className="jf-body mt-8 font-medium">Cada trabalho começa com perguntas que importam.</p>
            <DashList items={questions} className="jf-body mt-4 text-ink-700" />
            <p className="mt-8 font-serif text-[clamp(22px,2vw,30px)] leading-tight">
              Futuros Humanos é a palestra-mãe.
              <br />
              <Em>Mas a conversa não precisa ser sempre a mesma.</Em>
            </p>
            <ButtonRow className="mt-10">
              <ButtonLink href={CONTACT_ROUTES.palestras} size="lg">
                Quero levar a Ju para minha organização
              </ButtonLink>
              <ButtonLink href="/futuros-humanos" variant="secondary" size="lg">
                Conheça Futuros Humanos
              </ButtonLink>
            </ButtonRow>
          </div>
        </Container>
        <div className="relative min-h-[440px] bg-ink-900 lg:min-h-full">
          <Photo
            src="/images/ju/palco.webp"
            alt="Ju Ferreira palestrando para uma plateia"
            priority
            sizes="(min-width:1024px) 42vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[70%_25%]"
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
      t: "Pensamento",
      s: "Não entregar respostas fáceis. Abrir perguntas melhores.",
      body: (
        <>
          <p>A palestra não tenta prever o futuro para a plateia.</p>
          <p>Ela oferece lentes para perceber:</p>
          <DashList
            className="mt-2"
            items={[
              "o que está mudando;",
              "o que estamos naturalizando;",
              "que possibilidades estamos ignorando;",
              "que escolhas ainda existem;",
              "e que futuro nossas decisões já estão ajudando a construir.",
            ]}
          />
        </>
      ),
    },
    {
      icon: "gear",
      t: "Experiência real",
      s: "Teoria que passou pelo mundo real.",
      body: (
        <>
          <p>Minha visão não nasceu apenas de pesquisa.</p>
          <p>
            Nasceu também de mais de duas décadas entre tecnologia, grandes empresas, vendas, liderança, empreendedorismo,
            clientes, risco, erros, construção e recomeços.
          </p>
          <p>Quando falo sobre transformação, conheço o peso de tentar transformar.</p>
          <p>Quando falo sobre liderança, continuo liderando.</p>
          <p>Quando falo sobre tecnologia, continuo próxima dela.</p>
          <p>Quando falo sobre possibilidade, sei que algumas sobrevivem ao mundo real e outras não.</p>
        </>
      ),
    },
    {
      icon: "people",
      t: "Humanidade",
      s: "Tecnologia sem perder pessoas de vista.",
      body: (
        <>
          <p>A tecnologia aparece nas minhas conversas.</p>
          <p>Mas não como espetáculo.</p>
          <p>Ela entra porque muda capacidades, relações, decisões, trabalho, poder e possibilidades.</p>
          <p>E isso traz perguntas que são, no fim, profundamente humanas:</p>
          <p className="font-serif text-[19px] italic text-cream-50">
            Para quê? Com quais consequências? Quem queremos continuar sendo? O que vale a pena construir?
          </p>
        </>
      ),
    },
    {
      icon: "arrow-up",
      t: "Movimento",
      s: "A palestra precisa continuar depois do aplauso.",
      body: (
        <>
          <p>
            Eu não quero que alguém saia apenas pensando: <em>“Que palestra interessante.”</em>
          </p>
          <p>
            Quero que alguma pergunta continue trabalhando. Que uma conversa comece. Que uma decisão seja revista. Que alguma
            coisa antes tratada como inevitável passe a ser percebida como escolha.
          </p>
          <p>Que alguém consiga identificar:</p>
          <p className="font-semibold text-cream-50">qual movimento pode mudar o que acontece depois?</p>
        </>
      ),
    },
  ];
  const audiences = [
    ["Convenções e encontros de liderança", "quando a organização precisa ampliar perspectiva e direção."],
    ["Eventos de tecnologia e inovação", "quando a conversa precisa ir além da ferramenta."],
    [
      "Transformação e mudança organizacional",
      "quando existe necessidade de envolver pessoas naquilo que está sendo construído.",
    ],
    ["Estratégia e futuro", "quando o desafio é discutir possibilidades sem confundir previsão com destino."],
    ["Cultura e desenvolvimento humano", "quando a mudança exige mais do que processos."],
  ];
  return (
    <Section tone="dark" padded={false} label="Por que uma palestra da Ju">
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:pb-16 lg:pr-10">
          <Display size="md">
            Não é uma palestra sobre o futuro.
            <br />
            <Em>É uma conversa sobre o que fazemos diante dele.</Em>
          </Display>
          <Body className="mt-10 max-w-[600px] text-cream-50/85">
            <p>
              Falar sobre futuro pode ser fascinante. Novas tecnologias. Mudanças no trabalho. Transformações sociais.
              Possibilidades que há pouco tempo pareciam improváveis.
            </p>
            <p>
              Mas, para mim, a pergunta mais importante nunca é apenas:{" "}
              <strong className="font-semibold text-cream-50">“O que está vindo?”</strong>
            </p>
            <p>
              É: <strong className="font-semibold text-red-bright">“O que fazemos com aquilo que está vindo?”</strong>
            </p>
            <p>
              Porque tendências não tomam decisões. Pessoas tomam. Organizações tomam. Lideranças tomam. E cada escolha ajuda a
              ampliar, restringir ou tornar mais provável determinado caminho.
            </p>
            <p className="font-medium text-cream-50">É aí que minhas palestras começam.</p>
          </Body>
        </Container>
        <div className="relative min-h-[380px]">
          <Photo
            src="/images/ph/palestras-workshops/palco.webp"
            alt="Ju Ferreira falando para uma plateia em um auditório"
            sizes="(min-width:1024px) 48vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_20%]"
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
                <span className="jf-eyebrow text-cream-50/60">0{i + 1}</span>
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
              A boa palestra não termina quando a luz do palco apaga.
            </p>
            <p className="mt-3 font-serif text-[clamp(24px,2.2vw,34px)] leading-tight text-red-bright">
              Ela muda a conversa que acontece depois.
            </p>
            <Stroke shape="underline" className="mt-3 h-4 w-60" width={3} color="var(--jf-red-400)" />
          </div>
          <div>
            <h3 className="jf-eyebrow text-cream-50/70">Para quem essa conversa faz especialmente sentido</h3>
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
              Meu trabalho no palco não é dizer à plateia qual futuro vai acontecer.
            </h3>
            <p className="mt-4 text-[15px] text-cream-50/80">É ajudá-la a perceber:</p>
            <DashList
              className="mt-3 text-[15px] font-medium text-cream-50 [&_span.bg-red-brand]:bg-red-bright"
              items={[
                "o que ainda pode existir;",
                "o que está sendo escolhido sem perceber;",
                "do que precisamos nos tornar capazes;",
                "e o que vale a pena começar a construir agora.",
              ]}
            />
            <p className="mt-6 font-semibold text-red-bright">É por isso que futuro, para mim, sempre termina no presente.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 3 — FUTUROS HUMANOS, A PALESTRA-MÃE ───────────────────────── */
const MOVES: { name: string; q: string; icon: IconName }[] = [
  { name: "Imaginar", q: "E se pudesse ser diferente?", icon: "eye" },
  { name: "Escolher", q: "O que queremos ajudar a tornar possível?", icon: "people" },
  { name: "Tornar-se", q: "Do que precisamos nos tornar capazes?", icon: "spark" },
  { name: "Construir", q: "O que podemos fazer agora para tornar esse futuro um pouco mais possível?", icon: "target" },
];

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
          "M150 112 A100 100 0 0 1 250 112",
          "M290 150 A100 100 0 0 1 290 250",
          "M250 288 A100 100 0 0 1 150 288",
          "M110 250 A100 100 0 0 1 110 150",
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
        Não como método linear. <Em>Como movimento.</Em>
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
    { icon: "binoculars", t: "Amplia o campo", d: "Ajuda a plateia a enxergar além do caminho mais provável." },
    { icon: "move", t: "Expõe escolhas", d: "Torna visível aquilo que estava sendo tratado como inevitável." },
    { icon: "laptop", t: "Conecta tecnologia e humanidade", d: "Sem demonizar ferramentas nem perder pessoas de vista." },
    {
      icon: "people",
      t: "Devolve futuro ao presente",
      d: "Mostra que participação acontece nas decisões e movimentos de agora.",
    },
  ];
  const contexts = [
    ["Convenções corporativas", "quando a organização quer abrir um novo ciclo de reflexão e direção."],
    ["Encontros de liderança", "quando decisões sobre tecnologia, pessoas e futuro precisam ser conectadas."],
    ["Eventos de inovação e tecnologia", "quando a conversa precisa ir além da ferramenta."],
    ["Transformação organizacional", "quando mudança exige participação, não apenas comunicação."],
    ["Fóruns de estratégia e futuro", "quando o objetivo é discutir possibilidades sem confundir previsão com destino."],
  ];
  return (
    <Section label="Futuros Humanos, a palestra-mãe" id="futuros-humanos">
      <Container className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <Eyebrow>Futuros Humanos</Eyebrow>
          <Display size="lg" className="mt-6">
            Futuros Humanos é a palestra-mãe. <Em>Mas é, antes de tudo, uma tese.</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
              Vivemos num tempo em que nossas ferramentas ficam mais poderosas, nossas decisões mais rápidas e as
              possibilidades mais amplas.
            </p>
            <p>
              Mas capacidade não é direção. O fato de conseguirmos fazer alguma coisa não responde, sozinho, se ela vale a
              pena ser feita.
            </p>
            <p>
              É desse ponto que nasce <strong className="font-semibold text-ink-900">Futuros Humanos</strong>.
            </p>
          </Body>
          <div className="mt-10 grid gap-10 sm:grid-cols-[0.8fr_1.2fr] sm:divide-x sm:divide-ink-900/15">
            <div className="border-l-2 border-red-brand pl-5 sm:border-l-0 sm:pl-0">
              <p className="font-semibold">Uma conversa sobre:</p>
              <DashList
                className="mt-3 text-ink-700"
                items={["futuros;", "tecnologia;", "agência;", "escolhas;", "capacidades humanas;", "e construção."]}
              />
            </div>
            <div className="sm:pl-8">
              <p className="font-semibold">
                Não para responder: <span className="font-serif text-[19px] italic">“qual será o futuro?”</span>
              </p>
              <p className="mt-3 text-ink-700">Mas para abrir perguntas como:</p>
              <DashList
                className="mt-3 font-serif text-[18px] leading-snug text-ink-900"
                items={[
                  "O que estamos tratando como inevitável?",
                  "Que futuro nossas decisões de hoje ajudam a tornar mais provável?",
                  "O que queremos ajudar a tornar possível?",
                  "Do que precisamos nos tornar capazes para sustentar essa escolha?",
                  "E o que podemos começar a construir agora?",
                ]}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="relative mx-auto aspect-[6/5] max-w-[560px]">
            <Photo
              src="/images/ph/palestras-workshops/tese.webp"
              alt="Ju Ferreira apresentando Futuros Humanos"
              sizes="(min-width:1024px) 40vw, 100vw"
              className="absolute inset-[6%] rounded-full"
              imgClassName="object-[50%_20%]"
            />
            <Stroke shape="circle" className="absolute inset-0 h-full w-full" width={3} />
          </div>
          <h3 className="jf-display jf-display-sm mt-10 text-center">A tese em quatro movimentos</h3>
          <div className="mt-6">
            <MovementCycle />
            <MovementQuestionsMobile />
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[220px_1fr]">
          <h3 className="jf-display jf-display-sm">O que a palestra provoca</h3>
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
          <h3 className="jf-display jf-display-sm">Para quais contextos faz mais sentido</h3>
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
              O futuro mais provável não é o único futuro possível.
            </p>
            <p className="mt-3 font-medium text-red-brand">
              Mas futuros diferentes não acontecem apenas porque conseguimos imaginá-los.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 rounded-[var(--jf-radius-md)] bg-cream-100 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="font-serif text-[clamp(28px,2.8vw,42px)] leading-tight">
              A palestra termina no palco.
              <br />
              <Em>A pergunta, não.</Em>
            </p>
            <p className="mt-4 text-ink-700">Se ela funcionar, alguma coisa continua trabalhando depois:</p>
            <p className="mt-1 text-ink-700">uma decisão; uma conversa; uma escolha; uma possibilidade antes invisível.</p>
          </div>
          <ButtonRow className="lg:flex-col lg:items-stretch">
            <ButtonLink href={CONTACT_ROUTES.palestras}>Quero levar essa palestra para minha organização</ButtonLink>
            <ButtonLink href="/futuros-humanos" variant="secondary">
              Conheça Futuros Humanos em profundidade
            </ButtonLink>
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
      t: "Futuros, tecnologia e humanidade",
      body: (
        <>
          <p>
            Quando o desafio é discutir como tecnologias cada vez mais poderosas mudam decisões, trabalho, liderança e
            responsabilidade.
          </p>
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-500">Perguntas possíveis</p>
          <DashList
            className="mt-2 font-medium text-ink-900"
            items={[
              "O que devemos continuar decidindo?",
              "Que capacidades humanas ganham importância?",
              "Como usar tecnologia sem terceirizar direção?",
            ]}
          />
        </>
      ),
    },
    {
      icon: "people",
      t: "Liderança em tempos de mudança",
      body: (
        <>
          <p>Quando liderar exige mais do que executar um plano.</p>
          <p className="mt-2">Uma conversa sobre incerteza, escolhas, capacidade, contexto e responsabilidade.</p>
          <p className="mt-2">Não sobre “o líder do futuro”. Mas sobre:</p>
          <p className="mt-2 font-serif text-[19px] leading-snug text-ink-900">
            o que significa liderar quando o caminho ainda não está pronto?
          </p>
        </>
      ),
    },
    {
      icon: "gear",
      t: "Transformação que não fica no PowerPoint",
      body: (
        <>
          <p>
            Quando a organização já sabe que precisa mudar, mas a mudança ainda não chegou ao comportamento, às decisões ou à
            prática.
          </p>
          <p className="mt-2">Aqui entram temas como:</p>
          <p className="mt-2 font-medium text-ink-900">participação; cultura; escolhas; resistência; capacidade; movimento.</p>
        </>
      ),
    },
    {
      icon: "arrow-up",
      t: "Possibilidade, estratégia e direção",
      body: (
        <>
          <p>
            Quando o desafio é sair da pergunta: <em>“o que provavelmente vai acontecer?”</em> e entrar em:
          </p>
          <p className="mt-2 font-serif text-[19px] leading-snug text-ink-900">
            “o que ainda pode existir e o que queremos ajudar a tornar possível?”
          </p>
          <p className="mt-2">Uma conversa especialmente útil para estratégia, planejamento, inovação e liderança.</p>
        </>
      ),
    },
    {
      icon: "heart",
      t: "O humano diante da IA",
      body: (
        <>
          <p>Quando a discussão sobre IA precisa ir além de eficiência, ferramenta e adoção.</p>
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-500">Perguntas como</p>
          <DashList
            className="mt-2 font-medium text-ink-900"
            items={[
              "O que delegamos?",
              "O que não queremos terceirizar?",
              "Que parte da autoria queremos manter?",
              "Para quê estamos ampliando capacidade?",
            ]}
          />
          <p className="mt-3 text-[13px]">
            IA entra como uma tensão contemporânea dentro da tese maior, não como eixo isolado da atuação da Ju.
          </p>
        </>
      ),
    },
  ];
  return (
    <Section tone="cream" padded={false} label="Outras conversas possíveis">
      <div className="grid lg:grid-cols-[60%_40%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[860px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            A tese dá direção.
            <br />
            <Em>O contexto define a conversa.</Em>
          </Display>
          <Body className="mt-8 max-w-[640px] text-ink-700">
            <p>Futuros Humanos é a palestra-mãe. Mas organizações diferentes vivem tensões diferentes.</p>
            <p>
              Algumas estão tentando entender o impacto da tecnologia sobre trabalho e liderança. Outras precisam discutir
              mudança, cultura e capacidade de adaptação. Algumas estão olhando para inovação. Outras, para estratégia.
            </p>
            <p>Outras estão simplesmente diante de uma pergunta difícil demais para caber numa palestra pronta.</p>
            <p>Por isso, eu não gosto de começar pelo título da palestra. Prefiro começar por perguntas como:</p>
          </Body>
          <ul className="mt-6 space-y-3">
            {[
              "O que está acontecendo nessa organização agora?",
              "Que conversa ainda não está acontecendo e precisa acontecer?",
              "O que essa plateia precisa enxergar de outro jeito quando sair da sala?",
            ].map((q) => (
              <li key={q} className="border-l-2 border-red-brand pl-4 font-serif text-[clamp(19px,1.6vw,23px)] leading-snug">
                {q}
              </li>
            ))}
          </ul>
          <p className="jf-body mt-6 text-ink-700">A partir daí, a conversa pode assumir caminhos diferentes.</p>
        </Container>
        <div className="relative min-h-[380px]">
          <Photo
            src="/images/ph/palestras-workshops/contexto.webp"
            alt="Ju Ferreira conversando com a plateia"
            sizes="(min-width:1024px) 40vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_25%]"
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
            <h3 className="jf-display jf-display-sm">Nem toda conversa precisa existir antes do briefing.</h3>
            <p className="mt-4 text-ink-700">Algumas palestras podem nascer especificamente de:</p>
            <DashList
              className="mt-3 text-ink-700"
              items={[
                "um momento estratégico;",
                "uma convenção;",
                "uma transformação;",
                "um lançamento;",
                "uma mudança cultural;",
                "uma provocação da liderança;",
                "uma tensão específica da organização.",
              ]}
            />
          </div>
          <div className="space-y-6">
            <p className="text-ink-700">Nesse caso, eu construo a palestra a partir do encontro entre:</p>
            <p className="font-serif text-[clamp(22px,2vw,28px)] leading-snug">
              minha lente <Em>+</Em> o contexto da organização <Em>+</Em> a experiência da plateia.
            </p>
            <QuoteCard>
              Customizar não é trocar o logo na apresentação. É compreender por que essa conversa precisa acontecer para
              aquelas pessoas, naquele momento.
            </QuoteCard>
          </div>
          <div className="border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
              A conversa certa não começa no meu repertório.
              <br />
              <Em>Começa no problema que vale a pena colocar na sala.</Em>
            </p>
            <ButtonLink href={CONTACT_ROUTES.palestras} className="mt-8">
              Conte o que sua organização está tentando resolver
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
