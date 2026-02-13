import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Zap, Heart } from "lucide-react";
import visionImage from "@/assets/vision-containers.jpg";

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-24 gradient-navy relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 gradient-orange opacity-10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={visionImage} alt="Truck fleet at logistics depot" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-md rounded-xl p-4 flex items-center gap-4">
                  <div className="gradient-orange p-3 rounded-lg">
                    <Truck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-card-foreground">100+ Trucks by 2028</div>
                    <div className="text-xs text-muted-foreground">Expanding our fleet across the country</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="orange-dot" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Vision</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-6 leading-tight">
              Connecting Every City,{" "}
              <span className="text-gradient-orange">One Truck at a Time</span>
            </h2>
            <p className="text-accent-foreground/60 leading-relaxed mb-8">
              Our vision is to become the most trusted truck freight company in the region. With smart route planning, a growing fleet, and a commitment to on-time delivery, we're building the future of intercity logistics.
            </p>

            <div className="space-y-6">
              {[
                { icon: Zap, title: "Smart Route Planning", desc: "AI-optimized routes to save fuel, time, and reduce empty miles by 40%." },
                { icon: Truck, title: "Fleet Expansion", desc: "Growing our fleet to cover 100+ cities with modern, well-maintained trucks." },
                { icon: Heart, title: "Driver Welfare", desc: "Supporting our drivers with fair wages, rest stops, and safe working conditions." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="gradient-orange p-3 rounded-xl h-fit flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-accent-foreground mb-1">{item.title}</h4>
                    <p className="text-accent-foreground/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
