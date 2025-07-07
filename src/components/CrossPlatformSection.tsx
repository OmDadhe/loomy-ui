import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Monitor, Tablet } from "lucide-react";

export const CrossPlatformSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Available Everywhere
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Learn <span className="wix-text-gradient">Anywhere</span>, Anytime
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access Loomy on all your devices. Start learning on your phone, continue on your tablet, 
              and finish on your computer - your progress syncs seamlessly across all platforms.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Device Preview */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl scale-110 opacity-60" />
              
              {/* Device Stack */}
              <div className="relative space-y-8">
                {/* Phone */}
                <Card className="w-48 mx-auto bg-card/90 backdrop-blur-xl border border-border/20 shadow-wix-glow p-4 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-xl h-32 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-sm font-semibold">Mobile App</div>
                    <div className="text-xs text-muted-foreground">iOS & Android</div>
                  </div>
                </Card>

                {/* Tablet */}
                <Card className="w-64 mx-auto bg-card/90 backdrop-blur-xl border border-border/20 shadow-wix-glow p-4 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 -mt-4">
                  <div className="bg-gradient-to-br from-accent to-accent-purple rounded-xl h-36 flex items-center justify-center">
                    <Tablet className="w-10 h-10 text-white" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-sm font-semibold">Tablet Experience</div>
                    <div className="text-xs text-muted-foreground">Optimized for iPad</div>
                  </div>
                </Card>

                {/* Desktop */}
                <Card className="w-80 mx-auto bg-card/90 backdrop-blur-xl border border-border/20 shadow-wix-glow p-4 rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 -mt-6">
                  <div className="bg-gradient-to-br from-accent-purple to-primary rounded-xl h-40 flex items-center justify-center">
                    <Monitor className="w-12 h-12 text-white" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-sm font-semibold">Desktop Platform</div>
                    <div className="text-xs text-muted-foreground">Full-featured experience</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="space-y-8">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Download the <span className="wix-text-gradient">Loomy App</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Get instant access to personalized learning experiences. Download our app and join 
                millions of students who are already learning smarter with Loomy.
              </p>
            </div>

            {/* Download Buttons */}
            <div className={`space-y-4 transition-all duration-1000 delay-700 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              <Button 
                onClick={() => navigate("/login")}
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto group flex items-center justify-center space-x-4 hover:scale-105 transition-all duration-300"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play"
                  className="h-8"
                />
                <span className="text-white font-semibold">Download for Android</span>
              </Button>

              <Button 
                onClick={() => navigate("/login")}
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto group flex items-center justify-center space-x-4 hover:scale-105 transition-all duration-300"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store"
                  className="h-8"
                />
                <span className="font-semibold">Download for iOS</span>
              </Button>
            </div>

            {/* Features */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 transition-all duration-1000 delay-900 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              <Card className="p-4 bg-card/60 backdrop-blur-sm border border-border/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-green rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Offline Mode</div>
                    <div className="text-xs text-muted-foreground">Learn without internet</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card/60 backdrop-blur-sm border border-border/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-500"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sync Across Devices</div>
                    <div className="text-xs text-muted-foreground">Seamless experience</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};