import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Package, Route, Warehouse, BarChart3, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    desc: "Dedicated trucks for large shipments moving directly from city to city with no stops in between.",
  },
  {
    icon: Package,
    title: "Partial Load (LTL)",
    desc: "Cost-effective shared truck space for smaller shipments between cities.",
  },
  {
    icon: Route,
    title: "Express Delivery",
    desc: "Same-day and next-day intercity deliveries for time-critical cargo.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Secure storage facilities in key cities with inventory management solutions.",
  },
  {
    icon: BarChart3,
    title: "Fleet Tracking",
    desc: "Real-time GPS tracking of your shipments with live updates and ETAs.",
  },
  {
    icon: ShieldCheck,
    title: "Cargo Insurance",
    desc: "Comprehensive insurance coverage to protect your goods during transit.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 gradient-navy relative overflow-hidden" ref={ref}>
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(24 95% 53%) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

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
            Complete truck freight solutions for city-to-city deliveries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-accent/10 backdrop-blur-sm border border-accent-foreground/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="gradient-orange w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-accent-foreground mb-3">{service.title}</h3>
              <p className="text-accent-foreground/60 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
