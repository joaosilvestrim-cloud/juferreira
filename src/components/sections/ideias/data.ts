import { tx, img, lazy } from "@/lib/editable";
/**
 * Dados editoriais da página /ideias (copy: docs/01_COPY/ideias.md).
 * Imagens do ensaio ilustrativo; origem e prompts em docs/ensaio-contextual/catalogo.json.
 */

/* ───────────── Rótulos epistêmicos (Site Master: 4 rótulos oficiais) ───────────── */
export type Epistemic = "tese" | "sintese" | "hipotese" | "investigacao";

export const EPISTEMIC: Record<Epistemic, { label: string; desc: string }> = lazy(() => ({
  tese: { label: tx("ideias/036ddcf6b6", "TESE"), desc: tx("ideias/46c814a2e5", "Ideia já bastante estruturada dentro do trabalho da Ju.") },
  sintese: { label: tx("ideias/cbc21b8118", "SÍNTESE PROVISÓRIA"), desc: tx("ideias/f30578976a", "Articulação atual entre diferentes fontes, experiências e campos.") },
  hipotese: { label: tx("ideias/b83907ac3d", "HIPÓTESE"), desc: tx("ideias/d1f92413a4", "Possibilidade sendo testada.") },
  investigacao: { label: tx("ideias/7dfe42739e", "EM INVESTIGAÇÃO"), desc: tx("ideias/c198e102f8", "Pergunta ainda deliberadamente aberta.") },
}));

export const EPISTEMIC_ORDER: Epistemic[] = ["tese", "sintese", "hipotese", "investigacao"];

/* ───────────── Territórios (B4 + navegação do B3) ───────────── */
export type TerritorioId = "futuros" | "tecnologia" | "escolhas" | "lideranca" | "vida-real";

export type Territorio = {
  id: TerritorioId;
  n: number;
  name: string;
  sub: string;
  img: string;
  alt: string;
  intro?: string[];
  /** lista de temas (renderizada como sequência) */
  themesLead?: string;
  themes: string[];
  /** fechamento do território: perguntas e frases */
  outro?: string[];
  questionsLead?: string;
  questions: string[];
  quote?: string;
  after?: string[];
};

