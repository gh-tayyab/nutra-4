import type { Metadata } from "next";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <section className="py-16 sm:py-24">
          <div className="container-content max-w-2xl">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink">Privacy Policy</h1>
            <p className="mt-2 text-sm text-stone">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>

            <div className="mt-8 space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-ink">Information we collect</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone sm:text-base">
                  When you place an order or contact us, we collect your
                  name, phone number, email address, and delivery address so
                  we can process and deliver your order.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-ink">How we use your information</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone sm:text-base">
                  We use your details only to process orders, arrange
                  delivery, and respond to enquiries. We do not sell your
                  information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-ink">Cash on Delivery orders</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone sm:text-base">
                  For Cash on Delivery orders, your name, phone number, and
                  address are shared with our delivery partner solely to
                  complete delivery.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-ink">Contact</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone sm:text-base">
                  Questions about this policy? Email us at{" "}
                  <a href={`mailto:${siteConfig.email}`} className="font-bold text-gold-deep">{siteConfig.email}</a>{" "}
                  or call {siteConfig.phones[0].label}.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
