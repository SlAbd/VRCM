'use client';

import { useState } from 'react';
import { 
  Mountain, Tent, Bike, Camera, Compass, Map, Users, Clock,
  Star, Heart, Share2, Calendar, MapPin, CheckCircle, Award,
  Footprints, Sun, Moon, Wind, Droplets, AlertCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const ActivitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredActivity, setHoveredActivity] = useState(null);
  const { t } = useLanguage();

  const activities = [
    {
      id: 1,
      title: 'Rock Climbing',
      category: 'climbing',
      difficulty: 'All Levels',
      duration: 'Half Day / Full Day',
      groupSize: '2-8 people',
      price: 'From â‚¬45',
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=800',
      icon: Mountain,
      description: 'Experience the thrill of climbing on world-class limestone cliffs in Todra Gorge.',
      highlights: ['Expert guides', 'All equipment provided', 'Routes for all levels', 'Safety certified'],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      title: 'Multi-Pitch Climbing',
      category: 'climbing',
      difficulty: 'Advanced',
      duration: 'Full Day',
      groupSize: '2-4 people',
      price: 'From â‚¬80',
      image: 'https://images.unsplash.com/photo-1486311355911-65e04c1ae42e?q=80&w=800',
      icon: Mountain,
      description: 'Challenge yourself on spectacular multi-pitch routes with breathtaking views.',
      highlights: ['Advanced techniques', 'Spectacular views', 'Professional belaying', 'Photo opportunities'],
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Mountain Trekking',
      category: 'trekking',
      difficulty: 'Moderate',
      duration: '2-7 Days',
      groupSize: '4-12 people',
      price: 'From â‚¬120',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
      icon: Footprints,
      description: 'Explore the Atlas Mountains on guided treks through stunning landscapes.',
      highlights: ['Mountain camping', 'Local villages', 'Berber hospitality', 'Varied terrain'],
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 4,
      title: 'Mountain Biking',
      category: 'biking',
      difficulty: 'Moderate to Hard',
      duration: 'Half Day / Full Day',
      groupSize: '2-10 people',
      price: 'From â‚¬50',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800',
      icon: Bike,
      description: 'Ride through mountain trails and discover hidden valleys on two wheels.',
      highlights: ['Quality bikes', 'Varied trails', 'Support vehicle', 'Refreshments included'],
      color: 'from-blue-500 to-indigo-500',
    },
    // {
    //   id: 5,
    //   title: 'Photography Tours',
    //   category: 'cultural',
    //   difficulty: 'Easy',
    //   duration: 'Half Day / Full Day',
    //   groupSize: '2-8 people',
    //   price: 'From â‚¬60',
    //   image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800',
    //   icon: Camera,
    //   description: 'Capture stunning landscapes and authentic moments with a local photography guide.',
    //   highlights: ['Golden hour shoots', 'Local insights', 'Portrait opportunities', 'Hidden locations'],
    //   color: 'from-purple-500 to-pink-500',
    // },
    {
      id: 6,
      title: 'Desert Camping',
      category: 'camping',
      difficulty: 'Easy',
      duration: '1-3 Nights',
      groupSize: '2-15 people',
      price: 'From â‚¬90',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800',
      icon: Tent,
      description: 'Sleep under the stars in traditional Berber camps with authentic local experience.',
      highlights: ['Traditional meals', 'Campfire stories', 'Stargazing', 'Local music'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 7,
      title: 'Cultural Village Tours',
      category: 'cultural',
      difficulty: 'Easy',
      duration: 'Half Day',
      groupSize: '2-12 people',
      price: 'From â‚¬35',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800',
      icon: Map,
      description: 'Visit traditional Berber villages and experience authentic Moroccan hospitality.',
      highlights: ['Village visits', 'Traditional tea', 'Local crafts', 'Cultural exchange'],
      color: 'from-teal-500 to-green-500',
    },
    {
      id: 8,
      title: 'Via Ferrata',
      category: 'climbing',
      difficulty: 'Moderate',
      duration: 'Half Day',
      groupSize: '2-10 people',
      price: 'From â‚¬55',
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=800',
      icon: Compass,
      description: 'Protected climbing routes combining hiking and climbing with spectacular views.',
      highlights: ['Safety cables', 'Panoramic views', 'Suitable for beginners', 'Adventure thrill'],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const categories = [
    { id: 'all', name: t.activitiesPage.allActivities, icon: Compass },
    { id: 'climbing', name: t.activitiesPage.climbing, icon: Mountain },
    { id: 'trekking', name: t.activitiesPage.trekking, icon: Footprints },
    { id: 'biking', name: t.activitiesPage.biking, icon: Bike },
    { id: 'cultural', name: t.activitiesPage.cultural, icon: Map },
    { id: 'camping', name: t.activitiesPage.camping, icon: Tent },
  ];

  const filteredActivities = selectedCategory === 'all' 
    ? activities 
    : activities.filter(a => a.category === selectedCategory);

  const features = [
    {
      icon: Award,
      title: t.activitiesPage.certifiedGuides,
      description: t.activitiesPage.certifiedGuidesDesc,
    },
    {
      icon: CheckCircle,
      title: t.activitiesPage.safetyFirst,
      description: t.activitiesPage.safetyFirstDesc,
    },
    {
      icon: Users,
      title: t.activitiesPage.smallGroups,
      description: t.activitiesPage.smallGroupsDesc,
    },
    {
      icon: Heart,
      title: t.activitiesPage.allLevels,
      description: t.activitiesPage.allLevelsDesc,
    },
  ];

  const seasons = [
    {
      name: t.activitiesPage.spring,
      icon: Droplets,
      months: t.activitiesPage.springMonths,
      description: t.activitiesPage.springDesc,
      activities: t.activitiesPage.springBest,
      color: 'bg-green-50 border-green-200',
    },
    {
      name: t.activitiesPage.summer,
      icon: Sun,
      months: t.activitiesPage.summerMonths,
      description: t.activitiesPage.summerDesc,
      activities: t.activitiesPage.summerBest,
      color: 'bg-yellow-50 border-yellow-200',
    },
    {
      name: t.activitiesPage.autumn,
      icon: Wind,
      months: t.activitiesPage.autumnMonths,
      description: t.activitiesPage.autumnDesc,
      activities: t.activitiesPage.autumnBest,
      color: 'bg-orange-50 border-orange-200',
    },
    {
      name: t.activitiesPage.winter,
      icon: Moon,
      months: t.activitiesPage.winterMonths,
      description: t.activitiesPage.winterDesc,
      activities: t.activitiesPage.winterBest,
      color: 'bg-blue-50 border-blue-200',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-6 py-2 bg-[#E86C36] text-white rounded-full font-semibold animate-pulse">
            Adventure Awaits
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            {t.activities.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            From rock climbing to cultural tours, discover adventures for every passion
          </p>
          
          {/* Booking Notice */}
          <div className="mt-8 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">{t.activities.bookingNote}</span>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-12 shadow-lg -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="inline-block p-4 bg-[#E86C36]/10 rounded-full mb-3 group-hover:bg-[#E86C36] transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-[#E86C36] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={`${
                  selectedCategory === cat.id
                    ? 'bg-[#E86C36] text-white hover:bg-[#d45a2a]'
                    : 'hover:bg-[#E86C36]/10 hover:text-[#E86C36] hover:border-[#E86C36]'
                } transition-all duration-300 transform hover:scale-105`}
              >
                <cat.icon className="h-4 w-4 mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <Card
                key={activity.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredActivity(activity.id)}
                onMouseLeave={() => setHoveredActivity(null)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <activity.icon className="h-6 w-6 text-[#E86C36]" />
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-[#1A1A1A] hover:bg-white">
                      {activity.difficulty}
                    </Badge>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-[#E86C36] text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {activity.price}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E86C36] transition-colors duration-300">
                    {activity.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {activity.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#E86C36]" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-[#E86C36]" />
                      <span>{activity.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#E86C36]/10 text-[#E86C36] text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-[#E86C36] hover:bg-[#d45a2a] text-white"
                    >
                      Book Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="hover:bg-[#E86C36]/10 hover:text-[#E86C36] hover:border-[#E86C36]"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="hover:bg-[#E86C36]/10 hover:text-[#E86C36] hover:border-[#E86C36]"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Season Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              {t.activitiesPage.bestSeasons}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the perfect season for your adventure in Todra Gorge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season, index) => (
              <Card
                key={index}
                className={`${season.color} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">
                      {season.name}
                    </h3>
                    <season.icon className="h-8 w-8 text-[#E86C36]" />
                  </div>
                  <p className="text-sm font-semibold text-[#E86C36] mb-3">
                    {season.months}
                  </p>
                  <p className="text-gray-700 mb-3 text-sm">
                    {season.description}
                  </p>
                  <p className="text-xs text-gray-600 font-medium">
                    {season.activities}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2d2d2d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mountain className="h-16 w-16 mx-auto mb-6 text-[#E86C36]" />
          <h2 className="text-4xl font-bold mb-6">
            Can't Decide? Let Us Help!
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact our expert team to design a custom adventure tailored to your interests and skill level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#E86C36] hover:bg-[#d45a2a] text-white px-8 py-6 text-lg font-semibold"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Plan My Adventure
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-[#1A1A1A] px-8 py-6 text-lg font-semibold"
            >
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;


