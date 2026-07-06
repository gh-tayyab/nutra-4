"use client";

import {
  Scale,
  Dumbbell,
  Flame,
  Zap,
  ArrowRight,
} from "lucide-react";

const tiles = [
  {
    title: "Healthy Weight Gain",
    copy: "Perfect for skinny men and women looking to gain healthy body weight naturally without junk calories.",
    icon: Scale,
  },
  {
    title: "Lean Muscle Growth",
    copy: "High-quality protein helps support lean muscle development and post-workout recovery.",
    icon: Dumbbell,
  },
  {
    title: "Fast Metabolism Support",
    copy: "Designed for people who eat a lot but still struggle to gain weight due to a fast metabolism.",
    icon: Flame,
  },
  {
    title: "Energy & Strength",
    copy: "Provides balanced calories for daily energy, endurance and improved workout performance.",
    icon: Zap,
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#0B0B0B] py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[130px]" />

      <div className="container-content relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D8B35B]">

            WHY CHOOSE NUTRA-4

          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight text-white lg:text-6xl">

            Everything You Need For

            <span className="gold-text block mt-2">

              Healthy Weight Gain

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">

            Nutra-4 is a premium
            <span className="font-bold text-[#D8B35B]">
              {" "}Weight Gainer in Pakistan
            </span>
            {" "}created for hard gainers who want to increase body weight,
            build lean muscle, improve strength and boost daily energy.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">

          {tiles.map((tile) => {

            const Icon = tile.icon;

            return (

              <div
                key={tile.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#D8B35B]/40 hover:bg-white/10"
              >

                {/* Glow */}

                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#D8B35B]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#D8B35B] to-[#A9781E] shadow-[0_12px_35px_rgba(216,179,91,.35)]">

                  <Icon className="h-9 w-9 text-black" />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-black text-white">

                  {tile.title}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-white/65">

                  {tile.copy}

                </p>

                {/* Bottom */}

                <div className="mt-8 flex items-center gap-3 text-[#D8B35B]">

                  <span className="text-sm font-bold uppercase tracking-[0.18em]">

                    Learn More

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

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-[35px] border border-[#D8B35B]/20 bg-gradient-to-r from-[#D8B35B]/10 via-transparent to-[#D8B35B]/10 p-10 backdrop-blur-xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <h3 className="text-3xl font-black text-white">

                Built For Hard Gainers.

              </h3>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">

                Whether you're naturally skinny, have a fast metabolism,
                struggle to eat enough calories or want to gain lean muscle,
                Nutra-4 helps you achieve healthy weight gain with a premium,
                balanced nutritional formula.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

                <h4 className="gold-text text-4xl font-black">

                  25g

                </h4>

                <p className="mt-2 text-sm text-white/60">

                  Premium Protein

                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

                <h4 className="gold-text text-4xl font-black">

                  650+

                </h4>

                <p className="mt-2 text-sm text-white/60">

                  Healthy Calories

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}