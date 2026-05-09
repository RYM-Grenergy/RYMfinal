import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { achievementsData } from '../data/data';

const Achievements = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const featuredAchievement = achievementsData[0];
    const otherAchievements = achievementsData.slice(1);

    return (
        <section className="relative overflow-hidden py-[50px] md:py-[100px] bg-[#0a0a0a]" id="achievements">
            <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] mb-4 font-bold font-heading">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#10b981] to-[#059669]">Achievements</span>
                    </h2>
                </motion.div>

                <div className="mt-[40px] md:mt-[60px]">
                    {/* Featured Achievement - Large Card */}
                    <motion.div
                        className="relative grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#111111] border border-[#222222] rounded-[16px] md:rounded-[24px] overflow-hidden mb-[30px] md:mb-[40px] md:min-h-[500px] group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative h-[250px] md:h-[300px] lg:h-auto overflow-hidden">
                            <img src={featuredAchievement.image} alt={featuredAchievement.title} className="w-full h-full object-cover block transition-transform duration-[600ms] group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 pointer-events-none"></div>
                        </div>
                        <div className="flex flex-col justify-center p-[30px_24px] md:p-[40px_32px] lg:p-[60px] gap-4 md:gap-5">
                            <span className="inline-block px-3.5 md:px-4 py-1.5 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full text-[#10b981] text-[0.8rem] md:text-[0.85rem] font-semibold uppercase tracking-[1px] w-fit">{featuredAchievement.category}</span>
                            <h3 className="text-[clamp(1.25rem,5vw,1.75rem)] lg:text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] m-0 text-white font-bold font-heading">{featuredAchievement.title}</h3>
                            <p className="text-[clamp(0.85rem,3vw,1rem)] lg:text-[clamp(1rem,2vw,1.1rem)] leading-[1.7] md:leading-[1.8] text-[#e0e0e0] m-0">{featuredAchievement.description}</p>
                        </div>
                    </motion.div>

                    {/* Other Achievements - Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5 md:gap-6 lg:gap-[30px]"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {otherAchievements.map((achievement) => (
                            <motion.div
                                key={achievement.id}
                                className="bg-[#111111] border border-[#222222] flex-col flex rounded-[16px] overflow-hidden transition-all duration-300 h-full group hover:border-[#10b981] hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,255,136,0.15)]"
                                variants={cardVariants}
                            >
                                <div className="relative h-[180px] md:h-[250px] overflow-hidden">
                                    <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
                                </div>
                                <div className="p-5 md:p-6 lg:p-7 flex flex-col gap-2.5 md:gap-3 flex-1">
                                    <span className="inline-block px-3.5 md:px-4 py-1.5 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full text-[#10b981] text-[0.8rem] md:text-[0.85rem] font-semibold uppercase tracking-[1px] w-fit">{achievement.category}</span>
                                    <h4 className="text-[clamp(1.1rem,4vw,1.2rem)] lg:text-[clamp(1.2rem,2vw,1.35rem)] leading-[1.3] m-0 text-white font-bold font-heading">{achievement.title}</h4>
                                    <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.6] text-[#a0a0a0] m-0 flex-1">{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="mt-10 flex justify-center md:mt-12">
                        <motion.button
                            type="button"
                            onClick={() => navigate('/achievements')}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            whileHover={{
                                y: -3,
                                scale: 1.03,
                                boxShadow: '0 14px 30px rgba(16, 185, 129, 0.22)'
                            }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex items-center gap-2 rounded-full border border-[#10b981]/40 bg-[#10b981]/10 px-6 py-3 text-sm font-bold uppercase tracking-[1.2px] text-[#10b981] transition-colors duration-300 hover:border-[#10b981] hover:bg-[#10b981] hover:text-white"
                        >
                            Explore More
                            <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
