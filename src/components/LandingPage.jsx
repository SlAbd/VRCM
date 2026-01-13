'use client';

import { 
  Mountain, Tent, Flame, Star, Users, Award, TrendingUp, AlertCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';


// Hero Section
const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[10000ms] hover:scale-110"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000)',
          animation: 'slowZoom 20s ease-in-out infinite alternate',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const left = (i * 5.26) % 100;
          const top = ((i * 7.83) % 80) + 10;
          const duration = 5 + (i % 10);
          const delay = (i * 0.25) % 5;
          return (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `float ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content with animations */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 inline-block px-6 py-2 bg-[#E86C36]/20 backdrop-blur-sm rounded-full border border-[#E86C36]/30 text-white font-semibold animate-pulse">
           {t.hero.badge}
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-2xl">
          {t.hero.title} <span className="text-[#E86C36]">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 animate-fade-in-up-delay">
          {t.hero.description}
        </p>
        
        {/* Booking Recommendation */}
        <div className="mb-6 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white animate-fade-in-up-delay">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">{t.activities.bookingNote}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
          <Link href="/activities">
          <Button 
            size="lg"
            className="bg-[#E86C36] hover:bg-[#d45a2a] text-white px-8 py-6 text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {t.hero.bookButton}
          </Button>
          </Link>
          
          {/* <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-6 text-lg font-semibold transform transition-all duration-300 hover:scale-105"
          >
            Watch Video
          </Button> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll-down"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-fade-in-up-delay {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

// About Hadi Section
const AboutHadiSection = () => {
  const { t } = useLanguage();
  const services = [
    { icon: Tent, title: t.landingPage.tentsRent, color: '#E86C36' },
    { icon: Mountain, title: t.landingPage.activities, color: '#E86C36' },
    { icon: Flame, title: t.landingPage.firewoods, color: '#E86C36' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              {t.landingPage.aboutHadi}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t.landingPage.hadiDesc1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t.landingPage.hadiDesc2}
            </p>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center">
                    <service.icon 
                      className="h-8 w-8 mb-2" 
                      style={{ color: service.color }} 
                    />
                    <p className="text-sm font-medium text-gray-700">{service.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Overlay Card */}
          <div className="relative">
            <img
              src="/assets/taljmart.jpg"
              alt="Mountain Climbing"
              className="rounded-lg shadow-xl w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Overlay CTA Card */}
            <div 
              className="absolute bottom-4 right-4 bg-[#E86C36] text-white p-6 rounded-lg shadow-2xl max-w-[250px]"
            >
              <Mountain className="h-10 w-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">{t.landingPage.climbing}!</h3>
              <p className="text-sm">Mountain Seekers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: t.landingPage.climbing,
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600',
    },
    {
      title: t.landingPage.trekking,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600',
    },
    {
      title: t.landingPage.biking,
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=600',
    },
    {
      title: t.landingPage.donkeyRiding,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=600',
    },
    {
      title: t.landingPage.camping,
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600',
    },
    {
      title: t.landingPage.culturalTours,
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600',
    },
    {
      title: t.landingPage.photography,
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=600',
    },
    {
      title: t.landingPage.rockScrambling,
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            {t.landingPage.services}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.landingPage.servicesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow h-64"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
              </div>
              
              {/* Service Name Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-8 backdrop-blur-sm">
                  <p className="text-[#1A1A1A] font-bold text-center text-sm">
                    {service.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats & CTA Section
const StatsSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: TrendingUp, value: '15+', label: t.about.stats.experience },
    { icon: Users, value: '1000+', label: t.about.stats.climbers },
    { icon: Award, value: '100%', label: t.about.stats.safety },
    { icon: Mountain, value: '400+', label: t.about.stats.routes },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Expert CTA */}
        <Card className="mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center">
              {/* Expert Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={"/assets/hadi.jpg"}
                  alt="Expert Guide"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex-1 p-8 md:p-12 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                  {t.landingPage.experts}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.landingPage.expertsDesc}
                </p>
                <Link href="/contact">
                <Button 
                  className="bg-[#1A1A1A] hover:bg-[#E86C36] text-white px-8 py-6 text-lg cursor-pointer"
                >
                  {t.landingPage.requestQuote}
                </Button>
                </Link>
                
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-[#E86C36]" />
                <h4 className="text-3xl font-bold text-[#1A1A1A] mb-2">{stat.value}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  const { t } = useLanguage();
  const reviews = [
    {
      rating: 5,
      title: t.landingPage.amazingExperience,
      text: t.landingPage.reviewText1,
      author: 'John Smith',
      country: 'United States',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      rating: 5,
      title: t.landingPage.bestAdventure,
      text: t.landingPage.reviewText2,
      author: 'Marie Dubois',
      country: 'France',
      avatar: 'https://i.pravatar.cc/150?img=45',
    },
    {
      rating: 5,
      title: t.landingPage.incredibleJourney,
      text: t.landingPage.reviewText3,
      author: 'Hans Mueller',
      country: 'Germany',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
    {
      rating: 5,
      title: t.landingPage.perfectFamily,
      text: t.landingPage.reviewText4,
      author: 'Sarah Johnson',
      country: 'Canada',
      avatar: 'https://i.pravatar.cc/150?img=25',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            {t.landingPage.reviews}
          </h2>
          <p className="text-gray-600">{t.landingPage.reviewsDesc}</p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      {/* Stars */}
                      <div className="flex mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#E86C36] text-[#E86C36]" />
                        ))}
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">
                        {review.title}
                      </h4>

                      {/* Review Text */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {review.text}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-semibold text-[#1A1A1A]">{review.author}</p>
                          <p className="text-sm text-gray-500">{review.country}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* TripAdvisor Badge */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-[#E86C36]" />
              <div className="text-left">
                <p className="font-bold text-[#1A1A1A]">TripAdvisor</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-[#E86C36] mr-1">4.8</span>
                  <Star className="h-4 w-4 fill-[#E86C36] text-[#E86C36]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutHadiSection />
      <ServicesSection />
      <StatsSection />
      <ReviewsSection />
    </div>
  );
};

export default LandingPage;



