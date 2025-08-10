import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ITSolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('ai-ml');
  const location = useLocation();

  // Handle URL parameters to set active tab
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabParam = urlParams.get('tab');
    
    if (tabParam) {
      const validTabs = ['etl-data', 'ai-ml', 'big-data', 'ui-ux', 'data-tech', 'erp'];
      if (validTabs.includes(tabParam)) {
        setActiveTab(tabParam);
      }
    }
  }, [location.search]);
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
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-primary mb-4 text-center leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
          We offer end-to-end Services
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-normal max-w-4xl mx-auto leading-[180%] tracking-[0%] text-center" style={{ fontFamily: 'Inter' }}>
          We offer end-to-end AI and machine learning services that help businesses turn their data into smart, real-world solutions. 
          Whether you're building AI from scratch or scaling existing capabilities, we support you through every phase—strategy, 
          development, and deployment.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
          {/* Left Section - Just the left image */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
                src="/assets/images/ai_ml.png" 
                alt="AI and Machine Learning"
                className="w-48 h-72 sm:w-56 sm:h-84 md:w-64 md:h-96 lg:w-72 lg:h-[432px] xl:w-80 xl:h-[480px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px]"
              />
          </div>

          {/* Right Section - Title + Items + Right Image */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title at the top of right section */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold text-primary text-left leading-[150%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
              We design intelligent systems that go beyond static responses capable of reasoning.
            </h3>
            
            {/* Content area with items */}
            <div className="space-y-6 text-left">
              {/* Feature 1 - Capable of reasoning */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">01.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Capable of reasoning</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Processes complex information to draw logical conclusions and make informed decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Using tools */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">02.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Using tools</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Interacts with digital tools like search engines, calculators, or APIs to extend its capabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Maintaining Memory */}
              <div className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">03.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Maintaining Memory</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Keeps track of relevant information from prior interactions to sustain context.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

  const renderETLDataContent = () => (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-primary mb-4 text-center leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
          Transform and Connect Your Data
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-normal max-w-4xl mx-auto leading-[180%] tracking-[0%] text-center" style={{ fontFamily: 'Inter' }}>
          Our ETL and Data Integration services seamlessly connect, transform, and unify data from diverse sources, 
          ensuring your business operations are powered by clean, reliable, and accessible data.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
          {/* Left Section - Image */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
                src="/assets/images/etl_and_di.png" 
                alt="ETL Data Integration"
                className="w-48 h-72 sm:w-56 sm:h-84 md:w-64 md:h-96 lg:w-72 lg:h-[432px] xl:w-80 xl:h-[480px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px]"
              />
          </div>

          {/* Right Section - Title + Items + Right Image */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title at the top of right section */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold text-primary text-left leading-[150%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
              We design robust data pipelines that ensure seamless data flow across your enterprise.
            </h3>
            
            {/* Content area with items */}
            <div className="space-y-6 text-left">
              {/* Items */}
              {/* Feature 1 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">01.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Data Extraction</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Extract data from multiple sources including databases, APIs, files, and cloud platforms with automated scheduling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">02.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Data Transformation</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Clean, validate, and transform data to meet business requirements with advanced processing rules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">03.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Data Loading</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Load processed data into target systems with optimized performance and data integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBigDataContent = () => (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-primary mb-4 text-center leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
          Harness the Power of Big Data
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-normal max-w-4xl mx-auto leading-[180%] tracking-[0%] text-center" style={{ fontFamily: 'Inter' }}>
          Our Big Data solutions enable organizations to process, analyze, and extract valuable insights from massive datasets, 
          turning data complexity into competitive advantage.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
          {/* Left Section - Image */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
                src="/assets/images/big_data.png" 
                alt="Big Data Analytics"
                className="w-48 h-72 sm:w-56 sm:h-84 md:w-64 md:h-96 lg:w-72 lg:h-[432px] xl:w-80 xl:h-[480px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px]"
              />
          </div>

          {/* Right Section - Title + Items + Right Image */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title at the top of right section */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold text-primary text-left leading-[150%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
              We build scalable solutions that handle massive datasets with speed and precision.
            </h3>
            
            {/* Content area with items */}
            <div className="space-y-6 text-left">
              {/* Feature 1 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">01.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Scalable Processing</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Handle petabytes of data with distributed computing frameworks like Hadoop and Spark.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">02.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Real-time Analytics</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Process streaming data in real-time to enable immediate insights and rapid decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">03.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Advanced Visualization</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Transform complex data into clear, actionable visualizations and interactive dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

  );

  const renderUIUXContent = () => (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-primary mb-4 text-center leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
          Create Exceptional User Experiences
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-normal max-w-4xl mx-auto leading-[180%] tracking-[0%] text-center" style={{ fontFamily: 'Inter' }}>
          Our UI/UX design services focus on creating intuitive, engaging, and high-performance digital experiences 
          that delight users and drive business results.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
          {/* Left Section - Image */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
                src="/assets/images/ui_ux.png" 
                alt="UI UX Design"
                className="w-48 h-72 sm:w-56 sm:h-84 md:w-64 md:h-96 lg:w-72 lg:h-[432px] xl:w-80 xl:h-[480px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px]"
              />
          </div>

          {/* Right Section - Title + Items + Right Image */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title at the top of right section */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold text-primary text-left leading-[150%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
              We craft user-centered designs that combine aesthetics with functionality.
            </h3>
            
            {/* Content area with items */}
            <div className="space-y-6 text-left">
              {/* Feature 1 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">01.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>User Research</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Understand user needs, behaviors, and pain points through comprehensive research and testing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">02.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Interactive Prototyping</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Create interactive prototypes that allow stakeholders to experience the design before development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">03.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Design Systems</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Develop comprehensive design systems that ensure consistency across all touchpoints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataTechContent = () => (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-primary mb-4 text-center leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
          Seamless Technology Migration
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-normal max-w-4xl mx-auto leading-[180%] tracking-[0%] text-center" style={{ fontFamily: 'Inter' }}>
          Our Data and Technology Migration services help businesses transition from legacy systems to modern, 
          scalable platforms without disruption or data loss.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
          {/* Left Section - Image */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
                src="/assets/images/data_and_tech.png" 
                alt="Data Technology Migration"
                className="w-48 h-72 sm:w-56 sm:h-84 md:w-64 md:h-96 lg:w-72 lg:h-[432px] xl:w-80 xl:h-[480px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px]"
              />
          </div>

          {/* Right Section - Title + Items + Right Image */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title at the top of right section */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold text-primary text-left leading-[150%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
              We ensure smooth transitions with minimal downtime and maximum efficiency.
            </h3>
            
            {/* Content area with items */}
            <div className="space-y-6 text-left">
              {/* Feature 1 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">01.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Assessment & Planning</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Comprehensive analysis of existing systems and detailed migration roadmap development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">02.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Zero Downtime Migration</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Execute migrations with minimal business disruption using proven methodologies and tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">03.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Post-Migration Support</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Comprehensive testing, validation, and ongoing support to ensure optimal system performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderERPContent = () => (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-primary mb-4 text-center leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
          Streamline Business Operations
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-normal max-w-4xl mx-auto leading-[180%] tracking-[0%] text-center" style={{ fontFamily: 'Inter' }}>
          Our ERP services help organizations streamline operations, improve visibility, and drive efficiency 
          across all business functions with comprehensive enterprise solutions.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
          {/* Left Section - Image */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
                src="/assets/images/erp_services.png" 
                alt="ERP Systems"
                className="w-48 h-72 sm:w-56 sm:h-84 md:w-64 md:h-96 lg:w-72 lg:h-[432px] xl:w-80 xl:h-[480px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px]"
              />
          </div>

          {/* Right Section - Title + Items + Right Image */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title at the top of right section */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold text-primary text-left leading-[150%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
              We integrate all business processes into a unified, efficient system.
            </h3>
            
            {/* Content area with items */}
            <div className="space-y-6 text-left">
              {/* Feature 1 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">01.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Process Integration</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Unify finance, HR, supply chain, and operations into a single, cohesive system.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pb-6 border-b border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">02.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Real-time Reporting</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Access real-time business intelligence and comprehensive reporting across all departments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">03.</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-primary mb-2 leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>Scalable Architecture</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-normal leading-[180%] tracking-[0%]" style={{ fontFamily: 'Inter' }}>
                      Built to grow with your business and adapt to changing requirements and market conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-4 mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
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
          {activeTab === 'etl-data' && renderETLDataContent()}
          {activeTab === 'big-data' && renderBigDataContent()}
          {activeTab === 'ui-ux' && renderUIUXContent()}
          {activeTab === 'data-tech' && renderDataTechContent()}
          {activeTab === 'erp' && renderERPContent()}
        </div>

        {/* Common Business Impact Section - Shared across all tabs */}
        <div className="mt-24 relative">
          {/* Hero Section with Background Image */}
          <div className="relative p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/assets/images/ai-ml-4.png" 
                alt="Business Impact Background"
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div className="relative z-10">
              {/* Title */}
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 md:mb-8 max-w-5xl mx-auto leading-tight px-4">
                  We make technology easier, faster, and more impactful for your business.
                </h2>
              </div>

              {/* Main Hero Image Container - Overlay */}
              <div className="relative max-w-4xl mx-auto px-4">
                <div className="relative">
                  <img 
                    src="/assets/images/ai-ml-3.png" 
                    alt="Business Impact - Technology Solutions"
                    className="w-full h-auto object-cover object-center"
                  />
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
                  content: 'We build intelligent systems that continuously learn from data and user interactions, enabling your business to stay ahead of changing market conditions and customer needs with adaptive technology solutions.'
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
                  title: 'Scalable solutions that grow with your business',
                  content: 'Our technology solutions are designed to scale seamlessly with your business growth. From small pilot projects to enterprise-wide deployments, we ensure your infrastructure can adapt and expand as your needs evolve.'
                },
                { 
                  id: 'competitive', 
                  title: 'Competitive advantage through cutting-edge technology',
                  content: 'Stay ahead of the competition with our cutting-edge technology solutions. We help you leverage the latest innovations to differentiate your products, optimize operations, and create new revenue streams.'
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
                      <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-semibold leading-8 tracking-[0%] align-middle" style={{ fontFamily: 'Inter' }}>{item.title}</span>
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
                        <p className="text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[17px] font-normal tracking-[0%] align-middle" style={{ fontFamily: 'Inter', lineHeight: '32.3px' }}>
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
    </section>
  );
};

export default ITSolutionsTabs;