import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em, HandNote, Title } from "@/components/ui/Typography";
import { Ask, CheckList, Paper, Underline } from "./parts";

/** Gestos dos três modos: emaranhado (controle), linha reta (aceitação passiva), laço que avança (participação). */
function Gesture({ kind }: { kind: "tangle" | "flat" | "loop" }) {
  const d = {
    tangle:
      "M4 40h40M44 40c8-14 30-16 34-4 4 12-14 20-22 10-8-10 6-24 18-20 12 4 10 22-2 24-12 2-18-12-8-20 10-8 26 0 22 12-3 9-16 10-20 2M78 38h64",
    flat: "M6 42C50 40 96 41 142 39",
    loop: "M6 52C30 50 46 36 60 32c16-4 26 10 18 20-8 10-22 2-16-10 6-12 30-18 50-22 14-3 24-10 30-20",
  }[kind];
  return (
    <svg viewBox="0 0 150 70" className="h-16 w-full max-w-[220px] text-ink-900" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={kind === "loop" ? "M132 4l10-2-2 10" : kind === "flat" ? "M134 33l9 6-9 6" : "M134 32l9 6-9 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ───────────────────────── BLOCO 2 — AGÊNCIA PESSOAL ───────────────────────── */
export function PessoasAgencia() {
  const modes = [
    { t: "Controle", d: "Tentar garantir o resultado.", g: "tangle" as const },
    { t: "Aceitação passiva", d: "Tratar aquilo que existe como se não houvesse nada a fazer.", g: "flat" as const },
    {
      t: "Participação",
      d: (
        <>
          Reconhecer os limites e ainda assim perguntar: <strong className="font-semibold">o que ainda está ao meu alcance?</strong>
        </>
      ),
      g: "loop" as const,
      highlight: true,
    },
  ];
  const pairs = [
    ["Talvez você não consiga mudar uma circunstância inteira.", "Mas pode mudar a forma como responde a ela."],
    ["Talvez não consiga controlar o comportamento de alguém.", "Mas pode decidir o limite que coloca."],
    ["Talvez não consiga escolher o que aconteceu.", "Mas pode escolher o que faz com aquilo que aconteceu depois."],
    [
      "Talvez não consiga transformar sua vida inteira agora.",
      "Mas pode fazer um movimento pequeno o suficiente para mudar aquilo que vem depois.",
    ],
  ];
  const reach = [
    "uma conversa;",
    "um limite;",
    "um pedido de ajuda;",
    "uma decisão adiada;",
    "uma habilidade que precisa ser desenvolvida;",
    "um hábito que precisa ser interrompido;",
    "um ambiente que precisa ser revisto;",
    "uma escolha que precisa finalmente ser assumida.",
  ];

  return (
    <Section tone="cream" label="Agência pessoal" id="agencia">
      <Container>
        {/* A — título + foto */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
          <div>
            <Display size="lg">
              Nem tudo está nas suas mãos. <Em>Mas alguma coisa está.</Em>
            </Display>
            <Underline />
            <div className="jf-body mt-8 max-w-[600px] text-ink-700">
              <p>
                Você não escolheu tudo o que aconteceu. Não controla as outras pessoas. Não controla o tempo. Não controla o
                mercado. Não controla todas as circunstâncias. Não controla o corpo, a família, o trabalho, a economia ou o
                acaso como gostaria.
              </p>
              <p>E fingir que controla seria uma mentira.</p>
              <p>Mas existe outra mentira igualmente perigosa:</p>
            </div>
            <Ask className="mt-5 max-w-[560px]">
              achar que, porque você não controla tudo, então não pode participar de nada.
            </Ask>
            <div className="jf-body mt-6 text-ink-700">
              <p>
                Entre uma coisa e outra existe um espaço enorme.{" "}
                <strong className="font-semibold text-ink-900">E é ali que a vida acontece.</strong>
              </p>
            </div>
          </div>
          <div className="relative">
            <Photo
              src="/images/ensaio/ju-trabalho-tecnologia.webp"
              alt="Juliana concentrada no trabalho em um notebook."
              sizes="(min-width:1024px) 45vw, 100vw"
              className="aspect-[4/3] w-full rounded-[var(--jf-radius-sm)]"
              imgClassName="object-[50%_40%]"
            />
            <HandNote className="mt-6 text-red-brand md:absolute md:-top-10 md:right-2 md:mt-0 md:max-w-[240px] md:rounded-md md:bg-cream-100/85 md:p-3">
              o que ainda está ao meu alcance?
            </HandNote>
          </div>
        </div>

        {/* B — três modos */}
        <ul className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          {modes.map((m) => (
            <li
              key={m.t}
              className={`flex flex-col rounded-[var(--jf-radius-sm)] p-7 ${m.highlight ? "bg-blush-100" : "bg-cream-50"}`}
            >
              <Title as="h3" className="uppercase tracking-[0.06em]">
                {m.t}
              </Title>
              <p className="mt-2 text-[16px] font-medium leading-snug text-red-brand">{m.d}</p>
              <div className="mt-auto pt-6">
                <Gesture kind={m.g} />
              </div>
            </li>
          ))}
        </ul>

        {/* C — participação na prática */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1.05fr_1fr_0.85fr] lg:gap-10">
          <div>
            <ul className="space-y-5">
              {pairs.map(([a, b]) => (
                <li key={a} className="jf-body text-ink-700">
                  {a}
                  <br />
                  <span className="text-ink-900">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[18px] font-semibold text-red-brand">É aí que mora a participação.</p>
          </div>

          <div>
            <div className="rounded-[var(--jf-radius-sm)] bg-blush-100 p-7">
              <h3 className="jf-display jf-display-sm">
                Agência não é controle. <Em>É participação.</Em>
              </h3>
            </div>
            <div className="jf-body mt-6 text-ink-700">
              <p>Na escala pessoal, isso significa parar de perguntar apenas:</p>
            </div>
            <Ask tone="ink" className="mt-3">
              “Como faço para tudo dar certo?”
            </Ask>
            <div className="jf-body mt-4 text-ink-700">
              <p>e começar a perguntar:</p>
            </div>
            <Ask className="mt-3">“Diante do que existe, onde eu ainda posso participar?”</Ask>
          </div>

          <div className="space-y-8">
            <Paper className="md:rotate-[1.5deg]">
              <h3 className="jf-hand text-[28px] text-ink-900">Pode estar ao seu alcance:</h3>
              <CheckList items={reach} className="mt-4" />
            </Paper>
            <div className="jf-body text-ink-700">
              <p>Às vezes, a potência não aparece como grande coragem.</p>
              <p>Às vezes, aparece como:</p>
            </div>
            <HandNote className="text-red-brand" rotate={-3}>
              “isso eu consigo fazer hoje.”
            </HandNote>
          </div>
        </div>

        {/* D — fechamento em três colunas */}
        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:mt-20 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-10">
            <p className="jf-display jf-display-sm">
              Limites existem.
              <br />
              <Em>Potência também.</Em>
            </p>
            <p className="mt-4 text-[17px] font-semibold text-ink-900">Maturidade não está em negar nenhum dos dois.</p>
          </div>
          <div className="jf-body text-ink-700 lg:px-10">
            <p>
              Talvez o problema não seja não ter potência. Talvez seja não conseguir enxergar onde ela ainda existe.
            </p>
            <p>Porque, quando a vida parece muito grande, a pergunta “como mudo tudo?” paralisa.</p>
            <p>
              Mas: <strong className="font-semibold text-red-brand">“o que ainda está ao meu alcance?”</strong> é uma pergunta
              que devolve movimento.
            </p>
          </div>
          <div className="lg:pl-10">
            <p className="font-serif text-[clamp(24px,2vw,30px)] leading-tight">
              Você não precisa controlar o caminho inteiro.
            </p>
            <p className="mt-2 font-serif text-[clamp(22px,1.8vw,28px)] leading-tight text-red-brand">
              Precisa descobrir onde ainda existe espaço para escolha, capacidade e movimento.
            </p>
            <p className="mt-5 text-[17px] font-semibold text-ink-900">Um movimento muda o que pode acontecer depois.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
