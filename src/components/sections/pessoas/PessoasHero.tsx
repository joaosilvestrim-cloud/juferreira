import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em, HandNote } from "@/components/ui/Typography";
import { Paper, Underline } from "./parts";

/* ───────────────────────── BLOCO 1 — HERO ───────────────────────── */
export function PessoasHero() {
  return (
    <Section padded={false} className="lg:min-h-[calc(100svh-var(--jf-header-h))]" label="Abertura">
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Photo
          src="/images/ensaio/home-02-biblioteca-vertical.webp"
          alt="Retrato de Juliana em uma poltrona na biblioteca."
          priority
          sizes="46vw"
          className="jf-fade-left absolute inset-0"
          imgClassName="object-[50%_40%]"
        />
        <HandNote className="absolute right-8 top-10 max-w-[230px] text-ink-900 xl:right-14" rotate={-6}>
          Limites existem.
          <br />
          Potência também.
        </HandNote>
        <Stroke shape="underline" className="absolute right-10 top-[150px] h-4 w-48 xl:right-16" width={3} />
      </div>

      <Container className="flex flex-col justify-center py-14 lg:min-h-[calc(100svh-var(--jf-header-h))] lg:py-20">
        <div className="jf-reveal max-w-[720px] lg:max-w-[52%]">
          <Display as="h1" size="lg">
            E se essa conversa for sobre a <Em>sua própria vida?</Em>
          </Display>
          <Underline />

          <div className="jf-body mt-8 max-w-[620px] text-ink-700">
            <p>
              Construir futuros não é assunto apenas de empresas, governos ou futuristas. Todos os dias fazemos escolhas sobre
              aquilo que sustentamos, abandonamos, aprendemos, repetimos e tentamos transformar.
            </p>
            <p>
              Nem tudo está nas nossas mãos. Há limite. Há acaso. Há outras pessoas. Há circunstâncias que não escolhemos.
            </p>
            <p>Mas entre controlar tudo e simplesmente aceitar existe um espaço enorme.</p>
          </div>

          <p className="mt-6 font-serif text-[clamp(26px,2.4vw,36px)] leading-tight text-red-brand">
            É nesse espaço que a gente participa.
          </p>

          <div className="jf-body mt-6 max-w-[620px] text-ink-700">
            <p>
              Talvez você não saiba exatamente onde quer chegar. Talvez alguma coisa apenas não esteja funcionando mais. Talvez
              você consiga perceber que algo poderia ser diferente, mas ainda não saiba como começar. Ou talvez esteja tudo
              aparentemente bem e, mesmo assim, exista uma pergunta insistindo.
            </p>
          </div>

          <p className="mt-6 max-w-[600px] text-[19px] font-semibold leading-snug text-ink-900">
            Aquilo que existe hoje não precisa ser tratado como tudo aquilo que ainda pode existir.
          </p>

          <ButtonRow className="mt-10">
            <ButtonLink href="#por-onde-comecar" size="lg">
              Por onde eu começo?
            </ButtonLink>
            <ButtonLink href="/ideias" variant="secondary" size="lg">
              Explore as ideias
            </ButtonLink>
          </ButtonRow>
        </div>
      </Container>

      {/* mobile: foto abaixo do texto, nota manuscrita como papel */}
      <div className="relative h-[110vw] max-h-[560px] lg:hidden">
        <Photo src="/images/ensaio/home-02-biblioteca-horizontal.webp" alt="Juliana sentada em uma poltrona na biblioteca." sizes="100vw" className="absolute inset-0" imgClassName="object-[50%_40%]" />
        <div className="absolute bottom-6 right-5 max-w-[220px]">
          <Paper>
            <p className="jf-hand text-[24px]">
              Limites existem.
              <br />
              Potência também.
            </p>
          </Paper>
        </div>
      </div>
    </Section>
  );
}
