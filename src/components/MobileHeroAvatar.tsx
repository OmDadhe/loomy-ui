/**
 * Mobile Hero Avatar Component - Duolingo-style mobile layout
 * Shows avatar and tagline prominently on mobile devices
 */
export const MobileHeroAvatar = () => {
  return (
    <div className="mobile-hero-avatar">
      <div className="flex flex-col items-center space-y-4 py-8">
        {/* Avatar */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-card/90 backdrop-blur-sm border-4 border-primary/20 flex items-center justify-center shadow-wix-glow">
            <img 
              src="/lovable-uploads/4c845139-dd32-48d6-a657-28ef00c469e9.png"
              alt="Loomy - Your AI Learning Companion"
              className="w-24 h-24"
            />
          </div>
          {/* Floating dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse" />
          <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000" />
        </div>
        
        {/* Tagline */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Meet <span className="wix-text-gradient">Loomy</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xs">
            Your AI companion that transforms confusion into clarity
          </p>
        </div>
      </div>
    </div>
  );
};