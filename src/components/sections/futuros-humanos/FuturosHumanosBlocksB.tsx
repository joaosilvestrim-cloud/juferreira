import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, HandNote, NumberBadge, Title } from "@/components/ui/Typography";
import { SpiralDiagram } from "@/components/sections/home/HomeBlocks";
import { CONTACT_ROUTES } from "@/lib/site";
import { Lines, Pull } from "./FuturosHumanosBlocksA";

/* ───────────────────────── BLOCO 6 — A ESPIRAL ───────────────────────── */
const MOVEMENTS = [
  {
    n: 1,
    t: "Imaginar",
    q: "E se pudesse ser diferente?",
    body: [
      "Imaginar interrompe o automático.",
      "Abre espaço para alternativas.",
      "Permite olhar para aquilo que existe sem tratá-lo como a única configuração possível.",
      "Não é fantasiar que não existem limites.",
      "É ampliar o campo antes de decidir.",
    ],
  },
  {
    n: 2,
    t: "Escolher",
    q: "O que queremos ajudar a tornar possível?",
    body: [
      "Nem todo futuro possível é desejável.",
      "Nem toda inovação merece ser construída.",
      "Nem toda oportunidade precisa ser perseguida.",
      "Escolher é introduzir direção.",
      "É explicitar valores, prioridades e responsabilidade.",
    ],
  },
  {
    n: 3,
    t: "Tornar-se",
    q: "Do que precisamos nos tornar capazes?",
    body: [
      "Escolher um futuro não significa estar pronto para sustentá-lo.",
      "Talvez precisemos aprender. Mudar comportamento. Desenvolver discernimento. Criar novas capacidades. Abandonar algumas formas de pensar. Construir outras.",
    ],
    note: "não basta querer um futuro diferente. precisamos nos tornar capazes de habitá-lo e construí-lo.",
  },
  {
    n: 4,
    t: "Construir",
    q: "O que podemos fazer agora para tornar esse futuro um pouco mais possível?",
    body: [
      "Construção devolve a conversa ao presente.",
      "Uma decisão. Um experimento. Uma conversa. Uma mudança de processo. Um protótipo. Uma nova pergunta.",
      "Um pequeno movimento que altera o que pode acontecer depois.",
      "Não precisa começar grande. Precisa começar real.",
    ],
  },
];

