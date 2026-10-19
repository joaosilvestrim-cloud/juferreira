import { Photo } from "@/components/ui/Photo";
import { Container, Section } from "@/components/ui/Section";
import { Stroke } from "@/components/ui/Strokes";
import { Display, Em } from "@/components/ui/Typography";
import { AskBox, LineIcon, Paper, Snapshot, Underline, type IconName } from "./parts";

/* ───────────────────────── BLOCO 3 — O AUTOMÁTICO ───────────────────────── */
export function PessoasAutomatico() {
  const lenses: { icon: IconName; t: string; intro: string[]; items: string[]; mid?: string; q: string; after?: string }[] = [
    {
      icon: "sprout",
      t: "O que você sustenta",
      intro: ["Às vezes, aquilo que permanece não é aquilo que você escolheu.", "É aquilo que nunca parou para rever."],
      items: ["Uma rotina.", "Uma relação.", "Uma obrigação.", "Um modo de trabalhar.", "Uma expectativa.", "Uma versão de você mesma."],
      q: "O que eu continuo sustentando apenas porque já está aí?",
    },
    {
      icon: "hourglass",
      t: "O que você adia",
      intro: ["Nem toda decisão adiada desaparece.", "Algumas continuam decidindo por você."],
      items: [
        "Uma conversa não feita.",
        "Um limite não colocado.",
        "Uma mudança nunca iniciada.",
        "Um cuidado postergado.",
        "Uma escolha que você espera ficar mais fácil.",
      ],
      q: "O que está sendo decidido enquanto eu continuo adiando?",
    },
    {
      icon: "cycle",
      t: "O que você repete",
      intro: ["Nem toda repetição é ruim.", "Repetição também constrói competência."],
      items: ["Confiança.", "Relação.", "Disciplina.", "Cuidado."],
      mid: "Mas vale perguntar:",
      q: "Aquilo que eu repito está fortalecendo o quê?",
      after: "Porque o automático tanto pode preservar aquilo que importa quanto manter aquilo que já perdeu sentido.",
    },
    {
      icon: "eye",
      t: "O que você normalizou",
      intro: ["Coisas que incomodavam no início podem, com o tempo, deixar de chamar atenção."],
      items: [
        "Um cansaço constante.",
        "Uma forma de falar consigo mesma.",
        "Uma relação que sempre exige demais.",
        "Um trabalho que já não cabe.",
        "Uma rotina que consome quase todo o espaço.",
      ],
      q: "O que se tornou normal sem necessariamente ter se tornado bom?",
    },
  ];
  const tuesday = [
    "entre uma reunião e outra;",
    "na conversa que você evita;",
    "no limite que coloca;",
    "naquilo que faz cansada;",
    "na decisão pequena;",
    "no jeito como responde;",
    "no que escolhe repetir;",
    "no que finalmente decide interromper.",
  ];
  const questions = [
    "O que eu gostaria de continuar?",
    "O que precisa ser revisto?",
    "O que talvez seja hora de interromper?",
    "E qual pequena escolha merece deixar de ser automática?",
  ];

  return (
    <Section label="O automático" id="automatico">
      <Container>
        {/* A — título, terça-feira e colagem */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <Display size="lg">
              O automático também constrói <Em>a sua vida.</Em>
            </Display>
            <Underline />
            <div className="jf-body mt-8 max-w-[600px] text-ink-700">
              <p>A maior parte da vida não acontece quando você está tomando uma grande decisão.</p>
              <p className="font-semibold text-ink-900">Acontece numa terça-feira qualquer.</p>
              <p>
                Quando você acorda cansada. Responde mensagens. Corre para uma reunião. Cuida dos filhos. Adia uma conversa.
                Aceita mais uma coisa que não queria aceitar. Diz “depois eu vejo isso”. Volta para um hábito que já conhece.
                Repete uma reação antiga porque não teve energia para inventar outra.
              </p>
              <p>E segue.</p>
            </div>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-[1.25fr_1fr] sm:items-start">
            <Photo
              src="/images/ju/escrevendo.webp"
              alt="Ju Ferreira escrevendo num caderno à mesa da cozinha"
              sizes="(min-width:1024px) 28vw, 100vw"
              className="aspect-[4/5] w-full rounded-[var(--jf-radius-sm)]"
              imgClassName="object-[50%_25%]"
            />
            <div className="space-y-8 sm:pt-10">
              <Paper tone="paper" className="sm:rotate-[-2deg]">
                <p className="jf-hand text-[28px]">
                  Nada disso parece construir o futuro.
                  <br />
                  <span className="text-red-brand">Mas constrói.</span>
                </p>
              </Paper>
              <Snapshot
                src="/images/ju/escrevendo.webp"
                alt="Ju Ferreira segurando uma xícara de café"
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
            <p>Existem decisões que a gente sabe que está tomando.</p>
            <p>E existem outras que começam a desaparecer dentro da rotina.</p>
            <ul className="mt-5 space-y-1.5 text-ink-900">
              <li>Aquilo que você aceita toda semana.</li>
              <li>Aquilo que adia todos os meses.</li>
              <li>Aquilo que repete porque é conhecido.</li>
              <li>Aquilo que continua fazendo porque funciona “mais ou menos”.</li>
              <li>Aquilo que já não escolheria hoje, mas nunca parou para escolher de novo.</li>
            </ul>
          </div>
          <div>
            <ol className="flex flex-col gap-2 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
              <li>Com o tempo, repetição vira caminho.</li>
              <li className="sm:pl-6">Caminho vira padrão.</li>
              <li className="sm:pl-12">Padrão vira contexto.</li>
              <li className="text-red-brand sm:pl-[72px]">E contexto começa a parecer destino.</li>
            </ol>
            <div className="mt-10 rounded-[var(--jf-radius-sm)] bg-blush-100 p-7">
              <h3 className="jf-display jf-display-sm">
                O que você repete também vota no futuro que vai ficando <Em>mais provável.</Em>
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
              A vida também se constrói numa <Em>terça-feira qualquer.</Em>
            </h3>
            <div className="jf-body mt-8 text-ink-700">
              <p>Não no retiro. Não no planejamento anual. Não quando tudo estiver organizado.</p>
              <p>Mas:</p>
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
                <p>Nem tudo precisa ser consciente. Automatismo, rotina e hábito são necessários.</p>
                <p>A questão é outra:</p>
              </div>
              <h3 className="mt-6 font-serif text-[clamp(26px,2.4vw,36px)] leading-tight">
                Nem tudo precisa ser consciente.{" "}
                <span className="text-red-bright">
                  Mas aquilo que está construindo uma vida que você já não quer merece voltar para a consciência.
                </span>
              </h3>
              <div className="jf-body mt-6 text-cream-50/80">
                <p>
                  Talvez você não precise mudar tudo. Talvez precise apenas voltar a perceber algumas coisas que deixaram de
                  parecer escolha.
                </p>
              </div>
              <p className="mt-8 font-serif text-[clamp(22px,1.9vw,28px)] uppercase leading-tight tracking-wide">
                Consciência não muda automaticamente a realidade. Mas devolve possibilidade de escolha.
              </p>
            </div>
            <div>
              <p className="jf-body text-cream-50/80">Antes de perguntar “o que eu quero para o futuro?”, talvez valha perguntar:</p>
              <p className="mt-4 border-l-2 border-red-bright pl-5 font-serif text-[clamp(22px,1.9vw,28px)] leading-snug">
                O que estou repetindo hoje que já está construindo alguma versão dele?
              </p>
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
            Perceber não resolve tudo. <span className="text-red-bright">Mas muda aquilo que pode ser escolhido depois.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}
