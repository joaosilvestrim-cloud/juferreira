import type { ReactNode } from "react";
import Image from "next/image";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, DashList, Display, Em, HandNote, Lead, StickyNote, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { MilestoneGlyph, type MilestoneIcon } from "./JuIcons";

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
    <Section padded={false} className="min-h-[calc(100svh-var(--jf-header-h))]" label="Primeiro de tudo, eu sou a Ju">
      <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
        <Photo
          src="/images/ph/ju/hero.webp"
          alt="Retrato de Ju Ferreira sorrindo, com a mão apoiada no rosto, em sua biblioteca"
          priority
          sizes="50vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[45%_25%]"
        />
      </div>
      <Stroke shape="loop" draw className="absolute right-[4%] top-[4%] hidden h-[92%] w-[44%] lg:block" width={2.5} />
      <Container className="flex min-h-[calc(100svh-var(--jf-header-h))] flex-col justify-center py-16 lg:py-20">
        <div className="jf-reveal max-w-[680px]">
          <Display as="h1" size="xl">
            Primeiro de tudo, <Em>eu sou a Ju.</Em>
          </Display>
          <Stroke shape="underline" draw className="mt-2 h-4 w-[min(340px,70%)] sm:ml-[30%]" width={4} />
          <p className="mt-6 font-serif text-[clamp(21px,1.8vw,27px)] leading-snug text-ink-800">
            Engenheira por formação.
            <br />
            Empreendedora por insistência.
            <br />
            Futurista por inquietação.
            <br />
            Mãe por transformação.
          </p>
          <Body className="mt-7 max-w-[560px] text-ink-700">
            <p>
              Passei mais de duas décadas entre tecnologia, vendas, empresas, liderança, construção, erros, recomeços e
              perguntas que ficaram grandes demais para ignorar.
            </p>
            <p>
              Hoje, grande parte do meu trabalho nasce do encontro entre{" "}
              <strong className="font-semibold text-ink-900">futuros, tecnologia e humanidade</strong>.
            </p>
            <p>Mas, antes de qualquer título, continuo interessada na mesma coisa:</p>
          </Body>
          <p className="mt-3 max-w-[560px] text-[clamp(17px,1.25vw,20px)] font-semibold leading-snug text-red-brand">
            o que ainda pode existir quando a gente se recusa a tratar o provável como único caminho?
          </p>
          <ButtonRow className="mt-10">
            <ButtonLink href="#trajetoria" size="lg">
              Conheça minha trajetória
            </ButtonLink>
            <ButtonLink href="/futuros-humanos" variant="secondary" size="lg">
              Explore Futuros Humanos
            </ButtonLink>
          </ButtonRow>
        </div>
      </Container>
      <div className="relative h-[90vw] max-h-[560px] lg:hidden">
        <Photo src="/images/ph/ju/hero.webp" alt="" sizes="100vw" className="absolute inset-0 jf-paper-edge" imgClassName="object-[45%_25%]" />
      </div>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — A TRAJETÓRIA QUE CONSTRUIU A LENTE ───────────────────────── */
const MILESTONES: { label: string; icon: MilestoneIcon }[] = [
  { label: "Engenharia", icon: "gear" },
  { label: "Tecnologia", icon: "laptop" },
  { label: "Empreendedorismo", icon: "chart" },
  { label: "Transformação humana", icon: "people" },
  { label: "Maternidade", icon: "heart" },
];

