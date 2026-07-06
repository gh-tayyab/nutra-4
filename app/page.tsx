import Hero from "@/components/Hero";
import SocialProofStrip from "@/components/SocialProofStrip";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import Ingredients from "@/components/Ingredients";
import HowToUse from "@/components/HowToUse";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import OrderSection from "@/components/OrderSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        {/* <SocialProofStrip /> */}
        <WhoItsFor />
        <WhyChooseUs />
        <HowItWorks />
        <Ingredients />
        <HowToUse />
        <Reviews />
        <OrderSection />
        <FAQ />
        <ContactSection />
      </main>
    </>
  );
}
