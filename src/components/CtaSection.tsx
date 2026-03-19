import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type CtaSectionProps = {
  title: string;
  buttonLabel: string;
  subtitle?: string;
};

const CtaSection = ({ title, buttonLabel, subtitle }: CtaSectionProps) => {
  const navigate = useNavigate();
  return (
    <>
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
        <div className="container-wide relative z-10 text-center">
          <motion.h2
            className="text-display text-4xl md:text-5xl lg:text-6xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary-foreground text-lg font-medium hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
          >
            {buttonLabel}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </section>
    </>
  );
};
export default CtaSection;
