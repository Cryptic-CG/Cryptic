export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500 ${className}`}
    >
      {children}
    </p>
  );
}