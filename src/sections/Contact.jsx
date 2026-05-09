import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            content: 'RYM Grenergy, L105, Baluda Rd, PRECORE CITY, Gurugram, Sohna Rural, Haryana 122103'
        },
        {
            icon: <FaPhoneAlt />,
            title: 'Phone',
            content: '+91-82000-55645',
            link: 'tel:+918200055645'
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            content: 'contact@rym-grenergy.com',
            link: 'mailto:contact@rym-grenergy.com'
        }
    ];

    return (
        <section className="relative overflow-hidden py-14 md:py-20 bg-linear-to-b from-[#050505] via-[#0b0d0c] to-[#050505]" id="contact">
            <div className="absolute -top-24 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-12 w-80 h-80 bg-teal-500/8 rounded-full blur-[110px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[clamp(1.75rem,7vw,2.5rem)] lg:text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-white font-heading">
                        Contact <span className="text-transparent bg-clip-text bg-linear-to-br from-emerald-400 to-teal-400">Us</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ y: -4 }}
                    className="mb-8 md:mb-10 relative overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm"
                >
                    <iframe
                        title="RYM Grenergy Location"
                        src="https://maps.google.com/maps?q=RYM%20Grenergy%2C%20L105%2C%20Baluda%20Rd%2C%20PRECORE%20CITY%2C%20Gurugram%2C%20Sohna%20Rural%2C%20Haryana%20122103&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-64 md:h-80 lg:h-96"
                        style={{ filter: 'grayscale(0.48) saturate(0.72) brightness(0.68) contrast(1.1)' }}
                        loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-emerald-500/18 mix-blend-multiply" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mb-8 md:mb-10">
                            Share your project goals and our team will help you build efficient, future-ready energy systems with the right technology stack.
                        </p>

                        <div className="space-y-4 md:space-y-5">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.45 }}
                                    whileHover={{ y: -5, scale: 1.01 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl border border-white/8 bg-white/2 backdrop-blur-sm"
                                >
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-linear-to-br from-emerald-500/25 to-emerald-500/10 border border-emerald-500/40 text-emerald-300 flex items-center justify-center">
                                        {info.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-white text-lg font-semibold mb-1">{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link} className="text-zinc-300 hover:text-emerald-300 transition-colors break-all">
                                                {info.content}
                                            </a>
                                        ) : (
                                            <p className="text-zinc-300 leading-relaxed">{info.content}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -6 }}
                        className="relative"
                    >
                        <div className="absolute -top-8 -right-6 w-24 h-24 rounded-bl-[90px] bg-emerald-400/25 hidden sm:block" />
                        <div
                            className="absolute -bottom-10 -left-8 w-28 h-20 opacity-60 hidden sm:block"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(52,211,153,0.65) 1.2px, transparent 1.2px)',
                                backgroundSize: '10px 10px'
                            }}
                        />

                        <motion.div
                            className="relative rounded-2xl border border-emerald-500/35 bg-linear-to-br from-[#0f1714] to-[#0b1110] p-5 sm:p-6 md:p-7 shadow-[0_20px_60px_rgba(16,185,129,0.12)]"
                            whileHover={{ boxShadow: '0 24px 70px rgba(16,185,129,0.18)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-3.5">
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full h-12 px-4 rounded-md bg-[#0a0f0d] border border-emerald-500/25 text-zinc-100 placeholder-zinc-500 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                                />

                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Email"
                                    className="w-full h-12 px-4 rounded-md bg-[#0a0f0d] border border-emerald-500/25 text-zinc-100 placeholder-zinc-500 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                                />

                                <label htmlFor="phone" className="sr-only">Your Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Phone"
                                    className="w-full h-12 px-4 rounded-md bg-[#0a0f0d] border border-emerald-500/25 text-zinc-100 placeholder-zinc-500 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                                />

                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 rounded-md bg-[#0a0f0d] border border-emerald-500/25 text-zinc-100 placeholder-zinc-500 outline-none resize-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                                />

                                <motion.button
                                    type="submit"
                                    className="w-full h-11 rounded-md bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold tracking-wide flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    <FaPaperPlane className="text-xs" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
