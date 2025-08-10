import { Link } from 'react-router-dom';

const AboutServices = () => {
  return (
    <>
      {/* About Plexilis Content Section */}
      <section className="py-14 bg-white">
        <div className="px-6 md:px-8 lg:px-12 mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[36px] font-bold leading-[180%] tracking-[0%] text-center mb-4" style={{ fontFamily: 'Inter' }}>
              About <span className="text-secondary">Plexilis</span>
            </h2>
            <div className="w-48 h-0.5 bg-secondary mx-auto mb-8"></div>
            <p className="text-neutral-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal leading-[180%] tracking-[0%] text-center" style={{ fontFamily: 'Inter' }}>
              At Plexilis, we empower businesses to harness the true potential of their data. Our suite of services delivers 
              Intelligent Transformation by combining cutting-edge technology, deep industry expertise, and innovative 
              solutions tailored to meet your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-neutral-50">
        <div className="px-6 md:px-8 lg:px-12 mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Service 1 - AI And Machine Learning */}
            <div className="bg-white hover:bg-cyan-50 border border-neutral-200 hover:border-cyan-300 shadow-sm hover:shadow-md rounded-[20px] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col w-full h-full gap-3 sm:gap-4 md:gap-5 xl:gap-[19px] transition-all duration-300 ease-in-out cursor-pointer" style={{ opacity: 1 }}>
              <div className="flex-1">
                <div className="w-14 h-14  rounded-full flex items-center justify-center">
                  <img 
                    src="/assets/icons/au-icon-1.png" 
                    alt="AI And Machine Learning"
                    className="w-14 h-14"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-medium text-primary capitalize align-middle tracking-[0%] text-left mt-3 mb-2" style={{ fontFamily: 'Inter', lineHeight: '36px' }}>AI And Machine Learning</h3>
                <p className="text-neutral-600 text-sm sm:text-base md:text-base lg:text-base xl:text-[17px] font-normal text-left align-middle tracking-[0%]" style={{ fontFamily: 'Inter', lineHeight: '32.3px' }}>
                  We offer end-to-end AI and machine learning services that help businesses turn 
                  data into actionable insights quickly. Whether you're looking to learn a effect of 
                  solving existing capabilities.
                </p>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/it-solutions?tab=ai-ml"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 2 - ETL And Data Integration */}
            <div className="bg-white hover:bg-cyan-50 border border-neutral-200 hover:border-cyan-300 shadow-sm hover:shadow-md rounded-[20px] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col w-full h-full gap-3 sm:gap-4 md:gap-5 xl:gap-[19px] transition-all duration-300 ease-in-out cursor-pointer" style={{ opacity: 1 }}>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <img 
                    src="/assets/icons/au-icon-1.png" 
                    alt="ETL And Data Integration"
                    className="w-14 h-14"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-medium text-primary capitalize align-middle tracking-[0%] text-left mt-3 mb-2" style={{ fontFamily: 'Inter', lineHeight: '36px' }}>ETL And Data Integration</h3>
                <p className="text-neutral-600 text-sm sm:text-base md:text-base lg:text-base xl:text-[17px] font-normal text-left align-middle tracking-[0%]" style={{ fontFamily: 'Inter', lineHeight: '32.3px' }}>
                  Our ETL and Data Integration services are designed to seamlessly connect, transform, 
                  and unify data from diverse sources, ensuring your business operations are powered by 
                  ready managed to fuel your business.
                </p>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/it-solutions?tab=etl-data"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 3 - Big Data Solutions */}
            <div className="bg-white hover:bg-cyan-50 border border-neutral-200 hover:border-cyan-300 shadow-sm hover:shadow-md rounded-[20px] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col w-full h-full gap-3 sm:gap-4 md:gap-5 xl:gap-[19px] transition-all duration-300 ease-in-out cursor-pointer" style={{ opacity: 1 }}>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <img 
                    src="/assets/icons/au-icon-1.png" 
                    alt="Big Data Solutions"
                    className="w-14 h-14"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-medium text-primary capitalize align-middle tracking-[0%] text-left mt-3 mb-2" style={{ fontFamily: 'Inter', lineHeight: '36px' }}>Big Data Solutions</h3>
                <p className="text-neutral-600 text-sm sm:text-base md:text-base lg:text-base xl:text-[17px] font-normal text-left align-middle tracking-[0%]" style={{ fontFamily: 'Inter', lineHeight: '32.3px' }}>
                  With years of experience and deep expertise in the IT industry, we specialize in 
                  delivering cutting-edge Big Data solutions that enable organizations to harness data. 
                  Our team of certified smart engineers.
                </p>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/it-solutions?tab=big-data"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 4 - UI And UX */}
            <div className="bg-white hover:bg-cyan-50 border border-neutral-200 hover:border-cyan-300 shadow-sm hover:shadow-md rounded-[20px] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col w-full h-full gap-3 sm:gap-4 md:gap-5 xl:gap-[19px] transition-all duration-300 ease-in-out cursor-pointer" style={{ opacity: 1 }}>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <img 
                    src="/assets/icons/au-icon-1.png" 
                    alt="UI And UX"
                    className="w-14 h-14"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-medium text-primary capitalize align-middle tracking-[0%] text-left mt-3 mb-2" style={{ fontFamily: 'Inter', lineHeight: '36px' }}>UI And UX</h3>
                <p className="text-neutral-600 text-sm sm:text-base md:text-base lg:text-base xl:text-[17px] font-normal text-left align-middle tracking-[0%]" style={{ fontFamily: 'Inter', lineHeight: '32.3px' }}>
                  Our UI and UX services focus on creating intuitive, engaging, and high-performance 
                  digital experiences across web and mobile platforms. From user research and 
                  wireframing to design execution.
                </p>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/it-solutions?tab=ui-ux"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 5 - Data And Technology Migration */}
            <div className="bg-white hover:bg-cyan-50 border border-neutral-200 hover:border-cyan-300 shadow-sm hover:shadow-md rounded-[20px] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col w-full h-full gap-3 sm:gap-4 md:gap-5 xl:gap-[19px] transition-all duration-300 ease-in-out cursor-pointer" style={{ opacity: 1 }}>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <img 
                    src="/assets/icons/au-icon-1.png" 
                    alt="Data And Technology Migration"
                    className="w-14 h-14"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-medium text-primary capitalize align-middle tracking-[0%] text-left mt-3 mb-2" style={{ fontFamily: 'Inter', lineHeight: '36px' }}>Data And Technology Migration</h3>
                <p className="text-neutral-600 text-sm sm:text-base md:text-base lg:text-base xl:text-[17px] font-normal text-left align-middle tracking-[0%]" style={{ fontFamily: 'Inter', lineHeight: '32.3px' }}>
                  Our Data and Technology Migration services help businesses seamlessly transition 
                  from legacy systems to modern, scalable platforms without disruption or data loss.
                </p>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/it-solutions?tab=data-tech"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 6 - ERP Services */}
            <div className="bg-white hover:bg-cyan-50 border border-neutral-200 hover:border-cyan-300 shadow-sm hover:shadow-md rounded-[20px] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col w-full h-full gap-3 sm:gap-4 md:gap-5 xl:gap-[19px] transition-all duration-300 ease-in-out cursor-pointer" style={{ opacity: 1 }}>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <img 
                    src="/assets/icons/au-icon-1.png" 
                    alt="ERP Services"
                    className="w-14 h-14"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-medium text-primary capitalize align-middle tracking-[0%] text-left mt-3 mb-2" style={{ fontFamily: 'Inter', lineHeight: '36px' }}>ERP Services</h3>
                <p className="text-neutral-600 text-sm sm:text-base md:text-base lg:text-base xl:text-[17px] font-normal text-left align-middle tracking-[0%]" style={{ fontFamily: 'Inter', lineHeight: '32.3px' }}>
                  Our ERP services are designed to help organizations streamline operations, 
                  improve visibility, and drive efficiency across business functions. We offer end-to-
                  end consulting, implementation.
                </p>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/it-solutions?tab=erp"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutServices;