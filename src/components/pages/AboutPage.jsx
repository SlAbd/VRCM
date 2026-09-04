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
    image: "/assets/vrcm/hadi.jpeg",
    bio: 'Expert climber with 15+ years of experience in Todra Gorge.',
    specialties: ['Rock Climbing', 'Mountain Guide', 'Safety Expert'],
  },
  {
    name: 'Khalid',
    role: 'Local Guide',
    image: '/assets/vrcm/khalid.jpeg',
    bio: 'Experienced local guide who knows the Todra Valley, its trails, and its hidden gems.',
    specialties: ['Local Tours', 'Trekking', 'Berber Culture'],
  },
  {
    name: 'Lhoussaine',
    role: 'Local Mountain Guide',
    image: '/assets/vrcm/lhoussaine.jpeg',
    bio: 'Passionate local guide with extensive knowledge of mountain trails and the surrounding landscapes.',
    specialties: ['Trekking', 'Mountain Hiking', 'Navigation'],
  },
  {
    name: 'Mustapha',
    role: 'Local Guide',
    image: '/assets/vrcm/mustapha.jpeg',
    bio: 'Friendly local guide dedicated to helping visitors discover the authentic beauty and culture of the region.',
    specialties: ['Local Experiences', 'Trekking', 'Cultural Tours'],
  },
  {
    name:'Mohamed',
    role: 'Hiking and via ferrata guide',
    image: '/assets/vrcm/mohamed.jpeg',
    bio: 'Skilled guide specializing in hiking and via ferrata routes, ensuring safe and enjoyable experiences for all adventurers.',
    specialties: ['Hiking', 'Via Ferrata', 'Safety'],
  },
  {
    name:'kamal',
    role: 'Rock climbing guide',
    image: '/assets/vrcm/kamal.jpeg',
    bio: 'Experienced rock climbing guide with a passion for teaching and leading climbers of all skill levels.',
    specialties: ['Rock Climbing', 'Lead Climbing', 'Belaying'],
  }
];

  const values = [
    {
      icon: Shield,
      title: t.aboutPage.safetyFirst,
      description: t.aboutPage.safetyDesc,
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Heart,
      title: t.aboutPage.passion,
      description: t.aboutPage.passionDesc,
      color: 'bg-pink-50 text-pink-600',
    },
    {
      icon: Users,
      title: t.aboutPage.community,
      description: t.aboutPage.communityDesc,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Globe,
      title: t.aboutPage.authenticity,
      description: t.aboutPage.authenticityDesc,
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Target,
      title: t.aboutPage.excellence,
      description: t.aboutPage.excellenceDesc,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Compass,
      title: t.aboutPage.adventure,
      description: t.aboutPage.adventureDesc,
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const milestones = [
    { year: '2010', event: t.aboutPage.milestone2010, description: t.aboutPage.milestone2010Desc },
    { year: '2013', event: t.aboutPage.milestone2013, description: t.aboutPage.milestone2013Desc },
    { year: '2016', event: t.aboutPage.milestone2016, description: t.aboutPage.milestone2016Desc },
    { year: '2019', event: t.aboutPage.milestone2019, description: t.aboutPage.milestone2019Desc },
    { year: '2022', event: t.aboutPage.milestone2022, description: t.aboutPage.milestone2022Desc },
    { year: '2023', event: t.aboutPage.milestone2023, description: t.aboutPage.milestone2023Desc },
    { year: '2024', event: t.aboutPage.milestone2024, description: t.aboutPage.milestone2024Desc },
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
      description: 'Charming guesthouse offering a cozy and authentic Moroccan experience',
      icon: Hotel,
    },
    {
      name: 'Les Jardins des Gorges',
      description: 'Scenic garden retreat nestled in the heart of Todra',
      icon: Hotel,
    },
    {
      name : 'Royal Palmas',
      description: 'Luxury accommodations with modern amenities and comfort',
      icon: Hotel,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-shell h-[58vh] justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: '/assets/vrcm/7dayhike2.jpeg',
          }}
        >
          <div className="hero-overlay"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center animate-fade-in">
          <div className="hero-badge">VRCM</div>
          <h1 className="hero-title">
            {t.about.title}
          </h1>
          <p className="hero-description mx-auto">
            {t.about.subtitle}
          </p>
          <p className="text-lg text-white/80 mt-4 italic">
            {t.about.teamCredit}
          </p>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="relative z-20 -mt-10">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-4 rounded-lg border border-[#e8dece] bg-white p-4 shadow-[0_18px_45px_rgb(54_41_22/0.12)] md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center rounded-lg bg-[#fbf8f2] p-5 transition-all duration-300 hover:-translate-y-1"
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
      <section className="site-section site-section-soft">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                {t.aboutPage.ourStory}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.aboutPage.storyText1}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.aboutPage.storyText2}
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
                  src="/assets/vrcm/camping.jpeg"
                  alt="Camping"
                  className="rounded-lg shadow-xl h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="/assets/vrcm/viaferrata2.jpeg"
                  alt="via ferrata"
                  className="rounded-lg shadow-xl h-64 object-cover mt-8 transform transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="/assets/vrcm/7dayhike8.jpeg"
                  alt="hiking"
                  className="rounded-lg shadow-xl h-64 object-cover -mt-8 transform transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="/assets/satisfied-client.jpg"
                  alt="climbing"
                  className="rounded-lg shadow-xl h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="site-section bg-white">
        <div className="site-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              {t.aboutPage.ourValues}
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
      <section className="site-section site-section-soft">
        <div className="site-container">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="site-section bg-white">
        <div className="site-container">
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
      <section className="site-section site-section-soft">
        <div className="site-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              {t.about.accommodations}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comfortable stays near Todra Gorge for the complete climbing experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <Link href="/activities">
            <Button 
              size="lg"
              className="bg-white text-[#E86C36] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Book Now
            </Button>
            </Link>
            
            <Link href="/contact">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-[#E86C36] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


