import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Users, Shield, Clock, Heart, BookOpen, Truck, Lightbulb, HardHat, Eye, Handshake, ShieldCheck, ClipboardCheck, Star } from "lucide-react";
import truckImage from "@/assets/truck.webp";
import itemsBg from "@/assets/aboutnew.jpg";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Header / Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${itemsBg})` }} />
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
                            <span className="text-primary font-bold text-sm uppercase tracking-widest">Discover Who We Are</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            About <span className="text-gradient-orange">Us</span>
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Driving the future of logistics with excellence, integrity, and innovation since our inception.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="orange-dot" />
                                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Story</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
                                Delivering <span className="text-gradient-orange">Excellence</span> to Every Destination
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    At Fahad Freight Logistics, we pride ourselves on being a premier logistics partner, connecting businesses and communities across the nation. With our headquarters in Lahore and operations spanning nationwide, we specialize in comprehensive freight solutions tailored to meet the dynamic needs of modern commerce.
                                </p>
                                <p>
                                    Our journey began with a simple mission: to make logistics reliable, transparent, and efficient. Today, we stand as a trusted name in the industry, moving thousands of shipments annually with precision and care. Whether handled by our expert team or tracked through our advanced systems, your cargo is always in safe hands.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg" />
                            <img
                                src={truckImage}
                                alt="Fahad Freight Truck"
                                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white/10"
                            />
                            {/* Floating Stats Card - Optional Polish */}
                            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border hidden md:block z-20">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-xl">
                                        <Truck className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold font-heading text-foreground">10K+</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Annual Deliveries</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-24 bg-secondary/5 relative overflow-hidden">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-card p-10 rounded-3xl border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To be the leading logistics partner, recognized for our unparalleled service, innovation, and reliability. We aspire to set the standard for excellence in the logistics industry by continuously enhancing our solutions and expanding our network.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-card p-10 rounded-3xl border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <Shield className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To provide dependable and cost-effective logistics solutions tailored to meet each client's unique needs. We are committed to embracing innovation, upholding integrity, and adopting a customer-first approach to drive success for our partners.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-background relative">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="orange-dot" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Principles</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                            Core <span className="text-gradient-orange">Values</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            The fundamental beliefs that guide our actions and strategies.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Reliability",
                                desc: "At Fahad Freight Logistics, reliability is our foundation. We ensure safe, secure, and dependable transportation services so our clients can trust us with every shipment, every time.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Timely Delivery",
                                desc: "We understand that time is critical in logistics. Our commitment is to deliver shipments on schedule with efficient route planning and real-time coordination to meet client deadlines without compromise.",
                                icon: Clock
                            },
                            {
                                title: "Customer Commitment",
                                desc: "Our clients are our priority. We focus on understanding their unique logistics needs and providing tailored solutions that add value to their business operations.",
                                icon: Handshake
                            },
                            {
                                title: "Integrity & Transparency",
                                desc: "We operate with honesty and transparency in every transaction. Clear communication, ethical practices, and fair pricing define our business relationships.",
                                icon: Eye
                            },
                            {
                                title: "Safety First",
                                desc: "Safety of cargo, drivers, and operations is non-negotiable. We follow strict safety standards and compliance procedures to ensure risk-free transportation services.",
                                icon: HardHat
                            },
                            {
                                title: "Teamwork & Professionalism",
                                desc: "Our strength lies in our skilled and dedicated team. Through collaboration, discipline, and professionalism, we achieve operational excellence and continuous growth.",
                                icon: Users
                            },
                            {
                                title: "Innovation & Efficiency",
                                desc: "We continuously improve our logistics processes by adopting modern technology, tracking systems, and efficient supply chain strategies to stay ahead in the industry.",
                                icon: Lightbulb
                            },
                            {
                                title: "Accountability",
                                desc: "We take full responsibility for our commitments and performance. Every shipment, decision, and action is handled with ownership and accountability to ensure consistent results.",
                                icon: ClipboardCheck
                            },
                            {
                                title: "Excellence in Service",
                                desc: "We strive for excellence in every aspect of our operations. From customer support to delivery execution, we maintain high standards to exceed client expectations.",
                                icon: Star
                            }

                        ].map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-xl group h-full flex flex-col"
                            >
                                <div className="w-12 h-12 bg-secondary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};


export default About;
