import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('/');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab(location.pathname);
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Products', to: '/products' },
    { name: 'Projects', to: '/projects' },
    { name: 'Testimonials', to: '/testimonials' },
    { name: 'Contact', to: '/contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'py-3 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-lg shadow-black/20' 
          : 'py-8 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="block">
              <img 
                src={Logo} 
                alt="RYM Grenergy Logo" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'
                }`} 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeTab === item.to
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeTab === item.to && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.button
              className="relative px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold text-sm overflow-hidden group shadow-lg shadow-emerald-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-emerald-400 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <ul className="space-y-2 mb-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        className={`block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl ${
                          activeTab === item.to
                            ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold text-sm shadow-lg shadow-emerald-500/25"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={() => { setIsMobileMenuOpen(false); navigate('/contact'); }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
