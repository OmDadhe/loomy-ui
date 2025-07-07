import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MobileHeroAvatar } from "@/components/MobileHeroAvatar";
import { ChatSection } from "@/components/ChatSection";
import { FeatureSection, featureSections } from "@/components/FeatureSection";
import { CrossPlatformSection } from "@/components/CrossPlatformSection";
import { PricingSection } from "@/components/PricingSection";
import { BlogSection } from "@/components/BlogSection";
import { TestimonialSection } from "@/components/TestimonialSection";
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
      
      {/* Mobile Hero Avatar - Shown only on mobile */}
      <MobileHeroAvatar />
      
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
      
      {/* Cross Platform Integration - After Collaborative Learning */}
      <div className="relative">
        <CrossPlatformSection />
      </div>
      
      {/* Pricing Section - Responsive */}
      <div id="pricing" className="relative">
        <PricingSection />
      </div>
      
      {/* Blog Section */}
      <div className="relative">
        <BlogSection />
      </div>
      
      {/* Testimonial Section */}
      <div className="relative">
        <TestimonialSection />
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
