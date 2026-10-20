"use client";

import { useActionState, useState } from "react";
import { login, type LoginState } from "../actions";

export function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(login, {});
  const [show, setShow] = useState(false);
  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="block text-[15px] font-medium">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          placeholder="voce@juferreira.com.br"
          className="mt-2 min-h-[52px] w-full rounded-[10px] border border-ink-900/20 bg-cream-50 px-4 text-[16px] focus:border-red-brand focus:outline-none"
        />
        <p className="mt-1.5 text-[13px] text-ink-500">Quem usa a senha mestra deixa o e-mail em branco.</p>
      </div>
      <div>
        <label htmlFor="password" className="block text-[15px] font-medium">
          Senha
        </label>
        <div className="relative mt-2">
          <input
            id="password"
            name="password"
            type={show ? "text" : "password"}
            required
            autoComplete="current-password"
            className="min-h-[52px] w-full rounded-[10px] border border-ink-900/20 bg-cream-50 px-4 pr-24 text-[16px] focus:border-red-brand focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-[13px] text-ink-500 hover:text-red-brand"
            aria-pressed={show}
          >
            {show ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </div>
      {state.error && (
        <p role="alert" className="rounded-[10px] bg-blush-100 px-4 py-3 text-[15px] text-red-deep">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="jf-btn inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-red-brand px-7 text-[16px] text-cream-50 hover:bg-red-deep disabled:opacity-70"
      >
        {pending ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
