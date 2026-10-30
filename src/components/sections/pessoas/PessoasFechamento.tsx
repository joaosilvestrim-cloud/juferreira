import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display } from "@/components/ui/Typography";

import { tx, img, rx } from "@/lib/editable";

/* ───────────────────────── B05 — FECHAMENTO HUMANO ───────────────────────── */
export function PessoasFechamento() {
  return (
    <Section tone="wine" label={tx("pessoas/d8a2d59eda", "Fechamento")}>
      <Stroke shape="orbit" className="absolute -right-24 top-0 hidden h-full w-[48%] opacity-60 lg:block" width={2.5} color="var(--jf-red-400)" />
      <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <Display size="lg">
{rx("pessoas/r376cb73fe", "Eu também preciso <em>voltar à pergunta.</em>")}
</Display>
          <Stroke shape="underline" className="mt-3 h-4 w-[min(420px,75%)]" color="var(--jf-red-400)" width={3} />
          <div className="jf-body mt-8 max-w-[600px] text-cream-50/85">
            <p>
{rx("pessoas/rc07799b75", "Não transformei minha vida numa sequência impecável de escolhas conscientes. Continuo trabalhando, criando minhas filhas, construindo e revendo o que faço com o tempo e a potência que tenho.")}
</p>
            <p>
{rx("pessoas/rc6926789d", "Essas perguntas fazem parte da minha vida porque eu também preciso delas.")}
</p>
          </div>
          <p className="mt-10 max-w-[620px] border-l-2 border-red-bright pl-5 font-serif text-[clamp(24px,2.3vw,34px)] leading-tight text-cream-50">
            {tx("pessoas/fa20097b2c", "Você pode começar de onde está.")} <span className="text-red-bright">
{rx("pessoas/rcac8c2848", "E pode precisar de companhia para isso.")}
</span>
          </p>
          <p className="jf-eyebrow mt-12 text-[clamp(13px,1.2vw,16px)] tracking-[0.35em] text-red-bright">
{rx("pessoas/r459f08ac8", "O futuro não pode custar o presente.")}
</p>
        </div>

        <Photo
          src={img("pessoas/334eaba6bd", "/images/ensaio/pessoas-janela.webp")}
          alt={tx("pessoas/53be9c5bab", "Juliana olhando pela janela, com expressão contemplativa.")}
          sizes="(min-width:1024px) 38vw, 100vw"
          className="jf-paper-edge mx-auto aspect-[4/5] w-full max-w-[480px]"
          imgClassName="object-[50%_35%]"
        />
      </Container>
    </Section>
  );
}
