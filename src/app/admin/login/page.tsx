import { LoginForm } from "./LoginForm";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-5">
      <div className="w-full max-w-[420px] rounded-[18px] border border-ink-900/10 bg-cream-50 p-8 shadow-[0_30px_80px_-50px_rgba(24,20,17,0.6)] sm:p-10">
        <p className="jf-eyebrow text-red-brand">Ju Ferreira</p>
        <h1 className="jf-display mt-3 text-[40px]">Painel</h1>
        <p className="mt-2 text-[15px] text-ink-500">Contatos e inscritos da newsletter.</p>
        <LoginForm />
      </div>
    </main>
  );
}
