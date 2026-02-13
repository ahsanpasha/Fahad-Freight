import { motion } from "framer-motion";
import { ArrowRight, Package, Globe, Clock } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Container ship at port" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(24 95% 53% / 0.3) 30px, hsl(24 95% 53% / 0.3) 31px)',
        }} />
      </div>

      <div className="section-container relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="orange-dot" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Global Logistics Leader
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-secondary-foreground leading-[1.1] mb-6"
          >
            Moving the World,{" "}
            <span className="text-gradient-orange">One Container</span>{" "}
            at a Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-secondary-foreground/60 max-w-xl mb-10 leading-relaxed"
          >
            End-to-end freight solutions across 120+ countries. We don't just ship goods — we engineer supply chains that drive your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#services"
              className="gradient-orange text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              Our Services <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="border-2 border-secondary-foreground/20 text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-colors"
            >
              Learn More
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { icon: Globe, value: "120+", label: "Countries" },
              { icon: Package, value: "50K+", label: "Shipments/yr" },
              { icon: Clock, value: "99.2%", label: "On-time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-secondary-foreground">{stat.value}</div>
                <div className="text-xs text-secondary-foreground/50 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
