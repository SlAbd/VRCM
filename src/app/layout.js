import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'VRCM - Morocco\'s Premier Rock Climbing Destination',
    template: '%s | VRCM',
  },
  description: 'Experience world-class rock climbing in Todra Gorge, Morocco. Expert guides, professional equipment, and unforgettable adventures.',
  keywords: [
    'vertical rock climbing',
    'rock climbing Morocco',
    'Todra Gorge climbing',
    'Todra Gorge',
    'climbing in Morocco',
    'Morocco climbing tours',
    'climbing trips Morocco',
    'climbing holidays Morocco',
    'climbing guide Morocco',
    'mountain guides Morocco',
    'sport climbing Morocco',
    'trad climbing Morocco',
    'multi-pitch climbing Morocco',
    'bouldering Morocco',
    'rock climbing routes Morocco',
    'climbing courses Morocco',
    'climbing lessons Morocco',
    'climbing equipment Morocco',
    'climbing gear Morocco',
    'adventure tourism Morocco',
    'outdoor activities Morocco',
    'Atlas Mountains climbing',
    'Todra Gorge guides',
    'climb todra gorge',
    'morocco adventure trips',
    'guided climbing tours',
    'rock climbing school Morocco',
    'experienced climbing guides',
    'beginner climbing Morocco',
    'advanced climbing Morocco',
    'climbing safety Morocco',
    'climbing packages Morocco',
    'vertical rock',
    'rock climbing courses',
    'outdoor climbing Morocco',
    'climbing vacations Morocco'
  ],
  authors: [{ name: 'VRCM Team' }],
  metadataBase: new URL('https://verticalrockclimbingmorocco.com'),
  openGraph: {
    title: 'VRCM - Vertical Rock Climbing Morocco',
    description: 'Morocco\'s premier rock climbing destination in Todra Gorge',
    url: 'https://verticalrockclimbingmorocco.com',
    siteName: 'VRCM',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VRCM - Rock Climbing Morocco',
    description: 'Experience authentic climbing adventures in Morocco',
  },
  verification: {
    google: 'cQFPTB-PWbTXZfSoQ3C-hYuOGny1J5fO9RENdVdpwgI',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
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