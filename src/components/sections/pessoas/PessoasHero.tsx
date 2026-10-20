import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em, HandNote } from "@/components/ui/Typography";
import { Paper, Underline } from "./parts";

import { tx, img } from "@/lib/editable";
/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function PessoasHero() {
  return (
    <Section padded={false} className="lg:min-h-[calc(100svh-var(--jf-header-h))]" label={tx("pessoas/833a78e1cd", "Abertura")}>
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Photo
          src={img("pessoas/e747a44fdb", "/images/ensaio/home-02-biblioteca-vertical.webp")}
          alt={tx("pessoas/d393b0a5f8", "Retrato de Juliana em uma poltrona na biblioteca.")}
          priority
          sizes="46vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
        <HandNote className="absolute right-8 top-10 max-w-[230px] text-ink-900 xl:right-14" rotate={-6}>
          {tx("pessoas/2706345026", "Limites existem.")}<br />
          {tx("pessoas/02bb92733b", "Potência também.")}</HandNote>
        <Stroke shape="underline" className="absolute right-10 top-[150px] h-4 w-48 xl:right-16" width={3} />
      </div>

      <Container className="flex flex-col justify-center py-14 lg:min-h-[calc(100svh-var(--jf-header-h))] lg:py-20">
        <div className="jf-reveal max-w-[720px] lg:max-w-[52%]">
          <Display as="h1" size="lg">
            {tx("pessoas/0aa67a5019", "E se essa conversa for sobre a")} <Em>{tx("pessoas/11168cc513", "sua própria vida?")}</Em>
          </Display>
          <Underline />

          <div className="jf-body mt-8 max-w-[620px] text-ink-700">
            <p>
              {tx("pessoas/41e575ebf0", "Construir futuros não é assunto apenas de empresas, governos ou futuristas. Todos os dias fazemos escolhas sobre aquilo que sustentamos, abandonamos, aprendemos, repetimos e tentamos transformar.")}</p>
            <p>
              {tx("pessoas/e4fe5d67b7", "Nem tudo está nas nossas mãos. Há limite. Há acaso. Há outras pessoas. Há circunstâncias que não escolhemos.")}</p>
            <p>{tx("pessoas/012bf3ed9c", "Mas entre controlar tudo e simplesmente aceitar existe um espaço enorme.")}</p>
          </div>

          <p className="mt-6 font-serif text-[clamp(26px,2.4vw,36px)] leading-tight text-red-brand">
            {tx("pessoas/458e723cc2", "É nesse espaço que a gente participa.")}</p>

          <div className="jf-body mt-6 max-w-[620px] text-ink-700">
            <p>
              {tx("pessoas/6d9e4d9994", "Talvez você não saiba exatamente onde quer chegar. Talvez alguma coisa apenas não esteja funcionando mais. Talvez você consiga perceber que algo poderia ser diferente, mas ainda não saiba como começar. Ou talvez esteja tudo aparentemente bem e, mesmo assim, exista uma pergunta insistindo.")}</p>
          </div>

          <p className="mt-6 max-w-[600px] text-[19px] font-semibold leading-snug text-ink-900">
            {tx("pessoas/85278bc2ad", "Aquilo que existe hoje não precisa ser tratado como tudo aquilo que ainda pode existir.")}</p>

          <ButtonRow className="mt-10">
            <ButtonLink href="#por-onde-comecar" size="lg">
              {tx("pessoas/c3231c0550", "Por onde eu começo?")}</ButtonLink>
            <ButtonLink href="/ideias" variant="secondary" size="lg">
              {tx("pessoas/4255511cea", "Explore as ideias")}</ButtonLink>
          </ButtonRow>
        </div>
      </Container>

      {/* mobile: foto abaixo do texto, nota manuscrita como papel */}
      <div className="relative h-[110vw] max-h-[560px] lg:hidden">
        <Photo src={img("pessoas/965edb9857", "/images/ensaio/home-02-biblioteca-horizontal.webp")} alt={tx("pessoas/ace1405bdd", "Juliana sentada em uma poltrona na biblioteca.")} sizes="100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
        <div className="absolute bottom-6 right-5 max-w-[220px]">
          <Paper>
            <p className="jf-hand text-[24px]">
              {tx("pessoas/1d590c825d", "Limites existem.")}<br />
              {tx("pessoas/2d86ad4f3b", "Potência também.")}</p>
          </Paper>
        </div>
      </div>
    </Section>
  );
}
