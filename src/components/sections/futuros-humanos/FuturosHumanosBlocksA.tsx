import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, StickyNote, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { FuturesDiagram } from "./FuturesDiagram";

/** Sequência de frases curtas (uma por linha), com traço vermelho opcional. */
export function Lines({ items, dash = false, className = "" }: { items: ReactNode[]; dash?: boolean; className?: string }) {
  return (
    <ul className={`space-y-1 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          {dash && <span className="mt-[0.8em] h-px w-4 shrink-0 bg-red-brand" aria-hidden />}
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Frase em destaque com barra vertical vermelha. */
export function Pull({ children, className = "", dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <blockquote
      className={`border-l-[3px] pl-5 font-serif text-[clamp(21px,1.8vw,27px)] leading-snug ${
        dark ? "border-red-bright" : "border-red-brand"
      } ${className}`}
    >
      {children}
    </blockquote>
  );
}

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function FHHero() {
  return (
    <Section padded={false} className="min-h-[calc(100svh-var(--jf-header-h))]" label="Abertura">
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Photo
          src="/images/ph/futuros-humanos/hero.webp"
          alt="Ju Ferreira sentada em um mirante, olhando para o horizonte da cidade"
          priority
          sizes="46vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_25%]"
        />
      </div>
      <Stroke shape="orbit" draw className="absolute -right-6 top-0 hidden h-[100%] w-[46%] lg:block" width={3} />
      <Container className="flex min-h-[calc(100svh-var(--jf-header-h))] flex-col justify-center py-16 lg:py-20">
        <div className="jf-reveal max-w-[760px]">
          <Display as="h1" size="lg" caps>
            O futuro mais provável não é <Em>o único futuro possível.</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <p className="jf-body mt-8 max-w-[560px] text-ink-700">
            Não controlamos tudo o que vem depois.
            <br />
            Mas isso não significa que não participamos daquilo que vem depois.
          </p>
          <p className="jf-title mt-10">Futuros Humanos</p>
          <Dash className="mt-2" />
          <p className="jf-body mt-4 max-w-[600px] text-ink-700">
            Uma investigação sobre futuros, tecnologia, escolhas e as capacidades humanas necessárias para participar
            conscientemente da construção daquilo que ainda pode existir.
          </p>
          <ButtonRow className="mt-10">
            <ButtonLink href="#tese" size="lg">
              Entenda a tese
            </ButtonLink>
            <ButtonLink href={CONTACT_ROUTES.organizacoes} variant="secondary" size="lg">
              Leve Futuros Humanos para sua organização
            </ButtonLink>
          </ButtonRow>
          <div className="mt-14 max-w-[560px] border-t border-ink-900/15 pt-8">
            <Pull>Aquilo que existe não esgota aquilo que pode existir.</Pull>
          </div>
        </div>
      </Container>
      <div className="relative h-[90vw] max-h-[560px] lg:hidden">
        <Photo src="/images/ph/futuros-humanos/hero.webp" alt="" sizes="100vw" className="absolute inset-0 jf-paper-edge" imgClassName="object-[50%_25%]" />
      </div>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — FERRAMENTAS / DECISÕES ───────────────────────── */
export function FHFerramentas() {
  return (
    <Section tone="dark" padded={false} label="Ferramentas mais poderosas, decisões mais humanas">
      <div className="grid lg:grid-cols-[64%_36%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[960px] lg:pr-12">
          <Display size="md">
            Quanto mais poderosas ficam nossas ferramentas, <Em>mais humanos precisamos ser</Em> para decidir o que fazer
            com elas.
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} color="var(--jf-red-400)" />
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-cream-50/20">
            <div className="text-cream-50/85 md:pr-10">
              <p className="jf-body">Estamos ampliando rapidamente aquilo que somos capazes de fazer.</p>
              <ul className="jf-body mt-5 space-y-1">
                {["Criar.", "Prever.", "Automatizar.", "Personalizar.", "Escalar.", "Decidir.", "Construir."].map((v) => (
                  <li key={v} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-red-bright" aria-hidden />
                    {v}
                  </li>
                ))}
              </ul>
              <p className="jf-body mt-5">
                A tecnologia abre possibilidades que, até pouco tempo atrás, pareciam improváveis.
              </p>
            </div>
            <div className="md:pl-10">
              <p className="jf-body font-semibold text-cream-50">Mas capacidade não é direção.</p>
              <Body className="mt-4 text-cream-50/80">
                <p>
                  Uma ferramenta pode ampliar nossa potência.
                  <br />
                  Ela não decide, por nós, o que merece ser ampliado.
                </p>
                <p>
                  Pode nos ajudar a fazer algo mais rápido.
                  <br />
                  Não responde se deveríamos fazê-lo.
                </p>
                <p>
                  Pode transformar uma decisão em processo.
                  <br />
                  Não elimina a responsabilidade pelas consequências.
                </p>
                <p>
                  Por isso, talvez a pergunta mais importante diante de tecnologias cada vez mais poderosas não seja apenas:
                </p>
              </Body>
              <p className="mt-4 inline-block bg-cream-50/10 px-3 py-1.5 font-serif text-[21px]">
                “O que conseguimos fazer agora?”
              </p>
              <p className="jf-body mt-4 text-cream-50/80">Mas:</p>
              <h3 className="mt-2 font-serif text-[clamp(24px,2vw,30px)] leading-snug">
                <span className="bg-red-brand px-1.5 box-decoration-clone">O que vale a pena fazer</span> com aquilo que
                nos tornamos capazes de fazer?
              </h3>
              <p className="jf-body mt-4 text-cream-50/80">Essa é uma das perguntas centrais de Futuros Humanos.</p>
            </div>
          </div>
        </Container>
        <div className="relative min-h-[460px]">
          <Photo
            src="/images/ph/futuros-humanos/ferramentas.webp"
            alt="Ju Ferreira pensativa à mesa de trabalho, com café e livros"
            sizes="(min-width:1024px) 36vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_20%]"
          />
          <Stroke shape="circle" className="absolute left-[6%] top-[6%] h-[70%] w-[90%] opacity-90" width={2.5} color="var(--jf-red-400)" />
        </div>
      </div>
      <Container className="pb-[var(--jf-section-y)]">
        <div className="border-t border-cream-50/20 pt-10">
          <p className="jf-lead max-w-[1100px]">
            O futuro não será definido apenas pelas capacidades das nossas ferramentas.
            <br />
            <Em>Será definido também pela qualidade das escolhas que fazemos com elas.</Em>
          </p>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 3 — A TESE ───────────────────────── */
export function FHTese() {
  const types = [
    { t: "Provável", d: "O que tende a acontecer se determinadas forças continuarem atuando.", dot: "bg-wine-700" },
    { t: "Possível", d: "O que poderia acontecer, mesmo que ainda não seja o caminho dominante.", dot: "bg-blush-200 ring-1 ring-red-brand/30" },
    { t: "Preferível", d: "Aquilo que consideramos desejável ajudar a tornar possível.", dot: "border-2 border-dashed border-red-brand" },
  ];
  return (
    <Section label="A tese: provável não é destino" id="tese">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div>
          <Display size="lg">
            O provável é uma possibilidade. <Em>Não uma sentença.</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 max-w-[560px] text-ink-700">
            <p>Todos nós fazemos previsões o tempo inteiro.</p>
            <p>Sobre mercados. Tecnologias. Carreiras. Empresas. Pessoas. A própria vida.</p>
            <p>
              Observamos aquilo que existe hoje, identificamos tendências, padrões, forças e sinais e tentamos responder:
            </p>
          </Body>
          <Pull className="mt-6 max-w-[520px]">“Se tudo continuar mais ou menos assim, para onde isso nos leva?”</Pull>
          <Body className="mt-6 max-w-[560px] text-ink-700">
            <p>Essa pergunta é importante.</p>
            <p>O problema começa quando transformamos a resposta em destino.</p>
            <p>
              Quando aquilo que parece mais provável passa a ser tratado como aquilo que{" "}
              <strong className="font-semibold text-ink-900">necessariamente</strong> vai acontecer.
            </p>
            <p>Porque existem futuros que podem ser:</p>
          </Body>
          <p className="mt-3 font-serif text-[22px] leading-snug">
            prováveis;
            <br />
            plausíveis;
            <br />
            possíveis;
            <br />
            preferíveis.
          </p>
          <p className="jf-body mt-4 font-semibold">Eles não são sinônimos.</p>
        </div>

        <div>
          <figure className="relative mx-auto max-w-[560px]">
            <FuturesDiagram />
          </figure>
          <dl className="mt-10 divide-y divide-ink-900/15 border-y border-ink-900/15">
            {types.map((x) => (
              <div key={x.t} className="grid gap-2 py-5 sm:grid-cols-[190px_1fr] sm:gap-6">
                <dt className="flex items-center gap-3">
                  <span className={`h-4 w-4 shrink-0 rounded-full ${x.dot}`} aria-hidden />
                  <span className="font-serif text-[22px] uppercase tracking-[0.06em]">{x.t}</span>
                </dt>
                <dd className="font-semibold text-ink-800">{x.d}</dd>
              </div>
            ))}
          </dl>
          <Body className="mt-8 text-ink-700">
            <p>O provável fala sobre continuidade.</p>
            <p>O possível abre espaço para aquilo que ainda não aconteceu.</p>
            <p>E o preferível adiciona uma pergunta indispensável:</p>
          </Body>
          <p className="mt-3 font-serif text-[clamp(21px,1.8vw,26px)] font-medium leading-snug text-red-brand">
            entre os futuros que podem existir, quais valem a pena ajudar a construir?
          </p>
          <Body className="mt-6 text-ink-700">
            <p>Preferível não significa universalmente “bom”.</p>
            <p>Preferências mudam conforme contexto, valores, interesses, pessoas, organizações e sociedade.</p>
            <p>Por isso pensar futuros também exige discernimento, negociação e responsabilidade.</p>
          </Body>
        </div>
      </Container>

      <Container className="mt-16 lg:mt-20">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.1fr_1fr_auto] lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <div className="lg:pr-10">
            <Pull className="text-[clamp(22px,2vw,30px)]">
              Se tratamos o provável como inevitável, começamos a tomar decisões como se já não houvesse escolha.
            </Pull>
            <p className="jf-body mt-5 text-ink-700">
              Organizações investem. Pessoas se adaptam. Mercados se reorganizam. Comportamentos se repetem.
            </p>
            <p className="jf-body mt-3 text-ink-700">
              E, pouco a pouco, ajudamos a construir exatamente aquilo que acreditávamos apenas estar prevendo.
            </p>
          </div>
          <div className="lg:px-10">
            <h3 className="jf-eyebrow text-[14px] text-red-brand">Prever também pode influenciar.</h3>
            <Body className="mt-5 text-ink-700">
              <p>Pensar futuros não é negar tendências.</p>
              <p>É enxergá-las sem entregar a elas a autoria do que vem depois.</p>
              <p>É olhar para o provável e perguntar:</p>
            </Body>
            <p className="mt-3 font-serif text-[22px] font-medium">Que outros futuros também podem existir?</p>
            <p className="jf-body mt-4 text-ink-700">E depois:</p>
            <p className="mt-2 font-serif text-[22px] font-medium text-red-brand">
              Quais deles queremos ajudar a tornar possíveis?
            </p>
          </div>
          <div className="flex items-center lg:pl-10">
            <StickyNote tone="paper" rotate={-4} className="max-w-[300px]">
              Aquilo que existe não esgota aquilo que pode existir.
            </StickyNote>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — AGÊNCIA ───────────────────────── */
export function FHAgencia() {
  const modes = [
    { t: "Controle", d: <p>Pressupõe domínio sobre o resultado.</p>, active: false },
    {
      t: "Participação",
      d: <p>Reconhece que existem limites, mas assume responsabilidade sobre escolhas, influência e ação.</p>,
      active: true,
    },
    {
      t: "Omissão",
      d: (
        <>
          <p>Também participa.</p>
          <p>
            Porque não escolher, não questionar e não agir não nos coloca fora do sistema. Às vezes, apenas reforça o
            caminho que já estava sendo construído.
          </p>
        </>
      ),
      active: false,
    },
  ];
  return (
    <Section label="Agência" className="pb-0 lg:pb-0">
      <div className="grid lg:grid-cols-[68%_32%]">
        <Container className="lg:ml-auto lg:mr-0 lg:max-w-[1010px] lg:pr-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <Display size="lg">
                Agência não é controle. <Em>É participação.</Em>
              </Display>
              <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
              <Body className="mt-10 text-ink-700">
                <p>Não controlamos tudo o que vem depois.</p>
                <p>
                  Há acaso. Há estruturas. Há outras pessoas. Há contexto. Há limites. Há decisões tomadas longe de nós. Há
                  coisas que mudam antes mesmo de conseguirmos compreendê-las por inteiro.
                </p>
                <p>
                  Mas existe um erro perigoso em transformar <strong className="font-semibold text-ink-900">“eu não controlo tudo”</strong>{" "}
                  em <strong className="font-semibold text-ink-900">“eu não posso fazer nada”.</strong>
                </p>
                <p>Entre controlar tudo e não poder fazer nada existe um espaço enorme.</p>
              </Body>
              <Lines
                className="jf-body mt-6 border-l-[3px] border-red-brand pl-5 text-ink-800"
                items={[
                  "É nesse espaço que escolhemos.",
                  "Influenciamos.",
                  "Aprendemos.",
                  "Construímos.",
                  "Mudamos de direção.",
                  "Sustentamos algumas coisas.",
                  "Abandonamos outras.",
                  "Começamos movimentos que alteram o que pode acontecer depois.",
                ]}
              />
            </div>
            <div>
              <ul className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink-900/15 lg:grid-cols-1 lg:gap-6 lg:divide-x-0">
                {modes.map((m, i) => (
                  <li key={m.t} className={`${i ? "sm:pl-5" : "sm:pr-5"} lg:px-0`}>
                    <svg viewBox="0 0 60 60" className="h-14 w-14" aria-hidden>
                      <path
                        d="M36 6C18 3 6 15 6 30s11 25 25 25 24-11 23-25c-1-10-6-18-14-21"
                        fill="none"
                        stroke={m.active ? "var(--jf-red-500)" : "var(--jf-ink-500)"}
                        strokeOpacity={m.active ? 1 : 0.35}
                        strokeWidth={m.active ? 3 : 2}
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className={`mt-4 font-serif text-[21px] uppercase tracking-[0.04em] ${m.active ? "text-red-brand" : ""}`}>
                      {m.t}
                    </h3>
                    <div className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink-700">{m.d}</div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 bg-blush-100/70 px-7 py-6">
                <p className="font-serif text-[clamp(22px,1.9vw,28px)] leading-snug text-red-brand">
                  Participar do futuro não significa decidir o resultado.
                  <br />
                  Significa não se ausentar daquilo que ajudamos a construir.
                </p>
              </div>
              <Display as="h3" size="sm" className="mt-10 border-l-[3px] border-red-brand pl-5">
                Um movimento muda o que pode acontecer depois.
              </Display>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="jf-eyebrow text-ink-900">Para uma pessoa</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                    Agência pode aparecer numa decisão pequena. Numa conversa. Num limite. Num comportamento. Num aprendizado.
                    Numa mudança de rota.
                  </p>
                </div>
                <div>
                  <p className="jf-eyebrow text-ink-900">Para uma organização</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">Pode aparecer em:</p>
                  <Lines
                    className="mt-1 text-[15px] leading-relaxed text-ink-700"
                    items={[
                      "uma política;",
                      "uma tecnologia adotada;",
                      "um comportamento recompensado;",
                      "um investimento;",
                      "um modelo de liderança;",
                      "uma escolha estratégica.",
                    ]}
                  />
                </div>
              </div>
              <p className="jf-body mt-6 text-ink-700">
                Nem sempre controlamos o resultado.{" "}
                <strong className="font-semibold text-ink-900">
                  Mas quase sempre estamos participando daquilo que se torna mais provável.
                </strong>
              </p>
            </div>
          </div>
        </Container>
        <div className="relative mt-12 min-h-[480px] lg:mt-0">
          <Photo
            src="/images/ph/futuros-humanos/agencia.webp"
            alt="Ju Ferreira apoiada à mesa, olhando para fora pela janela"
            sizes="(min-width:1024px) 32vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[40%_30%]"
          />
          <Stroke shape="loop" className="absolute -left-8 top-4 h-[70%] w-[90%]" width={2.5} />
        </div>
      </div>
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 border-t border-ink-900/15 pt-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-ink-900/15">
          <div className="border-l-[3px] border-red-brand pl-5 md:mr-10">
            <p className="jf-body text-ink-700">
              Não controlar o futuro não nos torna irrelevantes.
              <br />
              Também não nos torna soberanos sobre ele.
            </p>
            <p className="jf-lead mt-2 text-red-brand">Nos torna participantes.</p>
          </div>
          <div className="md:pl-10">
            <p className="jf-body text-ink-700">A pergunta não é:</p>
            <p className="font-serif text-[20px]">“como controlar o que vem depois?”</p>
            <p className="jf-body mt-3 font-semibold text-red-brand">A pergunta é:</p>
            <p className="jf-lead text-red-brand">“como permanecer presente naquilo que estamos ajudando a construir?”</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 5 — O AUTOMÁTICO ───────────────────────── */
export function FHAutomatico() {
  const flow = [
    { t: "Intenção", d: "O que dizemos que queremos construir.", icon: "target" },
    { t: "Repetição", d: "Aquilo que fazemos todos os dias.", icon: "loop" },
    { t: "Consequência", d: "O futuro que nossas práticas ajudam a tornar mais provável.", icon: "chart" },
  ] as const;
  const collage = [
    { src: "auto-laptop.webp", alt: "Notebook e xícara de café sobre a mesa", c: "col-span-4 row-span-4 -rotate-2" },
    { src: "auto-ju.webp", alt: "Ju Ferreira pensativa diante do notebook", c: "col-span-4 row-span-7 rotate-1" },
    { src: "auto-rua.webp", alt: "Pessoas caminhando apressadas na rua", c: "col-span-4 row-span-4 rotate-2" },
    { src: "auto-caderno.webp", alt: "Caderno com anotações e caneta", c: "col-span-4 row-span-4 rotate-1" },
    { src: "auto-celular.webp", alt: "Mão segurando um celular", c: "col-span-4 row-span-4 -rotate-1" },
  ];
  return (
    <Section label="O automático também constrói futuros">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <Display size="lg">
            O automático também <Em>constrói futuros.</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 text-ink-700">
            <p>A maior parte da vida não acontece em momentos extraordinários.</p>
            <p>
              Acontece enquanto a gente trabalha. Responde e-mails. Entra em reuniões. Cuida dos filhos. Repete processos.
              Contrata pessoas. Compra tecnologia. Aceita uma regra. Evita uma conversa. Adia uma decisão. Escolhe o caminho
              mais fácil porque está cansado demais para escolher outra coisa.
            </p>
          </Body>
          <p className="jf-hand mt-6 text-[30px] text-red-brand">Uma terça-feira qualquer.</p>
          <Body className="mt-6 text-ink-700">
            <p>E, enquanto simplesmente damos conta do presente, continuamos produzindo consequências.</p>
            <p className="font-medium text-ink-900">
              Porque futuro não é construído apenas nas grandes decisões. Ele também nasce daquilo que repetimos sem perceber.
            </p>
          </Body>
        </div>
        <div className="relative">
          <div className="grid auto-rows-[38px] grid-cols-12 gap-3 sm:auto-rows-[52px]">
            {collage.map((p) => (
              <div
                key={p.src}
                className={`relative overflow-hidden border-[6px] border-cream-50 bg-cream-50 shadow-[0_12px_30px_-18px_rgba(0,0,0,.55)] ${p.c} ${
                  p.src === "auto-ju.webp" ? "row-start-1 col-start-5" : ""
                }`}
              >
                <Photo src={`/images/ph/futuros-humanos/${p.src}`} alt={p.alt} sizes="(min-width:1024px) 20vw, 33vw" className="absolute inset-0" />
              </div>
            ))}
          </div>
          <StickyNote className="absolute -bottom-6 right-2 hidden sm:block" rotate={4}>
            Uma terça-feira qualquer.
          </StickyNote>
        </div>
      </Container>

      <Container className="mt-16">
        <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
          {flow.map((f, i) => (
            <li key={f.t} className="relative flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blush-100" aria-hidden>
                <FlowIcon name={f.icon} />
              </span>
              <div>
                <h3 className="font-serif text-[24px] uppercase tracking-[0.04em]">{f.t}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-700">{f.d}</p>
              </div>
              {i < flow.length - 1 && (
                <Stroke shape="arrow" className="absolute -right-6 top-4 hidden h-6 w-12 md:block" width={2.5} fibers={false} />
              )}
            </li>
          ))}
        </ol>
        <Display as="p" size="sm" className="mt-14 max-w-[980px]">
          O futuro não escuta apenas nossas intenções. <Em>Ele também responde às nossas repetições.</Em>
        </Display>
      </Container>

      <Container className="mt-14">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <div className="lg:pr-10">
            <Title as="h3" className="border-l-[3px] border-red-brand pl-4 text-[clamp(24px,2vw,30px)]">
              O automático não é neutro.
            </Title>
            <Body className="mt-5 text-[16px] text-ink-700">
              <p>Quando uma pessoa repete um comportamento, ela fortalece um caminho.</p>
              <p>Quando uma liderança recompensa determinado comportamento, ajuda a transformá-lo em cultura.</p>
              <p>Quando uma empresa automatiza uma decisão, escolhe quais critérios passarão a operar em escala.</p>
              <p>Quando ninguém questiona uma regra, a regra continua participando do futuro.</p>
              <p>
                Quando adiamos indefinidamente uma escolha, aquilo que já estava acontecendo continua ganhando vantagem.
              </p>
            </Body>
            <p className="mt-5 font-semibold text-ink-900">
              Não escolher conscientemente também altera aquilo que se torna mais provável.
            </p>
          </div>
          <div className="lg:px-10">
            <p className="jf-eyebrow text-ink-900">Para uma pessoa, o automático pode estar em:</p>
            <Lines
              dash
              className="mt-3 text-[15px] leading-relaxed text-ink-700"
              items={[
                "um hábito que nunca é questionado;",
                "uma decisão sempre adiada;",
                "um medo que passou a organizar escolhas;",
                "uma rotina que já não representa aquilo que ela diz querer.",
              ]}
            />
            <p className="jf-eyebrow mt-8 text-ink-900">Para uma organização, ele pode aparecer em:</p>
            <Lines
              dash
              className="mt-3 text-[15px] leading-relaxed text-ink-700"
              items={[
                "uma tecnologia adotada sem discussão;",
                "uma meta que recompensa o comportamento errado;",
                "um processo mantido apenas porque “sempre foi assim”;",
                "uma decisão automatizada cujos critérios ninguém mais examina.",
              ]}
            />
            <p className="jf-body mt-6 text-ink-700">
              O futuro pode parecer distante. Mas boa parte dele começa nesses lugares aparentemente pequenos.
            </p>
          </div>
          <div className="lg:pl-10">
            <h3 className="border-l-[3px] border-red-brand pl-4 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
              Se continuarmos repetindo exatamente aquilo que fazemos hoje,{" "}
              <Em>que futuro estamos ajudando a tornar mais provável?</Em>
            </h3>
            <Body className="mt-5 text-[16px] text-ink-700">
              <p>Talvez pensar futuros também seja aprender a enxergar aquilo que o cotidiano tornou invisível.</p>
              <p>Porque antes de construir algo diferente, muitas vezes precisamos perceber:</p>
            </Body>
            <p className="mt-2 font-semibold text-red-brand">o que já estamos construindo sem querer.</p>
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 rounded-[var(--jf-radius-sm)] bg-cream-100 p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:p-12">
          <Display as="h3" size="sm">
            Consciência não garante controle. <Em>Mas muda a qualidade da participação.</Em>
          </Display>
          <div>
            <p className="jf-body text-ink-700">
              Quando percebemos aquilo que estamos repetindo, ganhamos a possibilidade de perguntar:
            </p>
            <Lines
              dash
              className="mt-4 font-serif text-[19px] leading-snug"
              items={[
                "Isso ainda faz sentido?",
                "Isso nos aproxima da direção que escolhemos?",
                "O que precisa continuar?",
                "O que precisa parar?",
                <strong key="mov" className="font-semibold text-red-brand">
                  E qual pequeno movimento pode mudar o que acontece depois?
                </strong>,
              ]}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FlowIcon({ name }: { name: "target" | "loop" | "chart" }) {
  const c = { fill: "none", stroke: "var(--jf-ink-800)", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      {name === "target" && (
        <g {...c}>
          <circle cx="15" cy="17" r="11" />
          <circle cx="15" cy="17" r="6.5" />
          <circle cx="15" cy="17" r="2" />
          <path d="M15 17 27 5M23 5h4v4" stroke="var(--jf-red-500)" />
        </g>
      )}
      {name === "loop" && (
        <g {...c}>
          <path d="M26 13a11 11 0 0 0-19-4M6 19a11 11 0 0 0 19 4" />
          <path d="M6 5v5h5M26 27v-5h-5" stroke="var(--jf-red-500)" />
        </g>
      )}
      {name === "chart" && (
        <g {...c}>
          <path d="M5 27h22M8 27v-6h4v6M14 27V15h4v12M20 27V9h4v18" />
          <path d="M6 15 13 9l4 3 9-7" stroke="var(--jf-red-500)" />
        </g>
      )}
    </svg>
  );
}
