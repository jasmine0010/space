export function PlaceholderBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm bg-accent/10 px-1.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent ${className}`}
    >
      Placeholder
    </span>
  );
}
