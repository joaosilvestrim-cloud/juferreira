import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminNav } from "./_ui/AdminNav";

export const metadata: Metadata = {
  title: "Painel",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-cream-100" data-admin="">
      <Suspense fallback={null}>
        <AdminNav />
      </Suspense>
      <Suspense fallback={<p className="p-10 text-ink-500">Carregando…</p>}>{children}</Suspense>
    </div>
  );
}
