import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Crown, Zap } from "lucide-react";

export const SubscriptionSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "forever",
      color: "bg-gray-100",
      features: [
        { name: "Limited Questions per day", included: true, limit: "5" },
        { name: "Questions per day", included: true, limit: "Unlimited" },
        { name: "Unlimited Questions per month", included: false },
        { name: "Unlimited Questions per month", included: false }
      ],
      premiumFeatures: [
        "AI-time learning",
        "Premium Support"
      ],
      additional: [
        "Number of devices: 1 device",
        "2 devices"
      ]
    },
    {
      id: "basic",
      name: "Basic",
      price: "$9.99",
      period: "monthly",
      color: "bg-blue-100",
      popular: false,
      features: [
        { name: "Limited Questions per day", included: true, limit: "Unlimited" },
        { name: "Questions per day", included: true, limit: "Unlimited" },
        { name: "Unlimited Questions per month", included: true },
        { name: "Unlimited Questions per month", included: true }
      ],
      premiumFeatures: [
        "Limited AI Learning",
        "Premium Support"
      ],
      additional: [
        "Number of devices: 2 devices",
        "2 devices"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      price: "$19.99",
      period: "monthly",
      color: "bg-purple-100",
      popular: true,
      features: [
        { name: "Limited Questions per day", included: true, limit: "Unlimited" },
        { name: "Questions per day", included: true, limit: "Unlimited" },
        { name: "Unlimited Questions per month", included: true },
        { name: "Unlimited Questions per month", included: true }
      ],
      premiumFeatures: [
        "All unlock premium features",
        "Premium Support"
      ],
      additional: [
        "Number of devices: 2 devices",
        "2 devices"
      ]
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: "$29.99",
      period: "monthly",
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
      features: [
        { name: "Limited Questions per day", included: true, limit: "Unlimited" },
        { name: "Questions per day", included: true, limit: "Unlimited" },
        { name: "Unlimited Questions per month", included: true },
        { name: "Unlimited Questions per month", included: true }
      ],
      premiumFeatures: [
        "All unlock premium features",
        "Premium Support"
      ],
      additional: [
        "Number of devices: 2 devices",
        "2 devices"
      ]
    }
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = (planId: string) => {
    console.log(`Subscribing to ${planId} plan`);
  };

  return (
    <div className="min-h-screen wix-gradient-hero">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Button variant="ghost" className="text-foreground hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
            <div className="ml-auto">
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Choose your plan
          </h1>
          <p className="text-muted-foreground">
            Select the perfect plan for your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-wix-glow relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handleSelectPlan(plan.id)}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                  Most Popular
                </Badge>
              )}
              
              <div className={`w-full h-20 rounded-lg mb-4 flex items-center justify-center ${plan.color}`}>
                {plan.id === 'free' && <Zap className="w-8 h-8 text-gray-600" />}
                {plan.id === 'basic' && <Crown className="w-8 h-8 text-blue-600" />}
                {plan.id === 'premium' && <Star className="w-8 h-8 text-purple-600" />}
                {plan.id === 'ultimate' && <Crown className="w-8 h-8 text-white" />}
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                <div className="text-sm text-muted-foreground">per {plan.period}</div>
              </div>

              <div className="space-y-3 mb-6">
                {/* Feature List */}
                <div className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-sm">{feature.name}</span>
                      {feature.limit && (
                        <Badge variant="outline" className="text-xs">
                          {feature.limit}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>

                {/* Premium Features */}
                <div className="pt-4 border-t border-border/20">
                  <div className="text-sm font-medium mb-2">Premium Features:</div>
                  {plan.premiumFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="pt-4 border-t border-border/20">
                  {plan.additional.map((info, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      {info}
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-secondary hover:bg-secondary/90'
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.id === 'free' ? 'Current Plan' : 'Subscribe'}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="p-6 bg-white/90 backdrop-blur-sm border-border/20">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help you find the perfect plan for your learning needs.
            </p>
            <Button variant="outline" className="mr-4">
              Contact Support
            </Button>
            <Button>
              Start Free Trial
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};