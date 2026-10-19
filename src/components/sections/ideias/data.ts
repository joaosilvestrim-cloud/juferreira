/**
 * Dados editoriais da página /ideias (copy: docs/01_COPY/ideias.md).
 * Imagens do ensaio ilustrativo; origem e prompts em docs/ensaio-contextual/catalogo.json.
 */

/* ───────────── Rótulos epistêmicos (Site Master: 4 rótulos oficiais) ───────────── */
export type Epistemic = "tese" | "sintese" | "hipotese" | "investigacao";

export const EPISTEMIC: Record<Epistemic, { label: string; desc: string }> = {
  tese: { label: "TESE", desc: "Ideia já bastante estruturada dentro do trabalho da Ju." },
  sintese: { label: "SÍNTESE PROVISÓRIA", desc: "Articulação atual entre diferentes fontes, experiências e campos." },
  hipotese: { label: "HIPÓTESE", desc: "Possibilidade sendo testada." },
  investigacao: { label: "EM INVESTIGAÇÃO", desc: "Pergunta ainda deliberadamente aberta." },
};

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

export const TERRITORIOS: Territorio[] = [
  {
    id: "futuros",
    n: 1,
    name: "Futuros",
    sub: "Não para adivinhar amanhã. Para ampliar o que conseguimos enxergar hoje.",
    img: "/images/ensaio/home-01-abertura-horizontal.webp",
    alt: "Juliana de preto diante de uma paisagem ampla ao entardecer.",
    themesLead: "Aqui entram perguntas sobre:",
    themes: [
      "futuros possíveis",
      "futuros prováveis",
      "mudanças",
      "sinais",
      "incerteza",
      "imaginação",
      "direção",
      "escolhas",
      "e aquilo que começamos a construir antes mesmo de perceber que estamos construindo",
    ],
    outro: ["O interesse não está em dizer: “isso vai acontecer.”"],
    questionsLead: "Está em investigar:",
    questions: [
      "o que pode acontecer?",
      "o que estamos tratando como inevitável?",
      "o que queremos ajudar a tornar possível?",
      "e como nossas escolhas presentes participam disso?",
    ],
    quote: "Futuro, para mim, é menos um lugar para prever e mais um campo de possibilidades para investigar.",
  },
  {
    id: "tecnologia",
    n: 2,
    name: "Tecnologia & Humanidade",
    sub: "Quanto mais podemos fazer, mais importante se torna perguntar para quê.",
    img: "/images/ensaio/contexto-tecnologia-humana.webp",
    alt: "Mãos usando um notebook ao lado de caderno e café.",
    intro: ["Tecnologia aparece muito por aqui."],
    themes: [
      "IA",
      "Automação",
      "Dados",
      "Plataformas",
      "Novas formas de trabalhar",
      "Ferramentas que ampliam capacidades antes inimagináveis",
    ],
    outro: ["Mas tecnologia raramente é a pergunta final."],
    questionsLead: "Ela costuma abrir outras:",
    questions: [
      "O que estamos delegando?",
      "O que queremos continuar decidindo?",
      "Que capacidades humanas ganham importância?",
      "Que parte da autoria queremos preservar?",
      "O que vale a pena fazer simplesmente porque agora conseguimos fazer?",
    ],
    quote: "Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.",
    after: ["Não como oposição entre humano e tecnologia.", "Como responsabilidade diante da capacidade."],
  },
  {
    id: "escolhas",
    n: 3,
    name: "Escolhas & Agência",
    sub: "O espaço entre controlar tudo e simplesmente aceitar.",
    img: "/images/ensaio/contexto-caderno-escolhas.webp",
    alt: "Mãos fazendo anotações e marcando escolhas em um caderno.",
    intro: ["Grande parte das nossas decisões acontece dentro de limites."],
    themes: ["Outras pessoas", "Contexto", "História", "Recursos", "Estruturas", "Acaso", "Corpo", "Mercado", "Tempo"],
    outro: [
      "Nenhum indivíduo ou organização controla completamente aquilo que vem depois.",
      "Mas daí não decorre que nossa participação seja irrelevante.",
      "É aqui que aparecem perguntas sobre: autonomia; responsabilidade; influência; limites; autoria; decisão; e participação.",
    ],
    quote: "Agência não é controle. É participação.",
    questionsLead: "Pergunta recorrente:",
    questions: [
      "Diante daquilo que não depende de mim, onde ainda existe espaço para escolher, influenciar ou construir alguma coisa?",
    ],
  },
  {
    id: "lideranca",
    n: 4,
    name: "Liderança & Organizações",
    sub: "Porque organizações também transformam possibilidades em realidade.",
    img: "/images/ensaio/contexto-planejamento-equipe.webp",
    alt: "Mãos organizando post-its e ideias em uma mesa de trabalho.",
    intro: ["Empresas não apenas reagem ao futuro."],
    themesLead: "Elas",
    themes: [
      "investem",
      "contratam",
      "automatizam",
      "priorizam",
      "premiam determinados comportamentos",
      "abandonam outros",
      "escolhem tecnologias",
      "definem métricas",
      "criam produtos",
    ],
    outro: [
      "E, com isso, ajudam a tornar alguns futuros mais prováveis.",
      "Aqui aparecem temas como: estratégia; liderança; cultura; tecnologia; transformação; tomada de decisão; capacidades organizacionais; inovação; mercado; e construção de negócios.",
      "Mas a questão que me interessa quase sempre vai além da gestão:",
    ],
    questions: [
      "Que futuro essa decisão está ajudando a construir?",
      "Do que essa organização precisa se tornar capaz para sustentar aquilo que diz querer construir?",
    ],
  },
  {
    id: "vida-real",
    n: 5,
    name: "Transformação & Vida Real",
    sub: "Porque perceber não é a mesma coisa que conseguir mudar.",
    img: "/images/ensaio/pessoas-cafe-manha.webp",
    alt: "Juliana segurando uma caneca de café à mesa da cozinha.",
    intro: ["Esse território começa muito perto."],
    themes: [
      "Na rotina",
      "No comportamento",
      "Na energia",
      "Nas escolhas pequenas",
      "Nos hábitos",
      "No medo",
      "Na maternidade",
      "No trabalho",
      "Nos recomeços",
      "Naquilo que sabemos, mas ainda não conseguimos fazer",
    ],
    outro: [
      "Aqui aparecem questões sobre: mudança pessoal; capacidades; identidade; aprendizado; energia; ação; repetição; coragem; e cotidiano.",
      "Mas sem a promessa de: “basta querer.”",
    ],
    questionsLead: "A pergunta é:",
    questions: ["Como transformação sobrevive quando encontra a vida real?"],
    after: ["Com filhos. Boletos. Trabalho. Cansaço. Limites.", "E uma terça-feira qualquer no meio do caminho."],
  },
];

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

