import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: "outline" | "hero" | "premium";
}

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  const pricingPlans: PricingPlan[] = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for trying out Loomy",
      features: [
        "5 AI conversations per day",
        "Basic subject support",
        "Learning progress tracking",
        "Mobile app access"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline"
    },
    {
      name: "Student",
      price: isAnnual ? "₹1,999" : "₹199",
      period: isAnnual ? "per year" : "per month",
      description: "Ideal for individual students",
      features: [
        "Unlimited AI conversations",
        "All subjects & boards supported",
        "Advanced learning analytics",
        "Personalized study plans",
        "Homework help & explanations",
        "Practice tests & quizzes",
        "Priority support"
      ],
      popular: true,
      buttonText: "Start Learning",
      buttonVariant: "hero"
    },
    {
      name: "Premium",
      price: isAnnual ? "₹3,999" : "₹399",
      period: isAnnual ? "per year" : "per month",
      description: "Best for serious learners",
      features: [
        "Everything in Student plan",
        "1-on-1 tutoring sessions (2/month)",
        "Custom learning paths",
        "Advanced performance insights",
        "Family sharing (up to 3 accounts)",
        "Offline content access",
        "Early access to new features",
        "24/7 premium support"
      ],
      buttonText: "Go Premium",
      buttonVariant: "premium"
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 wix-gradient-feature">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Pricing Plans
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Learning
            <span className="block wix-text-gradient">Journey</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing options designed to support every student's learning goals and budget.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-1 shadow-wix-card">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                !isAnnual 
                  ? "bg-primary text-white shadow-wix-card" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                isAnnual 
                  ? "bg-primary text-white shadow-wix-card" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <Badge className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                Save 17%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card/60 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:shadow-wix-float hover:scale-105 ${
                plan.popular 
                  ? "border-primary/30 shadow-wix-glow ring-1 ring-primary/20" 
                  : "border-border/20 shadow-wix-card hover:border-primary/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-2 rounded-full shadow-wix-card">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleGetStarted}
                variant={plan.buttonVariant}
                size="lg"
                className={`w-full h-12 font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "shadow-wix-glow" : "shadow-wix-card hover:shadow-wix-float"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All plans include a 7-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};