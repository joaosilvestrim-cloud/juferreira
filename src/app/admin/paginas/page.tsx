import Link from "next/link";
import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { PAGES, REGISTRY, sectionLabel } from "@/lib/page-registry";

type Search = Promise<Record<string, string | string[] | undefined>>;

export default async function PagesAdmin({ searchParams }: { searchParams: Search }) {
  await requireAdminPage();
  const q = String((await searchParams).q ?? "").trim();
  const { rows } = await db.query<{ key: string; value: string }>("select key, value from public.content_overrides");
  const ov = new Map(rows.map((r) => [r.key, r.value]));
  const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const hits = q
    ? REGISTRY.filter((r) => r.kind === "text" && (norm(r.text).includes(norm(q)) || norm(ov.get(r.key) ?? "").includes(norm(q)))).slice(0, 80)
    : [];

  return (
    <div className="mx-auto max-w-[1000px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">Páginas</h1>
      <p className="mt-1 max-w-[680px] text-[15px] text-ink-500">
        Todos os textos e fotos das 8 páginas. Edite qualquer frase ou troque qualquer imagem; dá sempre para voltar ao original.
      </p>

      <form className="mt-8 flex gap-3">
        <input
          name="q"
          defaultValue={q}
          placeholder="Procurar uma frase em todo o site…"
          className="min-h-12 flex-1 rounded-full border border-ink-900/20 bg-cream-50 px-5 text-[15px] focus:border-red-brand focus:outline-none"
        />
        <button className="min-h-12 rounded-full bg-ink-900 px-6 text-[15px] text-cream-50">Buscar</button>
      </form>

      {q && (
        <section className="mt-6">
          <p className="text-[14px] text-ink-500">
            {hits.length} resultado(s) para “{q}”{hits.length === 80 ? " (mostrando os 80 primeiros)" : ""}
          </p>
          <ul className="mt-3 divide-y divide-ink-900/10 rounded-[14px] border border-ink-900/10 bg-cream-50">
            {hits.map((h) => {
              const page = PAGES.find((p) => p.id === h.page)!;
              return (
                <li key={h.key} className="px-5 py-3">
                  <Link href={`/admin/paginas/${h.page}#t-${h.key.split("/")[1]}`} className="block hover:text-red-brand">
                    <span className="text-[12px] uppercase tracking-[0.12em] text-ink-500">
                      {page.name} · {sectionLabel(h.section, h.order)}
                    </span>
                    <span className="mt-0.5 line-clamp-2 block text-[15px]">{ov.get(h.key) ?? h.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {PAGES.map((p) => {
          const items = REGISTRY.filter((r) => r.page === p.id);
          const edited = items.filter((r) => ov.has(r.key)).length;
          return (
            <li key={p.id}>
              <Link
                href={`/admin/paginas/${p.id}`}
                className="block rounded-[14px] border border-ink-900/10 bg-cream-50 p-6 transition-colors hover:border-red-brand"
              >
                <p className="font-serif text-[26px]">{p.name}</p>
                <p className="mt-1 text-[14px] text-ink-500">
                  {items.filter((i) => i.kind === "text").length} textos · {items.filter((i) => i.kind === "image").length} imagens
                  {edited > 0 && <span className="text-red-brand"> · {edited} ajustado(s)</span>}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
