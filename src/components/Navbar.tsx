import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Services", "Process", "Vision", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/10">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="gradient-orange p-2 rounded-lg">
            <Truck className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg text-secondary-foreground tracking-tight">
            SWIFTHAUL
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="gradient-orange text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Quote
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-secondary border-t border-primary/10 overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary-foreground/70 hover:text-primary py-2 transition-colors"
                >
                  {link}
                </a>
              ))}
              <a href="#contact" className="gradient-orange text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center mt-2">
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
