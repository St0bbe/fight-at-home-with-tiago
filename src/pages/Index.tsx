import Navigation from "@/components/Navigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import FinalCallSection from "@/components/sections/FinalCallSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <GallerySection />
        <FinalCallSection />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
