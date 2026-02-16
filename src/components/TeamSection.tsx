import { motion } from "framer-motion";
import { User, Briefcase, Calculator, Award } from "lucide-react";

const team = [
    {
        name: "Muhammad Mobeen",
        role: "Chief Executive Officer (CEO)",
        desc: "Muhammad Mobeen brings over 30 years of unparalleled experience and leadership to his role as CEO of Fahad Freight Logistics. With a distinguished career in the logistics and transportation industry, Mobeen has demonstrated a deep understanding of global supply chains and a commitment to operational excellence. His visionary leadership and strategic insight have been instrumental in driving the company’s growth and innovation. Under his guidance, Fahad Freight Logistics continues to set new benchmarks in reliability, efficiency, and customer satisfaction, solidifying its position as a leader in the logistics sector.",
        icon: User,
    },
    {
        name: "Muhammad Naveed",
        role: "Dedicated Broker",
        desc: "M Naveed has been a dedicated broker at Fahad Freight Logistics for 20 years. His extensive experience and in-depth knowledge of the logistics industry have been essential in managing client transactions and ensuring smooth operations. Naveed’s expertise continues to be a cornerstone of our success.",
        icon: User,
    },
    {
        name: "Muhammad Asif",
        role: "Transport and Truck Manager",
        desc: "With 15 years of logistics experience, Muhammad Asif excels as the Transport and Truck Manager at Fahad Freight Logistics. His expertise in fleet management ensures that all trucking operations run efficiently and on time. Asif’s leadership and attention to detail are crucial in upholding the high standards of reliability our clients expect, making him a vital asset to our team.",
        icon: User,
    },
    {
        name: "Fahad Mobeen",
        role: "Accountant & Manager",
        desc: "M Fahad combines his expertise as an accountant with his role as a manager at Fahad Freight Logistics. With a keen eye for financial accuracy and strong leadership skills, he manages financial operations and oversees team performance, ensuring efficient and effective support for the company’s objectives.",
        icon: User,
    },
];

const TeamSection = () => {
    return (
        <section id="team" className="py-24 gradient-navy relative overflow-hidden">
            {/* Geometric pattern from ServicesSection */}
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
                        Decades of experience driving the future of logistics with excellence and integrity.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group h-full"
                        >
                            <motion.div
                                whileHover={{ y: -8, scale: 1.01 }}
                                className="bg-accent/10 backdrop-blur-md border border-accent-foreground/10 rounded-3xl p-5 sm:p-8 lg:p-10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full flex flex-col"
                            >
                                <motion.div
                                    className="gradient-orange w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500 flex-shrink-0"
                                    whileHover={{ rotate: 15 }}
                                >
                                    <member.icon className="w-8 h-8 text-primary-foreground" />
                                </motion.div>
                                <h3 className="text-2xl font-heading font-bold text-accent-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                <div className="text-primary font-bold text-sm mb-6 leading-tight uppercase tracking-widest">{member.role}</div>
                                <div className="flex-1">
                                    <p className="text-accent-foreground/60 text-lg leading-relaxed italic line-clamp-12">
                                        "{member.desc}"
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
