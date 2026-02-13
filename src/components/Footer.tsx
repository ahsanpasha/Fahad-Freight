import { Truck, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-navy relative overflow-hidden">
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

        {/* Truck */}
        <div className="absolute bottom-6 animate-truck-drive">
          <div className="flex items-end">
            {/* Container */}
            <div className="w-20 h-10 gradient-orange rounded-t-md relative">
              <div className="absolute inset-1 border border-primary-foreground/30 rounded-sm" />
            </div>
            {/* Cabin */}
            <div className="w-8 h-8 bg-secondary rounded-t-md border-2 border-primary relative -ml-[1px]">
              <div className="absolute top-1 right-1 w-3 h-3 bg-sky-accent/50 rounded-sm" />
            </div>
          </div>
          {/* Wheels */}
          <div className="flex justify-between px-2 -mt-1">
            <div className="w-4 h-4 rounded-full bg-foreground border-2 border-muted" />
            <div className="w-4 h-4 rounded-full bg-foreground border-2 border-muted" />
            <div className="w-4 h-4 rounded-full bg-foreground border-2 border-muted" />
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-orange p-2 rounded-lg">
                <Truck className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg text-accent-foreground tracking-tight">
                SWIFTHAUL
              </span>
            </div>
            <p className="text-accent-foreground/50 text-sm leading-relaxed">
              Global logistics solutions delivering excellence across 120+ countries since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-accent-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Process", "Vision", "FAQ"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-accent-foreground/50 text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-accent-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Ocean Freight", "Air Freight", "Road Transport", "Warehousing", "Supply Chain"].map((s) => (
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
                info@swifthaul.com
              </li>
              <li className="flex items-center gap-3 text-accent-foreground/50 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +1 (800) 555-HAUL
              </li>
              <li className="flex items-center gap-3 text-accent-foreground/50 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Houston, TX 77002
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground/30 text-sm">
            © 2026 SwiftHaul Logistics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-accent-foreground/30 text-sm hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-accent-foreground/30 text-sm hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
