import { requireAdminPage } from "@/lib/admin-guard";
import { mediaUrl } from "@/lib/content";
import { db } from "@/lib/db";
import { deleteRef } from "../content-actions";
import { RefForm } from "./RefForm";

type Row = {
  id: string;
  section: "mesa" | "voltam";
  title: string;
  author: string | null;
  note: string | null;
  link: string | null;
  sort: number;
  visible: boolean;
  cover_id: string | null;
};

export default async function RefsAdmin() {
  await requireAdminPage();
  const { rows } = await db.query<Row>("select * from public.reading_refs order by section, sort, id");
  const groups = [
    { id: "mesa", title: "Na mesa agora", hint: "Até 3 leituras do momento, com capa e nota curta da Ju." },
    { id: "voltam", title: "Referências que voltam", hint: "4 a 6 referências estáveis (livro e autor)." },
  ] as const;
  return (
    <div className="mx-auto max-w-[1000px] px-5 py-10 sm:px-8">
      <h1 className="jf-display text-[44px]">Referências</h1>
      <p className="mt-1 max-w-[640px] text-[15px] text-ink-500">
        Repertório da página Ideias. Enquanto não houver referências cadastradas, o site mostra espaços “a definir”.
      </p>

      {groups.map((g) => {
        const list = rows.filter((r) => r.section === g.id);
        return (
          <section key={g.id} className="mt-12">
            <h2 className="font-serif text-[28px]">{g.title}</h2>
            <p className="text-[14px] text-ink-500">{g.hint}</p>
            <ul className="mt-5 space-y-3">
              {list.map((r) => (
                <li key={r.id} className="rounded-[14px] border border-ink-900/10 bg-cream-50 p-5">
                  <details>
                    <summary className="flex cursor-pointer flex-wrap items-center gap-3">
                      <span className="font-serif text-[20px]">{r.title}</span>
                      {r.author && <span className="text-[14px] text-ink-500">{r.author}</span>}
                      {!r.visible && <span className="rounded-full bg-cream-200 px-2.5 py-0.5 text-[12px]">Oculta</span>}
                      <span className="ml-auto text-[13px] text-red-brand">Editar</span>
                    </summary>
                    <div className="mt-5">
                      <RefForm r={{ ...r, id: Number(r.id), cover: mediaUrl(r.cover_id) }} />
                      <form action={deleteRef} className="mt-4">
                        <input type="hidden" name="id" value={r.id} />
                        <button className="text-[13px] text-red-deep hover:underline">Excluir</button>
                      </form>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-[14px] border border-dashed border-ink-900/25 p-5">
              <p className="mb-4 text-[15px] font-medium">Adicionar em “{g.title}”</p>
              <RefForm r={{ section: g.id }} />
            </div>
          </section>
        );
      })}
    </div>
  );
}
