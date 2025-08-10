import OurExpertise from '../OurExpertise/OurExpertise';

import { Link } from 'react-router-dom';

const TechnologyExpertise = () => {
  return (
    <>
      {/* Technology Experts Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-6 md:px-8 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="w-full max-w-lg mx-auto">
              <img 
                src="/assets/images/technology-experts.png" 
                alt="Technology Experts Team with Expert Team Badge"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[45px] font-bold capitalize align-middle tracking-[0%] text-left mb-6" style={{ fontFamily: 'Inter', lineHeight: '58.5px' }}>
                Technology <span className="text-secondary">Experts</span>
              </h2>
              
              <p className="text-neutral-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal align-middle tracking-[0%] text-left" style={{ fontFamily: 'Inter', lineHeight: '40px' }}>
                As experts in open-source data platforms, we harness technologies like Apache NiFi, Apache Flink, Kafka, and 
                Spark to build scalable, flexible solutions without vendor lock-in. Whether you're designing real-time data pipelines, 
                stream processing workflows, or complex event-driven systems, our team brings deep technical skill with 
                community-driven tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/images/about-us-contact.png" 
            alt="Contact Us Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="px-6 md:px-8 lg:px-12 mx-auto relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <p className="text-secondary font-medium text-lg mb-4">Let's Build Something Great</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Join our list of satisfied clients. Contact us to discuss your software needs!
            </h2>
            
            <Link
              to="/contact"
              className="bg-secondary text-white pl-6 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-3"
            >
              <span>Contact Us</span>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <OurExpertise />
    </>
  );
};

export default TechnologyExpertise;