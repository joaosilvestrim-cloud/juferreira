import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Display, Em, QuoteCard } from "@/components/ui/Typography";
import { Paper, Snapshot, Underline } from "./parts";

import { tx, img } from "@/lib/editable";
/* ───────────────────────── BLOCO 8 — A JU TAMBÉM CONTINUA TENTANDO ───────────────────────── */
export function PessoasJu() {
  const building = [
    tx("pessoas/1c5b58def5", "cliente;"),
    tx("pessoas/f15d28c4e6", "reunião;"),
    tx("pessoas/91fc5e2250", "dinheiro;"),
    tx("pessoas/b784cf26f8", "prazo;"),
    tx("pessoas/99bb1bbd2b", "cansaço;"),
    tx("pessoas/fb20a611c1", "responsabilidade;"),
    tx("pessoas/f4515a9fd0", "filhas;"),
    tx("pessoas/6a1fc98c83", "casa;"),
    tx("pessoas/286c85a354", "medo;"),
    tx("pessoas/373e293a1c", "entusiasmo;"),
    tx("pessoas/f636bd5571", "e uma terça-feira qualquer no meio do caminho."),
  ];
  const trying = [tx("pessoas/c80e74d4d0", "Continuo imaginando."), tx("pessoas/4a66a80c85", "Escolhendo."), tx("pessoas/b8a3624431", "Tentando me tornar capaz."), tx("pessoas/95133176cc", "Construindo."), tx("pessoas/b618b7a4ac", "Errando."), tx("pessoas/6aeefd2bef", "Olhando de novo.")];

  return (
    <Section tone="cream" label={tx("pessoas/05404080fc", "A Ju também continua tentando")} id="ju">
      <Container>
        {/* A — abertura + colagem */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <Display size="lg">
              {tx("pessoas/39b7dc7859", "Eu também continuo")} <Em>{tx("pessoas/3407bbc6b1", "tentando.")}</Em>
            </Display>
            <Underline />
            <div className="jf-body mt-8 text-ink-700">
              <p>
                {tx("pessoas/f62905f61a", "Não descobri uma fórmula para viver. Não consegui eliminar a incerteza. Não acordo todos os dias sabendo exatamente o que quero. Não faço sempre aquilo que sei que deveria fazer. Não transformei minha vida numa sequência impecável de escolhas conscientes.")}</p>
              <p>
                {tx("pessoas/3a3e34cb11", "Eu também adio. Erro. Canso. Mudo de ideia. Começo coisas que não funcionam. Insisto tempo demais em algumas. Desisto cedo demais de outras. E, às vezes, simplesmente tento chegar ao fim do dia.")}</p>
              <p>{tx("pessoas/a5c5dd59a4", "Porque nenhuma das ideias desta página me coloca fora daquilo sobre o que estou falando.")}</p>
            </div>
          </div>

          <div className="relative">
            <Photo
              src={img("pessoas/4ce8ad8827", "/images/ju/retrato-biblioteca.webp")}
              alt={tx("pessoas/b310cf2599", "Juliana sorrindo diante de sua biblioteca.")}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="aspect-[5/4] w-full rounded-[var(--jf-radius-sm)]"
              imgClassName="object-[50%_40%]"
            />
            <Paper className="-mt-12 ml-auto w-fit max-w-[340px] md:rotate-[-3deg] lg:absolute lg:-bottom-10 lg:-right-4 lg:mt-0">
              <h3 className="jf-hand text-[clamp(32px,3vw,42px)]">
                {tx("pessoas/c618f6c1b3", "Eu também estou dentro")} <span className="text-red-brand">{tx("pessoas/716dc667ca", "da pergunta.")}</span>
              </h3>
            </Paper>
          </div>
        </div>

        {/* B — dentro da pergunta */}
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="jf-body text-ink-700">
            <p>
              {tx("pessoas/64a7816ce4", "Quando falamos sobre possibilidade, é fácil parecer que existe alguém do outro lado dizendo:")}{" "}
              <em className="text-ink-900">{tx("pessoas/221ae78685", "“Olha como você deveria viver.”")}</em>
            </p>
            <p>{tx("pessoas/cb2fce2250", "Não é isso que quero fazer.")}</p>
            <p>
              {tx("pessoas/371749450a", "Meu interesse por transformação nasceu justamente porque")}{" "}
              <strong className="font-semibold text-red-brand">{tx("pessoas/a19fdb71fe", "eu também precisei dela muitas vezes")}</strong>.
            </p>
          </div>
          <div className="jf-body text-ink-700">
            <p>
              {tx("pessoas/ebf720bd81", "Porque construí. Perdi. Recomecei. Mudei de direção. Tentei sustentar coisas demais. Tive certezas que depois deixaram de fazer sentido.")}</p>
            <p>{tx("pessoas/7272ec647d", "E continuo fazendo escolhas sem saber exatamente como elas vão terminar.")}</p>
          </div>
        </div>

        {/* C — mãe + construindo */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[0.8fr_1fr_0.8fr] lg:gap-10">
          <Snapshot
            src={img("pessoas/e5fa2bf116", "/images/ensaio/maternidade-maos-dadas.webp")}
            alt={tx("pessoas/adcb668557", "Cena ilustrativa de uma mulher e duas meninas fictícias caminhando de mãos dadas, vistas de costas.")}
            frameClassName="aspect-square"
            sizes="(min-width:1024px) 28vw, 100vw"
            className="h-fit md:rotate-[-2deg]"
          />
          <div>
            <h3 className="jf-display jf-display-sm">
              {tx("pessoas/ac3fd5cfa9", "Eu sou")} <Em>{tx("pessoas/d8e2b55581", "mãe.")}</Em>
            </h3>
            <div className="jf-body mt-5 text-ink-700">
              <p>{tx("pessoas/5725691933", "A maternidade alterou profundamente minha relação com o futuro.")}</p>
              <p>
                {tx("pessoas/9eb0f9e364", "Não apenas porque comecei a pensar no mundo onde minhas filhas vão viver. Mas porque ela desmontou qualquer fantasia de controle que eu ainda pudesse ter.")}</p>
              <p>
                {tx("pessoas/4fea857f79", "Filhos têm vontade. O mundo acontece. Planos quebram. A vida não respeita nossa agenda. E, ainda assim, continuamos escolhendo, cuidando, tentando construir alguma coisa.")}</p>
              <p>
                {tx("pessoas/e34243e9d0", "Essa tensão entre:")} <strong className="font-semibold text-ink-900">{tx("pessoas/784bae1413", "não controlar")}</strong> {tx("pessoas/d09d21a85c", "e")}{" "}
                <strong className="font-semibold text-red-brand">{tx("pessoas/8591e06095", "continuar participando")}</strong> {tx("pessoas/08c62815a9", "deixou de ser apenas uma ideia para mim.")}</p>
              <p className="font-semibold text-ink-900">{tx("pessoas/2c407a7983", "Virou vida.")}</p>
            </div>
          </div>
          <Paper tone="paper" className="h-fit md:rotate-[2deg]">
            <h3 className="jf-hand text-[30px]">{tx("pessoas/6f2319fe3b", "Eu também continuo construindo.")}</h3>
            <p className="jf-hand mt-3 text-[23px] text-ink-700">
              {tx("pessoas/ec9878e633", "Empresas. Projetos. Produtos. Relacionamentos. Uma carreira que continua mudando. Uma forma de trabalhar que ainda está sendo construída.")}</p>
            <p className="jf-hand mt-3 text-[23px] text-ink-700">{tx("pessoas/4f632208cb", "E tudo isso acontece com:")}</p>
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
            {tx("pessoas/17472a59ae", "Eu não escrevo sobre a vida depois de ter descoberto como vivê-la.")}{" "}
            <span className="text-red-brand">{tx("pessoas/7ddabe95e2", "Escrevo enquanto tento.")}</span>
          </QuoteCard>
          <div className="jf-body text-ink-700">
            <p>{tx("pessoas/cdef87a7a5", "A posição não é:")}</p>
            <p className="italic">{tx("pessoas/95a4aefbef", "“Eu passei por tudo isso e agora vou ensinar você a vencer.”")}</p>
            <p>{tx("pessoas/46d0cfe747", "É:")}</p>
            <p className="border-l-2 border-red-brand pl-5 font-serif text-[clamp(21px,1.7vw,25px)] leading-snug text-ink-900">
              {tx("pessoas/718fad686a", "“Eu passei e continuo passando por perguntas parecidas. Algumas coisas aprendi. Outras continuo investigando. E talvez possamos pensar sobre elas juntos.”")}</p>
            <p className="font-semibold text-ink-900">
              {tx("pessoas/0dc9c3c94f", "Vulnerabilidade não é contar tudo. É não fingir que você está acima daquilo sobre o que fala.")}</p>
          </div>
        </div>

        {/* E — tem dia / talvez você também */}
        <div className="mt-16 grid gap-10 border-t border-ink-900/15 pt-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-red-brand/40">
          <div className="lg:pr-12">
            <div className="jf-body text-ink-700">
              <p>{tx("pessoas/c9454c6791", "Tem dia em que eu penso sobre futuros.")}</p>
              <p>{tx("pessoas/916fa620fe", "Tem dia em que eu preparo uma palestra.")}</p>
              <p>
                {tx("pessoas/476c8c85fb", "Tem dia em que estou negociando, tentando fazer uma empresa funcionar, resolvendo um problema, cuidando das minhas filhas ou olhando para a agenda pensando:")}{" "}
                <strong className="font-semibold text-ink-900">{tx("pessoas/883116dcaf", "“Como é que eu vou dar conta disso tudo?”")}</strong>
              </p>
            </div>
            <p className="mt-5 text-[18px] font-semibold leading-snug text-red-brand">
              {tx("pessoas/7f3f9b65d8", "E é justamente por isso que: uma ideia sobre transformação que não sobrevive à vida real não me interessa muito.")}</p>
          </div>
          <div className="lg:pl-12">
            <p className="jf-body text-ink-700">
              {tx("pessoas/1f171ff625", "Talvez você também esteja tentando. Tentando entender. Tentando mudar alguma coisa. Tentando não repetir. Tentando sustentar uma escolha. Tentando começar. Tentando simplesmente dar conta.")}</p>
            <p className="mt-5 font-serif text-[clamp(24px,2.1vw,32px)] leading-tight text-red-brand">
              {tx("pessoas/60eb60f57f", "Você não precisa ter resolvido a vida para começar a participar dela de outro jeito.")}</p>
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
            {tx("pessoas/7def1f1107", "Talvez seja isso que signifique continuar viva na própria história.")}</p>
        </div>
      </Container>
    </Section>
  );
}

