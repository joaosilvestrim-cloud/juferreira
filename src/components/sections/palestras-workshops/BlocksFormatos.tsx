import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, DashList, Display, Em, HandNote, QuoteCard, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { IconBubble, type IconName } from "./Icons";

import { tx, img } from "@/lib/editable";
/** Linha "Rótulo + complemento" com traço vermelho. */
function ContextList({ items, className = "" }: { items: string[][]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map(([t, d]) => (
        <li key={t} className="flex gap-3 text-[15px] leading-relaxed">
          <span className="mt-[0.75em] h-px w-4 shrink-0 bg-red-brand" aria-hidden />
          <span>
            <strong className="font-semibold">{t}</strong> <span className="text-ink-700">{d}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ───────────────────────── BLOCO 5 — WORKSHOPS ───────────────────────── */
export function PalestrasWorkshops() {
  const steps: { icon: IconName; t: string; q: string; body: ReactNode }[] = [
    {
      icon: "eye",
      t: tx("palestras-workshops/7c986053eb", "Enxergar"),
      q: tx("palestras-workshops/037eb41de8", "O que está acontecendo de verdade?"),
      body: (
        <>
          <p>{tx("palestras-workshops/e6f5328fc6", "Antes de decidir, precisamos ampliar percepção.")}</p>
          <DashList
            className="mt-3"
            items={[
              tx("palestras-workshops/ec55a7ee9c", "Que forças estão atuando?"),
              tx("palestras-workshops/eb7970e433", "Que pressupostos estamos tratando como fatos?"),
              tx("palestras-workshops/2be7b3b738", "Que futuro nossas práticas atuais tornam mais provável?"),
            ]}
          />
        </>
      ),
    },
    {
      icon: "people",
      t: tx("palestras-workshops/dfd78e10fb", "Escolher"),
      q: tx("palestras-workshops/64bef6c189", "O que queremos ajudar a tornar possível?"),
      body: (
        <>
          <p>{tx("palestras-workshops/d2e3e1b162", "Aqui a conversa deixa de ser apenas análise. Entram direção, prioridade e responsabilidade.")}</p>
          <DashList
            className="mt-3"
            items={[tx("palestras-workshops/35ba71e61c", "O que merece continuar?"), tx("palestras-workshops/8d1b54642e", "O que precisa mudar?"), tx("palestras-workshops/99f12f3286", "O que não queremos ampliar?")]}
          />
        </>
      ),
    },
    {
      icon: "gear",
      t: tx("palestras-workshops/9a2d086216", "Tornar-se capaz"),
      q: tx("palestras-workshops/702fb70c51", "Do que precisamos para sustentar essa escolha?"),
      body: (
        <>
          <DashList
            items={[
              tx("palestras-workshops/cbd2c50fec", "Novas capacidades?"),
              tx("palestras-workshops/44c4e18752", "Novos comportamentos?"),
              tx("palestras-workshops/7c3fac91c3", "Outro modelo de liderança?"),
              tx("palestras-workshops/6c161ba704", "Mais discernimento?"),
              tx("palestras-workshops/4751377d91", "Novas formas de colaboração?"),
            ]}
          />
          <p className="mt-3 font-medium text-ink-900">{tx("palestras-workshops/5a391c3f4a", "Uma escolha sem capacidade vira intenção.")}</p>
        </>
      ),
    },
    {
      icon: "target",
      t: tx("palestras-workshops/7b7836ba27", "Mover"),
      q: tx("palestras-workshops/4f99515cd1", "Qual é o próximo movimento real?"),
      body: (
        <>
          <p>{tx("palestras-workshops/2b8773da08", "Não um plano perfeito. Um movimento possível.")}</p>
          <DashList
            className="mt-3"
            items={[tx("palestras-workshops/158dbb9927", "Uma decisão."), tx("palestras-workshops/7718de7e69", "Um experimento."), tx("palestras-workshops/9ad847e800", "Uma conversa."), tx("palestras-workshops/a405baa43f", "Uma mudança de processo.")]}
          />
          <p className="mt-3">{tx("palestras-workshops/fe2a6c134e", "Algo suficientemente concreto para alterar o que pode acontecer depois.")}</p>
        </>
      ),
    },
  ];
  const situations = [
    [tx("palestras-workshops/4625979f2f", "Times de liderança"), tx("palestras-workshops/5ce0ea4e3b", "quando o desafio pede alinhamento e direção.")],
    [tx("palestras-workshops/4e15f07fdb", "Transformações organizacionais"), tx("palestras-workshops/ab5ce9b505", "quando pessoas precisam participar da mudança, não apenas recebê-la.")],
    [tx("palestras-workshops/7b8fb73564", "Estratégia e futuros"), tx("palestras-workshops/88cda76b3d", "quando é necessário explorar possibilidades e implicações antes de escolher.")],
    [tx("palestras-workshops/9808a4be53", "Tecnologia e IA"), tx("palestras-workshops/da911775e5", "quando a organização precisa discutir capacidade, critérios, impacto e autoria.")],
    [tx("palestras-workshops/0099a3a44d", "Cultura e comportamento"), tx("palestras-workshops/e631f4e8ab", "quando aquilo que a empresa diz querer construir não aparece ainda na prática.")],
  ];
  return (
    <Section padded={false} label={tx("palestras-workshops/f483c81f78", "Workshops")} id="workshops">
      <div className="grid lg:grid-cols-[56%_44%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            {tx("palestras-workshops/d93fd34676", "Quando a conversa precisa sair da reflexão e")} <Em>{tx("palestras-workshops/de8eaf15bd", "entrar em movimento.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p className="font-medium text-ink-900">
              {tx("palestras-workshops/221d7892f9", "Uma palestra pode abrir novas perguntas. Um workshop cria espaço para que as pessoas trabalhem sobre elas.")}</p>
            <p>
              {tx("palestras-workshops/f578b3c2b7", "Por isso, eu não penso workshop como “palestra com dinâmica”. Penso como uma experiência em que a organização pode transformar reflexão em:")}{" "}
              <strong className="font-semibold text-ink-900">{tx("palestras-workshops/6a913a2169", "percepção; conversa; escolha; capacidade; movimento.")}</strong>
            </p>
            <p>
              {tx("palestras-workshops/e18299e267", "O ponto de partida pode ser Futuros Humanos. Pode ser uma questão de liderança. Uma transformação em curso. Uma tensão trazida pela tecnologia. Uma decisão estratégica. Ou um problema específico que a organização ainda não conseguiu colocar na mesa da maneira certa.")}</p>
          </Body>
        </Container>
        <div className="relative min-h-[400px]">
          <Photo
            src={img("palestras-workshops/b41ee54129", "/images/ensaio/palestras-workshop-02.webp")}
            alt={tx("palestras-workshops/d2fc523d89", "Cena ilustrativa de Juliana facilitando uma atividade com post-its.")}
            sizes="(min-width:1024px) 44vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <ol className="grid gap-px overflow-hidden rounded-[var(--jf-radius-sm)] bg-ink-900/10 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="relative bg-cream-50 p-7">
              <IconBubble name={s.icon} />
              <h3 className="mt-5 text-[15px] font-semibold uppercase tracking-[0.16em] text-red-brand">
                {i + 1}. {s.t}
              </h3>
              <p className="mt-2 font-serif text-[22px] leading-snug">{s.q}</p>
              <div className="mt-4 text-[15px] leading-relaxed text-ink-700">{s.body}</div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <p className="font-serif text-[clamp(26px,2.6vw,38px)] leading-tight">
            {tx("palestras-workshops/54cf453fa3", "Workshop bom não termina com post-its organizados na parede.")}<br />
            <Em>{tx("palestras-workshops/09eecb1546", "Termina com alguma coisa que mudou na maneira como o grupo percebe, escolhe ou age.")}</Em>
          </p>
          <Stroke shape="scribble" className="hidden h-10 w-40 lg:block" width={4} />
        </div>

        <div className="mt-14 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[220px_1fr]">
          <h3 className="jf-display jf-display-sm">{tx("palestras-workshops/abcfde43fc", "Para quais situações faz mais sentido")}</h3>
          <ContextList items={situations} className="sm:columns-2 sm:gap-10 [&>li]:break-inside-avoid [&>li]:mb-3" />
        </div>

        <div className="mt-12 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[220px_1fr_1fr_1fr] lg:gap-10">
          <h3 className="jf-display jf-display-sm">{tx("palestras-workshops/ef65cd48d2", "Um formato desenhado para o seu contexto")}</h3>
          <div className="text-[15px] leading-relaxed text-ink-700">
            <p>{tx("palestras-workshops/aed6a18a11", "O formato, duração e dinâmica dependem da pergunta.")}</p>
            <p className="mt-3">
              {tx("palestras-workshops/2a2f81cc33", "Podemos trabalhar com uma equipe de liderança, um grupo menor, uma área específica ou uma audiência maior dividida em mesas de trabalho.")}</p>
            <p className="mt-4 border-l-2 border-red-brand pl-4 font-serif text-[19px] leading-snug text-ink-900">
              {tx("palestras-workshops/2a4a711148", "O workshop é desenhado a partir do resultado de reflexão e movimento que precisamos produzir — não a partir de uma agenda padrão.")}</p>
          </div>
          <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-6">
            <p className="font-serif text-[24px] leading-tight">
              {tx("palestras-workshops/f9e2fab0cb", "Às vezes, a palestra abre a conversa.")}<br />{tx("palestras-workshops/3c86fb8693", "O workshop permite trabalhá-la.")}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
              {tx("palestras-workshops/037702ba5a", "Um não depende obrigatoriamente do outro. A organização pode contratar apenas uma palestra. Apenas um workshop. Ou usar os dois formatos como partes de uma mesma jornada.")}</p>
          </div>
          <div className="border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-tight">
              {tx("palestras-workshops/e69abf4407", "Refletir é importante.")}{" "}
              <Em>{tx("palestras-workshops/10fcb63ca6", "Mas, em algum momento, precisamos escolher o que fazer com aquilo que percebemos.")}</Em>
            </p>
            <ButtonRow className="mt-6 sm:flex-col sm:items-stretch">
              <ButtonLink href={CONTACT_ROUTES.palestras} size="sm">
                {tx("palestras-workshops/a2f2ec4d38", "Quero construir um workshop para minha organização")}</ButtonLink>
              <ButtonLink href={CONTACT_ROUTES.palestras} variant="secondary" size="sm">
                {tx("palestras-workshops/3588e36562", "Conte o desafio")}</ButtonLink>
            </ButtonRow>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 6 — EXPERIÊNCIAS CUSTOMIZADAS ───────────────────────── */
export function PalestrasExperiencias() {
  const options: { icon: IconName; t: string; body: ReactNode }[] = [
    {
      icon: "people",
      t: tx("palestras-workshops/97de6af01a", "Experiência para lideranças"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/f6a8543f8f", "Quando um grupo precisa parar, enxergar o contexto e discutir escolhas difíceis com mais profundidade.")}</p>
          <p className="mt-3">{tx("palestras-workshops/60ba81cb2a", "Pode combinar:")}</p>
          <DashList
            className="mt-2"
            items={[
              tx("palestras-workshops/a06ee463df", "palestra;"),
              tx("palestras-workshops/4c0432f98d", "conversa facilitada;"),
              tx("palestras-workshops/18c25a9dc6", "exercícios;"),
              tx("palestras-workshops/0ccdbbfd6a", "cenários;"),
              tx("palestras-workshops/e6e8ab62f3", "perguntas estratégicas;"),
              tx("palestras-workshops/a015ead519", "decisões de movimento."),
            ]}
          />
        </>
      ),
    },
    {
      icon: "bulb",
      t: tx("palestras-workshops/3b9975bcfd", "Jornada sobre futuros e tecnologia"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/0b9ee2f017", "Quando a organização quer ir além de uma palestra pontual e construir uma conversa mais contínua sobre:")}{" "}
            <strong className="font-semibold text-ink-900">
              {tx("palestras-workshops/414573025d", "futuros; tecnologia; IA; liderança; capacidades humanas; direção.")}</strong>
          </p>
          <p className="mt-3">{tx("palestras-workshops/14b4faa802", "Pode acontecer em encontros sucessivos, com diferentes níveis de profundidade.")}</p>
        </>
      ),
    },
    {
      icon: "target",
      t: tx("palestras-workshops/e72f667e3e", "Experiência de futuros aplicados"),
      body: (
        <>
          <p>{tx("palestras-workshops/0f189fb1ce", "Quando o desafio é explorar possibilidades, tensões e implicações de um tema específico.")}</p>
          <p className="mt-3">
            {tx("palestras-workshops/3c9b0cb0b8", "Aqui pode haver conexão com abordagens e projetos do ecossistema da")}{" "}
            <strong className="font-semibold text-ink-900">{tx("palestras-workshops/fdb0aee4f7", "What The Future?!")}</strong>{tx("palestras-workshops/cdb7a76db8", ", quando fizer sentido.")}</p>
        </>
      ),
    },
    {
      icon: "gear",
      t: tx("palestras-workshops/15634aab85", "Experiência de transformação"),
      body: (
        <>
          <p>{tx("palestras-workshops/09e5768277", "Quando a questão não é apenas compreender o que está mudando. É ajudar pessoas a perceber:")}</p>
          <DashList
            className="mt-2 font-medium text-ink-900"
            items={[
              tx("palestras-workshops/405bdda2ab", "o que precisa mudar;"),
              tx("palestras-workshops/763a1ed2d8", "o que precisa ser desenvolvido;"),
              tx("palestras-workshops/02e6ae2bc9", "o que precisa ser abandonado;"),
              tx("palestras-workshops/f361a7400c", "e o que precisa começar."),
            ]}
          />
          <p className="mt-3">
            {tx("palestras-workshops/abf6a33fef", "Dependendo do contexto, essa conversa pode se conectar a elementos do universo EPIC ou a outras construções específicas. Mas sempre com separação clara entre tese, produto e projeto.")}</p>
        </>
      ),
    },
  ];
  return (
    <Section tone="cream" padded={false} label={tx("palestras-workshops/d8277e966e", "Experiências customizadas")} id="experiencias">
      <div className="grid lg:grid-cols-[50%_50%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[700px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            {tx("palestras-workshops/922ef6a023", "Alguns desafios")} <Em>{tx("palestras-workshops/d257c67d7a", "não cabem num formato pronto.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>{tx("palestras-workshops/b925e194f0", "Às vezes, a organização não precisa de uma palestra. Nem de um workshop.")}</p>
            <p>
              {tx("palestras-workshops/1941eb632f", "Precisa construir uma experiência capaz de provocar uma conversa específica, para pessoas específicas, num momento específico.")}</p>
            <p>
              {tx("palestras-workshops/5005be6fb5", "Pode ser uma mudança estratégica. Uma discussão sobre tecnologia e futuro. Uma transição de liderança. Um processo de transformação. Uma convenção que precisa marcar um novo ciclo. Uma tensão cultural. Uma pergunta ainda mal formulada, mas importante demais para ser ignorada.")}</p>
          </Body>
          <HandNote className="mt-8 text-red-brand" rotate={-3}>
            {tx("palestras-workshops/cdc64f971b", "Nesses casos, eu prefiro não começar pelo formato.")}<br />
            {tx("palestras-workshops/efc2dbf648", "Prefiro começar pelo desafio.")}</HandNote>
        </Container>
        <div className="relative min-h-[400px]">
          <Photo
            src={img("palestras-workshops/8c4ba35c4f", "/images/ensaio/palestras-workshop-01.webp")}
            alt={tx("palestras-workshops/be43628fe6", "Cena ilustrativa de Juliana e um grupo discutindo ideias ao redor de uma mesa.")}
            sizes="(min-width:1024px) 50vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {options.map((o) => (
            <li key={o.t} className="rounded-[var(--jf-radius-sm)] bg-cream-50 p-6 shadow-[0_10px_30px_-22px_rgba(24,20,17,.5)]">
              <IconBubble name={o.icon} />
              <Title as="h3" className="mt-5">
                {o.t}
              </Title>
              <div className="mt-3 text-[15px] leading-relaxed text-ink-700">{o.body}</div>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-6">
            <QuoteCard>
              {tx("palestras-workshops/2ba286c389", "A experiência não nasce da quantidade de horas. Nasce da pergunta que precisa ser trabalhada.")}</QuoteCard>
            <p className="text-[15px] leading-relaxed text-ink-700">
              {tx("palestras-workshops/3de4def21a", "O objetivo é criar as condições para que uma conversa importante aconteça com mais profundidade, clareza e participação.")}</p>
            <p className="font-serif text-[21px] leading-snug">
              {tx("palestras-workshops/51661e6724", "Às vezes, o trabalho não é levar uma resposta para a sala. É construir a sala certa para que a pergunta possa ser enfrentada.")}</p>
          </div>
          <div>
            <p className="font-semibold">{tx("palestras-workshops/fe45da6dbc", "Você não precisa chegar sabendo qual formato contratar.")}</p>
            <p className="mt-3 text-ink-700">{tx("palestras-workshops/3fdccce663", "Pode chegar com:")}</p>
            <DashList
              className="mt-3 text-ink-700"
              items={[tx("palestras-workshops/f46ef8b414", "uma pergunta;"), tx("palestras-workshops/a82f176992", "um desafio;"), tx("palestras-workshops/eaad8b72e5", "um evento;"), tx("palestras-workshops/86dc89100e", "uma mudança;"), tx("palestras-workshops/2dfa3fcd24", "uma tensão;"), tx("palestras-workshops/048114f3b3", "uma decisão importante.")]}
            />
            <p className="mt-4 font-medium">{tx("palestras-workshops/314b177d0c", "A partir daí, desenhamos a experiência.")}</p>
          </div>
          <div className="border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
              {tx("palestras-workshops/815654b67e", "O formato vem depois.")}<br />
              <Em>{tx("palestras-workshops/f72767cf64", "Primeiro precisamos entender o que vale a pena colocar na sala.")}</Em>
            </p>
            <ButtonRow className="mt-8 sm:flex-col sm:items-stretch">
              <ButtonLink href={CONTACT_ROUTES.palestras}>{tx("palestras-workshops/d8bc39e83e", "Conte o desafio")}</ButtonLink>
              <ButtonLink href="/contato" variant="secondary">
                {tx("palestras-workshops/b2feb26161", "Fale com a Ju")}</ButtonLink>
            </ButtonRow>
          </div>
        </div>
      </Container>
    </Section>
  );
}
