import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, Eyebrow, HandNote, NumberBadge, QuoteCard } from "@/components/ui/Typography";
import { DotList, IconBubble, Lines, OrgIcon, type OrgIconName, Pull, ReadMore } from "./parts";

import { tx, img } from "@/lib/editable";
export const FORM_ANCHOR = "#conversa";
export const FORMATS_ANCHOR = "#formatos";

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function OrgHero() {
  const support: { icon: OrgIconName; t: string; d: string }[] = [
    { icon: "target", t: tx("organizacoes/cbb06b8548", "Decisões"), d: tx("organizacoes/ee2fe9ca81", "O que priorizamos hoje molda possibilidades amanhã.") },
    { icon: "chip", t: tx("organizacoes/e5b9b620b1", "Tecnologia"), d: tx("organizacoes/30f6c50513", "Cada tecnologia adotada cria novas dinâmicas e novas perguntas.") },
    { icon: "people", t: tx("organizacoes/dacad784f4", "Pessoas"), d: tx("organizacoes/6616692cd5", "As capacidades das pessoas ampliam ou limitam o que é possível.") },
    { icon: "sprout", t: tx("organizacoes/58d2e09d7b", "Cultura"), d: tx("organizacoes/175d7b7138", "O que é valorizado hoje torna alguns futuros mais prováveis.") },
    { icon: "chart", t: tx("organizacoes/9d237b7d4b", "Estratégia"), d: tx("organizacoes/12216a16b3", "Toda estratégia é também uma escolha de futuros.") },
  ];
  return (
    <Section padded={false} label={tx("organizacoes/4b2522a71b", "Abertura")}>
      <div className="grid lg:grid-cols-[54%_46%]">
        <Container className="py-16 lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:py-24 lg:pr-10">
          <div className="jf-reveal">
            <Eyebrow>{tx("organizacoes/3de762407d", "Para Organizações")}</Eyebrow>
            <Display as="h1" size="lg" className="mt-6">
              {tx("organizacoes/4ed9ddba80", "Sua organização já está construindo futuros.")}{" "}
              <span className="relative inline-block">
                <Em>{tx("organizacoes/40545265e1", "A questão é: quais?")}</Em>
                <Stroke shape="underline" draw className="absolute -bottom-3 left-[30%] h-4 w-[70%]" width={3} />
              </span>
            </Display>
            <Body className="mt-10 max-w-[600px] text-ink-700">
              <Lines
                items={[
                  tx("organizacoes/26a657d33e", "Cada investimento cria possibilidades."),
                  tx("organizacoes/273002ec8e", "Cada tecnologia adotada muda alguma coisa."),
                  tx("organizacoes/550fa49450", "Cada comportamento recompensado fortalece uma cultura."),
                  tx("organizacoes/704fd43b99", "Cada decisão estratégica torna alguns caminhos mais prováveis e outros menos."),
                ]}
              />
              <Lines
                items={[
                  tx("organizacoes/c755851e59", "Nem tudo está sob nosso controle."),
                  tx("organizacoes/985c1b5fe2", "Mas isso não significa que as organizações apenas assistem ao que vem depois."),
                ]}
              />
              <p>
                {tx("organizacoes/08485ccb16", "Trabalho com organizações que querem ampliar sua capacidade de enxergar possibilidades, discutir direção, desenvolver capacidades e transformar reflexão em movimento.")}</p>
            </Body>
            <ButtonRow className="mt-10">
              <ButtonLink href={FORM_ANCHOR} size="lg">
                {tx("organizacoes/b919b28b44", "Conte o que sua organização está tentando construir")}</ButtonLink>
              <ButtonLink href={FORMATS_ANCHOR} variant="secondary">
                {tx("organizacoes/15b52af784", "Conheça as formas de trabalhar juntos")}</ButtonLink>
            </ButtonRow>
          </div>
        </Container>
        <div className="relative flex min-h-[460px] flex-col justify-end lg:min-h-full">
          <Photo
            src={img("organizacoes/3b6210b214", "/images/ensaio/palestras-workshop-02.webp")}
            alt={tx("organizacoes/957f22df8f", "Cena ilustrativa de Juliana facilitando uma atividade com post-its.")}
            priority
            sizes="(min-width:1024px) 46vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <QuoteCard className="relative m-[var(--jf-gutter)] max-w-[440px] shadow-[0_18px_40px_-24px_rgba(0,0,0,.45)] lg:mb-12 lg:ml-auto lg:mr-10">
            <strong className="font-medium">
              {tx("organizacoes/f345006ab2", "O futuro não acontece apenas com a organização. A organização também participa daquilo que acontece depois.")}</strong>
          </QuoteCard>
        </div>
      </div>
      <Container className="pb-16 lg:pb-20">
        <ul className="grid gap-8 border-t border-ink-900/15 pt-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-ink-900/15">
          {support.map((s) => (
            <li key={s.t} className="flex gap-4 lg:px-5 lg:first:pl-0">
              <IconBubble name={s.icon} />
              <div>
                <p className="font-serif text-[22px] leading-tight">{s.t}</p>
                <p className="mt-1 text-[15px] leading-snug text-ink-700">{s.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 2 — MUDANÇA NÃO É DIREÇÃO ───────────────────────── */
export function OrgMudanca() {
  const cols: { icon: OrgIconName; t: string; s: string; body: ReactNode }[] = [
    {
      icon: "pulse",
      t: tx("organizacoes/6ad403fa5c", "Mudança"),
      s: tx("organizacoes/c5c8109cb9", "Aquilo que está acontecendo."),
      body: (
        <>
          <Lines items={[tx("organizacoes/15867c8f84", "Mercado muda."), tx("organizacoes/06d149a281", "Tecnologia muda."), tx("organizacoes/247fa5480d", "Comportamentos mudam."), tx("organizacoes/83e87c36e8", "Concorrência muda."), tx("organizacoes/228e916f26", "Expectativas mudam.")]} />
          <p className="mt-3">{tx("organizacoes/cd9f630f5c", "A organização também precisa responder.")}</p>
        </>
      ),
    },
    {
      icon: "gear",
      t: tx("organizacoes/6ecd3dad11", "Adaptação"),
      s: tx("organizacoes/abb39958c9", "Aquilo que fazemos para continuar funcionando diante da mudança."),
      body: (
        <>
          <Lines items={[tx("organizacoes/652b734ab7", "Aprendemos."), tx("organizacoes/5e56f57199", "Reorganizamos."), tx("organizacoes/2b3ad525c7", "Automatizamos."), tx("organizacoes/3264cb5652", "Mudamos processos."), tx("organizacoes/cee35d58e6", "Desenvolvemos novas capacidades.")]} />
          <p className="mt-3">{tx("organizacoes/5a8181457a", "Adaptar-se importa.")}</p>
          <p className="mt-3">{tx("organizacoes/7df936134a", "Mas adaptação responde principalmente:")}</p>
          <p className="mt-1 font-medium text-red-bright">{tx("organizacoes/0914dd87af", "“Como continuamos funcionando nesse novo contexto?”")}</p>
        </>
      ),
    },
    {
      icon: "compass",
      t: tx("organizacoes/6c8c7ecdb8", "Direção"),
      s: tx("organizacoes/e3d5e8a32b", "Aquilo que escolhemos ajudar a construir."),
      body: (
        <>
          <p>{tx("organizacoes/fa1e138b3d", "Direção acrescenta outras perguntas:")}</p>
          <Lines
            className="mt-2 font-medium text-cream-50"
            items={[
              tx("organizacoes/5da847d59f", "O que queremos preservar?"),
              tx("organizacoes/ff81fac421", "O que precisamos abandonar?"),
              tx("organizacoes/6646bf7966", "O que vale a pena ampliar?"),
              tx("organizacoes/e4858e6301", "Que capacidades queremos desenvolver?"),
              tx("organizacoes/c52e268317", "Que futuro queremos ajudar a tornar possível?"),
            ]}
          />
          <p className="mt-3">{tx("organizacoes/5f39154e2c", "É aqui que estratégia encontra futuros.")}</p>
        </>
      ),
    },
  ];
  return (
    <Section tone="dark" padded={false} label={tx("organizacoes/9fffc3560b", "Mudança não é direção")}>
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="pt-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[760px] lg:pb-16 lg:pr-10">
          <Display size="lg">
            {tx("organizacoes/e049adcd01", "Mudar não é a mesma coisa que saber")} <Em>{tx("organizacoes/1c99ac4c06", "para onde ir.")}</Em>
          </Display>
          <Body className="mt-10 max-w-[600px] text-cream-50/85">
            <p>
              {tx("organizacoes/5462c1543d", "Organizações mudam o tempo inteiro. Adotam novas tecnologias. Redesenham processos. Reorganizam estruturas. Criam novas áreas. Automatizam decisões. Alteram modelos de trabalho. Lançam produtos. Revisam estratégias. Desenvolvem novas capacidades.")}</p>
            <p>{tx("organizacoes/41a27f5ce3", "Tudo isso pode ser necessário.")}</p>
            <p>
              {tx("organizacoes/4e0f49b665", "Mas existe uma pergunta anterior:")} <strong className="font-semibold text-red-bright">{tx("organizacoes/3b92bfd840", "necessário para quê?")}</strong>
            </p>
          </Body>
        </Container>
        <div className="relative min-h-[360px]">
          <Photo
            src={img("organizacoes/ceab1d8812", "/images/ensaio/organizacoes-conversa-lideranca.webp")}
            alt={tx("organizacoes/a3e641ee91", "Cena ilustrativa de Juliana em conversa individual com uma liderança.")}
            sizes="(min-width:1024px) 48vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/10 to-transparent max-lg:bg-gradient-to-b" aria-hidden />
        </div>
      </div>

      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-14">
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {cols.map((c, i) => (
              <li key={c.t} className="relative">
                <div className="flex items-center gap-4">
                  <IconBubble name={c.icon} />
                  <h3 className="font-serif text-[28px] uppercase leading-none tracking-wide">{c.t}</h3>
                </div>
                {i < cols.length - 1 && (
                  <Stroke shape="arrow" className="absolute -right-7 top-3 hidden h-6 w-10 md:block" color="var(--jf-red-400)" width={2} fibers={false} />
                )}
                <p className="mt-4 font-medium text-cream-50">{c.s}</p>
                <div className="mt-3 text-[15px] leading-relaxed text-cream-50/75">{c.body}</div>
              </li>
            ))}
          </ol>
          <figure className="relative self-start rounded-[var(--jf-radius-sm)] bg-blush-100 p-7 pl-14 text-ink-900">
            <span className="jf-display absolute left-5 top-4 text-[56px] leading-none text-red-brand" aria-hidden>
              “
            </span>
            <blockquote className="space-y-2 font-serif text-[19px] leading-snug">
              <p>{tx("organizacoes/930e381a21", "Porque uma organização pode se tornar mais rápida sem se tornar mais consciente.")}</p>
              <p>{tx("organizacoes/4fb5e43d36", "Mais eficiente sem estar indo na direção certa.")}</p>
              <p>{tx("organizacoes/2a33edc2aa", "Mais tecnológica sem ter clareza sobre aquilo que não deseja terceirizar.")}</p>
              <p>{tx("organizacoes/9c6451db06", "Mais adaptável sem saber o que pretende preservar.")}</p>
              <p>
                {tx("organizacoes/6f8d51c1b8", "Mais inovadora sem perguntar:")}{" "}
                <strong className="font-semibold text-red-brand">{tx("organizacoes/2a27f4b1e7", "que futuro essa inovação está ajudando a tornar mais provável?")}</strong>
              </p>
            </blockquote>
          </figure>
        </div>
      </Container>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[var(--jf-radius-sm)] bg-cream-50/[0.04] p-8 ring-1 ring-cream-50/10 lg:p-10">
            <span className="block h-1 w-10 bg-red-bright" aria-hidden />
            <h3 className="jf-display jf-display-sm mt-6">{tx("organizacoes/fda09dc16f", "Eficiência também pode acelerar a direção errada.")}</h3>
            <p className="mt-6 text-cream-50/85">
              {tx("organizacoes/03cf77609a", "Ser capaz de fazer mais, mais rápido e em maior escala continua exigindo uma pergunta:")}{" "}
              <strong className="font-semibold text-red-bright">{tx("organizacoes/f59201f8bd", "mais de quê e para quê?")}</strong>
            </p>
            <ReadMore onDark className="mt-6">
              <div className="space-y-4 text-[15px] leading-relaxed text-cream-50/80">
                <p>
                  {tx("organizacoes/a12b5e33e3", "Uma organização pode automatizar um processo. Mas isso não responde se o processo merece continuar existindo.")}</p>
                <p>{tx("organizacoes/9852617178", "Pode usar IA para acelerar uma decisão. Mas ainda precisa discutir os critérios dessa decisão.")}</p>
                <p>
                  {tx("organizacoes/3b6b3667bd", "Pode aumentar produtividade. Mas precisa decidir que tipo de trabalho, cultura e relação deseja produzir enquanto faz isso.")}</p>
                <p>
                  {tx("organizacoes/c9bb4fe1b9", "Pode coletar mais dados. Mas continua responsável por decidir o que fará com aquilo que passou a enxergar.")}</p>
                <p className="font-serif text-[22px] text-cream-50">{tx("organizacoes/a0a63c861e", "Capacidade não é direção.")}</p>
                <p>{tx("organizacoes/2c4bd459d1", "Muitas vezes, organizações tratam determinados futuros como inevitáveis:")}</p>
                <Lines
                  className="font-serif text-[18px] italic text-cream-50"
                  items={[tx("organizacoes/9c3f78557f", "“Todo mundo vai fazer.”"), tx("organizacoes/21652748b2", "“O mercado exige.”"), tx("organizacoes/ca1a1e456d", "“Não temos escolha.”"), tx("organizacoes/5acbf157f0", "“A tecnologia está indo para lá.”")]}
                />
                <p>{tx("organizacoes/aa21f2abb9", "Às vezes, essas forças são realmente muito fortes.")}</p>
                <p>{tx("organizacoes/aa3d6d88ed", "Mas tratá-las como destino cedo demais pode eliminar escolhas que ainda existem.")}</p>
                <p>
                  {tx("organizacoes/97cf301761", "Por isso, pensar futuros não serve apenas para identificar aquilo que está chegando. Serve também para perguntar:")}</p>
                <Lines
                  className="font-semibold text-red-bright"
                  items={[tx("organizacoes/4e37ad4c35", "O que ainda está em aberto?"), tx("organizacoes/df94bb7ef0", "Onde ainda existe espaço para escolha?")]}
                />
              </div>
            </ReadMore>
          </div>
          <div className="rounded-[var(--jf-radius-sm)] bg-cream-50/[0.04] p-8 ring-1 ring-cream-50/10 lg:p-10">
            <span className="block h-1 w-10 bg-red-bright" aria-hidden />
            <h3 className="mt-6 font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">
              {tx("organizacoes/021bda4bbc", "A organização não precisa escolher entre mudar e permanecer.")}</h3>
            <p className="mt-6 text-cream-50/85">{tx("organizacoes/acc07e4b5a", "Precisa aprender a distinguir:")}</p>
            <ul className="mt-4 space-y-2 font-medium text-cream-50">
              {[
                tx("organizacoes/4ab141dce0", "o que precisa acompanhar;"),
                tx("organizacoes/207687ff86", "o que precisa questionar;"),
                tx("organizacoes/a3500c23ad", "o que precisa preservar;"),
                tx("organizacoes/badc623a8c", "o que precisa desenvolver;"),
                tx("organizacoes/941a091cc1", "e o que deseja ajudar a construir."),
              ].map((t) => (
                <li key={t} className="flex items-center gap-4">
                  <span className="h-px w-6 shrink-0 bg-red-bright" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-[clamp(22px,2vw,30px)] text-red-bright">
              {tx("organizacoes/ac020fd1ab", "Mudança é condição. Direção é escolha.")}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 3 — AS PERGUNTAS QUE IMPORTAM ───────────────────────── */
export function OrgPerguntas() {
  const qs: { icon: OrgIconName; t: string; body: ReactNode; more?: ReactNode }[] = [
    {
      icon: "chart",
      t: tx("organizacoes/1a3f6048bb", "O que estamos ajudando a tornar mais provável?"),
      body: (
        <>
          <p>{tx("organizacoes/a7c51b002c", "Toda organização já produz futuro antes mesmo de escrever uma estratégia de futuro.")}</p>
          <Lines
            className="mt-3"
            items={[
              tx("organizacoes/dbe2472f81", "Pelas metas que define."),
              tx("organizacoes/f36227822e", "Pelos comportamentos que recompensa."),
              tx("organizacoes/69abaa0fcd", "Pelas tecnologias que adota."),
              tx("organizacoes/4cd59cbe2e", "Pelas pessoas que promove."),
              tx("organizacoes/379f7e8857", "Pelos projetos que financia."),
              tx("organizacoes/dbca3f6d93", "Pelas decisões que automatiza."),
              tx("organizacoes/46d17d1d8b", "Pelo que tolera."),
              tx("organizacoes/e51a40875e", "Pelo que repete."),
            ]}
          />
        </>
      ),
      more: (
        <>
          <p>{tx("organizacoes/b05e88158f", "A pergunta não é apenas: “Qual futuro esperamos?”")}</p>
          <p className="mt-2">
            {tx("organizacoes/9601e55fd6", "É também:")} <strong className="font-semibold text-red-brand">{tx("organizacoes/5fa0aa6cab", "“Que futuro nossas práticas atuais já estão favorecendo?”")}</strong>
          </p>
        </>
      ),
    },
    {
      icon: "eye",
      t: tx("organizacoes/05ab776807", "O que estamos tratando como inevitável?"),
      body: (
        <>
          <p>{tx("organizacoes/c8709663be", "Dentro das organizações, algumas frases ganham rapidamente aparência de verdade:")}</p>
          <Lines
            className="mt-3 italic"
            items={[tx("organizacoes/a591893b61", "“O mercado vai para lá.”"), tx("organizacoes/98b09f2d5d", "“Todo mundo terá que fazer isso.”"), tx("organizacoes/c27a50f265", "“A IA vai substituir.”"), tx("organizacoes/d2e8d63553", "“O cliente exige.”"), tx("organizacoes/063a45659e", "“Não temos escolha.”")]}
          />
        </>
      ),
      more: (
        <>
          <p>{tx("organizacoes/dc2c1631de", "Algumas dessas forças são reais.")}</p>
          <p className="mt-2">{tx("organizacoes/5e27d28719", "Mas transformar tendência em destino elimina escolhas antes da hora.")}</p>
          <p className="mt-2">
            {tx("organizacoes/c8d476a1cb", "Pensar futuros também significa perguntar:")}{" "}
            <strong className="font-semibold text-red-brand">{tx("organizacoes/00ad38a9ac", "onde ainda existe espaço para decisão?")}</strong>
          </p>
        </>
      ),
    },
    {
      icon: "bulb",
      t: tx("organizacoes/0ee85b0239", "O que queremos ajudar a tornar possível?"),
      body: (
        <>
          <p>{tx("organizacoes/ecb95398a0", "Não basta entender para onde o mundo pode ir. Uma organização também precisa discutir:")}</p>
          <Lines
            className="mt-3"
            items={[
              tx("organizacoes/0fdf492ff0", "que tipo de relação quer construir com seus clientes;"),
              tx("organizacoes/d5fb7fe520", "que cultura deseja fortalecer;"),
              tx("organizacoes/70d0f0fff3", "que papel pretende ter no mercado;"),
              tx("organizacoes/9023aee16e", "que uso deseja fazer da tecnologia;"),
              tx("organizacoes/f1cf86f998", "que tipo de liderança quer desenvolver;"),
              tx("organizacoes/bed322b152", "e quais futuros considera dignos de investimento."),
            ]}
          />
        </>
      ),
      more: (
        <>
          <p>{tx("organizacoes/35813e7dfa", "Aqui entramos em direção.")}</p>
          <p className="mt-2">{tx("organizacoes/172dc77d24", "Não: “O que acontecerá?”")}</p>
          <p className="mt-2">
            {tx("organizacoes/ec8e1c2e96", "Mas:")} <strong className="font-semibold text-red-brand">{tx("organizacoes/8ae094e32f", "“Do que queremos participar?”")}</strong>
          </p>
        </>
      ),
    },
    {
      icon: "people",
      t: tx("organizacoes/0b813f80d6", "Do que precisamos nos tornar capazes?"),
      body: (
        <>
          <p>{tx("organizacoes/e6f3120cd8", "Uma escolha estratégica pode ser boa e ainda assim ser impossível de sustentar com as capacidades atuais.")}</p>
          <p className="mt-3">{tx("organizacoes/8e3e0d86e0", "Talvez a organização precise desenvolver:")}</p>
          <Lines
            className="mt-1"
            items={[
              tx("organizacoes/fad2a246c5", "discernimento;"),
              tx("organizacoes/a297c25109", "novas competências;"),
              tx("organizacoes/9fdd6c0a09", "lideranças diferentes;"),
              tx("organizacoes/a570d48c38", "novos modelos de colaboração;"),
              tx("organizacoes/6d8cacc72c", "alfabetização tecnológica;"),
              tx("organizacoes/8e1e84aaaf", "capacidade de experimentar;"),
              tx("organizacoes/59ff829923", "maior tolerância à incerteza;"),
              tx("organizacoes/ccfc2d5838", "novas formas de tomar decisões."),
            ]}
          />
        </>
      ),
      more: (
        <p>
          {tx("organizacoes/d42924270e", "Porque existe uma diferença entre")} <strong className="font-semibold text-red-brand">{tx("organizacoes/e03e5b14bb", "querer determinado futuro")}</strong> {tx("organizacoes/1f0cd15bec", "e")}{" "}
          <strong className="font-semibold text-red-brand">{tx("organizacoes/6e43a08cc4", "estar preparado para construí-lo.")}</strong>
        </p>
      ),
    },
    {
      icon: "target",
      t: tx("organizacoes/a9400a52aa", "O que podemos começar a mover agora?"),
      body: (
        <>
          <p>{tx("organizacoes/5c45fa9cd5", "Futuros podem parecer distantes. Mas participação sempre começa no presente.")}</p>
          <Lines
            className="mt-3"
            items={[
              tx("organizacoes/c4f0b27665", "Com uma decisão."),
              tx("organizacoes/fafc1060d1", "Um experimento."),
              tx("organizacoes/1c652331db", "Uma conversa."),
              tx("organizacoes/2310faeea3", "Uma mudança de critério."),
              tx("organizacoes/a8e08b9acd", "Uma hipótese colocada à prova."),
              tx("organizacoes/68894cd7ec", "Um comportamento que deixa de ser recompensado."),
              tx("organizacoes/2e2aa56f05", "Uma capacidade que começa a ser desenvolvida."),
            ]}
          />
        </>
      ),
      more: (
        <p className="font-semibold text-red-brand">
          {tx("organizacoes/e16425eb4e", "Um movimento não determina o futuro. Mas muda aquilo que pode acontecer depois.")}</p>
      ),
    },
  ];
  return (
    <Section padded={false} label={tx("organizacoes/868fb65162", "As perguntas que importam")}>
      <div className="grid lg:grid-cols-[1fr_1fr_0.9fr]">
        <Container className="pt-[var(--jf-section-y)] lg:col-span-2 lg:ml-auto lg:mr-0 lg:max-w-[1000px] lg:pr-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <Display size="lg">
              {tx("organizacoes/a208bb4ebb", "A qualidade das decisões começa na qualidade")} <Em>{tx("organizacoes/66a8619bb7", "das perguntas.")}</Em>
            </Display>
            <Body className="text-ink-700">
              <p>{tx("organizacoes/5f58075029", "Grande parte da vida organizacional é construída para responder.")}</p>
              <Lines
                items={[
                  tx("organizacoes/0a54f2eb34", "Responder ao mercado."),
                  tx("organizacoes/ea15fb678b", "Responder ao cliente."),
                  tx("organizacoes/040a58e5f0", "Responder à concorrência."),
                  tx("organizacoes/143ad7256c", "Responder à tecnologia."),
                  tx("organizacoes/2e50eda7b5", "Responder a metas."),
                  tx("organizacoes/faa318d7c7", "Responder a problemas."),
                ]}
              />
              <p>{tx("organizacoes/2804c7ec75", "E responder rápido importa.")}</p>
              <p>
                {tx("organizacoes/229cf8fb0e", "Mas, às vezes, a diferença não está em responder mais depressa. Está em conseguir parar tempo suficiente para perguntar:")} <strong className="font-semibold text-red-brand">{tx("organizacoes/0becf35777", "Estamos respondendo à pergunta certa?")}</strong>
              </p>
              <p>
                {tx("organizacoes/468b3fdd54", "Porque uma pergunta diferente muda aquilo que conseguimos enxergar. E aquilo que conseguimos enxergar muda as escolhas disponíveis.")}</p>
            </Body>
          </div>
        </Container>
        <div className="relative mt-10 min-h-[300px] lg:mt-0">
          <Photo
            src={img("organizacoes/b6671b45a7", "/images/ensaio/home-04c-quadro-post-its.webp")}
            alt={tx("organizacoes/1a2fd5ae2f", "Cena ilustrativa de Juliana junto a um quadro com diagrama e post-its.")}
            sizes="(min-width:1024px) 32vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>

      <Container className="py-14">
        <ol className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-5 xl:divide-x xl:divide-ink-900/10">
          {qs.map((q, i) => (
            <li key={q.t} className="xl:px-5 xl:first:pl-0 xl:last:pr-0">
              <div className="flex items-start gap-4">
                <NumberBadge n={i + 1} className="shrink-0 bg-blush-100" />
                <h3 className="font-serif text-[22px] leading-tight">{q.t}</h3>
              </div>
              <OrgIcon name={q.icon} className="mt-4 text-red-brand" />
              <div className="mt-3 text-[15px] leading-relaxed text-ink-700">{q.body}</div>
              {q.more && <div className="mt-4 text-[15px] leading-relaxed text-ink-700">{q.more}</div>}
            </li>
          ))}
        </ol>
      </Container>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[1.4fr_1fr_0.8fr] lg:gap-12">
          <div className="relative pl-12">
            <span className="jf-display absolute left-0 top-0 text-[64px] leading-none text-red-brand" aria-hidden>
              “
            </span>
            <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              {tx("organizacoes/2965201ee5", "Uma organização não constrói futuro apenas quando cria uma estratégia de futuro.")}{" "}
              <Em>{tx("organizacoes/fe8becbad4", "Constrói futuro toda vez que escolhe o que priorizar hoje.")}</Em>
            </p>
            <Body className="mt-6 text-ink-700">
              <p>{tx("organizacoes/7c28f08218", "Perguntas melhores não significam paralisia. Não significa substituir ação por reflexão.")}</p>
              <p>{tx("organizacoes/16c47baf1e", "O objetivo é melhorar a relação entre as duas.")}</p>
              <p className="font-semibold text-ink-900">
                {tx("organizacoes/fe1f2c9366", "Refletir melhor para escolher melhor.")}<br />
                {tx("organizacoes/25b175b1e8", "Escolher melhor para construir com mais intenção.")}</p>
            </Body>
          </div>
          <Pull>
            {tx("organizacoes/d608dfd3f5", "Antes de perguntar “qual é a estratégia?”, talvez valha perguntar:")}{" "}
            <strong className="font-semibold text-red-brand">{tx("organizacoes/ca473a03f8", "Que futuro essa estratégia está ajudando a tornar mais provável?")}</strong>
          </Pull>
          <div>
            <p className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">{tx("organizacoes/a44752c2e1", "Estratégia também é uma escolha de futuros.")}</p>
            <Stroke shape="underline" className="mt-2 h-4 w-48" width={3} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 4 — TRÊS TERRITÓRIOS ───────────────────────── */
export function OrgTerritorios() {
  const terr: {
    icon: OrgIconName;
    t: [string, string];
    s: string;
    lead: ReactNode;
    more: ReactNode;
    qs: string[];
  }[] = [
    {
      icon: "compass",
      t: [tx("organizacoes/22e0dc37b7", "Futuros"), tx("organizacoes/06d060248d", "& Estratégia")],
      s: tx("organizacoes/a12597727d", "Quando a organização precisa ampliar o campo antes de escolher direção."),
      lead: (
        <>
          <p>{tx("organizacoes/405e1ab8a4", "Esse território entra quando a pergunta é:")}</p>
          <p className="mt-2 font-serif text-[19px] text-ink-900">
            {tx("organizacoes/b881986734", "Para onde podemos ir — e que parte desse caminho ainda podemos escolher?")}</p>
        </>
      ),
      more: (
        <>
          <p>{tx("organizacoes/9553c6e512", "Não se trata de prever com precisão aquilo que vai acontecer.")}</p>
          <p className="mt-2">{tx("organizacoes/9facc9511e", "Trata-se de enxergar:")}</p>
          <p className="mt-1">
            {tx("organizacoes/1e06aad380", "forças de mudança; tensões; possibilidades; suposições; riscos; oportunidades; e futuros que hoje ainda não parecem dominantes.")}</p>
          <p className="mt-2">
            {tx("organizacoes/024d32b832", "Para então discutir:")} <strong className="font-semibold text-ink-900">{tx("organizacoes/eeb8121a44", "O que queremos ajudar a tornar possível?")}</strong>
          </p>
        </>
      ),
      qs: [
        tx("organizacoes/f0a80b6647", "Que futuros estamos assumindo sem questionar?"),
        tx("organizacoes/9daec6a10e", "O que consideramos inevitável, mas talvez ainda esteja em aberto?"),
        tx("organizacoes/ac2bdf0a02", "Que possibilidades estamos deixando de enxergar porque estamos olhando apenas para o provável?"),
        tx("organizacoes/a032d87b1e", "Que futuro nossa estratégia atual está favorecendo?"),
        tx("organizacoes/78752f35a9", "O que merece investimento agora?"),
      ],
    },
    {
      icon: "chip",
      t: [tx("organizacoes/03e0f36970", "Tecnologia"), tx("organizacoes/241f9c90cd", "& Humanidade")],
      s: tx("organizacoes/d4d0ac65d9", "Quando novas capacidades exigem novas escolhas."),
      lead: (
        <>
          <p>{tx("organizacoes/ab0e8c3c74", "Tecnologia amplia aquilo que uma organização consegue fazer. IA. Automação. Dados. Novos sistemas. Novas formas de trabalhar.")}</p>
          <p className="mt-2">{tx("organizacoes/dd67aacba6", "Mas toda ampliação de capacidade traz uma questão de direção.")}</p>
          <p className="mt-2 font-serif text-[19px] text-ink-900">{tx("organizacoes/a1a0b637d8", "O que queremos fazer com aquilo que agora conseguimos fazer?")}</p>
        </>
      ),
      more: (
        <>
          <p>{tx("organizacoes/1d9916ec40", "Aqui, a conversa pode envolver:")}</p>
          <p className="mt-1">
            {tx("organizacoes/9475db1f69", "tecnologia e trabalho; IA e liderança; automação e decisão; produtividade e autoria; dados e responsabilidade; inovação e consequências humanas.")}</p>
          <p className="mt-2">{tx("organizacoes/951f64d9ca", "Não para demonizar tecnologia. Nem para celebrá-la sem questionamento.")}</p>
          <p className="mt-2">{tx("organizacoes/7eda908f16", "Mas para manter pessoas presentes nas escolhas que as ferramentas tornam possíveis.")}</p>
          <p className="mt-3 font-semibold text-red-brand">
            {tx("organizacoes/037ed56dc3", "Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.")}</p>
        </>
      ),
      qs: [
        tx("organizacoes/7841d9868e", "O que faz sentido delegar?"),
        tx("organizacoes/d16bab56e4", "O que não queremos terceirizar?"),
        tx("organizacoes/6c45911a15", "Que critérios continuam precisando de julgamento humano?"),
        tx("organizacoes/a671ef4dee", "Que capacidades ganham importância quando a tecnologia assume outras?"),
        tx("organizacoes/816e7703de", "Para quê estamos ampliando capacidade?"),
      ],
    },
    {
      icon: "people",
      t: [tx("organizacoes/088b0159f0", "Transformação"), tx("organizacoes/a13f887141", "& Capacidades")],
      s: tx("organizacoes/3d7549508f", "Quando saber que é preciso mudar já não é suficiente."),
      lead: (
        <>
          <p>{tx("organizacoes/c57a4c5847", "Talvez a organização já tenha estratégia. Já tenha tecnologia. Já tenha comunicado a mudança.")}</p>
          <p className="mt-2">{tx("organizacoes/432add0839", "E, ainda assim, alguma coisa não acontece.")}</p>
          <p className="mt-2">
            {tx("organizacoes/9dd21225e8", "Porque transformação não depende apenas de compreender racionalmente uma nova direção.")}</p>
        </>
      ),
      more: (
        <>
          <p>{tx("organizacoes/8213cf06e0", "Pessoas precisam:")}</p>
          <p className="mt-1">
            {tx("organizacoes/a268364739", "perceber; escolher; aprender; desaprender; experimentar; sustentar desconforto; desenvolver novas capacidades; e agir de maneiras diferentes.")}</p>
          <p className="mt-2">{tx("organizacoes/f4c2d3b73a", "É aqui que entram perguntas sobre:")}</p>
          <p className="mt-1">{tx("organizacoes/b8853f4fab", "liderança; cultura; comportamento; participação; capacidade; aprendizado; mudança; e movimento.")}</p>
        </>
      ),
      qs: [
        tx("organizacoes/661deb397d", "Do que nossas pessoas precisam se tornar capazes?"),
        tx("organizacoes/826ddefc84", "Que comportamentos a organização diz querer, mas não recompensa?"),
        tx("organizacoes/832ee2124f", "O que estamos tentando mudar sem mudar as condições que produziram o comportamento atual?"),
        tx("organizacoes/aa95011573", "Que capacidade falta entre a estratégia definida e a transformação desejada?"),
        tx("organizacoes/f063626249", "Como fazer as pessoas participarem da mudança em vez de apenas recebê-la?"),
      ],
    },
  ];
  return (
    <Section tone="cream" padded={false} label={tx("organizacoes/11f2c07301", "Três territórios de atuação")}>
      <div className="grid lg:grid-cols-[1fr_1fr_0.8fr]">
        <Container className="pt-[var(--jf-section-y)] lg:col-span-2 lg:ml-auto lg:mr-0 lg:max-w-[1000px] lg:pr-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Display size="lg">
              {tx("organizacoes/c9b92c20e0", "Três territórios.")} <Em>{tx("organizacoes/43e8ac91a1", "Muitas portas de entrada.")}</Em>
            </Display>
            <Body className="text-ink-700">
              <p>
                {tx("organizacoes/fa524f22bf", "As organizações normalmente não chegam dizendo: “Temos um problema de futuros.” Elas chegam com questões muito mais concretas.")}</p>
              <Lines
                items={[
                  tx("organizacoes/2d91eaaf07", "Uma tecnologia que está mudando o trabalho."),
                  tx("organizacoes/8599f3d35b", "Uma estratégia que precisa ser revista."),
                  tx("organizacoes/f95d855e05", "Uma liderança tentando conduzir transformação."),
                  tx("organizacoes/c01d1a22d3", "Uma cultura que diz uma coisa e recompensa outra."),
                  tx("organizacoes/3bf0e4f5a9", "Uma equipe que precisa desenvolver novas capacidades."),
                  tx("organizacoes/db84796eb6", "Uma decisão importante cercada de incerteza."),
                ]}
              />
              <p>
                {tx("organizacoes/7c1f9cb4a5", "É a partir dessas questões que meu trabalho pode entrar. Hoje, grande parte das conversas com organizações acontece no encontro entre")} <strong className="font-semibold text-ink-900">{tx("organizacoes/d0cef3978c", "três territórios")}</strong>.
              </p>
            </Body>
          </div>
        </Container>
        <div className="relative mt-10 min-h-[300px] lg:mt-0">
          <Photo
            src={img("organizacoes/4e5d60225a", "/images/ensaio/palestras-workshop-01.webp")}
            alt={tx("organizacoes/3cb141553d", "Cena ilustrativa de Juliana e um grupo discutindo ideias ao redor de uma mesa.")}
            sizes="(min-width:1024px) 30vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>

      <Container className="py-14">
        <ul className="grid gap-8 lg:grid-cols-3 lg:gap-0">
          {terr.map((t) => (
            <li
              key={t.t[0]}
              className="relative rounded-[var(--jf-radius-lg)] border border-red-brand/25 bg-cream-50/60 p-7 lg:rounded-[44%_44%_40%_40%/16%_16%_14%_14%] lg:p-12 lg:[&+&]:-ml-px"
            >
              <div className="flex items-center gap-5">
                <IconBubble name={t.icon} className="h-16 w-16" />
                <h3 className="font-serif text-[clamp(26px,2.3vw,36px)] leading-[1.02]">
                  {t.t[0]}
                  <br />
                  {t.t[1]}
                </h3>
              </div>
              <p className="mt-6 text-[17px] font-medium leading-snug">{t.s}</p>
              <div className="mt-4 text-[15px] leading-relaxed text-ink-700">{t.lead}</div>
              <ReadMore className="mt-4">
                <div className="text-[15px] leading-relaxed text-ink-700">{t.more}</div>
              </ReadMore>
              <Dash className="mt-6" />
              <p className="jf-eyebrow mt-4 text-[11px] text-red-brand">{tx("organizacoes/829217ff4a", "Perguntas que podem aparecer")}</p>
              <DotList items={t.qs} className="mt-3 text-[14.5px] leading-snug text-ink-800" />
            </li>
          ))}
        </ul>
      </Container>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="rounded-[var(--jf-radius-sm)] bg-blush-100 p-8 lg:mr-8">
            <div className="grid gap-6 md:grid-cols-[auto_1fr]">
              <p className="font-serif text-[clamp(24px,2.1vw,32px)] leading-tight">
                <span className="text-red-brand" aria-hidden>
                  “{" "}
                </span>
                {tx("organizacoes/cc44ad9865", "Na prática, eles quase sempre se encontram.")}</p>
              <div className="text-[15px] leading-relaxed text-ink-700">
                <Lines
                  items={[
                    tx("organizacoes/a6ca35b1ea", "Uma estratégia de futuros pode exigir novas capacidades."),
                    tx("organizacoes/03ba6fd447", "Uma transformação tecnológica pode exigir uma nova forma de liderar."),
                    tx("organizacoes/73281b1351", "Uma discussão sobre cultura pode revelar escolhas estratégicas."),
                    tx("organizacoes/6f09d878b4", "Uma conversa sobre IA pode terminar numa discussão sobre autoria, responsabilidade e direção."),
                  ]}
                />
                <p className="mt-3 font-semibold text-red-brand">{tx("organizacoes/3048c06678", "O problema real define a combinação.")}</p>
              </div>
            </div>
            <p className="mt-6 border-t border-ink-900/10 pt-5 text-[14px] leading-relaxed text-ink-700">
              {tx("organizacoes/8bb7393556", "Esses três campos são")} <strong className="font-semibold text-ink-900">{tx("organizacoes/47915433b7", "territórios de atuação")}</strong>{tx("organizacoes/26846e0679", ", não produtos, unidades de negócio ou soluções fechadas. A oferta concreta pode assumir a forma de palestra, workshop, experiência, projeto de futuros aplicados, jornada ou outra construção.")}</p>
          </div>
          <div className="lg:px-8">
            <p className="font-serif text-[22px] leading-snug">
              {tx("organizacoes/033cbad9c4", "A organização não precisa descobrir em qual caixa o problema cabe.")}</p>
            <p className="mt-3 text-[17px] font-semibold text-red-brand">{tx("organizacoes/dd847f2b12", "Nosso trabalho é entender que perguntas ele está trazendo.")}</p>
          </div>
          <div className="lg:pl-8">
            <Lines
              className="font-serif text-[22px] leading-snug"
              items={[tx("organizacoes/1320500cc5", "Às vezes, começamos pelo futuro."), tx("organizacoes/31e6d86198", "Às vezes, pela tecnologia."), tx("organizacoes/2a0b0cd809", "Às vezes, pelas pessoas.")]}
            />
            <p className="mt-3 font-semibold text-red-brand">{tx("organizacoes/e4f18f0576", "Quase nunca terminamos falando de apenas uma dessas coisas.")}</p>
            <ButtonLink href={FORM_ANCHOR} className="mt-8">
              {tx("organizacoes/6df91fa8e2", "Conte o desafio da sua organização")}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 5 — COMO PODEMOS TRABALHAR JUNTOS ───────────────────────── */
export function OrgFormatos() {
  const formats: {
    verb: string;
    legend: string;
    img: string;
    alt: string;
    icon: OrgIconName;
    t: string;
    s: string;
    body: ReactNode;
    foot?: ReactNode;
  }[] = [
    {
      verb: tx("organizacoes/8f6757dc6c", "Abrir"),
      legend: "palestra",
      img: img("organizacoes/9a0bdc5c3e", "/images/ensaio/palestras-palco-frente.webp"),
      alt: tx("organizacoes/1c81dd8915", "Cena ilustrativa de Juliana falando no palco, vista de frente."),
      icon: "people",
      t: tx("organizacoes/7d17829069", "Palestras"),
      s: tx("organizacoes/a061780cd0", "Para abrir campo."),
      body: (
        <>
          <p>
            {tx("organizacoes/20b08fa0b3", "Uma palestra pode colocar uma pergunta importante na sala de forma rápida, provocadora e acessível. Funciona especialmente bem quando a organização precisa:")}</p>
          <DotList
            className="mt-3"
            items={[
              tx("organizacoes/d4a29c27fb", "ampliar perspectiva;"),
              tx("organizacoes/95d682a10c", "inaugurar uma conversa;"),
              tx("organizacoes/efcb18e95e", "conectar temas que estavam separados;"),
              tx("organizacoes/1ca4f9a488", "provocar lideranças;"),
              tx("organizacoes/0905558c03", "criar linguagem comum;"),
              tx("organizacoes/c1df09baff", "ou marcar um momento importante."),
            ]}
          />
        </>
      ),
      foot: (
        <>
          <p>
            <strong className="font-semibold text-ink-900">{tx("organizacoes/39f49b22d9", "Futuros Humanos")}</strong> {tx("organizacoes/f3ac8e6aee", "é a palestra-mãe. Mas outras conversas podem nascer do contexto.")}</p>
          <ButtonLink href="/palestras" variant="secondary" size="sm" className="mt-5">
            {tx("organizacoes/06aa3ac4fc", "Conheça Palestras & Workshops")}</ButtonLink>
        </>
      ),
    },
    {
      verb: tx("organizacoes/184ccc42f9", "Trabalhar"),
      legend: "workshop",
      img: img("organizacoes/00aad0014e", "/images/ensaio/palestras-workshop-01.webp"),
      alt: tx("organizacoes/65040e4490", "Cena ilustrativa de Juliana e um grupo discutindo ideias ao redor de uma mesa."),
      icon: "gear",
      t: tx("organizacoes/6cd067c3c6", "Workshops"),
      s: tx("organizacoes/af93528e84", "Para transformar reflexão em participação."),
      body: (
        <>
          <p>{tx("organizacoes/e0b688f716", "Quando não basta ouvir. Quando as pessoas precisam trabalhar sobre a questão.")}</p>
          <DotList
            className="mt-3"
            items={[tx("organizacoes/de2413d764", "Discutir."), tx("organizacoes/987a704d83", "Escolher."), tx("organizacoes/a35166ef3d", "Confrontar pressupostos."), tx("organizacoes/2b5011b4e6", "Explorar possibilidades."), tx("organizacoes/6287c003c8", "Traduzir reflexão em movimento.")]}
          />
          <p className="mt-3">
            {tx("organizacoes/988d7f8e50", "O workshop pode nascer de: futuros; tecnologia; estratégia; liderança; transformação; cultura; capacidades.")}</p>
        </>
      ),
      foot: (
        <>
          <p className="rounded-[var(--jf-radius-sm)] bg-blush-100 p-4 font-semibold text-red-brand">
            {tx("organizacoes/c6ca7ad7e3", "A palestra pode abrir a conversa. O workshop permite trabalhá-la.")}</p>
          <p className="mt-3">{tx("organizacoes/4e0b49981a", "Mas um não depende obrigatoriamente do outro.")}</p>
        </>
      ),
    },
    {
      verb: tx("organizacoes/4cc07d77d2", "Aprofundar"),
      legend: tx("organizacoes/a33f83734c", "experiência customizada"),
      img: img("organizacoes/7831b6e8d0", "/images/ensaio/contexto-planejamento-equipe.webp"),
      alt: tx("organizacoes/afabdc229e", "Mãos organizando post-its e ideias em uma mesa de trabalho."),
      icon: "pen",
      t: tx("organizacoes/42e5224024", "Experiências customizadas"),
      s: tx("organizacoes/a139f896c3", "Para perguntas que não cabem num formato pronto."),
      body: (
        <>
          <p>{tx("organizacoes/eb7757f45d", "Algumas situações pedem uma construção própria. Pode ser:")}</p>
          <DotList
            className="mt-3"
            items={[
              tx("organizacoes/5b781c1b0f", "um encontro de liderança;"),
              tx("organizacoes/04177f167d", "uma convenção;"),
              tx("organizacoes/404193deef", "uma discussão estratégica;"),
              tx("organizacoes/5f4675f3aa", "uma experiência sobre futuros;"),
              tx("organizacoes/2afb9e567b", "um processo de transformação;"),
              tx("organizacoes/8234412601", "uma combinação de palestra, facilitação e trabalho em grupo;"),
              tx("organizacoes/a9131c4003", "ou outra arquitetura criada especificamente para aquela organização."),
            ]}
          />
        </>
      ),
      foot: <p className="font-semibold text-ink-900">{tx("organizacoes/f76c3904b4", "Não começamos pelo formato. Começamos pelo desafio.")}</p>,
    },
    {
      verb: tx("organizacoes/a928f5bcde", "Explorar"),
      legend: tx("organizacoes/fb1350eb99", "futuros aplicados"),
      img: img("organizacoes/f2655c88a3", "/images/ensaio/home-04c-quadro-post-its.webp"),
      alt: tx("organizacoes/2b1445b260", "Cena ilustrativa de Juliana junto a um quadro com diagrama e post-its."),
      icon: "eye",
      t: tx("organizacoes/fac80ae95e", "Futuros aplicados"),
      s: tx("organizacoes/ed72ec4d0f", "Quando a organização precisa explorar possibilidades com mais profundidade."),
      body: (
        <>
          <p>{tx("organizacoes/46d5267e53", "Nem toda questão de futuro pode ser resolvida numa conversa inspiracional. Às vezes é necessário:")}</p>
          <DotList
            className="mt-3"
            items={[
              tx("organizacoes/df07360e7c", "mapear mudanças;"),
              tx("organizacoes/ee2ff7f9e2", "explorar cenários;"),
              tx("organizacoes/713f2d22a1", "questionar pressupostos;"),
              tx("organizacoes/07ee1e104a", "imaginar futuros alternativos;"),
              tx("organizacoes/8abac81c7d", "examinar implicações;"),
              tx("organizacoes/129c9082de", "e transformar possibilidades em insumos estratégicos."),
            ]}
          />
        </>
      ),
      foot: (
        <p>
          {tx("organizacoes/82a19b66d2", "É aqui que o trabalho pode se conectar ao ecossistema da")} <strong className="font-semibold text-ink-900">{tx("organizacoes/497d688e8b", "What The Future?!")}</strong>{" "}
          {tx("organizacoes/48a3d8da2d", "e a abordagens de futuros aplicados, quando fizer sentido. Quando a pergunta pede outras competências, podemos ampliar a mesa.")}</p>
      ),
    },
    {
      verb: tx("organizacoes/b0ca440497", "Sustentar"),
      legend: tx("organizacoes/b40d500ed0", "jornada / programa"),
      img: img("organizacoes/a723f2c1dd", "/images/ensaio/organizacoes-conversa-lideranca.webp"),
      alt: tx("organizacoes/c09d9b8705", "Cena ilustrativa de Juliana em conversa individual com uma liderança."),
      icon: "chart",
      t: tx("organizacoes/700927203c", "Jornadas e programas"),
      s: tx("organizacoes/42fb29473a", "Quando o problema não termina num encontro."),
      body: (
        <>
          <p>{tx("organizacoes/64aeac32f7", "Algumas mudanças pedem continuidade. Nesse caso, pode fazer sentido combinar diferentes momentos:")}</p>
          <DotList
            className="mt-3"
            items={[tx("organizacoes/bfbc8b7289", "provocação;"), tx("organizacoes/9baef17ecd", "exploração;"), tx("organizacoes/3262a77252", "escolha;"), tx("organizacoes/8e930196f8", "desenvolvimento de capacidades;"), tx("organizacoes/954feb3409", "experimentação;"), tx("organizacoes/9aa9046153", "movimento.")]}
          />
        </>
      ),
      foot: (
        <p>
          {tx("organizacoes/ef909eb84b", "Não como programa engessado. Como uma jornada desenhada a partir do que a organização precisa sustentar ao longo do tempo.")}</p>
      ),
    },
  ];
  return (
    <Section label={tx("organizacoes/b4d40b828e", "Como podemos trabalhar juntos")} id="formatos">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-14">
          <Display size="lg">
            {tx("organizacoes/967aa248e6", "O formato é uma consequência")} <Em>{tx("organizacoes/b6cb914b32", "da pergunta.")}</Em>
          </Display>
          <Body className="text-ink-700">
            <p>
              {tx("organizacoes/85f2cc3ad9", "Uma mesma organização pode chegar com questões muito diferentes. Pode precisar abrir uma conversa. Alinhar lideranças. Explorar futuros. Discutir implicações de uma tecnologia. Desenvolver novas capacidades. Revisitar uma escolha estratégica. Ou construir uma experiência que ainda nem existe.")}</p>
            <p>{tx("organizacoes/b8905166a3", "Por isso, meu trabalho com organizações pode assumir formas diferentes.")}</p>
          </Body>
        </div>

        {/* Arquitetura de leitura — verbos soltos, sem setas: não é uma escada obrigatória */}
        <div className="mt-12 flex flex-col gap-4 border-y border-ink-900/15 py-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3" aria-label={tx("organizacoes/f7be9008d6", "Arquitetura de leitura dos formatos")}>
            {formats.map((f) => (
              <li key={f.verb} className="flex items-baseline gap-2">
                <span className="jf-eyebrow text-[13px] text-red-brand">{f.verb}</span>
                <span className="text-[14px] text-ink-500">— {f.legend}</span>
              </li>
            ))}
          </ul>
          <HandNote className="shrink-0 text-[26px] text-red-brand" rotate={-3}>
            {tx("organizacoes/44de41ee47", "Não é uma escada obrigatória.")}</HandNote>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-5">
          {formats.map((f) => (
            <li key={f.t} className="flex flex-col">
              <p className="jf-hand text-[24px] leading-none text-red-brand">{f.verb}</p>
              <div className="relative mt-3 aspect-[16/9] overflow-hidden rounded-[var(--jf-radius-sm)]">
                <Photo src={f.img} alt={f.alt} sizes="(min-width:1280px) 20vw, (min-width:768px) 50vw, 100vw" className="absolute inset-0" />
              </div>
              <div className="-mt-7 ml-4 flex items-end gap-3">
                <IconBubble name={f.icon} className="relative ring-4 ring-cream-50" />
              </div>
              <h3 className="mt-3 font-serif text-[26px] leading-tight">{f.t}</h3>
              <p className="mt-1 text-[15px] font-semibold leading-snug text-red-brand">{f.s}</p>
              <div className="mt-4 text-[15px] leading-relaxed text-ink-700">{f.body}</div>
              {f.foot && (
                <div className="mt-5 border-t border-red-brand/30 pt-4 text-[15px] leading-relaxed text-ink-700">{f.foot}</div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div>
            <h3 className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
              {tx("organizacoes/4b012a2475", "Você não precisa saber o que contratar antes de falar com a gente.")}</h3>
            <p className="mt-5 text-ink-700">
              {tx("organizacoes/8ddd77506e", "Pode chegar com: uma pergunta; um desafio; um momento estratégico; uma mudança; uma tecnologia; uma tensão; uma decisão importante.")}</p>
            <p className="mt-3 text-ink-700">
              {tx("organizacoes/43fb0ad8cd", "A partir daí, encontramos juntos:")}{" "}
              <strong className="font-semibold text-ink-900">
                {tx("organizacoes/d6de34d566", "qual profundidade faz sentido, quem precisa estar na sala e que tipo de experiência pode produzir a conversa necessária.")}</strong>
            </p>
            <div className="relative mt-10 pl-12">
              <span className="jf-display absolute left-0 top-0 text-[64px] leading-none text-red-brand" aria-hidden>
                “
              </span>
              <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">
                {tx("organizacoes/e426cf7ff0", "Não vendemos profundidade desnecessária.")}<br />
                {tx("organizacoes/9a006ca087", "Nem simplificamos um problema só para fazê-lo caber num formato.")}</p>
            </div>
          </div>
          <div className="rounded-[var(--jf-radius-md)] bg-blush-100 p-8 lg:p-10">
            <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              {tx("organizacoes/b53ccf7460", "A pergunta não é “qual serviço você quer contratar?”.")}</p>
            <p className="mt-3 font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              {tx("organizacoes/d2506e4c61", "É")} <Em>{tx("organizacoes/7748a149d1", "“o que precisa acontecer para essa organização conseguir avançar?”")}</Em>
            </p>
            <ButtonRow className="mt-8">
              <ButtonLink href={FORM_ANCHOR}>{tx("organizacoes/ee777eb069", "Conte o desafio da sua organização")}</ButtonLink>
              <ButtonLink href="/palestras" variant="secondary">
                {tx("organizacoes/0ecdc7cede", "Conheça Palestras & Workshops")}</ButtonLink>
            </ButtonRow>
          </div>
        </div>
      </Container>
    </Section>
  );
}
