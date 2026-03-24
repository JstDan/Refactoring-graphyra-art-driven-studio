import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation/Navigation";
import HeroSectionMain from "@/components/HeroSections/HeroSectionMain";
import PrinciplesSection from "@/components/PrinciplesSection";
import ServicesSection from "@/components/Service/ServicesSection";
import ProjectsSection from "@/components/Project/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import IntroLoader from "@/components/IntroLoader/IntroLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollEffects from "@/components/Scroll/ScrollEffects";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro
    const visited = sessionStorage.getItem("graphyra-visited");
    if (visited) {
      setShowIntro(false);
      setHasVisited(true);
      setContentVisible(true);
    }
  }, []);

  // Start showing content slightly before intro finishes for crossfade
  useEffect(() => {
    if (showIntro && !hasVisited) {
      const revealTimer = setTimeout(() => {
        setContentVisible(true);
      }, 2800); // Start revealing content during intro's "reveal" phase
      return () => clearTimeout(revealTimer);
    }
  }, [showIntro, hasVisited]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasVisited(true);
    sessionStorage.setItem("graphyra-visited", "true");
  };

  return (
    <>
      <CustomCursor />

      {showIntro && !hasVisited && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      <div
        className={`transition-all ease-out ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDuration: contentVisible ? "1s" : "0s",
          transitionDelay: contentVisible && showIntro ? "0.2s" : "0s",
        }}
      >
        <ScrollEffects>
          <Navigation />
          <main>
            <HeroSectionMain />
            <div className="section-divider" />
            <PrinciplesSection />
            <ServicesSection />
            <ProjectsSection />
            <ProcessSection />
            <ContactSection />
          </main>
          <Footer />
        </ScrollEffects>
      </div>

      {/* Global grain overlay */}
      <div className="grain-overlay" />
    </>
  );
};

export default Index;
