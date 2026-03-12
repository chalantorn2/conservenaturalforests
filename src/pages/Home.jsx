import HeroSlider from "../components/home/HeroSlider";
import WelcomeSection from "../components/home/WelcomeSection";
import VideosSection from "../components/home/VideosSection";
import PrioritiesSection from "../components/home/PrioritiesSection";
import ContactDonateSection from "../components/shared/ContactDonateSection";
import InstagramSection from "../components/home/InstagramSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <VideosSection />
      <PrioritiesSection />
      <ContactDonateSection variant="home" />
      <InstagramSection />
    </>
  );
}
