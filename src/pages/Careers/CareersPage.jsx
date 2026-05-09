import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLightbulb, FaChartLine, FaCogs, FaMapMarkerAlt,
  FaLink, FaRobot, FaArrowRight, FaPlus, FaStar, FaUsers,
} from 'react-icons/fa';
import carrer1 from '../../assets/images/carrer1.jpg';
import carrer2 from '../../assets/images/carrer2.jpg';
import carrer3 from '../../assets/images/carrer3.png';
import joinImage from '../../assets/images/join.jpg';

/* ─────────────── data ─────────────── */
const perks = [
  {
    emoji: '🌿',
    title: 'Be part of the change',
    description: 'Work on technologies that revolutionize renewable energy, smart automation, and advanced technologies, creating real impact for a greener planet.',
  },
  {
    emoji: '📈',
    title: 'Growth & development',
    description: 'Gain hands-on experience through R&D, live projects, and technical mentorship in a company driven by continuous learning and innovation.',
  },
  {
    emoji: '⚡',
    title: 'Innovation-driven culture',
    description: 'Collaborate with brilliant engineers and researchers where creative thinking, shared knowledge, and breakthrough ideas thrive.',
  },
  {
    emoji: '🏠',
    title: 'Relocation & support',
    description: 'We assist with relocation, providing support and resources for seamless transition into the RYM ecosystem.',
  },
  {
    emoji: '🌍',
    title: 'Global collaboration',
    description: 'Engage with partners, clients, and industry leaders globally, expanding your network and learning opportunities beyond boundaries.',
  },
  {
    emoji: '🚀',
    title: 'Industry of the future',
    description: 'Be part of the technology frontier shaping energy-driven sustainability through emerging tech and smart systems.',
  },
];

const lifeAtRym = [
  {
    emoji: '✨',
    title: 'How we Inspire',
    description: 'RYM Grenergy is an innovative tech company driven by passion in renewable energy and automation. Through cutting-edge technology, we are shaping the future by pioneering smart green solutions for efficiency and sustainability in the industry.',
  },
  {
    emoji: '🤝',
    title: 'How we Act',
    description: 'At RYM Grenergy, innovators from diverse backgrounds come together with shared purpose, collaborating on impactful projects. United by our drive to transform energy and technology, we empower each team member to grow with us.',
  },
  {
    emoji: '🌱',
    title: 'How we Grow',
    description: 'RYM Grenergy brings together innovators driven by a common mission: to shape the future with intelligent, sustainable, and eco-friendly solutions. We enable collaborative growth and technological innovation for sustainable future.',
  },
];

const jobs = [
  { title: 'Design', emoji: '🎨' },
  { title: 'Manufacturing', emoji: '🏭' },
  { title: 'Engineering', emoji: '⚙️' },
  { title: 'Research', emoji: '🔬' },
  { title: 'Product', emoji: '💡' },
  { title: 'Operations', emoji: '📊' },
];

const faqs = [
  {
    q: 'Can I work remote?',
    a: 'At RYM Grenergy, our teams are dynamic and often collaborate across different locations. At times, it may be more efficient to work remotely for a short period, provided it aligns with team goals and ongoing projects. However, for production roles that require direct interaction with our systems and technologies, on-site presence remains essential.',
  },
  {
    q: 'What will I learn?',
    a: 'Our program covers comprehensive training in renewable energy, smart automation, AI/ML, IoT systems, and advanced technology implementation.',
  },
  {
    q: 'What kind of employment can I get?',
    a: 'We offer various positions including full-time roles, internships, contract positions, and project-based opportunities across engineering, design, and manufacturing.',
  },
];

