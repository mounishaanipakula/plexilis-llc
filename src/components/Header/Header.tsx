import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Our Company', path: '/our-company' },
  { name: 'Products', path: '/products' },
  { name: 'IT Solutions', path: '/it-solutions' },
  { name: 'Tech Advisory', path: '/tech-advisory' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] sm:h-20 px-2 sm:px-6 md:px-10 lg:px-16 bg-white ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 h-full flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-1 py-4 transition-colors duration-200 text-center capitalize text-[17px] leading-8 ${
                  location.pathname === item.path
                    ? 'text-secondary font-bold'
                    : 'text-primary hover:text-secondary font-normal'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center h-full">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 h-full rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <svg className="w-7 h-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden bg-white animate-in fade-in duration-300">
            {/* Header section with close button */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <div className="flex items-center">
                <img 
                  src="/assets/images/plexilis_logo.svg" 
                  alt="Plexilis Logo"
                  className="w-[125.70px] h-[27.72px] object-contain"
                />
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              >
                <svg className="w-7 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="flex flex-col justify-center flex-1 px-6 py-8">
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`block px-4 py-4 text-xl font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-secondary font-bold border-l-4 border-secondary bg-secondary/10'
                        : 'text-primary hover:text-secondary hover:bg-neutral-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
