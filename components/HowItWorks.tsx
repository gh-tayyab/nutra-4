import AssetSlot from "./AssetSlot";

// NOTE: Placeholder mechanism copy — swap for the client's finalised wording.
// The old site's "increases appetite... reduces metabolism" line was
// confusing (and metabolism-wise, backwards), so this draft keeps the claims
// simple and directional until the real copy arrives.
const steps = [
  {
    step: "01",
    title: "Supports a bigger appetite",
    copy: "Formulated to help you comfortably eat and absorb more through the day, so you're consistently in a calorie surplus.",
  },
  {
    step: "02",
    title: "Delivers dense, usable calories",
    copy: "A blend of carbohydrates, protein and fats designed to be absorbed efficiently, not just passed through.",
  },
  {
    step: "03",
    title: "Turns surplus into real gains",
    copy: "Extra calories plus quality protein give your body what it needs to build weight and lean muscle, not just water weight.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-16 text-paper sm:py-24">
      <div className="container-content">
        <div className="max-w-xl">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            How Nutra-4 actually works.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base">
            No gimmicks — just a straightforward mechanism for putting on
            healthy weight.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step}>
              <AssetSlot
                label={`Icon — Step ${s.step}`}
                aspect="aspect-square"
                className="mb-6 w-14 !rounded-full !border-gold/50 !bg-white/5"
              />
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
                Step {s.step}
              </span>
              <h3 className="mt-2 text-lg font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
