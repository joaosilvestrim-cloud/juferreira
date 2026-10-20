import { getReadingRefs } from "@/lib/content";
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

import { tx, img, lazy } from "@/lib/editable";
/* ───────────────────────── BLOCO 6 — UMA TERÇA-FEIRA QUALQUER ───────────────────────── */
const CHEGA = lazy(() => ([
  { t: tx("ideias/fe7fca523b", "Uma ideia"), d: tx("ideias/5b737af138", "Alguma coisa que estou tentando compreender melhor.") },
  { t: tx("ideias/49be3380a6", "Uma história"), d: tx("ideias/f4e68628fa", "Algo vivido, observado, ouvido ou lembrado que mudou a forma como estou enxergando uma pergunta.") },
  { t: tx("ideias/708c61c52a", "Uma tensão"), d: tx("ideias/0c05558e3a", "Duas coisas que parecem contraditórias e talvez precisem permanecer em conversa.") },
  { t: tx("ideias/cb736c5a19", "Uma pergunta"), d: tx("ideias/a92e74a189", "Não necessariamente para responder naquele momento. Talvez apenas para carregar durante alguns dias.") },
  {
    t: tx("ideias/ea2b0a97af", "Um movimento"),
    pre: tx("ideias/39d18b4e3d", "E, algumas vezes:"),
    d: tx("ideias/74024f9292", "Algo pequeno que pode mudar aquilo que acontece depois. Não como “desafio da semana”. Só quando fizer sentido."),
  },
]));

