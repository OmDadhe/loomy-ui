import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Globe, Brain, BookOpen, Zap, Target } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Chat with AI",
      description: "Interactive learning conversations with Loomy",
      icon: MessageSquare,
      status: "Active"
    },
    {
      title: "Multi-Language Support",
      description: "Learn in your preferred language",
      icon: Globe,
      status: "Available"
    },
    {
      title: "Adaptive Learning",
      description: "Personalized learning paths based on your progress",
      icon: Brain,
      status: "Beta"
    },
    {
      title: "Study Materials",
      description: "Access curated learning resources and materials",
      icon: BookOpen,
      status: "Coming Soon"
    },
    {
      title: "Quick Practice",
      description: "Short practice sessions for skill reinforcement",
      icon: Zap,
      status: "Available"
    },
    {
      title: "Goal Tracking",
      description: "Set and track your learning objectives",
      icon: Target,
      status: "Active"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Available":
        return "bg-blue-100 text-blue-800";
      case "Beta":
        return "bg-yellow-100 text-yellow-800";
      case "Coming Soon":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-auto">
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Features</h1>
          <p className="text-muted-foreground">Explore all the learning tools available to you</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <Badge className={`text-xs ${getStatusColor(feature.status)}`}>
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <Button 
                    size="sm" 
                    variant={feature.status === "Coming Soon" ? "outline" : "default"}
                    disabled={feature.status === "Coming Soon"}
                    className="w-full"
                  >
                    {feature.status === "Coming Soon" ? "Coming Soon" : "Try Now"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};