/** Formatos e lugares de Vídeos e áudios (sem dependência de servidor: usado também no painel, no navegador). */
export const MEDIA_FORMATS = {
  palestra: "Palestra",
  entrevista: "Entrevista",
  podcast: "Podcast",
  video: "Vídeo",
  outro: "Outro",
} as const;
export type MediaFormat = keyof typeof MEDIA_FORMATS;

export const MEDIA_PLACEMENTS = {
  home: { label: "Home", where: "bloco “Essa pergunta também atravessa a minha vida”" },
  ju: { label: "Ju", where: "depois de “As perguntas sobre transformação ficaram maiores”" },
  palestras: { label: "Palestras", where: "seção “Ouça e veja a Ju”" },
  ideias: { label: "Ideias", where: "acervo, junto dos artigos" },
} as const;
export type MediaPlacement = keyof typeof MEDIA_PLACEMENTS;
