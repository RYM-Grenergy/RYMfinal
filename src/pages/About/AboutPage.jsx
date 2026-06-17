import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import leaderOne from '../../assets/images/YR.png';
import leaderTwo from '../../assets/images/AryanSani.png';
import leaderThree from '../../assets/images/image copy.jpeg';
import leaderFour from '../../assets/images/Saurav.jpeg';
import topAboutImage from '../../assets/images/Section_Image.jpeg';
import aboutImageOne from '../../assets/images/achievement_kpit_gold_award.jpg';
import aboutImageTwo from '../../assets/images/achievement_nrl_group_photo.jpg';
import { useTheme } from '../../context/ThemeContext';

const leaders = [
  {
    name: 'Yograj Rundhanker',
    role: 'Founder & CEO',
    text: 'Specializes in AI/ML and IOT innovations for Sustainability, leading projects like Ultron, AI Drive Through, and Rezonix to enhance efficiency and eco-friendly technology.',
    image: leaderOne,
  },
  {
    name: 'Aryan Saini',
    role: 'CTO',
    text: 'Specializes in Web Development and Embedded Systems, driving innovation in IoT, AI-powered automation, and smart technologies for seamless integration and efficiency.',
    image: leaderTwo,
  },
  {
    name: 'Dheeraj Anand',
    role: 'Business Technology Consultant',
    text: 'Founder at Bworth Technologies Pvt. Ltd. Director at VegaVruddhi Pvt. Ltd. Building scalable, impact-driven businesses and leading innovation-driven ventures with a focus on growth, technology, and long-term value creation.',
    image: leaderThree,
  },
  {
    name: 'Saurabh Jain',
    role: 'Director',
    text: ' Business leader and entrepreneur with expertise in business strategy, sales, marketing, IT strategy, and business development. As Director at RYM Grenergy and Founder of VegaVruddhi Private Limited, he focuses on building scalable, innovation-driven ventures that create long-term impact.',
    image: leaderFour,
  },
];

