import { motion, useInView } from "framer-motion";
//data
import { servicesData } from "@/pages/Services/ServicesData";
// hooks
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const { servicesInfo } = servicesData;
const services = servicesInfo;

const ServicesList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section ref={ref} className="py-20">
        <div className="container-wide">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="py-16 md:py-24 border-t border-border first:border-t-0"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left side - Title and description */}
                <div>
                  <motion.span
                    className="text-accent text-sm font-medium mb-4 block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    0{index + 1}
                  </motion.span>
                  <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg text-accent font-medium mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  {/* Hidden SEO keywords */}
                  <meta name="keywords" content={service.keywords} />
                </div>

                {/* Right side - Features */}
                <div className="relative">
                  <motion.div
                    className="absolute -top-4 -left-4 w-20 h-20 border border-accent/20"
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <ul className="space-y-4 relative z-10">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-4 text-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                      >
                        <span className="w-2 h-2 bg-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};
export default ServicesList;
