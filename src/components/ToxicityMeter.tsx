"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Skull } from "lucide-react";

export const ToxicityMeter = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setValue(100), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="glass-card w-full max-w-md mx-auto p-8 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-[#2ECC71]">
                    <Skull className="w-5 h-5" /> Toxicity Level
                </h3>
                <span className="text-2xl font-black italic">100%</span>
            </div>

            <div className="h-4 bg-white/10 rounded-full overflow-hidden border border-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-red-500 via-green-500 to-[#2ECC71]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="mt-6 text-center"
            >
                <p className="text-sm text-gray-400 mb-2 italic">Scanning deep layers...</p>
                <div className="text-lg font-bold text-white flex items-center justify-center gap-2">
                    Psych! It's actually <span className="text-pink-500">100% Love</span> <Heart className="fill-pink-500 text-pink-500 w-5 h-5 animate-pulse" />
                </div>
            </motion.div>

            {/* Background glowing effect */}
            <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-[#2ECC71]/20 rounded-full blur-3xl -z-10" />
        </div>
    );
};
