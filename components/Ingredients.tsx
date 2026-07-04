import {
  CheckCircle,
  Truck,
  ShieldCheck,
  PhoneCall,
  BadgeCheck,
  PackageCheck,
} from "lucide-react";

const features = [
  {
    title: "Premium Formula",
    desc: "Specially developed to support healthy weight gain.",
    icon: BadgeCheck,
  },
  {
    title: "100% Original Product",
    desc: "Quality checked before dispatch.",
    icon: ShieldCheck,
  },
  {
    title: "Cash on Delivery",
    desc: "Pay only when your order arrives.",
    icon: PackageCheck,
  },
  {
    title: "Free Delivery",
    desc: "Fast shipping all across Pakistan.",
    icon: Truck,
  },
  {
    title: "Dedicated Support",
    desc: "Our team is available on WhatsApp & Phone.",
    icon: PhoneCall,
  },
  {
    title: "Trusted by 500+ Customers",
    desc: "Real reviews from satisfied customers.",
    icon: CheckCircle,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-paper2 py-16 sm:py-24">
      <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Side */}
        <div>
          <span className="eyebrow">Why Choose Nutra-4</span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Trusted by hundreds across Pakistan.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone sm:text-base">
            We focus on one product and one goal — helping you gain healthy
            weight with confidence. No unnecessary claims, just quality,
            convenience, and dedicated customer support.
          </p>
        </div>

        {/* Right Side */}
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl2 border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-6 w-6 text-gold-deep" strokeWidth={2.3} />
                </div>

                <h3 className="text-lg font-extrabold text-ink">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}