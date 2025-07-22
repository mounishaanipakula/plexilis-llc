import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Contact Information Section */}
      <div className="bg-primary py-3 md:py-4 border-b border-neutral-700">
        <div className="px-6 md:px-8 lg:px-12 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-8 text-center md:text-left">
            {/* Address */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-secondary text-xs font-medium mb-1">Address:</p>
                <p className="text-neutral-300 text-xs font-medium">2603 HOLLINSWORTH PINE LN</p>
                <p className="text-neutral-300 text-xs font-medium">KATY, TX 77494, USA</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-neutral-600"></div>

            {/* Phone */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-secondary text-xs font-medium mb-1">Phone:</p>
                <a href="tel:+14048005522" className="text-neutral-300 text-xs font-medium hover:text-secondary transition-colors">
                  +1 (404) 800-5522
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-neutral-600"></div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-secondary text-xs font-medium mb-1">Email:</p>
                <a href="mailto:contact@plexilis.com" className="text-neutral-300 text-xs font-medium hover:text-secondary transition-colors">
                  contact@plexilis.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-primary py-4 md:py-6">
        <div className="px-6 md:px-8 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Our Company */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6 flex items-center">
                Our Company:
              </h3>
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
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6 flex items-center">
                Our Services:
              </h3>
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
                    Data And Technology Migration Services
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
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6 flex items-center">
                Our Products:
              </h3>
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

            {/* Company Info - Takes 2 columns */}
            <div className="lg:col-span-2 bg-neutral-100 p-4 md:p-6 rounded-lg h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="mb-3">
                    <Logo />
                  </div>
                  <p className="text-neutral-600 text-xs leading-relaxed">
                    At Plexilis LLC We Are Committed To Leading And Implementing Digital Transformation And Enterprise 4.0 Capabilities To Drive Impactful Global Growth For Our Clients. Our Offerings Include SAP, Cloud, Data, AI/ML, Software Testing, Contingent Workforce, Executive Search, And RPO Solutions. We Have Our Headquarters In 2603 HOLLINSWORTH PINE LN., KATY, TX 77494, USA.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="mt-auto flex gap-2">
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-secondary py-3 md:py-4">
        <div className="px-4 mx-auto">
          <p className="text-center text-white text-xs md:text-sm">
            Copyright © 2025 <span className="font-semibold">Plexilis LLC</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;