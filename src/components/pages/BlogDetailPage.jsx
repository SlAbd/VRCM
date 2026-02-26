'use client';

import { useRouter } from 'next/navigation';
import {
  ArrowLeft, Calendar, User, Clock, Heart, Share2,
  MessageCircle, Eye, Tag, Mountain, ChevronRight,
  BookOpen, ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

/* ─────────────────────────────────────────────
   Blog post data (keyed by slug)
───────────────────────────────────────────── */
const blogPosts = {
  /* ── 1. hiking-in-morocco ── */
//   'hiking-in-morocco': {
//     id: 13,
//     title: 'Top 10 Trails for Hiking in Morocco – Discover the Country\'s Natural Wonders',
//     excerpt:
//       'Morocco, with its diverse landscapes ranging from rugged mountains to sweeping deserts, offers a paradise for outdoor enthusiasts and adventurers.',
//     author: 'VRockclimbing',
//     authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
//     date: 'October 3, 2025',
//     readTime: '15 min read',
//     image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400',
//     category: 'guides',
//     views: '3.0K',
//     likes: 402,
//     comments: 71,
//     tags: ['Hiking', 'Morocco', 'Adventure', 'Travel Guide', 'Atlas Mountains'],
//     relatedSlugs: ['morocco-trekking-adventures', 'from-atlas-to-sahara-unraveling-moroccos-diverse-terrain'],
//     sections: [
//       {
//         type: 'intro',
//         text: 'Morocco, with its diverse landscapes ranging from rugged mountains to sweeping deserts, offers a paradise for outdoor enthusiasts and adventurers. Among its myriad of attractions, the country boasts an extensive network of hiking trails that wind through breathtaking scenery, ancient villages, and cultural wonders. Whether you\'re a seasoned trekker or a novice explorer, Morocco\'s trails promise unforgettable experiences and hidden gems waiting to be discovered.',
//       },
//       {
//         type: 'trail',
//         number: 1,
//         heading: 'Atlas Mountains – Toubkal Circuit',
//         image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
//         text: 'Towering over Morocco, the Atlas Mountains provide a stunning backdrop for hiking adventures. The Toubkal Circuit, encompassing North Africa\'s highest peak, Mount Toubkal, offers a challenging yet rewarding trek through Berber villages, lush valleys, and snow-capped peaks.',
//       },
//       {
//         type: 'trail',
//         number: 2,
//         heading: 'Jebel Saghro – The Saharan Wilderness',
//         image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
//         text: 'Venture into the heart of the Sahara Desert with a hike through Jebel Saghro. This remote mountain range entices adventurers with its surreal landscapes, towering cliffs, and ancient rock formations, providing a glimpse into Morocco\'s untamed wilderness.',
//       },
//       {
//         type: 'trail',
//         number: 3,
//         heading: 'Todgha Gorge – Canyon of Legends',
//         image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800',
//         text: "Carved by the Todgha River, Todra Gorge is a natural wonderland renowned for its towering limestone cliffs and crystal-clear streams. Hikers can explore the canyon's narrow passageways, discover hidden oases, and witness the awe-inspiring beauty of this geological marvel.",
//       },
//       {
//         type: 'trail',
//         number: 4,
//         heading: 'Ourika Valley – Berber Trails',
//         image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
//         text: 'Escape the hustle and bustle of Marrakech with a trek through the scenic Ourika Valley. Surrounded by verdant hills and traditional Berber villages, this tranquil oasis offers a glimpse into Morocco\'s rural life and rich cultural heritage.',
//       },
//       {
//         type: 'trail',
//         number: 5,
//         heading: 'Dades Valley – Valley of a Thousand Kasbahs',
//         image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
//         text: "Immerse yourself in Morocco's history and heritage with a hike through the Dades Valley. Lined with ancient kasbahs, lush palm groves, and dramatic rock formations, this picturesque valley showcases the country's architectural wonders and natural beauty.",
//       },
//       {
//         type: 'trail',
//         number: 6,
//         heading: 'Akchour Waterfalls – Paradise Found',
//         image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800',
//         text: "Hidden in the Rif Mountains, the Akchour Waterfalls offer a refreshing escape from Morocco's summer heat. Trek through lush forests, cross scenic rivers, and discover the mesmerizing beauty of these cascading waterfalls tucked away in the heart of nature.",
//       },
//       {
//         type: 'trail',
//         number: 7,
//         heading: 'Mgoun Massif – Valley of Roses',
//         image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc0c?q=80&w=800',
//         text: 'Embark on a journey through the Valley of Roses, nestled in the shadow of Mgoun Massif. Known for its fragrant rose gardens, terraced fields, and traditional Berber villages, this idyllic valley invites hikers to immerse themselves in Morocco\'s rural charm and natural splendor.',
//       },
//       {
//         type: 'trail',
//         number: 8,
//         heading: 'Chefchaouen – The Blue Pearl',
//         image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800',
//         text: 'Explore the enchanting blue-washed streets of Chefchaouen with a leisurely hike through its surrounding hillsides. Admire panoramic views of the cityscape, encounter friendly locals, and experience the laid-back ambiance of this charming mountain town.',
//       },
//       {
//         type: 'trail',
//         number: 9,
//         heading: 'Tafraoute – Granite Wonderland',
//         image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800',
//         text: 'Discover the otherworldly landscapes of Tafraoute, famous for its unique granite rock formations and surreal landscapes. Hikers can wander through the Valley of the Ameln, marvel at the Painted Rocks, and soak in the tranquility of this remote mountain paradise.',
//       },
//       {
//         type: 'trail',
//         number: 10,
//         heading: 'Rif Mountains – The Gateway to Adventure',
//         image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
//         text: "Escape to the Rif Mountains, where lush forests, rolling hills, and traditional villages beckon outdoor enthusiasts. Whether you're trekking to hidden waterfalls, exploring ancient ruins, or simply enjoying the breathtaking scenery, the Rif Mountains offer endless opportunities for adventure and exploration.",
//       },
//       {
//         type: 'conclusion',
//         heading: 'Conclusion',
//         text: "Morocco's diverse trails offer a captivating blend of natural beauty, cultural heritage, and outdoor adventure. Whether you're seeking epic mountain vistas, serene desert landscapes, or vibrant village life, the country's hiking trails promise unforgettable experiences and endless discoveries. So lace up your hiking boots, pack your sense of adventure, and embark on a journey to uncover the hidden gems of Morocco's wilderness.",
//       },
//     ],
//   },

  /* ── 2. morocco-trekking-adventures ── */
  'morocco-trekking-adventures': {
    id: 11,
    title: "Morocco Trekking Adventures: Experience the Thrill of High Altitude Hikes",
    excerpt:
      "Embark on an unforgettable journey through Morocco's stunning landscapes with our guide to trekking adventures.",
    author: 'VRockclimbing',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    date: 'October 3, 2025',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1400',
    category: 'stories',
    views: '2.8K',
    likes: 367,
    comments: 62,
    tags: ['Trekking', 'Atlas Mountains', 'High Altitude', 'Adventure', 'Morocco'],
    relatedSlugs: ['hiking-in-morocco', 'from-atlas-to-sahara-unraveling-moroccos-diverse-terrain'],
    sections: [
      {
        type: 'intro',
        text: "Embark on an unforgettable journey through Morocco's stunning landscapes with our guide to trekking adventures. From the rugged trails of the Atlas Mountains to the remote valleys of the Rif Mountains, Morocco offers a myriad of opportunities for high-altitude hikes and wilderness exploration. Whether you're a seasoned trekker seeking new challenges or a novice explorer eager to discover the beauty of the mountains, Morocco's trekking adventures promise exhilarating experiences and breathtaking scenery at every turn.",
      },
      {
        type: 'section',
        heading: 'Atlas Mountains: Conquer North Africa\'s Highest Peaks',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
        text: "The Atlas Mountains, Morocco's most iconic mountain range, are a paradise for trekking enthusiasts. Stretching over 2,500 kilometers across the country, the Atlas Mountains offer a diverse range of trails catering to all levels of hikers. For those seeking a challenge, summiting Mount Toubkal, North Africa's highest peak, is a bucket-list achievement. As you ascend to the summit, you'll traverse rocky terrain, cross snowfields, and be rewarded with panoramic views stretching as far as the eye can see.",
      },
      {
        type: 'section',
        heading: "Jebel Saghro: Explore the Sahara's Hidden Gem",
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
        text: "Venture off the beaten path to the Jebel Saghro, a rugged mountain range located on the edge of the Sahara Desert. Here, towering cliffs, deep gorges, and ancient rock formations await intrepid adventurers. Trekking through the Jebel Saghro offers a unique opportunity to experience the stark beauty of the desert landscape while immersing yourself in the rich culture and history of the region.",
      },
      {
        type: 'section',
        heading: 'Rif Mountains: Discover Hidden Valleys and Lush Forests',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
        text: "In the northern reaches of Morocco lies the Rif Mountains, a lesser-known but equally enchanting destination for trekking adventures. Explore hidden valleys, traverse lush forests, and encounter traditional Berber villages as you hike through this scenic region. With its mild climate and diverse ecosystems, the Rif Mountains offer a refreshing escape from the hustle and bustle of city life, allowing you to reconnect with nature and rejuvenate your spirit.",
      },
      {
        type: 'tips',
        heading: 'Essential Tips for a Successful Trekking Adventure',
        intro: "Before embarking on your Morocco trekking adventure, it's essential to be prepared and equipped for the journey ahead. Here are a few essential tips to ensure a safe and enjoyable experience:",
        tips: [
          { label: 'Pack Light', text: 'Carry only the essentials and pack lightweight, breathable clothing suitable for varying weather conditions.' },
          { label: 'Stay Hydrated', text: 'Bring an ample supply of water and stay hydrated throughout your trek, especially in hot and arid environments.' },
          { label: 'Respect the Environment', text: "Leave no trace and respect the natural beauty of Morocco's wilderness areas by following Leave No Trace principles." },
          { label: 'Plan Ahead', text: 'Research your route, check weather forecasts, and inform someone of your itinerary before setting out on your trek.' },
          { label: 'Listen to Your Body', text: 'Take breaks as needed, listen to your body, and know your limits to prevent overexertion and injury.' },
        ],
      },
      {
        type: 'conclusion',
        heading: 'Conclusion: Embrace the Adventure',
        text: "As you lace up your hiking boots and set out to explore Morocco's trekking trails, remember to embrace the adventure and immerse yourself in the beauty of the natural world. Whether summiting high peaks, traversing rugged terrain, or simply enjoying the serenity of the mountains, each step taken brings you closer to the heart of Morocco's wilderness and the thrill of high-altitude hiking. So pack your sense of adventure, gather your courage, and embark on a trekking adventure of a lifetime in the captivating landscapes of Morocco.",
      },
    ],
  },

  /* ── 3. from-atlas-to-sahara ── */
  'from-atlas-to-sahara-unraveling-moroccos-diverse-terrain': {
    id: 12,
    title: "From Atlas to Sahara: Unraveling Morocco's Diverse Terrain",
    excerpt:
      "Morocco, a land of contrasts and natural beauty, beckons travelers from around the globe to explore its diverse terrain.",
    author: 'VRockclimbing',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    date: 'October 3, 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1400',
    category: 'guides',
    views: '2.5K',
    likes: 328,
    comments: 55,
    tags: ['Sahara', 'Atlas Mountains', 'Terrain', 'Morocco', 'Nature'],
    relatedSlugs: ['hiking-in-morocco', 'morocco-trekking-adventures'],
    sections: [
      {
        type: 'intro',
        text: "Morocco, a land of contrasts and natural beauty, beckons travelers from around the globe to explore its diverse terrain. From the towering peaks of the Atlas Mountains to the endless sands of the Sahara Desert, this North African gem offers a tapestry of landscapes waiting to be unraveled. Join us on a journey as we delve into the heart of Morocco's terrain, discovering the secrets of its mountains, valleys, and deserts.",
      },
      {
        type: 'section',
        heading: 'Atlas Mountains: Majestic Peaks and Berber Villages',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
        text: "Our adventure begins amidst the rugged grandeur of the Atlas Mountains, North Africa's most extensive mountain range. Stretching over 2,500 kilometers across Morocco, Algeria, and Tunisia, the Atlas Mountains are a haven for outdoor enthusiasts and cultural explorers alike. Here, ancient Berber villages cling to steep slopes, their terraced fields a testament to centuries of mountain living. As we trek through the High Atlas, we'll encounter breathtaking vistas, lush valleys, and snow-capped peaks, immersing ourselves in the timeless beauty of this majestic range.",
      },
      {
        type: 'section',
        heading: 'Sahara Desert: A Sea of Sand and Endless Horizons',
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
        text: "Leaving the mountains behind, we venture southward into the vast expanse of the Sahara Desert, the world's largest hot desert and one of Morocco's most iconic landscapes. Here, the rhythm of life is dictated by the shifting sands and the endless dance of sunlight and shadow. From the golden dunes of Erg Chebbi to the rugged beauty of the Draa Valley, the Sahara captivates with its otherworldly allure. As we traverse this ancient landscape, we'll discover the resilience of desert life, encounter nomadic tribes, and witness spectacular sunsets that paint the sky in hues of orange and gold.",
      },
      {
        type: 'section',
        heading: 'Oases and Valleys: Green Havens Amidst the Arid Terrain',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
        text: "Nestled amidst the arid terrain of Morocco are verdant oases and fertile valleys, hidden gems that offer respite from the desert heat. In places like the Draa Valley and the Todgha Gorge, date palms sway in the breeze, and lush vegetation thrives against the backdrop of rocky cliffs. These green havens provide a stark contrast to the surrounding desert landscape, serving as vital lifelines for both humans and wildlife alike.",
      },
      {
        type: 'conclusion',
        heading: "Conclusion: Embracing Morocco's Natural Diversity",
        text: "As our journey through Morocco's diverse terrain comes to an end, we're left with a deep appreciation for the country's natural beauty and cultural richness. From the towering peaks of the Atlas Mountains to the endless sands of the Sahara Desert, Morocco's landscape is a testament to the resilience of life in the face of harsh conditions. Whether exploring ancient villages, traversing rugged trails, or camping beneath the desert stars, each moment spent in Morocco's terrain is an opportunity to connect with nature and discover the magic of this captivating land. As travelers, let us continue to unravel the mysteries of Morocco's diverse terrain, embracing its beauty, diversity, and spirit of adventure with each step we take.",
      },
    ],
  },
};

/* slugs to related post cards */
const relatedPostsData = {
  'hiking-in-morocco': {
    title: 'Top 10 Trails for Hiking in Morocco',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600',
    date: 'October 3, 2025',
    readTime: '15 min read',
  },
  'morocco-trekking-adventures': {
    title: 'Morocco Trekking Adventures: Experience the Thrill of High Altitude Hikes',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600',
    date: 'October 3, 2025',
    readTime: '14 min read',
  },
  'from-atlas-to-sahara-unraveling-moroccos-diverse-terrain': {
    title: "From Atlas to Sahara: Unraveling Morocco's Diverse Terrain",
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=600',
    date: 'October 3, 2025',
    readTime: '13 min read',
  },
};

/* alias – same content, different URL slug */
blogPosts['top-10-trails-for-hiking-in-morocco'] = blogPosts['hiking-in-morocco'];

/* ─────────────────────────────────────────────
   Section renderers
───────────────────────────────────────────── */
function TrailSection({ section }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="shrink-0 w-10 h-10 rounded-full bg-[#E86C36] text-white font-bold flex items-center justify-center text-lg">
          {section.number}
        </span>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">{section.heading}</h2>
      </div>
      {section.image && (
        <div className="rounded-xl overflow-hidden mb-4 h-64">
          <img
            src={section.image}
            alt={section.heading}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <p className="text-gray-700 leading-relaxed text-lg">{section.text}</p>
    </div>
  );
}

function ContentSection({ section }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 border-l-4 border-[#E86C36] pl-4">
        {section.heading}
      </h2>
      {section.image && (
        <div className="rounded-xl overflow-hidden mb-4 h-64">
          <img
            src={section.image}
            alt={section.heading}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <p className="text-gray-700 leading-relaxed text-lg">{section.text}</p>
    </div>
  );
}

function TipsSection({ section }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 border-l-4 border-[#E86C36] pl-4">
        {section.heading}
      </h2>
      <p className="text-gray-700 leading-relaxed text-lg mb-6">{section.intro}</p>
      <div className="space-y-4">
        {section.tips.map((tip, i) => (
          <div key={i} className="flex gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
            <span className="shrink-0 w-8 h-8 rounded-full bg-[#E86C36] text-white font-bold flex items-center justify-center text-sm">
              {i + 1}
            </span>
            <div>
              <span className="font-semibold text-[#1A1A1A]">{tip.label}: </span>
              <span className="text-gray-700">{tip.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConclusionSection({ section }) {
  return (
    <div className="mt-12 p-8 bg-linear-to-br from-[#E86C36]/10 to-orange-50 rounded-2xl border border-orange-100">
      <h2 className="text-2xl font-bold text-[#E86C36] mb-4">{section.heading}</h2>
      <p className="text-gray-700 leading-relaxed text-lg">{section.text}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page component
───────────────────────────────────────────── */
const BlogDetailPage = ({ slug }) => {
  const router = useRouter();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <BookOpen className="h-20 w-20 text-gray-300" />
        <h1 className="text-3xl font-bold text-gray-400">Article not found</h1>
        <Button
          onClick={() => router.push('/blog')}
          className="bg-[#E86C36] hover:bg-[#d45a2a] text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative h-[65vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <button
              onClick={() => router.push('/blog')}
              className="hover:text-white transition-colors"
            >
              Blog
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white line-clamp-1">{post.title}</span>
          </div>

          <Badge className="mb-4 bg-[#E86C36] text-white capitalize">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-8 h-8 rounded-full border-2 border-white/50"
              />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{post.views} views</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back button ── */}
      <div className="bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push('/blog')}
            className="text-[#E86C36] hover:text-[#d45a2a] hover:bg-[#E86C36]/10 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </div>
      </div>

      {/* ── Main content ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro paragraph */}
        {post.sections
          .filter((s) => s.type === 'intro')
          .map((s, i) => (
            <p
              key={i}
              className="text-xl text-gray-700 leading-relaxed mb-10 font-light border-l-4 border-[#E86C36] pl-6"
            >
              {s.text}
            </p>
          ))}

        {/* Dynamic sections */}
        {post.sections
          .filter((s) => s.type !== 'intro' && s.type !== 'conclusion')
          .map((section, i) => {
            if (section.type === 'trail')
              return <TrailSection key={i} section={section} />;
            if (section.type === 'tips')
              return <TipsSection key={i} section={section} />;
            return <ContentSection key={i} section={section} />;
          })}

        {/* Conclusion */}
        {post.sections
          .filter((s) => s.type === 'conclusion')
          .map((s, i) => (
            <ConclusionSection key={i} section={s} />
          ))}

        {/* Tags */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex items-center flex-wrap gap-2">
            <Tag className="h-4 w-4 text-[#E86C36]" />
            {post.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className="hover:bg-[#E86C36] hover:text-white hover:border-[#E86C36] transition-all cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Share & reactions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-6 bg-gray-50 rounded-2xl">
          <div className="flex items-center gap-6 text-gray-600">
            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Heart className="h-5 w-5" />
              <span>{post.likes} Likes</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments} Comments</span>
            </button>
          </div>
          <button className="flex items-center gap-2 text-[#E86C36] hover:text-[#d45a2a] font-medium transition-colors">
            <Share2 className="h-5 w-5" />
            Share
          </button>
        </div>
      </article>

      {/* ── Related posts ── */}
      {post.relatedSlugs && post.relatedSlugs.length > 0 && (
        <section className="py-16 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">
              More Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {post.relatedSlugs
                .filter((s) => relatedPostsData[s])
                .map((relSlug) => {
                  const related = relatedPostsData[relSlug];
                  return (
                    <Card
                      key={relSlug}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={() => router.push(`/blog/${relSlug}`)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#E86C36] transition-colors mb-2 line-clamp-2">
                          {related.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {related.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {related.readTime}
                            </span>
                          </div>
                          <span className="text-[#E86C36] flex items-center gap-1 font-medium">
                            Read <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>

            <div className="text-center mt-10">
              <Button
                onClick={() => router.push('/blog')}
                className="bg-[#E86C36] hover:bg-[#d45a2a] text-white px-8"
              >
                <BookOpen className="mr-2 h-4 w-4" /> View All Articles
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;
