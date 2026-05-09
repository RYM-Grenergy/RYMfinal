import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="relative bg-[#040406] text-white overflow-hidden min-h-screen">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] bg-emerald-500/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px]" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-8">
                            Legal
                        </div>
                        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[1] font-black tracking-tighter mb-8 max-w-5xl">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300">Policy</span>
                        </h1>
                        <div className="flex items-center gap-3 text-zinc-500 text-sm md:text-base font-medium py-3 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                            <span className="w-1 h-1 rounded-full bg-zinc-600" />
                            <span className="text-zinc-200">Privacy Policy</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-emerald max-w-none"
                    >
                        <div className="space-y-12 text-zinc-400 text-lg leading-relaxed">
                            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Introduction</h2>
                                <p>
                                    At RYM Grenergy, we respect your privacy and are committed to protecting it. This Privacy Policy describes how we collect, use, and share your personal information when you visit our website or use our services.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Information We Collect</h2>
                                <p>
                                    We may collect information that identifies you, such as your name, email address, and phone number, when you contact us or request information about our products and services. We also automatically collect certain information about your device and how you interact with our website.
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>Contact Information (Name, Email, Phone)</li>
                                    <li>Usage Data (IP Address, Browser Type, Pages Visited)</li>
                                    <li>Communication Logs</li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">How We Use Your Information</h2>
                                <p>
                                    We use the information we collect to provide and improve our services, respond to your inquiries, and send you updates about our products. We do not sell your personal information to third parties.
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>To provide and maintain our Service</li>
                                    <li>To notify you about changes to our Service</li>
                                    <li>To provide customer support</li>
                                    <li>To gather analysis or valuable information so that we can improve our Service</li>
                                </ul>
                            </div>

                            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 md:p-12 rounded-[2.5rem]">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Data Security</h2>
                                <p>
                                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <p className="text-emerald-400 font-bold">
                                    contact@rym-grenergy.com
                                </p>
                            </div>

                            <div className="pt-12 text-sm text-zinc-600 border-t border-white/5">
                                Last updated: April 2, 2026
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
