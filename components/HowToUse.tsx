'use client'
import { Package, GlassWater, Dumbbell } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Scoop",
    copy: "Add 2 scoops of Nutra-4 to a glass or shaker.",
    icon: Package,
  },
  {
    n: "2",
    title: "Mix",
    copy: "Mix with 250–300ml of milk or water until smooth.",
    icon: GlassWater,
  },
  {
    n: "3",
    title: "Drink Daily",
    copy: "Have one serving daily, ideally after a meal or workout.",
    icon: Dumbbell,
  },
];

export default function HowToUse() {
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="container-content">
        <div className="max-w-xl">
          <span className="eyebrow text-yellow-300">How To Use</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Three steps. That&rsquo;s it.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;

            return (
              <div key={s.n} className="relative">
                {/* Icon + Step Number */}
                <div className="flex items-center gap-4">
                  <div className="foil-seal flex h-14 w-14 items-center justify-center">
                    <Icon
                      className="h-7 w-7 text-ink"
                      strokeWidth={2.5}
                    />
                  </div>

                  <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                    Step {s.n}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-ink">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-yellow-300">
                  {s.copy}
                </p>

                {i < steps.length - 1 && (
                  <div
                    className="pointer-events-none absolute right-[-1.5rem] top-7 hidden text-yellow-300 sm:block"
                    aria-hidden="true"
                  >
                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                    >
                      <path
                        d="M0 8H22M22 8L16 2M22 8L16 14"
                        stroke="#A9781E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}