const TalentAdvisorySection = () => {
  return (
    <>
      {/* Talent Advisory Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="mb-24">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Talent <span className="text-secondary">Advisory</span>
              </h2>
              <div className="w-48 h-0.5 bg-secondary mx-auto mb-8"></div>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Why Choose <span className="font-semibold text-primary">Plexilis</span> Tech Advisory Services
              </p>
            </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
            <div className="relative h-96 flex justify-center items-center">
              {/* Main large image - positioned on the left */}
              <div className="relative z-10 w-80 h-80 overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/images/talent-advisory-1.png" 
                  alt="Analytics and Data Visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Secondary smaller image - positioned overlapping on the right */}
              <div className="absolute right-6 bottom-4 z-20 w-48 h-48 p-3 bg-neutral-50 shadow-xl">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src="/src/assets/images/talent-advisory-2.png" 
                    alt="AI and Technology Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Feature 1 - Turnaround Excellence */}
              <div className="flex items-start space-x-4">
                <img 
                  src="/src/assets/icons/ta-icon-1.png" 
                  alt="Turnaround Excellence"
                  className="w-12 h-12 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Turnaround Excellence</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Stepping up with senior experts—creating impactful insights, 
                    re-baselining, and prioritizing critically evaluated projects 
                    into success stories.
                  </p>
                </div>
              </div>

              {/* Feature 2 - On-Time Design & Execution */}
              <div className="flex items-start space-x-4">
                <img 
                  src="/src/assets/icons/ta-icon-2.png" 
                  alt="On-Time Design & Execution"
                  className="w-12 h-12 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">On-Time Design & Execution</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Stepping up with senior experts—creating impactful insights, 
                    re-baselining, and prioritizing critically evaluated projects 
                    into success stories.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Proactive, Personalized Approach */}
              <div className="flex items-start space-x-4">
                <img 
                  src="/src/assets/icons/ta-icon-3.png" 
                  alt="Proactive, Personalized Approach"
                  className="w-12 h-12 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Proactive, Personalized Approach</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
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

      {/* Our Expertise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our <span className="text-secondary">Expertise</span>
            </h2>
            <div className="w-48 h-0.5 bg-secondary mx-auto mb-8"></div>
            <p className="text-neutral-600 text-lg max-w-4xl mx-auto leading-relaxed">
              With our deep expertise and experienced Team, we have created Road Maps, Build Solutions and Delivered Value 
              across Organizations. Here is the list of tools we have acquired and equipped with...
            </p>
          </div>

          {/* Technology Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Row 1 */}
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/data-iku.png" 
                alt="Dataiku"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/alation.png" 
                alt="Alation"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/informatica.png" 
                alt="Informatica"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/aws.png" 
                alt="AWS"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/azure.png" 
                alt="Microsoft Azure"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24 md:col-span-2 lg:col-span-1">
              {/* Empty for responsive layout */}
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/hadoop.png" 
                alt="Hadoop"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/gcp.png" 
                alt="Google Cloud"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/java.png" 
                alt="Java"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/salesforce.png" 
                alt="Salesforce"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/sap.png" 
                alt="SAP"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24 md:col-span-2 lg:col-span-1">
              {/* Empty for responsive layout */}
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/snowflake.png" 
                alt="Snowflake"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/talend.png" 
                alt="Talend"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/uipath.png" 
                alt="UiPath"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/nifi.png" 
                alt="Apache NiFi"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24">
              <img 
                src="/src/assets/icons/airflow.png" 
                alt="Apache Airflow"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TalentAdvisorySection;