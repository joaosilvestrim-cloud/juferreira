import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em } from "@/components/ui/Typography";
import { CONTACT_ROUTES, LINKS } from "@/lib/site";

import { tx, lazy } from "@/lib/editable";

type Door = {
  k: string;
  t: string;
  d: string;
  cta: string;
  href: string;
  extra?: { label: string; href: string };
};

/**
 * Três portas com o mesmo peso visual. Nenhuma promete conteúdo, preço, prazo ou condição que não exista:
 * Ideias mostra só o que está publicado; a newsletter tem inscrição funcional; EPIC247 abre o destino cadastrado no painel.
 */
const DOORS: Door[] = lazy(() => [
  {
    k: tx("pessoas/66296041ce", "Quero continuar pensando"),
    t: tx("pessoas/a2e040c60f", "Ideias"),
    d: tx("pessoas/173f59e474", "Perguntas em investigação e textos sobre futuros, tecnologia e escolhas, conforme são publicados."),
    cta: tx("pessoas/0944926bbd", "Explore as ideias"),
    href: "/ideias",
  },
  {
    k: tx("pessoas/c358c11a36", "Quero acompanhar essa conversa"),
    t: tx("pessoas/114308127d", "Uma Terça-feira Qualquer"),
    d: tx("pessoas/9099f15bb0", "Uma conversa semanal, por e-mail, sobre aquilo que estamos construindo enquanto a vida acontece."),
    cta: tx("pessoas/f1038f82d8", "Conheça a newsletter"),
    href: LINKS.newsletter,
  },
  {
    k: tx("pessoas/c871befbdb", "Quero colocar mudança em prática"),
    t: tx("pessoas/f4b2f0b844", "EPIC247"),
    d: tx("pessoas/0640ebc135", "Experiências de transformação pessoal para aproximar o que você quer mudar daquilo que consegue praticar no cotidiano."),
    cta: tx("pessoas/443904c3db", "Conheça o EPIC247"),
    href: LINKS.epic247,
    extra: { label: tx("pessoas/2e7ba5fa30", "Tire uma dúvida sobre o EPIC247"), href: CONTACT_ROUTES.epic },
  },
]);

/* ───────────────────────── B04 — PORTAS ───────────────────────── */
export function PessoasPortas() {
  return (
    <Section id="proximo-passo" label={tx("pessoas/e606b78d3f", "Próximo passo")}>
      <Container>
        <Display size="md" className="max-w-[860px]">
          {tx("pessoas/c2fc42f198", "O próximo passo depende do")} <Em>{tx("pessoas/8d76df9ab9", "que você precisa.")}</Em>
        </Display>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {DOORS.map((d) => (
            <li key={d.t} className="flex flex-col rounded-[var(--jf-radius-sm)] border border-ink-900/15 bg-cream-50 p-6 lg:p-7">
              <p className="jf-eyebrow text-[11px] text-ink-500">{d.k}</p>
              <h3 className="jf-display mt-4 text-[clamp(28px,2.3vw,34px)]">{d.t}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-700">{d.d}</p>
              <div className="mt-auto flex flex-col gap-4 pt-7">
                <ButtonLink href={d.href} variant="secondary" size="sm" className="w-fit">
                  {d.cta}
                </ButtonLink>
                {d.extra && (
                  <Link
                    href={d.extra.href}
                    className="w-fit text-[14px] text-ink-700 underline decoration-ink-900/30 underline-offset-4 transition-colors hover:text-red-brand hover:decoration-red-brand"
                  >
                    {d.extra.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
