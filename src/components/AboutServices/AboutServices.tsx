const AboutServices = () => {
  return (
    <>
      {/* About Plexilis Content Section */}
      <section className="py-14 bg-white">
        <div className="px-6 md:px-8 lg:px-12 mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-secondary">Plexilis</span>
            </h2>
            <div className="w-48 h-0.5 bg-secondary mx-auto mb-8"></div>
            <p className="text-neutral-600 text-lg leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Service 1 - AI And Machine Learning */}
            <div className="bg-white border border-neutral-200 shadow-sm rounded-xl px-5 py-8 flex flex-col">
              <div className="flex-1 mb-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <img 
                    src="/src/assets/icons/au-icon-1.png" 
                    alt="AI And Machine Learning"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">AI And Machine Learning</h3>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  We offer end-to-end AI and machine learning services that help businesses turn 
                  data into actionable insights quickly. Whether you're looking to learn a effect of 
                  solving existing capabilities.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Service 2 - ETL And Data Integration */}
            <div className="bg-white border border-neutral-200 shadow-sm rounded-xl px-5 py-8 flex flex-col">
              <div className="flex-1 mb-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <img 
                    src="/src/assets/icons/au-icon-1.png" 
                    alt="ETL And Data Integration"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">ETL And Data Integration</h3>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  Our ETL and Data Integration services are designed to seamlessly connect, transform, 
                  and unify data from diverse sources, ensuring your business operations are powered by 
                  ready managed to fuel your business.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Service 3 - Big Data Solutions */}
            <div className="bg-white border border-neutral-200 shadow-sm rounded-xl px-5 py-8 flex flex-col">
              <div className="flex-1 mb-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <img 
                    src="/src/assets/icons/au-icon-1.png" 
                    alt="Big Data Solutions"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">Big Data Solutions</h3>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  With years of experience and deep expertise in the IT industry, we specialize in 
                  delivering cutting-edge Big Data solutions that enable organizations to harness data. 
                  Our team of certified smart engineers.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Service 4 - UI And UX */}
            <div className="bg-white border border-neutral-200 shadow-sm rounded-xl px-5 py-8 flex flex-col">
              <div className="flex-1 mb-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <img 
                    src="/src/assets/icons/au-icon-1.png" 
                    alt="UI And UX"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">UI And UX</h3>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  Our UI and UX services focus on creating intuitive, engaging, and high-performance 
                  digital experiences across web and mobile platforms. From user research and 
                  wireframing to design execution.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Service 5 - Data And Technology Migration */}
            <div className="bg-white border border-neutral-200 shadow-sm rounded-xl px-5 py-8 flex flex-col">
              <div className="flex-1 mb-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <img 
                    src="/src/assets/icons/au-icon-1.png" 
                    alt="Data And Technology Migration"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">Data And Technology Migration</h3>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  Our Data and Technology Migration services help businesses seamlessly transition 
                  from legacy systems to modern, scalable platforms without disruption or data loss.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Service 6 - ERP Services */}
            <div className="bg-white border border-neutral-200 shadow-sm rounded-xl px-5 py-8 flex flex-col">
              <div className="flex-1 mb-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <img 
                    src="/src/assets/icons/au-icon-1.png" 
                    alt="ERP Services"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">ERP Services</h3>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  Our ERP services are designed to help organizations streamline operations, 
                  improve visibility, and drive efficiency across business functions. We offer end-to-
                  end consulting, implementation.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="bg-secondary text-white pl-4 rounded-full font-normal transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>Read More</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutServices;