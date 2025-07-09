import { useState, useEffect } from "react";
import { NewDashboardMain } from "@/components/NewDashboardMain";
import { AskLoomySection } from "@/components/AskLoomySection";
import { LoomyTalesSection } from "@/components/LoomyTalesSection";
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
    <div className="min-h-screen">
      {activeSection === 'home' && <NewDashboardMain onSectionChange={handleSectionChange} />}
      {activeSection === 'ask-loomy' && <AskLoomySection />}
      {activeSection === 'loomy-tales' && <LoomyTalesSection />}
      {activeSection === 'chat' && <ChatInterface />}
      {activeSection === 'account' && <AccountSection />}
    </div>
  );
};