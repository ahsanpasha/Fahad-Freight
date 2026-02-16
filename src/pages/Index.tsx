import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import VisionSection from "@/components/VisionSection";
import ClientsSection from "@/components/ClientsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <ProcessSection />
      <VisionSection />
      <ClientsSection />
      <TeamSection />
      <FAQSection />
      <Footer /> */}
    </div>
  );
};

export default Index;
