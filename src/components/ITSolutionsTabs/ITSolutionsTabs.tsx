import { useState } from 'react';

const ITSolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('ai-ml');
  const [openAccordion, setOpenAccordion] = useState<string | null>('intelligent');

  const tabs = [
    { id: 'etl-data', label: 'ETL And Data Integration' },
    { id: 'ai-ml', label: 'AI And Machine Learning' },
    { id: 'big-data', label: 'Big Data Solutions' },
    { id: 'ui-ux', label: 'UI And UX' },
    { id: 'data-tech', label: 'Data And Technology' },
    { id: 'erp', label: 'ERP Services' },
  ];

  const renderAIMLContent = () => (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          We offer end-to-end Services
        </h2>
        <p className="text-neutral-600 text-lg max-w-4xl mx-auto leading-relaxed">
          We offer end-to-end AI and machine learning services that help businesses turn their data into smart, real-world solutions. 
          Whether you're building AI from scratch or scaling existing capabilities, we support you through every phase—strategy, 
          development, and deployment.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="relative">
        {/* Left Image - AI Illustration */}
        <div className="absolute left-0 top-0 w-80 h-96 rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            src="/src/assets/images/ai-ml-1.png" 
            alt="Artificial Intelligence Technology"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Text on Image */}
          <div className="absolute top-6 left-6 text-white">
            <h3 className="text-lg font-bold">Artificial intelligence</h3>
          </div>
        </div>

        {/* Center Content Area */}
        <div className="ml-96 mr-80 px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            We design intelligent systems that go beyond static responses capable of reasoning.
          </h3>
          
          <div className="space-y-6">
            {/* Feature 1 - Capable of reasoning */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">01</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Capable of reasoning</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Processes complex information to draw logical conclusions and make informed decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Using tools */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">02</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Using tools</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Interacts with digital tools like search engines, calculators, or APIs to extend its capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - Maintaining Memory */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Maintaining Memory</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Keeps track of relevant information from prior interactions to sustain context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image - Person at Computer */}
        <div className="absolute right-0 top-12 w-72 h-80 rounded-[1.5rem] overflow-hidden shadow-xl">
          <img 
            src="/src/assets/images/ai-ml-2.png" 
            alt="AI Technology Professional"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* AI Business Impact Section */}
      <div className="mt-24 relative">
        {/* Hero Section with Blue Background */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Dot Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}
            ></div>
          </div>
          
          {/* Additional flowing pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                <path 
                  d="M50,150 Q200,50 350,150 T650,150" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="2" 
                  fill="none"
                />
                <path 
                  d="M0,200 Q150,100 300,200 T600,200" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="1.5" 
                  fill="none"
                />
              </svg>
            </div>
          </div>
          
          <div className="relative z-10">
            {/* Title */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 md:mb-8 max-w-5xl mx-auto leading-tight px-4">
                We make AI easier, faster, and more impactful for your business.
              </h2>
            </div>

            {/* Main Hero Image Container */}
            <div className="relative max-w-5xl mx-auto px-4">
              <div className="relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-orange-300 via-orange-200 to-pink-200 aspect-[16/9] md:aspect-[2/1]">
                  <img 
                    src="/src/assets/images/ai-business-impact.png" 
                    alt="AI Business Impact - Robot Hand and Human Hand reaching toward each other"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-3">
            {[
              { 
                id: 'intelligent', 
                title: 'Intelligent systems that learn and adapt over time',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              },
              { 
                id: 'automated', 
                title: 'Automated workflows that reduce manual effort',
                content: 'Our automated workflow solutions streamline repetitive tasks and reduce manual intervention, allowing your team to focus on high-value activities while ensuring consistent, error-free execution of routine processes.'
              },
              { 
                id: 'insights', 
                title: 'Data-driven insights for better decision making',
                content: 'Transform raw data into actionable insights with our advanced analytics solutions. We help you uncover patterns, trends, and opportunities that drive informed decision-making across your organization.'
              },
              { 
                id: 'scalable', 
                title: 'Scalable AI solutions that grow with your business',
                content: 'Our AI solutions are designed to scale seamlessly with your business growth. From small pilot projects to enterprise-wide deployments, we ensure your AI infrastructure can adapt and expand as your needs evolve.'
              },
              { 
                id: 'competitive', 
                title: 'Competitive advantage through cutting-edge technology',
                content: 'Stay ahead of the competition with our cutting-edge AI and machine learning technologies. We help you leverage the latest innovations to differentiate your products, optimize operations, and create new revenue streams.'
              }
            ].map((item) => {
              const isOpen = openAccordion === item.id;
              return (
                <div key={item.id} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                    className={`w-full flex items-center justify-between p-4 transition-colors duration-200 ${
                      isOpen 
                        ? 'bg-secondary text-white' 
                        : 'bg-white text-neutral-800 hover:bg-neutral-50'
                    }`}
                  >
                    <span className="text-left font-medium">{item.title}</span>
                    <div className="flex-shrink-0 ml-4">
                      {isOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 bg-neutral-50 border-t border-neutral-200">
                      <p className="text-neutral-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlaceholderContent = (tabLabel: string) => (
    <div className="text-center py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {tabLabel}
      </h2>
      <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
      <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Content for {tabLabel} will be available soon. We're working on bringing you detailed information about our {tabLabel.toLowerCase()} services.
      </p>
      <div className="mt-12 bg-neutral-50 rounded-2xl p-12 max-w-md mx-auto">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <p className="text-neutral-500 text-sm">Coming Soon</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {activeTab === 'ai-ml' && renderAIMLContent()}
          {activeTab !== 'ai-ml' && renderPlaceholderContent(
            tabs.find(tab => tab.id === activeTab)?.label || ''
          )}
        </div>
      </div>
    </section>
  );
};

export default ITSolutionsTabs;