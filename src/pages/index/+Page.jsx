import About from "../../components/about/About";
import Carousel from "../../components/carousel/Carousel";
import ContactSection from "../../components/contactSection/ContactSection";
import HighlightsSection from "../../components/highlightsSection/HighlightsSection";
import "./Home.scss";
import LocationSection from "../../components/locationSection/LocationSection";
import PhotoGallery from "../../components/photogallery/PhotoGallery";
import ServicesSection from "../../components/servicesSection/ServicesSection";
import background1 from "/src/assets/image6.webp";
import background2 from "/src/assets/image11.webp";
import CTA from "../../components/cta/CTA";
import TestimonialsSection from "../../components/testimonialsSection/TestimonialsSection";

export default function Page() {
  return (
    <>
      <Carousel />

      <HighlightsSection />

      <About />

      <ServicesSection />

      <CTA
        background={background1}
        title="Ready for your hair transformation?"
        desc="Book now or explore our services for more information."
      />

      <LocationSection />

      <TestimonialsSection />

      <PhotoGallery />

      <ContactSection />

      <CTA
        background={background2}
        title="Ready for a new look? Let our stylists craft a style that’s uniquely yours."
        desc="Walk-ins are welcome, but appointments are recommended to secure your preferred time."
      />
    </>
  );
}
