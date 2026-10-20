import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em, HandNote, NumberBadge } from "@/components/ui/Typography";
import { LINKS } from "@/lib/site";
import { Chip, Paper, Underline } from "./parts";

import { tx, img, lazy } from "@/lib/editable";
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

const DOORS: Door[] = lazy(() => ([
  {
    id: "porta-terca",
    n: 1,
    t: tx("pessoas/a233f0410f", "Uma Terça-feira Qualquer"),
    s: tx("pessoas/21f83eb8ef", "Porque futuro também se constrói no meio da vida real."),
    img: img("pessoas/cc3d1a3980", "/images/ensaio/home-06-ideias-horizontal.webp"),
    alt: tx("pessoas/0bfc4bf7a9", "Livros, caderno aberto, caneta e café sobre uma mesa de madeira."),
    note: tx("pessoas/b6c758545b", "Uma vez por semana, uma pausa no automático."),
    body: (
      <>
        <p>
          {tx("pessoas/fa683a6363", "Uma conversa semanal sobre aquilo que estamos construindo enquanto trabalhamos, criamos filhos, tomamos decisões, erramos, recomeçamos e simplesmente tentamos dar conta.")}</p>
        <p>{tx("pessoas/1567ab00b2", "Não é uma newsletter sobre prever o futuro. É um espaço para observar o presente com mais atenção.")}</p>
      </>
    ),
    box: tx("pessoas/3086ef091b", "Uma ideia. Uma história. Uma tensão. Uma pergunta. Algo que talvez acompanhe você depois de fechar o e-mail."),
    cta: tx("pessoas/11d00082de", "Assine Uma Terça-feira Qualquer"),
    href: LINKS.newsletter,
  },
  {
    id: "porta-ideias",
    n: 2,
    t: tx("pessoas/eaf413c468", "Ideias"),
    s: tx("pessoas/17afa87afa", "Para quando uma pergunta merece mais tempo."),
    img: img("pessoas/c177f1232a", "/images/ensaio/contexto-livros-janela.webp"),
    alt: tx("pessoas/2bda9f56db", "Livros próximos à janela, com a cidade ao entardecer ao fundo."),
    note: tx("pessoas/f208fdeecc", "Primeiro vem a pergunta. Depois vem o conteúdo."),
    body: (
      <>
        <p>{tx("pessoas/aa184fc835", "Nem tudo cabe num post. Nem tudo precisa terminar numa resposta rápida.")}</p>
        <p>
          {tx("pessoas/5faa82ee0d", "Em")} <strong className="font-semibold text-ink-900">{tx("pessoas/dcfd2a1bf0", "Ideias")}</strong>{tx("pessoas/c805541fed", ", ficam artigos, ensaios, reflexões e investigações sobre: futuros; tecnologia; humanidade; escolhas; liderança; transformação; e as contradições que aparecem no encontro entre essas coisas.")}</p>
      </>
    ),
    box: tx("pessoas/da919bc3dd", "É o lugar para quem gosta de ir um pouco mais fundo. Não necessariamente para concordar. Para pensar."),
    cta: tx("pessoas/6a39c472d4", "Explore as ideias"),
    href: "/ideias",
  },
  {
    id: "porta-futuros",
    n: 3,
    t: tx("pessoas/edc8829367", "Futuros Humanos"),
    s: tx("pessoas/e863041833", "Para aprofundar a lente."),
    img: img("pessoas/fc89674a44", "/images/ensaio/home-01-abertura-horizontal.webp"),
    alt: tx("pessoas/674b118bb0", "Juliana de preto diante de uma paisagem ampla ao entardecer."),
    note: tx("pessoas/c21a7761f4", "Futuros Humanos não é um programa de desenvolvimento pessoal."),
    body: (
      <>
        <p>
          {tx("pessoas/f3eaa0bd5b", "Talvez aquilo que tenha trazido você até esta página seja uma questão maior: O futuro. Tecnologia. Agência. Possibilidade. Aquilo que estamos construindo sem perceber. O que ainda pode existir.")}</p>
        <p>
          {tx("pessoas/dd86d1ead8", "Nesse caso, existe um território inteiro para explorar.")}{" "}
          <strong className="font-semibold text-ink-900">{tx("pessoas/cc639659e6", "Futuros Humanos")}</strong> {tx("pessoas/537868078d", "organiza grande parte dessas perguntas e apresenta a tese contemporânea da Ju sobre possibilidade, direção, agência, capacidades e construção.")}</p>
      </>
    ),
    box: tx("pessoas/d9f600d099", "É uma tese e um território intelectual. Você pode entrar nele sem precisar transformar isso em produto, processo ou objetivo."),
    cta: tx("pessoas/f3b2b7f3a7", "Conheça Futuros Humanos"),
    href: "/futuros-humanos",
  },
]));

