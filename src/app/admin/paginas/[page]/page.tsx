import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { PAGES, REGISTRY, sectionLabel } from "@/lib/page-registry";
import { BlockEditor } from "./BlockEditor";

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

  const sections = [...new Map(items.map((i) => [i.section, i.order])).entries()].sort((a, b) => a[1] - b[1]);

  return (
    <div className="mx-auto max-w-[1000px] px-5 py-10 sm:px-8">
      <Link href="/admin/paginas" className="text-[14px] text-ink-500 hover:underline">
        ← Páginas
      </Link>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h1 className="jf-display text-[44px]">{meta.name}</h1>
        <Link href={meta.path} target="_blank" className="text-[14px] text-red-brand hover:underline">
          Ver página no site
        </Link>
      </div>
      <p className="mt-1 max-w-[700px] text-[15px] text-ink-500">
        Os textos aparecem na ordem da página, bloco a bloco. Altere o que quiser e clique em “Salvar bloco”. Deixar um campo
        igual ao original (ou vazio) mantém o texto original.
      </p>

      <nav className="mt-6 flex flex-wrap gap-2" aria-label="Blocos da página">
        {sections.map(([s, o]) => (
          <a key={s} href={`#bloco-${s}`} className="rounded-full border border-ink-900/15 bg-cream-50 px-3 py-1.5 text-[13px] hover:border-red-brand">
            {sectionLabel(s, o)}
          </a>
        ))}
      </nav>

      <div className="mt-8 space-y-8">
        {sections.map(([s, o]) => (
          <section key={s} id={`bloco-${s}`} className="scroll-mt-24 rounded-[14px] border border-ink-900/10 bg-cream-50 p-6">
            <h2 className="font-serif text-[26px]">{sectionLabel(s, o)}</h2>
            <BlockEditor
              items={items
                .filter((i) => i.section === s)
                .sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)
                .map((i) => ({ key: i.key, kind: i.kind, original: i.text, value: ov[i.key] ?? null }))}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
