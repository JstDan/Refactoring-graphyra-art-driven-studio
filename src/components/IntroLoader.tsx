import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

interface IntroLoaderProps {
  onComplete: () => void;
}

// Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 0.5,
    duration: Math.random() * 2 + 2,
  }));
};

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"gather" | "form" | "reveal">("gather");
  const letters = "GRAPHYRA".split("");
  const particles = useMemo(() => generateParticles(50), []);

  useEffect(() => {
    // Phase transitions
    const gatherTimer = setTimeout(() => setPhase("form"), 800);
    const formTimer = setTimeout(() => setPhase("reveal"), 1800);
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3200);

    return () => {
      clearTimeout(gatherTimer);
      clearTimeout(formTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400);
  };

  // Glitch effect variants
  const glitchVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateX: 90 },
    gather: (i: number) => ({
      opacity: [0, 1, 0.5, 1],
      scale: [0.5, 1.2, 0.9, 1],
      rotateX: [90, -10, 5, 0],
      rotateY: [0, 15, -10, 0],
      x: [Math.random() * 200 - 100, 0],
      y: [Math.random() * 100 - 50, 0],
      filter: [
        "blur(10px) brightness(2)",
        "blur(2px) brightness(1.5)",
        "blur(0px) brightness(1)",
      ],
      transition: {
        delay: i * 0.06,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
    form: (i: number) => ({
      textShadow: [
        "0 0 0px hsl(var(--accent))",
        "0 0 30px hsl(var(--accent))",
        "0 0 60px hsl(var(--accent))",
        "0 0 20px hsl(var(--accent))",
      ],
      scale: [1, 1.05, 0.98, 1],
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    }),
    reveal: {
      scale: 1.1,
      letterSpacing: "0.1em",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (i: number) => ({
      y: -100,
      opacity: 0,
      rotateX: -45,
      scale: 0.8,
      filter: "blur(10px)",
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--primary-foreground) / 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--primary-foreground) / 0.03) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "60px 60px"],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div>

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-accent"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: phase === "gather" ? [0, 1, 0.5] : 0,
                scale: phase === "gather" ? [0, 1.5, 1] : 0,
                x: phase === "form" ? `${50 - particle.x}vw` : 0,
                y: phase === "form" ? `${50 - particle.y}vh` : 0,
              }}
              transition={{
                delay: particle.delay,
                duration: particle.duration,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}

          {/* Radial pulse effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === "form" || phase === "reveal" ? 1 : 0,
            }}
          >
            <motion.div
              className="w-[200px] h-[200px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 3, 5],
                opacity: [0.5, 0.3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: 2,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Horizontal scan lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "gather" ? 0.1 : 0 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-px bg-primary-foreground/30"
                style={{ top: `${i * 5}%` }}
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.8,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>

          {/* Skip button */}
          <motion.button
            className="absolute top-8 right-8 text-primary-foreground/60 hover:text-primary-foreground text-sm font-body tracking-wider transition-colors z-10"
            onClick={handleSkip}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Пропусни
          </motion.button>

          {/* Main text with 3D perspective */}
          <div 
            className="relative flex overflow-visible"
            style={{ 
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={glitchVariants}
                initial="hidden"
                animate={phase}
                exit="exit"
                className="text-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-primary-foreground inline-block relative"
                style={{
                  fontFamily: "var(--font-display)",
                  willChange: "transform, opacity, filter",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glitch layers */}
                <motion.span
                  className="absolute inset-0 text-accent"
                  style={{ mixBlendMode: "difference" }}
                  animate={{
                    x: phase === "form" ? [0, -3, 3, 0] : 0,
                    opacity: phase === "form" ? [0, 0.8, 0] : 0,
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: 3,
                    delay: i * 0.02,
                  }}
                >
                  {letter}
                </motion.span>
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle that appears */}
          <motion.p
            className="absolute bottom-1/3 text-primary-foreground/60 text-caption tracking-[0.3em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: phase === "reveal" ? 1 : 0,
              y: phase === "reveal" ? 0 : 20,
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Дизайн Студио
          </motion.p>

          {/* Expanding corner lines */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "reveal" ? 1 : 0 }}
          >
            <motion.div
              className="absolute top-8 left-8 w-0 h-px bg-accent"
              animate={{ width: phase === "reveal" ? 60 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div
              className="absolute top-8 left-8 w-px h-0 bg-accent"
              animate={{ height: phase === "reveal" ? 60 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "reveal" ? 1 : 0 }}
          >
            <motion.div
              className="absolute bottom-8 right-8 w-0 h-px bg-accent"
              animate={{ width: phase === "reveal" ? 60 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div
              className="absolute bottom-8 right-8 w-px h-0 bg-accent"
              animate={{ height: phase === "reveal" ? 60 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          {/* Grain overlay */}
          <div className="grain-overlay" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
