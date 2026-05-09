import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="relative bg-[#040406] text-white overflow-hidden min-h-screen">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] bg-emerald-500/10 rounded-full blur-[160px]" />
                <div className="absolute top-[35%] -left-32 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[20%] -right-32 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-[140px]" />
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
                            Terms <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300">Of Service</span>
                        </h1>
                        <div className="flex items-center gap-3 text-zinc-500 text-sm md:text-base font-medium py-3 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                            <span className="w-1 h-1 rounded-full bg-zinc-600" />
                            <span className="text-zinc-200">Terms of Service</span>
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
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Agreement to Terms</h2>
                                <p>
                                    By accessing and using our website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Use of Our Services</h2>
                                <p>
                                    You represent and warrant that you are at least 18 years of age or using our website and services under the supervision of a parent or guardian. You also agree to use our services only for lawful purposes and in accordance with these Terms of Service.
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>No unauthorized use or duplication</li>
                                    <li>No unauthorized data scraping or mining</li>
                                    <li>Respect intellectual property rights</li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Intellectual Property Rights</h2>
                                <p>
                                    All contents on our website, including text, graphics, logos, and images, are the intellectual property of RYM Grenergy or its licensors and are protected by applicable copyright and trademark laws. Unauthorized use of our intellectual property is strictly prohibited.
                                </p>
                            </div>

                            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 md:p-12 rounded-[2.5rem]">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
                                <p>
                                    RYM Grenergy shall not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or the inability to use our services. We do not guarantee that our website or services will always be available or free from errors.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Modifications to Terms</h2>
                                <p>
                                    We reserve the right to modify these Terms of Service at any time without prior notice. Any changes will be posted on this page, and your continued use of our website or services following the posting of modifications indicates your acceptance of those changes.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Termination</h2>
                                <p>
                                    We reserve the right to terminate or suspend your access to our services, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.
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

export default Terms;
