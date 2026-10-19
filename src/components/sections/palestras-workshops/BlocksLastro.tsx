import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, DashList, Display, Em, QuoteCard } from "@/components/ui/Typography";
import { CONTACT_ROUTES, EXTERNAL } from "@/lib/site";
import { Icon, IconBubble, type IconName } from "./Icons";

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
      <h3 className="jf-display jf-display-sm">Ju em ação</h3>
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
      t: "Tecnologia e grandes empresas",
      body: (
        <>
          <p>Mais de duas décadas de trajetória entre tecnologia, vendas complexas e organizações de grande porte.</p>
          <p className="mt-3">
            Passagens por empresas como <strong className="font-semibold text-ink-900">EMC e Oracle</strong>, trabalhando com
            projetos, clientes e decisões que precisavam funcionar fora do PowerPoint.
          </p>
          <p className="mt-4 font-semibold text-red-brand">
            486% da meta anual
            <br />
            +US$ 20 milhões em receita
          </p>
        </>
      ),
    },
    {
      icon: "rocket",
      t: "Empreendedorismo e construção",
      body: (
        <>
          <p className="font-semibold text-red-brand">+13 anos construindo e liderando a A2F</p>
          <p className="mt-3">
            Do lado de quem precisava vender, entregar, contratar, liderar, crescer, corrigir e sustentar uma empresa de
            tecnologia.
          </p>
          <p className="mt-3">
            Depois vieram outras construções e novos problemas: HomeCare+. Ayumana. Projetos. Produtos. Experimentos.
          </p>
          <p className="mt-3">
            Alguns funcionaram como imaginado. Outros exigiram reconstrução. Isso também é parte do lastro.
          </p>
        </>
      ),
    },
    {
      icon: "people",
      t: "Mercado no presente",
      body: (
        <>
          <p>A Ju não conta apenas histórias de uma carreira passada. Ela continua próxima de:</p>
          <p className="mt-3 font-medium text-ink-900">clientes; negócios; vendas; tecnologia; estratégia; operação.</p>
          <p className="mt-4 border-l-2 border-red-brand pl-3 font-semibold text-ink-900">
            Não deixei o mercado para falar sobre ele. Continuo dentro dele.
          </p>
        </>
      ),
    },
    {
      icon: "leaf",
      t: "Pessoas e futuros",
      body: (
        <>
          <p>
            À experiência de negócios se somaram anos investigando transformação humana, escolhas, capacidade e mudança.
          </p>
          <p className="mt-3">E, mais recentemente, Estudos de Futuros e Futurismo Humanista.</p>
          <p className="mt-3">É dessa combinação menos óbvia que nasce a conversa atual:</p>
          <p className="mt-3 font-serif text-[18px] leading-snug text-ink-900">
            tecnologia sem esquecer gente; humanidade sem ignorar realidade; futuros sem abandonar o presente.
          </p>
        </>
      ),
    },
  ];
  return (
    <Section padded={false} label="Ju no palco" id="lastro">
      <div className="grid lg:grid-cols-[55%_45%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            O palco é onde a conversa acontece. <Em>O lastro vem de muito antes.</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>Eu não falo sobre tecnologia depois de observá-la de longe. Passei boa parte da minha carreira dentro dela.</p>
            <p>
              Não falo sobre empresas apenas a partir de modelos. Construí negócios, liderei equipes, vendi, tomei decisões,
              perdi dinheiro, mudei de direção e comecei novamente.
            </p>
            <p>
              Não falo sobre transformação como uma ideia abstrata. Passei anos tentando compreender como pessoas, empresas e
              sistemas realmente mudam — e o que acontece quando não mudam.
            </p>
            <p>E não estudo futuros porque deixei o mundo real para trás.</p>
          </Body>
          <p className="mt-6 font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">
            <Em>Continuo dentro dele.</Em>
          </p>
          <p className="mt-3 text-[15px] uppercase tracking-[0.16em] text-ink-500">
            Mercado · Clientes · Tecnologia · Liderança · Empresas · Decisões · Consequências
          </p>
          <p className="jf-body mt-4 font-medium">É desse lugar que eu subo ao palco.</p>
        </Container>
        <div className="relative min-h-[420px] bg-ink-900">
          <Photo
            src="/images/ph/palestras-workshops/lastro.webp"
            alt="Ju Ferreira no palco, em palestra"
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_20%]"
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
            Autoridade, para mim, não é parecer ter todas as respostas. É ter vivido perguntas suficientes para saber quais
            merecem entrar na sala.
          </QuoteCard>
          <ul className="space-y-4 font-serif text-[clamp(19px,1.6vw,22px)] leading-snug">
            <li>Quando falo sobre transformação, conheço o peso de tentar transformar.</li>
            <li>Quando falo sobre tecnologia, conheço o mundo que existe por trás da ferramenta.</li>
            <li>Quando falo sobre futuros, continuo lidando com o presente.</li>
          </ul>
          <div className="border-l-2 border-red-brand pl-6">
            <p className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
              A palestra acontece no palco. <Em>A credibilidade começa muito antes dele.</Em>
            </p>
            <ButtonRow className="mt-8 sm:flex-col sm:items-stretch">
              {HAS_MEDIA && <ButtonLink href="#ju-em-acao">Veja a Ju em ação</ButtonLink>}
              <ButtonLink href={CONTACT_ROUTES.palestras} variant={HAS_MEDIA ? "secondary" : "primary"}>
                Quero levar essa conversa para meu evento
              </ButtonLink>
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
      t: "Escutar",
      s: "O que está acontecendo de verdade?",
      body: (
        <>
          <p>Antes de pensar em título, roteiro ou dinâmica, precisamos compreender o contexto.</p>
          <p className="mt-3">Aqui entram perguntas como:</p>
          <DashList
            className="mt-2"
            items={[
              "Qual é o momento da organização?",
              "Quem estará na sala?",
              "O que aconteceu antes desse encontro?",
              "Que decisão, mudança ou tensão está por trás dele?",
              "O que o contratante espera que as pessoas percebam, sintam ou discutam depois?",
            ]}
          />
          <p className="mt-3">O briefing, para mim, não serve apenas para coletar informação.</p>
          <p className="mt-2 font-semibold text-ink-900">Serve para descobrir qual é a conversa real.</p>
        </>
      ),
    },
    {
      icon: "search",
      t: "Encontrar a pergunta certa",
      body: (
        <>
          <p>
            Às vezes, o pedido chega como: <em>“Queremos uma palestra sobre IA.”</em>
          </p>
          <p className="mt-2">
            Mas a pergunta real pode ser:{" "}
            <strong className="font-semibold text-ink-900">
              “Como queremos liderar num mundo em que parte do trabalho será automatizada?”
            </strong>
          </p>
          <p className="mt-3">
            Ou o pedido chega como: <em>“Precisamos falar de mudança.”</em>
          </p>
          <p className="mt-2">
            E a tensão pode ser:{" "}
            <strong className="font-semibold text-ink-900">
              “Por que todo mundo sabe que precisa mudar, mas nada muda na prática?”
            </strong>
          </p>
          <p className="mt-3">
            É aqui que personalização começa de verdade. Não em trocar exemplos. Em encontrar a pergunta capaz de organizar a
            experiência.
          </p>
        </>
      ),
    },
    {
      icon: "pen",
      t: "Desenhar a experiência",
      s: "Qual formato serve melhor à pergunta?",
      body: (
        <>
          <p>
            A partir do contexto, definimos: palestra; workshop; conversa; experiência híbrida; sequência de encontros; ou
            outra construção.
          </p>
          <p className="mt-3">
            Também ajustamos: profundidade; linguagem; exemplos; ritmo; participação; duração; e nível de provocação.
          </p>
          <p className="mt-3 font-medium text-ink-900">
            Uma convenção de 1.000 pessoas não pede a mesma arquitetura de uma reunião com 15 executivos. E não deveria parecer
            que pede.
          </p>
        </>
      ),
    },
    {
      icon: "compass",
      t: "Customizar sem perder a tese",
      s: "Customização não significa dizer o que a organização quer ouvir.",
      body: (
        <>
          <p>
            A tese continua existindo. As perguntas continuam tendo tensão. A Ju não entra na sala para validar
            automaticamente aquilo em que todos já acreditam.
          </p>
          <p className="mt-3">O trabalho é encontrar o ponto de encontro entre:</p>
          <p className="mt-2 font-semibold text-ink-900">
            a lente da Ju; o contexto da organização; e aquilo que a plateia precisa ser capaz de enxergar.
          </p>
        </>
      ),
    },
    {
      icon: "stage",
      t: "A experiência acontece",
      body: (
        <>
          <p>No dia, a entrega não é apenas “seguir slides”.</p>
          <p className="mt-3">
            Existe: presença; escuta; ritmo; leitura da sala; espaço para silêncio; humor quando cabe; pergunta; adaptação.
          </p>
          <p className="mt-3">
            Especialmente em workshops e experiências menores, o que surge na sala também participa do trabalho.
          </p>
          <p className="mt-3 font-semibold text-ink-900">Existe roteiro. Mas existe gente.</p>
        </>
      ),
    },
    {
      icon: "target",
      t: "E depois?",
      body: (
        <>
          <p>
            Nem todo trabalho precisa continuar. Às vezes, uma palestra cumpre perfeitamente sua função e termina ali.
          </p>
          <p className="mt-3">Outras vezes, ela abre uma questão que merece aprofundamento. Daí podem nascer:</p>
          <p className="mt-2">
            workshops; encontros de liderança; experiências customizadas; programas; projetos com a WTF; ou outras construções
            adequadas ao problema.
          </p>
          <p className="mt-3 font-semibold text-ink-900">
            O próximo passo só existe se fizer sentido para aquilo que a conversa abriu.
          </p>
        </>
      ),
    },
  ];
  return (
    <Section tone="cream" padded={false} label="Como construímos cada trabalho" id="como-construimos">
      <div className="grid lg:grid-cols-[55%_45%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pb-14 lg:pr-12">
          <Display size="lg">
            Não começamos pelo slide. <Em>Começamos pelo contexto.</Em>
          </Display>
          <Body className="mt-8 max-w-[620px] text-ink-700">
            <p>
              Uma palestra pode ter uma tese forte. Um workshop pode ter uma arquitetura consistente. Uma experiência pode ter
              perguntas poderosas.
            </p>
            <p>Mas nada disso substitui entender:</p>
          </Body>
          <DashList
            className="jf-body mt-3 font-medium"
            items={[
              "quem estará na sala;",
              "por que aquelas pessoas estarão juntas;",
              "o que a organização está vivendo;",
              "o que já foi dito;",
              "o que ainda não foi dito;",
              "e por que essa conversa precisa acontecer agora.",
            ]}
          />
          <p className="jf-body mt-5 text-ink-700">É a partir daí que o trabalho começa.</p>
        </Container>
        <div className="relative min-h-[400px]">
          <Photo
            src="/images/ph/palestras-workshops/escuta.webp"
            alt="Ju Ferreira escutando atentamente em uma reunião"
            sizes="(min-width:1024px) 45vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_25%]"
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
            Customização não é adaptar uma apresentação. <strong className="font-semibold">É construir relevância.</strong>
          </QuoteCard>
          <p className="border-l-2 border-red-brand pl-6 font-serif text-[clamp(22px,2vw,30px)] leading-tight">
            A melhor experiência não parece ter sido adaptada para aquela organização. <Em>Parece ter nascido para ela.</Em>
          </p>
          <ButtonLink href={CONTACT_ROUTES.palestras} size="lg">
            Vamos construir essa conversa
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — CONVERSÃO FINAL / CONTRATAÇÃO ───────────────────────── */
export function PalestrasConversao() {
  // Os 3 pontos de partida levam ao formulário adaptativo de Contato na rota de palestras.
  const starts: { icon: IconName; t: string; d: string }[] = [
    { icon: "mic", t: "Quero uma palestra", d: "Para evento, convenção ou encontro de liderança." },
    { icon: "people", t: "Quero um workshop", d: "Para uma equipe que precisa trabalhar sobre uma questão." },
    { icon: "chat", t: "Ainda não sei o formato", d: "Tenho um desafio e quero conversar." },
  ];
  const hasDirect = Boolean(EXTERNAL.email || EXTERNAL.whatsapp);
  return (
    <Section tone="dark" label="Contratação" id="contratar">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block" aria-hidden>
        <Photo
          src="/images/ph/palestras-workshops/conversa.webp"
          alt=""
          sizes="42vw"
          className="absolute inset-0 jf-fade-left opacity-70"
          imgClassName="object-[50%_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40" />
      </div>
      <Stroke shape="orbit" className="absolute -right-24 top-6 hidden h-[95%] w-[50%] opacity-80 lg:block" width={3} color="var(--jf-red-400)" />
      <Container className="relative">
        <div className="max-w-[780px]">
          <Display size="lg">
            Se essa conversa precisa acontecer na sua organização, <Em>vamos começar por aqui.</Em>
          </Display>
          <Body className="mt-10 max-w-[620px] text-cream-50/85">
            <p>Talvez você já saiba exatamente o que procura.</p>
            <p>
              Uma palestra para uma convenção. Um workshop para lideranças. Uma experiência para uma transformação em curso.
            </p>
            <p>Ou talvez você só saiba que existe uma conversa que precisa acontecer.</p>
            <p>Os dois pontos de partida funcionam.</p>
            <p>O primeiro passo é entender:</p>
          </Body>
          <DashList
            className="jf-body mt-3 font-medium text-cream-50 [&_span.bg-red-brand]:bg-red-bright"
            items={[
              "o que está acontecendo;",
              "quem estará na sala;",
              "por que esse encontro importa;",
              "e o que você gostaria que pudesse ser diferente depois dele.",
            ]}
          />
          <p className="jf-body mt-5 text-cream-50/85">
            A partir daí, conseguimos pensar juntos no formato que faz mais sentido.
          </p>
        </div>

        <h3 className="jf-display jf-display-sm mt-16">Três pontos de partida. O mesmo destino: a conversa certa.</h3>
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
              Qual conversa precisa acontecer <Em>agora?</Em>
            </h3>
            <p className="mt-4 max-w-[520px] text-cream-50/80">
              O que está acontecendo na sua organização e que conversa você acredita que precisa acontecer agora?
            </p>
            <ButtonLink href="/contato" size="lg" className="mt-8 bg-red-bright">
              Vamos construir essa conversa
            </ButtonLink>
          </div>
          <div className="space-y-6">
            <p className="flex gap-4 text-[15px] leading-relaxed text-cream-50/80">
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-bright text-red-bright" aria-hidden>
                ✓
              </span>
              Cada conversa começa pelo contexto. Nenhum formato é empurrado antes de entendermos a necessidade.
            </p>
            {hasDirect && (
              <div className="text-[15px]">
                <p className="font-semibold">Prefere falar direto?</p>
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
                        WhatsApp comercial
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between gap-8 border-t border-cream-50/20 pt-8">
          <p className="jf-lead text-cream-50/95">
            Temos futuros para construir.
            <br />
            <Em>Talvez essa conversa seja um dos lugares por onde começar.</Em>
          </p>
          <Stroke shape="scribble" className="hidden h-8 w-36 shrink-0 md:block" color="var(--jf-red-400)" width={4} />
        </div>
      </Container>
    </Section>
  );
}
