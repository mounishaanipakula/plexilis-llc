const OurExpertise = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-4 mx-auto">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
          {/* Row 1 */}
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/data-iku.png" 
              alt="Dataiku"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/alation.png" 
              alt="Alation"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/informatica.png" 
              alt="Informatica"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/aws.png" 
              alt="AWS"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/azure.png" 
              alt="Microsoft Azure"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/hadoop.png" 
              alt="Hadoop"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/gcp.png" 
              alt="Google Cloud"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/java.png" 
              alt="Java"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/salesforce.png" 
              alt="Salesforce"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/sap.png" 
              alt="SAP"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/snowflake.png" 
              alt="Snowflake"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/talend.png" 
              alt="Talend"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/uipath.png" 
              alt="UiPath"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/nifi.png" 
              alt="Apache NiFi"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-32">
            <img 
              src="/assets/icons/airflow.png" 
              alt="Apache Airflow"
              className="max-h-12 md:max-h-16 max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;