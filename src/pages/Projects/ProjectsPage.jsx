import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCircle,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
  FaTimes,
  FaArrowRight
} from 'react-icons/fa';
import aiVisual from '../../assets/images/CCTV.png';
import intellexaVisual from '../../assets/images/Intelexa.png';
import evVisual from '../../assets/images/EV_Charging.jpeg';
import idpVisual from '../../assets/images/IDP.png';
import eqVisual from '../../assets/images/product.png';
import driveVisual from '../../assets/images/AIDrive.png';
import rezonixVisual from '../../assets/images/Renox.png';
import ais140Visual from '../../assets/images/AIS.png';
import smartHomeVisual from '../../assets/images/SHAS.png';
import { useTheme } from '../../context/ThemeContext';

const projectDetails = [
  {
    id: 'ai-recognition-systems',
    title: 'AI RECOGNITION SYSTEMS',
    subtitle: 'Automating Attendance with IoT-Powered Intelligence',
    accent: 'emerald',
    coverImage: aiVisual,
    summary:
      'Our Bulk Attendance System leverages IoT and AI technologies to simplify, secure, and scale attendance marking processes for schools, colleges, offices, and industrial setups through contactless and data-driven workflows.',
    sections: [
      {
        heading: 'Modes Of Deployment - 3 Smart Technologies',
        bullets: [
          'CCTV-based crowd monitoring',
          'Wall-mounted with door control access',
          'Mobile-based integrated system'
        ]
      }
    ],
  
  },
  {
    id: 'intellexa-ai',
    title: 'INTELLEXA AI',
    subtitle: 'Intellexa AI',
    accent: 'cyan',
    coverImage: intellexaVisual,
    sections: [
      {
        heading: 'Core Capabilities',
        bullets: [
          'Universal document intelligence for scanned, handwritten, low-quality, and legacy files',
          'True multilingual OCR with conversational input and output across scripts',
          'Deep contextual understanding for semantic reasoning and entity extraction',
          'Conversational knowledge access to research, compare, and summarize documents naturally',
          'Enterprise and government ready architecture with secure, scalable deployment'
        ]
      }
    ],
    bottomNote: 'Deployed with ICED, IIT Roorkee'
  },
  {
    id: 'smart-ev-integration',
    title: 'SMART EV CHARGING',
    subtitle: 'Drive Smarter, Stay Connected',
    accent: 'cyan',
    coverImage: evVisual,
    sections: [
      {
        heading: 'Key Features Of The IoT-Powered Mobile Interface',
        bullets: [
          'Vehicle performance monitoring with real-time optimization stats',
          'Security controls for remote locking, ignition management, and theft protection',
          'Park mode assistance for low-speed maneuvering in tight spaces',
          'Real-time battery status for charge levels and efficiency tracking',
          'Service and maintenance alerts for diagnostics and timely reminders',
          'Document management notifications for insurance, registration, and records'
        ]
      }
    ],
    bottomNote: 'Piloting with GKM Energy'
  },
  {
    id: 'idp-portal',
    title: 'IDP PORTAL',
    subtitle: 'Connecting Minds, Creating Opportunities.',
    accent: 'teal',
    coverImage: idpVisual,
    sections: [
      {
        heading: 'Key Features Of The Platform',
        bullets: [
          'Automated student registration for smoother onboarding',
          'Intelligent team formation across diverse disciplines',
          'Support for multiple fields including management, biology, law, hospitality, fashion, and engineering',
          'Streamlined project coordination for stronger teamwork and execution',
          'Faculty-driven research integration with mentorship and academic guidance'
        ]
      }
    ],
    bottomNote: 'Developed for GD Goenka University (SoES)'
  },
  {
    id: 'eq-alert',
    title: 'EQ Alert',
    subtitle: "India's 1st Indigenous EEW Device",
    accent: 'lime',
    coverImage: eqVisual,
    summary:
      'EQ-Alert is a real-time Earthquake Early Warning system that detects earthquakes at their source and delivers critical seconds of advance warning before damaging ground shaking begins. It enables automated safety actions and human response, protecting lives, infrastructure, and operations.',
    sections: [
      {
        heading: 'Compatibility',
        bullets: ['Global EEW Network-compatible', 'EarthWorm compatible']
      },
      {
        heading: 'Application',
        bullets: ['Seismic switch', 'On-site EEWS', 'Regional EEWS', 'Structural health monitoring']
      },
      {
        heading: 'Safeguard',
        bullets: ['Industrial systems', 'Public infrastructure', 'Critical infrastructure', 'Transit systems']
      }
    ],
    callout:
      "A proudly MADE-IN-INDIA innovation inspired by the Prime Minister's IMD 150-year celebration vision.",
    bottomNote: 'Save millions of lives in seconds | 1-2 sec TAT'
  },
  {
    id: 'ai-drive-through',
    title: 'AI DRIVE THROUGH',
    subtitle: 'Smarter Routes, Faster Commutes.',
    accent: 'cyan',
    coverImage: driveVisual,
    sections: [
      {
        heading: 'Solution Highlights',
        bullets: [
          'Browser-based intelligent navigation application',
          'Predicts traffic signals and recommends optimal speed by speed limits and regulations',
          'Helps users avoid red-light stops to improve fuel efficiency and travel time',
          'Moving destination follow-through',
          'Fuel consumption analysis',
          'Multi-navigation tracking for multiple users and routes'
        ]
      }
    ],
    bottomNote: 'Developed for/with Synchronous Build Digital Pvt. Ltd.'
  },
  {
    id: 'rezonix',
    title: 'REZONIX',
    subtitle: 'Intelligent Power, Wireless Future.',
    accent: 'cyan',
    coverImage: rezonixVisual,
    sections: [
      {
        heading: 'Key Features Of Rezonix',
        bullets: [
          'Smart charging that dynamically adjusts transmission frequencies to maximize wireless energy efficiency',
          'Multi-device charging support for simultaneous charging of smartphones, wearables, and other compact electronics',
          'Smart home and retrofit compatibility for seamless integration without major infrastructure changes'
        ]
      }
    ],
    bottomNote: 'Developed for Synchronous Build Digital Pvt. Ltd.'
  },
  {
    id: 'ais-140-gps-devices',
    title: 'AIS-140 GPS DEVICES',
    subtitle: 'Tracking Safety, Every Mile.',
    accent: 'cyan',
    coverImage: ais140Visual,
    sections: [
      {
        heading: 'Fleet Safety And Compliance Features',
        bullets: [
          'Real-time tracking for accurate live vehicle location monitoring',
          'AIS-140 compliance to meet government and regulatory standards',
          'SOS emergency alerts with instant panic notifications',
          'Live data transmission of vehicle and location telemetry',
          'Remote monitoring to manage connected devices from anywhere',
          'Geo-fencing alerts for route deviations and boundary breaches',
          'Tamper detection alerts on unauthorized device removal or power loss'
        ]
      }
    ]
  },
  {
    id: 'smart-home-automation',
    title: 'SMART HOME AUTOMATION SYSTEM',
    subtitle: 'Control Your Home, Anytime, Anywhere.',
    accent: 'teal',
    coverImage: smartHomeVisual,
    sections: [
      {
        heading: 'Features Of The Smart Home System',
        bullets: [
          'Voice-activated control for appliances and routines',
          'Mobile app integration for doors, fans, lights, curtains, and stereo systems',
          'Remote access to manage devices from anywhere',
          'Energy efficiency optimization for reduced consumption',
          'Custom automation schedules for smarter home management',
          'Secure and reliable operation for smart living'
        ]
      }
    ],
    bottomNote: 'Developed for GKM Energy'
  }
];

