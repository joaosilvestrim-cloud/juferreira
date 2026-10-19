import { photoPosition } from "@/lib/photo-position";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, HandNote, QuoteCard, StickyNote, Title } from "@/components/ui/Typography";
import { LINKS } from "@/lib/site";
import { NA_MESA_AGORA, REFERENCIAS_QUE_VOLTAM, TRILHAS } from "./data";
import { ANCHORS } from "./IdeiasBlocksA";
import { NewsletterForm } from "./NewsletterForm";
import { BrushLabel, QBox } from "./Parts";

/* ───────────────────────── BLOCO 6 — UMA TERÇA-FEIRA QUALQUER ───────────────────────── */
const CHEGA = [
  { t: "Uma ideia", d: "Alguma coisa que estou tentando compreender melhor." },
  { t: "Uma história", d: "Algo vivido, observado, ouvido ou lembrado que mudou a forma como estou enxergando uma pergunta." },
  { t: "Uma tensão", d: "Duas coisas que parecem contraditórias e talvez precisem permanecer em conversa." },
  { t: "Uma pergunta", d: "Não necessariamente para responder naquele momento. Talvez apenas para carregar durante alguns dias." },
  {
    t: "Um movimento",
    pre: "E, algumas vezes:",
    d: "Algo pequeno que pode mudar aquilo que acontece depois. Não como “desafio da semana”. Só quando fizer sentido.",
  },
];

