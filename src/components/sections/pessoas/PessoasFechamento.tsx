import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em, HandNote } from "@/components/ui/Typography";
import { LINKS } from "@/lib/site";
import { Paper } from "./parts";

const VERBS = [
  { n: 1, v: "Imaginar", lead: "Talvez você precise", q: "E se pudesse ser diferente?", d: "Permitir que outra possibilidade exista antes de descartá-la." },
  { n: 2, v: "Escolher", lead: "Talvez precise", q: "O que eu quero ajudar a tornar possível?", d: "Dar direção àquilo que está aberto." },
  { n: 3, v: "Tornar-se", lead: "Talvez precise", q: "Do que eu preciso me tornar capaz?", d: "Construir condições para sustentar a escolha." },
  { n: 4, v: "Construir", lead: "Talvez precise", q: "O que consigo fazer agora?", d: "Colocar um primeiro movimento no mundo." },
];

/** As quatro portas têm exatamente o mesmo peso visual (mesmo card, mesmo botão). */
const DOORS = [
  {
    k: "Quero começar a me mover",
    t: "EPIC247",
    d: "Para quando perceber já não basta e você sente que precisa transformar intenção em prática.",
    cta: "Conheça o EPIC247",
    href: LINKS.epic247,
  },
  {
    k: "Quero continuar essa conversa",
    t: "Uma Terça-feira Qualquer",
    d: "Uma pausa semanal para pensar futuros, escolhas, humanidade e vida real.",
    cta: "Assine a newsletter",
    href: LINKS.newsletter,
  },
  {
    k: "Quero pensar com mais profundidade",
    t: "Ideias",
    d: "Artigos, ensaios e investigações para perguntas que não cabem em respostas rápidas.",
    cta: "Explore as ideias",
    href: "/ideias",
  },
  {
    k: "Quero aprofundar essa lente",
    t: "Futuros Humanos",
    d: "O território intelectual onde possibilidade, agência, tecnologia, humanidade e construção de futuros se encontram.",
    cta: "Conheça Futuros Humanos",
    href: "/futuros-humanos",
  },
];

