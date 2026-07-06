"use client";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F5EE] py-24"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="container-content relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#D8B35B]/20 bg-[#D8B35B]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#A9781E]">
            CONTACT NUTRA-4
          </span>

          <h2 className="mt-7 text-4xl font-black text-[#111] lg:text-6xl">
            Need Help Before
            <span className="gold-text block mt-2">Ordering?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#666]">
            Have questions about our Premium Weight Gainer? Our support team is
            available every day to help you choose the right package and answer
            your questions.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* LEFT */}

          <div className="rounded-[34px] border border-[#E5DDCC] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#D8B35B] to-[#A9781E]">
                <MessageCircle size={38} className="text-black" />
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#111]">
                  Talk To Our Team
                </h3>

                <p className="mt-2 text-[#666]">Fast replies on WhatsApp.</p>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {/* Phone */}

              <div className="flex items-center gap-5 rounded-2xl border border-[#EEE4D2] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8B35B]/10">
                  <Phone size={26} className="text-[#A9781E]" />
                </div>

                <div>
                  <p className="text-sm text-[#777]">Call Us</p>

                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block text-lg font-black text-[#111] hover:text-[#A9781E]"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}

              <div className="flex items-center gap-5 rounded-2xl border border-[#EEE4D2] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <MessageCircle size={26} className="text-green-600" />
                </div>

                <div>
                  <p className="text-sm text-[#777]">WhatsApp Support</p>

                  <a
                    href={siteConfig.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-black text-[#111] hover:text-green-600"
                  >
                    Chat With Us
                  </a>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-center gap-5 rounded-2xl border border-[#EEE4D2] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8B35B]/10">
                  <Mail size={26} className="text-[#A9781E]" />
                </div>

                <div>
                  <p className="text-sm text-[#777]">Email Address</p>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg font-black text-[#111] hover:text-[#A9781E]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Address */}

              <div className="flex items-center gap-5 rounded-2xl border border-[#EEE4D2] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8B35B]/10">
                  <MapPin size={26} className="text-[#A9781E]" />
                </div>

                <div>
                  <p className="text-sm text-[#777]">Our Location</p>

                  <p className="font-bold text-[#111]">{siteConfig.address}</p>
                </div>
              </div>

              {/* Hours */}

              <div className="flex items-center gap-5 rounded-2xl border border-[#EEE4D2] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8B35B]/10">
                  <Clock3 size={26} className="text-[#A9781E]" />
                </div>

                <div>
                  <p className="text-sm text-[#777]">Support Hours</p>

                  <p className="font-bold text-[#111]">
                    Monday – Sunday • 9:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D8B35B] to-[#A9781E] px-8 py-5 text-lg font-black uppercase tracking-[0.15em] text-black transition hover:scale-[1.03]"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT */}

          <div className="space-y-8">
            <div className="overflow-hidden rounded-[34px] border border-[#E5DDCC] bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
              <iframe
                src={siteConfig.mapEmbedSrc}
                width="100%"
                height="520"
                style={{ border: 0 }}
                loading="lazy"
                title="Nutra-4 Pakistan"
              />
            </div>

            <div className="rounded-[30px] border border-[#E5DDCC] bg-white p-8 shadow-[0_15px_45px_rgba(0,0,0,.08)]">
              <div className="flex items-center gap-4">
                <ShieldCheck size={34} className="text-[#A9781E]" />

                <div>
                  <h3 className="text-2xl font-black text-[#111]">
                    Shop With Confidence
                  </h3>

                  <p className="mt-2 text-[#666]">
                    ✔ 100% Original Product
                    <br />
                    ✔ Free Delivery Across Pakistan
                    <br />
                    ✔ Cash On Delivery Available
                    <br />✔ Friendly Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
