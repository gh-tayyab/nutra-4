import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
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
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Hero />
        <SocialProofStrip />
        <WhoItsFor />
        <HowItWorks />
        <Ingredients />
        <HowToUse />
        <Reviews />
        <WhyChooseUs />
        <FAQ />
        <OrderSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
