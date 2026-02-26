"use client";

import { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { Star } from "lucide-react";

const INITIAL_ITEMS = [
    { id: "top", name: "Buttercup Green Top", color: "#2ECC71" },
    { id: "bottom", name: "Goth Black Skirt", color: "#000000" },
    { id: "shoes", name: "Power Boots", color: "#ffffff" },
    { id: "accessory", name: "Green Bow", color: "#2ECC71" },
];

export const DressMatcher = () => {
    const [items, setItems] = useState(INITIAL_ITEMS);
    const [isMatched, setIsMatched] = useState(false);

    return (
        <div className="glass-card p-8 text-center flex flex-col items-center">
            <h3 className="text-2xl font-playfair mb-6">Dress Matcher</h3>
            <p className="text-gray-400 mb-8 text-sm">Drag to match the perfect Buttercup outfit!</p>

            <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-3 w-full max-w-xs">
                {items.map((item) => (
                    <Reorder.Item
                        key={item.id}
                        value={item}
                        className="p-4 bg-white/5 border border-white/10 rounded-xl cursor-grab active:cursor-grabbing flex items-center justify-between group hover:border-[#2ECC71] transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="w-4 h-4 rounded-full border border-white/20"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="text-gray-600 group-hover:text-[#2ECC71]">☰</div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            <button
                onClick={() => setIsMatched(true)}
                className="btn-buttercup mt-8"
            >
                Check Match
            </button>

            {isMatched && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-[#2ECC71] font-bold flex items-center gap-2"
                >
                    <Star className="w-5 h-5 fill-[#2ECC71]" /> Total Icon! You look stunning!
                </motion.div>
            )}
        </div>
    );
};
