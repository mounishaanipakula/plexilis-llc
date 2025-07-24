import { Link } from 'react-router-dom';

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
            
            <Link to="/contact" className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-full font-medium text-lg transition-colors duration-300 inline-flex items-center space-x-2">
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
            <div className="w-48 h-0.5 bg-secondary mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center max-w-4xl mx-auto">
            {/* Left Side - Benefits List */}
            <div className="space-y-4 mb-8 lg:mb-0 flex flex-col items-center max-w-sm mx-auto">
              <div className="bg-white border border-secondary rounded-xl px-2 py-2 shadow-sm w-full">
                <p className="text-neutral-700 font-medium text-left">Accelerated migration timelines</p>
              </div>
              <div className="bg-white border border-secondary rounded-xl px-2 py-2 shadow-sm w-full">
                <p className="text-neutral-700 font-medium text-left">Reduced risk and data loss</p>
              </div>
              <div className="bg-white border border-secondary rounded-xl px-2 py-2 shadow-sm w-full">
                <p className="text-neutral-700 font-medium text-left">Minimal business disruption</p>
              </div>
              <div className="bg-white border border-secondary rounded-xl px-2 py-2 shadow-sm w-full">
                <p className="text-neutral-700 font-medium text-left">Improved performance and scalability</p>
              </div>
              <div className="bg-white border border-secondary rounded-xl px-2 py-2 shadow-sm w-full">
                <p className="text-neutral-700 font-medium text-left">Enhanced data integrity</p>
              </div>
              <div className="bg-white border border-secondary rounded-xl px-2 py-2 shadow-sm w-full">
                <p className="text-neutral-700 font-medium text-left">Lower operational costs</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md mx-auto">
                <img 
                  src="/assets/images/key-benefits.png" 
                  alt="Team meeting discussing migration benefits"
                  className="w-full h-80 object-cover rounded-2xl"
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