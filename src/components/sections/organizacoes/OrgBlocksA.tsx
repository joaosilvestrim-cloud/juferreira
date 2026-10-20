import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, Em, Eyebrow } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { DotList, IconBubble, type OrgIconName } from "./parts";

import { tx, img } from "@/lib/editable";

export const FORMATS_ANCHOR = "#formatos";

/* ───────────────────────── O01 — ABERTURA ───────────────────────── */
export function OrgHero() {
  return (
    <Section padded={false} label={tx("organizacoes/4b2522a71b", "Abertura")}>
      <div className="grid lg:grid-cols-[54%_46%]">
        <Container className="py-16 lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:py-24 lg:pr-10">
          <div className="jf-reveal">
            <Eyebrow>{tx("organizacoes/3de762407d", "Para Organizações")}</Eyebrow>
            <Display as="h1" size="lg" className="mt-6">
              {tx("organizacoes/4ed9ddba80", "Sua organização já está construindo futuros.")}{" "}
              <span className="relative inline-block">
                <Em>{tx("organizacoes/40545265e1", "A questão é: quais?")}</Em>
                <Stroke shape="underline" draw className="absolute -bottom-3 left-[30%] h-4 w-[70%]" width={3} />
              </span>
            </Display>
            <Body className="mt-10 max-w-[600px] text-ink-700">
              <p>
                {tx("organizacoes/f63bbb5620", "Nas tecnologias que adota, nas pessoas que promove e nos comportamentos que recompensa, a organização ajuda alguns caminhos a ganhar força.")}</p>
              <p>
                {tx("organizacoes/1bb450c26b", "Trabalho com lideranças e equipes para examinar essas escolhas, ampliar possibilidades e identificar o que pode começar a mudar no presente.")}</p>
            </Body>
            <ButtonRow className="mt-10">
              <ButtonLink href={CONTACT_ROUTES.organizacoes} size="lg">
                {tx("organizacoes/255b524b85", "Conte o desafio")}</ButtonLink>
              <ButtonLink href={FORMATS_ANCHOR} variant="secondary">
                {tx("organizacoes/15b52af784", "Conheça as formas de trabalhar juntos")}
              </ButtonLink>
            </ButtonRow>
          </div>
        </Container>
        <div className="relative min-h-[420px] lg:min-h-full">
          <Photo
            src={img("organizacoes/3b6210b214", "/images/ensaio/palestras-workshop-02.webp")}
            alt={tx("organizacoes/957f22df8f", "Cena ilustrativa de Juliana facilitando uma atividade com post-its.")}
            priority
            sizes="(min-width:1024px) 46vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── O02 — SITUAÇÕES DE ENTRADA ───────────────────────── */
export function OrgSituacoes() {
  // os três territórios de atuação da v1 organizam os cartões; são situações ilustrativas, não casos de clientes
  const cards: { icon: OrgIconName; area: string; ask: string; qs: string[] }[] = [
    {
      icon: "chip",
      area: tx("organizacoes/7addeacd48", "Tecnologia e humanidade"),
      ask: tx("organizacoes/de9a67173b", "“Precisamos usar IA.”"),
      qs: [
        tx("organizacoes/aee7df789f", "Que problema queremos resolver?"),
        tx("organizacoes/7456737f4e", "Que critérios precisam continuar sob responsabilidade das pessoas?"),
        tx("organizacoes/b35d894b45", "O que muda no trabalho?"),
      ],
    },
    {
      icon: "people",
      area: tx("organizacoes/a5d51394fb", "Transformação e capacidades"),
      ask: tx("organizacoes/2167733f72", "“Precisamos mudar a cultura.”"),
      qs: [
        tx("organizacoes/8f07118859", "Quais comportamentos a organização diz querer?"),
        tx("organizacoes/7eaf004a8e", "Quais ela efetivamente recompensa?"),
        tx("organizacoes/968012386e", "Que condições tornam a mudança possível?"),
      ],
    },
    {
      icon: "compass",
      area: tx("organizacoes/9a0aca5d37", "Futuros e estratégia"),
      ask: tx("organizacoes/583bc57af2", "“Precisamos revisar a estratégia.”"),
      qs: [
        tx("organizacoes/335f105131", "Que futuro estamos assumindo?"),
        tx("organizacoes/cc510aa4a9", "Que alternativas merecem ser consideradas?"),
        tx("organizacoes/7f9ce3d216", "Que capacidades a direção escolhida exige?"),
      ],
    },
  ];
  return (
    <Section tone="dark" padded={false} label={tx("organizacoes/58f1c2872f", "Situações de entrada")} id="situacoes">
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="pt-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[760px] lg:pb-16 lg:pr-10">
          <Display size="lg">
            {tx("organizacoes/264ffd440a", "Talvez a pergunta tenha chegado")} <Em>{tx("organizacoes/b2d8f74acc", "de outro jeito.")}</Em>
          </Display>
          <Body className="mt-10 max-w-[600px] text-cream-50/85">
            <p>
              {tx("organizacoes/4b6f5b4367", "Organizações mudam o tempo inteiro. Adotam tecnologias, redesenham processos, revisam estratégias. Tudo isso pode ser necessário.")}</p>
            <p>
              {tx("organizacoes/10ce478401", "Mas mudança não é direção. E a pergunta que importa costuma chegar como um pedido urgente.")}</p>
          </Body>
        </Container>
        <div className="relative mt-10 min-h-[320px] lg:mt-0">
          <Photo
            src={img("organizacoes/ceab1d8812", "/images/ensaio/organizacoes-conversa-lideranca.webp")}
            alt={tx("organizacoes/a3e641ee91", "Cena ilustrativa de Juliana em conversa individual com uma liderança.")}
            sizes="(min-width:1024px) 48vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/10 to-transparent max-lg:bg-gradient-to-b" aria-hidden />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)] pt-14">
        <ul className="grid gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <li key={c.area} className="rounded-[var(--jf-radius-sm)] bg-cream-50/[0.04] p-8 ring-1 ring-cream-50/10">
              <div className="flex items-center gap-4">
                <IconBubble name={c.icon} />
                <p className="jf-eyebrow text-[12px] text-cream-50/70">{c.area}</p>
              </div>
              <h3 className="mt-6 font-serif text-[clamp(24px,2.2vw,32px)] leading-tight text-cream-50">{c.ask}</h3>
              <DotList onDark items={c.qs} className="mt-5 text-[16px] leading-snug text-cream-50/85" />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[13px] text-cream-50/60">{tx("organizacoes/1603d6ee9a", "Situações ilustrativas.")}</p>
      </Container>
    </Section>
  );
}

