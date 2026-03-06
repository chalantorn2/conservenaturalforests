import { useEffect } from "react";
import HeroSection from "../components/local-livelihoods/HeroSection";
import EducationSection from "../components/local-livelihoods/EducationSection";
import AgroforestrySection from "../components/local-livelihoods/AgroforestrySection";
import FireManagementSection from "../components/local-livelihoods/FireManagementSection";
import NetworkSection from "../components/home/NetworkSection";
import ContactDonateSection from "../components/shared/ContactDonateSection";

export default function LocalLivelihoods() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <EducationSection />
      <AgroforestrySection />
      <FireManagementSection />
      <NetworkSection />
      <ContactDonateSection variant="light" />
    </div>
  );
}
