import type { MediaItem } from "@/lib/content";
import { MediaPlayer } from "@/components/ui/MediaPlayer";
import type { Article } from "@/lib/content";
import { photoPosition } from "@/lib/photo-position";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, StickyNote } from "@/components/ui/Typography";
import { LINKS } from "@/lib/site";
import { AcervoList, type AcervoItem } from "./AcervoList";
import { EPISTEMIC, TERRITORIO_NAME, TERRITORIO_ORDER, isEpistemic, type TerritorioId } from "./data";
import { BrushLabel } from "./Parts";

import { tx, img, lazy, rx } from "@/lib/editable";

export const ANCHORS = {
  acervo: "#acervo",
  newsletter: "#uma-terca-feira-qualquer",
  investigacao: "#em-investigacao",
} as const;

/* ───────────────────────── I01 — ABERTURA ───────────────────────── */
export function IdeiasHero({ hasArticles }: { hasArticles: boolean }) {
  return (
    <Section padded={false} label={tx("ideias/5512140bd7", "Ideias")}>
      <div className="grid lg:grid-cols-[46%_54%]">
        <Container className="py-14 lg:ml-auto lg:mr-0 lg:max-w-[700px] lg:py-24 lg:pr-10">
          <div className="jf-reveal">
            <BrushLabel>
{rx("ideias/r7ffe3d5b5", "Ideias")}
</BrushLabel>
            <Display as="h1" size="xl" className="mt-6">
{rx("ideias/r7837154df", "Algumas ideias <em>merecem mais tempo.</em>")}
</Display>
            <Stroke shape="underline" className="mt-2 h-4 w-[70%] max-w-[420px]" width={3} />
            <Body className="mt-8 max-w-[540px] text-ink-700">
              <p>
{rx("ideias/r58141c176", "Textos e conversas sobre futuros, tecnologia, escolhas e aquilo que estamos construindo enquanto a vida acontece.")}
</p>
            </Body>
            <ButtonRow className="mt-10">
              {hasArticles && <ButtonLink href={ANCHORS.acervo}>
{rx("ideias/red4389696", "Comece a ler")}
</ButtonLink>}
              <ButtonLink href={LINKS.newsletter} variant={hasArticles ? "secondary" : "primary"}>
{rx("ideias/r543e9a79c", "Assine Uma Terça-feira Qualquer")}
</ButtonLink>
            </ButtonRow>
          </div>
        </Container>
        <div className="relative min-h-[420px] lg:min-h-[600px]">
          <Photo
            src={img("ideias/41a9e167ae", "/images/ensaio/home-05-escrita-vertical.webp")}
            alt={tx("ideias/ad6f11a343", "Juliana com caderno, caneta e café à mesa, em retrato vertical.")}
            priority
            sizes="(min-width:1024px) 54vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
          <StickyNote className="absolute left-4 top-6 hidden sm:block lg:left-[8%] lg:top-10" rotate={-6}>
{rx("ideias/r846e0a106", "Nem tudo aqui está resolvido.")}
</StickyNote>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── I02 — ACERVO ───────────────────────── */
const dateFmt = lazy(() => (new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Sao_Paulo" })));

function toItem(a: Article): AcervoItem {
  const cats = TERRITORIO_ORDER.filter((t) => a.territories.includes(t)).map((t: TerritorioId) => ({ id: t, name: TERRITORIO_NAME[t] }));
  return {
    slug: a.slug,
    // o painel ainda não registra o tipo do conteúdo; todo item publicado hoje é texto
    kind: "Artigo",
    title: a.title,
    excerpt: a.excerpt ?? a.subtitle,
    dateLabel: a.publishedAt ? dateFmt.format(new Date(a.publishedAt)) : null,
    dateIso: a.publishedAt,
    cover: a.cover,
    coverPosition: a.cover ? photoPosition(a.cover) : undefined,
    cats,
    epistemic: isEpistemic(a.epistemic) ? EPISTEMIC[a.epistemic].label : null,
  };
}

/** Só aparece com conteúdo publicado no painel (artigos e/ou vídeos e áudios marcados para Ideias). Sem nada, a seção é omitida. */
export function IdeiasAcervo({ articles, media = [] }: { articles: Article[]; media?: MediaItem[] }) {
  if (!articles.length && !media.length) return null;
  return (
    <Section id="acervo" label={tx("ideias/85963644ef", "Acervo")}>
      <Container>
        <Display size="md" className="max-w-[820px]">
          <span id="acervo-titulo">
{rx("ideias/r3ef8ccdb5", "Por onde você quer <em>entrar?</em>")}
</span>
        </Display>
        {articles.length > 0 && (
          <div className="mt-12">
            <AcervoList items={articles.map(toItem)} labelledBy="acervo-titulo" />
          </div>
        )}
        {media.length > 0 && (
          <div className="mt-16">
            <h3 className="jf-eyebrow text-[14px] text-red-brand">
{rx("ideias/r45339604b", "Para ouvir e assistir")}
</h3>
            <ul className="mt-6 grid gap-10 lg:grid-cols-2">
              {media.map((m) => (
                <li key={m.id}>
                  <MediaPlayer m={m} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
