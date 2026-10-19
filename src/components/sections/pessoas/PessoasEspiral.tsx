import type { ReactNode } from "react";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { SpiralMark } from "@/components/ui/Strokes";
import { Display, Em, HandNote, NumberBadge } from "@/components/ui/Typography";
import { Ask, Chip, LineIcon, Paper, Underline, type IconName } from "./parts";

type Move = {
  id: string;
  n: number;
  name: string;
  q: string;
  icon: IconName;
  img: string;
  alt: string;
  order: string;
  body: ReactNode;
};

const MOVES: Move[] = [
  {
    id: "espiral-imaginar",
    n: 1,
    name: "Imaginar",
    q: "E se pudesse ser diferente?",
    icon: "bulb",
    img: "/images/ensaio/pessoas-janela.webp",
    alt: "Juliana olhando pela janela, com expressão contemplativa.",
    order: "order-1",
    body: (
      <>
        <p>Imaginar não é fingir que os limites desapareceram.</p>
        <p>
          É interromper, por alguns instantes, a ideia de que aquilo que existe hoje é a única forma possível de existir.
        </p>
        <p>Talvez seja perguntar:</p>
        <Ask small>Se eu não precisasse repetir exatamente este caminho, o que mais poderia existir?</Ask>
        <Ask small>O que eu ainda nem me permiti considerar?</Ask>
        <Ask small>
          O que parece impossível porque realmente é — e o que parece impossível apenas porque nunca experimentei outro jeito?
        </Ask>
        <p>
          Imaginação abre campo. Não promete resultado.{" "}
          <strong className="font-semibold text-ink-900">Mas sem campo, não há escolha.</strong>
        </p>
      </>
    ),
  },
  {
    id: "espiral-escolher",
    n: 2,
    name: "Escolher",
    q: "O que eu quero ajudar a tornar possível?",
    icon: "sign",
    img: "/images/ensaio/contexto-caderno-escolhas.webp",
    alt: "Mãos fazendo anotações e marcando escolhas em um caderno.",
    order: "order-2",
    body: (
      <>
        <p>Nem toda possibilidade merece virar projeto de vida. Nem tudo o que parece interessante merece energia.</p>
        <p>Escolher significa introduzir direção. Perguntar:</p>
        <Ask small>O que importa de verdade aqui?</Ask>
        <Ask small>O que estou disposta a sustentar?</Ask>
        <Ask small>O que talvez precise deixar para trás?</Ask>
        <Ask small>Que futuro quero favorecer com as minhas próximas escolhas?</Ask>
        <p>Escolher também implica renunciar. E talvez por isso seja tão difícil.</p>
        <p className="font-semibold text-ink-900">Toda escolha dá força a algumas possibilidades e deixa outras para trás.</p>
      </>
    ),
  },
  {
    id: "espiral-tornar-se",
    n: 3,
    name: "Tornar-se",
    q: "Do que eu preciso me tornar capaz?",
    icon: "growth",
    img: "/images/ensaio/ju-estudo-fones.webp",
    alt: "Juliana estudando com fones de ouvido, livro e notebook.",
    order: "order-3 lg:order-4",
    body: (
      <>
        <p>
          Desejar uma vida diferente não significa automaticamente ter hoje as capacidades necessárias para construí-la.
        </p>
        <p>
          Talvez você precise aprender alguma coisa. Desenvolver coragem. Aumentar repertório. Cuidar da energia. Pedir ajuda.
          Aprender a colocar limites. Sustentar desconforto. Melhorar uma habilidade. Mudar uma forma de pensar. Construir
          disciplina. Ou simplesmente parar de esperar sentir-se completamente pronta.
        </p>
        <p className="font-serif text-[22px] leading-snug text-red-brand">
          Às vezes, o futuro que você quer exige uma versão de você que ainda está sendo construída.
        </p>
        <p>
          Isso não significa que você não é suficiente. Significa apenas que pessoas aprendem, desenvolvem capacidades e mudam
          ao longo da vida.
        </p>
        <p className="font-semibold text-ink-900">Não precisamos transformar desenvolvimento em déficit.</p>
      </>
    ),
  },
  {
    id: "espiral-construir",
    n: 4,
    name: "Construir",
    q: "O que eu consigo fazer agora?",
    icon: "plane",
    img: "/images/ensaio/ju-caminhada-movimento.webp",
    alt: "Juliana caminhando na calçada, em enquadramento de corpo inteiro.",
    order: "order-4 lg:order-3",
    body: (
      <>
        <p className="font-semibold text-ink-900">Aqui a possibilidade encontra a terça-feira.</p>
        <p>
          Não: “Qual é o plano perfeito para os próximos dez anos?”
          <br />
          Mas:
        </p>
        <Ask small>Qual movimento cabe na minha vida agora?</Ask>
        <p>
          Uma conversa. Uma inscrição. Uma hora protegida na agenda. Um pedido. Um não. Um primeiro cliente. Uma caminhada. Uma
          pesquisa. Uma terapia, quando pertinente. Um currículo enviado. Uma conta feita. Um hábito interrompido. Um teste
          pequeno. Uma escolha real.
        </p>
        <p>
          Porque:{" "}
          <strong className="font-semibold text-ink-900">
            o movimento não precisa garantir o resultado para mudar o que pode acontecer depois.
          </strong>
        </p>
        <p>
          Depois de construir, a realidade responde. Às vezes funciona. Às vezes não. Às vezes você descobre que aquilo que
          queria já não quer mais. Às vezes aprende alguma coisa que muda completamente a pergunta. Às vezes desenvolve uma
          capacidade e passa a enxergar possibilidades que antes nem conseguia imaginar.
        </p>
      </>
    ),
  },
];

