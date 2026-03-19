import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSectionSecondary from "@/components/HeroSectionSecondary";
import ServicesList from "@/components/ServicesList.tsx";
import CtaSection from "@/components/CtaSection";
//data
import { servicesData } from "./ServicesData";

const { heroInfo, cta } = servicesData;

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      {heroInfo.map((hero, index) => (
        <HeroSectionSecondary key={index} {...hero} />
      ))}

      {/* Services List */}
      <ServicesList />
      {/* CTA Section */}
      <CtaSection
        title={cta.title}
        buttonLabel={cta.buttonLabel}
        subtitle={cta.subtitle}
      />
      <Footer />
    </div>
  );
};

export default Services;
