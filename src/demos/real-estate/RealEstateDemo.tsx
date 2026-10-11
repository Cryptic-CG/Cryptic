import { DM_Serif_Display, Manrope } from "next/font/google";
import Link from "next/link";
import { DemoArtwork } from "@/components/demos/DemoArtwork";
import { CrypticCta } from "@/demos/kit/CrypticCta";
import { CrypticDemoBar } from "@/demos/kit/CrypticDemoBar";
import { DemoSiteFooter } from "@/demos/kit/DemoSiteFooter";
import { DemoSiteNav } from "@/demos/kit/DemoSiteNav";
import { DemoContainer, DemoSection } from "@/demos/kit/primitives";
import { Reveal } from "@/demos/kit/Reveal";
import { ValuationForm } from "@/demos/real-estate/ValuationForm";
import { PropertySearch } from "@/demos/real-estate/PropertySearch";
import type { Demo } from "@/config/demos";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-demo-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-demo-body",
});

const NAV_LINKS = [
  { label: "Search", href: "#listings" },
  { label: "Buying", href: "#buying" },
  { label: "Selling", href: "#selling" },
  { label: "Team", href: "#team" },
];

const AGENTS = [
  {
    name: "Imogen Alder",
    role: "Founding partner",
    areas: "Westfields · Riverside",
    note: "Twenty years in the city, ten of them running her own practice before joining the firm.",
    initials: "IA",
  },
  {
    name: "Rowan Vance",
    role: "Senior negotiator",
    areas: "Old Town · Riverside",
    note: "Specialises in period conversions and leasehold apartments with complicated service charges.",
    initials: "RV",
  },
  {
    name: "Priya Sandhu",
    role: "Associate",
    areas: "North Quarter · Westfields",
    note: "Joined from surveying, which shows in the way she reads a floor plan.",
    initials: "PS",
  },
];

const BUYING_STEPS = [
  {
    no: "01",
    title: "Tell us what you are looking for",
    detail:
      "Not a list of requirements, a short conversation. Budget, commute, schools, how you actually want to live on a Tuesday evening.",
  },
  {
    no: "02",
    title: "We shortlist before you browse",
    detail:
      "Most of our buyers see four or five homes rather than forty. Everything we send has already been checked for problems.",
  },
  {
    no: "03",
    title: "Offers handled in-house",
    detail:
      "Chain length, survey flags and seller motivation are negotiated by the person who showed you the house.",
  },
  {
    no: "04",
    title: "After the keys",
    detail:
      "We keep a short list of builders, surveyors and solicitors we trust, and we will introduce you before you need them.",
  },
];

