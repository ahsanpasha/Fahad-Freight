import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneCall, Package, Truck, CheckCircle, ArrowRight } from "lucide-react";
import processBg from "@/assets/process.jpg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Process = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const steps = [
        {
            title: "Consultation & Booking",
            description: "We start by understanding your specific logistics needs. Our team provides a tailored solution and a transparent quote. Once approved, we schedule your shipment.",
            icon: PhoneCall,
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            title: "Pickup & Packaging",
            description: "Our professional team arrives at the designated location to pick up your goods. We ensure everything is securely packed and loaded using industry-standard safety measures.",
            icon: Package,
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20"
        },
        {
            title: "Transit & Tracking",
            description: "Your shipment begins its journey. Throughout transit, you can track your cargo in real-time. Our logistics coordinators monitor progress to ensure on-schedule movement.",
            icon: Truck,
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            title: "Safe Delivery",
            description: "We deliver your goods directly to the final destination. Our team handles the unloading process and ensures you verify the condition of your cargo before completion.",
            icon: CheckCircle,
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${processBg})` }} />
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
                            <span className="text-primary font-bold text-sm uppercase tracking-widest">How It Works</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Our <span className="text-gradient-orange">Process</span>
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            A seamless, step-by-step journey from booking to final delivery, designed for transparency and reliability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 relative overflow-hidden" ref={containerRef}>
                <div className="section-container relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-border/30 hidden lg:block -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-primary"
                        />
                    </div>

                    <div className="space-y-12 lg:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Step Content Card */}
                                <div className="flex-1 w-full">
                                    <div className="bg-card border border-border/50 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative group">
                                        {/* Number Badge */}
                                        <div className="absolute -top-6 left-8 bg-background border border-border p-2 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-2xl font-heading font-bold text-primary">0{index + 1}</span>
                                        </div>

                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${step.bgColor} ${step.color} shadow-inner ring-1 ring-inset ${step.borderColor}`}>
                                            <step.icon size={32} />
                                        </div>

                                        <h3 className="text-2xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>

                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline Center Dot (Desktop) */}
                                <div className="hidden lg:flex items-center justify-center relative z-10">
                                    <div className="w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_0_8px_rgba(var(--background),1)]" />
                                </div>

                                {/* Empty Space for Balance */}
                                <div className="flex-1 hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-24 section-container">
                <div className="gradient-navy rounded-[3rem] p-8 lg:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 gradient-orange opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />

                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 relative z-10">
                        Ready to Start Your Shipment?
                    </h2>
                    <p className="text-accent-foreground/60 max-w-xl mx-auto mb-10 relative z-10">
                        Experience our streamlined process first-hand. Get a quote today and let us handle the rest.
                    </p>
                    <motion.a
                        href="https://wa.me/923018402257"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 relative z-10"
                    >
                        Schedule a Pickup <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Process;
