'use client';

import { useState } from 'react';
import { 
  ShoppingBag, Search, Filter, Star, Heart, ShoppingCart,
  Truck, Shield, RotateCcw, CreditCard, Package, Shirt,
  Mountain, Backpack, Camera, Compass, Check, X, Plus, Minus, Clock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [shopMode, setShopMode] = useState('buy'); // 'buy' or 'rent'
  const { t } = useLanguage();

  const categories = [
    { id: 'all', name: t.shopPage.allProducts, icon: ShoppingBag },
    { id: 'apparel', name: t.shopPage.apparel, icon: Shirt },
    { id: 'equipment', name: t.shopPage.equipment, icon: Mountain },
    { id: 'accessories', name: t.shopPage.accessories, icon: Backpack },
    { id: 'souvenirs', name: t.shopPage.souvenirs, icon: Camera },
  ];

  const products = [
    {
      id: 1,
      name: 'VRCM Technical T-Shirt',
      category: 'apparel',
      price: 29.99,
      rentPrice: 5.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      featured: true,
      rentable: false,
      description: 'Moisture-wicking technical fabric perfect for climbing',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 2,
      name: 'Climbing Chalk Bag',
      category: 'equipment',
      price: 24.99,
      rentPrice: 3.99,
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Durable chalk bag with belt and brush holder',
    },
    {
      id: 3,
      name: 'VRCM Logo Cap',
      category: 'apparel',
      price: 19.99,
      rentPrice: null,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Adjustable cap with embroidered logo',
    },
    {
      id: 4,
      name: 'Carabiner Set (5pcs)',
      category: 'equipment',
      price: 34.99,
      rentPrice: 8.99,
      originalPrice: 44.99,
      image: 'https://images.unsplash.com/photo-1486311355911-65e04c1ae42e?q=80&w=600',
      rating: 5.0,
      reviews: 67,
      inStock: true,
      featured: true,
      rentable: true,
      description: 'Professional-grade aluminum carabiners',
    },
    {
      id: 5,
      name: 'Climbing Rope Keychain',
      category: 'souvenirs',
      price: 9.99,
      rentPrice: null,
      image: 'https://images.unsplash.com/photo-1563211930222-58bc8f5c1a3d?q=80&w=600',
      rating: 4.5,
      reviews: 203,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Handmade keychain from real climbing rope',
    },
    {
      id: 6,
      name: 'VRCM Hoodie',
      category: 'apparel',
      price: 49.99,
      rentPrice: null,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600',
      rating: 4.9,
      reviews: 178,
      inStock: true,
      featured: true,
      rentable: false,
      description: 'Premium fleece hoodie with VRCM branding',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 7,
      name: 'Water Bottle (750ml)',
      category: 'accessories',
      price: 14.99,
      rentPrice: null,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600',
      rating: 4.6,
      reviews: 92,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Insulated stainless steel bottle',
    },
    {
      id: 8,
      name: 'Climbing Guide Book',
      category: 'accessories',
      price: 27.99,
      rentPrice: null,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600',
      rating: 4.8,
      reviews: 45,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Complete guide to Todra Gorge routes',
    },
    {
      id: 9,
      name: 'Berber Handmade Bracelet',
      category: 'souvenirs',
      price: 12.99,
      rentPrice: null,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?q=80&w=600',
      rating: 4.9,
      reviews: 267,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Traditional Berber design bracelet',
    },
    {
      id: 10,
      name: 'Climbing Shoes Bag',
      category: 'accessories',
      price: 16.99,
      rentPrice: null,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600',
      rating: 4.7,
      reviews: 81,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Breathable bag for climbing shoes',
    },
    {
      id: 11,
      name: 'VRCM Sticker Pack',
      category: 'souvenirs',
      price: 7.99,
      rentPrice: null,
      image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=600',
      rating: 4.4,
      reviews: 312,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Set of 10 waterproof stickers',
    },
    {
      id: 12,
      name: 'Climbing Backpack 30L',
      category: 'equipment',
      price: 79.99,
      rentPrice: 15.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600',
      rating: 4.9,
      reviews: 134,
      inStock: false,
      featured: true,
      rentable: true,
      description: 'Technical backpack with gear loops',
    },
  ];

  const features = [
    {
      icon: Truck,
      title: t.shopPage.freeShipping,
      description: 'Free in Morocco',
    },
    {
      icon: Shield,
      title: t.shopPage.securePayment,
      description: t.shopPage.securePaymentDesc,
    },
    {
      icon: RotateCcw,
      title: t.shopPage.returns,
      description: t.shopPage.returnsDesc,
    },
    {
      icon: Clock,
      title: t.shopPage.quality,
      description: t.shopPage.qualityDesc,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMode = shopMode === 'buy' ? true : product.rentable;
    return matchesCategory && matchesSearch && matchesMode;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#E86C36]/80 via-[#E86C36]/60 to-[#E86C36]/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t.shop.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Quality gear and merchandise for your adventures
          </p>
          
          {/* Buy/Rent Toggle */}
          <div className="mt-8 inline-flex bg-white/20 backdrop-blur-sm rounded-full p-1">
            <Button
              onClick={() => setShopMode('buy')}
              className={`${
                shopMode === 'buy'
                  ? 'bg-white text-[#E86C36]'
                  : 'bg-transparent text-white hover:bg-white/10'
              } px-8 py-3 rounded-full font-semibold transition-all`}
            >
              {t.shop.buyOption}
            </Button>
            <Button
              onClick={() => setShopMode('rent')}
              className={`${
                shopMode === 'rent'
                  ? 'bg-white text-[#E86C36]'
                  : 'bg-transparent text-white hover:bg-white/10'
              } px-8 py-3 rounded-full font-semibold transition-all`}
            >
              {t.shop.rentOption}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="flex-shrink-0 p-3 bg-[#E86C36]/10 rounded-full group-hover:bg-[#E86C36] transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-[#E86C36] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-sm">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t.shopPage.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-6 w-full text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={`${
                  selectedCategory === cat.id
                    ? 'bg-[#E86C36] text-white hover:bg-[#d45a2a]'
                    : 'hover:bg-[#E86C36]/10 hover:text-[#E86C36] hover:border-[#E86C36]'
                } transition-all duration-300`}
              >
                <cat.icon className="h-4 w-4 mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Products */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                Featured Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.filter(p => p.featured).slice(0, 3).map((product) => (
                  <Card
                    key={product.id}
                    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <Badge className="absolute top-4 left-4 z-10 bg-[#E86C36] text-white">
                      Featured
                    </Badge>
                    
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      
                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="bg-white hover:bg-[#E86C36] hover:text-white"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="bg-white hover:bg-[#E86C36] hover:text-white"
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>

                      {product.originalPrice && (
                        <Badge className="absolute bottom-4 right-4 bg-red-600 text-white">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          ({product.reviews})
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-sm mr-2">
                              ${product.originalPrice}
                            </span>
                          )}
                          <span className="text-2xl font-bold text-[#E86C36]">
                            ${product.price}
                          </span>
                        </div>
                        <Button 
                          className="bg-[#E86C36] hover:bg-[#d45a2a]"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Products */}
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Badge variant="destructive" className="text-lg px-4 py-2">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-[#E86C36] hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center mb-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <h3 className="font-bold text-[#1A1A1A] mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-xs mr-1">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="text-xl font-bold text-[#E86C36]">
                        ${product.price}
                      </span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-[#E86C36] hover:bg-[#d45a2a]"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-24 w-24 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-r from-[#E86C36] to-[#ff8c5a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Climbing Community
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive discounts, early access to new products, and climbing tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 py-6 bg-white"
            />
            <Button 
              size="lg"
              className="bg-[#1A1A1A] hover:bg-black text-white px-8"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ShopPage;


