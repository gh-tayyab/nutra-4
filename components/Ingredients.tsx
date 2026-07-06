"use client";

import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  PhoneCall,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Premium Weight Gainer Formula",
    desc: "Scientifically balanced nutrition for healthy weight gain, lean muscle growth and daily energy.",
    icon: BadgeCheck,
  },
  {
    title: "100% Original Product",
    desc: "Every Nutra-4 pack is quality checked to ensure maximum freshness and authenticity.",
    icon: ShieldCheck,
  },
  {
    title: "Cash On Delivery",
    desc: "Order with confidence and pay only after receiving your parcel anywhere in Pakistan.",
    icon: PackageCheck,
  },
  {
    title: "Free Delivery",
    desc: "Fast nationwide shipping with secure packaging and timely dispatch.",
    icon: Truck,
  },
  {
    title: "Dedicated Support",
    desc: "Our support team is always available on WhatsApp to help before and after your purchase.",
    icon: PhoneCall,
  },
  {
    title: "Trusted By Customers",
    desc: "Thousands of satisfied customers continue to choose Nutra-4 for healthy weight gain.",
    icon: CheckCircle2,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24">

      {/* Background */}

      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[130px]" />

      <div className="container-content relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D8B35B]">

            WHY CHOOSE NUTRA-4

          </span>

          <h2 className="mt-7 text-4xl font-black text-white lg:text-6xl">

            Trusted Across

            <span className="gold-text block mt-2">

              Pakistan

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">

            Nutra-4 is a premium
            <span className="font-bold text-[#D8B35B]">
              {" "}Weight Gainer in Pakistan
            </span>
            {" "}designed for healthy weight gain, muscle growth and better
            daily performance. Quality, authenticity and customer satisfaction
            are always our top priority.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#D8B35B]/40 hover:bg-white/10"
              >

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D8B35B]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#D8B35B] to-[#A9781E] shadow-[0_15px_35px_rgba(216,179,91,.35)]">

                  <Icon className="h-9 w-9 text-black" />

                </div>

                <h3 className="mt-8 text-2xl font-black text-white">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-8 text-white/65">

                  {feature.desc}

                </p>

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

        {/* Bottom Trust Banner */}

        <div className="mt-20 rounded-[35px] border border-[#D8B35B]/20 bg-gradient-to-r from-[#D8B35B]/10 via-transparent to-[#D8B35B]/10 p-10 backdrop-blur-xl">

          <div className="grid gap-10 lg:grid-cols-4">

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                1200+

              </h3>

              <p className="mt-3 text-white/60">

                Happy Customers

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                4.9★

              </h3>

              <p className="mt-3 text-white/60">

                Average Rating

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                COD

              </h3>

              <p className="mt-3 text-white/60">

                All Pakistan

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                100%

              </h3>

              <p className="mt-3 text-white/60">

                Original Product

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}