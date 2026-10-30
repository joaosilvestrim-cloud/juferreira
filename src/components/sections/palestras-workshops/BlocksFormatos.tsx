import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Body, Display, QuoteCard } from "@/components/ui/Typography";
import { IconBubble, type IconName } from "./Icons";

import { tx, img, rx, rich } from "@/lib/editable";

/* ───────────────────────── P04 — CONTEXTO ───────────────────────── */
export function PalestrasContexto() {
  // situações ilustrativas de como o contexto muda a ênfase da conversa (não são casos de clientes)
  const tensions: { icon: IconName; t: string; d: string }[] = [
    {
      icon: "laptop",
      t: tx("palestras-workshops/6946815069", "Uma liderança diante da IA"),
      d: tx("palestras-workshops/1b22f4c96b", "pode precisar discutir o que delegar e que critérios preservar."),
    },
    {
      icon: "people",
      t: tx("palestras-workshops/18b8dc3245", "Uma equipe em transformação"),
      d: tx("palestras-workshops/82c19cb830", "pode precisar enxergar a distância entre o comportamento desejado e o que a organização recompensa."),
    },
  ];
  return (
    <Section tone="cream" label={tx("palestras-workshops/b0336343c0", "Contexto")} id="contexto">
      <Container className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Display size="lg">
{rx("palestras-workshops/r23bf7f8a8", "A tese dá direção.<br><em>O contexto define a conversa.</em>")}
</Display>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {tensions.map((t) => (
              <li key={t.t} className="rounded-[var(--jf-radius-sm)] bg-cream-50 p-6 shadow-[0_10px_30px_-22px_rgba(24,20,17,.5)]">
                <IconBubble name={t.icon} />
                <h3 className="mt-5 font-serif text-[22px] leading-tight">{rich(t.t)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{rich(t.d)}</p>
              </li>
            ))}
          </ul>
          <Body className="mt-8 max-w-[600px] text-ink-700">
            <p>
{rx("palestras-workshops/rfbe7a1a6c", "Essas tensões orientam exemplos e ênfases da conversa, conforme o público e o momento.")}
</p>
          </Body>
          <QuoteCard className="mt-10 max-w-[640px]">
{rx("palestras-workshops/r9af65e138", "Customizar não é trocar o logo na apresentação. É compreender por que essa conversa precisa acontecer para aquelas pessoas, naquele momento.")}
</QuoteCard>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[480px]">
          <Photo
            src={img("palestras-workshops/29ccb45b0a", "/images/ensaio/palestras-palco-frente.webp")}
            alt={tx("palestras-workshops/92a37c439d", "Cena ilustrativa de Juliana falando no palco, vista de frente.")}
            sizes="(min-width:1024px) 36vw, 90vw"
            className="absolute inset-[6%] overflow-hidden rounded-full"
            imgClassName="object-[50%_40%]"
          />
          <Stroke shape="circle" className="absolute inset-0 h-full w-full" width={3} />
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── P05 — APROFUNDAMENTO ───────────────────────── */
export function PalestrasAprofundamento() {
  return (
    <Section padded={false} label={tx("palestras-workshops/80cee9ed3c", "Aprofundamento")} id="workshops">
      <div className="grid lg:grid-cols-[56%_44%]">
        <Container className="py-[var(--jf-section-y)] lg:ml-auto lg:mr-0 lg:max-w-[780px] lg:pr-12">
          <Display size="lg">
{rx("palestras-workshops/r1fcae91b1", "Quando a pergunta pede <em>trabalho conjunto.</em>")}
</Display>
          <p className="mt-8 max-w-[560px] font-serif text-[clamp(22px,2vw,28px)] leading-snug">
{rx("palestras-workshops/r1d08ee1ea", "Às vezes, a palestra abre uma conversa <em>que pede continuidade.</em>")}
</p>
          <Body className="mt-6 max-w-[600px] text-ink-700">
            <p>
{rx("palestras-workshops/re090b5e25", "Em workshops, o grupo examina uma questão e desenha movimentos possíveis. Eles podem acontecer de forma independente ou depois da palestra.")}
</p>
          </Body>
          <ButtonLink href="/organizacoes" variant="secondary" className="mt-10">
{rx("palestras-workshops/r5ba449e8e", "Veja o trabalho com organizações")}
</ButtonLink>
        </Container>
        <div className="relative min-h-[400px]">
          <Photo
            src={img("palestras-workshops/8c4ba35c4f", "/images/ensaio/palestras-workshop-01.webp")}
            alt={tx("palestras-workshops/be43628fe6", "Cena ilustrativa de Juliana e um grupo discutindo ideias ao redor de uma mesa.")}
            sizes="(min-width:1024px) 44vw, 100vw"
            className="absolute inset-0 jf-fade-left"
            imgClassName="object-[50%_40%]"
          />
        </div>
      </div>
    </Section>
  );
}
