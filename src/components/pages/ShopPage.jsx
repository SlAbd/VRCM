'use client';

import { useState } from 'react';
import { 
  ShoppingBag, Search, Filter, Star, Heart,
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

  const products = [
    // Climbing gear
    {
      id: 1,
      name: 'Climbing Helmet / Casque d\'escalade',
      category: 'equipment',
      price: 69.99,
      rentPrice: 8.99,
      image: 'https://contents.mediadecathlon.com/p2879877/k$1d88cad5e3392e06a655bfeec84b3eed/climbing-mountaineering-helmet-simond-rock-grey-simond-8389290.jpg',
      rating: 4.9,
      reviews: 188,
      inStock: true,
      featured: true,
      rentable: true,
      description: 'Lightweight helmet for sport routes and multi-pitch safety.',
      activityTags: ['climbing'],
    },
    {
      id: 2,
      name: 'Climbing Harness / Baudrier',
      category: 'equipment',
      price: 59.99,
      rentPrice: 7.99,
      image: 'https://mistymountain.com/cdn/shop/files/Titan_iso_eecf5dc5-991f-46f9-9ab3-3dc127443200.png?v=1741016645&width=1946',
      rating: 4.8,
      reviews: 162,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Comfortable harness with adjustable leg loops.',
      activityTags: ['climbing'],
    },
    {
      id: 3,
      name: 'Dynamic Rope 60m / Corde dynamique',
      category: 'equipment',
      price: 149.99,
      rentPrice: 15.99,
      image: 'https://is-pro.co.uk/wp-content/uploads/2025/07/image470596990.jpg',
      rating: 4.8,
      reviews: 117,
      inStock: true,
      featured: true,
      rentable: true,
      description: '60m single rope ideal for Todra sport routes.',
      activityTags: ['climbing'],
    },
    {
      id: 4,
      name: 'Quickdraws Set (12) / Dégaines',
      category: 'equipment',
      price: 129.99,
      rentPrice: 12.99,
      image: 'https://www.google.com/search?tbm=isch&q=climbing+quickdraws+set',
      rating: 4.7,
      reviews: 98,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Full rack of 12 sport quickdraws with keylock carabiners.',
      activityTags: ['climbing'],
    },
    {
      id: 5,
      name: 'Belay Device (Grigri/ATC)',
      category: 'equipment',
      price: 39.99,
      rentPrice: 5.99,
      image: 'https://www.google.com/search?tbm=isch&q=belay+device+grigri+atc',
      rating: 4.9,
      reviews: 141,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Assisted or tube-style belay device for lead and top-rope.',
      activityTags: ['climbing'],
    },
    {
      id: 6,
      name: 'Locking Carabiner / Mousqueton à vis',
      category: 'equipment',
      price: 11.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=locking+carabiner',
      rating: 4.8,
      reviews: 220,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'HMS locking carabiner for belay and anchors.',
      activityTags: ['climbing'],
    },
    // {
    //   id: 7,
    //   name: 'Crash Pad (Bouldering)',
    //   category: 'equipment',
    //   price: 219.99,
    //   rentPrice: 25.99,
    //   image: 'https://www.google.com/search?tbm=isch&q=bouldering+crash+pad',
    //   rating: 4.6,
    //   reviews: 74,
    //   inStock: true,
    //   featured: false,
    //   rentable: true,
    //   description: 'Thick foam pad for bouldering landings.',
    //   activityTags: ['climbing'],
    // },
    {
      id: 8,
      name: 'Climbing Shoes / Chaussons',
      category: 'equipment',
      price: 99.99,
      rentPrice: 12.99,
      image: '/assets/boreal.jpg',
      rating: 4.7,
      reviews: 203,
      inStock: true,
      featured: true,
      rentable: true,
      description: 'All-round shoes suitable for vertical limestone routes.',
      activityTags: ['climbing'],
    },
    {
      id: 9,
      name: 'Approach Shoes / Chaussures d\'approche',
      category: 'apparel',
      price: 129.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=approach+shoes+climbing',
      rating: 4.6,
      reviews: 111,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Sticky rubber shoes for approaches and easy scrambles.',
      activityTags: ['climbing', 'hiking'],
    },
    {
      id: 10,
      name: 'Chalk (Loose) / Magnésie en poudre',
      category: 'accessories',
      price: 8.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=climbing+chalk+loose',
      rating: 4.8,
      reviews: 250,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Loose chalk for dry hands on limestone.',
      activityTags: ['climbing'],
    },
    {
      id: 11,
      name: 'Chalk Ball / Boule de magnésie',
      category: 'accessories',
      price: 6.49,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=chalk+ball+climbing',
      rating: 4.7,
      reviews: 142,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Refillable chalk ball to reduce dust.',
      activityTags: ['climbing'],
    },
    {
      id: 12,
      name: 'Finger Tape / Strap adhésif',
      category: 'accessories',
      price: 4.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=climbing+finger+tape',
      rating: 4.5,
      reviews: 190,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Support tape for fingers and skin protection.',
      activityTags: ['climbing'],
    },
    {
      id: 13,
      name: 'Chalk Bag / Sac à magnésie',
      category: 'accessories',
      price: 24.99,
      rentPrice: 3.99,
      image: 'https://www.google.com/search?tbm=isch&q=chalk+bag+climbing',
      rating: 4.8,
      reviews: 210,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Bag with belt and brush holder.',
      activityTags: ['climbing'],
    },
    {
      id: 14,
      name: 'Rope Bag / Sac à corde',
      category: 'equipment',
      price: 54.99,
      rentPrice: 7.99,
      image: 'https://www.google.com/search?tbm=isch&q=climbing+rope+bag',
      rating: 4.6,
      reviews: 132,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Tarp-style rope bag for quick packing.',
      activityTags: ['climbing'],
    },

    // Hiking & trekking
    {
      id: 20,
      name: 'Trekking Poles (Pair) / Bâtons de marche',
      category: 'equipment',
      price: 49.99,
      rentPrice: 6.99,
      image: 'https://www.google.com/search?tbm=isch&q=trekking+poles+hiking',
      rating: 4.8,
      reviews: 165,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Adjustable aluminum poles for long approaches.',
      activityTags: ['hiking'],
    },
    {
      id: 21,
      name: 'Hiking Backpack 50L / Sac à dos rando',
      category: 'equipment',
      price: 119.99,
      rentPrice: 14.99,
      image: 'https://www.google.com/search?tbm=isch&q=hiking+backpack+30l+50l',
      rating: 4.7,
      reviews: 143,
      inStock: true,
      featured: true,
      rentable: true,
      description: 'Comfortable pack with frame and hip belt.',
      activityTags: ['hiking'],
    },
    {
      id: 22,
      name: 'Headlamp / Lampe frontale',
      category: 'accessories',
      price: 29.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=hiking+headlamp',
      rating: 4.8,
      reviews: 175,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Rechargeable headlamp for early starts.',
      activityTags: ['hiking', 'climbing'],
    },
    {
      id: 23,
      name: 'Sleeping Bag (0°C to 10°C)',
      category: 'equipment',
      price: 139.99,
      rentPrice: 18.99,
      image: 'https://www.google.com/search?tbm=isch&q=sleeping+bag+0+to+10+celsius',
      rating: 4.7,
      reviews: 120,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Three-season mummy bag for Atlas nights.',
      activityTags: ['hiking'],
    },
    {
      id: 24,
      name: '2-Person Tent / Tente 2P',
      category: 'equipment',
      price: 249.99,
      rentPrice: 24.99,
      image: 'https://www.google.com/search?tbm=isch&q=2+person+camping+tent',
      rating: 4.8,
      reviews: 132,
      inStock: true,
      featured: true,
      rentable: true,
      description: 'Lightweight double-wall tent for treks.',
      activityTags: ['hiking'],
    },
    {
      id: 25,
      name: 'Camping Stove / Réchaud',
      category: 'equipment',
      price: 59.99,
      rentPrice: 8.99,
      image: 'https://www.google.com/search?tbm=isch&q=camping+stove+portable',
      rating: 4.6,
      reviews: 101,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Compact gas stove for trekking meals.',
      activityTags: ['hiking'],
    },
    {
      id: 26,
      name: 'Hiking Boots / Chaussures de rando',
      category: 'apparel',
      price: 149.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=waterproof+hiking+boots',
      rating: 4.7,
      reviews: 210,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Waterproof boots for rough terrain.',
      activityTags: ['hiking'],
    },
    {
      id: 27,
      name: 'Hiking Socks (Merino)',
      category: 'apparel',
      price: 17.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=merino+hiking+socks',
      rating: 4.8,
      reviews: 184,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Merino blend socks for blister prevention.',
      activityTags: ['hiking'],
    },
    {
      id: 28,
      name: 'Rain Jacket / Veste imperméable',
      category: 'apparel',
      price: 129.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=rain+jacket+hardshell+hiking',
      rating: 4.7,
      reviews: 140,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Light hardshell for sudden Atlas showers.',
      activityTags: ['hiking'],
    },
    {
      id: 29,
      name: 'Fleece Mid-layer / Polaire',
      category: 'apparel',
      price: 79.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=hiking+fleece+jacket',
      rating: 4.8,
      reviews: 133,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Warm, breathable mid-layer for cool evenings.',
      activityTags: ['hiking'],
    },
    {
      id: 30,
      name: 'Water Bottle / Gourde 750ml',
      category: 'accessories',
      price: 14.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=camelbak+hydration+pack',
      rating: 4.6,
      reviews: 92,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Insulated bottle for day missions.',
      activityTags: ['hiking', 'climbing'],
    },
    {
      id: 31,
      name: 'Map & Compass / Carte et Boussole',
      category: 'accessories',
      price: 34.99,
      rentPrice: 4.99,
      image: 'https://www.google.com/search?tbm=isch&q=hiking+map+and+compass',
      rating: 4.5,
      reviews: 88,
      inStock: true,
      featured: false,
      rentable: true,
      description: 'Navigation kit for self-guided routes.',
      activityTags: ['hiking'],
    },
    {
      id: 32,
      name: 'Gas Canister / Cartouche de gaz',
      category: 'accessories',
      price: 7.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=camping+gas+canister',
      rating: 4.6,
      reviews: 160,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Standard threaded gas canister for stoves.',
      activityTags: ['hiking'],
    },
    {
      id: 33,
      name: 'Dried Food / Snacks',
      category: 'accessories',
      price: 9.99,
      rentPrice: null,
      image: 'https://www.google.com/search?tbm=isch&q=freeze+dried+camping+food',
      rating: 4.4,
      reviews: 95,
      inStock: true,
      featured: false,
      rentable: false,
      description: 'Lightweight dehydrated meals and energy snacks.',
      activityTags: ['hiking'],
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
      <section className="hero-shell min-h-[520px] justify-center py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000)',
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
            Quality gear for climbing and hiking adventures
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

      {/* Features Bar */}
      <section className="relative z-20 -mt-10">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-4 rounded-lg border border-[#e8dece] bg-white p-4 shadow-[0_18px_45px_rgb(54_41_22/0.12)] md:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 group cursor-pointer rounded-lg bg-[#fbf8f2] p-4"
              >
                <div className="flex-shrink-0 p-3 bg-[#E86C36]/10 rounded-lg group-hover:bg-[#E86C36] transition-all duration-300">
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
                      </div>
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


