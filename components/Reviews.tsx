"use client";

import Image from "next/image";
import { reviews } from "@/lib/reviews";
import { Star, BadgeCheck } from "lucide-react";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#F8F5EE] py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="container-content relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#A9781E]">

            CUSTOMER REVIEWS

          </span>

          <h2 className="mt-7 text-4xl font-black text-[#111] lg:text-6xl">

            Real Customers.

            <span className="gold-text block mt-2">

              Real Results.

            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#555]">

            Thousands of customers across Pakistan trust Nutra-4 for healthy
            weight gain. Below are genuine WhatsApp conversations and customer
            feedback.

          </p>

        </div>

        {/* Review Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="group overflow-hidden rounded-[30px] border border-[#E6DDCB] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_70px_rgba(0,0,0,.12)]"
            >

              {/* Screenshot */}

              <div className="overflow-hidden">

                <Image
                  src={`/images/reviews/${review.id}.jpeg`}
                  alt={`${review.name} WhatsApp Review`}
                  width={500}
                  height={800}
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-black text-[#111]">

                      {review.name}

                    </h3>

                    <div className="mt-2 flex items-center gap-1">

                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-[#D8B35B] text-[#D8B35B]"
                        />
                      ))}

                    </div>

                  </div>

                  <div className="rounded-full bg-[#D8B35B]/15 p-3">

                    <BadgeCheck
                      size={24}
                      className="text-[#A9781E]"
                    />

                  </div>

                </div>

                <p className="mt-6 leading-8 text-[#555]">

                  {review.quote}

                </p>

                <div className="mt-7 inline-flex rounded-full bg-[#25D366]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#25D366]">

                  VERIFIED WHATSAPP REVIEW

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Trust Banner */}

        <div className="mt-20 rounded-[35px] border border-[#E6DDCB] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

          <div className="grid gap-8 lg:grid-cols-4">

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                1200+

              </h3>

              <p className="mt-2 text-[#666]">

                Happy Customers

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                4.9★

              </h3>

              <p className="mt-2 text-[#666]">

                Customer Rating

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                100%

              </h3>

              <p className="mt-2 text-[#666]">

                Genuine Reviews

              </p>

            </div>

            <div className="text-center">

              <h3 className="gold-text text-5xl font-black">

                🇵🇰

              </h3>

              <p className="mt-2 text-[#666]">

                Trusted Across Pakistan

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}