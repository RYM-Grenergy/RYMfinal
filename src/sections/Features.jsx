import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaBolt, FaLightbulb } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            id: 1,
            icon: <FaLeaf className="text-[#10b981]" />,
            title: 'Deep Solutions',
            description: 'Eco-friendly battery systems and renewable technologies that reduce environmental impact.'
        },
        {
            id: 2,
            icon: <FaBolt className="text-[#10b981]" />,
            title: 'AI-Powered Innovation',
            description: 'Intelligent inverters and automation devices optimized for maximum efficiency.'
        },
        {
            id: 3,
            icon: <FaLightbulb className="text-[#10b981]" />,
            title: 'Smart Integration',
            description: 'IoT automation and smart grid integration for seamless energy management.'
        }
    ];

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

    return (
        <section className="relative overflow-hidden pt-[20px] pb-12.5 md:pt-[40px] md:pb-[100px] bg-[#0a0a0a]" id="features">
            <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-[50px] md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] lg:text-[clamp(2.5rem,4vw,3.5rem)] mb-4 font-bold font-heading">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#10b981] to-[#059669]">Core Solutions</span>
                    </h2>
                    <p className="text-[1rem] md:text-[1.1rem] text-[#a0a0a0] max-w-[600px] mx-auto">
                        Delivering cutting-edge technologies for a sustainable future
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-[30px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            className="group relative bg-[#111111] border border-[#222222] rounded-[20px] p-8 md:p-10 flex flex-col items-start transition-all duration-300 hover:border-[#10b981] hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] hover:-translate-y-2"
                            variants={cardVariants}
                        >
                            {/* Icon Background */}
                            <div className="relative mb-6">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[16px] border border-[#10b981]/30 bg-[#10b981]/5 flex items-center justify-center text-4xl md:text-5xl transition-all duration-300 group-hover:bg-[#10b981]/15 group-hover:border-[#10b981]/60">
                                    {feature.icon}
                                </div>
                                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.2rem,4vw,1.4rem)] lg:text-[clamp(1.4rem,2vw,1.6rem)] font-bold text-white mb-3 md:mb-4 leading-[1.3]">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[clamp(0.85rem,3vw,0.95rem)] lg:text-[1rem] text-[#b0b0b0] leading-[1.7] flex-grow">
                                {feature.description}
                            </p>

                            {/* Animated Border Effect */}
                            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#10b981]/0 to-[#10b981]/0 group-hover:from-[#10b981]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Accent */}
                <motion.div
                    className="mt-[60px] md:mt-[80px] h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ originX: 0.5 }}
                ></motion.div>
            </div>
        </section>
    );
};

export default Features;
