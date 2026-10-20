import { getExternal } from "@/lib/content";
import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, DashList, Display, Em, QuoteCard } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { Icon, IconBubble, type IconName } from "./Icons";

import { tx, img } from "@/lib/editable";
/* ───────────────────────── BLOCO 7 — JU NO PALCO / PROVA E LASTRO ───────────────────────── */

/*
 * JU EM AÇÃO — somente ativos REAIS. Nenhuma evidência fictícia deve ser publicada (copy Bloco 7).
 * Cada sub-seção só é renderizada quando o array correspondente tiver itens.
 */
// TODO(PENDING_ASSETS): reel de 60–90 s mostrando palco, voz, movimento, plateia, pausas, perguntas e reação.
const VIDEOS: { src: string; poster: string; title: string }[] = [];
// TODO(PENDING_ASSETS): 2 a 4 fotos reais e fortes de eventos, workshops ou palco.
const STAGE_PHOTOS: { src: string; alt: string }[] = [];
// TODO(PENDING_ASSETS): 2 ou 3 depoimentos verificáveis (contratante, liderança, participante).
const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];
// TODO(PENDING_ASSETS): organizações/contextos — apenas com autorização e histórico adequado.
const ORGANIZATIONS: { name: string; logo?: string }[] = [];

const HAS_MEDIA = VIDEOS.length > 0 || STAGE_PHOTOS.length > 0;
const HAS_ACTION = HAS_MEDIA || TESTIMONIALS.length > 0 || ORGANIZATIONS.length > 0;

