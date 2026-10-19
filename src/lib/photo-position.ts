/** Mantém o rosto no recorte quando um retrato também aparece em um card horizontal. */
const POSITIONS: Record<string, string> = {
  "ju-caminhada-movimento": "50% 8%",
  "ju-estudo-fones": "50% 18%",
  "ju-leitura-anotacoes": "50% 18%",
  "pessoas-janela": "50% 15%",
};

export function photoPosition(src: string): string | undefined {
  const name = src.split("/").pop()?.replace(/\.webp$/, "");
  return name ? POSITIONS[name] : undefined;
}
