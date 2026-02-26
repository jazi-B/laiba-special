"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cake, X, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const BirthdayPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Show after 3 seconds
        const timer = setTimeout(() => {
            setShow(true);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#2ECC71', '#00FF00', '#ffffff', '#E4C1B1']
            });
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.5, y: 100 }}
                        animate={{ scale: 1, y: 0 }}
                        className="bg-[#0A0A0A] border-2 border-[#2ECC71] p-12 rounded-3xl max-w-lg w-full relative overflow-hidden text-center"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#2ECC71] to-transparent" />

                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="inline-block p-4 bg-[#2ECC71]/20 rounded-full mb-6"
                        >
                            <Cake className="w-12 h-12 text-[#2ECC71]" />
                        </motion.div>

                        <h2 className="text-4xl font-playfair font-black mb-4">
                            Happy <span className="text-[#2ECC71]">20th Birthday</span> Queen!
                        </h2>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Happy Birthday (26th Feb)! You're 20 years of pure Buttercup Energy.
                            The world isn't ready for your 2006 aesthetic level of perfection.
                        </p>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => {
                                    confetti({ particleCount: 50 });
                                    setShow(false);
                                }}
                                className="btn-buttercup justify-center"
                            >
                                Let's Celebrate! <Sparkles className="w-5 h-5" />
                            </button>
                            <p className="text-[10px] text-gray-600 italic">
                                (Even if I'm a bit late, my love for you is always on time)
                            </p>
                        </div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute -left-4 bottom-10 opacity-20"
                        >
                            <Sparkles className="w-12 h-12 text-[#2ECC71]" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
