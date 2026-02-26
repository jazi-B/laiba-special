"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MusicToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // We can't autoplay without interaction, so we wait for first interaction
        const handleFirstInteraction = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.currentTime = 60; // Start at 1 minute
                audioRef.current.play().catch(e => console.log("Autoplay blocked", e));
                setIsPlaying(true);
            }
            window.removeEventListener('click', handleFirstInteraction);
        };

        window.addEventListener('click', handleFirstInteraction);
        return () => window.removeEventListener('click', handleFirstInteraction);
    }, [isPlaying]);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                if (audioRef.current.currentTime === 0) {
                    audioRef.current.currentTime = 60;
                }
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <audio
                ref={audioRef}
                src="/maula.mp3"
                loop
            />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMusic}
                className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(46,204,113,0.5)] border-2 border-white/20"
            >
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="playing"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <Music2 className="text-black w-8 h-8" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="paused"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Music className="text-black w-8 h-8 opacity-50" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating pulse circles */}
                {isPlaying && (
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 bg-[#2ECC71] rounded-full -z-10"
                    />
                )}
            </motion.button>

            <div className="absolute -top-10 right-0 bg-black/80 text-[#2ECC71] text-xs px-3 py-1 rounded-full whitespace-nowrap border border-[#2ECC71]/30">
                Maula Mere Maula 🎵
            </div>
        </div>
    );
};