const accentStyles = {
  emerald: {
    chip: 'bg-emerald-400/20 text-emerald-200 border-emerald-300/40',
    bar: 'from-emerald-300/80 via-emerald-400/60 to-cyan-300/80'
  },
  cyan: {
    chip: 'bg-cyan-400/20 text-cyan-100 border-cyan-300/40',
    bar: 'from-cyan-300/80 via-teal-300/70 to-cyan-200/80'
  },
  teal: {
    chip: 'bg-teal-400/20 text-teal-100 border-teal-300/40',
    bar: 'from-teal-300/80 via-cyan-300/70 to-emerald-200/80'
  },
  lime: {
    chip: 'bg-lime-400/20 text-lime-100 border-lime-300/40',
    bar: 'from-lime-200/80 via-lime-300/70 to-emerald-300/80'
  }
};

const ContactIcon = ({ kind }) => {
  if (kind === 'phone') return <FaPhoneAlt className="text-xs text-emerald-300" />;
  if (kind === 'mail') return <FaEnvelope className="text-xs text-emerald-300" />;
  if (kind === 'pin') return <FaMapMarkerAlt className="text-xs text-emerald-300" />;
  return <FaCircle className="text-[9px] text-emerald-300" />;
};

const ProjectVisualSection = ({ project, accent }) => {
  const isAisProject = project.id === 'ais-140-gps-devices';

  return (
    <div className="group relative h-52 w-full overflow-hidden border-b border-white/20">
      <img
        src={project.coverImage}
        alt={`${project.title} visual`}
        className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-110 ${
          isAisProject ? 'object-contain bg-[#07090f] p-2' : 'object-cover'
        }`}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#05080d]/95 via-[#05080d]/75 to-[#05080d]/35" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px'
        }}
      />

      <div className="absolute left-3 top-3 right-3 flex items-center justify-between gap-2">
        <h3 className="line-clamp-1 text-sm font-extrabold uppercase tracking-tight text-white md:text-base">{project.title}</h3>
        <span className={`hidden border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] sm:inline-block ${accent.chip}`}>
          Live
        </span>
      </div>

      <div className="absolute left-3 right-3 top-12 overflow-hidden bg-cyan-300/85 px-3 py-1.5">
        <p className="line-clamp-1 text-xs font-bold italic text-[#07314b] md:text-sm">{project.subtitle}</p>
      </div>

      <div className="absolute bottom-3 right-3 h-24 w-20 overflow-hidden rounded-xl border-2 border-white/80 bg-black/35 shadow-[0_12px_24px_rgba(0,0,0,0.45)] sm:h-28 sm:w-24 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-2 group-hover:scale-105">
        <img
          src={project.coverImage}
          alt={`${project.title} app preview`}
          className={`h-full w-full ${isAisProject ? 'object-contain bg-[#07090f]' : 'object-cover'}`}
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden bg-black/35">
        <div className={`h-full w-full bg-gradient-to-r ${accent.bar}`} />
      </div>
    </div>
  );
};

const getPreviewText = (text, maxLength = 180) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};

const ProjectsPage = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative overflow-hidden bg-[#040506] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-25" style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '96px 96px'
      }} />
      <div className="pointer-events-none absolute left-[-15rem] top-[12rem] h-[35rem] w-[35rem] rounded-full bg-cyan-500/15 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[180px]" />

      <section className="relative mx-auto max-w-[1320px] px-4 pb-16 pt-24 md:px-8 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">Project Showcase</p>
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">Real Deployments. Measurable Impact.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
            A dedicated portfolio of intelligent systems delivered by RYM Grenergy across mobility, automation, education, and disaster resilience.
          </p>
        </motion.div>
      </section>

      <section className="relative mx-auto grid max-w-[1300px] grid-cols-1 gap-6 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {projectDetails.map((project, index) => {
          const accent = accentStyles[project.accent] || accentStyles.emerald;
          const visibleSections = project.sections.slice(0, 1);

          return (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.32) }}
              className="relative flex h-full min-h-[640px] flex-col overflow-hidden border border-white/15 bg-[#10141a]/90 shadow-[0_20px_35px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:border-cyan-500/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            >
              <ProjectVisualSection project={project} accent={accent} />

              <div className="relative flex flex-1 flex-col p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-extrabold uppercase tracking-tight text-white md:text-lg">{project.title}</h2>
                  <span className={`border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${accent.chip}`}>
                    Case Study
                  </span>
                </div>

                <p className="mb-3 text-sm font-semibold text-cyan-100/90 md:text-base">{project.subtitle}</p>

                {project.summary && (
                  <p className="mb-3 text-xs leading-relaxed text-white/80 md:text-sm">
                    {getPreviewText(project.summary, 140)}
                  </p>
                )}

                <div className="space-y-3">
                  {visibleSections.map((section) => {
                    const shownBullets = section.bullets.slice(0, 2);

                    return (
                    <div key={section.heading} className="border border-white/15 bg-black/35 p-3">
                      <h3 className="mb-2 text-sm font-bold tracking-tight text-white">{section.heading}</h3>
                      <ul className="space-y-1 text-xs text-white/90 md:text-sm">
                        {shownBullets.map((item) => (
                          <li key={item} className="flex items-start gap-2 leading-relaxed">
                            <FaCircle className="mt-1 text-[7px] text-cyan-200" />
                            <span>{item}</span>
                          </li>
                        ))}
                        {section.bullets.length > shownBullets.length && (
                          <li className="pl-4 text-[11px] text-cyan-100/75">
                            +{section.bullets.length - shownBullets.length} more points
                          </li>
                        )}
                      </ul>
                    </div>
                  )})}

                  {project.sections.length > visibleSections.length && (
                    <p className="text-[11px] text-cyan-100/75">+{project.sections.length - visibleSections.length} more sections</p>
                  )}
                </div>

                {project.bottomNote && (
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-amber-100 md:text-base cursor-default">
                    <FaUserTie className="text-amber-200" />
                    <span className="truncate">{project.bottomNote}</span>
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group mt-auto inline-flex items-center gap-2.5 rounded-lg bg-emerald-500 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-black transition-all hover:bg-emerald-400 hover:shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 active:scale-95"
                >
                  Know More
                  <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="relative border-t border-white/10 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-[1300px] px-4 md:px-8"
        >
          <div className={`relative overflow-hidden border ${isDark ? 'border-white/15 bg-[#0b0c14]' : 'border-emerald-500/20 bg-black/50'}`}>
            <iframe
              title="RYM Grenergy Location"
              src="https://maps.google.com/maps?q=Gurugram%20NCR%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-64 w-full md:h-80 lg:h-96"
              style={{ filter: isDark ? 'grayscale(0.48) saturate(0.72) brightness(0.68) contrast(1.1)' : 'grayscale(0.25) saturate(0.85) brightness(0.82) contrast(1.05)' }}
              loading="lazy"
            />
            <div className={`pointer-events-none absolute inset-0 ${isDark ? 'bg-emerald-500/18 mix-blend-multiply' : 'bg-emerald-500/14 mix-blend-multiply'}`} />
          </div>
        </motion.div>

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
               By clicking on Submit you are agreeing to our Privacy Policy and allowing us (RYM Energy) and our service partners to get in touch with you.
             </p>
           </motion.form>
         </div>
       </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative flex max-h-[90vh] w-full max-w-[1000px] flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-[#111] to-[#0a0a0a] shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_60px_rgba(16,185,129,0.1)] md:flex-row"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute left-0 top-0 h-[2px] w-full rounded-t-[28px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
              
              <button
                className="absolute right-4 top-4 z-[1010] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <div className="relative h-64 w-full shrink-0 md:h-auto md:w-2/5 lg:w-1/2">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className={`h-full w-full ${
                    selectedProject.id === 'ais-140-gps-devices' ? 'object-contain bg-[#07090f]' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/30 md:bg-gradient-to-r" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className={`inline-block border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] mb-3 border-emerald-300/40 bg-emerald-400/20 text-emerald-200`}>
                    Case Study
                  </span>
                  <h2 className="text-3xl font-black leading-tight tracking-tight text-white lg:text-4xl">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 hide-scrollbar">
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-cyan-400">{selectedProject.subtitle}</h3>
                    {selectedProject.summary && (
                      <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                        {selectedProject.summary}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    {selectedProject.sections.map((section) => (
                      <div key={section.heading} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                        <h4 className="mb-3 text-sm font-bold tracking-wider text-white uppercase">{section.heading}</h4>
                        <ul className="space-y-2 text-sm text-zinc-300">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                              <FaCheckCircle className="mt-1 shrink-0 text-[10px] text-cyan-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {selectedProject.callout && (
                    <div className="rounded-xl border border-lime-300/20 bg-lime-400/10 p-4 text-sm leading-relaxed text-lime-100">
                      {selectedProject.callout}
                    </div>
                  )}

                  {(selectedProject.id === 'intellexa-ai' || selectedProject.id === 'smart-ev-integration' || selectedProject.id === 'smart-home-automation') && (
                    <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm text-cyan-100/95">
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">Operational Readiness</div>
                      <ul className="space-y-1.5">
                        <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> Production-grade architecture</li>
                        <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> Multi-user and multi-role flow support</li>
                        <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> Scalable rollout strategy</li>
                      </ul>
                    </div>
                  )}

                  {selectedProject.id === 'eq-alert' && (
                    <div className="rounded-xl border border-lime-300/30 bg-black/40 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400">Response Window</p>
                      <p className="mt-1 text-2xl font-black text-lime-100">1-2 Sec TAT</p>
                    </div>
                  )}
                  
                  {selectedProject.contactBlock && (
                    <div className="rounded-xl border border-emerald-300/30 bg-black/40 p-4">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-400">{selectedProject.contactBlock.heading}</h4>
                      <ul className="space-y-2 text-sm text-zinc-300">
                        {selectedProject.contactBlock.rows.map((row) => (
                          <li key={row.text} className="flex items-center gap-3">
                            <ContactIcon kind={row.icon} />
                            <span>{row.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.bottomNote && (
                    <div className="mt-2 flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                      <FaUserTie className="shrink-0 text-amber-400" />
                      <span className="text-sm font-medium text-amber-100">{selectedProject.bottomNote}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
