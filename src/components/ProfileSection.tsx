import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Crown, Shield, Bell, Palette, MessageSquare, HelpCircle, FileText, Settings, Gift, Users, Database } from "lucide-react";

export const ProfileSection = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const userProfile = {
    name: "Karthik",
    age: 16,
    email: "karthik@example.com",
    phone: "+1 234 567 8900",
    grade: "10th Grade",
    board: "CBSE",
    avatar: "/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png",
    subscription: "Free Plan",
    points: 1240,
    streak: 7
  };

  const menuItems = [
    {
      section: "Account Details",
      items: [
        { id: "subscription", icon: Crown, label: "Subscription Plan", value: userProfile.subscription },
        { id: "upgrade", icon: Crown, label: "Upgrade to Premium", action: true },
        { id: "data", icon: Database, label: "Data Controls" },
        { id: "rewards", icon: Gift, label: "Rewards", value: `${userProfile.points} points` },
        { id: "referrals", icon: Users, label: "Referrals" }
      ]
    },
    {
      section: "Settings",
      items: [
        { id: "security", icon: Shield, label: "Security" },
        { id: "notifications", icon: Bell, label: "Notifications" },
        { id: "theme", icon: Palette, label: "Theme" }
      ]
    },
    {
      section: "About",
      items: [
        { id: "feedback", icon: MessageSquare, label: "Feedback" },
        { id: "faq", icon: HelpCircle, label: "FAQ" },
        { id: "query", icon: HelpCircle, label: "Raise a Query" },
        { id: "help", icon: HelpCircle, label: "Help Centre" },
        { id: "terms", icon: FileText, label: "Terms of Service" },
        { id: "privacy", icon: FileText, label: "Privacy Policy" }
      ]
    }
  ];

  const handleUpgrade = () => {
    // Navigate to subscription page
    console.log("Navigate to subscription page");
  };

  if (activeSection === "profile") {
    return (
      <div className="min-h-screen wix-gradient-hero">
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setActiveSection("overview")}
              className="text-foreground hover:bg-white/20"
            >
              ← Back
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Profile Details</h1>
            <div></div>
          </div>

          <Card className="p-8 bg-white/90 backdrop-blur-sm border-border/20">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img 
                  src={userProfile.avatar} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>
                <Badge variant="secondary">{userProfile.subscription}</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <p className="text-lg">{userProfile.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Age</label>
                  <p className="text-lg">{userProfile.age}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-lg">{userProfile.email}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone</label>
                  <p className="text-lg">{userProfile.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Grade</label>
                  <p className="text-lg">{userProfile.grade}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Board</label>
                  <p className="text-lg">{userProfile.board}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{userProfile.points}</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">{userProfile.streak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen wix-gradient-hero">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Profile</h1>
        </div>

        {/* Profile Overview */}
        <Card className="mb-8 p-6 bg-white/90 backdrop-blur-sm border-border/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src={userProfile.avatar} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">{userProfile.name}</h2>
                <p className="text-sm text-muted-foreground">{userProfile.grade} • {userProfile.board}</p>
              </div>
            </div>
            <Button 
              onClick={() => setActiveSection("profile")}
              className="bg-primary hover:bg-primary/90"
            >
              View Profile
            </Button>
          </div>
        </Card>

        {/* Menu Sections */}
        <div className="space-y-6">
          {menuItems.map((section) => (
            <Card key={section.section} className="p-6 bg-white/90 backdrop-blur-sm border-border/20">
              <h3 className="font-bold text-lg mb-4">{section.section}</h3>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div 
                    key={item.id} 
                    className={`flex items-center justify-between p-3 rounded-lg hover:bg-background/50 transition-colors ${
                      item.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={item.id === 'upgrade' ? handleUpgrade : undefined}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.value && (
                      <Badge variant="secondary" className="text-xs">
                        {item.value}
                      </Badge>
                    )}
                    {item.action && (
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        →
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};