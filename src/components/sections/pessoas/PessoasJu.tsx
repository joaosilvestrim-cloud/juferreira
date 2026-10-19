import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em, QuoteCard } from "@/components/ui/Typography";
import { Paper, Snapshot, Underline } from "./parts";

/* ───────────────────────── BLOCO 8 — A JU TAMBÉM CONTINUA TENTANDO ───────────────────────── */
export function PessoasJu() {
  const building = [
    "cliente;",
    "reunião;",
    "dinheiro;",
    "prazo;",
    "cansaço;",
    "responsabilidade;",
    "filhas;",
    "casa;",
    "medo;",
    "entusiasmo;",
    "e uma terça-feira qualquer no meio do caminho.",
  ];
  const trying = ["Continuo imaginando.", "Escolhendo.", "Tentando me tornar capaz.", "Construindo.", "Errando.", "Olhando de novo."];

  return (
    <Section tone="cream" label="A Ju também continua tentando" id="ju">
      <Container>
        {/* A — abertura + colagem */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <Display size="lg">
              Eu também continuo <Em>tentando.</Em>
            </Display>
            <Underline />
            <div className="jf-body mt-8 text-ink-700">
              <p>
                Não descobri uma fórmula para viver. Não consegui eliminar a incerteza. Não acordo todos os dias sabendo
                exatamente o que quero. Não faço sempre aquilo que sei que deveria fazer. Não transformei minha vida numa
                sequência impecável de escolhas conscientes.
              </p>
              <p>
                Eu também adio. Erro. Canso. Mudo de ideia. Começo coisas que não funcionam. Insisto tempo demais em algumas.
                Desisto cedo demais de outras. E, às vezes, simplesmente tento chegar ao fim do dia.
              </p>
              <p>Porque nenhuma das ideias desta página me coloca fora daquilo sobre o que estou falando.</p>
            </div>
          </div>

          <div className="relative">
            <Photo
              src="/images/ju/retrato-biblioteca.webp"
              alt="Juliana sorrindo diante de sua biblioteca."
              sizes="(min-width:1024px) 50vw, 100vw"
              className="aspect-[5/4] w-full rounded-[var(--jf-radius-sm)]"
              imgClassName="object-[50%_40%]"
            />
            <Paper className="-mt-12 ml-auto w-fit max-w-[340px] md:rotate-[-3deg] lg:absolute lg:-bottom-10 lg:-right-4 lg:mt-0">
              <h3 className="jf-hand text-[clamp(32px,3vw,42px)]">
                Eu também estou dentro <span className="text-red-brand">da pergunta.</span>
              </h3>
            </Paper>
          </div>
        </div>

        {/* B — dentro da pergunta */}
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="jf-body text-ink-700">
            <p>
              Quando falamos sobre possibilidade, é fácil parecer que existe alguém do outro lado dizendo:{" "}
              <em className="text-ink-900">“Olha como você deveria viver.”</em>
            </p>
            <p>Não é isso que quero fazer.</p>
            <p>
              Meu interesse por transformação nasceu justamente porque{" "}
              <strong className="font-semibold text-red-brand">eu também precisei dela muitas vezes</strong>.
            </p>
          </div>
          <div className="jf-body text-ink-700">
            <p>
              Porque construí. Perdi. Recomecei. Mudei de direção. Tentei sustentar coisas demais. Tive certezas que depois
              deixaram de fazer sentido.
            </p>
            <p>E continuo fazendo escolhas sem saber exatamente como elas vão terminar.</p>
          </div>
        </div>

        {/* C — mãe + construindo */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[0.8fr_1fr_0.8fr] lg:gap-10">
          <Snapshot
            src="/images/ensaio/maternidade-maos-dadas.webp"
            alt="Cena ilustrativa de uma mulher e duas meninas fictícias caminhando de mãos dadas, vistas de costas."
            frameClassName="aspect-square"
            sizes="(min-width:1024px) 28vw, 100vw"
            className="h-fit md:rotate-[-2deg]"
          />
          <div>
            <h3 className="jf-display jf-display-sm">
              Eu sou <Em>mãe.</Em>
            </h3>
            <div className="jf-body mt-5 text-ink-700">
              <p>A maternidade alterou profundamente minha relação com o futuro.</p>
              <p>
                Não apenas porque comecei a pensar no mundo onde minhas filhas vão viver. Mas porque ela desmontou qualquer
                fantasia de controle que eu ainda pudesse ter.
              </p>
              <p>
                Filhos têm vontade. O mundo acontece. Planos quebram. A vida não respeita nossa agenda. E, ainda assim,
                continuamos escolhendo, cuidando, tentando construir alguma coisa.
              </p>
              <p>
                Essa tensão entre: <strong className="font-semibold text-ink-900">não controlar</strong> e{" "}
                <strong className="font-semibold text-red-brand">continuar participando</strong> deixou de ser apenas uma ideia
                para mim.
              </p>
              <p className="font-semibold text-ink-900">Virou vida.</p>
            </div>
          </div>
          <Paper tone="paper" className="h-fit md:rotate-[2deg]">
            <h3 className="jf-hand text-[30px]">Eu também continuo construindo.</h3>
            <p className="jf-hand mt-3 text-[23px] text-ink-700">
              Empresas. Projetos. Produtos. Relacionamentos. Uma carreira que continua mudando. Uma forma de trabalhar que ainda
              está sendo construída.
            </p>
            <p className="jf-hand mt-3 text-[23px] text-ink-700">E tudo isso acontece com:</p>
            <ul className="mt-1 space-y-0.5">
              {building.map((b) => (
                <li key={b} className="jf-hand text-[22px] text-ink-900">
                  · {b}
                </li>
              ))}
            </ul>
          </Paper>
        </div>

        {/* D — escrevo enquanto tento */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <QuoteCard className="h-fit">
            Eu não escrevo sobre a vida depois de ter descoberto como vivê-la.{" "}
            <span className="text-red-brand">Escrevo enquanto tento.</span>
          </QuoteCard>
          <div className="jf-body text-ink-700">
            <p>A posição não é:</p>
            <p className="italic">“Eu passei por tudo isso e agora vou ensinar você a vencer.”</p>
            <p>É:</p>
            <p className="border-l-2 border-red-brand pl-5 font-serif text-[clamp(21px,1.7vw,25px)] leading-snug text-ink-900">
              “Eu passei e continuo passando por perguntas parecidas. Algumas coisas aprendi. Outras continuo investigando. E
              talvez possamos pensar sobre elas juntos.”
            </p>
            <p className="font-semibold text-ink-900">
              Vulnerabilidade não é contar tudo. É não fingir que você está acima daquilo sobre o que fala.
            </p>
          </div>
        </div>

        {/* E — tem dia / talvez você também */}
        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-12">
            <div className="jf-body text-ink-700">
              <p>Tem dia em que eu penso sobre futuros.</p>
              <p>Tem dia em que eu preparo uma palestra.</p>
              <p>
                Tem dia em que estou negociando, tentando fazer uma empresa funcionar, resolvendo um problema, cuidando das
                minhas filhas ou olhando para a agenda pensando:{" "}
                <strong className="font-semibold text-ink-900">“Como é que eu vou dar conta disso tudo?”</strong>
              </p>
            </div>
            <p className="mt-5 text-[18px] font-semibold leading-snug text-red-brand">
              E é justamente por isso que: uma ideia sobre transformação que não sobrevive à vida real não me interessa muito.
            </p>
          </div>
          <div className="lg:pl-12">
            <p className="jf-body text-ink-700">
              Talvez você também esteja tentando. Tentando entender. Tentando mudar alguma coisa. Tentando não repetir. Tentando
              sustentar uma escolha. Tentando começar. Tentando simplesmente dar conta.
            </p>
            <p className="mt-5 font-serif text-[clamp(24px,2.1vw,32px)] leading-tight text-red-brand">
              Você não precisa ter resolvido a vida para começar a participar dela de outro jeito.
            </p>
          </div>
        </div>

        {/* F — faixa manuscrita */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <ul className="flex flex-col gap-2 rounded-[var(--jf-radius-sm)] bg-blush-100 px-6 py-5 md:flex-row md:flex-wrap md:items-center md:gap-0 md:divide-x md:divide-ink-900/30">
            {trying.map((t) => (
              <li key={t} className="jf-hand text-[24px] md:px-4">
                {t}
              </li>
            ))}
            <li className="font-serif text-[32px] leading-none text-red-brand md:px-4" aria-hidden>
              ↻
            </li>
          </ul>
          <p className="max-w-[340px] border-l-2 border-red-brand pl-5 font-serif text-[22px] leading-snug">
            Talvez seja isso que signifique continuar viva na própria história.
          </p>
        </div>
      </Container>
    </Section>
  );
}

