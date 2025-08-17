import ReadMoreButton from '../ui/ReadMoreButton';

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[36px] font-bold leading-[180%] tracking-[0%] text-center text-primary">
            Our <span className="text-secondary">Products</span>
          </h2>
          <div className="w-48 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="text-neutral-600 text-[14px] md:text-xl lg:text-2xl xl:text-[24px] font-normal leading-[180%] tracking-[0%] text-center max-w-5xl mx-auto" style={{ fontFamily: 'Inter' }}>
            Our innovative products are designed to accelerate your digital transformation journey, driving efficiency,
            scalability, and success. With advanced technology and seamless integration, we help businesses stay ahead in
            an ever-evolving digital landscape. Whether it's automation, data-driven insights.
          </p>
        </div>

        {/* Mobile Layout - Custom Structure */}
        <div className="block lg:hidden">
          {/* Mobile Header Content */}
          <div className="text-left mb-6">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-primary mb-3 leading-[36.1px] tracking-[0%] capitalize" style={{ fontFamily: 'Inter', fontWeight: 700 }}>
              Migration Accelerators
            </h3>
            <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-neutral-700 mb-4 leading-[28.39px] tracking-[0%] capitalize" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
              To Accelerate And De-Risk <span className="text-secondary">Complex Migration Projects.</span>
            </h4>
            
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[19.93px] tracking-[0%] text-neutral-600" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              To accelerate and de-risk complex migration projects, we've developed a 
              suite of proprietary tools purpose-built for seamless data and platform 
              transitions.
            </p>
          </div>

          {/* Mobile Image and Features Section */}
          <div className="flex items-start space-x-4">
            {/* Left: Image */}
            <div className="w-[130px] flex-shrink-0">
              <img 
                src="/assets/images/ma_mobile.png" 
                alt="Migration Accelerators Tools and Services"
                className="w-[130px] h-full object-contain opacity-100"
              />
            </div>

            {/* Right: Features List and Button */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Features List */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">MySQL And PostgreSQL</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Cloud Platforms</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Smooth Data Transfers</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Stream Sets To Apache NiFi</span>
                </div>
              </div>

              {/* Read More Button - Below Features */}
              <div className="flex justify-start mt-4">
                <ReadMoreButton />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full max-w-lg mx-auto">
            <img 
              src="/assets/images/migration-accelerators.png" 
              alt="Migration Accelerators Tools and Services"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 max-w-xl">
            {/* Migration Accelerators */}
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-[45px] font-bold leading-[58.5px] tracking-[0%] capitalize text-primary mb-4 text-left">
                Migration Accelerators
              </h3>
              <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium leading-[46px] tracking-[0%] capitalize text-neutral-700 mb-6 text-left">
                To Accelerate And De-Risk <span className="text-secondary">Complex Migration Projects.</span>
              </h4>
              
              <p className="text-neutral-600 text-base md:text-lg xl:text-[17px] font-normal leading-[32.3px] tracking-[0%] mb-8 text-left">
                To accelerate and de-risk complex migration projects, we've developed a 
                suite of proprietary tools purpose-built for seamless data and platform 
                transitions.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">MySQL And PostgreSQL</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Smooth Data Transfers</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Cloud Platforms</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Stream Sets To Apache NiFi</span>
                </div>
              </div>

              {/* Read More Button */}
              <ReadMoreButton />
            </div>
          </div>
        </div>

        {/* Mobile Layout - System Analyzers */}
        <div className="block lg:hidden mt-24 mb-24">
          {/* Mobile Header Content */}
          <div className="text-left mb-6">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-primary mb-3 leading-[36.1px] tracking-[0%] capitalize" style={{ fontFamily: 'Inter', fontWeight: 700 }}>
              System Analyzers
            </h3>
            <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-neutral-700 mb-4 leading-[28.39px] tracking-[0%] capitalize" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
              Our Suite Of System Analyzers Is Designed To <span className="text-secondary">Deep, Automated Insights</span>
            </h4>
            
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[19.93px] tracking-[0%] text-neutral-600" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              Our suite of system analyzers is designed to provide deep, automated 
              insights into the health, security, and performance of critical infrastructure 
              components.
            </p>
          </div>

          {/* Mobile Image and Features Section */}
          <div className="flex items-start space-x-4">
            {/* Left: Image */}
            <div className="w-[130px] flex-shrink-0">
              <img 
                src="/assets/images/sa_mobile.png" 
                alt="System Analyzers Dashboard with overlays"
                className="w-[130px] h-full object-contain opacity-100"
              />
            </div>

            {/* Right: Features List and Button */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Features List */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Linux Systems</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Evaluating Core Service</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Security Policies</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Resource Utilization</span>
                </div>
              </div>

              {/* Read More Button - Below Features */}
              <div className="flex justify-start mt-4">
                <ReadMoreButton />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - System Analyzers (Flipped Layout) (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24 mb-24">
          {/* Right Side - Content */}
          <div className="space-y-8 lg:order-2 order-2 max-w-xl">
            {/* System Analyzers */}
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-[45px] font-bold leading-[58.5px] tracking-[0%] capitalize text-primary mb-4 text-left">
                System Analyzers
              </h3>
              <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium leading-[46px] tracking-[0%] capitalize text-neutral-700 mb-6 text-left">
                Our Suite Of System Analyzers Is Designed To <span className="text-secondary">Deep, Automated Insights</span>
              </h4>
              
              <p className="text-neutral-600 text-base md:text-lg xl:text-[17px] font-normal leading-[32.3px] tracking-[0%] mb-8 text-left">
                Our suite of system analyzers is designed to provide deep, automated 
                insights into the health, security, and performance of critical infrastructure 
                components.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Linux Systems</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Evaluating Core Service</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Security Policies</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Resource Utilization</span>
                </div>
              </div>

              {/* Read More Button */}
              <ReadMoreButton />
            </div>
          </div>

          {/* Left Side - Image */}
          <div className="lg:order-1 order-1">
            <div className="w-full max-w-lg mx-auto">
              <img 
                src="/assets/images/system-analyzers.png" 
                alt="System Analyzers Dashboard with overlays"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Custom Deep Research */}
        <div className="block lg:hidden">
          {/* Mobile Header Content */}
          <div className="text-left mb-6">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-primary mb-3 leading-[36.1px] tracking-[0%] capitalize" style={{ fontFamily: 'Inter', fontWeight: 700 }}>
              Custom Deep Research
            </h3>
            <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-neutral-700 mb-4 leading-[28.39px] tracking-[0%] capitalize" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
              Specialize In Building Custom, <span className="text-secondary">Multi-Step Agentic Workflows</span>
            </h4>
            
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[19.93px] tracking-[0%] text-neutral-600" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              We specialize in building custom, multi-step agentic workflows that simulate 
              deep research within enterprise ecosystems. Leveraging advanced AI agents 
              using various open-source frameworks
            </p>
          </div>

          {/* Mobile Image and Features Section */}
          <div className="flex items-start space-x-4">
            {/* Left: Image */}
            <div className="w-[130px] flex-shrink-0">
              <img 
                src="/assets/images/cdr_mobile.png" 
                alt="Custom Deep Research Agentic Workflows"
                className="w-[130px] h-full object-contain opacity-100"
              />
            </div>

            {/* Right: Features List and Button */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Features List */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">OpenAI's Deep Research</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Validating Findings</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Research-Grade Outputs</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium text-xs">Iterating Based On Context</span>
                </div>
              </div>

              {/* Read More Button - Below Features */}
              <div className="flex justify-start mt-4">
                <ReadMoreButton />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Custom Deep Research (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full max-w-lg mx-auto">
            <img 
              src="/assets/images/deep-research.png" 
              alt="Custom Deep Research Agentic Workflows"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 max-w-xl">
            {/* Custom Deep Research */}
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-[45px] font-bold leading-[58.5px] tracking-[0%] capitalize text-primary mb-4 text-left">
                Custom Deep Research
              </h3>
              <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium leading-[46px] tracking-[0%] capitalize text-neutral-700 mb-6 text-left">
                Specialize In Building Custom, <span className="text-secondary">Multi-Step Agentic Workflows</span>
              </h4>
              
              <p className="text-neutral-600 text-base md:text-lg xl:text-[17px] font-normal leading-[32.3px] tracking-[0%] mb-8 text-left">
                We specialize in building custom, multi-step agentic workflows that simulate 
                deep research within enterprise ecosystems. Leveraging advanced AI agents 
                using various open-source frameworks
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">OpenAI's Deep Research</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Validating Findings</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Research-Grade Outputs</span>
                </div>
                <div className="flex items-center space-x-3 bg-neutral-50 p-3 rounded-lg">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 font-medium">Iterating Based On Context</span>
                </div>
              </div>

              {/* Read More Button */}
              <ReadMoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;