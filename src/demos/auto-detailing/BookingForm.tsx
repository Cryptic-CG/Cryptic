"use client";

import { DemoField, DemoFormSent, useDemoSubmit } from "@/demos/kit/useDemoSubmit";

const inputClass =
  "h-12 w-full border border-white/15 bg-white/[0.04] px-4 text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#5b8cff]";

export function BookingForm() {
  const { sent, handleSubmit } = useDemoSubmit();

  if (sent) {
    return (
      <div className="border border-white/10 bg-[#0b0d10] p-7 sm:p-9">
        <DemoFormSent className="border-[#5b8cff]/40 bg-[#101725] text-white/80">
          Request logged. This is a demonstration site — no booking has been
          made and nothing was sent. On a live site this would reach the studio
          diary and you would get a confirmation within the hour.
        </DemoFormSent>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-[#0b0d10] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <DemoField label="Vehicle">
          <input
            required
            name="vehicle"
            placeholder="Make, model, year"
            className={inputClass}
          />
        </DemoField>
        <DemoField label="Service">
          <select required name="service" defaultValue="" className={inputClass}>
            <option value="" disabled className="bg-[#0b0d10]">
              Select a service
            </option>
            {[
              "Valet — £95",
              "Studio — £285",
              "Concours — £640",
              "Paint correction (assessment first)",
              "Interior deep clean",
            ].map((option) => (
              <option key={option} value={option} className="bg-[#0b0d10]">
                {option}
              </option>
            ))}
          </select>
        </DemoField>
        <DemoField label="Preferred date">
          <input required type="date" name="date" className={inputClass} />
        </DemoField>
        <DemoField label="Where">
          <select required name="location" defaultValue="" className={inputClass}>
            <option value="" disabled className="bg-[#0b0d10]">
              Select
            </option>
            <option value="studio" className="bg-[#0b0d10]">
              At the studio
            </option>
            <option value="mobile" className="bg-[#0b0d10]">
              Mobile (we come to you)
            </option>
          </select>
        </DemoField>
      </div>

      <DemoField label="Notes">
        <input
          name="notes"
          placeholder="Paint condition, parking, anything else"
          className={`${inputClass} mt-5`}
        />
      </DemoField>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#5b8cff] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#7ba3ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
      >
        Request a booking
        <span aria-hidden="true">→</span>
      </button>
      <p className="mt-4 text-[13px] leading-relaxed text-white/35">
        Deposits are taken once a painter has inspected the vehicle. We never
        book a correction without seeing the paint first.
      </p>
    </form>
  );
}