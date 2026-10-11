"use client";

import { useState } from "react";
import { DemoField, DemoFormSent, useDemoSubmit } from "@/demos/kit/useDemoSubmit";

export function ValuationForm({
  title = "Request a valuation",
  cta = "Request valuation",
  tone = "dark",
}: {
  title?: string;
  cta?: string;
  tone?: "dark" | "light";
}) {
  const { sent, handleSubmit } = useDemoSubmit();
  const [intention, setIntention] = useState("sell");

  const dark = tone === "dark";

  const shell = dark
    ? "border-white/15 bg-white/[0.03]"
    : "border-[#e2ded6] bg-white";
  const input = dark
    ? "border-white/20 bg-white/[0.04] text-white placeholder:text-white/35 focus:border-[#9cbf9f]"
    : "border-[#dcd7cd] bg-white text-[#1a1c1a] placeholder:text-[#9aa5aa] focus:border-[#20503d]";
  const heading = dark ? "text-white" : "text-[#1a1c1a]";
  const muted = dark ? "text-white/60" : "text-[#6b6f6a]";

  return (
    <form onSubmit={handleSubmit} className={`border p-6 sm:p-8 ${shell}`}>
      <h3 className={`font-display text-2xl ${heading}`}>{title}</h3>

      {sent ? (
        <div className="mt-5">
          <DemoFormSent
            className={
              dark
                ? "border-[#9cbf9f]/40 bg-white/[0.04] text-white/75"
                : "border-[#20503d]/30 bg-[#f2f6f3] text-[#1a1c1a]"
            }
          >
            Thank you — this is a demonstration site, so nothing was sent and no
            valuation has been requested. On a live site this would reach the
            office and you would get a call back the same day.
          </DemoFormSent>
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <DemoField label="Name">
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className={`h-12 w-full border px-4 text-[15px] outline-none transition-colors ${input}`}
              />
            </DemoField>
            <DemoField label="Email">
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={`h-12 w-full border px-4 text-[15px] outline-none transition-colors ${input}`}
              />
            </DemoField>
            <DemoField label="Address">
              <input
                required
                name="address"
                placeholder="Street and area"
                className={`h-12 w-full border px-4 text-[15px] outline-none transition-colors ${input}`}
              />
            </DemoField>
            <DemoField label="What you are hoping for">
              <select
                name="intent"
                value={intention}
                onChange={(event) => setIntention(event.target.value)}
                className={`h-12 w-full border px-4 text-[15px] outline-none transition-colors ${input}`}
              >
                <option value="sell" className={dark ? "bg-[#12100f]" : "bg-white"}>
                  Selling — a valuation
                </option>
                <option value="buy" className={dark ? "bg-[#12100f]" : "bg-white"}>
                  Buying — a shortlist
                </option>
                <option value="both" className={dark ? "bg-[#12100f]" : "bg-white"}>
                  Both
                </option>
              </select>
            </DemoField>
          </div>

          <DemoField label="Anything we should know?">
            <input
              name="notes"
              placeholder="Timeline, chain, reason for moving"
              className={`mt-5 h-12 w-full border px-4 text-[15px] outline-none transition-colors ${input}`}
            />
          </DemoField>

          <button
            type="submit"
            className={`mt-6 inline-flex h-12 w-full items-center justify-center gap-2 px-8 text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto ${
              dark
                ? "bg-[#9cbf9f] text-[#14231a] hover:bg-white focus-visible:outline-white"
                : "bg-[#20503d] text-white hover:bg-[#142f24] focus-visible:outline-[#20503d]"
            }`}
          >
            {cta}
            <span aria-hidden="true">→</span>
          </button>

          <p className={`mt-4 text-[13px] leading-relaxed ${muted}`}>
            Valuations are free and there is no obligation on either side.
          </p>
        </>
      )}
    </form>
  );
}