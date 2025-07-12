import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Contact Information Section */}
      <div className="bg-primary py-4 md:py-6 border-b border-neutral-700">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center md:text-left">
            {/* Address */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-secondary text-xs md:text-sm font-medium mb-1">Address:</p>
                <p className="text-neutral-300 text-sm md:font-medium">2603 HOLLINSWORTH PINE LN</p>
                <p className="text-neutral-300 text-sm md:font-medium">KATY, TX 77494, USA</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-secondary text-xs md:text-sm font-medium mb-1">Phone:</p>
                <a href="tel:+14048005522" className="text-neutral-300 text-sm md:font-medium hover:text-secondary transition-colors">
                  +1 (404) 800-5522
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-secondary text-xs md:text-sm font-medium mb-1">Email:</p>
                <a href="mailto:contact@plexilis.com" className="text-neutral-300 text-sm md:font-medium hover:text-secondary transition-colors break-all">
                  contact@plexilis.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-primary py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Our Company */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6">Our Company:</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link to="/our-company" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/our-company" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    Our Expertise
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    Talent Advisory
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6">Our Services:</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link to="/it-solutions" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    AI And Machine Learning
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    ETL And Data Integration
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    Big Data Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    UI And UX
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions" className="text-neutral-300 hover:text-secondary transition-colors flex items-start">
                    <span className="text-secondary mr-2 mt-0.5">›</span>
                    <span>Data And Technology Migration Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    ERP Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Products */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6">Our Products:</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link to="/products" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    Migration Accelerators
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    System Analyzers
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    Custom Deep Research
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div className="bg-neutral-100 p-4 md:p-6 rounded-lg">
              <div className="mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <span className="text-white font-bold text-base md:text-lg">P</span>
                </div>
                <h2 className="text-primary font-bold text-xl md:text-2xl mb-3 md:mb-4">PLEXILIS</h2>
                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  At Plexilis LLC We Are Committed To Leading And Implementing Digital Transformation And Enterprise 4.0 Capabilities To Drive Impactful Global Growth For Our Clients. Our Offerings Include SAP, Cloud, Data, AI/ML, Software Testing, Contingent Workforce, Executive Search, And RPO Solutions. We Have Our Headquarters In 2603 HOLLINSWORTH PINE LN., KATY, TX 77494, USA.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-2 md:gap-3">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-neutral-400 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-neutral-400 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-neutral-400 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.994 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-secondary py-3 md:py-4">
        <div className="container px-4 mx-auto">
          <p className="text-center text-white text-xs md:text-sm">
            Copyright © 2025 <span className="font-semibold">Plexilis LLC</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;