import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Truck, Ship, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/about.jpg";
import truckImg from "@/assets/citytocity.webp";
import portImg from "@/assets/citytoport.avif";
import importImg from "@/assets/porttocity.jpg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: "city-to-city",
            title: "CITY–TO–CITY LOGISTICS",
            description: "Our city-to-city logistics service guarantees efficient and reliable transportation of goods between cities across the nation. We provide timely deliveries, secure handling, and real-time tracking to ensure that your cargo reaches its destination safely and on schedule. Whether for retail, distribution, or other needs, our dedicated team manages every aspect of the logistics process to support your business with seamless operations and exceptional service.",
            image: truckImg,
            icon: Truck,
            features: ["Nationwide Coverage", "Real-time Tracking", "Secure Handling", "Timely Delivery"]
        },
        {
            id: "city-to-port",
            title: "CITY–TO–PORT EXPORT SERVICES",
            description: "Our city-to-port export service offers comprehensive solutions for moving goods from cities to major ports for international export. We handle all aspects of the process, including coordination, customs documentation, and port logistics, to ensure a smooth transition. With our expertise, your shipments are processed efficiently and securely, and we offer cargo insurance options to protect your goods throughout the journey.",
            image: portImg,
            icon: Ship,
            features: ["Export Documentation", "Port Coordination", "Cargo Insurance", "Efficient Processing"]
        },
        {
            id: "port-to-city",
            title: "PORT–TO–CITY IMPORT SERVICES",
            description: "Our port-to-city import service facilitates the efficient movement of goods from ports to cities, handling all logistics with precision. We manage customs clearance and ensure safe, timely delivery of your imported goods to their final destinations. From port arrival to final delivery, our comprehensive support ensures that your import operations are smooth and hassle-free, providing peace of mind and reliability for your business.",
            image: importImg,
            icon: Globe,
            features: ["Customs Clearance", "Import Logistics", "Safe Delivery", "End-to-End Support"]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
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
                            <span className="text-primary font-bold text-sm uppercase tracking-widest">What We Do</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Our <span className="text-gradient-orange">Services</span>
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Comprehensive logistics solutions for nationwide and international trade.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <div className="py-24 space-y-32">
                {services.map((service, index) => (
                    <section key={service.id} id={service.id} className="section-container relative scroll-mt-32">
                        <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">Service {index + 1}</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6 uppercase tracking-tight">
                                    {service.title}
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* <Link
                                    to="/#contact"
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group"
                                >
                                    Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link> */}
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} scale-105 opacity-50 blur-lg`} />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white/10"
                                />
                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA Section */}
            <section className="pb-24 section-container">
                <div className="gradient-navy rounded-[3rem] p-8 lg:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 gradient-orange opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />

                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 relative z-10">
                        Ready to Optimize Your Logistics?
                    </h2>
                    <p className="text-accent-foreground/60 max-w-xl mx-auto mb-10 relative z-10">
                        Contact us today for a customized solution tailored to your specific transportation needs.
                    </p>
                    <motion.a
                        href="https://wa.me/923018402257"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 relative z-10"
                    >
                        Contact Our Sales Team
                    </motion.a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
