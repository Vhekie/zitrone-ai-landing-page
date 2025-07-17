import { CallToAction } from "./LandingPageSections/CallToAction";
import { CaseStudy } from "./LandingPageSections/CaseStudy";
import { FAQ } from "./LandingPageSections/FAQ";
import { Footer } from "./LandingPageSections/Footer";
import { Pricing } from "./LandingPageSections/Pricing";

export function PricingPage() {
  return (
    <div>
      <CallToAction />
      <Pricing />
      <FAQ />
      <CaseStudy />
      <Footer />
    </div>
  );
}
