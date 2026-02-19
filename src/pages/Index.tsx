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
// import ScrollPathAnimation from "@/components/ScrollPathAnimation";

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
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <HeroSection />

      {/* Scroll Animation Area: Starts from About and ends at FAQ */}
      <div className="relative overflow-hidden bg-background">
        {/* <ScrollPathAnimation /> */}
        <div className="relative z-10 font-body">
          <AboutSection />
          {/* Services usually has gradient-navy, adding it back via a wrapper if needed or just letting it be transparent */}
          <div className="relative">
            <div className="absolute inset-0 gradient-navy opacity-90 -z-10" />
            <ServicesSection />
          </div>
          <ProcessSection />
          <div className="relative">
            <div className="absolute inset-0 gradient-navy opacity-90 -z-10" />
            <VisionSection />
          </div>
          <ClientsSection />
          <div className="relative">
            <div className="absolute inset-0 gradient-navy opacity-90 -z-10" />
            <TeamSection />
          </div>
          <FAQSection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