function Timeline({ className = "" }: { className?: string }) {
  return (
    <ol className={`relative ${className}`} aria-label="Marcos da trajetória">
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
    <Section id="trajetoria" label="A trajetória que construiu a lente">
      <Container className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <Display size="lg">
            Antes de falar sobre futuros, eu vivi muitas <Em>formas de transformação.</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(320px,60%)] sm:ml-[40%]" width={4} />

          <Timeline className="mt-10 lg:hidden" />

          <Body className="mt-10 max-w-[640px] text-ink-700 [&_strong]:font-semibold [&_strong]:text-ink-900">
            <p>
              <strong>Comecei pela engenharia.</strong>
              <br />
              Foi ali que aprendi a pensar sistemas, estrutura, relação entre causa e consequência e a importância de
              compreender como as coisas funcionam de verdade.
            </p>
            <p>
              <strong>Depois veio a tecnologia vivida de dentro.</strong>
              <br />
              Grandes empresas. Mercado. Vendas. Pressão. Meta. Cliente. Escala. Transformação digital. Liderança. Resultado.
              <br />
              Por muitos anos, esse foi o meu mundo.
            </p>
            <p>
              <strong>
                Em algum momento, a inquietação foi ficando maior do que a estabilidade.
                <br />
                Então empreendi.
              </strong>
              <br />
              Construí empresas, criei projetos, liderei pessoas, tomei decisões difíceis, perdi dinheiro, recomecei, mudei de
              direção e aprendi que construir alguma coisa no mundo real é sempre mais complexo — e mais humano — do que
              parece no papel.
            </p>
            <p>
              <strong>Ao mesmo tempo, fui me aproximando cada vez mais das perguntas ligadas à transformação humana:</strong>
              <br />
              o que faz alguém mudar;
              <br />
              o que faz alguém sustentar uma escolha;
              <br />
              o que amplia potência;
              <br />o que nos impede de viver à altura daquilo que percebemos.
            </p>
            <p>
              <strong>E então veio a maternidade.</strong>
              <br />
              Com ela, o futuro deixou de ser apenas um tema de estratégia, inovação ou planejamento.
              <br />
              Passou a ser também o mundo que minhas filhas vão herdar.
            </p>
            <p>
              Foi assim que tecnologia, construção, transformação e humanidade começaram a convergir, até formar a lente que
              hoje organiza grande parte do meu trabalho.
            </p>
          </Body>
          <BarQuote className="mt-12 max-w-[640px]">
            Eu não cheguei aos futuros por tendência.
            <br />
            <Em>Cheguei por trajetória.</Em>
          </BarQuote>
        </div>

        <div className="relative hidden lg:block">
          <div className="sticky top-[calc(var(--jf-header-h)+24px)] grid grid-cols-[1fr_auto] items-center gap-6">
            <div className="relative aspect-[3/5] w-full">
              <Photo
                src="/images/ph/ju/trajetoria.webp"
                alt="Ju Ferreira sorrindo, sentada à mesa"
                sizes="28vw"
                className="absolute inset-0 jf-paper-edge"
                imgClassName="object-[50%_30%]"
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
  const world = ["Mercado", "Clientes", "IA", "Automação", "Infraestrutura", "Negócios", "Decisões"];
  return (
    <Section tone="dark" padded={false} label="Tecnologia vivida de dentro">
      <div className="grid lg:grid-cols-[58%_42%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:pr-12">
          <Display size="lg">
            Tecnologia nunca foi apenas um assunto para mim. <Em>Foi o mundo onde eu trabalhei.</Em>
          </Display>
          <Body className="mt-10 max-w-[640px] text-cream-50/85">
            <p>
              Passei boa parte da minha trajetória profissional dentro de empresas de tecnologia, trabalhando com organizações
              que precisavam tomar decisões reais sobre infraestrutura, dados, sistemas, transformação e investimento.
            </p>
            <p>
              Comecei em desenvolvimento de negócios. Passei pela EMC. Vivi alguns dos anos mais intensos da minha formação
              profissional na Oracle.
            </p>
            <p>Ali, tecnologia nunca chegava sozinha.</p>
            <p>
              Ela vinha acompanhada de{" "}
              <strong className="font-semibold text-cream-50">
                cliente, orçamento, pressão, política, prazo, risco, pessoas e consequência.
              </strong>
            </p>
            <p>
              Na Oracle, trabalhei com algumas das maiores organizações brasileiras, construindo oportunidades complexas e
              projetos que precisavam funcionar não apenas tecnicamente, mas comercial e estrategicamente.
            </p>
          </Body>
        </Container>
        <div className="relative min-h-[420px]">
          <Photo
            src="/images/ph/ju/tecnologia.webp"
            alt="Ju Ferreira conversando em uma reunião de negócios"
            sizes="(min-width:1024px) 42vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/10 to-transparent max-lg:bg-gradient-to-b" aria-hidden />
          <Stroke shape="circle" className="absolute left-[8%] top-[6%] h-[80%] w-[80%] opacity-90" width={2.5} color="var(--jf-red-400)" />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-12 border-t border-cream-50/20 pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="text-cream-50/85">
              Alcancei <strong className="font-semibold text-cream-50">486% da meta anual</strong>, gerei mais de{" "}
              <strong className="font-semibold text-cream-50">US$ 20 milhões em receita</strong> e participei de projetos
              reconhecidos dentro da companhia.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:divide-x sm:divide-cream-50/20">
              <div>
                <dt className="sr-only">Meta anual alcançada</dt>
                <dd className="jf-display text-[clamp(44px,4.6vw,72px)] text-red-bright">486%</dd>
                <dd className="mt-2 text-[15px] text-cream-50/80">da meta anual</dd>
              </div>
              <div className="sm:pl-6">
                <dt className="sr-only">Receita gerada</dt>
                <dd className="jf-display text-[clamp(36px,3.8vw,60px)] text-red-bright">+ US$ 20 milhões</dd>
                <dd className="mt-2 text-[15px] text-cream-50/80">em receita</dd>
              </div>
            </dl>
            <Body className="mt-10 text-cream-50/85">
              <p>Mas talvez o aprendizado mais importante daquele período não esteja nos números.</p>
              <p>Foi perceber que:</p>
            </Body>
            <BarQuote dark className="mt-4">
              nenhuma transformação tecnológica é apenas tecnológica.
            </BarQuote>
            <Dash className="mt-10 text-red-bright" />
            <p className="mt-4 font-serif text-[clamp(21px,1.8vw,27px)] leading-snug text-cream-50/95">
              Toda tecnologia muda alguma coisa na forma como pessoas trabalham, decidem, colaboram, lideram, aprendem ou
              distribuem poder.
            </p>
          </div>

          <div className="lg:border-l lg:border-cream-50/20 lg:pl-16">
            <Body className="text-cream-50/85">
              <p>
                Mais tarde, na A2F, passei do lado de quem vendia tecnologia dentro de grandes corporações para o lado de quem
                precisava construir uma empresa capaz de entregar tecnologia para elas.
              </p>
              <p>E hoje continuo perto desse mundo.</p>
            </Body>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="O mundo onde continuo">
              {world.map((w) => (
                <li key={w} className="rounded-full border border-cream-50/30 px-4 py-1.5 text-[14px] tracking-wide text-cream-50/90">
                  {w}.
                </li>
              ))}
            </ul>
            <Body className="mt-10 text-cream-50/85">
              <p>Por isso, quando penso sobre o futuro da tecnologia, minha pergunta raramente é apenas:</p>
            </Body>
            <p className="mt-3 font-serif text-[clamp(21px,1.8vw,27px)] italic leading-snug text-cream-50/90">
              “O que essa ferramenta será capaz de fazer?”
            </p>
            <Body className="mt-6 text-cream-50/85">
              <p>A pergunta que me interessa cada vez mais é:</p>
            </Body>
            <Display as="h3" size="md" className="mt-4 text-red-bright">
              O que acontece com a gente quando ela consegue?
            </Display>
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
    "É preciso vender.",
    "Entregar.",
    "Pagar conta.",
    "Liderar gente.",
    "Tomar decisão sem informação completa.",
    "Assumir risco.",
    "Ouvir cliente.",
    "Voltar atrás.",
    "Sustentar escolhas.",
    "E, às vezes, admitir que alguma coisa simplesmente não funcionou.",
  ];
  return (
    <Section padded={false} label="Construir, errar, recomeçar">
      <div className="grid lg:grid-cols-[56%_44%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[800px] lg:pr-12">
          <Display size="lg">
            Construir alguma coisa no mundo real muda a maneira como você <Em>pensa sobre possibilidade.</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(320px,60%)] sm:ml-[40%]" width={4} />
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>
              Depois de anos trabalhando dentro de grandes empresas, chegou um momento em que eu quis construir alguma coisa
              minha.
            </p>
            <p>E foi aí que muita coisa que parecia clara no PowerPoint ficou menos clara no mundo real.</p>
          </Body>
          <p className="mt-8 font-semibold text-ink-900">Empreender me ensinou que uma boa ideia não basta.</p>
          <ul className="mt-4 max-w-[640px] gap-x-10 text-ink-700 sm:columns-2 [&>li]:mb-1.5 [&>li]:break-inside-avoid">
            {needs.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>Cofundei empresas. Criei projetos. Investi dinheiro. Acertei. Errei. Perdi. Recomecei.</p>
            <p>
              Algumas construções cresceram.
              <br />
              Outras quebraram expectativas.
            </p>
            <p>
              Algumas me ensinaram mais pelo que deram certo.
              <br />
              Outras, pelo que deram errado.
            </p>
            <p>E talvez uma das coisas mais importantes que aprendi seja esta:</p>
          </Body>
        </Container>
        <div className="relative min-h-[460px]">
          <Photo
            src="/images/ph/ju/construir.webp"
            alt="Ju Ferreira pensativa diante do notebook em seu espaço de trabalho"
            sizes="(min-width:1024px) 44vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[55%_30%]"
          />
          <div className="absolute -left-6 bottom-10 hidden w-[42%] max-w-[240px] rotate-[-3deg] border-[6px] border-cream-50 shadow-[0_14px_30px_-16px_rgba(0,0,0,.55)] lg:block">
            <Image
              src="/images/ph/ju/construir-pb.webp"
              alt=""
              width={400}
              height={340}
              sizes="240px"
              className="h-auto w-full"
              data-placeholder="foto"
            />
          </div>
          <HandNote className="absolute right-6 top-8 hidden max-w-[200px] text-ink-900 xl:block" rotate={-5}>
            Acertei. Errei. Perdi. Recomecei.
          </HandNote>
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.25fr_0.9fr_1fr] lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <figure className="relative lg:pr-10">
            <span className="jf-display absolute -left-1 -top-3 text-[64px] leading-none text-red-brand" aria-hidden>
              “
            </span>
            <blockquote className="pl-10 font-serif text-[clamp(24px,2.2vw,34px)] leading-[1.15]">
              possibilidade sem realidade vira fantasia.
              <br />
              realidade sem possibilidade vira resignação.
            </blockquote>
            <Stroke shape="underline" className="ml-[30%] mt-2 h-4 w-[60%]" width={4} />
          </figure>
          <div className="lg:px-10">
            <p className="text-ink-700">O trabalho acontece no espaço entre as duas.</p>
            <p className="mt-3 text-ink-700">
              É ali que a gente testa.
              <br />
              Ajusta.
              <br />
              Insiste.
              <br />
              Desiste quando precisa.
              <br />
              Muda de direção.
              <br />E constrói de novo.
            </p>
          </div>
          <div className="lg:pl-10">
            <Title as="h3" className="text-[clamp(26px,2.3vw,36px)] leading-[1.1] text-red-brand">
              Eu acredito em futuros possíveis.
              <br />
              Mas acredito ainda mais em futuros testados pela realidade.
            </Title>
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
    "Que mundo estamos construindo?",
    "O que nossas escolhas de hoje tornam mais provável amanhã?",
    "Que capacidades nossas filhas vão precisar desenvolver?",
    "O que estamos entregando às ferramentas que criamos?",
    "E quanto de nós continuará presente naquilo que estamos construindo?",
  ];
  return (
    <Section padded={false} tone="cream" label="Maternidade como virada de perspectiva">
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[760px] lg:pr-12">
          <Display size="lg">
            Quando virei mãe, o futuro <Em>mudou de lugar.</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(300px,60%)] sm:ml-[30%]" width={4} />
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>Eu já trabalhava com tecnologia.</p>
            <p>Já tinha vendido, liderado, empreendido, criado empresas, cometido erros e começado de novo.</p>
            <p>Já me interessava profundamente por transformação.</p>
            <p>
              Mas a maternidade mudou a minha relação com o futuro de um jeito que nenhum planejamento estratégico conseguiria.
            </p>
          </Body>
          <div className="mt-10 grid max-w-[620px] gap-8 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-ink-900/15">
            <div className="sm:pr-8">
              <Dash />
              <p className="jf-eyebrow mt-3 text-ink-900">Antes</p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
                Antes, o futuro era principalmente o lugar onde eu estaria.
                <br />
                As empresas que eu construiria.
                <br />
                As decisões que eu tomaria.
                <br />
                As mudanças que eu viveria.
              </p>
            </div>
            <div className="sm:pl-8">
              <Dash />
              <p className="jf-eyebrow mt-3 text-ink-900">Depois</p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-700">Depois das minhas filhas, ele passou a ser também:</p>
              <p className="mt-2 font-serif text-[clamp(22px,1.9vw,28px)] font-medium leading-tight text-red-brand">
                o mundo onde elas vão viver.
              </p>
            </div>
          </div>
          <Body className="mt-10 max-w-[600px] text-ink-700">
            <p>E essa mudança parece pequena até você perceber o tamanho dela.</p>
            <p>Porque algumas perguntas ficaram impossíveis de tratar apenas como estratégia.</p>
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
        <div className="relative min-h-[520px]">
          {/* PENDENTE: foto real da Ju com as filhas (placeholder recortado do mockup, gerado por IA). */}
          <Photo
            src="/images/ph/ju/maternidade.webp"
            alt="Ju Ferreira abraçando as duas filhas no sofá"
            sizes="(min-width:1024px) 48vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_30%]"
          />
          <Stroke shape="underline" className="absolute bottom-8 left-[10%] h-5 w-[50%]" width={4} />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Body className="text-ink-700">
              <p>A maternidade também me obrigou a encarar uma verdade que hoje atravessa boa parte do meu trabalho:</p>
            </Body>
            <Display as="h3" size="sm" className="mt-4">
              <Em>eu não controlo o futuro delas.</Em>
            </Display>
            <Body className="mt-6 text-ink-700 [&_p+p]:mt-1">
              <p>Não controlo tudo o que vai acontecer.</p>
              <p>Não consigo eliminar risco.</p>
              <p>Não consigo escolher por elas.</p>
              <p>Não consigo construir o mundo inteiro.</p>
            </Body>
            <p className="mt-6 font-serif text-[clamp(21px,1.8vw,27px)] leading-snug">
              Mas existe uma diferença enorme entre <strong className="font-semibold">não controlar</strong> e{" "}
              <strong className="font-semibold text-red-brand">não participar</strong>.
            </p>
          </div>
          <div>
            <DashList
              className="font-serif text-[clamp(19px,1.5vw,23px)] leading-snug"
              items={[
                "Posso escolher o que ensino.",
                "O que modelo.",
                "O que sustento.",
                "O que questiono.",
                "O que construo.",
                "O que ajudo a tornar possível.",
              ]}
            />
            <Body className="mt-8 text-ink-700">
              <p>
                E talvez tenha sido aí que futuro deixou de ser, para mim, apenas uma questão de previsão, tendência ou
                planejamento.
              </p>
              <p>Passou a ser também uma questão de:</p>
            </Body>
            <p className="jf-eyebrow mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-red-brand">
              <span>responsabilidade.</span>
              <span>direção.</span>
              <span>humanidade.</span>
              <span>participação.</span>
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <figure className="relative lg:pr-12">
            <span className="jf-display absolute -left-1 -top-3 text-[64px] leading-none text-red-brand" aria-hidden>
              “
            </span>
            <Display as="h3" size="sm" className="pl-10">
              O futuro deixou de ser apenas o lugar onde eu viveria.
              <br />
              <Em>Passou a ser também o mundo onde minhas filhas vão viver.</Em>
            </Display>
          </figure>
          <div className="lg:pl-12">
            <p className="text-[17px] font-medium leading-relaxed text-ink-800">
              Talvez tenha sido aí que eu comecei a entender, de verdade, que não controlar não significa não participar.
            </p>
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
    <Section label="Da transformação aos futuros">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
        <div>
          <Display size="lg">
            Durante muito tempo, eu achei que trabalhava <Em>com transformação.</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(300px,60%)] sm:ml-[35%]" width={4} />
          <p className="mt-8 font-serif text-[clamp(20px,1.6vw,24px)] leading-snug text-ink-800">
            Transformação digital.
            <br />
            Transformação de empresas.
            <br />
            Transformação de pessoas.
          </p>
          <Body className="mt-6 max-w-[600px] text-ink-700">
            <p>
              Durante anos, estudei e experimentei temas como autoconhecimento, escolhas, felicidade, coragem, potência,
              propósito e mudança.
            </p>
            <p>Criei experiências. Dei palestras. Conduzi workshops.</p>
            <p>
              Desenvolvi projetos como <strong className="font-semibold text-ink-900">Alquimia Pessoal</strong> e{" "}
              <strong className="font-semibold text-ink-900">Ser Arco-Íris</strong>.
            </p>
          </Body>
        </div>
        <div className="relative aspect-[4/4.2] w-full">
          <Photo
            src="/images/ph/ju/transformacao.webp"
            alt="Ju Ferreira pensativa em seu espaço de estudo"
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-paper-edge"
            imgClassName="object-[50%_25%]"
          />
        </div>
      </Container>

      <Container className="mt-16 lg:mt-20">
        <ol className="grid gap-6 lg:grid-cols-3 lg:gap-14">
          <li className="relative">
            <PaperCard className="h-full -rotate-[0.6deg]">
              <Dash />
              <p className="mt-4 text-ink-700">Na época, minha pergunta parecia estar principalmente no indivíduo:</p>
              <p className="mt-4 font-semibold leading-snug text-ink-900">
                O que precisa acontecer para uma pessoa perceber que sua vida pode ser diferente — e conseguir se mover nessa
                direção?
              </p>
            </PaperCard>
            <FlowArrow />
          </li>
          <li className="relative">
            <PaperCard className="h-full rotate-[0.5deg]">
              <Dash />
              <p className="mt-4 text-ink-700">Mas, aos poucos, comecei a perceber que aquela pergunta era maior.</p>
              <p className="mt-3 font-semibold text-ink-900">Porque ninguém muda sozinho.</p>
              <p className="mt-1 text-ink-700">Nós mudamos dentro de sistemas.</p>
              <p className="jf-hand mt-4 text-[24px] leading-tight text-ink-800">
                Dentro de famílias. Empresas. Tecnologias. Culturas. Economias. Histórias.
              </p>
              <p className="mt-3 text-[15px] text-ink-700">
                Possibilidades que recebemos — e possibilidades que sequer aprendemos a imaginar.
              </p>
            </PaperCard>
            <FlowArrow />
          </li>
          <li className="relative">
            <PaperCard className="h-full -rotate-[0.4deg]">
              <Stroke shape="circle" className="absolute -top-6 left-6 h-14 w-14" width={2.5} />
              <p className="text-ink-700">Foi então que uma pergunta começou a atravessar todas as outras:</p>
              <Display as="h3" size="sm" className="mt-3 -rotate-[2deg]">
                E se pudesse ser diferente?
              </Display>
              <Stroke shape="underline" className="mt-1 h-3 w-[70%]" width={3.5} />
              <p className="mt-4 text-[15px] text-ink-700">
                Não como negação da realidade.
                <br />
                Não como promessa de que tudo é possível.
                <br />
                Mas como investigação:
              </p>
              <p className="mt-2 font-semibold text-ink-900">aquilo que existe esgota aquilo que pode existir?</p>
            </PaperCard>
          </li>
        </ol>
      </Container>

      <Container className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Body className="text-ink-700">
            <p>
              Foi nesse ponto que meu interesse por transformação começou a encontrar os{" "}
              <strong className="font-semibold text-ink-900">Estudos de Futuros</strong>.
            </p>
            <p>E algo fez muito sentido para mim.</p>
            <p>Pensar futuros não precisava significar tentar adivinhar o que aconteceria.</p>
            <p>Podia significar ampliar nossa capacidade de:</p>
          </Body>
          <DashList
            className="mt-4 font-semibold text-ink-900"
            items={[
              "imaginar possibilidades;",
              "escolher direção;",
              "desenvolver capacidades;",
              "e participar daquilo que ainda pode existir.",
            ]}
          />
          <p className="mt-8 text-ink-700">As perguntas que eu fazia sobre pessoas não desapareceram.</p>
          <Title as="h3" className="mt-2 text-[clamp(26px,2.3vw,36px)]">
            <Em>Elas ficaram maiores.</Em>
          </Title>
        </div>
        <div className="relative flex items-center justify-center">
          <Stroke shape="circle" className="absolute inset-0 h-full w-full opacity-80" width={2.5} />
          <div className="relative max-w-[440px] px-8 py-16 sm:px-12 sm:py-20">
            <p className="jf-eyebrow text-red-brand">Futurismo Humanista</p>
            <Title as="h3" className="mt-4 text-[clamp(24px,2vw,32px)]">
              Foi assim que cheguei ao Futurismo Humanista.
            </Title>
            <p className="mt-4 text-ink-700">Não porque pessoas sejam uma variável dentro dos futuros.</p>
            <p className="mt-2 text-ink-700">
              Mas porque, para mim, <strong className="font-semibold text-ink-900">elas são a razão para estudá-los.</strong>
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-14">
        <BarQuote className="max-w-[900px]">
          Eu não abandonei as perguntas sobre transformação humana quando comecei a estudar futuros.
          <br />
          <Em>Eu descobri um território maior onde elas cabiam.</Em>
        </BarQuote>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-serif text-[clamp(20px,1.6vw,24px)] leading-snug text-ink-800">
              A tecnologia importa.
              <br />
              A estratégia importa.
              <br />
              Os sinais de mudança importam.
              <br />
              As tendências importam.
            </p>
            <p className="mt-6 text-ink-700">Mas nenhuma dessas coisas responde sozinha:</p>
            <p className="mt-3 font-serif text-[clamp(24px,2.1vw,32px)] font-medium leading-tight text-red-brand">
              Que futuros valem a pena ajudar a tornar possíveis?
            </p>
            <p className="mt-4 text-ink-700">Essa é uma pergunta profundamente humana.</p>
          </div>
          <div>
            <Display as="h3" size="sm">
              Eu estudo futuros porque me interesso profundamente por <Em>pessoas.</Em>
            </Display>
            <Body className="mt-6 text-ink-700 [&_p+p]:mt-1">
              <p>Pelo que somos capazes de imaginar.</p>
              <p>Pelas escolhas que fazemos.</p>
              <p>Pelo que precisamos nos tornar capazes de sustentar.</p>
              <p>E pelo que acontece quando começamos, de verdade, a construir.</p>
            </Body>
            <ButtonLink href="/futuros-humanos" className="mt-10">
              Explore Futuros Humanos
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 7 — O QUE A JU CONSTRÓI HOJE ───────────────────────── */
type Front = { name: ReactNode; key: string; tagline: string; img: string; alt: string; body: ReactNode };

