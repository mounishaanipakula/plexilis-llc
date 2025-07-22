import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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
    title: 'AI and Machine Learning',
    subtitle: 'Intelligent Solutions',
    description: 'We offer end-to-end AI and machine learning services that help businesses turn their data into smart, real-world solutions. Whether you\'re building AI from scratch or scaling existing capabilities, we support you through every phase—strategy, development, and deployment.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/src/assets/images/home-ai-ml.png',
    bgGradient: 'from-primary to-primary/80',
  },
  {
    id: 2,
    title: 'ETL and Data Integration',
    subtitle: 'Seamless Connectivity',
    description: 'Transform and integrate your data across platforms with our comprehensive ETL solutions for better decision-making and business insights.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/src/assets/images/home-etl.png',
    bgGradient: 'from-secondary to-secondary/80',
  },
  {
    id: 3,
    title: 'Big Data Solutions',
    subtitle: 'Scalable Analytics',
    description: 'Harness the power of big data with our scalable solutions designed to process, analyze, and extract valuable insights from massive datasets.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/src/assets/images/home-bigdata.png',
    bgGradient: 'from-accent to-accent/80',
  },
  {
    id: 4,
    title: 'UI and UX',
    subtitle: 'User-Centered Design',
    description: 'Create exceptional user experiences with our UI/UX design services that combine aesthetics with functionality for maximum user engagement.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/src/assets/images/home-ui-ux.png',
    bgGradient: 'from-primary to-primary/80',
  },
  {
    id: 5,
    title: 'Data and Technology Migration Services',
    subtitle: 'Seamless Transitions',
    description: 'Migrate your data and technology infrastructure seamlessly with our comprehensive migration services that ensure minimal downtime and maximum efficiency.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/src/assets/images/home-data-tech.png',
    bgGradient: 'from-secondary to-secondary/80',
  },
  {
    id: 6,
    title: 'ERP Services',
    subtitle: 'Enterprise Solutions',
    description: 'Transform your business operations with our comprehensive ERP services that integrate all your business processes into a unified, efficient system.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/src/assets/images/home-erp.png',
    bgGradient: 'from-primary to-primary/80',
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
      <div className="mx-auto h-full bg-primary relative">
        <div className="flex flex-col md:flex-row h-full relative">
          
          {/* Left Half - Content Area */}
          <div className="w-full md:w-4/9 flex flex-col text-white py-16 md:py-8 relative z-20 px-6 md:px-8 lg:px-12">
            {/* Top Content Area - Variable Height */}
            <div className="flex-1 flex flex-col justify-center min-h-0">
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={`title-${currentItem.id}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  >
                    {currentItem.title}
                  </motion.h1>
                </AnimatePresence>
                
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={`description-${currentItem.id}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                    className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed text-center mx-auto"
                  >
                    {currentItem.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Fixed Bottom Section */}
            <div className="mt-auto space-y-6 flex-shrink-0">
              {/* Read More Button - Fixed Position */}
              <div>
                <a
                  href={currentItem.ctaLink}
                  className="bg-secondary text-white pl-6 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-3"
                >
                  <span>Read More</span>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Section Tabs Navigation - Fixed Position */}
              <div>
                <div className="flex justify-between items-center gap-6">
                  {/* Current Item (Active) */}
                  <div className="flex-1 text-left">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={`current-${currentItem.id}`}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-sm md:text-base font-bold text-secondary whitespace-nowrap block"
                      >
                        {bannerItems[currentIndex].title}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Next Item */}
                  <button
                    onClick={() => setCurrentIndex(currentIndex < bannerItems.length - 1 ? currentIndex + 1 : 0)}
                    className="flex-1 text-right cursor-pointer"
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`next-${currentIndex < bannerItems.length - 1 ? currentIndex + 1 : 0}`}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                        className="text-sm md:text-base font-medium text-white/60 hover:text-white/80 transition-colors duration-300 whitespace-nowrap block"
                      >
                        {bannerItems[currentIndex < bannerItems.length - 1 ? currentIndex + 1 : 0].title}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Half - Image Area */}
          <div className="w-full md:w-5/9 h-full relative">
            {/* Main Image */}
            <div className="absolute inset-0 z-10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`image-${currentItem.id}`}
                  src={currentItem.image}
                  alt={currentItem.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
