"use client";

import {
  CheckCircle2,
  XCircle,
  Crown,
  ShieldCheck,
  Truck,
  PhoneCall,
  BadgeCheck,
} from "lucide-react";

const rows = [
  {
    feature: "Premium Weight Gainer Formula",
    nutra: true,
    generic: false,
    icon: Crown,
  },
  {
    feature: "100% Original Product",
    nutra: true,
    generic: false,
    icon: ShieldCheck,
  },
  {
    feature: "Cash On Delivery",
    nutra: true,
    generic: false,
    icon: BadgeCheck,
  },
  {
    feature: "Free Delivery",
    nutra: true,
    generic: false,
    icon: Truck,
  },
  {
    feature: "Dedicated WhatsApp Support",
    nutra: true,
    generic: false,
    icon: PhoneCall,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EE] py-24">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="container-content relative z-10">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#A9781E]">

            COMPARISON

          </span>

          <h2 className="mt-6 text-4xl font-black text-[#111] lg:text-6xl">

            Why Nutra-4 Is

            <span className="gold-text block mt-2">

              Different

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#666]">

            Compare Nutra-4 with ordinary weight gain supplements and see why
            thousands choose our premium formula.

          </p>

        </div>

        <div className="mt-20 overflow-hidden rounded-[35px] border border-[#E5DDCC] bg-white shadow-[0_25px_70px_rgba(0,0,0,.08)]">

          <div className="grid grid-cols-3 bg-[#111] text-white">

            <div className="p-6 text-lg font-black">

              Features

            </div>

            <div className="border-x border-white/10 p-6 text-center">

              <h3 className="gold-text text-2xl font-black">

                Nutra-4

              </h3>

            </div>

            <div className="p-6 text-center font-bold text-white/70">

              Generic Gainer

            </div>

          </div>

          {rows.map((row) => {

            const Icon = row.icon;

            return (

              <div
                key={row.feature}
                className="grid grid-cols-3 border-t border-[#EFE7D8] transition hover:bg-[#FCFAF5]"
              >

                <div className="flex items-center gap-4 p-6">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B35B]/10">

                    <Icon
                      className="h-6 w-6 text-[#A9781E]"
                    />

                  </div>

                  <span className="font-bold text-[#111]">

                    {row.feature}

                  </span>

                </div>

                <div className="flex items-center justify-center border-x border-[#EFE7D8]">

                  <CheckCircle2
                    size={28}
                    className="text-green-600"
                  />

                </div>

                <div className="flex items-center justify-center">

                  <XCircle
                    size={28}
                    className="text-gray-400"
                  />

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}