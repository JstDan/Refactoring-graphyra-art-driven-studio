import { motion } from "framer-motion";
type HeroProps = {
  subtitle: string;
  title: string;
  description?: string;
};
const HeroSectionSecondary = ({ subtitle, title, description }: HeroProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-25"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 60%)",
              filter: "blur(80px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--warm-beige) / 0.5) 0%, transparent 60%)",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating shapes */}
          <motion.div
            className="absolute top-[20%] right-[15%] w-24 h-24 border border-accent/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[30%] left-[10%] w-16 h-16 border border-foreground/10 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.p
            className="text-caption text-accent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <motion.h1
            className="text-display text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-8 whitespace-pre-line"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>
      </section>
    </>
  );
};
export default HeroSectionSecondary;
