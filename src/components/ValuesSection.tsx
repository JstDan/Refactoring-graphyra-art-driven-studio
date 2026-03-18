import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { aboutData } from "@/pages/About/AboutData";

type Value = {
  number: string;
  title: string;
  description: string;
};

const ValuesSection = () => {
  const { values } = aboutData;
  const valuesRef = useRef(null);
  const isInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <section ref={valuesRef} className="py-24 bg-muted/30">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-caption text-accent mb-4">Философия</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
            Нашите принципи
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              className="p-8 md:p-12 bg-background border border-border relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="text-accent text-sm font-medium">
                {value.number}
              </span>
              <h3 className="text-editorial text-2xl md:text-3xl mt-4 mb-4 group-hover:text-accent transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
