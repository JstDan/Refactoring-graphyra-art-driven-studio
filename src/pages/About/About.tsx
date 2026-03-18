// components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSectionSecondary from "@/components/HeroSectionSecondary.tsx";
import StorySection from "@/components/StorySection.tsx";
import ValuesSection from "@/components/ValuesSection.tsx";
import StatsSection from "@/components/StatsSection.tsx";
import CtaSection from "@/components/CtaSection.tsx";
// hooks
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//data
import { aboutData } from "./AboutData.ts";

const { heroInfo, stats } = aboutData;

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section  */}
      {heroInfo.map((hero, index) => (
        <HeroSectionSecondary key={index} {...hero} />
      ))}
      {/* Story Section */}
      <StorySection />

      {/* Values Section */}
      <ValuesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </div>
  );
};

export default About;
