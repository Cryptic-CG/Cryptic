import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} at ${site.contactEmail}.`,
};

export default function ContactPage() {
  const gmailUrl = new URL("https://mail.google.com/mail/");
  gmailUrl.searchParams.set("view", "cm");
  gmailUrl.searchParams.set("fs", "1");
  gmailUrl.searchParams.set("to", site.contactEmail);
  gmailUrl.searchParams.set("su", `Contact from ${site.name} website`);

  return (
    <Container className="max-w-3xl py-24 md:py-32">
      <SectionLabel>Contact</SectionLabel>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        Get in touch.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
        Questions, ideas, or work inquiries — email is the fastest way to reach{" "}
        {site.name}.
      </p>

      <div className="mt-12 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 sm:p-10">
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Business email
        </h2>
        <p className="mt-3 break-all text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
          {site.contactEmail}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <CopyButton value={site.contactEmail} label="Copy email" />
          <Button href={gmailUrl.toString()} size="lg" variant="secondary">
            Compose in Gmail
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
              <rect x="2.5" y="5" width="19" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </Button>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-zinc-500">
          The compose button opens Gmail&apos;s compose window with the address
          pre-filled. If you&apos;re not signed in, Gmail will ask you to sign
          in first. Using another mail provider? Copy the address and paste it
          into the <span className="font-medium text-zinc-300">To</span> field
          of a new message.
        </p>
      </div>

      <h2 className="mt-14 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500">
        What to include
      </h2>
      <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-zinc-400">
        <li>
          <span className="font-medium text-zinc-100">Subject</span> — a short
          line describing your message.
        </li>
        <li>
          <span className="font-medium text-zinc-100">Context</span> — the
          project or topic you&apos;re reaching out about.
        </li>
        <li>
          <span className="font-medium text-zinc-100">A way back to you</span>{" "}
          — your name and how you&apos;d like us to reply.
        </li>
      </ul>
    </Container>
  );
}