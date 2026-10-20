import { requireAdminPage } from "@/lib/admin-guard";
import { mediaUrl, SEO_PAGES } from "@/lib/content";
import { db } from "@/lib/db";
import { SITE_URL } from "@/lib/site";
import { SeoForm } from "./SeoForm";
import { PageHeader } from "../_ui/PageHeader";

export default async function SeoPage() {
  await requireAdminPage();
  const { rows } = await db.query<{ path: string; title: string | null; description: string | null; og_image_id: string | null; noindex: boolean }>(
    "select path, title, description, og_image_id, noindex from public.page_seo",
  );
  const byPath = Object.fromEntries(rows.map((r) => [r.path, r]));
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-10 sm:py-10">
      <PageHeader title="SEO" description="Como cada página aparece no Google e quando é compartilhada (LinkedIn, WhatsApp). Clique numa página para editar título, descrição e imagem de compartilhamento. Campos vazios usam o padrão do site." />
      <div className="mt-8 space-y-4">
        {SEO_PAGES.map((p) => {
          const s = byPath[p.path];
          return (
            <details key={p.path} className="rounded-[14px] border border-ink-900/10 bg-cream-50 px-5 py-4">
              <summary className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-serif text-[21px]">{p.name}</span>
                {s && (s.title || s.description || s.og_image_id) ? (
                  <span className="rounded-full bg-blush-100 px-2.5 py-0.5 text-[12px] text-red-deep">Personalizado</span>
                ) : (
                  <span className="rounded-full bg-cream-200 px-2.5 py-0.5 text-[12px] text-ink-700">Padrão do site</span>
                )}
                {s?.noindex && <span className="rounded-full bg-ink-900 px-2.5 py-0.5 text-[12px] text-cream-50">Fora do Google</span>}
                <span className="ml-auto text-[13px] font-medium text-red-brand">Editar</span>
                <span className="basis-full text-[13px] text-ink-500">{SITE_URL.replace(/^https?:\/\//, "")}{p.path}</span>
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
