const MigrationAccelerators = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="px-6 md:px-8 lg:px-12 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Migration Accelerators
          </h2>
          <p className="text-neutral-600 text-base max-w-4xl mx-auto leading-relaxed">
            Our suite of proprietary tools streamlines complex data and platform transitions. We support bidirectional 
            database migrations, cloud platform transfers, ETL tool conversions, and analytics workflow modernization. 
            These accelerators reduce manual effort while ensuring data integrity and business continuity.
          </p>
        </div>

        {/* Capabilities Section */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-10">
            <span className="text-secondary">Capabilities</span>
          </h3>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Database Migration - Light Green */}
            <div className="bg-emerald-50 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/assets/icons/products-dm-icon.png" 
                    alt="Database Migration"
                    className="w-8 h-8"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-primary mb-2">Database Migration</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Bidirectional migration between MySQL and PostgreSQL with data integrity preservation
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud Migration - Light Blue */}
            <div className="bg-blue-50 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/assets/icons/products-cm-icon.png" 
                    alt="Cloud Migration"
                    className="w-8 h-8"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-primary mb-2">Cloud Migration</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Smooth data transfers from on-premise systems to cloud platforms
                  </p>
                </div>
              </div>
            </div>

            {/* ETL Tool Migration - Light Pink */}
            <div className="bg-pink-50 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/assets/icons/products-etl-icon.png" 
                    alt="ETL Tool Migration"
                    className="w-8 h-8"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-primary mb-2">ETL Tool Migration</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Streamlined conversion from Stream Sets to Apache NiFi
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics Workflow - Light Purple */}
            <div className="bg-purple-50 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/assets/icons/products-aw-icon.png" 
                    alt="Analytics Workflow"
                    className="w-8 h-8"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-primary mb-2">Analytics Workflow</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Automated migrations from Alteryx and Informatica to DataIku
                  </p>
                </div>
              </div>
            </div>

            {/* Data Lake Migration - Light Red */}
            <div className="bg-red-50 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/assets/icons/products-dl-icon.png" 
                    alt="Data Lake Migration"
                    className="w-8 h-8"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-primary mb-2">Data Lake Migration</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Cloudera-to-Databricks migration for modern lakehouse architectures
                  </p>
                </div>
              </div>
            </div>

            {/* Version Upgrades - Light Yellow */}
            <div className="bg-yellow-50 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/assets/icons/products-vu-icon.png" 
                    alt="Version Upgrades"
                    className="w-8 h-8"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-primary mb-2">Version Upgrades</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Upgrade legacy deployments to latest versions with minimal downtime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationAccelerators;