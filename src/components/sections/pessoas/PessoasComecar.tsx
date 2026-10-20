import type { ReactNode } from "react";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em, HandNote, NumberBadge } from "@/components/ui/Typography";
import { AskBox, Chip, Paper, Tape, Underline } from "./parts";

import { tx, img, lazy } from "@/lib/editable";
type Start = { id: string; n: number; t: string; s: string; img: string; alt: string; body: ReactNode; q: ReactNode; rot: string };

const STARTS: Start[] = lazy(() => ([
  {
    id: "comecar-perceber",
    n: 1,
    t: tx("pessoas/dee855c52b", "Eu preciso perceber melhor"),
    s: tx("pessoas/3d33af117d", "Ainda não sei exatamente o que está acontecendo."),
    img: img("pessoas/0e24f666d8", "/images/ensaio/home-06-ideias-horizontal.webp"),
    alt: tx("pessoas/d3724daf0f", "Livros, caderno aberto, caneta e café sobre uma mesa de madeira."),
    rot: "lg:-rotate-[1.2deg]",
    body: (
      <>
        <p>
          {tx("pessoas/4d2ca268c2", "Talvez você só saiba que alguma coisa não encaixa. Está cansada. Irritada. Desmotivada. Sem espaço. Funcionando no automático.")}</p>
        <p>{tx("pessoas/3f9089275a", "Mas ainda não consegue transformar essa sensação numa pergunta clara.")}</p>
        <p>{tx("pessoas/b2e7788029", "Nesse caso, talvez o começo seja: observar; escrever; conversar; investigar; desacelerar o suficiente para perceber.")}</p>
      </>
    ),
    q: tx("pessoas/b5b1d140da", "O que eu ainda não estou conseguindo enxergar?"),
  },
  {
    id: "comecar-escolher",
    n: 2,
    t: tx("pessoas/7da51e8e3b", "Eu sei o que quero, mas não consigo escolher"),
    s: tx("pessoas/7b0a2ae87d", "Existem possibilidades, mas nenhuma decisão se sustenta."),
    img: img("pessoas/e2e7697bf2", "/images/ensaio/contexto-caminhos-escolhas.webp"),
    alt: tx("pessoas/8c36848cd4", "Uma trilha se divide em dois caminhos na paisagem."),
    rot: "lg:rotate-[1deg]",
    body: (
      <>
        <p>
          {tx("pessoas/74d9f3621b", "Talvez você esteja dividida. Entre ficar e sair. Dizer sim ou não. Continuar ou interromper. Arriscar ou preservar.")}</p>
        <p>{tx("pessoas/901a4b6cfb", "Escolher quase sempre significa perder alguma possibilidade. E isso pesa.")}</p>
        <p>{tx("pessoas/d0e57ddc42", "Talvez o começo seja menos: “qual é a escolha perfeita?”")}</p>
        <p>{tx("pessoas/9a263b8b4c", "e mais:")}</p>
      </>
    ),
    q: tx("pessoas/480684b46f", "“qual direção eu estou disposta a sustentar?”"),
  },
  {
    id: "comecar-capaz",
    n: 3,
    t: tx("pessoas/8befa7af7d", "Eu já escolhi, mas ainda não me sinto capaz"),
    s: tx("pessoas/57dab47e16", "Eu sei para onde quero ir, mas existe um espaço entre querer e conseguir."),
    img: img("pessoas/b22999f925", "/images/ensaio/contexto-livros-janela.webp"),
    alt: tx("pessoas/23ccff803c", "Livros próximos à janela, com a cidade ao entardecer ao fundo."),
    rot: "lg:-rotate-[0.8deg]",
    body: (
      <>
        <p>
          {tx("pessoas/9f3bb763ae", "Talvez falte: energia; conhecimento; coragem; dinheiro; estrutura; apoio; habilidade; tempo; disciplina; ou confiança construída pela prática.")}</p>
        <p>
          {tx("pessoas/7dcb481f8d", "Esse é o território do")} <strong className="font-semibold text-ink-900">{tx("pessoas/b6bfae42fd", "tornar-se")}</strong>.
        </p>
        <p>{tx("pessoas/6fb1d2a277", "Não como inadequação. Mas como desenvolvimento.")}</p>
      </>
    ),
    q: tx("pessoas/564c66f6aa", "Do que eu preciso me tornar capaz para sustentar aquilo que escolhi?"),
  },
  {
    id: "comecar-mover",
    n: 4,
    t: tx("pessoas/dc679802bd", "Eu sei o que preciso fazer. Só não comecei."),
    s: tx("pessoas/fc18d7d6aa", "A questão agora é movimento."),
    img: img("pessoas/2ae226955b", "/images/ensaio/ju-caminhada-movimento.webp"),
    alt: tx("pessoas/2057c9b223", "Juliana caminhando na calçada, em enquadramento de corpo inteiro."),
    rot: "lg:rotate-[1.2deg]",
    body: (
      <>
        <p>{tx("pessoas/34037c8abe", "Às vezes, você já pensou bastante. Já entendeu. Já decidiu. Já leu. Já planejou.")}</p>
        <p>{tx("pessoas/7335b1e1df", "Só falta alguma coisa atravessar a distância entre intenção e ação.")}</p>
        <p>
          {tx("pessoas/fa66884587", "E talvez o próximo movimento seja pequeno. Enviar a mensagem. Fazer a ligação. Separar uma hora. Pesquisar. Pedir ajuda. Dizer não. Testar. Começar mal mesmo.")}</p>
      </>
    ),
    q: tx("pessoas/1d2f13975f", "Qual é o menor movimento real que muda o que pode acontecer depois?"),
  },
]));

