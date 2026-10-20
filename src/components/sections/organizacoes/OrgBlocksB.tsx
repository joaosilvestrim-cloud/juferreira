import { getExternal } from "@/lib/content";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Dash, Display, Em, NumberBadge, QuoteCard } from "@/components/ui/Typography";
import { CONTACT_ROUTES, LINKS } from "@/lib/site";
import { FORM_ANCHOR } from "./OrgBlocksA";
import { OrgContactForm } from "./OrgContactForm";
import { DotList, IconBubble, Lines, type OrgIconName, Pull, ReadMore } from "./parts";

import { tx, img } from "@/lib/editable";
/* ───────────────────────── BLOCO 6 — FUTUROS APLICADOS / WTF ───────────────────────── */
export function OrgFuturosAplicados() {
  const when: { icon: OrgIconName; t: string; body: ReactNode }[] = [
    {
      icon: "compass",
      t: tx("organizacoes/9524ed6320", "Estratégia em contextos de incerteza"),
      body: (
        <>
          <p>{tx("organizacoes/ed5dcc8f9f", "Quando a organização precisa pensar além de um único cenário provável.")}</p>
          <p className="mt-2">
            {tx("organizacoes/17d3f87c9f", "Não para escolher “o futuro certo”. Mas para construir estratégias mais conscientes das alternativas.")}</p>
        </>
      ),
    },
    {
      icon: "bulb",
      t: tx("organizacoes/2895dd00e5", "Inovação e novas possibilidades"),
      body: (
        <>
          <p>{tx("organizacoes/3a4b7b44bb", "Quando a equipe está presa ao que já existe.")}</p>
          <p className="mt-2">
            {tx("organizacoes/1671af61da", "Futuros aplicados podem ampliar o repertório de possibilidades antes de começar a desenhar soluções.")}</p>
          <p className="mt-2 font-semibold text-red-brand">{tx("organizacoes/b03689b67d", "Imaginação é instrumento estratégico.")}</p>
        </>
      ),
    },
    {
      icon: "chip",
      t: tx("organizacoes/cfb5947303", "Tecnologia e transformação"),
      body: (
        <>
          <p>{tx("organizacoes/b7a6800345", "Quando uma nova tecnologia traz perguntas que ultrapassam implementação.")}</p>
          <Lines
            className="mt-2"
            items={[
              tx("organizacoes/d24c82b3a3", "Como muda o trabalho?"),
              tx("organizacoes/f1ac02d363", "Que comportamentos aparecem?"),
              tx("organizacoes/31422a9657", "Que relações podem mudar?"),
              tx("organizacoes/9c35823514", "Que capacidades serão necessárias?"),
              tx("organizacoes/028186c690", "Que consequências ainda não estamos enxergando?"),
            ]}
          />
        </>
      ),
    },
    {
      icon: "people",
      t: tx("organizacoes/44cb8bf5b0", "Liderança e tomada de decisão"),
      body: (
        <>
          <p>
            {tx("organizacoes/e14c36e76b", "Quando líderes precisam desenvolver maior capacidade de pensar diante de incerteza, ambiguidade e futuros múltiplos.")}</p>
          <p className="mt-2">
            {tx("organizacoes/f111817f5f", "Não para eliminar incerteza. Mas para:")} <strong className="font-semibold text-red-brand">{tx("organizacoes/0b0ad962d3", "decidir melhor dentro dela.")}</strong>
          </p>
        </>
      ),
    },
  ];
  return (
    <Section padded={false} label={tx("organizacoes/32a4cceb6f", "Futuros aplicados e What The Future?!")}>
      <div className="grid lg:grid-cols-[44%_56%]">
        <Container className="pt-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[700px] lg:pr-10">
          <Display size="lg">
            {tx("organizacoes/311fff8bb7", "Algumas perguntas pedem")} <Em>{tx("organizacoes/67d6a5087e", "mais do que uma voz.")}</Em>
          </Display>
          <Body className="mt-8 text-ink-700">
            <p>
              {tx("organizacoes/7f98d9a970", "Existem desafios que começam numa conversa com a Ju e rapidamente mostram que precisam de outras lentes.")}</p>
            <Lines
              items={[
                tx("organizacoes/91fef38bd8", "Mais pesquisa."),
                tx("organizacoes/8e272ec90e", "Mais perspectivas."),
                tx("organizacoes/927fd03540", "Outras disciplinas."),
                tx("organizacoes/bc10dbd878", "Novas formas de imaginar."),
                tx("organizacoes/00a86c02a0", "Mais espaço para explorar aquilo que ainda não existe."),
              ]}
            />
            <p>
              {tx("organizacoes/7159214c45", "É nesses casos que o trabalho pode se conectar à")} <strong className="font-semibold text-ink-900">{tx("organizacoes/281b25348e", "What The Future?!")}</strong>.
            </p>
            <p>
              {tx("organizacoes/504c06837a", "A WTF é um")} <strong className="font-semibold text-ink-900">{tx("organizacoes/5578550f5a", "coletivo de futuristas")}</strong> {tx("organizacoes/0b07c2e451", "dedicado a tornar o pensamento de futuros mais acessível, aplicado e útil para pessoas e organizações.")}</p>
            <p>
              {tx("organizacoes/211600c045", "Ju integra esse coletivo a partir especialmente de sua lente de")}{" "}
              <strong className="font-semibold text-ink-900">{tx("organizacoes/a9818953ed", "Futurismo Humanista")}</strong>.
            </p>
          </Body>
        </Container>
        <div className="relative mt-10 min-h-[320px] lg:mt-0">
          <Photo
            src={img("organizacoes/2a5cf8af23", "/images/ensaio/home-04c-quadro-post-its.webp")}
            alt={tx("organizacoes/650fdaf826", "Cena ilustrativa de Juliana junto a um quadro com diagrama e post-its.")}
            sizes="(min-width:1024px) 56vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>

      {/* Distinção entre ecossistemas — sem hierarquia */}
      <Container className="pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <p className="text-ink-700">{tx("organizacoes/b865d344cb", "Mas existe uma distinção importante:")}</p>
            <p className="mt-3 font-serif text-[clamp(26px,2.6vw,40px)] leading-tight">
              {tx("organizacoes/bba0534dad", "Futuros Humanos não é WTF.")}<br />
              <Em>{tx("organizacoes/68e1c5ab7a", "WTF não é Futuros Humanos.")}</Em>
            </p>
            <p className="mt-4 text-ink-700">{tx("organizacoes/5283600e0d", "São construções diferentes. Elas se encontram quando o problema pede.")}</p>

            <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-6">
                <p className="jf-eyebrow text-[12px] text-ink-900">{tx("organizacoes/7c3c2c1157", "Ju Ferreira")}</p>
                <Lines
                  className="mt-4 text-[15px] leading-relaxed text-ink-700"
                  items={[tx("organizacoes/01d40e588c", "Futurismo Humanista"), tx("organizacoes/ab59c5f788", "Futuros Humanos"), tx("organizacoes/83eb83f83b", "Palestras / Workshops / Experiências")]}
                />
              </div>
              <div className="flex items-center justify-center text-red-brand" aria-hidden>
                <span className="text-[28px] sm:rotate-90">↕</span>
              </div>
              <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-6">
                <p className="jf-eyebrow text-[12px] text-ink-900">{tx("organizacoes/85a3eb03b4", "What The Future?!")}</p>
                <Lines
                  className="mt-4 text-[15px] leading-relaxed text-ink-700"
                  items={[tx("organizacoes/ac1400b95f", "Coletivo de futuristas"), tx("organizacoes/531188cb73", "Futuros aplicados"), tx("organizacoes/cb85a9b424", "SciFiXD"), tx("organizacoes/91a689e6bc", "Futurismo Pessoal"), tx("organizacoes/2d35510e66", "Projetos multidisciplinares")]}
                />
              </div>
            </div>
            <p className="mt-4 text-center text-[14px] font-medium text-red-brand">{tx("organizacoes/bfd2fbd9f7", "Sem hierarquia entre os dois ecossistemas.")}</p>
          </div>

          <div>
            <h3 className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">{tx("organizacoes/852167c501", "O que significa futuros aplicados")}</h3>
            <Stroke shape="underline" className="mt-1 h-3 w-40" width={2.5} />
            <p className="mt-5 text-ink-700">{tx("organizacoes/fec9aa3469", "Não é tentar adivinhar o que acontecerá.")}</p>
            <p className="mt-3 text-ink-700">
              {tx("organizacoes/ffc45fa49c", "É criar condições para uma organização explorar:")}{" "}
              <strong className="font-semibold text-ink-900">
                {tx("organizacoes/dabb457212", "mudanças em curso; sinais emergentes; tensões; possibilidades; cenários; implicações; escolhas; e respostas estratégicas.")}</strong>
            </p>
            <p className="mt-3 text-ink-700">
              {tx("organizacoes/1abe04d412", "Pensar futuros, nesse contexto, pode ajudar uma organização a ampliar o campo antes de tomar uma decisão.")}</p>
            <ReadMore className="mt-5">
              <div className="space-y-2 text-[15px] leading-relaxed text-ink-700">
                <p>{tx("organizacoes/b8233157ee", "A pergunta deixa de ser apenas: “O que provavelmente vai acontecer?”")}</p>
                <p>{tx("organizacoes/65608d62bd", "E passa a incluir:")}</p>
                <DotList
                  className="font-medium text-ink-900"
                  items={[
                    tx("organizacoes/85b682567d", "O que também poderia acontecer?"),
                    tx("organizacoes/ab367a5377", "O que mudaria para nós em cada cenário?"),
                    tx("organizacoes/0a0f3b03cb", "Que pressupostos estamos carregando sem perceber?"),
                    tx("organizacoes/4e51e92b39", "Que oportunidades ou riscos aparecem quando olhamos de outro lugar?"),
                    tx("organizacoes/5d7f43e037", "O que queremos começar a construir antes que alguma dessas possibilidades se torne dominante?"),
                  ]}
                />
              </div>
            </ReadMore>
            <QuoteCard className="mt-8">
              {tx("organizacoes/bf0a963fa7", "Pensar futuros não serve para reduzir o mundo a uma previsão. Serve para aumentar a quantidade e a qualidade das possibilidades que conseguimos considerar antes de escolher.")}</QuoteCard>
          </div>
        </div>
      </Container>

      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-10">
          <div>
            <h3 className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">{tx("organizacoes/869770fd59", "Quando essa abordagem pode fazer sentido")}</h3>
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
          <aside className="border-ink-900/15 lg:border-l lg:pl-8" aria-label={tx("organizacoes/16145440a9", "Projetos do ecossistema")}>
            <p className="jf-eyebrow text-[12px] text-ink-900">{tx("organizacoes/238ef26c72", "Projetos do ecossistema")}</p>
            <div className="mt-6 flex gap-4">
              <IconBubble name="book" className="h-12 w-12" />
              <div>
                <h4 className="font-serif text-[21px]">{tx("organizacoes/08e2023dfb", "SciFiXD")}</h4>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-700">
                  {tx("organizacoes/1676cec060", "Uma das abordagens que pode entrar quando a organização quer explorar possibilidades de futuro por meio da ficção, imaginação e design. Não como exercício de entretenimento. Mas como forma de tornar futuros abstratos")}{" "}
                  <strong className="font-semibold text-ink-900">{tx("organizacoes/98b8c56708", "visíveis, discutíveis e experimentáveis")}</strong>.
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <IconBubble name="person" className="h-12 w-12" />
              <div>
                <h4 className="font-serif text-[21px]">{tx("organizacoes/5e4e252eb2", "Futurismo Pessoal")}</h4>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-700">
                  {tx("organizacoes/01f53ad254", "Pode aparecer especialmente em contextos de liderança e carreira, levando pensamento de futuros para a escala das escolhas, trajetórias e capacidades individuais.")}</p>
                <p className="mt-2 text-[14px] font-semibold leading-relaxed text-ink-900">
                  {tx("organizacoes/53a5cb9975", "Futurismo Pessoal pertence ao ecossistema WTF. Não é parte da palestra Futuros Humanos.")}</p>
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
                  tx("organizacoes/ba9b399255", "Nem todo projeto precisa envolver a WTF."),
                  tx("organizacoes/f7be39081f", "Nem toda questão precisa de cenários."),
                  tx("organizacoes/06e1508e93", "Nem toda conversa sobre futuro precisa virar um projeto de foresight."),
                ]}
              />
              <Lines
                className="mt-4"
                items={[
                  tx("organizacoes/b616cc2aae", "Quando uma palestra resolve, fazemos uma palestra."),
                  tx("organizacoes/f4e54ff3e0", "Quando um workshop resolve, fazemos um workshop."),
                  tx("organizacoes/5bd3011ad9", "Quando a pergunta exige outra profundidade, ampliamos a abordagem."),
                ]}
              />
              <p className="jf-hand mt-6 text-[28px] text-red-bright">{tx("organizacoes/c2e444a509", "Quando a pergunta fica maior, a mesa também pode ficar.")}</p>
            </div>
            <div className="border-cream-50/20 lg:border-l lg:pl-10">
              <p className="font-serif text-[clamp(24px,2.2vw,32px)] leading-snug">
                {tx("organizacoes/8b75e3d8a6", "Profundidade não é um objetivo.")}<br />
                <Em>{tx("organizacoes/df6ac47682", "É uma resposta à complexidade do problema.")}</Em>
              </p>
            </div>
            <div className="rounded-[var(--jf-radius-md)] bg-cream-50 p-7 text-ink-900">
              <p className="font-serif text-[22px] leading-snug">{tx("organizacoes/92db244190", "Nem toda organização precisa de um projeto de futuros.")}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                {tx("organizacoes/4237c1361c", "Mas, quando precisa, não precisamos limitar a pergunta ao repertório de uma única pessoa.")}</p>
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={CONTACT_ROUTES.futuros} size="sm">
                  {tx("organizacoes/3d292ba146", "Quero explorar um projeto de futuros")}</ButtonLink>
                <ButtonLink href={LINKS.wtf} variant="secondary" size="sm">
                  {tx("organizacoes/d04cac496d", "Conheça a What The Future?!")}</ButtonLink>
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
      t: tx("organizacoes/8b141d1dad", "Tecnologia e mercado"),
      s: tx("organizacoes/0bc942a550", "Onde capacidade encontra decisão."),
      icon: "gear",
      body: (
        <>
          <p>
            {tx("organizacoes/c77c0d188d", "Minha trajetória começou e amadureceu dentro de tecnologia enterprise. EMC. Oracle. Grandes clientes. Projetos complexos. Metas. Negociação. Infraestrutura. Transformação.")}</p>
          <p className="mt-3">
            {tx("organizacoes/7e3f06d558", "Hoje continuo próxima desse mercado e das decisões comerciais e tecnológicas que organizações precisam tomar no presente.")}</p>
        </>
      ),
      note: (
        <>
          {tx("organizacoes/ea217877ac", "Ali, uma ideia deixa rapidamente de ser abstrata. Ela precisa funcionar diante de: cliente; orçamento; prazo; concorrência; resultado.")}</>
      ),
    },
    {
      t: tx("organizacoes/f18f908411", "Construção empresarial"),
      s: tx("organizacoes/0de1e51663", "Onde estratégia encontra consequência."),
      icon: "chart",
      body: (
        <>
          <p>{tx("organizacoes/011c6d85dd", "Cofundei e liderei a A2F por mais de 13 anos.")}</p>
          <p className="mt-3">
            {tx("organizacoes/228d77599f", "Construir uma empresa me ensinou algo que nenhum framework consegue ensinar sozinho:")}{" "}
            <strong className="font-semibold text-ink-900">{tx("organizacoes/bedb8b0768", "toda escolha estratégica produz uma realidade operacional.")}</strong>
          </p>
          <p className="mt-3">{tx("organizacoes/adcfaa6c8e", "Posicionamento vira venda. Venda vira entrega. Crescimento vira contratação. Decisão vira consequência.")}</p>
        </>
      ),
      note: (
        <>
          {tx("organizacoes/bcffb70a14", "E aquilo que parece óbvio na estratégia raramente continua tão simples quando encontra mercado, gente e execução. Hoje continuo contribuindo com a A2F pela perspectiva estratégica.")}</>
      ),
    },
    {
      t: tx("organizacoes/1a8e43e8f0", "HomeCare+ e Ayumana"),
      s: tx("organizacoes/4dc6fd513f", "Onde tecnologia encontra problemas profundamente humanos."),
      icon: "heart",
      body: (
        <>
          <p>
            {tx("organizacoes/afdb7bb622", "Saúde domiciliar. Saúde mental. Profissionais. Pacientes. Famílias. Plataforma. Modelo de negócio. Aquisição. Confiança. Autonomia.")}</p>
          <p className="mt-3">
            {tx("organizacoes/3b98c2daed", "São negócios diferentes, mas ambos colocam uma questão central diante de mim:")}{" "}
            <strong className="font-semibold text-ink-900">
              {tx("organizacoes/a1fac4af56", "como usamos tecnologia para ampliar possibilidades sem esquecer para quem estamos construindo?")}</strong>
          </p>
          <ReadMore className="mt-3">
            <p>
              {tx("organizacoes/e16767ef7c", "Na HomeCare+, isso significa transformar um problema humano real de cuidado em uma operação capaz de funcionar e crescer.")}</p>
            <p className="mt-2">
              {tx("organizacoes/a04095732e", "Na Ayumana, significa pensar tecnologia, visibilidade e modelo de negócio sem retirar dos psicólogos autonomia sobre sua relação com pacientes e sobre a própria carreira.")}</p>
          </ReadMore>
        </>
      ),
      note: (
        <>
          {tx("organizacoes/1784ded687", "Essas empresas não são ilustrações de Futuros Humanos. São lugares onde perguntas parecidas precisam sobreviver à prática.")}</>
      ),
    },
    {
      t: tx("organizacoes/0921974589", "O mercado continua respondendo"),
      s: "",
      icon: "compass",
      body: (
        <>
          <Lines
            items={[
              tx("organizacoes/ea979b9cdf", "Você pode imaginar um modelo perfeito. O cliente pode não querer."),
              tx("organizacoes/07efb33038", "Pode definir uma estratégia clara. O mercado pode mudar."),
              tx("organizacoes/f149cbd3c1", "Pode construir uma tecnologia incrível. As pessoas podem não adotá-la."),
              tx("organizacoes/140826f4e3", "Pode acreditar numa hipótese. Os dados podem devolvê-la quebrada."),
            ]}
            className="space-y-1"
          />
          <p className="mt-3">
            {tx("organizacoes/868f7a0d49", "E então você escolhe: defender a ideia; escutar; adaptar; persistir; abandonar; ou construir outra coisa.")}</p>
          <p className="mt-3">{tx("organizacoes/b9c7518fe4", "É nesse movimento que estratégia deixa de ser apresentação.")}</p>
        </>
      ),
      note: (
        <>
          {tx("organizacoes/c295171ea7", "A realidade é uma interlocutora inconveniente. E exatamente por isso ela é indispensável.")}</>
      ),
    },
  ];
  return (
    <Section padded={false} tone="cream" label={tx("organizacoes/6bb2851205", "O mundo real como laboratório")}>
      <div className="grid lg:grid-cols-[1fr_1fr_0.85fr]">
        <Container className="pt-[var(--jf-section-y)] lg:col-span-2 lg:ml-auto lg:mr-0 lg:max-w-[1000px] lg:pr-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Display size="lg">
              {tx("organizacoes/e03e5c72b0", "Eu não penso organizações de fora.")} <Em>{tx("organizacoes/b3222c9557", "Continuo dentro delas.")}</Em>
            </Display>
            <Body className="text-ink-700">
              <p>
                {tx("organizacoes/a6ea9b9781", "É fácil falar sobre transformação quando não se precisa entregar o trimestre. Sobre inovação quando não existe cliente esperando. Sobre liderança quando nenhuma decisão difícil está sobre a mesa. Sobre futuros quando não há orçamento, concorrência, equipe, risco e consequência.")}</p>
              <p>
                {tx("organizacoes/ef18bb9d04", "Minha relação com organizações nunca foi apenas de observadora. Passei mais de duas décadas entre tecnologia, vendas, grandes empresas, liderança e empreendedorismo.")}</p>
              <p>
                {tx("organizacoes/2b4d6f6bb7", "E continuo nesse mundo. Continuo construindo. Vendendo. Liderando. Tomando decisões. Mudando de direção quando a realidade exige.")}</p>
              <p>
                {tx("organizacoes/c046a71e28", "É por isso que, para mim, estratégia, tecnologia, transformação e futuros precisam sobreviver ao encontro com o mundo real.")}</p>
            </Body>
          </div>
        </Container>
        <div className="relative mt-10 min-h-[320px] lg:mt-0">
          <Photo
            src={img("organizacoes/951275f686", "/images/ensaio/ju-trabalho-tecnologia.webp")}
            alt={tx("organizacoes/9d1b015056", "Juliana concentrada no trabalho em um notebook.")}
            sizes="(min-width:1024px) 30vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
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
              {tx("organizacoes/aa3e3c2ead", "Possibilidade sem realidade vira fantasia.")}<br />
              {tx("organizacoes/e6f72a3ba7", "Realidade sem possibilidade vira resignação.")}</p>
            <Stroke shape="underline" className="mt-2 h-3 w-48" width={2.5} />
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              {tx("organizacoes/044a437bee", "O trabalho com organizações acontece exatamente no espaço entre as duas. Não ignoramos limites. Mas também não tratamos o presente como única configuração possível.")}</p>
          </div>
          <div className="text-[15px] leading-relaxed text-ink-700 lg:border-l lg:border-red-brand/40 lg:pl-8">
            <p className="font-serif text-[20px] leading-snug text-ink-900">
              {tx("organizacoes/acb1cb889e", "É por isso que não entro numa organização prometendo ensinar “como será o futuro”.")}</p>
            <p className="mt-3">
              {tx("organizacoes/32cb4990f3", "Entro trazendo: repertório; perguntas; experiência; tensão; ferramentas de futuros; e disposição para confrontar tudo isso com o contexto real daquela organização.")}</p>
            <p className="mt-3">
              {tx("organizacoes/da396165a6", "Porque:")}{" "}
              <strong className="font-semibold text-ink-900">
                {tx("organizacoes/fd5fc8b3ad", "uma boa estratégia não precisa apenas parecer inteligente. Precisa continuar fazendo sentido quando encontra o mundo.")}</strong>
            </p>
          </div>
          <div className="lg:border-l lg:border-red-brand/40 lg:pl-8">
            <p className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">
              {tx("organizacoes/2f19f10505", "O mundo real não é o lugar onde a tese termina.")} <Em>{tx("organizacoes/a1b6fce5ad", "É o lugar onde ela é testada.")}</Em>
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              {tx("organizacoes/857a18acb8", "É desse encontro entre possibilidade e realidade que eu gosto de trabalhar com organizações.")}</p>
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
      t: tx("organizacoes/ce8dfcbc67", "Mais clareza"),
      s: tx("organizacoes/85f930ef35", "Nomear melhor o que realmente está em jogo."),
      body: (
        <>
          <p>{tx("organizacoes/98f410b383", "Muitas vezes, o problema inicial chega como: “IA”. “mudança”. “cultura”. “inovação”. “futuro”.")}</p>
          <p className="mt-2">
            {tx("organizacoes/df15438ed7", "Mas, durante a conversa, a organização percebe que a questão real é outra: direção; autoria; capacidade; prioridade; escolha; liderança; ou consequência.")}</p>
        </>
      ),
      key: "Clareza não resolve tudo. Mas muda o problema que estamos tentando resolver.",
    },
    {
      icon: "chat",
      t: tx("organizacoes/85f1fa3ee3", "Melhores perguntas"),
      s: tx("organizacoes/e39387b912", "Perguntas capazes de abrir mais do que fechar."),
      body: (
        <>
          <p>
            {tx("organizacoes/808b261440", "Talvez a organização entre perguntando: “Como acompanhar essa mudança?” e saia perguntando:")}{" "}
            <strong className="font-semibold text-ink-900">{tx("organizacoes/caf15b9099", "“Que parte dessa mudança queremos realmente ampliar?”")}</strong>
          </p>
          <p className="mt-2">
            {tx("organizacoes/5dd4d43b7a", "Entre perguntando: “Como usar IA?” e saia com:")}{" "}
            <strong className="font-semibold text-ink-900">
              {tx("organizacoes/0dca07a99d", "“Para quê queremos ampliar capacidade e que decisões não queremos terceirizar?”")}</strong>
          </p>
        </>
      ),
      key: "Mudar a pergunta pode mudar completamente a decisão seguinte.",
    },
    {
      icon: "bulb",
      t: tx("organizacoes/869f5967ac", "Mais possibilidades"),
      s: tx("organizacoes/ccb041189e", "Sair do provável como único caminho."),
      body: (
        <>
          <p>{tx("organizacoes/dee75a6fa3", "Quando existe apenas um futuro imaginável, estratégia vira adaptação.")}</p>
          <p className="mt-2">
            {tx("organizacoes/10dae20e99", "O trabalho pode ajudar a organização a perceber: outros caminhos; novas hipóteses; combinações antes invisíveis; riscos ignorados; oportunidades ainda não nomeadas.")}</p>
          <p className="mt-2">
            {tx("organizacoes/b3ce866d4e", "Não para gerar cinquenta cenários. Mas para evitar que")}{" "}
            <strong className="font-semibold text-ink-900">{tx("organizacoes/3498fd2ef2", "“isso provavelmente vai acontecer”")}</strong> {tx("organizacoes/125599dd24", "se transforme cedo demais em:")} <strong className="font-semibold text-ink-900">{tx("organizacoes/7153196fbd", "“não temos escolha”.")}</strong>
          </p>
        </>
      ),
      key: "Quando surgem alternativas, volta a existir escolha.",
    },
    {
      icon: "target",
      t: tx("organizacoes/66fb3cc1d4", "Mais direção"),
      s: tx("organizacoes/9d5d25a208", "Escolher o que merece ser ampliado."),
      body: (
        <>
          <p>
            {tx("organizacoes/a50b563770", "Possibilidade sem direção pode virar dispersão. Por isso, uma conversa boa não serve apenas para abrir. Ela também pode ajudar a fechar algumas escolhas.")}</p>
          <Lines
            className="mt-2"
            items={[
              tx("organizacoes/db4060065a", "O que queremos preservar?"),
              tx("organizacoes/04afeb8fe8", "O que precisamos abandonar?"),
              tx("organizacoes/16396251b9", "O que vale a pena desenvolver?"),
              tx("organizacoes/49b25b7b88", "O que não queremos construir, mesmo sendo capazes?"),
            ]}
          />
        </>
      ),
      key: "Direção é transformar possibilidade em escolha.",
    },
    {
      icon: "people",
      t: tx("organizacoes/b1225c9447", "Linguagem comum"),
      body: (
        <>
          <p>
            {tx("organizacoes/e6ad1a8660", "Às vezes, diferentes pessoas estão tentando discutir o mesmo problema usando palavras diferentes. Ou usando a mesma palavra para falar de coisas completamente distintas.")}</p>
          <p className="mt-2">{tx("organizacoes/23bc827507", "“Futuro”. “Transformação”. “IA”. “Inovação”. “Autonomia”. “Liderança”.")}</p>
          <p className="mt-2">
            {tx("organizacoes/ccf54c0a4c", "Uma experiência bem construída pode criar algumas referências compartilhadas. Não para todo mundo pensar igual. Mas para que a discordância aconteça")} <strong className="font-semibold text-ink-900">{tx("organizacoes/2bb1a005e7", "sobre a mesma conversa")}</strong>.
          </p>
        </>
      ),
      key: (
        <>
          {tx("organizacoes/372e867dc2", "Alinhamento não é concordância. É conseguir enxergar juntos aquilo sobre o que estamos escolhendo.")}</>
      ),
    },
    {
      icon: "chart",
      t: tx("organizacoes/3d078bddbe", "Movimento"),
      s: tx("organizacoes/e40a8e1393", "Alguma coisa precisa conseguir acontecer depois."),
      body: (
        <>
          <p>
            {tx("organizacoes/414fa0adb7", "Nem sempre é um projeto. Nem sempre é uma decisão final. Pode ser: um experimento; uma conversa com outro grupo; uma hipótese a testar; um critério a revisar; uma capacidade a desenvolver; uma decisão que finalmente precisa ser tomada.")}</p>
        </>
      ),
      key: "Porque reflexão sem nenhuma capacidade de produzir movimento corre o risco de virar apenas uma boa experiência. E esse não é o objetivo.",
    },
  ];
  return (
    <Section padded={false} label={tx("organizacoes/56b55b975b", "O que muda depois da conversa")}>
      <div className="grid lg:grid-cols-[1fr_1fr_0.85fr]">
        <Container className="pt-[var(--jf-section-y)] lg:col-span-2 lg:ml-auto lg:mr-0 lg:max-w-[1000px] lg:pr-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Display size="lg">
              {tx("organizacoes/566516f3e5", "O valor da conversa")} <Em>{tx("organizacoes/471651f282", "aparece no que ela muda depois.")}</Em>
            </Display>
            <Body className="text-ink-700">
              <p>
                {tx("organizacoes/0424d13d81", "Nem toda experiência precisa terminar com uma lista de respostas. Algumas precisam terminar com:")}{" "}
                <strong className="font-semibold text-ink-900">
                  {tx("organizacoes/d33d6b4845", "mais clareza; melhores perguntas; novas possibilidades; escolhas mais conscientes; linguagem comum; e movimentos possíveis.")}</strong>
              </p>
              <p>
                {tx("organizacoes/bdf59ba894", "O objetivo não é sair da sala acreditando que o futuro ficou previsível. É sair da sala mais capaz de perceber:")}</p>
              <Lines
                className="font-medium text-red-brand"
                items={[
                  tx("organizacoes/8b165e9bbd", "o que está mudando;"),
                  tx("organizacoes/a93a4d6469", "o que ainda está em aberto;"),
                  tx("organizacoes/caedcab411", "o que merece ser escolhido;"),
                  tx("organizacoes/a4b1e9e4ff", "e o que precisa começar a se mover."),
                ]}
              />
            </Body>
          </div>
        </Container>
        <div className="relative mt-10 min-h-[320px] lg:mt-0">
          <Photo
            src={img("organizacoes/06f8adb6d0", "/images/ensaio/organizacoes-conversa-lideranca.webp")}
            alt={tx("organizacoes/ffb80ae1a5", "Cena ilustrativa de Juliana em conversa individual com uma liderança.")}
            sizes="(min-width:1024px) 30vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>

      <Container className="py-14">
        <h3 className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight">{tx("organizacoes/ef6ad62f45", "O que a conversa pode deixar na organização")}</h3>
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
              {tx("organizacoes/c6db7ccf57", "O objetivo não é sair com certeza sobre o futuro.")} <Em>{tx("organizacoes/1ee85d5066", "É sair com mais qualidade para participar dele.")}</Em>
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              {tx("organizacoes/53bfb018bf", "O que acontece depois não depende apenas da experiência. Depende também da organização. Do contexto. Das lideranças. Das estruturas. Dos incentivos. Da capacidade de sustentar decisões.")}</p>
          </div>
          <div className="rounded-[var(--jf-radius-sm)] bg-blush-100/70 p-7 text-[15px] leading-relaxed text-ink-700">
            <p className="font-semibold text-ink-900">{tx("organizacoes/a2abb19b28", "Nenhuma palestra, workshop ou projeto transforma uma organização sozinho.")}</p>
            <p className="mt-3">
              {tx("organizacoes/692096ad63", "Mas pode: abrir uma conversa que não existia; tornar uma escolha visível; criar linguagem; ampliar possibilidades; e ajudar um grupo a iniciar movimentos que antes não conseguia iniciar.")}</p>
          </div>
          <div>
            <Pull>
              {tx("organizacoes/0b50f0e165", "A conversa não precisa resolver tudo.")}{" "}
              <strong className="font-semibold text-red-brand">
                {tx("organizacoes/9f618610e1", "Precisa mudar o que a organização consegue enxergar e fazer depois dela.")}</strong>
            </Pull>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
              {tx("organizacoes/09f36898ae", "Se alguma coisa mudou na forma como enxergamos o problema, talvez outras coisas possam mudar na forma como escolhemos o caminho.")}</p>
            <p className="mt-2 font-semibold text-red-brand">{tx("organizacoes/fa26fbfac8", "Um movimento muda o que pode acontecer depois.")}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── BLOCO 9 — FECHAMENTO E CONVERSÃO ───────────────────────── */
export async function OrgFechamento() {
  const EXTERNAL = await getExternal();
  return (
    <Section tone="wine" padded={false} label={tx("organizacoes/e842589177", "Fechamento e conversão")} id={FORM_ANCHOR.slice(1)}>
      <Stroke shape="orbit" className="absolute -left-24 top-10 hidden h-[70%] w-[45%] opacity-60 lg:block" width={2.5} color="var(--jf-red-400)" />
      <Container className="relative py-[var(--jf-section-y)]">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <Display size="lg">
              {tx("organizacoes/31bf84389e", "Você não precisa chegar com a solução.")} <Em>{tx("organizacoes/a928ce3cd4", "Pode chegar com a pergunta.")}</Em>
            </Display>
            <Body className="mt-8 max-w-[600px] text-cream-50/85">
              <Lines
                items={[
                  tx("organizacoes/f3226cc5c1", "Talvez você já saiba exatamente o que precisa."),
                  tx("organizacoes/bc734bba14", "Talvez exista uma transformação em curso."),
                  tx("organizacoes/c33cbf194d", "Uma decisão estratégica."),
                  tx("organizacoes/9d9f420f23", "Uma tecnologia criando novas tensões."),
                  tx("organizacoes/2eff9875e7", "Uma liderança tentando encontrar direção."),
                  tx("organizacoes/bddd74cfe7", "Uma convenção que precisa abrir uma conversa."),
                ]}
              />
              <p>
                {tx("organizacoes/8fe3e58cf9", "Ou talvez exista apenas a sensação de que")}{" "}
                <strong className="font-semibold text-cream-50">{tx("organizacoes/78f8891422", "alguma coisa importante precisa ser pensada de outro jeito")}</strong>.
              </p>
              <p>{tx("organizacoes/21aa9bdf26", "Os dois pontos de partida servem.")}</p>
            </Body>
            <Pull onDark className="mt-8 max-w-[560px] font-sans text-[17px] font-semibold">
              {tx("organizacoes/932cff9205", "Não precisamos começar escolhendo um produto. Precisamos começar entendendo o contexto.")}</Pull>
            <div className="relative mt-10 aspect-[4/3] max-w-[560px] overflow-hidden rounded-[var(--jf-radius-sm)]">
              <Photo
                src={img("organizacoes/2a46c363b7", "/images/ensaio/contato-sorriso-horizontal.webp")}
                alt={tx("organizacoes/30d9e42510", "Juliana sorrindo para a câmera à mesa, com notebook aberto.")}
                sizes="(min-width:1024px) 40vw, 100vw"
                className="absolute inset-0"
                imgClassName="object-[50%_40%]"
              />
            </div>
            <div className="mt-10 max-w-[600px]">
              <p className="text-cream-50/85">
                {tx("organizacoes/9e0a44e7b6", "Meu trabalho com organizações geralmente começa antes do formato. Começa tentando compreender:")}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  tx("organizacoes/6e680160bc", "O que está acontecendo agora?"),
                  tx("organizacoes/a34441df34", "O que está mudando?"),
                  tx("organizacoes/9e3ff3a831", "Onde existe tensão?"),
                  tx("organizacoes/b79b7cc51b", "Que decisão precisa ser tomada?"),
                  tx("organizacoes/bb82d7e29e", "O que parece inevitável, mas talvez ainda esteja em aberto?"),
                  tx("organizacoes/f67e6ba127", "E o que essa organização está tentando ajudar a tornar possível?"),
                ].map((q) => (
                  <li key={q} className="jf-hand flex gap-3 text-[22px] leading-tight text-cream-50">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-bright" aria-hidden />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-cream-50/85">
                {tx("organizacoes/0243d7ddcb", "A partir daí, conseguimos descobrir juntos se essa conversa pede uma palestra, um workshop, uma experiência, um projeto de futuros aplicados, uma jornada — ou simplesmente uma primeira conversa para entender melhor a pergunta.")}</p>
            </div>
          </div>

          <div className="lg:sticky lg:top-[calc(var(--jf-header-h)+24px)] lg:self-start">
            <div className="rounded-[var(--jf-radius-md)] bg-cream-50 p-6 text-ink-900 shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] sm:p-9">
              <h3 className="text-center font-serif text-[clamp(24px,2.3vw,34px)] leading-tight">
                {tx("organizacoes/775b231cde", "Qual futuro sua organização está ajudando a tornar mais provável hoje?")}</h3>
              <Stroke shape="underline" className="mx-auto mt-1 h-3 w-40" width={2.5} />
              <p className="mt-3 text-center text-[15px] leading-relaxed text-ink-700">
                {tx("organizacoes/0f7ce0ffbc", "Talvez essa não seja a pergunta com que você chegou.")}<br />
                {tx("organizacoes/46750d0e89", "Mas pode ser uma das perguntas que vale a pena levar para a conversa.")}</p>
              <OrgContactForm className="mt-8" />
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-cream-50 text-ink-900">
        <Container className="py-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-0 lg:divide-x lg:divide-red-brand/40">
            <div className="text-[15px] leading-relaxed text-ink-700 lg:pr-10">
              <p className="font-semibold text-ink-900">{tx("organizacoes/69a3fd6377", "Nenhum formato será sugerido antes de entendermos o contexto.")}</p>
              <Lines
                className="mt-2"
                items={[
                  tx("organizacoes/e4a86659d0", "Se uma palestra resolver, ótimo."),
                  tx("organizacoes/d66c411b82", "Se a pergunta pedir mais profundidade, desenhamos outra abordagem."),
                  tx("organizacoes/e60ab4b40f", "Se não houver encaixe, é melhor descobrir isso no começo."),
                ]}
              />
            </div>
            {EXTERNAL.email && (
              <div className="text-[15px] leading-relaxed text-ink-700 lg:px-10">
                <p className="font-semibold text-ink-900">{tx("organizacoes/346eebaa17", "Prefere começar por e-mail?")}</p>
                <a href={`mailto:${EXTERNAL.email}`} className="mt-2 inline-block font-medium text-red-brand underline-offset-4 hover:underline">
                  {EXTERNAL.email}
                </a>
                {EXTERNAL.whatsapp && <p className="mt-2">{tx("organizacoes/878fe212cd", "WhatsApp:")} {EXTERNAL.whatsapp}</p>}
              </div>
            )}
            <div className="md:col-span-2 lg:col-span-1 lg:pl-10">
              <p className="jf-display text-[clamp(30px,2.8vw,42px)] uppercase leading-none">{tx("organizacoes/0f9d88d7a5", "Temos futuros para construir.")}</p>
              <Stroke shape="underline" className="mt-1 h-3 w-52" width={3} />
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                <strong className="font-semibold text-ink-900">{tx("organizacoes/542d062a7b", "Toda organização já participa daquilo que vem depois.")}</strong> {tx("organizacoes/7d9cce1429", "A questão é como escolhe participar.")}</p>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
