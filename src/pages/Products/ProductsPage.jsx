import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { productsData } from '../../data/data';

/* ───────── helpers ───────── */
const categoryMap = {
  'Ultron AI': 'Energy',
  'Weighbridge AI': 'Commute',
  'EEW (Early Earthquake Warning System)': 'Energy',
  'Smart EV Integration': 'Connected Mobility',
  'REZONIX': 'Wireless Future',
  'CCTV-Based Attendance': 'AI Vision',
  'INTELLEXA AI': 'Intelligent Solutions',
};

const taglineMap = {
  'Ultron AI': 'Smart Energy, Smarter Future',
  'Weighbridge AI': 'Smart traffic-optimization',
  'EEW (Early Earthquake Warning System)': 'Seconds Ahead, Lives Saved.',
  'Smart EV Integration': 'IoT-powered mobile EV command center',
  'REZONIX': 'Intelligent Power, Wireless Future.',
  'CCTV-Based Attendance': 'Instant Attendance, Effortless Accuracy.',
  'INTELLEXA AI': 'Drive Smarter, Stay Connected',
};

const fillGrid = (data) => {
  const rows = [];
  while (rows.length < 12) {
    data.forEach((p) => {
      if (rows.length < 12) rows.push({ ...p, _key: `${p.id}-${rows.length}` });
    });
  }
  return rows;
};

/* ───────── Product Card ───────── */
const ProductCard = ({ product, onOpen, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/[0.06] rounded-[20px] overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.15)]"
      style={{ willChange: 'transform' }}
    >
      {/* spotlight follow cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.06), transparent 40%)',
        }}
      />

      {/* top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* image */}
      <div className="relative h-[200px] md:h-[220px] w-full overflow-hidden bg-[#050505] flex items-center justify-center p-8 md:p-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* category pill floating on image */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] text-zinc-300 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          {categoryMap[product.name] || 'Energy'}
        </div>
      </div>

      {/* info */}
      <div className="relative z-20 p-6 flex flex-col gap-3 flex-1 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
        {/* name + category */}
        <div className="flex flex-col gap-1.5">
          <span className="text-emerald-400/90 text-[10px] font-bold tracking-[0.15em] uppercase">
            {categoryMap[product.name] || 'Energy'}
          </span>
          <h3 className="text-white font-bold text-[1.15rem] tracking-tight">{product.name}</h3>
        </div>

        {/* tagline */}
        <p className="text-zinc-400 text-sm leading-relaxed font-light mt-1">
          {taglineMap[product.name] || (product.description ? product.description.slice(0, 80) + '...' : '')}
        </p>

        {/* CTA */}
        <button
          onClick={() => onOpen(product)}
          className="mt-6 self-start inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)] active:scale-95"
        >
          Know More <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

/* ───────── Contact Form ───────── */
const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert('Thank you! We will reach out to you soon.');
      setForm({ name: '', phone: '', email: '' });
      setSubmitting(false);
    }, 1200);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Get In Touch<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">With Us!</span>
            </h2>
            <p className="text-emerald-400/80 text-sm md:text-base leading-relaxed max-w-sm font-light">
              Begin your journey at RYM.<br />
              Fill in your details and our team will reach out to you
            </p>
            {/* decorative dots */}
            <div className="flex gap-2 mt-10">
              {[0,1,2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-emerald-500/40"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </motion.div>

          {/* right form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 pointer-events-none" />
            <div className="relative bg-[#0f0f0f] border border-white/[0.08] rounded-[24px] p-8 sm:p-10 lg:p-12 backdrop-blur-sm shadow-2xl">
              {/* top accent */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

              <form onSubmit={submit} className="flex flex-col gap-5">
                {[
                  { name: 'name', type: 'text', placeholder: 'Name*' },
                  { name: 'phone', type: 'tel', placeholder: 'Phone Number*' },
                  { name: 'email', type: 'email', placeholder: 'Email*' },
                ].map((field) => (
                  <div key={field.name} className="relative group/input">
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handle}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-5 py-4 bg-white border-2 border-zinc-200 rounded-xl text-black text-sm font-medium placeholder-zinc-400 outline-none focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)] transition-all duration-300"
                    />
                  </div>
                ))}

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.97 }}
                  className="relative mt-2 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-sm uppercase tracking-[0.15em] disabled:opacity-60 transition-all duration-300 overflow-hidden group/btn hover:shadow-[0_12px_30px_rgba(16,185,129,0.35)]"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">{submitting ? 'Sending...' : 'Submit'}</span>
                </motion.button>

                <p className="text-[10px] text-zinc-500 leading-relaxed mt-1">
                  By clicking on "Submit" you are agreeing to our{' '}
                  <span className="text-emerald-400 underline cursor-pointer hover:text-emerald-300 transition-colors">Privacy Policy</span>{' '}
                  and are allowing us (RYM Energy) and our service partners to get in touch with you.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ───────── Filter Pill ───────── */