const AboutPage = () => {
  const { isDark } = useTheme();
  const aboutImages = [topAboutImage, aboutImageOne, aboutImageTwo];

  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const text = `Hi RYM Grenergy,\n\nI am requesting information from the About page. Here are my details:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}`;
    const whatsappUrl = `https://wa.me/918200055645?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setForm({ name: '', phone: '', email: '' });
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
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
              About
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              <div className="hidden lg:flex lg:col-span-1 items-start justify-center pt-8">
                <p className="text-6xl font-bold text-emerald-400 rotate-180 tracking-wide" style={{ writingMode: 'vertical-rl' }}>
                  Our Leadership
                </p>
              </div>

              <div className="lg:col-span-11">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                  {leaders.slice(0, 2).map((leader, index) => (
                    <motion.article
                      key={leader.name}
                      className="flex flex-col"
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex flex-row items-start gap-4 md:gap-5 mb-4">
                        <motion.div
                          className="relative w-40 h-56 md:w-52 md:h-64 overflow-hidden group cursor-pointer bg-zinc-900 shrink-0 rounded-lg shadow-lg shadow-emerald-500/10 border border-emerald-500/20"
                          whileHover={{ scale: 1.03, y: -4 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-emerald-500/90 via-emerald-500/50 to-transparent transition-all duration-500 group-hover:from-emerald-400/95 pointer-events-none"></div>
                        </motion.div>
                        <div className="pt-2">
                          <h3 className="text-xl md:text-2xl font-medium text-white">{leader.name}</h3>
                          <div className="w-10 h-0.5 bg-emerald-400 my-2" />
                          <p className="text-zinc-500 italic text-md">{leader.role}</p>
                        </div>
                      </div>
                      <motion.div
                        className="text-xs md:text-sm text-zinc-400 italic leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {leader.text}
                      </motion.div>
                    </motion.article>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mt-12">
                  {leaders.slice(2).map((leader, index) => (
                    <motion.article
                      key={leader.name}
                      className="flex flex-col"
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 2) * 0.1, duration: 0.5 }}
                    >
                      <div className="flex flex-row items-start gap-4 md:gap-5 mb-4">
                        <motion.div
                          className="relative w-40 h-56 md:w-52 md:h-64 overflow-hidden group cursor-pointer bg-zinc-900 shrink-0 rounded-lg shadow-lg shadow-emerald-500/10 border border-emerald-500/20"
                          whileHover={{ scale: 1.03, y: -4 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-emerald-500/90 via-emerald-500/50 to-transparent transition-all duration-500 group-hover:from-emerald-400/95 pointer-events-none"></div>
                        </motion.div>
                        <div className="pt-2">
                          <h3 className="text-xl md:text-2xl font-medium text-white">{leader.name}</h3>
                          <div className="w-10 h-0.5 bg-emerald-400 my-2" />
                          <p className="text-zinc-500 italic text-md">{leader.role}</p>
                        </div>
                      </div>
                      <motion.div
                        className="text-xs md:text-sm text-zinc-400 italic leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {leader.text}
                      </motion.div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">We are RYM Grenergy</h2>
              <p className="text-zinc-300 max-w-2xl leading-relaxed mb-4">
                In 2023, we announced a bold and simple plan: to enable the future of energy by developing the world&apos;s greenest battery cell.
              </p>
              <p className="text-zinc-300 max-w-2xl leading-relaxed text-sm">
                RYM Grenergy is a deep-tech company focused on building sustainable energy solutions and intelligent systems. We are committed to driving innovation in energy and advanced technologies.

                We specialize in AI-driven solutions, smart automation platforms, IoT-enabled hardware, and embedded systems. By combining artificial intelligence, edge computing, and smart hardware design, we create scalable solutions that solve real-world challenges across energy, infrastructure, mobility, and industrial domains.

                Our goal is to develop efficient, resilient, and sustainable technologies that empower industries and contribute to a smarter, greener future.





              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {aboutImages.map((image, index) => (
                <div
                  key={image}
                  className={`relative overflow-hidden border border-white/10 bg-zinc-900 ${index === 0 ? 'sm:col-span-2 h-56 md:h-64' : 'h-52 md:h-64'}`}
                >
                  <img
                    src={image}
                    alt={`About section image ${index + 1}`}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className={`max-w-6xl mx-auto relative overflow-hidden border ${isDark ? 'border-white/10 bg-white/[0.02]' : 'border-emerald-500/20 bg-black/50'}`}>
            <iframe
              title="RYM Grenergy Location"
              src="https://maps.google.com/maps?q=Gurugram%20NCR%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 md:h-80"
              style={{ filter: isDark ? 'grayscale(0.48) saturate(0.72) brightness(0.68) contrast(1.1)' : 'grayscale(0.25) saturate(0.85) brightness(0.82) contrast(1.05)' }}
              loading="lazy"
            />
            <div className={`pointer-events-none absolute inset-0 ${isDark ? 'bg-emerald-500/18 mix-blend-multiply' : 'bg-emerald-500/14 mix-blend-multiply'}`} />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">Get In Touch With Us!</h2>
              <p className="text-zinc-300 leading-relaxed max-w-md mb-8">
                Begin your journey at RYM. Fill in your details and our team will reach out to you.
              </p>

              <div className="space-y-4 text-zinc-300 text-sm">
                <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-emerald-400" /> Gurugram, NCR, India</p>
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-emerald-400" />
                  <a href="tel:+918200055645" className="hover:text-emerald-400 transition-colors">+91-82000-55645</a>
                </p>
                <p className="flex items-center gap-3">
                  <FaWhatsapp className="text-[#25D366]" />
                  <a href="https://wa.me/918200055645" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">+91-82000-55645</a>
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-emerald-400" />
                  <a href="mailto:contact@rym-grenergy.com" className="hover:text-emerald-400 transition-colors">contact@rym-grenergy.com</a>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-zinc-900/80 border border-white/10 p-6 md:p-8 space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handle}
                required
                placeholder="Name*"
                className="w-full bg-white/90 text-black px-4 py-3 outline-none border border-transparent focus:border-emerald-400"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handle}
                required
                placeholder="Phone Number*"
                className="w-full bg-white/90 text-black px-4 py-3 outline-none border border-transparent focus:border-emerald-400"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handle}
                required
                placeholder="Email*"
                className="w-full bg-white/90 text-black px-4 py-3 outline-none border border-transparent focus:border-emerald-400"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-emerald-400 text-black font-semibold py-3 hover:bg-emerald-300 transition-colors disabled:opacity-60 cursor-pointer"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
              <p className="text-xs text-zinc-500 leading-relaxed">
                By clicking on &quot;Submit&quot; you are agreeing to our Privacy Policy and are allowing us (RYM Energy) and our service partners to get in touch with you.
              </p>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
