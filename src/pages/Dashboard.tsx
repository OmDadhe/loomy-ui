import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardMain } from "@/components/DashboardMain";
import { ChatInterface } from "@/components/ChatInterface";
import { AccountSection } from "@/components/AccountSection";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Main Dashboard Page - Home screen after login
 */
export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'chat' | 'history' | 'features' | 'account'>('home');
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile);

  // Update sidebar state based on screen size
  useEffect(() => {
    setSidebarCollapsed(isMobile);
  }, [isMobile]);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden relative">
      {/* Mobile Overlay */}
      {isMobile && !sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
      
      {/* Sidebar */}
      <DashboardSidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        isMobile={isMobile}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Menu Button */}
        {isMobile && sidebarCollapsed && (
          <div className="fixed top-4 left-4 z-30">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSidebarCollapsed(false)}
              className="p-2 bg-background border-border"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        )}
        
        {activeSection === 'home' && <DashboardMain onStartChat={() => setActiveSection('chat')} />}
        {activeSection === 'chat' && <ChatInterface />}
        {activeSection === 'account' && <AccountSection />}
        {activeSection === 'history' && <DashboardMain onStartChat={() => setActiveSection('chat')} />}
        {activeSection === 'features' && <DashboardMain onStartChat={() => setActiveSection('chat')} />}
      </div>
    </div>
  );
};