"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";
import { Plus, Minus, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F8F5EE] py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="container-content relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#A9781E]">

            FREQUENTLY ASKED QUESTIONS

          </span>

          <h2 className="mt-7 text-4xl font-black text-[#111] lg:text-6xl">

            Got Questions?

            <span className="gold-text block mt-2">

              We've Got Answers

            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#666]">

            Everything you need to know about Nutra-4 Premium Weight Gainer,
            delivery, usage and healthy weight gain.

          </p>

        </div>

        {/* FAQ */}

        <div className="mx-auto mt-20 max-w-4xl space-y-5">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <div
                key={faq.q}
                className="overflow-hidden rounded-[28px] border border-[#E8DFCE] bg-white shadow-[0_12px_35px_rgba(0,0,0,.06)] transition-all duration-300"
              >

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >

                  <h3 className="pr-6 text-xl font-black text-[#111]">

                    {faq.q}

                  </h3>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D8B35B]/10">

                    {active ? (
                      <Minus
                        className="text-[#A9781E]"
                        size={22}
                      />
                    ) : (
                      <Plus
                        className="text-[#A9781E]"
                        size={22}
                      />
                    )}

                  </div>

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 leading-8 text-[#666]">

                      {faq.a}

                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Card */}

        <div className="mx-auto mt-20 max-w-4xl rounded-[35px] border border-[#E6DDCC] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

            <div className="flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#D8B35B] to-[#A9781E]">

                <MessageCircle
                  className="text-black"
                  size={36}
                />

              </div>

              <div>

                <h3 className="text-2xl font-black text-[#111]">

                  Still Have Questions?

                </h3>

                <p className="mt-2 text-[#666]">

                  Our support team is available on WhatsApp to help you.

                </p>

              </div>

            </div>

            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-[#D8B35B] to-[#A9781E] px-8 py-4 font-black text-black transition hover:scale-105"
            >
              Contact Us
            </a>

          </div>

        </div>

      </div>

      {/* FAQ Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

    </section>
  );
}