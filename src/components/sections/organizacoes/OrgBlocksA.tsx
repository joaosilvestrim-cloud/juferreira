import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, Eyebrow, HandNote, NumberBadge, QuoteCard } from "@/components/ui/Typography";
import { DotList, IconBubble, Lines, OrgIcon, type OrgIconName, Pull, ReadMore } from "./parts";

export const FORM_ANCHOR = "#conversa";
export const FORMATS_ANCHOR = "#formatos";

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function OrgHero() {
  const support: { icon: OrgIconName; t: string; d: string }[] = [
    { icon: "target", t: "Decisões", d: "O que priorizamos hoje molda possibilidades amanhã." },
    { icon: "chip", t: "Tecnologia", d: "Cada tecnologia adotada cria novas dinâmicas e novas perguntas." },
    { icon: "people", t: "Pessoas", d: "As capacidades das pessoas ampliam ou limitam o que é possível." },
    { icon: "sprout", t: "Cultura", d: "O que é valorizado hoje torna alguns futuros mais prováveis." },
    { icon: "chart", t: "Estratégia", d: "Toda estratégia é também uma escolha de futuros." },
  ];
  return (
    <Section padded={false} label="Abertura">
      <div className="grid lg:grid-cols-[54%_46%]">
        <Container className="py-16 lg:ml-auto lg:mr-0 lg:max-w-[820px] lg:py-24 lg:pr-10">
          <div className="jf-reveal">
            <Eyebrow>Para Organizações</Eyebrow>
            <Display as="h1" size="lg" className="mt-6">
              Sua organização já está construindo futuros.{" "}
              <span className="relative inline-block">
                <Em>A questão é: quais?</Em>
                <Stroke shape="underline" draw className="absolute -bottom-3 left-[30%] h-4 w-[70%]" width={3} />
              </span>
            </Display>
            <Body className="mt-10 max-w-[600px] text-ink-700">
              <Lines
                items={[
                  "Cada investimento cria possibilidades.",
                  "Cada tecnologia adotada muda alguma coisa.",
                  "Cada comportamento recompensado fortalece uma cultura.",
                  "Cada decisão estratégica torna alguns caminhos mais prováveis e outros menos.",
                ]}
              />
              <Lines
                items={[
                  "Nem tudo está sob nosso controle.",
                  "Mas isso não significa que as organizações apenas assistem ao que vem depois.",
                ]}
              />
              <p>
                Trabalho com organizações que querem ampliar sua capacidade de enxergar possibilidades, discutir direção,
                desenvolver capacidades e transformar reflexão em movimento.
              </p>
            </Body>
            <ButtonRow className="mt-10">
              <ButtonLink href={FORM_ANCHOR} size="lg">
                Conte o que sua organização está tentando construir
              </ButtonLink>
              <ButtonLink href={FORMATS_ANCHOR} variant="secondary">
                Conheça as formas de trabalhar juntos
              </ButtonLink>
            </ButtonRow>
          </div>
        </Container>
        <div className="relative flex min-h-[460px] flex-col justify-end lg:min-h-full">
          <Photo
            src="/images/ju/equipe.webp"
            alt="Ju Ferreira conversando com uma equipe em volta da mesa"
            priority
            sizes="(min-width:1024px) 46vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[60%_25%]"
          />
          <QuoteCard className="relative m-[var(--jf-gutter)] max-w-[440px] shadow-[0_18px_40px_-24px_rgba(0,0,0,.45)] lg:mb-12 lg:ml-auto lg:mr-10">
            <strong className="font-medium">
              O futuro não acontece apenas com a organização. A organização também participa daquilo que acontece depois.
            </strong>
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
      t: "Mudança",
      s: "Aquilo que está acontecendo.",
      body: (
        <>
          <Lines items={["Mercado muda.", "Tecnologia muda.", "Comportamentos mudam.", "Concorrência muda.", "Expectativas mudam."]} />
          <p className="mt-3">A organização também precisa responder.</p>
        </>
      ),
    },
    {
      icon: "gear",
      t: "Adaptação",
      s: "Aquilo que fazemos para continuar funcionando diante da mudança.",
      body: (
        <>
          <Lines items={["Aprendemos.", "Reorganizamos.", "Automatizamos.", "Mudamos processos.", "Desenvolvemos novas capacidades."]} />
          <p className="mt-3">Adaptar-se importa.</p>
          <p className="mt-3">Mas adaptação responde principalmente:</p>
          <p className="mt-1 font-medium text-red-bright">“Como continuamos funcionando nesse novo contexto?”</p>
        </>
      ),
    },
    {
      icon: "compass",
      t: "Direção",
      s: "Aquilo que escolhemos ajudar a construir.",
      body: (
        <>
          <p>Direção acrescenta outras perguntas:</p>
          <Lines
            className="mt-2 font-medium text-cream-50"
            items={[
              "O que queremos preservar?",
              "O que precisamos abandonar?",
              "O que vale a pena ampliar?",
              "Que capacidades queremos desenvolver?",
              "Que futuro queremos ajudar a tornar possível?",
            ]}
          />
          <p className="mt-3">É aqui que estratégia encontra futuros.</p>
        </>
      ),
    },
  ];
  return (
    <Section tone="dark" padded={false} label="Mudança não é direção">
      <div className="grid lg:grid-cols-[52%_48%]">
        <Container className="pt-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[760px] lg:pb-16 lg:pr-10">
          <Display size="lg">
            Mudar não é a mesma coisa que saber <Em>para onde ir.</Em>
          </Display>
          <Body className="mt-10 max-w-[600px] text-cream-50/85">
            <p>
              Organizações mudam o tempo inteiro. Adotam novas tecnologias. Redesenham processos. Reorganizam estruturas.
              Criam novas áreas. Automatizam decisões. Alteram modelos de trabalho. Lançam produtos. Revisam estratégias.
              Desenvolvem novas capacidades.
            </p>
            <p>Tudo isso pode ser necessário.</p>
            <p>
              Mas existe uma pergunta anterior: <strong className="font-semibold text-red-bright">necessário para quê?</strong>
            </p>
          </Body>
        </Container>
        <div className="relative min-h-[360px]">
          <Photo
            src="/images/ju/retrato-biblioteca.webp"
            alt="Ju Ferreira pensativa em uma reunião"
            sizes="(min-width:1024px) 48vw, 100vw"
            className="absolute inset-0"
            imgClassName="object-[50%_25%]"
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
              <p>Porque uma organização pode se tornar mais rápida sem se tornar mais consciente.</p>
              <p>Mais eficiente sem estar indo na direção certa.</p>
              <p>Mais tecnológica sem ter clareza sobre aquilo que não deseja terceirizar.</p>
              <p>Mais adaptável sem saber o que pretende preservar.</p>
              <p>
                Mais inovadora sem perguntar:{" "}
                <strong className="font-semibold text-red-brand">que futuro essa inovação está ajudando a tornar mais provável?</strong>
              </p>
            </blockquote>
          </figure>
        </div>
      </Container>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[var(--jf-radius-sm)] bg-cream-50/[0.04] p-8 ring-1 ring-cream-50/10 lg:p-10">
            <span className="block h-1 w-10 bg-red-bright" aria-hidden />
            <h3 className="jf-display jf-display-sm mt-6">Eficiência também pode acelerar a direção errada.</h3>
            <p className="mt-6 text-cream-50/85">
              Ser capaz de fazer mais, mais rápido e em maior escala continua exigindo uma pergunta:{" "}
              <strong className="font-semibold text-red-bright">mais de quê e para quê?</strong>
            </p>
            <ReadMore onDark className="mt-6">
              <div className="space-y-4 text-[15px] leading-relaxed text-cream-50/80">
                <p>
                  Uma organização pode automatizar um processo. Mas isso não responde se o processo merece continuar
                  existindo.
                </p>
                <p>Pode usar IA para acelerar uma decisão. Mas ainda precisa discutir os critérios dessa decisão.</p>
                <p>
                  Pode aumentar produtividade. Mas precisa decidir que tipo de trabalho, cultura e relação deseja produzir
                  enquanto faz isso.
                </p>
                <p>
                  Pode coletar mais dados. Mas continua responsável por decidir o que fará com aquilo que passou a enxergar.
                </p>
                <p className="font-serif text-[22px] text-cream-50">Capacidade não é direção.</p>
                <p>Muitas vezes, organizações tratam determinados futuros como inevitáveis:</p>
                <Lines
                  className="font-serif text-[18px] italic text-cream-50"
                  items={["“Todo mundo vai fazer.”", "“O mercado exige.”", "“Não temos escolha.”", "“A tecnologia está indo para lá.”"]}
                />
                <p>Às vezes, essas forças são realmente muito fortes.</p>
                <p>Mas tratá-las como destino cedo demais pode eliminar escolhas que ainda existem.</p>
                <p>
                  Por isso, pensar futuros não serve apenas para identificar aquilo que está chegando. Serve também para
                  perguntar:
                </p>
                <Lines
                  className="font-semibold text-red-bright"
                  items={["O que ainda está em aberto?", "Onde ainda existe espaço para escolha?"]}
                />
              </div>
            </ReadMore>
          </div>
          <div className="rounded-[var(--jf-radius-sm)] bg-cream-50/[0.04] p-8 ring-1 ring-cream-50/10 lg:p-10">
            <span className="block h-1 w-10 bg-red-bright" aria-hidden />
            <h3 className="mt-6 font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">
              A organização não precisa escolher entre mudar e permanecer.
            </h3>
            <p className="mt-6 text-cream-50/85">Precisa aprender a distinguir:</p>
            <ul className="mt-4 space-y-2 font-medium text-cream-50">
              {[
                "o que precisa acompanhar;",
                "o que precisa questionar;",
                "o que precisa preservar;",
                "o que precisa desenvolver;",
                "e o que deseja ajudar a construir.",
              ].map((t) => (
                <li key={t} className="flex items-center gap-4">
                  <span className="h-px w-6 shrink-0 bg-red-bright" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-[clamp(22px,2vw,30px)] text-red-bright">
              Mudança é condição. Direção é escolha.
            </p>
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
      t: "O que estamos ajudando a tornar mais provável?",
      body: (
        <>
          <p>Toda organização já produz futuro antes mesmo de escrever uma estratégia de futuro.</p>
          <Lines
            className="mt-3"
            items={[
              "Pelas metas que define.",
              "Pelos comportamentos que recompensa.",
              "Pelas tecnologias que adota.",
              "Pelas pessoas que promove.",
              "Pelos projetos que financia.",
              "Pelas decisões que automatiza.",
              "Pelo que tolera.",
              "Pelo que repete.",
            ]}
          />
        </>
      ),
      more: (
        <>
          <p>A pergunta não é apenas: “Qual futuro esperamos?”</p>
          <p className="mt-2">
            É também: <strong className="font-semibold text-red-brand">“Que futuro nossas práticas atuais já estão favorecendo?”</strong>
          </p>
        </>
      ),
    },
    {
      icon: "eye",
      t: "O que estamos tratando como inevitável?",
      body: (
        <>
          <p>Dentro das organizações, algumas frases ganham rapidamente aparência de verdade:</p>
          <Lines
            className="mt-3 italic"
            items={["“O mercado vai para lá.”", "“Todo mundo terá que fazer isso.”", "“A IA vai substituir.”", "“O cliente exige.”", "“Não temos escolha.”"]}
          />
        </>
      ),
      more: (
        <>
          <p>Algumas dessas forças são reais.</p>
          <p className="mt-2">Mas transformar tendência em destino elimina escolhas antes da hora.</p>
          <p className="mt-2">
            Pensar futuros também significa perguntar:{" "}
            <strong className="font-semibold text-red-brand">onde ainda existe espaço para decisão?</strong>
          </p>
        </>
      ),
    },
    {
      icon: "bulb",
      t: "O que queremos ajudar a tornar possível?",
      body: (
        <>
          <p>Não basta entender para onde o mundo pode ir. Uma organização também precisa discutir:</p>
          <Lines
            className="mt-3"
            items={[
              "que tipo de relação quer construir com seus clientes;",
              "que cultura deseja fortalecer;",
              "que papel pretende ter no mercado;",
              "que uso deseja fazer da tecnologia;",
              "que tipo de liderança quer desenvolver;",
              "e quais futuros considera dignos de investimento.",
            ]}
          />
        </>
      ),
      more: (
        <>
          <p>Aqui entramos em direção.</p>
          <p className="mt-2">Não: “O que acontecerá?”</p>
          <p className="mt-2">
            Mas: <strong className="font-semibold text-red-brand">“Do que queremos participar?”</strong>
          </p>
        </>
      ),
    },
    {
      icon: "people",
      t: "Do que precisamos nos tornar capazes?",
      body: (
        <>
          <p>Uma escolha estratégica pode ser boa e ainda assim ser impossível de sustentar com as capacidades atuais.</p>
          <p className="mt-3">Talvez a organização precise desenvolver:</p>
          <Lines
            className="mt-1"
            items={[
              "discernimento;",
              "novas competências;",
              "lideranças diferentes;",
              "novos modelos de colaboração;",
              "alfabetização tecnológica;",
              "capacidade de experimentar;",
              "maior tolerância à incerteza;",
              "novas formas de tomar decisões.",
            ]}
          />
        </>
      ),
      more: (
        <p>
          Porque existe uma diferença entre <strong className="font-semibold text-red-brand">querer determinado futuro</strong> e{" "}
          <strong className="font-semibold text-red-brand">estar preparado para construí-lo.</strong>
        </p>
      ),
    },
    {
      icon: "target",
      t: "O que podemos começar a mover agora?",
      body: (
        <>
          <p>Futuros podem parecer distantes. Mas participação sempre começa no presente.</p>
          <Lines
            className="mt-3"
            items={[
              "Com uma decisão.",
              "Um experimento.",
              "Uma conversa.",
              "Uma mudança de critério.",
              "Uma hipótese colocada à prova.",
              "Um comportamento que deixa de ser recompensado.",
              "Uma capacidade que começa a ser desenvolvida.",
            ]}
          />
        </>
      ),
      more: (
        <p className="font-semibold text-red-brand">
          Um movimento não determina o futuro. Mas muda aquilo que pode acontecer depois.
        </p>
      ),
    },
  ];
  return (
    <Section padded={false} label="As perguntas que importam">
      <div className="grid lg:grid-cols-[1fr_1fr_0.9fr]">
        <Container className="pt-[var(--jf-section-y)] lg:col-span-2 lg:ml-auto lg:mr-0 lg:max-w-[1000px] lg:pr-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <Display size="lg">
              A qualidade das decisões começa na qualidade <Em>das perguntas.</Em>
            </Display>
            <Body className="text-ink-700">
              <p>Grande parte da vida organizacional é construída para responder.</p>
              <Lines
                items={[
                  "Responder ao mercado.",
                  "Responder ao cliente.",
                  "Responder à concorrência.",
                  "Responder à tecnologia.",
                  "Responder a metas.",
                  "Responder a problemas.",
                ]}
              />
              <p>E responder rápido importa.</p>
              <p>
                Mas, às vezes, a diferença não está em responder mais depressa. Está em conseguir parar tempo suficiente para
                perguntar: <strong className="font-semibold text-red-brand">Estamos respondendo à pergunta certa?</strong>
              </p>
              <p>
                Porque uma pergunta diferente muda aquilo que conseguimos enxergar. E aquilo que conseguimos enxergar muda as
                escolhas disponíveis.
              </p>
            </Body>
          </div>
        </Container>
        <div className="relative mt-10 min-h-[300px] lg:mt-0">
          <Photo
            src="/images/ju/quadro.webp"
            alt="Ju Ferreira escrevendo em um quadro branco"
            sizes="(min-width:1024px) 32vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[60%_30%]"
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
              Uma organização não constrói futuro apenas quando cria uma estratégia de futuro.{" "}
              <Em>Constrói futuro toda vez que escolhe o que priorizar hoje.</Em>
            </p>
            <Body className="mt-6 text-ink-700">
              <p>Perguntas melhores não significam paralisia. Não significa substituir ação por reflexão.</p>
              <p>O objetivo é melhorar a relação entre as duas.</p>
              <p className="font-semibold text-ink-900">
                Refletir melhor para escolher melhor.
                <br />
                Escolher melhor para construir com mais intenção.
              </p>
            </Body>
          </div>
          <Pull>
            Antes de perguntar “qual é a estratégia?”, talvez valha perguntar:{" "}
            <strong className="font-semibold text-red-brand">Que futuro essa estratégia está ajudando a tornar mais provável?</strong>
          </Pull>
          <div>
            <p className="font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">Estratégia também é uma escolha de futuros.</p>
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
      t: ["Futuros", "& Estratégia"],
      s: "Quando a organização precisa ampliar o campo antes de escolher direção.",
      lead: (
        <>
          <p>Esse território entra quando a pergunta é:</p>
          <p className="mt-2 font-serif text-[19px] text-ink-900">
            Para onde podemos ir — e que parte desse caminho ainda podemos escolher?
          </p>
        </>
      ),
      more: (
        <>
          <p>Não se trata de prever com precisão aquilo que vai acontecer.</p>
          <p className="mt-2">Trata-se de enxergar:</p>
          <p className="mt-1">
            forças de mudança; tensões; possibilidades; suposições; riscos; oportunidades; e futuros que hoje ainda não
            parecem dominantes.
          </p>
          <p className="mt-2">
            Para então discutir: <strong className="font-semibold text-ink-900">O que queremos ajudar a tornar possível?</strong>
          </p>
        </>
      ),
      qs: [
        "Que futuros estamos assumindo sem questionar?",
        "O que consideramos inevitável, mas talvez ainda esteja em aberto?",
        "Que possibilidades estamos deixando de enxergar porque estamos olhando apenas para o provável?",
        "Que futuro nossa estratégia atual está favorecendo?",
        "O que merece investimento agora?",
      ],
    },
    {
      icon: "chip",
      t: ["Tecnologia", "& Humanidade"],
      s: "Quando novas capacidades exigem novas escolhas.",
      lead: (
        <>
          <p>Tecnologia amplia aquilo que uma organização consegue fazer. IA. Automação. Dados. Novos sistemas. Novas formas de trabalhar.</p>
          <p className="mt-2">Mas toda ampliação de capacidade traz uma questão de direção.</p>
          <p className="mt-2 font-serif text-[19px] text-ink-900">O que queremos fazer com aquilo que agora conseguimos fazer?</p>
        </>
      ),
      more: (
        <>
          <p>Aqui, a conversa pode envolver:</p>
          <p className="mt-1">
            tecnologia e trabalho; IA e liderança; automação e decisão; produtividade e autoria; dados e responsabilidade;
            inovação e consequências humanas.
          </p>
          <p className="mt-2">Não para demonizar tecnologia. Nem para celebrá-la sem questionamento.</p>
          <p className="mt-2">Mas para manter pessoas presentes nas escolhas que as ferramentas tornam possíveis.</p>
          <p className="mt-3 font-semibold text-red-brand">
            Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.
          </p>
        </>
      ),
      qs: [
        "O que faz sentido delegar?",
        "O que não queremos terceirizar?",
        "Que critérios continuam precisando de julgamento humano?",
        "Que capacidades ganham importância quando a tecnologia assume outras?",
        "Para quê estamos ampliando capacidade?",
      ],
    },
    {
      icon: "people",
      t: ["Transformação", "& Capacidades"],
      s: "Quando saber que é preciso mudar já não é suficiente.",
      lead: (
        <>
          <p>Talvez a organização já tenha estratégia. Já tenha tecnologia. Já tenha comunicado a mudança.</p>
          <p className="mt-2">E, ainda assim, alguma coisa não acontece.</p>
          <p className="mt-2">
            Porque transformação não depende apenas de compreender racionalmente uma nova direção.
          </p>
        </>
      ),
      more: (
        <>
          <p>Pessoas precisam:</p>
          <p className="mt-1">
            perceber; escolher; aprender; desaprender; experimentar; sustentar desconforto; desenvolver novas capacidades; e
            agir de maneiras diferentes.
          </p>
          <p className="mt-2">É aqui que entram perguntas sobre:</p>
          <p className="mt-1">liderança; cultura; comportamento; participação; capacidade; aprendizado; mudança; e movimento.</p>
        </>
      ),
      qs: [
        "Do que nossas pessoas precisam se tornar capazes?",
        "Que comportamentos a organização diz querer, mas não recompensa?",
        "O que estamos tentando mudar sem mudar as condições que produziram o comportamento atual?",
        "Que capacidade falta entre a estratégia definida e a transformação desejada?",
        "Como fazer as pessoas participarem da mudança em vez de apenas recebê-la?",
      ],
    },
  ];
  return (
    <Section tone="cream" padded={false} label="Três territórios de atuação">
      <div className="grid lg:grid-cols-[1fr_1fr_0.8fr]">
        <Container className="pt-[var(--jf-section-y)] lg:col-span-2 lg:ml-auto lg:mr-0 lg:max-w-[1000px] lg:pr-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Display size="lg">
              Três territórios. <Em>Muitas portas de entrada.</Em>
            </Display>
            <Body className="text-ink-700">
              <p>
                As organizações normalmente não chegam dizendo: “Temos um problema de futuros.” Elas chegam com questões muito
                mais concretas.
              </p>
              <Lines
                items={[
                  "Uma tecnologia que está mudando o trabalho.",
                  "Uma estratégia que precisa ser revista.",
                  "Uma liderança tentando conduzir transformação.",
                  "Uma cultura que diz uma coisa e recompensa outra.",
                  "Uma equipe que precisa desenvolver novas capacidades.",
                  "Uma decisão importante cercada de incerteza.",
                ]}
              />
              <p>
                É a partir dessas questões que meu trabalho pode entrar. Hoje, grande parte das conversas com organizações
                acontece no encontro entre <strong className="font-semibold text-ink-900">três territórios</strong>.
              </p>
            </Body>
          </div>
        </Container>
        <div className="relative mt-10 min-h-[300px] lg:mt-0">
          <Photo
            src="/images/ju/equipe.webp"
            alt="Ju Ferreira ouvindo atentamente em uma reunião"
            sizes="(min-width:1024px) 30vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[55%_30%]"
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
              <p className="jf-eyebrow mt-4 text-[11px] text-red-brand">Perguntas que podem aparecer</p>
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
                Na prática, eles quase sempre se encontram.
              </p>
              <div className="text-[15px] leading-relaxed text-ink-700">
                <Lines
                  items={[
                    "Uma estratégia de futuros pode exigir novas capacidades.",
                    "Uma transformação tecnológica pode exigir uma nova forma de liderar.",
                    "Uma discussão sobre cultura pode revelar escolhas estratégicas.",
                    "Uma conversa sobre IA pode terminar numa discussão sobre autoria, responsabilidade e direção.",
                  ]}
                />
                <p className="mt-3 font-semibold text-red-brand">O problema real define a combinação.</p>
              </div>
            </div>
            <p className="mt-6 border-t border-ink-900/10 pt-5 text-[14px] leading-relaxed text-ink-700">
              Esses três campos são <strong className="font-semibold text-ink-900">territórios de atuação</strong>, não
              produtos, unidades de negócio ou soluções fechadas. A oferta concreta pode assumir a forma de palestra, workshop,
              experiência, projeto de futuros aplicados, jornada ou outra construção.
            </p>
          </div>
          <div className="lg:px-8">
            <p className="font-serif text-[22px] leading-snug">
              A organização não precisa descobrir em qual caixa o problema cabe.
            </p>
            <p className="mt-3 text-[17px] font-semibold text-red-brand">Nosso trabalho é entender que perguntas ele está trazendo.</p>
          </div>
          <div className="lg:pl-8">
            <Lines
              className="font-serif text-[22px] leading-snug"
              items={["Às vezes, começamos pelo futuro.", "Às vezes, pela tecnologia.", "Às vezes, pelas pessoas."]}
            />
            <p className="mt-3 font-semibold text-red-brand">Quase nunca terminamos falando de apenas uma dessas coisas.</p>
            <ButtonLink href={FORM_ANCHOR} className="mt-8">
              Conte o desafio da sua organização
            </ButtonLink>
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
      verb: "Abrir",
      legend: "palestra",
      img: "formato-palestra",
      alt: "Ju Ferreira palestrando",
      icon: "people",
      t: "Palestras",
      s: "Para abrir campo.",
      body: (
        <>
          <p>
            Uma palestra pode colocar uma pergunta importante na sala de forma rápida, provocadora e acessível. Funciona
            especialmente bem quando a organização precisa:
          </p>
          <DotList
            className="mt-3"
            items={[
              "ampliar perspectiva;",
              "inaugurar uma conversa;",
              "conectar temas que estavam separados;",
              "provocar lideranças;",
              "criar linguagem comum;",
              "ou marcar um momento importante.",
            ]}
          />
        </>
      ),
      foot: (
        <>
          <p>
            <strong className="font-semibold text-ink-900">Futuros Humanos</strong> é a palestra-mãe. Mas outras conversas
            podem nascer do contexto.
          </p>
          <ButtonLink href="/palestras" variant="secondary" size="sm" className="mt-5">
            Conheça Palestras &amp; Workshops
          </ButtonLink>
        </>
      ),
    },
    {
      verb: "Trabalhar",
      legend: "workshop",
      img: "formato-workshop",
      alt: "Ju Ferreira conduzindo um workshop em grupo",
      icon: "gear",
      t: "Workshops",
      s: "Para transformar reflexão em participação.",
      body: (
        <>
          <p>Quando não basta ouvir. Quando as pessoas precisam trabalhar sobre a questão.</p>
          <DotList
            className="mt-3"
            items={["Discutir.", "Escolher.", "Confrontar pressupostos.", "Explorar possibilidades.", "Traduzir reflexão em movimento."]}
          />
          <p className="mt-3">
            O workshop pode nascer de: futuros; tecnologia; estratégia; liderança; transformação; cultura; capacidades.
          </p>
        </>
      ),
      foot: (
        <>
          <p className="rounded-[var(--jf-radius-sm)] bg-blush-100 p-4 font-semibold text-red-brand">
            A palestra pode abrir a conversa. O workshop permite trabalhá-la.
          </p>
          <p className="mt-3">Mas um não depende obrigatoriamente do outro.</p>
        </>
      ),
    },
    {
      verb: "Aprofundar",
      legend: "experiência customizada",
      img: "formato-experiencia",
      alt: "Equipe trabalhando sobre post-its em uma mesa",
      icon: "pen",
      t: "Experiências customizadas",
      s: "Para perguntas que não cabem num formato pronto.",
      body: (
        <>
          <p>Algumas situações pedem uma construção própria. Pode ser:</p>
          <DotList
            className="mt-3"
            items={[
              "um encontro de liderança;",
              "uma convenção;",
              "uma discussão estratégica;",
              "uma experiência sobre futuros;",
              "um processo de transformação;",
              "uma combinação de palestra, facilitação e trabalho em grupo;",
              "ou outra arquitetura criada especificamente para aquela organização.",
            ]}
          />
        </>
      ),
      foot: <p className="font-semibold text-ink-900">Não começamos pelo formato. Começamos pelo desafio.</p>,
    },
    {
      verb: "Explorar",
      legend: "futuros aplicados",
      img: "formato-futuros",
      alt: "Ju Ferreira diante de um quadro com anotações",
      icon: "eye",
      t: "Futuros aplicados",
      s: "Quando a organização precisa explorar possibilidades com mais profundidade.",
      body: (
        <>
          <p>Nem toda questão de futuro pode ser resolvida numa conversa inspiracional. Às vezes é necessário:</p>
          <DotList
            className="mt-3"
            items={[
              "mapear mudanças;",
              "explorar cenários;",
              "questionar pressupostos;",
              "imaginar futuros alternativos;",
              "examinar implicações;",
              "e transformar possibilidades em insumos estratégicos.",
            ]}
          />
        </>
      ),
      foot: (
        <p>
          É aqui que o trabalho pode se conectar ao ecossistema da <strong className="font-semibold text-ink-900">What The Future?!</strong>{" "}
          e a abordagens de futuros aplicados, quando fizer sentido. Quando a pergunta pede outras competências, podemos
          ampliar a mesa.
        </p>
      ),
    },
    {
      verb: "Sustentar",
      legend: "jornada / programa",
      img: "formato-jornada",
      alt: "Ju Ferreira em conversa com lideranças",
      icon: "chart",
      t: "Jornadas e programas",
      s: "Quando o problema não termina num encontro.",
      body: (
        <>
          <p>Algumas mudanças pedem continuidade. Nesse caso, pode fazer sentido combinar diferentes momentos:</p>
          <DotList
            className="mt-3"
            items={["provocação;", "exploração;", "escolha;", "desenvolvimento de capacidades;", "experimentação;", "movimento."]}
          />
        </>
      ),
      foot: (
        <p>
          Não como programa engessado. Como uma jornada desenhada a partir do que a organização precisa sustentar ao longo do
          tempo.
        </p>
      ),
    },
  ];
  return (
    <Section label="Como podemos trabalhar juntos" id="formatos">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-14">
          <Display size="lg">
            O formato é uma consequência <Em>da pergunta.</Em>
          </Display>
          <Body className="text-ink-700">
            <p>
              Uma mesma organização pode chegar com questões muito diferentes. Pode precisar abrir uma conversa. Alinhar
              lideranças. Explorar futuros. Discutir implicações de uma tecnologia. Desenvolver novas capacidades. Revisitar uma
              escolha estratégica. Ou construir uma experiência que ainda nem existe.
            </p>
            <p>Por isso, meu trabalho com organizações pode assumir formas diferentes.</p>
          </Body>
        </div>

        {/* Arquitetura de leitura — verbos soltos, sem setas: não é uma escada obrigatória */}
        <div className="mt-12 flex flex-col gap-4 border-y border-ink-900/15 py-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Arquitetura de leitura dos formatos">
            {formats.map((f) => (
              <li key={f.verb} className="flex items-baseline gap-2">
                <span className="jf-eyebrow text-[13px] text-red-brand">{f.verb}</span>
                <span className="text-[14px] text-ink-500">— {f.legend}</span>
              </li>
            ))}
          </ul>
          <HandNote className="shrink-0 text-[26px] text-red-brand" rotate={-3}>
            Não é uma escada obrigatória.
          </HandNote>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-5">
          {formats.map((f) => (
            <li key={f.t} className="flex flex-col">
              <p className="jf-hand text-[24px] leading-none text-red-brand">{f.verb}</p>
              <div className="relative mt-3 aspect-[16/9] overflow-hidden rounded-[var(--jf-radius-sm)]">
                <Photo src={`/images/ph/organizacoes/${f.img}.webp`} alt={f.alt} sizes="(min-width:1280px) 20vw, (min-width:768px) 50vw, 100vw" className="absolute inset-0" />
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
              Você não precisa saber o que contratar antes de falar com a gente.
            </h3>
            <p className="mt-5 text-ink-700">
              Pode chegar com: uma pergunta; um desafio; um momento estratégico; uma mudança; uma tecnologia; uma tensão; uma
              decisão importante.
            </p>
            <p className="mt-3 text-ink-700">
              A partir daí, encontramos juntos:{" "}
              <strong className="font-semibold text-ink-900">
                qual profundidade faz sentido, quem precisa estar na sala e que tipo de experiência pode produzir a conversa
                necessária.
              </strong>
            </p>
            <div className="relative mt-10 pl-12">
              <span className="jf-display absolute left-0 top-0 text-[64px] leading-none text-red-brand" aria-hidden>
                “
              </span>
              <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">
                Não vendemos profundidade desnecessária.
                <br />
                Nem simplificamos um problema só para fazê-lo caber num formato.
              </p>
            </div>
          </div>
          <div className="rounded-[var(--jf-radius-md)] bg-blush-100 p-8 lg:p-10">
            <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              A pergunta não é “qual serviço você quer contratar?”.
            </p>
            <p className="mt-3 font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              É <Em>“o que precisa acontecer para essa organização conseguir avançar?”</Em>
            </p>
            <ButtonRow className="mt-8">
              <ButtonLink href={FORM_ANCHOR}>Conte o desafio da sua organização</ButtonLink>
              <ButtonLink href="/palestras" variant="secondary">
                Conheça Palestras &amp; Workshops
              </ButtonLink>
            </ButtonRow>
          </div>
        </div>
      </Container>
    </Section>
  );
}
