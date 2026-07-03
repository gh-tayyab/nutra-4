"use client";
import { Scale, Dumbbell, Flame, Zap } from "lucide-react";

const tiles = [
  {
    title: "Weight Gain",
    copy: "Steady, healthy weight gain without relying on junk calories.",
    icon: Scale,
  },
  {
    title: "Muscle Building",
    copy: "Supports lean muscle growth alongside your training.",
    icon: Dumbbell,
  },
  {
    title: "Metabolism Support",
    copy: "Helps your body use what you eat more efficiently.",
    icon: Flame,
  },
  {
    title: "Energy & Endurance",
    copy: "Keeps you fuelled through workouts and long days.",
    icon: Zap,
  },
];

export default function WhoItsFor() {
  return (
    <section id="benefits" className="py-16 sm:py-24">
      <div className="container-content">
        <div className="max-w-xl">
          <span className="eyebrow">Who It&rsquo;s For</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Built for one goal: putting on healthy weight.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => {
            const Icon = tile.icon;

            return (
              <div
                key={tile.title}
                className="group rounded-xl2 border border-line bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F6ECD2]">
                  <Icon className="h-7 w-7 text-[#A9781E]" />
                </div>

                <h3 className="text-base font-extrabold text-ink">
                  {tile.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {tile.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
