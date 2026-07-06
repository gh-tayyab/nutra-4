"use client";

import {
  UtensilsCrossed,
  GlassWater,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Drink Nutra-4 Daily",
    copy:
      "Mix Nutra-4 with milk or water every day to give your body premium calories, protein and nutrients.",
    icon: GlassWater,
  },
  {
    step: "02",
    title: "Fuel Healthy Muscle Growth",
    copy:
      "High-quality protein and balanced calories help support lean muscle growth and healthy weight gain.",
    icon: Dumbbell,
  },
  {
    step: "03",
    title: "See Visible Results",
    copy:
      "With consistency, proper meals and training, experience noticeable weight gain and increased strength.",
    icon: UtensilsCrossed,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#050505] py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="container-content relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D8B35B]">

            HOW IT WORKS

          </span>

          <h2 className="mt-7 text-4xl font-black text-white lg:text-6xl">

            Healthy Weight Gain

            <span className="gold-text block mt-2">

              In 3 Simple Steps

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">

            Nutra-4 follows a simple process that helps your body receive
            balanced nutrition, support lean muscle growth and achieve healthy
            weight gain naturally.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24 grid gap-8 lg:grid-cols-3">

          {/* Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-[2px] bg-gradient-to-r from-transparent via-[#D8B35B]/30 to-transparent lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="group relative rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#D8B35B]/40 hover:bg-white/10"
              >
                {/* Step Number */}

                <div className="absolute -top-7 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#D8B35B] to-[#A9781E] text-lg font-black text-black shadow-[0_12px_30px_rgba(216,179,91,.35)]">

                  {step.step}

                </div>

                {/* Icon */}

                <div className="mt-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-[#D8B35B]/20 bg-[#D8B35B]/10">

                  <Icon className="h-9 w-9 text-[#D8B35B]" />

                </div>

                <h3 className="mt-8 text-2xl font-black text-white">

                  {step.title}

                </h3>

                <p className="mt-5 leading-8 text-white/65">

                  {step.copy}

                </p>

                <div className="mt-8 flex items-center gap-3 text-[#D8B35B]">

                  <span className="text-sm font-bold uppercase tracking-[0.18em]">

                    Step {step.step}

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

        {/* Bottom Banner */}

        <div className="mt-20 rounded-[35px] border border-[#D8B35B]/20 bg-gradient-to-r from-[#D8B35B]/10 via-transparent to-[#D8B35B]/10 p-10 backdrop-blur-xl">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                650+

              </h3>

              <p className="mt-3 text-white/60">

                Healthy Calories

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                25g

              </h3>

              <p className="mt-3 text-white/60">

                Premium Protein

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                Daily

              </h3>

              <p className="mt-3 text-white/60">

                Easy To Use

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}