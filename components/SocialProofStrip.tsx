"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    text: "I gained healthy weight within a few weeks. Highly recommended!",
    name: "Verified Customer",
  },
  {
    text: "Best Weight Gainer in Pakistan. Fast delivery and amazing quality.",
    name: "Verified Buyer",
  },
  {
    text: "No bloating, great taste and noticeable muscle gains.",
    name: "Verified Customer",
  },
];

const badges = [
  {
    title: "1200+",
    subtitle: "Happy Customers",
    icon: "👥",
  },
  {
    title: "4.9★",
    subtitle: "Customer Rating",
    icon: "⭐",
  },
  {
    title: "100%",
    subtitle: "Original Formula",
    icon: "🛡️",
  },
  {
    title: "COD",
    subtitle: "Nationwide",
    icon: "🚚",
  },
];

export default function SocialProofStrip() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-10">

      <div className="absolute inset-0 bg-gradient-to-r from-[#D8B35B]/5 via-transparent to-[#D8B35B]/5" />

      <div className="container-content relative z-10">

        <div className="grid gap-6 lg:grid-cols-5">

          <div className="lg:col-span-3">

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

              <div className="flex items-center gap-4">

                <div className="flex text-[#D8B35B] text-xl">

                  ★★★★★

                </div>

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#D8B35B]">

                  VERIFIED REVIEWS

                </span>

              </div>

              <p className="mt-6 text-xl font-semibold leading-9 text-white transition-all duration-500">

                "{reviews[current].text}"

              </p>

              <p className="mt-5 text-sm uppercase tracking-[0.15em] text-white/60">

                — {reviews[current].name}

              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-5 lg:col-span-2">

            {badges.map((item) => (

              <div
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#D8B35B]/40 hover:bg-white/10"
              >

                <div className="text-3xl">

                  {item.icon}

                </div>

                <h3 className="mt-4 text-3xl font-black text-[#D8B35B]">

                  {item.title}

                </h3>

                <p className="mt-2 text-sm font-medium text-white/70">

                  {item.subtitle}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}