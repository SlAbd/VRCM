'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Mountain } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

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
    <footer className="bg-[#171711] text-white" id="contact">
      <div className="border-b border-white/10 bg-[#202016]">
        <div className="site-container py-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-[#E86C36]">
                <Mountain className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-black">Vertical Rock Climbing Morocco</p>
                <p className="text-sm text-white/60">Todra Gorge guided climbing, trekking and local gear.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1f211b] transition-colors hover:bg-[#E86C36] hover:text-white"
            >
              Plan an adventure
            </Link>
          </div>
        </div>
      </div>

      <div className="site-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Tours & Trips</h3>
            <ul className="space-y-2">
              {footerLinks.tours.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm text-white/60 transition-colors hover:text-[#E86C36]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Site Info</h3>
            <ul className="space-y-2">
              {footerLinks.siteInfo.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm text-white/60 transition-colors hover:text-[#E86C36]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E86C36] hover:bg-[#E86C36] hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#E86C36]" />
                <span>Todra Gorge, Tinghir<br />Draa-Tafilalet, Morocco</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#E86C36]" />
                <a href="tel:+212700701834" className="transition-colors hover:text-[#E86C36]">
                  +212 700-701834
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#E86C36]" />
                <a href="mailto:aitabdellah.abdelhadi@gmail.com" className="break-all transition-colors hover:text-[#E86C36]">
                  aitabdellah.abdelhadi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 md:flex-row">
          <p>
            Copyright {new Date().getFullYear()} Vertical Rock Climbing Morocco. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[#E86C36]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#E86C36]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
