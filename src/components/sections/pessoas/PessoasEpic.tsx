import type { ReactNode } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em, HandNote } from "@/components/ui/Typography";
import { LINKS } from "@/lib/site";
import { LineIcon, Paper, Underline, type IconName } from "./parts";

import { tx, img } from "@/lib/editable";
function Epic() {
  return (
    <>
      {tx("pessoas/1198bc35bf", "EPIC")}<Em>{tx("pessoas/b9b208b63d", "247")}</Em>
    </>
  );
}

/* ───────────────────────── BLOCO 6 — EPIC247 ───────────────────────── */
export function PessoasEpic() {
  const pillars: { icon: IconName; t: string; body: ReactNode }[] = [
    {
      icon: "bolt",
      t: tx("pessoas/65908bb0d2", "Energia"),
      body: (
        <>
          <p>{tx("pessoas/c240f59a13", "Porque movimento exige combustível.")}</p>
          <p>{tx("pessoas/2eab558f77", "Não no sentido de produtividade infinita. Mas de perceber:")}</p>
          <p className="text-ink-900">
            {tx("pessoas/ec8f5a8236", "onde sua energia está indo; o que a consome; o que a sustenta; e como construir condições mínimas para agir.")}</p>
        </>
      ),
    },
    {
      icon: "growth",
      t: tx("pessoas/1c0b69f7a8", "Capacidade"),
      body: (
        <>
          <p>{tx("pessoas/e8d647f8af", "Porque intenção sozinha não produz mudança.")}</p>
          <p>
            {tx("pessoas/daec7e4b68", "Algumas coisas precisam ser:")} <span className="text-ink-900">{tx("pessoas/af7fceb924", "aprendidas; praticadas; fortalecidas; repetidas; reorganizadas.")}</span>
          </p>
          <p className="font-semibold text-ink-900">{tx("pessoas/ce14edc57a", "Transformação pessoal também é desenvolvimento.")}</p>
        </>
      ),
    },
    {
      icon: "play",
      t: tx("pessoas/4088ce3ab7", "Ação"),
      body: (
        <>
          <p>{tx("pessoas/ceb73781d8", "Porque, em algum momento, alguma coisa precisa sair da cabeça e entrar no mundo.")}</p>
          <p className="text-ink-900">{tx("pessoas/a25e61035f", "Uma escolha. Um comportamento. Uma prática. Um teste. Um movimento.")}</p>
          <p className="font-semibold text-red-brand">{tx("pessoas/6ead26cdfd", "Não precisa ser enorme. Precisa ser real.")}</p>
        </>
      ),
    },
  ];

  return (
    <Section tone="cream" label={tx("pessoas/32cb3a6537", "EPIC247")} id="epic247">
      <Container>
        {/* A — abertura + foto + pilares */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Display size="lg">
              {tx("pessoas/40a3e2d5f1", "Às vezes, perceber não basta.")} <Em>{tx("pessoas/f9ea82a127", "Você precisa começar a se mover.")}</Em>
            </Display>
            <Underline />
            <div className="jf-body mt-8 text-ink-700">
              <p>
                {tx("pessoas/f6015be5c4", "Existe uma diferença enorme entre: entender o que está acontecendo; saber o que gostaria de mudar; e conseguir transformar isso em prática.")}</p>
              <p>
                {tx("pessoas/54dc433fd7", "Você pode ter clareza. Pode ter lido. Pode ter refletido. Pode até saber exatamente o que precisa fazer. E ainda assim continuar parada.")}</p>
              <p>
                {tx("pessoas/f7b75c47f0", "Não porque “não quer o suficiente”. Mas porque mudança também exige: energia; estrutura; repetição; capacidade; escolhas; e ação sustentada no mundo real.")}</p>
            </div>
            <p className="mt-6 text-[18px] font-semibold text-red-brand">
              {tx("pessoas/e8358e352d", "É nesse espaço que entra o")} <Epic />.
            </p>
          </div>

          <div className="relative">
            <Photo
              src={img("pessoas/8a0ead7c10", "/images/ensaio/pessoas-janela.webp")}
              alt={tx("pessoas/8b6d5cfcaf", "Juliana olhando pela janela, com expressão contemplativa.")}
              sizes="(min-width:1024px) 28vw, 100vw"
              className="aspect-[4/5] w-full rounded-[var(--jf-radius-sm)] lg:aspect-[3/4]"
              imgClassName="object-[50%_40%]"
            />
            <Paper className="-mt-10 ml-auto w-fit max-w-[240px] md:rotate-[4deg]">
              <p className="jf-hand text-[28px]">{tx("pessoas/7cb1002a8b", "Saber não muda sozinho.")}</p>
            </Paper>
          </div>

          <ul className="space-y-8">
            {pillars.map((p) => (
              <li key={p.t} className="grid grid-cols-[64px_1fr] gap-5">
                <LineIcon name={p.icon} />
                <div>
                  <h3 className="jf-title uppercase text-red-brand">{p.t}</h3>
                  <div className="mt-2 space-y-2 text-[15.5px] leading-relaxed text-ink-700">{p.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* B — o que é + cotidiano */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div className="rounded-[var(--jf-radius-sm)] bg-blush-100 p-7">
              <h3 className="jf-display jf-display-sm">
                <Epic /> {tx("pessoas/8a6caf24a4", "é uma experiência prática de transformação pessoal.")}</h3>
            </div>
            <div className="jf-body mt-6 text-ink-700">
              <p>{tx("pessoas/d51342e04d", "Foi construído para quem percebe que alguma coisa precisa mudar, mas não quer ficar apenas na reflexão.")}</p>
              <p>
                {tx("pessoas/f52c03f015", "O objetivo não é criar uma versão perfeita de você. Nem prometer uma vida sem limites. Nem dizer que basta “querer muito”.")}</p>
              <p>
                {tx("pessoas/b5f4779902", "É trabalhar, de forma prática, elementos que influenciam nossa capacidade de sair da intenção e entrar em movimento.")}</p>
            </div>
            <p className="mt-6 border-l-2 border-red-brand pl-5 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
              {tx("pessoas/baff5d00a8", "Você não precisa de mais uma ideia bonita sobre mudança.")}{" "}
              <span className="text-red-brand">{tx("pessoas/ee62ee0d7f", "Talvez precise de estrutura para conseguir praticá-la.")}</span>
            </p>
          </div>
          <div>
            <p className="jf-body text-ink-700">
              {tx("pessoas/82f9719358", "Você percebe. Decide que quer mudar alguma coisa. Faz planos. Começa.")}</p>
            <ul className="mt-4 space-y-1 font-serif text-[clamp(20px,1.6vw,24px)] leading-snug text-ink-900">
              <li>{tx("pessoas/dd7242e9e9", "A rotina entra.")}</li>
              <li>{tx("pessoas/49f0dc820a", "O cansaço entra.")}</li>
              <li>{tx("pessoas/306e7fb14a", "As urgências entram.")}</li>
              <li>{tx("pessoas/92aef954c9", "Um dia ruim entra.")}</li>
              <li>{tx("pessoas/0aa0cdc351", "O comportamento antigo volta.")}</li>
            </ul>
            <div className="jf-body mt-4 text-ink-700">
              <p>{tx("pessoas/c18f69befd", "E, pouco a pouco, aquilo que parecia uma escolha vira novamente intenção.")}</p>
              <p>{tx("pessoas/0bb597e1ac", "Não porque você seja incapaz. Mas porque:")}</p>
            </div>
            <p className="jf-display jf-display-sm mt-5 uppercase">
              {tx("pessoas/88592eadbd", "Transformação precisa sobreviver")} <Em>{tx("pessoas/d347513e21", "ao cotidiano.")}</Em>
            </p>
          </div>
        </div>

        {/* C — três colunas: não é Futuros Humanos / eu sei × eu faço / entender × praticar */}
        <div className="mt-16 grid gap-12 border-t border-ink-900/15 pt-12 lg:mt-20 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-10">
            <h3 className="font-serif text-[clamp(24px,2vw,30px)] leading-tight">
              <Epic /> {tx("pessoas/e4e739b22b", "não é Futuros Humanos em formato de programa.")}</h3>
            <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-ink-700">
              <p>{tx("pessoas/784732b480", "São construções diferentes dentro do universo Ju Ferreira.")}</p>
              <p>
                <strong className="font-semibold text-ink-900">{tx("pessoas/e912f51847", "Futuros Humanos")}</strong> {tx("pessoas/8a249c2d9f", "investiga possibilidades, agência, tecnologia, humanidade, direção e construção de futuros.")}</p>
              <p>
                <strong className="font-semibold text-ink-900">{tx("pessoas/0ff71e5337", "EPIC247")}</strong> {tx("pessoas/6fc3dc4cb3", "trabalha transformação pessoal de maneira prática, ajudando a colocar mudança em movimento no cotidiano.")}</p>
              <p>{tx("pessoas/8d167a6869", "Eles podem conversar. Mas não são a mesma coisa.")}</p>
            </div>
          </div>
          <div className="lg:px-10">
            <h3 className="font-serif text-[clamp(24px,2vw,30px)] leading-tight">
              {tx("pessoas/3e335dadd5", "Talvez")} <Epic /> {tx("pessoas/1965423468", "faça sentido se o seu problema já não for apenas perceber.")}</h3>
            <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-ink-700">
              <p>
                {tx("pessoas/03bd8e50c4", "Você já entendeu algumas coisas. Sabe que quer mudar alguma coisa. Talvez até saiba por onde deveria começar.")}</p>
              <p>{tx("pessoas/287c569ecc", "Mas existe uma distância entre:")}</p>
            </div>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[clamp(26px,2.2vw,34px)]">
              <span>{tx("pessoas/584779e37a", "“eu sei”")}</span>
              <span className="text-[16px] text-ink-500">{tx("pessoas/bfa1502b91", "e")}</span>
              <span className="text-red-brand">{tx("pessoas/f4f418be7e", "“eu faço”.")}</span>
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-700">{tx("pessoas/9420ec4a2f", "É essa distância que o produto procura trabalhar.")}</p>
          </div>
          <div className="lg:pl-10">
            <p className="font-serif text-[clamp(24px,2vw,30px)] leading-tight">
              {tx("pessoas/7b69cdd9ae", "Entender muda a forma como você enxerga.")}</p>
            <p className="mt-2 font-serif text-[clamp(24px,2vw,30px)] leading-tight text-red-brand">
              {tx("pessoas/c1e7835fbf", "Praticar muda aquilo que você se torna capaz de fazer.")}</p>
          </div>
        </div>

        {/* D — apresentação + CTAs */}
        <div className="mt-16 grid gap-10 rounded-[var(--jf-radius-md)] bg-cream-50 p-7 sm:p-10 lg:mt-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14 lg:p-14">
          <div>
            <p className="font-serif text-[clamp(26px,2.6vw,40px)] leading-tight">
              <Epic /> {tx("pessoas/5b225692d3", "— uma experiência prática para transformar percepção em movimento no cotidiano real.")}</p>
            <ButtonRow className="mt-8">
              <ButtonLink href={LINKS.epic247} size="lg">
                {tx("pessoas/26a4218c1f", "Conheça o EPIC247")}</ButtonLink>
              <ButtonLink href="#portas" variant="secondary" size="lg">
                {tx("pessoas/315662cfc6", "Ainda não é isso? Continue explorando")}</ButtonLink>
            </ButtonRow>
          </div>
          <div className="space-y-4">
            <HandNote className="text-red-brand" rotate={-3}>
              {tx("pessoas/d4f0fadb9a", "Precisa funcionar quando a segunda-feira chega.")}</HandNote>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="jf-display jf-display-sm">{tx("pessoas/80ca6872ac", "Você não precisa esperar se sentir completamente pronta.")}</p>
            <p className="mt-3 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug text-red-brand">
              {tx("pessoas/c16bbb899c", "Às vezes, capacidade também é construída depois que o movimento começa.")}</p>
          </div>
          <p className="jf-body text-ink-700">
            {tx("pessoas/2493983df4", "Perceber importa. Escolher importa. Mas algumas mudanças só começam a existir quando encontram prática.")}</p>
        </div>
      </Container>
    </Section>
  );
}
