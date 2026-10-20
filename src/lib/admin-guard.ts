import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { isValidSession, SESSION_COOKIE } from "@/lib/auth";

/** Para páginas do painel: sempre dinâmicas e só com sessão válida. */
export async function requireAdminPage() {
  await connection();
  if (!isValidSession((await cookies()).get(SESSION_COOKIE)?.value)) redirect("/admin/login");
}
