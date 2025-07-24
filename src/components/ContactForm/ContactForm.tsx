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
      <div className="px-6 md:px-8 lg:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto bg-neutral-50 rounded-xl overflow-hidden">
          {/* Left Side - Contact Form */}
          <div className="p-6 md:p-8 lg:p-10 border-r border-neutral-200">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8">
              CONTACT US
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors duration-200 bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone *"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors duration-200 bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors duration-200 bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  required
                  rows={4}
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors duration-200 resize-vertical bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary-hover text-white pl-6 rounded-full font-medium transition-colors duration-300 inline-flex items-center space-x-3 w-fit"
                >
                  <span>Send Message</span>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 text-left">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 md:mb-4 text-left">
                Get in Touch
              </h2>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed text-left">
                Let's talk about how automotive digital solutions can work for your business.
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg p-4 space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-neutral-500 text-xs md:text-sm mb-1">Our Address</h3>
                  <p className="text-primary font-medium text-sm md:text-base">
                    2603 HOLLINSWORTH PINE LN<br />
                    KATY, TX 77494, USA
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-neutral-500 text-xs md:text-sm mb-1">Email</h3>
                  <p className="text-primary font-medium text-sm md:text-base">
                    contact@plexilis.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-left">
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