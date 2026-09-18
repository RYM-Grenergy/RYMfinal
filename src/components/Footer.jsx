import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const tidesLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789727049/rym_website/tides_iit_roorkee.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/rym-grenergy/', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/rym.grenergy?igsh=bzluaGg0ODdsdmd1', label: 'Instagram' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/918200055645', label: 'WhatsApp' }
  ];

  return (
    <footer className="relative bg-[#060606] text-white pt-10 sm:pt-14 pb-8 border-t border-white/10 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-12">
          
          {/* Brand & Mission Column */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-1.5 text-2xl font-bold tracking-tight">
              <span className="text-white font-heading">RYM</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-heading">
                Grenergy
              </span>
            </Link>
            <p className="text-zinc-300 text-sm font-normal leading-relaxed max-w-sm">
              Building the future of clean energy and enterprise intelligence through AI, IoT, and smart automation.
            </p>

            {/* Incubation Badge */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-9 h-9 bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                <img src={tidesLogo} alt="TIDES IIT Roorkee" className="w-full h-full object-contain" />
              </div>
              <div className="text-xs">
                <span className="text-emerald-400 font-bold block">Incubated at TIDES IIT Roorkee</span>
                <span className="text-zinc-400 text-[11px]">DST-NIDHI PRAYAS & DPIIT Recognized</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 active:scale-95 transition-all cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-emerald-400">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors inline-block py-0.5">About Us</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Products</Link></li>
              <li><Link to="/projects" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Our Projects</Link></li>
              <li><Link to="/achievements" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Achievements</Link></li>
              <li><Link to="/partners" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Partners</Link></li>
              <li><Link to="/testimonials" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Testimonials</Link></li>
              <li><Link to="/careers" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Careers</Link></li>
            </ul>
          </div>

          {/* Key Products Column */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-emerald-400">Products</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Divya-Drishti AI</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors inline-block py-0.5">INTELLEXA AI</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Weighbridge AI</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Ultron AI</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Smart EV Integration</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors inline-block py-0.5">NEXORA ONE</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="col-span-2 lg:col-span-2 space-y-3 pt-2 sm:pt-0">
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-emerald-400">Contact</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0 text-sm mt-0.5" />
                <span className="leading-snug">Gurugram, Sohna Rural, Haryana 122103</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhone className="text-emerald-400 flex-shrink-0 text-sm" />
                <a href="tel:+918200055645" className="hover:text-emerald-400 transition-colors py-0.5">+91 82000 55645</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-emerald-400 flex-shrink-0 text-sm" />
                <a href="mailto:contact@rym-grenergy.com" className="hover:text-emerald-400 transition-colors py-0.5 break-all">contact@rym-grenergy.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>&copy; {currentYear} RYM Grenergy. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <span className="hidden sm:inline">•</span>
            <button onClick={scrollToTop} className="inline-flex items-center gap-1 text-emerald-400 font-semibold hover:text-emerald-300 cursor-pointer active:scale-95">
              Top <FaArrowUp className="text-[10px]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
