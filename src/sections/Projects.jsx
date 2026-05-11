import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { FaRocket, FaGlobe, FaBuilding, FaMicrochip, FaCogs, FaCheckCircle } from 'react-icons/fa';
import { projectsData } from '../data/data';

const CountUp = ({ end, suffix = '', duration = 1.5 }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!isInView) {
            setCount(0);
            return;
        }

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return (
        <motion.span
            className="text-[clamp(2.5rem,8vw,3.5rem)] font-[800] block mb-2 bg-clip-text text-transparent bg-gradient-to-br from-[#00ff88] to-[#00ffee]"
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
        >
            {count}{suffix}
        </motion.span>
    );
};

const FeaturedCard = ({ project }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        currentTarget.style.setProperty('--mouse-x', `${clientX - left}px`);
        currentTarget.style.setProperty('--mouse-y', `${clientY - top}px`);
    };

    return (
        <motion.div
            className="flex flex-col md:flex-row bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-[32px] pt-[78px] md:pt-[32px] p-[24px] md:p-[48px] gap-[24px] md:gap-[40px] items-center text-center md:text-left relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#00ff88]/30 hover:shadow-[0_20px_40px_rgba(0,255,136,0.1)] group cursor-default"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,255,136,0.08),transparent_40%)] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-[32px] md:right-[32px] bg-gradient-to-br from-[#00ff88] to-[#00ffee] text-black px-4 py-1.5 rounded-full text-[0.8rem] font-[700] uppercase tracking-[1px] z-10 whitespace-nowrap text-center">AI Flagship Innovation</div>
            <div className="w-[84px] h-[84px] md:w-[100px] md:h-[100px] bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-[24px] flex flex-shrink-0 items-center justify-center text-[#00ff88] text-[2.4rem] md:text-[3rem] z-10 shadow-[0_0_20px_rgba(0,255,136,0.2)] mx-auto md:mx-0 mt-2 md:mt-0">
                <FaRocket />
            </div>
            <div className="flex-1 z-10 w-full">
                <h3 className="text-[clamp(1.35rem,5vw,2.2rem)] lg:text-[clamp(2.2rem,4vw,3rem)] font-[800] mb-3 text-white leading-tight">{project.name}</h3>
                <p className="text-[0.98rem] md:text-[1.25rem] text-[#a0a0a0] leading-[1.6]">{project.client}</p>
                <div className="mt-5 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-[15px]">
                    <span className="text-[0.9rem] text-[#00ff88] flex items-center gap-[5px]">
                        <FaCheckCircle size={12} /> Active Deployment
                    </span>
                    <span className="text-[0.9rem] text-[#00ffee] flex items-center gap-[5px]">
                        <FaCheckCircle size={12} /> 24/7 Monitoring
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const featuredProject = projectsData.find(p => p.featured);
    const otherProjects = projectsData.filter(p => !p.featured);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-[100px] relative overflow-hidden bg-[#0a0a0a]" id="projects">
            <div className="absolute top-[10%] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,255,136,0.05)_0%,transparent_70%)] z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-[-100px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,255,238,0.05)_0%,transparent_70%)] z-0 pointer-events-none"></div>
            <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
                <motion.div
                    className="text-center mb-[80px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[clamp(1.75rem,7vw,2.5rem)] lg:text-[clamp(2.5rem,5vw,3rem)] font-[800] mb-[20px] bg-clip-text text-transparent bg-gradient-to-b from-[#fff] to-[#aaa]">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#00ff88] to-[#00ffee]">Impact</span>
                    </h2>
                    <p className="text-[1.25rem] text-[#a0a0a0] max-w-[600px] mx-auto">
                        Pioneering solutions deployed at scale, driving real-world industrial transformation.
                    </p>
                </motion.div>

                <div className="mb-[40px]">
                    <FeaturedCard project={featuredProject} />
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group bg-white/[0.02] backdrop-blur-[8px] border border-white/5 rounded-[24px] p-[32px] relative transition-all duration-[400ms] ease-out hover:-translate-y-2.5 hover:bg-white/[0.04] hover:border-[#00ff88]/30 overflow-hidden"
                            variants={itemVariants}
                        >
                            <div className="absolute top-[32px] right-[32px] text-[0.9rem] font-[700] text-[#00ff88]/40 font-heading">{project.id}</div>
                            <div className="w-[48px] h-[48px] bg-white/5 rounded-[12px] flex items-center justify-center text-[#00ff88] text-[1.25rem] mb-[24px]">
                                {index % 4 === 0 ? <FaGlobe /> : index % 4 === 1 ? <FaBuilding /> : index % 4 === 2 ? <FaMicrochip /> : <FaCogs />}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[clamp(1.1rem,4vw,1.25rem)] font-[700] text-white mb-2">{project.name}</h3>
                                <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.5]">{project.client}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-[32px] p-[40px_20px] md:p-[60px] bg-[#00ff88]/[0.02] border border-[#00ff88]/10 rounded-[40px] backdrop-blur-[10px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center">
                        <CountUp end={100} suffix="+" />
                        <p className="text-[1.1rem] text-[#a0a0a0] m-0 uppercase tracking-[2px] font-[600]">Deployments</p>
                    </div>
                    <div className="text-center">
                        <CountUp end={50} suffix="+" />
                        <p className="text-[1.1rem] text-[#a0a0a0] m-0 uppercase tracking-[2px] font-[600]">Partners</p>
                    </div>
                    <div className="text-center">
                        <CountUp end={99.9} suffix="%" />
                        <p className="text-[1.1rem] text-[#a0a0a0] m-0 uppercase tracking-[2px] font-[600]">Uptime</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
