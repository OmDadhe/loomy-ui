import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, MessageCircle, Search, Plus, User } from "lucide-react";

export const ForumSection = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [searchTerm, setSearchTerm] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

  const forumPosts = [
    {
      id: 1,
      user: "Student A",
      avatar: "/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png",
      question: "Topic Number 7 is very hard",
      description: "I tried this but Number 7 I can't because it's very hard for me even though I really tried I can't figure out how to solve it.",
      time: "2 min ago",
      likes: 5,
      comments: 3,
      category: "Math"
    },
    {
      id: 2,
      user: "Student B",
      avatar: "/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png",
      question: "Question 8 is so difficult",
      description: "I need help with this math problem. Can anyone explain the solution step by step?",
      time: "5 min ago",
      likes: 8,
      comments: 12,
      category: "Math"
    },
    {
      id: 3,
      user: "Student C",
      avatar: "/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png",
      question: "English Grammar Question",
      description: "I'm confused about when to use 'who' vs 'whom'. Can someone help me understand?",
      time: "10 min ago",
      likes: 3,
      comments: 7,
      category: "English"
    }
  ];

  const myQuestions = [
    {
      id: 1,
      question: "How to solve quadratic equations?",
      description: "I need help understanding the quadratic formula",
      time: "1 hour ago",
      likes: 12,
      comments: 8,
      answers: 5
    },
    {
      id: 2,
      question: "Physics motion problems",
      description: "Struggling with velocity and acceleration problems",
      time: "2 hours ago",
      likes: 7,
      comments: 4,
      answers: 3
    }
  ];

  const handleAskQuestion = () => {
    if (newQuestion.trim()) {
      // Add new question logic here
      setNewQuestion("");
    }
  };

  return (
    <div className="min-h-screen wix-gradient-hero">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" 
              alt="Loomy" 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome to the forum</h1>
              <p className="text-muted-foreground">Connect with your peers and solve your problems together!</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="mb-6 p-4 bg-white/90 backdrop-blur-sm border-border/20">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="pl-10 h-10 bg-background/50 border-border/30"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 h-10">
              <Plus className="w-4 h-4 mr-2" />
              Ask
            </Button>
          </div>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white/80 backdrop-blur-sm rounded-xl p-1 border border-border/20">
            <Button
              variant={activeTab === "feed" ? "default" : "ghost"}
              onClick={() => setActiveTab("feed")}
              className="rounded-lg px-6"
            >
              Q&A Feed
            </Button>
            <Button
              variant={activeTab === "my-qa" ? "default" : "ghost"}
              onClick={() => setActiveTab("my-qa")}
              className="rounded-lg px-6"
            >
              My Q&A
            </Button>
          </div>
        </div>

        {/* Q&A Feed */}
        {activeTab === "feed" && (
          <div className="space-y-4">
            {forumPosts.map((post) => (
              <Card key={post.id} className="p-6 bg-white/90 backdrop-blur-sm border-border/20">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {post.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold">{post.user}</span>
                      <span className="text-sm text-muted-foreground">• {post.time}</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{post.question}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* My Q&A */}
        {activeTab === "my-qa" && (
          <div className="space-y-4">
            {myQuestions.map((question) => (
              <Card key={question.id} className="p-6 bg-white/90 backdrop-blur-sm border-border/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{question.question}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{question.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{question.time}</span>
                      <span>• {question.answers} answers</span>
                      <span>• {question.likes} likes</span>
                      <span>• {question.comments} comments</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Answers
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Ask Question Modal (simplified) */}
        <Card className="mt-8 p-6 bg-white/90 backdrop-blur-sm border-border/20">
          <h3 className="font-bold text-lg mb-4">Ask a Question</h3>
          <div className="space-y-4">
            <Input
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="What's your question?"
              className="bg-background/50 border-border/30"
            />
            <Textarea
              placeholder="Describe your question in detail..."
              className="min-h-[100px] bg-background/50 border-border/30"
            />
            <Button 
              onClick={handleAskQuestion}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Post Question
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};