import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

/**
 * Professional Hero Section - Clean, startup-grade presentation
 * 
 * LAYOUT SPECIFICATIONS:
 * - Left side: Content with logo, heading, CTA buttons, and trust indicators
 * - Right side: Clean, centered Loomy avatar presentation
 * - Responsive design with proper spacing and typography hierarchy
 * 
 * DESIGN APPROACH:
 * - Minimal, distraction-free layout focused on core message
 * - Professional avatar positioning with subtle effects
 * - Premium micro-interactions and smooth animations
 * - Startup-grade visual hierarchy and clean aesthetics
 */
export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Staggered entrance animations
    setTimeout(() => setIsVisible(true), 150);
  }, []);

  return (
    <section className="relative min-h-screen wix-gradient-hero overflow-hidden">
      
      {/* Clean professional background - no clutter */}

      <div className="container mx-auto px-6 lg:px-16 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* LEFT SIDE - Content (45% width) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Logo - Wix positioning */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <img 
                src="/lovable-uploads/dae96d64-cc83-4a23-91fa-d8ab709c695c.png" 
                alt="Loomy Logo" 
                className="h-10 w-auto mb-2"
              />
            </div>

            {/* Main Heading - Wix typography hierarchy */}
            <div className="space-y-6">
              <h1 className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="block text-5xl lg:text-7xl font-bold leading-[0.9] mb-3">
                  <span className="text-foreground">Go from</span>
                </span>
                <span className="block text-5xl lg:text-7xl font-bold leading-[0.9] mb-3">
                  <span className="wix-text-gradient">Questioning</span>
                </span>
                <span className="block text-5xl lg:text-7xl font-bold leading-[0.9]">
                  <span className="text-foreground">to Understanding</span>
                </span>
              </h1>
              
              <p className={`text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Transform confusion into clarity with Loomy, your AI learning companion that adapts to your unique learning style.
              </p>
            </div>

            {/* Wix-Style CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Button 
                variant="hero" 
                size="xl"
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-wix-float hover:shadow-wix-glow transform hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-primary text-foreground px-8 py-4 text-lg font-semibold rounded-2xl shadow-wix-card hover:shadow-wix-float transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators - Wix style */}
            <div className={`pt-8 space-y-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-sm text-muted-foreground font-medium">
                Trusted by 10,000+ learners worldwide
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-white shadow-sm" />
                  <div className="w-8 h-8 bg-accent-purple rounded-full border-2 border-white shadow-sm" />
                  <div className="w-8 h-8 bg-accent-green rounded-full border-2 border-white shadow-sm" />
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-white">+</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm transform rotate-45" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground ml-2">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Visual Elements (55% width) */}
          <div className="lg:col-span-7 relative h-screen flex items-center justify-center">
            
            {/* Main Loomy Character - Static and Professional */}
            <div 
              className={`relative z-20 transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              {/* Subtle glow effect behind character */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl scale-125 opacity-60" />
              
              {/* Main character - Static positioning */}
              <div className="relative transition-all duration-300 hover:scale-102">
                <img 
                  src="/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png"
                  alt="Loomy - Your AI Learning Companion"
                  className="h-80 lg:h-96 w-auto drop-shadow-xl"
                />
              </div>
            </div>

            {/* Clean, professional presentation - avatar only */}
          </div>
        </div>
      </div>

      {/* Wix-style Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};