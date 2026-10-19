import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em, HandNote, NumberBadge } from "@/components/ui/Typography";
import { LINKS } from "@/lib/site";
import { Chip, Paper, Underline } from "./parts";

type Door = {
  id: string;
  n: number;
  t: string;
  s: string;
  img: string;
  alt: string;
  note: string;
  body: ReactNode;
  box: ReactNode;
  cta: string;
  href: string;
};

const DOORS: Door[] = [
  {
    id: "porta-terca",
    n: 1,
    t: "Uma Terça-feira Qualquer",
    s: "Porque futuro também se constrói no meio da vida real.",
    img: "/images/ph/pessoas/porta-terca.webp",
    alt: "Caderno aberto e caneca de café sobre a mesa",
    note: "Uma vez por semana, uma pausa no automático.",
    body: (
      <>
        <p>
          Uma conversa semanal sobre aquilo que estamos construindo enquanto trabalhamos, criamos filhos, tomamos decisões,
          erramos, recomeçamos e simplesmente tentamos dar conta.
        </p>
        <p>Não é uma newsletter sobre prever o futuro. É um espaço para observar o presente com mais atenção.</p>
      </>
    ),
    box: "Uma ideia. Uma história. Uma tensão. Uma pergunta. Algo que talvez acompanhe você depois de fechar o e-mail.",
    cta: "Assine Uma Terça-feira Qualquer",
    href: LINKS.newsletter,
  },
  {
    id: "porta-ideias",
    n: 2,
    t: "Ideias",
    s: "Para quando uma pergunta merece mais tempo.",
    img: "/images/ph/pessoas/porta-ideias.webp",
    alt: "Pilha de livros e óculos sobre a mesa",
    note: "Primeiro vem a pergunta. Depois vem o conteúdo.",
    body: (
      <>
        <p>Nem tudo cabe num post. Nem tudo precisa terminar numa resposta rápida.</p>
        <p>
          Em <strong className="font-semibold text-ink-900">Ideias</strong>, ficam artigos, ensaios, reflexões e investigações
          sobre: futuros; tecnologia; humanidade; escolhas; liderança; transformação; e as contradições que aparecem no encontro
          entre essas coisas.
        </p>
      </>
    ),
    box: "É o lugar para quem gosta de ir um pouco mais fundo. Não necessariamente para concordar. Para pensar.",
    cta: "Explore as ideias",
    href: "/ideias",
  },
  {
    id: "porta-futuros",
    n: 3,
    t: "Futuros Humanos",
    s: "Para aprofundar a lente.",
    img: "/images/ph/pessoas/porta-futuros-r.webp",
    alt: "Ju Ferreira olhando a cidade ao entardecer",
    note: "Futuros Humanos não é um programa de desenvolvimento pessoal.",
    body: (
      <>
        <p>
          Talvez aquilo que tenha trazido você até esta página seja uma questão maior: O futuro. Tecnologia. Agência.
          Possibilidade. Aquilo que estamos construindo sem perceber. O que ainda pode existir.
        </p>
        <p>
          Nesse caso, existe um território inteiro para explorar.{" "}
          <strong className="font-semibold text-ink-900">Futuros Humanos</strong> organiza grande parte dessas perguntas e
          apresenta a tese contemporânea da Ju sobre possibilidade, direção, agência, capacidades e construção.
        </p>
      </>
    ),
    box: "É uma tese e um território intelectual. Você pode entrar nele sem precisar transformar isso em produto, processo ou objetivo.",
    cta: "Conheça Futuros Humanos",
    href: "/futuros-humanos",
  },
];