/* ───────────────────────── BLOCO 9 — FECHAMENTO ───────────────────────── */
export function PessoasFechamento() {
  return (
    <>
      <Section tone="wine" label="Comece de onde você está" id="comece">
        <Stroke shape="orbit" className="absolute -right-24 top-0 hidden h-full w-[48%] opacity-70 lg:block" width={2.5} color="var(--jf-red-400)" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              <Display size="xl">
                Comece de <Em>onde você está.</Em>
              </Display>
              <Stroke shape="underline" className="mt-3 h-4 w-[min(460px,80%)]" color="var(--jf-red-400)" width={3} />
              <p className="mt-8 font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
                Você não precisa estar pronta. <span className="text-red-bright">Precisa estar aqui.</span>
              </p>
              <div className="jf-body mt-6 max-w-[620px] text-cream-50/85">
                <p>
                  Com a vida que existe hoje. Com aquilo que você já sabe. Com o que ainda não sabe. Com as capacidades que já
                  tem. Com as que ainda precisa desenvolver. Com os limites reais. Com as possibilidades que ainda consegue
                  enxergar.
                </p>
                <p>Porque qualquer futuro que venha a ser construído começa inevitavelmente de algum presente.</p>
                <p className="font-semibold text-cream-50">E este é o seu.</p>
              </div>
            </div>

            <div className="relative">
              <Photo
                src="/images/ensaio/home-01-abertura-horizontal.webp"
                alt="Juliana de preto diante de uma paisagem ampla ao entardecer."
                sizes="(min-width:1024px) 45vw, 100vw"
                className="jf-paper-edge aspect-[4/3] w-full"
              />
              <Paper className="-mt-8 ml-4 w-fit max-w-[250px] md:-rotate-3 lg:absolute lg:-left-10 lg:top-8 lg:ml-0 lg:mt-0">
                <p className="jf-hand text-[28px]">Tudo isso pode ser começo.</p>
              </Paper>
            </div>
          </div>

          <div className="mt-14 grid gap-10 border-t border-cream-50/20 pt-10 lg:grid-cols-2 lg:gap-16">
            <div className="jf-body text-cream-50/85">
              <p>
                Talvez você tenha chegado até aqui procurando uma resposta. Talvez tenha encontrado mais perguntas. Talvez alguma
                coisa tenha feito sentido. Talvez outra tenha incomodado. Talvez você tenha percebido que precisa fazer alguma
                coisa. Ou talvez tenha percebido que ainda precisa de tempo.
              </p>
            </div>
            <div>
              <div className="jf-body text-cream-50/85">
                <p>
                  Você não precisa ter clareza sobre os próximos dez anos. Não precisa descobrir uma versão definitiva de si
                  mesma. Não precisa reorganizar a vida inteira antes de começar. Não precisa transformar toda inquietação em
                  projeto.
                </p>
                <p>Precisa apenas reconhecer:</p>
              </div>
              <p className="mt-4 border-l-2 border-red-bright pl-5 font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
                o que está vivo para você agora?
              </p>
              <p className="jf-body mt-4 text-cream-50/85">E qual relação você quer ter com isso.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section label="Próximo passo" className="pb-0">
        <Container>
          {/* verbos */}
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_1.15fr] lg:gap-0 lg:divide-x lg:divide-ink-900/15">
            {VERBS.map((v) => (
              <li key={v.v} className="lg:px-6 lg:first:pl-0">
                <p className="text-[14px] text-ink-500">{v.lead}</p>
                <h3 className="mt-1 flex items-center gap-3 font-serif text-[26px] uppercase tracking-[0.08em] text-red-brand">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-brand text-[18px]" aria-hidden>
                    {v.n}
                  </span>
                  {v.v}
                </h3>
                <p className="mt-3 font-serif text-[20px] leading-snug text-ink-900">{v.q}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{v.d}</p>
              </li>
            ))}
            <li className="sm:col-span-2 lg:col-span-1 lg:pl-6">
              <div className="rounded-[var(--jf-radius-sm)] bg-blush-100 p-6">
                <h3 className="jf-eyebrow text-[13px] leading-relaxed text-ink-900">
                  Ou talvez você precise apenas continuar prestando atenção.
                </h3>
                <p className="mt-3 font-serif text-[20px] leading-snug">Porque atenção também pode anteceder participação.</p>
              </div>
            </li>
          </ol>

          {/* portas — mesmo peso */}
          <div className="mt-16 lg:mt-20">
            <h3 className="jf-display jf-display-sm max-w-[820px]">
              Você não precisa saber todo o caminho para participar <Em>do próximo passo.</Em>
            </h3>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {DOORS.map((d) => (
                <li key={d.t} className="flex flex-col rounded-[var(--jf-radius-sm)] border border-ink-900/15 bg-cream-50 p-6">
                  <p className="jf-eyebrow text-[11px] text-ink-500">{d.k}</p>
                  <h4 className="jf-display mt-4 text-[clamp(28px,2.3vw,34px)]">{d.t}</h4>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-ink-700">{d.d}</p>
                  <div className="mt-auto pt-6">
                    <ButtonLink href={d.href} variant="secondary" size="sm" className="w-fit">
                      {d.cta}
                    </ButtonLink>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[16px] text-ink-700">
              São entradas diferentes para necessidades diferentes.{" "}
              <strong className="font-semibold text-red-brand">A porta certa depende do momento.</strong>
            </p>
          </div>
        </Container>

        {/* encerramento */}
        <div className="relative mt-20 overflow-hidden border-t border-ink-900/10 pb-[var(--jf-section-y)] pt-16 lg:mt-24">
          <Stroke shape="orbit" className="absolute -left-20 top-0 hidden h-full w-[40%] opacity-60 lg:block" width={2} />
          <Container className="relative text-center">
            <p className="jf-display jf-display-md uppercase">
              Limites existem. <Em>Potência também.</Em>
            </p>
            <p className="jf-body mx-auto mt-5 max-w-[640px] text-ink-700">
              Você pode reconhecer o que não depende de você sem desaparecer daquilo que ainda depende.
            </p>
            <p className="mx-auto mt-14 max-w-[820px] font-serif text-[clamp(28px,3vw,46px)] uppercase leading-tight">
              Aquilo que existe não esgota aquilo que pode existir.
            </p>
            <Stroke shape="underline" className="mx-auto mt-3 h-4 w-[min(420px,70%)]" width={3} />
            <div className="jf-body mx-auto mt-8 max-w-[620px] text-ink-700">
              <p>
                Você não controla tudo o que vem depois. Mas isso não significa que não participa daquilo que vem depois.
              </p>
              <p>
                Talvez o próximo futuro não comece com uma grande decisão. Talvez comece com uma pergunta. Uma escolha. Uma
                capacidade. Um movimento.
              </p>
            </div>
            <HandNote className="mt-6 text-red-brand" rotate={-2}>
              Uma terça-feira qualquer.
            </HandNote>
            <p className="jf-eyebrow mt-14 text-[clamp(14px,1.4vw,18px)] tracking-[0.4em] text-red-brand">Temos futuros para construir.</p>
          </Container>
        </div>
      </Section>
    </>
  );
}
