import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Accent shape */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-orange opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container">
        {/* Company About */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="orange-dot" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Built on Trust,{" "}
              <span className="text-gradient-orange">Driven by Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded by Fahad with a vision to revolutionize city-to-city freight, Fahad Freight Logistics has grown into a trusted name in truck transportation. We specialize in moving cargo between cities with speed, safety, and reliability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our fleet of modern trucks and dedicated drivers ensure your goods reach their destination on time, every time. From full truckloads to partial shipments, we handle it all with care.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Target, label: "Mission Focused" },
                { icon: Users, label: "5000+ Clients" },
                { icon: Award, label: "ISO Certified" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/50">
                  <item.icon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 gradient-orange rounded-2xl opacity-20 blur-xl" />
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={founderImage}
                  alt="Fahad - Founder & CEO"
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-6 relative">
                  <div className="absolute top-0 left-6 -translate-y-1/2">
                    <div className="gradient-orange px-4 py-1 rounded-full text-primary-foreground text-xs font-bold uppercase tracking-wider">
                      Founder & CEO
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-card-foreground mt-2">Fahad</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    "Every delivery is a promise. When someone trusts us with their cargo, we treat it like our own. That's the foundation of Fahad Freight."
                  </p>
                  <div className="flex gap-6 mt-4 pt-4 border-t border-border">
                    <div>
                      <div className="text-lg font-bold font-heading text-primary">20+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold font-heading text-primary">Forbes</div>
                      <div className="text-xs text-muted-foreground">Top 40 Under 40</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