export const ARTIGO_PROTAGONISTA: Artigo = {
  slug: "o-futuro-mais-provavel",
  status: "a-confirmar",
  href: "#",
  cta: "Leia o ensaio",
  kicker: "Artigo protagonista",
  territorios: ["futuros"],
  title: "O futuro mais provável não é o único futuro possível.",
  sub: "Sobre aquilo que tratamos como inevitável — e as escolhas que desaparecem quando confundimos probabilidade com destino.",
  body: [
    "Observamos tendências, fazemos previsões e tentamos entender para onde as coisas estão indo.",
    "Isso é importante.",
    "O problema começa quando aquilo que parece mais provável passa a ser tratado como aquilo que necessariamente vai acontecer.",
  ],
  highlight: "Pensar futuros também é preservar espaço para aquilo que ainda pode ser diferente.",
  img: "/images/ensaio/home-01-abertura-vertical.webp",
  alt: "Juliana no mirante, em enquadramento vertical ao entardecer.",
};

export const ARTIGOS: Artigo[] = [
  {
    slug: "ferramentas-poderosas",
    status: "a-confirmar",
    href: "#",
    cta: "Ler",
    kicker: "Tecnologia & Humanidade",
    territorios: ["tecnologia"],
    title: "Quanto mais poderosas ficam nossas ferramentas, mais humanos precisamos ser para decidir o que fazer com elas.",
    sub: "Capacidade não é direção.",
    body: [
      "Uma reflexão sobre IA, automação e tecnologias que ampliam rapidamente aquilo que somos capazes de fazer — e as perguntas humanas que continuam existindo depois que a ferramenta fica pronta.",
    ],
    questionLead: "Pergunta de entrada",
    question: "O que vale a pena fazer com aquilo que agora conseguimos fazer?",
    img: "/images/ensaio/contexto-tecnologia-humana.webp",
    alt: "Mãos usando um notebook ao lado de caderno e café.",
  },
  {
    slug: "agencia-nao-e-controle",
    status: "a-confirmar",
    href: "#",
    cta: "Ler",
    kicker: "Agência & Escolhas",
    territorios: ["escolhas"],
    title: "Agência não é controle. É participação.",
    sub: "O espaço entre “eu controlo tudo” e “não posso fazer nada”.",
    body: [
      "Nem pessoas nem organizações controlam tudo aquilo que vem depois.",
      "Mas isso não significa ausência de participação.",
      "Um texto sobre limites, escolhas, influência, responsabilidade e movimento.",
    ],
    questionLead: "Pergunta de entrada",
    question: "Diante daquilo que eu não controlo, onde ainda existe espaço para participar?",
    img: "/images/ensaio/contexto-caderno-escolhas.webp",
    alt: "Mãos fazendo anotações e marcando escolhas em um caderno.",
  },
  {
    slug: "o-automatico-tambem-constroi-futuros",
    status: "a-confirmar",
    href: "#",
    cta: "Ler",
    kicker: "Vida Real & Transformação",
    territorios: ["vida-real"],
    title: "O automático também constrói futuros.",
    sub: "Aquilo que repetimos enquanto simplesmente tentamos dar conta.",
    body: ["Nem todos os futuros começam numa decisão estratégica.", "Alguns começam:"],
    list: [
      "num hábito",
      "num processo",
      "num silêncio",
      "num comportamento recompensado",
      "numa decisão adiada",
      "numa terça-feira qualquer",
    ],
    questionLead: "Pergunta de entrada",
    question: "O que estamos construindo sem perceber que estamos construindo?",
    img: "/images/ensaio/contexto-cidade-movimento.webp",
    alt: "Pessoas caminhando pela cidade, com movimento suavemente desfocado.",
  },
  {
    slug: "possibilidade-e-realidade",
    status: "a-confirmar",
    href: "#",
    cta: "Ler",
    kicker: "Possibilidade & Realidade",
    territorios: ["futuros", "vida-real"],
    title: "Possibilidade sem realidade vira fantasia. Realidade sem possibilidade vira resignação.",
    sub: "O que acontece quando imaginar encontra limite.",
    body: [
      "Uma reflexão sobre como preservar possibilidade sem negar circunstâncias reais — e como reconhecer limites sem transformá-los na única história possível.",
    ],
    questionLead: "Pergunta de entrada",
    question:
      "Como continuar imaginando sem fugir da realidade — e continuar realista sem desistir da possibilidade?",
    img: "/images/ensaio/contexto-caminhos-escolhas.webp",
    alt: "Uma trilha se divide em dois caminhos na paisagem.",
  },
  {
    slug: "tornar-se",
    status: "a-confirmar",
    href: "#",
    cta: "Ler",
    kicker: "Tornar-se",
    territorios: ["vida-real", "futuros"],
    title: "Nós construímos futuros e somos construídos enquanto os construímos.",
    body: [
      "Sobre uma ideia que atravessa a Espiral: enquanto tentamos colocar alguma coisa no mundo, alguma coisa também acontece conosco.",
      "Aprendemos. Mudamos. Desenvolvemos capacidades. Perdemos certezas. E passamos a enxergar possibilidades que antes nem conseguíamos perceber.",
    ],
    questionLead: "Pergunta",
    question: "Quem estamos nos tornando enquanto construímos aquilo que queremos tornar possível?",
    img: "/images/ensaio/ju-estudo-fones.webp",
    alt: "Juliana estudando com fones de ouvido, livro e notebook.",
  },
];

