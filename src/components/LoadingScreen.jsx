import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingTexts = [
    "INITIALIZING ENERGY PROTOCOLS...",
    "CALIBRATING SMART GRID...",
    "SYNCHRONIZING POWER FLOW...",
    "SECURING CONNECTION...",
    "SYSTEMS ONLINE."
];

// Futuristic Synthesizer using Web Audio API for an interactive charging audio experience
class LoadingSynth {
    constructor() {
        this.ctx = null;
        this.droneOsc = null;
        this.leadOsc = null;
        this.lfo = null;
        this.lfoGain = null;
        this.filter = null;
        this.mainGain = null;
        this.isInitialized = false;
        this.isMuted = false;
        this.onStateChangeCallback = null;
    }

    init() {
        if (this.isInitialized) return;
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;
            this.ctx = new AudioContextClass();
            
            // Set up state change listener
            this.ctx.onstatechange = () => {
                if (this.onStateChangeCallback) {
                    this.onStateChangeCallback(this.ctx.state);
                }
            };
            
            // Main gain node (overall volume control)
            this.mainGain = this.ctx.createGain();
            this.mainGain.gain.setValueAtTime(0, this.ctx.currentTime);
            this.mainGain.connect(this.ctx.destination);

            // Low pass filter to keep the sound smooth and warm
            this.filter = this.ctx.createBiquadFilter();
            this.filter.type = 'lowpass';
            this.filter.Q.setValueAtTime(2.5, this.ctx.currentTime); // Subtle resonance
            this.filter.frequency.setValueAtTime(120, this.ctx.currentTime);
            this.filter.connect(this.mainGain);

            // Drone oscillator (deep sub-bass foundation)
            this.droneOsc = this.ctx.createOscillator();
            this.droneOsc.type = 'triangle';
            this.droneOsc.frequency.setValueAtTime(60, this.ctx.currentTime);
            
            const droneGain = this.ctx.createGain();
            droneGain.gain.setValueAtTime(0.45, this.ctx.currentTime);
            this.droneOsc.connect(droneGain);
            droneGain.connect(this.filter);

            // Lead oscillator (pitch-rising charge tone)
            this.leadOsc = this.ctx.createOscillator();
            this.leadOsc.type = 'sine';
            this.leadOsc.frequency.setValueAtTime(110, this.ctx.currentTime);

            // LFO to create a pulsing "data-transfer" effect
            this.lfo = this.ctx.createOscillator();
            this.lfo.type = 'sine';
            this.lfo.frequency.setValueAtTime(4, this.ctx.currentTime); // Starts at 4Hz

            this.lfoGain = this.ctx.createGain();
            this.lfoGain.gain.setValueAtTime(0.25, this.ctx.currentTime); // Pulsing intensity

            // Lead gain node that gets modulated by the LFO
            const leadGain = this.ctx.createGain();
            leadGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
            
            this.lfo.connect(this.lfoGain);
            this.lfoGain.connect(leadGain.gain); // Modulate volume

            this.leadOsc.connect(leadGain);
            leadGain.connect(this.filter);

            // Start all nodes
            this.droneOsc.start();
            this.leadOsc.start();
            this.lfo.start();

            // Try to resume context immediately (in case browser allows autoplay)
            if (!this.isMuted) {
                this.ctx.resume().then(() => {
                    this.mainGain.gain.linearRampToValueAtTime(0.45, this.ctx.currentTime + 0.5);
                }).catch(() => {
                    // Autoplay was blocked
                });
            }

            this.isInitialized = true;
        } catch (e) {
            console.warn("Failed to initialize Loading Audio:", e);
        }
    }

    update(progress) {
        if (!this.isInitialized || this.isMuted) return;
        if (this.ctx.state === 'suspended') return;

        const t = this.ctx.currentTime;
        const norm = progress / 100;

        // Drone pitch rises from 60Hz to 120Hz
        const droneFreq = 60 + norm * 60;
        this.droneOsc.frequency.setTargetAtTime(droneFreq, t, 0.1);

        // Lead pitch rises from 110Hz to 330Hz (one octave and a fifth)
        const leadFreq = 110 + norm * 220;
        this.leadOsc.frequency.setTargetAtTime(leadFreq, t, 0.1);

        // Filter opens up from 120Hz to 1200Hz as energy increases
        const filterFreq = 120 + norm * 1080;
        this.filter.frequency.setTargetAtTime(filterFreq, t, 0.1);

        // LFO pulse rate increases from 4Hz to 14Hz (mimicking speedup)
        const lfoRate = 4 + norm * 10;
        this.lfo.frequency.setTargetAtTime(lfoRate, t, 0.1);
    }

    playTick() {
        if (!this.isInitialized || this.isMuted) return;
        if (this.ctx.state === 'suspended') return;

        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1500, t);
        osc.frequency.exponentialRampToValueAtTime(700, t + 0.04);

        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.05);
    }

    playComplete() {
        if (!this.isInitialized || this.isMuted) return;
        if (this.ctx.state === 'suspended') return;

        const t = this.ctx.currentTime;

        // Fade out charging oscillators quickly
        this.mainGain.gain.linearRampToValueAtTime(0, t + 0.1);

        // Play E Major 9 resolution chord (E3, B3, G#4, D#5, F#5) for a cinematic feel
        const notes = [164.81, 246.94, 415.30, 622.25, 739.99];
        notes.forEach((freq, index) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = index % 2 === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(freq, t);

            // Staggered entry (arpeggio effect)
            const noteDelay = index * 0.06;
            
            gain.gain.setValueAtTime(0, t);
            gain.gain.setValueAtTime(0, t + noteDelay);
            gain.gain.linearRampToValueAtTime(0.15, t + noteDelay + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, t + noteDelay + 2.0);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(t + noteDelay);
            osc.stop(t + noteDelay + 2.1);
        });
    }

    setMute(mute) {
        this.isMuted = mute;
        if (!this.isInitialized) return;
        
        const t = this.ctx.currentTime;
        if (mute) {
            this.mainGain.gain.linearRampToValueAtTime(0, t + 0.1);
        } else {
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            this.mainGain.gain.linearRampToValueAtTime(0.45, t + 0.2);
        }
    }

    resume(progress = 0) {
        if (this.ctx) {
            if (this.ctx.state === 'suspended') {
                this.ctx.resume().then(() => {
                    try {
                        const buffer = this.ctx.createBuffer(1, 1, 22050);
                        const source = this.ctx.createBufferSource();
                        source.buffer = buffer;
                        source.connect(this.ctx.destination);
                        source.start(0);
                    } catch (e) {
                        console.warn("Failed to play silent trigger buffer:", e);
                    }
                    if (progress > 0) {
                        this.update(progress);
                    }
                }).catch((err) => {
                    console.warn("AudioContext resume failed:", err);
                });
            } else {
                this.update(progress);
            }
        }
    }

    destroy() {
        if (!this.isInitialized) return;
        try {
            this.droneOsc.stop();
            this.leadOsc.stop();
            this.lfo.stop();
            this.ctx.close();
        } catch (e) {}
        this.isInitialized = false;
    }
}

