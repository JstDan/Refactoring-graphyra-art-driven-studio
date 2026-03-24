import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import HeroSectionSecondary from "@/components/HeroSections/HeroSectionSecondary";
import ServicesList from "@/components/Service/ServicesList";
import CtaSection from "@/components/CtaSection/CtaSection";
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
