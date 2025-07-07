import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI-Powered Education: Transforming Learning Experiences",
    excerpt: "Discover how artificial intelligence is revolutionizing education, making personalized learning accessible to students worldwide and enhancing educational outcomes.",
    author: "Dr. Sarah Chen",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "AI Education",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
  },
  {
    id: "2", 
    title: "Personalized Learning Paths: How Loomy Adapts to Your Learning Style",
    excerpt: "Learn about the science behind personalized education and how our adaptive AI technology creates unique learning experiences for every student.",
    author: "Prof. Michael Rodriguez",
    date: "Jan 12, 2024",
    readTime: "7 min read",
    category: "Learning Science",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Study Tips: Maximizing Your Learning Potential with AI Assistance",
    excerpt: "Effective study strategies combined with AI-powered tools can dramatically improve your learning outcomes. Here's how to get the most out of your study sessions.",
    author: "Emma Thompson",
    date: "Jan 10, 2024", 
    readTime: "4 min read",
    category: "Study Tips",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
  }
];

export const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Latest Insights
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              From Our <span className="wix-text-gradient">Blog</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends in AI-powered education, learning strategies, 
              and insights from our expert team.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className={`group cursor-pointer bg-card/80 backdrop-blur-sm border border-border/20 overflow-hidden hover:shadow-wix-float transition-all duration-500 ${
                isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'
              }`}
              style={{ animationDelay: `${index * 200 + 300}ms` }}
              onClick={() => navigate("/login")}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'wix-scroll-reveal revealed' : 'wix-scroll-reveal'}`}>
            <Button 
              onClick={() => navigate("/login")}
              variant="outline" 
              size="lg" 
              className="group"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};