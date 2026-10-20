import { photoPosition } from "@/lib/photo-position";
import type { ReactNode } from "react";
import Image from "next/image";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, DashList, Display, Em, HandNote, Lead, StickyNote, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { MilestoneGlyph, type MilestoneIcon } from "./JuIcons";

import { tx, img, lazy } from "@/lib/editable";
/** Linha vertical vermelha + frase de fechamento (padrão de citação dos mockups). */
function BarQuote({ children, className = "", dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <blockquote
      className={`border-l-[3px] pl-6 font-serif text-[clamp(26px,2.5vw,40px)] leading-[1.12] ${
        dark ? "border-red-bright" : "border-red-brand"
      } ${className}`}
    >
      {children}
    </blockquote>
  );
}

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function JuHero() {
  return (
    <Section padded={false} className="min-h-[calc(100svh-var(--jf-header-h))]" label={tx("ju/351db744da", "Primeiro de tudo, eu sou a Ju")}>
      <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
        <Photo
          src={img("ju/a7a31d568a", "/images/ensaio/home-02-biblioteca-vertical.webp")}
          alt={tx("ju/986ef7359f", "Retrato de Juliana em uma poltrona na biblioteca.")}
          priority
          sizes="50vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
      </div>
      <Stroke shape="loop" draw className="absolute right-[4%] top-[4%] hidden h-[92%] w-[44%] lg:block" width={2.5} />
      <Container className="flex min-h-[calc(100svh-var(--jf-header-h))] flex-col justify-center py-16 lg:py-20">
        <div className="jf-reveal max-w-[680px]">
          <Display as="h1" size="xl">
            {tx("ju/e1c88b78a4", "Primeiro de tudo,")} <Em>{tx("ju/a1e34c32ca", "eu sou a Ju.")}</Em>
          </Display>
          <Stroke shape="underline" draw className="mt-2 h-4 w-[min(340px,70%)] sm:ml-[30%]" width={4} />
          <p className="mt-6 font-serif text-[clamp(21px,1.8vw,27px)] leading-snug text-ink-800">
            {tx("ju/8e206390ea", "Engenheira por formação.")}<br />
            {tx("ju/083839a0da", "Empreendedora por insistência.")}<br />
            {tx("ju/d332428581", "Futurista por inquietação.")}<br />
            {tx("ju/8b40e1a705", "Mãe por transformação.")}</p>
          <Body className="mt-7 max-w-[560px] text-ink-700">
            <p>
              {tx("ju/f6970a3eb9", "Passei mais de duas décadas entre tecnologia, vendas, empresas, liderança, construção, erros, recomeços e perguntas que ficaram grandes demais para ignorar.")}</p>
            <p>
              {tx("ju/705a889c0e", "Hoje, grande parte do meu trabalho nasce do encontro entre")}{" "}
              <strong className="font-semibold text-ink-900">{tx("ju/d8ab30eb6c", "futuros, tecnologia e humanidade")}</strong>.
            </p>
            <p>{tx("ju/f3bf423e97", "Mas, antes de qualquer título, continuo interessada na mesma coisa:")}</p>
          </Body>
          <p className="mt-3 max-w-[560px] text-[clamp(17px,1.25vw,20px)] font-semibold leading-snug text-red-brand">
            {tx("ju/d6dc298dfd", "o que ainda pode existir quando a gente se recusa a tratar o provável como único caminho?")}</p>
          <ButtonRow className="mt-10">
            <ButtonLink href="#trajetoria" size="lg">
              {tx("ju/10ae078419", "Conheça minha trajetória")}</ButtonLink>
            <ButtonLink href="/futuros-humanos" variant="secondary" size="lg">
              {tx("ju/de1ce01b33", "Explore Futuros Humanos")}</ButtonLink>
          </ButtonRow>
        </div>
      </Container>
      <div className="relative h-[90vw] max-h-[560px] lg:hidden">
        <Photo src={img("ju/8cdbcd58f7", "/images/ensaio/home-02-biblioteca-horizontal.webp")} alt={tx("ju/578a8efccf", "Juliana sentada em uma poltrona na biblioteca.")} sizes="100vw" className="absolute inset-0 jf-paper-edge" imgClassName="object-[50%_40%]" />
      </div>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — A TRAJETÓRIA QUE CONSTRUIU A LENTE ───────────────────────── */
const MILESTONES: { label: string; icon: MilestoneIcon }[] = lazy(() => ([
  { label: tx("ju/b4063cfc2d", "Engenharia"), icon: "gear" },
  { label: tx("ju/5c346b7284", "Tecnologia"), icon: "laptop" },
  { label: tx("ju/26d0bdc092", "Empreendedorismo"), icon: "chart" },
  { label: tx("ju/df51316785", "Transformação humana"), icon: "people" },
  { label: tx("ju/3bcde5e5a7", "Maternidade"), icon: "heart" },
]));

function Timeline({ className = "" }: { className?: string }) {
  return (
    <ol className={`relative ${className}`} aria-label={tx("ju/949fbda6e7", "Marcos da trajetória")}>
      <span className="absolute bottom-7 left-7 top-7 w-px bg-red-brand/50" aria-hidden />
      {MILESTONES.map((m, i) => (
        <li key={m.label} className="relative flex items-center gap-5 py-3">
          <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-red-brand/60 bg-cream-50 shadow-[0_6px_18px_-12px_rgba(24,20,17,.5)]">
            <MilestoneGlyph name={m.icon} />
          </span>
          <span>
            <span className="block text-[11px] font-semibold tracking-[0.2em] text-red-brand">{String(i + 1).padStart(2, "0")}</span>
            <span className="block font-serif text-[clamp(22px,1.9vw,30px)] leading-[1.05]">{m.label}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function JuTrajetoria() {
  return (
    <Section id="trajetoria" label={tx("ju/bf7f026725", "A trajetória que construiu a lente")}>
      <Container className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <Display size="lg">
            {tx("ju/e4cbeac6d0", "Antes de falar sobre futuros, eu vivi muitas")} <Em>{tx("ju/b58b818789", "formas de transformação.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(320px,60%)] sm:ml-[40%]" width={4} />

          <Timeline className="mt-10 lg:hidden" />

          <Body className="mt-10 max-w-[640px] text-ink-700 [&_strong]:font-semibold [&_strong]:text-ink-900">
            <p>
              <strong>{tx("ju/339eb473e7", "Comecei pela engenharia.")}</strong>
              <br />
              {tx("ju/f17e10e720", "Foi ali que aprendi a pensar sistemas, estrutura, relação entre causa e consequência e a importância de compreender como as coisas funcionam de verdade.")}</p>
            <p>
              <strong>{tx("ju/d96b9e8e02", "Depois veio a tecnologia vivida de dentro.")}</strong>
              <br />
              {tx("ju/031c912e36", "Grandes empresas. Mercado. Vendas. Pressão. Meta. Cliente. Escala. Transformação digital. Liderança. Resultado.")}<br />
              {tx("ju/0f787a954c", "Por muitos anos, esse foi o meu mundo.")}</p>
            <p>
              <strong>
                {tx("ju/e8c1b993b4", "Em algum momento, a inquietação foi ficando maior do que a estabilidade.")}<br />
                {tx("ju/1a12abc70b", "Então empreendi.")}</strong>
              <br />
              {tx("ju/5d913b5256", "Construí empresas, criei projetos, liderei pessoas, tomei decisões difíceis, perdi dinheiro, recomecei, mudei de direção e aprendi que construir alguma coisa no mundo real é sempre mais complexo — e mais humano — do que parece no papel.")}</p>
            <p>
              <strong>{tx("ju/8db458c6cb", "Ao mesmo tempo, fui me aproximando cada vez mais das perguntas ligadas à transformação humana:")}</strong>
              <br />
              {tx("ju/164b601a52", "o que faz alguém mudar;")}<br />
              {tx("ju/540d1bf414", "o que faz alguém sustentar uma escolha;")}<br />
              {tx("ju/8e124a9c66", "o que amplia potência;")}<br />{tx("ju/d32c0b5e13", "o que nos impede de viver à altura daquilo que percebemos.")}</p>
            <p>
              <strong>{tx("ju/64a914a3fc", "E então veio a maternidade.")}</strong>
              <br />
              {tx("ju/3645e214ce", "Com ela, o futuro deixou de ser apenas um tema de estratégia, inovação ou planejamento.")}<br />
              {tx("ju/a3306c58ab", "Passou a ser também o mundo que minhas filhas vão herdar.")}</p>
            <p>
              {tx("ju/158ae05d03", "Foi assim que tecnologia, construção, transformação e humanidade começaram a convergir, até formar a lente que hoje organiza grande parte do meu trabalho.")}</p>
          </Body>
          <BarQuote className="mt-12 max-w-[640px]">
            {tx("ju/f675b1e957", "Eu não cheguei aos futuros por tendência.")}<br />
            <Em>{tx("ju/49570b84f6", "Cheguei por trajetória.")}</Em>
          </BarQuote>
        </div>

        <div className="relative hidden lg:block">
          <div className="sticky top-[calc(var(--jf-header-h)+24px)] grid grid-cols-[1fr_auto] items-center gap-6">
            <div className="relative aspect-[3/5] w-full">
              <Photo
                src={img("ju/667e5b638d", "/images/ju/retrato-biblioteca.webp")}
                alt={tx("ju/f12b98a305", "Juliana sorrindo diante de sua biblioteca.")}
                sizes="28vw"
                className="absolute inset-0 jf-paper-edge"
                imgClassName="object-[50%_40%]"
              />
              <Stroke shape="loop" className="absolute -left-8 top-[18%] h-[78%] w-[110%]" width={2.2} />
            </div>
            <Timeline />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 3 — TECNOLOGIA VIVIDA DE DENTRO ───────────────────────── */
export function JuTecnologia() {
  const world = [tx("ju/44850a9c1b", "Mercado"), tx("ju/699908bd6e", "Clientes"), tx("ju/662407d20c", "IA"), tx("ju/49963e4a29", "Automação"), tx("ju/222175eeb9", "Infraestrutura"), tx("ju/7dcf688734", "Negócios"), tx("ju/88cbb36cf3", "Decisões")];
  return (
    <Section tone="dark" padded={false} label={tx("ju/45b2c65ec9", "Tecnologia vivida de dentro")}>
      <div className="grid lg:grid-cols-[58%_42%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:pr-12">
          <Display size="lg">
            {tx("ju/20e6a42fec", "Tecnologia nunca foi apenas um assunto para mim.")} <Em>{tx("ju/1f77881a82", "Foi o mundo onde eu trabalhei.")}</Em>
          </Display>
          <Body className="mt-10 max-w-[640px] text-cream-50/85">
            <p>
              {tx("ju/9aeb8ac291", "Passei boa parte da minha trajetória profissional dentro de empresas de tecnologia, trabalhando com organizações que precisavam tomar decisões reais sobre infraestrutura, dados, sistemas, transformação e investimento.")}</p>
            <p>
              {tx("ju/3505167f40", "Comecei em desenvolvimento de negócios. Passei pela EMC. Vivi alguns dos anos mais intensos da minha formação profissional na Oracle.")}</p>
            <p>{tx("ju/17df410c5e", "Ali, tecnologia nunca chegava sozinha.")}</p>
            <p>
              {tx("ju/fb52aa46d9", "Ela vinha acompanhada de")}{" "}
              <strong className="font-semibold text-cream-50">
                {tx("ju/93b6a43663", "cliente, orçamento, pressão, política, prazo, risco, pessoas e consequência.")}</strong>
            </p>
            <p>
              {tx("ju/60f8e7b644", "Na Oracle, trabalhei com algumas das maiores organizações brasileiras, construindo oportunidades complexas e projetos que precisavam funcionar não apenas tecnicamente, mas comercial e estrategicamente.")}</p>
          </Body>
        </Container>
        <div className="relative min-h-[420px]">
          <Photo
            src={img("ju/dd36ab4eae", "/images/ensaio/ju-trabalho-tecnologia.webp")}
            alt={tx("ju/18017c9f6c", "Juliana concentrada no trabalho em um notebook.")}
            sizes="(min-width:1024px) 42vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/10 to-transparent max-lg:bg-gradient-to-b" aria-hidden />
          <Stroke shape="circle" className="absolute left-[8%] top-[6%] h-[80%] w-[80%] opacity-90" width={2.5} color="var(--jf-red-400)" />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-12 border-t border-cream-50/20 pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="text-cream-50/85">
              {tx("ju/737f761d3a", "Alcancei")} <strong className="font-semibold text-cream-50">{tx("ju/df7d81c9cb", "486% da meta anual")}</strong>{tx("ju/9bde49e871", ", gerei mais de")}{" "}
              <strong className="font-semibold text-cream-50">{tx("ju/d9f78a3fa1", "US$ 20 milhões em receita")}</strong> {tx("ju/28bc982fc3", "e participei de projetos reconhecidos dentro da companhia.")}</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:divide-x sm:divide-cream-50/20">
              <div>
                <dt className="sr-only">{tx("ju/c6da4f459d", "Meta anual alcançada")}</dt>
                <dd className="jf-display text-[clamp(44px,4.6vw,72px)] text-red-bright"><span data-count="486">{tx("ju/99fb1b9be6", "486")}</span>%</dd>
                <dd className="mt-2 text-[15px] text-cream-50/80">{tx("ju/c28d750823", "da meta anual")}</dd>
              </div>
              <div className="sm:pl-6">
                <dt className="sr-only">{tx("ju/c9495571c1", "Receita gerada")}</dt>
                <dd className="jf-display text-[clamp(36px,3.8vw,60px)] text-red-bright">{tx("ju/18fd523cd7", "+ US$")} <span data-count="20">{tx("ju/a54e9af760", "20")}</span> {tx("ju/79fdbacf9b", "milhões")}</dd>
                <dd className="mt-2 text-[15px] text-cream-50/80">{tx("ju/2408183742", "em receita")}</dd>
              </div>
            </dl>
            <Body className="mt-10 text-cream-50/85">
              <p>{tx("ju/02ac79b7d8", "Mas talvez o aprendizado mais importante daquele período não esteja nos números.")}</p>
              <p>{tx("ju/8c5ace32fe", "Foi perceber que:")}</p>
            </Body>
            <BarQuote dark className="mt-4">
              {tx("ju/95c032dcf4", "nenhuma transformação tecnológica é apenas tecnológica.")}</BarQuote>
            <Dash className="mt-10 text-red-bright" />
            <p className="mt-4 font-serif text-[clamp(21px,1.8vw,27px)] leading-snug text-cream-50/95">
              {tx("ju/9ef60efbaa", "Toda tecnologia muda alguma coisa na forma como pessoas trabalham, decidem, colaboram, lideram, aprendem ou distribuem poder.")}</p>
          </div>

          <div className="lg:border-l lg:border-cream-50/20 lg:pl-16">
            <Body className="text-cream-50/85">
              <p>
                {tx("ju/2ad4e1112a", "Mais tarde, na A2F, passei do lado de quem vendia tecnologia dentro de grandes corporações para o lado de quem precisava construir uma empresa capaz de entregar tecnologia para elas.")}</p>
              <p>{tx("ju/7f4c8e2d66", "E hoje continuo perto desse mundo.")}</p>
            </Body>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={tx("ju/2a3d392e64", "O mundo onde continuo")}>
              {world.map((w) => (
                <li key={w} className="rounded-full border border-cream-50/30 px-4 py-1.5 text-[14px] tracking-wide text-cream-50/90">
                  {w}.
                </li>
              ))}
            </ul>
            <Body className="mt-10 text-cream-50/85">
              <p>{tx("ju/2defd814c2", "Por isso, quando penso sobre o futuro da tecnologia, minha pergunta raramente é apenas:")}</p>
            </Body>
            <p className="mt-3 font-serif text-[clamp(21px,1.8vw,27px)] italic leading-snug text-cream-50/90">
              {tx("ju/71d16cc997", "“O que essa ferramenta será capaz de fazer?”")}</p>
            <Body className="mt-6 text-cream-50/85">
              <p>{tx("ju/b1593ad9e3", "A pergunta que me interessa cada vez mais é:")}</p>
            </Body>
            <Display as="h3" size="md" className="mt-4 text-red-bright">
              {tx("ju/969eec2868", "O que acontece com a gente quando ela consegue?")}</Display>
            <Stroke shape="underline" className="mt-3 h-4 w-[min(300px,70%)] sm:ml-[30%]" width={4} color="var(--jf-red-400)" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — CONSTRUIR, ERRAR, RECOMEÇAR ───────────────────────── */
export function JuConstruir() {
  const needs = [
    tx("ju/a5ceb4593c", "É preciso vender."),
    tx("ju/92a577e4ae", "Entregar."),
    tx("ju/b0d8133a60", "Pagar conta."),
    tx("ju/65070ac043", "Liderar gente."),
    tx("ju/d2d35a9643", "Tomar decisão sem informação completa."),
    tx("ju/287ae2426a", "Assumir risco."),
    tx("ju/a96857d216", "Ouvir cliente."),
    tx("ju/6c533581af", "Voltar atrás."),
    tx("ju/0837de78dc", "Sustentar escolhas."),
    tx("ju/fe21824b4d", "E, às vezes, admitir que alguma coisa simplesmente não funcionou."),
  ];
  return (
    <Section padded={false} label={tx("ju/e11cb477c1", "Construir, errar, recomeçar")}>
      <div className="grid lg:grid-cols-[56%_44%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[800px] lg:pr-12">
          <Display size="lg">
            {tx("ju/46973257d4", "Construir alguma coisa no mundo real muda a maneira como você")} <Em>{tx("ju/6f56bff587", "pensa sobre possibilidade.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(320px,60%)] sm:ml-[40%]" width={4} />
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>
              {tx("ju/4a07ef674d", "Depois de anos trabalhando dentro de grandes empresas, chegou um momento em que eu quis construir alguma coisa minha.")}</p>
            <p>{tx("ju/75a3022d5e", "E foi aí que muita coisa que parecia clara no PowerPoint ficou menos clara no mundo real.")}</p>
          </Body>
          <p className="mt-8 font-semibold text-ink-900">{tx("ju/21cac7edce", "Empreender me ensinou que uma boa ideia não basta.")}</p>
          <ul className="mt-4 max-w-[640px] gap-x-10 text-ink-700 sm:columns-2 [&>li]:mb-1.5 [&>li]:break-inside-avoid">
            {needs.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>{tx("ju/6f8380c6c7", "Cofundei empresas. Criei projetos. Investi dinheiro. Acertei. Errei. Perdi. Recomecei.")}</p>
            <p>
              {tx("ju/9fe4f1dac6", "Algumas construções cresceram.")}<br />
              {tx("ju/6eda90323c", "Outras quebraram expectativas.")}</p>
            <p>
              {tx("ju/9dc8cff9b7", "Algumas me ensinaram mais pelo que deram certo.")}<br />
              {tx("ju/924488bfbe", "Outras, pelo que deram errado.")}</p>
            <p>{tx("ju/f8c856b704", "E talvez uma das coisas mais importantes que aprendi seja esta:")}</p>
          </Body>
        </Container>
        <div className="relative min-h-[460px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("ju/3c1f94e634", "/images/ensaio/ju-estudo-fones.webp")}
            alt={tx("ju/07a5199d4f", "Juliana estudando com fones de ouvido, livro e notebook.")}
            sizes="(min-width:1024px) 44vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <div className="absolute -left-6 bottom-10 hidden w-[42%] max-w-[240px] rotate-[-3deg] border-[6px] border-cream-50 shadow-[0_14px_30px_-16px_rgba(0,0,0,.55)] lg:block">
            <Image
              src={img("ju/5c42ea63ad", "/images/ensaio/home-04c-quadro-post-its.webp")}
              alt={tx("ju/784696947e", "Cena ilustrativa de Juliana junto a um quadro com diagrama e post-its.")}
              width={400}
              height={340}
              sizes="240px"
              className="h-auto w-full"
              data-photo-origin="generated-ai"
            style={{ objectPosition: photoPosition("/images/ensaio/home-04c-quadro-post-its.webp") }} />
          </div>
          <HandNote className="absolute right-6 top-8 hidden max-w-[200px] text-ink-900 xl:block" rotate={-5}>
            {tx("ju/4d78f1c3f8", "Acertei. Errei. Perdi. Recomecei.")}</HandNote>
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.25fr_0.9fr_1fr] lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <figure className="relative lg:pr-10">
            <span className="jf-display absolute -left-1 -top-3 text-[64px] leading-none text-red-brand" aria-hidden>
              “
            </span>
            <blockquote className="pl-10 font-serif text-[clamp(24px,2.2vw,34px)] leading-[1.15]">
              {tx("ju/f0b400ad17", "possibilidade sem realidade vira fantasia.")}<br />
              {tx("ju/fe27b9b41c", "realidade sem possibilidade vira resignação.")}</blockquote>
            <Stroke shape="underline" className="ml-[30%] mt-2 h-4 w-[60%]" width={4} />
          </figure>
          <div className="lg:px-10">
            <p className="text-ink-700">{tx("ju/4f4ba60fd6", "O trabalho acontece no espaço entre as duas.")}</p>
            <p className="mt-3 text-ink-700">
              {tx("ju/e8b9ecfbb3", "É ali que a gente testa.")}<br />
              {tx("ju/700b11dcf7", "Ajusta.")}<br />
              {tx("ju/a46aae8f83", "Insiste.")}<br />
              {tx("ju/f1e89d9dd0", "Desiste quando precisa.")}<br />
              {tx("ju/510765aeae", "Muda de direção.")}<br />{tx("ju/30b011dbf7", "E constrói de novo.")}</p>
          </div>
          <div className="lg:pl-10">
            <Title as="h3" className="text-[clamp(26px,2.3vw,36px)] leading-[1.1] text-red-brand">
              {tx("ju/9aab395d63", "Eu acredito em futuros possíveis.")}<br />
              {tx("ju/340ec197c2", "Mas acredito ainda mais em futuros testados pela realidade.")}</Title>
            <Stroke shape="scribble" className="mt-4 h-6 w-36" width={4} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 5 — MATERNIDADE COMO VIRADA DE PERSPECTIVA ───────────────────────── */
export function JuMaternidade() {
  const questions = [
    tx("ju/8bae0b6015", "Que mundo estamos construindo?"),
    tx("ju/2d89d02d4f", "O que nossas escolhas de hoje tornam mais provável amanhã?"),
    tx("ju/23ff67cf4d", "Que capacidades nossas filhas vão precisar desenvolver?"),
    tx("ju/f1c92c85c3", "O que estamos entregando às ferramentas que criamos?"),
    tx("ju/8596d9cb57", "E quanto de nós continuará presente naquilo que estamos construindo?"),
  ];
  return (
    <Section padded={false} tone="cream" label={tx("ju/21b92cd990", "Maternidade como virada de perspectiva")}>
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[760px] lg:pr-12">
          <Display size="lg">
            {tx("ju/73e09cce47", "Quando virei mãe, o futuro")} <Em>{tx("ju/90e8e1d907", "mudou de lugar.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(300px,60%)] sm:ml-[30%]" width={4} />
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>{tx("ju/162ab972cf", "Eu já trabalhava com tecnologia.")}</p>
            <p>{tx("ju/a02b83f969", "Já tinha vendido, liderado, empreendido, criado empresas, cometido erros e começado de novo.")}</p>
            <p>{tx("ju/cbc6c8d093", "Já me interessava profundamente por transformação.")}</p>
            <p>
              {tx("ju/312c88bd6b", "Mas a maternidade mudou a minha relação com o futuro de um jeito que nenhum planejamento estratégico conseguiria.")}</p>
          </Body>
          <div className="mt-10 grid max-w-[620px] gap-8 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-ink-900/15">
            <div className="sm:pr-8">
              <Dash />
              <p className="jf-eyebrow mt-3 text-ink-900">{tx("ju/0c57ea6bf6", "Antes")}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
                {tx("ju/cc7706a519", "Antes, o futuro era principalmente o lugar onde eu estaria.")}<br />
                {tx("ju/ca533911bc", "As empresas que eu construiria.")}<br />
                {tx("ju/ebe7adc570", "As decisões que eu tomaria.")}<br />
                {tx("ju/767ca81080", "As mudanças que eu viveria.")}</p>
            </div>
            <div className="sm:pl-8">
              <Dash />
              <p className="jf-eyebrow mt-3 text-ink-900">{tx("ju/8a7576b9f5", "Depois")}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-700">{tx("ju/700224669d", "Depois das minhas filhas, ele passou a ser também:")}</p>
              <p className="mt-2 font-serif text-[clamp(22px,1.9vw,28px)] font-medium leading-tight text-red-brand">
                {tx("ju/7b660afa08", "o mundo onde elas vão viver.")}</p>
            </div>
          </div>
          <Body className="mt-10 max-w-[600px] text-ink-700">
            <p>{tx("ju/bee6013652", "E essa mudança parece pequena até você perceber o tamanho dela.")}</p>
            <p>{tx("ju/3bf21eb3d6", "Porque algumas perguntas ficaram impossíveis de tratar apenas como estratégia.")}</p>
          </Body>
          <ul className="mt-5 max-w-[600px] space-y-2 font-serif text-[clamp(19px,1.5vw,23px)] leading-snug text-ink-900">
            {questions.map((q) => (
              <li key={q} className="flex gap-3">
                <span className="mt-[0.7em] h-px w-4 shrink-0 bg-red-brand" aria-hidden />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </Container>
        <div className="relative min-h-[520px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          {/* PENDENTE: foto real da Ju com as filhas (placeholder recortado do mockup, gerado por IA). */}
          <Photo
            src={img("ju/9bead4cfcc", "/images/ensaio/maternidade-vertical.webp")}
            alt={tx("ju/8a19ea2b6c", "Cena ilustrativa vertical de uma mulher e duas meninas fictícias, vistas de costas no parque.")}
            sizes="(min-width:1024px) 48vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="underline" className="absolute bottom-8 left-[10%] h-5 w-[50%]" width={4} />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Body className="text-ink-700">
              <p>{tx("ju/7f28a31bb5", "A maternidade também me obrigou a encarar uma verdade que hoje atravessa boa parte do meu trabalho:")}</p>
            </Body>
            <Display as="h3" size="sm" className="mt-4">
              <Em>{tx("ju/39efe381f5", "eu não controlo o futuro delas.")}</Em>
            </Display>
            <Body className="mt-6 text-ink-700 [&_p+p]:mt-1">
              <p>{tx("ju/b78a27d900", "Não controlo tudo o que vai acontecer.")}</p>
              <p>{tx("ju/48d16e10ce", "Não consigo eliminar risco.")}</p>
              <p>{tx("ju/e9bd46f3c1", "Não consigo escolher por elas.")}</p>
              <p>{tx("ju/0c6433009a", "Não consigo construir o mundo inteiro.")}</p>
            </Body>
            <p className="mt-6 font-serif text-[clamp(21px,1.8vw,27px)] leading-snug">
              {tx("ju/6ce83e641b", "Mas existe uma diferença enorme entre")} <strong className="font-semibold">{tx("ju/e014389f71", "não controlar")}</strong> {tx("ju/9390fe2130", "e")}{" "}
              <strong className="font-semibold text-red-brand">{tx("ju/74ebeff4e0", "não participar")}</strong>.
            </p>
          </div>
          <div>
            <DashList
              className="font-serif text-[clamp(19px,1.5vw,23px)] leading-snug"
              items={[
                tx("ju/d2ae28867d", "Posso escolher o que ensino."),
                tx("ju/196a38d0aa", "O que modelo."),
                tx("ju/b8a2312eeb", "O que sustento."),
                tx("ju/99dd3c0840", "O que questiono."),
                tx("ju/86c16a669e", "O que construo."),
                tx("ju/eedf41e2c7", "O que ajudo a tornar possível."),
              ]}
            />
            <Body className="mt-8 text-ink-700">
              <p>
                {tx("ju/378ef34692", "E talvez tenha sido aí que futuro deixou de ser, para mim, apenas uma questão de previsão, tendência ou planejamento.")}</p>
              <p>{tx("ju/ce54f42205", "Passou a ser também uma questão de:")}</p>
            </Body>
            <p className="jf-eyebrow mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-red-brand">
              <span>{tx("ju/73ed6f0866", "responsabilidade.")}</span>
              <span>{tx("ju/b5273a09c2", "direção.")}</span>
              <span>{tx("ju/fb6e01744c", "humanidade.")}</span>
              <span>{tx("ju/c1c9076c8a", "participação.")}</span>
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <figure className="relative lg:pr-12">
            <span className="jf-display absolute -left-1 -top-3 text-[64px] leading-none text-red-brand" aria-hidden>
              “
            </span>
            <Display as="h3" size="sm" className="pl-10">
              {tx("ju/d64c636de6", "O futuro deixou de ser apenas o lugar onde eu viveria.")}<br />
              <Em>{tx("ju/a685e80b31", "Passou a ser também o mundo onde minhas filhas vão viver.")}</Em>
            </Display>
          </figure>
          <div className="lg:pl-12">
            <p className="text-[17px] font-medium leading-relaxed text-ink-800">
              {tx("ju/ee3b126cab", "Talvez tenha sido aí que eu comecei a entender, de verdade, que não controlar não significa não participar.")}</p>
            <Stroke shape="scribble" className="mt-3 h-6 w-36" width={4} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 6 — DA TRANSFORMAÇÃO AOS FUTUROS ───────────────────────── */
function PaperCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative bg-cream-100 p-7 shadow-[0_14px_34px_-22px_rgba(24,20,17,.45)] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function FlowArrow() {
  return (
    <Stroke
      shape="arrow"
      className="mx-auto h-8 w-14 rotate-90 lg:absolute lg:-right-11 lg:top-1/2 lg:z-10 lg:mx-0 lg:-translate-y-1/2 lg:rotate-0"
      width={2.5}
    />
  );
}

export function JuFuturos() {
  return (
    <Section label={tx("ju/c06db170ea", "Da transformação aos futuros")}>
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
        <div>
          <Display size="lg">
            {tx("ju/932effc598", "Durante muito tempo, eu achei que trabalhava")} <Em>{tx("ju/e43e941a39", "com transformação.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(300px,60%)] sm:ml-[35%]" width={4} />
          <p className="mt-8 font-serif text-[clamp(20px,1.6vw,24px)] leading-snug text-ink-800">
            {tx("ju/b2a1dc6d7b", "Transformação digital.")}<br />
            {tx("ju/c52cd7a10f", "Transformação de empresas.")}<br />
            {tx("ju/1519f345ef", "Transformação de pessoas.")}</p>
          <Body className="mt-6 max-w-[600px] text-ink-700">
            <p>
              {tx("ju/a6da95c395", "Durante anos, estudei e experimentei temas como autoconhecimento, escolhas, felicidade, coragem, potência, propósito e mudança.")}</p>
            <p>{tx("ju/fa7c2929ef", "Criei experiências. Dei palestras. Conduzi workshops.")}</p>
            <p>
              {tx("ju/1fe031fc35", "Desenvolvi projetos como")} <strong className="font-semibold text-ink-900">{tx("ju/d66c155564", "Alquimia Pessoal")}</strong> {tx("ju/a517ec4048", "e")}{" "}
              <strong className="font-semibold text-ink-900">{tx("ju/8bdd10ecd4", "Ser Arco-Íris")}</strong>.
            </p>
          </Body>
        </div>
        <div className="relative aspect-[4/4.2] w-full">
          <Photo
            src={img("ju/bd164517c4", "/images/ensaio/ju-leitura-anotacoes.webp")}
            alt={tx("ju/588ef59a0f", "Juliana lendo um livro e fazendo anotações em um caderno.")}
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-paper-edge"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </Container>

      <Container className="mt-16 lg:mt-20">
        <ol className="grid gap-6 lg:grid-cols-3 lg:gap-14">
          <li className="relative">
            <PaperCard className="h-full -rotate-[0.6deg]">
              <Dash />
              <p className="mt-4 text-ink-700">{tx("ju/3959c81f51", "Na época, minha pergunta parecia estar principalmente no indivíduo:")}</p>
              <p className="mt-4 font-semibold leading-snug text-ink-900">
                {tx("ju/740d094642", "O que precisa acontecer para uma pessoa perceber que sua vida pode ser diferente — e conseguir se mover nessa direção?")}</p>
            </PaperCard>
            <FlowArrow />
          </li>
          <li className="relative">
            <PaperCard className="h-full rotate-[0.5deg]">
              <Dash />
              <p className="mt-4 text-ink-700">{tx("ju/6cab8a9b77", "Mas, aos poucos, comecei a perceber que aquela pergunta era maior.")}</p>
              <p className="mt-3 font-semibold text-ink-900">{tx("ju/9c1d6c15ad", "Porque ninguém muda sozinho.")}</p>
              <p className="mt-1 text-ink-700">{tx("ju/19cf0f2b74", "Nós mudamos dentro de sistemas.")}</p>
              <p className="jf-hand mt-4 text-[24px] leading-tight text-ink-800">
                {tx("ju/baae2e4d1f", "Dentro de famílias. Empresas. Tecnologias. Culturas. Economias. Histórias.")}</p>
              <p className="mt-3 text-[15px] text-ink-700">
                {tx("ju/8cfbdc48f1", "Possibilidades que recebemos — e possibilidades que sequer aprendemos a imaginar.")}</p>
            </PaperCard>
            <FlowArrow />
          </li>
          <li className="relative">
            <PaperCard className="h-full -rotate-[0.4deg]">
              <Stroke shape="circle" className="absolute -top-6 left-6 h-14 w-14" width={2.5} />
              <p className="text-ink-700">{tx("ju/f7ce0f042d", "Foi então que uma pergunta começou a atravessar todas as outras:")}</p>
              <Display as="h3" size="sm" className="mt-3 -rotate-[2deg]">
                {tx("ju/31d26b5ab0", "E se pudesse ser diferente?")}</Display>
              <Stroke shape="underline" className="mt-1 h-3 w-[70%]" width={3.5} />
              <p className="mt-4 text-[15px] text-ink-700">
                {tx("ju/925b7cc4de", "Não como negação da realidade.")}<br />
                {tx("ju/8ba79c92ae", "Não como promessa de que tudo é possível.")}<br />
                {tx("ju/074693fdee", "Mas como investigação:")}</p>
              <p className="mt-2 font-semibold text-ink-900">{tx("ju/b85ebb6aac", "aquilo que existe esgota aquilo que pode existir?")}</p>
            </PaperCard>
          </li>
        </ol>
      </Container>

      <Container className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Body className="text-ink-700">
            <p>
              {tx("ju/9784a24356", "Foi nesse ponto que meu interesse por transformação começou a encontrar os")}{" "}
              <strong className="font-semibold text-ink-900">{tx("ju/cc50112156", "Estudos de Futuros")}</strong>.
            </p>
            <p>{tx("ju/c97f286d04", "E algo fez muito sentido para mim.")}</p>
            <p>{tx("ju/1c5c17fe0f", "Pensar futuros não precisava significar tentar adivinhar o que aconteceria.")}</p>
            <p>{tx("ju/12631ee056", "Podia significar ampliar nossa capacidade de:")}</p>
          </Body>
          <DashList
            className="mt-4 font-semibold text-ink-900"
            items={[
              tx("ju/7738e21a2d", "imaginar possibilidades;"),
              tx("ju/035adde7c6", "escolher direção;"),
              tx("ju/e6e372250c", "desenvolver capacidades;"),
              tx("ju/e3e5f79584", "e participar daquilo que ainda pode existir."),
            ]}
          />
          <p className="mt-8 text-ink-700">{tx("ju/6ee54277df", "As perguntas que eu fazia sobre pessoas não desapareceram.")}</p>
          <Title as="h3" className="mt-2 text-[clamp(26px,2.3vw,36px)]">
            <Em>{tx("ju/be3d27fed6", "Elas ficaram maiores.")}</Em>
          </Title>
        </div>
        <div className="relative flex items-center justify-center">
          <Stroke shape="circle" className="absolute inset-0 h-full w-full opacity-80" width={2.5} />
          <div className="relative max-w-[440px] px-8 py-16 sm:px-12 sm:py-20">
            <p className="jf-eyebrow text-red-brand">{tx("ju/e8d6fb7fc6", "Futurismo Humanista")}</p>
            <Title as="h3" className="mt-4 text-[clamp(24px,2vw,32px)]">
              {tx("ju/44b797a97f", "Foi assim que cheguei ao Futurismo Humanista.")}</Title>
            <p className="mt-4 text-ink-700">{tx("ju/b2fabd5d63", "Não porque pessoas sejam uma variável dentro dos futuros.")}</p>
            <p className="mt-2 text-ink-700">
              {tx("ju/4d4235bc2d", "Mas porque, para mim,")} <strong className="font-semibold text-ink-900">{tx("ju/f1055e04f7", "elas são a razão para estudá-los.")}</strong>
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-14">
        <BarQuote className="max-w-[900px]">
          {tx("ju/35b0ec1735", "Eu não abandonei as perguntas sobre transformação humana quando comecei a estudar futuros.")}<br />
          <Em>{tx("ju/17bd59e87b", "Eu descobri um território maior onde elas cabiam.")}</Em>
        </BarQuote>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-serif text-[clamp(20px,1.6vw,24px)] leading-snug text-ink-800">
              {tx("ju/a55bff7ec0", "A tecnologia importa.")}<br />
              {tx("ju/febfb40302", "A estratégia importa.")}<br />
              {tx("ju/873585951f", "Os sinais de mudança importam.")}<br />
              {tx("ju/95b78ace63", "As tendências importam.")}</p>
            <p className="mt-6 text-ink-700">{tx("ju/d6ac1ca863", "Mas nenhuma dessas coisas responde sozinha:")}</p>
            <p className="mt-3 font-serif text-[clamp(24px,2.1vw,32px)] font-medium leading-tight text-red-brand">
              {tx("ju/22d5ed4dda", "Que futuros valem a pena ajudar a tornar possíveis?")}</p>
            <p className="mt-4 text-ink-700">{tx("ju/d73fbd5824", "Essa é uma pergunta profundamente humana.")}</p>
          </div>
          <div>
            <Display as="h3" size="sm">
              {tx("ju/0ba8b3ca76", "Eu estudo futuros porque me interesso profundamente por")} <Em>{tx("ju/3cfc7afe5f", "pessoas.")}</Em>
            </Display>
            <Body className="mt-6 text-ink-700 [&_p+p]:mt-1">
              <p>{tx("ju/da26026276", "Pelo que somos capazes de imaginar.")}</p>
              <p>{tx("ju/b4bbfab6e8", "Pelas escolhas que fazemos.")}</p>
              <p>{tx("ju/c8d53e5956", "Pelo que precisamos nos tornar capazes de sustentar.")}</p>
              <p>{tx("ju/ddd26774b7", "E pelo que acontece quando começamos, de verdade, a construir.")}</p>
            </Body>
            <ButtonLink href="/futuros-humanos" className="mt-10">
              {tx("ju/e327a402ca", "Explore Futuros Humanos")}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 7 — O QUE A JU CONSTRÓI HOJE ───────────────────────── */
type Front = { name: ReactNode; key: string; tagline: string; img: string; alt: string; body: ReactNode };

const FRONTS: Front[] = lazy(() => ([
  {
    key: "futuros",
    name: "Futuros Humanos",
    tagline: tx("ju/a490ef72d4", "Meu principal território intelectual contemporâneo."),
    img: img("ju/027ff1099a", "/images/ensaio/palestras-palco-frente.webp"),
    alt: tx("ju/63958cc401", "Cena ilustrativa de Juliana falando no palco, vista de frente."),
    body: (
      <>
        <p>
          {tx("ju/242bf475b4", "É onde organizo grande parte da minha investigação sobre futuros, tecnologia, humanidade, escolhas, capacidades e direção.")}</p>
        <p>
          {tx("ju/420ba22ae5", "Também é minha")} <strong className="font-semibold text-ink-900">{tx("ju/7038a4072e", "palestra-mãe")}</strong>.
        </p>
        <p>{tx("ju/a18a527280", "Mas Futuros Humanos é maior do que uma palestra.")}</p>
        <p>{tx("ju/199ae007c9", "É a lente a partir da qual muitas das perguntas que hoje me interessam começam a ganhar forma.")}</p>
      </>
    ),
  },
  {
    key: "palestras",
    name: "Palestras, workshops e experiências",
    tagline: tx("ju/c0931338fe", "Quando as ideias precisam entrar em uma sala."),
    img: img("ju/5b23df234c", "/images/ensaio/palestras-workshop-01.webp"),
    alt: tx("ju/56aff4f7a8", "Cena ilustrativa de Juliana e um grupo discutindo ideias ao redor de uma mesa."),
    body: (
      <>
        <p>
          {tx("ju/0412d10f4e", "Levo essas conversas para organizações, lideranças, eventos e equipes por meio de palestras, workshops e experiências customizadas.")}</p>
        <p>{tx("ju/d642a5e2e7", "Às vezes, o ponto de partida é Futuros Humanos.")}</p>
        <p>{tx("ju/2d70b53235", "Outras vezes, o contexto pede outra conversa.")}</p>
        <p>
          {tx("ju/c6a8e1ca6d", "A tese dá direção.")} <strong className="font-semibold text-ink-900">{tx("ju/c3c0a5876f", "A realidade define o formato.")}</strong>
        </p>
      </>
    ),
  },
  {
    key: "wtf",
    name: "What The Future?!",
    tagline: tx("ju/1a3aaac7c6", "Futuros aplicados em coletivo."),
    img: img("ju/393da693a4", "/images/ensaio/contexto-planejamento-equipe.webp"),
    alt: tx("ju/0807e713c5", "Mãos organizando post-its e ideias em uma mesa de trabalho."),
    body: (
      <>
        <p>
          {tx("ju/ba30777bbe", "Integro a")} <strong className="font-semibold text-ink-900">{tx("ju/e9957db9d5", "What The Future?!")}</strong>{tx("ju/39ef7757a8", ", um coletivo de futuristas que trabalha para tornar pensamento de futuros mais acessível, aplicado e útil.")}</p>
        <p>
          {tx("ju/5e0c21dca3", "É também nesse ecossistema que participo de trabalhos como")}{" "}
          <strong className="font-semibold text-ink-900">{tx("ju/f3c8c3c7f6", "SciFiXD")}</strong> {tx("ju/f620591641", "e")}{" "}
          <strong className="font-semibold text-ink-900">{tx("ju/6034d4c5ec", "Futurismo Pessoal")}</strong>.
        </p>
        <p>{tx("ju/add4f39dcc", "WTF não é Futuros Humanos. E Futuros Humanos não é WTF.")}</p>
        <p>{tx("ju/b9bbb15c38", "Mas existem momentos em que os dois universos se encontram de forma muito produtiva.")}</p>
      </>
    ),
  },
  {
    key: "epic",
    name: (
      <>
        {tx("ju/3836a57fec", "EPIC")}<Em>{tx("ju/f0dc08e0c7", "247")}</Em>
      </>
    ),
    tagline: tx("ju/5ff49839cc", "Transformação pessoal em movimento."),
    img: img("ju/efbf615e4b", "/images/ensaio/ju-caminhada-movimento.webp"),
    alt: tx("ju/6ebc79672b", "Juliana caminhando na calçada, em enquadramento de corpo inteiro."),
    body: (
      <>
        <p>{tx("ju/c34dcb3947", "EPIC247 nasce de outra parte da minha história.")}</p>
        <p>{tx("ju/6c46003cad", "Da investigação sobre capacidade, mudança, escolha e ação na vida real.")}</p>
        <p>{tx("ju/018a35eaae", "Ele não é um produto de Futuros Humanos.")}</p>
        <p>{tx("ju/6d044dca93", "É uma frente própria, com linguagem, proposta e jornada próprias.")}</p>
        <p>{tx("ju/f33de2f14e", "Mas compartilha uma pergunta que atravessa boa parte do meu trabalho:")}</p>
        <p className="font-semibold text-ink-900">
          {tx("ju/2a4ec08df4", "o que precisa acontecer entre perceber que algo pode ser diferente e conseguir começar a construir essa diferença?")}</p>
      </>
    ),
  },
  {
    key: "empresas",
    name: "Empresas, negócios e mercado",
    tagline: tx("ju/6a16e5acad", "Porque eu continuo construindo."),
    img: img("ju/2d949ee024", "/images/ensaio/contexto-tecnologia-humana.webp"),
    alt: tx("ju/24572e6951", "Mãos usando um notebook ao lado de caderno e café."),
    body: (
      <>
        <p>{tx("ju/1e65efb528", "Continuo próxima de clientes, vendas, tecnologia, estratégia e operação.")}</p>
        <p>{tx("ju/a5a731987b", "Participo da construção de empresas e projetos.")}</p>
        <p>{tx("ju/0ddf2d4c03", "Lido com mercado, equipe, caixa, decisões, limitações e consequências reais.")}</p>
        <p>{tx("ju/bdc9e37daf", "Essa parte da minha vida não é um “case” da minha tese.")}</p>
        <p>{tx("ju/445ee7158c", "É um dos lugares onde ela continua sendo testada.")}</p>
      </>
    ),
  },
]));

export function JuHoje() {
  return (
    <Section label={tx("ju/0676810c88", "O que a Ju constrói hoje")}>
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.6fr] lg:gap-12">
        <div className="lg:sticky lg:top-[calc(var(--jf-header-h)+24px)] lg:self-start">
          <Display size="md">
            {tx("ju/c6dd0be8a0", "Hoje, essa visão ganha forma em")} <Em>{tx("ju/9e7c4908a9", "coisas diferentes.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(260px,60%)] sm:ml-[30%]" width={4} />
          <Body className="mt-8 text-ink-700">
            <p>{tx("ju/1c57aaa44d", "Durante muito tempo, tentei encontrar uma frase que explicasse tudo o que eu fazia.")}</p>
            <p>{tx("ju/791af30edd", "Hoje acho que esse talvez fosse o problema.")}</p>
            <p>
              {tx("ju/4e22829723", "Porque uma tese não é um produto.")}<br />
              {tx("ju/b1ac10c695", "Uma palestra não é uma empresa.")}<br />
              {tx("ju/a51aa5178a", "Um projeto de futuros não é um programa de transformação pessoal.")}</p>
            <p>{tx("ju/0271c19d3e", "E a minha trajetória não precisa ser reduzida a uma única entrega para fazer sentido.")}</p>
            <p>{tx("ju/7f4466161b", "O que conecta essas frentes não é o formato.")}</p>
            <p>{tx("ju/4ac2cf8395", "É a forma como eu olho para algumas perguntas:")}</p>
          </Body>
          <DashList
            className="mt-4 font-semibold text-ink-900"
            items={[
              tx("ju/02b6bc6cce", "O que ainda pode existir?"),
              tx("ju/85874b843e", "O que queremos ajudar a tornar possível?"),
              tx("ju/d216bc96dc", "Do que precisamos nos tornar capazes?"),
              tx("ju/152a07cdc6", "E o que conseguimos começar a construir agora?"),
            ]}
          />
          <p className="mt-6 text-ink-700">{tx("ju/50d5cd5a66", "A partir daí, meu trabalho hoje se manifesta em diferentes territórios.")}</p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {FRONTS.map((f, i) => (
            <li key={f.key}>
              <PaperCard className={`h-full ${i % 2 ? "md:rotate-[0.4deg]" : "md:-rotate-[0.4deg]"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Title as="h3" className="text-[clamp(26px,2.1vw,32px)] uppercase leading-[1.02]">
                      {f.name}
                    </Title>
                    <Dash className="mt-3" />
                  </div>
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden shadow-[0_8px_18px_-12px_rgba(0,0,0,.6)] sm:h-24 sm:w-28">
                    <Image src={f.img} alt={f.alt} fill sizes="112px" className="object-cover" data-photo-origin="generated-ai" style={{ objectPosition: photoPosition(f.img) }} />
                  </div>
                </div>
                <p className="mt-4 font-semibold text-ink-900">{f.tagline}</p>
                <div className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-700">{f.body}</div>
              </PaperCard>
            </li>
          ))}
          <li className="relative min-h-[420px] overflow-hidden" aria-hidden>
            <Photo src={img("ju/2ca442b238", "/images/ensaio/ju-caminhada-movimento.webp")} alt={tx("ju/6a563ba66a", "Juliana caminhando na calçada, em enquadramento de corpo inteiro.")} sizes="(min-width:768px) 30vw, 100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
            <Stroke shape="circle" className="absolute inset-[6%] h-[88%] w-[88%]" width={2.5} />
          </li>
        </ul>
      </Container>

      <Container className="mt-16 lg:mt-20">
        <div className="grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <Display as="h3" size="sm" className="lg:pr-10">
            {tx("ju/25847e368d", "A Ju é o fio condutor.")}<br />
            <Em>{tx("ju/0b9c00ca0e", "As coisas não precisam ser iguais para pertencer à mesma história.")}</Em>
          </Display>
          <p className="text-ink-700 lg:px-10">
            {tx("ju/3f1d4c6dd6", "Futuros Humanos é uma tese.")}<br />
            {tx("ju/a60992f87a", "EPIC247 é um produto.")}<br />
            {tx("ju/637d680d87", "WTF é um coletivo.")}<br />
            {tx("ju/3456854a8b", "Minhas empresas são construções reais.")}<br />
            {tx("ju/6478b5fb93", "Palestras e workshops são experiências.")}</p>
          <div className="lg:pl-10">
            <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-tight text-red-brand">
              {tx("ju/60509b6759", "A conexão entre tudo isso sou eu — e as perguntas que continuo tentando responder.")}</p>
            <Stroke shape="scribble" className="mt-3 h-6 w-36" width={4} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 8 — O QUE ATRAVESSA TUDO ISSO ───────────────────────── */
const TENSIONS: { a: string; b: string; body: ReactNode }[] = lazy(() => ([
  {
    a: tx("ju/76ef2ef1e5", "Tecnologia"),
    b: tx("ju/e59dc116a0", "Humanidade"),
    body: <p>{tx("ju/a5a1b037ec", "Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.")}</p>,
  },
  {
    a: tx("ju/ae6dd61202", "Futuro"),
    b: tx("ju/ae6f488a89", "Presente"),
    body: (
      <>
        <p>{tx("ju/eb89065bcd", "O futuro não começa amanhã.")}</p>
        <p>{tx("ju/0eda3a577e", "Ele também é construído nas escolhas aparentemente pequenas que repetimos hoje.")}</p>
      </>
    ),
  },
  {
    a: tx("ju/8eecaa1515", "Estratégia"),
    b: tx("ju/e0869333a4", "Emoção"),
    body: (
      <>
        <p>{tx("ju/96bcb7a8b9", "Nenhuma decisão humana acontece apenas na planilha.")}</p>
        <p>{tx("ju/4455aefff7", "Estratégia, medo, desejo, identidade, contexto e relações dividem a mesma mesa.")}</p>
      </>
    ),
  },
  {
    a: tx("ju/01e994f785", "Possibilidade"),
    b: tx("ju/3141ffbaba", "Limite"),
    body: (
      <>
        <p>{tx("ju/1118f34048", "Limites existem.")}</p>
        <p>{tx("ju/bc526a2142", "Potência também.")}</p>
        <p>{tx("ju/6becfc06f5", "Aceitar um não exige desistir da outra.")}</p>
      </>
    ),
  },
  {
    a: tx("ju/ac9ca2b0dd", "Capacidade"),
    b: tx("ju/122ac792ab", "Direção"),
    body: (
      <>
        <p>{tx("ju/03d10e41dd", "Talvez não baste perguntar:")}</p>
        <p className="italic">{tx("ju/e5079232a4", "“Do que conseguimos nos tornar capazes?”")}</p>
        <p>{tx("ju/a5309ba21e", "Precisamos também perguntar:")}</p>
        <p className="font-serif text-[clamp(24px,2vw,30px)] font-medium not-italic leading-tight text-cream-50">
          {tx("ju/79d28bfb8c", "Capazes para quê?")}</p>
      </>
    ),
  },
]));

export function JuTensoes() {
  return (
    <Section tone="dark" padded={false} label={tx("ju/eeee0de332", "O que atravessa tudo isso")}>
      <div className="absolute top-[var(--jf-section-y)] right-0 hidden w-[30%] xl:block aspect-[2/3]">
        <Photo
          src={img("ju/b7224a10b4", "/images/ensaio/pessoas-janela.webp")}
          alt={tx("ju/8cf9ae062d", "Juliana olhando pela janela, com expressão contemplativa.")}
          sizes="30vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/20 to-transparent" aria-hidden />
      </div>
      <Container className="relative py-[var(--jf-section-y)]">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.4fr] lg:gap-14 xl:mr-[24%]">
          <div>
            <Display size="md">
              {tx("ju/28739e3e4d", "No fundo, eu continuo voltando às")} <Em>{tx("ju/ca53adc11b", "mesmas tensões.")}</Em>
            </Display>
            <Stroke shape="underline" className="mt-2 h-4 w-[min(240px,70%)] sm:ml-[20%]" width={4} color="var(--jf-red-400)" />
            <Body className="mt-8 text-cream-50/85">
              <p>
                {tx("ju/5dbaf80220", "Meus projetos mudaram.")}<br />
                {tx("ju/8a3736a1da", "As empresas mudaram.")}<br />
                {tx("ju/f65ba5e2f8", "As tecnologias mudaram.")}<br />
                {tx("ju/24f568cef6", "Eu também mudei.")}</p>
              <p>{tx("ju/8bf1b0a3b2", "Mas algumas perguntas continuam voltando.")}</p>
              <p>{tx("ju/4c1270fa20", "Porque elas não pertencem a um produto ou a uma fase da minha carreira.")}</p>
              <p>{tx("ju/d00f07689e", "Elas pertencem à maneira como eu tento compreender pessoas, organizações e futuros.")}</p>
            </Body>
          </div>
          <ul className="divide-y divide-cream-50/15 border-y border-cream-50/15">
            {TENSIONS.map((t) => (
              <li key={t.a} className="grid gap-3 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-8">
                <h3 className="flex flex-wrap items-center gap-x-3 font-serif text-[clamp(22px,1.9vw,30px)] uppercase leading-none tracking-wide">
                  {t.a}
                  <span className="text-red-bright" aria-hidden>×</span>
                  <span className="sr-only">{tx("ju/7f5b948ce4", "versus")}</span>
                  {t.b}
                </h3>
                <div className="space-y-1 text-[15px] leading-relaxed text-cream-50/80">{t.body}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-14 h-[320px] sm:h-[420px] xl:hidden lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo src={img("ju/8009f032d1", "/images/ensaio/pessoas-janela.webp")} alt={tx("ju/9d4656e87c", "Juliana olhando pela janela, com expressão contemplativa.")} sizes="100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
        </div>

        <div className="mt-16 grid gap-10 border-t border-cream-50/20 pt-12 lg:grid-cols-[1.3fr_1fr_auto] lg:items-center lg:gap-12">
          <Title as="h3" className="text-[clamp(26px,2.4vw,38px)] leading-[1.12]">
            {tx("ju/92810c0a91", "É nesse espaço entre coisas que parecem opostas que eu costumo encontrar")}{" "}
            <Em>{tx("ju/bb873defe8", "as perguntas mais interessantes.")}</Em>
          </Title>
          <div className="text-cream-50/85 lg:border-l lg:border-cream-50/20 lg:pl-10">
            <p>
              {tx("ju/347fa32eb7", "Entre controle e participação.")}<br />
              {tx("ju/d3782204e7", "Entre tecnologia e humanidade.")}<br />
              {tx("ju/ae03d27f7a", "Entre aquilo que existe e aquilo que ainda pode existir.")}<br />
              {tx("ju/2e2440f477", "Entre quem somos e quem precisamos nos tornar.")}</p>
            <p className="mt-4">{tx("ju/5cd785680f", "E talvez seja por isso que eu nunca tenha me encaixado muito bem em uma única caixa.")}</p>
          </div>
          <StickyNote tone="paper" rotate={-4} className="lg:max-w-[240px]">
            {tx("ju/bbd3d5d3e4", "Meu trabalho quase sempre começa no “entre”.")}</StickyNote>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — ENCERRAMENTO ───────────────────────── */
export function JuEncerramento() {
  return (
    <Section padded={false} label={tx("ju/4d5ec0fcb2", "Encerramento")}>
      <div className="grid lg:grid-cols-[60%_40%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[860px] lg:pr-12">
          <Display size="lg">
            {tx("ju/207d48065c", "E eu ainda estou")} <Em>{tx("ju/5415ed17d6", "aqui.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(220px,50%)] sm:ml-[28%]" width={4} />

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-10">
            <div>
              <p className="text-[16px] leading-relaxed text-ink-700">
                {tx("ju/0a1eb4ea28", "Tentando pagar os boletos.")}<br />
                {tx("ju/c128a9b090", "Criar minhas filhas.")}<br />
                {tx("ju/1114ac7204", "Construir empresas.")}<br />
                {tx("ju/48b39cb88a", "Cuidar da cabeça.")}<br />
                {tx("ju/cd7264e691", "Entender um mundo que muda mais rápido do que eu gostaria.")}<br />
                {tx("ju/2a56438984", "Errar menos algumas vezes.")}<br />
                {tx("ju/43b7e8788f", "Errar diferente em outras.")}<br />
                {tx("ju/0612033dde", "Mudar de ideia quando a realidade pede.")}<br />{tx("ju/b546a5388c", "E continuar perguntando:")}</p>
              <p className="mt-4 text-[clamp(20px,1.6vw,24px)] font-semibold text-red-brand">{tx("ju/0f670d8a46", "E se pudesse ser diferente?")}</p>
              <p className="mt-3 text-ink-700">{tx("ju/7b07967d85", "Tudo isso numa terça-feira qualquer.")}</p>
              <Stroke shape="underline" className="mt-2 h-3 w-40" width={3.5} />
            </div>
            <div className="text-[16px] leading-relaxed text-ink-700 md:border-l md:border-ink-900/15 md:pl-8">
              <p>{tx("ju/81415e5e48", "Porque, apesar de falar sobre futuros, eu continuo vivendo no presente.")}</p>
              <p className="mt-3 font-medium text-ink-900">
                {tx("ju/3cdfe6b19a", "É daqui que escolho.")}<br />
                {tx("ju/afab107135", "É daqui que construo.")}<br />{tx("ju/6e5b39e229", "É daqui que participo.")}</p>
              <p className="mt-5">{tx("ju/76bf66ec23", "Não tenho uma resposta pronta sobre o futuro.")}</p>
              <p className="mt-2">{tx("ju/103034bfa7", "Não acredito que exista uma fórmula capaz de eliminar incerteza, limite ou acaso.")}</p>
              <p className="mt-2">{tx("ju/b39fe99eaa", "Mas aprendi algumas coisas.")}</p>
              <p className="mt-4">
                {tx("ju/879797f47d", "Aprendi que o provável não é o único possível.")}<br />
                {tx("ju/55290f531e", "Que possibilidade sem realidade vira fantasia.")}<br />
                {tx("ju/2c1936285a", "Que realidade sem possibilidade vira resignação.")}<br />
                {tx("ju/0eca8f30bc", "Que não controlar tudo não significa não participar.")}<br />{tx("ju/7353970015", "E que, quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.")}</p>
            </div>
          </div>

          <BarQuote className="mt-14">
            {tx("ju/589522b975", "Não terminei de me tornar.")}<br />
            {tx("ju/0ac4e6a799", "Não terminei de construir.")}</BarQuote>
          <Body className="mt-6 max-w-[620px] text-ink-700">
            <p>{tx("ju/710e6a28e5", "E talvez seja justamente por isso que continuo interessada em futuros.")}</p>
            <p>{tx("ju/dc3ecbbeca", "Não porque quero descobrir o que vai acontecer.")}</p>
            <p>
              {tx("ju/a0bc4ad4ea", "Mas porque ainda acredito que existe alguma coisa entre aquilo que existe e aquilo que ainda pode existir.")}</p>
          </Body>
          <Lead className="mt-8 text-red-brand">{tx("ju/8f4ddc30fa", "E nós estamos nesse espaço.")}</Lead>
          <Display as="h3" size="md" className="mt-4">
            {tx("ju/5d8d858cd4", "Temos futuros para")} <Em>{tx("ju/f2b3ee5e36", "construir.")}</Em>
          </Display>
          <ButtonRow className="mt-10">
            <ButtonLink href="/futuros-humanos" size="lg">
              {tx("ju/54b99d4748", "Explore Futuros Humanos")}</ButtonLink>
            <ButtonLink href={CONTACT_ROUTES.organizacoes} variant="secondary" size="lg">
              {tx("ju/4f1c273e9a", "Leve essa conversa para sua organização")}</ButtonLink>
          </ButtonRow>
        </Container>
        <div className="relative min-h-[480px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("ju/94aa0fcbd2", "/images/ensaio/contato-sorriso-vertical.webp")}
            alt={tx("ju/1d8a17e297", "Retrato acolhedor de Juliana com notebook à mesa.")}
            sizes="(min-width:1024px) 40vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="loop" className="absolute -left-6 top-[6%] h-[70%] w-[95%]" width={2.5} />
          <HandNote className="absolute bottom-8 right-6 max-w-[180px] text-ink-900 md:right-10" rotate={-8}>
            {tx("ju/f8ccd18d7a", "Uma terça-feira qualquer.")}</HandNote>
        </div>
      </div>
    </Section>
  );
}
