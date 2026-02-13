import { motion } from "framer-motion";
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
    <section id="faq" className="py-24 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="orange-dot" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-semibold text-card-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
