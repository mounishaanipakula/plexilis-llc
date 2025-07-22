import ReadMoreButton from '../ui/ReadMoreButton';

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-secondary">Products</span>
          </h2>
          <div className="w-48 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="text-neutral-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Our innovative products are designed to accelerate your digital transformation journey, driving efficiency,
            scalability, and success. With advanced technology and seamless integration, we help businesses stay ahead in
            an ever-evolving digital landscape. Whether it's automation, data-driven insights.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full max-w-lg mx-auto">
            <img 
              src="/src/assets/images/migration-accelerators.png" 
              alt="Migration Accelerators Tools and Services"
              className="w-full h-auto object-contain"
            />
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
          {/* Right Side - Content */}
          <div className="space-y-8 lg:order-2 order-2">
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

          {/* Left Side - Image */}
          <div className="lg:order-1 order-1">
            <div className="w-full max-w-lg mx-auto">
              <img 
                src="/src/assets/images/system-analyzers.png" 
                alt="System Analyzers Dashboard with overlays"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Grid - Custom Deep Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full max-w-lg mx-auto">
            <img 
              src="/src/assets/images/deep-research.png" 
              alt="Custom Deep Research Agentic Workflows"
              className="w-full h-auto object-contain"
            />
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