import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shopping.jpg";

export const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-orange/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-hero-text">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-orange text-accent-orange" />
                ))}
              </div>
              <span className="text-sm text-gray-300">Trusted by 10,000+ customers</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shop For Less,
              <br />
              <span className="bg-gradient-to-r from-primary-glow to-accent-orange bg-clip-text text-transparent">
                Live For More
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Discover amazing deals on quality products from Dubai to Philippines. 
              Your one-stop shop for affordable electronics, fashion, and lifestyle items.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/products">
                  Start Shopping
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline_hero" size="lg" asChild>
                <Link to="/categories">
                  Browse Categories
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div>
                <div className="flex items-center space-x-1 text-accent-orange mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-2xl font-bold">50%</span>
                </div>
                <p className="text-sm text-gray-400">Average Savings</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <p className="text-sm text-gray-400">Products Available</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <p className="text-sm text-gray-400">Customer Support</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Shop For Less - Happy Shopping" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-accent-yellow text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              🎉 Limited Offer
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl">
              Up to 70% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};