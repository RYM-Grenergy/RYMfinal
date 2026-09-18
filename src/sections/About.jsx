import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCogs, FaGlobeEurope, FaProjectDiagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const aboutImage = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789726922/rym_website/Section_Image.jpg';
const tidesLogo = 'https://res.cloudinary.com/uesw5nai/image/upload/v1789727049/rym_website/tides_iit_roorkee.jpg';

const About = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-6 md:py-8 lg:py-10 overflow-hidden bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" id="about">
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Accent Grid Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="mb-8 md:mb-12 lg:mb-14">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6 md:mb-8"
                    >
                        <motion.div
                            className="h-1 w-12 md:w-16 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 'auto' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        />
                        <span className="text-emerald-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-bold">
                            Building the Future
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-[clamp(2.2rem,7vw,3.5rem)] lg:text-[clamp(3.5rem,6vw,5.5rem)] font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.1]"
                    >
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">RYM Grenergy</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-[clamp(0.95rem,3vw,1.1rem)] lg:text-[clamp(1.1rem,2vw,1.25rem)] text-zinc-200 font-normal leading-relaxed w-full"
                    >
                        We create practical, future-ready solutions that help businesses scale, adapt, and deliver long-term impact.
                    </motion.p>
                </div>

                {/* Operations Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center mb-0">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group order-2 lg:order-1"
                    >
                        <motion.div
                            className="absolute -inset-6 bg-linear-to-br from-emerald-500/20 to-blue-500/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            animate={{
                                boxShadow: [
                                    '0 0 60px rgba(16,185,129,0.1)',
                                    '0 0 80px rgba(16,185,129,0.15)',
                                    '0 0 60px rgba(16,185,129,0.1)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-emerald-500/20 lg:border-white/10 ring-1 ring-emerald-500/10 shadow-2xl aspect-[4/3] md:aspect-[3/2]">
                            <img
                                src={aboutImage}
                                alt="Tactical Energy Operations"
                                className="w-full h-full object-cover object-center scale-[1.03] md:scale-100 group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                            {/* Tactical Energy Operations Label */}
                            <motion.div
                                className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6"
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="bg-black/70 backdrop-blur-xl border border-emerald-500/40 px-3 py-2 md:px-4 md:py-3 rounded-xl hover:border-emerald-500/80 transition-all duration-300">
                                    <span className="text-emerald-300 font-bold text-[10px] md:text-sm tracking-widest uppercase">
                                        ◆Strategic Impact Operations
                                    </span>
                                </div>
                            </motion.div>

                            {/* Floating Stat Overlay for Desktop */}
                            <motion.div
                                className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 hidden md:grid grid-cols-3 gap-2 md:gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                {[
                                    { label: 'Scalable Systems', value: 'Enterprise Ready', icon: <FaCogs /> },
                                    { label: 'Global Standard', value: 'Connected Operations', icon: <FaGlobeEurope /> },
                                    { label: 'Future-Proof', value: 'Business Growth', icon: <FaProjectDiagram /> }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-500/60 p-3 md:p-4 rounded-xl transition-all duration-300 cursor-pointer group/stat"
                                        whileHover={{ scale: 1.05, translateY: -4 }}
                                    >
                                         <div className="text-emerald-400 text-base md:text-lg mb-2 flex justify-center group-hover/stat:scale-110 transition-transform duration-300">{stat.icon}</div>
                                        <div className="text-[10px] md:text-xs text-zinc-100 uppercase tracking-wider leading-tight font-semibold">{stat.value}</div>
                                        <div className="mt-1 text-[9px] md:text-[10px] text-zinc-300 uppercase tracking-[0.16em] text-center font-medium">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Mobile Stat Grid */}
                        <div className="grid grid-cols-3 gap-2 mt-4 md:hidden">
                            {[
                                { label: 'Scalable', value: 'Enterprise', icon: <FaCogs /> },
                                { label: 'Global', value: 'Connected', icon: <FaGlobeEurope /> },
                                { label: 'Future', value: 'Growth', icon: <FaProjectDiagram /> }
                            ].map((stat, i) => (
                                <div key={i} className="bg-zinc-900/80 backdrop-blur-md border border-emerald-500/30 p-2.5 rounded-xl text-center">
                                    <div className="text-emerald-400 text-sm mb-1 flex justify-center">{stat.icon}</div>
                                    <div className="text-[10px] text-zinc-100 uppercase font-semibold leading-tight">{stat.value}</div>
                                    <div className="text-[8px] text-zinc-400 uppercase mt-0.5 tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <h3 className="text-[clamp(1.5rem,5vw,2.5rem)] lg:text-[clamp(2.5rem,4vw,4rem)] font-bold text-white mb-6 md:mb-10 leading-[1.2] tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                               Reimagining Technology into
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                            >
                                Scalable Business Solutions
                            </motion.span>
                        </h3>
                    </motion.div>
                </div>

                {/* Description and Action below the layout Grid */}
                <div className="mt-8 md:mt-16 lg:mt-20 w-full">
                    <motion.div
                        className="space-y-4 md:space-y-8 text-zinc-200 text-[clamp(0.95rem,3vw,1.05rem)] lg:text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.7] md:leading-loose font-normal mb-8 md:mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-zinc-100">
                            We build solutions that help businesses move faster, operate smarter, and create measurable long-term value.
                        </p>
                        <p className="text-zinc-200">
                            RYM Grenergy is focused on practical innovation across hardware, software, and automation. We work on connected platforms, process improvement, and reliable systems built for real-world use.
                        </p>
                        <p className="text-zinc-200">
                            By combining strong design, engineering discipline, and scalable thinking, we create solutions that support growth across energy, infrastructure, mobility, and industrial domains.
                        </p>
                    </motion.div>

                    {/* TIDES IIT Roorkee Incubation Badge */}
                    <motion.div
                        className="mb-8 md:mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45 }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative bg-gradient-to-br from-zinc-900/90 via-zinc-800/80 to-zinc-900/90 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 md:p-8 backdrop-blur-sm hover:border-emerald-400/60 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white/95 rounded-xl flex items-center justify-center border border-emerald-500/30 p-2">
                                        <img src={tidesLogo} alt="TIDES IIT Roorkee" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="inline-block text-emerald-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 bg-emerald-500/10 px-3 py-1 rounded-full">Backed by Excellence</span>
                                        <h4 className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 leading-tight">Incubated & Supported by TIDES IIT Roorkee</h4>
                                        <div className="flex flex-wrap gap-2 md:gap-3 justify-center sm:justify-start">
                                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                DST-NIDHI PRAYAS Grant
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                DPIIT Recognized
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.button
                        onClick={() => navigate('/contact')}
                        className="group relative px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-emerald-500/50 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 text-emerald-300 font-bold hover:text-white overflow-hidden transition-all duration-300 flex items-center gap-3 active:scale-95 text-sm md:text-base w-full sm:w-fit justify-center sm:justify-start"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Learn More About Operations
                            <FaArrowRight className="text-xs group-hover:translate-x-1 group-hover:rotate-45 transition-all duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default About;
