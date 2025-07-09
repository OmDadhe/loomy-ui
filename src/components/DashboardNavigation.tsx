import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Star, 
  Home, 
  Plus, 
  MessageSquare, 
  History, 
  MoreVertical,
  Eye,
  Share,
  Archive,
  Trash2,
  Menu,
  X
} from "lucide-react";

interface DashboardNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const DashboardNavigation = ({ activeSection, onSectionChange }: DashboardNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showChatOptions, setShowChatOptions] = useState<string | null>(null);

  const chatHistory = [
    { id: "1", title: "Math help with algebra", time: "2 hours ago", starred: true },
    { id: "2", title: "Science questions", time: "Yesterday", starred: false },
    { id: "3", title: "History timeline", time: "3 days ago", starred: false },
    { id: "4", title: "English grammar", time: "1 week ago", starred: true },
  ];

  const handleChatAction = (action: string, chatId: string) => {
    console.log(`${action} chat ${chatId}`);
    setShowChatOptions(null);
  };

  const handleNewChat = () => {
    onSectionChange('ask-loomy');
  };

  const handleStarredClick = () => {
    console.log("Show starred messages");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="md:hidden fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Navigation Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-sm border-r border-border/20 z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        
        {/* Header */}
        <div className="p-4 border-b border-border/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Loomy</h2>
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="md:hidden">
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search conversations..."
              className="pl-10 h-10 bg-background/50 border-border/30"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-4 border-b border-border/20">
          <div className="space-y-2">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => {
                onSectionChange('home');
                setIsOpen(false);
              }}
              className="w-full justify-start"
            >
              <Home className="w-4 h-4 mr-3" />
              Home
            </Button>
            
            <Button
              variant="ghost"
              onClick={handleStarredClick}
              className="w-full justify-start"
            >
              <Star className="w-4 h-4 mr-3" />
              Starred
            </Button>
          </div>
        </div>

        {/* New Chat Button */}
        <div className="p-4 border-b border-border/20">
          <Button
            onClick={handleNewChat}
            className="w-full bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Recent Chats
          </h3>
          <div className="space-y-1">
            {chatHistory.map((chat) => (
              <div
                key={chat.id}
                className="group relative p-3 rounded-lg hover:bg-background/50 cursor-pointer transition-colors"
                onClick={() => {
                  onSectionChange('ask-loomy');
                  setIsOpen(false);
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm font-medium truncate">{chat.title}</span>
                      {chat.starred && (
                        <Star className="w-3 h-3 text-yellow-500 fill-current flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowChatOptions(showChatOptions === chat.id ? null : chat.id);
                    }}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>

                {/* Chat Options Menu */}
                {showChatOptions === chat.id && (
                  <Card className="absolute right-0 top-0 z-10 p-2 bg-white shadow-lg border border-border/20">
                    <div className="flex flex-col space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleChatAction('view', chat.id)}
                        className="justify-start h-8"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleChatAction('share', chat.id)}
                        className="justify-start h-8"
                      >
                        <Share className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleChatAction('archive', chat.id)}
                        className="justify-start h-8"
                      >
                        <Archive className="w-4 h-4 mr-2" />
                        Archive
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleChatAction('delete', chat.id)}
                        className="justify-start h-8 text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};