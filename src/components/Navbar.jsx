'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search } from 'lucide-react';
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
    { code: 'fr', name: 'Francais', flag: '/assets/france.png' },
    { code: 'es', name: 'Espanol', flag: '/assets/espagne.png' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e8dece]/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="site-container">
        <div className="flex h-18 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 rounded-full pr-3" aria-label="VRCM home">
            <Image
              src="/assets/vrcm.jpg"
              alt="VRCM Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-[#e8dece] object-cover shadow-sm"
              priority
            />
            <span className="hidden text-sm font-black uppercase tracking-wide text-[#1f211b] lg:block">
              VRCM
            </span>
          </Link>

          <div className="hidden items-center rounded-full border border-[#e8dece] bg-[#f8f4ed]/80 p-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-white text-[#B84E22] shadow-sm'
                    : 'text-[#5d5a50] hover:bg-white/70 hover:text-[#B84E22]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-[#e8dece] bg-white px-2 py-1 shadow-sm">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`cursor-pointer rounded-full p-1 transition-all hover:scale-110 ${
                    language === lang.code ? 'opacity-100 ring-2 ring-[#E86C36]' : 'opacity-55 hover:opacity-100'
                  }`}
                  title={lang.name}
                  aria-label={`Switch to ${lang.name}`}
                >
                  <Image src={lang.flag} alt={lang.name} width={28} height={28} className="rounded-full object-cover" />
                </button>
              ))}
            </div>

            <Button variant="ghost" size="icon" className="bg-white shadow-sm" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-white shadow-sm" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] border-[#e8dece] bg-[#fbf8f2] sm:w-[400px]">
                <div className="mt-8 flex flex-col space-y-4">
                  <div className="rounded-lg border border-[#e8dece] bg-white px-4 py-3">
                    <div className="flex justify-start gap-3">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`rounded-full p-1 transition-all hover:scale-110 ${
                            language === lang.code ? 'opacity-100 ring-2 ring-[#E86C36]' : 'opacity-55 hover:opacity-100'
                          }`}
                          title={lang.name}
                        >
                          <Image src={lang.flag} alt={lang.name} width={40} height={40} className="rounded-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                        isActive(link.path)
                          ? 'bg-[#E86C36]/10 text-[#B84E22]'
                          : 'text-[#4d493f] hover:bg-white hover:text-[#B84E22]'
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
