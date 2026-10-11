import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { DemoArtwork } from "@/components/demos/DemoArtwork";
import { CrypticCta } from "@/demos/kit/CrypticCta";
import { CrypticDemoBar } from "@/demos/kit/CrypticDemoBar";
import { DemoSiteFooter } from "@/demos/kit/DemoSiteFooter";
import { DemoSiteNav } from "@/demos/kit/DemoSiteNav";
import { DemoContainer, DemoSection } from "@/demos/kit/primitives";
import { Reveal } from "@/demos/kit/Reveal";
import { FaqAccordion } from "@/demos/home-service/FaqAccordion";
import { QuoteForm } from "@/demos/home-service/QuoteForm";
import type { Demo } from "@/config/demos";

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-demo-body",
});

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Areas", href: "#areas" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  {
    title: "Regular cleaning",
    detail:
      "A fixed weekly or fortnightly visit with the same person each time. Same checklist every time, so nothing gets missed.",
    points: ["Kitchen and bathrooms", "Floors and surfaces", "Bins, beds, laundry basket"],
  },
  {
    title: "Deep cleaning",
    detail:
      "A one-off reset for homes that need more than a tidy. Skirting, inside appliances, grout, doors and the parts you never touch.",
    points: ["Everything in a regular visit", "Skirting and grout", "Inside oven and fridge"],
  },
  {
    title: "End of tenancy",
    detail:
      "Inventory-grade cleaning with a written checklist your letting agent can check off. Photographed before we leave.",
    points: ["Inventory checklist", "Oven, extractor, fridge", "Photo record on request"],
  },
  {
    title: "Kitchen & appliances",
    detail:
      "Degreasing, descaling and inside-the-door work on the appliances that quietly ruin a clean kitchen.",
    points: ["Extractor and hob degrease", "Descaling", "Appliance interiors"],
  },
  {
    title: "Handyman visits",
    detail:
      "Small repairs and fittings handled by the same visit: shelves, curtains, flat-pack, dripping taps, sticking doors.",
    points: ["Shelves and curtain rails", "Flat-pack assembly", "Minor repairs"],
  },
  {
    title: "Garden & exterior",
    detail:
      "Seasonal tidy-ups, path washing, bins and gutter clearing. Seasonal work booked as a one-off.",
    points: ["Path and patio washing", "Seasonal tidy", "Gutter clearing"],
  },
];

const REASONS = [
  {
    title: "The same cleaner, every time",
    detail:
      "You get a name and a face, not a rota. If someone is off sick we tell you before the visit, not after.",
  },
  {
    title: "Checked and insured",
    detail:
      "Every member of the team is interviewed in person, referenced and holds a current background check. Public liability cover on every visit.",
  },
  {
    title: "Priced before we start",
    detail:
      "A fixed price in writing once we know the property and the work. No hourly surprises, no upselling mid-visit.",
  },
  {
    title: "We bring everything",
    detail:
      "Products, cloths, mops and vacuum come with us. Tell us if you would prefer we used yours and we will.",
  },
];

const PROCESS = [
  {
    no: "01",
    title: "Tell us about the home",
    detail: "Size, rooms, pets, anything awkward. A photo of the kitchen is plenty.",
  },
  {
    no: "02",
    title: "Get a fixed price",
    detail: "Written and confirmed before any work starts. It does not move afterwards.",
  },
  {
    no: "03",
    title: "We clean, you check",
    detail: "You walk it when we finish. Anything missed, we do before we leave.",
  },
  {
    no: "04",
    title: "Set the rhythm",
    detail: "Weekly, fortnightly or one-off. Change or pause it any time, no notice needed.",
  },
];

