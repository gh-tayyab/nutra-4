import Link from "next/link";
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
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="text-2xl font-extrabold tracking-tight">
            NUTRA<span className="text-gold">-4</span>
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
            A single, focused weight gainer formula — made for the
            skinny-to-strong journey, with free delivery and Cash on
            Delivery across Pakistan.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nutra-4 on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M10.5 4.5H12V2h-2c-1.7 0-3 1.3-3 3v1.5H5.5V9H7v6h2V9h1.6l.4-2.5H9V5.5c0-.6.4-1 1-1z"/></svg>
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nutra-4 on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3"/><circle cx="11.7" cy="4.3" r="0.8" fill="currentColor"/></svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wide text-gold">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-paper/70 hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wide text-gold">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            {siteConfig.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="hover:text-paper">{p.label}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">{siteConfig.email}</a>
            </li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wide text-gold">Order</p>
          <p className="mt-4 text-sm text-paper/70">
            Free home delivery. Cash on Delivery available.
          </p>
          <a href="/#order" className="btn-primary mt-4 bg-gold text-ink hover:bg-gold-deep hover:text-paper">
            Order Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-content text-center text-xs text-paper/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
