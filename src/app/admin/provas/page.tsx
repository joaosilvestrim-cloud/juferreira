import { requireAdminPage } from "@/lib/admin-guard";
import { mediaUrl } from "@/lib/content";
import { db } from "@/lib/db";
import { deleteProof } from "../content-actions";
import { ConfirmSubmit } from "../_ui/ConfirmSubmit";
import { ProofForm, type ProofData } from "./ProofForm";
import { PageHeader } from "../_ui/PageHeader";
import { AddPanel } from "../_ui/AddPanel";

const KINDS = [
  { id: "depoimento", title: "Depoimentos", hint: "2 ou 3 depoimentos verificáveis (contratante, liderança, participante)." },
  { id: "foto", title: "Fotos de palco e eventos", hint: "2 a 4 fotos reais de palestras e workshops." },
  { id: "logo", title: "Organizações atendidas", hint: "Somente com autorização. Com logo (imagem) ou só o nome." },
] as const;

export default async function ProofAdmin() {
  await requireAdminPage();
  const { rows } = await db.query("select * from public.proof_items order by kind, sort, id");
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-10 sm:py-10">
      <PageHeader title="Provas" description="Seção “Ouça e veja a Ju” da página Palestras: depoimentos, fotos de palco e organizações. Vídeos ficam em “Vídeos e áudios”. Só aparece no site o que for cadastrado aqui; sem itens, a seção fica oculta." />
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
                          <ConfirmSubmit message="Excluir este item? Ele sai do site na hora." className="text-[13px] text-red-deep hover:underline">
                            Excluir
                          </ConfirmSubmit>
                        </form>
                      </div>
                    </details>
                  </li>
                );
              })}
            </ul>
            <AddPanel label={`Adicionar em “${k.title}”`}>
              <ProofForm d={{ kind: k.id }} />
            </AddPanel>
          </section>
        );
      })}
    </div>
  );
}
