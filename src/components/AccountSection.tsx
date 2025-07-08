import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Calendar, Award, Zap, Settings, LogOut } from "lucide-react";
// Using existing avatar for now
const loomyAvatar = "/lovable-uploads/cba63fb0-4103-400d-abf9-cf7926cc4bc6.png";

export const AccountSection = () => {
  return (
    <div className="flex-1 p-4 md:p-6 overflow-auto">
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
          <p className="text-muted-foreground">Manage your profile and preferences</p>
        </div>

        {/* Profile Card */}
        <Card className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-6">
            <div className="relative">
              <img src={loomyAvatar} alt="Profile" className="w-20 h-20 rounded-full" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-green rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-1">Alex Johnson</h2>
              <p className="text-muted-foreground mb-2">Premium Learning Member</p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:space-x-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  <Award className="w-3 h-3 mr-1" />
                  Level 12
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  <Zap className="w-3 h-3 mr-1" />
                  5 Day Streak
                </Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full md:w-auto">
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          <Separator className="my-6" />

          {/* Account Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Full Name</p>
                  <p className="text-sm text-muted-foreground">Alex Johnson</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">alex.johnson@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Member Since</p>
                  <p className="text-sm text-muted-foreground">January 2024</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Total Points</span>
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">1,250</p>
              </div>
              
              <div className="bg-accent/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Current Streak</span>
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <p className="text-2xl font-bold text-accent">5 Days</p>
              </div>
              
              <div className="bg-accent-green/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Lessons Completed</span>
                  <div className="w-4 h-4 bg-accent-green rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-accent-green">47</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Subscription Card */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Subscription</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Premium Plan</p>
              <p className="text-sm text-muted-foreground">Unlimited access to all features</p>
            </div>
            <Badge className="bg-primary text-primary-foreground">Active</Badge>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Next billing: March 15, 2024</p>
            <Button variant="outline" size="sm">Manage Subscription</Button>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Preferences
          </Button>
          <Button variant="destructive">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};