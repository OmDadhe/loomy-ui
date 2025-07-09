import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Sparkles, Clock, Star } from "lucide-react";

export const LoomyTalesSection = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [storyPrompt, setStoryPrompt] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLength, setSelectedLength] = useState("");
  const [generatedStory, setGeneratedStory] = useState("");

  const genres = ["Adventure", "Fantasy", "Mystery", "Sci-Fi", "Comedy"];
  const lengths = ["Short", "Medium", "Long"];

  const previousStories = [
    { title: "The Magic Forest", genre: "Fantasy", time: "2 hours ago", image: "/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" },
    { title: "Space Explorer", genre: "Sci-Fi", time: "1 day ago", image: "/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" },
    { title: "Mystery Island", genre: "Mystery", time: "3 days ago", image: "/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" }
  ];

  const handleGenerateStory = () => {
    setGeneratedStory("Once upon a time, in a magical kingdom far away, there lived a brave young adventurer named Alex. The kingdom was filled with wonder and mystery, where every corner held a new discovery...");
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Loomy Tales</h1>
          <p className="text-muted-foreground">Cuddle up and get curious—Loomy's got a tale to tell!</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white/80 backdrop-blur-sm rounded-xl p-1 border border-border/20">
            <Button
              variant={activeTab === "create" ? "default" : "ghost"}
              onClick={() => setActiveTab("create")}
              className="rounded-lg px-6"
            >
              Create a Tale
            </Button>
            <Button
              variant={activeTab === "history" ? "default" : "ghost"}
              onClick={() => setActiveTab("history")}
              className="rounded-lg px-6"
            >
              My Tales
            </Button>
          </div>
        </div>

        {activeTab === "create" && (
          <div className="space-y-6">
            {/* Story Creation */}
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-border/20">
              <h3 className="font-bold text-lg mb-4 text-black">Concept Builder</h3>
              <Textarea
                value={storyPrompt}
                onChange={(e) => setStoryPrompt(e.target.value)}
                placeholder="Build your own story from a concept, character, anything goes!"
                className="min-h-[100px] mb-4 rounded-xl bg-background/50"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Genre</label>
                  <div className="flex flex-wrap gap-2">
                    {genres.map((genre) => (
                      <Badge
                        key={genre}
                        variant={selectedGenre === genre ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedGenre(genre)}
                      >
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Length</label>
                  <div className="flex flex-wrap gap-2">
                    {lengths.map((length) => (
                      <Badge
                        key={length}
                        variant={selectedLength === length ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedLength(length)}
                      >
                        {length}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleGenerateStory}
                className="w-full h-12 bg-pink-600 hover:bg-pink-700 rounded-xl"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Story
              </Button>
            </Card>

            {/* Generated Story */}
            {generatedStory && (
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-border/20">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" 
                    alt="Story Image" 
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-black">Your Generated Tale</h3>
                    <p className="text-sm text-muted-foreground">Genre: {selectedGenre}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">{generatedStory}</p>
              </Card>
            )}
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4 text-black">Previously created Tales</h3>
            {previousStories.map((story, index) => (
              <Card key={index} className="p-4 bg-white/90 backdrop-blur-sm border-border/20">
                <div className="flex items-center space-x-4">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{story.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{story.genre}</span>
                      <span>•</span>
                      <span>{story.time}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <BookOpen className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};