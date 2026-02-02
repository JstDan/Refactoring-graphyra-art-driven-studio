import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// Import project images
import projectDolce from "@/assets/project-dolce.png";
import projectDouble44 from "@/assets/project-double44.png";
import projectMoodboard from "@/assets/project-moodboard.png";
import projectSoul from "@/assets/project-soul.png";
import projectAurum from "@/assets/project-aurum.jpg";
import projectVerde from "@/assets/project-verde.jpg";
import projectKinetic from "@/assets/project-kinetic.jpg";
import projectLumina from "@/assets/project-lumina.jpg";

interface Project {
  title: string;
  category: string;
  categoryKey: string;
  description: string;
  image: string;
  // Scattered positioning
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: string;
  rotation: number;
  zIndex: number;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const projects: Project[] = [
    {
      title: "Dolce Amaro",
      category: "Уеб дизайн",
      categoryKey: "Уеб",
      description: "Модерен уебсайт за италиански ресторант",
      image: projectDolce,
      position: { top: "5%", left: "2%" },
      size: "w-[45%] md:w-[35%]",
      rotation: -3,
      zIndex: 3,
    },
    {
      title: "Double44",
      category: "Бранд идентичност",
      categoryKey: "Брандинг",
      description: "Луксозен бар в центъра на Варна",
      image: projectDouble44,
      position: { top: "0%", right: "5%" },
      size: "w-[50%] md:w-[40%]",
      rotation: 4,
      zIndex: 4,
    },
    {
      title: "Elegant Moodboard",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Естетична визуална система",
      image: projectMoodboard,
      position: { top: "35%", left: "15%" },
      size: "w-[40%] md:w-[28%]",
      rotation: -5,
      zIndex: 5,
    },
    {
      title: "Soul Beauty",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Визуална идентичност за салон",
      image: projectSoul,
      position: { top: "25%", right: "10%" },
      size: "w-[35%] md:w-[25%]",
      rotation: 6,
      zIndex: 2,
    },
    {
      title: "Aurum",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Луксозна бижутерска марка",
      image: projectAurum,
      position: { top: "55%", left: "5%" },
      size: "w-[38%] md:w-[30%]",
      rotation: 3,
      zIndex: 6,
    },
    {
      title: "Verde Organic",
      category: "Брандинг",
      categoryKey: "Брандинг",
      description: "Биологичен производител",
      image: projectVerde,
      position: { top: "50%", right: "2%" },
      size: "w-[45%] md:w-[32%]",
      rotation: -4,
      zIndex: 1,
    },
    {
      title: "Kinetic",
      category: "Motion дизайн",
      categoryKey: "Motion",
      description: "Анимирани елементи",
      image: projectKinetic,
      position: { top: "75%", left: "20%" },
      size: "w-[35%] md:w-[26%]",
      rotation: 5,
      zIndex: 7,
    },
    {
      title: "Lumina Events",
      category: "Печатни материали",
      categoryKey: "Брандинг",
      description: "Материали за събития",
      image: projectLumina,
      position: { top: "70%", right: "15%" },
      size: "w-[40%] md:w-[28%]",
      rotation: -2,
      zIndex: 8,
    },
  ];

  const getParallax = (index: number) => {
    if (index % 3 === 0) return parallaxY1;
    if (index % 3 === 1) return parallaxY2;
    return parallaxY3;
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-section relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.3) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div ref={ref} className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="text-caption text-accent mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Портфолио
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-display text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none whitespace-nowrap"
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Избрани проекти
            </motion.h2>
          </div>
        </motion.div>

        {/* Scattered Projects Container */}
        <div className="relative h-[200vh] md:h-[250vh]">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`absolute ${project.size} cursor-pointer group`}
              style={{
                ...project.position,
                zIndex: hoveredProject === index ? 100 : project.zIndex,
                y: getParallax(index),
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.8, 
                rotate: project.rotation * 2 
              }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotate: project.rotation 
              } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                transition: { duration: 0.4 }
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card with shadow and border */}
              <motion.div 
                className="relative bg-background overflow-hidden"
                style={{
                  boxShadow: hoveredProject === index 
                    ? "0 30px 60px -15px rgba(0,0,0,0.4), 0 0 0 1px hsl(var(--accent) / 0.3)" 
                    : "0 20px 40px -15px rgba(0,0,0,0.3)",
                }}
                animate={{
                  y: hoveredProject === index ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Category tag */}
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: hoveredProject === index ? 1 : 0,
                      y: hoveredProject === index ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="px-3 py-1.5 bg-accent text-primary-foreground text-xs font-medium">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Project info overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredProject === index ? 1 : 0,
                      y: hoveredProject === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <h3 className="text-xl md:text-2xl font-display text-primary-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {project.description}
                    </p>
                  </motion.div>
                </div>

                {/* Bottom bar - always visible */}
                <div className="p-3 md:p-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </span>
                    <motion.div
                      className="w-6 h-6 rounded-full border border-foreground/30 flex items-center justify-center"
                      animate={{
                        scale: hoveredProject === index ? 1.2 : 1,
                        borderColor: hoveredProject === index ? "hsl(var(--accent))" : "hsl(var(--foreground) / 0.3)",
                      }}
                    >
                      <motion.svg 
                        width="10" 
                        height="10" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        animate={{
                          x: hoveredProject === index ? 2 : 0,
                          color: hoveredProject === index ? "hsl(var(--accent))" : "currentColor",
                        }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative corner elements */}
              <motion.div
                className="absolute -top-2 -left-2 w-4 h-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === index ? 1 : 0 }}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-accent" />
                <div className="absolute top-0 left-0 w-px h-full bg-accent" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-4 h-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === index ? 1 : 0 }}
              >
                <div className="absolute bottom-0 right-0 w-full h-px bg-accent" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-accent" />
              </motion.div>
            </motion.article>
          ))}

          {/* Floating decorative elements between projects */}
          <motion.div
            className="absolute top-[15%] left-[50%] w-20 h-20 border border-accent/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[45%] right-[5%] w-12 h-12 border border-foreground/10"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[65%] left-[45%] w-3 h-3 bg-accent/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Scattered lines */}
          <motion.div
            className="absolute top-[30%] left-[40%] w-40 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            style={{ rotate: 15 }}
            animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-[60%] right-[30%] w-32 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
            style={{ rotate: -10 }}
            animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="group relative px-8 py-4 border border-foreground text-foreground overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 bg-accent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative flex items-center gap-3 group-hover:text-primary-foreground transition-colors">
              Виж всички проекти
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
