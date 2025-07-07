import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  school?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Grade 10 Student",
    avatar: "PS",
    rating: 5,
    content: "Loomy made physics so much easier to understand! The personalized explanations helped me improve my grades from C to A in just two months.",
    school: "CBSE Board"
  },
  {
    id: "2", 
    name: "Arjun Patel",
    role: "Grade 9 Student",
    avatar: "AP",
    rating: 5,
    content: "The way Loomy explains complex math problems step-by-step is amazing. I finally understand calculus concepts that confused me for weeks.",
    school: "ICSE Board"
  },
  {
    id: "3",
    name: "Sneha Reddy",
    role: "Grade 8 Student", 
    avatar: "SR",
    rating: 5,
    content: "Chemistry was my weakest subject, but Loomy's interactive lessons and instant doubt clearing made it my favorite! Highly recommend.",
    school: "CBSE Board"
  },
  {
    id: "4",
    name: "Rohan Gupta",
    role: "Grade 11 Student",
    avatar: "RG", 
    rating: 5,
    content: "Preparing for JEE seemed impossible until I started using Loomy. The AI tutor adapts to my learning pace perfectly.",
    school: "CBSE Board"
  },
  {
    id: "5",
    name: "Ananya Das",
    role: "Grade 7 Student",
    avatar: "AD",
    rating: 5,
    content: "I love how Loomy makes learning fun with interactive examples. Biology is so much more interesting now!",
    school: "ICSE Board"
  },
  {
    id: "6",
    name: "Karthik Kumar",
    role: "Grade 12 Student",
    avatar: "KK",
    rating: 5,
    content: "The exam preparation features are incredible. Loomy helped me identify my weak areas and improve them systematically.",
    school: "CBSE Board"
  }
];

export const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320; // w-80 = 320px
      const gap = 24; // gap-6 = 24px
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5"
    >
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Student Success Stories
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              What Students <span className="wix-text-gradient">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from thousands of students who've transformed their learning journey with Loomy
            </p>
          </div>
        </div>

        {/* Auto-scrolling Testimonials */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-4 [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${index}`}
                className={`flex-shrink-0 w-80 p-6 bg-card/90 backdrop-blur-sm border border-border/20 shadow-wix-card hover:shadow-wix-float transition-all duration-500 ${
                  isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'
                }`}
                style={{ animationDelay: `${(index % 6) * 100}ms` }}
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wix-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    {testimonial.school && (
                      <p className="text-xs text-primary font-medium">{testimonial.school}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50k+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Schools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};