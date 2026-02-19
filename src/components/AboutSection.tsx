import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Shield, Award } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Accent shape */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-orange opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container">
        {/* Company About */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="orange-dot" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              About <span className="text-gradient-orange">Company</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                At Fahad Freight Logistics, we offer comprehensive nationwide logistics services, efficiently connecting cities across the country. Our expertise extends to and from Karachi port, handling both import and export activities with precision. Whether you're moving goods within the country or navigating international trade through Karachi’s key port, our dedicated team ensures seamless, reliable transportation tailored to meet your specific needs.
              </p>
              <p>
                Our commitment to innovation, safety, and customer service is at the core of everything we do. From the moment your shipment is entrusted to us, we handle it with the utmost care, leveraging our state-of-the-art technology and expert team to guarantee timely and secure deliveries. Whether it's by air, sea, or land, Fahad Freight Logistics is equipped to meet all your transportation needs with precision and efficiency.
              </p>
              <p>
                Explore our company profile to discover how our comprehensive logistics services can support your business’s growth and success. Join us on a journey where excellence meets reliability, and let Fahad Freight Logistics be the driving force behind your supply chain.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: Target, label: "Mission Focused" },
                { icon: Users, label: "1000+ Clients" },
                { icon: Shield, label: "Secure Logistics" },
                { icon: Award, label: "45+ Years Experience" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border shadow-lg transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 group relative overflow-hidden"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className="relative z-10"
                  >
                    <item.icon className="w-10 h-10 text-primary mb-3" />
                  </motion.div>
                  <span className="text-sm font-bold text-foreground uppercase tracking-widest relative z-10">{item.label}</span>

                  {/* Bottom accent glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-accent/5 backdrop-blur-sm border border-accent-foreground/5 rounded-3xl p-8 lg:p-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="orange-dot" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Mission</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deliver Exceptional Logistics Solutions",
                desc: "Ensure the seamless movement of goods across the globe with top-notch services.",
              },
              {
                title: "Commit to Reliability and Efficiency",
                desc: "Provide dependable and cost-effective solutions tailored to meet each client's unique needs.",
              },
              {
                title: "Embrace Innovation and Integrity",
                desc: "Utilize advanced methods and uphold ethical practices to enhance service quality.",
              },
              {
                title: "Adopt a Customer-First Approach",
                desc: "Focus on building lasting partnerships and supporting client success.",
              },
              {
                title: "Enhance Supply Chain Efficiency",
                desc: "Contribute to clients' business growth by improving their logistical operations.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-lg group-hover:shadow-primary/30">
                  <Target className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
