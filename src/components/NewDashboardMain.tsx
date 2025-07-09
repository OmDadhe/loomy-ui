import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, BookOpen, Brain, Users, Star, Search, Home, Plus, Menu } from "lucide-react";
import { useState } from "react";

interface NewDashboardMainProps {
  onSectionChange: (section: string) => void;
}

export const NewDashboardMain = ({ onSectionChange }: NewDashboardMainProps) => {
  const [greeting, setGreeting] = useState("Ready to level up, Karthik");
  
  const sections = [
    {
      id: "ask-loomy",
      title: "Ask Loomy",
      subtitle: "I have a question",
      icon: MessageCircle,
      color: "bg-green-100",
      iconColor: "text-green-600",
      onClick: () => onSectionChange('ask-loomy')
    },
    {
      id: "loomy-tales",
      title: "Loomy Tales",
      subtitle: "Create stories and tales",
      icon: BookOpen,
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      onClick: () => onSectionChange('loomy-tales')
    },
    {
      id: "brain-rush",
      title: "Brain Rush",
      subtitle: "Challenge your mind",
      icon: Brain,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      onClick: () => onSectionChange('brain-rush')
    },
    {
      id: "forum",
      title: "Forum",
      subtitle: "Connect with community",
      icon: Users,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      onClick: () => onSectionChange('forum')
    }
  ];

  return (
    <div className="min-h-screen wix-gradient-hero">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-border/20">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium">7</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium">1240</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-background/80 border border-border/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <Button variant="ghost" size="sm">
            <Star className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Home className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Fun Fact Card */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-border/20">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Fun Fact!</h3>
              <p className="text-sm text-muted-foreground">
                A group of flamingos is called a "flamboyance"
              </p>
            </div>
          </div>
        </Card>

        {/* Greeting Card */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border-border/20">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" 
                alt="Loomy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{greeting}</h3>
              <p className="text-sm text-muted-foreground">
                Math character energy detected. Loomy located, brain mode activated!
              </p>
            </div>
          </div>
        </Card>

        {/* Main Action Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {sections.map((section) => (
            <Card
              key={section.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-wix-glow hover:scale-105 ${section.color} border-border/20`}
              onClick={section.onClick}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center">
                  <section.icon className={`w-8 h-8 ${section.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* New Chat Button */}
        <div className="fixed bottom-6 right-6">
          <Button 
            onClick={() => onSectionChange('ask-loomy')}
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-wix-glow"
          >
            <Plus className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};