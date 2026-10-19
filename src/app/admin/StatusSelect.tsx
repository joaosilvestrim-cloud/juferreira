"use client";

/** Select que salva o status assim que muda (envia o form do server action). */
export function StatusSelect({
  name = "status",
  value,
  options,
  label,
}: {
  name?: string;
  value: string;
  options: { value: string; label: string }[];
  label: string;
}) {
  return (
    <select
      name={name}
      defaultValue={value}
      aria-label={label}
      onChange={(e) => e.currentTarget.form?.requestSubmit()}
      className="min-h-10 rounded-full border border-ink-900/20 bg-cream-50 px-3 text-[14px] focus:border-red-brand focus:outline-none"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
