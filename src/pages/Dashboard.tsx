import { useState, useEffect } from "react";
import { NewDashboardMain } from "@/components/NewDashboardMain";
import { AskLoomySection } from "@/components/AskLoomySection";
import { LoomyTalesSection } from "@/components/LoomyTalesSection";
import { BrainRushSection } from "@/components/BrainRushSection";
import { ForumSection } from "@/components/ForumSection";
import { ProfileSection } from "@/components/ProfileSection";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { DashboardNavigation } from "@/components/DashboardNavigation";
import { ChatInterface } from "@/components/ChatInterface";
import { AccountSection } from "@/components/AccountSection";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Main Dashboard Page - Home screen after login
 */
export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen wix-gradient-hero">
      <DashboardNavigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      <div className="md:ml-80">
        {activeSection === 'home' && <NewDashboardMain onSectionChange={handleSectionChange} />}
        {activeSection === 'ask-loomy' && <AskLoomySection />}
        {activeSection === 'loomy-tales' && <LoomyTalesSection />}
        {activeSection === 'brain-rush' && <BrainRushSection />}
        {activeSection === 'forum' && <ForumSection />}
        {activeSection === 'profile' && <ProfileSection />}
        {activeSection === 'subscription' && <SubscriptionSection />}
        {activeSection === 'chat' && <ChatInterface />}
        {activeSection === 'account' && <AccountSection />}
      </div>
    </div>
  );
};