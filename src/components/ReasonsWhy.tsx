"use client";

import { motion } from "framer-motion";
import { Heart, Stars, Sparkles, Flame, Crown, Moon, Sun, Cloud, Music, Zap } from "lucide-react";

const reasons = [
    { icon: Heart, text: "Your smile that lights up the worst days." },
    { icon: Flame, text: "That 'Buttercup' temper that's actually cute." },
    { icon: Stars, text: "Your obsession with finding the perfect dress." },
    { icon: Crown, text: "How you carry yourself like a true Queen." },
    { icon: Zap, text: "Your bold, feminist spirit that inspires me." },
    { icon: Moon, text: "The way you talk in your sleep." },
    { icon: Sun, text: "How you're the first thing I want to see every morning." },
    { icon: Cloud, text: "Your kindness (even when you pretend to be toxic)." },
    { icon: Music, text: "Your taste in music (especially Maula Mere Maula)." },
    { icon: Sparkles, text: "The sparkle in your eyes when you're happy." },
    { icon: Heart, text: "The way you care for people you love." },
    { icon: Flame, text: "Your passion for the things you believe in." },
    { icon: Stars, text: "How you make every date feel like a dream." },
    { icon: Crown, text: "Your strength during the hard times." },
    { icon: Zap, text: "The way you handle my drama." },
    { icon: Moon, text: "Our late night deep conversations." },
    { icon: Sun, text: "The warmth you bring into my life." },
    { icon: Cloud, text: "Your 2006 aesthetic and style." },
    { icon: Music, text: "How you dance when no one is watching." },
    { icon: Sparkles, text: "Simply because you are YOU, and that's enough." }
];

export const ReasonsWhy = () => {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-4">
                        20 Years, <span className="text-buttercup-green">20 Reasons Why</span>
                    </h2>
                    <p className="text-zinc-500">Celebrating every year of your existence.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5, borderColor: "rgba(151, 188, 98, 0.5)" }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-buttercup-green/10 flex items-center justify-center mb-4 group-hover:bg-buttercup-green/20 transition-colors">
                                <reason.icon className="w-5 h-5 text-buttercup-green" />
                            </div>
                            <p className="text-zinc-300 font-medium leading-relaxed">
                                <span className="text-buttercup-green mr-2 font-black">{index + 1}.</span>
                                {reason.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
