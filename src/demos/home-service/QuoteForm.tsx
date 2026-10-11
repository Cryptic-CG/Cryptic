"use client";

import { useState } from "react";
import { DemoField, DemoFormSent, useDemoSubmit } from "@/demos/kit/useDemoSubmit";

const inputClass =
  "h-12 w-full border border-[#dcd7cd] bg-white px-4 text-[15px] text-[#12232b] outline-none transition-colors placeholder:text-[#9aa5aa] focus:border-[#0e5c63]";

const FREQUENCIES = [
  "One-off clean",
  "Weekly",
  "Fortnightly",
  "Monthly",
  "End of tenancy",
];

export function QuoteForm() {
  const { sent, handleSubmit } = useDemoSubmit();
  const [frequency, setFrequency] = useState(FREQUENCIES[1]);

  return (
    <form onSubmit={handleSubmit} className="border border-[#e4e0d8] bg-white p-6 sm:p-8">
      <h3 className="text-2xl font-bold tracking-tight text-[#12232b]">
        Get a free quote
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#5d6d75]">
        No obligation, no follow-up sales calls. Tell us the property and what
        you need and we will come back with a price.
      </p>

      {sent ? (
        <div className="mt-6">
          <DemoFormSent className="border-[#0e5c63]/30 bg-[#f2f8f8] text-[#12232b]">
            Thank you — this is a demonstration site, so nothing was sent and
            no quote has been requested. On a live site this would arrive with
            a real price within a couple of hours.
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
                className={inputClass}
              />
            </DemoField>
            <DemoField label="Email">
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </DemoField>
            <DemoField label="Postcode or area">
              <input
                required
                name="postcode"
                placeholder="Where do you need us?"
                className={inputClass}
              />
            </DemoField>
            <DemoField label="How often?">
              <select
                name="frequency"
                value={frequency}
                onChange={(event) => setFrequency(event.target.value)}
                className={inputClass}
              >
                {FREQUENCIES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </DemoField>
          </div>

          <DemoField label="What do you need?">
            <textarea
              name="message"
              rows={3}
              placeholder="Bedrooms and bathrooms, pets, anything awkward"
              className={`${inputClass} mt-5 h-auto resize-y py-3`}
            />
          </DemoField>

          <button
            type="submit"
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-[#0e5c63] px-8 text-[15px] font-semibold text-white transition-colors hover:bg-[#0a464b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e5c63] sm:w-auto"
          >
            Send quote request
            <span aria-hidden="true">→</span>
          </button>
          <p className="mt-4 text-[13px] leading-relaxed text-[#8d989d]">
            Estimated from{" "}
            <span className="font-medium text-[#5d6d75]">
              £14 per hour for standard cleaning
            </span>{" "}
            — final prices are confirmed in writing before any work starts.
          </p>
        </>
      )}
    </form>
  );
}