"use client";
import { motion } from "framer-motion";

export default function ConfettiButton({ children, onClick }) {
  const handleClick = async () => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#C9A227", "#E8B4B8", "#FFF8F0", "#5C4033"],
    });
    onClick?.();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      onClick={handleClick}
      className="px-10 py-4 rounded-full bg-gold text-cream font-sans text-sm tracking-[0.2em] uppercase shadow-lg hover:bg-gold/90 transition-colors"
    >
      {children}
    </motion.button>
  );
}