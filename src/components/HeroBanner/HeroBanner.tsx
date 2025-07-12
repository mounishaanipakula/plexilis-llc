import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import aiMlImage from '@/assets/images/ai_and_ml.svg';


interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  bgGradient: string;
}

const bannerItems: BannerItem[] = [
  {
    id: 1,
    title: 'Innovative Technology Solutions',
    subtitle: 'Transforming Businesses',
    description: 'Harness the power of cutting-edge technology to drive your business forward with our tailored solutions.',
    ctaText: 'Explore Our Services',
    ctaLink: '/services',
    image: aiMlImage,
    bgGradient: 'from-primary to-primary/80',
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Solutions',
    description: 'Leverage artificial intelligence to automate processes and gain valuable insights from your data.',
    ctaText: 'Discover AI Solutions',
    ctaLink: '/ai-solutions',
    image: aiMlImage,
    bgGradient: 'from-secondary to-secondary/80',
  },
  {
    id: 3,
    title: 'Data Integration',
    subtitle: 'Seamless Connectivity',
    description: 'Integrate and transform your data across platforms for better decision-making and insights.',
    ctaText: 'Learn More',
    ctaLink: '/data-integration',
    image: aiMlImage,
    bgGradient: 'from-accent to-accent/80',
  },
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === bannerItems.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = bannerItems[currentIndex];

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
          <div className="container mx-auto h-full px-4 bg-primary">
            <div className="flex flex-col md:flex-row h-full items-center">
              {/* Left Content */}
              <div className="w-full md:w-1/2 space-y-6 text-white py-16 md:py-0">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  {currentItem.title}
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-white/90 max-w-lg"
                >
                  {currentItem.description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Button
                    as="a"
                    href={currentItem.ctaLink}
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-3"
                  >
                    {currentItem.ctaText}
                  </Button>
                </motion.div>
              </div>

              {/* Right Image */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 h-full flex items-center justify-center relative"
              >
                <div className="relative w-full h-full max-w-2xl">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {bannerItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
      </AnimatePresence>
    </section>
  );
};

export default HeroBanner;
