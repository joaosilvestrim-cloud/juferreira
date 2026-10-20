import { requireAdminPage } from "@/lib/admin-guard";
import { mediaUrl } from "@/lib/content";
import { db } from "@/lib/db";
import { deleteProof } from "../content-actions";
import { ProofForm, type ProofData } from "./ProofForm";

const KINDS = [
  { id: "depoimento", title: "Depoimentos", hint: "2 ou 3 depoimentos verificáveis (contratante, liderança, participante)." },
  { id: "video", title: "Vídeos", hint: "Link do YouTube, do Vimeo ou de um arquivo .mp4 (ideal: trecho de 60 a 90 segundos)." },
  { id: "foto", title: "Fotos de palco e eventos", hint: "2 a 4 fotos reais de palestras e workshops." },
  { id: "logo", title: "Organizações atendidas", hint: "Somente com autorização. Com logo (imagem) ou só o nome." },
] as const;

export default async function ProofAdmin() {
  await requireAdminPage();
  const { rows } = await db.query("select * from public.proof_items order by kind, sort, id");
  return (
    <div className="mx-auto max-w-[1000px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">Provas</h1>
      <p className="mt-1 max-w-[680px] text-[15px] text-ink-500">
        Seção “Ouça e veja a Ju” da página Palestras. Só aparece no site o que for cadastrado aqui; sem itens, a seção fica oculta.
      </p>
      {KINDS.map((k) => {
        const list = rows.filter((r) => r.kind === k.id);
        return (
          <section key={k.id} className="mt-12">
            <h2 className="font-serif text-[28px]">{k.title}</h2>
            <p className="text-[14px] text-ink-500">{k.hint}</p>
            <ul className="mt-5 space-y-3">
              {list.map((r) => {
                const d: ProofData = { ...r, id: Number(r.id), image: mediaUrl(r.media_id) };
                return (
                  <li key={r.id} className="rounded-[14px] border border-ink-900/10 bg-cream-50 p-5">
                    <details>
                      <summary className="flex flex-wrap items-center gap-3">
                        <span className="font-serif text-[19px]">{r.title || r.quote?.slice(0, 60) || r.url}</span>
                        {!r.visible && <span className="rounded-full bg-cream-200 px-2.5 py-0.5 text-[12px]">Oculto</span>}
                        <span className="ml-auto text-[13px] font-medium text-red-brand">Editar</span>
                      </summary>
                      <div className="mt-5">
                        <ProofForm d={d} />
                        <form action={deleteProof} className="mt-4">
                          <input type="hidden" name="id" value={r.id} />
                          <button className="text-[13px] text-red-deep hover:underline">Excluir</button>
                        </form>
                      </div>
                    </details>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 rounded-[14px] border border-dashed border-ink-900/25 p-5">
              <p className="mb-4 text-[15px] font-medium">Adicionar em “{k.title}”</p>
              <ProofForm d={{ kind: k.id }} />
            </div>
          </section>
        );
      })}
    </div>
  );
}
