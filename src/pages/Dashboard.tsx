import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardMain } from "@/components/DashboardMain";
import { ChatInterface } from "@/components/ChatInterface";
import { AccountSection } from "@/components/AccountSection";

/**
 * Main Dashboard Page - Home screen after login
 */
export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'chat' | 'history' | 'features' | 'account'>('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {activeSection === 'home' && <DashboardMain onStartChat={() => setActiveSection('chat')} />}
        {activeSection === 'chat' && <ChatInterface />}
        {activeSection === 'account' && <AccountSection />}
        {activeSection === 'history' && <DashboardMain onStartChat={() => setActiveSection('chat')} />}
        {activeSection === 'features' && <DashboardMain onStartChat={() => setActiveSection('chat')} />}
      </div>
    </div>
  );
};