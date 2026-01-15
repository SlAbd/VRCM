'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useLanguage } from '@/lib/i18n/LanguageContext';



const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, changeLanguage, t } = useLanguage();
  
  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.activities, path: '/activities' },
    { name: t.nav.shop, path: '/shop' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '/assets/etats-unis.png' },
    { code: 'fr', name: 'Français', flag: '/assets/france.png' },
    { code: 'es', name: 'Español', flag: '/assets/espagne.png' },
  ];

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
            <Image 
              src="/assets/vrcm.jpg" 
              alt="VRCM Logo" 
              width={48} 
              height={48} 
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-gray-700 hover:text-[#E86C36] transition-colors font-medium group ${
                  isActive(link.path) ? 'text-[#E86C36]' : ''
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#E86C36] transform transition-transform duration-300 ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Language Flags */}
            <div className="flex items-center space-x-1 border-l pl-3 ml-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`transition-all duration-300 cursor-pointer hover:scale-125 ${
                    language === lang.code 
                      ? 'scale-110 opacity-100 ring-2 ring-[#E86C36] rounded-full p-1' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                  title={lang.name}
                  aria-label={`Switch to ${lang.name}`}
                >
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={28}
                    height={28}
                    className="rounded-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Search Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-[#E86C36]/10 hover:text-[#E86C36] transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-[#E86C36]/10 hover:text-[#E86C36]"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Language Flags in Mobile */}
                  <div className="px-4 py-3 border-b">
                    {/* <p className="text-sm text-gray-500 mb-3">Language / Langue / Idioma</p> */}
                    <div className="flex gap-3 justify-start">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`transition-all duration-300 hover:scale-125 ${
                            language === lang.code 
                              ? 'scale-110 opacity-100 ring-2 ring-[#E86C36] rounded-full p-2' 
                              : 'opacity-50 hover:opacity-100'
                          }`}
                          title={lang.name}
                        >
                          <Image
                            src={lang.flag}
                            alt={lang.name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`text-gray-700 hover:text-[#E86C36] transition-colors font-medium text-lg px-4 py-2 rounded-lg ${
                        isActive(link.path) ? 'bg-[#E86C36]/10 text-[#E86C36]' : 'hover:bg-[#E86C36]/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