const LoadingScreen = ({ onFinished }) => {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [muted, setMuted] = useState(false);
    const [audioSuspended, setAudioSuspended] = useState(false);

    const synthRef = useRef(null);

    // Initialize Audio Synth
    useEffect(() => {
        const synth = new LoadingSynth();
        synthRef.current = synth;
        
        // Sync initial mute state from localStorage
        const storedMute = localStorage.getItem('loading-audio-muted') === 'true';
        setMuted(storedMute);
        
        synth.onStateChangeCallback = (state) => {
            setAudioSuspended(state === 'suspended');
        };

        synth.init();
        synth.setMute(storedMute);

        return () => {
            synth.destroy();
        };
    }, []);

    // Sync progress updates to synth parameters
    useEffect(() => {
        if (synthRef.current) {
            synthRef.current.update(progress);
        }
    }, [progress]);

    // Auto-resume audio context immediately on any user interaction with the window
    useEffect(() => {
        const handleInteraction = () => {
            if (synthRef.current) {
                synthRef.current.resume(progress);
                setAudioSuspended(false);
            }
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);
        window.addEventListener('touchend', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('touchend', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, [progress]);

    // Play tick sound when loading status text changes
    useEffect(() => {
        if (synthRef.current) {
            synthRef.current.playTick();
        }
    }, [textIndex]);

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
                if (synthRef.current) {
                    synthRef.current.playComplete();
                }
                // Wait briefly at 100% to let the final chord ring out beautifully
                setTimeout(() => {
                    if (onFinished) onFinished();
                }, 1800);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [onFinished]);

    const handleScreenClick = () => {
        if (synthRef.current) {
            synthRef.current.resume(progress);
            setAudioSuspended(false);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation(); // Avoid triggering full screen click handler
        const newMuted = !muted;
        setMuted(newMuted);
        localStorage.setItem('loading-audio-muted', String(newMuted));
        
        if (synthRef.current) {
            synthRef.current.setMute(newMuted);
            if (!newMuted) {
                synthRef.current.resume(progress);
                setAudioSuspended(false);
            }
        }
    };

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
            onClick={handleScreenClick}
            onTouchStart={handleScreenClick}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden select-none cursor-pointer"
        >
            {/* Audio Toggle Control */}
            <div className="absolute top-6 right-6 z-[10000] flex items-center gap-3">
                <AnimatePresence>
                    {audioSuspended && !muted && (
                        <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-[10px] md:text-xs text-emerald-400/60 font-mono tracking-widest bg-emerald-950/20 border border-emerald-900/40 px-3 py-1 rounded"
                        >
                            TAP ANYWHERE FOR AUDIO
                        </motion.span>
                    )}
                </AnimatePresence>
                <button
                    onClick={toggleMute}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-emerald-500/20 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 group relative shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-pointer"
                    title={muted ? "Unmute Sound" : "Mute Sound"}
                    aria-label={muted ? "Unmute sound" : "Mute sound"}
                >
                    {muted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                    )}
                </button>
            </div>
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
                        Grenergy
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