import { motion } from "framer-motion";
import { ArrowRight, Truck, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const HeroSection = () => {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pb-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Freight truck on highway" className="w-full h-full object-cover" />
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
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-secondary-foreground leading-[1.1] mb-6"
          >
            City to City,{" "}
            <motion.span
              initial={{ backgroundPosition: "200% center" }}
              animate={{ backgroundPosition: "0% center" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-gradient-orange bg-[length:200%_auto]"
            >
              Freight That Delivers
            </motion.span>{" "}
            On Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-secondary-foreground/60 max-w-xl mb-10 leading-relaxed"
          >
            Reliable truck freight delivery across 50+ cities. We move your cargo safely from one city to another — fast, secure, and always on schedule.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleNavLinkClick(e, "#services")}
              className="gradient-orange text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all animate-pulse-glow"
            >
              Our Services <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, translateY: -2, borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleNavLinkClick(e, "#about")}
              className="border-2 border-secondary-foreground/20 text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { icon: MapPin, value: "50+", label: "Cities" },
              { icon: Truck, value: "10K+", label: "Deliveries/yr" },
              { icon: Clock, value: "99.2%", label: "On-time" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-all hover:border-primary/50 hover:bg-secondary/60">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-secondary-foreground">{stat.value}</div>
                  <div className="text-[10px] text-secondary-foreground/50 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
