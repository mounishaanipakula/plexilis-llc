import OurExpertise from '../OurExpertise/OurExpertise';

const TechnologyExpertise = () => {
  return (
    <>
      {/* Technology Experts Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
            <div className="relative h-80 md:h-96 mb-8 lg:mb-0">
              {/* Main large image - left */}
              <div className="absolute left-0 top-0 w-40 h-52 md:w-48 md:h-64 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg z-10">
                <img 
                  src="/src/assets/images/technology-experts-1.png" 
                  alt="Technology Expert Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Secondary image - center-right */}
              <div className="absolute right-0 top-6 md:top-8 w-48 h-60 md:w-56 md:h-72 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl z-20">
                <img 
                  src="/src/assets/images/technology-experts-2.png" 
                  alt="Technology Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Expert Team Badge */}
              <div className="absolute top-12 left-24 md:top-16 md:left-32 z-30 bg-white rounded-full p-3 md:p-4 shadow-lg border-3 md:border-4 border-secondary">
                <div className="text-center">
                  <p className="text-secondary font-bold text-xs md:text-sm">Expert</p>
                  <p className="text-neutral-700 font-medium text-xs md:text-sm">Team</p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Technology <span className="text-secondary">Experts</span>
              </h2>
              
              <p className="text-neutral-600 text-lg leading-relaxed">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-blue-900 relative overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-transparent"></div>
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center text-white">
            <p className="text-secondary font-medium text-lg mb-4">Let's Build Something Great</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl mx-auto">
              Join our list of satisfied clients. Contact us to discuss your software needs!
            </h2>
            
            <button className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-full font-medium text-lg transition-colors duration-300 inline-flex items-center space-x-2">
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <OurExpertise />
    </>
  );
};

export default TechnologyExpertise;