/* ─────────────── animation variants ─────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ─────────────── FAQ accordion item ─────────────── */
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${open ? 'text-emerald-400' : 'text-white group-hover:text-emerald-300'}`}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-4 text-emerald-400"
        >
          <FaPlus className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#a0a0a0] leading-relaxed text-sm md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('joining');

  // Perks data for "Joining Us"
  const perks = [
    {
      icon: FaLightbulb,
      title: 'Be part of the change',
      description: 'Work on technologies that revolutionize renewable energy, smart automation, and advanced technologies, creating real impact for a greener planet.',
    },
    {
      icon: FaChartLine,
      title: 'Growth & development',
      description: 'Gain hands-on experience through R&D, live projects, and technical mentorship in a company driven by continuous learning and innovation.',
    },
    {
      icon: FaCogs,
      title: 'Innovation-driven culture',
      description: 'Collaborate with brilliant engineers and researchers where creative thinking, shared knowledge, and breakthrough ideas thrive.',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Relocation & support',
      description: 'We assist with relocation, providing support and resources for seamless transition into the RYM ecosystem.',
    },
    {
      icon: FaLink,
      title: 'Global collaboration',
      description: 'Engage with partners, clients, and industry leaders globally, expanding your network and learning opportunities beyond boundaries.',
    },
    {
      icon: FaRobot,
      title: 'Industry of the future',
      description: 'Be part of the technology frontier shaping energy-driven sustainability through emerging tech and smart systems.',
    },
  ];

  // Life at RYM sections for "Joining Us"
  const lifeAtRym = [
    {
      title: 'How we Inspire',
      description: 'RYM Grenergy is an innovative tech company driven by passion in renewable energy and automation. Through cutting-edge technology, we are shaping the future by pioneering smart green solutions for efficiency and sustainability in the industry.',
      image: carrer3,
    },
    {
      title: 'How we Act',
      description: 'At RYM Grenergy, innovators from diverse backgrounds come together with shared purpose, collaborating on impactful projects. United by our drive to transform energy and technology, we empower each team member to grow with us.',
      image: carrer1,
    },
    {
      title: 'How we Grow',
      description: 'RYM Grenergy brings together innovators driven by a common mission: to shape the future with intelligent, sustainable, and eco-friendly solutions. We enable collaborative growth and technological innovation for sustainable future.',
      image: carrer2,
    },
  ];

  // Jobs data for "Joining Us"
  const jobs = [
    { title: 'Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop' },
    { title: 'Manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
    { title: 'Engineering', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop' },
    { title: 'Research', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop' },
    { title: 'Product', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop' },
    { title: 'Operations', image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  // Learning data for "Students"
  const studentBenefits = [
    {
      icon: FaStar,
      title: 'Learning & Mentorship',
      description: 'Gain hands-on experience through diverse projects and learn from industry experts driving innovation in renewable energy and automation.',
    },
    {
      icon: FaRobot,
      title: 'Innovation Exposure',
      description: 'Work on next-generation technologies and smart systems, gaining practical exposure to breakthrough ideas in renewable energy.',
    },
  ];

  // Life at RYM for Students
  const studentLifeAtRym = [
    {
      icon: FaUsers,
      title: 'Students',
      description: 'At RYM Grenergy, many of our opportunities for students and young professionals don\'t require a degree as we value skills. Currently pursuing emerging technologies or skilled tradespeople are welcome.',
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: FaUsers,
      title: 'Cultural Fit',
      description: 'Built on innovation, responsibility, and sustainability, cultural fit is an important part of how we grow our team. If you are excited about innovation and ambitious energy in renewable energy.',
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: FaStar,
      title: 'Passion for our mission',
      description: 'At RYM Grenergy, our mission is to drive the future of sustainable energy at the heart of everything we do. We believe in ownership, continuous learning, and empowering every team member to grow with us.',
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-black to-black" />
        <div className="absolute top-24 left-1/4 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-semibold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Careers
            </motion.h1>
            <motion.p className="text-center text-gray-400 max-w-3xl mx-auto mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              At RYM Grenergy we hire curious builders, problem solvers, and makers. Join a team working on renewable energy, smart automation, and products that make a real-world impact.
            </motion.p>

            {/* Tab Navigation */}
            <motion.div
              className="flex justify-center gap-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => setActiveTab('joining')}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeTab === 'joining'
                  ? 'bg-emerald-500/10 text-white border border-emerald-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/3'
                  }`}
              >
                Joining Us
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeTab === 'students'
                  ? 'bg-emerald-500/10 text-white border border-emerald-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/3'
                  }`}
              >
                Students
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Joining Us Tab */}
      {activeTab === 'joining' && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={tabVariants}
        >
          {/* Becoming a dRYMer Section */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Becoming a dRYMer</h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                      At RYM Grenergy, we are driven by innovation and sustainability. With a passion for renewable energy, smart automation, and advanced technologies, we design and develop eco-friendly solutions such as solid-state batteries, AI-powered inverter systems, our next-simple—what we build today will power a greener tomorrow. If this appeals to you, join us and become part of our journey towards a smarter, sustainable future.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-emerald-400 text-black px-6 py-2 font-semibold rounded hover:bg-emerald-300 transition-colors"
                      onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Find Your Challenge →
                    </motion.button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl relative"
                  >
                    <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10" />
                    <img
                      src={joinImage}
                      alt="Renewable Energy Tech"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Perks Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-emerald-500/5 to-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-3xl md:text-4xl font-semibold text-center mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Some perks when joining RYM Grenergy
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  {perks.map((perk, index) => {
                    const IconComponent = perk.icon;
                    return (
                      <motion.div
                        key={index}
                        className="relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 group overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex justify-center mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            <IconComponent className="text-emerald-400 text-3xl" />
                          </div>
                        </div>
                        <h3 className="relative z-10 text-xl font-semibold mb-3 text-center group-hover:text-emerald-300 transition-colors">{perk.title}</h3>
                        <p className="relative z-10 text-gray-400 text-sm leading-relaxed text-center">{perk.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Life at RYM Section */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-3xl md:text-4xl font-semibold text-center mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Life at RYM Grenergy
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {lifeAtRym.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group bg-gradient-to-br from-emerald-500/10 to-black border border-emerald-500/20 rounded-2xl p-6 hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 overflow-hidden relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ borderColor: 'rgba(16, 185, 129, 0.5)' }}
                    >
                      <div className="h-40 rounded-xl mb-6 overflow-hidden relative">
                        <img src={item.image} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Jobs Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-emerald-500/5 to-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-3xl md:text-4xl font-semibold text-center mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Learn more about our different jobs
                </motion.h2>
                <div id="jobs" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {jobs.map((job, index) => (
                    <motion.div
                      key={index}
                      className="group relative h-48 rounded-2xl overflow-hidden flex items-end justify-start p-6 cursor-pointer shadow-lg border border-white/5 hover:border-emerald-500/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${job.image})` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <h3 className="relative text-xl font-semibold text-white z-10">{job.title}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-semibold mb-8">Your Questions Answered....</h2>
                </motion.div>
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {[
                    { q: 'Can I work remote?', a: 'At RYM Grenergy, our teams are dynamic and often collaborate across different locations. At times, it may be more efficient to work remotely for a short period, provided it aligns with team goals and ongoing projects. However, for production roles that require direct interaction with our systems and technologies, on-site presence remains essential.' },
                    { q: 'What will I learn?', a: 'Our program covers comprehensive training in renewable energy, smart automation, AI/ML, IoT systems, and advanced technology implementation.' },
                    { q: 'What kind of employment can I get?', a: 'We offer various positions including full-time roles, internships, contract positions, and project-based opportunities across engineering, design, and manufacturing.' },
                  ].map((faq, index) => (
                    <FAQItem key={index} q={faq.q} a={faq.a} />
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      )}

      {/* Students Tab */}
      {activeTab === 'students' && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={tabVariants}
        >
          {/* Calling all Students Section */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Calling all Students!</h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                      Developing sustainable technologies and smart energy systems is a bold endeavor. At RYM Grenergy, we invite you to be part of it. Together, we are driving innovation in renewable energy, AI, and IoT to create solutions that make a real impact on the planet. We believe in ownership, continuous learning, and empowering every team member to grow with us. Explore our work cultures and learn how you can contribute to shaping a smarter, green future.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl relative"
                  >
                    <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10" />
                    <img
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                      alt="Students Learning"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* A Place to Grow Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-emerald-500/5 to-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-3xl md:text-4xl font-semibold text-center mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  A Place to Grow
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {studentBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        className="relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 group overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex justify-center mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            <IconComponent className="text-emerald-400 text-3xl" />
                          </div>
                        </div>
                        <h3 className="relative z-10 text-xl font-semibold mb-3 text-center group-hover:text-emerald-300 transition-colors">{benefit.title}</h3>
                        <p className="relative z-10 text-gray-400 text-sm leading-relaxed text-center">{benefit.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                      "It has actually been like a second university, I have learnt so much in such a short period of time.
                    </p>
                    <p className="text-gray-400 text-sm italic">Dummy Name - Manufacturing Associate - Madhya Pradesh</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl relative"
                  >
                    <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10" />
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                      alt="Testimonial"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Life at RYM for Students */}
          <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-emerald-500/5 to-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-3xl md:text-4xl font-semibold text-center mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Life at RYM Grenergy
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {studentLifeAtRym.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="group bg-gradient-to-br from-emerald-500/10 to-black border border-emerald-500/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ borderColor: 'rgba(16, 185, 129, 0.5)' }}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <IconComponent className="text-emerald-400 text-3xl" />
                        </div>
                        <div className="h-40 rounded-xl mb-6 overflow-hidden relative">
                          <img src={item.image} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section for Students */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-semibold mb-8">Your Questions Answered....</h2>
                </motion.div>
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {[
                    { q: 'Can I work remote?', a: 'At RYM Grenergy, our teams are dynamic and often collaborate across different locations. At times, it may be more efficient to work remotely for a short period, provided it aligns with team goals and ongoing projects. However, for production roles that require direct interaction with our systems and technologies, on-site presence remains essential.' },
                    { q: 'What will I learn?', a: 'Our student program covers comprehensive training in renewable energy, smart automation, AI/ML, IoT systems, and advanced technology implementation with real project experience.' },
                    { q: 'What kind of employment can I get?', a: 'We offer internships, apprenticeships, project-based opportunities, and potential full-time positions across various departments.' },
                  ].map((faq, index) => (
                    <FAQItem key={index} q={faq.q} a={faq.a} />
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
};

export default CareersPage;