export const TERRITORIOS: Territorio[] = lazy(() => ([
  {
    id: "futuros",
    n: 1,
    name: "Futuros",
    sub: tx("ideias/7bf6783f68", "Não para adivinhar amanhã. Para ampliar o que conseguimos enxergar hoje."),
    img: img("ideias/99821c2e08", "/images/ensaio/home-01-abertura-horizontal.webp"),
    alt: tx("ideias/504639f141", "Juliana de preto diante de uma paisagem ampla ao entardecer."),
    themesLead: tx("ideias/9ad3be9c9e", "Aqui entram perguntas sobre:"),
    themes: [
      tx("ideias/3dba88915a", "futuros possíveis"),
      tx("ideias/8fe896a94b", "futuros prováveis"),
      tx("ideias/31df90c301", "mudanças"),
      "sinais",
      "incerteza",
      tx("ideias/e55eea5d7c", "imaginação"),
      tx("ideias/444b0cafbf", "direção"),
      "escolhas",
      tx("ideias/64aea90414", "e aquilo que começamos a construir antes mesmo de perceber que estamos construindo"),
    ],
    outro: [tx("ideias/84881c2478", "O interesse não está em dizer: “isso vai acontecer.”")],
    questionsLead: tx("ideias/cd592e60c3", "Está em investigar:"),
    questions: [
      tx("ideias/637898df00", "o que pode acontecer?"),
      tx("ideias/4a463863ca", "o que estamos tratando como inevitável?"),
      tx("ideias/5e97c8fdff", "o que queremos ajudar a tornar possível?"),
      tx("ideias/f4b6c68286", "e como nossas escolhas presentes participam disso?"),
    ],
    quote: tx("ideias/fde16b364d", "Futuro, para mim, é menos um lugar para prever e mais um campo de possibilidades para investigar."),
  },
  {
    id: "tecnologia",
    n: 2,
    name: "Tecnologia & Humanidade",
    sub: tx("ideias/7db54d11d7", "Quanto mais podemos fazer, mais importante se torna perguntar para quê."),
    img: img("ideias/2d7c775fec", "/images/ensaio/contexto-tecnologia-humana.webp"),
    alt: tx("ideias/6cf45c3b87", "Mãos usando um notebook ao lado de caderno e café."),
    intro: [tx("ideias/6f00072646", "Tecnologia aparece muito por aqui.")],
    themes: [
      tx("ideias/f3ea754620", "IA"),
      tx("ideias/ca9f1d469e", "Automação"),
      tx("ideias/85909e81e2", "Dados"),
      tx("ideias/813cf1adcc", "Plataformas"),
      tx("ideias/05228efc6c", "Novas formas de trabalhar"),
      tx("ideias/b12385d93f", "Ferramentas que ampliam capacidades antes inimagináveis"),
    ],
    outro: [tx("ideias/29ffa492f5", "Mas tecnologia raramente é a pergunta final.")],
    questionsLead: tx("ideias/b5fc64f249", "Ela costuma abrir outras:"),
    questions: [
      tx("ideias/248961f17f", "O que estamos delegando?"),
      tx("ideias/31258c6dab", "O que queremos continuar decidindo?"),
      tx("ideias/e133bfbdce", "Que capacidades humanas ganham importância?"),
      tx("ideias/19876c5bcc", "Que parte da autoria queremos preservar?"),
      tx("ideias/5e5d106db1", "O que vale a pena fazer simplesmente porque agora conseguimos fazer?"),
    ],
    quote: tx("ideias/24f54fc3d5", "Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas."),
    after: [tx("ideias/75b7d0582c", "Não como oposição entre humano e tecnologia."), tx("ideias/042aedd220", "Como responsabilidade diante da capacidade.")],
  },
  {
    id: "escolhas",
    n: 3,
    name: "Escolhas & Agência",
    sub: tx("ideias/14d5a4fb3e", "O espaço entre controlar tudo e simplesmente aceitar."),
    img: img("ideias/5a780dfbb0", "/images/ensaio/contexto-caderno-escolhas.webp"),
    alt: tx("ideias/7ac040f05e", "Mãos fazendo anotações e marcando escolhas em um caderno."),
    intro: [tx("ideias/e69dfd4077", "Grande parte das nossas decisões acontece dentro de limites.")],
    themes: [tx("ideias/3cb95347fe", "Outras pessoas"), tx("ideias/36bef3632e", "Contexto"), tx("ideias/30e7bc6958", "História"), tx("ideias/638e55135f", "Recursos"), tx("ideias/3431819e78", "Estruturas"), tx("ideias/bbc44acbc6", "Acaso"), tx("ideias/12f1392bfa", "Corpo"), tx("ideias/592551cd85", "Mercado"), tx("ideias/fd7d2643e7", "Tempo")],
    outro: [
      tx("ideias/1f65093120", "Nenhum indivíduo ou organização controla completamente aquilo que vem depois."),
      tx("ideias/afb7c201a1", "Mas daí não decorre que nossa participação seja irrelevante."),
      tx("ideias/571d43b14d", "É aqui que aparecem perguntas sobre: autonomia; responsabilidade; influência; limites; autoria; decisão; e participação."),
    ],
    quote: tx("ideias/26a51ba17d", "Agência não é controle. É participação."),
    questionsLead: tx("ideias/f746cb7a88", "Pergunta recorrente:"),
    questions: [
      tx("ideias/8b15bf6c05", "Diante daquilo que não depende de mim, onde ainda existe espaço para escolher, influenciar ou construir alguma coisa?"),
    ],
  },
  {
    id: "lideranca",
    n: 4,
    name: "Liderança & Organizações",
    sub: tx("ideias/401bbe2162", "Porque organizações também transformam possibilidades em realidade."),
    img: img("ideias/1ad921dd78", "/images/ensaio/contexto-planejamento-equipe.webp"),
    alt: tx("ideias/236bbd8331", "Mãos organizando post-its e ideias em uma mesa de trabalho."),
    intro: [tx("ideias/655dd76841", "Empresas não apenas reagem ao futuro.")],
    themesLead: tx("ideias/ddde9f0f75", "Elas"),
    themes: [
      "investem",
      "contratam",
      "automatizam",
      "priorizam",
      tx("ideias/ba7ddcd69c", "premiam determinados comportamentos"),
      tx("ideias/1804f1de3b", "abandonam outros"),
      tx("ideias/a96eaaffc5", "escolhem tecnologias"),
      tx("ideias/9c0a9748f9", "definem métricas"),
      tx("ideias/3b8a6bea33", "criam produtos"),
    ],
    outro: [
      tx("ideias/8c577c0de0", "E, com isso, ajudam a tornar alguns futuros mais prováveis."),
      tx("ideias/38dd90dade", "Aqui aparecem temas como: estratégia; liderança; cultura; tecnologia; transformação; tomada de decisão; capacidades organizacionais; inovação; mercado; e construção de negócios."),
      tx("ideias/67daa646e8", "Mas a questão que me interessa quase sempre vai além da gestão:"),
    ],
    questions: [
      tx("ideias/62236705e3", "Que futuro essa decisão está ajudando a construir?"),
      tx("ideias/74c86229bb", "Do que essa organização precisa se tornar capaz para sustentar aquilo que diz querer construir?"),
    ],
  },
  {
    id: "vida-real",
    n: 5,
    name: "Transformação & Vida Real",
    sub: tx("ideias/2ed5e365d8", "Porque perceber não é a mesma coisa que conseguir mudar."),
    img: img("ideias/e0ff252620", "/images/ensaio/pessoas-cafe-manha.webp"),
    alt: tx("ideias/10d265ca06", "Juliana segurando uma caneca de café à mesa da cozinha."),
    intro: [tx("ideias/53ff44a60f", "Esse território começa muito perto.")],
    themes: [
      tx("ideias/c693bbf3cc", "Na rotina"),
      tx("ideias/2c324c6f1a", "No comportamento"),
      tx("ideias/87b539b47e", "Na energia"),
      tx("ideias/f239e3e0fd", "Nas escolhas pequenas"),
      tx("ideias/10c3e6d260", "Nos hábitos"),
      tx("ideias/0a127823c4", "No medo"),
      tx("ideias/ff86e0e54f", "Na maternidade"),
      tx("ideias/18263f7c6e", "No trabalho"),
      tx("ideias/ab972d4018", "Nos recomeços"),
      tx("ideias/57baecc52d", "Naquilo que sabemos, mas ainda não conseguimos fazer"),
    ],
    outro: [
      tx("ideias/2e1b427b3a", "Aqui aparecem questões sobre: mudança pessoal; capacidades; identidade; aprendizado; energia; ação; repetição; coragem; e cotidiano."),
      tx("ideias/e89f6f81c0", "Mas sem a promessa de: “basta querer.”"),
    ],
    questionsLead: tx("ideias/5de46cfc3f", "A pergunta é:"),
    questions: [tx("ideias/6e7b2513fa", "Como transformação sobrevive quando encontra a vida real?")],
    after: [tx("ideias/9b71b11e60", "Com filhos. Boletos. Trabalho. Cansaço. Limites."), tx("ideias/7eb5eb9fa7", "E uma terça-feira qualquer no meio do caminho.")],
  },
]));

