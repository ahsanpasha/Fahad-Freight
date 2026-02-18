// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
// import contactBg from "@/assets/contactnew.jpg";
// import { useEffect } from "react";

// const Contact = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const contactInfo = [
//         {
//             icon: Phone,
//             title: "Phone",
//             details: ["+92 301 8402257"],
//             action: "Call us",
//             link: "tel:+923018402257"
//         },
//         {
//             icon: Mail,
//             title: "Email",
//             details: ["fahadlogisticntn@gmail.com"],
//             action: "Email us",
//             link: "mailto:fahadlogisticntn@gmail.com"
//         },
//         {
//             icon: MapPin,
//             title: "Office",
//             details: ["Plot No. 84, New Truck Stand,", "Sabzazar, Lahore"],
//             action: "Get directions",
//             link: "https://maps.google.com/?q=New+Truck+Stand,Sabzazar,Lahore"
//         },
//         // {
//         //     icon: Clock,
//         //     title: "Business Hours",
//         //     details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
//         //     action: "Working hours",
//         //     link: "#"
//         // }
//     ];

//     return (
//         <div className="min-h-screen bg-background">
//             <Navbar />

//             {/* Hero Section */}
//             <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
//                 <div className="absolute inset-0">
//                     <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactBg})` }} />
//                     <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
//                 </div>

//                 <div className="section-container relative z-10 text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <div className="flex items-center justify-center gap-2 mb-6">
//                             <div className="orange-dot shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
//                             <span className="text-primary font-bold text-sm uppercase tracking-widest">Get In Touch</span>
//                         </div>
//                         <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
//                             Contact <span className="text-gradient-orange">Us</span>
//                         </h1>
//                         <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
//                             Have questions or need a quote? Our team is here to help you with all your logistics needs.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Contact Content */}
//             <section className="py-24 relative">
//                 <div className="section-container">
//                     <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

//                         {/* Info Grid */}
//                         <div className="lg:col-span-1 space-y-6">
//                             {contactInfo.map((item, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all group"
//                                 >
//                                     <div className="flex items-start gap-4">
//                                         <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
//                                             <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
//                                         </div>
//                                         <div>
//                                             <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
//                                             <div className="text-muted-foreground text-sm space-y-1 mb-3">
//                                                 {item.details.map((line, i) => (
//                                                     <p key={i}>{line}</p>
//                                                 ))}
//                                             </div>
//                                             <a
//                                                 href={item.link}
//                                                 className="text-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:gap-2 transition-all"
//                                                 target={item.title === "Office" ? "_blank" : undefined}
//                                                 rel={item.title === "Office" ? "noopener noreferrer" : undefined}
//                                             >
//                                                 {item.action} <ArrowRight className="w-3 h-3" />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>

//                         {/* Contact Form */}
//                         <div className="lg:col-span-2">
//                             <motion.div
//                                 initial={{ opacity: 0, scale: 0.95 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6 }}
//                                 className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
//                             >
//                                 <div className="mb-8">
//                                     <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Send us a Message</h3>
//                                     <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
//                                 </div>

//                                 <form className="space-y-6">
//                                     <div className="grid md:grid-cols-2 gap-6">
//                                         <div className="space-y-2">
//                                             <label className="text-sm font-bold text-foreground uppercase tracking-wide">Your Name</label>
//                                             <input
//                                                 type="text"
//                                                 className="w-full bg-secondary/5 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-md"
//                                                 placeholder="John Doe"
//                                             />
//                                         </div>
//                                         <div className="space-y-2">
//                                             <label className="text-sm font-bold text-foreground uppercase tracking-wide">Email Address</label>
//                                             <input
//                                                 type="email"
//                                                 className="w-full bg-secondary/5 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-md"
//                                                 placeholder="john@example.com"
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="space-y-2">
//                                         <label className="text-sm font-bold text-foreground uppercase tracking-wide">Subject</label>
//                                         <input
//                                             type="text"
//                                             className="w-full bg-secondary/5 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-md"
//                                             placeholder="Services Inquiry"
//                                         />
//                                     </div>

//                                     <div className="space-y-2">
//                                         <label className="text-sm font-bold text-foreground uppercase tracking-wide">Message</label>
//                                         <textarea
//                                             rows={5}
//                                             className="w-full bg-secondary/5 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-md resize-none"
//                                             placeholder="How can we help you?"
//                                         />
//                                     </div>

//                                     <button
//                                         type="button" // Prevent submission for demo
//                                         className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
//                                         onClick={() => alert("Thank you! We will contact you soon.")}
//                                     >
//                                         Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                                     </button>
//                                 </form>
//                             </motion.div>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default Contact;






