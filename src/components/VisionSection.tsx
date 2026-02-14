import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck } from "lucide-react";
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
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 gradient-orange opacity-10 rounded-3xl blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={visionImage} alt="Truck fleet at logistics depot" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-md rounded-xl p-4 flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="gradient-orange p-3 rounded-lg"
                  >
                    <Truck className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <div className="font-heading font-bold text-card-foreground">Standard of Logistics Excellence</div>
                    <div className="text-xs text-muted-foreground">Setting the benchmark for global reliability</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Shaping the Future of <span className="text-gradient-orange">Logistics Excellence</span>
            </h2>
            <div className="space-y-4 text-accent-foreground/60 leading-relaxed mb-8">
              <p>
                At Fahad Freight Logistics, our vision is to be the leading logistics partner, recognized for our unparalleled service, innovation, and reliability. We aspire to set the standard for excellence in the logistics industry by continuously enhancing our solutions, expanding our network, and fostering enduring partnerships. Our goal is to drive progress and efficiency in every supply chain we touch, contributing to the growth and success of our clients and the communities we serve.
              </p>
              <p>
                By embracing cutting-edge technology and a customer-centric approach, we aim to exceed expectations and deliver exceptional value. Our commitment to continuous improvement and our passion for logistics drive us to achieve new heights, ensuring that we remain at the forefront of the industry. As we grow, our focus will remain on creating efficient, reliable, and sustainable logistics solutions that empower businesses and enhance global trade. Through innovation, integrity, and dedication, we will shape the future of logistics and support our clients in achieving their strategic objectives.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
