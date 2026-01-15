import ActivityDetailPage from '@/components/pages/ActivityDetailPage';

// Activity data for generateStaticParams
const activities = [
  { slug: 'rock-climbing' },
  { slug: 'multi-pitch-climbing' },
  { slug: 'mountain-trekking' },
  { slug: 'mountain-biking' },
  { slug: 'desert-camping' },
  { slug: 'cultural-village-tours' },
  { slug: 'via-ferrata' },
  { slug: 'day-hikes' },
  { slug: '3-day-nomadic-hiking-adventure' },
  { slug: '7-day-hiking-holiday' },
];

export async function generateStaticParams() {
  return activities.map((activity) => ({
    id: activity.slug,
  }));
}

export default function ActivityPage({ params }) {
  return <ActivityDetailPage />;
}
