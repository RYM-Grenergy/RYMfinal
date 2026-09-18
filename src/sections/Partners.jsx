import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const vegavruddhiLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726354/rym_website/partner_vegavruddhi.jpg';
const synchronousLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726353/rym_website/partner_synchronous.jpg';
const boxfoxLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726342/rym_website/partner_boxfox.jpg';
const seemeeLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726351/rym_website/partner_seemee.jpg';
const sovraLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726353/rym_website/partner_sovra.jpg';
const bworthLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726342/rym_website/partner_bworth.jpg';
const closetrushLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726343/rym_website/partner_closetrush.jpg';
const iitRoorkeeLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726346/rym_website/partner_iit_roorkee.jpg';
const inventisLabsLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726347/rym_website/partner_inventis_labs.jpg';
const jswLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726348/rym_website/partner_jsw.jpg';
const leymenLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726350/rym_website/partner_leymen.jpg';
const bmLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726341/rym_website/partner_bm.jpg';
const khannasSupremeLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726349/rym_website/partner_khannas_supreme.jpg';
const shreeCementLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726352/rym_website/partner_shree_cement.jpg';
const rkMarbleLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726350/rym_website/partner_rk_marble.jpg';
const jkCementLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726347/rym_website/partner_jk_cement.jpg';
const golchaAssociatedLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726345/rym_website/partner_golcha_associated.jpg';
const gkmLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726344/rym_website/partner_gkm.jpg';
const aclLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726340/rym_website/partner_acl.jpg';

const partnersRow1 = [
  { name: 'Vegavruddhi Pvt. Ltd.', logo: vegavruddhiLogo, category: 'Business' },
  { name: 'IIT Roorkee', logo: iitRoorkeeLogo, category: 'Academic' },
  { name: 'JSW Group', logo: jswLogo, category: 'Industry' },
  { name: 'Synchronous Digital', logo: synchronousLogo, category: 'Technology' },
  { name: 'InventisLab', logo: inventisLabsLogo, category: 'Technology' },
  { name: 'Shree Cement', logo: shreeCementLogo, category: 'Industry' },
  { name: 'BWorth Technologies', logo: bworthLogo, category: 'Business' },
  { name: 'JK Cement', logo: jkCementLogo, category: 'Industry' },
  { name: 'BoxFox', logo: boxfoxLogo, category: 'Business' },
];

const partnersRow2 = [
  { name: 'Leymens', logo: leymenLogo, category: 'Manufacturing' },
  { name: 'Golcha Associated', logo: golchaAssociatedLogo, category: 'Industry' },
  { name: 'RK Marble', logo: rkMarbleLogo, category: 'Industry' },
  { name: 'GKM', logo: gkmLogo, category: 'Technology' },
  { name: 'Sovra Jewellery', logo: sovraLogo, category: 'Lifestyle' },
  { name: 'ClosetRush', logo: closetrushLogo, category: 'Ecommerce' },
  { name: 'Bella Moda (BM)', logo: bmLogo, category: 'Lifestyle' },
  { name: 'Khanna\'s Supreme', logo: khannasSupremeLogo, category: 'Lifestyle' },
  { name: 'ACL Electronics', logo: aclLogo, category: 'Manufacturing' },
  { name: 'Seemee', logo: seemeeLogo, category: 'Lifestyle' },
];

const Partners = () => {
  const navigate = useNavigate();

  // Create quadrupled arrays for seamless infinite marquee loop
  const loopRow1 = [...partnersRow1, ...partnersRow1, ...partnersRow1, ...partnersRow1];
  const loopRow2 = [...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2];

  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-[#070707] border-t border-b border-white/[0.05]" id="partners">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl mb-6 md:mb-8 text-center">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4"
        >
          <FaHandshake className="text-emerald-400" /> Strategic Ecosystem
        </motion.div>

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4"
        >
          Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">Partners & Collaborators</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light"
        >
          Partnering with leading conglomerates, technology innovators, academic institutes, and industrial leaders across domains.
        </motion.p>
      </div>

      {/* ── Marquee Row 1 (Scrolls Left) ── */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-6 py-2">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-14 sm:w-24 md:w-40 z-20 bg-gradient-to-r from-[#070707] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-14 sm:w-24 md:w-40 z-20 bg-gradient-to-l from-[#070707] to-transparent pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 md:gap-6">
          {loopRow1.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group flex-shrink-0 flex items-center gap-3 md:gap-4 bg-[#111111]/90 border border-white/[0.08] hover:border-emerald-500/50 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#161616] hover:shadow-[0_10px_25px_rgba(16,185,129,0.15)] cursor-pointer"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/95 rounded-xl p-1.5 md:p-2 flex items-center justify-center border border-white/10 group-hover:border-emerald-400/40 transition-colors">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                />
              </div>
              <div className="flex flex-col pr-1 md:pr-2">
                <span className="text-white font-bold text-xs md:text-sm tracking-tight group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="text-[9px] md:text-[10px] text-emerald-400/80 uppercase tracking-widest font-semibold">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee Row 2 (Scrolls Right) ── */}
      <div className="relative w-full overflow-hidden py-2 mb-8 md:mb-12">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-14 sm:w-24 md:w-40 z-20 bg-gradient-to-r from-[#070707] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-14 sm:w-24 md:w-40 z-20 bg-gradient-to-l from-[#070707] to-transparent pointer-events-none" />

        <div className="animate-marquee-reverse flex items-center gap-4 md:gap-6">
          {loopRow2.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group flex-shrink-0 flex items-center gap-3 md:gap-4 bg-[#111111]/90 border border-white/[0.08] hover:border-emerald-500/50 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#161616] hover:shadow-[0_10px_25px_rgba(16,185,129,0.15)] cursor-pointer"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/95 rounded-xl p-1.5 md:p-2 flex items-center justify-center border border-white/10 group-hover:border-emerald-400/40 transition-colors">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                />
              </div>
              <div className="flex flex-col pr-1 md:pr-2">
                <span className="text-white font-bold text-xs md:text-sm tracking-tight group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="text-[9px] md:text-[10px] text-emerald-400/80 uppercase tracking-widest font-semibold">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore All Partners CTA */}
      <div className="text-center relative z-10 px-4">
        <motion.button
          onClick={() => navigate('/partners')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 shadow-[0_6px_20px_rgba(16,185,129,0.15)] cursor-pointer active:scale-95 w-full sm:w-auto"
        >
          <span>Explore All Partners & Networks</span>
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
};

export default Partners;
