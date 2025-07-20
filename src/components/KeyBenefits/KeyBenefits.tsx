const KeyBenefits = () => {
  return (
    <>
      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-blue-900 relative overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-transparent"></div>
        </div>
        
        <div className="px-4 mx-auto relative z-10">
          <div className="text-center text-white">
            <p className="text-secondary font-medium text-lg mb-6">Ready To Transform Your Business?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Contact us today to learn how our Migration Accelerators can help your organization.
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

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Key <span className="text-secondary">Benefits</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits List */}
            <div className="space-y-4 md:space-y-6 mb-8 lg:mb-0">
              {/* Benefit 1 */}
              <div className="flex items-center space-x-3 md:space-x-4 bg-secondary/10 rounded-lg p-3 md:p-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full flex-shrink-0"></div>
                <p className="text-neutral-700 font-medium text-base md:text-lg">Accelerated migration timelines</p>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center space-x-3 md:space-x-4 bg-secondary/10 rounded-lg p-3 md:p-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full flex-shrink-0"></div>
                <p className="text-neutral-700 font-medium text-base md:text-lg">Reduced risk and data loss</p>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-center space-x-3 md:space-x-4 bg-secondary/10 rounded-lg p-3 md:p-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full flex-shrink-0"></div>
                <p className="text-neutral-700 font-medium text-base md:text-lg">Minimal business disruption</p>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-center space-x-3 md:space-x-4 bg-secondary/10 rounded-lg p-3 md:p-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full flex-shrink-0"></div>
                <p className="text-neutral-700 font-medium text-base md:text-lg">Improved performance and scalability</p>
              </div>

              {/* Benefit 5 */}
              <div className="flex items-center space-x-3 md:space-x-4 bg-secondary/10 rounded-lg p-3 md:p-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full flex-shrink-0"></div>
                <p className="text-neutral-700 font-medium text-base md:text-lg">Enhanced data integrity</p>
              </div>

              {/* Benefit 6 */}
              <div className="flex items-center space-x-3 md:space-x-4 bg-secondary/10 rounded-lg p-3 md:p-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full flex-shrink-0"></div>
                <p className="text-neutral-700 font-medium text-base md:text-lg">Lower operational costs</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm md:max-w-lg rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl">
                <img 
                  src="/src/assets/images/technology-experts-2.png" 
                  alt="Team Collaboration and Data Analysis"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyBenefits;