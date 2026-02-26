"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  Flame,
  Crown,
  Music2,
  Stars,
  Trophy,
  Calendar,
  Gift,
  Award,
  UtensilsCrossed,
  Gamepad2,
  Quote,
  Zap,
  Star
} from "lucide-react";
import { ButtercupSVG } from "@/components/ButtercupSVG";
import { MusicToggle } from "@/components/MusicToggle";
import { ToxicityMeter } from "@/components/ToxicityMeter";
import { ArgumentWinner } from "@/components/ArgumentWinner";
import { LoveCatch } from "@/components/LoveCatch";
import { DressMatcher } from "@/components/DressMatcher";
import { BirthdayPopup } from "@/components/BirthdayPopup";
import { ReasonsWhy } from "@/components/ReasonsWhy";
import { PatriarchySmasher } from "@/components/PatriarchySmasher";
import { useState, useEffect } from "react";
import { Sun, Moon, Laptop, Sparkles, Filter } from "lucide-react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const [daysElapsed, setDaysElapsed] = useState(0);
  const [isY2K, setIsY2K] = useState(false);
  const [isBoldMode, setIsBoldMode] = useState(true);

  useEffect(() => {
    const startDate = new Date("2023-02-26");
    const now = new Date();
    const diff = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setDaysElapsed(diff);
  }, []);

  const { scrollYProgress } = useScroll();

  const photos = [
    { src: "/photos/WhatsApp Image 2026-02-27 at 12.08.46 AM.jpeg", alt: "Our Mirror Selfie", together: true },
    { src: "/photos/WhatsApp Image 2026-02-27 at 12.08.43 AM (2).jpeg", alt: "Hallway Moments", together: true },
    { src: "/photos/WhatsApp Image 2026-02-27 at 12.08.37 AM (1).jpeg", alt: "Laiba Style" },
    { src: "/photos/WhatsApp Image 2026-02-27 at 12.08.37 AM (2).jpeg", alt: "Laiba Pose" },
    { src: "/photos/WhatsApp Image 2026-02-27 at 12.08.37 AM.jpeg", alt: "Laiba Classic" },
    { src: "/photos/WhatsApp Image 2026-02-27 at 12.08.43 AM.jpeg", alt: "Laiba Smile" },
    { src: "/photos/WhatsApp Image 2026-02-27 at 12.08.44 AM.jpeg", alt: "Laiba Look" }
  ];

  return (
    <main className={cn(
      "min-h-screen transition-colors duration-1000",
      isY2K && "y2k-grain saturate-[1.2] contrast-[1.1]",
      !isBoldMode ? "bg-[#FFF5F7] text-zinc-900" : "bg-black text-white"
    )}>
      <MusicToggle />
      <BirthdayPopup />

      {/* Theme Toggles */}
      <div className="fixed top-24 right-4 z-[90] flex flex-col gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsY2K(!isY2K)}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors overflow-hidden",
            isY2K ? "bg-buttercup-green border-white text-black" : "bg-zinc-900 border-white/10 text-white"
          )}
          title="Y2K Mode"
        >
          <Filter className="w-5 h-5" />
          {isY2K && <motion.div layoutId="y2k-glow" className="absolute inset-0 bg-white/20 blur-md" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsBoldMode(!isBoldMode)}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors overflow-hidden",
            !isBoldMode ? "bg-rose-gold border-white text-black" : "bg-zinc-900 border-white/10 text-white"
          )}
          title="Sweet vs Bold Mode"
        >
          {isBoldMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className={cn(
        "h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-1000",
        !isBoldMode ? "bg-[radial-gradient(circle_at_center,_#FFE4E1_0%,_transparent_70%)]" : "bg-[radial-gradient(circle_at_center,_var(--buttercup-dark)_0%,_transparent_70%)]"
      )}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-4"
        >
          {/* Floating Character */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1.2, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="mb-8 relative w-48 h-48 md:w-64 md:h-64 mx-auto group"
          >
            <div className={cn(
              "absolute inset-0 blur-3xl rounded-full transition-colors",
              !isBoldMode ? "bg-rose-gold/30" : "bg-buttercup-green/20"
            )} />
            <Image
              src="/buttercup1.png"
              alt="Buttercup Character"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(151,188,98,0.5)] group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
          <h1 className={cn(
            "text-6xl md:text-9xl font-playfair font-black mb-4 tracking-tighter transition-colors",
            !isBoldMode ? "text-zinc-900" : "text-white"
          )}>
            LAIBA
          </h1>
          <p className="text-xl md:text-2xl text-[#2ECC71] font-medium tracking-widest uppercase mb-8">
            The Best Thing That Ever Happened To Me
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 italic text-sm"
          >
            (Even if she's a certified man-hater)
          </motion.div>
        </motion.div>

        {/* Floating Sparks */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#2ECC71] rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{
                y: [null, "-100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </section>

      {/* Laiba-logy Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-playfair mb-8 flex items-center gap-4">
                <Crown className="text-[#2ECC71]" /> Laiba-logy
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Short Tempered but Sweet", desc: "One second she's a volcano, the next she's honey.", icon: Flame },
                  { title: "Feminist Queen", desc: "Will fight the patriarchy before breakfast.", icon: Stars },
                  { title: "Dress Obsessed", desc: "Wardrobe capacity is a theoretical concept.", icon: Heart }
                ].map((trait, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="glass-card flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#2ECC71]/20 rounded-xl flex items-center justify-center shrink-0">
                      <trait.icon className="text-[#2ECC71]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{trait.title}</h4>
                      <p className="text-gray-400">{trait.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <ToxicityMeter />
          </div>
        </div>
      </section>

      {/* 20 Reasons Why Section */}
      <ReasonsWhy />

      {/* Horse Riding Section - Enhanced */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0.3, 0.45], [0, -100]) }}
          className="absolute inset-0 z-0 opacity-60"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
          <Image
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop"
            alt="Horse Riding"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-buttercup-green rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(151,188,98,0.5)]">
              <span className="text-4xl text-black">🐎</span>
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">The Rider Spirit</h2>
          <p className="text-xl md:text-2xl text-buttercup-green font-medium max-w-2xl mx-auto drop-shadow-md">
            Strength, Grace, and a bit of that Buttercup temper.
          </p>

          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mt-12 text-6xl opacity-50"
          >
            ✨
          </motion.div>
        </div>
      </section>

      {/* Together Section - Our Journey */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Our Journey Together</h2>
            <div className="h-1 w-24 bg-buttercup-green mx-auto rounded-full"></div>
            <p className="mt-4 text-zinc-400">The only photos that actually matter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {photos.filter(p => p.together).map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-buttercup-green/20"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-xl font-serif italic">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Queen Gallery - Masonry Style */}
      <section id="gallery" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-4 italic text-buttercup-green">The Queen Gallery</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Every single mood, captured in perfection (even when she's mad).</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {photos.filter(p => !p.together).map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative break-inside-avoid rounded-2xl overflow-hidden group border border-zinc-800"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={800}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="text-buttercup-green fill-buttercup-green" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections already rendered above (Together and Gallery) */}

      {/* Dates & Diet */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-playfair mb-12 flex items-center justify-center gap-4">
            <UtensilsCrossed /> Dates & Diet
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ rotate: [0, -1, 1, -1, 0], scale: 1.05 }}
              className="glass-card cursor-pointer border-[#2ECC71]/30 hover:border-[#2ECC71]"
            >
              <div className="text-5xl mb-4">🍝</div>
              <h3 className="text-2xl font-bold mb-2">The Holy Pasta</h3>
              <p className="text-gray-400">Extra cheese, extra spice, extra love.</p>
            </motion.div>
            <motion.div
              whileHover={{ rotate: [0, 1, -1, 1, 0], scale: 1.05 }}
              className="glass-card cursor-pointer border-[#2ECC71]/30 hover:border-[#2ECC71]"
            >
              <div className="text-5xl mb-4">🍟</div>
              <h3 className="text-2xl font-bold mb-2">Loaded Fries</h3>
              <p className="text-gray-400">Because one potato is never enough.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mini-Games */}
      <section className="py-24 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-playfair mb-12 flex items-center gap-4">
            <Gamepad2 /> The Arcade of Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            <PatriarchySmasher />
            <ArgumentWinner />
            <LoveCatch />
            <DressMatcher />
          </div>
        </div>
      </section>

      {/* Forgiveness & Milestones */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-playfair mb-8">The Forgiveness Wall</h2>
          <div className="glass-card mb-12 relative">
            <Quote className="absolute top-4 left-4 text-[#2ECC71]/20 w-12 h-12" />
            <p className="text-xl italic text-gray-300 py-12 px-8">
              "For every fight that tried to break us, we built a bridge that made us stronger. You're my queen, even when we fight."
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-[#2ECC71] to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-5xl font-black text-[#2ECC71] mb-2">{daysElapsed}</div>
              <div className="text-gray-500 uppercase tracking-widest text-sm">Days Together</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-black text-[#2ECC71] mb-2">∞</div>
              <div className="text-gray-500 uppercase tracking-widest text-sm">Arguments Won By Her</div>
            </div>
            <div className="p-6 col-span-2 md:col-span-1">
              <div className="text-5xl font-black text-[#2ECC71] mb-2">999+</div>
              <div className="text-gray-500 uppercase tracking-widest text-sm">Late Night Calls</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600">
        <p>Made with ❤️ and a bit of toxicity for Laiba — Born in 2006</p>
        <div className="mt-4 flex justify-center gap-6">
          <motion.div whileHover={{ color: "#2ECC71" }} className="cursor-help flex items-center gap-1">
            <Calendar className="w-4 h-4" /> 20th Feb Celebration
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
