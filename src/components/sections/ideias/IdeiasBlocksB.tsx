import type { ReadingRef } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, Em, StickyNote, Title } from "@/components/ui/Typography";
import { NewsletterForm } from "./NewsletterForm";
import { BrushLabel, EpistemicTag, QBox } from "./Parts";
import type { Epistemic } from "./data";

import { tx, img, lazy } from "@/lib/editable";

/* ───────────────────────── I03 — NEWSLETTER ───────────────────────── */
/** Amostra do formato (o que pode chegar numa edição). Não é edição publicada. */
const AMOSTRA = lazy(() => [
  { t: tx("ideias/fe7fca523b", "Uma ideia"), d: tx("ideias/5b737af138", "Alguma coisa que estou tentando compreender melhor.") },
  {
    t: tx("ideias/49be3380a6", "Uma história"),
    d: tx("ideias/f4e68628fa", "Algo vivido, observado, ouvido ou lembrado que mudou a forma como estou enxergando uma pergunta."),
  },
  {
    t: tx("ideias/cb736c5a19", "Uma pergunta"),
    d: tx("ideias/a92e74a189", "Não necessariamente para responder naquele momento. Talvez apenas para carregar durante alguns dias."),
  },
]);

export function IdeiasTerca() {
  return (
    <Section id="uma-terca-feira-qualquer" tone="cream" label={tx("ideias/4e2442595c", "Uma Terça-feira Qualquer")}>
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Display size="md">{tx("ideias/0ce7ca7586", "Uma Terça-feira Qualquer")}</Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(380px,70%)]" width={3} />
          <Body className="mt-8 max-w-[560px] text-ink-700">
            <p>{tx("ideias/674e16a45f", "Uma conversa semanal sobre aquilo que estamos construindo enquanto trabalhamos, escolhemos, erramos e recomeçamos.")}</p>
            <p>{tx("ideias/4cc07d4709", "Uma ideia, uma história ou uma pergunta para continuar pensando depois.")}</p>
          </Body>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {AMOSTRA.map((c) => (
              <li key={c.t} className="border-t border-red-brand/50 pt-4">
                <h3 className="jf-hand text-[24px] uppercase leading-none">{c.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{c.d}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
            <Photo
              src={img("ideias/cf55ef7770", "/images/ensaio/home-06-ideias-horizontal.webp")}
              alt={tx("ideias/42d2d9de5d", "Livros, caderno aberto, caneta e café sobre uma mesa de madeira.")}
              sizes="(min-width:1024px) 40vw, 100vw"
              className="absolute inset-0"
            />
          </div>
          <div className="rounded-[var(--jf-radius-md)] bg-blush-100/70 p-7 lg:p-8">
            <h3 className="text-[17px] font-semibold uppercase tracking-wide">{tx("ideias/f0a23b9a69", "Receber por e-mail")}</h3>
            <NewsletterForm className="mt-5" source="ideias" submitLabel="Receber por e-mail" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── I04 — INVESTIGAÇÃO ───────────────────────── */
type Pergunta = { id: string; label: Epistemic; title: string };

const PERGUNTAS: Pergunta[] = lazy(() => [
  { id: "soberania-humana", label: "investigacao", title: tx("ideias/70decfed0d", "Soberania Humana") },
  { id: "capacidade-responsabilidade", label: "hipotese", title: tx("ideias/38eebf27d2", "Quanto mais capacidade, mais responsabilidade?") },
  { id: "continuar-humano", label: "investigacao", title: tx("ideias/46ae78467d", "Como continuar humano sem romantizar o humano?") },
]);

function PerguntaBody({ id }: { id: string }) {
  const cls = "space-y-3 text-[15.5px] leading-relaxed text-ink-700";
  switch (id) {
    case "soberania-humana":
      return (
        <div className={cls}>
          <p>
            {tx("ideias/5941e77336", "Uma escolha pode parecer nossa e ainda ser organizada por medo, aprovação, hábito ou conveniência. Tenho usado provisoriamente essa expressão para investigar como percebemos essas influências e continuamos presentes nas escolhas. Tecnologia participa dessa questão, mas não a esgota.")}</p>
        </div>
      );
    case "capacidade-responsabilidade":
      return (
        <div className={cls}>
          <p>
            {tx("ideias/6ae824d5d7", "A ferramenta responde:")} <strong className="font-semibold text-ink-900">{tx("ideias/970c292b50", "“É possível.”")}</strong>
          </p>
          <QBox lead={tx("ideias/aab8668615", "Mas alguém ainda precisa responder")}>
            {tx("ideias/32b435b07b", "“Devemos?” “Para quê?” “Sob quais critérios?” “Com quais consequências?” “Quem responde por isso?”")}
          </QBox>
        </div>
      );
    default:
      return (
        <div className={cls}>
          <p className="font-medium text-ink-900">{tx("ideias/d8d949eea0", "“Humanidade” pode facilmente virar um slogan vazio.")}</p>
          <QBox lead={tx("ideias/9c98db4a87", "A pergunta é")}>
            {tx("ideias/1ad03e9d84", "Que partes da nossa humanidade queremos cultivar deliberadamente quando nossas ferramentas ampliam tanto nossa capacidade de agir?")}
          </QBox>
        </div>
      );
  }
}

export function IdeiasInvestigacao() {
  return (
    <Section id="em-investigacao" label={tx("ideias/c87d029ab6", "Em investigação")}>
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <BrushLabel>{tx("ideias/b2546f7e73", "Em investigação")}</BrushLabel>
          <Display size="md" className="mt-6">
            {tx("ideias/553db56229", "Perguntas que continuam")} <Em>{tx("ideias/e6ee5d3649", "abertas.")}</Em>
          </Display>
          <Body className="mt-6 max-w-[580px] text-ink-700">
            <p>
              {tx("ideias/1c620060a7", "Algumas ideias ainda estão em construção. Aqui compartilho a pergunta, as referências que estou considerando e o que pode mudar meu entendimento.")}</p>
          </Body>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-sm lg:min-h-[380px]">
          <Photo
            src={img("ideias/720504aa2b", "/images/ensaio/ju-leitura-anotacoes.webp")}
            alt={tx("ideias/d4680cd420", "Juliana lendo um livro e fazendo anotações em um caderno.")}
            sizes="(min-width:1024px) 36vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_40%]"
          />
          <StickyNote className="absolute left-4 top-4" rotate={-5} tone="paper">
            {tx("ideias/4ff22283e0", "Ainda não sei exatamente onde elas terminam.")}
          </StickyNote>
        </div>
      </Container>

      <Container className="mt-16">
        <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
          {PERGUNTAS.map((p) => (
            <li key={p.id} id={`investigacao-${p.id}`} className="flex flex-col border-t border-ink-900/15 pt-6">
              <EpistemicTag kind={p.label} className="w-fit" />
              <Title className="mt-4 text-[23px]">{p.title}</Title>
              <div className="mt-4">
                <PerguntaBody id={p.id} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ───────────────────────── I05 — NOTA EDITORIAL ───────────────────────── */
/** Referências cadastradas no painel. Sem cadastro, a lista não aparece (nenhum placeholder público). */
export function IdeiasNota({ refs }: { refs: ReadingRef[] }) {
  const groups = [
    { id: "mesa", title: tx("ideias/aa89e308ba", "Na mesa agora"), items: refs.filter((r) => r.section === "mesa") },
    { id: "voltam", title: tx("ideias/91990c16b6", "Referências que voltam"), items: refs.filter((r) => r.section === "voltam") },
  ].filter((g) => g.items.length > 0);

  return (
    <Section id="nota-editorial" tone="cream" label={tx("ideias/88c8593da8", "Nota editorial")}>
      <Container className={`grid gap-12 ${groups.length ? "lg:grid-cols-[1fr_1fr] lg:gap-16" : ""}`}>
        <div className={groups.length ? "" : "max-w-[760px]"}>
          <Display size="md">
            {tx("ideias/f50a6d3a0d", "Pensar também é")} <Em>{tx("ideias/990c2496a1", "mudar de ideia.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
              {tx("ideias/6539bcce48", "Algumas ideias vêm da experiência. Outras, de autores e campos que estudo. Procuro tornar essa origem visível e distinguir o que proponho do que continuo investigando.")}</p>
          </Body>
          <p className="mt-8 max-w-[600px] border-l-2 border-red-brand pl-5 font-serif text-[clamp(21px,1.8vw,26px)] leading-snug text-ink-900">
            {tx("ideias/de11ea3fd5", "Uma boa pergunta pode sobreviver por bastante tempo. Uma boa ideia também precisa poder ser contrariada.")}</p>
          <ButtonLink href="/futuros-humanos" variant="secondary" className="mt-10 w-fit">
            {tx("ideias/df40fd5c3c", "Conheça Futuros Humanos")}
          </ButtonLink>
        </div>

        {groups.length > 0 && (
          <div className="space-y-10 lg:border-l lg:border-red-brand/40 lg:pl-12">
            {groups.map((g) => (
              <div key={g.id}>
                <Title as="h3" className="uppercase">
                  {g.title}
                </Title>
                <ul className="mt-5 space-y-3">
                  {g.items.map((r) => (
                    <li key={r.id} className="rounded-[var(--jf-radius-sm)] border border-ink-900/10 bg-cream-50 px-5 py-4">
                      <p className="font-serif text-[19px] leading-tight">
                        {r.link && /^https?:\/\//i.test(r.link) ? (
                          <a href={r.link} target="_blank" rel="noopener noreferrer" className="underline decoration-ink-900/25 underline-offset-4 hover:text-red-brand">
                            {r.title}
                            <span className="sr-only"> {tx("ideias/cd3649ae31", "(abre em nova aba)")}</span>
                          </a>
                        ) : (
                          r.title
                        )}
                      </p>
                      {r.author && <p className="mt-1 text-[13px] text-ink-500">{r.author}</p>}
                      {r.note && <p className="mt-2 text-[14px] italic leading-snug text-ink-700">{r.note}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
