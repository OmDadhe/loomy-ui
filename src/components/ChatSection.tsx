import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, User, Bot } from "lucide-react";

/**
 * Chat Interface Section - Wix-inspired design showing AI tutoring in action
 * Features scroll-triggered animations and realistic chat simulation
 */
export const ChatSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const cbseChatMessages = [
    {
      type: "user",
      content: "I'm struggling with quadratic equations. Can you help me understand them?",
      timestamp: "2:34 PM"
    },
    {
      type: "loomy",
      content: "Hi! Let's solve quadratic equations step by step. For CBSE Class 7, we'll use the factorization method. Take x² + 5x + 6 = 0. We need two numbers that multiply to 6 and add to 5. That's 2 and 3! So (x + 2)(x + 3) = 0.",
      timestamp: "2:34 PM"
    },
    {
      type: "user", 
      content: "That makes sense! What's next?",
      timestamp: "2:35 PM"
    },
    {
      type: "loomy",
      content: "Great! So if (x + 2)(x + 3) = 0, then either x + 2 = 0 or x + 3 = 0. This gives us x = -2 or x = -3. These are your solutions! Remember to always check by substituting back.",
      timestamp: "2:35 PM"
    }
  ];

  const icseChatMessages = [
    {
      type: "user",
      content: "I'm struggling with quadratic equations. Can you help me understand them?",
      timestamp: "2:34 PM"
    },
    {
      type: "loomy",
      content: "Absolutely! For ICSE Class 7, let's explore quadratic equations using the quadratic formula. For x² + 5x + 6 = 0, we use x = (-b ± √(b² - 4ac)) / 2a where a=1, b=5, c=6.",
      timestamp: "2:34 PM"
    },
    {
      type: "user", 
      content: "Can you show me the calculation?",
      timestamp: "2:35 PM"
    },
    {
      type: "loomy",
      content: "Sure! x = (-5 ± √(25 - 24)) / 2 = (-5 ± 1) / 2. So x = -2 or x = -3. Notice how this method works for any quadratic equation, even when factoring is difficult!",
      timestamp: "2:35 PM"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start message animation sequence
          setTimeout(() => {
            const interval = setInterval(() => {
              setCurrentMessage(prev => {
                if (prev < Math.max(cbseChatMessages.length, icseChatMessages.length) - 1) {
                  return prev + 1;
                } else {
                  clearInterval(interval);
                  return prev;
                }
              });
            }, 1500);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [cbseChatMessages.length, icseChatMessages.length]);

  return (
    <section 
      ref={sectionRef}
      className="section-overlap py-20 lg:py-32 relative z-10 starry-background"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="wix-text-gradient">AI Tutoring</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how Loomy adapts to your learning style and breaks down complex concepts into easy-to-understand explanations.
            </p>
          </div>
        </div>

        {/* Mobile Chat Previews Side by Side */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* CBSE Mobile Preview */}
            <div className="mx-auto">
              <div className="w-80 bg-card/95 backdrop-blur-xl rounded-3xl shadow-wix-glow border border-border/20 overflow-hidden">
                {/* Mobile Header */}
                <div className="bg-primary px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/4c845139-dd32-48d6-a657-28ef00c469e9.png"
                        alt="Loomy"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">Loomy</h3>
                      <p className="text-xs text-white/80">CBSE Class 7</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                    <span className="text-xs text-white/90">Online</span>
                  </div>
                </div>

                {/* CBSE Chat Messages */}
                <div className="p-4 space-y-4 h-96 overflow-y-auto bg-gradient-to-b from-background/50 to-background/80">
                  {cbseChatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        index <= currentMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {message.type === 'user' ? (
                        <div className="flex justify-end">
                          <div className="max-w-xs">
                            <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-3 py-2">
                              <p className="text-xs">{message.content}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 text-right">{message.timestamp}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <img 
                              src="/lovable-uploads/4c845139-dd32-48d6-a657-28ef00c469e9.png"
                              alt="Loomy"
                              className="w-4 h-4"
                            />
                          </div>
                          <div className="max-w-xs">
                            <div className="bg-secondary/80 rounded-2xl rounded-bl-md px-3 py-2">
                              <p className="text-xs text-foreground">{message.content}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Input */}
                <div className="border-t border-border/20 p-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-muted/40 rounded-2xl px-3 py-2">
                      <p className="text-xs text-muted-foreground">Ask about CBSE...</p>
                    </div>
                    <Button size="sm" variant="default" className="rounded-full w-8 h-8 p-0">
                      <Send className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* ICSE Mobile Preview */}
            <div className="mx-auto">
              <div className="w-80 bg-card/95 backdrop-blur-xl rounded-3xl shadow-wix-glow border border-border/20 overflow-hidden">
                {/* Mobile Header */}
                <div className="bg-accent px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/4c845139-dd32-48d6-a657-28ef00c469e9.png"
                        alt="Loomy"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">Loomy</h3>
                      <p className="text-xs text-white/80">ICSE Class 7</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                    <span className="text-xs text-white/90">Online</span>
                  </div>
                </div>

                {/* ICSE Chat Messages */}
                <div className="p-4 space-y-4 h-96 overflow-y-auto bg-gradient-to-b from-background/50 to-background/80">
                  {icseChatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        index <= currentMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {message.type === 'user' ? (
                        <div className="flex justify-end">
                          <div className="max-w-xs">
                            <div className="bg-accent text-accent-foreground rounded-2xl rounded-br-md px-3 py-2">
                              <p className="text-xs">{message.content}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 text-right">{message.timestamp}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                            <img 
                              src="/lovable-uploads/4c845139-dd32-48d6-a657-28ef00c469e9.png"
                              alt="Loomy"
                              className="w-4 h-4"
                            />
                          </div>
                          <div className="max-w-xs">
                            <div className="bg-secondary/80 rounded-2xl rounded-bl-md px-3 py-2">
                              <p className="text-xs text-foreground">{message.content}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Input */}
                <div className="border-t border-border/20 p-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-muted/40 rounded-2xl px-3 py-2">
                      <p className="text-xs text-muted-foreground">Ask about ICSE...</p>
                    </div>
                    <Button size="sm" variant="default" className="rounded-full w-8 h-8 p-0">
                      <Send className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate("/login")}
            variant="hero" 
            size="lg"
            className={`transition-all duration-1000 delay-700 hover:scale-105 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}
          >
            Try Loomy Now - It's Free
          </Button>
        </div>
      </div>
    </section>
  );
};