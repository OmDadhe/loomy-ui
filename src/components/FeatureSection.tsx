import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Zap, Target, Users, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  imageUrl?: string;
  reverse?: boolean;
  sectionId: string;
}

/**
 * Feature Section Component with Wix-style overlapping scroll effects
 * Each section slides over the previous one during scroll
 */
export const FeatureSection = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  imageUrl, 
  reverse = false,
  sectionId 
}: FeatureSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress for this section
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      setScrollProgress(progress);
    };

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

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id={sectionId}
      ref={sectionRef}
      className="section-overlap py-20 lg:py-32 relative z-10 min-h-screen flex items-center"
      style={{
        transform: `translateY(${Math.max(0, (1 - scrollProgress) * -50)}px)`,
        opacity: Math.max(0.3, scrollProgress)
      }}
    >
      <div className="container mx-auto px-6 lg:px-8 w-full">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          
          {/* Content Side */}
          <div className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''}`}>
            <div className={`transition-all duration-1000 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                {subtitle}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="wix-text-gradient">{title.split(' ')[0]}</span>
                <span className="text-foreground"> {title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`p-6 border border-border/20 bg-card/80 backdrop-blur-sm hover:shadow-wix-float transition-all duration-500 group cursor-pointer ${
                    isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'
                  }`}
                  style={{ animationDelay: `${index * 200 + 300}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-wix-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className={`pt-4 transition-all duration-1000 delay-700 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              <Button 
                onClick={() => navigate("/login")}
                variant="hero" 
                size="lg" 
                className="group hover:scale-105 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              {/* Main Visual Container */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl scale-110 opacity-60" />
                
                {/* Main Content Card */}
                <Card className="relative bg-card/90 backdrop-blur-xl border border-border/20 shadow-wix-glow p-8 rounded-3xl">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="w-full h-64 bg-wix-hero rounded-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-wix-primary rounded-2xl flex items-center justify-center mx-auto">
                          <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">Interactive Learning</h3>
                        <p className="text-muted-foreground">Experience education like never before</p>
                      </div>
                    </div>
                  )}
                </Card>

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-lg rounded-2xl p-4 shadow-wix-float border border-border/20 animate-wix-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-lg rounded-2xl p-4 shadow-wix-float border border-border/20 animate-wix-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Active Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pre-configured feature sections data
export const featureSections = [
  {
    sectionId: "personalized-learning",
    title: "Personalized Learning",
    subtitle: "AI-Powered Education",
    description: "Loomy adapts to your unique learning style, pace, and preferences to create a truly personalized educational experience that grows with you.",
    features: [
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Adaptive AI Tutor",
        description: "Our AI learns how you learn best and adjusts teaching methods in real-time."
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Personalized Pathways",
        description: "Custom learning paths designed specifically for your goals and interests."
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Instant Feedback",
        description: "Get immediate, constructive feedback to accelerate your learning progress."
      }
    ],
    reverse: false
  },
  {
    sectionId: "collaborative-features",
    title: "Collaborative Learning",
    subtitle: "Learn Together",
    description: "Connect with peers, share knowledge, and learn together in our vibrant community of curious minds from around the world.",
    features: [
      {
        icon: <Users className="w-6 h-6" />,
        title: "Study Groups",
        description: "Join or create study groups with learners who share your interests and goals."
      },
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Peer Insights",
        description: "Learn from different perspectives and approaches shared by your peers."
      },
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Shared Resources",
        description: "Access a vast library of resources created and curated by the community."
      }
    ],
    reverse: true
  }
];