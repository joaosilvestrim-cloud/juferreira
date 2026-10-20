import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, StickyNote, Title } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";
import { FuturesDiagram } from "./FuturesDiagram";

import { tx, img } from "@/lib/editable";
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
    <Section padded={false} className="min-h-[calc(100svh-var(--jf-header-h))]" label={tx("futuros-humanos/f8405d4adb", "Abertura")}>
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Photo
          src={img("futuros-humanos/14410af0e0", "/images/ensaio/home-01-abertura-vertical.webp")}
          alt={tx("futuros-humanos/7369301cb5", "Juliana no mirante, em enquadramento vertical ao entardecer.")}
          priority
          sizes="46vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
      </div>
      <Stroke shape="loop" draw className="absolute -right-6 top-0 hidden h-[100%] w-[46%] lg:block" width={3} />
      <Container className="flex min-h-[calc(100svh-var(--jf-header-h))] flex-col justify-center py-16 lg:py-20">
        <div className="jf-reveal max-w-[760px]">
          <Display as="h1" size="lg" caps>
            {tx("futuros-humanos/639f78dfbc", "O futuro mais provável não é")} <Em>{tx("futuros-humanos/533935ed4a", "o único futuro possível.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <p className="jf-body mt-8 max-w-[560px] text-ink-700">
            {tx("futuros-humanos/7f6e181214", "Não controlamos tudo o que vem depois.")}<br />
            {tx("futuros-humanos/24e77185eb", "Mas isso não significa que não participamos daquilo que vem depois.")}</p>
          <p className="jf-title mt-10">{tx("futuros-humanos/ffacdc32f7", "Futuros Humanos")}</p>
          <Dash className="mt-2" />
          <p className="jf-body mt-4 max-w-[600px] text-ink-700">
            {tx("futuros-humanos/6ee2c88375", "Uma investigação sobre futuros, tecnologia, escolhas e as capacidades humanas necessárias para participar conscientemente da construção daquilo que ainda pode existir.")}</p>
          <ButtonRow className="mt-10">
            <ButtonLink href="#tese" size="lg">
              {tx("futuros-humanos/27c13c416d", "Entenda a tese")}</ButtonLink>
            <ButtonLink href={CONTACT_ROUTES.organizacoes} variant="secondary" size="lg">
              {tx("futuros-humanos/a6d8fbc035", "Leve Futuros Humanos para sua organização")}</ButtonLink>
          </ButtonRow>
          <div className="mt-14 max-w-[560px] border-t border-ink-900/15 pt-8">
            <Pull>{tx("futuros-humanos/656066f4f6", "Aquilo que existe não esgota aquilo que pode existir.")}</Pull>
          </div>
        </div>
      </Container>
      <div className="relative h-[90vw] max-h-[560px] lg:hidden">
        <Photo src={img("futuros-humanos/f96c13fb35", "/images/ensaio/home-01-abertura-horizontal.webp")} alt={tx("futuros-humanos/bcd05f0d79", "Juliana de preto diante de uma paisagem ampla ao entardecer.")} sizes="100vw" className="absolute inset-0 jf-paper-edge" imgClassName="object-[74%_44%]" />
      </div>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — FERRAMENTAS / DECISÕES ───────────────────────── */
export function FHFerramentas() {
  return (
    <Section tone="dark" padded={false} label={tx("futuros-humanos/c803e75267", "Ferramentas mais poderosas, decisões mais humanas")}>
      <div className="grid lg:grid-cols-[64%_36%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[960px] lg:pr-12">
          <Display size="md">
            {tx("futuros-humanos/6853db14d8", "Quanto mais poderosas ficam nossas ferramentas,")} <Em>{tx("futuros-humanos/54e31ef3d8", "mais humanos precisamos ser")}</Em> {tx("futuros-humanos/c86a64e49f", "para decidir o que fazer com elas.")}</Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} color="var(--jf-red-400)" />
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-cream-50/20">
            <div className="text-cream-50/85 md:pr-10">
              <p className="jf-body">{tx("futuros-humanos/1a636830c0", "Estamos ampliando rapidamente aquilo que somos capazes de fazer.")}</p>
              <ul className="jf-body mt-5 space-y-1">
                {[tx("futuros-humanos/3640873cf5", "Criar."), tx("futuros-humanos/b1064f3c0c", "Prever."), tx("futuros-humanos/e6951e840d", "Automatizar."), tx("futuros-humanos/47eda87f2c", "Personalizar."), tx("futuros-humanos/1d069c8363", "Escalar."), tx("futuros-humanos/297bcd0854", "Decidir."), tx("futuros-humanos/dbdbf120b8", "Construir.")].map((v) => (
                  <li key={v} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-red-bright" aria-hidden />
                    {v}
                  </li>
                ))}
              </ul>
              <p className="jf-body mt-5">
                {tx("futuros-humanos/ed155e4455", "A tecnologia abre possibilidades que, até pouco tempo atrás, pareciam improváveis.")}</p>
            </div>
            <div className="md:pl-10">
              <p className="jf-body font-semibold text-cream-50">{tx("futuros-humanos/5e2d8a4f51", "Mas capacidade não é direção.")}</p>
              <Body className="mt-4 text-cream-50/80">
                <p>
                  {tx("futuros-humanos/4bdf6ef9c0", "Uma ferramenta pode ampliar nossa potência.")}<br />
                  {tx("futuros-humanos/d9e50b5b2a", "Ela não decide, por nós, o que merece ser ampliado.")}</p>
                <p>
                  {tx("futuros-humanos/af13a32021", "Pode nos ajudar a fazer algo mais rápido.")}<br />
                  {tx("futuros-humanos/a61d72e56d", "Não responde se deveríamos fazê-lo.")}</p>
                <p>
                  {tx("futuros-humanos/14af8f9828", "Pode transformar uma decisão em processo.")}<br />
                  {tx("futuros-humanos/0a7e1ef592", "Não elimina a responsabilidade pelas consequências.")}</p>
                <p>
                  {tx("futuros-humanos/4881a27ee9", "Por isso, talvez a pergunta mais importante diante de tecnologias cada vez mais poderosas não seja apenas:")}</p>
              </Body>
              <p className="mt-4 inline-block bg-cream-50/10 px-3 py-1.5 font-serif text-[21px]">
                {tx("futuros-humanos/75930ec81a", "“O que conseguimos fazer agora?”")}</p>
              <p className="jf-body mt-4 text-cream-50/80">{tx("futuros-humanos/5edc3a0e29", "Mas:")}</p>
              <h3 className="mt-2 font-serif text-[clamp(24px,2vw,30px)] leading-snug">
                <span className="bg-red-brand px-1.5 box-decoration-clone">{tx("futuros-humanos/943d8cebfd", "O que vale a pena fazer")}</span> {tx("futuros-humanos/26141011eb", "com aquilo que nos tornamos capazes de fazer?")}</h3>
              <p className="jf-body mt-4 text-cream-50/80">{tx("futuros-humanos/cae6c28b81", "Essa é uma das perguntas centrais de Futuros Humanos.")}</p>
            </div>
          </div>
        </Container>
        <div className="relative min-h-[460px] lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("futuros-humanos/ae24280b34", "/images/ensaio/ju-estudo-fones.webp")}
            alt={tx("futuros-humanos/034b972f41", "Juliana estudando com fones de ouvido, livro e notebook.")}
            sizes="(min-width:1024px) 36vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="circle" className="absolute left-[6%] top-[6%] h-[70%] w-[90%] opacity-90" width={2.5} color="var(--jf-red-400)" />
        </div>
      </div>
      <Container className="pb-[var(--jf-section-y)]">
        <div className="border-t border-cream-50/20 pt-10">
          <p className="jf-lead max-w-[1100px]">
            {tx("futuros-humanos/fcc42b0f37", "O futuro não será definido apenas pelas capacidades das nossas ferramentas.")}<br />
            <Em>{tx("futuros-humanos/a0bd31f659", "Será definido também pela qualidade das escolhas que fazemos com elas.")}</Em>
          </p>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 3 — A TESE ───────────────────────── */
export function FHTese() {
  const types = [
    { t: tx("futuros-humanos/1bdf362008", "Provável"), d: tx("futuros-humanos/58870eae85", "O que tende a acontecer se determinadas forças continuarem atuando."), dot: "bg-wine-700" },
    { t: tx("futuros-humanos/87e05f5a7e", "Possível"), d: tx("futuros-humanos/0cf5d02803", "O que poderia acontecer, mesmo que ainda não seja o caminho dominante."), dot: "bg-blush-200 ring-1 ring-red-brand/30" },
    { t: tx("futuros-humanos/aa61d45475", "Preferível"), d: tx("futuros-humanos/725c384699", "Aquilo que consideramos desejável ajudar a tornar possível."), dot: "border-2 border-dashed border-red-brand" },
  ];
  return (
    <Section label={tx("futuros-humanos/1cbaf4e0ae", "A tese: provável não é destino")} id="tese">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div>
          <Display size="lg">
            {tx("futuros-humanos/da14afa800", "O provável é uma possibilidade.")} <Em>{tx("futuros-humanos/4026a3fe74", "Não uma sentença.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 max-w-[560px] text-ink-700">
            <p>{tx("futuros-humanos/307c17b13c", "Todos nós fazemos previsões o tempo inteiro.")}</p>
            <p>{tx("futuros-humanos/53cb0bc67d", "Sobre mercados. Tecnologias. Carreiras. Empresas. Pessoas. A própria vida.")}</p>
            <p>
              {tx("futuros-humanos/e9e84329c4", "Observamos aquilo que existe hoje, identificamos tendências, padrões, forças e sinais e tentamos responder:")}</p>
          </Body>
          <Pull className="mt-6 max-w-[520px]">{tx("futuros-humanos/80a6fa7444", "“Se tudo continuar mais ou menos assim, para onde isso nos leva?”")}</Pull>
          <Body className="mt-6 max-w-[560px] text-ink-700">
            <p>{tx("futuros-humanos/ba07370793", "Essa pergunta é importante.")}</p>
            <p>{tx("futuros-humanos/f17321b0ea", "O problema começa quando transformamos a resposta em destino.")}</p>
            <p>
              {tx("futuros-humanos/7335ff9856", "Quando aquilo que parece mais provável passa a ser tratado como aquilo que")}{" "}
              <strong className="font-semibold text-ink-900">{tx("futuros-humanos/c09f934999", "necessariamente")}</strong> {tx("futuros-humanos/b42aa9e0da", "vai acontecer.")}</p>
            <p>{tx("futuros-humanos/f255c4b3f1", "Porque existem futuros que podem ser:")}</p>
          </Body>
          <p className="mt-3 font-serif text-[22px] leading-snug">
            {tx("futuros-humanos/bb217aab2a", "prováveis;")}<br />
            {tx("futuros-humanos/2bdc2fc377", "plausíveis;")}<br />
            {tx("futuros-humanos/47d1c600a3", "possíveis;")}<br />
            {tx("futuros-humanos/2dc3c261e7", "preferíveis.")}</p>
          <p className="jf-body mt-4 font-semibold">{tx("futuros-humanos/146d7f7662", "Eles não são sinônimos.")}</p>
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
            <p>{tx("futuros-humanos/42c42cf90f", "O provável fala sobre continuidade.")}</p>
            <p>{tx("futuros-humanos/742773ef7c", "O possível abre espaço para aquilo que ainda não aconteceu.")}</p>
            <p>{tx("futuros-humanos/c48ec9da00", "E o preferível adiciona uma pergunta indispensável:")}</p>
          </Body>
          <p className="mt-3 font-serif text-[clamp(21px,1.8vw,26px)] font-medium leading-snug text-red-brand">
            {tx("futuros-humanos/4030365149", "entre os futuros que podem existir, quais valem a pena ajudar a construir?")}</p>
          <Body className="mt-6 text-ink-700">
            <p>{tx("futuros-humanos/6d3a56ad8c", "Preferível não significa universalmente “bom”.")}</p>
            <p>{tx("futuros-humanos/d7c078e857", "Preferências mudam conforme contexto, valores, interesses, pessoas, organizações e sociedade.")}</p>
            <p>{tx("futuros-humanos/1c06e74a1e", "Por isso pensar futuros também exige discernimento, negociação e responsabilidade.")}</p>
          </Body>
        </div>
      </Container>

      <Container className="mt-16 lg:mt-20">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-[1.1fr_1fr_auto] lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <div className="lg:pr-10">
            <Pull className="text-[clamp(22px,2vw,30px)]">
              {tx("futuros-humanos/2fb3e0307f", "Se tratamos o provável como inevitável, começamos a tomar decisões como se já não houvesse escolha.")}</Pull>
            <p className="jf-body mt-5 text-ink-700">
              {tx("futuros-humanos/f16be1889f", "Organizações investem. Pessoas se adaptam. Mercados se reorganizam. Comportamentos se repetem.")}</p>
            <p className="jf-body mt-3 text-ink-700">
              {tx("futuros-humanos/8819094288", "E, pouco a pouco, ajudamos a construir exatamente aquilo que acreditávamos apenas estar prevendo.")}</p>
          </div>
          <div className="lg:px-10">
            <h3 className="jf-eyebrow text-[14px] text-red-brand">{tx("futuros-humanos/23ac37a3f2", "Prever também pode influenciar.")}</h3>
            <Body className="mt-5 text-ink-700">
              <p>{tx("futuros-humanos/d8bba6a7dc", "Pensar futuros não é negar tendências.")}</p>
              <p>{tx("futuros-humanos/8176e04477", "É enxergá-las sem entregar a elas a autoria do que vem depois.")}</p>
              <p>{tx("futuros-humanos/a83d0e0829", "É olhar para o provável e perguntar:")}</p>
            </Body>
            <p className="mt-3 font-serif text-[22px] font-medium">{tx("futuros-humanos/d231630774", "Que outros futuros também podem existir?")}</p>
            <p className="jf-body mt-4 text-ink-700">{tx("futuros-humanos/a97a773ec0", "E depois:")}</p>
            <p className="mt-2 font-serif text-[22px] font-medium text-red-brand">
              {tx("futuros-humanos/5e1ab1c779", "Quais deles queremos ajudar a tornar possíveis?")}</p>
          </div>
          <div className="flex items-center lg:pl-10">
            <StickyNote tone="paper" rotate={-4} className="max-w-[300px]">
              {tx("futuros-humanos/d27f291e83", "Aquilo que existe não esgota aquilo que pode existir.")}</StickyNote>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — AGÊNCIA ───────────────────────── */
export function FHAgencia() {
  const modes = [
    { t: tx("futuros-humanos/247a87c614", "Controle"), d: <p>{tx("futuros-humanos/1390ec5dff", "Pressupõe domínio sobre o resultado.")}</p>, active: false },
    {
      t: tx("futuros-humanos/af7c1b8640", "Participação"),
      d: <p>{tx("futuros-humanos/9dc027aa59", "Reconhece que existem limites, mas assume responsabilidade sobre escolhas, influência e ação.")}</p>,
      active: true,
    },
    {
      t: tx("futuros-humanos/9bd5bea028", "Omissão"),
      d: (
        <>
          <p>{tx("futuros-humanos/83d39b86c4", "Também participa.")}</p>
          <p>
            {tx("futuros-humanos/a01908fd3c", "Porque não escolher, não questionar e não agir não nos coloca fora do sistema. Às vezes, apenas reforça o caminho que já estava sendo construído.")}</p>
        </>
      ),
      active: false,
    },
  ];
  return (
    <Section label={tx("futuros-humanos/4595c64500", "Agência")} className="pb-0 lg:pb-0">
      <div className="grid lg:grid-cols-[68%_32%]">
        <Container className="lg:ml-auto lg:mr-0 lg:max-w-[1010px] lg:pr-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <Display size="lg">
                {tx("futuros-humanos/a15beb4140", "Agência não é controle.")} <Em>{tx("futuros-humanos/8732fd970a", "É participação.")}</Em>
              </Display>
              <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
              <Body className="mt-10 text-ink-700">
                <p>{tx("futuros-humanos/a5ab5b7f6e", "Não controlamos tudo o que vem depois.")}</p>
                <p>
                  {tx("futuros-humanos/ec84052563", "Há acaso. Há estruturas. Há outras pessoas. Há contexto. Há limites. Há decisões tomadas longe de nós. Há coisas que mudam antes mesmo de conseguirmos compreendê-las por inteiro.")}</p>
                <p>
                  {tx("futuros-humanos/2e02b5fbe4", "Mas existe um erro perigoso em transformar")} <strong className="font-semibold text-ink-900">{tx("futuros-humanos/7dff6b294c", "“eu não controlo tudo”")}</strong>{" "}
                  {tx("futuros-humanos/3e67c71e3d", "em")} <strong className="font-semibold text-ink-900">{tx("futuros-humanos/824cc0ef01", "“eu não posso fazer nada”.")}</strong>
                </p>
                <p>{tx("futuros-humanos/44f3ee07a2", "Entre controlar tudo e não poder fazer nada existe um espaço enorme.")}</p>
              </Body>
              <Lines
                className="jf-body mt-6 border-l-[3px] border-red-brand pl-5 text-ink-800"
                items={[
                  tx("futuros-humanos/ef8b6b2ad5", "É nesse espaço que escolhemos."),
                  tx("futuros-humanos/42e80a587a", "Influenciamos."),
                  tx("futuros-humanos/0ba06e9899", "Aprendemos."),
                  tx("futuros-humanos/99fb33a25c", "Construímos."),
                  tx("futuros-humanos/9fb87ccf18", "Mudamos de direção."),
                  tx("futuros-humanos/f502fb0350", "Sustentamos algumas coisas."),
                  tx("futuros-humanos/6bd5ecc32f", "Abandonamos outras."),
                  tx("futuros-humanos/8856404741", "Começamos movimentos que alteram o que pode acontecer depois."),
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
                  {tx("futuros-humanos/94fe032130", "Participar do futuro não significa decidir o resultado.")}<br />
                  {tx("futuros-humanos/b2cc580ae5", "Significa não se ausentar daquilo que ajudamos a construir.")}</p>
              </div>
              <Display as="h3" size="sm" className="mt-10 border-l-[3px] border-red-brand pl-5">
                {tx("futuros-humanos/2d81641eec", "Um movimento muda o que pode acontecer depois.")}</Display>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="jf-eyebrow text-ink-900">{tx("futuros-humanos/c705d3122d", "Para uma pessoa")}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                    {tx("futuros-humanos/3fd78ed203", "Agência pode aparecer numa decisão pequena. Numa conversa. Num limite. Num comportamento. Num aprendizado. Numa mudança de rota.")}</p>
                </div>
                <div>
                  <p className="jf-eyebrow text-ink-900">{tx("futuros-humanos/2197b699cb", "Para uma organização")}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{tx("futuros-humanos/0a420ce4b6", "Pode aparecer em:")}</p>
                  <Lines
                    className="mt-1 text-[15px] leading-relaxed text-ink-700"
                    items={[
                      tx("futuros-humanos/dee63f572d", "uma política;"),
                      tx("futuros-humanos/ac8d23de5a", "uma tecnologia adotada;"),
                      tx("futuros-humanos/2c9c02553a", "um comportamento recompensado;"),
                      tx("futuros-humanos/43a70c6c4b", "um investimento;"),
                      tx("futuros-humanos/3dcf5dd815", "um modelo de liderança;"),
                      tx("futuros-humanos/121b4d4d46", "uma escolha estratégica."),
                    ]}
                  />
                </div>
              </div>
              <p className="jf-body mt-6 text-ink-700">
                {tx("futuros-humanos/21b667ca55", "Nem sempre controlamos o resultado.")}{" "}
                <strong className="font-semibold text-ink-900">
                  {tx("futuros-humanos/367c61ceab", "Mas quase sempre estamos participando daquilo que se torna mais provável.")}</strong>
              </p>
            </div>
          </div>
        </Container>
        <div className="relative mt-12 min-h-[480px] lg:mt-0 lg:aspect-[2/3] lg:w-full lg:min-h-0 lg:self-center">
          <Photo
            src={img("futuros-humanos/bcef60804f", "/images/ensaio/pessoas-janela.webp")}
            alt={tx("futuros-humanos/7c8831bff7", "Juliana olhando pela janela, com expressão contemplativa.")}
            sizes="(min-width:1024px) 32vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="loop" className="absolute -left-8 top-4 h-[70%] w-[90%]" width={2.5} />
        </div>
      </div>
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 border-t border-ink-900/15 pt-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-ink-900/15">
          <div className="border-l-[3px] border-red-brand pl-5 md:mr-10">
            <p className="jf-body text-ink-700">
              {tx("futuros-humanos/5afa189b56", "Não controlar o futuro não nos torna irrelevantes.")}<br />
              {tx("futuros-humanos/ca49fe62a4", "Também não nos torna soberanos sobre ele.")}</p>
            <p className="jf-lead mt-2 text-red-brand">{tx("futuros-humanos/d3d74da3a6", "Nos torna participantes.")}</p>
          </div>
          <div className="md:pl-10">
            <p className="jf-body text-ink-700">{tx("futuros-humanos/7b42a3f22d", "A pergunta não é:")}</p>
            <p className="font-serif text-[20px]">{tx("futuros-humanos/52a95c0d36", "“como controlar o que vem depois?”")}</p>
            <p className="jf-body mt-3 font-semibold text-red-brand">{tx("futuros-humanos/95f08522aa", "A pergunta é:")}</p>
            <p className="jf-lead text-red-brand">{tx("futuros-humanos/279031f88b", "“como permanecer presente naquilo que estamos ajudando a construir?”")}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 5 — O AUTOMÁTICO ───────────────────────── */
export function FHAutomatico() {
  const flow = [
    { t: tx("futuros-humanos/bb20a70223", "Intenção"), d: tx("futuros-humanos/3cfa5eb863", "O que dizemos que queremos construir."), icon: "target" },
    { t: tx("futuros-humanos/3703266a4f", "Repetição"), d: tx("futuros-humanos/1b22e2909b", "Aquilo que fazemos todos os dias."), icon: "loop" },
    { t: tx("futuros-humanos/a9fd769941", "Consequência"), d: tx("futuros-humanos/271f14431f", "O futuro que nossas práticas ajudam a tornar mais provável."), icon: "chart" },
  ] as const;
  const collage = [
    { src: img("futuros-humanos/514e7f8460", "/images/ensaio/contexto-tecnologia-humana.webp"), alt: tx("futuros-humanos/04b9b9bd81", "Mãos usando um notebook ao lado de caderno e café."), c: "col-span-4 row-span-4 -rotate-2" },
    { src: img("futuros-humanos/d7e9b6ff10", "/images/ensaio/ju-trabalho-tecnologia.webp"), alt: tx("futuros-humanos/eaff941d34", "Juliana concentrada no trabalho em um notebook."), c: "col-span-4 row-span-7 rotate-1" },
    { src: img("futuros-humanos/028ea3a0ab", "/images/ensaio/contexto-cidade-movimento.webp"), alt: tx("futuros-humanos/3b0ab1ae12", "Pessoas caminhando pela cidade, com movimento suavemente desfocado."), c: "col-span-4 row-span-4 rotate-2" },
    { src: img("futuros-humanos/9a628c0e69", "/images/ensaio/contexto-caderno-escolhas.webp"), alt: tx("futuros-humanos/f2c9234347", "Mãos fazendo anotações e marcando escolhas em um caderno."), c: "col-span-4 row-span-4 rotate-1" },
    { src: img("futuros-humanos/aa10256b36", "/images/ensaio/contexto-celular-cotidiano.webp"), alt: tx("futuros-humanos/9d39509756", "Mão segurando um celular próximo a um caderno sobre a mesa."), c: "col-span-4 row-span-4 -rotate-1" },
  ];
  return (
    <Section label={tx("futuros-humanos/0ae6111fff", "O automático também constrói futuros")}>
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <Display size="lg">
            {tx("futuros-humanos/8c0fbaa734", "O automático também")} <Em>{tx("futuros-humanos/ceb47d5e1d", "constrói futuros.")}</Em>
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          <Body className="mt-10 text-ink-700">
            <p>{tx("futuros-humanos/423e55c6ea", "A maior parte da vida não acontece em momentos extraordinários.")}</p>
            <p>
              {tx("futuros-humanos/212113ba6c", "Acontece enquanto a gente trabalha. Responde e-mails. Entra em reuniões. Cuida dos filhos. Repete processos. Contrata pessoas. Compra tecnologia. Aceita uma regra. Evita uma conversa. Adia uma decisão. Escolhe o caminho mais fácil porque está cansado demais para escolher outra coisa.")}</p>
          </Body>
          <p className="jf-hand mt-6 text-[30px] text-red-brand">{tx("futuros-humanos/6c8a3126ee", "Uma terça-feira qualquer.")}</p>
          <Body className="mt-6 text-ink-700">
            <p>{tx("futuros-humanos/f3a3e4ce70", "E, enquanto simplesmente damos conta do presente, continuamos produzindo consequências.")}</p>
            <p className="font-medium text-ink-900">
              {tx("futuros-humanos/d1d485881d", "Porque futuro não é construído apenas nas grandes decisões. Ele também nasce daquilo que repetimos sem perceber.")}</p>
          </Body>
        </div>
        <div className="relative">
          <div className="grid auto-rows-[38px] grid-cols-12 gap-3 sm:auto-rows-[52px]">
            {collage.map((p) => (
              <div
                key={p.src}
                className={`relative overflow-hidden border-[6px] border-cream-50 bg-cream-50 shadow-[0_12px_30px_-18px_rgba(0,0,0,.55)] ${p.c} ${
                  p.src === "/images/ensaio/ju-trabalho-tecnologia.webp" ? "row-start-1 col-start-5" : ""
                }`}
              >
                <Photo src={p.src} alt={p.alt} sizes="(min-width:1024px) 20vw, 33vw" className="absolute inset-0" />
              </div>
            ))}
          </div>
          <StickyNote className="absolute -bottom-6 right-2 hidden sm:block" rotate={4}>
            {tx("futuros-humanos/160790bb61", "Uma terça-feira qualquer.")}</StickyNote>
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
          {tx("futuros-humanos/4df3f51d74", "O futuro não escuta apenas nossas intenções.")} <Em>{tx("futuros-humanos/81055b1e1a", "Ele também responde às nossas repetições.")}</Em>
        </Display>
      </Container>

      <Container className="mt-14">
        <div className="grid gap-12 border-t border-ink-900/15 pt-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          <div className="lg:pr-10">
            <Title as="h3" className="border-l-[3px] border-red-brand pl-4 text-[clamp(24px,2vw,30px)]">
              {tx("futuros-humanos/f44cb42f50", "O automático não é neutro.")}</Title>
            <Body className="mt-5 text-[16px] text-ink-700">
              <p>{tx("futuros-humanos/47190cc941", "Quando uma pessoa repete um comportamento, ela fortalece um caminho.")}</p>
              <p>{tx("futuros-humanos/ccb7cd37f4", "Quando uma liderança recompensa determinado comportamento, ajuda a transformá-lo em cultura.")}</p>
              <p>{tx("futuros-humanos/e11f56597e", "Quando uma empresa automatiza uma decisão, escolhe quais critérios passarão a operar em escala.")}</p>
              <p>{tx("futuros-humanos/3715c1891d", "Quando ninguém questiona uma regra, a regra continua participando do futuro.")}</p>
              <p>
                {tx("futuros-humanos/8c1ecd7265", "Quando adiamos indefinidamente uma escolha, aquilo que já estava acontecendo continua ganhando vantagem.")}</p>
            </Body>
            <p className="mt-5 font-semibold text-ink-900">
              {tx("futuros-humanos/6908bffe40", "Não escolher conscientemente também altera aquilo que se torna mais provável.")}</p>
          </div>
          <div className="lg:px-10">
            <p className="jf-eyebrow text-ink-900">{tx("futuros-humanos/e74a9a90e6", "Para uma pessoa, o automático pode estar em:")}</p>
            <Lines
              dash
              className="mt-3 text-[15px] leading-relaxed text-ink-700"
              items={[
                tx("futuros-humanos/b5dc0a6ba3", "um hábito que nunca é questionado;"),
                tx("futuros-humanos/dacc6a1bf5", "uma decisão sempre adiada;"),
                tx("futuros-humanos/85e89f6f05", "um medo que passou a organizar escolhas;"),
                tx("futuros-humanos/efa6851afb", "uma rotina que já não representa aquilo que ela diz querer."),
              ]}
            />
            <p className="jf-eyebrow mt-8 text-ink-900">{tx("futuros-humanos/df928373b3", "Para uma organização, ele pode aparecer em:")}</p>
            <Lines
              dash
              className="mt-3 text-[15px] leading-relaxed text-ink-700"
              items={[
                tx("futuros-humanos/993947f7ec", "uma tecnologia adotada sem discussão;"),
                tx("futuros-humanos/e095bd68f9", "uma meta que recompensa o comportamento errado;"),
                tx("futuros-humanos/5092705653", "um processo mantido apenas porque “sempre foi assim”;"),
                tx("futuros-humanos/cfd8c287d0", "uma decisão automatizada cujos critérios ninguém mais examina."),
              ]}
            />
            <p className="jf-body mt-6 text-ink-700">
              {tx("futuros-humanos/5d80e183ae", "O futuro pode parecer distante. Mas boa parte dele começa nesses lugares aparentemente pequenos.")}</p>
          </div>
          <div className="lg:pl-10">
            <h3 className="border-l-[3px] border-red-brand pl-4 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
              {tx("futuros-humanos/896b904f1e", "Se continuarmos repetindo exatamente aquilo que fazemos hoje,")}{" "}
              <Em>{tx("futuros-humanos/ce27653a3f", "que futuro estamos ajudando a tornar mais provável?")}</Em>
            </h3>
            <Body className="mt-5 text-[16px] text-ink-700">
              <p>{tx("futuros-humanos/0918329178", "Talvez pensar futuros também seja aprender a enxergar aquilo que o cotidiano tornou invisível.")}</p>
              <p>{tx("futuros-humanos/4c39b8356c", "Porque antes de construir algo diferente, muitas vezes precisamos perceber:")}</p>
            </Body>
            <p className="mt-2 font-semibold text-red-brand">{tx("futuros-humanos/e5fd0bfca5", "o que já estamos construindo sem querer.")}</p>
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 rounded-[var(--jf-radius-sm)] bg-cream-100 p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:p-12">
          <Display as="h3" size="sm">
            {tx("futuros-humanos/a591a13d34", "Consciência não garante controle.")} <Em>{tx("futuros-humanos/26d4e752a6", "Mas muda a qualidade da participação.")}</Em>
          </Display>
          <div>
            <p className="jf-body text-ink-700">
              {tx("futuros-humanos/27d4b777d5", "Quando percebemos aquilo que estamos repetindo, ganhamos a possibilidade de perguntar:")}</p>
            <Lines
              dash
              className="mt-4 font-serif text-[19px] leading-snug"
              items={[
                tx("futuros-humanos/2cd29eda27", "Isso ainda faz sentido?"),
                tx("futuros-humanos/b5b281d813", "Isso nos aproxima da direção que escolhemos?"),
                tx("futuros-humanos/ba71ad3c15", "O que precisa continuar?"),
                tx("futuros-humanos/25febb62b1", "O que precisa parar?"),
                <strong key="mov" className="font-semibold text-red-brand">
                  {tx("futuros-humanos/c3ce3d2e71", "E qual pequeno movimento pode mudar o que acontece depois?")}</strong>,
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
