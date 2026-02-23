import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import PropertyTypes from '@/components/home/PropertyTypes';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import AboutAgent from '@/components/home/AboutAgent';
import TopLocations from '@/components/home/TopLocations';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <PropertyTypes />
      <FeaturedProperties />
      <AboutAgent />
      <TopLocations />
      <Testimonials />
      <CTASection />
    </>
  );
}
