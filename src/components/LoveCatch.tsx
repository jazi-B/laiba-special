"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, UserX, Trophy } from "lucide-react";
import confetti from "canvas-confetti";

interface Item {
    id: number;
    type: 'heart' | 'toxic';
    x: number;
    y: number;
}

export const LoveCatch = () => {
    const [score, setScore] = useState(0);
    const [items, setItems] = useState<Item[]>([]);
    const [playerX, setPlayerX] = useState(50);
    const [gameOver, setGameOver] = useState(false);
    const gameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gameOver) return;

        const interval = setInterval(() => {
            setItems(prev => [
                ...prev,
                {
                    id: Date.now(),
                    type: Math.random() > 0.3 ? 'heart' : 'toxic',
                    x: Math.random() * 90,
                    y: -10
                }
            ]);
        }, 1000);

        return () => clearInterval(interval);
    }, [gameOver]);

    useEffect(() => {
        if (gameOver) return;

        const moveInterval = setInterval(() => {
            setItems(prev => {
                const next = prev.map(item => ({ ...item, y: item.y + 2 }))
                    .filter(item => item.y < 100);

                // Collision detection
                next.forEach(item => {
                    if (item.y > 80 && item.y < 90 && Math.abs(item.x - playerX) < 10) {
                        if (item.type === 'heart') {
                            setScore(s => s + 10);
                            // Clean up caught item
                            item.y = 200;
                        } else {
                            setGameOver(true);
                            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                        }
                    }
                });

                return next;
            });
        }, 30);

        return () => clearInterval(moveInterval);
    }, [playerX, gameOver]);

    return (
        <div
            className="glass-card h-[500px] w-full max-w-2xl mx-auto overflow-hidden relative cursor-none"
            onMouseMove={(e) => {
                if (!gameRef.current) return;
                const rect = gameRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                setPlayerX(Math.min(Math.max(x, 5), 95));
            }}
            ref={gameRef}
        >
            <div className="absolute top-4 left-4 text-2xl font-bold text-[#2ECC71]">
                Love: {score}
            </div>

            {!gameOver ? (
                <>
                    <AnimatePresence>
                        {items.map(item => (
                            <div
                                key={item.id}
                                className="absolute"
                                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                            >
                                {item.type === 'heart' ? (
                                    <Heart className="text-pink-500 fill-pink-500 w-8 h-8 drop-shadow-glow" />
                                ) : (
                                    <div className="bg-black border border-red-500 p-1 rounded">
                                        <UserX className="text-red-500 w-6 h-6" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </AnimatePresence>

                    {/* Player (Buttercup Mask) */}
                    <div
                        className="absolute bottom-4 w-16 h-16 flex items-center justify-center transition-all duration-75"
                        style={{ left: `${playerX}%`, transform: 'translateX(-50%)' }}
                    >
                        <div className="bg-[#2ECC71] w-12 h-12 rounded-full border-2 border-black flex items-center justify-center shadow-[0_0_15px_#2ECC71]">
                            👸
                        </div>
                    </div>
                </>
            ) : (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4">
                    <Trophy className="w-16 h-16 text-[#2ECC71]" />
                    <h3 className="text-3xl font-bold">Queen Score: {score}</h3>
                    <p className="text-gray-400">You avoided all those toxic men! (Almost)</p>
                    <button
                        onClick={() => { setGameOver(false); setScore(0); setItems([]) }}
                        className="btn-buttercup"
                    >
                        Play Again
                    </button>
                </div>
            )}

            <div className="absolute bottom-2 right-4 text-[10px] text-gray-500">
                Avoid the <span className="text-red-500">Toxic Men</span>! Catch the <span className="text-pink-500">Hearts</span>.
            </div>
        </div>
    );
};
