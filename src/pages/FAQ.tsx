import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Quote } from "lucide-react";
import faqBg from "@/assets/backgrounditems.avif";
import { useEffect, useState } from "react";

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
    {
        q: "Do you handle international shipments?",
        a: "Yes, our City-to-Port and Port-to-City services are specifically designed to facilitate international trade, handling all logistics to and from major ports.",
    },
    {
        q: "Is cargo insurance available?",
        a: "Absolutely. We offer comprehensive cargo insurance options to ensure your goods are protected against unforeseen circumstances during transit.",
    }
];

const testimonials = [
    {
        name: "Leather Tex Group",
        feedback: "Fahad Freight's temperature-controlled logistics are unmatched. They ensure our premium leather goods arrive in perfect condition every time.",
        role: "Manufacturing Client"
    },
    {
        name: "Nagina Group",
        feedback: "A reliable partner for our nationwide textile distribution. Their network efficiency has significantly improved our supply chain operations.",
        role: "Textile Partner"
    },
    {
        name: "Sapphire",
        feedback: "Synchronized logistics that keep up with our fast-paced retail demands. Fahad Freight understands the importance of timing.",
        role: "Retail Giant"
    },
    {
        name: "Indus Group",
        feedback: "Their port-to-city services simplify our imports massively. Customs clearance and transport are handled seamlessly.",
        role: "Textile Industry"
    },
    {
        name: "Nishat Chunian",
        feedback: "Trustworthy and secure handling for our delicate export shipments. We value their commitment to safety and timeliness.",
        role: "Global Exporter"
    },
    {
        name: "Mahmood Group",
        feedback: "Their diverse fleet manages our multi-industry transportation needs effortlessly. great service and communication.",
        role: "Conglomerate"
    }
];

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${faqBg})` }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
                </div>

                <div className="section-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="orange-dot shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
                            <span className="text-primary font-bold text-sm uppercase tracking-widest">Support</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Common <span className="text-gradient-orange">Questions</span>
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Everything you need to know about our services, pricing, and logistics operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-24 bg-background relative">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className={`bg-card border transition-all duration-300 rounded-3xl overflow-hidden ${open === i
                                    ? "border-primary/30 shadow-2xl shadow-primary/5"
                                    : "border-border hover:border-primary/20 shadow-sm hover:shadow-md"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left group transition-colors"
                                >
                                    <span className={`text-xl font-heading font-bold transition-colors ${open === i ? "text-primary" : "text-card-foreground group-hover:text-primary"}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${open === i ? "bg-primary text-primary-foreground rotate-180" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
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
                                            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                                                <div className="h-[1px] w-full bg-border/50 mb-6" />
                                                <p className="text-muted-foreground text-lg leading-relaxed">
                                                    {faq.a}
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

            {/* Testimonials Marquee */}
            <section className="py-24 bg-secondary/5 overflow-hidden">
                <div className="section-container text-center mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">Testimonials</span>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
                        What Our Clients <span className="text-gradient-orange">Say</span>
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    <motion.div
                        className="flex gap-8 w-fit"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={i} className="w-[400px] flex-shrink-0 bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all">
                                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                                <p className="text-lg text-muted-foreground leading-relaxed italic mb-6 min-h-[100px]">
                                    "{t.feedback}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-foreground font-heading">{t.name}</div>
                                        <div className="text-xs text-primary font-bold uppercase tracking-wider">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FAQ;
