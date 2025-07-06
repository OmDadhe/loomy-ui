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

  const chatMessages = [
    {
      type: "user",
      content: "I'm struggling with quadratic equations. Can you help me understand them?",
      timestamp: "2:34 PM"
    },
    {
      type: "loomy",
      content: "Of course! Let's break down quadratic equations step by step. Think of them like a recipe - we have ingredients (variables) that follow a specific pattern. Would you like to start with a simple example?",
      timestamp: "2:34 PM"
    },
    {
      type: "user", 
      content: "Yes, please! Something easy to follow.",
      timestamp: "2:35 PM"
    },
    {
      type: "loomy",
      content: "Perfect! Let's use x² + 5x + 6 = 0. I'll show you three different ways to solve this, and you can choose which method clicks best for you. Think of it like finding the x-values where our parabola touches the ground.",
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
                if (prev < chatMessages.length - 1) {
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
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-overlap py-20 lg:py-32 relative z-10"
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

        {/* Chat Interface Mockup */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
          <div className="bg-card/90 backdrop-blur-xl rounded-3xl shadow-wix-glow border border-border/20 overflow-hidden">
            
            {/* Chat Header */}
            <div className="bg-wix-primary px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png"
                    alt="Loomy"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Loomy</h3>
                  <p className="text-sm text-white/80">Your AI Learning Companion</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                <span className="text-sm text-white/90">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6 h-96 overflow-y-auto">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index <= currentMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${index <= currentMessage ? 'animate-wix-fade-in' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {message.type === 'user' ? (
                    <div className="flex justify-end">
                      <div className="max-w-xs lg:max-w-md">
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-3">
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 text-right">{message.timestamp}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-wix-primary flex items-center justify-center flex-shrink-0">
                        <img 
                          src="/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png"
                          alt="Loomy"
                          className="w-6 h-6 rounded-full"
                        />
                      </div>
                      <div className="max-w-xs lg:max-w-md">
                        <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {currentMessage === chatMessages.length - 1 && (
                <div className="flex items-start space-x-3 animate-wix-fade-in">
                  <div className="w-8 h-8 rounded-full bg-wix-primary flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png"
                      alt="Loomy"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-border/20 p-4">
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-muted/50 rounded-2xl px-4 py-3">
                  <p className="text-sm text-muted-foreground">Ask Loomy anything about your studies...</p>
                </div>
                <Button size="icon" variant="floating" className="rounded-full">
                  <Send className="w-4 h-4" />
                </Button>
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