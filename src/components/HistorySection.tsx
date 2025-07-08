import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, BookOpen, Award } from "lucide-react";

export const HistorySection = () => {
  const chatHistory = [
    {
      id: 1,
      title: "Mathematics - Algebra Basics",
      date: "2024-01-15",
      time: "14:30",
      duration: "25 mins",
      messages: 18,
      subject: "Mathematics",
      completed: true
    },
    {
      id: 2,
      title: "Science - Photosynthesis Process",
      date: "2024-01-14",
      time: "16:45",
      duration: "18 mins",
      messages: 12,
      subject: "Science",
      completed: true
    },
    {
      id: 3,
      title: "English - Grammar Rules",
      date: "2024-01-13",
      time: "10:20",
      duration: "32 mins",
      messages: 24,
      subject: "English",
      completed: false
    },
    {
      id: 4,
      title: "History - World War II",
      date: "2024-01-12",
      time: "15:15",
      duration: "40 mins",
      messages: 31,
      subject: "History",
      completed: true
    },
    {
      id: 5,
      title: "Physics - Newton's Laws",
      date: "2024-01-11",
      time: "11:30",
      duration: "28 mins",
      messages: 20,
      subject: "Physics",
      completed: true
    }
  ];

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case "Mathematics":
        return "bg-blue-100 text-blue-800";
      case "Science":
        return "bg-green-100 text-green-800";
      case "English":
        return "bg-purple-100 text-purple-800";
      case "History":
        return "bg-orange-100 text-orange-800";
      case "Physics":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-auto">
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Learning History</h1>
          <p className="text-muted-foreground">Review your past learning sessions and progress</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageSquare className="w-5 h-5 text-primary mr-2" />
              <span className="text-2xl font-bold text-primary">5</span>
            </div>
            <p className="text-sm text-muted-foreground">Total Sessions</p>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-accent mr-2" />
              <span className="text-2xl font-bold text-accent">143</span>
            </div>
            <p className="text-sm text-muted-foreground">Minutes Learned</p>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-2xl font-bold text-orange-500">4</span>
            </div>
            <p className="text-sm text-muted-foreground">Completed</p>
          </Card>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {chatHistory.map((session) => (
            <Card key={session.id} className="p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-2">
                    <h3 className="font-semibold text-lg">{session.title}</h3>
                    <Badge className={`text-xs w-fit ${getSubjectColor(session.subject)}`}>
                      {session.subject}
                    </Badge>
                    {session.completed && (
                      <Badge className="bg-green-100 text-green-800 w-fit">
                        <Award className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {session.date} at {session.time}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {session.messages} messages
                    </div>
                    <div>Duration: {session.duration}</div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Review
                  </Button>
                  <Button size="sm">
                    Continue
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