import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import type { Demo } from "@/config/demos";

/**
 * The sales close. Sits between the demo website and the footer so the visit
 * ends on a clear next step rather than a dead end.
 */
export function CrypticCta({ demo }: { demo: Demo }) {
  return (
    <section className="border-t border-white/10 bg-neutral-950 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-2xl text-center">
        <Image
          src="/cryptic-logo.png"
          alt={`${site.name} logo`}
          width={549}
          height={647}
          className="mx-auto h-8 w-auto select-none"
        />
        <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
          Website concept by {site.name}
        </p>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Want a website like this?
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-neutral-400">
          Every demo here was designed and built in-house. We can design and
          build the same thing for your business — tailored, not templated.
        </p>
        <Link
          href={site.contact.path}
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-50 px-7 text-[15px] font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
        >
          Let&rsquo;s build yours
          <span aria-hidden="true">→</span>
        </Link>
        <p className="mx-auto mt-9 max-w-xl text-xs leading-relaxed text-neutral-600">
          Demonstration website created by {site.name}. {demo.name} is a
          fictional business — its address, opening hours, prices and reviews
          are invented for this concept and do not refer to a real company.
        </p>
      </div>
    </section>
  );
}