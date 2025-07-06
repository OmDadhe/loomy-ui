import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Hero Section Component - Wix-inspired design with floating animations
 * Features parallax scrolling effects and animated character placement
 */
export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-wix-hero overflow-hidden">
      {/* Floating Background Elements - Wix Style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-wix-float opacity-60" />
        <div className="absolute top-32 right-20 w-6 h-6 bg-accent-green rounded-full animate-wix-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent-purple rounded-full animate-wix-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-10 w-3 h-3 bg-primary rounded-full animate-wix-float opacity-70" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/dae96d64-cc83-4a23-91fa-d8ab709c695c.png" 
                alt="Loomy Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Go from</span>
                <span className="block wix-text-gradient">Questioning</span>
                <span className="block text-foreground">to Understanding</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                Meet Loomy, your AI tutor that transforms confusion into clarity with personalized learning experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="xl"
                className="group relative overflow-hidden"
              >
                <span className="flex items-center gap-3">
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="floating" 
                size="xl"
                className="group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 space-y-3">
              <p className="text-sm text-muted-foreground font-medium">Trusted by 10,000+ learners worldwide</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-accent rounded-full border-2 border-background" />
                    <div className="w-8 h-8 bg-accent-green rounded-full border-2 border-background" />
                    <div className="w-8 h-8 bg-accent-purple rounded-full border-2 border-background" />
                  </div>
                  <span className="text-sm font-medium">+10k users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Loomy Character with Parallax */}
          <div className="relative lg:h-screen flex items-center justify-center">
            <div 
              className={`wix-parallax transition-all duration-1000 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}
              style={{ 
                '--scroll-offset': `${scrollY * 0.3}px`,
                animationDelay: '0.5s'
              } as React.CSSProperties}
            >
              {/* Floating Container for Loomy */}
              <div className="relative">
                {/* Glow Effect Behind Character */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150 animate-wix-pulse-glow" />
                
                {/* Main Character */}
                <div className="relative wix-float hover:scale-105 transition-all duration-500 cursor-pointer">
                  <img 
                    src="/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png"
                    alt="Loomy - Your AI Learning Companion"
                    className="h-96 w-auto drop-shadow-2xl"
                  />
                </div>

                {/* Floating UI Elements Around Character */}
                <div className="absolute -top-8 -right-4 bg-card/90 backdrop-blur-lg rounded-2xl p-4 shadow-wix-float animate-wix-float border border-border/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Learning Active</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-8 bg-card/90 backdrop-blur-lg rounded-2xl p-4 shadow-wix-float animate-wix-float border border-border/20" style={{ animationDelay: '1s' }}>
                  <div className="text-sm">
                    <div className="font-medium">98% Success Rate</div>
                    <div className="text-muted-foreground">in understanding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};