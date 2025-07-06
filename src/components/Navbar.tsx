import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate("/login");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-wix-card" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/dae96d64-cc83-4a23-91fa-d8ab709c695c.png" 
              alt="Loomy Logo" 
              className="h-8 lg:h-12 w-auto transition-all duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleGetStarted}
              variant="hero" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-xl shadow-wix-card hover:shadow-wix-float transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/20 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-xl">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-accent/20 rounded-lg transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-accent/20 rounded-lg transition-colors duration-200 font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-accent/20 rounded-lg transition-colors duration-200 font-medium"
              >
                Contact Us
              </button>
              <div className="px-4 pt-2">
                <Button 
                  onClick={handleGetStarted}
                  variant="hero" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl shadow-wix-card hover:shadow-wix-float transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};