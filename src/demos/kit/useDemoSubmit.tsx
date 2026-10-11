"use client";

import { useState, type FormEvent } from "react";

/**
 * Demo forms never submit anywhere. They confirm locally so the interaction is
 * honest: visitors see the flow without any information being sent.
 */
export function useDemoSubmit() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return { sent, handleSubmit };
}

export function DemoField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
        {label}
      </span>
      {children}
    </label>
  );
}

export function DemoFormSent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      role="status"
      className={`flex items-start gap-2 border px-4 py-3 text-sm leading-relaxed ${className}`}
    >
      <span aria-hidden="true">✓</span>
      <span>{children}</span>
    </p>
  );
}