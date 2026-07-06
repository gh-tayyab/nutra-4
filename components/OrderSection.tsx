"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ShieldCheck,
  Truck,
  Clock3,
  Star,
  CheckCircle2,
  Flame,
  Gift,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const bundles = [
  {
    id: "1",
    title: "Starter Pack",
    label: "1 Box",
    price: 3500,
    oldPrice: 4200,
    save: "Rs.700 OFF",
    popular: false,
  },
  {
    id: "3",
    title: "Most Popular",
    label: "3 Boxes",
    price: 9800,
    oldPrice: 12600,
    save: "Save 22%",
    popular: true,
  },
  {
    id: "5",
    title: "Best Value",
    label: "5 Boxes",
    price: 14800,
    oldPrice: 21000,
    save: "Save 30%",
    popular: false,
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "100% Original",
  },
  {
    icon: Truck,
    title: "Free Delivery",
  },
  {
    icon: CheckCircle2,
    title: "Cash On Delivery",
  },
];

export default function OrderSection() {
  const [selected, setSelected] = useState("3");

  const current = bundles.find((b) => b.id === selected) ?? bundles[1];

  /* ---------------- Countdown ---------------- */

  const targetTime = useMemo(() => {
    const d = new Date();
    d.setHours(d.getHours() + 8);
    return d.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetTime - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const hours = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60)));

  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60));

  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60));

  const whatsappHref = `https://wa.me/${
    siteConfig.whatsapp.number
  }?text=${encodeURIComponent(
    `Hi Nutra-4! I'd like to order ${
      current.label
    } for Rs. ${current.price.toLocaleString()} with Cash on Delivery.`,
  )}`;

  return (
    <section id="order" className="relative overflow-hidden bg-[#050505] py-24">
      {/* Background */}

      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="container-content relative z-10">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D8B35B]">
            <Flame size={15} />
            LIMITED TIME OFFER
          </span>

          <h2 className="mt-7 text-4xl font-black text-white lg:text-6xl">
            Order Today &<span className="gold-text block mt-2">Save More</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Get premium Nutra-4 Weight Gainer with Free Delivery, Cash On
            Delivery and exclusive bundle discounts available for a limited
            time.
          </p>

          {/* Countdown */}

          <div className="mx-auto mt-10 flex w-fit items-center gap-5 rounded-full border border-[#D8B35B]/20 bg-white/5 px-8 py-5 backdrop-blur-xl">
            <Clock3 className="text-[#D8B35B]" />

            <div className="flex items-center gap-4">
              <div className="text-center">
                <h3 className="gold-text text-3xl font-black">
                  {String(hours).padStart(2, "0")}
                </h3>

                <p className="text-xs uppercase tracking-widest text-white/50">
                  Hours
                </p>
              </div>

              <span className="text-2xl text-[#D8B35B]">:</span>

              <div className="text-center">
                <h3 className="gold-text text-3xl font-black">
                  {String(minutes).padStart(2, "0")}
                </h3>

                <p className="text-xs uppercase tracking-widest text-white/50">
                  Minutes
                </p>
              </div>

              <span className="text-2xl text-[#D8B35B]">:</span>

              <div className="text-center">
                <h3 className="gold-text text-3xl font-black">
                  {String(seconds).padStart(2, "0")}
                </h3>

                <p className="text-xs uppercase tracking-widest text-white/50">
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {bundles.map((bundle) => {
            const active = selected === bundle.id;

            return (
              <button
                key={bundle.id}
                type="button"
                onClick={() => setSelected(bundle.id)}
                className={`group relative overflow-hidden rounded-[34px] border p-8 text-left transition-all duration-500 ${
                  active
                    ? "border-[#D8B35B] bg-gradient-to-b from-[#171717] to-[#0B0B0B] shadow-[0_0_40px_rgba(216,179,91,.25)] scale-[1.03]"
                    : "border-white/10 bg-white/5 hover:-translate-y-3 hover:border-[#D8B35B]/40 hover:bg-white/10"
                }`}
              >
                {/* Popular Badge */}

                {bundle.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-[#D8B35B] to-[#A9781E] px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-black shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Save Badge */}

                <div className="inline-flex items-center gap-2 rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#D8B35B]">
                  <Gift size={14} />

                  {bundle.save}
                </div>

                {/* Title */}

                <h3 className="mt-8 text-3xl font-black text-white">
                  {bundle.title}
                </h3>

                <p className="mt-2 text-white/60">{bundle.label}</p>

                {/* Price */}

                <div className="mt-8">
                  <div className="flex items-end gap-3">
                    <span className="gold-text text-5xl font-black">
                      Rs. {bundle.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="mt-2 text-lg text-white/40 line-through">
                    Rs. {bundle.oldPrice.toLocaleString()}
                  </p>
                </div>

                {/* Features */}

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 size={18} className="text-[#D8B35B]" />
                    Free Delivery
                  </div>

                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 size={18} className="text-[#D8B35B]" />
                    Cash On Delivery
                  </div>

                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 size={18} className="text-[#D8B35B]" />
                    100% Original Product
                  </div>
                </div>

                {/* Select Button */}

                <div
                  className={`mt-10 rounded-2xl py-4 text-center text-sm font-black uppercase tracking-[0.18em] transition ${
                    active
                      ? "bg-gradient-to-r from-[#D8B35B] to-[#A9781E] text-black"
                      : "border border-white/15 text-white group-hover:border-[#D8B35B]/40"
                  }`}
                >
                  {active ? "SELECTED" : "SELECT THIS PLAN"}
                </div>
              </button>
            );
          })}
        </div>

        {/* Order Form */}
        <div className="mx-auto mt-20 max-w-5xl rounded-[36px] border border-[#D8B35B]/15 bg-gradient-to-b from-[#141414] to-[#0A0A0A] p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            {/* Left */}

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D8B35B]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D8B35B]">
                Secure Checkout
              </span>

              <h3 className="mt-5 text-4xl font-black text-white">
                Your Selected Bundle
              </h3>

              <p className="mt-3 text-white/60">
                Review your order before continuing to WhatsApp.
              </p>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-black text-white">
                      {current.label}
                    </h4>

                    <p className="mt-2 text-white/50">Premium Weight Gainer</p>
                  </div>

                  <span className="rounded-full bg-[#D8B35B]/15 px-4 py-2 text-sm font-bold text-[#D8B35B]">
                    {current.save}
                  </span>
                </div>

                <div className="mt-8 flex items-end gap-4">
                  <span className="gold-text text-5xl font-black">
                    Rs. {current.price.toLocaleString()}
                  </span>

                  <span className="pb-2 text-xl text-white/35 line-through">
                    Rs. {current.oldPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {trustItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8B35B]/10">
                        <Icon className="text-[#D8B35B]" size={28} />
                      </div>

                      <p className="mt-4 text-sm font-bold text-white">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right */}

            <div className="rounded-[30px] border border-[#D8B35B]/20 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] p-8">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#D8B35B" color="#D8B35B" />
                ))}

                <span className="ml-2 text-sm text-white/60">
                  Trusted by 500+ Customers
                </span>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>

                  <span>Rs. {current.oldPrice.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-green-400">
                  <span>Discount</span>

                  <span>
                    - Rs. {(current.oldPrice - current.price).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-white/70">
                  <span>Delivery</span>

                  <span className="text-[#D8B35B]">FREE</span>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-white">Total</span>

                    <span className="gold-text text-3xl font-black">
                      Rs. {current.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D8B35B] to-[#A9781E] px-8 py-5 text-lg font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.03]"
              >
                Order via WhatsApp
              </a>

              <p className="mt-5 text-center text-sm leading-7 text-white/45">
                By placing your order you agree to receive confirmation on
                WhatsApp and pay only after receiving your parcel.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-16 rounded-[32px] border border-white/10 bg-white/5 px-8 py-8 backdrop-blur-xl">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D8B35B]/10">
                <ShieldCheck size={32} className="text-[#D8B35B]" />
              </div>

              <h4 className="mt-4 text-lg font-black text-white">
                100% Original
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Premium quality formula with trusted ingredients.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D8B35B]/10">
                <Truck size={32} className="text-[#D8B35B]" />
              </div>

              <h4 className="mt-4 text-lg font-black text-white">
                Free Delivery
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Fast nationwide shipping across Pakistan.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D8B35B]/10">
                <CheckCircle2 size={32} className="text-[#D8B35B]" />
              </div>

              <h4 className="mt-4 text-lg font-black text-white">
                Cash On Delivery
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Pay only when your parcel arrives safely.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D8B35B]/10">
                <Star size={32} fill="#D8B35B" color="#D8B35B" />
              </div>

              <h4 className="mt-4 text-lg font-black text-white">
                500+ Happy Customers
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Loved by customers all over Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
