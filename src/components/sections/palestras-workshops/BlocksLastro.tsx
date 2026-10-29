import { getExternal, getMediaFor, getProof } from "@/lib/content";
import { MediaPlayer } from "@/components/ui/MediaPlayer";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, NumberBadge, QuoteCard } from "@/components/ui/Typography";
import { CONTACT_ROUTES } from "@/lib/site";

import { tx, img, rx } from "@/lib/editable";

export const OUCA_ANCHOR = "#ouca-e-veja";

/* ───────────────────────── P03 — OUÇA E VEJA JU ───────────────────────── */
/*
 * Somente ativos REAIS do painel. Título = o que é (ex.: "Entrevista sobre Futuros Humanos");
 * "cargo/contexto" = veículo ou evento e data. Sem nenhum item, a seção não aparece.
 */
export async function PalestrasOucaVeja() {
  const [proof, videos] = await Promise.all([getProof(), getMediaFor("palestras")]);
  const photos = proof.filter((p) => p.kind === "foto" && p.image);
  const testimonials = proof.filter((p) => p.kind === "depoimento" && p.quote);
  const orgs = proof.filter((p) => p.kind === "logo" && (p.title || p.image));
  if (!videos.length && !photos.length && !testimonials.length && !orgs.length) return null;
  return (
    <Section label={tx("palestras-workshops/9fcc5f8f39", "Ouça e veja Ju")} id={OUCA_ANCHOR.slice(1)}>
      <Container>
        <Display size="lg" className="max-w-[900px]">
{rx("palestras-workshops/r6a90e9241", "Conheça a conversa <em>antes de levá-la ao seu evento.</em>")}
</Display>

        {videos.length > 0 && (
          <ul className={`mt-12 grid gap-10 ${videos.length > 1 ? "lg:grid-cols-2" : "max-w-[960px]"}`}>
            {videos.map((m) => (
              <li key={m.id}>
                <MediaPlayer m={m} />
              </li>
            ))}
          </ul>
        )}

        {photos.length > 0 && (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((p) => (
              <li key={p.id}>
                <figure>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                    <Photo src={p.image!} alt={p.title ?? "Ju Ferreira"} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="absolute inset-0" />
                  </div>
                  {(p.title || p.role) && (
                    <figcaption className="mt-2 text-[13px] leading-snug text-ink-500">
                      {[p.title, p.role].filter(Boolean).join(" · ")}
                    </figcaption>
                  )}
                </figure>
              </li>
            ))}
          </ul>
        )}

        {testimonials.length > 0 && (
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.id}>
                <QuoteCard cite={[t.title, t.role].filter(Boolean).join(" · ")}>{t.quote}</QuoteCard>
              </li>
            ))}
          </ul>
        )}

        {orgs.length > 0 && (
          <ul className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 text-ink-500" aria-label={tx("palestras-workshops/84ab13fdfc", "Organizações e eventos")}>
            {orgs.map((o) => {
              const inner = o.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={o.image} alt={o.title ?? ""} className="h-10 w-auto max-w-[160px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
              ) : (
                <span className="text-[15px] font-medium uppercase tracking-[0.14em]">{o.title}</span>
              );
              return (
                <li key={o.id}>
                  {o.url ? (
                    <a href={o.url} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </Section>
  );
}

/* ───────────────────────── P06 — COMO COMEÇA ───────────────────────── */
export function PalestrasComoComeca() {
  const steps = [
    { t: tx("palestras-workshops/21ad539cbc", "Conversa inicial"), d: tx("palestras-workshops/6624b01c4a", "Público, momento do evento e a pergunta que merece entrar na sala.") },
    { t: tx("palestras-workshops/59ba56b3bd", "Proposta"), d: tx("palestras-workshops/62c1c0fe95", "Formato, escopo e condições adequados à necessidade.") },
    { t: tx("palestras-workshops/480d4e1508", "Preparação"), d: tx("palestras-workshops/275d8f137e", "Alinhamento de exemplos, linguagem e organização da experiência.") },
  ];
  return (
    <Section tone="cream" label={tx("palestras-workshops/f0fb1051fe", "Como começa")} id="como-comeca">
      <Container>
        <Display size="lg">
{rx("palestras-workshops/rc12f41b82", "Começamos <em>pelo contexto.</em>")}
</Display>
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t border-ink-900/15 pt-6">
              <div className="flex items-center gap-4">
                <NumberBadge n={i + 1} className="shrink-0 bg-cream-50" />
                <h3 className="font-serif text-[clamp(22px,2vw,28px)] leading-tight">{s.t}</h3>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-700">{s.d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ───────────────────────── P07 — CONTRATAÇÃO ───────────────────────── */
export async function PalestrasContratacao() {
  const EXTERNAL = await getExternal();
  const hasDirect = Boolean(EXTERNAL.email || EXTERNAL.whatsapp);
  return (
    <Section tone="dark" label={tx("palestras-workshops/8e4b544952", "Contratação")} id="contratar">
      <div className="absolute top-[var(--jf-section-y)] right-0 hidden aspect-[2/3] w-[38%] lg:block" aria-hidden>
        <Photo
          src={img("palestras-workshops/813ecbe2fb", "/images/ensaio/contato-sorriso-vertical.webp")}
          alt=""
          sizes="38vw"
          className="absolute inset-0 jf-fade-left opacity-70"
          imgClassName="object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40" />
      </div>
      <Stroke shape="orbit" className="absolute -right-24 top-6 hidden h-[95%] w-[50%] opacity-80 lg:block" width={3} color="var(--jf-red-400)" />
      <Container className="relative">
        <div className="max-w-[720px]">
          <Display size="lg">
{rx("palestras-workshops/r64f7b5fdf", "Qual conversa precisa acontecer <em>no seu evento?</em>")}
</Display>
          <Body className="mt-10 max-w-[600px] text-cream-50/85">
            <p>
{rx("palestras-workshops/rc5730a4a4", "Conte o público, a data se já existir e o que motivou o encontro. A partir daí, podemos avaliar o formato.")}
</p>
          </Body>
          <ButtonLink href={CONTACT_ROUTES.palestras} size="lg" className="mt-10">
            {tx("palestras-workshops/84027745a8", "Falar sobre uma palestra")}</ButtonLink>
          {hasDirect && (
            <div className="mt-12 border-t border-cream-50/20 pt-8 text-[15px]">
              <p className="font-semibold">
{rx("palestras-workshops/r027815616", "Prefere falar direto?")}
</p>
              <ul className="mt-2 space-y-1">
                {EXTERNAL.email && (
                  <li>
                    <a href={`mailto:${EXTERNAL.email}`} className="text-red-bright underline underline-offset-4">
                      {EXTERNAL.email}
                    </a>
                  </li>
                )}
                {EXTERNAL.whatsapp && (
                  <li>
                    <a href={EXTERNAL.whatsapp} className="text-red-bright underline underline-offset-4">
                      {tx("palestras-workshops/280964141c", "WhatsApp comercial")}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
