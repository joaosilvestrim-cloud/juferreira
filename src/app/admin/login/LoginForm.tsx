"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../actions";

export function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(login, {});
  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="block text-[15px] font-medium">
          E-mail <span className="font-normal text-ink-500">(vazio = senha mestra)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          className="mt-2 min-h-[52px] w-full rounded-[10px] border border-ink-900/20 bg-cream-50 px-4 text-[16px] focus:border-red-brand focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-[15px] font-medium">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-2 min-h-[52px] w-full rounded-[10px] border border-ink-900/20 bg-cream-50 px-4 text-[16px] focus:border-red-brand focus:outline-none"
        />
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
