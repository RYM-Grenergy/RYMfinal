import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/data';

const Testimonials = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="relative overflow-hidden py-10 md:py-18 bg-linear-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" id="testimonials">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-emerald-500/5 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[clamp(1.75rem,7vw,2.5rem)] lg:text-[clamp(2.5rem,5vw,3.5rem)] mb-4 font-bold tracking-tight">
                        <span className="text-transparent bg-clip-text bg-linear-to-br from-emerald-400 via-emerald-300 to-teal-400">Wall of Love</span>
                    </h2>
                    <p className="text-base md:text-lg text-zinc-400 max-w-[620px] mx-auto font-light">
                        What our clients say about working with us
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonialsData.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 transition-all duration-500 overflow-hidden group hover:border-emerald-500/30 hover:bg-white/[0.06] flex flex-col"
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className="flex gap-1 mb-6 relative z-10 text-emerald-400">
                                {[...Array(5)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        className="text-base drop-shadow-sm"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </div>

                            {/* Quote */}
                            <div className="relative mb-8 flex-1 z-10">
                                <p className="text-[clamp(1rem,4vw,1.15rem)] lg:text-[clamp(1.15rem,2vw,1.3rem)] leading-relaxed text-zinc-200 italic font-light">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-linear-to-r from-white/0 via-white/5 to-white/0 my-8 relative z-10" />

                            {/* Author Info */}
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500 shrink-0">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="grow">
                                    <h4 className="text-lg font-bold text-white mb-1 leading-tight">{testimonial.name}</h4>
                                    <p className="text-sm text-emerald-400 font-medium">{testimonial.position}</p>
                                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">{testimonial.company}</p>
                                </div>
                            </div>

                            {/* Animated Background Overlay */}
                            <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-linear-to-l from-emerald-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
