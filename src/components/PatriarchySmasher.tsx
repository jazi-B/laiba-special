"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";

export const PatriarchySmasher = () => {
    const [score, setScore] = useState(0);
    const [badVibes, setBadVibes] = useState([
        { id: 1, text: "Bad Vibes", x: 20, y: 30 },
        { id: 2, text: "Standards", x: 60, y: 50 },
        { id: 3, text: "Drama", x: 40, y: 80 },
    ]);

    const smash = (id: number) => {
        setScore(s => s + 1);
        setBadVibes(v => v.filter(item => item.id !== id));

        // Add a new one after a short delay
        setTimeout(() => {
            const texts = ["Toxic Energy", "Stereotypes", "Mansplaining", "Ego", "Bad Advice"];
            const newVibe = {
                id: Date.now(),
                text: texts[Math.floor(Math.random() * texts.length)],
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
            };
            setBadVibes(v => [...v, newVibe]);
        }, 1000);
    };

    return (
        <div className="glass-card h-[400px] flex flex-col items-center justify-between p-6 relative overflow-hidden bg-gradient-to-br from-black to-[#0a2e1a]">
            <div className="z-10 text-center w-full">
                <h3 className="text-xl font-bold flex items-center justify-center gap-2 text-buttercup-green">
                    <Shield className="w-5 h-5" /> Patriarchy Smasher
                </h3>
                <p className="text-xs text-zinc-500 mb-4">Click to punch away the nonsense!</p>
                <div className="text-2xl font-black text-white">{score} <span className="text-xs text-zinc-500">SMASHED</span></div>
            </div>

            <div className="flex-1 w-full relative min-h-[250px]">
                <AnimatePresence>
                    {badVibes.map((vibe) => (
                        <motion.button
                            key={vibe.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 2, opacity: 0, rotate: 45 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => smash(vibe.id)}
                            className="absolute px-3 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-[10px] font-bold text-red-400 flex items-center gap-1 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                            style={{ left: `${vibe.x}%`, top: `${vibe.y}%` }}
                        >
                            <Zap className="w-3 h-3 saturate-150" /> {vibe.text}
                        </motion.button>
                    ))}
                </AnimatePresence>

                {/* Buttercup Fist Indicator */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-4 right-4 text-4xl opacity-30 pointer-events-none"
                >
                    👊
                </motion.div>
            </div>

            <div className="z-10 w-full pt-4 border-t border-white/5 text-[10px] text-zinc-500 flex justify-center items-center gap-1">
                <Target className="w-3 h-3" /> Buttercup Energy Protection Active
            </div>
        </div>
    );
};