const FRONTS: Front[] = [
  {
    key: "futuros",
    name: "Futuros Humanos",
    tagline: "Meu principal território intelectual contemporâneo.",
    img: "/images/ph/ju/frente-futuros.webp",
    alt: "Ju Ferreira palestrando",
    body: (
      <>
        <p>
          É onde organizo grande parte da minha investigação sobre futuros, tecnologia, humanidade, escolhas, capacidades e
          direção.
        </p>
        <p>
          Também é minha <strong className="font-semibold text-ink-900">palestra-mãe</strong>.
        </p>
        <p>Mas Futuros Humanos é maior do que uma palestra.</p>
        <p>É a lente a partir da qual muitas das perguntas que hoje me interessam começam a ganhar forma.</p>
      </>
    ),
  },
  {
    key: "palestras",
    name: "Palestras, workshops e experiências",
    tagline: "Quando as ideias precisam entrar em uma sala.",
    img: "/images/ph/ju/frente-palestras.webp",
    alt: "Ju Ferreira com microfone em um workshop",
    body: (
      <>
        <p>
          Levo essas conversas para organizações, lideranças, eventos e equipes por meio de palestras, workshops e
          experiências customizadas.
        </p>
        <p>Às vezes, o ponto de partida é Futuros Humanos.</p>
        <p>Outras vezes, o contexto pede outra conversa.</p>
        <p>
          A tese dá direção. <strong className="font-semibold text-ink-900">A realidade define o formato.</strong>
        </p>
      </>
    ),
  },
  {
    key: "wtf",
    name: "What The Future?!",
    tagline: "Futuros aplicados em coletivo.",
    img: "/images/ph/ju/frente-wtf.webp",
    alt: "Encontro do coletivo What The Future?!",
    body: (
      <>
        <p>
          Integro a <strong className="font-semibold text-ink-900">What The Future?!</strong>, um coletivo de futuristas que
          trabalha para tornar pensamento de futuros mais acessível, aplicado e útil.
        </p>
        <p>
          É também nesse ecossistema que participo de trabalhos como{" "}
          <strong className="font-semibold text-ink-900">SciFiXD</strong> e{" "}
          <strong className="font-semibold text-ink-900">Futurismo Pessoal</strong>.
        </p>
        <p>WTF não é Futuros Humanos. E Futuros Humanos não é WTF.</p>
        <p>Mas existem momentos em que os dois universos se encontram de forma muito produtiva.</p>
      </>
    ),
  },
  {
    key: "epic",
    name: (
      <>
        EPIC<Em>247</Em>
      </>
    ),
    tagline: "Transformação pessoal em movimento.",
    img: "/images/ph/ju/frente-epic.webp",
    alt: "Pessoa de braços abertos diante do pôr do sol",
    body: (
      <>
        <p>EPIC247 nasce de outra parte da minha história.</p>
        <p>Da investigação sobre capacidade, mudança, escolha e ação na vida real.</p>
        <p>Ele não é um produto de Futuros Humanos.</p>
        <p>É uma frente própria, com linguagem, proposta e jornada próprias.</p>
        <p>Mas compartilha uma pergunta que atravessa boa parte do meu trabalho:</p>
        <p className="font-semibold text-ink-900">
          o que precisa acontecer entre perceber que algo pode ser diferente e conseguir começar a construir essa diferença?
        </p>
      </>
    ),
  },
  {
    key: "empresas",
    name: "Empresas, negócios e mercado",
    tagline: "Porque eu continuo construindo.",
    img: "/images/ph/ju/frente-empresas.webp",
    alt: "Mãos sobre a mesa de trabalho com notebook e café",
    body: (
      <>
        <p>Continuo próxima de clientes, vendas, tecnologia, estratégia e operação.</p>
        <p>Participo da construção de empresas e projetos.</p>
        <p>Lido com mercado, equipe, caixa, decisões, limitações e consequências reais.</p>
        <p>Essa parte da minha vida não é um “case” da minha tese.</p>
        <p>É um dos lugares onde ela continua sendo testada.</p>
      </>
    ),
  },
];

