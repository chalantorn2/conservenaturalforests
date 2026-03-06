import { useEffect } from "react";
import HeroSection from "../components/our-team/HeroSection";
import IntroSection from "../components/our-team/IntroSection";
import ProjectCardsSection from "../components/our-team/ProjectCardsSection";
import TeamSection from "../components/our-team/TeamSection";
import NetworkSection from "../components/home/NetworkSection";
import ContactDonateSection from "../components/shared/ContactDonateSection";

export default function OurTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ProjectCardsSection />
      <TeamSection />
      <NetworkSection />
      <ContactDonateSection />
    </div>
  );
}
