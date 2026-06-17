import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/Tranform_Your_Energy_Systems_for_Tomorrows_Demands.jpeg';

const Hero = () => {
    const navigate = useNavigate();
    // Advanced Typewriter Logic
    const words = [
        'AI Solutions',
        'Deep Learning',
        'IOT Networks'
    ];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    const [isNavigating, setIsNavigating] = useState(false);
    const contactNavLockRef = useRef(false);
    const exploreNavLockRef = useRef(false);

    const handleContact = () => {
        if (contactNavLockRef.current) {
            return;
        }

        contactNavLockRef.current = true;
        navigate('/contact');
    };

    const handleExplore = () => {
        if (exploreNavLockRef.current) {
            return;
        }

        exploreNavLockRef.current = true;
        setIsNavigating(true);
        setTimeout(() => {
            navigate('/projects');
        }, 450); // Keep the animation but reduce mobile tap latency
    };

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Main typewriter effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            // Pause at the end for 2 seconds
            const timeout = setTimeout(() => {
                setReverse(true);
            }, 2000);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 50 : 150, Math.random() * 50));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
            id="home"
        >
            {/* Background Image with slight scale for premium feel */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed w-full h-full scale-105"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            />

            {/* Refined Overlays */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505]" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

            {/* Premium Ambient Glow */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 lg:pt-52 pb-24 lg:pb-32">
                <div className="max-w-4xl">
                    {/* Flex Container for Guaranteed Spacing */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'flex-start' }}>



                        {/* Headline with Typewriter */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ marginBottom: '0.5rem' }}
                            className="text-[clamp(2.5rem,8vw,4.5rem)] lg:text-[clamp(4.5rem,7vw,6rem)] font-bold tracking-tight text-white leading-[1.05] drop-shadow-lg"
                        >
                            Transform Your <br />
                            <span className="relative inline-block min-h-[1.1em] whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 font-black">
                                {`${words[index].substring(0, subIndex)}`}
                                <span className={`absolute inline-block w-1 h-[0.95em] bg-emerald-400 ml-2 top-1/2 -translate-y-1/2 rounded-sm ${blink ? 'opacity-100' : 'opacity-0'}`} />
                            </span> <br />
                            <span className="text-white">for Tomorrow.</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{ paddingRight: '1rem', marginTop: '1rem' }}
                            className="text-[clamp(1rem,3vw,1.15rem)] lg:text-[clamp(1.25rem,2vw,1.5rem)] text-zinc-400 font-light max-w-3xl leading-relaxed tracking-wide"
                        >
                            We build intelligent, AI-powered solutions that optimize efficiency, reduce carbon footprint, and future-proof your infrastructure with <span className="text-emerald-400 font-semibold">unmatched precision</span>.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10 w-full items-center sm:items-start"
                        >
                            <button
                                type="button"
                                onClick={handleContact}
                                onTouchEnd={handleContact}
                                className="group flex w-full max-w-[280px] sm:w-[170px] sm:max-w-[220px] h-[55px] bg-zinc-900 rounded-[40px] shadow-[0_5px_15px_rgba(16,185,129,0.2)] justify-between items-center border border-zinc-800 hover:border-emerald-500/50 hover:shadow-[0_10px_25px_rgba(16,185,129,0.4)] transition-all duration-300 touch-manipulation mx-auto sm:mx-0"
                            >
                                <span className="flex-1 h-full flex items-center justify-center text-white text-[1rem] font-semibold tracking-[1.2px] uppercase">
                                    Let's go!
                                </span>
                                <span className="w-[45px] h-[45px] bg-emerald-500 flex items-center justify-center rounded-full border-[3px] border-zinc-900">
                                    <svg
                                        width="16"
                                        height="19"
                                        viewBox="0 0 16 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-all duration-[1.5s] group-hover:animate-[arrow_1s_linear_infinite] group-active:animate-[arrow_1s_linear_infinite]"
                                    >
                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
                                    </svg>
                                </span>
                                <style>
                                    {`
                                        @keyframes arrow {
                                            0% {
                                                opacity: 0;
                                                margin-left: 0px;
                                            }
                                            100% {
                                                opacity: 1;
                                                margin-left: 10px;
                                            }
                                        }
                                    `}
                                </style>
                            </button>

                            <div className={`btn-container-2 ${isNavigating ? 'active-hover' : ''}`}>
                                <div className="btn-drawer-2 transition-top-2">discover</div>
                                <div className="btn-drawer-2 transition-bottom-2">innovations</div>

                                <button
                                    type="button"
                                    className="btn-2 touch-manipulation mx-auto sm:mx-0"
                                    onClick={handleExplore}
                                    onTouchEnd={handleExplore}
                                    aria-label="Explore Solutions"
                                >
                                    <span className="btn-text-2">Explore Solutions</span>
                                </button>

                                <svg className="btn-corner-2" xmlns="http://www.w3.org/2000/svg" viewBox="-1 1 32 32">
                                    <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"></path>
                                </svg>
                                <svg className="btn-corner-2" xmlns="http://www.w3.org/2000/svg" viewBox="-1 1 32 32">
                                    <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"></path>
                                </svg>
                                <svg className="btn-corner-2" xmlns="http://www.w3.org/2000/svg" viewBox="-1 1 32 32">
                                    <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"></path>
                                </svg>
                                <svg className="btn-corner-2" xmlns="http://www.w3.org/2000/svg" viewBox="-1 1 32 32">
                                    <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"></path>
                                </svg>

                                <style>
                                    {`
                                        .btn-container-2 {
                                            --btn-color: #047857;
                                            --btn-hover: #10b981;
                                            --corner-color: rgba(16, 185, 129, 0.4);
                                            --corner-dist: 22px;
                                            --corner-multiplier: 1.3;
                                            --timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
                                            --duration: 400ms;
                                            position: relative;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            cursor: pointer;
                                            margin-left: 0;
                                            touch-action: manipulation;
                                            -webkit-tap-highlight-color: transparent;
                                            width: 100%;
                                            max-width: 280px;
                                        }
                                        .btn-2 {
                                            position: relative;
                                            width: 100%;
                                            min-width: 180px;
                                            min-height: 55px;
                                            border-radius: 12px;
                                            border: 1px solid rgba(16, 185, 129, 0.3);
                                            padding: 0.25em 1em;
                                            background: linear-gradient(rgba(255,255,255,0.05), rgba(0,0,0,0.1)), var(--btn-color);
                                            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                                            transition: transform var(--duration) var(--timing-function), filter var(--duration) var(--timing-function);
                                            z-index: 2;
                                            cursor: pointer;
                                        }
                                        .btn-drawer-2 {
                                            position: absolute;
                                            display: flex;
                                            justify-content: center;
                                            min-height: 28px;
                                            border-radius: 12px;
                                            border: none;
                                            padding: 0.25em 1.2em;
                                            font-size: 0.75rem;
                                            font-weight: 700;
                                            text-transform: uppercase;
                                            letter-spacing: 0.1em;
                                            color: #050505;
                                            background: var(--btn-hover);
                                            opacity: 0;
                                            transition: transform calc(0.5 * var(--duration)) ease, opacity calc(0.5 * var(--duration)) ease;
                                            filter: blur(2px);
                                            z-index: 1;
                                            pointer-events: none;
                                        }
                                        .transition-top-2 { top: 0; left: 0; border-radius: 12px 12px 0 0; align-items: start; }
                                        .transition-bottom-2 { bottom: 0; right: 0; border-radius: 0 0 12px 12px; align-items: end; }
                                        .btn-text-2 {
                                            display: inline-block;
                                            font-size: 1rem;
                                            font-weight: 600;
                                            color: #fff;
                                            transition: transform var(--duration) var(--timing-function);
                                        }
                                        .btn-corner-2 {
                                            position: absolute;
                                            width: 24px;
                                            fill: none;
                                            stroke: var(--corner-color);
                                            stroke-width: 3px;
                                            transition: transform var(--duration) var(--timing-function), filter var(--duration) var(--timing-function);
                                            pointer-events: none;
                                        }
                                        .btn-corner-2:nth-of-type(1) { top: 0; left: 0; transform: translate(calc(-1 * var(--corner-dist)), calc(-1 * var(--corner-dist))) rotate(90deg); }
                                        .btn-corner-2:nth-of-type(2) { top: 0; right: 0; transform: translate(var(--corner-dist), calc(-1 * var(--corner-dist))) rotate(180deg); }
                                        .btn-corner-2:nth-of-type(3) { bottom: 0; right: 0; transform: translate(var(--corner-dist), var(--corner-dist)) rotate(-90deg); }
                                        .btn-corner-2:nth-of-type(4) { bottom: 0; left: 0; transform: translate(calc(-1 * var(--corner-dist)), var(--corner-dist)) rotate(0deg); }

                                        .btn-container-2:hover .btn-2, .btn-container-2.active-hover .btn-2 {
                                            transform: scale(1.05);
                                            filter: drop-shadow(0 10px 15px rgba(16,185,129,0.3));
                                        }
                                        .btn-container-2:hover .transition-top-2, .btn-container-2.active-hover .transition-top-2 {
                                            transform: translateY(-24px) rotateZ(-3deg);
                                            filter: blur(0px);
                                            opacity: 1;
                                        }
                                        .btn-container-2:hover .transition-bottom-2, .btn-container-2.active-hover .transition-bottom-2 {
                                            transform: translateY(24px) rotateZ(3deg);
                                            filter: blur(0px);
                                            opacity: 1;
                                        }
                                        .btn-container-2:hover .btn-text-2, .btn-container-2.active-hover .btn-text-2 {
                                            transform: scale(1.05);
                                        }
                                        .btn-container-2:hover, .btn-container-2.active-hover {
                                            --corner-color: rgba(52, 211, 153, 0.8);
                                        }
                                        .btn-container-2:hover .btn-corner-2:first-of-type, .btn-container-2.active-hover .btn-corner-2:first-of-type {
                                            transform: translate(calc(-1 * var(--corner-multiplier) * var(--corner-dist)), calc(-1 * var(--corner-multiplier) * var(--corner-dist))) rotate(90deg);
                                            filter: drop-shadow(-5px 5px 2px var(--corner-color));
                                        }
                                        .btn-container-2:hover .btn-corner-2:nth-of-type(2), .btn-container-2.active-hover .btn-corner-2:nth-of-type(2) {
                                            transform: translate(calc(var(--corner-multiplier) * var(--corner-dist)), calc(-1 * var(--corner-multiplier) * var(--corner-dist))) rotate(180deg);
                                            filter: drop-shadow(-5px 5px 2px var(--corner-color));
                                        }
                                        .btn-container-2:hover .btn-corner-2:nth-of-type(3), .btn-container-2.active-hover .btn-corner-2:nth-of-type(3) {
                                            transform: translate(calc(var(--corner-multiplier) * var(--corner-dist)), calc(var(--corner-multiplier) * var(--corner-dist))) rotate(-90deg);
                                            filter: drop-shadow(-5px 5px 2px var(--corner-color));
                                        }
                                        .btn-container-2:hover .btn-corner-2:nth-of-type(4), .btn-container-2.active-hover .btn-corner-2:nth-of-type(4) {
                                            transform: translate(calc(-1 * var(--corner-multiplier) * var(--corner-dist)), calc(var(--corner-multiplier) * var(--corner-dist))) rotate(0deg);
                                            filter: drop-shadow(-5px 5px 2px var(--corner-color));
                                        }

                                        @media (hover: none) and (pointer: coarse) {
                                            .btn-container-2:active .btn-2 {
                                                transform: scale(1.05);
                                                filter: drop-shadow(0 10px 15px rgba(16,185,129,0.3));
                                            }
                                            .btn-container-2:active .transition-top-2 {
                                                transform: translateY(-24px) rotateZ(-3deg);
                                                filter: blur(0px);
                                                opacity: 1;
                                            }
                                            .btn-container-2:active .transition-bottom-2 {
                                                transform: translateY(24px) rotateZ(3deg);
                                                filter: blur(0px);
                                                opacity: 1;
                                            }
                                            .btn-container-2:active .btn-text-2 {
                                                transform: scale(1.05);
                                            }
                                            .btn-container-2:active {
                                                --corner-color: rgba(52, 211, 153, 0.8);
                                            }
                                            .btn-container-2:active .btn-corner-2:first-of-type {
                                                transform: translate(calc(-1 * var(--corner-multiplier) * var(--corner-dist)), calc(-1 * var(--corner-multiplier) * var(--corner-dist))) rotate(90deg);
                                                filter: drop-shadow(-5px 5px 2px var(--corner-color));
                                            }
                                            .btn-container-2:active .btn-corner-2:nth-of-type(2) {
                                                transform: translate(calc(var(--corner-multiplier) * var(--corner-dist)), calc(-1 * var(--corner-multiplier) * var(--corner-dist))) rotate(180deg);
                                                filter: drop-shadow(-5px 5px 2px var(--corner-color));
                                            }
                                            .btn-container-2:active .btn-corner-2:nth-of-type(3) {
                                                transform: translate(calc(var(--corner-multiplier) * var(--corner-dist)), calc(var(--corner-multiplier) * var(--corner-dist))) rotate(-90deg);
                                                filter: drop-shadow(-5px 5px 2px var(--corner-color));
                                            }
                                            .btn-container-2:active .btn-corner-2:nth-of-type(4) {
                                                transform: translate(calc(-1 * var(--corner-multiplier) * var(--corner-dist)), calc(var(--corner-multiplier) * var(--corner-dist))) rotate(0deg);
                                                filter: drop-shadow(-5px 5px 2px var(--corner-color));
                                            }
                                        }

                                        @media (min-width: 640px) {
                                            .btn-container-2 {
                                                width: auto;
                                                max-width: none;
                                            }
                                        }
                                    `}
                                </style>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">Scroll to explore</span>
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <motion.div
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
