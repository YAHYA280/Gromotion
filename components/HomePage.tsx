import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import ServicesSection from "./sections/ServicesSection";
import TreatmentPlansSection from "./sections/TreatmentPlansSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import FAQSection from "./sections/FAQSection";
import Footer from "./sections/Footer";
import LocationSection from "./sections/LocationSection";
import { JSX } from "react";

export const HomePage = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <TreatmentPlansSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};
