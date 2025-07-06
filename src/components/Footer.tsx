import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Linkedin, Github, Heart } from "lucide-react";

/**
 * Footer Component with Wix-inspired design
 * Features newsletter signup, social links, and company information
 */
export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/dae96d64-cc83-4a23-91fa-d8ab709c695c.png" 
                alt="Loomy Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/70 leading-relaxed">
              Transform your learning journey with AI-powered personalized education. 
              Go from questioning to understanding.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Stay updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/50"
                />
                <Button variant="outline" size="icon" className="border-background/20 hover:bg-background/10">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Product</h4>
            <div className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Features
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                AI Tutoring
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Study Groups
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Mobile App
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <div className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                About Us
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Careers
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Blog
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Press
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Partners
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Status
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-background/70">
            <span>© 2024 Loomy. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for learners worldwide.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-background/70 hover:text-background hover:bg-background/10 transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-background/70 hover:text-background hover:bg-background/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-background/70 hover:text-background hover:bg-background/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-background/70 hover:text-background hover:bg-background/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* Language Selector */}
          <div className="text-sm text-background/70">
            <select className="bg-transparent border border-background/20 rounded-lg px-3 py-1 focus:outline-none focus:border-background/50">
              <option value="en" className="text-foreground">English</option>
              <option value="es" className="text-foreground">Español</option>
              <option value="fr" className="text-foreground">Français</option>
              <option value="de" className="text-foreground">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};