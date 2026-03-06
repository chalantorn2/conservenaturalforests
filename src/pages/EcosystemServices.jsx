import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/ecosystem-services/HeroSection";
import IntroSection from "../components/ecosystem-services/IntroSection";
import CarbonSection from "../components/ecosystem-services/CarbonSection";
import BiodiversitySection from "../components/ecosystem-services/BiodiversitySection";
import SoilWaterSection from "../components/ecosystem-services/SoilWaterSection";
import MapsSection from "../components/ecosystem-services/MapsSection";
import NetworkSection from "../components/home/NetworkSection";
import ContactDonateSection from "../components/shared/ContactDonateSection";

export default function EcosystemServices() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div>
      <HeroSection />
      <IntroSection />
      <CarbonSection />
      <BiodiversitySection />
      <SoilWaterSection />
      <MapsSection />
      <NetworkSection />
      <ContactDonateSection variant="light" />
    </div>
  );
}
