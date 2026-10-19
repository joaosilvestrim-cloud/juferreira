# Ju Ferreira — site v1

Site institucional de Ju Ferreira. Next.js 16 (App Router) + TypeScript + Tailwind v4.

## Rodar

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

QA visual (usa o Microsoft Edge instalado): `node scripts/shots.mjs` → `screenshots/desktop|mobile/*.png`.

## Banco de dados (Supabase / Postgres)

Os formulários (Contato, Para Organizações, newsletter em Ideias) gravam via `/api/contato` e `/api/newsletter`
nas tabelas `contact_submissions` e `newsletter_subscribers` (esquema em `db/schema.sql`, RLS ligado sem políticas).

Variáveis de ambiente (local em `.env.local`, na Vercel em *Settings → Environment Variables*):

| Variável | Valor |
|---|---|
| `PGHOST` | `aws-1-sa-east-1.pooler.supabase.com` (pooler — o host `db.*` é só IPv6 e não funciona na Vercel) |
| `PGPORT` | `6543` |
| `PGDATABASE` | `postgres` |
| `PGUSER` | `postgres.<ref-do-projeto>` |
| `PGPASSWORD` | senha do banco |
| `IP_HASH_SALT` | texto aleatório (opcional) |
| `NEXT_PUBLIC_SITE_URL` | URL pública (ex.: domínio próprio) |

Scripts: `node --env-file=.env.local scripts/db-migrate.mjs` (aplica o esquema), `scripts/db-peek.mjs` (lista registros).

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
