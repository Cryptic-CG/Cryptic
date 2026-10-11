"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need to be home?",
    a: "No. Most clients give us a key or a code and we work while they are out. We lock up, photograph the rooms and message you when we are finished.",
  },
  {
    q: "What does a regular visit include?",
    a: "Kitchen and bathrooms cleaned, surfaces, floors vacuumed and mopped, beds made, bins out and back in. If a job is not on the list, ask and we will add it.",
  },
  {
    q: "Do you bring your own equipment?",
    a: "Yes. Products, cloths, mops and vacuum come with us. If you would rather we used your own products, that is completely fine.",
  },
  {
    q: "How much notice do you need?",
    a: "Same-week slots are often available, and we keep two emergency slots a week for people who need us tomorrow.",
  },
  {
    q: "Are the team checked?",
    a: "Everyone who works for us is interviewed in person, referenced, and holds a current background check. You will know who is coming to your door.",
  },
  {
    q: "What if something gets broken?",
    a: "We are insured and we tell you immediately. Anything we cause, we put right at no cost.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-[#e4e0d8]">
      {FAQS.map((faq, index) => {
        const expanded = open === index;
        return (
          <div key={faq.q} className="border-b border-[#e4e0d8]">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : index)}
                aria-expanded={expanded}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#0e5c63] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0e5c63]"
              >
                <span className="text-[17px] font-semibold text-[#12232b] sm:text-lg">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative grid h-8 w-8 shrink-0 place-items-center border border-[#e4e0d8] text-[#0e5c63] transition-transform duration-200 ${
                    expanded ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute h-px w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-px bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              hidden={!expanded}
              className="pb-6 pr-12 text-[16px] leading-relaxed text-[#5d6d75]"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}