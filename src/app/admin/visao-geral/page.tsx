import Link from "next/link";
import { requireAdminPage } from "@/lib/admin-guard";
import { MEDIA_PLACEMENTS, readSettings } from "@/lib/content";
import { db } from "@/lib/db";
import { uploadProvider } from "@/lib/storage";
import { PAGES, REGISTRY, sectionLabel } from "@/lib/page-registry";

type Check = { ok: boolean; label: string; detail: string; href: string; action: string };

export default async function Overview() {
  const user = await requireAdminPage();
  const q = async (sql: string) => Number((await db.query<{ n: string }>(sql)).rows[0].n);
  const [s, newContacts, totalContacts, subs, published, drafts, sent, testimonials, refs, edited, hiddenRows, media, history] = await Promise.all([
    readSettings(),
    q("select count(*) n from public.contact_submissions where status = 'novo'"),
    q("select count(*) n from public.contact_submissions"),
    q("select count(*) n from public.newsletter_subscribers where status = 'ativo'"),
    q("select count(*) n from public.articles where status = 'publicado'"),
    q("select count(*) n from public.articles where status = 'rascunho'"),
    q("select count(*) n from public.newsletter_issues where status = 'enviada'"),
    q("select count(*) n from public.proof_items where kind = 'depoimento' and visible"),
    q("select count(*) n from public.reading_refs where visible"),
    q("select count(*) n from public.content_overrides where key not like 'hide:%'"),
    db.query<{ key: string }>("select key from public.content_overrides where key like 'hide:%'"),
    db.query<{ placements: string[] }>("select placements from public.media_items where visible"),
    db.query<{ key: string; changed_at: Date; changed_by: string | null }>(
      "select key, changed_at, changed_by from public.content_history order by changed_at desc limit 8",
    ),
  ]);
  const mediaIn = (p: string) => media.rows.filter((m) => m.placements.includes(p)).length;
  const provider = uploadProvider();

  const checks: Check[] = [
    { ok: Boolean(s.email), label: "E-mail de contato", detail: s.email || "Não preenchido", href: "/admin/configuracoes", action: "Preencher" },
    { ok: Boolean(s.whatsapp), label: "WhatsApp", detail: s.whatsapp ? "Preenchido" : "Sem WhatsApp, o botão não aparece no site", href: "/admin/configuracoes", action: "Preencher" },
    { ok: Boolean(s.linkedin || s.linkedin_page), label: "LinkedIn", detail: s.linkedin || s.linkedin_page ? "Preenchido" : "Não aparece no site", href: "/admin/configuracoes", action: "Preencher" },
    { ok: Boolean(s.instagram), label: "Instagram", detail: s.instagram ? "Preenchido" : "Não aparece no site", href: "/admin/configuracoes", action: "Preencher" },
    { ok: Boolean(s.wtf_url), label: "Site da What The Future?!", detail: s.wtf_url ? "Preenchido" : "Os botões levam ao formulário de contato", href: "/admin/configuracoes", action: "Preencher" },
    { ok: Boolean(s.epic247_url), label: "Site do EPIC247", detail: s.epic247_url || "Os botões levam ao formulário", href: "/admin/configuracoes", action: "Conferir" },
    {
      ok: mediaIn("palestras") > 0,
      label: "Vídeo em Palestras",
      detail: mediaIn("palestras") ? `${mediaIn("palestras")} em “Ouça e veja a Ju”` : "A principal pendência comercial: falta uma amostra da Ju falando",
      href: "/admin/videos",
      action: "Adicionar",
    },
    {
      ok: published + mediaIn("ideias") > 0,
      label: "Acervo em Ideias",
      detail: published + mediaIn("ideias") ? `${published} artigo(s) e ${mediaIn("ideias")} vídeo/áudio` : "Sem conteúdo publicado, o acervo fica oculto",
      href: "/admin/videos",
      action: "Adicionar",
    },
    { ok: sent > 0, label: "Newsletter", detail: `${subs} inscrito(s) ativo(s) · ${sent} edição(ões) enviada(s)`, href: "/admin/newsletter", action: "Abrir" },
    { ok: testimonials > 0, label: "Depoimentos", detail: testimonials ? `${testimonials} visível(is)` : "Nenhum (a seção só aparece com itens reais)", href: "/admin/provas", action: "Adicionar" },
    { ok: refs > 0, label: "Referências de leitura", detail: refs ? `${refs} visível(is)` : "Nenhuma (a lista fica oculta)", href: "/admin/referencias", action: "Adicionar" },
    { ok: provider !== null, label: "Envio de arquivos de vídeo e áudio", detail: provider === "supabase" ? "Ligado (Supabase Storage)" : "Desligado: falta a chave do Supabase Storage; links funcionam", href: "/admin/videos", action: "Ver" },
  ];
  const pending = checks.filter((c) => !c.ok).length;
  const hidden = hiddenRows.rows.map((r) => r.key.slice(5));
  const where = (key: string) => {
    const sec = key.startsWith("hide:") ? key.slice(5) : REGISTRY.find((r) => r.key === key)?.section;
    const item = REGISTRY.find((r) => r.section === sec);
    const page = PAGES.find((p) => p.id === item?.page);
    return { page, label: item ? `${page?.name ?? ""} · ${sectionLabel(item.section, item.order)}` : key };
  };
  const fmt = (d: Date) => d.toLocaleString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">Olá{user.name ? `, ${user.name.split(" ")[0]}` : ""}.</h1>
      <p className="mt-1 text-[15px] text-ink-500">Como o site está agora e o que ainda falta.</p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { n: newContacts, t: "Contatos novos", sub: `${totalContacts} no total`, href: "/admin" },
          { n: subs, t: "Inscritos na newsletter", sub: `${sent} edição(ões) enviada(s)`, href: "/admin/newsletter" },
          { n: published, t: "Artigos publicados", sub: `${drafts} rascunho(s)`, href: "/admin/artigos" },
          { n: media.rows.length, t: "Vídeos e áudios", sub: Object.entries(MEDIA_PLACEMENTS).map(([k, p]) => `${p.label} ${mediaIn(k)}`).join(" · "), href: "/admin/videos" },
        ].map((c) => (
          <li key={c.t}>
            <Link href={c.href} className="block h-full rounded-[14px] border border-ink-900/10 bg-cream-50 p-5 transition hover:border-red-brand">
              <p className="text-[12px] uppercase tracking-[0.14em] text-ink-500">{c.t}</p>
              <p className="mt-2 font-serif text-[40px] leading-none text-red-brand">{c.n}</p>
              <p className="mt-2 text-[13px] text-ink-500">{c.sub}</p>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h2 className="font-serif text-[28px]">
          Checklist do site <span className="ml-2 align-middle font-sans text-[14px] text-ink-500">{pending ? `${pending} pendência(s)` : "tudo em dia"}</span>
        </h2>
        <ul className="mt-5 divide-y divide-ink-900/10 rounded-[14px] border border-ink-900/10 bg-cream-50">
          {checks.map((c) => (
            <li key={c.label} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3.5">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] ${c.ok ? "bg-green-700 text-cream-50" : "border-2 border-red-brand text-red-brand"}`}
                aria-label={c.ok ? "ok" : "pendente"}
              >
                {c.ok ? "✓" : "!"}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium">{c.label}</span>
                <span className="block truncate text-[13px] text-ink-500">{c.detail}</span>
              </span>
              <Link href={c.href} className="rounded-full border border-ink-900/20 px-4 py-1.5 text-[13px] hover:border-red-brand hover:text-red-brand">
                {c.action}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="font-serif text-[24px]">Páginas</h2>
          <p className="mt-1 text-[14px] text-ink-500">
            {edited} texto(s)/foto(s) ajustado(s) no painel · {hidden.length} bloco(s) oculto(s)
          </p>
          {hidden.length > 0 && (
            <ul className="mt-3 space-y-1 text-[14px]">
              {hidden.map((h) => {
                const w = where(`hide:${h}`);
                return (
                  <li key={h}>
                    <Link href={`/admin/paginas/${w.page?.id ?? ""}#bloco-${h}`} className="text-red-brand hover:underline">
                      {w.label}
                    </Link>{" "}
                    <span className="text-ink-500">(oculto)</span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
        <section>
          <h2 className="font-serif text-[24px]">Últimas alterações</h2>
          {history.rows.length === 0 ? (
            <p className="mt-2 text-[14px] text-ink-500">Nenhuma alteração de texto ou foto ainda.</p>
          ) : (
            <ul className="mt-3 divide-y divide-ink-900/10 text-[14px]">
              {history.rows.map((h, i) => {
                const w = where(h.key);
                return (
                  <li key={i} className="flex flex-wrap gap-x-3 py-2">
                    <span className="w-28 shrink-0 text-ink-500">{fmt(h.changed_at)}</span>
                    <Link href={`/admin/paginas/${w.page?.id ?? ""}`} className="flex-1 hover:text-red-brand">
                      {w.label}
                    </Link>
                    <span className="text-ink-500">{h.changed_by}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
