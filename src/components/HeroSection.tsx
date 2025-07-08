import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Professional Hero Section - Clean, startup-grade presentation
 * 
 * LAYOUT SPECIFICATIONS:
 * - Left side: Content with heading, CTA buttons, and trust indicators
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
  const navigate = useNavigate();

  useEffect(() => {
    // Staggered entrance animations
    setTimeout(() => setIsVisible(true), 150);
  }, []);

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <section className="relative min-h-screen wix-gradient-hero overflow-hidden">
      
      {/* Professional SaaS-style background with subtle patterns */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Modern gradient orbs - very subtle */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* LEFT SIDE - Content */}
          <div className="space-y-8 lg:pr-8">
            

            {/* Main Heading - Modern SaaS style */}
            <div className="space-y-6">
              <h1 className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight mb-2">
                  <span className="text-foreground">Go from</span>
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight mb-2">
                  <span className="wix-text-gradient">Questioning</span>
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-foreground">to Understanding</span>
                </span>
              </h1>
              
              <p className={`text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Transform confusion into clarity with Loomy, your AI learning companion that adapts to your unique learning style and accelerates your learning journey.
              </p>
            </div>

            {/* CTA Button - Unique and attractive design */}
            <div className={`pt-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Button 
                onClick={handleGetStarted}
                variant="premium" 
                size="xl"
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary-glow to-accent text-white px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-accent/50 transform hover:scale-110 transition-all duration-500 border-2 border-white/20 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </span>
              </Button>
            </div>

            {/* Trust Indicators - Modern style */}
            <div className={`pt-8 space-y-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-sm text-muted-foreground font-medium">
                Trusted by 10,000+ learners worldwide
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-background shadow-sm" />
                  <div className="w-8 h-8 bg-accent-purple rounded-full border-2 border-background shadow-sm" />
                  <div className="w-8 h-8 bg-accent-green rounded-full border-2 border-background shadow-sm" />
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-background shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-white">+</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm transform rotate-45" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Professional Avatar Presentation - Hidden on mobile */}
          <div className="relative hidden lg:flex items-center justify-center lg:justify-end">
            
            {/* Professional container with modern design */}
            <div 
              className={`relative transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              {/* Modern background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl blur-2xl scale-110" />
              
              {/* Professional frame */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/20 rounded-3xl p-8 lg:p-12 shadow-wix-float">
                {/* Avatar container */}
                <div className="relative group">
                  {/* Subtle hover glow */}
                  <div className="absolute -inset-4 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  
                  {/* Main avatar in circular container */}
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-4 border-primary/20 shadow-wix-glow">
                    <img 
                      src="/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png"
                      alt="Loomy - Your AI Learning Companion"
                      className="w-64 h-64 object-contain transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Professional accent dots */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-primary rounded-full animate-pulse delay-1000" />
                </div>
              </div>
              
              {/* Floating elements for depth */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20 rotate-12 animate-wix-float" />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent/10 rounded-2xl backdrop-blur-sm border border-accent/20 -rotate-12 animate-wix-float delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center bg-card/80 backdrop-blur-sm shadow-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};