/* ───────────── Artigos em destaque (B3) ───────────── */
/**
 * ATENÇÃO: arquitetura editorial aprovada, NÃO artigos publicados.
 * Antes do go-live, conferir quais ensaios existem integralmente (status "a-confirmar")
 * e só então apontar `href` para páginas reais. Sem tempo de leitura até existir o texto.
 */
export type ArtigoStatus = "a-confirmar" | "publicado";

export type Artigo = {
  slug: string;
  status: ArtigoStatus;
  /** destino do CTA — "#" enquanto o ensaio não existir */
  href: string;
  cta: string;
  kicker: string;
  territorios: TerritorioId[];
  title: string;
  sub?: string;
  body: string[];
  /** lista curta (ex.: "Alguns começam: …") */
  list?: string[];
  question?: string;
  questionLead?: string;
  highlight?: string;
  img: string;
  alt: string;
};

export const ARTIGO_PROTAGONISTA: Artigo = lazy(() => ({
  slug: "o-futuro-mais-provavel",
  status: "a-confirmar",
  href: "#",
  cta: tx("ideias/35a326fd89", "Leia o ensaio"),
  kicker: tx("ideias/a8443ea182", "Artigo protagonista"),
  territorios: ["futuros"],
  title: tx("ideias/1556d86632", "O futuro mais provável não é o único futuro possível."),
  sub: tx("ideias/cdf2f81a0a", "Sobre aquilo que tratamos como inevitável — e as escolhas que desaparecem quando confundimos probabilidade com destino."),
  body: [
    tx("ideias/a60fa797fb", "Observamos tendências, fazemos previsões e tentamos entender para onde as coisas estão indo."),
    tx("ideias/ee4dd51552", "Isso é importante."),
    tx("ideias/0ba498f241", "O problema começa quando aquilo que parece mais provável passa a ser tratado como aquilo que necessariamente vai acontecer."),
  ],
  highlight: tx("ideias/55d0b391c5", "Pensar futuros também é preservar espaço para aquilo que ainda pode ser diferente."),
  img: img("ideias/f59ad5f2f9", "/images/ensaio/home-01-abertura-vertical.webp"),
  alt: tx("ideias/08e84e1f57", "Juliana no mirante, em enquadramento vertical ao entardecer."),
}));

