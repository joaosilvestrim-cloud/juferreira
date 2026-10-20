import { getPublishedArticles, type Article as DbArticle } from "@/lib/content";
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

import { tx, img, lazy } from "@/lib/editable";
export const ANCHORS = {
  destaque: "#ideias-em-destaque",
  territorios: "#territorios",
  investigacao: "#em-investigacao",
  repertorio: "#repertorio",
} as const;

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function IdeiasHero() {
  return (
    <Section padded={false} label={tx("ideias/5512140bd7", "Ideias")}>
      <div className="grid lg:grid-cols-[46%_54%]">
        <Container className="py-14 lg:ml-auto lg:mr-0 lg:max-w-[700px] lg:py-20 lg:pr-10">
          <div className="jf-reveal">
            <BrushLabel>{tx("ideias/89b06ec30d", "Ideias")}</BrushLabel>
            <Display as="h1" size="xl" className="mt-6">
              {tx("ideias/006351547d", "Algumas ideias")} <Em>{tx("ideias/470236134c", "merecem mais tempo.")}</Em>
            </Display>
            <Stroke shape="underline" className="mt-2 h-4 w-[70%] max-w-[420px]" width={3} />
            <Body className="mt-8 max-w-[560px] text-ink-700 [&_p+p]:mt-3">
              <p>
                {tx("ideias/c37fe33ad4", "Nem toda pergunta cabe num post.")}<br />
                {tx("ideias/225fade13a", "Nem toda reflexão termina numa palestra.")}<br />
                {tx("ideias/b15c3a4dce", "Nem tudo que vale a pena pensar precisa produzir uma resposta imediatamente.")}</p>
              <p>
                {tx("ideias/0d3e1658f1", "Algumas ideias precisam de espaço para: amadurecer; contradizer; encontrar outras ideias; ser testadas; mudar de forma; e, às vezes, continuar abertas.")}</p>
              <p className="font-medium text-ink-900">{tx("ideias/a3e00dc87d", "É para isso que este espaço existe.")}</p>
            </Body>
          </div>
        </Container>
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <Photo
            src={img("ideias/41a9e167ae", "/images/ensaio/home-05-escrita-vertical.webp")}
            alt={tx("ideias/ad6f11a343", "Juliana com caderno, caneta e café à mesa, em retrato vertical.")}
            priority
            sizes="(min-width:1024px) 54vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <StickyNote className="absolute left-4 top-6 hidden sm:block lg:left-[8%] lg:top-10" rotate={-6}>
            {tx("ideias/833899d26c", "Nem tudo aqui está resolvido.")}</StickyNote>
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)] pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_auto] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-10">
            <div className="relative -rotate-1 bg-blush-100 px-7 py-8">
              <p className="jf-display jf-display-sm">
                {tx("ideias/dcbbdf3e04", "Primeiro vem a pergunta.")}<br />
                {tx("ideias/68ff86291b", "Depois vem o conteúdo.")}</p>
              <Stroke shape="underline" className="mt-3 h-3 w-[80%]" width={2.5} />
            </div>
          </div>
          <div className="text-[16px] leading-relaxed text-ink-700 lg:px-8">
            <p>{tx("ideias/ced282687e", "Aqui escrevo sobre aquilo que continua me fazendo parar e pensar.")}</p>
            <p className="mt-3 font-medium text-red-brand">
              {tx("ideias/6dcd4237d2", "Futuros. Tecnologia. Humanidade. Escolhas. Liderança. Transformação. Possibilidade.")}</p>
            <p className="mt-3">
              {tx("ideias/e82c2bee8d", "E, principalmente, sobre aquilo que acontece")} <strong className="font-semibold text-ink-900">{tx("ideias/6ded25a5d6", "no encontro entre essas coisas")}</strong>.
            </p>
          </div>
          <div className="text-[16px] leading-relaxed text-ink-700 lg:px-8">
            <p>
              {tx("ideias/9bd1e1c1d9", "Nem todos os textos representam conclusões. Alguns são investigações. Outros são tentativas de organizar uma pergunta.")}</p>
            <p className="mt-3">
              {tx("ideias/9d83fd62fd", "Alguns começam numa experiência. Outros, num livro. Numa conversa. Num dado. Numa contradição. Ou numa terça-feira qualquer.")}</p>
          </div>
          <div className="flex flex-col gap-3 lg:pl-8">
            <ButtonLink href={ANCHORS.destaque}>{tx("ideias/4db92200a5", "Explore as ideias")}</ButtonLink>
            <ButtonLink href={LINKS.newsletter} variant="secondary" size="sm">
              {tx("ideias/180922d5b4", "Assine Uma Terça-feira Qualquer")}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — A PERGUNTA VEM ANTES ───────────────────────── */
