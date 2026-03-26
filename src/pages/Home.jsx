import HeroSlider from "../components/home/HeroSlider";
import WelcomeSection from "../components/home/WelcomeSection";
import VideosSection from "../components/home/VideosSection";
import PrioritiesSection from "../components/home/PrioritiesSection";
import ContactDonateSection from "../components/shared/ContactDonateSection";
import InstagramSection from "../components/home/InstagramSection";
import NetworkSection from "../components/home/NetworkSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <VideosSection />
      <PrioritiesSection />
      <NetworkSection />
      <ContactDonateSection variant="dark-card" page="Home" />
      <InstagramSection />
    </>
  );
}