export function JuHoje() {
  return (
    <Section label="O que a Ju constrói hoje">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.6fr] lg:gap-12">
        <div className="lg:sticky lg:top-[calc(var(--jf-header-h)+24px)] lg:self-start">
          <Display size="md">
            Hoje, essa visão ganha forma em <Em>coisas diferentes.</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(260px,60%)] sm:ml-[30%]" width={4} />
          <Body className="mt-8 text-ink-700">
            <p>Durante muito tempo, tentei encontrar uma frase que explicasse tudo o que eu fazia.</p>
            <p>Hoje acho que esse talvez fosse o problema.</p>
            <p>
              Porque uma tese não é um produto.
              <br />
              Uma palestra não é uma empresa.
              <br />
              Um projeto de futuros não é um programa de transformação pessoal.
            </p>
            <p>E a minha trajetória não precisa ser reduzida a uma única entrega para fazer sentido.</p>
            <p>O que conecta essas frentes não é o formato.</p>
            <p>É a forma como eu olho para algumas perguntas:</p>
          </Body>
          <DashList
            className="mt-4 font-semibold text-ink-900"
            items={[
              "O que ainda pode existir?",
              "O que queremos ajudar a tornar possível?",
              "Do que precisamos nos tornar capazes?",
              "E o que conseguimos começar a construir agora?",
            ]}
          />
          <p className="mt-6 text-ink-700">A partir daí, meu trabalho hoje se manifesta em diferentes territórios.</p>
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
                    <Image src={f.img} alt={f.alt} fill sizes="112px" className="object-cover" data-placeholder="foto" />
                  </div>
                </div>
                <p className="mt-4 font-semibold text-ink-900">{f.tagline}</p>
                <div className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-700">{f.body}</div>
              </PaperCard>
            </li>
          ))}
          <li className="relative min-h-[420px] overflow-hidden" aria-hidden>
            <Photo src="/images/ph/ju/hoje.webp" alt="" sizes="(min-width:768px) 30vw, 100vw" className="absolute inset-0" imgClassName="object-[50%_70%]" />
            <Stroke shape="circle" className="absolute inset-[6%] h-[88%] w-[88%]" width={2.5} />
          </li>
        </ul>
      </Container>

      <Container className="mt-16 lg:mt-20">
        <div className="grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <Display as="h3" size="sm" className="lg:pr-10">
            A Ju é o fio condutor.
            <br />
            <Em>As coisas não precisam ser iguais para pertencer à mesma história.</Em>
          </Display>
          <p className="text-ink-700 lg:px-10">
            Futuros Humanos é uma tese.
            <br />
            EPIC247 é um produto.
            <br />
            WTF é um coletivo.
            <br />
            Minhas empresas são construções reais.
            <br />
            Palestras e workshops são experiências.
          </p>
          <div className="lg:pl-10">
            <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-tight text-red-brand">
              A conexão entre tudo isso sou eu — e as perguntas que continuo tentando responder.
            </p>
            <Stroke shape="scribble" className="mt-3 h-6 w-36" width={4} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 8 — O QUE ATRAVESSA TUDO ISSO ───────────────────────── */
