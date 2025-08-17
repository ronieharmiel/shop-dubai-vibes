import { ProductCard } from "./ProductCard";

// Sample product data - in a real app, this would come from your Facebook page or API
const sampleProducts = [
  {
    id: "1",
    name: "Apple iPad Air M2 Chip Wi-Fi 128GB",
    price: 32000,
    originalPrice: 39900,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    rating: 5,
    reviewCount: 128,
    discount: 20,
    isNew: true,
    category: "Electronics"
  },
  {
    id: "2", 
    name: "iPhone 14 Pro Max 256GB Space Black",
    price: 58000,
    originalPrice: 65000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    rating: 5,
    reviewCount: 256,
    discount: 11,
    category: "Mobile Phones"
  },
  {
    id: "3",
    name: "Samsung Galaxy Watch 6 Classic",
    price: 18500,
    originalPrice: 23000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4,
    reviewCount: 89,
    discount: 20,
    category: "Wearables"
  },
  {
    id: "4",
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 15800,
    originalPrice: 19900,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 5,
    reviewCount: 342,
    discount: 21,
    category: "Audio"
  },
  {
    id: "5",
    name: "MacBook Air M3 13-inch 256GB",
    price: 68000,
    originalPrice: 75000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    rating: 5,
    reviewCount: 167,
    discount: 9,
    isNew: true,
    category: "Laptops"
  },
  {
    id: "6",
    name: "Canon EOS R50 Mirrorless Camera Kit",
    price: 42000,
    originalPrice: 48000,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    rating: 4,
    reviewCount: 94,
    discount: 13,
    category: "Cameras"
  },
  {
    id: "7",
    name: "Nike Air Force 1 Low White",
    price: 4500,
    originalPrice: 5200,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    rating: 4,
    reviewCount: 218,
    discount: 13,
    category: "Fashion"
  },
  {
    id: "8",
    name: "Dyson V15 Detect Cordless Vacuum",
    price: 28000,
    originalPrice: 32000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    rating: 5,
    reviewCount: 156,
    discount: 13,
    category: "Home Appliances"
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Latest Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products from Dubai with unbeatable prices
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-smooth shadow-primary">
            View All Products
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};