import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import contactBg from "@/assets/contactnew.jpg";
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            details: ["+92 301 8402257"],
            action: "Call us",
            link: "tel:+923018402257",
        },
        {
            icon: Mail,
            title: "Email",
            details: ["fahadlogisticntn@gmail.com"],
            action: "Email us",
            link: "mailto:fahadlogisticntn@gmail.com",
        },
        {
            icon: MapPin,
            title: "Office",
            details: ["Plot No. 84, New Truck Stand,", "Sabzazar, Lahore"],
            action: "Get directions",
            link: "https://maps.google.com/?q=New+Truck+Stand,Sabzazar,Lahore",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${contactBg})` }}
                    />
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
                            <span className="text-primary font-bold text-sm uppercase tracking-widest">
                                Get In Touch
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Contact <span className="text-gradient-orange">Us</span>
                        </h1>

                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Have questions or need a quote? Our team is here to help you with
                            all your logistics needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="py-24 relative bg-secondary/5">
                <div className="section-container">

                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* First Row: Phone and Email */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {contactInfo.slice(0, 2).map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-card border border-border/50 p-10 rounded-[2.5rem] 
                               hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />

                                    <div className="flex flex-col items-center text-center gap-6 relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center 
                                      group-hover:bg-primary transition-all duration-500 shadow-lg group-hover:shadow-primary/30">
                                            <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                                                {item.title}
                                            </h3>

                                            <div className="text-muted-foreground text-lg space-y-1 mb-6">
                                                {item.details.map((line, i) => (
                                                    <p key={i} className="font-medium">{line}</p>
                                                ))}
                                            </div>

                                            <a
                                                href={item.link}
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/5 text-primary text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
                                            >
                                                {item.action}
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Bottom accent glow */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Second Row: Office (Integrated Map) */}
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full bg-card border border-border/50 rounded-[2.5rem] overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                            >
                                <div className="grid lg:grid-cols-2">
                                    {/* Left: Info */}
                                    <div className="p-10 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-card to-secondary/5">
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />

                                        <div className="relative z-10 space-y-6">
                                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto
                                          group-hover:bg-primary transition-all duration-500 shadow-lg group-hover:shadow-primary/30">
                                                <MapPin className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
                                            </div>

                                            <div>
                                                <h3 className="text-3xl font-heading font-bold text-foreground mb-3">
                                                    Lahore Office
                                                </h3>

                                                <div className="text-muted-foreground text-lg space-y-1">
                                                    <p className="font-medium">Plot No. 84, New Truck Stand,</p>
                                                    <p className="font-medium">Sabzazar, Lahore</p>
                                                </div>
                                            </div>

                                            {/* <div className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full inline-block border border-primary/10">
                                                Click map to navigate
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* Right: Map */}
                                    <div className="h-[400px] lg:h-auto relative cursor-pointer">
                                        <a
                                            href="https://maps.google.com/?q=Plot+No.+84,+New+Truck+Stand,+Sabzazar,+Lahore"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full w-full relative group/map"
                                        >
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.556272379796!2d74.2690786755494!3d31.51788784738555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903061266850d%3A0xc39116c4e0f40d7c!2sNew%20Truck%20Stand%2C%20Sabzazar%20Housing%20Scheme%20Phase%201%20%26%202%20Sabzazar%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1739812984123!5m2!1sen!2s"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Office Location"
                                                className="pointer-events-none contrast-110 brightness-105 group-hover/map:brightness-100 transition-all duration-700 h-full"
                                            />
                                            {/* Transparent Overlay to capture clicks */}
                                            <div className="absolute inset-0 bg-primary/0 group-hover/map:bg-primary/5 transition-colors duration-500 flex items-center justify-center">
                                                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-xl flex items-center gap-2 transform translate-y-4 opacity-0 group-hover/map:translate-y-0 group-hover/map:opacity-100 transition-all duration-500">
                                                    <span className="text-secondary font-bold text-sm uppercase tracking-wider">Open in Google Maps</span>
                                                    <ArrowRight className="w-4 h-4 text-primary" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Bottom accent glow */}
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        </div>
                        {/* Karachi Office */}
                        <div className="flex justify-center mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full bg-card border border-border/50 rounded-[2.5rem] overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                            >
                                <div className="grid lg:grid-cols-2">
                                    {/* Left: Info */}
                                    <div className="p-10 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-card to-secondary/5">
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />

                                        <div className="relative z-10 space-y-6">
                                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto
                      group-hover:bg-primary transition-all duration-500 shadow-lg group-hover:shadow-primary/30">
                                                <MapPin className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
                                            </div>

                                            <div>
                                                <h3 className="text-3xl font-heading font-bold text-foreground mb-3">
                                                    Karachi Office
                                                </h3>

                                                <div className="text-muted-foreground text-lg space-y-1">
                                                    <p className="font-medium">Room No 5, First Floor,</p>
                                                    <p className="font-medium">Dinar Chamber, West Wharf Road,</p>
                                                    <p className="font-medium">Karachi</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Map */}
                                    <div className="h-[400px] lg:h-auto relative cursor-pointer">
                                        <a
                                            href="https://maps.google.com/?q=Dinar+Chamber+West+Wharf+Road+Karachi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full w-full relative group/map"
                                        >
                                            <iframe
                                                src="https://www.google.com/maps?q=Dinar+Chamber+West+Wharf+Road+Karachi&output=embed"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                loading="lazy"
                                                title="Karachi Office Location"
                                                className="pointer-events-none contrast-110 brightness-105 group-hover/map:brightness-100 transition-all duration-700 h-full"
                                            />
                                            <div className="absolute inset-0 bg-primary/0 group-hover/map:bg-primary/5 transition-colors duration-500 flex items-center justify-center">
                                                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-xl flex items-center gap-2 transform translate-y-4 opacity-0 group-hover/map:translate-y-0 group-hover/map:opacity-100 transition-all duration-500">
                                                    <span className="text-secondary font-bold text-sm uppercase tracking-wider">
                                                        Open in Google Maps
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 text-primary" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Bottom accent glow */}
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
