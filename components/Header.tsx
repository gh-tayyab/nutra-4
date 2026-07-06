"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Benefits", href: "/#benefits" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#0d0d0d]/90 shadow-2xl backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-content">

          <div className="flex h-24 items-center justify-between">

            {/* Logo */}

            <Link
              href="/"
              aria-label={`${siteConfig.name} Home`}
              className="group relative z-20 flex items-center"
            >
              <Image
                src="/images/logoo.png"
                alt="Nutra-4 Weight Gainer Pakistan"
                width={185}
                height={70}
                priority
                className="h-20 w-auto object-contain transition duration-500 group-hover:scale-105 lg:h-24"
              />
            </Link>

            {/* Desktop Navigation */}

            <nav
              aria-label="Primary"
              className="hidden items-center lg:flex"
            >
              <div
                className={`flex items-center rounded-full border transition-all duration-500 ${
                  scrolled
                    ? "border-white/10 bg-white/5 backdrop-blur-xl"
                    : "border-white/20 bg-black/20 backdrop-blur-lg"
                }`}
              >
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group relative px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:text-[#D8B35B]"
                  >
                    {item.label}

                    <span className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#D8B35B] transition-all duration-300 group-hover:w-8"></span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Right Side */}

            <div className="hidden items-center gap-5 lg:flex">

              <div className="flex flex-col items-end">

                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="text-xs font-semibold tracking-wide text-white/75 transition hover:text-[#D8B35B]"
                  >
                    {phone.label}
                  </a>
                ))}

              </div>

              <a
                href="/#order"
                className="group relative overflow-hidden rounded-full border border-[#D8B35B]/50 bg-gradient-to-r from-[#D8B35B] to-[#A9781E] px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-black shadow-[0_10px_35px_rgba(216,179,91,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_15px_45px_rgba(216,179,91,0.55)]"
              >
                <span className="relative z-10">
                  Order Now
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full"></span>

              </a>

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle Menu"
              className={`relative z-20 flex h-12 w-12 items-center justify-center rounded-full border transition duration-300 lg:hidden ${
                scrolled
                  ? "border-white/20 bg-white/5"
                  : "border-white/20 bg-black/20 backdrop-blur-lg"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {open ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="#D8B35B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <>
                    <path
                      d="M4 7H20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4 12H20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4 17H20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </svg>
            </button>

          </div>
                    {/* Mobile Menu */}

                    <div
            className={`overflow-hidden transition-all duration-500 lg:hidden ${
              open
                ? "max-h-[700px] opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-2 rounded-3xl border border-white/10 bg-[#0d0d0d]/95 p-6 shadow-2xl backdrop-blur-2xl">

              <nav className="flex flex-col gap-2">

                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#D8B35B]/30 hover:bg-white/5 hover:text-[#D8B35B]"
                  >
                    {item.label}

                    <svg
                      className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 5L16 12L8 19"
                        stroke="#D8B35B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}

              </nav>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="space-y-3">

                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="block text-sm font-semibold tracking-wide text-white/75 transition hover:text-[#D8B35B]"
                  >
                    {phone.label}
                  </a>
                ))}

              </div>

              <a
                href="/#order"
                onClick={() => setOpen(false)}
                className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D8B35B] to-[#A9781E] text-sm font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_15px_40px_rgba(216,179,91,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(216,179,91,0.5)]"
              >
                Order Now
              </a>

            </div>
          </div>

        </div>
      </header>
    </>
  );
}
