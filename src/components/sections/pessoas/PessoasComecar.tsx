import type { ReactNode } from "react";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em, HandNote, NumberBadge } from "@/components/ui/Typography";
import { AskBox, Chip, Paper, Tape, Underline } from "./parts";

type Start = { id: string; n: number; t: string; s: string; img: string; alt: string; body: ReactNode; q: ReactNode; rot: string };

const STARTS: Start[] = [
  {
    id: "comecar-perceber",
    n: 1,
    t: "Eu preciso perceber melhor",
    s: "Ainda não sei exatamente o que está acontecendo.",
    img: "/images/ph/pessoas/comecar-1.webp",
    alt: "Caderno de anotações e xícara de café",
    rot: "lg:-rotate-[1.2deg]",
    body: (
      <>
        <p>
          Talvez você só saiba que alguma coisa não encaixa. Está cansada. Irritada. Desmotivada. Sem espaço. Funcionando no
          automático.
        </p>
        <p>Mas ainda não consegue transformar essa sensação numa pergunta clara.</p>
        <p>Nesse caso, talvez o começo seja: observar; escrever; conversar; investigar; desacelerar o suficiente para perceber.</p>
      </>
    ),
    q: "O que eu ainda não estou conseguindo enxergar?",
  },
  {
    id: "comecar-escolher",
    n: 2,
    t: "Eu sei o que quero, mas não consigo escolher",
    s: "Existem possibilidades, mas nenhuma decisão se sustenta.",
    img: "/images/ph/pessoas/comecar-2.webp",
    alt: "Placa de direção numa estrada ao pôr do sol",
    rot: "lg:rotate-[1deg]",
    body: (
      <>
        <p>
          Talvez você esteja dividida. Entre ficar e sair. Dizer sim ou não. Continuar ou interromper. Arriscar ou preservar.
        </p>
        <p>Escolher quase sempre significa perder alguma possibilidade. E isso pesa.</p>
        <p>Talvez o começo seja menos: “qual é a escolha perfeita?”</p>
        <p>e mais:</p>
      </>
    ),
    q: "“qual direção eu estou disposta a sustentar?”",
  },
  {
    id: "comecar-capaz",
    n: 3,
    t: "Eu já escolhi, mas ainda não me sinto capaz",
    s: "Eu sei para onde quero ir, mas existe um espaço entre querer e conseguir.",
    img: "/images/ph/pessoas/comecar-3.webp",
    alt: "Caneca sobre uma pilha de livros",
    rot: "lg:-rotate-[0.8deg]",
    body: (
      <>
        <p>
          Talvez falte: energia; conhecimento; coragem; dinheiro; estrutura; apoio; habilidade; tempo; disciplina; ou confiança
          construída pela prática.
        </p>
        <p>
          Esse é o território do <strong className="font-semibold text-ink-900">tornar-se</strong>.
        </p>
        <p>Não como inadequação. Mas como desenvolvimento.</p>
      </>
    ),
    q: "Do que eu preciso me tornar capaz para sustentar aquilo que escolhi?",
  },
  {
    id: "comecar-mover",
    n: 4,
    t: "Eu sei o que preciso fazer. Só não comecei.",
    s: "A questão agora é movimento.",
    img: "/images/ph/pessoas/comecar-4.webp",
    alt: "Pés de tênis subindo uma escada",
    rot: "lg:rotate-[1.2deg]",
    body: (
      <>
        <p>Às vezes, você já pensou bastante. Já entendeu. Já decidiu. Já leu. Já planejou.</p>
        <p>Só falta alguma coisa atravessar a distância entre intenção e ação.</p>
        <p>
          E talvez o próximo movimento seja pequeno. Enviar a mensagem. Fazer a ligação. Separar uma hora. Pesquisar. Pedir
          ajuda. Dizer não. Testar. Começar mal mesmo.
        </p>
      </>
    ),
    q: "Qual é o menor movimento real que muda o que pode acontecer depois?",
  },
];

