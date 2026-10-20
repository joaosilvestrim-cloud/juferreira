import { redirect } from "next/navigation";
import { connection } from "next/server";
import { sessionUser } from "@/lib/auth";

/** Para páginas do painel: sempre dinâmicas e só com sessão válida de usuário ativo. */
export async function requireAdminPage() {
  await connection();
  const user = await sessionUser();
  if (!user) redirect("/admin/login");
  return user;
}
