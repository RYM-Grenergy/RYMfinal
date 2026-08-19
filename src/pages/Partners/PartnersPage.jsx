import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaExternalLinkAlt } from 'react-icons/fa';
import vegavruddhiLogo from '../../assets/images/partner_vegavruddhi.png';
import synchronousLogo from '../../assets/images/partner_synchronous.png';
import boxfoxLogo from '../../assets/images/partner_boxfox.png';
import seemeeLogo from '../../assets/images/partner_seemee.png';
import sovraLogo from '../../assets/images/partner_sovra.png';
import bworthLogo from '../../assets/images/partner_bworth.png';
import closetrushLogo from '../../assets/images/partner_closetrush.png';
import iitRoorkeeLogo from '../../assets/images/partner_iit_roorkee.png';
import inventisLabsLogo from '../../assets/images/partner_inventis_labs.png';
import jswLogo from '../../assets/images/partner_jsw.png';
import leymenLogo from '../../assets/images/partner_leymen.png';
import bmLogo from '../../assets/images/partner_bm.png';
import khannasSupremeLogo from '../../assets/images/partner_khannas_supreme.png';
import shreeCementLogo from '../../assets/images/partner_shree_cement.png';
import rkMarbleLogo from '../../assets/images/partner_rk_marble.png';
import jkCementLogo from '../../assets/images/partner_jk_cement.png';
import golchaAssociatedLogo from '../../assets/images/partner_golcha_associated.png';
import gkmLogo from '../../assets/images/partner_gkm.png';
import aclLogo from '../../assets/images/partner_acl.png';

