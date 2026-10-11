"use client";

import { useEffect, useRef, type ReactNode } from "react";

const HIDDEN = "translate-y-5 opacity-0";

/**
 * Restrained scroll reveal. Content is server-rendered visible and only dimmed
 * once the browser confirms it sits below the fold, so nothing is ever hidden
 * without JavaScript.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const box = node.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.92 && box.bottom > 0) {
      return;
    }

    node.classList.add(...HIDDEN.split(" "));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.remove(...HIDDEN.split(" "));
            observer.disconnect();
          }
        }
      },
      { threshold: 0.02, rootMargin: "0px 0px 25% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    >
      {children}
    </div>
  );
}