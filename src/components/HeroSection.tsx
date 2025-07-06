import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";

/**
 * Wix-Style Hero Section - Exact positioning and animation specifications
 * 
 * LAYOUT SPECIFICATIONS:
 * - Left side: 45% width, content aligned left with 80px left padding
 * - Right side: 55% width, visual elements positioned absolutely
 * - Vertical centering with 120px top/bottom padding
 * 
 * SCROLL BEHAVIOR:
 * - Loomy avatar: Parallax moves down at 0.3x scroll speed
 * - Floating elements: Different parallax speeds (0.1x to 0.5x)
 * - Background: Subtle parallax at 0.05x speed
 * 
 * FLOATING ELEMENTS POSITIONING (Wix Style):
 * - Top-left: Small template card at 15% from top, 10% from left
 * - Top-right: Larger card at 20% from top, 15% from right  
 * - Bottom-left: Medium card at 70% from top, 8% from left
 * - Center-right: Avatar interaction card following scroll
 */
export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Staggered entrance animations
    setTimeout(() => setIsVisible(true), 150);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen wix-gradient-hero overflow-hidden">
      
      {/* Wix-Style Floating Background Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top cluster - Wix orange dots */}
        <div 
          className="absolute w-3 h-3 bg-accent rounded-full opacity-40 animate-wix-float"
          style={{ 
            top: '15%', 
            left: '8%',
            transform: `translateY(${scrollY * 0.1}px)` 
          }} 
        />
        <div 
          className="absolute w-2 h-2 bg-accent-purple rounded-full opacity-50 animate-wix-float"
          style={{ 
            top: '25%', 
            left: '12%',
            animationDelay: '1s',
            transform: `translateY(${scrollY * 0.15}px)` 
          }} 
        />
        
        {/* Right cluster - Purple dots */}
        <div 
          className="absolute w-4 h-4 bg-accent-purple rounded-full opacity-30 animate-wix-float"
          style={{ 
            top: '20%', 
            right: '10%',
            animationDelay: '2s',
            transform: `translateY(${scrollY * 0.2}px)` 
          }} 
        />
        <div 
          className="absolute w-2.5 h-2.5 bg-primary rounded-full opacity-60 animate-wix-float"
          style={{ 
            top: '35%', 
            right: '15%',
            animationDelay: '0.5s',
            transform: `translateY(${scrollY * 0.08}px)` 
          }} 
        />
        
        {/* Bottom cluster - Mixed colors */}
        <div 
          className="absolute w-3.5 h-3.5 bg-accent-green rounded-full opacity-45 animate-wix-float"
          style={{ 
            bottom: '30%', 
            left: '6%',
            animationDelay: '1.5s',
            transform: `translateY(${scrollY * 0.12}px)` 
          }} 
        />
      </div>

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
            
            {/* Main Loomy Character - Center positioned with parallax */}
            <div 
              className={`relative z-20 transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ 
                transform: `translateY(${scrollY * 0.3}px) scale(${isVisible ? 1 : 0.95})` 
              }}
            >
              {/* Glow effect behind character */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150 animate-wix-pulse-glow" />
              
              {/* Main character */}
              <div className="relative animate-wix-float hover:scale-105 transition-all duration-500 cursor-pointer">
                <img 
                  src="/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png"
                  alt="Loomy - Your AI Learning Companion"
                  className="h-80 lg:h-96 w-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Floating UI Cards - Wix Template Style Positioning */}
            
            {/* Top-Left Template Card */}
            <div 
              className={`absolute bg-white rounded-2xl p-4 shadow-wix-float border border-gray-100 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                top: '15%', 
                left: '10%',
                width: '180px',
                transform: `translateY(${scrollY * 0.1}px)` 
              }}
            >
              <div className="space-y-2">
                <div className="w-full h-20 bg-gradient-to-br from-accent/20 to-accent-purple/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-1">
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                  <div className="h-2 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            </div>

            {/* Top-Right Interaction Card */}
            <div 
              className={`absolute bg-white rounded-2xl p-4 shadow-wix-float border border-gray-100 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                top: '20%', 
                right: '15%',
                width: '200px',
                transform: `translateY(${scrollY * 0.15}px)` 
              }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png"
                    alt="Loomy"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
                <div>
                  <div className="h-2 bg-gray-200 rounded w-16" />
                  <div className="h-1.5 bg-gray-100 rounded w-12 mt-1" />
                </div>
              </div>
              <div className="h-2 bg-accent/20 rounded w-full" />
            </div>

            {/* Bottom-Left Stats Card */}
            <div 
              className={`absolute bg-white rounded-2xl p-4 shadow-wix-float border border-gray-100 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                bottom: '25%', 
                left: '8%',
                width: '160px',
                transform: `translateY(${scrollY * 0.08}px)` 
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
                <div className="flex justify-center mt-2">
                  <div className="w-12 h-1 bg-primary rounded" />
                </div>
              </div>
            </div>

            {/* Center-Right Learning Progress */}
            <div 
              className={`absolute bg-white rounded-2xl p-3 shadow-wix-float border border-gray-100 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                top: '50%', 
                right: '5%',
                width: '140px',
                transform: `translateY(${scrollY * 0.2}px)` 
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                <div>
                  <div className="text-xs font-medium text-foreground">Learning</div>
                  <div className="text-xs text-muted-foreground">Active</div>
                </div>
              </div>
            </div>
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