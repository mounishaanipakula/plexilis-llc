import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Contact Information Section */}
      <div className="bg-primary py-8 md:py-4">
        <div className="px-4 py-4md:px-8 lg:px-12 xl:px-16 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-stretch justify-center md:justify-between gap-6 md:gap-8 text-left min-h-[120px]">
            {/* Address */}
            <div className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] rounded-full md:rounded-[30px] lg:rounded-[35px] border border-neutral-300 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/assets/icons/address_icon.png" 
                  alt="Address"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-[25px] lg:h-[25px]"
                />
              </div>
              <div className="text-left">
                <p className="text-secondary text-[15px] md:text-base lg:text-[15px] font-normal leading-[32px] tracking-[0%] mb-1" style={{ fontFamily: 'Inter', fontWeight: 400 }}>Address:</p>
                <p className="text-white text-[20px] md:text-xl lg:text-[20px] font-bold leading-[32px] tracking-[0%]" style={{ fontFamily: 'Inter', fontWeight: 700 }}>2603 HOLLINSWORTH PINE LN, KATY, TX 77494, USA</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-neutral-600 self-stretch"></div>

            {/* Phone */}
            <div className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] rounded-full md:rounded-[30px] lg:rounded-[35px] border border-neutral-300 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/assets/icons/phone_icon.png" 
                  alt="Phone"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-[25px] lg:h-[25px]"
                />
              </div>
              <div className="text-left">
                <p className="text-secondary text-[15px] md:text-base lg:text-[15px] font-normal leading-[32px] tracking-[0%] mb-1" style={{ fontFamily: 'Inter', fontWeight: 400 }}>Phone:</p>
                <a href="tel:+14048005522" className="text-white text-lg md:text-xl lg:text-[20px] font-bold leading-[32px] tracking-[0%] hover:text-secondary transition-colors">
                  +1 (404) 800-5522
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-neutral-600 self-stretch"></div>

            {/* Email */}
            <div className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] rounded-full md:rounded-[30px] lg:rounded-[35px] border border-neutral-300 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/assets/icons/email_icon.png" 
                  alt="Email"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-[25px] lg:h-[25px]"
                />
              </div>
              <div className="text-left">
                <p className="text-secondary text-[15px] md:text-base lg:text-[15px] font-normal leading-[32px] tracking-[0%] mb-1" style={{ fontFamily: 'Inter', fontWeight: 400 }}>Email:</p>
                <a href="mailto:contact@plexilis.com" className="text-white text-lg md:text-xl lg:text-[20px] font-bold leading-[32px] tracking-[0%] hover:text-secondary transition-colors">
                  contact@plexilis.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-primary border-t border-neutral-700">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left Side: Navigation Links */}
            <div className="flex-1 py-4 md:py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                  <Link to="/it-solutions?tab=ai-ml" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    AI And Machine Learning
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions?tab=etl-data" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    ETL And Data Integration
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions?tab=big-data" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    Big Data Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions?tab=ui-ux" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
                    <span className="text-secondary mr-2">›</span>
                    UI And UX
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions?tab=data-tech" className="text-neutral-300 hover:text-secondary transition-colors flex items-start">
                    <span className="text-secondary mr-2 mt-0.5">›</span>
                    Data And Technology Migration Services
                  </Link>
                </li>
                <li>
                  <Link to="/it-solutions?tab=erp" className="text-neutral-300 hover:text-secondary transition-colors flex items-center">
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
              </div>
            </div>

            {/* Right Side: Company Info - Plexilis Section */}
            <div className="p-4 md:p-6 flex-shrink-0 w-full lg:w-80 xl:w-96" style={{ backgroundColor: '#D9D9D9' }}>
              <div className="flex flex-col h-full">
                <div className="mb-4 text-left">
                  <div className="mb-3 text-left">
                    <div className="w-[223.19px] h-[49.23px] opacity-100" style={{ transform: 'rotate(0deg)' }}>
                      <Logo />
                    </div>
                  </div>
                  <p className="text-neutral-600 text-[14px] leading-[24px] tracking-[0%] text-left capitalize" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                    At Plexilis LLC We Are Committed To Leading And Implementing Digital Transformation And Enterprise 4.0 Capabilities To Drive Impactful Global Growth For Our Clients. Our Offerings Include SAP, Cloud, Data, AI/ML, Software Testing, Contingent Workforce, Executive Search, And RPO Solutions. We Have Our Headquarters In 2603 HOLLINSWORTH PINE LN., KATY, TX 77494, USA.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="mt-auto flex gap-2 justify-start">
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                    <img 
                      src="/assets/icons/facebook.png" 
                      alt="Facebook"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                    <img 
                      src="/assets/icons/instagram.png" 
                      alt="Instagram"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                    <img 
                      src="/assets/icons/x.png" 
                      alt="X (formerly Twitter)"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing between sections */}
      <div className="bg-primary h-10 md:h-6"></div>

      {/* Copyright Section */}
      <div className="bg-secondary py-3 md:py-4">
        <div className="px-4 mx-auto">
          {/* Mobile Layout - Two Lines */}
          <div className="block md:hidden text-center text-white text-[14px] leading-[20px] tracking-[0%]" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
            <p className="text-center">
              Copyright © 2025 <span className="font-semibold text-primary">Plexilis LLC.</span>
            </p>
            <p className="text-center">
              All rights reserved.
            </p>
          </div>
          
          {/* Desktop Layout - Single Line */}
          <div className="hidden md:block">
            <p className="text-center text-white text-xs md:text-sm">
              Copyright © 2025 <span className="font-semibold text-primary">Plexilis LLC.</span> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;