/* ───────────────────────── BLOCO 4 — A ESPIRAL NA ESCALA PESSOAL ───────────────────────── */
export function PessoasEspiral() {
  return (
    <Section tone="cream" label="A Espiral na escala pessoal" id="espiral">
      <Container>
        {/* A — abertura */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Display size="lg">
              Entre quem você é e quem <Em>ainda pode se tornar.</Em>
            </Display>
            <Underline />
            <p className="mt-8 max-w-[560px] text-[20px] font-semibold leading-snug text-ink-900">
              Você não precisa saber exatamente quem vai se tornar.{" "}
              <span className="text-red-brand">Mas pode começar a participar dessa construção.</span>
            </p>
          </div>
          <div className="jf-body text-ink-700">
            <p>
              Talvez você consiga imaginar alguma coisa diferente. Uma vida com mais espaço. Um trabalho que faça mais sentido.
              Uma relação diferente consigo mesma. Outra forma de responder. Um limite que finalmente existe. Uma capacidade que
              ainda não desenvolveu.
            </p>
            <p>
              Mas imaginar uma possibilidade e conseguir viver de outro jeito são coisas diferentes. Entre uma e outra existe um
              processo.
            </p>
            <p>E, para mim, ele costuma passar por quatro movimentos:</p>
          </div>
        </div>

        <div className="mt-12 border-y border-ink-900/15 py-8 text-center">
          <p className="jf-display jf-display-sm uppercase tracking-[0.06em]">
            Imaginar <span className="text-red-brand">→</span> Escolher <span className="text-red-brand">→</span> Tornar-se{" "}
            <span className="text-red-brand">→</span> Construir <span className="text-red-brand">↻</span>
          </p>
          <p className="jf-body mx-auto mt-5 max-w-[720px] text-ink-700">
            Não como uma fórmula. Não como uma sequência que você completa uma vez.{" "}
            <strong className="font-semibold text-ink-900">Como uma espiral.</strong> Porque a gente imagina, escolhe, tenta,
            aprende, muda, constrói alguma coisa e volta a enxergar o mundo de outro lugar.
          </p>
        </div>

        {/* B — os quatro movimentos em torno da espiral */}
        <div className="relative mt-16">
          <SpiralMark className="absolute left-1/2 top-1/2 hidden w-[62%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] opacity-25 lg:block" />
          <ol className="relative grid gap-8 lg:grid-cols-2 lg:gap-x-28 lg:gap-y-24">
            {MOVES.map((m) => (
              <li key={m.id} id={m.id} className={`scroll-mt-24 ${m.order}`}>
                <article className="h-full overflow-hidden rounded-[var(--jf-radius-sm)] bg-cream-50 shadow-[0_14px_40px_-24px_rgba(24,20,17,0.45)]">
                  <div className="grid sm:grid-cols-[38%_1fr]">
                    <Photo
                      src={m.img}
                      alt={m.alt}
                      sizes="(min-width:1024px) 16vw, (min-width:640px) 38vw, 100vw"
                      className="aspect-[4/3] w-full sm:aspect-auto sm:h-full sm:min-h-[260px]"
                    />
                    <div className="bg-blush-100/70 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <NumberBadge n={m.n} className="bg-cream-50" />
                        <LineIcon name={m.icon} plain />
                      </div>
                      <h3 className="jf-display mt-4 text-[clamp(30px,2.6vw,40px)] uppercase text-red-brand">{m.name}</h3>
                      <p className="mt-2 font-serif text-[22px] leading-snug text-ink-900">{m.q}</p>
                    </div>
                  </div>
                  <div className="space-y-3 p-6 text-[16px] leading-relaxed text-ink-700 sm:p-7">{m.body}</div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* C — você não volta ao mesmo lugar */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1fr_1fr_0.9fr] lg:gap-10">
          <div>
            <h3 className="jf-display jf-display-sm">
              Você não volta <Em>ao mesmo lugar.</Em>
            </h3>
            <div className="jf-body mt-5 text-ink-700">
              <p>Pode voltar à mesma pergunta. Mas você já mudou. E o mundo ao redor também.</p>
              <p className="font-semibold text-ink-900">Essa é a Espiral.</p>
            </div>
            <div className="mt-8 rounded-[var(--jf-radius-sm)] bg-blush-100 p-6">
              <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
                Nós construímos futuros e somos construídos enquanto os construímos.
              </p>
            </div>
            <p className="jf-body mt-5 text-ink-700">
              Na escala pessoal: <strong className="font-semibold text-red-brand">Você vai se tornando enquanto tenta construir.</strong>
            </p>
          </div>
          <div>
            <h3 className="jf-display jf-display-sm">Tornar-se não é virar outra pessoa.</h3>
            <div className="jf-body mt-5 text-ink-700">
              <p>
                É desenvolver capacidades para sustentar escolhas que hoje talvez ainda sejam difíceis. Preservar coisas que
                importam. Abandonar outras. Experimentar formas diferentes de existir.
              </p>
              <p>E descobrir, no processo, o que continua fazendo sentido.</p>
            </div>
          </div>
          <Paper className="h-fit md:rotate-[2deg]">
            <p className="jf-hand text-[30px]">A Espiral precisa caber numa terça-feira qualquer.</p>
            <p className="jf-hand mt-4 text-[23px] text-ink-700">
              Com trabalho. Filhos. Cansaço. Dinheiro. Medo. Horário. Responsabilidade. Vida acontecendo.
            </p>
          </Paper>
        </div>

        {/* D — fechamento do bloco */}
        <div className="mt-16 text-center lg:mt-20">
          <p className="jf-display jf-display-md mx-auto max-w-[920px]">
            Você não precisa se tornar quem será para começar.
          </p>
          <HandNote className="mt-4 text-red-brand" rotate={-2}>
            Você se torna também porque começa.
          </HandNote>
        </div>

        <div className="mt-14 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[1fr_1fr_1.3fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <p className="jf-body text-ink-700 lg:pr-10">
            Imaginar abre possibilidades.
            <br />
            Escolher dá direção.
            <br />
            Tornar-se desenvolve capacidade.
            <br />
            Construir coloca alguma coisa no mundo.
          </p>
          <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-snug lg:px-10">
            E então você olha de novo. <span className="text-red-brand">↻</span>
          </p>
          <div className="lg:pl-10">
            <p className="text-[18px] font-semibold leading-snug text-ink-900">
              Qual dessas quatro conversas parece mais necessária para você agora?
            </p>
            <nav aria-label="Os quatro movimentos" className="mt-5 flex flex-wrap gap-3">
              <Chip href="#espiral-imaginar">Imaginar?</Chip>
              <Chip href="#espiral-escolher">Escolher?</Chip>
              <Chip href="#espiral-tornar-se">Tornar-se?</Chip>
              <Chip href="#espiral-construir">Construir?</Chip>
            </nav>
          </div>
        </div>
      </Container>
    </Section>
  );
}
