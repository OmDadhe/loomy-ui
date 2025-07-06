import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ChatSection } from "@/components/ChatSection";
import { FeatureSection, featureSections } from "@/components/FeatureSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

/**
 * Main Landing Page - Wix-inspired design with scroll effects
 * Features hero section, chat demo, overlapping features, contact, and footer
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
        {/* Hero Section - Responsive and Smooth */}
        <div className="pt-20 lg:pt-32 pb-8">
          <HeroSection />
        </div>
      
      {/* Chat Interface Demo - Responsive */}
      <div className="relative">
        <ChatSection />
      </div>
      
      {/* Feature Sections with Overlapping Effects - Responsive */}
      <div id="features" className="relative">
        {featureSections.map((section, index) => (
          <div key={section.sectionId} className="relative">
            <FeatureSection
              sectionId={section.sectionId}
              title={section.title}
              subtitle={section.subtitle}
              description={section.description}
              features={section.features}
              reverse={section.reverse}
            />
          </div>
        ))}
      </div>
      
      {/* Pricing Section - Responsive */}
      <div className="relative">
        <PricingSection />
      </div>
      
      {/* Contact Section - Responsive */}
      <div id="contact" className="relative">
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
