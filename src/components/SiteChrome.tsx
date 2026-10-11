"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

/**
 * Demo websites are self-contained experiences — they ship their own
 * navigation, footer and Cryptic demo bar, so the studio chrome is hidden on
 * `/demos/<slug>` and shown everywhere else.
 */
const DEMO_DETAIL = /^\/demos\/[^/]+\/?$/;

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (DEMO_DETAIL.test(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}