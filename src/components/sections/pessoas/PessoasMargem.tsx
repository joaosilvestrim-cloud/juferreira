import { Container, Section } from "@/components/ui/Section";
import { Display, Em } from "@/components/ui/Typography";
import { Ask, Paper, Snapshot, Underline } from "./parts";

import { tx, img, lazy } from "@/lib/editable";

/** Três observações do automático (v1 · "O automático"), mantidas como notas curtas. */
const NOTES = lazy(() => [
  {
    t: tx("pessoas/00db9c0362", "O que você sustenta"),
    body: [
      tx("pessoas/91d03f0868", "Às vezes, aquilo que permanece não é aquilo que você escolheu."),
      tx("pessoas/6d35f29714", "É aquilo que nunca parou para rever."),
    ],
    q: tx("pessoas/d749624888", "O que eu continuo sustentando apenas porque já está aí?"),
    rotate: "md:-rotate-1",
  },
  {
    t: tx("pessoas/e510b51f42", "O que você adia"),
    body: [
      tx("pessoas/4e3d8dfba6", "Nem toda decisão adiada desaparece."),
      tx("pessoas/27b6b3f40a", "Algumas continuam decidindo por você."),
    ],
    q: tx("pessoas/fdb806fa37", "O que está sendo decidido enquanto eu continuo adiando?"),
    rotate: "md:rotate-1",
  },
  {
    t: tx("pessoas/911903f2f6", "O que você normalizou"),
    body: [tx("pessoas/5042f3ad9e", "Coisas que incomodavam no início podem, com o tempo, deixar de chamar atenção.")],
    q: tx("pessoas/2ba821a6bd", "O que se tornou normal sem necessariamente ter se tornado bom?"),
    rotate: "md:-rotate-2",
  },
]);

/* ───────────────────────── B02 — MARGEM ───────────────────────── */
export function PessoasMargem() {
  return (
    <Section tone="cream" label={tx("pessoas/aeeef996aa", "Margem")}>
      <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <Display size="lg">
            {tx("pessoas/2706345026", "Limites existem.")} <Em>{tx("pessoas/02bb92733b", "Potência também.")}</Em>
          </Display>
          <Underline />
          <div className="jf-body mt-8 max-w-[620px] text-ink-700">
            <p>
              {tx("pessoas/384e4030e0", "Nem toda circunstância foi escolhida. Nem toda mudança está disponível agora. Tempo, recursos, apoio e outras pessoas participam do que podemos fazer.")}</p>
            <p>
              {tx("pessoas/0c331daf28", "Ainda assim, vale investigar: o que posso rever? De que ajuda preciso? Que condição precisa mudar para que outra escolha se torne possível?")}</p>
            <p>{tx("pessoas/bd818a621e", "Há hábitos que sustentam cuidado e confiança. E há repetições que merecem voltar à nossa atenção.")}</p>
          </div>
          <Ask className="mt-8 max-w-[620px]">{tx("pessoas/cd9c4dcfb0", "O que você continua fazendo que já não escolheria da mesma forma hoje?")}</Ask>
        </div>

        <Snapshot
          src={img("pessoas/722258e65e", "/images/ensaio/pessoas-cafe-manha.webp")}
          alt={tx("pessoas/28a7a01854", "Juliana segurando uma caneca de café à mesa da cozinha.")}
          sizes="(min-width:1024px) 34vw, 100vw"
          className="mx-auto w-full max-w-[560px] md:rotate-1"
          frameClassName="aspect-[4/3]"
        />
      </Container>

      <Container className="mt-16 lg:mt-20">
        <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
          {NOTES.map((n) => (
            <li key={n.t}>
              <Paper tone="paper" className={`h-full ${n.rotate}`}>
                <h3 className="jf-eyebrow text-[12px] text-red-brand">{n.t}</h3>
                <div className="mt-4 space-y-1 font-serif text-[20px] leading-snug text-ink-900">
                  {n.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <p className="mt-5 border-t border-ink-900/10 pt-4 text-[15.5px] leading-relaxed text-ink-700">{n.q}</p>
              </Paper>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
