"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { label: "Benefits", href: "/#benefits" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">
      {/* Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="container-content relative z-10 py-20">
        {/* Trust Strip */}

        <div className="mb-16 grid gap-6 rounded-[30px] border border-white/10 bg-white/5 p-8 md:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D8B35B]/10">
              <ShieldCheck className="text-[#D8B35B]" size={30} />
            </div>

            <div>
              <h3 className="font-black">100% Original</h3>

              <p className="text-sm text-white/55">Premium Quality Formula</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D8B35B]/10">
              <Truck className="text-[#D8B35B]" size={30} />
            </div>

            <div>
              <h3 className="font-black">Free Delivery</h3>

              <p className="text-sm text-white/55">Across Pakistan</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D8B35B]/10">
              <CheckCircle2 className="text-[#D8B35B]" size={30} />
            </div>

            <div>
              <h3 className="font-black">Cash On Delivery</h3>

              <p className="text-sm text-white/55">Safe & Secure Shopping</p>
            </div>
          </div>
        </div>

        {/* Footer Grid */}

        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <Image
              src="/images/logoo.png"
              alt="Nutra-4 Logo"
              width={220}
              height={80}
              className="h-24 w-auto object-contain"
              priority
            />

            <p className="mt-6 leading-8 text-white/60">
              Nutra-4 Premium Weight Gainer helps naturally support healthy
              weight gain, muscle growth and everyday energy with high-quality
              nutrition.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#D8B35B] hover:text-[#D8B35B]"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#D8B35B] hover:text-[#D8B35B]"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-lg font-black text-[#D8B35B]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/65 transition hover:translate-x-1 hover:text-[#D8B35B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-lg font-black text-[#D8B35B]">
              Contact Us
            </h3>

            <div className="space-y-5">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="flex items-start gap-4 text-white/70 transition hover:text-white"
                >
                  <Phone size={20} className="mt-1 text-[#D8B35B]" />

                  <span>{phone.label}</span>
                </a>
              ))}

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 text-white/70 transition hover:text-white"
              >
                <Mail size={20} className="mt-1 text-[#D8B35B]" />

                <span>{siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-white/70 transition hover:text-white"
              >
                <MessageCircle size={20} className="mt-1 text-[#D8B35B]" />

                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-start gap-4 text-white/70">
                <MapPin size={20} className="mt-1 text-[#D8B35B]" />

                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* CTA */}

          <div>
            <h3 className="mb-6 text-lg font-black text-[#D8B35B]">
              Start Your Weight Gain Journey
            </h3>

            <p className="leading-7 text-white/60">
              Order Nutra-4 Premium Weight Gainer today and enjoy Free Delivery
              with Cash on Delivery available all across Pakistan.
            </p>

            <a
              href="/#order"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D8B35B] to-[#A9781E] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition duration-300 hover:scale-105"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
            <p className="text-sm text-white/45">
              © {new Date().getFullYear()} {siteConfig.name}. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/45">
              <span>Premium Weight Gainer Pakistan</span>

              <span>•</span>

              <span>Healthy Weight Gain Supplement</span>

              <span>•</span>

              <span>Free Delivery Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