const TENSIONS: { a: string; b: string; body: ReactNode }[] = [
  {
    a: "Tecnologia",
    b: "Humanidade",
    body: <p>Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.</p>,
  },
  {
    a: "Futuro",
    b: "Presente",
    body: (
      <>
        <p>O futuro não começa amanhã.</p>
        <p>Ele também é construído nas escolhas aparentemente pequenas que repetimos hoje.</p>
      </>
    ),
  },
  {
    a: "Estratégia",
    b: "Emoção",
    body: (
      <>
        <p>Nenhuma decisão humana acontece apenas na planilha.</p>
        <p>Estratégia, medo, desejo, identidade, contexto e relações dividem a mesma mesa.</p>
      </>
    ),
  },
  {
    a: "Possibilidade",
    b: "Limite",
    body: (
      <>
        <p>Limites existem.</p>
        <p>Potência também.</p>
        <p>Aceitar um não exige desistir da outra.</p>
      </>
    ),
  },
  {
    a: "Capacidade",
    b: "Direção",
    body: (
      <>
        <p>Talvez não baste perguntar:</p>
        <p className="italic">“Do que conseguimos nos tornar capazes?”</p>
        <p>Precisamos também perguntar:</p>
        <p className="font-serif text-[clamp(24px,2vw,30px)] font-medium not-italic leading-tight text-cream-50">
          Capazes para quê?
        </p>
      </>
    ),
  },
];