/* ───────────────────────── BLOCO 5 — POR ONDE COMEÇAR ───────────────────────── */
export function PessoasComecar() {
  return (
    <Section label={tx("pessoas/51a10de2ab", "Por onde começar")} id="por-onde-comecar">
      <Container>
        {/* A — abertura */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Display size="lg">
              {tx("pessoas/58dd82bd06", "Você não precisa mudar tudo.")} <Em>{tx("pessoas/65241e577c", "Precisa descobrir por onde começar.")}</Em>
            </Display>
            <Underline />
          </div>
          <div className="jf-body text-ink-700">
            <p>{tx("pessoas/61b69c6d44", "Quando alguma coisa não está funcionando, a tendência é olhar para a vida inteira de uma vez.")}</p>
            <p className="text-ink-900">
              {tx("pessoas/b125c95d02", "Trabalho. Relacionamentos. Dinheiro. Energia. Corpo. Rotina. Família. Planos. Quem você é. Quem deveria ser.")}</p>
            <p>
              {tx("pessoas/a993ed6785", "Tudo parece conectado. E, muitas vezes, está. Mas tentar mexer em tudo ao mesmo tempo pode transformar desejo de mudança em paralisia.")}</p>
            <p>
              {tx("pessoas/245941266a", "Talvez você esteja cansada. Talvez tenha muitas coisas funcionando “mais ou menos”. Talvez saiba exatamente o que incomoda, mas não consiga sair do lugar. Ou talvez nem saiba direito o que está errado. Só perceba que alguma coisa ficou apertada.")}</p>
            <p>{tx("pessoas/6f4ba56539", "Às vezes, o primeiro movimento não é tomar uma grande decisão. É conseguir nomear:")}</p>
            <p className="font-serif text-[clamp(24px,2.1vw,32px)] leading-snug text-red-brand">
              {tx("pessoas/f94c623439", "o que está pedindo atenção agora?")}</p>
            <p className="font-semibold text-ink-900">{tx("pessoas/6e38f10445", "Porque problemas diferentes pedem começos diferentes.")}</p>
          </div>
        </div>

        {/* B — quatro começos */}
        <div className="mt-16 hidden items-end gap-3 md:flex lg:mt-20" aria-hidden>
          <HandNote className="text-ink-900" rotate={-5}>
            {tx("pessoas/e62e2da0a7", "Por onde eu começo?")}</HandNote>
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
              <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.2em] text-ink-500">{tx("pessoas/d50ad112bd", "Pergunta:")}</p>
              <AskBox className="mt-2">{s.q}</AskBox>
            </li>
          ))}
        </ol>

        {/* C — a próxima pergunta verdadeira */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Paper className="h-fit md:-rotate-2">
            <p className="jf-hand text-[30px]">{tx("pessoas/791610d23c", "O começo certo não é necessariamente o maior movimento.")}</p>
            <p className="jf-hand mt-3 text-[26px] text-red-brand">{tx("pessoas/ba0aa7fa09", "É aquele que torna o próximo movimento possível.")}</p>
          </Paper>
          <div>
            <h3 className="jf-display jf-display-sm">
              {tx("pessoas/119fdfabf5", "Você não precisa saber resolver a vida inteira.")} <Em>{tx("pessoas/4b5dce9112", "Precisa encontrar a próxima pergunta verdadeira.")}</Em>
            </h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="jf-body border-l border-red-brand/50 pl-5 text-ink-700">
                <p>
                  {tx("pessoas/f7f4e6f6f3", "Alguns começos pedem apenas uma boa pergunta. Outros pedem estrutura. Outros pedem acompanhamento. Outros pedem uma experiência capaz de transformar intenção em prática.")}</p>
                <p className="font-semibold text-ink-900">{tx("pessoas/c6b4fffddf", "Começar também é escolher a ajuda certa para o momento certo.")}</p>
              </div>
              <div className="jf-body border-l border-red-brand/50 pl-5 text-ink-700">
                <p>
                  {tx("pessoas/26b0cd7efa", "A Espiral não deve ser usada como sistema de classificação. As quatro conversas podem coexistir. Uma pessoa pode estar construindo em uma área e imaginando em outra. Pode ter escolhido uma coisa e ainda estar tentando perceber outra.")}</p>
                <p className="font-semibold text-ink-900">{tx("pessoas/9132d1cf6b", "A vida não cabe numa etapa.")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-ink-900/15 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="jf-body text-ink-700">
              {tx("pessoas/afd6e25cab", "Talvez você precise perceber. Talvez escolher. Talvez desenvolver capacidade. Talvez simplesmente começar.")}</p>
            <h3 className="jf-display jf-display-sm mt-4">{tx("pessoas/b2a3f34a95", "Por onde você precisa começar agora?")}</h3>
          </div>
          <nav aria-label={tx("pessoas/c27f3cb577", "Por onde começar")} className="flex flex-wrap gap-3">
            <Chip href="#comecar-perceber">{tx("pessoas/5be4e81bd5", "Perceber")}</Chip>
            <Chip href="#comecar-escolher">{tx("pessoas/a6dfd651f1", "Escolher")}</Chip>
            <Chip href="#comecar-capaz">{tx("pessoas/01a9db0b58", "Tornar-me capaz")}</Chip>
            <Chip href="#comecar-mover">{tx("pessoas/29d6bd27da", "Começar a mover")}</Chip>
          </nav>
        </div>
      </Container>
    </Section>
  );
}
