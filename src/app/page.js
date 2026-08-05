import LandingPage from '@/components/LandingPage';

export const metadata = {
  title: 'Home - VRCM Morocco',
  description: 'Discover world-class rock climbing in Todra Gorge, Morocco. Expert guides, professional equipment, and unforgettable adventures await you.',
  keywords: [
    'vertical rock climbing',
    'rock climbing Morocco',
    'Todra Gorge',
    'Todra Gorge climbing',
    'climbing tours Morocco',
    'climbing holidays Morocco',
    'guided climbing tours',
    'climbing courses Morocco',
    'climbing lessons Morocco',
    'climbing equipment Morocco',
    'climbing gear rental',
    'sport climbing Morocco',
    'trad climbing Morocco',
    'multi-pitch climbing Morocco',
    'bouldering Morocco',
    'adventure sports Morocco',
    'outdoor activities Morocco',
    'Atlas Mountains climbing',
    'climbing packages Morocco',
    'climbing vacations Morocco'
  ],
  openGraph: {
    title: 'VRCM - Morocco\'s Premier Rock Climbing Destination',
    description: 'Experience authentic climbing adventures in Todra Gorge',
    type: 'website',
  },
};

export default function Home() {
  return <LandingPage />;
}
