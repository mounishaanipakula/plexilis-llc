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
    <section className="relative h-[550px] md:h-[650px] overflow-hidden">
      <div className="mx-auto h-full bg-primary relative">
        <div className="flex flex-col md:flex-row h-full relative">
          
          {/* Left Half - Content Area */}
          <div className="w-full md:w-4/9 flex flex-col text-white py-16 md:py-8 relative z-20 pl-14 pr-6 md:pl-22 md:pr-8 lg:pl-32 lg:pr-12">
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
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-[65px] font-semibold leading-none text-left"
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
                    className="text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal text-white/90 max-w-lg leading-[1.6] text-left"
                  >
                    {currentItem.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Fixed Bottom Section */}
            <div className="mt-auto space-y-6 flex-shrink-0">
              {/* Learn More Button - Responsive */}
              <div className="flex justify-start">
                <a
                  href={currentItem.ctaLink}
                  className="bg-secondary text-white font-normal transition-colors duration-300 inline-flex items-center rounded-full w-48 h-14 md:w-56 md:h-16 lg:w-60 lg:h-[70px] xl:w-[250px] xl:h-[73px] pl-4 md:pl-6 relative"
                >
                  <span className="text-base md:text-lg lg:text-xl xl:text-[18.72px] font-bold leading-[72.38px] tracking-[-0.19px] capitalize">Learn More</span>
                  <div className="absolute right-0 w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] xl:w-[72px] xl:h-[72px] bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Section Tabs Navigation - Horizontal Scroll */}
              <div className="overflow-hidden py-6">
                <div 
                  ref={navRef} 
                  className="flex gap-4 md:gap-6 items-center overflow-x-auto pb-2" 
                  style={{
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    WebkitScrollbar: { display: 'none' }
                  }}
                >
                  {bannerItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`text-sm md:text-base lg:text-[14px] font-normal leading-[100%] tracking-[0%] transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
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
