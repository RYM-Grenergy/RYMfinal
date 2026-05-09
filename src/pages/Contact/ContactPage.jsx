import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({ fullName: '', phone: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactLinks = [
    {
      icon: <FaEnvelope className="text-emerald-400" />,
      label: 'Email',
      value: 'contact@rym-grenergy.com',
      href: 'mailto:contact@rym-grenergy.com',
    },
    {
      icon: <FaPhoneAlt className="text-emerald-400" />,
      label: 'Phone',
      value: '+91-82000-55645',
      href: 'tel:+918200055645',
    },
    {
      icon: <FaMapMarkerAlt className="text-emerald-400" />,
      label: 'Address',
      value: 'RYM Grenergy, L105, Baluda Rd, PRECORE CITY, Gurugram, Sohna Rural, Haryana 122103',
      href: null,
    },
  ];

  const mapEmbedUrl =
    'https://maps.google.com/maps?q=RYM%20Grenergy%2C%20L105%2C%20Baluda%20Rd%2C%20PRECORE%20CITY%2C%20Gurugram%2C%20Sohna%20Rural%2C%20Haryana%20122103&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_82%_80%,rgba(20,184,166,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.35)_1px,transparent_1px)] bg-size-[16px_16px] opacity-25" />

      <section className="relative z-10 pt-40 pb-20 md:pt-44 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative"
              >
                <div className="absolute left-0 top-24 hidden h-44 w-px bg-linear-to-b from-emerald-400/10 via-emerald-400/80 to-emerald-400/10 lg:block" />

                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  Contact <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">Us</span>
                </h1>
                <p className="mt-5 max-w-md text-zinc-400">
                  Speak with our team about smart EV charging, analytics, and clean energy systems tailored for your goals.
                </p>

                <div className="mt-10 space-y-6 lg:pl-10">
                  {contactLinks.map((item) => (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-base text-zinc-100 transition-colors hover:text-emerald-300">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base text-zinc-100">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-10 overflow-hidden rounded-sm border border-emerald-500/20 bg-black/40 lg:ml-10">
                  <iframe
                    title="RYM Grenergy Location"
                    src={mapEmbedUrl}
                    className="h-64 w-full"
                    style={{ filter: 'grayscale(0.45) saturate(0.8) brightness(0.7) contrast(1.08)' }}
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-emerald-500/20 mix-blend-multiply" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="relative mx-auto w-full max-w-xl"
              >
                <span className="pointer-events-none absolute -left-4 -top-4 h-14 w-14 border-l-2 border-t-2 border-emerald-400/90" />
                <span className="pointer-events-none absolute -right-4 -top-4 h-14 w-14 border-r-2 border-t-2 border-emerald-400/90" />
                <span className="pointer-events-none absolute -bottom-4 -left-4 h-14 w-14 border-b-2 border-l-2 border-emerald-400/90" />
                <span className="pointer-events-none absolute -bottom-4 -right-4 h-14 w-14 border-b-2 border-r-2 border-emerald-400/90" />

                <div className="rounded-sm border border-white/10 bg-linear-to-b from-zinc-900/95 to-zinc-950/95 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.5)] md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-emerald-400/70"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-emerald-400/70"
                        placeholder="name@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-emerald-400/70"
                        placeholder="+91 00000 00000"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="w-full resize-none border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-emerald-400/70"
                        placeholder="Tell us about your requirement"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="mt-1 w-full bg-linear-to-r from-emerald-400 to-teal-400 px-4 py-3.5 text-sm font-semibold tracking-wide text-black transition-shadow hover:shadow-[0_16px_35px_rgba(16,185,129,0.35)]"
                    >
                      {submitted ? 'Message Sent' : 'Send'}
                    </motion.button>

                    <p className="text-center text-xs text-zinc-500">
                      We usually respond within 24 hours.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