function JuEmAcao() {
  if (!HAS_ACTION) return null;
  return (
    <div id="ju-em-acao" className="mt-16 border-t border-ink-900/15 pt-10">
      <h3 className="jf-display jf-display-sm">{tx("palestras-workshops/127e7bde47", "Ju em ação")}</h3>
      {HAS_MEDIA && (
        <div className="mt-8 grid gap-4 md:grid-cols-[2fr_1fr]">
          {VIDEOS.map((v) => (
            <video key={v.src} src={v.src} poster={v.poster} controls preload="none" className="w-full rounded-[var(--jf-radius-sm)]" title={v.title} />
          ))}
          <div className="grid gap-4">
            {STAGE_PHOTOS.map((p) => (
              <div key={p.src} className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Photo src={p.src} alt={p.alt} sizes="(min-width:768px) 30vw, 100vw" className="absolute inset-0" />
              </div>
            ))}
          </div>
        </div>
      )}
      {TESTIMONIALS.length > 0 && (
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <QuoteCard cite={`${t.name} — ${t.role}`}>{t.quote}</QuoteCard>
            </li>
          ))}
        </ul>
      )}
      {ORGANIZATIONS.length > 0 && (
        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-ink-500">
          {ORGANIZATIONS.map((o) => (
            <li key={o.name} className="text-[15px] font-medium uppercase tracking-[0.14em]">
              {o.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PalestrasLastro() {
  const columns: { icon: IconName; t: string; body: ReactNode }[] = [
    {
      icon: "laptop",
      t: tx("palestras-workshops/3a2dc72940", "Tecnologia e grandes empresas"),
      body: (
        <>
          <p>{tx("palestras-workshops/a3334ec773", "Mais de duas décadas de trajetória entre tecnologia, vendas complexas e organizações de grande porte.")}</p>
          <p className="mt-3">
            {tx("palestras-workshops/aedc3a2644", "Passagens por empresas como")} <strong className="font-semibold text-ink-900">{tx("palestras-workshops/a4ba2c2bb0", "EMC e Oracle")}</strong>{tx("palestras-workshops/f1627eaf3a", ", trabalhando com projetos, clientes e decisões que precisavam funcionar fora do PowerPoint.")}</p>
          <p className="mt-4 font-semibold text-red-brand">
            <span data-count="486">{tx("palestras-workshops/d0802a3b59", "486")}</span>{tx("palestras-workshops/64303fe322", "% da meta anual")}<br />
            {tx("palestras-workshops/1628aaca82", "+US$")} <span data-count="20">{tx("palestras-workshops/05bd3fd7db", "20")}</span> {tx("palestras-workshops/20d0bb065b", "milhões em receita")}</p>
        </>
      ),
    },
    {
      icon: "rocket",
      t: tx("palestras-workshops/9471e5f046", "Empreendedorismo e construção"),
      body: (
        <>
          <p className="font-semibold text-red-brand">{tx("palestras-workshops/182a448036", "+13 anos construindo e liderando a A2F")}</p>
          <p className="mt-3">
            {tx("palestras-workshops/a069c76a6d", "Do lado de quem precisava vender, entregar, contratar, liderar, crescer, corrigir e sustentar uma empresa de tecnologia.")}</p>
          <p className="mt-3">
            {tx("palestras-workshops/68d4ee9b3b", "Depois vieram outras construções e novos problemas: HomeCare+. Ayumana. Projetos. Produtos. Experimentos.")}</p>
          <p className="mt-3">
            {tx("palestras-workshops/3b4d4fa29f", "Alguns funcionaram como imaginado. Outros exigiram reconstrução. Isso também é parte do lastro.")}</p>
        </>
      ),
    },
    {
      icon: "people",
      t: tx("palestras-workshops/940e079a70", "Mercado no presente"),
      body: (
        <>
          <p>{tx("palestras-workshops/b232bc3a99", "A Ju não conta apenas histórias de uma carreira passada. Ela continua próxima de:")}</p>
          <p className="mt-3 font-medium text-ink-900">{tx("palestras-workshops/eec111a1a0", "clientes; negócios; vendas; tecnologia; estratégia; operação.")}</p>
          <p className="mt-4 border-l-2 border-red-brand pl-3 font-semibold text-ink-900">
            {tx("palestras-workshops/07622dc841", "Não deixei o mercado para falar sobre ele. Continuo dentro dele.")}</p>
        </>
      ),
    },
    {
      icon: "leaf",
      t: tx("palestras-workshops/32a2bde890", "Pessoas e futuros"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/8c7dfecaee", "À experiência de negócios se somaram anos investigando transformação humana, escolhas, capacidade e mudança.")}</p>
          <p className="mt-3">{tx("palestras-workshops/33e2a083c0", "E, mais recentemente, Estudos de Futuros e Futurismo Humanista.")}</p>
          <p className="mt-3">{tx("palestras-workshops/46e33173dc", "É dessa combinação menos óbvia que nasce a conversa atual:")}</p>
          <p className="mt-3 font-serif text-[18px] leading-snug text-ink-900">
            {tx("palestras-workshops/494996dced", "tecnologia sem esquecer gente; humanidade sem ignorar realidade; futuros sem abandonar o presente.")}</p>
        </>
      ),
    },
  ];
  return (
    <Section padded={false} label={tx("palestras-workshops/ea759d34e3", "Ju no palco")} id="lastro">
      <div className="grid lg:grid-cols-[55%_45%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            {tx("palestras-workshops/2dcea6eefd", "O palco é onde a conversa acontece.")} <Em>{tx("palestras-workshops/96bf703f3a", "O lastro vem de muito antes.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>{tx("palestras-workshops/aa0b50801d", "Eu não falo sobre tecnologia depois de observá-la de longe. Passei boa parte da minha carreira dentro dela.")}</p>
            <p>
              {tx("palestras-workshops/612aae025c", "Não falo sobre empresas apenas a partir de modelos. Construí negócios, liderei equipes, vendi, tomei decisões, perdi dinheiro, mudei de direção e comecei novamente.")}</p>
            <p>
              {tx("palestras-workshops/254d03210b", "Não falo sobre transformação como uma ideia abstrata. Passei anos tentando compreender como pessoas, empresas e sistemas realmente mudam — e o que acontece quando não mudam.")}</p>
            <p>{tx("palestras-workshops/cb2895ec99", "E não estudo futuros porque deixei o mundo real para trás.")}</p>
          </Body>
          <p className="mt-6 font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">
            <Em>{tx("palestras-workshops/9dc199bbdd", "Continuo dentro dele.")}</Em>
          </p>
          <p className="mt-3 text-[15px] uppercase tracking-[0.16em] text-ink-500">
            {tx("palestras-workshops/547e9b1732", "Mercado · Clientes · Tecnologia · Liderança · Empresas · Decisões · Consequências")}</p>
          <p className="jf-body mt-4 font-medium">{tx("palestras-workshops/ec45772aef", "É desse lugar que eu subo ao palco.")}</p>
        </Container>
        <div className="relative min-h-[420px] bg-ink-900">
          <Photo
            src={img("palestras-workshops/fbab4516e3", "/images/ensaio/home-03-palco-vertical.webp")}
            alt={tx("palestras-workshops/28d5e701eb", "Cena ilustrativa de Juliana no palco, em enquadramento vertical.")}
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="loop" className="absolute -left-8 top-8 h-[80%] w-[70%]" width={2.5} />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <ul className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0 xl:divide-x xl:divide-ink-900/15">
          {columns.map((c) => (
            <li key={c.t} className="xl:px-7 xl:first:pl-0 xl:last:pr-0">
              <div className="flex items-center gap-4">
                <IconBubble name={c.icon} />
                <h3 className="text-[15px] font-semibold uppercase leading-snug tracking-[0.14em]">{c.t}</h3>
              </div>
              <div className="mt-5 text-[15px] leading-relaxed text-ink-700">{c.body}</div>
            </li>
          ))}
        </ul>

        <JuEmAcao />

        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-12">
          <QuoteCard>
            {tx("palestras-workshops/ea337e00c8", "Autoridade, para mim, não é parecer ter todas as respostas. É ter vivido perguntas suficientes para saber quais merecem entrar na sala.")}</QuoteCard>
          <ul className="space-y-4 font-serif text-[clamp(19px,1.6vw,22px)] leading-snug">
            <li>{tx("palestras-workshops/769fd13d12", "Quando falo sobre transformação, conheço o peso de tentar transformar.")}</li>
            <li>{tx("palestras-workshops/d51b7de3b3", "Quando falo sobre tecnologia, conheço o mundo que existe por trás da ferramenta.")}</li>
            <li>{tx("palestras-workshops/d12e854546", "Quando falo sobre futuros, continuo lidando com o presente.")}</li>
          </ul>
          <div className="border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
              {tx("palestras-workshops/ded8c50e8b", "A palestra acontece no palco.")} <Em>{tx("palestras-workshops/e3781428a6", "A credibilidade começa muito antes dele.")}</Em>
            </p>
            <ButtonRow className="mt-8 sm:flex-col sm:items-stretch">
              {HAS_MEDIA && <ButtonLink href="#ju-em-acao">{tx("palestras-workshops/0e83986998", "Veja a Ju em ação")}</ButtonLink>}
              <ButtonLink href={CONTACT_ROUTES.palestras} variant={HAS_MEDIA ? "secondary" : "primary"}>
                {tx("palestras-workshops/ecb477169a", "Quero levar essa conversa para meu evento")}</ButtonLink>
            </ButtonRow>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 8 — COMO CONSTRUÍMOS CADA TRABALHO ───────────────────────── */
export function PalestrasProcesso() {
  const steps: { icon: IconName; t: string; s?: string; body: ReactNode }[] = [
    {
      icon: "chat",
      t: tx("palestras-workshops/9d708fc951", "Escutar"),
      s: tx("palestras-workshops/b80e049194", "O que está acontecendo de verdade?"),
      body: (
        <>
          <p>{tx("palestras-workshops/62b63757da", "Antes de pensar em título, roteiro ou dinâmica, precisamos compreender o contexto.")}</p>
          <p className="mt-3">{tx("palestras-workshops/8c94152033", "Aqui entram perguntas como:")}</p>
          <DashList
            className="mt-2"
            items={[
              tx("palestras-workshops/1844d636aa", "Qual é o momento da organização?"),
              tx("palestras-workshops/445d772149", "Quem estará na sala?"),
              tx("palestras-workshops/03273dba6d", "O que aconteceu antes desse encontro?"),
              tx("palestras-workshops/4b2e60e458", "Que decisão, mudança ou tensão está por trás dele?"),
              tx("palestras-workshops/aede07d17b", "O que o contratante espera que as pessoas percebam, sintam ou discutam depois?"),
            ]}
          />
          <p className="mt-3">{tx("palestras-workshops/bd53684206", "O briefing, para mim, não serve apenas para coletar informação.")}</p>
          <p className="mt-2 font-semibold text-ink-900">{tx("palestras-workshops/f655528a55", "Serve para descobrir qual é a conversa real.")}</p>
        </>
      ),
    },
    {
      icon: "search",
      t: tx("palestras-workshops/762b316274", "Encontrar a pergunta certa"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/64f3982b13", "Às vezes, o pedido chega como:")} <em>{tx("palestras-workshops/e31a8e4dce", "“Queremos uma palestra sobre IA.”")}</em>
          </p>
          <p className="mt-2">
            {tx("palestras-workshops/55964045b9", "Mas a pergunta real pode ser:")}{" "}
            <strong className="font-semibold text-ink-900">
              {tx("palestras-workshops/26143b9069", "“Como queremos liderar num mundo em que parte do trabalho será automatizada?”")}</strong>
          </p>
          <p className="mt-3">
            {tx("palestras-workshops/7eeb1d818d", "Ou o pedido chega como:")} <em>{tx("palestras-workshops/8610eba6c0", "“Precisamos falar de mudança.”")}</em>
          </p>
          <p className="mt-2">
            {tx("palestras-workshops/48efa23e0c", "E a tensão pode ser:")}{" "}
            <strong className="font-semibold text-ink-900">
              {tx("palestras-workshops/eae55351b3", "“Por que todo mundo sabe que precisa mudar, mas nada muda na prática?”")}</strong>
          </p>
          <p className="mt-3">
            {tx("palestras-workshops/14d311c194", "É aqui que personalização começa de verdade. Não em trocar exemplos. Em encontrar a pergunta capaz de organizar a experiência.")}</p>
        </>
      ),
    },
    {
      icon: "pen",
      t: tx("palestras-workshops/c33efde486", "Desenhar a experiência"),
      s: tx("palestras-workshops/531a3f45f0", "Qual formato serve melhor à pergunta?"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/e96bf9f4d5", "A partir do contexto, definimos: palestra; workshop; conversa; experiência híbrida; sequência de encontros; ou outra construção.")}</p>
          <p className="mt-3">
            {tx("palestras-workshops/c1feebf4c0", "Também ajustamos: profundidade; linguagem; exemplos; ritmo; participação; duração; e nível de provocação.")}</p>
          <p className="mt-3 font-medium text-ink-900">
            {tx("palestras-workshops/517ed7afbb", "Uma convenção de 1.000 pessoas não pede a mesma arquitetura de uma reunião com 15 executivos. E não deveria parecer que pede.")}</p>
        </>
      ),
    },
    {
      icon: "compass",
      t: tx("palestras-workshops/9180014576", "Customizar sem perder a tese"),
      s: tx("palestras-workshops/0798df9b4a", "Customização não significa dizer o que a organização quer ouvir."),
      body: (
        <>
          <p>
            {tx("palestras-workshops/5b799b6cba", "A tese continua existindo. As perguntas continuam tendo tensão. A Ju não entra na sala para validar automaticamente aquilo em que todos já acreditam.")}</p>
          <p className="mt-3">{tx("palestras-workshops/2bac9de4fd", "O trabalho é encontrar o ponto de encontro entre:")}</p>
          <p className="mt-2 font-semibold text-ink-900">
            {tx("palestras-workshops/194810ce24", "a lente da Ju; o contexto da organização; e aquilo que a plateia precisa ser capaz de enxergar.")}</p>
        </>
      ),
    },
    {
      icon: "stage",
      t: tx("palestras-workshops/eecea95788", "A experiência acontece"),
      body: (
        <>
          <p>{tx("palestras-workshops/8424a8d714", "No dia, a entrega não é apenas “seguir slides”.")}</p>
          <p className="mt-3">
            {tx("palestras-workshops/2bdbb39aa4", "Existe: presença; escuta; ritmo; leitura da sala; espaço para silêncio; humor quando cabe; pergunta; adaptação.")}</p>
          <p className="mt-3">
            {tx("palestras-workshops/ed690525c3", "Especialmente em workshops e experiências menores, o que surge na sala também participa do trabalho.")}</p>
          <p className="mt-3 font-semibold text-ink-900">{tx("palestras-workshops/f9ebefaab8", "Existe roteiro. Mas existe gente.")}</p>
        </>
      ),
    },
    {
      icon: "target",
      t: tx("palestras-workshops/7f7a46266e", "E depois?"),
      body: (
        <>
          <p>
            {tx("palestras-workshops/1fba4bfd18", "Nem todo trabalho precisa continuar. Às vezes, uma palestra cumpre perfeitamente sua função e termina ali.")}</p>
          <p className="mt-3">{tx("palestras-workshops/e06c97a392", "Outras vezes, ela abre uma questão que merece aprofundamento. Daí podem nascer:")}</p>
          <p className="mt-2">
            {tx("palestras-workshops/fad49b0e06", "workshops; encontros de liderança; experiências customizadas; programas; projetos com a WTF; ou outras construções adequadas ao problema.")}</p>
          <p className="mt-3 font-semibold text-ink-900">
            {tx("palestras-workshops/a64e93bb23", "O próximo passo só existe se fizer sentido para aquilo que a conversa abriu.")}</p>
        </>
      ),
    },
  ];
  return (
    <Section tone="cream" padded={false} label={tx("palestras-workshops/f059b72436", "Como construímos cada trabalho")} id="como-construimos">
      <div className="grid lg:grid-cols-[55%_45%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            {tx("palestras-workshops/c89e815e0e", "Não começamos pelo slide.")} <Em>{tx("palestras-workshops/b6d104617c", "Começamos pelo contexto.")}</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>
              {tx("palestras-workshops/10788a8612", "Uma palestra pode ter uma tese forte. Um workshop pode ter uma arquitetura consistente. Uma experiência pode ter perguntas poderosas.")}</p>
            <p>{tx("palestras-workshops/4a9c568907", "Mas nada disso substitui entender:")}</p>
          </Body>
          <DashList
            className="jf-body mt-3 font-medium"
            items={[
              tx("palestras-workshops/392b388157", "quem estará na sala;"),
              tx("palestras-workshops/17baba7f43", "por que aquelas pessoas estarão juntas;"),
              tx("palestras-workshops/1f071a840e", "o que a organização está vivendo;"),
              tx("palestras-workshops/bd0251cb26", "o que já foi dito;"),
              tx("palestras-workshops/ae4b2d402d", "o que ainda não foi dito;"),
              tx("palestras-workshops/6edb571970", "e por que essa conversa precisa acontecer agora."),
            ]}
          />
          <p className="jf-body mt-5 text-ink-700">{tx("palestras-workshops/11a633260c", "É a partir daí que o trabalho começa.")}</p>
        </Container>
        <div className="relative min-h-[400px]">
          <Photo
            src={img("palestras-workshops/3f35a3a213", "/images/ensaio/organizacoes-conversa-lideranca.webp")}
            alt={tx("palestras-workshops/99a6fff207", "Cena ilustrativa de Juliana em conversa individual com uma liderança.")}
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>

      <Container className="pb-[var(--jf-section-y)]">
        <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-[var(--jf-radius-sm)] bg-cream-50 p-7 shadow-[0_10px_30px_-22px_rgba(24,20,17,.5)]">
              <div className="flex items-center gap-4">
                <IconBubble name={s.icon} />
                <h3 className="text-[15px] font-semibold uppercase leading-snug tracking-[0.14em] text-red-brand">
                  {i + 1}. {s.t}
                </h3>
              </div>
              {s.s && <p className="mt-4 font-serif text-[21px] leading-snug">{s.s}</p>}
              <div className="mt-4 text-[15px] leading-relaxed text-ink-700">{s.body}</div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[1fr_1fr_auto] lg:items-center lg:gap-12">
          <QuoteCard>
            {tx("palestras-workshops/f91f4b02a8", "Customização não é adaptar uma apresentação.")} <strong className="font-semibold">{tx("palestras-workshops/2b1ef2186a", "É construir relevância.")}</strong>
          </QuoteCard>
          <p className="border-l-2 border-red-brand pl-6 font-serif text-[clamp(22px,2vw,30px)] leading-tight">
            {tx("palestras-workshops/54c9c90c7e", "A melhor experiência não parece ter sido adaptada para aquela organização.")} <Em>{tx("palestras-workshops/6240f8861e", "Parece ter nascido para ela.")}</Em>
          </p>
          <ButtonLink href={CONTACT_ROUTES.palestras} size="lg">
            {tx("palestras-workshops/a5adb84b1e", "Vamos construir essa conversa")}</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — CONVERSÃO FINAL / CONTRATAÇÃO ───────────────────────── */
export async function PalestrasConversao() {
  const EXTERNAL = await getExternal();
  // Os 3 pontos de partida levam ao formulário adaptativo de Contato na rota de palestras.
  const starts: { icon: IconName; t: string; d: string }[] = [
    { icon: "mic", t: tx("palestras-workshops/850a526b79", "Quero uma palestra"), d: tx("palestras-workshops/8e5847dd25", "Para evento, convenção ou encontro de liderança.") },
    { icon: "people", t: tx("palestras-workshops/ab04273eca", "Quero um workshop"), d: tx("palestras-workshops/240c64f531", "Para uma equipe que precisa trabalhar sobre uma questão.") },
    { icon: "chat", t: tx("palestras-workshops/de80e5bd01", "Ainda não sei o formato"), d: tx("palestras-workshops/a9118257fa", "Tenho um desafio e quero conversar.") },
  ];
  const hasDirect = Boolean(EXTERNAL.email || EXTERNAL.whatsapp);
  return (
    <Section tone="dark" label={tx("palestras-workshops/8e4b544952", "Contratação")} id="contratar">
      <div className="absolute top-[var(--jf-section-y)] right-0 hidden w-[42%] lg:block aspect-[2/3]" aria-hidden>
        <Photo
          src={img("palestras-workshops/813ecbe2fb", "/images/ensaio/contato-sorriso-vertical.webp")}
          alt={tx("palestras-workshops/3492b073bf", "Retrato acolhedor de Juliana com notebook à mesa.")}
          sizes="42vw"
          className="absolute inset-0 jf-fade-left opacity-70"
          imgClassName="object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40" />
      </div>
      <Stroke shape="orbit" className="absolute -right-24 top-6 hidden h-[95%] w-[50%] opacity-80 lg:block" width={3} color="var(--jf-red-400)" />
      <Container className="relative">
        <div className="max-w-[780px]">
          <Display size="lg">
            {tx("palestras-workshops/83155bfcb7", "Se essa conversa precisa acontecer na sua organização,")} <Em>{tx("palestras-workshops/a1e6f0deb1", "vamos começar por aqui.")}</Em>
          </Display>
          <Body className="mt-10 max-w-[620px] text-cream-50/85">
            <p>{tx("palestras-workshops/1cae2d2a2d", "Talvez você já saiba exatamente o que procura.")}</p>
            <p>
              {tx("palestras-workshops/67c36af134", "Uma palestra para uma convenção. Um workshop para lideranças. Uma experiência para uma transformação em curso.")}</p>
            <p>{tx("palestras-workshops/97b68d57c1", "Ou talvez você só saiba que existe uma conversa que precisa acontecer.")}</p>
            <p>{tx("palestras-workshops/7ed6da5d11", "Os dois pontos de partida funcionam.")}</p>
            <p>{tx("palestras-workshops/3756d2beb8", "O primeiro passo é entender:")}</p>
          </Body>
          <DashList
            className="jf-body mt-3 font-medium text-cream-50 [&_span.bg-red-brand]:bg-red-bright"
            items={[
              tx("palestras-workshops/33abef8279", "o que está acontecendo;"),
              tx("palestras-workshops/c382479285", "quem estará na sala;"),
              tx("palestras-workshops/e2a757f599", "por que esse encontro importa;"),
              tx("palestras-workshops/588dc704e3", "e o que você gostaria que pudesse ser diferente depois dele."),
            ]}
          />
          <p className="jf-body mt-5 text-cream-50/85">
            {tx("palestras-workshops/1dc7725945", "A partir daí, conseguimos pensar juntos no formato que faz mais sentido.")}</p>
        </div>

        <h3 className="jf-display jf-display-sm mt-16">{tx("palestras-workshops/bb53922632", "Três pontos de partida. O mesmo destino: a conversa certa.")}</h3>
        <ul className="mt-8 grid max-w-[1000px] gap-5 md:grid-cols-3">
          {starts.map((s) => (
            <li key={s.t}>
              <Link
                href={CONTACT_ROUTES.palestras}
                className="group flex h-full flex-col rounded-[var(--jf-radius-sm)] bg-cream-50 p-6 text-ink-900 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex items-start justify-between gap-4">
                  <IconBubble name={s.icon} />
                  <Icon name="arrow-up" className="rotate-45 text-red-brand transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-5 font-serif text-[26px] leading-tight">{s.t}</span>
                <Stroke shape="underline" className="mt-1 h-3 w-24" width={3} />
                <span className="mt-3 text-[15px] leading-relaxed text-ink-700">{s.d}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid max-w-[1000px] gap-10 border-t border-cream-50/20 pt-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <h3 className="font-serif text-[clamp(30px,3vw,46px)] leading-tight">
              {tx("palestras-workshops/7b4e598124", "Qual conversa precisa acontecer")} <Em>{tx("palestras-workshops/95655f8bfa", "agora?")}</Em>
            </h3>
            <p className="mt-4 max-w-[520px] text-cream-50/80">
              {tx("palestras-workshops/1370e63d1d", "O que está acontecendo na sua organização e que conversa você acredita que precisa acontecer agora?")}</p>
            <ButtonLink href="/contato" size="lg" className="mt-8">
              {tx("palestras-workshops/70fc213211", "Vamos construir essa conversa")}</ButtonLink>
          </div>
          <div className="space-y-6">
            <p className="flex gap-4 text-[15px] leading-relaxed text-cream-50/80">
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-bright text-red-bright" aria-hidden>
                ✓
              </span>
              {tx("palestras-workshops/f78d18e4b8", "Cada conversa começa pelo contexto. Nenhum formato é empurrado antes de entendermos a necessidade.")}</p>
            {hasDirect && (
              <div className="text-[15px]">
                <p className="font-semibold">{tx("palestras-workshops/c8eb2b60bd", "Prefere falar direto?")}</p>
                <ul className="mt-2 space-y-1">
                  {EXTERNAL.email && (
                    <li>
                      <a href={`mailto:${EXTERNAL.email}`} className="text-red-bright underline underline-offset-4">
                        {EXTERNAL.email}
                      </a>
                    </li>
                  )}
                  {EXTERNAL.whatsapp && (
                    <li>
                      <a href={EXTERNAL.whatsapp} className="text-red-bright underline underline-offset-4">
                        {tx("palestras-workshops/280964141c", "WhatsApp comercial")}</a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between gap-8 border-t border-cream-50/20 pt-8">
          <p className="jf-lead text-cream-50/95">
            {tx("palestras-workshops/9230b4e41f", "Temos futuros para construir.")}<br />
            <Em>{tx("palestras-workshops/8249219898", "Talvez essa conversa seja um dos lugares por onde começar.")}</Em>
          </p>
          <Stroke shape="scribble" className="hidden h-8 w-36 shrink-0 md:block" color="var(--jf-red-400)" width={4} />
        </div>
      </Container>
    </Section>
  );
}
