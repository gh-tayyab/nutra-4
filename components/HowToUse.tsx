"use client";

import { Package, GlassWater, Dumbbell, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Add Two Scoops",
    desc: "Take 2 scoops of Nutra-4 Weight Gainer Powder into a shaker or glass.",
    icon: Package,
  },
  {
    step: "02",
    title: "Mix Well",
    desc: "Mix with 250–300ml chilled milk or water until smooth and creamy.",
    icon: GlassWater,
  },
  {
    step: "03",
    title: "Drink Daily",
    desc: "Enjoy one serving every day after meals or your workout for best results.",
    icon: Dumbbell,
  },
];

export default function HowToUse() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-24">

      {/* Background */}

      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="container-content relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D8B35B]">

            HOW TO USE

          </span>

          <h2 className="mt-7 text-4xl font-black text-white lg:text-6xl">

            Just

            <span className="gold-text block mt-2">

              3 Easy Steps

            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65">

            Using Nutra-4 is simple. Follow these three easy steps every day to
            support healthy weight gain, lean muscle growth and better daily
            performance.

          </p>

        </div>

        {/* Cards */}

        <div className="relative mt-24 grid gap-8 lg:grid-cols-3">

          {/* Connection Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-[2px] bg-gradient-to-r from-transparent via-[#D8B35B]/30 to-transparent lg:block" />

          {steps.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.step}
                className="group relative rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#D8B35B]/40 hover:bg-white/10"
              >

                {/* Step Number */}

                <div className="absolute -top-7 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#D8B35B] to-[#A9781E] text-lg font-black text-black shadow-[0_12px_35px_rgba(216,179,91,.35)]">

                  {item.step}

                </div>

                {/* Icon */}

                <div className="mt-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-[#D8B35B]/20 bg-[#D8B35B]/10">

                  <Icon className="h-9 w-9 text-[#D8B35B]" />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-black text-white">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-white/65">

                  {item.desc}

                </p>

                {/* Bottom */}

                <div className="mt-8 flex items-center gap-3 text-[#D8B35B]">

                  <span className="text-sm font-bold uppercase tracking-[0.18em]">

                    Step {item.step}

                  </span>

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[35px] border border-[#D8B35B]/20 bg-gradient-to-r from-[#D8B35B]/10 via-transparent to-[#D8B35B]/10 p-10 backdrop-blur-xl">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                2

              </h3>

              <p className="mt-3 text-white/60">

                Scoops Per Serving

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                300ml

              </h3>

              <p className="mt-3 text-white/60">

                Milk Or Water

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                Daily

              </h3>

              <p className="mt-3 text-white/60">

                Best Results

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}