export function IdeiasTerca() {
  return (
    <Section id="uma-terca-feira-qualquer" tone="cream" label={tx("ideias/4e2442595c", "Uma Terça-feira Qualquer")}>
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr_0.95fr] lg:gap-8">
        <div>
          <BrushLabel>{tx("ideias/f057e78188", "Uma terça-feira qualquer")}</BrushLabel>
          <Display size="md" className="mt-6">
            {tx("ideias/3ccf112055", "Nem toda ideia precisa de um ensaio.")} <Em>{tx("ideias/efde687bf8", "Algumas cabem numa terça-feira qualquer.")}</Em>
          </Display>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>{tx("ideias/1b660bca03", "Há perguntas que precisam de pesquisa. Outras pedem páginas e páginas.")}</p>
            <p>
              {tx("ideias/93373bef8f", "Mas algumas aparecem no meio do dia. Numa reunião. Numa conversa. Enquanto levo minhas filhas para algum lugar. Depois de uma decisão que não saiu como eu esperava. Num comentário que ficou na cabeça.")}</p>
            <p>
              {tx("ideias/39d515f5ea", "Num daqueles momentos em que a vida parece absolutamente comum e, por alguma razão, alguma coisa faz você enxergá-la de outro jeito.")}</p>
            <p>
              {tx("ideias/3d9c3e3585", "Foi para essas conversas que nasceu:")} <strong className="font-semibold text-ink-900">{tx("ideias/0ce7ca7586", "Uma Terça-feira Qualquer")}</strong>.
            </p>
          </Body>
        </div>
        <div className="relative min-h-[380px] overflow-hidden rounded-sm lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("ideias/efa01d71c0", "/images/ensaio/home-05-escrita-vertical.webp")}
            alt={tx("ideias/cb7566b957", "Juliana com caderno, caneta e café à mesa, em retrato vertical.")}
            sizes="(min-width:1024px) 32vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_40%]"
          />
          <StickyNote className="absolute left-4 bottom-4" rotate={-5} tone="paper">
            {tx("ideias/40d1824d30", "Porque futuro também se constrói no meio da vida real.")}</StickyNote>
        </div>
        <div className="rounded-[var(--jf-radius-md)] bg-blush-100/70 p-7 lg:p-8">
          <HandNote className="text-ink-900" rotate={-2}>
            {tx("ideias/ddd6debd96", "O futuro também se constrói no meio da vida real.")}</HandNote>
          <p className="mt-3 text-ink-700">{tx("ideias/cd26fdbbff", "Talvez valha a pena prestar atenção enquanto isso acontece.")}</p>
          <h3 className="mt-8 text-[17px] font-semibold uppercase tracking-wide">{tx("ideias/f282f85911", "Receba Uma Terça-feira Qualquer")}</h3>
          <p className="mt-2 text-[15px] text-ink-700">
            {tx("ideias/bf54ec19f5", "Uma vez por semana, uma ideia, uma história, uma tensão ou uma pergunta para continuar pensando depois.")}</p>
          <NewsletterForm className="mt-6" />
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-2">
        <Body className="text-ink-700 [&_p+p]:mt-2">
          <p>{tx("ideias/f61c530d86", "Eu não queria criar uma newsletter para “resumir os conteúdos da semana”.")}</p>
          <p>{tx("ideias/14a28da939", "Nem uma lista de tendências. Nem uma sequência de lições sobre como viver melhor.")}</p>
          <p className="font-medium text-ink-900">{tx("ideias/b640927c7a", "Queria um espaço mais próximo.")}</p>
          <p>
            {tx("ideias/8512aa0b59", "Uma conversa recorrente sobre aquilo que estamos construindo enquanto: trabalhamos; criamos filhos; lideramos; erramos; tomamos decisões; adiamos outras; mudamos de ideia; recomeçamos; e simplesmente tentamos dar conta.")}</p>
          <p>{tx("ideias/fad38e8530", "Porque é fácil pensar no futuro como uma coisa distante. Mas:")}</p>
        </Body>
        <p className="jf-display jf-display-sm self-center">
          {tx("ideias/d543cf28f1", "O futuro também está sendo construído enquanto você responde um e-mail numa")} <Em>{tx("ideias/c8b948bd19", "terça-feira às 16h17.")}</Em>
        </p>
      </Container>

      <Container className="mt-16">
        <BrushLabel className="text-[20px]">{tx("ideias/c5e6ab2995", "O que chega numa terça-feira qualquer?")}</BrushLabel>
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
          <p className="jf-eyebrow text-red-brand">{tx("ideias/7925c4f9b8", "Ideias")}</p>
          <p className="mt-3 font-serif text-[26px] leading-tight">{tx("ideias/717659ad1c", "É onde uma pergunta pode ganhar profundidade.")}</p>
          <p className="mt-3 text-[15px] text-ink-700">{tx("ideias/f942582755", "Pesquisa. Contradição. Repertório. Tempo. Ensaio.")}</p>
        </div>
        <div className="md:pl-10">
          <p className="jf-eyebrow text-red-brand">{tx("ideias/07b5ee31da", "Uma Terça-feira Qualquer")}</p>
          <p className="mt-3 font-serif text-[26px] leading-tight">{tx("ideias/948845b055", "É onde o pensamento encontra o cotidiano.")}</p>
          <p className="mt-3 text-[15px] text-ink-700">
            {tx("ideias/7f7a9c9462", "Mais próxima. Mais recorrente. Mais pessoal. Às vezes menos conclusiva. Às vezes mais simples. Às vezes uma história que não precisava virar artigo.")}</p>
        </div>
      </Container>
      <Container className="mt-12">
        <p className="jf-display jf-display-sm max-w-[980px]">
          {tx("ideias/bde0a7bfe0", "Ideias é onde eu aprofundo.")} <Em>{tx("ideias/b64af219c3", "Uma Terça-feira Qualquer é onde eu continuo a conversa.")}</Em>
        </p>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-3">
        <div>
          <Body className="text-ink-700">
            <p>
              {tx("ideias/4655114556", "Algumas terças-feiras serão sobre futuros. Outras sobre tecnologia. Algumas sobre maternidade. Liderança. Trabalho. Escolhas. Empresas. Transformação. Ou alguma coisa aparentemente pequena que me fez parar.")}</p>
          </Body>
          <HandNote className="mt-6 text-red-brand" rotate={-2}>
            {tx("ideias/2eff6ee36b", "O assunto muda. A pergunta por baixo dele nem tanto.")}</HandNote>
          <QBox className="mt-5">{tx("ideias/9a712bfa71", "O que estamos construindo enquanto vivemos?")}</QBox>
        </div>
        <div>
          <Title as="h3" className="uppercase">
            {tx("ideias/fc9afa3051", "O que ela não é")}</Title>
          <ul className="mt-4 space-y-2 font-medium">
            <li>{tx("ideias/0efc6323ff", "Não é uma newsletter de tendências.")}</li>
            <li>{tx("ideias/0888e4ccda", "Não é uma lista de produtividade.")}</li>
            <li>{tx("ideias/9e01b28640", "Não é uma aula semanal.")}</li>
            <li>{tx("ideias/3e528ef96d", "Não é um resumo do que publiquei.")}</li>
          </ul>
          <p className="mt-4 text-ink-700">{tx("ideias/80797a0d60", "É:")}</p>
          <p className="mt-1 font-serif text-[21px] font-semibold leading-snug">
            {tx("ideias/b08d9065c2", "um espaço recorrente para perceber o presente com um pouco mais de atenção.")}</p>
        </div>
        <div>
          <Title as="h3" className="uppercase">
            {tx("ideias/f7a2b4edba", "Por que terça-feira?")}</Title>
          <Body className="mt-4 text-ink-700 [&_p+p]:mt-2">
            <p>{tx("ideias/2328bb9ff5", "Porque a vida raramente acontece apenas nos grandes marcos. Ela acontece no meio.")}</p>
            <p>
              {tx("ideias/acf4324efc", "Quando a semana já começou, mas ainda está longe de terminar. Quando há trabalho para fazer. Problemas para resolver. Gente precisando da gente. E nenhuma trilha épica tocando ao fundo.")}</p>
            <p className="font-semibold text-ink-900">{tx("ideias/d82c051fa3", "Uma terça-feira qualquer.")}</p>
          </Body>
        </div>
      </Container>

      <Container className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="jf-display jf-display-sm">{tx("ideias/3a46e4fb62", "O futuro também se constrói no meio da vida real.")}</p>
          <p className="mt-3 font-serif text-[20px] italic text-ink-800">{tx("ideias/00c65346d4", "Talvez valha a pena prestar atenção enquanto isso acontece.")}</p>
          <HandNote className="mt-10 text-ink-900 text-[clamp(22px,1.8vw,28px)]" rotate={-1}>
            {tx("ideias/9f0d6c86ea", "Às vezes, uma ideia muda alguma coisa.")}<br />
            {tx("ideias/baeb950e51", "Às vezes, ela só faz você prestar mais atenção.")}</HandNote>
          <Stroke shape="underline" className="mt-1 h-3 w-[60%]" width={2.5} />
          <p className="mt-4 font-medium">{tx("ideias/e76946751b", "As duas coisas já podem valer a terça-feira.")}</p>
        </div>
        <div className="text-ink-700 lg:border-l lg:border-red-brand/40 lg:pl-10">
          <p>{tx("ideias/53d10e8ab1", "Algumas das perguntas que aparecem numa terça-feira acabam crescendo.")}</p>
          <p className="mt-2">
            {tx("ideias/f9d2e177b9", "Quando pedem mais tempo, podem virar ensaio em")} <strong className="font-semibold text-ink-900">{tx("ideias/7361d67df1", "Ideias")}</strong>.
          </p>
          <p className="mt-2">{tx("ideias/5a8bf716a9", "Outras permanecem exatamente onde nasceram.")}</p>
          <p className="mt-2">{tx("ideias/b82fdb7523", "E está tudo bem.")}</p>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 7 — LEITURAS, REFERÊNCIAS E REPERTÓRIO ───────────────────────── */
export async function IdeiasRepertorio() {
  // referências cadastradas no painel; sem cadastro, mostra os espaços "a definir"
  const refs = await getReadingRefs();
  const mesaDb = refs.filter((r) => r.section === "mesa");
  const voltamDb = refs.filter((r) => r.section === "voltam");
  const mesa = mesaDb.length
    ? mesaDb.slice(0, 3).map((r, i) => ({ id: `db-${r.id}`, placeholder: false, title: r.title, author: r.author ?? "", note: r.note ?? "", img: r.cover ?? NA_MESA_AGORA[i % NA_MESA_AGORA.length].img, link: r.link }))
    : NA_MESA_AGORA.map((r) => ({ ...r, link: null as string | null }));
  const voltam = voltamDb.length
    ? voltamDb.map((r) => ({ id: `db-${r.id}`, placeholder: false, title: r.title, author: r.author ?? "", note: r.note ?? "", link: r.link }))
    : REFERENCIAS_QUE_VOLTAM.map((r) => ({ ...r, link: null as string | null }));
  return (
    <Section id="repertorio" label={tx("ideias/b04ee71dac", "Leituras, referências e repertório")}>
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.05fr_0.9fr] lg:gap-8">
        <div>
          <BrushLabel>{tx("ideias/0dcb8d5ae8", "Leituras, referências e repertório")}</BrushLabel>
          <Display size="md" className="mt-6">
            {tx("ideias/8025384cbd", "Nenhuma ideia")} <Em>{tx("ideias/fe9a1c5e30", "pensa sozinha.")}</Em>
          </Display>
          <p className="mt-6 font-serif text-[clamp(20px,1.7vw,24px)] leading-snug">
            {tx("ideias/2799a46eed", "Eu também sou feita das coisas que leio, escuto, questiono e carrego comigo.")}</p>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-sm">
          <Photo src={img("ideias/4fea4fc7a9", "/images/ensaio/ju-leitura-anotacoes.webp")} alt={tx("ideias/9108c747fa", "Juliana lendo um livro e fazendo anotações em um caderno.")} sizes="(min-width:1024px) 32vw, 100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
        </div>
        <div className="rounded-[var(--jf-radius-md)] bg-blush-100/70 p-7">
          <Body className="text-ink-700 [&_p+p]:mt-2">
            <p>{tx("ideias/277168abf7", "Eu leio para aprender. Mas também para ser contrariada.")}</p>
            <p>{tx("ideias/a254e076d1", "Para encontrar palavras para alguma coisa que eu ainda não sabia nomear.")}</p>
            <p>{tx("ideias/03a30afac1", "Para descobrir que uma ideia que parecia minha já estava sendo investigada há décadas.")}</p>
            <p>{tx("ideias/734cad8e95", "Para perceber onde minha experiência individual é pequena demais para sustentar uma conclusão.")}</p>
            <p>{tx("ideias/23cd1b9942", "E, às vezes, para terminar um livro com mais perguntas do que quando comecei.")}</p>
          </Body>
          <p className="mt-5 font-serif text-[21px] font-semibold leading-snug">{tx("ideias/bca95ede92", "Pensar com rigor também é reconhecer de onde as ideias vêm.")}</p>
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
        {/* NA MESA AGORA — 3 referências, área que gira com mais frequência. PLACEHOLDER. */}
        <div id="na-mesa-agora" className="lg:pr-8" data-placeholder={mesaDb.length ? undefined : "referencias"}>
          <Title as="h3" className="uppercase">
            {tx("ideias/aa89e308ba", "Na mesa agora")}</Title>
          <p className="mt-1 text-[15px] text-ink-700">{tx("ideias/e0158e845b", "O que estou lendo, estudando ou investigando neste momento.")}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {mesa.map((r) => (
              <li key={r.id} className={`overflow-hidden rounded-[var(--jf-radius-sm)] border bg-cream-50 ${r.placeholder ? "border-dashed border-ink-900/30" : "border-ink-900/10"}`}>
                {r.img && (
                  <div className="relative aspect-[5/3]">
                    <Image src={r.img} alt="" fill sizes="(min-width:640px) 14vw, 100vw" className={`object-cover ${r.placeholder ? "opacity-80 grayscale-[30%]" : ""}`} style={{ objectPosition: photoPosition(r.img) }} />
                  </div>
                )}
                <div className="p-4">
                  {r.placeholder && <p className="jf-eyebrow text-[10px] text-red-brand">{tx("ideias/2f243be969", "Placeholder")}</p>}
                  <p className="mt-1 font-serif text-[19px] leading-tight">
                    {r.link ? (
                      <a href={r.link} target="_blank" rel="noopener noreferrer" className="hover:text-red-brand">
                        {r.title}
                      </a>
                    ) : (
                      r.title
                    )}
                  </p>
                  <p className="text-[13px] text-ink-500">{r.author}</p>
                  <p className="mt-2 text-[13px] italic leading-snug text-ink-700">{r.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-ink-700">
            {tx("ideias/ffb3a3dd3f", "Não é resenha. É:")} <strong className="font-semibold text-ink-900">{tx("ideias/5f2d8ab7b5", "“Isso está fazendo alguma coisa no meu pensamento.”")}</strong>
          </p>
        </div>

        <div className="lg:px-8" data-placeholder={voltamDb.length ? undefined : "referencias"}>
          <Title as="h3" className="uppercase">
            {tx("ideias/91990c16b6", "Referências que voltam")}</Title>
          <p className="mt-1 text-[15px] text-ink-700">{tx("ideias/585a0a3707", "Algumas ideias não ficam na estante. Continuam reaparecendo.")}</p>
          <ul className="mt-6 space-y-2">
            {voltam.map((r, i) => (
              <li key={r.id} className={`flex items-baseline gap-3 rounded-[var(--jf-radius-sm)] border px-4 py-3 ${r.placeholder ? "border-dashed border-ink-900/30" : "border-ink-900/10 bg-cream-50"}`}>
                <span className="font-serif text-[18px] text-red-brand">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-[18px]">{r.title}</span>
                <span className="ml-auto text-[12px] text-ink-500">{r.author}</span>
              </li>
            ))}
          </ul>
          <Body className="mt-6 text-[15px] text-ink-700 [&_p+p]:mt-2">
            <p>
              {tx("ideias/dc62fa131b", "Existem livros que terminam quando fechamos a última página. E existem referências que continuam voltando.")}</p>
            <p>
              {tx("ideias/2cae36df60", "Às vezes porque ofereceram uma linguagem. Às vezes porque abriram uma pergunta. Às vezes porque discordar delas me ajudou a pensar melhor.")}</p>
          </Body>
          <p className="mt-4 font-serif text-[20px] font-semibold leading-snug">
            {tx("ideias/f19e85375a", "Uma referência não precisa virar uma crença para se tornar importante.")}</p>
        </div>

        <div className="lg:pl-8">
          <Title as="h3" className="uppercase">
            {tx("ideias/17562b265e", "Trilhas de investigação")}</Title>
          <p className="mt-1 text-[15px] text-ink-700">{tx("ideias/b550f225d2", "Quando uma pergunta começa a puxar outras.")}</p>
          <p className="mt-3 text-[15px] text-ink-700">
            {tx("ideias/eaecb9f352", "Em vez de apenas listar livros, o repertório é organizado em torno de perguntas.")}</p>
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
          <p className="jf-display jf-display-sm">{tx("ideias/449b433a6e", "Ler não é colecionar confirmação.")}</p>
          <Body className="mt-5 text-ink-700 [&_p+p]:mt-2">
            <p>
              {tx("ideias/3f2f215c2d", "Às vezes uma referência apoia uma hipótese. Às vezes a enfraquece. Às vezes mostra que estou usando uma palavra de maneira imprecisa. Às vezes revela um campo inteiro que eu ainda preciso estudar.")}</p>
            <p>{tx("ideias/7d8be2feb9", "E algumas vezes me obriga a abandonar uma ideia da qual eu gostava.")}</p>
            <p className="font-semibold text-ink-900">{tx("ideias/35fe8aca9a", "Isso também é parte do trabalho.")}</p>
          </Body>
        </div>
        <div>
          <Title as="h3" className="uppercase">
            {tx("ideias/4dcca28a26", "Nem tudo que me influencia é meu.")}</Title>
          <Body className="mt-5 text-ink-700 [&_p+p]:mt-2">
            <p>
              {tx("ideias/1d405f73a3", "Algumas ideias vêm de campos consolidados de conhecimento. Outras vêm de autores específicos. Algumas são sínteses que estou construindo a partir do encontro entre referências diferentes. Outras nascem da experiência e depois encontram linguagem em pesquisas que já existiam.")}</p>
            <p>
              {tx("ideias/a52ab4df13", "Por isso, quando uma ideia tem origem,")} <strong className="font-semibold text-ink-900">{tx("ideias/4bcba7e73c", "essa origem importa")}</strong>.
            </p>
            <p>{tx("ideias/0a2a28a994", "Meu interesse não está em parecer ter inventado tudo. Está em compreender o suficiente para saber:")}</p>
          </Body>
          <QBox className="mt-4">
            {tx("ideias/ea89e0256a", "o que estou herdando, o que estou reinterpretando, o que estou conectando e o que talvez esteja propondo de novo.")}</QBox>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 border-t border-red-brand/40 pt-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <span className="jf-display hidden text-[96px] leading-none text-red-brand lg:block" aria-hidden>
            “
          </span>
          <p className="jf-display jf-display-sm">
            {tx("ideias/f4dba347bb", "Repertório não serve para fazer uma ideia parecer mais inteligente.")}<br />
            <Em>{tx("ideias/5b9e15c8d9", "Serve para impedir que ela fique pequena demais.")}</Em>
          </p>
          <ButtonLink href="#na-mesa-agora">{tx("ideias/24790e6e09", "Explore leituras e referências")}</ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="text-ink-700">
            <p>{tx("ideias/0382c5f357", "Não é uma revista de resenhas.")}</p>
            <p className="font-medium text-ink-900">{tx("ideias/17e835e375", "É uma janela para o repertório vivo da Ju.")}</p>
          </div>
          <div>
            <p className="font-serif text-[20px] italic leading-snug text-ink-800">
              {tx("ideias/827e2b0b2f", "Às vezes, uma leitura me dá uma resposta. Mais frequentemente, muda a qualidade da pergunta.")}</p>
            <p className="mt-2 text-[15px] font-semibold uppercase tracking-wide">
              {tx("ideias/166312f082", "Talvez essa seja uma das melhores coisas que um bom repertório pode fazer.")}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 8 — O PENSAMENTO ENCONTRA O MUNDO REAL ───────────────────────── */
const ARENAS = lazy(() => ([
  {
    t: tx("ideias/673cc91794", "No trabalho"),
    img: img("ideias/27c09d4dee", "/images/ensaio/home-04d-conversa-equipe.webp"),
    d: tx("ideias/85553b2bec", "Estratégia, tecnologia, vendas, liderança, clientes, decisões e consequências. É onde conceitos como transformação, capacidade e direção deixam rapidamente de ser abstratos."),
  },
  {
    t: tx("ideias/0ec9d0271a", "Nas organizações"),
    img: img("ideias/0e1a014b05", "/images/ensaio/palestras-workshop-01.webp"),
    d: tx("ideias/9d8a873463", "Uma pergunta pode parecer interessante intelectualmente e ganhar outra dimensão quando vinte pessoas precisam tomar uma decisão a partir dela."),
  },
  {
    t: tx("ideias/21b558e089", "No palco"),
    img: img("ideias/1f9504063e", "/images/ensaio/palestras-palco-frente.webp"),
    d: tx("ideias/a86e090b84", "Quando uma ideia precisa ser clara o suficiente para ser compreendida sem perder aquilo que a torna complexa."),
  },
  {
    t: tx("ideias/68a6c62283", "Na vida"),
    img: img("ideias/582822bbe3", "/images/ensaio/pessoas-cafe-manha.webp"),
    d: tx("ideias/42d8e57793", "Maternidade. Relacionamentos. Rotina. Cansaço. Escolhas. Recomeços. A terça-feira qualquer onde qualquer ideia sobre humanidade precisa continuar fazendo sentido."),
  },
]));

const LOOP = lazy(() => ([tx("ideias/657ccbd3e9", "Pensar."), tx("ideias/b660fd9182", "Experimentar."), tx("ideias/4f6a4a210d", "Encontrar limite."), tx("ideias/7386301fca", "Voltar à pergunta."), tx("ideias/57c663b13d", "Mudar alguma coisa."), tx("ideias/4d09fe281d", "Pensar de novo.")]));

export function IdeiasMundoReal() {
  return (
    <Section tone="cream" label={tx("ideias/bf2e978b7b", "O pensamento encontra o mundo real")}>
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr_0.9fr] lg:gap-8">
        <div>
          <BrushLabel>{tx("ideias/74a59ec51c", "O pensamento encontra o mundo real")}</BrushLabel>
          <Display size="md" className="mt-6">
            {tx("ideias/c3b85f6d3a", "Uma ideia muda quando encontra")} <Em>{tx("ideias/fc22584668", "o mundo.")}</Em>
          </Display>
          <Body className="mt-6 text-ink-700 [&_p+p]:mt-2">
            <p>
              {tx("ideias/5952051b51", "Uma ideia pode parecer impecável no caderno. Uma tese pode soar convincente numa página. Uma pergunta pode parecer muito clara enquanto ainda está protegida da realidade.")}</p>
            <p>
              {tx("ideias/710e0792c3", "Até encontrar: uma pessoa que discorda; um cliente que não quer; uma equipe que não consegue executar; uma tecnologia que muda o problema; um limite que não estava previsto; um resultado inesperado; ou simplesmente a vida acontecendo de um jeito diferente do planejado.")}</p>
            <p className="font-semibold text-ink-900">{tx("ideias/1bb7818ac2", "É nesse encontro que o pensamento fica mais interessante para mim.")}</p>
          </Body>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-sm">
          <Photo src={img("ideias/6ce014a307", "/images/ensaio/home-05-escrita-vertical.webp")} alt={tx("ideias/09f8679a13", "Juliana com caderno, caneta e café à mesa, em retrato vertical.")} sizes="(min-width:1024px) 32vw, 100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
        </div>
        <QuoteCard className="self-start">
          {tx("ideias/b17c4e6576", "Não me interessa uma ideia que só funciona enquanto ninguém precisa viver com as consequências dela.")}</QuoteCard>
      </Container>

      <Container className="mt-14 grid gap-10 lg:grid-cols-2">
        <Body className="text-ink-700 [&_p+p]:mt-2">
          <p>{tx("ideias/4947981842", "Escrever, para mim, não é ficar do lado de fora observando a vida.")}</p>
          <p>
            {tx("ideias/8d0ed9b6de", "Eu continuo trabalhando. Construindo empresas e projetos. Conversando com clientes. Lidando com tecnologia. Tomando decisões. Criando minhas filhas. Errando. Mudando de opinião. Vendo algumas hipóteses funcionarem e outras desmontarem diante da realidade.")}</p>
          <p>{tx("ideias/884ffbec56", "E isso constantemente interfere naquilo que penso.")}</p>
        </Body>
        <Body className="text-ink-700 [&_p+p]:mt-2">
          <p>
            {tx("ideias/454adac033", "Às vezes, uma experiência confirma uma ideia. Às vezes, complica. Às vezes, mostra que eu estava olhando para a pergunta errada.")}</p>
          <p>
            {tx("ideias/00d6b4fd5a", "Às vezes, o mundo devolve:")} <strong className="font-semibold text-ink-900">{tx("ideias/beee5a4807", "“não é tão simples assim.”")}</strong>
          </p>
          <p>{tx("ideias/e61d31c9a3", "E, para mim, essa é uma resposta extremamente útil.")}</p>
        </Body>
      </Container>

      <Container className="mt-16">
        <div className="flex flex-col items-center text-center">
          <p className="jf-hand rounded-full border-2 border-red-brand px-8 py-4 text-[30px] uppercase leading-tight">
            {tx("ideias/39c74b3555", "Pensamento")} <span aria-label="e">↔</span> {tx("ideias/ff318f7295", "Mundo real")}</p>
          <div className="mt-6 max-w-[760px] space-y-1 text-ink-700">
            <p>{tx("ideias/b3cb67f11a", "Uma pergunta pode nascer numa empresa e virar artigo.")}</p>
            <p>{tx("ideias/a8339a70c6", "Um livro pode alterar a maneira como eu conduzo uma conversa com uma liderança.")}</p>
            <p>{tx("ideias/38272fa827", "Uma experiência com minhas filhas pode abrir uma investigação sobre futuro.")}</p>
            <p>{tx("ideias/d7484c9fb1", "Uma questão que aparece numa palestra pode continuar trabalhando durante meses.")}</p>
            <p>{tx("ideias/db068c2c98", "Um problema de negócio pode desmontar uma ideia bonita sobre transformação.")}</p>
            <p>{tx("ideias/4e1f9d7217", "Um texto pode entrar numa sala e voltar cheio de novas perguntas.")}</p>
          </div>
          <p className="jf-display jf-display-sm mt-8">
            {tx("ideias/d061f6b02f", "Não existe uma linha de produção.")} <Em>{tx("ideias/a39e9cf897", "Existe circulação.")}</Em>
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
            {tx("ideias/dd6a5144eb", "Possibilidade sem realidade vira fantasia. Realidade sem possibilidade vira resignação.")}</p>
        </div>
        <div className="text-[15px] text-ink-700 lg:px-8">
          <p>{tx("ideias/8827adaba9", "Não quero apenas perguntar: “O que é?” Nem apenas: “O que poderia ser?”")}</p>
          <p className="mt-2">
            {tx("ideias/6a4e569f41", "Quero manter as duas coisas em conversa:")}{" "}
            <strong className="font-semibold text-ink-900">{tx("ideias/0d1357dfce", "o que existe + o que ainda pode existir.")}</strong>
          </p>
          <p className="mt-2">{tx("ideias/a3b2865e5f", "Porque é nesse espaço que uma ideia pode simultaneamente ser imaginativa e responsável.")}</p>
        </div>
        <div className="text-[15px] text-ink-700 lg:pl-8">
          <p>
            {tx("ideias/8568bf1230", "Às vezes, pesquisa muda a forma como interpreto uma experiência. Às vezes, experiência muda a forma como leio uma pesquisa. E, às vezes, as duas entram em conflito.")}</p>
          <p className="mt-2 font-semibold uppercase text-red-brand">{tx("ideias/2b285a40f5", "Esse conflito também é pensamento.")}</p>
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <Title as="h3" className="uppercase">
            {tx("ideias/07d7b51678", "A realidade é uma forma de contradição.")}</Title>
          <p className="mt-4 text-ink-700">
            {tx("ideias/d4451146a9", "Ela coloca limites. Introduz outras pessoas. Produz consequências. Mostra coisas que o modelo não previa. E obriga uma ideia a ganhar nuance.")}</p>
          <QBox className="mt-5">
            {tx("ideias/59caf1e690", "Uma ideia não fica menos sofisticada porque precisa sobreviver ao cotidiano. Talvez fique mais.")}</QBox>
        </div>
        <div className="text-ink-700">
          <p>{tx("ideias/79fea032df", "Uma investigação pode permanecer apenas como investigação.")}</p>
          <p className="mt-2">{tx("ideias/90c88fd941", "Pode virar:")}</p>
          <ul className="mt-2 space-y-1">
            <li>
              {tx("ideias/006696995e", "um ensaio em")} <strong className="font-semibold text-ink-900">{tx("ideias/840da43886", "Ideias")}</strong>;
            </li>
            <li>
              {tx("ideias/a22a5dec2b", "uma edição de")} <strong className="font-semibold text-ink-900">{tx("ideias/d2cdaccaa5", "Uma Terça-feira Qualquer")}</strong>;
            </li>
            <li>
              {tx("ideias/102fb3fbc5", "uma pergunta dentro de")} <strong className="font-semibold text-ink-900">{tx("ideias/c657b6d542", "Futuros Humanos")}</strong>;
            </li>
            <li>{tx("ideias/8bd1bcfbb2", "uma palestra;")}</li>
            <li>{tx("ideias/03bd596fc6", "um workshop;")}</li>
            <li>{tx("ideias/7ef187124b", "uma conversa dentro de uma organização;")}</li>
            <li>{tx("ideias/40538f069e", "ou simplesmente uma mudança na maneira como entendo alguma coisa.")}</li>
          </ul>
          <p className="mt-3">{tx("ideias/dc418c2802", "O destino não precisa ser definido antes.")}</p>
          <p className="mt-4 font-serif text-[22px] font-semibold leading-snug text-ink-900">
            {tx("ideias/c4b17aad3d", "Nem toda ideia precisa virar produto para justificar sua existência.")}</p>
        </div>
      </Container>

      <Container className="mt-16 border-t border-ink-900/15 pt-12">
        <ol className="jf-hand flex flex-wrap items-center gap-x-3 gap-y-2 text-[24px]" aria-label={tx("ideias/db428612c3", "Ciclo do pensamento")}>
          {LOOP.map((s) => (
            <li key={s} className="flex items-center gap-3">
              {s} <span className="text-red-brand" aria-hidden>→</span>
            </li>
          ))}
          <li className="text-[32px] text-red-brand" aria-label={tx("ideias/e219ce14f1", "e recomeça")}>
            ↻
          </li>
        </ol>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div className="-rotate-1 bg-blush-100 px-7 py-8">
            <p className="jf-display jf-display-sm">
              {tx("ideias/fd463bbd04", "Eu não quero que a realidade sirva apenas como exemplo para as minhas ideias.")}{" "}
              <Em>{tx("ideias/70227f8f0c", "Quero que ela tenha o direito de mudá-las.")}</Em>
            </p>
          </div>
          <div className="lg:border-l lg:border-red-brand/40 lg:pl-10">
            <p className="font-serif text-[22px] font-semibold uppercase leading-snug">
              {tx("ideias/669e6b8aeb", "O pensamento não termina quando o texto é publicado.")}</p>
            <p className="mt-2 text-ink-700">
              {tx("ideias/136dcf90a2", "Às vezes, é ali que ele finalmente encontra alguma coisa capaz de contradizê-lo.")}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — CONTINUE A CONVERSA (escuro) ───────────────────────── */
const DOORS = lazy(() => ([
  {
    k: tx("ideias/950ed097ab", "Quero continuar lendo"),
    t: tx("ideias/c291bd1dc1", "Explore Ideias"),
    d: tx("ideias/ec8487149e", "Para artigos, ensaios, investigações e perguntas que merecem mais tempo."),
    cta: tx("ideias/29c5346ad4", "Explore todas as ideias"),
    href: ANCHORS.destaque,
    img: img("ideias/fd168827ea", "/images/ensaio/ju-leitura-anotacoes.webp"),
  },
  {
    k: tx("ideias/417f9ecb6b", "Quero continuar essa conversa"),
    t: tx("ideias/d61d82f306", "Uma Terça-feira Qualquer"),
    d: tx("ideias/6022e21f2b", "Uma conversa semanal, mais próxima e cotidiana, sobre aquilo que estamos construindo enquanto a vida acontece."),
    cta: tx("ideias/af4380eb69", "Assine a newsletter"),
    href: LINKS.newsletter,
    img: img("ideias/cf55ef7770", "/images/ensaio/home-06-ideias-horizontal.webp"),
  },
  {
    k: tx("ideias/a0d442c8fd", "Quero entender a tese por trás de muitas dessas perguntas"),
    t: tx("ideias/c648e4277a", "Futuros Humanos"),
    d: tx("ideias/ef8f2223b6", "O território onde possibilidade, agência, tecnologia, humanidade, direção e construção de futuros se encontram de maneira mais estruturada."),
    cta: tx("ideias/df40fd5c3c", "Conheça Futuros Humanos"),
    href: "/futuros-humanos",
    img: img("ideias/c25005cb3d", "/images/ensaio/home-01-abertura-horizontal.webp"),
  },
]));

const FICOU = lazy(() => ([tx("ideias/eff8feceed", "Uma frase?"), tx("ideias/2ec998e6be", "Uma dúvida?"), tx("ideias/fc5252a309", "Uma discordância?"), tx("ideias/c273e9ae48", "Uma possibilidade?"), tx("ideias/07123a06b8", "Uma coisa que você ainda não sabe nomear?")]));

export function IdeiasConversa() {
  return (
    <Section tone="dark" label={tx("ideias/c10bf6e08e", "Continue a conversa")}>
      <Stroke shape="orbit" className="absolute -right-24 top-0 hidden h-[70%] w-[50%] opacity-70 lg:block" width={2.5} color="var(--jf-red-400)" />
      <Container className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-10">
        <div>
          <BrushLabel>{tx("ideias/347d60d5fb", "Continue a conversa")}</BrushLabel>
          <Display size="md" className="mt-6">
            {tx("ideias/91e4e11b45", "Se alguma pergunta ficou,")} <Em>{tx("ideias/44aee59087", "talvez este espaço já tenha cumprido seu papel.")}</Em>
          </Display>
          <Body className="mt-6 text-cream-50/80 [&_p+p]:mt-2">
            <p>
              {tx("ideias/660f612145", "Não quero que cada texto termine dizendo exatamente o que você deve pensar. Nem que toda investigação produza uma resposta limpa.")}</p>
            <p>
              {tx("ideias/134e30b5c6", "Às vezes, o que uma ideia pode fazer de mais interessante é deslocar um pouco aquilo que parecia óbvio. Fazer você voltar para alguma coisa. Perceber uma contradição. Discordar. Relacionar duas coisas que antes pareciam separadas. Ou simplesmente carregar uma pergunta diferente quando sair daqui.")}</p>
          </Body>
          <p className="mt-5 font-semibold uppercase tracking-wide text-cream-50">{tx("ideias/54018e9546", "Porque pensar também é uma forma de participar.")}</p>
        </div>
        <div className="lg:border-l lg:border-red-bright/50 lg:pl-10">
          <h3 className="jf-title uppercase">{tx("ideias/1810da194b", "O que acontece depois de uma ideia?")}</h3>
          <div className="mt-4 space-y-2 text-[15px] text-cream-50/80">
            <p>{tx("ideias/dc7fe98b92", "Talvez nada imediatamente. E tudo bem.")}</p>
            <p>
              {tx("ideias/ad4d485f57", "Algumas ideias mudam uma decisão. Outras mudam uma conversa. Algumas viram ação. Outras precisam de tempo.")}</p>
            <p>
              {tx("ideias/5e9e702c32", "Algumas nos acompanham durante meses até encontrarem uma situação na qual finalmente fazem sentido.")}</p>
            <p>{tx("ideias/7e1430501f", "E existem aquelas que só servem para mostrar que aquilo que parecia tão simples talvez não fosse.")}</p>
          </div>
          <HandNote className="mt-8 text-cream-50 text-[clamp(22px,1.8vw,28px)]" rotate={-2}>
            {tx("ideias/37b02ded2b", "Nem toda ideia precisa dizer o que fazer depois. Algumas precisam apenas mudar aquilo que conseguimos enxergar.")}</HandNote>
          <Stroke shape="underline" className="mt-1 h-3 w-48" width={2.5} color="var(--jf-red-400)" />
        </div>
        <div className="rotate-1 self-start bg-cream-50 p-7 text-ink-900 shadow-[0_18px_40px_-20px_rgba(0,0,0,.7)]">
          <h3 className="jf-hand text-[34px] leading-none">{tx("ideias/a706944949", "O que ficou com você?")}</h3>
          <ul className="jf-hand mt-5 space-y-2 text-[24px] leading-tight">
            {FICOU.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1.5 h-4 w-4 shrink-0 border-2 border-ink-900/70" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-ink-700">{tx("ideias/5f49526950", "Talvez seja exatamente daí que valha continuar.")}</p>
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
            <Em>{tx("ideias/35159e3f1f", "Uma boa ideia não precisa encerrar uma conversa.")}</Em>
          </p>
          <p className="mt-3 font-serif text-[clamp(22px,2vw,30px)] leading-snug text-cream-50/90">
            {tx("ideias/9b280276d1", "Às vezes, ela existe para mudar a pergunta com que a gente continua.")}</p>
        </div>
        <div className="text-[15px] text-cream-50/80 lg:border-l lg:border-red-bright/50 lg:pl-8">
          <p>
            {tx("ideias/e7214df314", "Eu continuo lendo. Escrevendo. Mudando de ideia. Tentando entender melhor. Testando algumas coisas no mundo real. E descobrindo novas perguntas no caminho.")}</p>
          <p className="mt-4 font-semibold uppercase text-cream-50">
            {tx("ideias/542b68be9c", "Nem tudo aqui está resolvido.")}<br />
            <span className="text-red-bright">{tx("ideias/36740574fb", "Ainda bem.")}</span>
          </p>
        </div>
        <div className="-rotate-2 bg-blush-100 px-7 py-6 text-ink-900">
          <p className="jf-hand text-[28px] uppercase leading-tight">
            {tx("ideias/b047313c1f", "Primeiro vem a pergunta.")}<br />
            {tx("ideias/bbbaceb3ee", "Depois, a gente vê onde ela leva.")}</p>
          <Dash className="mt-2" />
        </div>
      </Container>
    </Section>
  );
}
