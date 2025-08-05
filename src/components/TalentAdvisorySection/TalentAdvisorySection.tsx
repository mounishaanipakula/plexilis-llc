import OurExpertise from '../OurExpertise/OurExpertise';
import CareersSection from '../CareersSection/CareersSection';
import BlogSection from '../BlogSection/BlogSection';

const TalentAdvisorySection = () => {
  return (
    <>
      {/* Talent Advisory Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="px-4 mx-auto">
          <div className="mb-24">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[36px] font-bold leading-[180%] tracking-[0%] text-center text-primary mb-4">
                Talent <span className="text-secondary">Advisory</span>
              </h2>
              <div className="w-48 h-0.5 bg-secondary mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-[29px] font-normal leading-[180%] tracking-[0%] text-center text-neutral-600 max-w-2xl mx-auto">
                Why Choose <span className="font-semibold text-primary">Plexilis</span> Tech Advisory Services
              </p>
            </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="w-full max-w-2xl mx-auto">
              <img 
                src="/assets/images/talent-advisory.png" 
                alt="Talent Advisory Services and Solutions"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 max-w-xl">
              {/* Feature 1 - Turnaround Excellence */}
              <div className="flex items-start space-x-4">
                <img 
                  src="/assets/icons/ta-icon-1.gif" 
                  alt="Turnaround Excellence"
                  className="w-12 h-12 flex-shrink-0 mt-1"
                />
                <div className="text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[25px] font-medium leading-[100%] tracking-[0%] text-primary mb-2 text-left">Turnaround Excellence</h3>
                  <p className="text-neutral-600 text-sm md:text-base xl:text-[16px] font-medium leading-[152%] tracking-[0%] text-left">
                    Stepping up with senior experts—creating impactful insights, 
                    re-baselining, and prioritizing critically evaluated projects 
                    into success stories.
                  </p>
                </div>
              </div>

              {/* Feature 2 - On-Time Design & Execution */}
              <div className="flex items-start space-x-4">
                <img 
                  src="/assets/icons/ta-icon-2.gif" 
                  alt="On-Time Design & Execution"
                  className="w-12 h-12 flex-shrink-0 mt-1"
                />
                <div className="text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[25px] font-medium leading-[100%] tracking-[0%] text-primary mb-2 text-left">On-Time Design & Execution</h3>
                  <p className="text-neutral-600 text-sm md:text-base xl:text-[16px] font-medium leading-[152%] tracking-[0%] text-left">
                    Stepping up with senior experts—creating impactful insights, 
                    re-baselining, and prioritizing critically evaluated projects 
                    into success stories.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Proactive, Personalized Approach */}
              <div className="flex items-start space-x-4">
                <img 
                  src="/assets/icons/ta-icon-3.gif" 
                  alt="Proactive, Personalized Approach"
                  className="w-12 h-12 flex-shrink-0 mt-1"
                />
                <div className="text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[25px] font-medium leading-[100%] tracking-[0%] text-primary mb-2 text-left">Proactive, Personalized Approach</h3>
                  <p className="text-neutral-600 text-sm md:text-base xl:text-[16px] font-medium leading-[152%] tracking-[0%] text-left">
                    Stepping up with senior experts—creating impactful insights, 
                    re-baselining, and prioritizing critically evaluated projects 
                    into success stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <OurExpertise />
      <CareersSection />
      <BlogSection />
    </>
  );
};

export default TalentAdvisorySection;