"use client";

import { useEffect, useState } from "react";

export function CopyButton({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } finally {
        document.body.removeChild(el);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-50 px-7 text-[15px] font-medium text-zinc-950 transition-all duration-200 hover:-translate-y-px hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
    >
      {copied ? (
        <>
          Copied!
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 12.5 9.5 18 20 6.5" />
          </svg>
        </>
      ) : (
        <>
          {label}
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
        </>
      )}
    </button>
  );
}