import type { Metadata } from "next";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: `Delivery times, Cash on Delivery, and returns for ${siteConfig.name} orders.`,
  alternates: { canonical: "/shipping-policy" },
};

const items = [
  "We deliver every order directly to your doorstep, free of charge, anywhere in Pakistan.",
  "We take responsibility if you receive a damaged product — contact us and we'll make it right.",
  "If you need to return an item, you're responsible for the return shipping cost.",
  "Shipping costs are non-refundable.",
  "If a refund is issued, the cost of return shipping will be deducted from it.",
];

export default function ShippingPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <section className="py-16 sm:py-24">
          <div className="container-content max-w-2xl">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink">Shipping Policy</h1>

            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone sm:text-base">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                    <circle cx="9" cy="9" r="9" fill="#E8D9AF" />
                    <path d="M5.5 9.2L7.7 11.4L12.5 6.6" stroke="#7C591A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-10 text-sm text-stone">
              Questions about your order? Call{" "}
              <a href={siteConfig.phones[0].href} className="font-bold text-gold-deep">
                {siteConfig.phones[0].label}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-bold text-gold-deep">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
