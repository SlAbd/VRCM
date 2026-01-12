import LandingPage from '@/components/LandingPage';

export const metadata = {
  title: 'Home - VRCM Morocco',
  description: 'Discover world-class rock climbing in Todra Gorge, Morocco. Expert guides, professional equipment, and unforgettable adventures await you.',
  keywords: ['rock climbing Morocco', 'Todra Gorge', 'climbing tours', 'adventure Morocco', 'mountain climbing'],
  openGraph: {
    title: 'VRCM - Morocco\'s Premier Rock Climbing Destination',
    description: 'Experience authentic climbing adventures in Todra Gorge',
    type: 'website',
  },
};

export default function Home() {
  return <LandingPage />;
}
