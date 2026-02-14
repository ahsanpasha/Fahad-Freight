import { motion } from "framer-motion";

const clients = [
    "LEATHER TEX GROUP",
    "NAGINA GROUP",
    "INDUS GROUP",
    "SUNRAYS TEXTILE MILLS LIMITED",
    "FAZAL CLOTH",
    "AHMED FINE",
    "MAHMOOD GROUP",
    "SHUJABAD WEAVING",
    "AHMED FINE WEAVING LIMITED",
    "NISHAT CHUNIAN",
    "IMPERIAL PANEL",
    "SAPPHIRE",
    "PLASCOTE",
    "RAZIQ",
    "GUJRAWALA FOOD",
    "EPCOT",
    "FAZAL CLOTH MILLS LIMITED",
    "RAZIQ INTERNATIONAL PRIVATE LIMITED",
];

const ClientsSection = () => {
    return (
        <section id="clients" className="py-20 bg-muted/30 overflow-hidden border-y border-border/50">
            <div className="section-container mb-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="orange-dot" />
                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">Trust & Partnerships</span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground">Our Trusted Clients</h2>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex whitespace-nowrap gap-16 items-center"
                    animate={{
                        x: [0, -1500],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Triple for even smoother looping on large screens */}
                    {[...clients, ...clients, ...clients].map((client, idx) => (
                        <div key={idx} className="flex items-center gap-16 group/client">
                            <span
                                className="text-2xl lg:text-4xl font-heading font-black text-muted-foreground/20 hover:text-primary hover:scale-110 transition-all duration-500 cursor-default uppercase tracking-tight"
                            >
                                {client}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-primary/20 group-hover/client:bg-primary group-hover/client:scale-150 transition-all duration-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;
