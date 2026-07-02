import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:text-accent ${className}`}
    >
      <span>{children}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:text-accent">
        <ArrowUpRight size={14} strokeWidth={1.5} />
      </span>
    </a>
  );
}
