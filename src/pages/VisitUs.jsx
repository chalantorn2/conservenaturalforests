import { useEffect } from "react";
import HeroSection from "../components/visit-us/HeroSection";
import AboutVisitSection from "../components/visit-us/AboutVisitSection";
import ParallaxInfoSection from "../components/visit-us/ParallaxInfoSection";
import ReviewsSlider from "../components/visit-us/ReviewsSlider";
import BookingFormSection from "../components/visit-us/BookingFormSection";
import ContactDonateSection from "../components/shared/ContactDonateSection";
import NetworkSection from "../components/home/NetworkSection";
import InstagramSection from "../components/home/InstagramSection";

export default function VisitUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutVisitSection />
      <ParallaxInfoSection />
      <ReviewsSlider />
      <BookingFormSection />
      <NetworkSection />
      <ContactDonateSection />
      <InstagramSection />
    </div>
  );
}
