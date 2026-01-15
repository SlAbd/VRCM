'use client';

import { useState } from 'react';
import { 
  BookOpen, Calendar, User, Clock, ArrowRight, Search, Tag,
  Heart, Share2, MessageCircle, TrendingUp, Mountain, Camera,
  Compass, Map, ChevronRight, Eye
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', name: t.blog.allPosts, icon: BookOpen },
    { id: 'climbing', name: t.blog.climbingTips, icon: Mountain },
    { id: 'stories', name: t.blog.adventureStories, icon: Compass },
    { id: 'guides', name: t.blog.travelGuides, icon: Map },
    { id: 'photography', name: t.blog.photography, icon: Camera },
  ];

  const featuredPost = {
    id: 10,
    title: 'Top 10 Trails for Hiking in Morocco – Discover the Country\'s Natural Wonders',
    excerpt: 'Morocco offers a paradise for outdoor enthusiasts with diverse landscapes ranging from rugged mountains to sweeping deserts. Explore our comprehensive guide to the top 10 hiking trails.',
    author: 'VRockclimbing',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    date: 'October 3, 2025',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200',
    category: 'guides',
    views: '3.2K',
    likes: 445,
    comments: 78,
    featured: true,
    slug: 'top-10-trails-for-hiking-in-morocco',
  };

  const posts = [
    {
      id: 10,
      title: 'Top 10 Trails for Hiking in Morocco – Discover the Country\'s Natural Wonders',
      excerpt: 'Morocco offers a paradise for outdoor enthusiasts with diverse landscapes ranging from rugged mountains to sweeping deserts. Explore our comprehensive guide to the top 10 hiking trails.',
      author: 'VRockclimbing',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      date: 'October 3, 2025',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600',
      category: 'guides',
      views: '3.2K',
      likes: 445,
      comments: 78,
      slug: 'top-10-trails-for-hiking-in-morocco',
    },
    {
      id: 11,
      title: 'Morocco Trekking Adventures: Experience the Thrill of High Altitude Hikes',
      excerpt: 'Embark on an unforgettable journey through Morocco\'s stunning landscapes. From the Atlas Mountains to the Rif Mountains, discover high-altitude hiking adventures.',
      author: 'VRockclimbing',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      date: 'October 3, 2025',
      readTime: '14 min read',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600',
      category: 'stories',
      views: '2.8K',
      likes: 367,
      comments: 62,
      slug: 'morocco-trekking-adventures',
    },
    {
      id: 12,
      title: 'From Atlas to Sahara: Unraveling Morocco\'s Diverse Terrain',
      excerpt: 'Morocco is a land of contrasts and natural beauty. From the towering peaks of the Atlas Mountains to the endless sands of the Sahara Desert, explore diverse terrains.',
      author: 'VRockclimbing',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      date: 'October 3, 2025',
      readTime: '13 min read',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600',
      category: 'guides',
      views: '2.5K',
      likes: 328,
      comments: 55,
      slug: 'from-atlas-to-sahara-unraveling-moroccos-diverse-terrain',
    },
    {
      id: 13,
      title: 'Hiking in Morocco: Complete Guide to Trails and Adventures',
      excerpt: 'Discover the complete guide to hiking in Morocco. Learn about different trails, best seasons, essential tips, and immerse yourself in the natural beauty of this stunning country.',
      author: 'VRockclimbing',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      date: 'October 3, 2025',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=600',
      category: 'guides',
      views: '3.0K',
      likes: 402,
      comments: 71,
      slug: 'hiking-in-morocco',
    },
  ];

  const popularTags = [
    'Rock Climbing', 'Todra Gorge', 'Beginner Tips', 'Travel Morocco',
    'Adventure', 'Photography', 'Berber Culture', 'Mountain Trekking',
    'Safety', 'Equipment Guide'
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-[#E86C36]" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            VRCM Blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Stories, guides, and tips from the climbing community
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-md -mt-8 relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder={t.blog.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 w-full text-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Featured Post */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Badge className="bg-[#E86C36] text-white px-4 py-2 text-sm">
                {t.blog.featured}
              </Badge>
            </div>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 md:h-auto overflow-hidden group">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-[#E86C36] text-white">
                    {categories.find(c => c.id === featuredPost.category)?.name}
                  </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 hover:text-[#E86C36] transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredPost.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {featuredPost.likes}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold text-[#1A1A1A]">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.date}</p>
                      </div>
                    </div>
                    
                    <Button className="bg-[#E86C36] hover:bg-[#d45a2a]">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Posts */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">
                Latest Articles
              </h2>
              
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <Badge className="absolute top-4 left-4 bg-[#E86C36]/90 text-white backdrop-blur-sm">
                          {categories.find(c => c.id === post.category)?.name}
                        </Badge>
                      </div>

                      {/* Content */}
                      <CardContent className="md:col-span-2 p-6">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E86C36] transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center flex-wrap gap-4 mb-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <Heart className="h-3 w-3 mr-1" />
                            {post.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            {post.comments}
                          </div>
                        </div>

                        {/* Author & Date */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <div className="text-sm">
                              <p className="font-medium text-[#1A1A1A]">{post.author}</p>
                              <p className="text-gray-500 text-xs">{post.date}</p>
                            </div>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-[#E86C36] hover:text-[#d45a2a] hover:bg-[#E86C36]/10"
                          >
                            Read More <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <BookOpen className="h-24 w-24 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search query
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-[#E86C36]" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-[#E86C36] hover:text-white hover:border-[#E86C36] transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trending Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-[#E86C36]" />
                    Trending Now
                  </h3>
                  <div className="space-y-4">
                    {posts.slice(0, 5).map((post, index) => (
                      <div
                        key={post.id}
                        className="flex items-start space-x-3 pb-4 border-b last:border-b-0 cursor-pointer group"
                      >
                        <span className="text-2xl font-bold text-[#E86C36]/20 group-hover:text-[#E86C36] transition-colors">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#E86C36] transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center mt-1 text-xs text-gray-500">
                            <Eye className="h-3 w-3 mr-1" />
                            {post.views}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-[#E86C36] to-[#ff8c5a] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Get the latest climbing tips, stories, and guides delivered to your inbox.
                  </p>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="mb-3 bg-white text-[#1A1A1A]"
                  />
                  <Button className="w-full bg-[#1A1A1A] hover:bg-black text-white">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;