const AREAS = [
  { name: "Ashenden", note: "Same-day slots" },
  { name: "Barrowfield", note: "Mon – Fri" },
  { name: "Crayford", note: "Mon – Sat" },
  { name: "Eastmoor", note: "Mon – Fri" },
  { name: "Fernleigh", note: "Mon – Sat" },
  { name: "Hartlow", note: "Emergency slots" },
  { name: "Kilnbrook", note: "Mon – Fri" },
  { name: "Marbury End", note: "Mon – Sat" },
  { name: "Northcott", note: "Same-day slots" },
  { name: "Osterley Vale", note: "Mon – Fri" },
];

const REVIEWS = [
  {
    quote:
      "Four years in and it has been the same two people every fortnight. That is worth more to me than anything else on the list.",
    name: "Sample review",
    detail: "Fictional customer · concept content",
  },
  {
    quote:
      "Quoted for the end of the tenancy and it landed exactly. Photos went straight to the letting agent the same evening.",
    name: "Sample review",
    detail: "Fictional customer · concept content",
  },
  {
    quote:
      "They turned up for an emergency clean the night before a viewing and did not make it feel rushed. The flat was immaculate.",
    name: "Sample review",
    detail: "Fictional customer · concept content",
  },
];

export function HomeServiceDemo({ demo }: { demo: Demo }) {
  const theme = demo.theme;

  return (
    <div
      id="main"
      className={`${body.variable} min-h-screen bg-[#fbfaf7] font-body text-[#12232b]`}
    >
      <CrypticDemoBar demo={demo} />

      <DemoSiteNav
        brand={
          <span className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 shrink-0 place-items-center bg-[#0e5c63] text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11.2 12 4l8 7.2" />
                <path d="M6.5 10v9.5h11V10" />
                <path d="M10.5 19.5v-5h3v5" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[17px] font-extrabold tracking-tight text-[#12232b]">
                Hollis
              </span>
              <span className="mt-1 font-mono text-[9px] tracking-[0.22em] text-[#0e5c63] uppercase">
                Home Services
              </span>
            </span>
          </span>
        }
        links={NAV_LINKS}
        cta={{ label: "Get a free quote", href: "#quote" }}
        barClassName="border-b border-[#e9e5dc] bg-[#fbfaf7]/92 backdrop-blur-md"
        listClassName="text-[14px] font-medium"
        linkClassName="rounded-sm text-[#5d6d75] transition-colors hover:text-[#0e5c63] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0e5c63]"
        ctaClassName="bg-[#0e5c63] text-[14px] font-semibold text-white transition-colors hover:bg-[#0a464b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e5c63]"
        panelClassName="border-t border-[#e9e5dc] bg-[#fbfaf7]"
        panelLinkClassName="font-medium text-[#5d6d75]"
      />

      {/* --------------------------------------------------------- Hero */}
      <DemoSection className="border-b border-[#e9e5dc]">
        <DemoContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex items-center gap-2 border border-[#0e5c63]/25 bg-[#0e5c63]/5 px-3 py-1.5 text-[12px] font-medium text-[#0e5c63]">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#0e5c63]" />
                Cleaning &amp; maintenance
              </p>
              <h1 className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-[#12232b] sm:text-5xl lg:text-[3.75rem]">
                A clean home,
                <br />
                without the runaround.
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#5d6d75]">
                Reliable weekly and fortnightly cleaning, plus the small repairs
                that never get done. One team, a fixed price in writing, and the
                same person at your door every time.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#quote"
                  className="inline-flex h-12 items-center gap-2 bg-[#0e5c63] px-7 text-[15px] font-semibold text-white transition-colors hover:bg-[#0a464b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e5c63]"
                >
                  Get a free quote
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex h-12 items-center border border-[#12232b]/15 px-7 text-[15px] font-semibold text-[#12232b] transition-colors hover:border-[#12232b]/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e5c63]"
                >
                  What we do
                </Link>
              </div>

              <ul className="mt-10 grid gap-3 border-t border-[#e9e5dc] pt-7 sm:grid-cols-3">
                {[
                  "Background-checked team",
                  "Fully insured",
                  "Fixed written price",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-[#5d6d75]">
                    <span
                      aria-hidden="true"
                      className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0e5c63]/10 text-[#0e5c63]"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-6">
            <figure>
              <div className="overflow-hidden rounded-2xl border border-[#e9e5dc]">
                <DemoArtwork
                  motif="roof"
                  variant={0}
                  theme={theme}
                  alt="Illustration of a family home"
                  className="aspect-[4/3] w-full"
                />
              </div>
              <figcaption className="mt-3 text-[13px] text-[#9aa5aa]">
                Illustration for this demonstration site — a live version would
                use photographs of real work.
              </figcaption>
            </figure>
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ----------------------------------------------------- Services */}
      <DemoSection id="services" className="border-b border-[#e9e5dc] bg-white">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#0e5c63]">
              What we do
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-[#12232b] sm:text-[2.75rem]">
              Cleaning and the small jobs that pile up
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-[#e9e5dc] bg-[#fbfaf7] p-7 transition-colors hover:border-[#0e5c63]/40 hover:bg-white">
                  <h3 className="text-[19px] font-bold tracking-tight text-[#12232b]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5d6d75]">
                    {service.detail}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-[#e9e5dc] pt-5">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2 text-[14px] text-[#5d6d75]">
                        <span aria-hidden="true" className="text-[#0e5c63]">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ---------------------------------------------------- Why us */}
      <DemoSection id="why" className="border-b border-[#e9e5dc]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#0e5c63]">
                Why choose us
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.02em] text-[#12232b] sm:text-[2.75rem]">
                The boring parts, done properly
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#5d6d75]">
                Cleaning is not difficult. Being reliable about it is — so that
                is most of what we are actually selling.
              </p>
              <Link
                href="#quote"
                className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-[#0e5c63] underline decoration-[#0e5c63]/30 underline-offset-4 transition-colors hover:decoration-[#0e5c63] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0e5c63]"
              >
                Get a free quote
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#e9e5dc] bg-[#e9e5dc] sm:grid-cols-2">
              {REASONS.map((reason, index) => (
                <Reveal key={reason.title} delay={index * 80} className="bg-white">
                  <div className="h-full p-7">
                    <h3 className="text-[17px] font-bold tracking-tight text-[#12232b]">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#5d6d75]">
                      {reason.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ---------------------------------------------------- Process */}
      <DemoSection id="process" className="border-b border-[#e9e5dc] bg-white">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#0e5c63]">
              How it works
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-[#12232b] sm:text-[2.75rem]">
              Four steps, no surprises
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {PROCESS.map((step, index) => (
              <Reveal key={step.no} delay={index * 90}>
                <div className="relative border-t-2 border-[#0e5c63]/20 pt-6">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#0e5c63]">
                    {step.no}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold tracking-tight text-[#12232b]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5d6d75]">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Areas */}
      <DemoSection id="areas" className="border-b border-[#e9e5dc]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#0e5c63]">
                Where we work
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.02em] text-[#12232b] sm:text-[2.75rem]">
                Ten areas around the city
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#5d6d75]">
                We keep a tight radius on purpose — it is the only way to get to
                a job on time. If your area is not listed, ask anyway; we
                usually say yes.
              </p>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#5d6d75]">
                Travel is included in the price. No call-out fee, no parking
                charges passed on to you.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {AREAS.map((area) => (
                  <li
                    key={area.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-[#e9e5dc] bg-white px-5 py-4"
                  >
                    <span className="text-[15px] font-semibold text-[#12232b]">
                      {area.name}
                    </span>
                    <span className="text-[12px] text-[#9aa5aa]">{area.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] text-[#9aa5aa]">
                All area names above are fictional.
              </p>
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ---------------------------------------------------- Reviews */}
      <DemoSection className="border-b border-[#e9e5dc] bg-white">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#0e5c63]">
                  Reviews
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-[-0.02em] text-[#12232b] sm:text-[2.75rem]">
                  What clients say
                </h2>
              </div>
              <p className="max-w-sm rounded-xl border border-[#e9e5dc] bg-[#fbfaf7] px-4 py-3 text-[13px] leading-relaxed text-[#5d6d75]">
                <strong className="font-semibold text-[#12232b]">Sample content.</strong>{" "}
                Written for this demonstration site. These are not real
                customers.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <Reveal key={`${review.name}-${index}`} delay={index * 90}>
                <figure className="flex h-full flex-col rounded-2xl border border-[#e9e5dc] bg-[#fbfaf7] p-7">
                  <blockquote className="flex-1 text-[16px] leading-relaxed text-[#33454e]">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[#e9e5dc] pt-4">
                    <p className="text-[14px] font-bold text-[#12232b]">
                      {review.name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9aa5aa]">
                      {review.detail}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* --------------------------------------------------------- FAQ */}
      <DemoSection id="faq" className="border-b border-[#e9e5dc]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#0e5c63]">
                Questions
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.02em] text-[#12232b] sm:text-[2.75rem]">
                The things people ask first
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#5d6d75]">
                If your question is not here, ask it on the quote form and we
                will answer it directly.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <FaqAccordion />
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------- Quote */}
      <DemoSection id="quote" className="border-b border-[#e9e5dc] bg-white">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#0e5c63]">
                Free quote
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.02em] text-[#12232b] sm:text-[2.75rem]">
                Get a price in writing
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#5d6d75]">
                Tell us about the home and what you need. We will come back with
                a fixed price, the first slot available and who would be coming.
              </p>
              <dl className="mt-9 space-y-5">
                {[
                  ["Office", "14 Weir Lane, Fernleigh (fictional)"],
                  ["Opening", "Monday – Friday, 08:00 – 18:00"],
                  ["Email", "hello@hollis-example.test"],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-[#e9e5dc] pt-5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9aa5aa]">
                      {label}
                    </dt>
                    <dd className="mt-2 text-[15px] text-[#12232b]">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[13px] leading-relaxed text-[#9aa5aa]">
                The email address and office above are placeholders for this
                demonstration.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={110}>
              <QuoteForm />
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      <DemoSiteFooter
        brand={
          <div>
            <p className="text-[17px] font-extrabold tracking-tight text-[#12232b]">
              Hollis
            </p>
            <p className="mt-1 font-mono text-[9px] tracking-[0.22em] text-[#0e5c63] uppercase">
              Home Services
            </p>
            <p className="mt-4 max-w-[28ch] text-[13px] leading-relaxed text-[#5d6d75]">
              Regular cleaning, deep cleans and small repairs across ten areas
              of one fictional city.
            </p>
          </div>
        }
        columns={[
          {
            title: "Services",
            items: SERVICES.map((service) => ({
              label: service.title,
              href: "#services",
            })),
          },
          {
            title: "Company",
            items: [
              { label: "Why choose us", href: "#why" },
              { label: "How it works", href: "#process" },
              { label: "Where we work", href: "#areas" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "More demos",
            items: [
              { label: "All Cryptic demos", href: "/demos" },
              { label: "Auto detailing demo", href: "/demos/auto-detailing" },
              { label: "Real estate demo", href: "/demos/real-estate" },
            ],
          },
        ]}
        className="border-t border-[#e9e5dc] bg-[#fbfaf7]"
        titleClassName="text-[#9aa5aa]"
        linkClassName="text-[#5d6d75] hover:text-[#0e5c63]"
        legalClassName="border-[#e9e5dc] text-[#9aa5aa]"
        legal={
          <p>
            Hollis Home Services is a fictional company created by{" "}
            <Link href="/demos" className="underline underline-offset-4 hover:text-[#5d6d75]">
              Cryptic
            </Link>{" "}
            to demonstrate a local home services website. The address, areas,
            prices and reviews on this page are invented.
          </p>
        }
      />

      <CrypticCta demo={demo} />
    </div>
  );
}