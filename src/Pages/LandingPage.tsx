import { AIInfo } from "./LandingPageSections/AIInfo";
import { Benefits } from "./LandingPageSections/Benefits";
import { CallToAction } from "./LandingPageSections/CallToAction";
import { CaseStudy } from "./LandingPageSections/CaseStudy";
import { CustomerData } from "./LandingPageSections/CustomerData";
import { FAQ } from "./LandingPageSections/FAQ";
import { Feedback } from "./LandingPageSections/Feedback";
import { Footer } from "./LandingPageSections/Footer";
import { HeroSection } from "./LandingPageSections/HeroSection";
import { Offers } from "./LandingPageSections/Offers";
import { Pricing } from "./LandingPageSections/Pricing";
import { Product } from "./LandingPageSections/Product";

export function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Benefits />
      <Feedback />
      <AIInfo />
      <CustomerData />
      <Offers />
      <Product />
      <CaseStudy />
      <Footer />
      <CallToAction />
      <Pricing />
      <FAQ />
      <CaseStudy />
      <Footer />
    </div>
  );
}
