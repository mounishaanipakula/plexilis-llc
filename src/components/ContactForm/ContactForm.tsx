import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Side - Contact Form */}
          <div className="bg-neutral-50 rounded-xl p-6 md:p-8 lg:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8">
              CONTACT US
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors duration-200 bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors duration-200 bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors duration-200 bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors duration-200 resize-vertical bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center space-x-2"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-6 md:space-y-8 lg:pt-4">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 md:mb-4">
                Get in Touch
              </h2>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                Let's talk about how automotive digital solutions can work for your business.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/src/assets/icons/address-icon.png" 
                    alt="Address"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-500 text-xs md:text-sm mb-1">Our Address</h3>
                  <p className="text-primary font-medium text-sm md:text-base">
                    2603 HOLLINSWORTH PINE LN<br />
                    KATY, TX 77494, USA
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/src/assets/icons/email-icon.png" 
                    alt="Email"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-500 text-xs md:text-sm mb-1">Email</h3>
                  <p className="text-primary font-medium text-sm md:text-base">
                    contact@plexilis.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/src/assets/icons/contact-icon.png" 
                    alt="Phone"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-500 text-xs md:text-sm mb-1">Contact</h3>
                  <p className="text-primary font-medium text-sm md:text-base">
                    +1 (404) 800-5522
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

export default ContactForm;