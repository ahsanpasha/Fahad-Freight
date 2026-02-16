import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isClientsPage = location.pathname === "/clients";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement> | null, href: string) => {
    // If we're on the clients page, we should navigate back to home with the hash
    if (isClientsPage && href.startsWith("#")) {
      return; // Let regular link handling work or handle specifically
    }

    if (e) e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Adjusted offset for taller Navbar
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
    { label: "About", href: isClientsPage ? "/#about" : "#about" },
    { label: "Services", href: isClientsPage ? "/#services" : "#services" },
    { label: "Process", href: isClientsPage ? "/#process" : "#process" },
    { label: "Vision", href: isClientsPage ? "/#vision" : "#vision" },
    { label: "Partners", href: isClientsPage ? "/#clients" : "#clients" },
    { label: "Team", href: isClientsPage ? "/#team" : "#team" },
    { label: "FAQ", href: isClientsPage ? "/#faq" : "#faq" },
  ];

  const isSolid = isScrolled || isClientsPage;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b border-white/10 ${isSolid
        ? "h-16 bg-secondary shadow-lg shadow-primary/5"
        : "h-16 bg-transparent"
        }`}
    >
      <nav className="h-full section-container flex items-center justify-between">
        {/* Brand Identity - Logo with Text */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <img src={logo} alt="Fahad Freight Logo" className="h-12 w-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-secondary-foreground leading-none">
              Fahad<span className="text-primary group-hover:text-primary/80 transition-colors">Freight</span>
            </span>
            <span className="text-[10px] font-bold text-secondary-foreground/40 uppercase tracking-[0.2em] mt-1 group-hover:text-primary/30 transition-colors">Logistics</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2 }}
              onClick={(e) => !link.href.startsWith("/") && handleNavLinkClick(e, link.href)}
              className="text-sm font-semibold text-secondary-foreground/70 hover:text-primary transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-secondary-foreground hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                  onClick={(e) => {
                    if (!link.href.startsWith("/")) {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        handleNavLinkClick(null, link.href);
                      }, 300);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="text-2xl font-heading font-bold text-secondary-foreground/60 hover:text-primary transition-colors flex items-center justify-between group py-2"
                >
                  {link.label}
                  <div className="w-10 h-0.5 bg-primary/20 group-hover:bg-primary transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
