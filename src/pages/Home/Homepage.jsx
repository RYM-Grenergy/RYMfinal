import React from 'react';
import Hero from '../../sections/Hero';
import About from '../../sections/About';
import Features from '../../sections/Features';
import Achievements from '../../sections/Achievements';
import Products from '../../sections/Products';
import Projects from '../../sections/Projects';
import Testimonials from '../../sections/Testimonials';
import Contact from '../../sections/Contact';

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <Features />
      <Achievements />
      <Products />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Homepage;
