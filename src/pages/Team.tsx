import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { User, Briefcase, Award, TrendingUp, Mail, Phone, ExternalLink } from "lucide-react";
import teamBg from "@/assets/team.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const team = [
    {
        name: "Muhammad Mobeen",
        role: "Chief Executive Officer (CEO)",
        slug: "muhammad-mobeen",
        desc: "Muhammad Mobeen brings over 45 years of unparalleled experience and leadership to his role as CEO of Fahad Freight Logistics. With a distinguished career in the logistics and transportation industry, Mobeen has demonstrated a deep understanding of global supply chains and a commitment to operational excellence. His visionary leadership and strategic insight have been instrumental in driving the company’s growth and innovation.",
        icon: Award,
        delay: 0
    },
    {
        name: "Muhammad Naveed",
        role: "General Manager",
        slug: "muhammad-naveed",
        desc: "M Naveed has been a dedicated broker at Fahad Freight Logistics for 20 years. His extensive experience and in-depth knowledge of the logistics industry have been essential in managing client transactions and ensuring smooth operations. Naveed’s expertise continues to be a cornerstone of our success.",
        icon: Briefcase,
        delay: 0.1
    },
    {
        name: "Muhammad Asif",
        role: "Operational Manager",
        slug: "muhammad-asif",
        desc: "With 15 years of logistics experience, Muhammad Asif excels as the Transport and Truck Manager at Fahad Freight Logistics. His expertise in fleet management ensures that all trucking operations run efficiently and on time. Asif’s leadership and attention to detail are crucial in upholding the high standards of reliability our clients expect.",
        icon: User,
        delay: 0.2
    },
    {
        name: "Fahad Mobeen",
        role: "Director",
        slug: "fahad-mobeen",
        desc: "M Fahad combines his expertise as an accountant with his role as a manager at Fahad Freight Logistics. With a keen eye for financial accuracy and strong leadership skills, he manages financial operations and oversees team performance, ensuring efficient and effective support for the company’s objectives.",
        icon: TrendingUp,
        delay: 0.3
    },
    {
        name: "Asad Ali",
        role: "Lahore Team",
        slug: "asad-ali",
        desc: "",
        icon: User,
        delay: 0.4
    },
    {
        name: "Umer Farooq",
        role: "Lahore Team",
        slug: "umer-farooq",
        desc: "",
        icon: User,
        delay: 0.5
    },
    {
        name: "Abkar",
        role: "Karachi Team",
        slug: "abkar-shamsher",
        desc: "",
        icon: User,
        delay: 0.6
    },
    {
        name: "Akbar Shamshar",
        role: "Karachi Team",
        slug: "akbar-shamshar",
        desc: "",
        icon: User,
        delay: 0.7
    },

];

const Team = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${teamBg})` }} />
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
                            <span className="text-primary font-bold text-sm uppercase tracking-widest">Our Leadership</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Meet The <span className="text-gradient-orange">Team</span>
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            The visionaries and experts driving excellence in every mile we cover.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 relative overflow-hidden bg-background">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                id={member.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: member.delay }}
                                className={`group relative bg-card border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/5 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 transition-all duration-700 overflow-hidden ${hash.substring(1) === member.slug ? 'ring-2 ring-primary ring-offset-4 ring-offset-background' : ''}`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-700 group-hover:bg-primary/10 group-hover:scale-150" />

                                <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
                                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl gradient-orange flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform duration-500">
                                                <member.icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary-foreground" />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <div className="mb-2">
                                                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                    {member.name}
                                                </h3>
                                                <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-primary/10">
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed italic text-center sm:text-left">
                                        {member.desc}
                                    </p>

                                </div>

                                {/* Bottom accent glow */}
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Team;

