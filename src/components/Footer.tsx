import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Clock 
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-hero-bg text-hero-text">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Deals
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter and never miss amazing offers from Dubai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="ShopForLess" className="h-8 w-auto" />
                <span className="text-xl font-bold text-white">ShopForLess</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner for affordable shopping from Dubai to Philippines. 
                We bring you the best deals on quality products with reliable shipping and customer service.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-300 hover:text-white transition-colors text-sm">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/deals" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Special Deals
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Returns & Refunds
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-white font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link to="/track" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link to="/warranty" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary-glow flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Dubai, UAE & Philippines
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary-glow flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    +971 50 XXX XXXX
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary-glow flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    info@shopforless.ph
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary-glow flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    24/7 Customer Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ShopForLess. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};