/* ───────────────────────── BLOCO 7 — PORTAS EDITORIAIS ───────────────────────── */
export function PessoasPortas() {
  return (
    <Section label="Portas editoriais" id="portas">
      <Container>
        {/* A — abertura */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Display size="lg">
              Nem toda pergunta precisa virar um programa. <Em>Algumas precisam de tempo.</Em>
            </Display>
            <Underline />
            <p className="jf-body mt-8 text-ink-700">
              De leitura. De silêncio. De uma história. De uma pergunta nova. De encontrar palavras para alguma coisa que você
              ainda não sabe explicar.
            </p>
            <p className="mt-4 text-[18px] font-semibold text-ink-900">
              Às vezes, o próximo movimento não é comprar nada. É continuar pensando.
            </p>
          </div>
          <div>
            <div className="jf-body text-ink-700">
              <p>
                Talvez você tenha chegado até aqui sem querer mudar nada imediatamente. Talvez alguma frase tenha incomodado.
                Talvez uma pergunta tenha ficado. Talvez você apenas queira continuar acompanhando essa conversa.
              </p>
              <p>
                Tudo bem. Nem toda reflexão precisa virar meta. Nem toda inquietação precisa virar plano. Nem toda possibilidade
                precisa imediatamente virar projeto. Algumas ideias precisam apenas encontrar espaço suficiente para amadurecer.
              </p>
            </div>
            <p className="mt-6 border-l-2 border-red-brand pl-5 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug text-red-brand">
              Às vezes, perceber melhor já é parte do movimento.
            </p>
          </div>
        </div>

        {/* B — três portas */}
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-8">
          {DOORS.map((d, i) => (
            <li key={d.id} id={d.id} className="flex scroll-mt-24 flex-col">
              <div className="relative">
                <div className={`relative bg-cream-50 p-2 shadow-[0_14px_34px_-18px_rgba(24,20,17,0.55)] ${i === 1 ? "md:rotate-1" : "md:-rotate-1"}`}>
                  <Photo src={d.img} alt={d.alt} sizes="(min-width:768px) 32vw, 100vw" className="aspect-[16/10] w-full" />
                </div>
                <NumberBadge n={d.n} className="absolute -bottom-5 left-4 bg-cream-50" />
                <div className="absolute -top-6 right-3 max-w-[200px]">
                  <Paper compact className="md:rotate-[3deg]">
                    <p className="jf-hand text-[20px] leading-tight">{d.note}</p>
                  </Paper>
                </div>
              </div>
              <h3 className="jf-display mt-10 text-[clamp(32px,2.8vw,42px)]">{d.t}</h3>
              <p className="mt-2 text-[16px] font-medium text-red-brand">{d.s}</p>
              <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-ink-700">{d.body}</div>
              <div className="mt-auto pt-5">
                <p className="rounded-[var(--jf-radius-sm)] bg-blush-100 px-5 py-4 text-[15px] leading-relaxed text-ink-900">{d.box}</p>
                <ButtonLink href={d.href} variant="secondary" size="sm" className="mt-6 w-fit">
                  {d.cta}
                </ButtonLink>
              </div>
            </li>
          ))}
        </ol>

        {/* C — inquietação não é tarefa */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Paper className="h-fit md:-rotate-[1.5deg]">
            <h3 className="jf-hand text-[clamp(30px,2.6vw,38px)]">Você não precisa transformar toda inquietação em uma tarefa.</h3>
          </Paper>
          <div className="jf-body text-ink-700">
            <p>Vivemos cercados por lógica de otimização:</p>
            <p className="text-ink-900">leia para aplicar; aprenda para produzir; reflita para melhorar; descubra para agir.</p>
            <p>Mas algumas coisas precisam existir antes de sabermos o que fazer com elas.</p>
            <p>
              Uma pergunta pode ficar conosco. Uma ideia pode amadurecer. Uma história pode mudar de significado meses depois.
            </p>
            <p className="font-semibold text-ink-900">Nem todo movimento é imediatamente visível.</p>
            <p>
              Se você percebe que precisa de estrutura para colocar mudança em prática, o{" "}
              <Link href={LINKS.epic247} className="font-medium text-red-brand underline underline-offset-4">
                EPIC247
              </Link>{" "}
              pode ser uma boa porta.
            </p>
            <p>Se não é isso agora, não precisamos transformar sua curiosidade em necessidade.</p>
          </div>
        </div>

        {/* D — a porta certa depende do momento */}
        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.3fr_0.9fr_1.1fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-10">
            <p className="jf-eyebrow text-red-brand">A porta certa depende do momento.</p>
            <HandNote className="mt-5 text-ink-900" rotate={-2}>
              Às vezes, o próximo passo é fazer alguma coisa.
              <br />
              Às vezes, é continuar prestando atenção.
            </HandNote>
          </div>
          <p className="jf-body text-ink-700 lg:px-10">
            Talvez hoje você precise se mover.
            <br />
            Talvez precise entender.
            <br />
            Talvez queira ler.
            <br />
            Talvez queira apenas continuar por perto.
          </p>
          <div className="lg:pl-10">
            <h3 className="font-serif text-[clamp(24px,2vw,30px)] leading-tight text-red-brand">
              Escolha a porta que faz sentido agora.
            </h3>
            <nav aria-label="Portas editoriais" className="mt-5 flex flex-wrap gap-3">
              <Chip href="#porta-terca">Uma Terça-feira Qualquer</Chip>
              <Chip href="#porta-ideias">Ideias</Chip>
              <Chip href="#porta-futuros">Futuros Humanos</Chip>
            </nav>
          </div>
        </div>
      </Container>
    </Section>
  );
}

