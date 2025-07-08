/**
 * Mobile Hero Avatar Component - Duolingo-style mobile layout
 * Shows avatar and tagline prominently on mobile devices
 */
export const MobileHeroAvatar = () => {
  return (
    <div className="lg:hidden block">
      <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-12 px-6">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto max-w-sm">
          <div className="flex flex-col items-center space-y-6">
            {/* Professional Avatar Container */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150" />
              
              {/* Avatar with professional frame */}
              <div className="relative w-40 h-40 rounded-full bg-card/95 backdrop-blur-lg border-4 border-primary/30 flex items-center justify-center shadow-2xl">
                <img 
                  src="/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png"
                  alt="Loomy - Your AI Learning Companion"
                  className="w-32 h-32 transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Professional floating elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full animate-pulse shadow-lg" />
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-primary rounded-full animate-pulse delay-1000 shadow-lg" />
              <div className="absolute top-1/2 -left-6 w-3 h-3 bg-accent-green rounded-full animate-pulse delay-500 shadow-lg" />
            </div>
            
            {/* Professional Tagline */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-foreground leading-tight">
                Meet <span className="wix-text-gradient">Loomy</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xs leading-relaxed">
                Your AI companion that transforms confusion into clarity
              </p>
              
              {/* Trust indicator for mobile */}
              <div className="flex items-center justify-center space-x-2 pt-2">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-accent rounded-full border-2 border-background shadow-sm" />
                  <div className="w-6 h-6 bg-accent-purple rounded-full border-2 border-background shadow-sm" />
                  <div className="w-6 h-6 bg-primary rounded-full border-2 border-background shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-white">+</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">10k+ learners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};