/* ───────────────────────── BLOCO 7 — PORTAS EDITORIAIS ───────────────────────── */
export function PessoasPortas() {
  return (
    <Section label={tx("pessoas/d2cf138f4d", "Portas editoriais")} id="portas">
      <Container>
        {/* A — abertura */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Display size="lg">
              {tx("pessoas/99ad37d593", "Nem toda pergunta precisa virar um programa.")} <Em>{tx("pessoas/984939f98a", "Algumas precisam de tempo.")}</Em>
            </Display>
            <Underline />
            <p className="jf-body mt-8 text-ink-700">
              {tx("pessoas/58e80e4434", "De leitura. De silêncio. De uma história. De uma pergunta nova. De encontrar palavras para alguma coisa que você ainda não sabe explicar.")}</p>
            <p className="mt-4 text-[18px] font-semibold text-ink-900">
              {tx("pessoas/6dd0550a12", "Às vezes, o próximo movimento não é comprar nada. É continuar pensando.")}</p>
          </div>
          <div>
            <div className="jf-body text-ink-700">
              <p>
                {tx("pessoas/449fe6f764", "Talvez você tenha chegado até aqui sem querer mudar nada imediatamente. Talvez alguma frase tenha incomodado. Talvez uma pergunta tenha ficado. Talvez você apenas queira continuar acompanhando essa conversa.")}</p>
              <p>
                {tx("pessoas/6e04b4a216", "Tudo bem. Nem toda reflexão precisa virar meta. Nem toda inquietação precisa virar plano. Nem toda possibilidade precisa imediatamente virar projeto. Algumas ideias precisam apenas encontrar espaço suficiente para amadurecer.")}</p>
            </div>
            <p className="mt-6 border-l-2 border-red-brand pl-5 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug text-red-brand">
              {tx("pessoas/f20076655e", "Às vezes, perceber melhor já é parte do movimento.")}</p>
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
                <div className="relative -mt-4 ml-auto mr-3 max-w-[200px]">
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
            <h3 className="jf-hand text-[clamp(30px,2.6vw,38px)]">{tx("pessoas/92f547f5dd", "Você não precisa transformar toda inquietação em uma tarefa.")}</h3>
          </Paper>
          <div className="jf-body text-ink-700">
            <p>{tx("pessoas/6f0d360254", "Vivemos cercados por lógica de otimização:")}</p>
            <p className="text-ink-900">{tx("pessoas/c8942039c5", "leia para aplicar; aprenda para produzir; reflita para melhorar; descubra para agir.")}</p>
            <p>{tx("pessoas/0f0b04f757", "Mas algumas coisas precisam existir antes de sabermos o que fazer com elas.")}</p>
            <p>
              {tx("pessoas/0ba07ed575", "Uma pergunta pode ficar conosco. Uma ideia pode amadurecer. Uma história pode mudar de significado meses depois.")}</p>
            <p className="font-semibold text-ink-900">{tx("pessoas/ced6d1d2e1", "Nem todo movimento é imediatamente visível.")}</p>
            <p>
              {tx("pessoas/5f51e9ba1f", "Se você percebe que precisa de estrutura para colocar mudança em prática, o")}{" "}
              <Link href={LINKS.epic247} className="font-medium text-red-brand underline underline-offset-4">
                {tx("pessoas/9e7917c07f", "EPIC247")}</Link>{" "}
              {tx("pessoas/79d3e0eac0", "pode ser uma boa porta.")}</p>
            <p>{tx("pessoas/8b804b685e", "Se não é isso agora, não precisamos transformar sua curiosidade em necessidade.")}</p>
          </div>
        </div>

        {/* D — a porta certa depende do momento */}
        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.3fr_0.9fr_1.1fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-10">
            <p className="jf-eyebrow text-red-brand">{tx("pessoas/0859aa3028", "A porta certa depende do momento.")}</p>
            <HandNote className="mt-5 text-ink-900" rotate={-2}>
              {tx("pessoas/5573b80a21", "Às vezes, o próximo passo é fazer alguma coisa.")}<br />
              {tx("pessoas/d45a35679c", "Às vezes, é continuar prestando atenção.")}</HandNote>
          </div>
          <p className="jf-body text-ink-700 lg:px-10">
            {tx("pessoas/36adeb9766", "Talvez hoje você precise se mover.")}<br />
            {tx("pessoas/5cd47f3873", "Talvez precise entender.")}<br />
            {tx("pessoas/8a173e7633", "Talvez queira ler.")}<br />
            {tx("pessoas/bf50c44506", "Talvez queira apenas continuar por perto.")}</p>
          <div className="lg:pl-10">
            <h3 className="font-serif text-[clamp(24px,2vw,30px)] leading-tight text-red-brand">
              {tx("pessoas/05373cb68d", "Escolha a porta que faz sentido agora.")}</h3>
            <nav aria-label={tx("pessoas/7f44dbeada", "Portas editoriais")} className="mt-5 flex flex-wrap gap-3">
              <Chip href="#porta-terca">{tx("pessoas/ae3dd5acb9", "Uma Terça-feira Qualquer")}</Chip>
              <Chip href="#porta-ideias">{tx("pessoas/057601214b", "Ideias")}</Chip>
              <Chip href="#porta-futuros">{tx("pessoas/ea0a3d41a5", "Futuros Humanos")}</Chip>
            </nav>
          </div>
        </div>
      </Container>
    </Section>
  );
}

