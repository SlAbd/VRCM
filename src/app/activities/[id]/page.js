import ActivityDetailPage from '@/components/pages/ActivityDetailPage';

// Activity data for generateStaticParams
const activities = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
];

export async function generateStaticParams() {
  return activities.map((activity) => ({
    id: activity.id.toString(),
  }));
}

export default function ActivityPage({ params }) {
  return <ActivityDetailPage />;
}
