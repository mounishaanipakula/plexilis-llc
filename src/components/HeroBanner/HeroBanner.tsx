import { useState, useEffect, useRef } from 'react';
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
    image: '/assets/images/ai_ml.png',
    bgGradient: 'from-primary to-primary/80',
  },
  {
    id: 2,
    title: 'ETL and Data Integration',
    subtitle: 'Seamless Connectivity',
    description: 'Transform and integrate your data across platforms with our comprehensive ETL solutions for better decision-making and business insights.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/assets/images/etl_and_di.png',
    bgGradient: 'from-secondary to-secondary/80',
  },
  {
    id: 3,
    title: 'Big Data Solutions',
    subtitle: 'Scalable Analytics',
    description: 'Harness the power of big data with our scalable solutions designed to process, analyze, and extract valuable insights from massive datasets.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/assets/images/big_data.png',
    bgGradient: 'from-accent to-accent/80',
  },
  {
    id: 4,
    title: 'UI and UX',
    subtitle: 'User-Centered Design',
    description: 'Create exceptional user experiences with our UI/UX design services that combine aesthetics with functionality for maximum user engagement.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/assets/images/ui_ux.png',
    bgGradient: 'from-primary to-primary/80',
  },
  {
    id: 5,
    title: 'Data and Technology Migration Services',
    subtitle: 'Seamless Transitions',
    description: 'Migrate your data and technology infrastructure seamlessly with our comprehensive migration services that ensure minimal downtime and maximum efficiency.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/assets/images/data_and_tech.png',
    bgGradient: 'from-secondary to-secondary/80',
  },
  {
    id: 6,
    title: 'ERP Services',
    subtitle: 'Enterprise Solutions',
    description: 'Transform your business operations with our comprehensive ERP services that integrate all your business processes into a unified, efficient system.',
    ctaText: 'Learn More',
    ctaLink: '/it-solutions',
    image: '/assets/images/erp_services.png',
    bgGradient: 'from-primary to-primary/80',
  },
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === bannerItems.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to active tab
  useEffect(() => {
    if (navRef.current) {
      const container = navRef.current;
      const activeButton = container.children[currentIndex] as HTMLElement;
      if (activeButton) {
        // Calculate horizontal scroll position to center the active button
        const containerWidth = container.offsetWidth;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;
        const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        
        // Smooth scroll only horizontally within the container
        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  const currentItem = bannerItems[currentIndex];

  return (
    <section className="relative overflow-hidden pt-[70px] sm:pt-20">
      <div className="mx-auto h-[620px] md:h-[650px] lg:h-[700px] xl:h-[705px] bg-primary relative max-w-full">
        
        {/* Mobile Layout - Vertical Stack */}
        <div className="flex flex-col h-full relative md:hidden text-white">
          {/* Mobile Image at Top - Full Width & Height of Top Half */}
          <div className="h-1/2 w-full relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={`mobile-image-${currentItem.id}`}
                src={currentItem.image}
                alt={currentItem.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Mobile Content - Bottom Half */}
          <div className="h-1/2 flex flex-col px-6 py-4">
            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-start pt-4 space-y-4">
              {/* Mobile Title - Left Aligned */}
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={`mobile-title-${currentItem.id}`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[100%] tracking-[0%] text-left"
                  style={{ fontFamily: 'Inter' }}
                >
                  {currentItem.title}
                </motion.h1>
              </AnimatePresence>
              
              {/* Mobile Description - Left Aligned */}
              <AnimatePresence mode="wait">
                <motion.p 
                  key={`mobile-description-${currentItem.id}`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                  className="text-[14px] font-normal text-white/90 leading-[160%] tracking-[0%] text-left"
                  style={{ fontFamily: 'Inter' }}
                >
                  {currentItem.description}
                </motion.p>
              </AnimatePresence>

              {/* Mobile Learn More Button - Left Aligned */}
              <div className="flex justify-start mt-4">
                <a
                  href={currentItem.ctaLink}
                  className="bg-secondary text-white font-normal transition-colors duration-300 inline-flex items-center rounded-full w-32 h-10 pl-3 relative"
                >
                  <span className="text-xs font-bold leading-normal tracking-tight capitalize">Learn More</span>
                  <div className="absolute right-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile Navigation Tabs - Fixed at Bottom */}
            <div className="flex-shrink-0 mt-auto">
              <div className="overflow-hidden py-2">
                <div 
                  ref={navRef} 
                  className="flex gap-4 items-center overflow-x-auto pb-2 px-2" 
                  style={{
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none'
                  } as React.CSSProperties}
                >
                  {bannerItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`text-xs font-normal leading-tight tracking-normal transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                        index === currentIndex 
                          ? 'text-secondary' 
                          : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side (Hidden on Mobile) */}
        <div className="hidden md:flex flex-row h-full relative">
          
          {/* Left Half - Content Area */}
          <div className="w-full md:w-4/9 flex flex-col text-white py-8 sm:py-12 relative z-20 pl-6 pr-4 sm:pl-8 sm:pr-6 md:pl-12 md:pr-8 lg:pl-20 lg:pr-12 xl:pl-32 xl:pr-16">
            {/* Top Content Area - Variable Height */}
            <div className="flex-1 flex flex-col justify-center min-h-0">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={`title-${currentItem.id}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[65px] font-semibold leading-tight sm:leading-none text-left"
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
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[24px] font-normal text-white/90 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed text-left"
                  >
                    {currentItem.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Fixed Bottom Section */}
            <div className="mt-auto space-y-3 sm:space-y-4 md:space-y-5 flex-shrink-0">
              {/* Learn More Button - Responsive */}
              <div className="flex justify-start">
                <a
                  href={currentItem.ctaLink}
                  className="bg-secondary text-white font-normal transition-colors duration-300 inline-flex items-center rounded-full w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 lg:w-44 lg:h-14 xl:w-48 xl:h-[56px] 2xl:w-[200px] 2xl:h-[58px] pl-3 sm:pl-4 md:pl-4 lg:pl-5 relative"
                >
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18.72px] font-bold leading-normal tracking-tight capitalize">Learn More</span>
                  <div className="absolute right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-[56px] xl:h-[56px] 2xl:w-[58px] 2xl:h-[58px] bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Section Tabs Navigation - Horizontal Scroll */}
              <div className="overflow-hidden py-4 sm:py-6">
                <div 
                  ref={navRef} 
                  className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center overflow-x-auto pb-2" 
                  style={{
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none'
                  } as React.CSSProperties}
                >
                  {bannerItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] font-normal leading-tight tracking-normal transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                        index === currentIndex 
                          ? 'text-secondary' 
                          : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Half - Image Area */}
          <div className="w-full md:w-5/9 h-full relative">
            {/* Main Image */}
            <div className="absolute inset-0 z-10 left-10">
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
            
            {/* Gradient Overlay - Left Side */}
            <div className="absolute inset-0 z-20">
              <img
                src="/assets/images/home_gradiant.png"
                alt="Gradient Overlay"
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroBanner;
