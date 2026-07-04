"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
const navLinks = [
  { label: "Benefits", href: "/#benefits" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-content flex h-24 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/images/logoo.png"
            alt="Nutra-4 Logo"
            width={180}
            height={60}
            priority
            className="h-20 w-auto object-contain lg:h-24"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-extrabold uppercase tracking-wide text-ink/80 transition-colors hover:text-gold-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex flex-col items-end leading-tight">
            {siteConfig.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="text-xs font-bold text-stone transition-colors hover:text-gold-deep"
              >
                {phone.label}
              </a>
            ))}
          </div>
          <a href="/#order" className="btn-primary">
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="#15130F"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 5H18M2 10H18M2 15H18"
                stroke="#15130F"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav
            className="container-content flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-extrabold uppercase tracking-wide text-ink hover:bg-paper2"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-1 border-t border-line pt-3">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="px-2 py-1 text-sm font-bold text-stone"
                >
                  {phone.label}
                </a>
              ))}
            </div>
            <a
              href="/#order"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
