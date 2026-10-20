import { requireAdminPage } from "@/lib/admin-guard";
import { mediaUrl, SEO_PAGES } from "@/lib/content";
import { db } from "@/lib/db";
import { SITE_URL } from "@/lib/site";
import { SeoForm } from "./SeoForm";

export default async function SeoPage() {
  await requireAdminPage();
  const { rows } = await db.query<{ path: string; title: string | null; description: string | null; og_image_id: string | null; noindex: boolean }>(
    "select path, title, description, og_image_id, noindex from public.page_seo",
  );
  const byPath = Object.fromEntries(rows.map((r) => [r.path, r]));
  return (
    <div className="mx-auto max-w-[900px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">SEO</h1>
      <p className="mt-1 max-w-[640px] text-[15px] text-ink-500">
        Como cada página aparece no Google e quando é compartilhada (LinkedIn, WhatsApp). Campos vazios usam o padrão do site.
      </p>
      <div className="mt-8 space-y-4">
        {SEO_PAGES.map((p) => {
          const s = byPath[p.path];
          return (
            <details key={p.path} className="rounded-[14px] border border-ink-900/10 bg-cream-50 p-5">
              <summary className="flex cursor-pointer flex-wrap items-center gap-3">
                <span className="font-serif text-[21px]">{p.name}</span>
                <span className="text-[13px] text-ink-500">{SITE_URL.replace(/^https?:\/\//, "")}{p.path}</span>
                {s && (s.title || s.description || s.og_image_id) && (
                  <span className="rounded-full bg-blush-100 px-2.5 py-0.5 text-[12px] text-red-deep">Personalizado</span>
                )}
              </summary>
              <div className="mt-5">
                <SeoForm
                  s={{
                    path: p.path,
                    title: s?.title ?? "",
                    description: s?.description ?? "",
                    noindex: s?.noindex ?? false,
                    og: mediaUrl(s?.og_image_id) ?? `${p.path === "/" ? "" : p.path}/opengraph-image`,
                    customOg: Boolean(s?.og_image_id),
                  }}
                />
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
