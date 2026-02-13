import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of cargo do you handle?",
    a: "We handle everything from small parcels to full container loads, including hazardous materials, perishables, oversized cargo, and high-value goods. Our specialized teams ensure proper handling for every cargo type.",
  },
  {
    q: "How can I track my shipment?",
    a: "Every shipment gets a unique tracking ID. Use our online portal or mobile app for real-time GPS tracking, status updates, and estimated delivery times. You'll also receive automated notifications at every milestone.",
  },
  {
    q: "What are your delivery timeframes?",
    a: "Delivery times vary by service: Air freight (1-5 days), Ocean freight (15-45 days), Road transport (1-7 days domestically). We also offer express and same-day options for urgent shipments.",
  },
  {
    q: "Do you handle customs clearance?",
    a: "Yes, our licensed customs brokers handle all import/export documentation, duty calculations, and regulatory compliance. We ensure smooth clearance in all 120+ countries we operate in.",
  },
  {
    q: "How do I get a shipping quote?",
    a: "Request a free quote through our website, call our sales team, or use our instant rate calculator for standard routes. We provide competitive, transparent pricing with no hidden fees.",
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
