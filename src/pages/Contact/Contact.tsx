import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSectionSecondary from "@/components/HeroSectionSecondary";
import { useToast } from "@/hooks/use-toast";
import ContactFormField from "@/components/ContactFormField";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
//data
import { contactData } from "./ContactData";
import ContactInfoSection from "@/components/ContactInfoSection";

const FORMSPREE_URL = "https://formspree.io/f/mreagkzn";

const { heroInfo, projectTypes } = contactData;

const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (selectedType) {
      formData.append("projectType", selectedType);
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "Съобщението е изпратено!",
          description: "Ще се свържем с вас възможно най-скоро.",
        });
        form.reset();
        setSelectedType(null);
        setFocusedField(null);
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      toast({
        title: "Грешка при изпращане",
        description: "Моля, опитайте отново или ни пишете директно на имейл.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      {heroInfo.map((hero, index) => (
        <HeroSectionSecondary key={index} {...hero} />
      ))}

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <ContactFormField
                  label="Вашето име"
                  name="name"
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />

                {/* Email */}
                <ContactFormField
                  label="Имейл адрес"
                  name="email"
                  type="email"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />

                {/* Project Type */}
                <div>
                  <label className="text-sm text-muted-foreground mb-4 block">
                    Тип проект
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <ToggleButtonGroup
                      value={selectedType}
                      exclusive
                      onChange={(_, newValue) => setSelectedType(newValue)}
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                      }}
                    >
                      {projectTypes.map((type) => (
                        <ToggleButton
                          key={type}
                          value={type}
                          sx={{
                            px: "1.25rem",
                            py: "0.625rem",
                            border: "1px solid",
                            textTransform: "none",
                            borderColor: "divider",
                            color: "text.primary",
                            "&.Mui-selected": {
                              borderColor: "#C45E2C",
                              color: "#C45E2C",
                              backgroundColor: "rgba(0,0,0,0.04)",
                            },
                          }}
                        >
                          {type}
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>
                  </div>
                </div>

                {/* Message */}
                <ContactFormField
                  label="Разкажете ни за проекта"
                  name="message"
                  required
                  multiline
                  rows={4}
                  onFocus={() => setFocusedField("message")}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full md:w-auto px-12 py-5 bg-foreground text-background text-lg font-medium overflow-hidden disabled:opacity-60"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <motion.span
                    className="absolute inset-0 bg-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? "Изпращане..." : "Изпрати запитване"}
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </motion.button>
              </form>
            </motion.div>
            <ContactInfoSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
