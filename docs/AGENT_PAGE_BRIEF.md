# Brief para construir uma página interna — Ju Ferreira site

Projeto Next.js 16 (App Router, TS, Tailwind v4) em D:\JU\ju-ferreira-site. Dev server JÁ RODANDO em http://localhost:3210 (não inicie outro, não rode `next build`).
Leia `AGENTS.md` (Next 16 tem mudanças; `cacheComponents` está ligado — páginas devem ser estáticas, sem APIs de runtime fora de <Suspense>).

## Antes de codar, leia
1. `src/components/sections/home/HomeBlocks.tsx` + `src/app/page.tsx` — a Home é a página de referência: copie os padrões de layout, ritmo, tipografia e componentes.
2. `src/components/ui/*` (Button, Section/Container, Typography: Em, Eyebrow, Display, Title, Lead, Body, Dash, HandNote, StickyNote, QuoteCard, NumberBadge, DashList; Strokes: Stroke, SpiralMark; Photo) e `src/app/globals.css` (tokens, classes jf-*).
3. `src/lib/site.ts` (NAV, CONTACT_ROUTES, LINKS — use para destinos de CTA).
4. A copy canônica da sua página em `docs/01_COPY/<pagina>.md` e os mockups em `references/mockups/<pasta>/block-XX.png` (abra cada PNG com Read).

## Regras
- TEXTO: vem do `.md` (o texto dos PNGs é rascunho de IA, não usar). Não invente frases, números, depoimentos, logos. Pode omitir notas internas/instruções de implementação da copy. Copy longa: inclua-a (pode organizar em colunas, listas, `<details>` "ler mais" quando muito extensa), não a reescreva.
- VISUAL: siga a composição do mockup de cada bloco (split texto/foto, cards, ritmo claro/escuro/vinho, gestos vermelhos, post-its, notas manuscritas), sem perseguir pixel. Mobile recomposto (1 coluna, sem colagens minúsculas).
- FOTOS: recorte placeholders dos mockups com `scripts/crop-placeholders.py`: crie `scripts/crops/<slug>.json` (mesmo formato de `scripts/crops/home.json`, coordenadas no PNG 1672×941, saída em `<slug>/arquivo.webp`) e rode `python -I scripts/crop-placeholders.py scripts/crops/<slug>.json`. Recorte só a área da foto (sem header, sem texto). Use via `<Photo src="/images/ph/<slug>/..." alt="..."/>`.
- Use os componentes existentes. NÃO edite arquivos compartilhados (`src/components/ui`, `src/components/global`, `src/app/globals.css`, `src/lib/site.ts`, `src/app/layout.tsx`, Home). Se precisar de algo novo, crie dentro de `src/components/sections/<slug>/`.
- Server Components por padrão; `"use client"` só para interação real.
- Cada página exporta `metadata` (title + description tirados da copy).
- Headings semânticos: um único h1 por página (no hero), h2 por bloco.
- Um bloco = um componente exportado; a página compõe na ordem dos blocos.

## Seus arquivos (somente estes)
- `src/app/<rota>/page.tsx`
- `src/components/sections/<slug>/*.tsx`
- `scripts/crops/<slug>.json` e `public/images/ph/<slug>/*`

## Verificação antes de terminar
- `npx tsc --noEmit` (ignore apenas o erro de `LayoutProps` em layout.tsx, se aparecer) e `npx eslint src/app/<rota> src/components/sections/<slug>`.
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3210/<rota>` deve dar 200; confira também que o HTML não contém "Error" do Next.
- Não use o navegador (outros agentes estão usando). Relate: blocos feitos, placeholders usados, pendências.
