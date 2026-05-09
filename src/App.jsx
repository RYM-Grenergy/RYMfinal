import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Homepage from './pages/Home/Homepage';
import AboutPage from './pages/About/AboutPage';
import ProductsPage from './pages/Products/ProductsPage';
import ContactPage from './pages/Contact/ContactPage';
import CareersPage from './pages/Careers/CareersPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import TestimonialsPage from './pages/Testimonials/TestimonialsPage';
import AchievementsPage from './pages/Achievements/AchievementsPage';
import Privacy from './pages/Legal/Privacy';
import Terms from './pages/Legal/Terms';
import { ThemeProvider } from './context/ThemeContext';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const ScrollToTopButton = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.scrollY > 320);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 320);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center bg-emerald-400 text-black transition-colors hover:bg-emerald-300"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

function App() {
  const [loading, setLoading] = useState(false);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
        <AnimatePresence mode="wait">
          {loading && (
            <LoadingScreen key="loader" onFinished={handleLoadingFinished} />
          )}
        </AnimatePresence>

        {!loading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <main className="relative">
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-of-service" element={<Terms />} />
              </Routes>
              <ScrollToTopButton />
            </main>
            <Footer />
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
