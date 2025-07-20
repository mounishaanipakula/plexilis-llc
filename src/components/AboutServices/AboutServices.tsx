const AboutServices = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About <span className="text-secondary">Plexilis</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
            At Plexilis, we empower businesses to harness the true potential of their data. Our suite of services delivers 
            Intelligent Transformation by combining
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - AI And Machine Learning */}
          <div className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <img 
                src="/src/assets/icons/au-icon-1.png" 
                alt="AI And Machine Learning"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-4">AI And Machine Learning</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                We offer end-to-end AI and machine learning services that help businesses turn 
                data into actionable insights quickly. Whether you're looking to learn a effect of 
                solving existing capabilities.
              </p>
            </div>
            <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
              Read More
            </button>
          </div>

          {/* Service 2 - ETL And Data Integration */}
          <div className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <img 
                src="/src/assets/icons/au-icon-1.png" 
                alt="ETL And Data Integration"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-4">ETL And Data Integration</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Our ETL and Data Integration services are designed to seamlessly connect, transform, 
                and unify data from diverse sources, ensuring your business operations are powered by 
                ready managed to fuel your business.
              </p>
            </div>
            <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
              Read More
            </button>
          </div>

          {/* Service 3 - Big Data Solutions */}
          <div className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <img 
                src="/src/assets/icons/au-icon-1.png" 
                alt="Big Data Solutions"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-4">Big Data Solutions</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                With years of experience and deep expertise in the IT industry, we specialize in 
                delivering cutting-edge Big Data solutions that enable organizations to harness data. 
                Our team of certified smart engineers.
              </p>
            </div>
            <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
              Read More
            </button>
          </div>

          {/* Service 4 - UI And UX */}
          <div className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <img 
                src="/src/assets/icons/au-icon-1.png" 
                alt="UI And UX"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-4">UI And UX</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Our UI and UX services focus on creating intuitive, engaging, and high-performance 
                digital experiences across web and mobile platforms. From user research and 
                wireframing to design execution.
              </p>
            </div>
            <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
              Read More
            </button>
          </div>

          {/* Service 5 - Data And Technology Migration */}
          <div className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <img 
                src="/src/assets/icons/au-icon-1.png" 
                alt="Data And Technology Migration"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-4">Data And Technology Migration</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Our Data and Technology Migration services help businesses seamlessly transition 
                from legacy systems to modern, scalable platforms without disruption or data loss.
              </p>
            </div>
            <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
              Read More
            </button>
          </div>

          {/* Service 6 - ERP Services */}
          <div className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <img 
                src="/src/assets/icons/au-icon-1.png" 
                alt="ERP Services"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-4">ERP Services</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Our ERP services are designed to help organizations streamline operations, 
                improve visibility, and drive efficiency across business functions. We offer end-to-
                end consulting, implementation.
              </p>
            </div>
            <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;