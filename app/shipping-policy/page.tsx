import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import {
  Truck,
  PackageCheck,
  ShieldCheck,
  RotateCcw,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Shipping Policy | ${siteConfig.name}`,
  description:
    "Read Nutra-4 Shipping Policy for delivery times, Cash on Delivery, returns and shipping information across Pakistan.",
  alternates: {
    canonical: "/shipping-policy",
  },
};

const items = [
  {
    icon: Truck,
    title: "Free Delivery Across Pakistan",
    text: "We offer FREE doorstep delivery anywhere in Pakistan with every Nutra-4 Premium Weight Gainer order.",
  },
  {
    icon: PackageCheck,
    title: "Cash On Delivery",
    text: "Pay only after receiving your parcel. Cash on Delivery is available nationwide.",
  },
  {
    icon: ShieldCheck,
    title: "Damaged Product Protection",
    text: "If your parcel arrives damaged, contact our support team immediately and we'll resolve the issue as quickly as possible.",
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    text: "Customers are responsible for return shipping charges. If a refund is approved, return shipping costs will be deducted from the refunded amount.",
  },
];

export default function ShippingPolicyPage() {
  return (
    <>

      <main className="bg-[#F8F5EE]">

        {/* Hero */}

        <section className="relative overflow-hidden py-20">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D8B35B]/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

          <div className="container-content relative text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8B35B]/30 bg-[#D8B35B]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#A9781E]">

              <Truck size={15} />

              Shipping Policy

            </span>

            <h1 className="mt-8 text-4xl font-black text-[#111] lg:text-6xl">

              Fast & Secure

              <span className="gold-text block">

                Delivery

              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#666]">

              We aim to deliver every Nutra-4 Premium Weight Gainer order
              quickly, safely and reliably across Pakistan.

            </p>

          </div>

        </section>

        {/* Content */}

        <section className="pb-24">

          <div className="container-content">

            <div className="mx-auto max-w-5xl rounded-[34px] border border-[#E8E0CF] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)] lg:p-16">

              <div className="grid gap-8">

                {items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-6 rounded-3xl border border-[#EEE4D2] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D8B35B] to-[#A9781E]">

                        <Icon
                          className="text-black"
                          size={30}
                        />

                      </div>

                      <div>

                        <h2 className="text-2xl font-black text-[#111]">

                          {item.title}

                        </h2>

                        <p className="mt-3 leading-8 text-[#666]">

                          {item.text}

                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

              {/* Contact Card */}

              <div className="mt-14 rounded-3xl bg-[#111] p-10 text-center text-white">

                <Phone
                  className="mx-auto text-[#D8B35B]"
                  size={42}
                />

                <h2 className="mt-5 text-3xl font-black">

                  Need Help With Your Order?

                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">

                  If you have any questions regarding shipping,
                  delivery status or returns, our support team is
                  always happy to help.

                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

                  <a
                    href={siteConfig.phones[0].href}
                    className="rounded-full bg-gradient-to-r from-[#D8B35B] to-[#A9781E] px-8 py-4 font-black uppercase tracking-[0.15em] text-black transition hover:scale-105"
                  >
                    Call {siteConfig.phones[0].label}
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-[#D8B35B] hover:text-[#D8B35B]"
                  >
                    {siteConfig.email}
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </>
  );
}