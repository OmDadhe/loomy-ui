import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Gamepad2, Zap, Puzzle, Grid3x3, Calculator, Target, Trophy } from "lucide-react";

export const BrainRushSection = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: "chess",
      title: "Chess",
      icon: Crown,
      description: "Strategic mind game",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      size: "large"
    },
    {
      id: "sudoku",
      title: "Sudoku",
      icon: Grid3x3,
      description: "Number puzzle",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      size: "medium"
    },
    {
      id: "sequences",
      title: "Sequences",
      icon: Zap,
      description: "Pattern recognition",
      color: "bg-green-100",
      iconColor: "text-green-600",
      size: "medium"
    },
    {
      id: "crossword",
      title: "Crossword",
      icon: Puzzle,
      description: "Word puzzle",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      size: "medium"
    },
    {
      id: "matching",
      title: "Matching Cards",
      icon: Target,
      description: "Memory game",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      size: "medium"
    }
  ];

  const handleGameClick = (gameId: string) => {
    setSelectedGame(gameId);
  };

  if (selectedGame) {
    return (
      <div className="min-h-screen wix-gradient-hero">
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedGame(null)}
                className="text-foreground hover:bg-white/20"
              >
                ← Back
              </Button>
              <h1 className="text-3xl font-bold text-foreground">
                {games.find(g => g.id === selectedGame)?.title}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">High Score: 150</span>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-white/90 backdrop-blur-sm border-border/20">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Gamepad2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Game Starting Soon...</h2>
              <p className="text-muted-foreground">
                Get ready to challenge your brain with {games.find(g => g.id === selectedGame)?.title}!
              </p>
              <Button className="mt-4 bg-primary hover:bg-primary/90">
                Start Game
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen wix-gradient-hero">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" 
              alt="Loomy" 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                BRAIN <span className="text-primary">RUSH</span>
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Challenge your brain with Loomy—every point you earn is a win!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card
              key={game.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-wix-glow hover:scale-105 ${
                game.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ backgroundColor: game.color.replace('bg-', 'var(--') + ')' }}
              onClick={() => handleGameClick(game.id)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center ${
                  game.size === "large" ? "w-20 h-20" : ""
                }`}>
                  <game.icon className={`w-8 h-8 ${game.iconColor} ${
                    game.size === "large" ? "w-10 h-10" : ""
                  }`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                  <p className="text-sm text-muted-foreground">{game.description}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-2 bg-white/50 hover:bg-white/70"
                >
                  Play Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="mt-8 p-6 bg-white/90 backdrop-blur-sm border-border/20">
          <h3 className="font-bold text-lg mb-4">Your Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Games Played</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-muted-foreground">Games Won</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">150</div>
              <div className="text-sm text-muted-foreground">High Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">7</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};