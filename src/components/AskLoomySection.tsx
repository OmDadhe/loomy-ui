import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Share, Volume2, Star, ThumbsUp, ThumbsDown, MessageSquare, Upload, Mic, Send } from "lucide-react";

export const AskLoomySection = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Array<{type: 'user' | 'loomy', content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    setMessages(prev => [...prev, {type: 'user', content: question}]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'loomy', 
        content: "That's a great question! Let me help you understand this concept better. Here's a detailed explanation with examples..."
      }]);
      setIsLoading(false);
    }, 1000);
    
    setQuestion("");
  };

  const handleFollowUp = (type: string) => {
    const responses = {
      'confused': "Let me break this down into simpler steps...",
      'more': "Here are some additional details and examples...",
      'interesting': "I'm glad you find this interesting! Let's explore more..."
    };
    
    setMessages(prev => [...prev, {
      type: 'loomy', 
      content: responses[type as keyof typeof responses] || "How can I help you further?"
    }]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Ask Loomy</h1>
          <p className="text-muted-foreground">I'm here to help you learn and understand</p>
        </div>

        {/* Messages */}
        <div className="space-y-4 mb-6">
          {messages.map((message, index) => (
            <Card 
              key={index} 
              className={`p-4 ${message.type === 'user' ? 'ml-12 bg-green-50/80' : 'mr-12 bg-white/90'} backdrop-blur-sm border-border/20`}
            >
              <div className="flex items-start space-x-3">
                {message.type === 'loomy' && (
                  <img 
                    src="/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" 
                    alt="Loomy" 
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div className="flex-1">
                  <p className="text-sm">{message.content}</p>
                  
                  {message.type === 'loomy' && (
                    <div className="mt-4 space-y-3">
                      {/* Action Icons */}
                      <div className="flex items-center space-x-3">
                        <Button variant="ghost" size="sm" className="p-2">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                          <Share className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                          <Volume2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                          <Star className="w-4 h-4" />
                        </Button>
                        <div className="ml-4 flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="p-2">
                            <ThumbsUp className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2">
                            <ThumbsDown className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Follow-up Buttons */}
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleFollowUp('confused')}
                          className="rounded-full"
                        >
                          Still confused?
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleFollowUp('more')}
                          className="rounded-full"
                        >
                          Tell me more
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleFollowUp('interesting')}
                          className="rounded-full"
                        >
                          Interesting
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Question Input - Fixed at bottom */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-border/20 p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 bg-white/90 backdrop-blur-sm border-border/20">
            <div className="space-y-4">
              <Textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask me anything..."
                className="min-h-[120px] resize-none bg-background/50 border-border/30"
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleAskQuestion()}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Upload className="w-4 h-4 mr-1" />
                    Upload
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Mic className="w-4 h-4 mr-1" />
                    Voice
                  </Button>
                </div>
                <Button 
                  onClick={handleAskQuestion}
                  disabled={isLoading || !question.trim()}
                  className="px-6 h-10 bg-green-600 hover:bg-green-700 rounded-xl"
                >
                  {isLoading ? "Thinking..." : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};