export const ARTIGOS: Artigo[] = lazy(() => ([
  {
    slug: "ferramentas-poderosas",
    status: "a-confirmar",
    href: "#",
    cta: tx("ideias/3c105919ff", "Ler"),
    kicker: tx("ideias/8468241f88", "Tecnologia & Humanidade"),
    territorios: ["tecnologia"],
    title: tx("ideias/eacf2084ee", "Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas."),
    sub: tx("ideias/e29a546ba8", "Capacidade não é direção."),
    body: [
      tx("ideias/a90e38465e", "Uma reflexão sobre IA, automação e tecnologias que ampliam rapidamente aquilo que somos capazes de fazer — e as perguntas humanas que continuam existindo depois que a ferramenta fica pronta."),
    ],
    questionLead: tx("ideias/e8ee34e68b", "Pergunta de entrada"),
    question: tx("ideias/1e76b8032a", "O que vale a pena fazer com aquilo que agora conseguimos fazer?"),
    img: img("ideias/bc87f19331", "/images/ensaio/contexto-tecnologia-humana.webp"),
    alt: tx("ideias/d1861e727e", "Mãos usando um notebook ao lado de caderno e café."),
  },
  {
    slug: "agencia-nao-e-controle",
    status: "a-confirmar",
    href: "#",
    cta: tx("ideias/268088d62f", "Ler"),
    kicker: tx("ideias/b709cf27ed", "Agência & Escolhas"),
    territorios: ["escolhas"],
    title: tx("ideias/1151b2bbab", "Agência não é controle. É participação."),
    sub: tx("ideias/401e62ee45", "O espaço entre “eu controlo tudo” e “não posso fazer nada”."),
    body: [
      tx("ideias/31e99bd985", "Nem pessoas nem organizações controlam tudo aquilo que vem depois."),
      tx("ideias/f4714657fd", "Mas isso não significa ausência de participação."),
      tx("ideias/d43022a543", "Um texto sobre limites, escolhas, influência, responsabilidade e movimento."),
    ],
    questionLead: tx("ideias/cde57f40af", "Pergunta de entrada"),
    question: tx("ideias/d92d6e57f3", "Diante daquilo que eu não controlo, onde ainda existe espaço para participar?"),
    img: img("ideias/4f0c5e4381", "/images/ensaio/contexto-caderno-escolhas.webp"),
    alt: tx("ideias/9d08e5d2c0", "Mãos fazendo anotações e marcando escolhas em um caderno."),
  },
  {
    slug: "o-automatico-tambem-constroi-futuros",
    status: "a-confirmar",
    href: "#",
    cta: tx("ideias/6b419d2197", "Ler"),
    kicker: tx("ideias/cd8daa9162", "Vida Real & Transformação"),
    territorios: ["vida-real"],
    title: tx("ideias/b8b6b744d9", "O automático também constrói futuros."),
    sub: tx("ideias/bc61b61387", "Aquilo que repetimos enquanto simplesmente tentamos dar conta."),
    body: [tx("ideias/80be4a9cad", "Nem todos os futuros começam numa decisão estratégica."), tx("ideias/a707e86ba9", "Alguns começam:")],
    list: [
      tx("ideias/111b442de1", "num hábito"),
      tx("ideias/bfa6a5fa49", "num processo"),
      tx("ideias/e4776e0edd", "num silêncio"),
      tx("ideias/fcfa304d0f", "num comportamento recompensado"),
      tx("ideias/06ddc58bd4", "numa decisão adiada"),
      tx("ideias/d62114bad1", "numa terça-feira qualquer"),
    ],
    questionLead: tx("ideias/b016d5070a", "Pergunta de entrada"),
    question: tx("ideias/6b7a29a3d2", "O que estamos construindo sem perceber que estamos construindo?"),
    img: img("ideias/f54fc12316", "/images/ensaio/contexto-cidade-movimento.webp"),
    alt: tx("ideias/993168e0ee", "Pessoas caminhando pela cidade, com movimento suavemente desfocado."),
  },
  {
    slug: "possibilidade-e-realidade",
    status: "a-confirmar",
    href: "#",
    cta: tx("ideias/2b564ce22b", "Ler"),
    kicker: tx("ideias/351a76d1d9", "Possibilidade & Realidade"),
    territorios: ["futuros", "vida-real"],
    title: tx("ideias/48410964b0", "Possibilidade sem realidade vira fantasia. Realidade sem possibilidade vira resignação."),
    sub: tx("ideias/0051ff5eb5", "O que acontece quando imaginar encontra limite."),
    body: [
      tx("ideias/b7e7f652d5", "Uma reflexão sobre como preservar possibilidade sem negar circunstâncias reais — e como reconhecer limites sem transformá-los na única história possível."),
    ],
    questionLead: tx("ideias/6be8f58d5b", "Pergunta de entrada"),
    question:
      tx("ideias/8ba775b2c0", "Como continuar imaginando sem fugir da realidade — e continuar realista sem desistir da possibilidade?"),
    img: img("ideias/7d9271c0ff", "/images/ensaio/contexto-caminhos-escolhas.webp"),
    alt: tx("ideias/41f83b3021", "Uma trilha se divide em dois caminhos na paisagem."),
  },
  {
    slug: "tornar-se",
    status: "a-confirmar",
    href: "#",
    cta: tx("ideias/aa7cfe17fd", "Ler"),
    kicker: tx("ideias/ab3686b9d7", "Tornar-se"),
    territorios: ["vida-real", "futuros"],
    title: tx("ideias/5e3ecfb60c", "Nós construímos futuros e somos construídos enquanto os construímos."),
    body: [
      tx("ideias/590531a1dd", "Sobre uma ideia que atravessa a Espiral: enquanto tentamos colocar alguma coisa no mundo, alguma coisa também acontece conosco."),
      tx("ideias/ee1fe6c367", "Aprendemos. Mudamos. Desenvolvemos capacidades. Perdemos certezas. E passamos a enxergar possibilidades que antes nem conseguíamos perceber."),
    ],
    questionLead: tx("ideias/3571756bb0", "Pergunta"),
    question: tx("ideias/d196f17aa3", "Quem estamos nos tornando enquanto construímos aquilo que queremos tornar possível?"),
    img: img("ideias/942a2a027e", "/images/ensaio/ju-estudo-fones.webp"),
    alt: tx("ideias/5d6bed3e24", "Juliana estudando com fones de ouvido, livro e notebook."),
  },
]));

