import React, { useState, useEffect, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { achievementsPageData } from '../../data/data';
import journeyImage from '../../assets/images/image.png';
import achievementNrl5thPrize from '../../assets/images/achievement_nrl_5th_prize.jpg';
import achievementKpitGoldAward from '../../assets/images/achievement_kpit_gold_award.jpg';

const ImageSlider = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); };
  return (
    <div className="relative h-full w-full">
      <img src={images[current]} alt={title} className="h-full w-full object-cover" loading="lazy" />
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-1">
        <FaChevronLeft size={12} />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-1">
        <FaChevronRight size={12} />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === current ? 'bg-emerald-400' : 'bg-white/40'}`} />
        ))}
      </div>
    </div>
  );
};

// Track which cards have already been seen - persists across re-renders
const seenCards = new Set();

// Hook: triggers once when element enters viewport
const useInView = (id, threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => seenCards.has(id));

  useEffect(() => {
    if (seenCards.has(id)) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    // Already visible on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      seenCards.add(id);
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          seenCards.add(id);
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id, threshold]);

  return [ref, inView];
};

const AchievementCard = ({ item, index }) => {
  const [ref, inView] = useInView(item.uid);
  const delay = (index % 3) * 100; // stagger per column

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(32px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
      className="h-[420px] overflow-hidden rounded-xl border border-emerald-400/20 bg-[#111217] shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:rounded-2xl"
    >
      <div className="mx-5 mt-5 h-52 overflow-hidden rounded-lg border border-black/40 bg-[#0f1117]">
        {item.images && item.images.length > 1
          ? <ImageSlider images={item.images} title={item.title} />
          : <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
        }
      </div>
      <div className="flex h-[calc(100%-14.25rem)] flex-col space-y-2 p-5">
        <span className="text-xs font-semibold text-emerald-400">{item.category}</span>
        <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
        <p className="overflow-hidden text-sm italic leading-relaxed text-white/60">{item.description}</p>
      </div>
    </div>
  );
};

const AchievementsPage = () => {
  const mediaCards = achievementsPageData.map((item, index) => ({ ...item, uid: `${item.id}-${index}` }));

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="bg-black text-white">

      {/* Header */}
      <section className="mx-auto max-w-[1300px] px-4 pb-12 pt-24 md:px-8 md:pt-28">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl mb-3">
          Media & Achievements
        </h1>
        <p className="text-white/40 text-sm">Our journey of recognition and innovation</p>
      </section>

      {/* Staggered grid */}
      <section className="mx-auto max-w-[1300px] px-4 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaCards.map((item, index) => (
            <AchievementCard key={item.uid} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* We are RYM section */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-[#050608] py-20">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">We are RYM Grenergy</h2>
            <p className="max-w-md text-lg italic text-white/75">
              In 2022, we announced a bold and simple plan: to enable the future of energy by developing the world&apos;s greenest battery cell.
            </p>
            <button className="inline-flex items-center gap-2 bg-emerald-400 px-5 py-2 text-sm font-semibold text-black hover:bg-emerald-300 transition-colors">
              Know More <FiArrowUpRight />
            </button>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f14] p-3 md:h-[420px]">
            <img src={journeyImage} alt="Journey" className="h-full w-full rounded-xl object-cover" loading="lazy" />
            <div className="absolute -bottom-2 left-3 w-[42%] max-w-[220px] overflow-hidden rounded-xl border border-white/20">
              <img src={achievementKpitGoldAward} alt="KPIT Gold Award" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute right-3 top-4 w-[38%] max-w-[190px] overflow-hidden rounded-xl border border-white/20">
              <img src={achievementNrl5thPrize} alt="NRL Prize" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-10 px-4 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Get In Touch With Us!</h2>
              <p className="max-w-[560px] text-base italic leading-relaxed text-white/80 md:text-xl">
                Begin your journey at RYM. Fill in your details and our team will reach out to you.
              </p>
            </div>
            <div className="space-y-4 pt-1 text-white/95">
              <div className="flex items-center gap-4 text-base md:text-lg">
                <FaMapMarkerAlt className="text-emerald-400" />
                <span>Gurugram, NCR, India</span>
              </div>
              <div className="flex items-center gap-4 text-base md:text-lg">
                <FaPhoneAlt className="text-emerald-400" />
                <a href="tel:+918200055645" className="hover:text-emerald-300 transition-colors">+91-82000-55645</a>
              </div>
              <div className="flex items-center gap-4 text-base md:text-lg">
                <FaEnvelope className="text-emerald-400" />
                <a href="mailto:contact@rym-grenergy.com" className="break-all hover:text-emerald-300 transition-colors">contact@rym-grenergy.com</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-4 border border-white/15 bg-[#0b0c14] p-5 md:p-7">
            <input type="text" placeholder="Name*" className="w-full border border-transparent bg-[#d5d5d5] px-4 py-3 text-sm text-black/75 outline-none focus:border-emerald-500 md:px-5 md:text-base" />
            <input type="text" placeholder="Phone Number*" className="w-full border border-transparent bg-[#d5d5d5] px-4 py-3 text-sm text-black/75 outline-none focus:border-emerald-500 md:px-5 md:text-base" />
            <input type="email" placeholder="Email*" className="w-full border border-transparent bg-[#d5d5d5] px-4 py-3 text-sm text-black/75 outline-none focus:border-emerald-500 md:px-5 md:text-base" />
            <button type="submit" className="w-full bg-emerald-400 px-4 py-3 text-base font-semibold text-black hover:bg-emerald-300 transition-colors md:text-lg">
              Submit
            </button>
            <p className="pt-2 text-xs leading-relaxed text-white/40 md:text-sm">
              By clicking on "Submit" you are agreeing to our Privacy Policy and are allowing us (RYM Energy) and our service partners to get in touch with you.
            </p>
          </form>
        </div>
      </section>

    </div>
  );
};

export default AchievementsPage;
