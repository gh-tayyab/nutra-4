import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Dumbbell,
  Truck,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Nutra-4 | Premium Weight Gainer Pakistan",
  description:
    "Learn about Nutra-4, Pakistan's premium weight gainer brand focused on healthy weight gain, muscle support, quality nutrition, Cash on Delivery and free nationwide delivery.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    text: "Every Nutra-4 batch is carefully quality checked before it reaches our customers.",
  },
  {
    icon: Dumbbell,
    title: "Healthy Weight Gain",
    text: "Designed for consistent weight gain while supporting muscle development and daily nutrition.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    text: "Fast delivery all across Pakistan with convenient Cash on Delivery service.",
  },
  {
    icon: MessageCircle,
    title: "Real Customer Support",
    text: "Friendly WhatsApp and phone support whenever you need assistance.",
  },
];

export default function AboutPage() {
  return (
    <>


      <main className="bg-[#F8F5EE]">

        {/* HERO */}

        <section className="relative overflow-hidden py-20">

          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

          <div className="container-content relative grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="inline-flex rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#A9781E]">

                ABOUT NUTRA-4

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-[#111] lg:text-6xl">

                Pakistan's Premium

                <span className="gold-text block">

                  Weight Gainer Brand

                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-[#666]">

                Nutra-4 was created with one simple mission:
                helping naturally skinny people achieve healthy
                weight gain through a premium nutritional formula.

              </p>

              <p className="mt-6 text-lg leading-9 text-[#666]">

                Instead of selling dozens of supplements,
                we focus on perfecting one premium weight
                gainer that delivers quality nutrition,
                dependable customer support and a smooth
                shopping experience across Pakistan.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <span className="rounded-full bg-[#111] px-5 py-3 text-sm font-bold text-white">

                  ✓ Premium Formula

                </span>

                <span className="rounded-full bg-[#111] px-5 py-3 text-sm font-bold text-white">

                  ✓ Free Delivery

                </span>

                <span className="rounded-full bg-[#111] px-5 py-3 text-sm font-bold text-white">

                  ✓ Cash On Delivery

                </span>

              </div>

            </div>

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#D8B35B]/20 blur-[90px]" />

              <Image
                src="/images/product1.png"
                alt="Nutra-4 Premium Weight Gainer Pakistan"
                width={550}
                height={650}
                priority
                className="relative mx-auto drop-shadow-[0_40px_70px_rgba(0,0,0,.35)]"
              />

            </div>

          </div>

        </section>

        {/* VALUES */}

        <section className="pb-24">

          <div className="container-content">

            <div className="text-center">

              <span className="inline-flex rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#A9781E]">

                WHY PEOPLE TRUST US

              </span>

              <h2 className="mt-6 text-4xl font-black text-[#111]">

                More Than Just Another

                <span className="gold-text block">

                  Weight Gainer

                </span>

              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {values.map((item) => {
                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="rounded-[30px] border border-[#E8E0CF] bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D8B35B] to-[#A9781E]">

                      <Icon
                        className="text-black"
                        size={30}
                      />

                    </div>

                    <h3 className="text-xl font-black text-[#111]">

                      {item.title}

                    </h3>

                    <p className="mt-4 leading-8 text-[#666]">

                      {item.text}

                    </p>

                  </div>

                );
              })}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="pb-24">

          <div className="container-content">

            <div className="rounded-[36px] bg-[#111] px-10 py-16 text-center text-white">

              <h2 className="text-4xl font-black">

                Ready To Start Your

                <span className="block text-[#D8B35B]">

                  Weight Gain Journey?

                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/70">

                Join hundreds of satisfied customers across Pakistan
                who trust Nutra-4 Premium Weight Gainer for healthy
                weight gain, muscle support and everyday nutrition.

              </p>

              <a
                href="/#order"
                className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#D8B35B] to-[#A9781E] px-10 py-5 text-sm font-black uppercase tracking-[0.18em] text-black transition duration-300 hover:scale-105"
              >
                Order Now
              </a>

            </div>

          </div>

        </section>

      </main>

    </>
  );
}