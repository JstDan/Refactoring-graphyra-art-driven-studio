// components
import Navigation from "@/components/Navigation/Navigation.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import HeroSectionSecondary from "@/components/HeroSections/HeroSectionSecondary.tsx";
import StorySection from "@/components/StroySection/StorySection.tsx";
import ValuesSection from "@/components/ValuesSection.tsx";
import StatsSection from "@/components/StatsSection/StatsSection.tsx";
import CtaSection from "@/components/CtaSection/CtaSection.tsx";
// hooks
import { useNavigate } from "react-router-dom";
//data
import { aboutData } from "./AboutData.ts";

const { heroInfo, stats, cta } = aboutData;

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
      <CtaSection title={cta.title} buttonLabel={cta.buttonLabel} />

      <Footer />
    </div>
  );
};

export default About;
