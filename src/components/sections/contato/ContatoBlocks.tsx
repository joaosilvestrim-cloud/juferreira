import { getExternal } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Eyebrow, Lead, Title } from "@/components/ui/Typography";
import { ContactForm } from "./ContactForm";
import { IconDisc } from "./Icons";
import type { IconName } from "./routes";

import { tx, img, rx, rich } from "@/lib/editable";

/*
 * Contato · Site 2.0 (direção editorial §15).
 * C01 abertura breve + C02 formulário na mesma seção (#formulario), sem cartões antes do preenchimento.
 * C03 outros canais: só os preenchidos no painel (Configurações); sem nenhum, a lista some e fica o fecho.
 * Textos da v1 guardados em docs/v2/cofre-contato.md.
 */

/* ───────────────────────── C01 + C02 · ABERTURA E FORMULÁRIO ───────────────────────── */
export function ContatoConversa() {
  return (
    <Section id="formulario" label={tx("contato/f0c94a0270", "Vamos conversar")} className="scroll-mt-[var(--jf-header-h)]">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div className="flex flex-col">
          <Eyebrow>
{rx("contato/r7e7fd23ad", "Contato")}
</Eyebrow>
          <Display as="h1" size="lg" className="mt-6">
{rx("contato/r907216845", "Vamos <em>conversar.</em>")}
</Display>
          <Stroke shape="underline" className="mt-2 h-4 w-[min(320px,70%)]" width={3} />
          <Lead className="mt-6 max-w-[520px]">
{rx("contato/rfbbfa9e6d", "Conte o que você está tentando construir, resolver ou compreender. Se ainda não souber o formato, comece pelo contexto.")}
</Lead>
          <div className="relative mt-10 hidden min-h-[420px] flex-1 lg:block">
            <Photo
              src={img("contato/1df4ff1c3d", "/images/ensaio/contato-sorriso-vertical.webp")}
              alt={tx("contato/504fd27532", "Retrato acolhedor de Juliana com notebook à mesa.")}
              sizes="(min-width:1024px) 34vw, 100vw"
              className="absolute inset-0 rounded-[12px]"
              imgClassName="object-[50%_40%]"
            />
          </div>
        </div>

        <div className="min-w-0">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── C03 · OUTROS CANAIS + FECHO ───────────────────────── */
type Channel = { key: string; icon: IconName; name: string; href: string; text: string; external: boolean };

function ChannelItem({ c }: { c: Channel }) {
  return (
    <li className="flex items-start gap-5 rounded-[14px] border border-ink-900/10 bg-cream-50 p-6 shadow-[0_18px_50px_-40px_rgba(24,20,17,0.6)]">
      <IconDisc name={c.icon} />
      <div className="min-w-0 pt-1">
        <Title as="h3">{rich(c.name)}</Title>
        <a
          href={c.href}
          {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-1 inline-block break-all text-[16px] font-medium text-red-brand underline-offset-4 hover:underline focus-visible:underline"
        >
          {rich(c.text)}
          {c.external && <span className="sr-only">
{rx("contato/r68b39403e", "(abre em nova aba)")}
</span>}
        </a>
      </div>
    </li>
  );
}

export async function ContatoCanais() {
  const ext = await getExternal();
  const channels: Channel[] = [
    ext.email && { key: "email", icon: "mail", name: tx("contato/974f994585", "E-mail"), href: `mailto:${ext.email}`, text: ext.email, external: false },
    ext.whatsapp && { key: "whatsapp", icon: "whatsapp", name: "WhatsApp", href: ext.whatsapp, text: tx("contato/b1742fea8c", "Abrir conversa no WhatsApp"), external: true },
    ext.linkedin && { key: "linkedin", icon: "linkedin", name: tx("contato/4efa604505", "LinkedIn"), href: ext.linkedin, text: tx("contato/5f58794d08", "Perfil da Ju no LinkedIn"), external: true },
    ext.linkedinPage && { key: "linkedin-pagina", icon: "linkedin", name: "LinkedIn", href: ext.linkedinPage, text: tx("contato/1930b25a82", "Página Ju Ferreira no LinkedIn"), external: true },
    ext.instagram && { key: "instagram", icon: "instagram", name: tx("contato/1e8d8a356f", "Instagram"), href: ext.instagram, text: tx("contato/c98fb8af3e", "Ju Ferreira no Instagram"), external: true },
  ].filter((c): c is Channel => Boolean(c));

  return (
    <Section tone="cream" label={channels.length ? tx("contato/13b9d20bf1", "Outros canais") : tx("contato/2c1301b193", "Fechamento")}>
      <Container>
        {channels.length > 0 && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <Display size="md">
{rx("contato/rffe17001f", "Prefere outro <em>caminho?</em>")}
</Display>
            <ul className="grid gap-5 sm:grid-cols-2">
              {channels.map((c) => (
                <ChannelItem key={c.key} c={c} />
              ))}
            </ul>
          </div>
        )}

        <div className={`text-center ${channels.length ? "mt-16 border-t border-ink-900/15 pt-12" : ""}`}>
          <p className="font-serif text-[clamp(24px,2.3vw,34px)] uppercase leading-tight">
{rx("contato/ra6aeb49af", "<em>Temos futuros para construir.</em>")}
</p>
          <Stroke shape="scribble" className="mx-auto mt-2 h-6 w-40" color="var(--jf-red-400)" width={3} />
        </div>
      </Container>
    </Section>
  );
}
