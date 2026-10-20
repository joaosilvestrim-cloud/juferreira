import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em } from "@/components/ui/Typography";
import { AskBox, LineIcon, Paper, Snapshot, Underline, type IconName } from "./parts";

import { tx, img } from "@/lib/editable";
/* ───────────────────────── BLOCO 3 — O AUTOMÁTICO ───────────────────────── */
export function PessoasAutomatico() {
  const lenses: { icon: IconName; t: string; intro: string[]; items: string[]; mid?: string; q: string; after?: string }[] = [
    {
      icon: "sprout",
      t: tx("pessoas/00db9c0362", "O que você sustenta"),
      intro: [tx("pessoas/91d03f0868", "Às vezes, aquilo que permanece não é aquilo que você escolheu."), tx("pessoas/6d35f29714", "É aquilo que nunca parou para rever.")],
      items: [tx("pessoas/99601a8e37", "Uma rotina."), tx("pessoas/6dd723b9bb", "Uma relação."), tx("pessoas/e9f2f95d70", "Uma obrigação."), tx("pessoas/cfaaaef99f", "Um modo de trabalhar."), tx("pessoas/9cec7ebc28", "Uma expectativa."), tx("pessoas/e1e728268a", "Uma versão de você mesma.")],
      q: tx("pessoas/d749624888", "O que eu continuo sustentando apenas porque já está aí?"),
    },
    {
      icon: "hourglass",
      t: tx("pessoas/e510b51f42", "O que você adia"),
      intro: [tx("pessoas/4e3d8dfba6", "Nem toda decisão adiada desaparece."), tx("pessoas/27b6b3f40a", "Algumas continuam decidindo por você.")],
      items: [
        tx("pessoas/6156c0e7e4", "Uma conversa não feita."),
        tx("pessoas/37997767d7", "Um limite não colocado."),
        tx("pessoas/df2e397248", "Uma mudança nunca iniciada."),
        tx("pessoas/6698995897", "Um cuidado postergado."),
        tx("pessoas/dac8b4f5e5", "Uma escolha que você espera ficar mais fácil."),
      ],
      q: tx("pessoas/fdb806fa37", "O que está sendo decidido enquanto eu continuo adiando?"),
    },
    {
      icon: "cycle",
      t: tx("pessoas/396ed74d16", "O que você repete"),
      intro: [tx("pessoas/cb6acd350a", "Nem toda repetição é ruim."), tx("pessoas/99a17518dc", "Repetição também constrói competência.")],
      items: [tx("pessoas/c2a379e356", "Confiança."), tx("pessoas/ea83fb0edd", "Relação."), tx("pessoas/eea3b89b72", "Disciplina."), tx("pessoas/cb73e658a0", "Cuidado.")],
      mid: tx("pessoas/efbd60f5c7", "Mas vale perguntar:"),
      q: tx("pessoas/39cc5d03a7", "Aquilo que eu repito está fortalecendo o quê?"),
      after: tx("pessoas/41305c7a89", "Porque o automático tanto pode preservar aquilo que importa quanto manter aquilo que já perdeu sentido."),
    },
    {
      icon: "eye",
      t: tx("pessoas/911903f2f6", "O que você normalizou"),
      intro: [tx("pessoas/5042f3ad9e", "Coisas que incomodavam no início podem, com o tempo, deixar de chamar atenção.")],
      items: [
        tx("pessoas/eaae38650a", "Um cansaço constante."),
        tx("pessoas/8818bb5b65", "Uma forma de falar consigo mesma."),
        tx("pessoas/7979bde13d", "Uma relação que sempre exige demais."),
        tx("pessoas/9fb014c1a0", "Um trabalho que já não cabe."),
        tx("pessoas/5f2fe95b93", "Uma rotina que consome quase todo o espaço."),
      ],
      q: tx("pessoas/2ba821a6bd", "O que se tornou normal sem necessariamente ter se tornado bom?"),
    },
  ];
  const tuesday = [
    tx("pessoas/279460ba3b", "entre uma reunião e outra;"),
    tx("pessoas/e5c6d47a06", "na conversa que você evita;"),
    tx("pessoas/ec29e45007", "no limite que coloca;"),
    tx("pessoas/7ca20044ac", "naquilo que faz cansada;"),
    tx("pessoas/92aa4aa9a9", "na decisão pequena;"),
    tx("pessoas/28de4cf389", "no jeito como responde;"),
    tx("pessoas/01dce85404", "no que escolhe repetir;"),
    tx("pessoas/586cf64ab4", "no que finalmente decide interromper."),
  ];
  const questions = [
    tx("pessoas/ac97b4dbe9", "O que eu gostaria de continuar?"),
    tx("pessoas/7ec17cd1d7", "O que precisa ser revisto?"),
    tx("pessoas/0bb25d66a3", "O que talvez seja hora de interromper?"),
    tx("pessoas/6ffcd16a15", "E qual pequena escolha merece deixar de ser automática?"),
  ];

  return (
    <Section label={tx("pessoas/5561aa22e3", "O automático")} id="automatico">
      <Container>
        {/* A — título, terça-feira e colagem */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <Display size="lg">
              {tx("pessoas/b96dc02c03", "O automático também constrói")} <Em>{tx("pessoas/3c2cd9aab5", "a sua vida.")}</Em>
            </Display>
            <Underline />
            <div className="jf-body mt-8 max-w-[600px] text-ink-700">
              <p>{tx("pessoas/7aaf94152d", "A maior parte da vida não acontece quando você está tomando uma grande decisão.")}</p>
              <p className="font-semibold text-ink-900">{tx("pessoas/be7072b399", "Acontece numa terça-feira qualquer.")}</p>
              <p>
                {tx("pessoas/ef232ffc6c", "Quando você acorda cansada. Responde mensagens. Corre para uma reunião. Cuida dos filhos. Adia uma conversa. Aceita mais uma coisa que não queria aceitar. Diz “depois eu vejo isso”. Volta para um hábito que já conhece. Repete uma reação antiga porque não teve energia para inventar outra.")}</p>
              <p>{tx("pessoas/688428b9d3", "E segue.")}</p>
            </div>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-[1.25fr_1fr] sm:items-start">
            <Photo
              src={img("pessoas/719fcce4b1", "/images/ensaio/home-05-escrita-vertical.webp")}
              alt={tx("pessoas/2e8043c936", "Juliana com caderno, caneta e café à mesa, em retrato vertical.")}
              sizes="(min-width:1024px) 28vw, 100vw"
              className="aspect-[4/5] w-full rounded-[var(--jf-radius-sm)]"
              imgClassName="object-[50%_40%]"
            />
            <div className="space-y-8 sm:pt-10">
              <Paper tone="paper" className="sm:rotate-[-2deg]">
                <p className="jf-hand text-[28px]">
                  {tx("pessoas/3480a1f0f3", "Nada disso parece construir o futuro.")}<br />
                  <span className="text-red-brand">{tx("pessoas/e6e59e690a", "Mas constrói.")}</span>
                </p>
              </Paper>
              <Snapshot
                src={img("pessoas/722258e65e", "/images/ensaio/pessoas-cafe-manha.webp")}
                alt={tx("pessoas/28a7a01854", "Juliana segurando uma caneca de café à mesa da cozinha.")}
                frameClassName="aspect-square"
                sizes="(min-width:1024px) 20vw, 60vw"
                className="mx-auto w-[75%] sm:w-full sm:rotate-[3deg]"
              />
            </div>
          </div>
        </div>

        {/* B — decisões que desaparecem na rotina */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="jf-body text-ink-700">
            <p>{tx("pessoas/6fe70c83a2", "Existem decisões que a gente sabe que está tomando.")}</p>
            <p>{tx("pessoas/1a6896175b", "E existem outras que começam a desaparecer dentro da rotina.")}</p>
            <ul className="mt-5 space-y-1.5 text-ink-900">
              <li>{tx("pessoas/cbdc9c4f60", "Aquilo que você aceita toda semana.")}</li>
              <li>{tx("pessoas/8b060052dc", "Aquilo que adia todos os meses.")}</li>
              <li>{tx("pessoas/46d9e7df3f", "Aquilo que repete porque é conhecido.")}</li>
              <li>{tx("pessoas/04dc45c755", "Aquilo que continua fazendo porque funciona “mais ou menos”.")}</li>
              <li>{tx("pessoas/5cd0223208", "Aquilo que já não escolheria hoje, mas nunca parou para escolher de novo.")}</li>
            </ul>
          </div>
          <div>
            <ol className="flex flex-col gap-2 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
              <li>{tx("pessoas/6abcc19679", "Com o tempo, repetição vira caminho.")}</li>
              <li className="sm:pl-6">{tx("pessoas/329c5c3343", "Caminho vira padrão.")}</li>
              <li className="sm:pl-12">{tx("pessoas/48f1472418", "Padrão vira contexto.")}</li>
              <li className="text-red-brand sm:pl-[72px]">{tx("pessoas/b93fdf2113", "E contexto começa a parecer destino.")}</li>
            </ol>
            <div className="mt-10 rounded-[var(--jf-radius-sm)] bg-blush-100 p-7">
              <h3 className="jf-display jf-display-sm">
                {tx("pessoas/3393b9e19f", "O que você repete também vota no futuro que vai ficando")} <Em>{tx("pessoas/cbaf2ac3ad", "mais provável.")}</Em>
              </h3>
            </div>
          </div>
        </div>

        {/* C — quatro lentes em papéis */}
        <ul className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {lenses.map((l, i) => (
            <li key={l.t}>
              <Paper tone="paper" tape={false} className={`h-full ${i % 2 ? "lg:rotate-[0.8deg]" : "lg:rotate-[-0.8deg]"}`}>
                <LineIcon name={l.icon} />
                <h3 className="jf-hand mt-4 text-[30px]">{l.t}</h3>
                <Stroke shape="underline" className="h-3 w-40" width={2.5} />
                <div className="mt-4 space-y-1 text-[15.5px] leading-relaxed text-ink-700">
                  {l.intro.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <ul className="mt-3 space-y-0.5 text-[15.5px] leading-relaxed text-ink-900">
                  {l.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.2em] text-ink-500">{l.mid ?? "Pergunta:"}</p>
                <AskBox className="mt-2">{l.q}</AskBox>
                {l.after && <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{l.after}</p>}
              </Paper>
            </li>
          ))}
        </ul>

        {/* D — a vida numa terça-feira qualquer */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-16">
          <div>
            <h3 className="jf-display jf-display-md">
              {tx("pessoas/af15505e63", "A vida também se constrói numa")} <Em>{tx("pessoas/f24d52d25a", "terça-feira qualquer.")}</Em>
            </h3>
            <div className="jf-body mt-8 text-ink-700">
              <p>{tx("pessoas/602a0c59e5", "Não no retiro. Não no planejamento anual. Não quando tudo estiver organizado.")}</p>
              <p>{tx("pessoas/eeab318f10", "Mas:")}</p>
            </div>
          </div>
          <Paper className="md:rotate-[1.5deg]">
            <ul className="space-y-1.5">
              {tuesday.map((t) => (
                <li key={t} className="jf-hand flex gap-3 text-[24px]">
                  <span className="mt-[0.55em] h-px w-4 shrink-0 bg-red-brand" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </Paper>
        </div>

        {/* E — consciência */}
        <div className="mt-16 rounded-[var(--jf-radius-md)] bg-ink-900 px-6 py-12 text-cream-50 sm:px-10 lg:mt-20 lg:px-16 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <div className="jf-body text-cream-50/80">
                <p>{tx("pessoas/fd423d601c", "Nem tudo precisa ser consciente. Automatismo, rotina e hábito são necessários.")}</p>
                <p>{tx("pessoas/1b6a4909ae", "A questão é outra:")}</p>
              </div>
              <h3 className="mt-6 font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
                {tx("pessoas/57d5374aa1", "Nem tudo precisa ser consciente.")}{" "}
                <span className="text-red-bright">
                  {tx("pessoas/84dc1ab021", "Mas aquilo que está construindo uma vida que você já não quer merece voltar para a consciência.")}</span>
              </h3>
              <div className="jf-body mt-6 text-cream-50/80">
                <p>
                  {tx("pessoas/70823430be", "Talvez você não precise mudar tudo. Talvez precise apenas voltar a perceber algumas coisas que deixaram de parecer escolha.")}</p>
              </div>
              <p className="mt-8 font-serif text-[clamp(22px,1.9vw,28px)] uppercase leading-tight tracking-wide">
                {tx("pessoas/a6a5817514", "Consciência não muda automaticamente a realidade. Mas devolve possibilidade de escolha.")}</p>
            </div>
            <div>
              <p className="jf-body text-cream-50/80">{tx("pessoas/6841cebcf1", "Antes de perguntar “o que eu quero para o futuro?”, talvez valha perguntar:")}</p>
              <p className="mt-4 border-l-2 border-red-bright pl-5 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
                {tx("pessoas/482f9acc0c", "O que estou repetindo hoje que já está construindo alguma versão dele?")}</p>
              <ul className="mt-6 space-y-3">
                {questions.map((q) => (
                  <li key={q} className="flex gap-3 font-serif text-[21px] leading-snug text-cream-50/90">
                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-red-bright" aria-hidden />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-12 border-t border-cream-50/20 pt-8 font-serif text-[clamp(24px,2.2vw,34px)] leading-tight">
            {tx("pessoas/317ee326e3", "Perceber não resolve tudo.")} <span className="text-red-bright">{tx("pessoas/b3bf00d4fe", "Mas muda aquilo que pode ser escolhido depois.")}</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}
