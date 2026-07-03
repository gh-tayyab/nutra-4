const steps = [
  { n: "1", title: "Scoop", copy: "Add 2 scoops of Nutra-4 to a glass or shaker." },
  { n: "2", title: "Mix", copy: "Mix with 250–300ml of milk or water until smooth." },
  { n: "3", title: "Drink daily", copy: "Have one serving daily, ideally after a meal or workout." },
];

export default function HowToUse() {
  return (
    <section className="bg-paper2 py-16 sm:py-24">
      <div className="container-content">
        <div className="max-w-xl">
          <span className="eyebrow">How To Use</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Three steps. That&rsquo;s it.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="foil-seal h-12 w-12 text-lg font-extrabold text-ink">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{s.copy}</p>
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-[-1.5rem] top-6 hidden text-gold sm:block" aria-hidden="true">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <path d="M0 8H22M22 8L16 2M22 8L16 14" stroke="#A9781E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
