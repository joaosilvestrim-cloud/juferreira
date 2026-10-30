import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Typography";
import { Snapshot } from "./parts";

import { tx, img, lazy, rx, rich } from "@/lib/editable";

/**
 * Exercício breve, estático e legível. Sem coleta de resposta, score, diagnóstico ou recomendação automática.
 * Os quatro movimentos aparecem como perguntas; a explicação completa da Espiral mora em /futuros-humanos#espiral.
 */
const STEPS = lazy(() => [
  { v: tx("pessoas/4b27b09c16", "Imaginar"), q: tx("pessoas/cbb49ab1c6", "o que poderia ser diferente nessa situação?") },
  { v: tx("pessoas/8c85401fc9", "Escolher"), q: tx("pessoas/b7a63c7fe9", "qual mudança importa e por quê?") },
  { v: tx("pessoas/917ae70f97", "Tornar-se"), q: tx("pessoas/23c62cd230", "que capacidade, apoio ou condição essa mudança pede?") },
  { v: tx("pessoas/50c52c49aa", "Construir"), q: tx("pessoas/92458e2b1b", "qual movimento cabe agora, ou que ajuda pode tornar um movimento possível?") },
]);

/* ───────────────────────── B03 — EXPERIÊNCIA BREVE ───────────────────────── */
export function PessoasPergunta() {
  return (
    <Section id="uma-pergunta" label={tx("pessoas/a3b2627e1f", "Uma pergunta para a sua terça-feira")}>
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Display size="md">
{rx("pessoas/rc8f702842", "Uma pergunta para a <em>sua terça-feira.</em>")}
</Display>
          <div className="jf-body mt-8 max-w-[520px] text-ink-700">
            <p>
{rx("pessoas/rfc263604c", "Pense numa situação que vem se repetindo. Pode ser pequena. Você não precisa registrar sua resposta aqui.")}
</p>
          </div>
          <Snapshot
            src={img("pessoas/7a8481c07b", "/images/ensaio/contexto-caderno-escolhas.webp")}
            alt={tx("pessoas/8af37d20ec", "Mãos fazendo anotações e marcando escolhas em um caderno.")}
            sizes="(min-width:1024px) 36vw, 100vw"
            className="mt-10 w-full max-w-[520px] md:-rotate-1"
            frameClassName="aspect-[3/2]"
          />
        </div>

        <div className="lg:pt-2">
          <ol className="divide-y divide-ink-900/15 border-y border-ink-900/15">
            {STEPS.map((s, i) => (
              <li key={s.v} className="grid grid-cols-[auto_1fr] gap-x-5 py-6 sm:gap-x-7">
                <span
                  className="jf-display inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-brand text-[20px] text-red-brand"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="font-serif text-[clamp(20px,1.7vw,25px)] leading-snug text-ink-900">
                  <strong className="font-medium uppercase tracking-[0.06em] text-red-brand">{rich(s.v)}:</strong> {rich(s.q)}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-start gap-4">
            <span className="font-serif text-[34px] leading-none text-red-brand" aria-hidden>
              ↻
            </span>
            <p className="font-serif text-[clamp(20px,1.7vw,25px)] leading-snug text-ink-900">
{rx("pessoas/rd4892668a", "Depois de tentar, olhe de novo. O que aconteceu pode mudar a pergunta.")}
</p>
          </div>

          <ButtonLink href="/futuros-humanos#espiral" variant="link" className="mt-8">
{rx("pessoas/rc4a432bbc", "Entenda a Espiral")}
</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
