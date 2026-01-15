'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Mountain, Tent, Bike, Camera, Compass, Map, Users, Clock,
  Star, Heart, Share2, Calendar, MapPin, CheckCircle, Award,
  Footprints, Sun, Moon, Wind, Droplets, AlertCircle, ChevronLeft, 
  ChevronRight, ArrowLeft, Phone, Mail, MapPin as MapPinIcon
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const ActivityDetailPage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { t } = useLanguage();
  const params = useParams();
  
  // Get id from params
  const id = params?.id;

  // Function to generate mailto links
  const generateMailtoLink = (email, subject = '', body = '') => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${email}${subject ? `?subject=${encodedSubject}` : ''}${subject && body ? `&body=${encodedBody}` : body && !subject ? `?body=${encodedBody}` : ''}`;
  };

  // Activity data - same as in ActivitiesPage
  const activities = [
    {
      id: 1,
      title: 'Rock Climbing',
      category: 'climbing',
      difficulty: 'All Levels',
      duration: 'Half Day / Full Day',
      groupSize: '2-8 people',
      price: 'From €45',
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=800',
      images: [
        '/assets/rock 1 .jpg',
        '/assets/rock 2.jpg',
        '/assets/rock 3.jpg',
        '/assets/rock 4.jpg',
        '/assets/rock 6.jpg',
      ],
      icon: Mountain,
      description: 'Experience the thrill of climbing on world-class limestone cliffs in Todra Gorge.',
      fullDescription: 'Our rock climbing experiences offer you the chance to tackle world-class limestone cliffs with stunning views. Whether you\'re a beginner looking for an introduction to climbing or an experienced climber seeking new challenges, our certified guides will help you reach new heights.',
      highlights: ['Expert guides', 'All equipment provided', 'Routes for all levels', 'Safety certified'],
      color: 'from-orange-500 to-red-500',
      location: 'Todra Gorge',
      rating: 4.8,
      reviews: 156,
      included: ['Professional guide', 'All climbing gear', 'Safety equipment', 'Water & snacks', 'Photos of your climb'],
      notIncluded: ['Meals (except snacks)', 'Transportation to site', 'Additional insurance'],
      requirements: ['Good physical fitness', 'Age 12+', 'No extreme fear of heights'],
      email: 'aitabdellah.abdelhadi@gmail.com'
    },
    {
      id: 2,
      title: 'Multi-Pitch Climbing',
      category: 'climbing',
      difficulty: 'Advanced',
      duration: 'Full Day',
      groupSize: '2-4 people',
      price: 'From €80',
      image: 'https://images.unsplash.com/photo-1486311355911-65e04c1ae42e?q=80&w=800',
      icon: Mountain,
      description: 'Challenge yourself on spectacular multi-pitch routes with breathtaking views.',
      fullDescription: 'Take your climbing to the next level with our multi-pitch climbing expeditions. Scale multiple pitches with professional belaying and safety management. Perfect for experienced climbers looking for an adrenaline-pumping adventure.',
      highlights: ['Advanced techniques', 'Spectacular views', 'Professional belaying', 'Photo opportunities'],
      color: 'from-red-500 to-pink-500',
      location: 'Todra Gorge',
      rating: 4.9,
      reviews: 89,
      included: ['Professional guide', 'All climbing gear', 'Safety equipment', 'Lunch', 'Water & snacks'],
      notIncluded: ['Transportation to site', 'Additional insurance'],
      requirements: ['Advanced climbing experience', 'Age 16+', 'Excellent physical fitness'],      email: 'aitabdellah.abdelhadi@gmail.com'    },
    {
      id: 3,
      title: 'Mountain Trekking',
      category: 'trekking',
      difficulty: 'Moderate',
      duration: '2-7 Days',
      groupSize: '4-12 people',
      price: 'From €120',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
      icon: Footprints,
      description: 'Explore the Atlas Mountains on guided treks through stunning landscapes.',
      fullDescription: 'Embark on an unforgettable journey through the Atlas Mountains. Trek through diverse landscapes, visit traditional Berber villages, and experience authentic mountain hospitality. Our guides will share their knowledge of the region\'s flora, fauna, and culture.',
      highlights: ['Mountain camping', 'Local villages', 'Berber hospitality', 'Varied terrain'],
      color: 'from-green-500 to-teal-500',
      location: 'Atlas Mountains',
      rating: 4.7,
      reviews: 203,
      included: ['Professional guide', 'All camping gear', 'Meals', 'Water', 'Accommodation in villages'],
      notIncluded: ['Transportation to starting point', 'Personal gear', 'Additional insurance'],
      requirements: ['Moderate fitness level', 'Age 10+', 'Willingness to camp'],
      email: 'aitabdellah.abdelhadi@gmail.com'
    },
    {
      id: 4,
      title: 'Mountain Biking',
      category: 'biking',
      difficulty: 'Moderate to Hard',
      duration: 'Half Day / Full Day',
      groupSize: '2-10 people',
      price: 'From €50',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800',
      icon: Bike,
      description: 'Ride through mountain trails and discover hidden valleys on two wheels.',
      fullDescription: 'Experience the thrill of mountain biking through breathtaking terrain. Our carefully selected trails offer a mix of technical sections and scenic views. Perfect for both beginners and experienced mountain bikers.',
      highlights: ['Quality bikes', 'Varied trails', 'Support vehicle', 'Refreshments included'],
      color: 'from-blue-500 to-indigo-500',
      location: 'Todra Gorge & Valley',
      rating: 4.6,
      reviews: 124,
      included: ['Mountain bike rental', 'Helmet & safety gear', 'Guide', 'Water & snacks', 'Repair kit'],
      notIncluded: ['Meals', 'Transportation to site', 'Personal gear'],
      requirements: ['Basic cycling skills', 'Age 14+', 'Good fitness level'],
      email: 'aitabdellah.abdelhadi@gmail.com'
    },
    {
      id: 6,
      title: 'Desert Camping',
      category: 'camping',
      difficulty: 'Easy',
      duration: '1-3 Nights',
      groupSize: '2-15 people',
      price: 'From €90',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800',
      icon: Tent,
      description: 'Sleep under the stars in traditional Berber camps with authentic local experience.',
      fullDescription: 'Experience the magic of desert camping under a blanket of stars. Sleep in traditional Berber tents, enjoy authentic meals, and experience the rich culture of the desert. A truly unforgettable experience.',
      highlights: ['Traditional meals', 'Campfire stories', 'Stargazing', 'Local music'],
      color: 'from-yellow-500 to-orange-500',
      location: 'Sahara Desert',
      rating: 4.8,
      reviews: 178,
      included: ['Traditional tent accommodation', 'All meals', 'Bedding', 'Tea & coffee', 'Local guide'],
      notIncluded: ['Transportation to desert', 'Personal toiletries', 'Additional insurance'],
      requirements: ['Age 5+', 'No extreme claustrophobia', 'Flexibility with basic amenities'],
      email: 'aitabdellah.abdelhadi@gmail.com'
    },
    {
      id: 7,
      title: 'Cultural Village Tours',
      category: 'cultural',
      difficulty: 'Easy',
      duration: 'Half Day',
      groupSize: '2-12 people',
      price: 'From €35',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800',
      icon: Map,
      description: 'Visit traditional Berber villages and experience authentic Moroccan hospitality.',
      fullDescription: 'Immerse yourself in authentic Moroccan culture by visiting traditional Berber villages. Meet locals, learn about their way of life, and taste traditional Moroccan tea and pastries in a family home.',
      highlights: ['Village visits', 'Traditional tea', 'Local crafts', 'Cultural exchange'],
      color: 'from-teal-500 to-green-500',
      location: 'Todra Valley Villages',
      rating: 4.9,
      reviews: 267,
      included: ['Local guide', 'Village visits', 'Traditional tea & pastries', 'Cultural insights'],
      notIncluded: ['Meals', 'Transportation', 'Shopping expenses'],
      requirements: ['Age 5+', 'Respectful attitude', 'Comfortable walking shoes'],
      email: 'aitabdellah.abdelhadi@gmail.com'
    },
    {
      id: 8,
      title: 'Via Ferrata',
      category: 'climbing',
      difficulty: 'Moderate',
      duration: '1 Hour',
      groupSize: 'Children 8+ & Adults',
      price: '€20 per person',
      priceDetails: {
        individual: '€20',
        twopeople: '€15 per person',
        groups: 'Contact us for larger groups'
      },
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=800',
      images: [
        '/assets/via ferrata 1.jpg',
        '/assets/via ferrata 2.jpg',
        '/assets/via ferrata 3.jpg',
        '/assets/via ferrata 4.jpg',
        '/assets/via ferrata 5.jpg',
        '/assets/via ferrata 6.jpg',
        '/assets/via ferrata 7.jpg',
        '/assets/via ferrata 8.jpg',
      ],
      icon: Compass,
      description: 'Experience the first via ferrata in Africa with impressive Todra gorge views.',
      fullDescription: 'Experience the first via ferrata in Africa built by AVM. Gain impressive views of the Todra gorges as you climb up metal rungs and steel cables bolted into the cliff. You\'ll be accompanied by an experienced guide and fully secured by ropes. No climbing experience necessary - suitable for (brave) children 8 years and older. All equipment provided.',
      highlights: ['First Via Ferrata in Africa', 'Todra Gorge Views', 'Metal Rungs & Steel Cables', 'No Experience Needed', 'Professional Guide', 'Safety Ropes Included'],
      color: 'from-indigo-500 to-blue-500',
      location: 'Todra Gorge',
      rating: 4.7,
      reviews: 142,
      included: ['Professional guide', 'Metal rungs & safety cables', 'Safety ropes', 'All climbing equipment'],
      notIncluded: ['Transportation to site', 'Meals', 'Additional insurance'],
      requirements: ['Age 8+', 'Reasonable fitness level', 'No extreme fear of heights', 'Comfortable hiking boots'],
      email: 'aitabdellah.abdelhadi@gmail.com'
    },
    {
      id: 9,
      title: 'Day Hikes',
      category: 'trekking',
      difficulty: 'Easy to Moderate',
      duration: 'Half Day',
      groupSize: '2-12 people',
      price: 'From €25',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
      images: [
        '/assets/1day hike 1.jpg',
        '/assets/1day hike 2.jpg',
        '/assets/1day hike 3.jpg',
        '/assets/1day hike 4.jpg',
      ],
      icon: Footprints,
      description: 'Explore Todra gorge and the surrounding high Atlas mountains on foot.',
      fullDescription: 'Explore Todra gorge and the surrounding high Atlas mountains on foot. Catch a glimpse of how nomadic Berber people live, high on the rocky plateaus towering over the impressive Todra Gorge. Day-hikes can range from easy shaded strolls to more strenuous climbs – we\'ll find a route perfect for your group.',
      highlights: ['Stunning Gorge Views', 'Berber Culture', 'Flexible Routes', 'All Levels Welcome', 'Professional Guide', 'Panoramic Plateaus'],
      color: 'from-green-500 to-teal-500',
      location: 'Todra Gorge & High Atlas',
      rating: 4.8,
      reviews: 189,
      included: ['Professional guide', 'Water & snacks', 'Cultural insights', 'Flexible pace options'],
      notIncluded: ['Meals', 'Transportation to site', 'Additional insurance'],
      requirements: ['Basic fitness', 'Age 6+', 'Comfortable hiking boots', 'Reasonable weather conditions'],
      email: 'aitabdellah.abdelhadi@gmail.com'
    },
    {
      id: 10,
      title: '3-Day Nomadic Hiking Adventure',
      category: 'trekking',
      difficulty: 'Moderate',
      duration: '3 Days / 2 Nights',
      groupSize: '2-12 people',
      price: '€400 (1 person)',
      priceDetails: {
        individual: '€400',
        twopeople: '€300 per person',
        groups: 'Contact us for larger groups'
      },
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
      // images: [
      //   '/assets/vrcm/20251217_121317.jpg',
      //   '/assets/vrcm/20251217_121351.jpg',
      //   '/assets/vrcm/20251217_121437.jpg',
      //   '/assets/vrcm/20251217_121441.jpg',
      //   '/assets/vrcm/20251217_121443.jpg',
      //   '/assets/vrcm/20251217_121455.jpg',
      //   '/assets/vrcm/20251217_121511.jpg',
      //   '/assets/vrcm/20251217_121521.jpg',
      // ],
      icon: Tent,
      description: 'A truly nomadic experience across the high plateau.',
      fullDescription: 'For a truly nomadic experience, don your rucksack and strike off on this 3-days hiking adventure. You\'ll start in Tizgui village at the entrance of Todra Gorge. With a mule to carry supplies and a local guide at your side, you\'ll spend 3 days hiking across the high plateau, stopping for two nights in nomad camps to sleep beneath vast stars and discovering how nomadic shepherds have lived for centuries. Your destination is Msemrir, in the Dades Valley, where we\'ll pick you up in a Land Rover for our cross-country return to Todra Gorge.',
      highlights: ['Nomadic Camps', 'Stargazing', 'Mule Support', 'Shepherd Culture', 'Remote Plateaus', 'Dades Valley Visit'],
      color: 'from-yellow-500 to-orange-500',
      location: 'Todra Gorge to Msemrir',
      rating: 4.9,
      reviews: 127,
      included: ['3-day guided hike', '2 nights nomad camp accommodation', 'Breakfast & dinner', 'Mule for luggage', 'Land Rover return transport', 'Dades Valley visit'],
      notIncluded: ['Personal gear', 'Toiletries', 'Lunch on hiking days'],
      requirements: ['Good fitness level', 'Age 12+', 'Ability to camp in rustic conditions', 'Hiking boots required'],
      email: 'aitabdellah.abdelhadi@gmail.com',
      notes: 'Accommodation in nomad camps is very rustic and simple'
    },
    {
      id: 11,
      title: '7-Day Hiking Holiday',
      category: 'trekking',
      difficulty: 'Easy to Moderate',
      duration: '7 Days / 5 Nights',
      groupSize: '2-12 people',
      price: '€850 (1 person)',
      priceDetails: {
        individual: '€850',
        twopeople: '€500 per person',
        groups: 'Contact us for larger groups'
      },
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
      // images: [
      //   '/assets/vrcm/IMG-20251215-WA0004.jpg',
      //   '/assets/vrcm/IMG-20251215-WA0005.jpg',
      //   '/assets/vrcm/IMG-20251215-WA0006.jpg',
      //   '/assets/vrcm/IMG-20251215-WA0010.jpg',
      //   '/assets/vrcm/IMG-20251215-WA0012.jpg',
      //   '/assets/vrcm/IMG-20251215-WA0016.jpg',
      //   '/assets/vrcm/IMG-20251215-WA0017.jpg',
      //   '/assets/vrcm/IMG-20251215-WA0018.jpg',
      //   '/assets/vrcm/IMG-20251215-WA0019.jpg',
      // ],
      icon: Footprints,
      description: 'A complete week-long all-inclusive hiking holiday.',
      fullDescription: 'Let us organise your hiking holiday for you. Spend 5-days exploring the beautiful Todra Gorges and surrounding areas on this week-long all-inclusive trip. Each day we\'ll strike out in a new direction, hiking along the shaded river for a vibrant morning spent at the busy souk in Tinghir, or climbing high onto the plateau on nomad trails for panoramic vistas. Possible to mix hiking with other activities (climbing, via ferrata, etc.).',
      highlights: ['5-Day Guided Hiking', 'Todra Gorges Exploration', 'Market Visits', 'Plateau Trails', 'Marrakech Accommodation', 'Mixed Activities Available'],
      color: 'from-purple-500 to-blue-500',
      location: 'Todra Gorge & Surroundings',
      rating: 4.7,
      reviews: 156,
      included: ['5-days guided hiking', 'Private transportation from Marrakech', '1 night Marrakech accommodation', 'Daily meals', 'Professional guide', 'Return transportation'],
      notIncluded: ['Personal gear', 'Travel insurance', 'Optional activities'],
      requirements: ['Moderate fitness level', 'Age 10+', 'Hiking boots recommended', 'Flexible schedule'],
      email: 'aitabdellah.abdelhadi@gmail.com',
      notes: 'Mix hiking with other activities like climbing and via ferrata'
    },
  ];

  // Convert id to number safely
  const numericId = id ? Number(id) : null;
  const activity = numericId ? activities.find(a => a.id === numericId) : null;

  if (!activity || numericId === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Activity Not Found</h1>
          <p className="text-gray-600 mb-6">The activity you're looking for doesn't exist.</p>
          <p className="text-sm text-gray-500 mb-6">ID received: {id}</p>
          <Link href="/activities">
            <Button className="bg-[#E86C36] hover:bg-[#d45a2a] text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Activities
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = activity.images || [activity.image];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/activities">
            <Button variant="outline" className="hover:bg-[#E86C36]/10 hover:text-[#E86C36] hover:border-[#E86C36]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Activities
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-black relative h-96 md:h-[500px]">
        <img
          src={images[imageIndex]}
          alt={`${activity.title} ${imageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setImageIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-[#E86C36]" />
            </button>
            <button
              onClick={() => setImageIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-[#E86C36]" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
              {imageIndex + 1} / {images.length}
            </div>

            {/* Image Dots */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className={`transition-all rounded-full ${
                    idx === imageIndex ? 'bg-[#E86C36] w-3 h-3' : 'bg-white/60 w-2 h-2 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-3 bg-[#E86C36] text-white">
                    {activity.difficulty}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
                    {activity.title}
                  </h1>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-full transition-all ${
                    isFavorite ? 'bg-[#E86C36] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(activity.rating) ? 'fill-[#E86C36] text-[#E86C36]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-[#1A1A1A]">{activity.rating}</span>
                <span className="text-gray-600">({activity.reviews} reviews)</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#E86C36]" />
                    <div>
                      <p className="text-xs text-gray-600">Duration</p>
                      <p className="text-sm font-semibold">{activity.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-[#E86C36]" />
                    <div>
                      <p className="text-xs text-gray-600">Group Size</p>
                      <p className="text-sm font-semibold">{activity.groupSize}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="h-5 w-5 text-[#E86C36]" />
                    <div>
                      <p className="text-xs text-gray-600">Location</p>
                      <p className="text-sm font-semibold">{activity.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div>
                    <p className="text-xs text-gray-600">Price</p>
                    <p className="text-sm font-semibold text-[#E86C36]">{activity.price}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">About This Activity</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {activity.fullDescription}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>

            {/* Pricing Details - Show for Via Ferrata */}
            {activity.priceDetails && (
              <div className="mb-8 p-6 bg-[#E86C36]/5 rounded-lg border border-[#E86C36]/10">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Pricing</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">1 Person:</span>
                    <span className="text-xl font-bold text-[#E86C36]">{activity.priceDetails.individual}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">2 People:</span>
                    <span className="text-xl font-bold text-[#E86C36]">{activity.priceDetails.twopeople}</span>
                  </div>
                  <div className="pt-3 border-t border-[#E86C36]/20">
                    <p className="text-gray-600 text-sm">{activity.priceDetails.groups}</p>
                  </div>
                </div>
              </div>
            )}

            {/* What's Included */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-[#E86C36] mb-3">Included</h3>
                  <ul className="space-y-2">
                    {activity.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600 mb-3">Not Included</h3>
                  <ul className="space-y-2">
                    {activity.notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <AlertCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Requirements</h2>
              <ul className="space-y-2">
                {activity.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#E86C36]/10 text-[#E86C36] text-sm font-semibold flex-shrink-0">
                      ✓
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activity.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-[#E86C36]/5 rounded-lg border border-[#E86C36]/10">
                    <Star className="h-5 w-5 text-[#E86C36] flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <Card className="sticky top-20 border-2 border-[#E86C36] shadow-xl">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-[#E86C36]">{activity.price}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Professional guide included</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>All equipment provided</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Safety certified</span>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    const email = activity.email || 'aitabdellah.abdelhadi@gmail.com';
                    const subject = `Booking Request for ${activity.title}`;
                    const mailtoLink = generateMailtoLink(email, subject);
                    window.location.href = mailtoLink;
                  }}
                  className="w-full bg-[#E86C36] hover:bg-[#d45a2a] text-white mb-3 py-6 text-lg font-semibold cursor-pointer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                </Button>

                <Button 
                  onClick={() => {
                    const email = activity.email || 'aitabdellah.abdelhadi@gmail.com';
                    const mailtoLink = generateMailtoLink(email);
                    window.location.href = mailtoLink;
                  }}
                  variant="outline" 
                  className="w-full border-[#E86C36] text-[#E86C36] hover:bg-[#E86C36]/10 py-6 text-lg font-semibold cursor-pointer"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Inquire
                </Button>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600 mb-3 font-semibold">Questions?</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-4 w-4 text-[#E86C36]" />
                      <a href="tel:+212700701834" className="hover:text-[#E86C36] transition-colors">+212 700-701834</a>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Mail className="h-4 w-4 text-[#E86C36] mt-0.5" />
                      <a href="mailto:aitabdellah.abdelhadi@gmail.com" className="hover:text-[#E86C36] transition-colors">aitabdellah.abdelhadi@gmail.com</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            {/* <Card className="mt-4 border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-4">Share Activity</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="hover:bg-blue-50">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>

      {/* Related Activities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Similar Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities
              .filter(a => a.category === activity.category && a.id !== activity.id)
              .slice(0, 3)
              .map(relatedActivity => (
                <Link key={relatedActivity.id} href={`/activities/${relatedActivity.id}`}>
                  <Card className="h-full group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedActivity.image}
                        alt={relatedActivity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#E86C36]">
                        {relatedActivity.title}
                      </h3>
                      <p className="text-sm text-gray-600">{relatedActivity.price}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityDetailPage;