export function RealEstateDemo({ demo }: { demo: Demo }) {
  const theme = demo.theme;

  return (
    <div
      id="main"
      className={`${display.variable} ${body.variable} min-h-screen bg-[#f4f3ef] font-body text-[#1a1c1a]`}
    >
      <CrypticDemoBar demo={demo} />

      <DemoSiteNav
        brand={
          <span className="flex items-baseline gap-2.5">
            <span className="font-display text-[1.6rem] leading-none text-[#1a1c1a]">
              Alder &amp; Rowe
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#6b6f6a] uppercase">
              Est.
            </span>
          </span>
        }
        links={NAV_LINKS}
        cta={{ label: "Book a valuation", href: "#contact" }}
        barClassName="border-b border-[#e2ded6] bg-[#f4f3ef]/92 backdrop-blur-md"
        listClassName="text-[15px] font-medium"
        linkClassName="rounded-sm text-[#4c524d] transition-colors hover:text-[#20503d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20503d]"
        ctaClassName="bg-[#20503d] text-[14px] font-medium text-white transition-colors hover:bg-[#142f24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20503d]"
        panelClassName="border-t border-[#e2ded6] bg-[#f4f3ef]"
        panelLinkClassName="font-medium text-[#4c524d]"
      />

      {/* --------------------------------------------------------- Hero */}
      <DemoSection>
        <DemoContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#20503d]">
                Residential sales · Fictional agency
              </p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.02] tracking-[-0.02em] text-[#1a1c1a] sm:text-6xl">
                Homes worth
                <br />
                <span className="italic">staying in.</span>
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#5c625d]">
                We are a small brokerage working across four neighbourhoods. We
                would rather show you four good homes than forty listings, and
                we would rather you bought the right one than the fast one.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#listings"
                  className="inline-flex h-12 items-center gap-2 bg-[#20503d] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#142f24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20503d]"
                >
                  See what is available
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center border border-[#1a1c1a]/20 px-7 text-[15px] font-medium text-[#1a1c1a] transition-colors hover:border-[#1a1c1a]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20503d]"
                >
                  Book a valuation
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-6">
            <figure>
              <div className="overflow-hidden border border-[#e2ded6]">
                <DemoArtwork
                  motif="facade"
                  variant={0}
                  theme={theme}
                  alt="Illustration of a residential street with apartment buildings"
                  className="aspect-[16/10] w-full"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9a958a]">
                Westfields · illustrated for this concept
              </figcaption>
            </figure>
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Listings */}
      <DemoSection id="listings" className="border-y border-[#e2ded6] bg-white">
        <DemoContainer className="py-16 lg:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#20503d]">
                  Search
                </p>
                <h2 className="mt-4 text-3xl text-[#1a1c1a] sm:text-[2.75rem]">
                  Available homes
                </h2>
              </div>
              <p className="max-w-md border-l-2 border-[#20503d] pl-4 text-[14px] leading-relaxed text-[#6b6f6a]">
                Demonstration listings. Every address, price and description
                below was invented by Cryptic — no property is actually for
                sale.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <PropertySearch theme={theme} />
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------- Buying */}
      <DemoSection id="buying" className="border-b border-[#e2ded6]">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#20503d]">
              Buying
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl text-[#1a1c1a] sm:text-[2.75rem]">
              How we work with buyers
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {BUYING_STEPS.map((step, index) => (
              <Reveal key={step.no} delay={index * 90}>
                <div className="border-t border-[#e2ded6] pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#9a958a]">
                      {step.no}
                    </span>
                    <h3 className="font-display text-2xl leading-snug text-[#1a1c1a]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-md pl-[3.1rem] text-[15px] leading-relaxed text-[#5c625d]">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Selling */}
      <DemoSection id="selling" className="border-b border-[#e2ded6] bg-[#1a1c1a]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#9cbf9f]">
                Selling
              </p>
              <h2 className="mt-4 text-3xl text-white sm:text-[2.75rem]">
                Thinking of selling?
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/65">
                Valuations are free and we will talk you out of selling if the
                timing is wrong. You get the number, the comparable evidence
                behind it, and an honest view of how long it might take.
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-white/70">
                {[
                  "A written valuation within two working days",
                  "Photography, floor plans and a listing page included",
                  "Agreed fee only once an offer is accepted",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-[#9cbf9f]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <ValuationForm tone="dark" />
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      {/* --------------------------------------------------------- Team */}
      <DemoSection id="team" className="border-b border-[#e2ded6] bg-white">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#20503d]">
              The agency
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl text-[#1a1c1a] sm:text-[2.75rem]">
              Three people, one office
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#5c625d]">
              Everyone here negotiates their own files. You will not be handed
              to a junior after the viewing.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {AGENTS.map((agent, index) => (
              <Reveal key={agent.name} delay={index * 100}>
                <article className="flex h-full flex-col border border-[#e2ded6] p-7">
                  <div
                    aria-hidden="true"
                    className="grid h-16 w-16 place-items-center bg-[#f4f3ef] font-display text-2xl text-[#20503d]"
                  >
                    {agent.initials}
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-[#1a1c1a]">
                    {agent.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6f6a]">
                    {agent.role}
                  </p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#5c625d]">
                    {agent.note}
                  </p>
                  <p className="mt-5 border-t border-[#eceae4] pt-4 text-[13px] uppercase tracking-[0.14em] text-[#20503d]">
                    {agent.areas}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Contact */}
      <DemoSection id="contact">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#20503d]">
                Get in touch
              </p>
              <h2 className="mt-4 text-3xl text-[#1a1c1a] sm:text-[2.75rem]">
                Come and see us
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-[#5c625d]">
                The office is on the ground floor of a converted shopfront on
                Hallam Street. There is usually tea on.
              </p>
              <dl className="mt-10 space-y-6">
                {[
                  ["Office", "18 Hallam Street, Old Town (fictional)"],
                  ["Opening", "Monday – Friday, 09:00 – 17:30\nSaturday, 10:00 – 14:00"],
                  ["Areas", "Westfields · Old Town · Riverside · North Quarter"],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-[#e2ded6] pt-5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6f6a]">
                      {label}
                    </dt>
                    <dd className="mt-2 text-[15px] whitespace-pre-line text-[#1a1c1a]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={110}>
              <ValuationForm
                title="Ask us anything"
                cta="Send enquiry"
                tone="light"
              />
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      <DemoSiteFooter
        brand={
          <div>
            <p className="font-display text-2xl text-white">Alder &amp; Rowe</p>
            <p className="mt-3 max-w-[26ch] text-[13px] leading-relaxed text-white/50">
              An independent residential brokerage working across four
              neighbourhoods of one fictional city.
            </p>
          </div>
        }
        columns={[
          {
            title: "Buy",
            items: [
              { label: "Available homes", href: "#listings" },
              { label: "How we work", href: "#buying" },
              { label: "The team", href: "#team" },
            ],
          },
          {
            title: "Sell",
            items: [
              { label: "Book a valuation", href: "#selling" },
              { label: "Our approach", href: "#selling" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "More demos",
            items: [
              { label: "All Cryptic demos", href: "/demos" },
              { label: "Home service demo", href: "/demos/home-service" },
              { label: "Barbershop demo", href: "/demos/barbershop" },
            ],
          },
        ]}
        className="border-t border-[#e2ded6] bg-white"
        titleClassName="text-[#6b6f6a]"
        linkClassName="text-[#5c625d] hover:text-[#20503d]"
        legalClassName="border-[#e2ded6] text-[#9a958a]"
        legal={
          <p>
            Alder &amp; Rowe is a fictional agency created by{" "}
            <Link href="/demos" className="underline underline-offset-4 hover:text-[#5c625d]">
              Cryptic
            </Link>{" "}
            to demonstrate a real estate website. All listings, agents,
            addresses and prices on this page are invented, and no property is
            actually for sale.
          </p>
        }
      />

      <CrypticCta demo={demo} />
    </div>
  );
}