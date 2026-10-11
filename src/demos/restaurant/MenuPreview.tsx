"use client";

import { useRef, useState } from "react";

const MENUS = [
  {
    id: "lunch",
    label: "Lunch",
    note: "Served 12:00 – 14:30, Tuesday to Sunday.",
    items: [
      { name: "Soup of the day", detail: "Whatever the garden gave us", price: "11" },
      { name: "Leek, hazelnut, pecorino", detail: "Charred over vine wood", price: "18" },
      { name: "Hand-dived scallop", detail: "Brown butter, sea herbs", price: "24" },
      { name: "Hand-rolled tagliolini", detail: "Egg yolk, aged parmesan, sage", price: "22" },
      { name: "Market fish", detail: "Grilled, brown butter, sea greens", price: "29" },
    ],
  },
  {
    id: "dinner",
    label: "Dinner",
    note: "Served from 18:00. Five courses, chosen by the kitchen.",
    items: [
      { name: "Bread & cultured butter", detail: "Three-day levain", price: "8" },
      { name: "Cured sea trout", detail: "Buttermilk, dill, cured yolk", price: "19" },
      { name: "Dry-aged duck", detail: "Thirty-five days, cherry, cocoa", price: "34" },
      { name: "Salt-baked celeriac", detail: "Hazelnut, winter leaves", price: "26" },
      { name: "Burnt cheesecake", detail: "Burnt honey, sea salt", price: "12" },
    ],
  },
  {
    id: "cellar",
    label: "Cellar",
    note: "Low-intervention bottles, mostly French, by the glass or carafe.",
    items: [
      { name: "Skin-contact white", detail: "Loire, 2023 — bone dry", price: "16" },
      { name: "Gamay, whole cluster", detail: "Beaujolais, carbonic, 2023", price: "17" },
      { name: "Old-vine red", detail: "Languedoc, 2018 — long finish", price: "19" },
      { name: "House vermouth", detail: "Bitter orange, wormwood, olive", price: "11" },
      { name: "Salt caramel & apple", detail: "No alcohol, properly made", price: "9" },
    ],
  },
];

export function MenuPreview() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = MENUS[active];

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: MENUS.length - 1,
    };
    const next = keys[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const index = (next + MENUS.length) % MENUS.length;
    setActive(index);
    tabs.current[index]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menu sections"
        className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[#ded5c6]"
      >
        {MENUS.map((menu, index) => (
          <button
            key={menu.id}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`menu-tab-${menu.id}`}
            aria-selected={active === index}
            aria-controls={`menu-panel-${menu.id}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={onKeyDown}
            className={`-mb-px border-b-2 pb-3 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b4552c] ${
              active === index
                ? "border-[#b4552c] text-[#1b1512]"
                : "border-transparent text-[#6b6058] hover:text-[#1b1512]"
            }`}
          >
            {menu.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`menu-panel-${current.id}`}
        aria-labelledby={`menu-tab-${current.id}`}
        tabIndex={0}
        className="pt-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b4552c]"
      >
        <p className="font-display text-lg italic text-[#6b6058]">{current.note}</p>
        <ul className="mt-6 space-y-5">
          {current.items.map((item) => (
            <li key={item.name} className="border-b border-[#ded5c6] pb-5 last:border-0">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[1.35rem] leading-snug text-[#1b1512]">
                  {item.name}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 translate-y-[-3px] bg-[#ded5c6] sm:block"
                />
                <span className="font-display text-[1.2rem] text-[#1b1512]">
                  {item.price}
                </span>
              </div>
              <p className="mt-1 text-[15px] text-[#6b6058]">{item.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6058]/70">
          Allergen information available on request
        </p>
      </div>
    </div>
  );
}