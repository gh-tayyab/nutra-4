import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck, Lock, Eye, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Read Nutra-4's Privacy Policy to understand how we collect, use and protect your personal information when ordering our premium weight gainer in Pakistan.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* <Header /> */}

      <main className="bg-[#F8F5EE]">

        {/* Hero */}

        <section className="relative overflow-hidden py-20">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D8B35B]/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

          <div className="container-content relative text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8B35B]/30 bg-[#D8B35B]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#A9781E]">

              <ShieldCheck size={15} />

              Privacy Policy

            </span>

            <h1 className="mt-8 text-4xl font-black text-[#111] lg:text-6xl">

              Your Privacy
              <span className="gold-text block">
                Matters To Us
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#666]">

              We value your trust and are committed to protecting your
              personal information whenever you purchase Nutra-4 Premium
              Weight Gainer.

            </p>

          </div>

        </section>

        {/* Content */}

        <section className="pb-24">

          <div className="container-content">

            <div className="mx-auto max-w-4xl rounded-[34px] border border-[#E8E0CF] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)] lg:p-16">

              <p className="mb-12 text-sm font-semibold text-[#999]">

                Last Updated •{" "}
                {new Date().toLocaleDateString("en-GB", {
                  month: "long",
                  year: "numeric",
                })}

              </p>

              <div className="space-y-12">

                <div>

                  <div className="mb-4 flex items-center gap-3">

                    <Lock className="text-[#A9781E]" />

                    <h2 className="text-2xl font-black text-[#111]">
                      Information We Collect
                    </h2>

                  </div>

                  <p className="leading-8 text-[#666]">

                    When you place an order, contact our support team,
                    or communicate with us via WhatsApp, we may collect
                    your name, phone number, email address and delivery
                    address to process and fulfil your order efficiently.

                  </p>

                </div>

                <div>

                  <div className="mb-4 flex items-center gap-3">

                    <Eye className="text-[#A9781E]" />

                    <h2 className="text-2xl font-black text-[#111]">
                      How We Use Your Information
                    </h2>

                  </div>

                  <p className="leading-8 text-[#666]">

                    Your information is used solely for order processing,
                    delivery, customer support and improving our services.
                    We never sell, rent or misuse your personal data.

                  </p>

                </div>

                <div>

                  <div className="mb-4 flex items-center gap-3">

                    <ShieldCheck className="text-[#A9781E]" />

                    <h2 className="text-2xl font-black text-[#111]">
                      Cash On Delivery Orders
                    </h2>

                  </div>

                  <p className="leading-8 text-[#666]">

                    To complete Cash on Delivery shipments, your name,
                    address and phone number are securely shared only
                    with our trusted courier partner for successful
                    delivery.

                  </p>

                </div>

                <div>

                  <div className="mb-4 flex items-center gap-3">

                    <Phone className="text-[#A9781E]" />

                    <h2 className="text-2xl font-black text-[#111]">
                      Contact Us
                    </h2>

                  </div>

                  <p className="leading-8 text-[#666]">

                    If you have any questions regarding this Privacy
                    Policy, please contact us.

                  </p>

                  <div className="mt-6 rounded-2xl bg-[#F8F5EE] p-6">

                    <p className="font-bold text-[#111]">
                      Email:{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-[#A9781E]"
                      >
                        {siteConfig.email}
                      </a>
                    </p>

                    <p className="mt-2 font-bold text-[#111]">
                      Phone: {siteConfig.phones[0].label}
                    </p>

                    <p className="mt-2 text-[#666]">
                      {siteConfig.address}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </>
  );
}