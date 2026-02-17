import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const team = [
    {
        name: "Muhammad Mobeen",
        role: "Chief Executive Officer (CEO)",
        slug: "muhammad-mobeen",
    },
    {
        name: "Muhammad Naveed",
        role: "Dedicated Broker",
        slug: "muhammad-naveed",
    },
    {
        name: "Muhammad Asif",
        role: "Transport and Truck Manager",
        slug: "muhammad-asif",
    },
    {
        name: "Fahad Mobeen",
        role: "Accountant & Manager",
        slug: "fahad-mobeen",
    },
];

const TeamSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const cardWidth = 280 + 24; // Card width + gap
        const index = Math.round(scrollPosition / cardWidth);
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    const scrollToMember = (index: number) => {
        if (!scrollRef.current) return;
        const cardWidth = 280 + 24;
        scrollRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth"
        });
    };
    return (
        <section id="team" className="py-24 gradient-navy relative overflow-hidden">
            {/* Geometric pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(24 95% 53%) 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="orange-dot" />
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Leadership</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-4">
                        Meet Our <span className="text-gradient-orange">Team</span>
                    </h2>
                    <p className="text-accent-foreground/60 max-w-2xl mx-auto">
                        45+ years of experience driving the future of logistics with excellence and integrity.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Desktop Grid / Mobile Horizontal Scroll */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto pb-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-0"
                    >
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group h-full flex-shrink-0 w-[280px] sm:w-auto snap-center"
                            >
                                <Link to={`/team#${member.slug}`} className="block h-full">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="bg-card rounded-[2.5rem] p-8 border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden h-full"
                                    >
                                        <div className="relative z-10 flex flex-col items-center h-full">
                                            <motion.div
                                                className="gradient-orange w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500 flex-shrink-0"
                                                whileHover={{ rotate: 15 }}
                                            >
                                                <User className="w-10 h-10 text-primary-foreground" />
                                            </motion.div>

                                            <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                                {member.name}
                                            </h3>

                                            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-6 px-3 py-1.5 bg-primary/5 rounded-lg border border-primary/10">
                                                {member.role}
                                            </div>

                                            <div className="mt-auto flex items-center gap-2 text-muted-foreground text-sm font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                                                View Profile <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>

                                        {/* Bottom accent glow */}
                                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile scroll indicator */}
                    <div className="flex justify-center gap-2 mt-4 sm:hidden">
                        {team.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToMember(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-6 bg-primary" : "w-1.5 bg-primary/20"}`}
                                aria-label={`Go to team member ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

