import { AnimatedHeader } from "@/components/animated-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeader />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
