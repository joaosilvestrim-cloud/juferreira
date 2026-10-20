import Image from "next/image";
import { LoginForm } from "./LoginForm";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-ink-900 px-5 py-10">
      <div className="w-full max-w-[420px] rounded-[18px] bg-cream-50 p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] sm:p-10">
        <Image src="/brand/logo-ju-ferreira.svg" alt="Ju Ferreira" width={1040} height={720} unoptimized priority className="h-14 w-auto" />
        <h1 className="jf-display mt-6 text-[36px] leading-none">Painel do site</h1>
        <p className="mt-2 text-[15px] text-ink-500">Textos, fotos, vídeos, artigos, newsletter e contatos.</p>
        <LoginForm />
      </div>
    </main>
  );
}
