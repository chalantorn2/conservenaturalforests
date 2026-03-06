import HeroSection from "../components/contact/HeroSection";
import ContactFormSection from "../components/contact/ContactFormSection";
import DonateCtaSection from "../components/contact/DonateCtaSection";
import NetworkSection from "../components/home/NetworkSection";
import ContactFooter from "../components/contact/ContactFooter";

export default function Contact() {
  return (
    <>
      <HeroSection />
      <ContactFormSection />
      <DonateCtaSection />
      <NetworkSection />
      <ContactFooter />
    </>
  );
}