/* ───────────── Em investigação (B5) ───────────── */
export type Investigacao = {
  n: number;
  id: string;
  label: Epistemic;
  title: string;
  img: string;
  alt: string;
};

export const INVESTIGACOES: Investigacao[] = [
  {
    n: 1,
    id: "soberania-humana",
    label: "investigacao",
    title: "Soberania Humana",
    img: "/images/ensaio/home-01-abertura-horizontal.webp",
    alt: "Juliana de preto diante de uma paisagem ampla ao entardecer.",
  },
  {
    n: 2,
    id: "capacidades-humanas",
    label: "sintese",
    title: "Que capacidades humanas ganham importância?",
    img: "/images/ensaio/ju-estudo-fones.webp",
    alt: "Juliana estudando com fones de ouvido, livro e notebook.",
  },
  {
    n: 3,
    id: "terceirizando",
    label: "investigacao",
    title: "O que estamos terceirizando sem perceber?",
    img: "/images/ensaio/contexto-celular-cotidiano.webp",
    alt: "Mão segurando um celular próximo a um caderno sobre a mesa.",
  },
  {
    n: 4,
    id: "capacidade-responsabilidade",
    label: "hipotese",
    title: "Quanto mais capacidade, mais responsabilidade?",
    img: "/images/ensaio/contexto-tecnologia-humana.webp",
    alt: "Mãos usando um notebook ao lado de caderno e café.",
  },
  {
    n: 5,
    id: "continuar-humano",
    label: "investigacao",
    title: "Como continuar humano sem romantizar o humano?",
    img: "/images/ensaio/home-06-ideias-horizontal.webp",
    alt: "Livros, caderno aberto, caneta e café sobre uma mesa de madeira.",
  },
];

