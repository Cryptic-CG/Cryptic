import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { DemosShowcase } from "@/components/demos/DemosShowcase";
import { demos } from "@/config/demos";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Website Demos",
  description:
    "Explore examples of the websites we can design and build for real businesses.",
};

export default function DemosPage() {
  const lead = demos[0];

  return (
    <Container className="py-24 md:py-32">
      <SectionLabel>Website demos</SectionLabel>
      <h1 className="mt-5 max-w-3xl text-balance text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-zinc-50 sm:text-5xl lg:text-6xl">
        Website demos, built to sell.
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400">
        Explore examples of the websites we can design and build for real
        businesses.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        {lead && (
          <Button href={lead.route} size="lg">
            Open the featured demo
            <span aria-hidden="true">→</span>
          </Button>
        )}
        <Button href={site.contact.path} variant="secondary" size="lg">
          Start your project
        </Button>
      </div>

      <DemosShowcase className="mt-16" />

      <section className="mt-20 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 sm:p-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <SectionLabel>Next step</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Like what you see? That is the point.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400">
              Each demo is a complete, working website &mdash; not a screenshot.
              Open one, click through it, then tell us what you would change.
              We will build the same thing for your business, with your name,
              your content and your colours.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
              Businesses, addresses, prices and reviews shown in these demos are
              fictional and exist only to demonstrate design.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Button href={site.contact.path} size="lg">
              Let&rsquo;s build yours
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}