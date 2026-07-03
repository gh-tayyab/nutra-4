import Image from "next/image";
import AssetSlot from "./AssetSlot";

const facts = [
  { label: "Serving Size", value: "2 scoops (~100g)" },
  { label: "Calories", value: "TBC per serving" },
  { label: "Protein", value: "TBC g" },
  { label: "Carbohydrates", value: "TBC g" },
  { label: "Fats", value: "TBC g" },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-16 sm:py-24">
      <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-1 lg:order-1">
          <span className="eyebrow">Ingredients &amp; Nutrition</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            What&rsquo;s actually inside the box.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone sm:text-base">
            Carefully selected ingredients, no unnecessary fillers.
            Nutrition figures below are placeholders — confirm final numbers
            from your product label before launch.
          </p>

          <dl className="mt-8 divide-y divide-line rounded-xl2 border border-line bg-white shadow-card">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between px-6 py-4">
                <dt className="text-sm font-bold text-stone">{fact.label}</dt>
                <dd className="text-sm font-extrabold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-2 lg:order-2 flex justify-center">
  <div className="relative w-full max-w-md h-[400px]">
    <Image
      src="/images/product2.png"
      alt="Ingredients"
      fill
      className="object-contain"
    />
  </div>
</div>
      </div>
    </section>
  );
}
