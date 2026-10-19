import { photoPosition } from "@/lib/photo-position";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, Em, HandNote, NumberBadge, QuoteCard, StickyNote, Title } from "@/components/ui/Typography";
import { LINKS } from "@/lib/site";
import { ARTIGOS, ARTIGO_PROTAGONISTA, CAPACIDADES, INVESTIGACOES, TERRITORIOS, type Artigo } from "./data";
import { BrushLabel, EpistemicLegend, EpistemicTag, Inline, QBox } from "./Parts";

export const ANCHORS = {
  destaque: "#ideias-em-destaque",
  territorios: "#territorios",
  investigacao: "#em-investigacao",
  repertorio: "#repertorio",
} as const;

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function IdeiasHero() {
  return (
    <Section padded={false} label="Ideias">
      <div className="grid lg:grid-cols-[46%_54%]">
        <Container className="py-14 lg:ml-auto lg:mr-0 lg:max-w-[700px] lg:py-20 lg:pr-10">
          <div className="jf-reveal">
            <BrushLabel>Ideias</BrushLabel>
            <Display as="h1" size="xl" className="mt-6">
              Algumas ideias <Em>merecem mais tempo.</Em>
            </Display>
            <Stroke shape="underline" className="mt-2 h-4 w-[70%] max-w-[420px]" width={3} />
            <Body className="mt-8 max-w-[560px] text-ink-700 [&_p+p]:mt-3">
              <p>
                Nem toda pergunta cabe num post.
                <br />
                Nem toda reflexão termina numa palestra.
                <br />
                Nem tudo que vale a pena pensar precisa produzir uma resposta imediatamente.
              </p>
              <p>
                Algumas ideias precisam de espaço para: amadurecer; contradizer; encontrar outras ideias; ser testadas; mudar
                de forma; e, às vezes, continuar abertas.
              </p>
              <p className="font-medium text-ink-900">É para isso que este espaço existe.</p>
            </Body>
          </div>
        </Container>
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <Photo
            src="/images/ensaio/home-05-escrita-vertical.webp"
            alt="Juliana com caderno, caneta e café à mesa, em retrato vertical."
            priority
            sizes="(min-width:1024px) 54vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <StickyNote className="absolute left-4 top-6 hidden sm:block lg:left-[8%] lg:top-10" rotate={-6}>
            Nem tudo aqui está resolvido.
          </StickyNote>
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)] pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_auto] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-10">
            <div className="relative -rotate-1 bg-blush-100 px-7 py-8">
              <p className="jf-display jf-display-sm">
                Primeiro vem a pergunta.
                <br />
                Depois vem o conteúdo.
              </p>
              <Stroke shape="underline" className="mt-3 h-3 w-[80%]" width={2.5} />
            </div>
          </div>
          <div className="text-[16px] leading-relaxed text-ink-700 lg:px-8">
            <p>Aqui escrevo sobre aquilo que continua me fazendo parar e pensar.</p>
            <p className="mt-3 font-medium text-red-brand">
              Futuros. Tecnologia. Humanidade. Escolhas. Liderança. Transformação. Possibilidade.
            </p>
            <p className="mt-3">
              E, principalmente, sobre aquilo que acontece <strong className="font-semibold text-ink-900">no encontro entre essas coisas</strong>.
            </p>
          </div>
          <div className="text-[16px] leading-relaxed text-ink-700 lg:px-8">
            <p>
              Nem todos os textos representam conclusões. Alguns são investigações. Outros são tentativas de organizar uma
              pergunta.
            </p>
            <p className="mt-3">
              Alguns começam numa experiência. Outros, num livro. Numa conversa. Num dado. Numa contradição. Ou numa
              terça-feira qualquer.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:pl-8">
            <ButtonLink href={ANCHORS.destaque}>Explore as ideias</ButtonLink>
            <ButtonLink href={LINKS.newsletter} variant="secondary" size="sm">
              Assine Uma Terça-feira Qualquer
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — A PERGUNTA VEM ANTES ───────────────────────── */
const STEPS = [
  {
    t: "Alguma coisa me faz parar",
    body: [
      "Pode ser uma contradição. Uma frase. Um comportamento. Uma mudança. Uma notícia. Uma experiência. Uma pergunta que volta.",
      "Ainda não existe artigo. Existe apenas atenção.",
    ],
    q: "“Por que isso está me incomodando?”",
  },
  {
    t: "Eu tento nomear a pergunta",
    body: [
      "Nem sempre aquilo que chama atenção é a pergunta real.",
      "Uma conversa sobre IA pode, na verdade, ser sobre autoria. Uma conversa sobre produtividade pode ser sobre direção. Uma conversa sobre mudança pode ser sobre medo. Uma conversa sobre futuro pode ser sobre presente.",
      "Então existe um trabalho anterior à resposta:",
    ],
    q: "descobrir qual é a pergunta que vale a pena investigar.",
  },
  {
    t: "Eu procuro outras lentes",
    body: [
      "Aqui entram: livros; pesquisas; autores; dados; conversas; história; Estudos de Futuros; tecnologia; negócios; desenvolvimento humano; e, muitas vezes, experiências que contradizem aquilo que eu achava que sabia.",
    ],
    q: "Pensar não é apenas organizar aquilo em que já acreditamos. Também é permitir que alguma coisa desorganize nossa certeza.",
  },
  {
    t: "Eu tento colocar a ideia contra o mundo real",
    body: [
      "Uma ideia pode soar linda. Mas: ela sobrevive a uma empresa? a uma família? a um orçamento? a uma liderança difícil? a um dia ruim? a uma terça-feira qualquer?",
      "Se não sobrevive ao encontro com a vida, talvez ainda esteja incompleta. Ou talvez esteja simplesmente errada.",
      "E isso também faz parte.",
    ],
  },
  {
    t: "Às vezes eu escrevo. Às vezes não.",
    body: [
      "Nem toda investigação precisa virar conteúdo.",
      "Algumas perguntas amadurecem durante meses. Outras mudam completamente. Algumas são abandonadas. Algumas viram palestra. Outras viram artigo. Outras aparecem numa newsletter. Outras permanecem no caderno.",
    ],
    q: "Nem toda ideia precisa ser publicada para ter valido a pena pensá-la.",
  },
];

