'use client';

import {
  Mountain, Tent, Flame, Users, Award, TrendingUp, AlertCircle, ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';
import rock4 from '../../public/assets/rock4.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-shell h-[78svh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: rock4 ? `url(${rock4.src})` : 'none' }}
      >
        <div className="hero-overlay" />
      </div>

      <div className="site-container relative z-10">
        <div className="max-w-3xl">
          <div className="hero-badge">
            <Mountain className="h-4 w-4" />
            {t.hero.badge}
          </div>
          <h1 className="hero-title">
            {t.hero.title} <span className="text-[#F28A4C]">{t.hero.titleHighlight}</span>
          </h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="mt-6 inline-flex max-w-full items-center rounded-full border border-white/20 bg-white/15 px-5 py-3 text-sm font-medium text-white backdrop-blur-md">
            <AlertCircle className="mr-2 h-5 w-5 shrink-0" />
            <span>{t.activities.bookingNote}</span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-full px-8 py-6 text-base font-bold sm:w-auto">
              <Link href="/activities">
                {t.hero.bookButton}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-white/40 bg-white/10 px-8 py-6 text-base font-bold text-white hover:bg-white hover:text-[#1f211b] sm:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutHadiSection = () => {
  const { t } = useLanguage();
  const services = [
    { icon: Tent, title: t.landingPage.tentsRent },
    { icon: Mountain, title: t.landingPage.activities },
    { icon: Flame, title: t.landingPage.firewoods },
  ];

  return (
    <section className="site-section bg-white" id="about">
      <div className="site-container">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="space-y-6">
            <div>
              <span className="site-eyebrow">Local guide</span>
              <h2 className="site-heading">{t.landingPage.aboutHadi}</h2>
            </div>
            <p className="site-copy">{t.landingPage.hadiDesc1}</p>
            <p className="site-copy">{t.landingPage.hadiDesc2}</p>

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-lg border border-[#e8dece] bg-[#fbf8f2] p-4">
                  <div className="site-icon-tile mb-3">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold text-[#2c2a24]">{service.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-[0_22px_50px_rgb(34_28_20/0.16)]">
              <img
                src="/assets/taljmart.jpg"
                alt="Mountain climbing near Todra Gorge"
                className="h-[420px] w-full object-cover md:h-[540px]"
              />
            </div>
            <div className="absolute bottom-5 left-5 max-w-[260px] rounded-lg bg-[#171711]/90 p-5 text-white shadow-2xl backdrop-blur">
              <Mountain className="mb-3 h-8 w-8 text-[#F28A4C]" />
              <h3 className="text-xl font-black">{t.landingPage.climbing}</h3>
              <p className="mt-1 text-sm text-white/70">Mountain Seekers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    { title: t.landingPage.climbing, image: '/assets/rock1.jpg' },
    { title: t.landingPage.trekking, image: '/assets/day-hike-1.jpg' },
    { title: t.landingPage.biking, image: '/assets/rock2.jpg' },
    { title: t.landingPage.donkeyRiding, image: '/assets/taljmart.jpg' },
    { title: t.landingPage.camping, image: '/assets/day-hike-4.jpg' },
    { title: t.landingPage.culturalTours, image: '/assets/VRCM copy.jpg' },
    { title: t.landingPage.rockScrambling, image: '/assets/rock7.jpg' },
  ];

  return (
    <section className="site-section site-section-soft" id="services">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="site-eyebrow">Experiences</span>
          <h2 className="site-heading">{t.landingPage.services}</h2>
          <p className="site-copy mt-4">{t.landingPage.servicesDesc}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href="/activities" className="group">
              <Card className="site-card overflow-hidden p-0">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xl font-black text-white">{service.title}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: TrendingUp, value: '15+', label: t.about.stats.experience },
    { icon: Users, value: '1000+', label: t.about.stats.climbers },
    { icon: Award, value: '100%', label: t.about.stats.safety },
    { icon: Mountain, value: '400+', label: t.about.stats.routes },
  ];

  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <Card className="site-card mb-12 overflow-hidden p-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
              <img src="/assets/hadi.jpg" alt="Expert guide" className="h-72 w-full object-cover md:h-full" />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="site-eyebrow">VRCM team</span>
                <h3 className="site-heading">{t.landingPage.experts}</h3>
                <p className="site-copy mt-4 mb-7">{t.landingPage.expertsDesc}</p>
                <Button asChild size="lg" className="w-full rounded-full px-8 py-6 text-base font-bold sm:w-fit">
                  <Link href="/contact">
                    {t.landingPage.requestQuote}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="site-card text-center">
              <CardContent className="p-6">
                <div className="site-icon-tile mx-auto mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <h4 className="text-3xl font-black text-[#1f211b]">{stat.value}</h4>
                <p className="mt-2 text-sm text-[#626357]">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  const { t } = useLanguage();
  const reviewImages = [
    { src: '/assets/vrcm/gareth-review.png', alt: 'Gareth review' },
    { src: '/assets/vrcm/alysa-review.png', alt: 'Alysa review' },
    { src: '/assets/vrcm/josh-review.png', alt: 'Josh review' },
    { src: '/assets/vrcm/leanne-review-hike.png', alt: 'Leanne hiking review' },
    { src: '/assets/vrcm/martin-climbing.png', alt: 'Martin climbing review' },
    { src: '/assets/vrcm/mingzhu-review.png', alt: 'Mingzhu review' },
    { src: '/assets/vrcm/nynke-review-climb.png', alt: 'Nynke climbing review' },
    { src: '/assets/vrcm/vince-review.png', alt: 'Vince review' },
  ];

  return (
    <section className="site-section site-section-soft">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="site-eyebrow">Reviews</span>
          <h2 className="site-heading">{t.landingPage.reviews}</h2>
          <p className="site-copy mt-4">{t.landingPage.reviewsDesc}</p>
        </div>

        <div className="mx-auto max-w-5xl px-10">
          <Carousel className="w-full">
            <CarouselContent>
              {reviewImages.map((review) => (
                <CarouselItem key={review.src} className="lg:basis-1/2">
                  <Card className="site-card h-full overflow-hidden p-0">
                    <CardContent className="p-2">
                      <img
                        src={review.src}
                        alt={review.alt}
                        className="h-auto w-full rounded-md object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutHadiSection />
      <ServicesSection />
      <StatsSection />
      <ReviewsSection />
    </div>
  );
};

export default LandingPage;
