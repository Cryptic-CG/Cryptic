import Link from "next/link";
import type { ReactNode } from "react";
import type { DemoNavLink } from "./DemoSiteNav";

export interface DemoFooterColumn {
  title: string;
  items: DemoNavLink[];
}

export interface DemoSiteFooterProps {
  brand: ReactNode;
  columns: DemoFooterColumn[];
  legal: ReactNode;
  className?: string;
  innerClassName?: string;
  titleClassName?: string;
  linkClassName?: string;
  legalClassName?: string;
}

/** Shared footer shell for the demo websites. Styling is supplied per demo. */
export function DemoSiteFooter({
  brand,
  columns,
  legal,
  className = "",
  innerClassName = "",
  titleClassName = "",
  linkClassName = "",
  legalClassName = "",
}: DemoSiteFooterProps) {
  return (
    <footer className={`px-5 py-14 sm:px-8 ${className}`}>
      <div
        className={`mx-auto w-full max-w-[1200px] ${innerClassName}`}
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            {brand}
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2
                className={`font-mono text-[10px] font-medium uppercase tracking-[0.28em] ${titleClassName}`}
              >
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      className={`inline-block text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${linkClassName}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`mt-12 border-t pt-7 text-[13px] leading-relaxed ${legalClassName}`}>
          {legal}
        </div>
      </div>
    </footer>
  );
}