export const CONTACT_STATUS = ["novo", "em-andamento", "respondido", "arquivado"] as const;
export const NEWS_STATUS = ["ativo", "descadastrado"] as const;

export const CONTACT_STATUS_LABEL: Record<(typeof CONTACT_STATUS)[number], string> = {
  novo: "Novo",
  "em-andamento": "Em andamento",
  respondido: "Respondido",
  arquivado: "Arquivado",
};

export const ROUTE_LABEL: Record<string, string> = {
  palestras: "Palestras & Workshops",
  organizacoes: "Organizações & Projetos",
  "futuros-aplicados": "Futuros Aplicados / WTF",
  parcerias: "Parcerias, Imprensa & Convites",
  epic247: "EPIC247 & Pessoas",
  "nao-sei": "Ainda não sei",
};

/** Rótulos legíveis para os campos específicos de cada rota (coluna fields). */
export const FIELD_LABEL: Record<string, string> = {
  evento: "Evento / organização",
  data: "Data prevista",
  cidadeFormato: "Cidade / formato",
  publico: "Público estimado",
  sala: "Quem estará na sala",
  diferenteDepois: "O que gostaria que estivesse diferente",
  tema: "Tema considerado",
  acontecendo: "O que está acontecendo",
  porqueAgora: "Por que importa agora",
  envolvidos: "Quem está envolvido",
  prazo: "Prazo / momento",
  diferenteDepoisOrg: "O que poderia ser diferente depois",
  formato: "Formato imaginado",
  pergunta: "Pergunta a explorar",
  porTras: "Decisão / contexto por trás",
  horizonte: "Horizonte temporal",
  participantes: "Quem deveria participar",
  veiculo: "Empresa / veículo / projeto",
  tipoConvite: "Tipo de convite",
  dataPrazo: "Data ou prazo",
  link: "Link de referência",
  juFizesse: "O que gostaria que a Ju fizesse",
  epicAssunto: "Assunto EPIC247",
  momento: "Momento da organização",
  diferente: "O que gostaria que fosse diferente",
};
