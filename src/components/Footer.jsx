import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Projects', href: '/projects' },
        { name: 'Achievements', href: '/achievements' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Ultron', href: '/products' },
        { name: 'AI-Drive Through', href: '/products' },
        { name: 'REEWS', href: '/products' },
        { name: 'Shop All', href: '/products' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/rym-grenergy/', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/rym.grenergy?igsh=bzluaGg0ODdsdmd1', label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-950 to-black mt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl pointer-events-none" />

      {/* Top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  <span className="text-[clamp(1.5rem,5vw,2rem)] lg:text-[clamp(2rem,3vw,2.5rem)] font-bold text-white">RYM</span>
                  <span className="text-[clamp(1.5rem,5vw,2rem)] lg:text-[clamp(2rem,3vw,2.5rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Grenergy</span>
                </div>
                <p className="text-gray-400 text-base leading-relaxed max-w-md">
                  Building the future of clean energy through AI, IoT, and smart automation—powering a more efficient and sustainable world.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  <FaMapMarkerAlt className="text-emerald-500 flex-shrink-0" />
                  <span className="text-sm">Gurugram, NCR, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  <FaPhone className="text-emerald-500 flex-shrink-0" />
                  <a href="tel:+918200055645" className="text-sm hover:underline">+91-82000-55645</a>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  <FaEnvelope className="text-emerald-500 flex-shrink-0" />
                  <a href="mailto:contact@rym-grenergy.com" className="text-sm hover:underline">contact@rym-grenergy.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Section */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerLinks.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h4 className="text-white font-semibold text-lg">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.href.startsWith('/') ? (
                          <Link
                            to={link.href}
                            className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-200 block"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-200 block"
                          >
                            {link.name}
                          </a>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">&copy; {currentYear} RYM Grenergy. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-emerald-400 transition-colors duration-200">Privacy Policy</Link>
              <span className="text-gray-600">•</span>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-emerald-400 transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
