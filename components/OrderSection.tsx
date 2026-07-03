"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const bundles = [
  { id: "1", label: "1 Box", boxes: 1, price: 3500, save: null },
  { id: "3", label: "3 Boxes", boxes: 3, price: 9800, save: "Save 10%" },
  { id: "5", label: "5 Boxes", boxes: 5, price: 14800, save: "Save 20%" },
];

export default function OrderSection() {
  const [selected, setSelected] = useState("3");
  const current = bundles.find((b) => b.id === selected)!;

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    `Hi Nutra-4, I'd like to order ${current.label} (Rs. ${current.price.toLocaleString()}). Cash on Delivery please.`
  )}`;

  return (
    <section id="order" className="bg-ink py-16 text-paper sm:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Order Now</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pick your bundle, pay on delivery.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base">
            Free home delivery across Pakistan. Cash on Delivery available on
            every bundle.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
          {bundles.map((bundle) => {
            const active = bundle.id === selected;
            return (
              <button
                key={bundle.id}
                type="button"
                onClick={() => setSelected(bundle.id)}
                aria-pressed={active}
                className={`relative rounded-xl2 border-2 p-6 text-left transition-colors ${
                  active
                    ? "border-gold bg-white text-ink shadow-gold"
                    : "border-white/15 bg-white/5 text-paper hover:border-white/30"
                }`}
              >
                {bundle.save && (
                  <span className="absolute -top-3 right-4 rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-ink">
                    {bundle.save}
                  </span>
                )}
                <span className="text-sm font-bold uppercase tracking-wide opacity-70">
                  {bundle.label}
                </span>
                <div className="mt-2 text-2xl font-extrabold">
                  Rs. {bundle.price.toLocaleString()}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary bg-gold text-ink hover:bg-gold-deep hover:text-paper">
            Order {current.label} via WhatsApp
          </a>
          <a href={siteConfig.phones[0].href} className="btn-secondary border-white/30 text-paper hover:border-gold hover:text-gold">
            Or call {siteConfig.phones[0].label}
          </a>
        </div>
      </div>
    </section>
  );
}
