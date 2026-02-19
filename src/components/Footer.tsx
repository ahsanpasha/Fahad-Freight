import { Truck, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import truck from "../assets/truck.png"
import { Link } from "react-router-dom";

const Footer = () => {
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
    }
  };

  return (
    <footer id="footer" className="gradient-navy relative overflow-hidden">
      {/* Truck animation road */}
      <div className="relative h-24 border-b border-accent-foreground/10 overflow-hidden">
        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-accent/20">
          {/* Road lines */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 flex gap-4 overflow-hidden">
            <div className="flex gap-4 animate-road-line">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-12 h-[2px] bg-primary/60 flex-shrink-0" />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 animate-truck-drive">

          <img src={truck} style={{ width: "150px" }} alt="" />
        </div>
        {/* Truck
        <div className="absolute bottom-6 animate-truck-drive">
          <div className="flex items-end">
            <div className="w-20 h-10 gradient-orange rounded-t-md relative">
              <div className="absolute inset-1 border border-primary-foreground/30 rounded-sm" />
            </div>
            <div className="w-8 h-8 bg-secondary rounded-t-md border-2 border-primary relative -ml-[1px]">
              <div className="absolute top-1 right-1 w-3 h-3 bg-sky-accent/50 rounded-sm" />
            </div>
          </div>
          <div className="flex justify-between px-2 -mt-1">
            <div className="w-4 h-4 rounded-full bg-foreground border-2 border-muted" />
            <div className="w-4 h-4 rounded-full bg-foreground border-2 border-muted" />
            <div className="w-4 h-4 rounded-full bg-foreground border-2 border-muted" />
          </div>
        </div> */}
      </div>

      {/* Footer content */}
      <div className="section-container py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Fahad Freight Logo" className="h-12 w-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-secondary-foreground leading-none">
                  Fahad<span className="text-primary transition-colors">Freight</span>
                </span>
                <span className="text-[10px] font-bold text-secondary-foreground uppercase tracking-[0.2em] mt-1 transition-colors">Logistics</span>
              </div>
            </div>
            <p className="text-accent-foreground/50 text-sm leading-relaxed">
              Reliable city-to-city truck freight delivery. Moving your cargo safely across 50+ cities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-heading font-bold text-accent-foreground mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Process", href: "/process" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-accent-foreground/50 text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {[
                  { label: "Partners", href: "/clients" },
                  { label: "Team", href: "/team" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-accent-foreground/50 text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-accent-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["City-to-City Logistics", "City-to-Port Export", "Port-to-City Import", "Customs Clearance", "Real-time Tracking"].map((s) => (
                <li key={s}>
                  <span className="text-accent-foreground/50 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-accent-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-accent-foreground/50 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                fahadlogisticntn@gmail.com
              </li>
              <li className="flex items-center gap-3 text-accent-foreground/50 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +92 326 4551202
              </li>
              <li className="flex items-center gap-3 text-accent-foreground/50 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Lahore Office: Plot No. 84, New Truck Stand, Sabzazar, Lahore
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-12 pt-8 flex items-center justify-center">
          <p className="text-accent-foreground/30 text-sm">
            © 2026 Fahad Freight Logistics. All rights reserved.
          </p>

        </div>
        <div className=" border-accent-foreground/10 mt-2 pt-2 flex items-center justify-center">
          <p className="text-accent-foreground/30 text-sm">Project of Muhammad Saad Zafar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