export function FHEspiral() {
  return (
    <Section label="A Espiral" id="espiral">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div>
          <Display size="lg">
            Pensar futuros não termina <Em>em imaginar.</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 max-w-[560px] text-ink-700">
            <p>
              Imaginar possibilidades é importante.
              <br />
              Mas possibilidades, sozinhas, não mudam nada.
            </p>
            <p>Em algum momento precisamos perguntar:</p>
          </Body>
          <p className="mt-2 font-serif text-[21px] font-medium">qual delas queremos ajudar a tornar possível?</p>
          <p className="jf-body mt-4 text-ink-700">Depois vem outra questão:</p>
          <p className="mt-2 font-serif text-[21px] font-medium">do que precisamos nos tornar capazes para sustentar essa escolha?</p>
          <p className="jf-body mt-4 text-ink-700">E então:</p>
          <p className="mt-2 font-serif text-[21px] font-medium">
            o que conseguimos fazer agora para mover essa possibilidade um pouco mais para perto da realidade?
          </p>
          <p className="jf-body mt-6 text-ink-700">Foi assim que essas quatro perguntas começaram a se organizar para mim.</p>
          <p className="jf-eyebrow mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-red-brand">
            Imaginar <span aria-hidden>→</span> Escolher <span aria-hidden>→</span> Tornar-se <span aria-hidden>→</span>{" "}
            Construir <span aria-hidden>↻</span>
          </p>
          <p className="mt-3 font-serif text-[22px]">
            Não é uma linha reta. <Em>É uma espiral.</Em>
          </p>
        </div>
        <SpiralDiagram className="mx-auto w-full max-w-[620px]" />
      </Container>

      <Container className="mt-16 lg:mt-20">
        <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {MOVEMENTS.map((m) => (
            <li key={m.t} className="relative flex flex-col bg-cream-100 p-7 shadow-[0_10px_30px_-22px_rgba(24,20,17,.5)]">
              <div className="flex items-center gap-4">
                <NumberBadge n={m.n} />
                <h3 className="font-serif text-[26px] uppercase tracking-[0.04em]">{m.t}</h3>
              </div>
              <p className="mt-4 font-semibold leading-snug text-red-brand">{m.q}</p>
              <div className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-700">
                {m.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
              {m.note && <p className="mt-4 font-serif text-[18px] font-medium leading-snug text-ink-900">{m.note}</p>}
            </li>
          ))}
        </ol>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <div className="lg:pr-10">
            <Body className="text-ink-700">
              <p>Depois de construir, não terminamos.</p>
              <p>
                O mundo responde. A realidade devolve informação. Algumas hipóteses sobrevivem. Outras quebram. Nós
                aprendemos. Mudamos.
              </p>
              <p>E aquilo que somos capazes de imaginar também muda.</p>
            </Body>
            <Title as="h3" className="mt-8 border-l-[3px] border-red-brand pl-4 text-[clamp(24px,2vw,30px)]">
              A Espiral não fecha.
            </Title>
            <p className="jf-body mt-4 text-ink-700">
              Voltamos a imaginar.
              <br />
              Mas não somos mais exatamente os mesmos.
            </p>
          </div>
          <div className="lg:px-10">
            <Pull>Nós construímos futuros e somos construídos enquanto os construímos.</Pull>
            <p className="jf-body mt-6 text-ink-700">Enquanto construímos alguma coisa no mundo:</p>
            <Lines
              dash
              className="mt-3 font-semibold text-ink-900"
              items={["aprendemos;", "mudamos;", "ganhamos capacidades;", "perdemos certezas;", "transformamos a nós mesmos."]}
            />
          </div>
          <div className="lg:pl-10">
            <HandNote className="text-red-brand" rotate={-3}>
              A Espiral precisa sobreviver a uma terça-feira qualquer.
            </HandNote>
            <p className="jf-body mt-5 text-ink-700">Reunião. Cliente. Medo. Filhos. Cansaço. Boletos. Decisão difícil.</p>
            <p className="jf-body mt-3 text-ink-700">Se ela só funciona num workshop de estratégia, não serve.</p>
            <p className="jf-body mt-3 text-ink-700">Por isso o movimento precisa caber também em perguntas pequenas:</p>
            <Lines
              dash
              className="mt-3 font-serif text-[19px] leading-snug"
              items={[
                "O que estou vendo?",
                "O que estou escolhendo?",
                "Do que preciso me tornar capaz?",
                "Qual movimento consigo fazer agora?",
              ]}
            />
          </div>
        </div>
        <p className="mt-12 max-w-[860px] border-t border-ink-900/15 pt-6 text-[14px] leading-relaxed text-ink-500">
          A Espiral é apresentada aqui como{" "}
          <strong className="font-semibold text-ink-700">
            uma arquitetura de pensamento e movimento que organiza Futuros Humanos
          </strong>
          , não como método proprietário fechado ou metodologia comprovada.
        </p>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 7 — HUMANIDADE, TECNOLOGIA E AUTORIA ───────────────────────── */
export function FHAutoria() {
  const questions = ["Para quê?", "Em nome de quê?", "Com quais consequências?", "Para quem?", "O que queremos ajudar a tornar possível?"];
  return (
    <Section tone="dark" padded={false} label="Humanidade, tecnologia e autoria">
      <div className="grid lg:grid-cols-[55%_45%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:pr-10">
          <Display size="md">
            O desafio não é escolher entre humanos e tecnologia.{" "}
            <Em>É decidir que parte da autoria queremos manter.</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} color="var(--jf-red-400)" />
          <Body className="mt-10 max-w-[620px] text-cream-50/85">
            <p>Eu não acredito numa disputa entre pessoas e ferramentas.</p>
            <p>
              Tecnologia sempre ampliou aquilo que conseguimos fazer. Ela nos permite enxergar mais longe. Processar mais
              informação. Executar mais rápido. Criar coisas que antes pareciam impossíveis.
            </p>
            <p>E isso pode ser extraordinário.</p>
            <p>
              O problema começa quando, junto com a execução, começamos a terceirizar também aquilo que deveria continuar
              exigindo presença humana.
            </p>
          </Body>
          <p className="mt-4 font-serif text-[22px] leading-snug text-cream-50">
            Julgamento. Direção. Responsabilidade. <Em>Sentido.</Em>
          </p>
        </Container>
        <div className="relative min-h-[460px]">
          <Photo
            src="/images/ju/quadro.webp"
            alt="Ju Ferreira pensativa em seu escritório, à noite, diante do notebook"
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[45%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/10 to-transparent max-lg:bg-gradient-to-b" aria-hidden />
          <ul className="absolute right-8 top-10 hidden w-[220px] space-y-3 lg:block" aria-label="Perguntas que nenhuma eficiência resolve por nós">
            {questions.map((q, i) => (
              <li
                key={q}
                className="jf-hand bg-cream-50 px-4 py-2 text-[22px] leading-tight text-ink-900 shadow-[0_8px_20px_-10px_rgba(0,0,0,.6)]"
                style={{ transform: `rotate(${i % 2 ? 2 : -3}deg)` }}
              >
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <div className="space-y-5 text-cream-50/85">
              <p className="jf-body">
                Porque uma ferramenta pode produzir uma resposta.
                <br />
                <strong className="font-semibold text-cream-50">Mas não vive as consequências dela.</strong>
              </p>
              <p className="jf-body">
                Pode recomendar uma decisão.
                <br />
                Mas não carrega a responsabilidade pelo mundo que essa decisão ajuda a produzir.
              </p>
              <p className="jf-body">
                Pode otimizar um objetivo.
                <br />
                Mas não pergunta, sozinha, se aquele objetivo deveria continuar sendo perseguido.
              </p>
              <p className="jf-body">
                Pode ampliar nossa capacidade de construir.
                <br />
                Mas não decide:
              </p>
            </div>
            <p className="mt-3 font-serif text-[clamp(22px,2vw,28px)] text-red-bright">o que vale a pena construir?</p>
          </div>
          <div>
            <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <div className="border border-cream-50/25 bg-cream-50/5 p-6">
                <h3 className="jf-eyebrow text-[13px] text-cream-50">Delegar execução</h3>
                <p className="mt-2 text-cream-50/80">pode ampliar capacidade.</p>
              </div>
              <span className="text-center font-serif text-[40px] leading-none text-red-bright" aria-label="é diferente de">
                ≠
              </span>
              <div className="bg-cream-50 p-6 text-ink-900">
                <h3 className="jf-eyebrow text-[13px]">Terceirizar autoria</h3>
                <p className="mt-2 text-ink-700">pode diminuir presença.</p>
              </div>
            </div>
            <p className="jf-body mt-6 text-cream-50/80">
              Usar uma ferramenta para ampliar aquilo que fazemos não exige abandonar nossa participação naquilo que ela
              produz.
            </p>
            <h3 className="jf-lead mt-10 border-l-[3px] border-red-bright pl-5">
              Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.
            </h3>
            <Body className="mt-6 text-cream-50/80">
              <p>“Mais humanos” não significa rejeitar tecnologia.</p>
              <p>Também não significa que seres humanos serão sempre melhores executores.</p>
              <p>Significa preservar nossa presença nas perguntas que nenhuma eficiência resolve por nós:</p>
            </Body>
            <ul className="mt-4 space-y-1 font-serif text-[20px] text-cream-50 lg:hidden">
              {questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-cream-50/20 pt-12 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-0 lg:divide-x lg:divide-cream-50/20">
          <div className="lg:pr-10">
            <h3 className="border-l-[3px] border-red-bright pl-4 font-serif text-[clamp(22px,1.9vw,27px)] leading-snug">
              Autoria, para mim, é <Em>permanecer presente naquilo que ajudamos a construir.</Em>
            </h3>
            <Lines
              className="mt-5 text-[15px] leading-relaxed text-cream-50/80"
              items={[
                "Não significa fazer tudo pessoalmente.",
                "Não significa controlar todos os resultados.",
                "Significa não desaparecer da escolha de direção.",
                "Não terceirizar completamente o julgamento.",
                "Não entregar a outra pessoa, sistema ou ferramenta a responsabilidade por decidir que mundo merece ser construído.",
              ]}
            />
          </div>
          <div className="lg:px-10">
            <Display as="h3" size="sm" caps className="border-l-[3px] border-red-bright pl-5">
              Para não entregar às nossas ferramentas a autoria da nossa humanidade.
            </Display>
            <Stroke shape="underline" className="ml-5 mt-3 h-4 w-48" width={4} color="var(--jf-red-400)" />
            <p className="mt-8 font-serif text-[clamp(22px,1.9vw,28px)] text-red-bright">
              Humanidade não é automaticamente virtude.
            </p>
            <Body className="mt-4 text-cream-50/80">
              <p>
                Nós também somos capazes de errar, excluir, reproduzir preconceitos, agir por medo, buscar poder e tomar
                decisões ruins.
              </p>
              <p>Portanto, “manter humanos na decisão” não resolve tudo.</p>
              <p>O desafio é maior:</p>
            </Body>
            <p className="mt-3 font-semibold leading-relaxed text-cream-50">
              precisamos desenvolver qualidade humana suficiente para usar capacidades cada vez maiores com discernimento,
              responsabilidade e direção.
            </p>
          </div>
          <div className="lg:pl-10">
            <h3 className="font-serif text-[clamp(22px,1.9vw,27px)] leading-snug">
              A pergunta nunca foi apenas o que nossas ferramentas serão capazes de fazer.
            </h3>
            <p className="jf-body mt-4 text-cream-50/80">É também:</p>
            <p className="mt-2 font-serif text-[20px] leading-snug">
              Quem queremos continuar sendo quando elas forem capazes de fazer cada vez mais?
            </p>
            <p className="jf-body mt-4 text-cream-50/80">E:</p>
            <p className="mt-2 font-serif text-[20px] leading-snug text-red-bright">
              Que parte da decisão sobre o que vem depois ainda queremos assumir como nossa?
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 8 — O QUE FUTUROS HUMANOS PROVOCA ───────────────────────── */
export function FHProvoca() {
  const audiences = [
    {
      t: "Para pessoas",
      lead: "Pode ajudar alguém a perguntar:",
      img: "pessoas.webp",
      alt: "Ju Ferreira pensativa, de perfil",
      items: [
        "Que futuro estou ajudando a tornar mais provável com aquilo que repito hoje?",
        "O que ainda pode ser diferente?",
        "Que escolhas estou adiando?",
        "Do que preciso me tornar capaz?",
        "Que parte da minha vida está sendo construída no automático?",
        "Qual movimento consigo fazer agora?",
      ],
    },
    {
      t: "Para lideranças",
      lead: "Pode provocar perguntas como:",
      img: "liderancas.webp",
      alt: "Ju Ferreira em conversa com uma liderança",
      items: [
        "Que comportamentos estamos recompensando?",
        "Que decisões estamos automatizando sem revisar seus critérios?",
        "Que capacidades nossas equipes precisarão desenvolver?",
        "Que futuro nossa estratégia está tornando mais provável?",
        "O que estamos ampliando sem perguntar se vale a pena ampliar?",
      ],
    },
    {
      t: "Para organizações",
      lead: "Pode ajudar a enxergar:",
      img: "organizacoes.webp",
      alt: "Ju Ferreira organizando ideias em post-its numa parede de vidro",
      items: [
        "tensões antes de virarem crise;",
        "possibilidades antes de virarem tendência dominante;",
        "efeitos humanos de decisões tecnológicas;",
        "capacidades que ainda precisam ser desenvolvidas;",
        "e escolhas que estavam sendo tratadas como inevitáveis.",
      ],
    },
  ];
  const formats = [
    { t: "Palestras", d: "para abrir perspectiva." },
    { t: "Workshops", d: "para transformar reflexão em escolha e movimento." },
    { t: "Experiências customizadas", d: "quando a pergunta pede mais profundidade." },
  ];
  return (
    <Section label="O que Futuros Humanos provoca">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div>
          <Display size="lg">
            Futuros Humanos não entrega respostas prontas. <Em>Ele muda a qualidade das perguntas.</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
        </div>
        <div className="lg:pt-4">
          <Body className="text-ink-700">
            <p>
              Porque uma boa pergunta pode mudar aquilo que uma pessoa percebe. Pode revelar uma escolha que estava
              escondida. Pode expor uma contradição. Pode deslocar uma conversa. Pode tornar visível aquilo que o automático
              estava normalizando.
            </p>
            <p>E, às vezes, pode abrir um caminho que antes nem parecia existir.</p>
          </Body>
          <Lines
            className="jf-body mt-6 border-l-[3px] border-red-brand pl-5 font-medium text-ink-900"
            items={["Futuros Humanos entra justamente aí.", "Não para prever.", "Não para prescrever.", "Mas para provocar movimento."]}
          />
        </div>
      </Container>

      <Container className="mt-16">
        <ul className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-ink-900/15">
          {audiences.map((a, i) => (
            <li key={a.t} className={i === 0 ? "md:pr-8" : i === 1 ? "md:px-8" : "md:pl-8"}>
              <div className="relative aspect-[16/6] overflow-hidden rounded-sm">
                <Photo src={`/images/ph/futuros-humanos/${a.img}`} alt={a.alt} sizes="(min-width:768px) 30vw, 100vw" className="absolute inset-0" />
              </div>
              <h3 className="mt-6 font-serif text-[clamp(28px,2.4vw,36px)] leading-none">{a.t}</h3>
              <Dash className="mt-3" />
              <p className="mt-4 font-semibold text-ink-900">{a.lead}</p>
              <Lines dash className="mt-3 text-[15px] leading-relaxed text-ink-700" items={a.items} />
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <Body className="text-ink-700">
              <p>
                A conversa pode começar no futuro.
                <br />
                Mas quase sempre termina no presente.
              </p>
              <p>
                Porque é aqui que escolhas viram prática.
                <br />E prática começa a construir consequência.
              </p>
            </Body>
            <Display as="h3" size="sm" className="mt-8 border-l-[3px] border-red-brand pl-5">
              O objetivo não é sair sabendo o que vai acontecer.{" "}
              <Em>É sair mais capaz de participar do que pode acontecer.</Em>
            </Display>
          </div>
          <div>
            <p className="jf-title">Essa conversa pode assumir formatos diferentes.</p>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {formats.map((f) => (
                <li key={f.t}>
                  <Dash />
                  <h4 className="mt-3 font-serif text-[20px] uppercase leading-tight tracking-[0.04em]">{f.t}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{f.d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-7">
              <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
                A pergunta nunca é apenas “o que vem depois?”.
              </p>
              <p className="jf-body mt-3 text-ink-700">É também:</p>
              <Lines
                dash
                className="mt-2 font-serif text-[19px] leading-snug"
                items={[
                  "o que queremos ajudar a tornar possível?",
                  "quem precisamos nos tornar para sustentar essa escolha?",
                  "e o que podemos começar a construir agora?",
                ]}
              />
              <ButtonLink href={CONTACT_ROUTES.organizacoes} className="mt-8">
                Leve Futuros Humanos para sua organização
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — ENCERRAMENTO ───────────────────────── */
export function FHEncerramento() {
  return (
    <Section tone="wine" padded={false} label="Encerramento">
      <div className="grid lg:grid-cols-[60%_40%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[900px] lg:pr-10">
          <Display size="xl" caps>
            Temos futuros <Em>para construir.</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-64" width={4} color="var(--jf-red-400)" />
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10">
            <div>
              <Body className="text-cream-50/85">
                <p>
                  Não porque controlamos o que vem depois.
                  <br />
                  Não porque qualquer coisa seja possível.
                  <br />
                  Não porque imaginar seja suficiente.
                </p>
                <p>Mas porque existe um espaço entre aquilo que existe e aquilo que ainda pode existir.</p>
                <p>Um espaço de:</p>
              </Body>
              <ul className="jf-body mt-3 border-l-[3px] border-red-bright pl-5 font-medium text-cream-50">
                {["possibilidade.", "escolha.", "capacidade.", "participação.", "construção."].map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p className="jf-body mt-5 text-cream-50/85">E é nesse espaço que Futuros Humanos acontece.</p>
            </div>
            <div>
              <p className="font-serif text-[24px] leading-tight">Ao longo dessa conversa, falamos sobre:</p>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-cream-50/85">
                {[
                  "O futuro mais provável não é o único possível.",
                  "Capacidade não é direção.",
                  "Agência não é controle.",
                  "O automático também constrói futuros.",
                  "Nós construímos futuros e somos construídos enquanto os construímos.",
                  "E, quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-[0.8em] h-px w-5 shrink-0 bg-red-bright" aria-hidden />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-14 border-t border-cream-50/25 pt-10">
            <div className="border-l-[3px] border-red-bright pl-5">
              <h3 className="font-serif text-[clamp(26px,2.6vw,40px)] leading-tight">O que queremos ajudar a tornar possível?</h3>
              <h3 className="mt-2 font-serif text-[clamp(26px,2.6vw,40px)] leading-tight text-red-bright">
                Quem precisamos nos tornar para construir futuros diferentes?
              </h3>
            </div>
            <ButtonRow className="mt-10">
              <ButtonLink href={CONTACT_ROUTES.organizacoes} size="lg" className="bg-red-bright">
                Leve Futuros Humanos para sua organização
              </ButtonLink>
              <ButtonLink href="/ideias" variant="ghost-light" size="lg">
                Explore as ideias
              </ButtonLink>
            </ButtonRow>
          </div>
        </Container>
        <div className="relative min-h-[480px]">
          <Photo
            src="/images/ju/rua.webp"
            alt="Retrato de Ju Ferreira sorrindo, com o queixo apoiado na mão"
            sizes="(min-width:1024px) 40vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_30%]"
          />
        </div>
      </div>
    </Section>
  );
}
