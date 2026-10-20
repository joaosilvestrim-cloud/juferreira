import { notFound } from "next/navigation";
import { requireAdminPage } from "@/lib/admin-guard";
import { db } from "@/lib/db";
import { renderIssue } from "@/lib/newsletter";
import { deleteIssue } from "../../content-actions";
import { IssueEditor, IssueSend } from "../IssueForms";
import { ConfirmSubmit } from "../../_ui/ConfirmSubmit";
import { PageHeader } from "../../_ui/PageHeader";

export default async function IssuePage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdminPage();
  const { id } = await params;
  const isNew = id === "nova";
  let issue: { id: number; subject: string; preheader: string | null; body: string; status: string; sent_count: number } | null = null;
  if (!isNew) {
    const { rows } = await db.query("select * from public.newsletter_issues where id = $1", [Number(id) || 0]);
    if (!rows[0]) notFound();
    issue = { ...rows[0], id: Number(rows[0].id) };
  }
  const { rows: c } = await db.query<{ n: number }>("select count(*)::int as n from public.newsletter_subscribers where status = 'ativo'");
  const preview = issue ? renderIssue(issue, "voce@exemplo.com").html : null;
  const locked = issue && issue.status !== "rascunho";

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-10 sm:py-10">
      <PageHeader back={{ href: "/admin/newsletter", label: "Newsletter" }} title={isNew ? "Nova edição" : locked ? "Edição enviada" : "Editar edição"} />

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          {locked ? (
            <p className="rounded-[14px] bg-cream-50 p-6 text-[15px] text-ink-700">
              Esta edição foi enviada para {issue!.sent_count} pessoa(s) e não pode mais ser alterada.
            </p>
          ) : (
            <IssueEditor issue={issue ?? undefined} />
          )}
          {issue && !locked && (
            <>
              <IssueSend id={issue.id} subscribers={c[0]?.n ?? 0} />
              <form action={deleteIssue} className="mt-6">
                <input type="hidden" name="id" value={issue.id} />
                <ConfirmSubmit message="Excluir este rascunho?" className="text-[13px] text-red-deep hover:underline">
                  Excluir rascunho
                </ConfirmSubmit>
              </form>
            </>
          )}
        </div>
        <div>
          <p className="mb-3 text-[13px] uppercase tracking-[0.14em] text-ink-500">Prévia do e-mail</p>
          {preview ? (
            <iframe
              title="Prévia do e-mail"
              srcDoc={preview}
              sandbox=""
              className="h-[760px] w-full rounded-[14px] border border-ink-900/10 bg-cream-50"
            />
          ) : (
            <p className="rounded-[14px] border border-dashed border-ink-900/25 p-10 text-center text-ink-500">
              Salve o rascunho para ver a prévia.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
