'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const partners = [
    'Morocco Tourism',
    'Adventure Alliance',
    'Mountain Guide Association',
    'TripAdvisor',
  ];

  const footerLinks = {
    tours: [
      { name: 'Rock Climbing Tours', path: '/activities' },
      { name: 'Trekking Packages', path: '/activities' },
      { name: 'Desert Adventures', path: '/activities' },
      { name: 'Cultural Experiences', path: '/activities' },
      { name: 'Multi-Day Expeditions', path: '/activities' },
    ],
    siteInfo: [
      { name: 'About VRCM', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Shop', path: '/shop' },
      { name: 'Contact', path: '/contact' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, url: '#' },
      { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/verticalrockclimbingmorocco/' },
      { name: 'Twitter', icon: Twitter, url: '#' },
      { name: 'YouTube', icon: Youtube, url: '#' },
    ],
  };

  return (
    <footer className="bg-[#1A1A1A] text-white" id="contact">
      {/* Partners Section */}
      {/* <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <span 
                key={index} 
                className="text-gray-400 text-sm font-medium hover:text-[#E86C36] transition-colors cursor-pointer"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tours & Trips */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tours & Trips</h3>
            <ul className="space-y-2">
              {footerLinks.tours.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-[#E86C36] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Site Info</h3>
            <ul className="space-y-2">
              {footerLinks.siteInfo.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-[#E86C36] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-[#E86C36] p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#E86C36]" />
                <span>Todra Gorge, Tinghir<br />Drâa-Tafilalet, Morocco</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#E86C36]" />
                <span>+212 700-701834</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#E86C36]" />
                <a 
                  href="mailto:aitabdellah.abdelhadi@gmail.com"
                  className="hover:text-[#E86C36] transition-colors"
                >
                  aitabdellah.abdelhadi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Vertical Rock Climbing Morocco. {t.footer.rights}
              </p>
              {/* <p className="text-[#E86C36] text-sm font-semibold mt-1">
                {t.footer.withTeam}
              </p> */}
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-[#E86C36] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#E86C36] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
