import { tx, lazy } from "@/lib/editable";
/**
 * Dados editoriais da página /ideias (v2).
 * Só conteúdo real: artigos vêm de getPublishedArticles() e referências de getReadingRefs() (painel /admin).
 * Os títulos ilustrativos, territórios e placeholders da v1 estão guardados em docs/v2/cofre-ideias.md.
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

export const isEpistemic = (v: string | null | undefined): v is Epistemic => !!v && (EPISTEMIC_ORDER as string[]).includes(v);

/* ───────────── Categorias do acervo (ids iguais aos do painel) ───────────── */
export type TerritorioId = "futuros" | "tecnologia" | "escolhas" | "lideranca" | "vida-real";

export const TERRITORIO_ORDER: TerritorioId[] = ["futuros", "tecnologia", "escolhas", "lideranca", "vida-real"];

export const TERRITORIO_NAME: Record<TerritorioId, string> = lazy(() => ({
  futuros: tx("ideias/575c2f0fec", "Futuros"),
  tecnologia: tx("ideias/95a1051d0c", "Tecnologia e humanidade"),
  escolhas: tx("ideias/6ecf12e130", "Escolhas"),
  lideranca: tx("ideias/148d68298a", "Liderança"),
  "vida-real": tx("ideias/31f925827e", "Vida real"),
}));
