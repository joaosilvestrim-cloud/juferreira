/** Envio dos formulários para as rotas /api/* (lado do cliente). */
export async function postJson(url: string, data: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, pageUrl: typeof window !== "undefined" ? window.location.href : undefined }),
    });
    const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    return { ok: Boolean(res.ok && json.ok), error: json.error };
  } catch {
    return { ok: false, error: "Sem conexão no momento. Verifique sua internet e tente de novo." };
  }
}

/** Converte FormData em objeto (campos repetidos — checkboxes — viram lista). */
export function formToObject(form: HTMLFormElement) {
  const out: Record<string, string | string[]> = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value !== "string") return;
    const prev = out[key];
    if (prev === undefined) out[key] = value;
    else out[key] = Array.isArray(prev) ? [...prev, value] : [prev, value];
  });
  return out;
}
