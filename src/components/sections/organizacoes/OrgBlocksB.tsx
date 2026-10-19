import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, NumberBadge, QuoteCard } from "@/components/ui/Typography";
import { CONTACT_ROUTES, EXTERNAL, LINKS } from "@/lib/site";
import { FORM_ANCHOR } from "./OrgBlocksA";
import { OrgContactForm } from "./OrgContactForm";
import { DotList, IconBubble, Lines, type OrgIconName, Pull, ReadMore } from "./parts";

/* ───────────────────────── BLOCO 6 — FUTUROS APLICADOS / WTF ───────────────────────── */
export function OrgFuturosAplicados() {
  const when: { icon: OrgIconName; t: string; body: ReactNode }[] = [
    {
      icon: "compass",
      t: "Estratégia em contextos de incerteza",
      body: (
        <>
          <p>Quando a organização precisa pensar além de um único cenário provável.</p>
          <p className="mt-2">
            Não para escolher “o futuro certo”. Mas para construir estratégias mais conscientes das alternativas.
          </p>
        </>
      ),
    },
    {
      icon: "bulb",
      t: "Inovação e novas possibilidades",
      body: (
        <>
          <p>Quando a equipe está presa ao que já existe.</p>
          <p className="mt-2">
            Futuros aplicados podem ampliar o repertório de possibilidades antes de começar a desenhar soluções.
          </p>
          <p className="mt-2 font-semibold text-red-brand">Imaginação é instrumento estratégico.</p>
        </>
      ),
    },
    {
      icon: "chip",
      t: "Tecnologia e transformação",
      body: (
        <>
          <p>Quando uma nova tecnologia traz perguntas que ultrapassam implementação.</p>
          <Lines
            className="mt-2"
            items={[
              "Como muda o trabalho?",
              "Que comportamentos aparecem?",
              "Que relações podem mudar?",
              "Que capacidades serão necessárias?",
              "Que consequências ainda não estamos enxergando?",
            ]}
          />
        </>
      ),
    },
    {
      icon: "people",
      t: "Liderança e tomada de decisão",
      body: (
        <>
          <p>
            Quando líderes precisam desenvolver maior capacidade de pensar diante de incerteza, ambiguidade e futuros
            múltiplos.
          </p>
          <p className="mt-2">
            Não para eliminar incerteza. Mas para: <strong className="font-semibold text-red-brand">decidir melhor dentro dela.</strong>
          </p>
        </>
      ),
    },
  ];
  return (
    <Section padded={false} label="Futuros aplicados e What The Future?!">
      <div className="grid lg:grid-cols-[44%_56%]">
        <Container className="pt-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[700px] lg:pr-10">
          <Display size="lg">
            Algumas perguntas pedem <Em>mais do que uma voz.</Em>
          </Display>
          <Body className="mt-8 text-ink-700">
            <p>
              Existem desafios que começam numa conversa com a Ju e rapidamente mostram que precisam de outras lentes.
            </p>
            <Lines
              items={[
                "Mais pesquisa.",
                "Mais perspectivas.",
                "Outras disciplinas.",
                "Novas formas de imaginar.",
                "Mais espaço para explorar aquilo que ainda não existe.",
              ]}
            />
            <p>
              É nesses casos que o trabalho pode se conectar à <strong className="font-semibold text-ink-900">What The Future?!</strong>.
            </p>
            <p>
              A WTF é um <strong className="font-semibold text-ink-900">coletivo de futuristas</strong> dedicado a tornar o
              pensamento de futuros mais acessível, aplicado e útil para pessoas e organizações.
            </p>
            <p>
              Ju integra esse coletivo a partir especialmente de sua lente de{" "}
              <strong className="font-semibold text-ink-900">Futurismo Humanista</strong>.
            </p>
          </Body>
        </Container>
        <div className="relative mt-10 min-h-[320px] lg:mt-0">
          <Photo
            src="/images/ph/organizacoes/wtf.webp"
            alt="Ju Ferreira apresentando possibilidades de futuro em um quadro com imagens"
            sizes="(min-width:1024px) 56vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[45%_30%]"
          />
        </div>
      </div>

      {/* Distinção entre ecossistemas — sem hierarquia */}
      <Container className="pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <p className="text-ink-700">Mas existe uma distinção importante:</p>
            <p className="mt-3 font-serif text-[clamp(26px,2.6vw,40px)] leading-tight">
              Futuros Humanos não é WTF.
              <br />
              <Em>WTF não é Futuros Humanos.</Em>
            </p>
            <p className="mt-4 text-ink-700">São construções diferentes. Elas se encontram quando o problema pede.</p>

            <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-6">
                <p className="jf-eyebrow text-[12px] text-ink-900">Ju Ferreira</p>
                <Lines
                  className="mt-4 text-[15px] leading-relaxed text-ink-700"
                  items={["Futurismo Humanista", "Futuros Humanos", "Palestras / Workshops / Experiências"]}
                />
              </div>
              <div className="flex items-center justify-center text-red-brand" aria-hidden>
                <span className="text-[28px] sm:rotate-90">↕</span>
              </div>
              <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-6">
                <p className="jf-eyebrow text-[12px] text-ink-900">What The Future?!</p>
                <Lines
                  className="mt-4 text-[15px] leading-relaxed text-ink-700"
                  items={["Coletivo de futuristas", "Futuros aplicados", "SciFiXD", "Futurismo Pessoal", "Projetos multidisciplinares"]}
                />
              </div>
            </div>
            <p className="mt-4 text-center text-[14px] font-medium text-red-brand">Sem hierarquia entre os dois ecossistemas.</p>
          </div>

          <div>
            <h3 className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">O que significa futuros aplicados</h3>
            <Stroke shape="underline" className="mt-1 h-3 w-40" width={2.5} />
            <p className="mt-5 text-ink-700">Não é tentar adivinhar o que acontecerá.</p>
            <p className="mt-3 text-ink-700">
              É criar condições para uma organização explorar:{" "}
              <strong className="font-semibold text-ink-900">
                mudanças em curso; sinais emergentes; tensões; possibilidades; cenários; implicações; escolhas; e respostas
                estratégicas.
              </strong>
            </p>
            <p className="mt-3 text-ink-700">
              Pensar futuros, nesse contexto, pode ajudar uma organização a ampliar o campo antes de tomar uma decisão.
            </p>
            <ReadMore className="mt-5">
              <div className="space-y-2 text-[15px] leading-relaxed text-ink-700">
                <p>A pergunta deixa de ser apenas: “O que provavelmente vai acontecer?”</p>
                <p>E passa a incluir:</p>
                <DotList
                  className="font-medium text-ink-900"
                  items={[
                    "O que também poderia acontecer?",
                    "O que mudaria para nós em cada cenário?",
                    "Que pressupostos estamos carregando sem perceber?",
                    "Que oportunidades ou riscos aparecem quando olhamos de outro lugar?",
                    "O que queremos começar a construir antes que alguma dessas possibilidades se torne dominante?",
                  ]}
                />
              </div>
            </ReadMore>
            <QuoteCard className="mt-8">
              Pensar futuros não serve para reduzir o mundo a uma previsão. Serve para aumentar a quantidade e a qualidade das
              possibilidades que conseguimos considerar antes de escolher.
            </QuoteCard>
          </div>
        </div>
      </Container>

      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-10">
          <div>
            <h3 className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">Quando essa abordagem pode fazer sentido</h3>
            <ol className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-ink-900/10">
              {when.map((w, i) => (
                <li key={w.t} className="xl:px-5 xl:first:pl-0">
                  <div className="flex items-center gap-3">
                    <IconBubble name={w.icon} className="h-12 w-12" />
                    <span className="jf-display text-[22px] text-red-brand">{i + 1}.</span>
                  </div>
                  <h4 className="mt-4 font-serif text-[21px] leading-tight">{w.t}</h4>
                  <div className="mt-3 text-[15px] leading-relaxed text-ink-700">{w.body}</div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="border-ink-900/15 lg:border-l lg:pl-8" aria-label="Projetos do ecossistema">
            <p className="jf-eyebrow text-[12px] text-ink-900">Projetos do ecossistema</p>
            <div className="mt-6 flex gap-4">
              <IconBubble name="book" className="h-12 w-12" />
              <div>
                <h4 className="font-serif text-[21px]">SciFiXD</h4>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-700">
                  Uma das abordagens que pode entrar quando a organização quer explorar possibilidades de futuro por meio da
                  ficção, imaginação e design. Não como exercício de entretenimento. Mas como forma de tornar futuros abstratos{" "}
                  <strong className="font-semibold text-ink-900">visíveis, discutíveis e experimentáveis</strong>.
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <IconBubble name="person" className="h-12 w-12" />
              <div>
                <h4 className="font-serif text-[21px]">Futurismo Pessoal</h4>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-700">
                  Pode aparecer especialmente em contextos de liderança e carreira, levando pensamento de futuros para a escala
                  das escolhas, trajetórias e capacidades individuais.
                </p>
                <p className="mt-2 text-[14px] font-semibold leading-relaxed text-ink-900">
                  Futurismo Pessoal pertence ao ecossistema WTF. Não é parte da palestra Futuros Humanos.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <div className="on-dark bg-ink-900">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:items-center lg:gap-12">
            <div className="text-[15px] leading-relaxed text-cream-50/80">
              <Lines
                items={[
                  "Nem todo projeto precisa envolver a WTF.",
                  "Nem toda questão precisa de cenários.",
                  "Nem toda conversa sobre futuro precisa virar um projeto de foresight.",
                ]}
              />
              <Lines
                className="mt-4"
                items={[
                  "Quando uma palestra resolve, fazemos uma palestra.",
                  "Quando um workshop resolve, fazemos um workshop.",
                  "Quando a pergunta exige outra profundidade, ampliamos a abordagem.",
                ]}
              />
              <p className="jf-hand mt-6 text-[28px] text-red-bright">Quando a pergunta fica maior, a mesa também pode ficar.</p>
            </div>
            <div className="border-cream-50/20 lg:border-l lg:pl-10">
              <p className="font-serif text-[clamp(24px,2.2vw,32px)] leading-snug">
                Profundidade não é um objetivo.
                <br />
                <Em>É uma resposta à complexidade do problema.</Em>
              </p>
            </div>
            <div className="rounded-[var(--jf-radius-md)] bg-cream-50 p-7 text-ink-900">
              <p className="font-serif text-[22px] leading-snug">Nem toda organização precisa de um projeto de futuros.</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                Mas, quando precisa, não precisamos limitar a pergunta ao repertório de uma única pessoa.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={CONTACT_ROUTES.futuros} size="sm">
                  Quero explorar um projeto de futuros
                </ButtonLink>
                <ButtonLink href={LINKS.wtf} variant="secondary" size="sm">
                  Conheça a What The Future?!
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}

/* ───────────────────────── BLOCO 7 — O MUNDO REAL COMO LABORATÓRIO ───────────────────────── */
export function OrgMundoReal() {
  const cards: { t: string; s: string; icon: OrgIconName; body: ReactNode; note: ReactNode }[] = [
    {
      t: "Tecnologia e mercado",
      s: "Onde capacidade encontra decisão.",
      icon: "gear",
      body: (
        <>
          <p>
            Minha trajetória começou e amadureceu dentro de tecnologia enterprise. EMC. Oracle. Grandes clientes. Projetos
            complexos. Metas. Negociação. Infraestrutura. Transformação.
          </p>
          <p className="mt-3">
            Hoje continuo próxima desse mercado e das decisões comerciais e tecnológicas que organizações precisam tomar no
            presente.
          </p>
        </>
      ),
      note: (
        <>
          Ali, uma ideia deixa rapidamente de ser abstrata. Ela precisa funcionar diante de: cliente; orçamento; prazo;
          concorrência; resultado.
        </>
      ),
    },
    {
      t: "Construção empresarial",
      s: "Onde estratégia encontra consequência.",
      icon: "chart",
      body: (
        <>
          <p>Cofundei e liderei a A2F por mais de 13 anos.</p>
          <p className="mt-3">
            Construir uma empresa me ensinou algo que nenhum framework consegue ensinar sozinho:{" "}
            <strong className="font-semibold text-ink-900">toda escolha estratégica produz uma realidade operacional.</strong>
          </p>
          <p className="mt-3">Posicionamento vira venda. Venda vira entrega. Crescimento vira contratação. Decisão vira consequência.</p>
        </>
      ),
      note: (
        <>
          E aquilo que parece óbvio na estratégia raramente continua tão simples quando encontra mercado, gente e execução.
          Hoje continuo contribuindo com a A2F pela perspectiva estratégica.
        </>
      ),
    },
    {
      t: "HomeCare+ e Ayumana",
      s: "Onde tecnologia encontra problemas profundamente humanos.",
      icon: "heart",
      body: (
        <>
          <p>
            Saúde domiciliar. Saúde mental. Profissionais. Pacientes. Famílias. Plataforma. Modelo de negócio. Aquisição.
            Confiança. Autonomia.
          </p>
          <p className="mt-3">
            São negócios diferentes, mas ambos colocam uma questão central diante de mim:{" "}
            <strong className="font-semibold text-ink-900">
              como usamos tecnologia para ampliar possibilidades sem esquecer para quem estamos construindo?
            </strong>
          </p>
          <ReadMore className="mt-3">
            <p>
              Na HomeCare+, isso significa transformar um problema humano real de cuidado em uma operação capaz de funcionar e
              crescer.
            </p>
            <p className="mt-2">
              Na Ayumana, significa pensar tecnologia, visibilidade e modelo de negócio sem retirar dos psicólogos autonomia
              sobre sua relação com pacientes e sobre a própria carreira.
            </p>
          </ReadMore>
        </>
      ),
      note: (
        <>
          Essas empresas não são ilustrações de Futuros Humanos. São lugares onde perguntas parecidas precisam sobreviver à
          prática.
        </>
      ),
    },
    {
      t: "O mercado continua respondendo",
      s: "",
      icon: "compass",
      body: (
        <>
          <Lines
            items={[
              "Você pode imaginar um modelo perfeito. O cliente pode não querer.",
              "Pode definir uma estratégia clara. O mercado pode mudar.",
              "Pode construir uma tecnologia incrível. As pessoas podem não adotá-la.",
              "Pode acreditar numa hipótese. Os dados podem devolvê-la quebrada.",
            ]}
            className="space-y-1"
          />
          <p className="mt-3">
            E então você escolhe: defender a ideia; escutar; adaptar; persistir; abandonar; ou construir outra coisa.
          </p>
          <p className="mt-3">É nesse movimento que estratégia deixa de ser apresentação.</p>
        </>
      ),
      note: (
        <>
          A realidade é uma interlocutora inconveniente. E exatamente por isso ela é indispensável.
        </>
      ),
    },
  ];
  return (
    <Section padded={false} tone="cream" label="O mundo real como laboratório">
      <div className="grid lg:grid-cols-[1fr_1fr_0.85fr]">
        <Container className="pt-[var(--jf-section-y)] lg:col-span-2 lg:ml-auto lg:mr-0 lg:max-w-[1000px] lg:pr-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Display size="lg">
              Eu não penso organizações de fora. <Em>Continuo dentro delas.</Em>
            </Display>
            <Body className="text-ink-700">
              <p>
                É fácil falar sobre transformação quando não se precisa entregar o trimestre. Sobre inovação quando não existe
                cliente esperando. Sobre liderança quando nenhuma decisão difícil está sobre a mesa. Sobre futuros quando não há
                orçamento, concorrência, equipe, risco e consequência.
              </p>
              <p>
                Minha relação com organizações nunca foi apenas de observadora. Passei mais de duas décadas entre tecnologia,
                vendas, grandes empresas, liderança e empreendedorismo.
              </p>
              <p>
                E continuo nesse mundo. Continuo construindo. Vendendo. Liderando. Tomando decisões. Mudando de direção quando a
                realidade exige.
              </p>
              <p>
                É por isso que, para mim, estratégia, tecnologia, transformação e futuros precisam sobreviver ao encontro com o
                mundo real.
              </p>
            </Body>
          </div>
        </Container>
        <div className="relative mt-10 min-h-[320px] lg:mt-0">
          <Photo
            src="/images/ph/organizacoes/mundo-real.webp"
            alt="Ju Ferreira refletindo durante uma reunião de trabalho"
            sizes="(min-width:1024px) 30vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_25%]"
          />
        </div>
      </div>

      <Container className="py-14">
        <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <li key={c.t} className="flex flex-col rounded-[var(--jf-radius-md)] bg-cream-50 p-6 shadow-[0_10px_30px_-24px_rgba(0,0,0,.4)]">
              <div className="flex items-start gap-4">
                <NumberBadge n={i + 1} className="shrink-0 bg-blush-100" />
                <div>
                  <h3 className="font-serif text-[21px] uppercase leading-tight tracking-wide">{c.t}</h3>
                  {c.s && <p className="mt-1 text-[14px] font-semibold leading-snug text-red-brand">{c.s}</p>}
                </div>
              </div>
              <div className="mt-5 flex-1 border-l-2 border-red-brand pl-4 text-[15px] leading-relaxed text-ink-700">{c.body}</div>
              <div className="mt-6 flex gap-4 rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-4 text-[14px] leading-relaxed text-ink-800">
                <IconBubble name={c.icon} className="h-10 w-10 bg-cream-50" />
                <p>{c.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-12">
          <div className="relative pl-12">
            <span className="jf-display absolute left-0 top-0 text-[64px] leading-none text-red-brand" aria-hidden>
              “
            </span>
            <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              Possibilidade sem realidade vira fantasia.
              <br />
              Realidade sem possibilidade vira resignação.
            </p>
            <Stroke shape="underline" className="mt-2 h-3 w-48" width={2.5} />
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              O trabalho com organizações acontece exatamente no espaço entre as duas. Não ignoramos limites. Mas também não
              tratamos o presente como única configuração possível.
            </p>
          </div>
          <div className="text-[15px] leading-relaxed text-ink-700 lg:border-l lg:border-red-brand/40 lg:pl-8">
            <p className="font-serif text-[20px] leading-snug text-ink-900">
              É por isso que não entro numa organização prometendo ensinar “como será o futuro”.
            </p>
            <p className="mt-3">
              Entro trazendo: repertório; perguntas; experiência; tensão; ferramentas de futuros; e disposição para confrontar
              tudo isso com o contexto real daquela organização.
            </p>
            <p className="mt-3">
              Porque:{" "}
              <strong className="font-semibold text-ink-900">
                uma boa estratégia não precisa apenas parecer inteligente. Precisa continuar fazendo sentido quando encontra o
                mundo.
              </strong>
            </p>
          </div>
          <div className="lg:border-l lg:border-red-brand/40 lg:pl-8">
            <p className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">
              O mundo real não é o lugar onde a tese termina. <Em>É o lugar onde ela é testada.</Em>
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              É desse encontro entre possibilidade e realidade que eu gosto de trabalhar com organizações.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 8 — O QUE MUDA DEPOIS DA CONVERSA ───────────────────────── */
export function OrgDepois() {
  const items: { icon: OrgIconName; t: string; s?: string; body: ReactNode; key: ReactNode }[] = [
    {
      icon: "pen",
      t: "Mais clareza",
      s: "Nomear melhor o que realmente está em jogo.",
      body: (
        <>
          <p>Muitas vezes, o problema inicial chega como: “IA”. “mudança”. “cultura”. “inovação”. “futuro”.</p>
          <p className="mt-2">
            Mas, durante a conversa, a organização percebe que a questão real é outra: direção; autoria; capacidade;
            prioridade; escolha; liderança; ou consequência.
          </p>
        </>
      ),
      key: "Clareza não resolve tudo. Mas muda o problema que estamos tentando resolver.",
    },
    {
      icon: "chat",
      t: "Melhores perguntas",
      s: "Perguntas capazes de abrir mais do que fechar.",
      body: (
        <>
          <p>
            Talvez a organização entre perguntando: “Como acompanhar essa mudança?” e saia perguntando:{" "}
            <strong className="font-semibold text-ink-900">“Que parte dessa mudança queremos realmente ampliar?”</strong>
          </p>
          <p className="mt-2">
            Entre perguntando: “Como usar IA?” e saia com:{" "}
            <strong className="font-semibold text-ink-900">
              “Para quê queremos ampliar capacidade e que decisões não queremos terceirizar?”
            </strong>
          </p>
        </>
      ),
      key: "Mudar a pergunta pode mudar completamente a decisão seguinte.",
    },
    {
      icon: "bulb",
      t: "Mais possibilidades",
      s: "Sair do provável como único caminho.",
      body: (
        <>
          <p>Quando existe apenas um futuro imaginável, estratégia vira adaptação.</p>
          <p className="mt-2">
            O trabalho pode ajudar a organização a perceber: outros caminhos; novas hipóteses; combinações antes invisíveis;
            riscos ignorados; oportunidades ainda não nomeadas.
          </p>
          <p className="mt-2">
            Não para gerar cinquenta cenários. Mas para evitar que{" "}
            <strong className="font-semibold text-ink-900">“isso provavelmente vai acontecer”</strong> se transforme cedo demais
            em: <strong className="font-semibold text-ink-900">“não temos escolha”.</strong>
          </p>
        </>
      ),
      key: "Quando surgem alternativas, volta a existir escolha.",
    },
    {
      icon: "target",
      t: "Mais direção",
      s: "Escolher o que merece ser ampliado.",
      body: (
        <>
          <p>
            Possibilidade sem direção pode virar dispersão. Por isso, uma conversa boa não serve apenas para abrir. Ela também
            pode ajudar a fechar algumas escolhas.
          </p>
          <Lines
            className="mt-2"
            items={[
              "O que queremos preservar?",
              "O que precisamos abandonar?",
              "O que vale a pena desenvolver?",
              "O que não queremos construir, mesmo sendo capazes?",
            ]}
          />
        </>
      ),
      key: "Direção é transformar possibilidade em escolha.",
    },
    {
      icon: "people",
      t: "Linguagem comum",
      body: (
        <>
          <p>
            Às vezes, diferentes pessoas estão tentando discutir o mesmo problema usando palavras diferentes. Ou usando a mesma
            palavra para falar de coisas completamente distintas.
          </p>
          <p className="mt-2">“Futuro”. “Transformação”. “IA”. “Inovação”. “Autonomia”. “Liderança”.</p>
          <p className="mt-2">
            Uma experiência bem construída pode criar algumas referências compartilhadas. Não para todo mundo pensar igual.
            Mas para que a discordância aconteça <strong className="font-semibold text-ink-900">sobre a mesma conversa</strong>.
          </p>
        </>
      ),
      key: (
        <>
          Alinhamento não é concordância. É conseguir enxergar juntos aquilo sobre o que estamos escolhendo.
        </>
      ),
    },
    {
      icon: "chart",
      t: "Movimento",
      s: "Alguma coisa precisa conseguir acontecer depois.",
      body: (
        <>
          <p>
            Nem sempre é um projeto. Nem sempre é uma decisão final. Pode ser: um experimento; uma conversa com outro grupo;
            uma hipótese a testar; um critério a revisar; uma capacidade a desenvolver; uma decisão que finalmente precisa ser
            tomada.
          </p>
        </>
      ),
      key: "Porque reflexão sem nenhuma capacidade de produzir movimento corre o risco de virar apenas uma boa experiência. E esse não é o objetivo.",
    },
  ];
  return (
    <Section padded={false} label="O que muda depois da conversa">
      <div className="grid lg:grid-cols-[1fr_1fr_0.85fr]">
        <Container className="pt-[var(--jf-section-y)] lg:col-span-2 lg:ml-auto lg:mr-0 lg:max-w-[1000px] lg:pr-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Display size="lg">
              O valor da conversa <Em>aparece no que ela muda depois.</Em>
            </Display>
            <Body className="text-ink-700">
              <p>
                Nem toda experiência precisa terminar com uma lista de respostas. Algumas precisam terminar com:{" "}
                <strong className="font-semibold text-ink-900">
                  mais clareza; melhores perguntas; novas possibilidades; escolhas mais conscientes; linguagem comum; e
                  movimentos possíveis.
                </strong>
              </p>
              <p>
                O objetivo não é sair da sala acreditando que o futuro ficou previsível. É sair da sala mais capaz de perceber:
              </p>
              <Lines
                className="font-medium text-red-brand"
                items={[
                  "o que está mudando;",
                  "o que ainda está em aberto;",
                  "o que merece ser escolhido;",
                  "e o que precisa começar a se mover.",
                ]}
              />
            </Body>
          </div>
        </Container>
        <div className="relative mt-10 min-h-[320px] lg:mt-0">
          <Photo
            src="/images/ph/organizacoes/depois.webp"
            alt="Ju Ferreira pensativa ao fim de uma conversa"
            sizes="(min-width:1024px) 30vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_25%]"
          />
        </div>
      </div>

      <Container className="py-14">
        <h3 className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">O que a conversa pode deixar na organização</h3>
        <Stroke shape="underline" className="mt-1 h-3 w-56" width={2.5} />
        <ol className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {items.map((it, i) => (
            <li key={it.t} className="flex flex-col">
              <div className="flex items-center gap-3">
                <NumberBadge n={i + 1} className="bg-blush-100" />
                <IconBubble name={it.icon} className="h-12 w-12" />
              </div>
              <h4 className="mt-4 font-serif text-[24px] leading-tight">{it.t}</h4>
              {it.s && <p className="mt-1 text-[14px] font-semibold leading-snug text-red-brand">{it.s}</p>}
              <div className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">{it.body}</div>
              <Dash className="mt-5" />
              <p className="mt-3 rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-4 text-[14px] font-semibold leading-snug text-red-brand">
                {it.key}
              </p>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="pb-[var(--jf-section-y)]">
        <div className="grid gap-10 border-t border-ink-900/15 pt-10 lg:grid-cols-[1.1fr_1.1fr_1fr] lg:gap-12">
          <div className="relative pl-12">
            <span className="jf-display absolute left-0 top-0 text-[64px] leading-none text-red-brand" aria-hidden>
              “
            </span>
            <p className="font-serif text-[clamp(22px,2vw,30px)] leading-snug">
              O objetivo não é sair com certeza sobre o futuro. <Em>É sair com mais qualidade para participar dele.</Em>
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              O que acontece depois não depende apenas da experiência. Depende também da organização. Do contexto. Das
              lideranças. Das estruturas. Dos incentivos. Da capacidade de sustentar decisões.
            </p>
          </div>
          <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-7 text-[15px] leading-relaxed text-ink-700">
            <p className="font-semibold text-ink-900">Nenhuma palestra, workshop ou projeto transforma uma organização sozinho.</p>
            <p className="mt-3">
              Mas pode: abrir uma conversa que não existia; tornar uma escolha visível; criar linguagem; ampliar possibilidades;
              e ajudar um grupo a iniciar movimentos que antes não conseguia iniciar.
            </p>
          </div>
          <div>
            <Pull>
              A conversa não precisa resolver tudo.{" "}
              <strong className="font-semibold text-red-brand">
                Precisa mudar o que a organização consegue enxergar e fazer depois dela.
              </strong>
            </Pull>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
              Se alguma coisa mudou na forma como enxergamos o problema, talvez outras coisas possam mudar na forma como
              escolhemos o caminho.
            </p>
            <p className="mt-2 font-semibold text-red-brand">Um movimento muda o que pode acontecer depois.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — FECHAMENTO E CONVERSÃO ───────────────────────── */
export function OrgFechamento() {
  return (
    <Section tone="wine" padded={false} label="Fechamento e conversão" id={FORM_ANCHOR.slice(1)}>
      <Stroke shape="orbit" className="absolute -left-24 top-10 hidden h-[70%] w-[45%] opacity-60 lg:block" width={2.5} color="var(--jf-red-400)" />
      <Container className="relative py-[var(--jf-section-y)]">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <Display size="lg">
              Você não precisa chegar com a solução. <Em>Pode chegar com a pergunta.</Em>
            </Display>
            <Body className="mt-8 max-w-[600px] text-cream-50/85">
              <Lines
                items={[
                  "Talvez você já saiba exatamente o que precisa.",
                  "Talvez exista uma transformação em curso.",
                  "Uma decisão estratégica.",
                  "Uma tecnologia criando novas tensões.",
                  "Uma liderança tentando encontrar direção.",
                  "Uma convenção que precisa abrir uma conversa.",
                ]}
              />
              <p>
                Ou talvez exista apenas a sensação de que{" "}
                <strong className="font-semibold text-cream-50">alguma coisa importante precisa ser pensada de outro jeito</strong>.
              </p>
              <p>Os dois pontos de partida servem.</p>
            </Body>
            <Pull onDark className="mt-8 max-w-[560px] font-sans text-[17px] font-semibold">
              Não precisamos começar escolhendo um produto. Precisamos começar entendendo o contexto.
            </Pull>
            <div className="relative mt-10 aspect-[4/3] max-w-[560px] overflow-hidden rounded-[var(--jf-radius-sm)]">
              <Photo
                src="/images/ph/organizacoes/fechamento.webp"
                alt="Ju Ferreira pensativa diante do notebook"
                sizes="(min-width:1024px) 40vw, 100vw"
                className="absolute inset-0"
                imgClassName="object-[50%_25%]"
              />
            </div>
            <div className="mt-10 max-w-[600px]">
              <p className="text-cream-50/85">
                Meu trabalho com organizações geralmente começa antes do formato. Começa tentando compreender:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "O que está acontecendo agora?",
                  "O que está mudando?",
                  "Onde existe tensão?",
                  "Que decisão precisa ser tomada?",
                  "O que parece inevitável, mas talvez ainda esteja em aberto?",
                  "E o que essa organização está tentando ajudar a tornar possível?",
                ].map((q) => (
                  <li key={q} className="jf-hand flex gap-3 text-[22px] leading-tight text-cream-50">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-bright" aria-hidden />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-cream-50/85">
                A partir daí, conseguimos descobrir juntos se essa conversa pede uma palestra, um workshop, uma experiência, um
                projeto de futuros aplicados, uma jornada — ou simplesmente uma primeira conversa para entender melhor a
                pergunta.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-[calc(var(--jf-header-h)+24px)] lg:self-start">
            <div className="rounded-[var(--jf-radius-md)] bg-cream-50 p-6 text-ink-900 shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] sm:p-9">
              <h3 className="text-center font-serif text-[clamp(24px,2.3vw,34px)] leading-tight">
                Qual futuro sua organização está ajudando a tornar mais provável hoje?
              </h3>
              <Stroke shape="underline" className="mx-auto mt-1 h-3 w-40" width={2.5} />
              <p className="mt-3 text-center text-[15px] leading-relaxed text-ink-700">
                Talvez essa não seja a pergunta com que você chegou.
                <br />
                Mas pode ser uma das perguntas que vale a pena levar para a conversa.
              </p>
              <OrgContactForm className="mt-8" />
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-cream-50 text-ink-900">
        <Container className="py-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
            <div className="text-[15px] leading-relaxed text-ink-700 lg:pr-10">
              <p className="font-semibold text-ink-900">Nenhum formato será sugerido antes de entendermos o contexto.</p>
              <Lines
                className="mt-2"
                items={[
                  "Se uma palestra resolver, ótimo.",
                  "Se a pergunta pedir mais profundidade, desenhamos outra abordagem.",
                  "Se não houver encaixe, é melhor descobrir isso no começo.",
                ]}
              />
            </div>
            {EXTERNAL.email && (
              <div className="text-[15px] leading-relaxed text-ink-700 lg:px-10">
                <p className="font-semibold text-ink-900">Prefere começar por e-mail?</p>
                <a href={`mailto:${EXTERNAL.email}`} className="mt-2 inline-block font-medium text-red-brand underline-offset-4 hover:underline">
                  {EXTERNAL.email}
                </a>
                {EXTERNAL.whatsapp && <p className="mt-2">WhatsApp: {EXTERNAL.whatsapp}</p>}
              </div>
            )}
            <div className="md:col-span-2 lg:col-span-1 lg:pl-10">
              <p className="jf-display text-[clamp(30px,2.8vw,42px)] uppercase leading-none">Temos futuros para construir.</p>
              <Stroke shape="underline" className="mt-1 h-3 w-52" width={3} />
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                <strong className="font-semibold text-ink-900">Toda organização já participa daquilo que vem depois.</strong> A
                questão é como escolhe participar.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
