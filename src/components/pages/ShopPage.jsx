'use client';

import { useState } from 'react';
import { 
  ShoppingBag, Search, Filter, Heart,
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
  const [searchQuery, setSearchQuery] = useState('');
  const [shopMode, setShopMode] = useState('buy'); // 'buy' or 'rent'
  const [userLocation, setUserLocation] = useState('moroccan'); // 'moroccan' or 'foreigner'
  const { t } = useLanguage();
  const contactEmail = 'aitabdellah.abdelhadi@gmail.com';

  const categories = [
    { id: 'all', name: t.shopPage.allProducts, icon: ShoppingBag },
    { id: 'apparel', name: t.shopPage.apparel, icon: Shirt },
    { id: 'equipment', name: t.shopPage.equipment, icon: Mountain },
    { id: 'accessories', name: t.shopPage.accessories, icon: Backpack },
    // Souvenirs removed to focus on climbing & hiking related products
  ];

  const shopImages = {
    airForce3: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_09 (1).png',
    petzlReverso: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_09 (2).png',
    dualConnectAdjust: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_11 (3).png',
    connectAdjust: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_11 (4).png',
    quickdraws: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_12 (5).png',
    chalkBag: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_13 (6).png',
    maillonRapide: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_13 (7).png',
    climbingCarabiners: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_14 (8).png',
    climbingHarness: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_15 (9).png',
    climbingGlasses: '/assets/shop/ChatGPT Image 5 août 2026, 12_07_15 (10).png',
    climbingSlings: '/assets/shop/ChatGPT Image 5 août 2026, 12_10_53 (1).png',
    energyCr3: '/assets/shop/ChatGPT Image 5 août 2026, 12_10_54 (2).png',
    grigri: '/assets/shop/ChatGPT Image 5 août 2026, 12_10_55 (3).png',
    climbingTape: '/assets/shop/ChatGPT Image 5 août 2026, 12_10_55 (4).png',
    viaFerrataSet: '/assets/shop/ChatGPT Image 5 août 2026, 12_10_56 (5).png',
    ohmIi: '/assets/shop/ChatGPT Image 5 août 2026, 12_10_56 (6).png',
  };

  const products = [
    {
      id: 1,
      name: 'Dynamic Rope 60m / Corde dynamique',
      category: 'equipment',
      image: 'https://is-pro.co.uk/wp-content/uploads/2025/07/image470596990.jpg',
      inStock: true,
      featured: true,
      rentable: true,
      description: '60m single rope ideal for Todra sport routes.',
      activityTags: ['climbing'],
    },
    {
      id: 2,
      name: 'Climbing Helmet / Casque d\'escalade',
      category: 'equipment',
      image: 'https://contents.mediadecathlon.com/p2879877/k$1d88cad5e3392e06a655bfeec84b3eed/climbing-mountaineering-helmet-simond-rock-grey-simond-8389290.jpg',
      inStock: true,
      featured: true,
      rentable: true,
      description: 'Lightweight helmet for sport routes and multi-pitch safety.',
      activityTags: ['climbing'],
    },
    {
      id: 3,
      name: 'Climbing Shoes / Chausson',
      category: 'equipment',
      image: '/assets/boreal.jpg',
      inStock: true,
      featured: true,
      rentable: true,
      description: 'All-round shoes suitable for vertical limestone routes.',
      activityTags: ['climbing'],
    },
    {
      id: 4,
      name: 'Air Force 3',
      category: 'equipment',
      image: shopImages.airForce3,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Belay and braking device for controlled rope handling.',
      activityTags: ['climbing'],
    },
    {
      id: 5,
      name: 'Petzl Reverso',
      category: 'equipment',
      image: shopImages.petzlReverso,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Versatile belay device for climbing and abseiling.',
      activityTags: ['climbing'],
    },
    {
      id: 6,
      name: 'Dual Connect Adjust',
      category: 'accessories',
      image: shopImages.dualConnectAdjust,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Adjustable double lanyard for via ferrata progression.',
      activityTags: ['climbing'],
    },
    {
      id: 7,
      name: 'Connect Adjust',
      category: 'accessories',
      image: shopImages.connectAdjust,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Single adjustable lanyard for anchor and positioning work.',
      activityTags: ['climbing'],
    },
    {
      id: 8,
      name: 'Quickdraws',
      category: 'equipment',
      image: shopImages.quickdraws,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Sport quickdraw set for clipping bolts on limestone routes.',
      activityTags: ['climbing'],
    },
    {
      id: 9,
      name: 'Chalk Bag',
      category: 'accessories',
      image: shopImages.chalkBag,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Compact chalk bag with drawcord closure.',
      activityTags: ['climbing'],
    },
    {
      id: 10,
      name: 'Maillon Rapide',
      category: 'equipment',
      image: shopImages.maillonRapide,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Screw-link connector for anchors and rigging.',
      activityTags: ['climbing'],
    },
    {
      id: 11,
      name: 'Climbing Carabiners',
      category: 'equipment',
      image: shopImages.climbingCarabiners,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Assorted locking carabiners for multipurpose climbing use.',
      activityTags: ['climbing'],
    },
    {
      id: 12,
      name: 'Climbing Harness',
      category: 'equipment',
      image: shopImages.climbingHarness,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Comfortable harness with padded waist and leg loops.',
      activityTags: ['climbing'],
    },
    {
      id: 13,
      name: 'Climbing Glasses',
      category: 'apparel',
      image: shopImages.climbingGlasses,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Protective glasses for belay and outdoor sun exposure.',
      activityTags: ['climbing'],
    },
    {
      id: 14,
      name: 'Climbing Slings',
      category: 'accessories',
      image: shopImages.climbingSlings,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Assorted slings for anchors, extensions, and rigging.',
      activityTags: ['climbing'],
    },
    {
      id: 15,
      name: 'Energy CR 3',
      category: 'equipment',
      image: shopImages.energyCr3,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Comfort harness built for sustained climbing sessions.',
      activityTags: ['climbing'],
    },
    {
      id: 16,
      name: 'Grigri',
      category: 'equipment',
      image: shopImages.grigri,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Assisted braking device for belaying with confidence.',
      activityTags: ['climbing'],
    },
    {
      id: 17,
      name: 'Climbing Tape',
      category: 'accessories',
      image: shopImages.climbingTape,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Finger tape for support, skin protection, and recovery.',
      activityTags: ['climbing'],
    },
    {
      id: 18,
      name: 'Via Ferrata Set',
      category: 'equipment',
      image: shopImages.viaFerrataSet,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Full via ferrata lanyard set with energy absorber.',
      activityTags: ['climbing'],
    },
    {
      id: 19,
      name: 'OHM II',
      category: 'equipment',
      image: shopImages.ohmIi,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Assistance device for weight difference management.',
      activityTags: ['climbing'],
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

  const relatedActivities = ['climbing', 'hiking'];

  const filteredProducts = products.filter(product => {
    const matchesActivity = product.activityTags?.some(tag => relatedActivities.includes(tag));
    if (!matchesActivity) return false;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMode = userLocation === 'moroccan' ? true : shopMode === 'buy' ? true : product.rentable;
    return matchesCategory && matchesSearch && matchesMode;
  });

  const buildMailto = (product, action) => {
    const actionLabel = action === 'rent' ? 'Rent' : 'Buy';
    const subject = `Shop inquiry - ${actionLabel} - ${product.name}`;
    const locationInfo = userLocation === 'moroccan'
      ? 'Morocco (eligible for mail delivery)'
      : 'Foreigner / visitor (in-store pickup)';
    const fulfillment = action === 'rent'
      ? 'Rental request with in-store pickup.'
      : userLocation === 'moroccan'
        ? 'Please ship within Morocco (free shipping).'
        : 'Purchase with in-store pickup.';

    const bodyLines = [
      `Product: ${product.name}`,
      `Action: ${actionLabel}`,
      `Location: ${locationInfo}`,
      `Request: ${fulfillment}`,
      `Description: ${product.description}`,
    ];

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  const renderPurchaseOptions = (product) => {
    if (userLocation === 'moroccan') {
      return (
        <div className="space-y-2">
          <Button
            className="w-full bg-[#E86C36] hover:bg-[#d45a2a]"
            onClick={() => { window.location.href = buildMailto(product, 'buy'); }}
          >
            Buy - Free shipping in Morocco
          </Button>
          <p className="text-xs text-gray-600 text-center">
            Delivery via mail with Free Shipping.
          </p>
        </div>
      );
    }
    return (
      <div className="space-y-2">
        <Button
          className="w-full bg-[#E86C36] hover:bg-[#d45a2a]"
          onClick={() => { window.location.href = buildMailto(product, 'buy'); }}
        >
          Buy - In-store pickup
        </Button>
        {product.rentable && (
          <Button
            variant="outline"
            className="w-full hover:border-[#E86C36] hover:text-[#E86C36]"
            onClick={() => { window.location.href = buildMailto(product, 'rent'); }}
          >
            Rent - In-store pickup
          </Button>
        )}
        <p className="text-xs text-gray-600 text-center">
          Available at shop only (in-store pickup).
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-shell min-h-130 justify-center py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/shop/all16.png)',
          }}
        >
          <div className="hero-overlay"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="hero-badge">
            <ShoppingBag className="h-4 w-4" />
            VRCM Gear
          </div>
          <h1 className="hero-title">
            {t.shop.title}
          </h1>
          <p className="hero-description mx-auto">
            Products for climbing and hiking adventures
          </p>
          <p className="mt-4 text-sm md:text-base text-white/90 font-medium">
            For more products, please visit us at the shop.
          </p>

          {/* Location Selector */}
          <div className="mt-6 inline-flex bg-white/20 backdrop-blur-sm rounded-full p-1">
            <Button
              onClick={() => { setUserLocation('moroccan'); setShopMode('buy'); }}
              className={`${
                userLocation === 'moroccan'
                  ? 'bg-white text-[#E86C36]'
                  : 'bg-transparent text-white hover:bg-white/10'
              } px-6 py-3 rounded-full font-semibold transition-all`}
            >
              Moroccan Resident
            </Button>
            <Button
              onClick={() => setUserLocation('foreigner')}
              className={`${
                userLocation === 'foreigner'
                  ? 'bg-white text-[#E86C36]'
                  : 'bg-transparent text-white hover:bg-white/10'
              } px-6 py-3 rounded-full font-semibold transition-all`}
            >
              Foreigner / Visitor
            </Button>
          </div>
          
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
              disabled={userLocation === 'moroccan'}
            >
              {t.shop.rentOption}
            </Button>
          </div>

          <p className="mt-3 text-sm text-white/80">
            {userLocation === 'moroccan'
              ? 'Delivery available via mail with free shipping.'
              : 'For visitors: purchase or rent in-store with pickup only.'}
          </p>
        </div>
      </section>


      <section className="relative z-20 -mt-10">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-4 rounded-lg border border-[#e8dece] bg-white p-4 shadow-[0_18px_45px_rgb(54_41_22/0.12)] md:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 group cursor-pointer rounded-lg bg-[#fbf8f2] p-4"
              >
                <div className="shrink-0 p-3 bg-[#E86C36]/10 rounded-lg group-hover:bg-[#E86C36] transition-all duration-300">
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
      <section className="py-8 site-section-soft">
        <div className="site-container">
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
          <div className="site-filter-bar">
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
      <section className="site-section bg-white">
        <div className="site-container">
          {/* Featured Products */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                Featured Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products
                  .filter(p => p.featured && p.activityTags?.some(tag => relatedActivities.includes(tag)))
                  .slice(0, 3)
                  .map((product) => (
                  <Card
                    key={product.id}
                    className="site-card group relative overflow-hidden p-0"
                  >
                    <Badge className="absolute top-4 left-4 z-10 bg-[#E86C36] text-white">
                      Featured
                    </Badge>
                    
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
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
                        {/* Removed Add to Cart quick action */}
                      </div>

                      {product.originalPrice && (
                        <Badge className="absolute bottom-4 right-4 bg-red-600 text-white">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>

                      <div className="mt-4">
                        {renderPurchaseOptions(product)}
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
                className="site-card group overflow-hidden p-0"
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
                  <h3 className="font-bold text-[#1A1A1A] mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {renderPurchaseOptions(product)}
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


