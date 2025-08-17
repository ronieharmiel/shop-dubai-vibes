import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Minus, 
  Plus, 
  Share2,
  ChevronLeft,
  Truck,
  Shield,
  RotateCcw
} from "lucide-react";

// Sample product data - in a real app, this would come from your API
const productData = {
  "1": {
    id: "1",
    name: "Apple iPad Air M2 Chip Wi-Fi 128GB",
    price: 32000,
    originalPrice: 39900,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=600&fit=crop"
    ],
    rating: 5,
    reviewCount: 128,
    discount: 20,
    isNew: true,
    category: "Electronics",
    description: "The iPad Air features the incredibly powerful Apple M2 chip with an 8-core CPU and 10-core GPU, delivering amazing performance for creative projects and immersive experiences.",
    features: [
      "10.9-inch Liquid Retina display",
      "Apple M2 chip with 8-core CPU",
      "12MP Wide camera",
      "12MP Ultra Wide front camera",
      "Touch ID for secure authentication",
      "Wi-Fi 6E and Bluetooth 5.3"
    ],
    specifications: {
      "Display": "10.9-inch Liquid Retina",
      "Chip": "Apple M2",
      "Storage": "128GB",
      "Camera": "12MP Wide, 12MP Ultra Wide",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.3",
      "Weight": "461 grams"
    },
    inStock: true,
    stockCount: 15
  },
  "7": {
    id: "7",
    name: "Nike Air Force 1 Low White",
    price: 4500,
    originalPrice: 5200,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop"
    ],
    rating: 4,
    reviewCount: 218,
    discount: 13,
    category: "Fashion",
    description: "The Nike Air Force 1 '07 is the basketball original. This iconic sneaker features crisp leather, bold colors and the perfect amount of flash to let you shine.",
    features: [
      "Leather upper for durability",
      "Nike Air cushioning",
      "Rubber outsole with pivot points",
      "Classic basketball style",
      "Perforations on the toe",
      "Foam midsole"
    ],
    specifications: {
      "Upper": "Leather",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Heel Height": "Low-top",
      "Cushioning": "Nike Air",
      "Style": "Basketball"
    },
    inStock: true,
    stockCount: 8,
    isNew: false
  }
};

export const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = productData[id as keyof typeof productData];
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">
            ← Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-primary">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              {product.isNew && (
                <Badge className="bg-accent-orange text-white text-xs">
                  NEW
                </Badge>
              )}
              {product.discount && (
                <Badge variant="destructive" className="text-xs">
                  -{product.discount}% OFF
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < product.rating 
                        ? 'fill-accent-orange text-accent-orange' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">
                ₱{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ₱{product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.discount && (
                <span className="text-sm bg-destructive/10 text-destructive px-2 py-1 rounded">
                  Save ₱{(product.originalPrice! - product.price).toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Quantity and Actions */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.stockCount} in stock
                </span>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart 
                    className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} 
                  />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="cta" size="lg" className="w-full">
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="flex flex-col items-center">
                <Truck className="h-8 w-8 text-primary mb-2" />
                <span className="font-medium">Free Shipping</span>
                <span className="text-muted-foreground">Orders over ₱2,000</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <span className="font-medium">Warranty</span>
                <span className="text-muted-foreground">1 Year Coverage</span>
              </div>
              <div className="flex flex-col items-center">
                <RotateCcw className="h-8 w-8 text-primary mb-2" />
                <span className="font-medium">Easy Returns</span>
                <span className="text-muted-foreground">30 Days Return</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <Star className="h-12 w-12 text-accent-orange mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {product.rating}.0 out of 5 stars
                    </h3>
                    <p className="text-muted-foreground">
                      Based on {product.reviewCount} customer reviews
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Shipping Information</h4>
                      <p className="text-muted-foreground">
                        Free shipping on orders over ₱2,000. Standard delivery takes 3-5 business days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Return Policy</h4>
                      <p className="text-muted-foreground">
                        30-day return policy. Items must be in original condition and packaging.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};