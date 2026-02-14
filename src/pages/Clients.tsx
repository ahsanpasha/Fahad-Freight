import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, ShieldCheck, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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

            <main className="pt-32 pb-20">
                <section className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 relative"
                    >
                        {/* Back Button */}
                        <div className="flex justify-start mb-8 lg:absolute lg:top-0 lg:left-0 lg:mb-0">
                            <Link
                                to="/"
                                className="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                </div>
                                <span className="uppercase tracking-widest">Back to Home</span>
                            </Link>
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="orange-dot" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Network</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                            Our <span className="text-gradient-orange">Trusted Partners</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                            We take pride in serving some of the most prestigious industrial and business groups in the country,
                            connecting their visions with reliable logistical execution.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientDetails.map((client, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 rounded-3xl bg-secondary/5 border border-border/50 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Building2 className="w-12 h-12 text-primary" />
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-xs font-bold text-primary uppercase tracking-tighter">
                                        {client.industry}
                                    </span>
                                </div>

                                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                                    {client.name}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {client.description}
                                </p>
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
            </main>

            <Footer />
        </div>
    );
};

export default Clients;
