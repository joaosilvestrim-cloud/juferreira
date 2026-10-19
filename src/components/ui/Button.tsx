import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

type Variant = "primary" | "secondary" | "ghost-light" | "link";

const styles: Record<Variant, string> = {
  primary: "bg-red-brand text-cream-50 hover:bg-red-deep border border-transparent",
  secondary: "border border-ink-900/70 text-ink-900 hover:bg-ink-900 hover:text-cream-50",
  "ghost-light": "border border-cream-50/70 text-cream-50 hover:bg-cream-50 hover:text-ink-900",
  link: "",
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: "md" | "lg" | "sm";
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", size = "md", className = "", children, ...rest }: Props) {
  if (variant === "link") {
    return (
      <Link
        {...rest}
        className={`group inline-flex items-center gap-2 border-b border-current pb-0.5 text-[15px] font-medium text-red-brand ${className}`}
      >
        {children}
        <ArrowIcon />
      </Link>
    );
  }
  const sizes = {
    sm: "min-h-11 px-5 text-[14px] gap-3",
    md: "min-h-[52px] px-7 text-[16px] gap-4",
    lg: "min-h-[60px] px-9 text-[17px] gap-5",
  };
  return (
    <Link
      {...rest}
      className={`jf-btn group inline-flex items-center justify-between rounded-full py-2 text-left leading-tight transition-colors duration-300 ${sizes[size]} ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}

export function ButtonRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 ${className}`}>{children}</div>;
}
