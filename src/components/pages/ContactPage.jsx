'use client';

import { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageSquare, Globe,
  Facebook, Instagram, Twitter, Youtube, CheckCircle, AlertCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+212 700-701834'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['aitabdellah.abdelhadi@gmail.com'],
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Todra Gorge, Tinghir', 'DrÃ¢a-Tafilalet, Morocco'],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Sun: 7:00 AM - 8:00 PM', 'Available 24/7 for emergencies'],
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/verticalrockclimbingmorocco/', color: 'hover:bg-pink-600' },
  ];

  const faqs = [
    {
      question: 'What experience level do I need?',
      answer: 'We offer programs for all levels, from complete beginners to advanced climbers.',
    },
    {
      question: 'Do you provide equipment?',
      answer: 'Yes, all climbing equipment is included in our packages and meets international safety standards.',
    },
    {
      question: 'What\'s the best time to visit?',
      answer: 'Spring (March-May) and Autumn (September-November) offer the best climbing conditions.',
    },
    {
      question: 'How do I book an activity?',
      answer: 'You can book through our website, email, or by calling us directly. We recommend booking at least 2 weeks in advance.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#E86C36]/90 via-[#E86C36]/70 to-[#E86C36]/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <MessageSquare className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            We're here to help plan your perfect climbing adventure
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-3 text-lg">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-[#1A1A1A] font-semibold mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-[#1A1A1A] font-semibold mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="text-[#1A1A1A] font-semibold mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+212 XXX-XXXXXX"
                        className="w-full"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject" className="text-[#1A1A1A] font-semibold mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Booking inquiry"
                        className="w-full"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-[#1A1A1A] font-semibold mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your climbing experience and what you're looking for..."
                        className="w-full min-h-[150px]"
                      />
                    </div>

                    {/* Status Messages */}
                    {formStatus === 'success' && (
                      <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <p className="text-green-800 font-medium">
                          Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {formStatus === 'error' && (
                      <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                        <p className="text-red-800 font-medium">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#E86C36] hover:bg-[#d45a2a] text-white py-6 text-lg font-semibold"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map */}
              <Card className="overflow-hidden">
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54628.05086!2d-5.584!3d31.574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda0!2sTodra%20Gorge!5e0!3m2!1sen!2sma!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center">
                    <Globe className="h-6 w-6 mr-2 text-[#E86C36]" />
                    Follow Us
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Stay connected and see the latest from our climbing community
                  </p>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`flex-1 bg-gray-100 hover:text-white ${social.color} p-4 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105`}
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                    Quick Answers
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b last:border-b-0 cursor-pointer group"
                      >
                        <h4 className="font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#E86C36] transition-colors">
                          {faq.question}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 hover:bg-[#E86C36] hover:text-white hover:border-[#E86C36]"
                  >
                    View All FAQs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertCircle className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Emergency Contact
          </h2>
          <p className="text-xl mb-6 text-white/90">
            For urgent matters or emergencies during your adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold cursor-pointer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +212 700-701834
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold cursor-pointer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2d2d2d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Subscribe to our newsletter for climbing tips, special offers, and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 py-6 bg-white text-[#1A1A1A]"
            />
            <Button 
              size="lg"
              className="bg-[#E86C36] hover:bg-[#d45a2a] text-white px-8"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;


