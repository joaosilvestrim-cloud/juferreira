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

## Painel /admin

Login com `ADMIN_PASSWORD` (sessão assinada com `ADMIN_SECRET`). Seções:

- **Conversas** — contatos e inscritos, status, busca, CSV.
- **Artigos** — textos de Ideias com página própria em `/ideias/<slug>` (aparecem em Ideias e na Home quando publicados).
- **Referências** — "Na mesa agora" e "Referências que voltam".
- **Newsletter** — escrever edição, prévia, envio de teste e disparo para os inscritos (Resend; descadastro em `/newsletter/sair`).
- **Páginas** — todos os textos (3.300+) e imagens (136) das 8 páginas, bloco a bloco, com busca e "voltar ao original".
- **Provas** — depoimentos, vídeos (YouTube/Vimeo/.mp4), fotos de palco e organizações (seção "Ju em ação").
- **SEO** — título, descrição, imagem de compartilhamento e "esconder do Google" por página.
- **Usuários** — cada pessoa com e-mail e senha; desativar/excluir; senha mestra (login sem e-mail) para recuperação.
- **Configurações** — e-mail, WhatsApp, LinkedIn, Instagram, links EPIC247/WTF, quem recebe avisos de contato.

Artigos e newsletter usam editor de texto completo (títulos, negrito, itálico, sublinhado, listas, citação, links,
imagens, alinhamento); o HTML é higienizado no servidor (`src/lib/rich-text.ts`).

**Ao mudar textos no código**: rode `node scripts/codemod-editable.mjs` — marca textos/imagens novos como editáveis e
atualiza `src/content/editable-registry.json`. Textos alterados no código ganham chave nova (ajustes antigos daquele
texto deixam de valer).

Imagens enviadas ficam no banco (`media`) e são servidas em `/midia/<id>`. Botões externos usam `/ir/<destino>`.
E-mails: `RESEND_API_KEY` (domínio juferreira.com.br verificado).

QA completo: `BASE_URL=http://localhost:3000 npm run qa`.

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
