import { readSettings } from "@/lib/content";
import { db } from "@/lib/db";

/**
 * Blocos (ou partes) que só aparecem no site quando algo está cadastrado no painel.
 * O editor de páginas mostra o aviso, se aparece AGORA, e onde resolver.
 */
export type BlockCondition = { note: string; showing: boolean; now: string; fix?: { href: string; label: string } };

export async function blockConditions(page: string): Promise<Record<string, BlockCondition>> {
  const [s, counts] = await Promise.all([
    readSettings(),
    db
      .query<{ published: number; refs: number; proof: number; home: number; ju: number; palestras: number; ideias: number }>(
        `select
          (select count(*) from public.articles where status = 'publicado')::int as published,
          (select count(*) from public.reading_refs where visible)::int as refs,
          (select count(*) from public.proof_items where visible)::int as proof,
          (select count(*) from public.media_items where visible and 'home' = any(placements))::int as home,
          (select count(*) from public.media_items where visible and 'ju' = any(placements))::int as ju,
          (select count(*) from public.media_items where visible and 'palestras' = any(placements))::int as palestras,
          (select count(*) from public.media_items where visible and 'ideias' = any(placements))::int as ideias`,
      )
      .then((r) => r.rows[0]),
  ]);
  const yes = (b: boolean, ok: string, no: string) => ({ showing: b, now: b ? ok : no });
  const config = { href: "/admin/configuracoes", label: "Abrir Configurações" };
  const videos = { href: "/admin/videos", label: "Abrir Vídeos e áudios" };
  const all: Record<string, Record<string, BlockCondition>> = {
    home: {
      HomeJu: { note: "O vídeo/áudio deste bloco só aparece quando algum item de “Vídeos e áudios” estiver marcado para a Home.", ...yes(counts.home > 0, `${counts.home} item marcado para a Home`, "nenhum vídeo marcado para a Home"), fix: videos },
      HomeIdeias: {
        note: "Os cartões de conteúdo, o rótulo “Ensaio” e o botão “Explore as ideias” só aparecem quando houver artigo publicado.",
        ...yes(counts.published > 0, `${counts.published} artigo(s) publicado(s)`, "nenhum artigo publicado; só a newsletter aparece"),
        fix: { href: "/admin/artigos", label: "Abrir Artigos" },
      },
    },
    ju: {
      JuMidia: { note: "Este bloco inteiro só aparece quando algum item de “Vídeos e áudios” estiver marcado para a página Ju.", ...yes(counts.ju > 0, `${counts.ju} item(ns) marcado(s) para a Ju`, "nenhum vídeo marcado para a Ju"), fix: videos },
      JuHoje: {
        note: "Os botões da What The Future?! e do EPIC247 mudam conforme os links em Configurações: com o link, “Conheça…”; sem ele, um convite para conversar.",
        ...yes(Boolean(s.wtf_url && s.epic247_url), "os dois links estão preenchidos", `falta o link ${!s.wtf_url ? "da WTF" : "do EPIC247"}; aparece o botão alternativo`),
        fix: config,
      },
    },
    "palestras-workshops": {
      PalestrasHero: { note: "O botão “Ouça e veja a Ju” só aparece quando houver vídeo marcado para Palestras.", ...yes(counts.palestras > 0, "há vídeo marcado para Palestras", "sem vídeo; aparece “Conheça Futuros Humanos” no lugar"), fix: videos },
      PalestrasOucaVeja: {
        note: "Este bloco inteiro só aparece quando houver vídeo marcado para Palestras ou depoimentos, fotos e organizações em Provas.",
        ...yes(counts.palestras + counts.proof > 0, "há conteúdo cadastrado", "nada cadastrado; o bloco fica oculto"),
        fix: videos,
      },
      PalestrasContratacao: { note: "O botão “WhatsApp comercial” só aparece com o WhatsApp preenchido em Configurações.", ...yes(Boolean(s.whatsapp), "WhatsApp preenchido", "WhatsApp vazio; o botão não aparece"), fix: config },
    },
    organizacoes: {
      OrgColetivo: {
        note: "O botão “Conheça a What The Future?!” só aparece com o site da WTF preenchido em Configurações; sem ele, aparece “Converse sobre futuros aplicados”.",
        ...yes(Boolean(s.wtf_url), "link da WTF preenchido", "link da WTF vazio; aparece o botão alternativo"),
        fix: config,
      },
      OrgContato: { note: "O botão “WhatsApp” só aparece com o WhatsApp preenchido em Configurações.", ...yes(Boolean(s.whatsapp), "WhatsApp preenchido", "WhatsApp vazio; o botão não aparece"), fix: config },
      Outros: { note: "“Ler menos” só aparece depois que a pessoa clica em “Ler mais” num texto longo.", showing: true, now: "aparece ao abrir um texto longo" },
    },
    ideias: {
      IdeiasAcervo: {
        note: "Este bloco só aparece com artigo publicado ou vídeo/áudio marcado para Ideias. “Para ouvir e assistir” só com vídeo/áudio.",
        ...yes(counts.published + counts.ideias > 0, `${counts.published} artigo(s) e ${counts.ideias} vídeo/áudio`, "nada publicado; o bloco fica oculto"),
        fix: videos,
      },
      IdeiasInvestigacao: { note: "Os rótulos de status (Tese, Síntese provisória, Hipótese, Em investigação) e suas descrições aparecem nos artigos publicados que usam cada status.", showing: counts.published > 0, now: counts.published ? "há artigos publicados" : "nenhum artigo publicado ainda" },
      IdeiasNota: {
        note: "“Na mesa agora” e “Referências que voltam” (e as categorias de leitura) só aparecem com referências cadastradas.",
        ...yes(counts.refs > 0, `${counts.refs} referência(s)`, "nenhuma referência; essas listas ficam ocultas"),
        fix: { href: "/admin/referencias", label: "Abrir Referências" },
      },
    },
    contato: {
      ContatoCanais: {
        note: "Cada canal (e-mail, WhatsApp, LinkedIn, Instagram) só aparece quando preenchido em Configurações. Sem nenhum, o bloco “Prefere outro caminho?” fica oculto.",
        ...yes(Boolean(s.whatsapp && s.linkedin && s.instagram), "todos os canais preenchidos", `faltam: ${[!s.whatsapp && "WhatsApp", !s.linkedin && !s.linkedin_page && "LinkedIn", !s.instagram && "Instagram"].filter(Boolean).join(", ") || "nenhum"}`),
        fix: config,
      },
    },
  };
  return all[page] ?? {};
}
