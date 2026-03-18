import { motion } from "framer-motion";
import { aboutData } from "@/pages/About/AboutData";
//hooks
import useTypewriter from "@/hooks/type-writer";

const StorySection = () => {
  const { storySection } = aboutData;
  const displayText = useTypewriter("Graphyra");
  return (
    <>
      {storySection.map((item, index) => (
        <section key={index} className="py-24 relative">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl mb-8">
                  {item.title}
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="whitespace-pre-line">{item.description}</p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                  <motion.div
                    className="absolute inset-8 border border-accent/30"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-display text-4xl md:text-5xl lg:text-6xl text-accent/30 font-medium">
                      {displayText}
                      <motion.span
                        className="inline-block w-[3px] h-[1em] bg-accent/40 ml-1 align-middle"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </span>
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
export default StorySection;