const FilterPill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border overflow-hidden ${
      active
        ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.15)]'
        : 'border-white/[0.08] text-zinc-500 hover:text-zinc-200 hover:border-white/20 hover:bg-white/[0.03]'
    }`}
  >
    {active && (
      <motion.div
        layoutId="activeFilter"
        className="absolute inset-0 bg-emerald-500/10 rounded-full"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    )}
    <span className="relative z-10">{label}</span>
  </button>
);

/* ───────── Main Page ───────── */
const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('All');

  const cards = productsData;
  const filteredCards =
    filter === 'All'
      ? cards
      : cards.filter((p) => (categoryMap[p.name] || '') === filter);

  const categories = ['All', 'Intelligent Solutions', 'Commute', 'Energy', 'Connected Mobility', 'Wireless Future', 'AI Vision'];

  return (
    <>
      {/* ── Product Grid Section ── */}
      <section className="relative bg-[#060606] pt-28 pb-20 md:pt-36 md:pb-28 min-h-screen overflow-hidden">
        {/* ambient bg */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-teal-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
        
        {/* grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />

        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-[1400px]">

          {/* ── Header ── */}
          <div className="mb-16 md:mb-20">
            {/* title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
            >
              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
                Future of energy
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                  starter kit
                </span>
              </motion.h1>
            </motion.div>

            {/* toolbar row without Filter/Relevance buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="flex items-center gap-3 flex-wrap justify-center">
                {categories.map((cat) => (
                  <FilterPill
                    key={cat}
                    label={cat}
                    active={filter === cat}
                    onClick={() => setFilter(cat)}
                  />
                ))}
              </div>
            </motion.div>

          </div>

          {/* ── Cards Grid ── */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCards.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onOpen={setSelectedProduct}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* ── Contact Section ── */}
      <ContactForm />

      {/* ── Product Detail Modal ── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/[0.08] rounded-[28px] max-w-[850px] w-full max-h-[90vh] overflow-y-auto shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_60px_rgba(16,185,129,0.1)]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* top accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent rounded-t-[28px]" />

              <button
                className="absolute top-5 right-5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-white text-sm z-10 transition-all duration-200 hover:bg-emerald-500 hover:text-black hover:scale-110 hover:border-emerald-500"
                onClick={() => setSelectedProduct(null)}
              >
                <FaTimes />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden rounded-tl-[28px] rounded-bl-none md:rounded-bl-[28px] rounded-tr-[28px] md:rounded-tr-none bg-[#050505] flex items-center justify-center p-8 md:p-12">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain max-h-[250px] sm:max-h-[350px] md:max-h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/50 pointer-events-none" />
                </div>
                <div className="flex flex-col justify-center gap-5 p-8 md:p-10 lg:p-12">
                  <span className="inline-flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {categoryMap[selectedProduct.name] || 'Energy'}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {selectedProduct.name}
                  </h2>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-transparent" />
                  <p className="text-sm md:text-[15px] leading-[1.8] text-zinc-400 font-light">
                    {selectedProduct.description}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="self-start mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black text-xs font-bold uppercase tracking-[0.15em] hover:bg-emerald-400 hover:shadow-[0_8px_24px_rgba(16,185,129,0.35)] transition-all duration-300 active:scale-95"
                  >
                    Close <FaTimes className="text-[9px]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductsPage;