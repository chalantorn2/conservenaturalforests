import { useEffect } from "react";
import HeroSection from "../components/donate/HeroSection";
import IntroSection from "../components/donate/IntroSection";
import ProjectCardsSection from "../components/donate/ProjectCardsSection";
import MitigationSection from "../components/donate/MitigationSection";
import RestorationSitesSection from "../components/donate/RestorationSitesSection";
import CarbonFootprintSection from "../components/donate/CarbonFootprintSection";
import TreesImpactSection from "../components/donate/TreesImpactSection";
import DonationCalculatorSection from "../components/donate/DonationCalculatorSection";
import ContactFormSection from "../components/donate/ContactFormSection";
export default function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ProjectCardsSection />
      <MitigationSection />
      <RestorationSitesSection />
      <CarbonFootprintSection />
      <TreesImpactSection />
      <DonationCalculatorSection />
      <ContactFormSection />
    </div>
  );
}
