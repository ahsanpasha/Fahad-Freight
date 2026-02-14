import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of cargo do you transport?",
    a: "We handle all types of freight — from general goods, electronics, and FMCG products to heavy machinery and construction materials. Our trucks are equipped for diverse cargo needs.",
  },
  {
    q: "How can I track my shipment?",
    a: "Every truck in our fleet has GPS tracking. Once your shipment is on the road, you'll get a tracking link with live location, speed, and estimated arrival time.",
  },
  {
    q: "What are your delivery timeframes?",
    a: "Delivery depends on distance between cities. Same-city deliveries take a few hours, nearby cities 1 day, and long-distance routes 2-5 days. Express options are available.",
  },
  {
    q: "Do you offer full and partial truckloads?",
    a: "Yes! We offer both Full Truckload (FTL) for dedicated shipments and Less Than Truckload (LTL) for cost-effective partial loads shared with other cargo.",
  },
  {
    q: "How do I get a shipping quote?",
    a: "Contact us via phone, email, or our website. Share your pickup city, destination, and cargo details — we'll provide a competitive quote within hours.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-orange opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="orange-dot shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Help Center</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find answers to common questions about our freight services and logistics solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-card border transition-all duration-300 rounded-3xl overflow-hidden ${open === i
                  ? "border-primary/30 shadow-2xl shadow-primary/5"
                  : "border-border hover:border-primary/20 shadow-sm hover:shadow-md"
                }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left group transition-colors"
              >
                <span className={`text-xl font-heading font-bold transition-colors ${open === i ? "text-primary" : "text-card-foreground group-hover:text-primary"}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${open === i ? "bg-primary text-primary-foreground rotate-180" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8">
                      <div className="h-[1px] w-full bg-border/50 mb-6" />
                      <p className="text-muted-foreground text-lg leading-relaxed italic">
                        "{faq.a}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