const partnersData = [
  {
    id: 1,
    name: 'Vegavruddhi Pvt. Ltd.',
    logo: vegavruddhiLogo,
    description: 'A dynamic consulting and execution partner committed to helping organizations streamline and strengthen their operational journey. Partnering with RYM Grenergy to drive impactful growth with agile execution and unmatched scale.',
    website: 'https://www.vegavruddhi.com',
    category: 'Business Partner'
  },
  {
    id: 2,
    name: 'Synchronous Build Digital Pvt. Ltd.',
    logo: synchronousLogo,
    description: 'A digital solutions company creating high-speed, friendly digital systems including branding and websites to help businesses grow easily. RYM Grenergy developed the REZONIX wireless energy platform for Synchronous Build Digital.',
    website: 'https://synchronousbuilddigital.com',
    category: 'Technology Partner'
  },
  {
    id: 3,
    name: 'BoxFox',
    logo: boxfoxLogo,
    description: 'A trusted partner of RYM Grenergy, collaborating to deliver innovative solutions and drive business growth across technology and digital domains.',
    website: '#',
    category: 'Business Partner'
  },
  {
    id: 4,
    name: 'See Mee',
    logo: seemeeLogo,
    description: 'A fashion brand partnering with RYM Grenergy to integrate smart technology and innovation into the lifestyle and fashion industry.',
    website: '#',
    category: 'Fashion Partner'
  },
  {
    id: 5,
    name: 'Sovra',
    logo: sovraLogo,
    description: 'An Indian jewellery brand crafting hypoallergenic, skin-safe jewellery designed for everyday comfort and elegance. Sovra partners with RYM Grenergy to bring smart technology and innovation into the jewellery and lifestyle space.',
    website: 'https://sovra.in',
    category: 'Lifestyle Partner'
  },
  {
    id: 6,
    name: 'BWorth',
    logo: bworthLogo,
    description: 'A Gurugram-based ecommerce startup with a revolutionary affiliate marketplace. Users can sell old clothes for Worth coins and unlock discounts on new items, promoting eco-friendly and sustainable fashion consumption.',
    website: '#',
    category: 'Ecommerce Partner'
  },
  {
    id: 7,
    name: 'ClosetRush',
    logo: closetrushLogo,
    description: 'A subscription-based linen rental service delivering cleaned and sanitized bedsheets to households, working professionals, students, and hospitality businesses across India.',
    website: '#',
    category: 'Lifestyle Partner'
  },
  {
    id: 8,
    name: 'IIT Roorkee',
    logo: iitRoorkeeLogo,
    description: 'A premier technical institution in India. RYM Grenergy is proud to be supported by TIDES IIT Roorkee and has received the prestigious DST-NIDHI PRAYAS Grant, fostering innovation and research excellence.',
    website: 'https://www.iitr.ac.in',
    category: 'Academic Partner'
  },
  {
    id: 9,
    name: 'Inventis Labs',
    logo: inventisLabsLogo,
    description: 'An innovation and technology partner specializing in IoT solutions, smart automation, and advanced electronics. Collaborating with RYM Grenergy to develop cutting-edge intelligent systems for energy management and industrial applications.',
    website: '#',
    category: 'Technology Partner'
  },
  {
    id: 10,
    name: 'JSW Group',
    logo: jswLogo,
    description: 'One of India\'s leading conglomerates with diverse business interests spanning steel, energy, infrastructure, cement, and more. Partnering with RYM Grenergy to drive innovation in sustainable energy solutions and industrial automation.',
    website: 'https://www.jsw.in',
    category: 'Industry Partner'
  },
  {
    id: 11,
    name: 'Leymen',
    logo: leymenLogo,
    description: 'A strategic partner specializing in electronics manufacturing and advanced technology solutions. Collaborating with RYM Grenergy to develop innovative electronic systems and components for smart energy applications.',
    website: '#',
    category: 'Manufacturing Partner'
  },
  {
    id: 12,
    name: 'BM',
    logo: bmLogo,
    description: 'A premium lifestyle and fashion partner collaborating with RYM Grenergy to integrate smart technology and innovation into modern lifestyle solutions.',
    website: '#',
    category: 'Lifestyle Partner'
  },
  {
    id: 13,
    name: 'Khanna\'s Supreme',
    logo: khannasSupremeLogo,
    description: 'A distinguished partner specializing in premium products and services. Collaborating with RYM Grenergy to deliver excellence and innovation across multiple domains.',
    website: '#',
    category: 'Business Partner'
  },
  {
    id: 14,
    name: 'Shree Cement',
    logo: shreeCementLogo,
    description: 'One of India\'s leading cement manufacturers with a strong focus on sustainability and innovation. Partnering with RYM Grenergy to integrate smart energy solutions and automation technologies in industrial operations.',
    website: 'https://www.shreecement.com',
    category: 'Industry Partner'
  },
  {
    id: 15,
    name: 'RK Marble',
    logo: rkMarbleLogo,
    description: 'Khoobsurat Imaandaari - A trusted name in marble and stone solutions, delivering quality products with integrity. Partnering with RYM Grenergy to bring innovation and technology to the marble industry.',
    website: '#',
    category: 'Industry Partner'
  },
  {
    id: 16,
    name: 'JK Cement',
    logo: jkCementLogo,
    description: 'A leading cement manufacturer in India committed to quality, sustainability, and innovation. Partnering with RYM Grenergy to implement smart energy management and automation solutions for sustainable industrial operations.',
    website: 'https://www.jkcement.com',
    category: 'Industry Partner'
  },
  {
    id: 17,
    name: 'Golcha Associated',
    logo: golchaAssociatedLogo,
    description: 'A prominent business group with diverse interests across minerals, construction materials, and industrial products. Collaborating with RYM Grenergy to integrate innovative energy solutions and smart automation technologies.',
    website: '#',
    category: 'Industry Partner'
  },
  {
    id: 18,
    name: 'GKM',
    logo: gkmLogo,
    description: 'Enlightening the World - A trusted client partnering with RYM Grenergy on innovative energy solutions and smart technology implementations to create a brighter, more sustainable future.',
    website: '#',
    category: 'Client Partner'
  },
  {
    id: 19,
    name: 'ACL',
    logo: aclLogo,
    description: 'A strategic partner collaborating with RYM Grenergy to deliver innovative solutions and drive excellence across industrial and technology domains.',
    website: '#',
    category: 'Industry Partner'
  }
];

const PartnersPage = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-96 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <section className="relative mx-auto max-w-[1300px] px-4 pb-24 pt-28 md:px-8 md:pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-emerald-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-bold flex items-center gap-2">
              <FaHandshake /> Our Partners
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Trusted{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Partners
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We collaborate with industry leaders and innovative organizations to deliver cutting-edge solutions and create lasting impact.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-emerald-400/20 bg-[#111217] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:border-emerald-400/50 transition-all duration-300"
            >
              {/* Logo */}
              <div className="mb-6 flex h-36 items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                  {partner.category}
                </span>
                <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                <p className="text-sm leading-relaxed text-white/60">{partner.description}</p>
              </div>

              
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center border border-emerald-400/20 rounded-2xl bg-[#111217] p-12"
        >
          <FaHandshake className="text-emerald-400 text-4xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Interested in partnering with RYM Grenergy? We are always looking for innovative organizations to collaborate with.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold px-8 py-3 rounded-full hover:from-emerald-400 hover:to-teal-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default PartnersPage;