/* ───────────────────────── BLOCO 5 — POR ONDE COMEÇAR ───────────────────────── */
export function PessoasComecar() {
  return (
    <Section label="Por onde começar" id="por-onde-comecar">
      <Container>
        {/* A — abertura */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Display size="lg">
              Você não precisa mudar tudo. <Em>Precisa descobrir por onde começar.</Em>
            </Display>
            <Underline />
          </div>
          <div className="jf-body text-ink-700">
            <p>Quando alguma coisa não está funcionando, a tendência é olhar para a vida inteira de uma vez.</p>
            <p className="text-ink-900">
              Trabalho. Relacionamentos. Dinheiro. Energia. Corpo. Rotina. Família. Planos. Quem você é. Quem deveria ser.
            </p>
            <p>
              Tudo parece conectado. E, muitas vezes, está. Mas tentar mexer em tudo ao mesmo tempo pode transformar desejo de
              mudança em paralisia.
            </p>
            <p>
              Talvez você esteja cansada. Talvez tenha muitas coisas funcionando “mais ou menos”. Talvez saiba exatamente o que
              incomoda, mas não consiga sair do lugar. Ou talvez nem saiba direito o que está errado. Só perceba que alguma coisa
              ficou apertada.
            </p>
            <p>Às vezes, o primeiro movimento não é tomar uma grande decisão. É conseguir nomear:</p>
            <p className="font-serif text-[clamp(24px,2.1vw,32px)] leading-snug text-red-brand">
              o que está pedindo atenção agora?
            </p>
            <p className="font-semibold text-ink-900">Porque problemas diferentes pedem começos diferentes.</p>
          </div>
        </div>

        {/* B — quatro começos */}
        <div className="mt-16 hidden items-end gap-3 md:flex lg:mt-20" aria-hidden>
          <HandNote className="text-ink-900" rotate={-5}>
            Por onde eu começo?
          </HandNote>
          <Stroke shape="arrow" className="h-10 w-24 rotate-[18deg]" width={2.5} />
        </div>
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-8 lg:grid-cols-4 lg:gap-6">
          {STARTS.map((s) => (
            <li key={s.id} id={s.id} className="flex scroll-mt-24 flex-col">
              <div className={`relative bg-cream-50 p-2 shadow-[0_14px_34px_-18px_rgba(24,20,17,0.55)] ${s.rot}`}>
                <Tape />
                <Photo src={s.img} alt={s.alt} sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw" className="aspect-[4/3] w-full" />
                <NumberBadge n={s.n} className="absolute -bottom-5 left-3 bg-cream-50" />
              </div>
              <h3 className="jf-display mt-9 text-[clamp(26px,2.2vw,32px)] leading-[1.05]">{s.t}</h3>
              <p className="mt-3 text-[16px] font-medium leading-snug text-red-brand">{s.s}</p>
              <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-ink-700">{s.body}</div>
              <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.2em] text-ink-500">Pergunta:</p>
              <AskBox className="mt-2">{s.q}</AskBox>
            </li>
          ))}
        </ol>

        {/* C — a próxima pergunta verdadeira */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Paper className="h-fit md:-rotate-2">
            <p className="jf-hand text-[30px]">O começo certo não é necessariamente o maior movimento.</p>
            <p className="jf-hand mt-3 text-[26px] text-red-brand">É aquele que torna o próximo movimento possível.</p>
          </Paper>
          <div>
            <h3 className="jf-display jf-display-sm">
              Você não precisa saber resolver a vida inteira. <Em>Precisa encontrar a próxima pergunta verdadeira.</Em>
            </h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="jf-body border-l border-red-brand/50 pl-5 text-ink-700">
                <p>
                  Alguns começos pedem apenas uma boa pergunta. Outros pedem estrutura. Outros pedem acompanhamento. Outros pedem
                  uma experiência capaz de transformar intenção em prática.
                </p>
                <p className="font-semibold text-ink-900">Começar também é escolher a ajuda certa para o momento certo.</p>
              </div>
              <div className="jf-body border-l border-red-brand/50 pl-5 text-ink-700">
                <p>
                  A Espiral não deve ser usada como sistema de classificação. As quatro conversas podem coexistir. Uma pessoa
                  pode estar construindo em uma área e imaginando em outra. Pode ter escolhido uma coisa e ainda estar tentando
                  perceber outra.
                </p>
                <p className="font-semibold text-ink-900">A vida não cabe numa etapa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-ink-900/15 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="jf-body text-ink-700">
              Talvez você precise perceber. Talvez escolher. Talvez desenvolver capacidade. Talvez simplesmente começar.
            </p>
            <h3 className="jf-display jf-display-sm mt-4">Por onde você precisa começar agora?</h3>
          </div>
          <nav aria-label="Por onde começar" className="flex flex-wrap gap-3">
            <Chip href="#comecar-perceber">Perceber</Chip>
            <Chip href="#comecar-escolher">Escolher</Chip>
            <Chip href="#comecar-capaz">Tornar-me capaz</Chip>
            <Chip href="#comecar-mover">Começar a mover</Chip>
          </nav>
        </div>
      </Container>
    </Section>
  );
}
