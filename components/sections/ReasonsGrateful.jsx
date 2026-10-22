"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { reasons } from "@/data/reasons";

export default function ReasonsGrateful() {
  const [index, setIndex] = useState(0);

  if (!reasons.length) return null;

  const next = () => setIndex((i) => (i + 1) % reasons.length);

  return (
    <SectionWrapper>
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-brown">
          Reasons we're grateful
        </h2>
        <p className="mt-4 text-brown/60">Tap to reveal another.</p>
      </div>

      <div className="min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-paper rounded-2xl px-8 py-10 md:px-14 md:py-14 shadow-[0_15px_50px_-20px_rgba(92,64,51,0.2)] border border-gold/10 text-center max-w-xl"
          >
            <p className="font-serif text-xl md:text-3xl leading-relaxed text-brown">
              "{reasons[index]}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-center mt-8">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="px-8 py-3 rounded-full bg-gold text-cream font-sans text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors"
        >
          Tap for another →
        </motion.button>
      </div>
    </SectionWrapper>
  );
}