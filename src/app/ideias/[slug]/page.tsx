import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink, ButtonRow } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em, QuoteCard } from "@/components/ui/Typography";
import { getArticle, getPublishedArticles, parseBody } from "@/lib/content";
import { LINKS } from "@/lib/site";

const TERR: Record<string, string> = {
  futuros: "Futuros",
  tecnologia: "Tecnologia & Humanidade",
  escolhas: "Escolhas & Agência",
  lideranca: "Liderança & Organizações",
  "vida-real": "Transformação & Vida Real",
};
const EPI: Record<string, string> = {
  tese: "[TESE]",
  sintese: "[SÍNTESE PROVISÓRIA]",
  hipotese: "[HIPÓTESE]",
  investigacao: "[EM INVESTIGAÇÃO]",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const list = await getPublishedArticles();
  // Cache Components exige ao menos um parâmetro; o marcador vira 404.
  return list.length ? list.map((a) => ({ slug: a.slug })) : [{ slug: "__sem-artigos__" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = await getArticle((await params).slug);
  if (!a) return { title: "Ideias" };
  return {
    title: a.title,
    description: a.subtitle ?? a.excerpt ?? undefined,
    openGraph: { type: "article", publishedTime: a.publishedAt ?? undefined, images: a.cover ? [a.cover] : undefined },
  };
}

export default function ArticlePage({ params }: Props) {
  // artigos publicados depois do build são renderizados sob demanda (dentro de Suspense) e depois ficam em cache
  return (
    <Suspense fallback={<div className="min-h-[70vh]" aria-busy="true" />}>
      <ArticleContent params={params} />
    </Suspense>
  );
}

async function ArticleContent({ params }: Props) {
  const a = await getArticle((await params).slug);
  if (!a) notFound();
  const blocks = parseBody(a.body);
  const words = a.body.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  const date = a.publishedAt
    ? new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "America/Sao_Paulo" }).format(new Date(a.publishedAt))
    : null;

  return (
    <article>
      <Section label="Artigo">
        <Container className="max-w-[920px]">
          <Link href="/ideias" className="jf-eyebrow text-red-brand hover:underline">
            ← Ideias
          </Link>
          <p className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-[13px] uppercase tracking-[0.16em] text-ink-500">
            {a.territories.map((t) => (
              <span key={t}>{TERR[t] ?? t}</span>
            ))}
            {a.epistemic && <span className="text-red-brand">{EPI[a.epistemic] ?? a.epistemic}</span>}
          </p>
          <Display as="h1" size="lg" className="mt-5">
            {a.title}
          </Display>
          <Stroke shape="underline" className="mt-3 h-4 w-56" width={4} />
          {a.subtitle && <p className="jf-lead mt-8 text-ink-700">{a.subtitle}</p>}
          <p className="mt-6 text-[14px] text-ink-500">
            Ju Ferreira{date && ` · ${date}`} · {minutes} min de leitura
          </p>
        </Container>
        {a.cover && (
          <Container className="mt-12 max-w-[1100px]">
            <div className="relative aspect-[16/8] overflow-hidden rounded-sm" data-photo="">
              <Image src={a.cover} alt="" fill priority sizes="(min-width:1100px) 1100px, 100vw" className="object-cover" />
            </div>
          </Container>
        )}
        <Container className="mt-14 max-w-[720px]">
          {a.question && (
            <QuoteCard className="mb-12">
              <span className="text-red-brand">Pergunta de entrada:</span> {a.question}
            </QuoteCard>
          )}
          <div className="jf-body text-[18px] leading-[1.8] text-ink-800">
            {blocks.map((b, i) =>
              b.type === "h2" ? (
                <h2 key={i} className="jf-display jf-display-sm mb-4 mt-12 text-ink-900">
                  {b.text}
                </h2>
              ) : b.type === "quote" ? (
                <blockquote key={i} className="my-10 border-l-[3px] border-red-brand pl-6 font-serif text-[clamp(22px,2vw,28px)] leading-snug text-ink-900">
                  {b.text}
                </blockquote>
              ) : (
                <p key={i} className="mt-6 whitespace-pre-line first:mt-0">
                  {b.text}
                </p>
              ),
            )}
          </div>
        </Container>
      </Section>
      <Section tone="dark" label="Continue a conversa">
        <Container className="max-w-[920px]">
          <Display size="md">
            Se alguma pergunta ficou, <Em>talvez esse texto já tenha cumprido seu papel.</Em>
          </Display>
          <ButtonRow className="mt-10">
            <ButtonLink href={LINKS.newsletter}>Assine Uma Terça-feira Qualquer</ButtonLink>
            <ButtonLink href="/ideias" variant="ghost-light">
              Explore as ideias
            </ButtonLink>
          </ButtonRow>
        </Container>
      </Section>
    </article>
  );
}
