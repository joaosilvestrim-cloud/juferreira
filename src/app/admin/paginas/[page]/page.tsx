import { notFound } from "next/navigation";
import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { PAGES, REGISTRY, sectionLabel } from "@/lib/page-registry";
import { richToPlain } from "@/lib/rich-inline";
import { restoreHistory, toggleBlock } from "../../more-actions";
import { BlockEditor } from "./BlockEditor";
import { AdminButton, PageHeader } from "../../_ui/PageHeader";

export default async function PageEditor({ params }: { params: Promise<{ page: string }> }) {
  await requireAdminPage();
  const { page } = await params;
  const meta = PAGES.find((p) => p.id === page);
  if (!meta) notFound();
  const items = REGISTRY.filter((r) => r.page === page);
  const { rows } = await db.query<{ key: string; value: string; updated_at: Date; updated_by: string | null }>(
    "select key, value, updated_at, updated_by from public.content_overrides where key like $1",
    [`${page}/%`],
  );
  const ov = Object.fromEntries(rows.map((r) => [r.key, r.value]));
  const sectionNames = [...new Set(items.map((i) => i.section))];
  const { rows: hiddenRows } = await db.query<{ key: string }>("select key from public.content_overrides where key = any($1)", [
    sectionNames.map((s) => `hide:${s}`),
  ]);
  const hidden = new Set(hiddenRows.map((r) => r.key.slice(5)));
  // histórico recente (textos, imagens e visibilidade) desta página
  const { rows: hist } = await db.query<{ id: string; key: string; old_value: string | null; new_value: string | null; changed_at: Date; changed_by: string | null }>(
    "select id, key, old_value, new_value, changed_at, changed_by from public.content_history where key like $1 or key = any($2) order by changed_at desc limit 200",
    [`${page}/%`, sectionNames.map((s) => `hide:${s}`)],
  );
  const sectionOf = new Map(items.map((i) => [i.key, i.section]));
  const originalOf = new Map(items.map((i) => [i.key, i.text]));
  const fmt = (d: Date) => d.toLocaleString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
  const short = (v: string | null, key: string) => {
    if (key.startsWith("hide:")) return v === "1" ? "oculto" : "visível";
    const t = richToPlain(v ?? `${originalOf.get(key) ?? ""} (original)`);
    return t.startsWith("/midia/") ? "imagem enviada" : t.length > 90 ? t.slice(0, 90) + "…" : t;
  };

  const sections = [...new Map(items.map((i) => [i.section, i.order])).entries()].sort((a, b) => a[1] - b[1]);

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-10 sm:py-10">
      <PageHeader
        back={{ href: "/admin/paginas", label: "Páginas" }}
        title={meta.name}
        description="Os textos aparecem na ordem da página, bloco a bloco. Altere o que quiser e clique em “Salvar bloco” (ou Ctrl+S). Deixar um campo igual ao original, ou vazio, mantém o texto original."
        actions={
          <AdminButton href={meta.path} variant="secondary">
            Ver página no site ↗
          </AdminButton>
        }
      />

      <nav className="mt-6 flex flex-wrap gap-2" aria-label="Blocos da página">
        {sections.map(([s, o]) => (
          <a key={s} href={`#bloco-${s}`} className="rounded-full border border-ink-900/15 bg-cream-50 px-3 py-1.5 text-[13px] hover:border-red-brand">
            {sectionLabel(s, o)}
            {hidden.has(s) && " · oculto"}
          </a>
        ))}
      </nav>

      <div className="mt-8 space-y-8">
        {sections.map(([s, o]) => (
          <section
            key={s}
            id={`bloco-${s}`}
            className={`scroll-mt-24 rounded-[14px] border p-6 ${hidden.has(s) ? "border-dashed border-ink-900/30 bg-cream-100" : "border-ink-900/10 bg-cream-50"}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-serif text-[26px]">
                {sectionLabel(s, o)}
                {hidden.has(s) && <span className="ml-3 rounded-full bg-ink-900 px-2.5 py-0.5 align-middle font-sans text-[12px] text-cream-50">Oculto no site</span>}
              </h2>
              <form action={toggleBlock}>
                <input type="hidden" name="section" value={s} />
                <input type="hidden" name="hide" value={hidden.has(s) ? "0" : "1"} />
                <button
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] ${
                    hidden.has(s) ? "border-red-brand bg-red-brand text-cream-50 hover:bg-red-deep" : "border-ink-900/25 hover:border-red-brand"
                  }`}
                >
                  {hidden.has(s) ? "Mostrar no site" : "Ocultar este bloco"}
                </button>
              </form>
            </div>
            <BlockEditor
              items={items
                .filter((i) => i.section === s)
                .sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)
                .map((i) => ({ key: i.key, kind: i.kind, original: i.text, value: ov[i.key] ?? null, role: i.role, group: i.group, em: i.em }))}
            />
            {(() => {
              const h = hist.filter((x) => (x.key.startsWith("hide:") ? x.key.slice(5) === s : sectionOf.get(x.key) === s)).slice(0, 10);
              if (!h.length) return null;
              return (
                <details className="mt-6 rounded-[10px] border border-ink-900/10 bg-cream-100 px-4 py-3">
                  <summary className="text-[14px] font-medium">Histórico de alterações ({h.length})</summary>
                  <ul className="mt-3 divide-y divide-ink-900/10 text-[13px]">
                    {h.map((x) => (
                      <li key={x.id} className="flex flex-wrap items-start gap-x-4 gap-y-1 py-2">
                        <span className="w-28 shrink-0 text-ink-500">{fmt(x.changed_at)}</span>
                        <span className="min-w-0 flex-1">
                          <span className="text-ink-500 line-through">{short(x.old_value, x.key)}</span>
                          <span className="mx-1.5 text-ink-500">→</span>
                          <span>{short(x.new_value, x.key)}</span>
                          {x.changed_by && <span className="ml-2 text-ink-500">· {x.changed_by}</span>}
                        </span>
                        <form action={restoreHistory}>
                          <input type="hidden" name="id" value={x.id} />
                          <button className="text-red-brand hover:underline">Desfazer</button>
                        </form>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            })()}
          </section>
        ))}
      </div>
    </div>
  );
}