/* ───────────── Em investigação (B5) ───────────── */
export type Investigacao = {
  n: number;
  id: string;
  label: Epistemic;
  title: string;
  img: string;
  alt: string;
};

export const INVESTIGACOES: Investigacao[] = lazy(() => ([
  {
    n: 1,
    id: "soberania-humana",
    label: "investigacao",
    title: tx("ideias/70decfed0d", "Soberania Humana"),
    img: img("ideias/414fa3a47d", "/images/ensaio/home-01-abertura-horizontal.webp"),
    alt: tx("ideias/49c14bd111", "Juliana de preto diante de uma paisagem ampla ao entardecer."),
  },
  {
    n: 2,
    id: "capacidades-humanas",
    label: "sintese",
    title: tx("ideias/69df84110c", "Que capacidades humanas ganham importância?"),
    img: img("ideias/ab8023acd8", "/images/ensaio/ju-estudo-fones.webp"),
    alt: tx("ideias/d6784cc060", "Juliana estudando com fones de ouvido, livro e notebook."),
  },
  {
    n: 3,
    id: "terceirizando",
    label: "investigacao",
    title: tx("ideias/7278bd291e", "O que estamos terceirizando sem perceber?"),
    img: img("ideias/0ad9a1db1f", "/images/ensaio/contexto-celular-cotidiano.webp"),
    alt: tx("ideias/a128c74bbf", "Mão segurando um celular próximo a um caderno sobre a mesa."),
  },
  {
    n: 4,
    id: "capacidade-responsabilidade",
    label: "hipotese",
    title: tx("ideias/38eebf27d2", "Quanto mais capacidade, mais responsabilidade?"),
    img: img("ideias/3fd836c7e4", "/images/ensaio/contexto-tecnologia-humana.webp"),
    alt: tx("ideias/d0ededecdf", "Mãos usando um notebook ao lado de caderno e café."),
  },
  {
    n: 5,
    id: "continuar-humano",
    label: "investigacao",
    title: tx("ideias/46ae78467d", "Como continuar humano sem romantizar o humano?"),
    img: img("ideias/c9d37ca8b9", "/images/ensaio/home-06-ideias-horizontal.webp"),
    alt: tx("ideias/42d2d9de5d", "Livros, caderno aberto, caneta e café sobre uma mesa de madeira."),
  },
]));

