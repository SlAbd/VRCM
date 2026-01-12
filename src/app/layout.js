'use client';

import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: {
    default: 'VRCM - Morocco\'s Premier Rock Climbing Destination',
    template: '%s | VRCM',
  },
  description: 'Experience world-class rock climbing in Todra Gorge, Morocco. Expert guides, professional equipment, and unforgettable adventures.',
  keywords: ['rock climbing Morocco', 'Todra Gorge climbing', 'adventure sports', 'climbing courses', 'mountain guides'],
  authors: [{ name: 'VRCM Team' }],
  metadataBase: new URL('https://vrcm-morocco.com'),
  openGraph: {
    title: 'VRCM - Vertical Rock Climbing Morocco',
    description: 'Morocco\'s premier rock climbing destination in Todra Gorge',
    url: 'https://vrcm-morocco.com',
    siteName: 'VRCM',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VRCM - Rock Climbing Morocco',
    description: 'Experience authentic climbing adventures in Morocco',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
