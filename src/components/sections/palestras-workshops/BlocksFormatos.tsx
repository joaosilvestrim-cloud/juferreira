import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, DashList, Display, Em, HandNote, QuoteCard, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { IconBubble, type IconName } from "./Icons";

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
      t: "Enxergar",
      q: "O que está acontecendo de verdade?",
      body: (
        <>
          <p>Antes de decidir, precisamos ampliar percepção.</p>
          <DashList
            className="mt-3"
            items={[
              "Que forças estão atuando?",
              "Que pressupostos estamos tratando como fatos?",
              "Que futuro nossas práticas atuais tornam mais provável?",
            ]}
          />
        </>
      ),
    },
    {
      icon: "people",
      t: "Escolher",
      q: "O que queremos ajudar a tornar possível?",
      body: (
        <>
          <p>Aqui a conversa deixa de ser apenas análise. Entram direção, prioridade e responsabilidade.</p>
          <DashList
            className="mt-3"
            items={["O que merece continuar?", "O que precisa mudar?", "O que não queremos ampliar?"]}
          />
        </>
      ),
    },
    {
      icon: "gear",
      t: "Tornar-se capaz",
      q: "Do que precisamos para sustentar essa escolha?",
      body: (
        <>
          <DashList
            items={[
              "Novas capacidades?",
              "Novos comportamentos?",
              "Outro modelo de liderança?",
              "Mais discernimento?",
              "Novas formas de colaboração?",
            ]}
          />
          <p className="mt-3 font-medium text-ink-900">Uma escolha sem capacidade vira intenção.</p>
        </>
      ),
    },
    {
      icon: "target",
      t: "Mover",
      q: "Qual é o próximo movimento real?",
      body: (
        <>
          <p>Não um plano perfeito. Um movimento possível.</p>
          <DashList
            className="mt-3"
            items={["Uma decisão.", "Um experimento.", "Uma conversa.", "Uma mudança de processo."]}
          />
          <p className="mt-3">Algo suficientemente concreto para alterar o que pode acontecer depois.</p>
        </>
      ),
    },
  ];
  const situations = [
    ["Times de liderança", "quando o desafio pede alinhamento e direção."],
    ["Transformações organizacionais", "quando pessoas precisam participar da mudança, não apenas recebê-la."],
    ["Estratégia e futuros", "quando é necessário explorar possibilidades e implicações antes de escolher."],
    ["Tecnologia e IA", "quando a organização precisa discutir capacidade, critérios, impacto e autoria."],
    ["Cultura e comportamento", "quando aquilo que a empresa diz querer construir não aparece ainda na prática."],
  ];
  return (
    <Section padded={false} label="Workshops" id="workshops">
      <div className="grid lg:grid-cols-[56%_44%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            Quando a conversa precisa sair da reflexão e <Em>entrar em movimento.</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p className="font-medium text-ink-900">
              Uma palestra pode abrir novas perguntas. Um workshop cria espaço para que as pessoas trabalhem sobre elas.
            </p>
            <p>
              Por isso, eu não penso workshop como “palestra com dinâmica”. Penso como uma experiência em que a organização
              pode transformar reflexão em:{" "}
              <strong className="font-semibold text-ink-900">percepção; conversa; escolha; capacidade; movimento.</strong>
            </p>
            <p>
              O ponto de partida pode ser Futuros Humanos. Pode ser uma questão de liderança. Uma transformação em curso. Uma
              tensão trazida pela tecnologia. Uma decisão estratégica. Ou um problema específico que a organização ainda não
              conseguiu colocar na mesa da maneira certa.
            </p>
          </Body>
        </Container>
        <div className="relative min-h-[400px]">
          <Photo
            src="/images/ph/palestras-workshops/workshop.webp"
            alt="Ju Ferreira conduzindo um workshop com um grupo à mesa"
            sizes="(min-width:1024px) 44vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_25%]"
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
            Workshop bom não termina com post-its organizados na parede.
            <br />
            <Em>Termina com alguma coisa que mudou na maneira como o grupo percebe, escolhe ou age.</Em>
          </p>
          <Stroke shape="scribble" className="hidden h-10 w-40 lg:block" width={4} />
        </div>

        <div className="mt-14 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[220px_1fr]">
          <h3 className="jf-display jf-display-sm">Para quais situações faz mais sentido</h3>
          <ContextList items={situations} className="sm:columns-2 sm:gap-10 [&>li]:break-inside-avoid [&>li]:mb-3" />
        </div>

        <div className="mt-12 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[220px_1fr_1fr_1fr] lg:gap-10">
          <h3 className="jf-display jf-display-sm">Um formato desenhado para o seu contexto</h3>
          <div className="text-[15px] leading-relaxed text-ink-700">
            <p>O formato, duração e dinâmica dependem da pergunta.</p>
            <p className="mt-3">
              Podemos trabalhar com uma equipe de liderança, um grupo menor, uma área específica ou uma audiência maior
              dividida em mesas de trabalho.
            </p>
            <p className="mt-4 border-l-2 border-red-brand pl-4 font-serif text-[19px] leading-snug text-ink-900">
              O workshop é desenhado a partir do resultado de reflexão e movimento que precisamos produzir — não a partir de
              uma agenda padrão.
            </p>
          </div>
          <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-6">
            <p className="font-serif text-[24px] leading-tight">
              Às vezes, a palestra abre a conversa.
              <br />O workshop permite trabalhá-la.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
              Um não depende obrigatoriamente do outro. A organização pode contratar apenas uma palestra. Apenas um workshop.
              Ou usar os dois formatos como partes de uma mesma jornada.
            </p>
          </div>
          <div className="border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-tight">
              Refletir é importante.{" "}
              <Em>Mas, em algum momento, precisamos escolher o que fazer com aquilo que percebemos.</Em>
            </p>
            <ButtonRow className="mt-6 sm:flex-col sm:items-stretch">
              <ButtonLink href={CONTACT_ROUTES.palestras} size="sm">
                Quero construir um workshop para minha organização
              </ButtonLink>
              <ButtonLink href={CONTACT_ROUTES.palestras} variant="secondary" size="sm">
                Conte o desafio
              </ButtonLink>
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
      t: "Experiência para lideranças",
      body: (
        <>
          <p>
            Quando um grupo precisa parar, enxergar o contexto e discutir escolhas difíceis com mais profundidade.
          </p>
          <p className="mt-3">Pode combinar:</p>
          <DashList
            className="mt-2"
            items={[
              "palestra;",
              "conversa facilitada;",
              "exercícios;",
              "cenários;",
              "perguntas estratégicas;",
              "decisões de movimento.",
            ]}
          />
        </>
      ),
    },
    {
      icon: "bulb",
      t: "Jornada sobre futuros e tecnologia",
      body: (
        <>
          <p>
            Quando a organização quer ir além de uma palestra pontual e construir uma conversa mais contínua sobre:{" "}
            <strong className="font-semibold text-ink-900">
              futuros; tecnologia; IA; liderança; capacidades humanas; direção.
            </strong>
          </p>
          <p className="mt-3">Pode acontecer em encontros sucessivos, com diferentes níveis de profundidade.</p>
        </>
      ),
    },
    {
      icon: "target",
      t: "Experiência de futuros aplicados",
      body: (
        <>
          <p>Quando o desafio é explorar possibilidades, tensões e implicações de um tema específico.</p>
          <p className="mt-3">
            Aqui pode haver conexão com abordagens e projetos do ecossistema da{" "}
            <strong className="font-semibold text-ink-900">What The Future?!</strong>, quando fizer sentido.
          </p>
        </>
      ),
    },
    {
      icon: "gear",
      t: "Experiência de transformação",
      body: (
        <>
          <p>Quando a questão não é apenas compreender o que está mudando. É ajudar pessoas a perceber:</p>
          <DashList
            className="mt-2 font-medium text-ink-900"
            items={[
              "o que precisa mudar;",
              "o que precisa ser desenvolvido;",
              "o que precisa ser abandonado;",
              "e o que precisa começar.",
            ]}
          />
          <p className="mt-3">
            Dependendo do contexto, essa conversa pode se conectar a elementos do universo EPIC ou a outras construções
            específicas. Mas sempre com separação clara entre tese, produto e projeto.
          </p>
        </>
      ),
    },
  ];
  return (
    <Section tone="cream" padded={false} label="Experiências customizadas" id="experiencias">
      <div className="grid lg:grid-cols-[50%_50%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[700px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            Alguns desafios <Em>não cabem num formato pronto.</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>Às vezes, a organização não precisa de uma palestra. Nem de um workshop.</p>
            <p>
              Precisa construir uma experiência capaz de provocar uma conversa específica, para pessoas específicas, num
              momento específico.
            </p>
            <p>
              Pode ser uma mudança estratégica. Uma discussão sobre tecnologia e futuro. Uma transição de liderança. Um
              processo de transformação. Uma convenção que precisa marcar um novo ciclo. Uma tensão cultural. Uma pergunta
              ainda mal formulada, mas importante demais para ser ignorada.
            </p>
          </Body>
          <HandNote className="mt-8 text-red-brand" rotate={-3}>
            Nesses casos, eu prefiro não começar pelo formato.
            <br />
            Prefiro começar pelo desafio.
          </HandNote>
        </Container>
        <div className="relative min-h-[400px]">
          <Photo
            src="/images/ph/palestras-workshops/experiencias.webp"
            alt="Ju Ferreira em uma mesa de trabalho com lideranças"
            sizes="(min-width:1024px) 50vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[45%_30%]"
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
              A experiência não nasce da quantidade de horas. Nasce da pergunta que precisa ser trabalhada.
            </QuoteCard>
            <p className="text-[15px] leading-relaxed text-ink-700">
              O objetivo é criar as condições para que uma conversa importante aconteça com mais profundidade, clareza e
              participação.
            </p>
            <p className="font-serif text-[21px] leading-snug">
              Às vezes, o trabalho não é levar uma resposta para a sala. É construir a sala certa para que a pergunta possa
              ser enfrentada.
            </p>
          </div>
          <div>
            <p className="font-semibold">Você não precisa chegar sabendo qual formato contratar.</p>
            <p className="mt-3 text-ink-700">Pode chegar com:</p>
            <DashList
              className="mt-3 text-ink-700"
              items={["uma pergunta;", "um desafio;", "um evento;", "uma mudança;", "uma tensão;", "uma decisão importante."]}
            />
            <p className="mt-4 font-medium">A partir daí, desenhamos a experiência.</p>
          </div>
          <div className="border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
              O formato vem depois.
              <br />
              <Em>Primeiro precisamos entender o que vale a pena colocar na sala.</Em>
            </p>
            <ButtonRow className="mt-8 sm:flex-col sm:items-stretch">
              <ButtonLink href={CONTACT_ROUTES.palestras}>Conte o desafio</ButtonLink>
              <ButtonLink href="/contato" variant="secondary">
                Fale com a Ju
              </ButtonLink>
            </ButtonRow>
          </div>
        </div>
      </Container>
    </Section>
  );
}
