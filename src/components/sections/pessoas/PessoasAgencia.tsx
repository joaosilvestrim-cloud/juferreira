import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em, HandNote, Title } from "@/components/ui/Typography";
import { Ask, CheckList, Paper, Underline } from "./parts";

import { tx, img } from "@/lib/editable";
/** Gestos dos três modos: emaranhado (controle), linha reta (aceitação passiva), laço que avança (participação). */
function Gesture({ kind }: { kind: "tangle" | "flat" | "loop" }) {
  const d = {
    tangle:
      tx("pessoas/044756e7fd", "M4 40h40M44 40c8-14 30-16 34-4 4 12-14 20-22 10-8-10 6-24 18-20 12 4 10 22-2 24-12 2-18-12-8-20 10-8 26 0 22 12-3 9-16 10-20 2M78 38h64"),
    flat: tx("pessoas/7fdc14f32f", "M6 42C50 40 96 41 142 39"),
    loop: tx("pessoas/4264feb1e6", "M6 52C30 50 46 36 60 32c16-4 26 10 18 20-8 10-22 2-16-10 6-12 30-18 50-22 14-3 24-10 30-20"),
  }[kind];
  return (
    <svg viewBox="0 0 150 70" className="h-16 w-full max-w-[220px] text-ink-900" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={kind === "loop" ? tx("pessoas/470269393d", "M132 4l10-2-2 10") : kind === "flat" ? "M134 33l9 6-9 6" : "M134 32l9 6-9 6"}
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
    { t: tx("pessoas/f0e00d1acc", "Controle"), d: tx("pessoas/d33a043e84", "Tentar garantir o resultado."), g: "tangle" as const },
    { t: tx("pessoas/9f97928059", "Aceitação passiva"), d: tx("pessoas/081496ea8c", "Tratar aquilo que existe como se não houvesse nada a fazer."), g: "flat" as const },
    {
      t: tx("pessoas/c21d998657", "Participação"),
      d: (
        <>
          {tx("pessoas/2410b4f73e", "Reconhecer os limites e ainda assim perguntar:")} <strong className="font-semibold">{tx("pessoas/a4ac705638", "o que ainda está ao meu alcance?")}</strong>
        </>
      ),
      g: "loop" as const,
      highlight: true,
    },
  ];
  const pairs = [
    [tx("pessoas/4d68df95ad", "Talvez você não consiga mudar uma circunstância inteira."), tx("pessoas/62d972f22d", "Mas pode mudar a forma como responde a ela.")],
    [tx("pessoas/8bb8fdc758", "Talvez não consiga controlar o comportamento de alguém."), tx("pessoas/06ec598543", "Mas pode decidir o limite que coloca.")],
    [tx("pessoas/7871282531", "Talvez não consiga escolher o que aconteceu."), tx("pessoas/9dea916c28", "Mas pode escolher o que faz com aquilo que aconteceu depois.")],
    [
      tx("pessoas/6c8779408d", "Talvez não consiga transformar sua vida inteira agora."),
      tx("pessoas/abe9ad2d1f", "Mas pode fazer um movimento pequeno o suficiente para mudar aquilo que vem depois."),
    ],
  ];
  const reach = [
    tx("pessoas/aff95ca7fa", "uma conversa;"),
    tx("pessoas/82b6b60a54", "um limite;"),
    tx("pessoas/0c92cf3cd3", "um pedido de ajuda;"),
    tx("pessoas/df27f92e5e", "uma decisão adiada;"),
    tx("pessoas/daf2ce6205", "uma habilidade que precisa ser desenvolvida;"),
    tx("pessoas/ae63397e07", "um hábito que precisa ser interrompido;"),
    tx("pessoas/05233a371a", "um ambiente que precisa ser revisto;"),
    tx("pessoas/caa8977e51", "uma escolha que precisa finalmente ser assumida."),
  ];

  return (
    <Section tone="cream" label={tx("pessoas/25465d9d61", "Agência pessoal")} id="agencia">
      <Container>
        {/* A — título + foto */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
          <div>
            <Display size="lg">
              {tx("pessoas/3d768c0c60", "Nem tudo está nas suas mãos.")} <Em>{tx("pessoas/78c35efe14", "Mas alguma coisa está.")}</Em>
            </Display>
            <Underline />
            <div className="jf-body mt-8 max-w-[600px] text-ink-700">
              <p>
                {tx("pessoas/4d6a704ecf", "Você não escolheu tudo o que aconteceu. Não controla as outras pessoas. Não controla o tempo. Não controla o mercado. Não controla todas as circunstâncias. Não controla o corpo, a família, o trabalho, a economia ou o acaso como gostaria.")}</p>
              <p>{tx("pessoas/addefcbf50", "E fingir que controla seria uma mentira.")}</p>
              <p>{tx("pessoas/3cee66f195", "Mas existe outra mentira igualmente perigosa:")}</p>
            </div>
            <Ask className="mt-5 max-w-[560px]">
              {tx("pessoas/0cbf2f70bc", "achar que, porque você não controla tudo, então não pode participar de nada.")}</Ask>
            <div className="jf-body mt-6 text-ink-700">
              <p>
                {tx("pessoas/91c406ef43", "Entre uma coisa e outra existe um espaço enorme.")}{" "}
                <strong className="font-semibold text-ink-900">{tx("pessoas/d2b6078f05", "E é ali que a vida acontece.")}</strong>
              </p>
            </div>
          </div>
          <div className="relative">
            <Photo
              src={img("pessoas/db368b8efd", "/images/ensaio/ju-trabalho-tecnologia.webp")}
              alt={tx("pessoas/dbcb411305", "Juliana concentrada no trabalho em um notebook.")}
              sizes="(min-width:1024px) 45vw, 100vw"
              className="aspect-[4/3] w-full rounded-[var(--jf-radius-sm)]"
              imgClassName="object-[50%_40%]"
            />
            <HandNote className="mt-6 text-red-brand md:absolute md:-top-10 md:right-2 md:mt-0 md:max-w-[240px] md:rounded-md md:bg-cream-100/85 md:p-3">
              {tx("pessoas/bc5ddeb2db", "o que ainda está ao meu alcance?")}</HandNote>
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
            <p className="mt-6 text-[18px] font-semibold text-red-brand">{tx("pessoas/a112ce3ed6", "É aí que mora a participação.")}</p>
          </div>

          <div>
            <div className="rounded-[var(--jf-radius-sm)] bg-blush-100 p-7">
              <h3 className="jf-display jf-display-sm">
                {tx("pessoas/b50eee82b6", "Agência não é controle.")} <Em>{tx("pessoas/09c4f9c87e", "É participação.")}</Em>
              </h3>
            </div>
            <div className="jf-body mt-6 text-ink-700">
              <p>{tx("pessoas/aa5343a391", "Na escala pessoal, isso significa parar de perguntar apenas:")}</p>
            </div>
            <Ask tone="ink" className="mt-3">
              {tx("pessoas/a901fd800a", "“Como faço para tudo dar certo?”")}</Ask>
            <div className="jf-body mt-4 text-ink-700">
              <p>{tx("pessoas/5174726bc8", "e começar a perguntar:")}</p>
            </div>
            <Ask className="mt-3">{tx("pessoas/ff5bb3d9e1", "“Diante do que existe, onde eu ainda posso participar?”")}</Ask>
          </div>

          <div className="space-y-8">
            <Paper className="md:rotate-[1.5deg]">
              <h3 className="jf-hand text-[28px] text-ink-900">{tx("pessoas/6831f773cd", "Pode estar ao seu alcance:")}</h3>
              <CheckList items={reach} className="mt-4" />
            </Paper>
            <div className="jf-body text-ink-700">
              <p>{tx("pessoas/f793a4f6fe", "Às vezes, a potência não aparece como grande coragem.")}</p>
              <p>{tx("pessoas/de26da171f", "Às vezes, aparece como:")}</p>
            </div>
            <HandNote className="text-red-brand" rotate={-3}>
              {tx("pessoas/0fcd2238d4", "“isso eu consigo fazer hoje.”")}</HandNote>
          </div>
        </div>

        {/* D — fechamento em três colunas */}
        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:mt-20 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-10">
            <p className="jf-display jf-display-sm">
              {tx("pessoas/51064ea735", "Limites existem.")}<br />
              <Em>{tx("pessoas/c0c0da1386", "Potência também.")}</Em>
            </p>
            <p className="mt-4 text-[17px] font-semibold text-ink-900">{tx("pessoas/842c2ffdc4", "Maturidade não está em negar nenhum dos dois.")}</p>
          </div>
          <div className="jf-body text-ink-700 lg:px-10">
            <p>
              {tx("pessoas/219c7aacda", "Talvez o problema não seja não ter potência. Talvez seja não conseguir enxergar onde ela ainda existe.")}</p>
            <p>{tx("pessoas/dae5225694", "Porque, quando a vida parece muito grande, a pergunta “como mudo tudo?” paralisa.")}</p>
            <p>
              {tx("pessoas/03a8c59a3c", "Mas:")} <strong className="font-semibold text-red-brand">{tx("pessoas/9696b12367", "“o que ainda está ao meu alcance?”")}</strong> {tx("pessoas/dabfbdda81", "é uma pergunta que devolve movimento.")}</p>
          </div>
          <div className="lg:pl-10">
            <p className="font-serif text-[clamp(24px,2vw,30px)] leading-tight">
              {tx("pessoas/53fa327562", "Você não precisa controlar o caminho inteiro.")}</p>
            <p className="mt-2 font-serif text-[clamp(22px,1.8vw,28px)] leading-tight text-red-brand">
              {tx("pessoas/2bb75d73bc", "Precisa descobrir onde ainda existe espaço para escolha, capacidade e movimento.")}</p>
            <p className="mt-5 text-[17px] font-semibold text-ink-900">{tx("pessoas/59aee0e094", "Um movimento muda o que pode acontecer depois.")}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
