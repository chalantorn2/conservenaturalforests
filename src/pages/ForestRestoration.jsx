import { useEffect } from "react";
import HeroSection from "../components/forest-restoration/HeroSection";
import IntroGallerySection from "../components/forest-restoration/IntroGallerySection";
import DegradationSection from "../components/forest-restoration/DegradationSection";
import ANRSection from "../components/forest-restoration/ANRSection";
import FrameworkSection from "../components/forest-restoration/FrameworkSection";
import SpeciesSection from "../components/forest-restoration/SpeciesSection";
import MangroveSection from "../components/forest-restoration/MangroveSection";
import ExploreSection from "../components/forest-restoration/ExploreSection";
import ContactDonateSection from "../components/shared/ContactDonateSection";

export default function ForestRestoration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <IntroGallerySection />
      <DegradationSection />
      <ANRSection />
      <FrameworkSection />
      <SpeciesSection />
      <MangroveSection />
      <ExploreSection />
      <ContactDonateSection variant="dark-card" />
    </div>
  );
}
