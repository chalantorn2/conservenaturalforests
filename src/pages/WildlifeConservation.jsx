import { useEffect } from "react";
import HeroSection from "../components/wildlife-conservation/HeroSection";
import IntroSection from "../components/wildlife-conservation/IntroSection";
import ElephantSection from "../components/wildlife-conservation/ElephantSection";
import EcoTourSection from "../components/wildlife-conservation/EcoTourSection";
import ElephantDetailSection from "../components/wildlife-conservation/ElephantDetailSection";
import ContactDonateSection from "../components/shared/ContactDonateSection";
import NetworkSection from "../components/home/NetworkSection";
import InstagramSection from "../components/home/InstagramSection";

export default function WildlifeConservation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ElephantSection />
      <EcoTourSection />
      <ElephantDetailSection />
      <NetworkSection />
      <ContactDonateSection variant="light" />
      <InstagramSection />
    </div>
  );
}