/** Mapa provisório de capacidades (B5 · item 2). */
export const CAPACIDADES: { name: string; desc: string }[] = [
  { name: "Consciência", desc: "perceber a si, ao contexto e aquilo que está acontecendo." },
  { name: "Imaginação", desc: "conseguir considerar aquilo que ainda não existe." },
  { name: "Discernimento", desc: "escolher entre possibilidades, critérios e consequências." },
  { name: "Potência", desc: "reconhecer capacidade de participação diante de limites reais." },
  { name: "Coragem", desc: "agir mesmo sem garantia completa." },
  { name: "Inteligência", desc: "compreender, aprender, conectar e resolver." },
  { name: "Amor", desc: "reconhecer valor, vínculo, cuidado e responsabilidade para além da eficiência." },
  { name: "Soberania", desc: "permanecer presente na autoria das próprias escolhas e capacidades." },
];

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

export const NA_MESA_AGORA: Referencia[] = [
  "/images/ensaio/home-06-ideias-horizontal.webp",
  "/images/ensaio/contexto-caderno-escolhas.webp",
  "/images/ensaio/contexto-livros-janela.webp",
].map((img, i) => ({
  id: `mesa-${i + 1}`,
  placeholder: true,
  title: "Referência a definir",
  author: "Autor a definir",
  note: "Nota curta da Ju: por que isso está na minha mesa agora?",
  img,
}));

export const REFERENCIAS_QUE_VOLTAM: Referencia[] = [1, 2, 3, 4, 5].map((n) => ({
  id: `volta-${n}`,
  placeholder: true,
  title: "Referência a definir",
  author: "Autor a definir",
  note: "",
}));

export const TRILHAS: { id: string; name: string; question: string }[] = [
  {
    id: "autoria-tecnologia",
    name: "Autoria & Tecnologia",
    question: "O que significa continuar presente nas próprias escolhas quando cada vez mais decisões podem ser delegadas?",
  },
  {
    id: "capacidades-humanas",
    name: "Capacidades Humanas",
    question: "Do que precisamos nos tornar mais capazes num mundo em rápida transformação?",
  },
  { id: "agencia", name: "Agência", question: "O que significa participar quando não controlamos o sistema inteiro?" },
];
