import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, HandNote } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { Pull } from "./FuturosHumanosBlocksA";
import { SpiralDiagram } from "./SpiralDiagram";

import { tx, img, lazy } from "@/lib/editable";

/* ───────────────────────── F05 — AGÊNCIA ───────────────────────── */
export function FHAgencia() {
  const starts = [tx("futuros-humanos/caa423105d", "numa conversa;"), tx("futuros-humanos/504d1b4da5", "num pedido de ajuda;"), tx("futuros-humanos/368368dfb9", "numa mudança de regra;"), tx("futuros-humanos/c1ce87440a", "na organização de pessoas em torno de um problema comum.")];
  return (
    <Section padded={false} label={tx("futuros-humanos/4595c64500", "Agência")}>
      <div className="grid lg:grid-cols-[62%_38%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[940px] lg:pr-12">
          <Display size="lg">
            {tx("futuros-humanos/20bbb4269d", "Limites existem.")} <Em>{tx("futuros-humanos/afc373dbf4", "Potência também.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 max-w-[600px] text-ink-700">
            <p>
              {tx("futuros-humanos/b8f8199d23", "Participamos a partir de condições reais: tempo, recursos, corpo, história, relações e estruturas. Algumas margens de escolha estão disponíveis. Outras precisam ser construídas com apoio e ação coletiva.")}</p>
            <p>{tx("futuros-humanos/b94e9f9efc", "Agência pode começar:")}</p>
          </Body>
          <ul className="jf-body mt-3 max-w-[600px] space-y-1 border-l-[3px] border-red-brand pl-5 text-ink-800">
            {starts.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="mt-12 max-w-[640px] bg-blush-100/70 px-7 py-6">
            <p className="font-serif text-[clamp(24px,2.1vw,32px)] leading-snug">
              {tx("futuros-humanos/a15beb4140", "Agência não é controle.")} <Em>{tx("futuros-humanos/8732fd970a", "É participação.")}</Em>
            </p>
          </div>
          <h3 className="mt-10 max-w-[640px] font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
            {tx("futuros-humanos/23dec49475", "Onde existe margem para agir")} <Em>{tx("futuros-humanos/fd45209740", "e de que precisamos para ampliá-la?")}</Em>
          </h3>
        </Container>
        <div className="relative min-h-[480px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("futuros-humanos/bcef60804f", "/images/ensaio/pessoas-janela.webp")}
            alt={tx("futuros-humanos/7c8831bff7", "Juliana olhando pela janela, com expressão contemplativa.")}
            sizes="(min-width:1024px) 38vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="loop" className="absolute -left-8 top-4 h-[70%] w-[90%]" width={2.5} />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── F06 — A ESPIRAL ───────────────────────── */
const MOVEMENTS = lazy(() => ([
  {
    t: tx("futuros-humanos/f4c6ad2f59", "Imaginar"),
    q: tx("futuros-humanos/43f6f42eec", "E se pudesse ser diferente?"),
    d: tx("futuros-humanos/8aba21b198", "Ampliar o campo e investigar alternativas ao caminho que parece inevitável."),
  },
  {
    t: tx("futuros-humanos/6942a4ca15", "Escolher"),
    q: tx("futuros-humanos/a7085f06b2", "O que queremos ajudar a tornar possível?"),
    d: tx("futuros-humanos/8075be4ffe", "Discutir valores, consequências e onde vale colocar esforço."),
  },
  {
    t: tx("futuros-humanos/0448c8ff62", "Tornar-se"),
    q: tx("futuros-humanos/58b1079734", "Do que precisamos nos tornar capazes?"),
    d: tx("futuros-humanos/0736bf5676", "Aprender, pedir ajuda e desenvolver as condições necessárias para sustentar essa direção."),
  },
  {
    t: tx("futuros-humanos/f8e0a8b87c", "Construir"),
    q: tx("futuros-humanos/71391b5371", "O que podemos fazer agora para tornar esse futuro um pouco mais possível?"),
    d: tx("futuros-humanos/7cb7e55ba5", "Fazer um movimento que permita à realidade responder."),
  },
]));

const EXAMPLE = lazy(() => ([
  { m: tx("futuros-humanos/f272974898", "Imaginar"), d: tx("futuros-humanos/29553aeb16", "Considerar que nem toda decisão precisa subir para a liderança.") },
  { m: tx("futuros-humanos/543f2afeaf", "Escolher"), d: tx("futuros-humanos/8a57d59bb8", "Definir quais decisões podem ser tomadas pela equipe e sob quais critérios.") },
  { m: tx("futuros-humanos/49692ad552", "Tornar-se"), d: tx("futuros-humanos/8c054ce99b", "Desenvolver repertório, acesso à informação e capacidade de delegar.") },
  { m: tx("futuros-humanos/3594fbf27d", "Construir"), d: tx("futuros-humanos/3468354fd2", "Experimentar essa autonomia numa decisão recorrente.") },
  { m: tx("futuros-humanos/a8967aee8b", "Olhar de novo"), d: tx("futuros-humanos/3145ae7983", "Observar o resultado e ajustar apoio, critérios e responsabilidades.") },
]));

export function FHEspiral() {
  return (
    <Section label={tx("futuros-humanos/7f3da3ba1e", "A Espiral")} id="espiral">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div>
          <Display size="lg">
            {tx("futuros-humanos/1460c02047", "Imaginar. Escolher.")} <Em>{tx("futuros-humanos/ec08d17155", "Tornar")}{"‑"}{tx("futuros-humanos/5162eb62f1", "se. Construir.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 max-w-[580px] text-ink-700">
            <p>
              {tx("futuros-humanos/95cadfe9ab", "Imaginar já muda o que conseguimos perceber. Escolher dá direção. Desenvolver capacidades permite sustentar escolhas. Construir coloca alguma coisa em contato com a realidade.")}</p>
          </Body>
        </div>
        <SpiralDiagram className="mx-auto w-full max-w-[560px]" />
      </Container>

      <Container className="mt-16 lg:mt-20">
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {MOVEMENTS.map((m) => (
            <li key={m.t} className="flex flex-col bg-cream-100 p-7 shadow-[0_10px_30px_-22px_rgba(24,20,17,.5)]">
              <Dash />
              <h3 className="mt-4 font-serif text-[26px] uppercase tracking-[0.04em]">{m.t}</h3>
              <p className="mt-3 font-semibold leading-snug text-red-brand">{m.q}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{m.d}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h3 className="font-serif text-[clamp(24px,2vw,30px)] leading-snug">
              {tx("futuros-humanos/b04c9edac1", "A Espiral não fecha.")}
            </h3>
            <Body className="mt-5 text-ink-700">
              <p>
                {tx("futuros-humanos/9b871093f2", "O mundo responde. Algumas hipóteses se sustentam, outras precisam mudar. Nós aprendemos e voltamos à pergunta com novas condições e outro olhar.")}</p>
            </Body>
            <Pull className="mt-8">{tx("futuros-humanos/e944f41db3", "Nós construímos futuros e somos construídos enquanto os construímos.")}</Pull>
            <HandNote className="mt-10 text-red-brand" rotate={-3}>
              {tx("futuros-humanos/94f45faa87", "A Espiral precisa sobreviver a uma terça-feira qualquer.")}</HandNote>
          </div>
          <div>
            <table className="w-full border-collapse text-left">
              <caption className="jf-eyebrow pb-4 text-left text-[13px] text-red-brand">
                {tx("futuros-humanos/94acf0c1c8", "Uma situação hipotética: uma equipe que deseja mais autonomia")}</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">{tx("futuros-humanos/7d0c39944e", "Movimento")}</th>
                  <th scope="col">{tx("futuros-humanos/a2a297d872", "O que acontece")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/15 border-y border-ink-900/15">
                {EXAMPLE.map((e) => (
                  <tr key={e.m} className="align-top">
                    <th scope="row" className="w-[34%] py-4 pr-4 font-serif text-[18px] font-normal uppercase tracking-[0.04em] sm:w-[30%]">
                      {e.m}
                    </th>
                    <td className="py-4 text-[15px] leading-relaxed text-ink-700">{e.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="jf-body mt-6 text-ink-700">
              {tx("futuros-humanos/8899f19049", "Uma escolha pode revelar uma capacidade que falta. Uma experiência pode mudar a direção. Os movimentos se encontram e voltam a acontecer.")}</p>
          </div>
        </div>
        <p className="mt-12 max-w-[860px] border-t border-ink-900/15 pt-6 text-[14px] leading-relaxed text-ink-500">
          {tx("futuros-humanos/bfda2c6d1c", "A Espiral organiza meu modo de pensar e trabalhar sobre essas perguntas. Não oferece garantia de resultado.")}</p>
      </Container>
    </Section>
  );
}

/* ───────────────────────── F07 — ESCALAS ───────────────────────── */
export function FHEscalas() {
  return (
    <Section tone="cream" label={tx("futuros-humanos/5e20e43b6f", "A pergunta muda de escala")}>
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
        <div>
          <Display size="md">
            {tx("futuros-humanos/c8cebe3d5b", "A pergunta muda")} <Em>{tx("futuros-humanos/c54a90841c", "de escala.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-48" width={4} />
        </div>
        <div>
          <Body className="text-ink-700">
            <p>
              {tx("futuros-humanos/d23d227051", "Na vida pessoal, pode aparecer numa escolha que deixou de parecer escolha. Numa organização, nos incentivos, tecnologias e prioridades que moldam o trabalho.")}</p>
          </Body>
          <ButtonRow className="mt-8">
            <ButtonLink href="/pessoas" variant="secondary">
              {tx("futuros-humanos/72d93589fc", "Na sua vida")}</ButtonLink>
            <ButtonLink href="/organizacoes" variant="secondary">
              {tx("futuros-humanos/f013191620", "Na sua organização")}</ButtonLink>
          </ButtonRow>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── F08 — ENCERRAMENTO ───────────────────────── */
export function FHEncerramento() {
  return (
    <Section tone="wine" padded={false} label={tx("futuros-humanos/762075d255", "Encerramento")}>
      <div className="grid lg:grid-cols-[60%_40%]">
        <Container className="flex flex-col justify-center py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[900px] lg:pr-10">
          <Display size="lg">
            {tx("futuros-humanos/ae68d01c0a", "O que queremos ajudar a tornar possível?")}
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-64" width={4} color="var(--jf-red-400)" />
          <p className="jf-lead mt-10 text-cream-50/90">
            {tx("futuros-humanos/383b84db0b", "Temos futuros")} <Em>{tx("futuros-humanos/85d3d13865", "para construir.")}</Em>
          </p>
          <ButtonRow className="mt-10">
            <ButtonLink href={CONTACT_ROUTES.organizacoes} size="lg">
              {tx("futuros-humanos/21ce2aebbe", "Leve essa conversa para sua organização")}</ButtonLink>
          </ButtonRow>
        </Container>
        <div className="relative min-h-[480px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("futuros-humanos/2fc1d57829", "/images/ensaio/contato-sorriso-vertical.webp")}
            alt={tx("futuros-humanos/7c034827fa", "Retrato acolhedor de Juliana com notebook à mesa.")}
            sizes="(min-width:1024px) 40vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>
    </Section>
  );
}
