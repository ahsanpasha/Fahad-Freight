import { useState, useEffect } from "react";
import { Menu, X, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Vision", href: "#vision" },
    { label: "Partners", href: "#clients" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
          ? "h-14 bg-secondary/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "h-20 bg-transparent"
        }`}
    >
      <nav className="h-full section-container flex items-center justify-between">
        {/* Brand Identity */}
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={(e) => handleNavLinkClick(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 gradient-orange rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20">
            <Truck className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-secondary-foreground leading-none">
              Fahad<span className="text-primary group-hover:text-primary/80 transition-colors">Freight</span>
            </span>
            <span className="text-[10px] font-bold text-secondary-foreground/40 uppercase tracking-[0.2em] mt-1">Logistics</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              whileHover={{ y: -2 }}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-sm font-semibold text-secondary-foreground/70 hover:text-primary transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#footer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            onClick={(e) => handleNavLinkClick(e, "#footer")}
            className="gradient-orange text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            REQUEST QUOTE
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-secondary-foreground hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu Enhancement */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-3xl border-b border-white/5 shadow-2xi overflow-hidden"
          >
            <div className="section-container py-10 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="text-2xl font-heading font-bold text-secondary-foreground/60 hover:text-primary transition-colors flex items-center justify-between group py-2"
                >
                  {link.label}
                  <div className="w-10 h-0.5 bg-primary/20 group-hover:bg-primary transition-all duration-300" />
                </motion.a>
              ))}
              <motion.a
                href="#footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={(e) => handleNavLinkClick(e, "#footer")}
                className="gradient-orange text-center py-5 rounded-2xl font-bold text-primary-foreground mt-4 shadow-xl shadow-primary/20"
              >
                REQUEST QUOTE
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
