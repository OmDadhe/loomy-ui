import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin, Send, Star } from "lucide-react";

/**
 * Contact Section Component with Wix-inspired design and animations
 * Features contact form, testimonials, and multiple ways to get in touch
 */
export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      ref={sectionRef}
      className="section-overlap py-20 lg:py-32 relative z-10"
    >
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Get in Touch
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Start <span className="wix-text-gradient">Learning?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of learners who've transformed their understanding with Loomy. 
              We're here to help you succeed every step of the way.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            <Card className="p-8 bg-card/90 backdrop-blur-xl border border-border/20 shadow-wix-glow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
                <p className="text-muted-foreground">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      className="min-h-32 bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Testimonials */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-4">
                
                <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/20 hover:shadow-wix-float transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-wix-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-muted-foreground">hello@loomy.ai</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/20 hover:shadow-wix-float transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Live Chat</h4>
                      <p className="text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/20 hover:shadow-wix-float transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Testimonial */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              <Card className="p-6 bg-wix-primary text-white border-0 shadow-wix-glow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "Loomy transformed how I study. The personalized approach and instant feedback 
                  helped me understand complex concepts I'd been struggling with for months!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm opacity-90">Computer Science Student</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center bg-card/80 backdrop-blur-sm border border-border/20">
                  <div className="text-2xl font-bold text-primary mb-1">10k+</div>
                  <div className="text-sm text-muted-foreground">Happy Learners</div>
                </Card>
                <Card className="p-4 text-center bg-card/80 backdrop-blur-sm border border-border/20">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};