export function JuTensoes() {
  return (
    <Section tone="dark" padded={false} label="O que atravessa tudo isso">
      <div className="absolute inset-y-0 right-0 hidden w-[30%] xl:block">
        <Photo
          src="/images/ph/ju/tensoes.webp"
          alt="Ju Ferreira pensativa, olhando para o alto"
          sizes="30vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[40%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/20 to-transparent" aria-hidden />
      </div>
      <Container className="relative py-[var(--jf-section-y)]">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.4fr] lg:gap-14 xl:mr-[24%]">
          <div>
            <Display size="md">
              No fundo, eu continuo voltando às <Em>mesmas tensões.</Em>
            </Display>
            <Stroke shape="underline" className="mt-2 h-4 w-[min(240px,70%)] sm:ml-[20%]" width={4} color="var(--jf-red-400)" />
            <Body className="mt-8 text-cream-50/85">
              <p>
                Meus projetos mudaram.
                <br />
                As empresas mudaram.
                <br />
                As tecnologias mudaram.
                <br />
                Eu também mudei.
              </p>
              <p>Mas algumas perguntas continuam voltando.</p>
              <p>Porque elas não pertencem a um produto ou a uma fase da minha carreira.</p>
              <p>Elas pertencem à maneira como eu tento compreender pessoas, organizações e futuros.</p>
            </Body>
          </div>
          <ul className="divide-y divide-cream-50/15 border-y border-cream-50/15">
            {TENSIONS.map((t) => (
              <li key={t.a} className="grid gap-3 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-8">
                <h3 className="flex flex-wrap items-center gap-x-3 font-serif text-[clamp(22px,1.9vw,30px)] uppercase leading-none tracking-wide">
                  {t.a}
                  <span className="text-red-bright" aria-hidden>×</span>
                  <span className="sr-only">versus</span>
                  {t.b}
                </h3>
                <div className="space-y-1 text-[15px] leading-relaxed text-cream-50/80">{t.body}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-14 h-[320px] sm:h-[420px] xl:hidden">
          <Photo src="/images/ph/ju/tensoes.webp" alt="" sizes="100vw" className="absolute inset-0" imgClassName="object-[40%_30%]" />
        </div>

        <div className="mt-16 grid gap-10 border-t border-cream-50/20 pt-12 lg:grid-cols-[1.3fr_1fr_auto] lg:items-center lg:gap-12">
          <Title as="h3" className="text-[clamp(26px,2.4vw,38px)] leading-[1.12]">
            É nesse espaço entre coisas que parecem opostas que eu costumo encontrar{" "}
            <Em>as perguntas mais interessantes.</Em>
          </Title>
          <div className="text-cream-50/85 lg:border-l lg:border-cream-50/20 lg:pl-10">
            <p>
              Entre controle e participação.
              <br />
              Entre tecnologia e humanidade.
              <br />
              Entre aquilo que existe e aquilo que ainda pode existir.
              <br />
              Entre quem somos e quem precisamos nos tornar.
            </p>
            <p className="mt-4">E talvez seja por isso que eu nunca tenha me encaixado muito bem em uma única caixa.</p>
          </div>
          <StickyNote tone="paper" rotate={-4} className="lg:max-w-[240px]">
            Meu trabalho quase sempre começa no “entre”.
          </StickyNote>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — ENCERRAMENTO ───────────────────────── */
export function JuEncerramento() {
  return (
    <Section padded={false} label="Encerramento">
      <div className="grid lg:grid-cols-[60%_40%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[860px] lg:pr-12">
          <Display size="lg">
            E eu ainda estou <Em>aqui.</Em>
          </Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(220px,50%)] sm:ml-[28%]" width={4} />

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-10">
            <div>
              <p className="text-[16px] leading-relaxed text-ink-700">
                Tentando pagar os boletos.
                <br />
                Criar minhas filhas.
                <br />
                Construir empresas.
                <br />
                Cuidar da cabeça.
                <br />
                Entender um mundo que muda mais rápido do que eu gostaria.
                <br />
                Errar menos algumas vezes.
                <br />
                Errar diferente em outras.
                <br />
                Mudar de ideia quando a realidade pede.
                <br />E continuar perguntando:
              </p>
              <p className="mt-4 text-[clamp(20px,1.6vw,24px)] font-semibold text-red-brand">E se pudesse ser diferente?</p>
              <p className="mt-3 text-ink-700">Tudo isso numa terça-feira qualquer.</p>
              <Stroke shape="underline" className="mt-2 h-3 w-40" width={3.5} />
            </div>
            <div className="text-[16px] leading-relaxed text-ink-700 md:border-l md:border-ink-900/15 md:pl-8">
              <p>Porque, apesar de falar sobre futuros, eu continuo vivendo no presente.</p>
              <p className="mt-3 font-medium text-ink-900">
                É daqui que escolho.
                <br />
                É daqui que construo.
                <br />É daqui que participo.
              </p>
              <p className="mt-5">Não tenho uma resposta pronta sobre o futuro.</p>
              <p className="mt-2">Não acredito que exista uma fórmula capaz de eliminar incerteza, limite ou acaso.</p>
              <p className="mt-2">Mas aprendi algumas coisas.</p>
              <p className="mt-4">
                Aprendi que o provável não é o único possível.
                <br />
                Que possibilidade sem realidade vira fantasia.
                <br />
                Que realidade sem possibilidade vira resignação.
                <br />
                Que não controlar tudo não significa não participar.
                <br />E que, quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que
                fazer com elas.
              </p>
            </div>
          </div>

          <BarQuote className="mt-14">
            Não terminei de me tornar.
            <br />
            Não terminei de construir.
          </BarQuote>
          <Body className="mt-6 max-w-[620px] text-ink-700">
            <p>E talvez seja justamente por isso que continuo interessada em futuros.</p>
            <p>Não porque quero descobrir o que vai acontecer.</p>
            <p>
              Mas porque ainda acredito que existe alguma coisa entre aquilo que existe e aquilo que ainda pode existir.
            </p>
          </Body>
          <Lead className="mt-8 text-red-brand">E nós estamos nesse espaço.</Lead>
          <Display as="h3" size="md" className="mt-4">
            Temos futuros para <Em>construir.</Em>
          </Display>
          <ButtonRow className="mt-10">
            <ButtonLink href="/futuros-humanos" size="lg">
              Explore Futuros Humanos
            </ButtonLink>
            <ButtonLink href={CONTACT_ROUTES.organizacoes} variant="secondary" size="lg">
              Leve essa conversa para sua organização
            </ButtonLink>
          </ButtonRow>
        </Container>
        <div className="relative min-h-[480px]">
          <Photo
            src="/images/ph/ju/encerramento.webp"
            alt="Ju Ferreira sorrindo à mesa, com café, caderno e notebook"
            sizes="(min-width:1024px) 40vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_25%]"
          />
          <Stroke shape="loop" className="absolute -left-6 top-[6%] h-[70%] w-[95%]" width={2.5} />
          <HandNote className="absolute bottom-8 right-6 max-w-[180px] text-ink-900 md:right-10" rotate={-8}>
            Uma terça-feira qualquer.
          </HandNote>
        </div>
      </div>
    </Section>
  );
}
