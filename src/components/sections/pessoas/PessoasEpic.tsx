import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em, HandNote } from "@/components/ui/Typography";
import { LINKS } from "@/lib/site";
import { LineIcon, Paper, Underline, type IconName } from "./parts";

function Epic() {
  return (
    <>
      EPIC<Em>247</Em>
    </>
  );
}

/* ───────────────────────── BLOCO 6 — EPIC247 ───────────────────────── */
export function PessoasEpic() {
  const pillars: { icon: IconName; t: string; body: ReactNode }[] = [
    {
      icon: "bolt",
      t: "Energia",
      body: (
        <>
          <p>Porque movimento exige combustível.</p>
          <p>Não no sentido de produtividade infinita. Mas de perceber:</p>
          <p className="text-ink-900">
            onde sua energia está indo; o que a consome; o que a sustenta; e como construir condições mínimas para agir.
          </p>
        </>
      ),
    },
    {
      icon: "growth",
      t: "Capacidade",
      body: (
        <>
          <p>Porque intenção sozinha não produz mudança.</p>
          <p>
            Algumas coisas precisam ser: <span className="text-ink-900">aprendidas; praticadas; fortalecidas; repetidas; reorganizadas.</span>
          </p>
          <p className="font-semibold text-ink-900">Transformação pessoal também é desenvolvimento.</p>
        </>
      ),
    },
    {
      icon: "play",
      t: "Ação",
      body: (
        <>
          <p>Porque, em algum momento, alguma coisa precisa sair da cabeça e entrar no mundo.</p>
          <p className="text-ink-900">Uma escolha. Um comportamento. Uma prática. Um teste. Um movimento.</p>
          <p className="font-semibold text-red-brand">Não precisa ser enorme. Precisa ser real.</p>
        </>
      ),
    },
  ];

  return (
    <Section tone="cream" label="EPIC247" id="epic247">
      <Container>
        {/* A — abertura + foto + pilares */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Display size="lg">
              Às vezes, perceber não basta. <Em>Você precisa começar a se mover.</Em>
            </Display>
            <Underline />
            <div className="jf-body mt-8 text-ink-700">
              <p>
                Existe uma diferença enorme entre: entender o que está acontecendo; saber o que gostaria de mudar; e conseguir
                transformar isso em prática.
              </p>
              <p>
                Você pode ter clareza. Pode ter lido. Pode ter refletido. Pode até saber exatamente o que precisa fazer. E ainda
                assim continuar parada.
              </p>
              <p>
                Não porque “não quer o suficiente”. Mas porque mudança também exige: energia; estrutura; repetição; capacidade;
                escolhas; e ação sustentada no mundo real.
              </p>
            </div>
            <p className="mt-6 text-[18px] font-semibold text-red-brand">
              É nesse espaço que entra o <Epic />.
            </p>
          </div>

          <div className="relative">
            <Photo
              src="/images/ju/rua.webp"
              alt="Ju Ferreira pensativa, com a mão no queixo"
              sizes="(min-width:1024px) 28vw, 100vw"
              className="aspect-[4/5] w-full rounded-[var(--jf-radius-sm)] lg:aspect-[3/4]"
              imgClassName="object-[45%_30%]"
            />
            <Paper className="-mt-10 ml-auto w-fit max-w-[240px] md:rotate-[4deg] lg:absolute lg:-right-6 lg:-top-6 lg:mt-0">
              <p className="jf-hand text-[28px]">Saber não muda sozinho.</p>
            </Paper>
          </div>

          <ul className="space-y-8">
            {pillars.map((p) => (
              <li key={p.t} className="grid grid-cols-[64px_1fr] gap-5">
                <LineIcon name={p.icon} />
                <div>
                  <h3 className="jf-title uppercase text-red-brand">{p.t}</h3>
                  <div className="mt-2 space-y-2 text-[15.5px] leading-relaxed text-ink-700">{p.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* B — o que é + cotidiano */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div className="rounded-[var(--jf-radius-sm)] bg-blush-100 p-7">
              <h3 className="jf-display jf-display-sm">
                <Epic /> é uma experiência prática de transformação pessoal.
              </h3>
            </div>
            <div className="jf-body mt-6 text-ink-700">
              <p>Foi construído para quem percebe que alguma coisa precisa mudar, mas não quer ficar apenas na reflexão.</p>
              <p>
                O objetivo não é criar uma versão perfeita de você. Nem prometer uma vida sem limites. Nem dizer que basta
                “querer muito”.
              </p>
              <p>
                É trabalhar, de forma prática, elementos que influenciam nossa capacidade de sair da intenção e entrar em
                movimento.
              </p>
            </div>
            <p className="mt-6 border-l-2 border-red-brand pl-5 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
              Você não precisa de mais uma ideia bonita sobre mudança.{" "}
              <span className="text-red-brand">Talvez precise de estrutura para conseguir praticá-la.</span>
            </p>
          </div>
          <div>
            <p className="jf-body text-ink-700">
              Você percebe. Decide que quer mudar alguma coisa. Faz planos. Começa.
            </p>
            <ul className="mt-4 space-y-1 font-serif text-[clamp(20px,1.6vw,24px)] leading-snug text-ink-900">
              <li>A rotina entra.</li>
              <li>O cansaço entra.</li>
              <li>As urgências entram.</li>
              <li>Um dia ruim entra.</li>
              <li>O comportamento antigo volta.</li>
            </ul>
            <div className="jf-body mt-4 text-ink-700">
              <p>E, pouco a pouco, aquilo que parecia uma escolha vira novamente intenção.</p>
              <p>Não porque você seja incapaz. Mas porque:</p>
            </div>
            <p className="jf-display jf-display-sm mt-5 uppercase">
              Transformação precisa sobreviver <Em>ao cotidiano.</Em>
            </p>
          </div>
        </div>

        {/* C — três colunas: não é Futuros Humanos / eu sei × eu faço / entender × praticar */}
        <div className="mt-16 grid gap-12 border-t border-ink-900/15 pt-12 lg:mt-20 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-10">
            <h3 className="font-serif text-[clamp(24px,2vw,30px)] leading-tight">
              <Epic /> não é Futuros Humanos em formato de programa.
            </h3>
            <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-ink-700">
              <p>São construções diferentes dentro do universo Ju Ferreira.</p>
              <p>
                <strong className="font-semibold text-ink-900">Futuros Humanos</strong> investiga possibilidades, agência,
                tecnologia, humanidade, direção e construção de futuros.
              </p>
              <p>
                <strong className="font-semibold text-ink-900">EPIC247</strong> trabalha transformação pessoal de maneira
                prática, ajudando a colocar mudança em movimento no cotidiano.
              </p>
              <p>Eles podem conversar. Mas não são a mesma coisa.</p>
            </div>
          </div>
          <div className="lg:px-10">
            <h3 className="font-serif text-[clamp(24px,2vw,30px)] leading-tight">
              Talvez <Epic /> faça sentido se o seu problema já não for apenas perceber.
            </h3>
            <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-ink-700">
              <p>
                Você já entendeu algumas coisas. Sabe que quer mudar alguma coisa. Talvez até saiba por onde deveria começar.
              </p>
              <p>Mas existe uma distância entre:</p>
            </div>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[clamp(26px,2.2vw,34px)]">
              <span>“eu sei”</span>
              <span className="text-[16px] text-ink-500">e</span>
              <span className="text-red-brand">“eu faço”.</span>
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-700">É essa distância que o produto procura trabalhar.</p>
          </div>
          <div className="lg:pl-10">
            <p className="font-serif text-[clamp(24px,2vw,30px)] leading-tight">
              Entender muda a forma como você enxerga.
            </p>
            <p className="mt-2 font-serif text-[clamp(24px,2vw,30px)] leading-tight text-red-brand">
              Praticar muda aquilo que você se torna capaz de fazer.
            </p>
          </div>
        </div>

        {/* D — apresentação + CTAs */}
        <div className="mt-16 grid gap-10 rounded-[var(--jf-radius-md)] bg-cream-50 p-7 sm:p-10 lg:mt-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14 lg:p-14">
          <div>
            <p className="font-serif text-[clamp(26px,2.6vw,40px)] leading-tight">
              <Epic /> — uma experiência prática para transformar percepção em movimento no cotidiano real.
            </p>
            <ButtonRow className="mt-8">
              <ButtonLink href={LINKS.epic247} size="lg">
                Conheça o EPIC247
              </ButtonLink>
              <ButtonLink href="#portas" variant="secondary" size="lg">
                Ainda não é isso? Continue explorando
              </ButtonLink>
            </ButtonRow>
          </div>
          <div className="space-y-4">
            <HandNote className="text-red-brand" rotate={-3}>
              Precisa funcionar quando a segunda-feira chega.
            </HandNote>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="jf-display jf-display-sm">Você não precisa esperar se sentir completamente pronta.</p>
            <p className="mt-3 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug text-red-brand">
              Às vezes, capacidade também é construída depois que o movimento começa.
            </p>
          </div>
          <p className="jf-body text-ink-700">
            Perceber importa. Escolher importa. Mas algumas mudanças só começam a existir quando encontram prática.
          </p>
        </div>
      </Container>
    </Section>
  );
}
