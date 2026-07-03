import type { Metadata } from "next";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import AssetSlot from "@/components/AssetSlot";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Nutra-4 is a Karachi-based weight gainer brand focused on one product, done properly — honest formulation, real customer support, and Cash on Delivery across Pakistan.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <section className="py-16 sm:py-24">
          <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Who We Are</span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                One product. Done properly.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">
                Nutra-4 is built on a simple idea: rather than spreading
                ourselves across a catalogue of supplements, we focus
                entirely on getting one weight gainer right — the
                formulation, the quality checks, and the experience of
                actually ordering it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">
                We&rsquo;re based in Karachi and built the brand around what
                Pakistani customers actually want when trying a new
                supplement: an affordable price, Cash on Delivery so there&rsquo;s
                no risk in trying it, free home delivery, and real people
                on the other end of the phone if something goes wrong.
              </p>
            </div>
            <AssetSlot label="Team / Product Lifestyle Photo" aspect="aspect-[4/5]" />
          </div>
        </section>

        <section className="bg-paper2 py-16 sm:py-24">
          <div className="container-content grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl2 border border-line bg-white p-6 shadow-card">
              <h3 className="text-lg font-extrabold text-ink">Uncompromising Quality</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                Every batch goes through quality checks before it reaches
                your door.
              </p>
            </div>
            <div className="rounded-xl2 border border-line bg-white p-6 shadow-card">
              <h3 className="text-lg font-extrabold text-ink">Built for the Long Haul</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                Formulated to support consistent, sustainable weight gain —
                not a quick spike.
              </p>
            </div>
            <div className="rounded-xl2 border border-line bg-white p-6 shadow-card">
              <h3 className="text-lg font-extrabold text-ink">Real Support</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                Two direct phone lines and WhatsApp — talk to an actual
                person, not a bot.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