/* ───────────────────────── O03 — FORMATOS E PROFUNDIDADE ───────────────────────── */
export function OrgFormatos() {
  const rows: { need: string; format: string; output: string }[] = [
    {
      need: tx("organizacoes/4c6ca3d49f", "Abrir uma discussão com um grupo"),
      format: tx("organizacoes/da8095f547", "Palestra"),
      output: tx("organizacoes/3fa233ad39", "Perspectivas e perguntas compartilhadas para uma conversa posterior."),
    },
    {
      need: tx("organizacoes/410d5b293e", "Trabalhar uma questão em conjunto"),
      format: tx("organizacoes/ea6feb49bf", "Workshop"),
      output: tx("organizacoes/c29827b975", "Suposições colocadas em discussão, escolhas examinadas e próximos movimentos a testar."),
    },
    {
      need: tx("organizacoes/8bfea40e8f", "Explorar incertezas e possibilidades"),
      format: tx("organizacoes/84d8dc0fca", "Projeto de futuros aplicados"),
      output: tx("organizacoes/56804efb9e", "Cenários e suas implicações para apoiar decisões, conforme o escopo."),
    },
    {
      need: tx("organizacoes/359cbb12e2", "Sustentar desenvolvimento ao longo do tempo"),
      format: tx("organizacoes/8cea176a4e", "Jornada customizada"),
      output: tx("organizacoes/a3dcba395f", "Uma sequência de encontros e experiências, com espaço para testar, aprender e rever o caminho."),
    },
  ];
  const head = "jf-eyebrow text-[12px] text-ink-500";
  return (
    <Section label={tx("organizacoes/eb6ec8da35", "Formatos e profundidade")} id={FORMATS_ANCHOR.slice(1)}>
      <Container>
        <Display size="lg">
          {tx("organizacoes/aefb1515fc", "O trabalho depende")} <Em>{tx("organizacoes/b6cb914b32", "da pergunta.")}</Em>
        </Display>

        <div className="mt-12">
          <div className="hidden grid-cols-[1fr_0.8fr_1.4fr] gap-8 border-b border-ink-900/20 pb-3 md:grid" aria-hidden>
            <span className={head}>{tx("organizacoes/1a572e703d", "Necessidade")}</span>
            <span className={head}>{tx("organizacoes/162195d51b", "Formato possível")}</span>
            <span className={head}>{tx("organizacoes/3457cae8f2", "O que pode ser produzido, conforme escopo")}</span>
          </div>
          <ol>
            {rows.map((r) => (
              <li key={r.format} className="border-b border-ink-900/15 py-6">
                <dl className="grid gap-3 md:grid-cols-[1fr_0.8fr_1.4fr] md:gap-8">
                  <div>
                    <dt className={`${head} md:sr-only`}>{tx("organizacoes/2b22ab76b2", "Necessidade")}</dt>
                    <dd className="mt-1 text-[17px] leading-snug text-ink-900 md:mt-0">{r.need}</dd>
                  </div>
                  <div>
                    <dt className={`${head} md:sr-only`}>{tx("organizacoes/a777ddc879", "Formato possível")}</dt>
                    <dd className="mt-1 font-serif text-[clamp(22px,2vw,28px)] leading-tight text-red-brand md:mt-0">{r.format}</dd>
                  </div>
                  <div>
                    <dt className={`${head} md:sr-only`}>{tx("organizacoes/423bec665d", "O que pode ser produzido")}</dt>
                    <dd className="mt-1 text-[16px] leading-relaxed text-ink-700 md:mt-0">{r.output}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-14">
          <p className="max-w-[620px] text-[16px] leading-relaxed text-ink-700">
            {tx("organizacoes/6545a516f2", "O trabalho é construído com as lideranças e equipes. Escopo, condições internas e continuidade fazem parte do resultado.")}</p>
          <div className="lg:justify-self-end">
            <ButtonLink href="/palestras" variant="secondary">
              {tx("organizacoes/fff8c3ffee", "Conheça a palestra Futuros Humanos")}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
