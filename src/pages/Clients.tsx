import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, ShieldCheck, ArrowLeft, Network } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import visionBg from "@/assets/processnew.jpg";

const clientDetails = [
    {
        name: "LEATHER TEX GROUP",
        description: "A premier manufacturer and exporter of high-quality leather goods, requiring precise temperature-controlled and timely logistics.",
        industry: "Manufacturing",
    },
    {
        name: "NAGINA GROUP",
        description: "One of Pakistan's oldest textile conglomerates, depending on our nationwide network for efficient raw material transportation.",
        industry: "Textile",
    },
    {
        name: "INDUS GROUP",
        description: "A leader in the textile industry focused on sustainable quality, utilizing our port-to-city services for seamless export flows.",
        industry: "Textile",
    },
    {
        name: "SUNRAYS TEXTILE MILLS LIMITED",
        description: "High-performance textile production facility that trusts our land freight for reliable delivery across key industrial hubs.",
        industry: "Textile",
    },
    {
        name: "FAZAL CLOTH",
        description: "An industry giant with extensive supply chain needs, consistently choosing our dedicated fleet for secure local movement.",
        industry: "Manufacturing",
    },
    {
        name: "AHMED FINE",
        description: "Renowned for export-quality fabrics, we handle their critical shipments to and from Karachi port with utmost care.",
        industry: "Textile",
    },
    {
        name: "MAHMOOD GROUP",
        description: "A diversified business house that relies on our logistics expertise for multi-industry transportation solutions.",
        industry: "Conglomerate",
    },
    {
        name: "SHUJABAD WEAVING",
        description: "Specializing in specialized weaving products, they use our reliable city-to-city services to reach nationwide markets.",
        industry: "Textile",
    },
    {
        name: "AHMED FINE WEAVING LIMITED",
        description: "Advanced weaving operations requiring high-frequency supply chain support for their premium fabric production lines.",
        industry: "Textile",
    },
    {
        name: "NISHAT CHUNIAN",
        description: "A major player in the global textile market, trusting our logistics to move delicate export shipments across the country.",
        industry: "Global Export",
    },
    {
        name: "IMPERIAL PANEL",
        description: "Specialized industrial panel manufacturers relying on our heavy-duty transportation for safe nationwide distribution.",
        industry: "Industrial",
    },
    {
        name: "SAPPHIRE",
        description: "A lifestyle brand with vast retail and textile operations, needing synchronized logistics for their nationwide distribution.",
        industry: "Retail & Textile",
    },
    {
        name: "PLASCOTE",
        description: "Leading coating and industrial solution provider, utilizing our secure freight services for sensitive material transport.",
        industry: "Chemical",
    },
    {
        name: "RAZIQ",
        description: "A key industrial partner specializing in large-scale operations and secure supply chain management requirements.",
        industry: "Industrial",
    },
    {
        name: "GUJRAWALA FOOD",
        description: "Major food production group utilizing our efficient nationwide network for timely logistical deliveries.",
        industry: "FMCG",
    },
    {
        name: "EPCOT",
        description: "An export-oriented textile firm that utilizes our port handling expertise for seamless international trade connectivity.",
        industry: "Textile",
    },
    {
        name: "FAZAL CLOTH MILLS LIMITED",
        description: "Large-scale textile milling operations requiring 24/7 logistical support for continuous production and export demands.",
        industry: "Textile",
    },
    {
        name: "RAZIQ INTERNATIONAL PRIVATE LIMITED",
        description: "Global logistics collaborator focused on international trade and specialized freight solutions across various borders.",
        industry: "Logistics",
    },
];

const Clients = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${visionBg})` }} />
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
                            <span className="text-primary font-bold text-sm uppercase tracking-widest">Our Network</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Trusted <span className="text-gradient-orange">Partners</span>
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Serving the nation's most prestigious industrial groups with reliable and efficient logistics solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="py-24">
                <section className="section-container">
                    {/* Back Button - kept for easy navigation */}


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientDetails.map((client, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Building2 className="w-12 h-12 text-primary" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                            <ShieldCheck className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                                            {client.industry}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                                        {client.name}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                                        {client.description}
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
                                        <Network className="w-4 h-4" />
                                        <span>Official Partner</span>
                                    </div>
                                </div>

                                {/* Bottom accent glow */}
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="mt-20 section-container">
                    <div className="gradient-navy rounded-[3rem] p-8 lg:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 gradient-orange opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />

                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 relative z-10">
                            Become a Part of Our Growing Network
                        </h2>
                        <p className="text-accent-foreground/60 max-w-xl mx-auto mb-10 relative z-10">
                            Ready to streamline your supply chain with a partner that values excellence and reliability? Let's move together.
                        </p>
                        <motion.a
                            href="https://wa.me/923264551202"
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
            </main>

            <Footer />
        </div>
    );
};

export default Clients;
