import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PrinciplesSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const principles = [
    { text: "Форма преди тренд.", accent: "Форма" },
    { text: "Дизайн със структура.", accent: "структура" },
    { text: "Визуален образ с цел.", accent: "цел" },
    { text: "Детайлите имат значение.", accent: "Детайлите" },
  ];

  return (
    <section ref={containerRef} className="py-section relative overflow-hidden">
      {/* Animated background element */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: backgroundX }}
      >
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.3) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div ref={ref} className="container-wide relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Title with dramatic animation */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p 
              className="text-caption text-accent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Философия
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2 
                className="text-display text-4xl md:text-5xl lg:text-6xl"
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Принципи на дизайна
              </motion.h2>
            </div>

            {/* Decorative element */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center"
                animate={{
                  rotate: 360,
                  borderColor: ["hsl(var(--accent) / 0.3)", "hsl(var(--accent) / 0.6)", "hsl(var(--accent) / 0.3)"],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  borderColor: { duration: 3, repeat: Infinity },
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-accent rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.div
                className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </motion.div>

          {/* Right - Principles list with enhanced animations */}
          <div className="space-y-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Background highlight on hover */}
                <motion.div
                  className="absolute -inset-4 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative flex items-start gap-6">
                  <motion.span 
                    className="text-caption text-accent mt-1 opacity-60 group-hover:opacity-100 transition-opacity"
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    0{index + 1}
                  </motion.span>
                  <div className="overflow-hidden">
                    <motion.p 
                      className="text-editorial text-xl md:text-2xl lg:text-3xl group-hover:text-accent transition-colors duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {principle.text.split(principle.accent).map((part, i) => (
                        <span key={i}>
                          {part}
                          {i === 0 && (
                            <motion.span
                              className="relative inline-block"
                              whileHover={{ scale: 1.05 }}
                            >
                              {principle.accent}
                              <motion.span
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                                style={{ transformOrigin: "left" }}
                              />
                            </motion.span>
                          )}
                        </span>
                      ))}
                    </motion.p>
                  </div>
                </div>

                {index < principles.length - 1 && (
                  <motion.div
                    className="h-px bg-border mt-8 relative overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.5 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ transformOrigin: "left" }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
