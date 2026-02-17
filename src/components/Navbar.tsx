import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement> | null, href: string) => {
    // If we're not on home page and trying to use a hash link, let default behavior happen (which navigates to /#section)
    if (!isHomePage && href.includes("#")) {
      return;
    }

    if (e) e.preventDefault();
    const targetId = href.replace("#", "").replace("/", ""); // remove both # and / for safety
    if (!targetId) return; // if just "/" or empty

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
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Partners", href: "/clients" },
    { label: "Team", href: "/team" },
    // { label: "FAQ", href: "/faq" },
  ];

  const isSolid = isScrolled;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b border-white/10 ${isSolid
        ? "h-16 bg-secondary/90 backdrop-blur-md shadow-lg shadow-primary/5"
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
              Fahad<span className="text-primary transition-colors">Freight</span>
            </span>
            <span className="text-[10px] font-bold text-secondary-foreground uppercase tracking-[0.2em] mt-1 transition-colors">Logistics</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-semibold transition-all relative group ${isActive
                  ? "text-primary"
                  : isSolid ? "text-white/90 hover:text-white" : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border transition-colors ${isSolid
            ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
            : "bg-white/5 border-white/10 text-white hover:bg-white/10"
            }`}
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
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-heading font-bold transition-colors flex items-center justify-between group py-2 ${isActive ? "text-primary" : "text-secondary-foreground/60 hover:text-primary"}`}
                  >
                    {link.label}
                    <div className={`w-10 h-0.5 transition-all duration-300 ${isActive ? "bg-primary" : "bg-primary/20 group-hover:bg-primary"}`} />
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-5 py-3 rounded-xl font-bold text-lg bg-primary text-white text-center shadow-lg shadow-primary/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
