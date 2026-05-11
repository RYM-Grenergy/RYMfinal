import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCogs, FaGlobeEurope, FaProjectDiagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import aboutImage from '../assets/images/Section_Image.jpeg';

const About = () => {
    const navigate = useNavigate();

    return (
        <section className="relative pt-8 pb-10 md:pt-12 md:pb-14 lg:pt-16 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" id="about">
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
                <div className="mb-14 md:mb-20 lg:mb-24">
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
                        className="text-[clamp(0.95rem,3vw,1.1rem)] lg:text-[clamp(1.1rem,2vw,1.25rem)] text-zinc-400 font-light leading-relaxed max-w-4xl"
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

                            {/* Floating Stat Overlay */}
                            <motion.div
                                className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4"
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
                                        <div className="text-[10px] md:text-xs text-zinc-300 uppercase tracking-wider leading-tight font-medium">{stat.value}</div>
                                        <div className="mt-1 text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-[0.16em] text-center">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
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
                        <h3 className="text-[clamp(1.6rem,5vw,2.5rem)] lg:text-[clamp(2.5rem,4vw,4rem)] font-bold text-white mb-8 md:mb-10 leading-[1.2] tracking-tight">
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
                <div className="mt-12 md:mt-16 lg:mt-20 max-w-4xl">
                    <motion.div
                        className="space-y-6 md:space-y-8 text-zinc-400 text-[clamp(0.9rem,3vw,1rem)] lg:text-[clamp(1rem,2vw,1.15rem)] leading-[1.7] md:leading-loose font-light mb-10 md:mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-zinc-300">
                            We build solutions that help businesses move faster, operate smarter, and create measurable long-term value.
                        </p>
                        <p>
                            RYM Grenergy is focused on practical innovation across hardware, software, and automation. We work on connected platforms, process improvement, and reliable systems built for real-world use.
                        </p>
                        <p>
                            By combining strong design, engineering discipline, and scalable thinking, we create solutions that support growth across energy, infrastructure, mobility, and industrial domains.
                        </p>
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
