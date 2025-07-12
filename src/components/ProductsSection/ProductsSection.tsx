import ReadMoreButton from '../ui/ReadMoreButton';

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-secondary">Products</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-neutral-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Our innovative products are designed to accelerate your digital transformation journey, driving efficiency,
            scalability, and success. With advanced technology and seamless integration, we help businesses stay ahead in
            an ever-evolving digital landscape. Whether it's automation, data-driven insights.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="space-y-6">
            <div className="flex flex-row justify-end items-end space-x-4">
              <div className="w-28 sm:w-32 md:w-36 lg:w-40 rounded-[2rem] overflow-hidden flex-shrink-0">
                <img 
                  src="/src/assets/images/product-image-1.png" 
                  alt="Migration Tools and Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 rounded-[2.5rem] flex-shrink-0">
                <img 
                  src="/src/assets/images/product-image-2.png" 
                  alt="Technology and Data Migration Services"
                  className="w-full h-full object-cover"
                />
                {/* Floating text overlay - positioned outside top left of large image */}
                <div className="absolute -top-4 -left-8 z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-neutral-200 max-w-[200px]">
                  <span className="text-secondary font-medium text-sm mb-1">Ensuring</span>
                  <span className="text-neutral-700 font-semibold text-sm leading-tight"> data integrity </span>
                  <span className="text-neutral-700 font-semibold text-sm leading-tight">& business continuity.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Migration Accelerators */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Migration Accelerators
              </h3>
              <h4 className="text-xl font-semibold text-neutral-700 mb-6">
                To Accelerate And De-Risk <span className="text-secondary">Complex Migration Projects.</span>
              </h4>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                To accelerate and de-risk complex migration projects, we've developed a 
                suite of proprietary tools purpose-built for seamless data and platform 
                transitions.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

        {/* Content Grid - System Analyzers (Flipped Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24 mb-24">
          {/* Left Side - Content */}
          <div className="space-y-8 lg:order-1 order-2">
            {/* System Analyzers */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                System Analyzers
              </h3>
              <h4 className="text-xl font-semibold text-neutral-700 mb-6">
                Our Suite Of System Analyzers Is Designed To <span className="text-secondary">Deep, Automated Insights</span>
              </h4>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our suite of system analyzers is designed to provide deep, automated 
                insights into the health, security, and performance of critical infrastructure 
                components.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

          {/* Right Side - Image */}
          <div className="lg:order-2 order-1">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 h-80 w-80 mx-auto">
                <img 
                  src="/src/assets/images/system-analyzers.png" 
                  alt="System Analyzers Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Multiple floating text overlays positioned outside image bounds */}
              {/* Top left overlay - Enhance system reliability */}
              <div className="absolute -top-4 -left-8 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-neutral-200 max-w-[160px]">
                <div className="flex items-center space-x-2">
                  <img 
                    src="/src/assets/icons/sa-icon-1.png" 
                    alt="Enhance icon"
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <div className="text-xs">
                    <p className="text-neutral-700 font-medium">Enhance</p>
                    <p className="text-neutral-700 font-medium">system reliability</p>
                  </div>
                </div>
              </div>

              {/* Bottom left overlay - Storage optimization */}
              <div className="absolute -bottom-4 -left-8 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-neutral-200 max-w-[180px]">
                <div className="flex items-center space-x-2">
                  <img 
                    src="/src/assets/icons/sa-icon-2.png" 
                    alt="Storage icon"
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <div className="text-xs">
                    <p className="text-neutral-700 font-medium">Storage optimization</p>
                    <p className="text-neutral-700 font-medium">& access controls</p>
                  </div>
                </div>
              </div>

              {/* Bottom right overlay - Overall system integrity */}
              <div className="absolute -bottom-4 -right-8 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-neutral-200 max-w-[140px]">
                <div className="flex items-center space-x-2">
                  <img 
                    src="/src/assets/icons/sa-icon-1.png" 
                    alt="System integrity icon"
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <div className="text-xs">
                    <p className="text-neutral-700 font-medium">Overall system</p>
                    <p className="text-neutral-700 font-medium">integrity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid - Custom Deep Research (Same Layout as Migration Accelerators) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-80 flex items-center justify-start pl-16">
            {/* Top left text overlay - positioned above and to the left of image */}
            <div className="absolute top-0 left-0 z-0 max-w-[240px]">
              <div className="flex items-start space-x-3 mb-4">
                <div className="text-sm">
                  <p className="text-neutral-700 font-medium leading-relaxed">Our agentic systems empower organizations to make smarter decisions, faster.</p>
                </div>
              </div>
            </div>

            {/* Main Deep Research Image - centered */}
            <div className="relative z-10 w-72 h-56 rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-blue-900 to-blue-600 shadow-xl ml-8 mt-12">
              <img 
                src="/src/assets/images/deep-research.png" 
                alt="Deep Research Technology"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right overlay - positioned below and to the right of image */}
            <div className="absolute bottom-0 right-0 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-neutral-200 max-w-[200px]">
              <div className="flex items-center space-x-2">
                <img 
                  src="/src/assets/icons/dr-icon-1.png" 
                  alt="Deep research icon"
                  className="w-10 h-10 flex-shrink-0"
                />
                <div className="text-sm">
                  <p className="text-secondary font-medium">simulate deep research within enterprise ecosystems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Custom Deep Research */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Custom Deep Research
              </h3>
              <h4 className="text-xl font-semibold text-neutral-700 mb-6">
                Specialize In Building Custom, <span className="text-secondary">Multi-Step Agentic Workflows</span>
              </h4>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                We specialize in building custom, multi-step agentic workflows that simulate 
                deep research within enterprise ecosystems. Leveraging advanced AI agents 
                using various open-source frameworks
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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