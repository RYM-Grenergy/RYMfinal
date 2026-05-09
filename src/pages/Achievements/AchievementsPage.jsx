import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { achievementsPageData } from '../../data/data';
import journeyImage from '../../assets/images/image.png';
import achievementNrl5thPrize from '../../assets/images/achievement_nrl_5th_prize.jpg';
import achievementKpitGoldAward from '../../assets/images/achievement_kpit_gold_award.jpg';

const AchievementsPage = () => {
  const mediaCards = achievementsPageData.map((item, index) => ({
    ...item,
    id: `${item.id}-${index}`
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-96 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <section className="relative mx-auto max-w-[1300px] px-4 pb-20 pt-20 md:px-8 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <h1 className="text-center text-4xl font-semibold tracking-tight md:text-left md:text-6xl">
            Media & Achievements
          </h1>
          <div className="flex items-center gap-3 text-xs text-white/70">
            <button className="rounded border border-white/20 bg-white/5 px-4 py-2 transition hover:border-emerald-400/60 hover:text-emerald-300">
              Filter
            </button>
            <button className="rounded border border-white/20 bg-white/5 px-4 py-2 transition hover:border-emerald-400/60 hover:text-emerald-300">
              Relevance
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {mediaCards.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ y: -6 }}
              className="h-[420px] overflow-hidden rounded-xl border border-emerald-400/20 bg-[#111217] shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:rounded-2xl"
            >
              <div className="mx-5 mt-5 h-52 overflow-hidden rounded-lg border border-black/40 bg-[#0f1117]">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
              </div>

              <div className="flex h-[calc(100%-14.25rem)] flex-col space-y-2 p-5">
                <div className="flex items-center justify-between text-xs text-white/55">
                  <span className="font-semibold text-emerald-400">{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="overflow-hidden text-sm italic leading-relaxed text-white/60">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#050608] py-20">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">We are RYM Grenergy</h2>
            <p className="max-w-md text-lg italic text-white/75">
              In 2022, we announced a bold and simple plan: to enable the future of energy by developing the world&apos;s greenest battery cell.
            </p>
            <button className="inline-flex items-center gap-2 bg-emerald-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-300">
              Know More
              <FiArrowUpRight />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f14] p-3 md:h-[420px]"
          >
            <img
              src={journeyImage}
              alt="Journey of success and recognition"
              className="h-full w-full rounded-xl object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-2 left-3 w-[42%] max-w-[220px] overflow-hidden rounded-xl border border-white/20 shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
              <img
                src={achievementKpitGoldAward}
                alt="Gold award moment"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute right-3 top-4 w-[38%] max-w-[190px] overflow-hidden rounded-xl border border-white/20 shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
              <img
                src={achievementNrl5thPrize}
                alt="NRL hackathon recognition"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-10 px-4 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Get In Touch With Us!</h2>
              <p className="max-w-[560px] text-base italic leading-relaxed text-white/80 md:text-xl md:leading-relaxed">
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
                <a href="tel:+918200055645" className="transition hover:text-emerald-300">
                  +91-82000-55645
                </a>
              </div>
              <div className="flex items-center gap-4 text-base md:text-lg">
                <FaEnvelope className="text-emerald-400" />
                <a href="mailto:contact@rym-grenergy.com" className="break-all transition hover:text-emerald-300">
                  contact@rym-grenergy.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full space-y-4 border border-white/15 bg-[#0b0c14] p-5 md:p-7"
          >
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-transparent bg-[#d5d5d5] px-4 py-3 text-sm text-black/75 outline-none transition focus:border-emerald-500 md:px-5 md:text-base"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full border border-transparent bg-[#d5d5d5] px-4 py-3 text-sm text-black/75 outline-none transition focus:border-emerald-500 md:px-5 md:text-base"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-transparent bg-[#d5d5d5] px-4 py-3 text-sm text-black/75 outline-none transition focus:border-emerald-500 md:px-5 md:text-base"
            />
            <button
              type="submit"
              className="w-full bg-emerald-400 px-4 py-3 text-base font-semibold text-black transition hover:bg-emerald-300 md:text-lg"
            >
              Submit
            </button>
            <p className="pt-2 text-xs leading-relaxed text-white/40 md:text-sm">
              By clicking on "Submit" you are agreeing to our Privacy Policy and are allowing us (RYM Energy) and our service partners to get in touch with you.
            </p>
          </motion.form>
        </div>
      </section>

    </div>
  );
};

export default AchievementsPage;