const STEPS = lazy(() => ([
  {
    t: tx("ideias/f57c9d8166", "Alguma coisa me faz parar"),
    body: [
      tx("ideias/94ef7011d7", "Pode ser uma contradição. Uma frase. Um comportamento. Uma mudança. Uma notícia. Uma experiência. Uma pergunta que volta."),
      tx("ideias/c070e50f7f", "Ainda não existe artigo. Existe apenas atenção."),
    ],
    q: tx("ideias/e858f144e7", "“Por que isso está me incomodando?”"),
  },
  {
    t: tx("ideias/6f6d2b9613", "Eu tento nomear a pergunta"),
    body: [
      tx("ideias/b81fef2c54", "Nem sempre aquilo que chama atenção é a pergunta real."),
      tx("ideias/595c057b9e", "Uma conversa sobre IA pode, na verdade, ser sobre autoria. Uma conversa sobre produtividade pode ser sobre direção. Uma conversa sobre mudança pode ser sobre medo. Uma conversa sobre futuro pode ser sobre presente."),
      tx("ideias/ccafc05b25", "Então existe um trabalho anterior à resposta:"),
    ],
    q: tx("ideias/031bf693f7", "descobrir qual é a pergunta que vale a pena investigar."),
  },
  {
    t: tx("ideias/dc1107ca9b", "Eu procuro outras lentes"),
    body: [
      tx("ideias/fdff9dd66d", "Aqui entram: livros; pesquisas; autores; dados; conversas; história; Estudos de Futuros; tecnologia; negócios; desenvolvimento humano; e, muitas vezes, experiências que contradizem aquilo que eu achava que sabia."),
    ],
    q: tx("ideias/d89502f6b5", "Pensar não é apenas organizar aquilo em que já acreditamos. Também é permitir que alguma coisa desorganize nossa certeza."),
  },
  {
    t: tx("ideias/2440562ab8", "Eu tento colocar a ideia contra o mundo real"),
    body: [
      tx("ideias/4ed51cb42d", "Uma ideia pode soar linda. Mas: ela sobrevive a uma empresa? a uma família? a um orçamento? a uma liderança difícil? a um dia ruim? a uma terça-feira qualquer?"),
      tx("ideias/a87b922557", "Se não sobrevive ao encontro com a vida, talvez ainda esteja incompleta. Ou talvez esteja simplesmente errada."),
      tx("ideias/026823cc35", "E isso também faz parte."),
    ],
  },
  {
    t: tx("ideias/e5a4eec758", "Às vezes eu escrevo. Às vezes não."),
    body: [
      tx("ideias/8605baec05", "Nem toda investigação precisa virar conteúdo."),
      tx("ideias/cabb1a7599", "Algumas perguntas amadurecem durante meses. Outras mudam completamente. Algumas são abandonadas. Algumas viram palestra. Outras viram artigo. Outras aparecem numa newsletter. Outras permanecem no caderno."),
    ],
    q: tx("ideias/cd502508f9", "Nem toda ideia precisa ser publicada para ter valido a pena pensá-la."),
  },
]));

