"use client";

import { DemoField, DemoFormSent, useDemoSubmit } from "@/demos/kit/useDemoSubmit";

const inputClass =
  "h-11 w-full rounded-md border border-[#ded5c6] bg-[#fbf8f2] px-4 text-[15px] text-[#1b1512] outline-none transition-colors placeholder:text-[#6b6058]/60 focus:border-[#b4552c]";

export function ReservationForm() {
  const { sent, handleSubmit } = useDemoSubmit();

  if (sent) {
    return (
      <div className="border border-[#ded5c6] bg-[#fbf8f2] p-7 sm:p-9">
        <DemoFormSent>
          Thank you — this is a demonstration site, so no reservation has been
          made and nothing was sent. On a live site this would reach the dining
          room&rsquo;s booking diary.
        </DemoFormSent>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#ded5c6] bg-[#fbf8f2] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <DemoField label="Name">
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </DemoField>
        <DemoField label="Party size">
          <select required name="party" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select
            </option>
            {[1, 2, 3, 4, 5, 6].map((size) => (
              <option key={size} value={size}>
                {size} {size === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </DemoField>
        <DemoField label="Date">
          <input required type="date" name="date" className={inputClass} />
        </DemoField>
        <DemoField label="Time">
          <select required name="time" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select
            </option>
            {[
              "12:30",
              "13:00",
              "13:30",
              "18:30",
              "19:00",
              "19:30",
              "20:00",
              "20:30",
            ].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </DemoField>
      </div>

      <DemoField label="Anything we should know?">
        <input
          name="notes"
          placeholder="Allergies, occasions, access needs"
          className={`${inputClass} mt-5`}
        />
      </DemoField>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1b1512] px-7 text-sm font-medium tracking-wide text-[#f6f1e7] transition-colors hover:bg-[#b4552c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4552c] sm:w-auto"
      >
        Request this table
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}