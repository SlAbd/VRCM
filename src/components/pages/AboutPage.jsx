'use client';

import { useState } from 'react';
import { 
  Mountain, Users, Award, Heart, Target, Shield, 
  Clock, MapPin, Phone, Mail, CheckCircle, Star,
  Globe, Compass, Camera, Briefcase, Hotel, Medal
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import hadi_2 from '../../../public/assets/hadi_2.jpg'; 
import Link from 'next/link';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const { t } = useLanguage();

  const stats = [
    { icon: Clock, value: '13+', label: t.about.stats.experience, color: 'text-[#E86C36]' },
    { icon: Users, value: '1000+', label: t.about.stats.climbers, color: 'text-blue-600' },
    { icon: Mountain, value: '400+', label: t.about.stats.routes, color: 'text-green-600' },
    { icon: Award, value: '100%', label: t.about.stats.safety, color: 'text-purple-600' },
  ];

  const team = [
    {
      name: 'Ait Abdellah Abdelhadi',
      role: 'Founder & Lead Guide',
      image: hadi_2,
      bio: 'Expert climber with 15+ years of experience in Todra Gorge.',
      specialties: ['Rock Climbing', 'Mountain Guide', 'Safety Expert'],
    },
    {
      name: 'Fatima Zahra',
      role: 'Cultural Experience Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
      bio: 'Passionate about sharing Berber culture and traditions.',
      specialties: ['Cultural Tours', 'Local Cuisine', 'Language'],
    },
    {
      name: 'Mohammed Ali',
      role: 'Trekking Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
      bio: 'Mountain trekking expert and wilderness survival specialist.',
      specialties: ['Trekking', 'Navigation', 'First Aid'],
    },
    {
      name: 'Amina Brahim',
      role: 'Equipment Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
      bio: 'Ensures all equipment meets international safety standards.',
      specialties: ['Equipment', 'Safety', 'Logistics'],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize your safety above all else with certified equipment and expert guides.',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for climbing and the mountains drives everything we do.',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with climbers from around the world.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Globe,
      title: 'Authenticity',
      description: 'Genuine Berber hospitality and authentic mountain experiences.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to providing world-class climbing experiences.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Compass,
      title: 'Adventure',
      description: 'Exploring new routes and pushing boundaries safely.',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const milestones = [
    { year: '2010', event: 'VRCM Founded', description: 'Started with a passion for climbing and sharing the beauty of Todra Gorge.' },
    { year: '2013', event: 'FFME N1 Certification', description: 'Achieved FFME N1 certification, meeting French Federation standards for mountain guides.' },
    { year: '2016', event: 'Safety Certification', description: 'Achieved international climbing safety certification.' },
    { year: '2019', event: '1,000th Client', description: 'Celebrated serving over 1,000 satisfied climbers from around the world.' },
    { year: '2022', event: 'Expansion', description: 'Expanded services to include cultural tours and trekking expeditions.' },
    { year: '2023', event: 'Landscap True Guide', description: 'Recognized as official Landscap True Guide in Morocco.' },
    { year: '2024', event: '400+ Routes', description: 'Explored and documented over 400 climbing routes in Todra Gorge.' },
  ];

  const certifications = [
    {
      title: 'FFME N1 Certification',
      year: '2013',
      description: 'Fédération Française de la Montagne et de l\'Escalade - Level 1 certified guide',
      icon: Medal,
    },
    {
      title: 'Landscap True Guide Morocco',
      year: '2023',
      description: 'Official certification as authentic landscape guide in Morocco',
      icon: Compass,
    },
  ];

  const accommodations = [
    {
      name: 'Riad Marzouk',
      description: 'Traditional Moroccan hospitality in a beautifully restored riad',
      icon: Hotel,
    },
    {
      name: 'Dar Lalla',
      description: 'Authentic mountain experience with stunning gorge views',
      icon: Mountain,
    },
    {
      name: 'Les Jardins des Gorges',
      description: 'Scenic garden retreat nestled in the heart of Todra',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486311355911-65e04c1ae42e?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
          <p className="text-lg text-white/80 mt-4 italic">
            {t.about.teamCredit}
          </p>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <stat.icon className={`h-10 w-10 mx-auto mb-2 ${stat.color}`} />
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Vertical Rock Climbing Morocco (VRCM) was born from a deep passion for the 
                magnificent limestone cliffs of Todra Gorge. Founded in 2010 by local climbing 
                enthusiast Ait Abdellah Abdelhadi, we started with a simple mission: to share 
                the beauty and thrill of climbing in one of the world's most spectacular locations.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Over the years, we've grown from a small local operation to an internationally 
                recognized climbing and adventure tourism company. Our team of expert guides 
                combines traditional Berber knowledge with modern climbing techniques to create 
                unforgettable experiences.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Today, we welcome climbers of all levels from around the world, offering everything 
                from beginner courses to advanced multi-pitch climbs, while maintaining our commitment 
                to safety, authenticity, and environmental responsibility.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400"
                  alt="Climbing"
                  className="rounded-lg shadow-xl h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=400"
                  alt="Mountain"
                  className="rounded-lg shadow-xl h-64 object-cover mt-8 transform transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=400"
                  alt="Trekking"
                  className="rounded-lg shadow-xl h-64 object-cover -mt-8 transform transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=400"
                  alt="Adventure"
                  className="rounded-lg shadow-xl h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every adventure we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#E86C36]"
              >
                <CardContent className="p-8">
                  <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              {t.about.team}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced guides and passionate adventurers dedicated to your safety and enjoyment
            </p>
            <p className="text-[#E86C36] font-semibold text-lg mt-2">
              {t.about.teamCredit}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#E86C36] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#E86C36]/10 text-[#E86C36] text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              {t.about.certifications}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized qualifications ensuring the highest standards of safety and professionalism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#E86C36]"
              >
                <CardContent className="p-8">
                  <div className="bg-[#E86C36]/10 text-[#E86C36] w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="h-8 w-8" />
                  </div>
                  <div className="inline-block bg-[#E86C36] text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                    {cert.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              {t.about.accommodations}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comfortable stays near Todra Gorge for the complete climbing experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <accommodation.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {accommodation.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {accommodation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

   

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#E86C36] to-[#ff8c5a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of climbers who have experienced the magic of Todra Gorge with VRCM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link>
            <Button 
              size="lg"
              className="bg-white text-[#E86C36] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Book Now
            </Button>
            </Link>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#E86C36] px-8 py-6 text-lg font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