export function IdeiasTerca() {
  return (
    <Section id="uma-terca-feira-qualquer" tone="cream" label="Uma Terça-feira Qualquer">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr_0.95fr] lg:gap-8">
        <div>
          <BrushLabel>Uma terça-feira qualquer</BrushLabel>
          <Display size="md" className="mt-6">
            Nem toda ideia precisa de um ensaio. <Em>Algumas cabem numa terça-feira qualquer.</Em>
          </Display>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>Há perguntas que precisam de pesquisa. Outras pedem páginas e páginas.</p>
            <p>
              Mas algumas aparecem no meio do dia. Numa reunião. Numa conversa. Enquanto levo minhas filhas para algum lugar.
              Depois de uma decisão que não saiu como eu esperava. Num comentário que ficou na cabeça.
            </p>
            <p>
              Num daqueles momentos em que a vida parece absolutamente comum e, por alguma razão, alguma coisa faz você
              enxergá-la de outro jeito.
            </p>
            <p>
              Foi para essas conversas que nasceu: <strong className="font-semibold text-ink-900">Uma Terça-feira Qualquer</strong>.
            </p>
          </Body>
        </div>
        <div className="relative min-h-[380px] overflow-hidden rounded-sm lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src="/images/ensaio/home-05-escrita-vertical.webp"
            alt="Juliana com caderno, caneta e café à mesa, em retrato vertical."
            sizes="(min-width:1024px) 32vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_40%]"
          />
          <StickyNote className="absolute left-4 bottom-4" rotate={-5} tone="paper">
            Porque futuro também se constrói no meio da vida real.
          </StickyNote>
        </div>
        <div className="rounded-[var(--jf-radius-md)] bg-blush-100/70 p-7 lg:p-8">
          <HandNote className="text-ink-900" rotate={-2}>
            O futuro também se constrói no meio da vida real.
          </HandNote>
          <p className="mt-3 text-ink-700">Talvez valha a pena prestar atenção enquanto isso acontece.</p>
          <h3 className="mt-8 text-[17px] font-semibold uppercase tracking-wide">Receba Uma Terça-feira Qualquer</h3>
          <p className="mt-2 text-[15px] text-ink-700">
            Uma vez por semana, uma ideia, uma história, uma tensão ou uma pergunta para continuar pensando depois.
          </p>
          <NewsletterForm className="mt-6" />
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-2">
        <Body className="text-ink-700 [&_p+p]:mt-2">
          <p>Eu não queria criar uma newsletter para “resumir os conteúdos da semana”.</p>
          <p>Nem uma lista de tendências. Nem uma sequência de lições sobre como viver melhor.</p>
          <p className="font-medium text-ink-900">Queria um espaço mais próximo.</p>
          <p>
            Uma conversa recorrente sobre aquilo que estamos construindo enquanto: trabalhamos; criamos filhos; lideramos;
            erramos; tomamos decisões; adiamos outras; mudamos de ideia; recomeçamos; e simplesmente tentamos dar conta.
          </p>
          <p>Porque é fácil pensar no futuro como uma coisa distante. Mas:</p>
        </Body>
        <p className="jf-display jf-display-sm self-center">
          O futuro também está sendo construído enquanto você responde um e-mail numa <Em>terça-feira às 16h17.</Em>
        </p>
      </Container>

      <Container className="mt-16">
        <BrushLabel className="text-[20px]">O que chega numa terça-feira qualquer?</BrushLabel>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {CHEGA.map((c) => (
            <li key={c.t} className="border-t border-red-brand/50 pt-5">
              {c.pre && <p className="mb-1 text-[13px] text-ink-500">{c.pre}</p>}
              <h3 className="jf-hand text-[28px] uppercase leading-none">{c.t}</h3>
              <Stroke shape="underline" className="mt-1 h-2.5 w-28" width={2} />
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{c.d}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-16 grid gap-8 md:grid-cols-2 md:gap-0 md:divide-x md:divide-red-brand/40">
        <div className="md:pr-10">
          <p className="jf-eyebrow text-red-brand">Ideias</p>
          <p className="mt-3 font-serif text-[26px] leading-tight">É onde uma pergunta pode ganhar profundidade.</p>
          <p className="mt-3 text-[15px] text-ink-700">Pesquisa. Contradição. Repertório. Tempo. Ensaio.</p>
        </div>
        <div className="md:pl-10">
          <p className="jf-eyebrow text-red-brand">Uma Terça-feira Qualquer</p>
          <p className="mt-3 font-serif text-[26px] leading-tight">É onde o pensamento encontra o cotidiano.</p>
          <p className="mt-3 text-[15px] text-ink-700">
            Mais próxima. Mais recorrente. Mais pessoal. Às vezes menos conclusiva. Às vezes mais simples. Às vezes uma
            história que não precisava virar artigo.
          </p>
        </div>
      </Container>
      <Container className="mt-12">
        <p className="jf-display jf-display-sm max-w-[980px]">
          Ideias é onde eu aprofundo. <Em>Uma Terça-feira Qualquer é onde eu continuo a conversa.</Em>
        </p>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-3">
        <div>
          <Body className="text-ink-700">
            <p>
              Algumas terças-feiras serão sobre futuros. Outras sobre tecnologia. Algumas sobre maternidade. Liderança.
              Trabalho. Escolhas. Empresas. Transformação. Ou alguma coisa aparentemente pequena que me fez parar.
            </p>
          </Body>
          <HandNote className="mt-6 text-red-brand" rotate={-2}>
            O assunto muda. A pergunta por baixo dele nem tanto.
          </HandNote>
          <QBox className="mt-5">O que estamos construindo enquanto vivemos?</QBox>
        </div>
        <div>
          <Title as="h3" className="uppercase">
            O que ela não é
          </Title>
          <ul className="mt-4 space-y-2 font-medium">
            <li>Não é uma newsletter de tendências.</li>
            <li>Não é uma lista de produtividade.</li>
            <li>Não é uma aula semanal.</li>
            <li>Não é um resumo do que publiquei.</li>
          </ul>
          <p className="mt-4 text-ink-700">É:</p>
          <p className="mt-1 font-serif text-[21px] font-semibold leading-snug">
            um espaço recorrente para perceber o presente com um pouco mais de atenção.
          </p>
        </div>
        <div>
          <Title as="h3" className="uppercase">
            Por que terça-feira?
          </Title>
          <Body className="mt-4 text-ink-700 [&_p+p]:mt-2">
            <p>Porque a vida raramente acontece apenas nos grandes marcos. Ela acontece no meio.</p>
            <p>
              Quando a semana já começou, mas ainda está longe de terminar. Quando há trabalho para fazer. Problemas para
              resolver. Gente precisando da gente. E nenhuma trilha épica tocando ao fundo.
            </p>
            <p className="font-semibold text-ink-900">Uma terça-feira qualquer.</p>
          </Body>
        </div>
      </Container>

      <Container className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="jf-display jf-display-sm">O futuro também se constrói no meio da vida real.</p>
          <p className="mt-3 font-serif text-[20px] italic text-ink-800">Talvez valha a pena prestar atenção enquanto isso acontece.</p>
          <HandNote className="mt-10 text-ink-900 text-[clamp(22px,1.8vw,28px)]" rotate={-1}>
            Às vezes, uma ideia muda alguma coisa.
            <br />
            Às vezes, ela só faz você prestar mais atenção.
          </HandNote>
          <Stroke shape="underline" className="mt-1 h-3 w-[60%]" width={2.5} />
          <p className="mt-4 font-medium">As duas coisas já podem valer a terça-feira.</p>
        </div>
        <div className="text-ink-700 lg:border-l lg:border-red-brand/40 lg:pl-10">
          <p>Algumas das perguntas que aparecem numa terça-feira acabam crescendo.</p>
          <p className="mt-2">
            Quando pedem mais tempo, podem virar ensaio em <strong className="font-semibold text-ink-900">Ideias</strong>.
          </p>
          <p className="mt-2">Outras permanecem exatamente onde nasceram.</p>
          <p className="mt-2">E está tudo bem.</p>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 7 — LEITURAS, REFERÊNCIAS E REPERTÓRIO ───────────────────────── */
export function IdeiasRepertorio() {
  return (
    <Section id="repertorio" label="Leituras, referências e repertório">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.05fr_0.9fr] lg:gap-8">
        <div>
          <BrushLabel>Leituras, referências e repertório</BrushLabel>
          <Display size="md" className="mt-6">
            Nenhuma ideia <Em>pensa sozinha.</Em>
          </Display>
          <p className="mt-6 font-serif text-[clamp(20px,1.7vw,24px)] leading-snug">
            Eu também sou feita das coisas que leio, escuto, questiono e carrego comigo.
          </p>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-sm">
          <Photo src="/images/ensaio/ju-leitura-anotacoes.webp" alt="Juliana lendo um livro e fazendo anotações em um caderno." sizes="(min-width:1024px) 32vw, 100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
        </div>
        <div className="rounded-[var(--jf-radius-md)] bg-blush-100/70 p-7">
          <Body className="text-ink-700 [&_p+p]:mt-2">
            <p>Eu leio para aprender. Mas também para ser contrariada.</p>
            <p>Para encontrar palavras para alguma coisa que eu ainda não sabia nomear.</p>
            <p>Para descobrir que uma ideia que parecia minha já estava sendo investigada há décadas.</p>
            <p>Para perceber onde minha experiência individual é pequena demais para sustentar uma conclusão.</p>
            <p>E, às vezes, para terminar um livro com mais perguntas do que quando comecei.</p>
          </Body>
          <p className="mt-5 font-serif text-[21px] font-semibold leading-snug">Pensar com rigor também é reconhecer de onde as ideias vêm.</p>
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
        {/* NA MESA AGORA — 3 referências, área que gira com mais frequência. PLACEHOLDER. */}
        <div id="na-mesa-agora" className="lg:pr-8" data-placeholder="referencias">
          <Title as="h3" className="uppercase">
            Na mesa agora
          </Title>
          <p className="mt-1 text-[15px] text-ink-700">O que estou lendo, estudando ou investigando neste momento.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {NA_MESA_AGORA.map((r) => (
              <li key={r.id} className="overflow-hidden rounded-[var(--jf-radius-sm)] border border-dashed border-ink-900/30 bg-cream-50">
                {r.img && (
                  <div className="relative aspect-[5/3]">
                    <Image src={r.img} alt="" fill sizes="(min-width:640px) 14vw, 100vw" className="object-cover opacity-80 grayscale-[30%]" style={{ objectPosition: photoPosition(r.img) }} />
                  </div>
                )}
                <div className="p-4">
                  <p className="jf-eyebrow text-[10px] text-red-brand">Placeholder</p>
                  <p className="mt-1 font-serif text-[19px] leading-tight">{r.title}</p>
                  <p className="text-[13px] text-ink-500">{r.author}</p>
                  <p className="mt-2 text-[13px] italic leading-snug text-ink-700">{r.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-ink-700">
            Não é resenha. É: <strong className="font-semibold text-ink-900">“Isso está fazendo alguma coisa no meu pensamento.”</strong>
          </p>
        </div>

        <div className="lg:px-8" data-placeholder="referencias">
          <Title as="h3" className="uppercase">
            Referências que voltam
          </Title>
          <p className="mt-1 text-[15px] text-ink-700">Algumas ideias não ficam na estante. Continuam reaparecendo.</p>
          <ul className="mt-6 space-y-2">
            {REFERENCIAS_QUE_VOLTAM.map((r, i) => (
              <li key={r.id} className="flex items-baseline gap-3 rounded-[var(--jf-radius-sm)] border border-dashed border-ink-900/30 px-4 py-3">
                <span className="font-serif text-[18px] text-red-brand">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-[18px]">{r.title}</span>
                <span className="ml-auto text-[12px] text-ink-500">{r.author}</span>
              </li>
            ))}
          </ul>
          <Body className="mt-6 text-[15px] text-ink-700 [&_p+p]:mt-2">
            <p>
              Existem livros que terminam quando fechamos a última página. E existem referências que continuam voltando.
            </p>
            <p>
              Às vezes porque ofereceram uma linguagem. Às vezes porque abriram uma pergunta. Às vezes porque discordar delas
              me ajudou a pensar melhor.
            </p>
          </Body>
          <p className="mt-4 font-serif text-[20px] font-semibold leading-snug">
            Uma referência não precisa virar uma crença para se tornar importante.
          </p>
        </div>

        <div className="lg:pl-8">
          <Title as="h3" className="uppercase">
            Trilhas de investigação
          </Title>
          <p className="mt-1 text-[15px] text-ink-700">Quando uma pergunta começa a puxar outras.</p>
          <p className="mt-3 text-[15px] text-ink-700">
            Em vez de apenas listar livros, o repertório é organizado em torno de perguntas.
          </p>
          <ol className="mt-6 space-y-4">
            {TRILHAS.map((t) => (
              <li key={t.id} className="rounded-[var(--jf-radius-sm)] bg-blush-100/60 p-5">
                <p className="font-serif text-[21px] font-semibold leading-tight">{t.name}</p>
                <Stroke shape="underline" className="mt-1 h-2.5 w-24" width={2} />
                <p className="mt-2 text-[15px] leading-snug">{t.question}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="jf-display jf-display-sm">Ler não é colecionar confirmação.</p>
          <Body className="mt-5 text-ink-700 [&_p+p]:mt-2">
            <p>
              Às vezes uma referência apoia uma hipótese. Às vezes a enfraquece. Às vezes mostra que estou usando uma palavra
              de maneira imprecisa. Às vezes revela um campo inteiro que eu ainda preciso estudar.
            </p>
            <p>E algumas vezes me obriga a abandonar uma ideia da qual eu gostava.</p>
            <p className="font-semibold text-ink-900">Isso também é parte do trabalho.</p>
          </Body>
        </div>
        <div>
          <Title as="h3" className="uppercase">
            Nem tudo que me influencia é meu.
          </Title>
          <Body className="mt-5 text-ink-700 [&_p+p]:mt-2">
            <p>
              Algumas ideias vêm de campos consolidados de conhecimento. Outras vêm de autores específicos. Algumas são sínteses
              que estou construindo a partir do encontro entre referências diferentes. Outras nascem da experiência e depois
              encontram linguagem em pesquisas que já existiam.
            </p>
            <p>
              Por isso, quando uma ideia tem origem, <strong className="font-semibold text-ink-900">essa origem importa</strong>.
            </p>
            <p>Meu interesse não está em parecer ter inventado tudo. Está em compreender o suficiente para saber:</p>
          </Body>
          <QBox className="mt-4">
            o que estou herdando, o que estou reinterpretando, o que estou conectando e o que talvez esteja propondo de novo.
          </QBox>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 border-t border-red-brand/40 pt-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <span className="jf-display hidden text-[96px] leading-none text-red-brand lg:block" aria-hidden>
            “
          </span>
          <p className="jf-display jf-display-sm">
            Repertório não serve para fazer uma ideia parecer mais inteligente.
            <br />
            <Em>Serve para impedir que ela fique pequena demais.</Em>
          </p>
          <ButtonLink href="#na-mesa-agora">Explore leituras e referências</ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="text-ink-700">
            <p>Não é uma revista de resenhas.</p>
            <p className="font-medium text-ink-900">É uma janela para o repertório vivo da Ju.</p>
          </div>
          <div>
            <p className="font-serif text-[20px] italic leading-snug text-ink-800">
              Às vezes, uma leitura me dá uma resposta. Mais frequentemente, muda a qualidade da pergunta.
            </p>
            <p className="mt-2 text-[15px] font-semibold uppercase tracking-wide">
              Talvez essa seja uma das melhores coisas que um bom repertório pode fazer.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 8 — O PENSAMENTO ENCONTRA O MUNDO REAL ───────────────────────── */
const ARENAS = [
  {
    t: "No trabalho",
    img: "/images/ensaio/home-04d-conversa-equipe.webp",
    d: "Estratégia, tecnologia, vendas, liderança, clientes, decisões e consequências. É onde conceitos como transformação, capacidade e direção deixam rapidamente de ser abstratos.",
  },
  {
    t: "Nas organizações",
    img: "/images/ensaio/palestras-workshop-01.webp",
    d: "Uma pergunta pode parecer interessante intelectualmente e ganhar outra dimensão quando vinte pessoas precisam tomar uma decisão a partir dela.",
  },
  {
    t: "No palco",
    img: "/images/ensaio/palestras-palco-frente.webp",
    d: "Quando uma ideia precisa ser clara o suficiente para ser compreendida sem perder aquilo que a torna complexa.",
  },
  {
    t: "Na vida",
    img: "/images/ensaio/pessoas-cafe-manha.webp",
    d: "Maternidade. Relacionamentos. Rotina. Cansaço. Escolhas. Recomeços. A terça-feira qualquer onde qualquer ideia sobre humanidade precisa continuar fazendo sentido.",
  },
];

const LOOP = ["Pensar.", "Experimentar.", "Encontrar limite.", "Voltar à pergunta.", "Mudar alguma coisa.", "Pensar de novo."];

export function IdeiasMundoReal() {
  return (
    <Section tone="cream" label="O pensamento encontra o mundo real">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr_0.9fr] lg:gap-8">
        <div>
          <BrushLabel>O pensamento encontra o mundo real</BrushLabel>
          <Display size="md" className="mt-6">
            Uma ideia muda quando encontra <Em>o mundo.</Em>
          </Display>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>
              Uma ideia pode parecer impecável no caderno. Uma tese pode soar convincente numa página. Uma pergunta pode
              parecer muito clara enquanto ainda está protegida da realidade.
            </p>
            <p>
              Até encontrar: uma pessoa que discorda; um cliente que não quer; uma equipe que não consegue executar; uma
              tecnologia que muda o problema; um limite que não estava previsto; um resultado inesperado; ou simplesmente a
              vida acontecendo de um jeito diferente do planejado.
            </p>
            <p className="font-semibold text-ink-900">É nesse encontro que o pensamento fica mais interessante para mim.</p>
          </Body>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-sm">
          <Photo src="/images/ensaio/home-05-escrita-vertical.webp" alt="Juliana com caderno, caneta e café à mesa, em retrato vertical." sizes="(min-width:1024px) 32vw, 100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
        </div>
        <QuoteCard className="self-start">
          Não me interessa uma ideia que só funciona enquanto ninguém precisa viver com as consequências dela.
        </QuoteCard>
      </Container>

      <Container className="mt-14 grid gap-10 lg:grid-cols-2">
        <Body className="text-ink-700 [&_p+p]:mt-2">
          <p>Escrever, para mim, não é ficar do lado de fora observando a vida.</p>
          <p>
            Eu continuo trabalhando. Construindo empresas e projetos. Conversando com clientes. Lidando com tecnologia. Tomando
            decisões. Criando minhas filhas. Errando. Mudando de opinião. Vendo algumas hipóteses funcionarem e outras
            desmontarem diante da realidade.
          </p>
          <p>E isso constantemente interfere naquilo que penso.</p>
        </Body>
        <Body className="text-ink-700 [&_p+p]:mt-2">
          <p>
            Às vezes, uma experiência confirma uma ideia. Às vezes, complica. Às vezes, mostra que eu estava olhando para a
            pergunta errada.
          </p>
          <p>
            Às vezes, o mundo devolve: <strong className="font-semibold text-ink-900">“não é tão simples assim.”</strong>
          </p>
          <p>E, para mim, essa é uma resposta extremamente útil.</p>
        </Body>
      </Container>

      <Container className="mt-16">
        <div className="flex flex-col items-center text-center">
          <p className="jf-hand rounded-full border-2 border-red-brand px-8 py-4 text-[30px] uppercase leading-tight">
            Pensamento <span aria-label="e">↔</span> Mundo real
          </p>
          <div className="mt-6 max-w-[760px] space-y-1 text-ink-700">
            <p>Uma pergunta pode nascer numa empresa e virar artigo.</p>
            <p>Um livro pode alterar a maneira como eu conduzo uma conversa com uma liderança.</p>
            <p>Uma experiência com minhas filhas pode abrir uma investigação sobre futuro.</p>
            <p>Uma questão que aparece numa palestra pode continuar trabalhando durante meses.</p>
            <p>Um problema de negócio pode desmontar uma ideia bonita sobre transformação.</p>
            <p>Um texto pode entrar numa sala e voltar cheio de novas perguntas.</p>
          </div>
          <p className="jf-display jf-display-sm mt-8">
            Não existe uma linha de produção. <Em>Existe circulação.</Em>
          </p>
        </div>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ARENAS.map((a) => (
            <li key={a.t}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                <Image src={a.img} alt="" fill sizes="(min-width:1024px) 24vw, 100vw" className="object-cover" style={{ objectPosition: photoPosition(a.img) }} />
              </div>
              <h3 className="jf-hand mt-4 text-[26px] uppercase leading-none">{a.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{a.d}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-16 grid gap-8 rounded-[var(--jf-radius-md)] bg-blush-100/60 p-7 lg:grid-cols-[1fr_1fr_1fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40 lg:p-10">
        <div className="lg:pr-8">
          <p className="font-serif text-[clamp(22px,1.9vw,28px)] font-semibold leading-tight">
            Possibilidade sem realidade vira fantasia. Realidade sem possibilidade vira resignação.
          </p>
        </div>
        <div className="text-[15px] text-ink-700 lg:px-8">
          <p>Não quero apenas perguntar: “O que é?” Nem apenas: “O que poderia ser?”</p>
          <p className="mt-2">
            Quero manter as duas coisas em conversa:{" "}
            <strong className="font-semibold text-ink-900">o que existe + o que ainda pode existir.</strong>
          </p>
          <p className="mt-2">Porque é nesse espaço que uma ideia pode simultaneamente ser imaginativa e responsável.</p>
        </div>
        <div className="text-[15px] text-ink-700 lg:pl-8">
          <p>
            Às vezes, pesquisa muda a forma como interpreto uma experiência. Às vezes, experiência muda a forma como leio uma
            pesquisa. E, às vezes, as duas entram em conflito.
          </p>
          <p className="mt-2 font-semibold uppercase text-red-brand">Esse conflito também é pensamento.</p>
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <Title as="h3" className="uppercase">
            A realidade é uma forma de contradição.
          </Title>
          <p className="mt-4 text-ink-700">
            Ela coloca limites. Introduz outras pessoas. Produz consequências. Mostra coisas que o modelo não previa. E obriga
            uma ideia a ganhar nuance.
          </p>
          <QBox className="mt-5">
            Uma ideia não fica menos sofisticada porque precisa sobreviver ao cotidiano. Talvez fique mais.
          </QBox>
        </div>
        <div className="text-ink-700">
          <p>Uma investigação pode permanecer apenas como investigação.</p>
          <p className="mt-2">Pode virar:</p>
          <ul className="mt-2 space-y-1">
            <li>
              um ensaio em <strong className="font-semibold text-ink-900">Ideias</strong>;
            </li>
            <li>
              uma edição de <strong className="font-semibold text-ink-900">Uma Terça-feira Qualquer</strong>;
            </li>
            <li>
              uma pergunta dentro de <strong className="font-semibold text-ink-900">Futuros Humanos</strong>;
            </li>
            <li>uma palestra;</li>
            <li>um workshop;</li>
            <li>uma conversa dentro de uma organização;</li>
            <li>ou simplesmente uma mudança na maneira como entendo alguma coisa.</li>
          </ul>
          <p className="mt-3">O destino não precisa ser definido antes.</p>
          <p className="mt-4 font-serif text-[22px] font-semibold leading-snug text-ink-900">
            Nem toda ideia precisa virar produto para justificar sua existência.
          </p>
        </div>
      </Container>

      <Container className="mt-16 border-t border-ink-900/15 pt-12">
        <ol className="jf-hand flex flex-wrap items-center gap-x-3 gap-y-2 text-[24px]" aria-label="Ciclo do pensamento">
          {LOOP.map((s) => (
            <li key={s} className="flex items-center gap-3">
              {s} <span className="text-red-brand" aria-hidden>→</span>
            </li>
          ))}
          <li className="text-[32px] text-red-brand" aria-label="e recomeça">
            ↻
          </li>
        </ol>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div className="-rotate-1 bg-blush-100 px-7 py-8">
            <p className="jf-display jf-display-sm">
              Eu não quero que a realidade sirva apenas como exemplo para as minhas ideias.{" "}
              <Em>Quero que ela tenha o direito de mudá-las.</Em>
            </p>
          </div>
          <div className="lg:border-l lg:border-red-brand/40 lg:pl-10">
            <p className="font-serif text-[22px] font-semibold uppercase leading-snug">
              O pensamento não termina quando o texto é publicado.
            </p>
            <p className="mt-2 text-ink-700">
              Às vezes, é ali que ele finalmente encontra alguma coisa capaz de contradizê-lo.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — CONTINUE A CONVERSA (escuro) ───────────────────────── */
const DOORS = [
  {
    k: "Quero continuar lendo",
    t: "Explore Ideias",
    d: "Para artigos, ensaios, investigações e perguntas que merecem mais tempo.",
    cta: "Explore todas as ideias",
    href: ANCHORS.destaque,
    img: "/images/ensaio/ju-leitura-anotacoes.webp",
  },
  {
    k: "Quero continuar essa conversa",
    t: "Uma Terça-feira Qualquer",
    d: "Uma conversa semanal, mais próxima e cotidiana, sobre aquilo que estamos construindo enquanto a vida acontece.",
    cta: "Assine a newsletter",
    href: LINKS.newsletter,
    img: "/images/ensaio/home-06-ideias-horizontal.webp",
  },
  {
    k: "Quero entender a tese por trás de muitas dessas perguntas",
    t: "Futuros Humanos",
    d: "O território onde possibilidade, agência, tecnologia, humanidade, direção e construção de futuros se encontram de maneira mais estruturada.",
    cta: "Conheça Futuros Humanos",
    href: "/futuros-humanos",
    img: "/images/ensaio/home-01-abertura-horizontal.webp",
  },
];

const FICOU = ["Uma frase?", "Uma dúvida?", "Uma discordância?", "Uma possibilidade?", "Uma coisa que você ainda não sabe nomear?"];

export function IdeiasConversa() {
  return (
    <Section tone="dark" label="Continue a conversa">
      <Stroke shape="orbit" className="absolute -right-24 top-0 hidden h-[70%] w-[50%] opacity-70 lg:block" width={2.5} color="var(--jf-red-400)" />
      <Container className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-10">
        <div>
          <BrushLabel>Continue a conversa</BrushLabel>
          <Display size="md" className="mt-6">
            Se alguma pergunta ficou, <Em>talvez este espaço já tenha cumprido seu papel.</Em>
          </Display>
          <Body className="mt-6 text-cream-50/80 [&_p+p]:mt-2">
            <p>
              Não quero que cada texto termine dizendo exatamente o que você deve pensar. Nem que toda investigação produza
              uma resposta limpa.
            </p>
            <p>
              Às vezes, o que uma ideia pode fazer de mais interessante é deslocar um pouco aquilo que parecia óbvio. Fazer
              você voltar para alguma coisa. Perceber uma contradição. Discordar. Relacionar duas coisas que antes pareciam
              separadas. Ou simplesmente carregar uma pergunta diferente quando sair daqui.
            </p>
          </Body>
          <p className="mt-5 font-semibold uppercase tracking-wide text-cream-50">Porque pensar também é uma forma de participar.</p>
        </div>
        <div className="lg:border-l lg:border-red-bright/50 lg:pl-10">
          <h3 className="jf-title uppercase">O que acontece depois de uma ideia?</h3>
          <div className="mt-4 space-y-2 text-[15px] text-cream-50/80">
            <p>Talvez nada imediatamente. E tudo bem.</p>
            <p>
              Algumas ideias mudam uma decisão. Outras mudam uma conversa. Algumas viram ação. Outras precisam de tempo.
            </p>
            <p>
              Algumas nos acompanham durante meses até encontrarem uma situação na qual finalmente fazem sentido.
            </p>
            <p>E existem aquelas que só servem para mostrar que aquilo que parecia tão simples talvez não fosse.</p>
          </div>
          <HandNote className="mt-8 text-cream-50 text-[clamp(22px,1.8vw,28px)]" rotate={-2}>
            Nem toda ideia precisa dizer o que fazer depois. Algumas precisam apenas mudar aquilo que conseguimos enxergar.
          </HandNote>
          <Stroke shape="underline" className="mt-1 h-3 w-48" width={2.5} color="var(--jf-red-400)" />
        </div>
        <div className="rotate-1 self-start bg-cream-50 p-7 text-ink-900 shadow-[0_18px_40px_-20px_rgba(0,0,0,.7)]">
          <h3 className="jf-hand text-[34px] leading-none">O que ficou com você?</h3>
          <ul className="jf-hand mt-5 space-y-2 text-[24px] leading-tight">
            {FICOU.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1.5 h-4 w-4 shrink-0 border-2 border-ink-900/70" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-ink-700">Talvez seja exatamente daí que valha continuar.</p>
        </div>
      </Container>

      <Container className="relative mt-16">
        <ul className="grid gap-6 md:grid-cols-3">
          {DOORS.map((d) => (
            <li key={d.t} className="flex flex-col overflow-hidden rounded-[var(--jf-radius-md)] border border-cream-50/15 bg-ink-800">
              <div className="relative aspect-[16/9]">
                <Image src={d.img} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" style={{ objectPosition: photoPosition(d.img) }} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="jf-eyebrow text-[11px] text-red-bright">{d.k}</p>
                <h3 className="jf-title mt-3 text-[28px]">{d.t}</h3>
                <p className="mt-2 flex-1 text-[15px] text-cream-50/75">{d.d}</p>
                <ButtonLink href={d.href} variant="ghost-light" size="sm" className="mt-6 w-fit">
                  {d.cta}
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="relative mt-16 grid gap-10 border-t border-cream-50/20 pt-12 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:items-center">
        <div>
          <p className="jf-display jf-display-sm">
            <Em>Uma boa ideia não precisa encerrar uma conversa.</Em>
          </p>
          <p className="mt-3 font-serif text-[clamp(22px,2vw,30px)] leading-snug text-cream-50/90">
            Às vezes, ela existe para mudar a pergunta com que a gente continua.
          </p>
        </div>
        <div className="text-[15px] text-cream-50/80 lg:border-l lg:border-red-bright/50 lg:pl-8">
          <p>
            Eu continuo lendo. Escrevendo. Mudando de ideia. Tentando entender melhor. Testando algumas coisas no mundo real.
            E descobrindo novas perguntas no caminho.
          </p>
          <p className="mt-4 font-semibold uppercase text-cream-50">
            Nem tudo aqui está resolvido.
            <br />
            <span className="text-red-bright">Ainda bem.</span>
          </p>
        </div>
        <div className="-rotate-2 bg-blush-100 px-7 py-6 text-ink-900">
          <p className="jf-hand text-[28px] uppercase leading-tight">
            Primeiro vem a pergunta.
            <br />
            Depois, a gente vê onde ela leva.
          </p>
          <Dash className="mt-2" />
        </div>
      </Container>
    </Section>
  );
}
