import type { ReactNode } from "react";

export function DemoContainer({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function DemoSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      {children}
    </section>
  );
}

export function DemoEyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.28em] ${className}`}
    >
      {children}
    </p>
  );
}