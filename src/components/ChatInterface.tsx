import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Mic, Image, Award, Zap } from "lucide-react";
// Using existing avatar for now
const loomyAvatar = "/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png";

interface Message {
  type: 'user' | 'loomy';
  content: string;
  timestamp: string;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'loomy',
      content: "Hi there! I'm Loomy, your AI learning companion. What would you like to learn today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate Loomy response
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me help you understand this concept step by step.",
        "I can definitely help you with that! Let's break it down into simpler parts.",
        "Excellent! This is a fundamental concept. Here's how we can approach it:",
        "I love your curiosity! Let me explain this in a way that's easy to understand.",
        "Perfect question! This connects to many important ideas. Let me show you:"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const loomyMessage: Message = {
        type: 'loomy',
        content: randomResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, loomyMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen">
      {/* Header */}
      <div className="border-b border-border p-4 flex items-center justify-between bg-card">
        <div className="flex items-center space-x-3">
          <img src={loomyAvatar} alt="Loomy" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold">Loomy</h2>
            <p className="text-sm text-muted-foreground">AI Learning Companion</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium">150 Points</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium">5 Day Streak</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.type === 'loomy' && (
              <div className="flex items-start space-x-3">
                <img src={loomyAvatar} alt="Loomy" className="w-8 h-8 rounded-full flex-shrink-0" />
                <div className="max-w-xs lg:max-w-md">
                  <Card className="p-3 bg-card">
                    <p className="text-sm">{message.content}</p>
                  </Card>
                  <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                </div>
              </div>
            )}
            
            {message.type === 'user' && (
              <div className="max-w-xs lg:max-w-md">
                <Card className="p-3 bg-primary text-primary-foreground">
                  <p className="text-sm">{message.content}</p>
                </Card>
                <p className="text-xs text-muted-foreground mt-1 text-right">{message.timestamp}</p>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border p-4 bg-card">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="pr-20"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                <Mic className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                <Image className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Button onClick={handleSendMessage} size="sm" className="rounded-full">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};