/** Mapa provisório de capacidades (B5 · item 2). */
export const CAPACIDADES: { name: string; desc: string }[] = lazy(() => ([
  { name: "Consciência", desc: tx("ideias/c169c634aa", "perceber a si, ao contexto e aquilo que está acontecendo.") },
  { name: "Imaginação", desc: tx("ideias/b2338b19fd", "conseguir considerar aquilo que ainda não existe.") },
  { name: "Discernimento", desc: tx("ideias/d67379bf21", "escolher entre possibilidades, critérios e consequências.") },
  { name: "Potência", desc: tx("ideias/4b5cbfe61a", "reconhecer capacidade de participação diante de limites reais.") },
  { name: "Coragem", desc: tx("ideias/38011885e0", "agir mesmo sem garantia completa.") },
  { name: "Inteligência", desc: tx("ideias/aafaa46705", "compreender, aprender, conectar e resolver.") },
  { name: "Amor", desc: tx("ideias/a64bdaacca", "reconhecer valor, vínculo, cuidado e responsabilidade para além da eficiência.") },
  { name: "Soberania", desc: tx("ideias/33aeae7595", "permanecer presente na autoria das próprias escolhas e capacidades.") },
]));

/* ───────────── Repertório (B7) ───────────── */
/**
 * PLACEHOLDERS — substituir por livros, autores e materiais reais escolhidos pela Ju
 * (nota de implementação da copy). Nenhum título/autor inventado.
 */
export type Referencia = {
  id: string;
  placeholder: true;
  title: string;
  author: string;
  territorio?: TerritorioId;
  note: string;
  img?: string;
};

export const NA_MESA_AGORA: Referencia[] = lazy(() => ([
  img("ideias/96695b2029", "/images/ensaio/home-06-ideias-horizontal.webp"),
  img("ideias/5910138478", "/images/ensaio/contexto-caderno-escolhas.webp"),
  img("ideias/9ce67e9d29", "/images/ensaio/contexto-livros-janela.webp"),
].map((img, i) => ({
  id: `mesa-${i + 1}`,
  placeholder: true,
  title: tx("ideias/15b8bbb289", "Referência a definir"),
  author: tx("ideias/cc79048710", "Autor a definir"),
  note: tx("ideias/e8a3501faf", "Nota curta da Ju: por que isso está na minha mesa agora?"),
  img,
}))));

export const REFERENCIAS_QUE_VOLTAM: Referencia[] = lazy(() => ([1, 2, 3, 4, 5].map((n) => ({
  id: `volta-${n}`,
  placeholder: true,
  title: tx("ideias/447e777dbb", "Referência a definir"),
  author: tx("ideias/2796dc1e46", "Autor a definir"),
  note: "",
}))));

export const TRILHAS: { id: string; name: string; question: string }[] = lazy(() => ([
  {
    id: "autoria-tecnologia",
    name: "Autoria & Tecnologia",
    question: tx("ideias/9f4504c30c", "O que significa continuar presente nas próprias escolhas quando cada vez mais decisões podem ser delegadas?"),
  },
  {
    id: "capacidades-humanas",
    name: "Capacidades Humanas",
    question: tx("ideias/2ca4646356", "Do que precisamos nos tornar mais capazes num mundo em rápida transformação?"),
  },
  { id: "agencia", name: "Agência", question: tx("ideias/fe05151d0f", "O que significa participar quando não controlamos o sistema inteiro?") },
]));
