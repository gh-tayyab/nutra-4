import AssetSlot from "./AssetSlot";

const tiles = [
  {
    title: "Weight Gain",
    copy: "Steady, healthy weight gain without relying on junk calories.",
  },
  {
    title: "Muscle Building",
    copy: "Supports lean muscle growth alongside your training.",
  },
  {
    title: "Metabolism Support",
    copy: "Helps your body use what you eat more efficiently.",
  },
  {
    title: "Energy & Endurance",
    copy: "Keeps you fuelled through workouts and long days.",
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
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="group rounded-xl2 border border-line bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <AssetSlot
                label={`Icon — ${tile.title}`}
                aspect="aspect-square"
                className="mb-5 w-14 !rounded-full"
              />
              <h3 className="text-base font-extrabold text-ink">{tile.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{tile.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
