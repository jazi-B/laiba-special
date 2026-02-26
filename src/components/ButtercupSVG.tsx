"use client";

import { motion } from "framer-motion";

export const ButtercupSVG = () => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 md:w-64 md:h-64 relative cursor-pointer"
        >
            <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_20px_rgba(46,204,113,0.6)]"
            >
                {/* Head */}
                <circle cx="100" cy="100" r="80" fill="#000" />
                {/* Eyes (Powerpuff Style) */}
                <circle cx="65" cy="90" r="25" fill="white" />
                <circle cx="135" cy="90" r="25" fill="white" />
                {/* Irises (Green) */}
                <circle cx="65" cy="90" r="15" fill="#2ECC71" />
                <circle cx="135" cy="90" r="15" fill="#2ECC71" />
                {/* Pupils */}
                <circle cx="65" cy="90" r="8" fill="black" />
                <circle cx="135" cy="90" r="8" fill="black" />
                {/* Hair Peak */}
                <path d="M40 40 L100 20 L160 40 L100 60 Z" fill="#000" />
                {/* Small Angry Brows */}
                <path d="M50 70 L80 80" stroke="#000" strokeWidth="4" strokeLinecap="round" />
                <path d="M150 70 L120 80" stroke="#000" strokeWidth="4" strokeLinecap="round" />
                {/* Smirk */}
                <path d="M85 140 Q100 150 115 140" stroke="white" strokeWidth="3" fill="none" />
            </svg>
        </motion.div>
    );
};
