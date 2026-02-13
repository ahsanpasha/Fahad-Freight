import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Route, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Book & Plan",
    desc: "Tell us your pickup city, destination city, and cargo details. We plan the best route and assign a truck.",
    color: "from-primary to-orange-glow",
  },
  {
    icon: Route,
    step: "02",
    title: "Ship & Track",
    desc: "Your cargo hits the road with real-time GPS tracking. Get live updates on your truck's location and ETA.",
    color: "from-secondary to-navy-mid",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Deliver & Confirm",
    desc: "Safe, on-time delivery at the destination city with proof-of-delivery and full documentation.",
    color: "from-primary to-orange-glow",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="orange-dot" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Shipping <span className="text-gradient-orange">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps from booking to delivery
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full -translate-y-1/2 opacity-20" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border relative overflow-hidden group hover:shadow-xl transition-shadow">
                  {/* Step number background */}
                  <div className="absolute top-4 right-4 text-7xl font-heading font-bold text-muted/50 select-none">
                    {step.step}
                  </div>

                  <div className="relative z-10">
                    <div className="gradient-orange w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-card-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 gradient-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
