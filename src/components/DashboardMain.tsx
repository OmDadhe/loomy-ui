import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, BookOpen, Calculator, Clock, Zap, Award } from "lucide-react";
// Using existing avatar for now
const loomyAvatar = "/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png";

interface DashboardMainProps {
  onStartChat: () => void;
}

export const DashboardMain = ({ onStartChat }: DashboardMainProps) => {
  const subjects = [
    {
      icon: MessageSquare,
      title: "Language",
      description: "How do you say \"Good Morning\" in Chinese?",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Essay",
      description: "Write a short essay about sustainability",
      color: "bg-pink-500"
    },
    {
      icon: Calculator,
      title: "Math", 
      description: "Solve the system substitution. y= 2x; y=5x-21",
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "History",
      description: "How was the daily life in Roman Empire?",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Header with Stats */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img src={loomyAvatar} alt="Loomy" className="w-16 h-16 rounded-full" />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-purple-500" />
            <span className="font-semibold">150 Points</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="font-semibold">5 Day Streak</span>
          </div>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How can I help you today?</h1>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        {subjects.map((subject, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-wix-glow transition-all duration-300 cursor-pointer group"
            onClick={onStartChat}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <subject.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{subject.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {subject.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="rounded-full">
          <Calculator className="w-4 h-4 mr-2" />
          Calculator
        </Button>
        <Button variant="outline" className="rounded-full">
          <BookOpen className="w-4 h-4 mr-2" />
          Add Image
        </Button>
      </div>
    </div>
  );
};