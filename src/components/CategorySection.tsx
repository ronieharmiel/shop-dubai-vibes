import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Camera, 
  Watch, 
  Gamepad2, 
  Home, 
  Shirt 
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    productCount: 245,
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "computers",
    name: "Computers & Laptops", 
    icon: Laptop,
    productCount: 89,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    color: "from-indigo-500 to-blue-600"
  },
  {
    id: "audio",
    name: "Audio & Headphones",
    icon: Headphones, 
    productCount: 156,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "cameras",
    name: "Cameras & Photography",
    icon: Camera,
    productCount: 78,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    color: "from-green-500 to-teal-600"
  },
  {
    id: "wearables",
    name: "Smartwatches",
    icon: Watch,
    productCount: 124,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    productCount: 198,
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=300&fit=crop",
    color: "from-red-500 to-pink-600"
  },
  {
    id: "home",
    name: "Home & Appliances",
    icon: Home,
    productCount: 234,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    color: "from-teal-500 to-green-600"
  },
  {
    id: "fashion",
    name: "Fashion & Accessories",
    icon: Shirt,
    productCount: 567,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    color: "from-pink-500 to-purple-600"
  }
];

export const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our extensive collection organized by categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Background Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
                      
                      {/* Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/80">
                          {category.productCount} products
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Action */}
                  <div className="p-4 bg-white">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      asChild
                    >
                      <Link to={`/category/${category.id}`}>
                        Browse {category.name}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};