import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingTexts = [
    "INITIALIZING ENERGY PROTOCOLS...",
    "CALIBRATING SMART GRID...",
    "SYNCHRONIZING POWER FLOW...",
    "SECURING CONNECTION...",
    "SYSTEMS ONLINE."
];

const LoadingScreen = ({ onFinished }) => {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        let startTime = Date.now();
        const duration = 5000; // 5 seconds loading duration

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const currentProgress = Math.min(100, (elapsed / duration) * 100);
            setProgress(currentProgress);

            if (currentProgress < 20) setTextIndex(0);
            else if (currentProgress < 40) setTextIndex(1);
            else if (currentProgress < 65) setTextIndex(2);
            else if (currentProgress < 90) setTextIndex(3);
            else setTextIndex(4);

            if (currentProgress >= 100) {
                clearInterval(interval);
                // Wait briefly at 100% before triggering unmount
                setTimeout(() => {
                    if (onFinished) onFinished();
                }, 800);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [onFinished]);

    // Ensure 2 digits for smooth tabular-nums look
    const formattedProgress = Math.floor(progress).toString().padStart(2, '0');

    return (
        <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                y: "-100%", // Cinematic slide up
                transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } // Apple-like ease
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
            {/* Background Tech Grid - 3D Perspective */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    transformOrigin: 'top center'
                }}
            />

            {/* Glowing Ambience Pulse */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Logo Animation Container */}
            <div className="relative z-10 w-full max-w-[800px] px-6 scale-100 sm:scale-110 md:scale-125 mb-16">
                <svg
                    width="100%"
                    height="250"
                    viewBox="0 0 500 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                    <style>
                        {`
                            .drawing-text-rym {
                                font-family: "Inter", "Outfit", sans-serif;
                                fill: rgba(16,185,129,0);
                                stroke: #10b981; 
                                stroke-width: 1.5;
                                stroke-dasharray: 1200;
                                stroke-dashoffset: 1200;
                                animation: draw 4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
                            }

                            .drawing-text-grenergy {
                                font-family: "Inter", "Outfit", sans-serif;
                                fill: rgba(16,185,129,0);
                                stroke: #34d399; 
                                stroke-width: 1.5;
                                stroke-dasharray: 1200;
                                stroke-dashoffset: 1200;
                                animation: draw 4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
                                animation-delay: 1.2s;
                            }

                            @keyframes draw {
                                to { stroke-dashoffset: 0; }
                                85% { fill: rgba(16,185,129,0); }
                                100% {
                                    stroke-dashoffset: 0;
                                    fill: rgba(16,185,129,0.15);
                                }
                            }
                        `}
                    </style>

                    <text
                        x="50%"
                        y="80"
                        fontSize="85"
                        fontWeight="900"
                        textAnchor="middle"
                        letterSpacing="4"
                        className="drawing-text-rym"
                    >
                        RYM
                    </text>
                    <text
                        x="50%"
                        y="160"
                        fontSize="36"
                        fontWeight="300"
                        textAnchor="middle"
                        letterSpacing="4"
                        className="drawing-text-grenergy"
                    >
                        Power Infrastructure
                    </text>
                </svg>
            </div>

            {/* Advanced Progress Indicators */}
            <div className="relative z-10 w-full max-w-md px-8 flex flex-col items-center">

                {/* Status Text with typing simulation */}
                <div className="h-6 overflow-hidden mb-8">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={textIndex}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="text-emerald-400/80 font-mono text-xs md:text-sm tracking-[0.2em] uppercase"
                        >
                            {loadingTexts[textIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full relative flex items-center justify-between gap-4">
                    <span className="text-zinc-500 font-mono text-sm">{"["}</span>

                    <div className="flex-1 h-[2px] bg-white/5 rounded-full relative">
                        {/* Fill line */}
                        <motion.div
                            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-emerald-600/50 via-emerald-400 to-emerald-300 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                        {/* Shining tip dot */}
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(52,211,153,1)]"
                            style={{ left: `calc(${progress}% - 6px)` }}
                        />
                    </div>

                    <span className="text-emerald-500 font-mono text-sm">{"]"}</span>
                </div>

                {/* Abstract Rotating Energy Core Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-20">
                    <motion.svg
                        width="300"
                        height="300"
                        viewBox="0 0 100 100"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                        className="opacity-30 mix-blend-screen"
                    >
                        <circle cx="50" cy="50" r="48" fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="4 2" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="10 5" />
                        <motion.circle
                            cx="50" cy="50" r="30" fill="none" stroke="#10b981" strokeWidth="0.5"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                        />
                        <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" stroke="#10b981" strokeWidth="0.2" />
                    </motion.svg>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;