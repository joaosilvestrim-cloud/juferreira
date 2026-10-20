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

-- Tentativas de login no /admin (bloqueio após muitas falhas por IP)
create table if not exists public.admin_login_attempts (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  ip_hash    text,
  ok         boolean not null
);
create index if not exists admin_login_attempts_ip_idx on public.admin_login_attempts (ip_hash, created_at);
alter table public.admin_login_attempts enable row level security;

-- ===================== CONTEÚDO EDITÁVEL PELO /admin =====================

-- Configurações do site (chave → valor). Ex.: email, whatsapp, linkedin, instagram, epic247_url, wtf_url, notify_to
create table if not exists public.site_settings (
  key        text primary key,
  value      text not null default '',
  updated_at timestamptz not null default now()
);

-- Imagens enviadas pelo painel (servidas em /midia/<id>)
create table if not exists public.media (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  filename     text,
  content_type text not null,
  bytes        bytea not null,
  size         int not null
);

-- Artigos de Ideias (página própria em /ideias/<slug>)
create table if not exists public.articles (
  id           bigint generated always as identity primary key,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  slug         text not null unique,
  title        text not null,
  subtitle     text,
  excerpt      text,
  question     text,                       -- "pergunta de entrada"
  body         text not null default '',   -- texto do artigo (parágrafos separados por linha em branco)
  territories  text[] not null default '{}',
  epistemic    text,                       -- tese | sintese | hipotese | investigacao
  cover_id     uuid references public.media(id) on delete set null,
  featured     boolean not null default false,
  status       text not null default 'rascunho' check (status in ('rascunho','publicado')),
  published_at timestamptz
);
create index if not exists articles_pub_idx on public.articles (status, published_at desc);

-- Referências / repertório (Ideias — bloco 7)
create table if not exists public.reading_refs (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  section    text not null check (section in ('mesa','voltam')),
  title      text not null,
  author     text,
  note       text,                          -- "por que isso está na minha mesa agora?"
  territory  text,
  link       text,
  cover_id   uuid references public.media(id) on delete set null,
  sort       int not null default 0,
  visible    boolean not null default true
);

-- Edições da newsletter "Uma Terça-feira Qualquer"
create table if not exists public.newsletter_issues (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  subject    text not null,
  preheader  text,
  body       text not null,
  status     text not null default 'rascunho' check (status in ('rascunho','enviando','enviada')),
  sent_at    timestamptz,
  sent_count int not null default 0,
  fail_count int not null default 0
);

alter table public.site_settings     enable row level security;
alter table public.media             enable row level security;
alter table public.articles          enable row level security;
alter table public.reading_refs      enable row level security;
alter table public.newsletter_issues enable row level security;

-- Ajustes de textos/imagens das páginas feitos no /admin (chave → valor). Sem linha = vale o original do código.
create table if not exists public.content_overrides (
  key        text primary key,
  value      text not null,
  updated_at timestamptz not null default now(),
  updated_by text
);
alter table public.content_overrides enable row level security;

-- SEO por página (título, descrição e imagem de compartilhamento), editável no /admin
create table if not exists public.page_seo (
  path        text primary key,
  title       text,
  description text,
  og_image_id uuid references public.media(id) on delete set null,
  noindex     boolean not null default false,
  updated_at  timestamptz not null default now()
);
alter table public.page_seo enable row level security;
