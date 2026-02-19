import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Ship, Warehouse } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "CITY–TO–CITY LOGISTICS",
    desc: "Our city-to-city logistics service guarantees efficient and reliable transportation of goods between cities across the nation. We provide timely deliveries, secure handling, and real-time tracking to ensure that your cargo reaches its destination safely and on schedule. Whether for retail, distribution, or other needs, our dedicated team manages every aspect of the logistics process to support your business with seamless operations and exceptional service.",
  },
  {
    icon: Ship,
    title: "CITY–TO–PORT EXPORT SERVICES",
    desc: "Our city-to-port export service offers comprehensive solutions for moving goods from cities to major ports for international export. We handle all aspects of the process, including coordination, customs documentation, and port logistics, to ensure a smooth transition. With our expertise, your shipments are processed efficiently and securely, and we offer cargo insurance options to protect your goods throughout the journey.",
  },
  {
    icon: Warehouse,
    title: "PORT–TO–CITY IMPORT SERVICES",
    desc: "Our port-to-city import service facilitates the efficient movement of goods from ports to cities, handling all logistics with precision. We manage customs clearance and ensure safe, timely delivery of your imported goods to their final destinations. From port arrival to final delivery, our comprehensive support ensures that your import operations are smooth and hassle-free, providing peace of mind and reliability for your business.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="orange-dot" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Do</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-4">
            Our <span className="text-gradient-orange">Services</span>
          </h2>
          <p className="text-accent-foreground/60 max-w-2xl mx-auto">
            Comprehensive logistics solutions for nationwide and international trade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border shadow-lg rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <motion.div
                className="gradient-orange w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{service.desc}</p>

              {/* Bottom accent glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
