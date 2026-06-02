import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheckCircle, FaRocket, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/data';

const Products = () => {
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const homeProducts = productsData.slice(0, 3);

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

    const truncateText = (text, length = 120) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    return (
        <>
            <section className="bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] py-[50px] md:py-[100px]" id="products">
                <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] mb-4 font-bold font-heading">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#10b981] to-[#059669]">Products</span>
                        </h2>
                        <p className="text-[clamp(0.95rem,1.5vw,1.2rem)] text-[#a0a0a0] max-w-[600px] mx-auto mb-10 md:mb-[60px]">
                            Innovative solutions designed for the future of energy
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-[40px] md:mt-[60px]"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {homeProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                className="group relative bg-[#111111] border border-[#222222] rounded-[16px] md:rounded-[24px] overflow-hidden transition-all duration-300 hover:border-[#10b981] hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] flex flex-col h-full"
                                variants={cardVariants}
                            >
                                <div className="relative h-[200px] md:h-[260px] overflow-hidden bg-[#0c0c0c] flex items-center justify-center p-4">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <h3 className="text-[clamp(1.15rem,4vw,1.35rem)] lg:text-[clamp(1.35rem,2vw,1.5rem)] font-bold text-white mb-3 group-hover:text-[#10b981] transition-colors">{product.name}</h3>
                                    <p className="text-[clamp(0.85rem,3vw,0.9rem)] lg:text-[0.95rem] text-[#b0b0b0] leading-[1.6] mb-6 flex-1">
                                         {truncateText(product.description)}
                                     </p>
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="w-full py-3.5 md:py-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg text-[#10b981] text-[0.9rem] md:text-[0.95rem] font-bold uppercase tracking-[1px] transition-all hover:bg-[#10b981] hover:text-white flex items-center justify-center gap-2 group/btn"
                                    >
                                        View Details
                                        <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-8 md:mt-10 flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                    >
                        <button
                            onClick={() => navigate('/products')}
                            className="group inline-flex items-center gap-2 px-7 md:px-8 py-3.5 rounded-full border border-[#10b981]/40 bg-[#10b981]/10 text-[#10b981] text-sm md:text-base font-bold uppercase tracking-[1.2px] transition-all duration-300 hover:bg-[#10b981] hover:text-white hover:border-[#10b981]"
                        >
                            Explore More
                            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Product Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                            onClick={() => setSelectedProduct(null)}
                        ></motion.div>

                        <motion.div
                            className="relative bg-[#111111] border border-[#222222] rounded-[24px] md:rounded-[32px] w-full max-w-[1000px] max-h-[90vh] overflow-y-auto shadow-[0_0_100px_rgba(16,185,129,0.2)] scrollbar-hide"
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white hover:bg-white hover:text-black transition-all"
                                onClick={() => setSelectedProduct(null)}
                            >
                                <FaTimes />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="relative h-[300px] lg:h-auto overflow-hidden bg-[#080808] flex justify-center items-center p-6">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full max-h-[80vh] object-contain" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] lg:bg-gradient-to-r via-transparent to-transparent opacity-60 pointer-events-none"></div>
                                </div>

                                <div className="p-6 md:p-10 lg:p-16 flex flex-col gap-6 md:gap-8">
                                    <div>
                                         <span className="inline-block px-4 py-1.5 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full text-[#10b981] text-[0.8rem] md:text-[0.85rem] font-bold uppercase tracking-[2px] mb-4">Innovation</span>
                                         <h2 className="text-[clamp(1.75rem,7vw,2.5rem)] lg:text-[clamp(2.5rem,5vw,3rem)] font-bold text-white leading-tight">{selectedProduct.name}</h2>
                                     </div>

                                    <p className="text-[1rem] md:text-[1.1rem] leading-[1.8] text-[#d0d0d0] font-light italic border-l-2 border-[#10b981] pl-6 py-2">
                                        {selectedProduct.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4">
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981] text-xl">
                                                <FaCheckCircle />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold">Reliable</span>
                                                <span className="text-[#a0a0a0] text-xs">Certified quality</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981] text-xl">
                                                <FaRocket />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold">Fast</span>
                                                <span className="text-[#a0a0a0] text-xs">High performance</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981] text-xl">
                                                <FaGlobe />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold">Global</span>
                                                <span className="text-[#a0a0a0] text-xs">Export standard</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className="mt-8 md:mt-12 py-4 md:py-5 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl text-white text-[1rem] font-bold uppercase tracking-[1px] shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                                        onClick={() => setSelectedProduct(null)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Products;
