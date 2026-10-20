"use client";

import { useState } from "react";

type Img = { id: string; url: string; name: string };

/** Escolhe uma imagem já enviada (biblioteca). Grava o endereço no campo oculto `name`. */
export function LibraryPicker({ name, onPick }: { name: string; onPick?: (url: string) => void }) {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<Img[] | null>(null);
  const [picked, setPicked] = useState<string>("");
  const load = async () => {
    setOpen((o) => !o);
    if (list) return;
    const r = await fetch("/api/admin/midia");
    setList(r.ok ? await r.json() : []);
  };
  return (
    <div>
      <input type="hidden" name={picked ? name : undefined} value={picked} />
      <button type="button" onClick={load} className="text-[13px] text-red-brand hover:underline">
        {open ? "Fechar biblioteca" : "Escolher da biblioteca"}
      </button>
      {open && (
        <div className="mt-2 max-h-64 overflow-y-auto rounded-[10px] border border-ink-900/15 bg-cream-50 p-2">
          {list === null && <p className="p-2 text-[13px] text-ink-500">Carregando…</p>}
          {list?.length === 0 && <p className="p-2 text-[13px] text-ink-500">Nenhuma imagem enviada ainda. Use “Imagens” no menu.</p>}
          <ul className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {list?.map((i) => (
              <li key={i.id}>
                <button
                  type="button"
                  title={i.name}
                  onClick={() => {
                    setPicked(i.url);
                    onPick?.(i.url);
                  }}
                  className={`block w-full overflow-hidden rounded-md border-2 ${picked === i.url ? "border-red-brand" : "border-transparent hover:border-ink-900/30"}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={i.url} alt={i.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
