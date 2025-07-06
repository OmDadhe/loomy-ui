import { HeroSection } from "@/components/HeroSection";
import { ChatSection } from "@/components/ChatSection";
import { FeatureSection, featureSections } from "@/components/FeatureSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

/**
 * Main Landing Page - Wix-inspired design with scroll effects
 * Features hero section, chat demo, overlapping features, contact, and footer
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Chat Interface Demo */}
      <ChatSection />
      
      {/* Feature Sections with Overlapping Effects */}
      {featureSections.map((section, index) => (
        <FeatureSection
          key={section.sectionId}
          sectionId={section.sectionId}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          features={section.features}
          reverse={section.reverse}
        />
      ))}
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
