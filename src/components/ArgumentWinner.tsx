"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2 } from "lucide-react";

export const ArgumentWinner = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [won, setWon] = useState(false);
    const [attempts, setAttempts] = useState(0);

    const moveButton = () => {
        if (attempts < 5) {
            const newX = (Math.random() - 0.5) * 400;
            const newY = (Math.random() - 0.5) * 400;
            setPos({ x: newX, y: newY });
            setAttempts(attempts + 1);
        } else {
            setWon(true);
        }
    };

    return (
        <div className="glass-card min-h-[400px] flex flex-col items-center justify-center text-center p-12">
            <h3 className="text-3xl font-playfair mb-8">The Ultimate Argument Winner</h3>

            {!won ? (
                <div className="relative w-full h-48 flex items-center justify-center">
                    <motion.button
                        animate={{ x: pos.x, y: pos.y }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        onHoverStart={moveButton}
                        onClick={() => setWon(true)}
                        className="btn-buttercup"
                    >
                        I'm Right (Click Me)
                    </motion.button>
                </div>
            ) : (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center gap-4"
                >
                    <Trophy className="w-16 h-16 text-yellow-400 animate-bounce" />
                    <h4 className="text-2xl font-bold">Of course you're right, Laiba!</h4>
                    <p className="text-gray-400">You've won every argument since 20XX.</p>
                    <div className="flex items-center gap-2 text-[#2ECC71]">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Case Closed. Guaranteed.</span>
                    </div>
                    <button
                        onClick={() => { setWon(false); setAttempts(0); setPos({ x: 0, y: 0 }) }}
                        className="mt-4 text-xs text-gray-500 underline"
                    >
                        Try again (You'll still win)
                    </button>
                </motion.div>
            )}
        </div>
    );
};
