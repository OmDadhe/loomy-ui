import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, MessageSquare, Grid3X3, Clock, User, Plus } from "lucide-react";
// Using existing avatar for now
const loomyAvatar = "/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png";

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: 'home' | 'chat' | 'history' | 'features' | 'account') => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const DashboardSidebar = ({ 
  activeSection, 
  setActiveSection, 
  collapsed, 
  setCollapsed 
}: DashboardSidebarProps) => {
  const navItems = [
    { id: 'chat', label: 'New Chat', icon: Plus },
    { id: 'features', label: 'Features', icon: Grid3X3 },
    { id: 'history', label: 'History', icon: Clock },
  ];

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 bg-card border-r border-border flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <img src={loomyAvatar} alt="Loomy" className="w-8 h-8" />
            <span className="font-bold text-lg">Loomy</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="p-2"
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            className={`w-full justify-start ${collapsed ? 'px-3' : 'px-4'}`}
            onClick={() => setActiveSection(item.id as any)}
          >
            <item.icon className={`w-4 h-4 ${collapsed ? '' : 'mr-2'}`} />
            {!collapsed && <span>{item.label}</span>}
          </Button>
        ))}
      </div>

      {/* Account Section */}
      <div className="p-4 border-t border-border">
        <Button
          variant={activeSection === 'account' ? "default" : "ghost"}
          className={`w-full justify-start ${collapsed ? 'px-3' : 'px-4'}`}
          onClick={() => setActiveSection('account')}
        >
          <User className={`w-4 h-4 ${collapsed ? '' : 'mr-2'}`} />
          {!collapsed && <span>Account</span>}
        </Button>
      </div>
    </div>
  );
};