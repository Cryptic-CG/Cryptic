"use client";

import { useState } from "react";
import { DemoField, DemoFormSent, useDemoSubmit } from "@/demos/kit/useDemoSubmit";
import { SERVICES } from "@/demos/barbershop/ServiceMenu";

const inputClass =
  "h-12 w-full border border-white/20 bg-transparent px-4 text-[15px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#d4a24c]";

export function BookingForm() {
  const { sent, handleSubmit } = useDemoSubmit();
  const [service, setService] = useState(SERVICES[0].name);

  return (
    <form onSubmit={handleSubmit} className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-2xl font-bold tracking-tight uppercase">Book an appointment</h3>

      {sent ? (
        <div className="mt-5">
          <DemoFormSent className="border-[#d4a24c]/40 bg-white/[0.04] text-white/80">
            Request noted. This is a demonstration site — no appointment has
            been booked and nothing was sent. On a live site this would go
            straight into the chair diary.
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
            <DemoField label="Service">
              <select
                name="service"
                value={service}
                onChange={(event) => setService(event.target.value)}
                className={inputClass}
              >
                {SERVICES.map((item) => (
                  <option key={item.id} value={item.name} className="bg-[#141210]">
                    {item.name} — £{item.price}
                  </option>
                ))}
              </select>
            </DemoField>
            <DemoField label="Preferred day">
              <input required type="date" name="date" className={inputClass} />
            </DemoField>
            <DemoField label="Barber">
              <select name="barber" defaultValue="no-preference" className={inputClass}>
                <option value="no-preference" className="bg-[#141210]">
                  No preference
                </option>
                {["Ronan Vale", "Micah Bell", "Theo March", "Ellis Pryce"].map(
                  (name) => (
                    <option key={name} value={name} className="bg-[#141210]">
                      {name}
                    </option>
                  ),
                )}
              </select>
            </DemoField>
          </div>

          <DemoField label="Anything else?">
            <input
              name="notes"
              placeholder="In the chair you would like, or a little context"
              className={`${inputClass} mt-5`}
            />
          </DemoField>

          <button
            type="submit"
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-[#d4a24c] px-8 text-[13px] font-bold uppercase tracking-[0.14em] text-[#141210] transition-colors hover:bg-[#e2b663] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4a24c] sm:w-auto"
          >
            Request appointment
            <span aria-hidden="true">→</span>
          </button>
          <p className="mt-4 text-[13px] leading-relaxed text-white/40">
            Walk-ins are welcome if a chair is free, but weekends book out
            quickly.
          </p>
        </>
      )}
    </form>
  );
}