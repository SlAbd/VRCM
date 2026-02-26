import BlogDetailPage from '@/components/pages/BlogDetailPage';

const slugMeta = {
  'hiking-in-morocco': {
    title: 'Top 10 Trails for Hiking in Morocco – Discover the Country\'s Natural Wonders',
    description:
      "Explore Morocco's top 10 hiking trails through the Atlas Mountains, Sahara Desert, and beyond. A complete guide for outdoor enthusiasts.",
  },
  'top-10-trails-for-hiking-in-morocco': {
    title: 'Top 10 Trails for Hiking in Morocco – Discover the Country\'s Natural Wonders',
    description:
      "Explore Morocco's top 10 hiking trails through the Atlas Mountains, Sahara Desert, and beyond. A complete guide for outdoor enthusiasts.",
  },
  'morocco-trekking-adventures': {
    title: 'Morocco Trekking Adventures: Experience the Thrill of High Altitude Hikes',
    description:
      "Discover high-altitude trekking adventures across Morocco's Atlas Mountains, Jebel Saghro, and Rif Mountains.",
  },
  'from-atlas-to-sahara-unraveling-moroccos-diverse-terrain': {
    title: "From Atlas to Sahara: Unraveling Morocco's Diverse Terrain",
    description:
      "Journey from the majestic Atlas Mountains to the endless Sahara Desert and explore the remarkable diversity of Morocco's landscapes.",
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = slugMeta[slug];
  if (!meta) {
    return {
      title: 'Article Not Found | VRCM Blog',
    };
  }
  return {
    title: `${meta.title} | VRCM Blog`,
    description: meta.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(slugMeta).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return <BlogDetailPage slug={slug} />;
}
