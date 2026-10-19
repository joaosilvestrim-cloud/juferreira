-- Ju Ferreira — esquema dos formulários (idempotente). Aplicar: node --env-file=.env.local scripts/db-migrate.mjs

create table if not exists public.contact_submissions (
  id           bigint generated always as identity primary key,
  created_at   timestamptz not null default now(),
  origin       text        not null,          -- 'contato' | 'organizacoes'
  route        text,                          -- palestras | organizacoes | futuros-aplicados | parcerias | epic247 | nao-sei
  name         text        not null,
  email        text        not null,
  organization text,
  phone        text,
  message      text,                          -- campo aberto principal
  fields       jsonb       not null default '{}'::jsonb, -- demais respostas específicas da rota
  page_url     text,
  user_agent   text,
  ip_hash      text,                          -- sha256 do IP (anti-abuso, sem guardar o IP)
  status       text        not null default 'novo' check (status in ('novo','em-andamento','respondido','arquivado'))
);
create index if not exists contact_submissions_created_idx on public.contact_submissions (created_at desc);
create index if not exists contact_submissions_route_idx on public.contact_submissions (route);
create index if not exists contact_submissions_ip_idx on public.contact_submissions (ip_hash, created_at);

create table if not exists public.newsletter_subscribers (
  id              bigint generated always as identity primary key,
  created_at      timestamptz not null default now(),
  email           text        not null,
  consent         boolean     not null,
  consent_text    text        not null,
  source          text,
  status          text        not null default 'ativo' check (status in ('ativo','descadastrado')),
  ip_hash         text,
  unsubscribed_at timestamptz
);
create unique index if not exists newsletter_subscribers_email_uidx on public.newsletter_subscribers (lower(email));

-- RLS ligado e SEM políticas: a API pública do Supabase (anon key) não lê nem escreve nada.
-- O site grava pelo servidor com o usuário do banco (que ignora RLS).
alter table public.contact_submissions   enable row level security;
alter table public.newsletter_subscribers enable row level security;
