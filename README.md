# Ju Ferreira — site v1

Site institucional de Ju Ferreira. Next.js 16 (App Router) + TypeScript + Tailwind v4.

## Rodar

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

QA visual (usa o Microsoft Edge instalado): `node scripts/shots.mjs` → `screenshots/desktop|mobile/*.png`.

## Estrutura

- `docs/` — pacote canônico (Site Master, copies, Design System, briefs). **A copy `.md` é a fonte do texto.**
- `references/mockups/` — mockups aprovados (ignorados no git; fonte: pacote travado em `D:\JU`).
- `src/app/<rota>/page.tsx` — páginas: `/`, `/ju`, `/futuros-humanos`, `/palestras`, `/organizacoes`, `/pessoas`, `/ideias`, `/contato`.
- `src/components/ui` — primitivos do Design System (botões, tipografia, traços, foto, seção).
- `src/components/global` — header, footer, logo.
- `src/components/sections/<pagina>` — blocos de cada página.
- `src/lib/site.ts` — navegação, rotas do formulário de contato e **links externos pendentes**.

## Provisório (trocar antes do go-live)

| Item | Onde |
|---|---|
| Fotos (recortes dos mockups gerados por IA) | `public/images/ph/**` — gerados por `scripts/crop-placeholders.py` |
| Fontes (Cormorant Garamond, Jost, Caveat) | `src/app/layout.tsx` |
| Logo (reconstrução) | `src/components/global/Logo.tsx` |
| Espiral (PNG de referência) e traços SVG | `public/spiral`, `src/components/ui/Strokes.tsx` |
| E-mail, WhatsApp, LinkedIn, Instagram, EPIC247, WTF | `src/lib/site.ts` → `EXTERNAL` |
| Artigos, referências, newsletter, envio de formulários | páginas Ideias / Contato |
| Política de Privacidade | `src/app/privacidade` |

Elementos provisórios carregam `data-placeholder` no HTML.