export function IdeiasPergunta() {
  return (
    <Section tone="cream" label={tx("ideias/fe08e54083", "A pergunta vem antes do conteúdo")}>
      <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <Display size="md">
            {tx("ideias/2aab86b52b", "Eu não começo perguntando o que preciso publicar.")} <Em>{tx("ideias/f18a1d69df", "Começo perguntando o que merece ser pensado.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[560px] text-ink-700 [&_p+p]:mt-3">
            <p className="font-medium text-ink-900">{tx("ideias/6fc4542128", "O conteúdo começa muito antes da página em branco.")}</p>
            <p>
              {tx("ideias/c82dfdf15a", "Às vezes começa numa frase que alguém disse. Num comportamento que se repete. Numa decisão que parece óbvia demais. Num dado que não combina com a narrativa. Numa tecnologia que promete resolver alguma coisa e cria outras perguntas. Numa conversa com uma das minhas filhas. Numa reunião. Num erro. Num livro.")}</p>
            <p>{tx("ideias/526579b99f", "Ou simplesmente numa sensação:")}</p>
          </Body>
          <p className="mt-4 font-serif text-[clamp(22px,2vw,28px)] font-semibold leading-snug">
            {tx("ideias/b35b8b13f0", "“Tem alguma coisa aqui que eu ainda não entendi.”")}</p>
          <p className="mt-4 text-ink-700">{tx("ideias/30f685a50d", "É daí que eu gosto de começar.")}</p>
        </div>
        <div className="grid grid-cols-[1.5fr_1fr] gap-3 self-start">
          <div className="relative row-span-2 min-h-[340px] overflow-hidden rounded-sm">
            <Photo
              src={img("ideias/2f572af3b1", "/images/ensaio/ju-trabalho-tecnologia.webp")}
              alt={tx("ideias/16b8e632a5", "Juliana concentrada no trabalho em um notebook.")}
              sizes="(min-width:1024px) 32vw, 60vw"
              className="absolute inset-0"
            />
          </div>
          <div className="relative min-h-[160px] overflow-hidden rounded-sm">
            <Photo src={img("ideias/a9f65ea54f", "/images/ensaio/contexto-caderno-escolhas.webp")} alt={tx("ideias/2f2bf9f8c2", "Mãos fazendo anotações e marcando escolhas em um caderno.")} sizes="20vw" className="absolute inset-0" />
          </div>
          <div className="relative min-h-[160px] overflow-hidden rounded-sm">
            <Photo src={img("ideias/b87a643210", "/images/ensaio/contexto-livros-janela.webp")} alt={tx("ideias/b0716e0162", "Livros próximos à janela, com a cidade ao entardecer ao fundo.")} sizes="20vw" className="absolute inset-0" />
          </div>
          <HandNote className="col-span-2 mt-2 text-red-brand" rotate={-2}>
            {tx("ideias/f42e31de0b", "Por que isso está me incomodando?")}</HandNote>
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
            {tx("ideias/2f7aa5fe53", "Conteúdo é consequência.")}<br />
            <Em>{tx("ideias/fb846df9d6", "A investigação vem antes.")}</Em>
          </QuoteCard>
          <div className="mt-10">
            <HandNote className="text-ink-900" rotate={-3}>
              {tx("ideias/ad5fd63912", "Nem toda ideia aqui está no mesmo lugar.")}</HandNote>
            <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
              <p>{tx("ideias/0ca96b20e2", "Algumas são convicções já bastante amadurecidas.")}</p>
              <p>{tx("ideias/edc372a90a", "Outras são sínteses provisórias.")}</p>
              <p>{tx("ideias/a443d36885", "Algumas vêm de campos de conhecimento e autores que estou estudando.")}</p>
              <p>{tx("ideias/5731ac7edd", "Outras são hipóteses que ainda estou tentando tensionar.")}</p>
              <p>
                {tx("ideias/95bda41a4b", "E algumas estão simplesmente:")} <strong className="font-semibold text-red-brand">{tx("ideias/401f777c29", "em investigação.")}</strong>
              </p>
            </Body>
          </div>
        </div>
        <div>
          <h3 className="jf-eyebrow text-ink-500">{tx("ideias/257a7549e4", "Legenda editorial")}</h3>
          <EpistemicLegend compact className="mt-4" />
          <p className="mt-10 font-serif text-[clamp(22px,2vw,30px)] font-semibold leading-snug">
            {tx("ideias/8242ab0e38", "Eu prefiro uma pergunta honestamente aberta a uma resposta artificialmente definitiva.")}</p>
          <Stroke shape="underline" className="mt-2 h-3 w-60" width={2.5} />
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-red-brand/40">
        <div className="lg:pr-12">
          <p className="font-serif text-[22px] font-semibold">{tx("ideias/4d6c3d2ee3", "Pensar também exige reconhecer de onde as ideias vêm.")}</p>
          <Body className="mt-5 text-ink-700 [&_p+p]:mt-2">
            <p>{tx("ideias/dd9aed9837", "Nem toda ideia que aparece aqui nasceu comigo.")}</p>
            <p>
              {tx("ideias/c79a835b69", "Algumas pertencem a campos inteiros de estudo. Outras começaram em autores que admiro. Outras são conceitos herdados que tento reinterpretar. Outras surgem do encontro entre coisas que, para mim, ainda não tinham sido colocadas juntas.")}</p>
            <p>{tx("ideias/fafbd73db1", "O trabalho não é fingir originalidade. É:")}</p>
            <p className="font-medium text-ink-900">
              {tx("ideias/aadee4be39", "pensar com rigor suficiente para saber o que estou propondo, o que estou aprendendo e")}{" "}
              <Em>{tx("ideias/18e97a1602", "o que ainda não sei.")}</Em>
            </p>
          </Body>
        </div>
        <div className="lg:pl-12">
          <HandNote className="text-ink-900" rotate={-2}>
            {tx("ideias/63943475d0", "Primeiro vem a pergunta.")}</HandNote>
          <p className="mt-5 text-ink-700">{tx("ideias/788223f072", "Depois:")}</p>
          <p className="mt-2 font-medium text-ink-900">
            {tx("ideias/9ee6e057c1", "atenção → investigação → contradição → repertório → vida real → escrita.")}</p>
          <p className="mt-3 text-ink-700">
            {tx("ideias/728b82de35", "E, às vezes:")} <strong className="font-semibold text-red-brand">{tx("ideias/f4f9fe687d", "outra pergunta.")}</strong>
          </p>
          <p className="mt-8 font-serif text-[clamp(22px,2vw,28px)] font-semibold leading-snug">
            {tx("ideias/718f7bb713", "Talvez pensar bem seja, algumas vezes, resistir à pressa de concluir.")}</p>
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

const TERR_NAME: Record<string, string> = lazy(() => ({ futuros: tx("ideias/7605f4d290", "Futuros"), tecnologia: tx("ideias/1c6ee81f38", "Tecnologia & Humanidade"), escolhas: tx("ideias/eca6844329", "Escolhas & Agência"), lideranca: tx("ideias/1de00b1182", "Liderança & Organizações"), "vida-real": tx("ideias/22c2801aa2", "Transformação & Vida Real") }));

/** Converte um artigo publicado no painel para o formato dos cards desta página. */
function fromDb(a: DbArticle, i: number, protagonista: boolean): Artigo {
  const fallbackImg = (protagonista ? ARTIGO_PROTAGONISTA : ARTIGOS[i % ARTIGOS.length]).img;
  return {
    slug: a.slug,
    status: "publicado",
    href: `/ideias/${a.slug}`,
    cta: protagonista ? tx("ideias/9813948cbf", "Leia o ensaio") : tx("ideias/bec1a39e77", "Ler"),
    kicker: protagonista ? tx("ideias/477ae5b5c6", "Artigo protagonista") : a.territories.map((t) => TERR_NAME[t] ?? t).join(" · ") || "Ideias",
    territorios: a.territories as Artigo["territorios"],
    title: a.title,
    sub: a.subtitle ?? undefined,
    body: a.excerpt ? [a.excerpt] : [],
    question: a.question ?? undefined,
    img: a.cover ?? fallbackImg,
    alt: "",
  };
}

export async function IdeiasDestaque() {
  // artigos publicados no painel substituem a arquitetura editorial ("a confirmar")
  const published = await getPublishedArticles();
  const p = published.length ? fromDb(published[0], 0, true) : ARTIGO_PROTAGONISTA;
  const cards = published.length ? published.slice(1, 6).map((a, i) => fromDb(a, i, false)) : ARTIGOS;
  return (
    <Section id="ideias-em-destaque" label={tx("ideias/94cf041f0d", "Ideias em destaque")}>
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1fr_1.1fr] lg:gap-8">
        <div>
          <BrushLabel>{tx("ideias/e89e04142e", "Ideias em destaque")}</BrushLabel>
          <Display size="md" className="mt-6">
            {tx("ideias/8358c2ccc2", "Se você acabou de chegar, talvez possa começar")} <Em>{tx("ideias/ac16b11844", "por aqui.")}</Em>
          </Display>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>{tx("ideias/2eb4dcfebe", "Não existe uma ordem certa para entrar numa ideia.")}</p>
            <p>
              {tx("ideias/ca78baa6c7", "Mas alguns textos funcionam como boas portas. Porque carregam perguntas que atravessam grande parte do meu trabalho.")}</p>
            <p className="font-medium text-red-brand">
              {tx("ideias/cde0f6a1c5", "Possibilidade. Futuro. Tecnologia. Agência. Escolhas. Transformação. Vida real.")}</p>
            <p>{tx("ideias/c700b43fe0", "Não precisam ser lidos em sequência. Escolha a pergunta que mais chama você agora.")}</p>
          </Body>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-sm">
          <Photo src={p.img} alt={p.alt} sizes="(min-width:1024px) 30vw, 100vw" className="absolute inset-0" />
        </div>
        <article className="rounded-[var(--jf-radius-sm)] bg-blush-100/60 p-7 lg:p-9" data-status={p.status}>
          <p className="jf-eyebrow text-[11px] text-red-brand">
            {p.kicker} <span className="text-ink-500">| {p.territorios.map((t) => TERR_NAME[t] ?? t).join(" · ") || "Ideias"}</span>
          </p>
          <h3 className="jf-display jf-display-sm mt-4">{p.title}</h3>
          <Stroke shape="underline" className="mt-2 h-3 w-[70%]" width={2.5} />
          <p className="mt-4 font-serif text-[19px] italic leading-snug text-ink-800">{p.sub}</p>
          <div className="mt-4 space-y-2 text-[16px] leading-relaxed text-ink-700">
            {p.body.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          {p.highlight && <p className="mt-4 font-semibold">{p.highlight}</p>}
          <ButtonLink href={p.href} variant="secondary" size="sm" className="mt-7 w-fit border-red-brand text-red-brand">
            {p.cta}
          </ButtonLink>
        </article>
      </Container>

      <Container className="mt-16">
        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {cards.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </ul>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 border-t border-ink-900/15 pt-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <HandNote className="text-ink-900 text-[clamp(22px,1.8vw,28px)]" rotate={-2}>
            {tx("ideias/f14af613c0", "Você não precisa começar pelo texto mais novo.")}<br />
            <Em>{tx("ideias/da2b0c922d", "Comece pela pergunta que mais está viva para você.")}</Em>
          </HandNote>
          <nav aria-label={tx("ideias/f166ea5437", "Territórios de navegação")}>
            <p className="jf-display jf-display-sm mb-4">{tx("ideias/daaa420a22", "Há mais perguntas por aqui.")}</p>
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
          <ButtonLink href={ANCHORS.territorios}>{tx("ideias/d5f5e70abf", "Explore todas as ideias")}</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — TERRITÓRIOS ───────────────────────── */
export function IdeiasTerritorios() {
  return (
    <Section id="territorios" tone="cream" label={tx("ideias/e70efd6b44", "Territórios")}>
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr_0.9fr] lg:items-center">
        <div>
          <BrushLabel>{tx("ideias/69f1460f9f", "Territórios")}</BrushLabel>
          <Display size="md" className="mt-6">
            {tx("ideias/6766ef9ac3", "As perguntas mudam.")} <Em>{tx("ideias/857990358f", "Alguns territórios continuam voltando.")}</Em>
          </Display>
        </div>
        <Body className="text-ink-700 [&_p+p]:mt-2">
          <p>{tx("ideias/5eb29acd5e", "Eu escrevo sobre assuntos diferentes.")}</p>
          <p>{tx("ideias/a9d8cd65b5", "Mas, olhando com alguma distância, percebo que certas questões insistem.")}</p>
          <p className="font-serif text-[18px] text-ink-900">
            {tx("ideias/1b9df4a392", "O que ainda pode existir? O que fazemos com tecnologias cada vez mais poderosas? Quanto das nossas escolhas realmente nos pertence? Como organizações decidem diante de futuros incertos? Por que perceber que alguma coisa precisa mudar raramente é suficiente para conseguir mudá-la?")}</p>
          <p>{tx("ideias/3b85002aa1", "Essas perguntas se cruzam, se contradizem e frequentemente acabam levando umas às outras.")}</p>
          <p>
            {tx("ideias/b442382d5a", "É por isso que prefiro pensar nelas como")} <strong className="font-semibold text-ink-900">{tx("ideias/c5c2b8bbad", "territórios")}</strong>{tx("ideias/cba9fb070f", ", não como gavetas.")}</p>
        </Body>
        <div className="relative min-h-[260px] overflow-hidden rounded-sm">
          <Photo src={img("ideias/27ad7f460d", "/images/ensaio/home-01-abertura-horizontal.webp")} alt={tx("ideias/ebea568313", "Juliana de preto diante de uma paisagem ampla ao entardecer.")} sizes="(min-width:1024px) 28vw, 100vw" className="absolute inset-0" />
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
            {tx("ideias/345975c23c", "Eles não vivem separados.")}</HandNote>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>{tx("ideias/fe15cadf31", "Um texto sobre IA pode terminar numa pergunta sobre agência.")}</p>
            <p>{tx("ideias/df7b97ca84", "Uma reflexão sobre liderança pode virar uma investigação sobre futuro.")}</p>
            <p>{tx("ideias/0960b29350", "Uma questão de transformação pessoal pode revelar uma tensão entre capacidade e contexto.")}</p>
            <p>{tx("ideias/7145a29916", "Uma discussão sobre estratégia pode acabar falando de humanidade.")}</p>
            <p>{tx("ideias/a76fa0d306", "E uma terça-feira qualquer pode abrir uma pergunta sobre os próximos dez anos.")}</p>
          </Body>
          <QuoteCard className="mt-8">
            {tx("ideias/2fead79827", "Eu me interesso menos pelos temas isolados do que pelo que acontece quando eles se encontram.")}</QuoteCard>
        </div>
        <div className="lg:border-l lg:border-red-brand/40 lg:pl-12">
          <p className="jf-display jf-display-sm">
            {tx("ideias/6b1db2898c", "Não escrevo sobre cinco assuntos.")}<br />
            <Em>{tx("ideias/ed0d5eb200", "Investigo o que acontece quando eles se encontram.")}</Em>
          </p>
          <div className="mt-8 space-y-2 text-ink-700">
            <p>{tx("ideias/ed795745b1", "Os cinco territórios funcionam como filtros, não gavetas exclusivas.")}</p>
            <p>{tx("ideias/a7d04cba07", "Um mesmo texto pode pertencer a mais de um território.")}</p>
            <p className="font-serif text-[20px] font-semibold text-ink-900">{tx("ideias/866c0e9ca7", "Problemas interessantes raramente respeitam categorias.")}</p>
          </div>
          <div className="mt-8 space-y-1 text-ink-700">
            <p>{tx("ideias/4442a71457", "Algumas dessas ideias já estão bastante amadurecidas.")}</p>
            <p>{tx("ideias/9c52ba362b", "Outras continuam mudando.")}</p>
            <p>{tx("ideias/5490961bf2", "E existem perguntas que ainda nem sei exatamente como formular.")}</p>
          </div>
          <Link href={ANCHORS.investigacao} className="mt-6 inline-block font-serif text-[22px] font-semibold uppercase text-red-brand underline decoration-1 underline-offset-4">
            {tx("ideias/bba4fabf40", "Algumas delas estão em investigação.")}</Link>
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
            {tx("ideias/e0e8e18a15", "O que significa continuar autor da própria humanidade num mundo de ferramentas cada vez mais poderosas?")}</p>
          <p>{tx("ideias/dd4a502dbb", "Quanto mais decisões conseguimos automatizar, mais perguntas aparecem.")}</p>
          <p>
            {tx("ideias/a335411fd9", "O que delegamos? O que terceirizamos sem perceber? Que capacidades deixamos de exercitar? Que escolhas ainda precisam permanecer conosco? Quando conveniência começa a virar dependência? E onde termina a ajuda da ferramenta e começa a abdicação de autoria?")}</p>
          <p>
            {tx("ideias/dc90b9d595", "Tenho usado provisoriamente a expressão")} <strong className="font-semibold text-ink-900">{tx("ideias/760a4e6d16", "Soberania Humana")}</strong>{" "}
            {tx("ideias/048e243aad", "para investigar esse território. Mas a ideia ainda está aberta.")}</p>
          <details className="group">
            <summary className="cursor-pointer font-medium text-red-brand">{tx("ideias/255cccb221", "Ler mais")}</summary>
            <div className="mt-2 space-y-2">
              <p>{tx("ideias/323d00e5c1", "Não estou falando de independência absoluta. Nem da fantasia de um indivíduo completamente autônomo.")}</p>
              <p>{tx("ideias/389df42502", "Somos interdependentes. Vivemos dentro de sistemas. Precisamos uns dos outros. Usamos ferramentas.")}</p>
              <p>{tx("ideias/7ca0473c9b", "A questão que me interessa é outra:")}</p>
            </div>
          </details>
          <QBox>
            {tx("ideias/711bf2425e", "como continuar suficientemente presente nas escolhas que constroem aquilo que somos e aquilo que colocamos no mundo?")}</QBox>
          <p className="text-[14px] font-medium text-ink-900">
            {tx("ideias/c1fa288b3c", "Soberania Humana é, hoje, um território de investigação — não uma teoria fechada ou validada.")}</p>
        </div>
      );
    case "capacidades-humanas":
      return (
        <div className={cls}>
          <p>
            {tx("ideias/f7bcf215fa", "Se tecnologia assume partes crescentes daquilo que sabemos fazer, talvez a pergunta não seja apenas: “Quais profissões vão desaparecer?”")}</p>
          <p>
            {tx("ideias/1c37c17365", "Pode ser:")} <strong className="font-semibold text-ink-900">{tx("ideias/df802e6e64", "“Do que nós, humanos, precisaremos nos tornar mais capazes?”")}</strong>
          </p>
          <p>{tx("ideias/ac4daaa1a7", "Hoje, algumas capacidades continuam aparecendo repetidamente no meu trabalho:")}</p>
          <dl className="space-y-1.5 rounded-[var(--jf-radius-sm)] border border-ink-900/10 bg-cream-50 p-4 text-[14px]">
            {CAPACIDADES.map((c) => (
              <div key={c.name}>
                <dt className="inline font-semibold text-ink-900">{c.name}</dt> <dd className="inline">— {c.desc}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[14px] font-medium text-ink-900">
            {tx("ideias/e65ca3f85e", "Esta lista não é fechada. Não é um teste. Não é um modelo psicométrico. Não representa oito “competências oficiais” validadas cientificamente.")}</p>
          <QBox>{tx("ideias/be134afbf3", "É, hoje: um mapa de investigação. E pode mudar.")}</QBox>
        </div>
      );
    case "terceirizando":
      return (
        <div className={cls}>
          <p>{tx("ideias/61b72a761f", "A terceirização de autoria não começa com tecnologia.")}</p>
          <p>
            {tx("ideias/68cb282092", "Também terceirizamos para: algoritmos; opiniões; cultura; família; mercado; chefes; tendências; expectativas; hábitos; medo; o “é assim mesmo”.")}</p>
          <p className="font-serif text-[20px] font-semibold leading-snug text-ink-900">
            {tx("ideias/1787a44c9b", "Quanto das nossas escolhas continua sendo realmente escolhido?")}</p>
          <QBox>
            {tx("ideias/20e1276824", "Quando uma recomendação vira decisão? Quando um comportamento repetido deixa de ser escolha e vira padrão? Quando conforto se transforma em dependência? Quando seguimos um caminho porque o escolhemos e quando simplesmente continuamos nele porque já estávamos lá?")}</QBox>
        </div>
      );
    case "capacidade-responsabilidade":
      return (
        <div className={cls}>
          <p>{tx("ideias/6e66a5f8c3", "Essa investigação nasce de uma tensão:")}</p>
          <p className="font-medium text-ink-900">
            {tx("ideias/177939c352", "capacidade tecnológica cresce mais rapidamente do que nossa maturidade para decidir o que vale a pena fazer com ela?")}</p>
          <p>{tx("ideias/1cebc2174e", "Não como afirmação moralista. Como pergunta.")}</p>
          <p>
            {tx("ideias/e56d76699b", "Porque poder fazer algo cria novos campos de escolha. Editar genes. Automatizar decisões. Gerar conteúdo em escala. Simular pessoas. Prever comportamentos. Substituir determinadas tarefas. Ampliar vigilância. Personalizar experiências.")}</p>
          <p>
            {tx("ideias/6ae824d5d7", "A ferramenta responde:")} <strong className="font-semibold text-ink-900">{tx("ideias/970c292b50", "“É possível.”")}</strong>
          </p>
          <QBox lead={tx("ideias/aab8668615", "Mas alguém ainda precisa responder")}>
            {tx("ideias/32b435b07b", "“Devemos?” “Para quê?” “Sob quais critérios?” “Com quais consequências?” “Quem responde por isso?”")}</QBox>
          <p>
            {tx("ideias/6efcb9524c", "É aqui que a frase")}{" "}
            <strong className="font-semibold text-ink-900">
              {tx("ideias/a635656566", "Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas")}</strong>{" "}
            {tx("ideias/e856a67efb", "deixa de ser apenas uma frase e vira")} <strong className="font-semibold text-red-brand">{tx("ideias/f5c7500eb5", "programa de investigação")}</strong>.
          </p>
        </div>
      );
    default:
      return (
        <div className={cls}>
          <p className="font-medium text-ink-900">{tx("ideias/d8d949eea0", "“Humanidade” pode facilmente virar um slogan vazio.")}</p>
          <p>{tx("ideias/2f128042f5", "Humano também é: contradição; erro; preconceito; violência; ego; irracionalidade; limite.")}</p>
          <p>
            {tx("ideias/27de1f25c6", "Então “mais humanos” não pode significar: “humanos são naturalmente bons e tecnologia é ruim.” Não é isso.")}</p>
          <QBox lead={tx("ideias/9c98db4a87", "A pergunta é")}>
            {tx("ideias/1ad03e9d84", "Que partes da nossa humanidade queremos cultivar deliberadamente quando nossas ferramentas ampliam tanto nossa capacidade de agir?")}</QBox>
          <p>
            {tx("ideias/a9d3f66d20", "Discernimento? Empatia? Responsabilidade? Imaginação? Cuidado? Autoria? Capacidade de conviver com ambiguidade?")}</p>
          <p>{tx("ideias/fc65df6b5c", "Esse é um território que ainda precisa de muita investigação.")}</p>
        </div>
      );
  }
}

export function IdeiasInvestigacao() {
  return (
    <Section id="em-investigacao" label={tx("ideias/c87d029ab6", "Em investigação")}>
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr_0.85fr] lg:gap-8">
        <div>
          <BrushLabel>{tx("ideias/b2546f7e73", "Em investigação")}</BrushLabel>
          <Display size="md" className="mt-6">
            {tx("ideias/f389d16de5", "Algumas ideias ainda não estão prontas.")}{" "}
            <Em>{tx("ideias/720766c4de", "E eu não quero apressá-las só para poder dar um nome.")}</Em>
          </Display>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>
              {tx("ideias/d8dfea3f73", "Existem perguntas que continuam voltando. Ainda não sei exatamente onde elas terminam. Algumas talvez se tornem conceitos mais sólidos. Outras podem mudar completamente. Algumas talvez desapareçam quando encontrarem evidências melhores.")}</p>
            <p>{tx("ideias/0d9be23501", "Mas, enquanto continuam produzindo boas perguntas, quero mantê-las abertas.")}</p>
            <p className="font-semibold text-ink-900">{tx("ideias/b7c51a6af1", "Este é o espaço das ideias que ainda estão sendo construídas.")}</p>
          </Body>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-sm">
          <Photo src={img("ideias/720504aa2b", "/images/ensaio/ju-leitura-anotacoes.webp")} alt={tx("ideias/d4680cd420", "Juliana lendo um livro e fazendo anotações em um caderno.")} sizes="(min-width:1024px) 30vw, 100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
          <StickyNote className="absolute left-4 top-4" rotate={-5} tone="paper">
            {tx("ideias/4ff22283e0", "Ainda não sei exatamente onde elas terminam.")}</StickyNote>
        </div>
        <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/60 p-7">
          <p className="text-[15px] text-ink-700">{tx("ideias/55c101b430", "“Em investigação” não significa:")}</p>
          <ul className="mt-2 space-y-1 text-[15px] text-ink-700">
            <li>{tx("ideias/6d64c355e2", "“estou inventando uma teoria”.")}</li>
            <li>{tx("ideias/ffd2ae9ac1", "Nem: “isso já é uma metodologia proprietária”.")}</li>
            <li>{tx("ideias/7d2508d339", "Nem: “encontrei uma nova ciência sobre comportamento humano”.")}</li>
          </ul>
          <p className="mt-4 text-[15px] text-ink-700">{tx("ideias/e148cc0b74", "Significa:")}</p>
          <p className="mt-1 font-serif text-[20px] font-semibold leading-snug">
            {tx("ideias/36e57ee705", "há uma pergunta relevante, algum repertório acumulado, hipóteses surgindo e trabalho ainda por fazer.")}</p>
          <p className="mt-4 text-[14px] text-ink-700">
            {tx("ideias/66c3e93f59", "Leitura. Pesquisa. Conversa. Contradição. Experiência. Dados. Autores. Campos de conhecimento diferentes. E tempo.")}</p>
          <p className="mt-5 font-serif text-[18px] font-semibold uppercase leading-snug text-red-brand">
            {tx("ideias/2c635023e3", "Não quero dar a uma ideia mais certeza do que ela ainda tem.")}</p>
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
          <h3 className="jf-eyebrow shrink-0 text-[13px] text-ink-900">{tx("ideias/a6e48f35cd", "Legenda epistemológica")}</h3>
          <span className="h-px flex-1 bg-ink-900/20" aria-hidden />
        </div>
        <EpistemicLegend className="mt-6" />
      </Container>

      <Container className="mt-16 grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.1fr_1fr_auto] lg:items-start">
        <div>
          <QuoteCard>{tx("ideias/c023b4e795", "Não quero transformar toda boa pergunta numa teoria só porque ela tem um nome bonito.")}</QuoteCard>
          <p className="jf-display jf-display-sm mt-8">
            {tx("ideias/8250e6b392", "Rigor no subsolo.")} <Em>{tx("ideias/487deef0d4", "Clareza no palco.")}</Em>
          </p>
          <p className="mt-4 text-ink-700">{tx("ideias/127b99b70a", "No palco e no conteúdo, a experiência precisa ser clara.")}</p>
          <p className="mt-1 text-ink-700">
            {tx("ideias/44154bfcf9", "Mas por baixo: pesquisa; referências; contradição; checagem; questionamento; origem das ideias; limites do que sabemos.")}</p>
        </div>
        <div className="text-ink-700">
          <Title as="h3" className="uppercase text-ink-900">
            {tx("ideias/ac47ef2df0", "Acompanhe as perguntas enquanto elas ainda estão abertas.")}</Title>
          <p className="mt-4">
            {tx("ideias/7ebdfa04ed", "Algumas dessas perguntas podem se tornar parte importante do meu trabalho. Outras talvez não sobrevivam à investigação. E isso está tudo bem.")}</p>
          <p className="mt-6 font-serif text-[22px] font-semibold leading-snug text-ink-900">
            {tx("ideias/18728e7ea7", "Uma ideia não precisa estar certa para sempre.")}<br />
            <Em>{tx("ideias/c02ea8ac28", "Precisa ser honesta sobre o lugar em que está agora.")}</Em>
          </p>
        </div>
        <ButtonLink href={`#investigacao-${INVESTIGACOES[0].id}`}>{tx("ideias/73c3eb8c18", "Leia ideias em investigação")}</ButtonLink>
      </Container>
    </Section>
  );
}
