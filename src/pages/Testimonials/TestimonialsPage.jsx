import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { testimonialsData } from '../../data/data';
import ctaVisual from '../../assets/images/image.png';

const TestimonialsPage = () => {
  return (
    <div className="relative bg-[#040406] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] bg-emerald-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-[35%] -left-32 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] -right-32 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-[140px]" />
      </div>

      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-8 backdrop-blur-md"
            >
              Testimonials
            </motion.div>
            
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[1] font-black tracking-tighter mb-8 max-w-6xl">
              Voices Behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 drop-shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                RYM Impact
              </span>
            </h1>

            <div className="flex items-center gap-3 text-zinc-500 text-sm md:text-base font-medium py-3 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span className="text-zinc-200">Testimonials</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative background element for the hero */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none">
           <div className="absolute w-[800px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px]" />
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.05 }}
             transition={{ duration: 1.5 }}
             className="text-[12rem] md:text-[24rem] font-black uppercase tracking-tighter"
           >
             Impact
           </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-end mb-16 md:mb-24">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              What Our Clients
              <br />
              <span className="text-emerald-400">Say About Us</span>
            </motion.h2>
 
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl lg:ml-auto"
            >
              Every collaboration reflects our focus on innovation, delivery quality, and measurable outcomes. These experiences come from partners who trusted RYM Grenergy for real-world transformation.
            </motion.p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-linear-to-r from-[#040406] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-linear-to-l from-[#040406] to-transparent z-10" />

            <div className="flex w-max animate-[testimonialsMarquee_36s_linear_infinite]">
              {[0, 1].map((row) => (
                <div key={row} className="flex gap-6 md:gap-8 pr-6 md:pr-8" aria-hidden={row === 1}>
                  {testimonialsData.map((item, index) => (
                    <motion.article
                      key={`${row}-${item.id}`}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.06 }}
                      className="group w-[380px] md:w-[520px] min-h-[300px] border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-[2rem] p-8 md:p-10 flex flex-col shrink-0 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-500"
                    >
                      <div className="flex gap-1 text-emerald-400 text-sm mb-6">{'★★★★★'}</div>
                      <p className="text-zinc-200 text-lg md:text-xl leading-relaxed mb-8 flex-1 italic">"{item.content}"</p>
 
                      <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/20 shrink-0 group-hover:border-emerald-500/50 transition-colors">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg leading-tight">{item.name}</h3>
                          <p className="text-sm text-emerald-400 font-medium">{item.position} <span className="text-zinc-600 px-1">•</span> {item.company}</p>
                          <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">{item.date}</p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes testimonialsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10"
          >
            <img src={ctaVisual} alt="Get started with RYM" className="w-full h-[260px] md:h-[340px] object-cover" />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
              <p className="text-emerald-300 text-xs md:text-sm uppercase tracking-[0.2em] mb-3">Hire Us Now</p>
              <h3 className="text-2xl md:text-5xl font-bold max-w-4xl leading-tight mb-6">Ready To Build Your Next Breakthrough?</h3>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-emerald-300 transition-colors"
              >
                Get Started
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