export function IdeiasPergunta() {
  return (
    <Section tone="cream" label="A pergunta vem antes do conteúdo">
      <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <Display size="md">
            Eu não começo perguntando o que preciso publicar. <Em>Começo perguntando o que merece ser pensado.</Em>
          </Display>
          <Body className="mt-8 max-w-[560px] text-ink-700 [&_p+p]:mt-3">
            <p className="font-medium text-ink-900">O conteúdo começa muito antes da página em branco.</p>
            <p>
              Às vezes começa numa frase que alguém disse. Num comportamento que se repete. Numa decisão que parece óbvia
              demais. Num dado que não combina com a narrativa. Numa tecnologia que promete resolver alguma coisa e cria
              outras perguntas. Numa conversa com uma das minhas filhas. Numa reunião. Num erro. Num livro.
            </p>
            <p>Ou simplesmente numa sensação:</p>
          </Body>
          <p className="mt-4 font-serif text-[clamp(22px,2vw,28px)] font-semibold leading-snug">
            “Tem alguma coisa aqui que eu ainda não entendi.”
          </p>
          <p className="mt-4 text-ink-700">É daí que eu gosto de começar.</p>
        </div>
        <div className="grid grid-cols-[1.5fr_1fr] gap-3 self-start">
          <div className="relative row-span-2 min-h-[340px] overflow-hidden rounded-sm">
            <Photo
              src="/images/ensaio/ju-trabalho-tecnologia.webp"
              alt="Juliana concentrada no trabalho em um notebook."
              sizes="(min-width:1024px) 32vw, 60vw"
              className="absolute inset-0"
            />
          </div>
          <div className="relative min-h-[160px] overflow-hidden rounded-sm">
            <Photo src="/images/ensaio/contexto-caderno-escolhas.webp" alt="Mãos fazendo anotações e marcando escolhas em um caderno." sizes="20vw" className="absolute inset-0" />
          </div>
          <div className="relative min-h-[160px] overflow-hidden rounded-sm">
            <Photo src="/images/ensaio/contexto-livros-janela.webp" alt="Livros próximos à janela, com a cidade ao entardecer ao fundo." sizes="20vw" className="absolute inset-0" />
          </div>
          <HandNote className="col-span-2 mt-2 text-red-brand" rotate={-2}>
            Por que isso está me incomodando?
          </HandNote>
        </div>
      </Container>

      <Container className="mt-16">
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.t} className="flex flex-col">
              <div className="flex items-start gap-3">
                <NumberBadge n={i + 1} className="h-10 w-10 shrink-0 text-[20px]" />
                <Title className="text-[21px]">{s.t}</Title>
              </div>
              <div className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-700">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {s.q && <QBox className="mt-4">{s.q}</QBox>}
            </li>
          ))}
        </ol>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <QuoteCard>
            Conteúdo é consequência.
            <br />
            <Em>A investigação vem antes.</Em>
          </QuoteCard>
          <div className="mt-10">
            <HandNote className="text-ink-900" rotate={-3}>
              Nem toda ideia aqui está no mesmo lugar.
            </HandNote>
            <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
              <p>Algumas são convicções já bastante amadurecidas.</p>
              <p>Outras são sínteses provisórias.</p>
              <p>Algumas vêm de campos de conhecimento e autores que estou estudando.</p>
              <p>Outras são hipóteses que ainda estou tentando tensionar.</p>
              <p>
                E algumas estão simplesmente: <strong className="font-semibold text-red-brand">em investigação.</strong>
              </p>
            </Body>
          </div>
        </div>
        <div>
          <h3 className="jf-eyebrow text-ink-500">Legenda editorial</h3>
          <EpistemicLegend compact className="mt-4" />
          <p className="mt-10 font-serif text-[clamp(22px,2vw,30px)] font-semibold leading-snug">
            Eu prefiro uma pergunta honestamente aberta a uma resposta artificialmente definitiva.
          </p>
          <Stroke shape="underline" className="mt-2 h-3 w-60" width={2.5} />
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-red-brand/40">
        <div className="lg:pr-12">
          <p className="font-serif text-[22px] font-semibold">Pensar também exige reconhecer de onde as ideias vêm.</p>
          <Body className="mt-5 text-ink-700 [&_p+p]:mt-2">
            <p>Nem toda ideia que aparece aqui nasceu comigo.</p>
            <p>
              Algumas pertencem a campos inteiros de estudo. Outras começaram em autores que admiro. Outras são conceitos
              herdados que tento reinterpretar. Outras surgem do encontro entre coisas que, para mim, ainda não tinham sido
              colocadas juntas.
            </p>
            <p>O trabalho não é fingir originalidade. É:</p>
            <p className="font-medium text-ink-900">
              pensar com rigor suficiente para saber o que estou propondo, o que estou aprendendo e{" "}
              <Em>o que ainda não sei.</Em>
            </p>
          </Body>
        </div>
        <div className="lg:pl-12">
          <HandNote className="text-ink-900" rotate={-2}>
            Primeiro vem a pergunta.
          </HandNote>
          <p className="mt-5 text-ink-700">Depois:</p>
          <p className="mt-2 font-medium text-ink-900">
            atenção → investigação → contradição → repertório → vida real → escrita.
          </p>
          <p className="mt-3 text-ink-700">
            E, às vezes: <strong className="font-semibold text-red-brand">outra pergunta.</strong>
          </p>
          <p className="mt-8 font-serif text-[clamp(22px,2vw,28px)] font-semibold leading-snug">
            Talvez pensar bem seja, algumas vezes, resistir à pressa de concluir.
          </p>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 3 — IDEIAS EM DESTAQUE ───────────────────────── */
function ArticleCard({ a }: { a: Artigo }) {
  return (
    <li className="flex flex-col" data-status={a.status}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
        <Image src={a.img} alt="" fill sizes="(min-width:1024px) 20vw, 100vw" className="object-cover" style={{ objectPosition: photoPosition(a.img) }} />
      </div>
      <p className="jf-eyebrow mt-4 text-[10px] text-red-brand">{a.kicker}</p>
      <h4 className="mt-2 font-serif text-[22px] font-medium leading-[1.12]">{a.title}</h4>
      {a.sub && <p className="mt-2 text-[15px] font-medium leading-snug">{a.sub}</p>}
      <div className="mt-2 space-y-1.5 text-[14px] leading-relaxed text-ink-700">
        {a.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {a.list && <Inline items={a.list} sep="; " />}
      </div>
      {a.question && (
        <QBox lead={a.questionLead} className="mt-4 [&_p:last-child]:text-[16px]">
          {a.question}
        </QBox>
      )}
      {/* status "a-confirmar": ensaio ainda não publicado — CTA sem destino real */}
      <ButtonLink href={a.href} variant="secondary" size="sm" className="mt-5 w-fit">
        {a.cta}
      </ButtonLink>
    </li>
  );
}

export function IdeiasDestaque() {
  const p = ARTIGO_PROTAGONISTA;
  return (
    <Section id="ideias-em-destaque" label="Ideias em destaque">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1fr_1.1fr] lg:gap-8">
        <div>
          <BrushLabel>Ideias em destaque</BrushLabel>
          <Display size="md" className="mt-6">
            Se você acabou de chegar, talvez possa começar <Em>por aqui.</Em>
          </Display>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>Não existe uma ordem certa para entrar numa ideia.</p>
            <p>
              Mas alguns textos funcionam como boas portas. Porque carregam perguntas que atravessam grande parte do meu
              trabalho.
            </p>
            <p className="font-medium text-red-brand">
              Possibilidade. Futuro. Tecnologia. Agência. Escolhas. Transformação. Vida real.
            </p>
            <p>Não precisam ser lidos em sequência. Escolha a pergunta que mais chama você agora.</p>
          </Body>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-sm">
          <Photo src={p.img} alt={p.alt} sizes="(min-width:1024px) 30vw, 100vw" className="absolute inset-0" />
        </div>
        <article className="rounded-[var(--jf-radius-sm)] bg-blush-100/60 p-7 lg:p-9" data-status={p.status}>
          <p className="jf-eyebrow text-[11px] text-red-brand">
            {p.kicker} <span className="text-ink-500">| Futuros</span>
          </p>
          <h3 className="jf-display jf-display-sm mt-4">{p.title}</h3>
          <Stroke shape="underline" className="mt-2 h-3 w-[70%]" width={2.5} />
          <p className="mt-4 font-serif text-[19px] italic leading-snug text-ink-800">{p.sub}</p>
          <div className="mt-4 space-y-2 text-[16px] leading-relaxed text-ink-700">
            {p.body.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <p className="mt-4 font-semibold">{p.highlight}</p>
          <ButtonLink href={p.href} variant="secondary" size="sm" className="mt-7 w-fit border-red-brand text-red-brand">
            {p.cta}
          </ButtonLink>
        </article>
      </Container>

      <Container className="mt-16">
        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {ARTIGOS.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </ul>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 border-t border-ink-900/15 pt-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <HandNote className="text-ink-900 text-[clamp(22px,1.8vw,28px)]" rotate={-2}>
            Você não precisa começar pelo texto mais novo.
            <br />
            <Em>Comece pela pergunta que mais está viva para você.</Em>
          </HandNote>
          <nav aria-label="Territórios de navegação">
            <p className="jf-display jf-display-sm mb-4">Há mais perguntas por aqui.</p>
            <ul className="flex flex-wrap gap-2">
              {TERRITORIOS.map((t) => (
                <li key={t.id}>
                  <Link
                    href={`#territorio-${t.id}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-ink-900/20 bg-blush-100/50 px-4 text-[14px] transition-colors hover:border-red-brand hover:text-red-brand"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href={ANCHORS.territorios}>Explore todas as ideias</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — TERRITÓRIOS ───────────────────────── */
export function IdeiasTerritorios() {
  return (
    <Section id="territorios" tone="cream" label="Territórios">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr_0.9fr] lg:items-center">
        <div>
          <BrushLabel>Territórios</BrushLabel>
          <Display size="md" className="mt-6">
            As perguntas mudam. <Em>Alguns territórios continuam voltando.</Em>
          </Display>
        </div>
        <Body className="text-ink-700 [&_p+p]:mt-2">
          <p>Eu escrevo sobre assuntos diferentes.</p>
          <p>Mas, olhando com alguma distância, percebo que certas questões insistem.</p>
          <p className="font-serif text-[18px] text-ink-900">
            O que ainda pode existir? O que fazemos com tecnologias cada vez mais poderosas? Quanto das nossas escolhas
            realmente nos pertence? Como organizações decidem diante de futuros incertos? Por que perceber que alguma coisa
            precisa mudar raramente é suficiente para conseguir mudá-la?
          </p>
          <p>Essas perguntas se cruzam, se contradizem e frequentemente acabam levando umas às outras.</p>
          <p>
            É por isso que prefiro pensar nelas como <strong className="font-semibold text-ink-900">territórios</strong>, não
            como gavetas.
          </p>
        </Body>
        <div className="relative min-h-[260px] overflow-hidden rounded-sm">
          <Photo src="/images/ensaio/home-01-abertura-horizontal.webp" alt="Juliana de preto diante de uma paisagem ampla ao entardecer." sizes="(min-width:1024px) 28vw, 100vw" className="absolute inset-0" />
        </div>
      </Container>

      <Container className="mt-16">
        <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {TERRITORIOS.map((t) => (
            <li key={t.id} id={`territorio-${t.id}`} className="flex scroll-mt-[calc(var(--jf-header-h)+16px)] flex-col">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                <Image src={t.img} alt="" fill sizes="(min-width:1024px) 20vw, 100vw" className="object-cover" style={{ objectPosition: photoPosition(t.img) }} />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <NumberBadge n={t.n} className="h-10 w-10 shrink-0 text-[20px]" />
                <Title className="text-[20px] uppercase">{t.name}</Title>
              </div>
              <p className="mt-3 font-medium leading-snug text-red-brand">{t.sub}</p>
              <div className="mt-3 space-y-2 text-[14px] leading-relaxed text-ink-700">
                {t.intro?.map((p) => <p key={p}>{p}</p>)}
                <p>
                  {t.themesLead ? `${t.themesLead} ` : ""}
                  {t.themes.join(t.themesLead ? "; " : ". ")}.
                </p>
                {t.outro?.map((p) => <p key={p}>{p}</p>)}
              </div>
              {t.quote && t.id === "escolhas" && (
                <p className="mt-4 font-serif text-[20px] font-semibold leading-snug">{t.quote}</p>
              )}
              <div className="mt-4 rounded-[var(--jf-radius-sm)] bg-blush-100/70 px-5 py-4">
                {t.questionsLead && <p className="jf-eyebrow mb-2 text-[10px] text-ink-500">{t.questionsLead}</p>}
                <ul className="space-y-1.5 font-serif text-[17px] leading-snug">
                  {t.questions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              {t.quote && t.id !== "escolhas" && (
                <p className="mt-4 font-serif text-[18px] font-semibold uppercase leading-snug">{t.quote}</p>
              )}
              {t.after && (
                <div className="mt-3 space-y-1 text-[14px] text-ink-700">
                  {t.after.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-16 grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <HandNote className="text-ink-900" rotate={-3}>
            Eles não vivem separados.
          </HandNote>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>Um texto sobre IA pode terminar numa pergunta sobre agência.</p>
            <p>Uma reflexão sobre liderança pode virar uma investigação sobre futuro.</p>
            <p>Uma questão de transformação pessoal pode revelar uma tensão entre capacidade e contexto.</p>
            <p>Uma discussão sobre estratégia pode acabar falando de humanidade.</p>
            <p>E uma terça-feira qualquer pode abrir uma pergunta sobre os próximos dez anos.</p>
          </Body>
          <QuoteCard className="mt-8">
            Eu me interesso menos pelos temas isolados do que pelo que acontece quando eles se encontram.
          </QuoteCard>
        </div>
        <div className="lg:border-l lg:border-red-brand/40 lg:pl-12">
          <p className="jf-display jf-display-sm">
            Não escrevo sobre cinco assuntos.
            <br />
            <Em>Investigo o que acontece quando eles se encontram.</Em>
          </p>
          <div className="mt-8 space-y-2 text-ink-700">
            <p>Os cinco territórios funcionam como filtros, não gavetas exclusivas.</p>
            <p>Um mesmo texto pode pertencer a mais de um território.</p>
            <p className="font-serif text-[20px] font-semibold text-ink-900">Problemas interessantes raramente respeitam categorias.</p>
          </div>
          <div className="mt-8 space-y-1 text-ink-700">
            <p>Algumas dessas ideias já estão bastante amadurecidas.</p>
            <p>Outras continuam mudando.</p>
            <p>E existem perguntas que ainda nem sei exatamente como formular.</p>
          </div>
          <Link href={ANCHORS.investigacao} className="mt-6 inline-block font-serif text-[22px] font-semibold uppercase text-red-brand underline decoration-1 underline-offset-4">
            Algumas delas estão em investigação.
          </Link>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 5 — EM INVESTIGAÇÃO ───────────────────────── */
function InvBody({ id }: { id: string }) {
  const cls = "space-y-2 text-[15px] leading-relaxed text-ink-700";
  switch (id) {
    case "soberania-humana":
      return (
        <div className={cls}>
          <p className="font-serif text-[20px] font-semibold leading-snug text-ink-900">
            O que significa continuar autor da própria humanidade num mundo de ferramentas cada vez mais poderosas?
          </p>
          <p>Quanto mais decisões conseguimos automatizar, mais perguntas aparecem.</p>
          <p>
            O que delegamos? O que terceirizamos sem perceber? Que capacidades deixamos de exercitar? Que escolhas ainda
            precisam permanecer conosco? Quando conveniência começa a virar dependência? E onde termina a ajuda da ferramenta e
            começa a abdicação de autoria?
          </p>
          <p>
            Tenho usado provisoriamente a expressão <strong className="font-semibold text-ink-900">Soberania Humana</strong>{" "}
            para investigar esse território. Mas a ideia ainda está aberta.
          </p>
          <details className="group">
            <summary className="cursor-pointer font-medium text-red-brand">Ler mais</summary>
            <div className="mt-2 space-y-2">
              <p>Não estou falando de independência absoluta. Nem da fantasia de um indivíduo completamente autônomo.</p>
              <p>Somos interdependentes. Vivemos dentro de sistemas. Precisamos uns dos outros. Usamos ferramentas.</p>
              <p>A questão que me interessa é outra:</p>
            </div>
          </details>
          <QBox>
            como continuar suficientemente presente nas escolhas que constroem aquilo que somos e aquilo que colocamos no
            mundo?
          </QBox>
          <p className="text-[14px] font-medium text-ink-900">
            Soberania Humana é, hoje, um território de investigação — não uma teoria fechada ou validada.
          </p>
        </div>
      );
    case "capacidades-humanas":
      return (
        <div className={cls}>
          <p>
            Se tecnologia assume partes crescentes daquilo que sabemos fazer, talvez a pergunta não seja apenas: “Quais
            profissões vão desaparecer?”
          </p>
          <p>
            Pode ser: <strong className="font-semibold text-ink-900">“Do que nós, humanos, precisaremos nos tornar mais capazes?”</strong>
          </p>
          <p>Hoje, algumas capacidades continuam aparecendo repetidamente no meu trabalho:</p>
          <dl className="space-y-1.5 rounded-[var(--jf-radius-sm)] border border-ink-900/10 bg-cream-50 p-4 text-[14px]">
            {CAPACIDADES.map((c) => (
              <div key={c.name}>
                <dt className="inline font-semibold text-ink-900">{c.name}</dt> <dd className="inline">— {c.desc}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[14px] font-medium text-ink-900">
            Esta lista não é fechada. Não é um teste. Não é um modelo psicométrico. Não representa oito “competências
            oficiais” validadas cientificamente.
          </p>
          <QBox>É, hoje: um mapa de investigação. E pode mudar.</QBox>
        </div>
      );
    case "terceirizando":
      return (
        <div className={cls}>
          <p>A terceirização de autoria não começa com tecnologia.</p>
          <p>
            Também terceirizamos para: algoritmos; opiniões; cultura; família; mercado; chefes; tendências; expectativas;
            hábitos; medo; o “é assim mesmo”.
          </p>
          <p className="font-serif text-[20px] font-semibold leading-snug text-ink-900">
            Quanto das nossas escolhas continua sendo realmente escolhido?
          </p>
          <QBox>
            Quando uma recomendação vira decisão? Quando um comportamento repetido deixa de ser escolha e vira padrão? Quando
            conforto se transforma em dependência? Quando seguimos um caminho porque o escolhemos e quando simplesmente
            continuamos nele porque já estávamos lá?
          </QBox>
        </div>
      );
    case "capacidade-responsabilidade":
      return (
        <div className={cls}>
          <p>Essa investigação nasce de uma tensão:</p>
          <p className="font-medium text-ink-900">
            capacidade tecnológica cresce mais rapidamente do que nossa maturidade para decidir o que vale a pena fazer com
            ela?
          </p>
          <p>Não como afirmação moralista. Como pergunta.</p>
          <p>
            Porque poder fazer algo cria novos campos de escolha. Editar genes. Automatizar decisões. Gerar conteúdo em escala.
            Simular pessoas. Prever comportamentos. Substituir determinadas tarefas. Ampliar vigilância. Personalizar
            experiências.
          </p>
          <p>
            A ferramenta responde: <strong className="font-semibold text-ink-900">“É possível.”</strong>
          </p>
          <QBox lead="Mas alguém ainda precisa responder">
            “Devemos?” “Para quê?” “Sob quais critérios?” “Com quais consequências?” “Quem responde por isso?”
          </QBox>
          <p>
            É aqui que a frase{" "}
            <strong className="font-semibold text-ink-900">
              Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas
            </strong>{" "}
            deixa de ser apenas uma frase e vira <strong className="font-semibold text-red-brand">programa de investigação</strong>.
          </p>
        </div>
      );
    default:
      return (
        <div className={cls}>
          <p className="font-medium text-ink-900">“Humanidade” pode facilmente virar um slogan vazio.</p>
          <p>Humano também é: contradição; erro; preconceito; violência; ego; irracionalidade; limite.</p>
          <p>
            Então “mais humanos” não pode significar: “humanos são naturalmente bons e tecnologia é ruim.” Não é isso.
          </p>
          <QBox lead="A pergunta é">
            Que partes da nossa humanidade queremos cultivar deliberadamente quando nossas ferramentas ampliam tanto nossa
            capacidade de agir?
          </QBox>
          <p>
            Discernimento? Empatia? Responsabilidade? Imaginação? Cuidado? Autoria? Capacidade de conviver com ambiguidade?
          </p>
          <p>Esse é um território que ainda precisa de muita investigação.</p>
        </div>
      );
  }
}

export function IdeiasInvestigacao() {
  return (
    <Section id="em-investigacao" label="Em investigação">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr_0.85fr] lg:gap-8">
        <div>
          <BrushLabel>Em investigação</BrushLabel>
          <Display size="md" className="mt-6">
            Algumas ideias ainda não estão prontas.{" "}
            <Em>E eu não quero apressá-las só para poder dar um nome.</Em>
          </Display>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>
              Existem perguntas que continuam voltando. Ainda não sei exatamente onde elas terminam. Algumas talvez se tornem
              conceitos mais sólidos. Outras podem mudar completamente. Algumas talvez desapareçam quando encontrarem
              evidências melhores.
            </p>
            <p>Mas, enquanto continuam produzindo boas perguntas, quero mantê-las abertas.</p>
            <p className="font-semibold text-ink-900">Este é o espaço das ideias que ainda estão sendo construídas.</p>
          </Body>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-sm">
          <Photo src="/images/ensaio/ju-leitura-anotacoes.webp" alt="Juliana lendo um livro e fazendo anotações em um caderno." sizes="(min-width:1024px) 30vw, 100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
          <StickyNote className="absolute left-4 top-4" rotate={-5} tone="paper">
            Ainda não sei exatamente onde elas terminam.
          </StickyNote>
        </div>
        <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/60 p-7">
          <p className="text-[15px] text-ink-700">“Em investigação” não significa:</p>
          <ul className="mt-2 space-y-1 text-[15px] text-ink-700">
            <li>“estou inventando uma teoria”.</li>
            <li>Nem: “isso já é uma metodologia proprietária”.</li>
            <li>Nem: “encontrei uma nova ciência sobre comportamento humano”.</li>
          </ul>
          <p className="mt-4 text-[15px] text-ink-700">Significa:</p>
          <p className="mt-1 font-serif text-[20px] font-semibold leading-snug">
            há uma pergunta relevante, algum repertório acumulado, hipóteses surgindo e trabalho ainda por fazer.
          </p>
          <p className="mt-4 text-[14px] text-ink-700">
            Leitura. Pesquisa. Conversa. Contradição. Experiência. Dados. Autores. Campos de conhecimento diferentes. E tempo.
          </p>
          <p className="mt-5 font-serif text-[18px] font-semibold uppercase leading-snug text-red-brand">
            Não quero dar a uma ideia mais certeza do que ela ainda tem.
          </p>
        </div>
      </Container>

      <Container className="mt-16">
        <ol className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {INVESTIGACOES.map((inv) => (
            <li key={inv.id} id={`investigacao-${inv.id}`} className="flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                <Image src={inv.img} alt="" fill sizes="(min-width:1024px) 20vw, 100vw" className="object-cover" style={{ objectPosition: photoPosition(inv.img) }} />
              </div>
              <EpistemicTag kind={inv.label} className="mt-4 w-fit" />
              <Title className="mt-3 text-[22px]">
                <span className="text-red-brand">{inv.n}.</span> {inv.title}
              </Title>
              <div className="mt-3">
                <InvBody id={inv.id} />
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="mt-16">
        <div className="flex items-center gap-5">
          <h3 className="jf-eyebrow shrink-0 text-[13px] text-ink-900">Legenda epistemológica</h3>
          <span className="h-px flex-1 bg-ink-900/20" aria-hidden />
        </div>
        <EpistemicLegend className="mt-6" />
      </Container>

      <Container className="mt-16 grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.1fr_1fr_auto] lg:items-start">
        <div>
          <QuoteCard>Não quero transformar toda boa pergunta numa teoria só porque ela tem um nome bonito.</QuoteCard>
          <p className="jf-display jf-display-sm mt-8">
            Rigor no subsolo. <Em>Clareza no palco.</Em>
          </p>
          <p className="mt-4 text-ink-700">No palco e no conteúdo, a experiência precisa ser clara.</p>
          <p className="mt-1 text-ink-700">
            Mas por baixo: pesquisa; referências; contradição; checagem; questionamento; origem das ideias; limites do que
            sabemos.
          </p>
        </div>
        <div className="text-ink-700">
          <Title as="h3" className="uppercase text-ink-900">
            Acompanhe as perguntas enquanto elas ainda estão abertas.
          </Title>
          <p className="mt-4">
            Algumas dessas perguntas podem se tornar parte importante do meu trabalho. Outras talvez não sobrevivam à
            investigação. E isso está tudo bem.
          </p>
          <p className="mt-6 font-serif text-[22px] font-semibold leading-snug text-ink-900">
            Uma ideia não precisa estar certa para sempre.
            <br />
            <Em>Precisa ser honesta sobre o lugar em que está agora.</Em>
          </p>
        </div>
        <ButtonLink href={`#investigacao-${INVESTIGACOES[0].id}`}>Leia ideias em investigação</ButtonLink>
      </Container>
    </Section>
  );
}
