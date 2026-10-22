"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/components/motion/variants";
import ScrollHint from "@/components/ui/ScrollHint";

export default function Hero() {
  useEffect(() => {
    let cancelled = false;

    const fire = async () => {
      const confetti = (await import("canvas-confetti")).default;
      if (cancelled) return;

      const colors = ["#C9A227", "#E8B4B8", "#FFF8F0", "#5C4033"];

      // Initial center burst
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.4 },
        colors,
      });

      // Two side cannons for a fuller "welcome" moment
      setTimeout(() => {
        if (cancelled) return;
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.6 },
          colors,
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.6 },
          colors,
        });
      }, 300);
    };

    // Small delay so the hero's entrance animation gets a beat first
    const timer = setTimeout(fire, 600);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-cream via-rose/20 to-cream">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold/20 blur-xl"
          style={{
            width: 80 + i * 30,
            height: 80 + i * 30,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-brown/60 mb-6"
        >
          A birthday wish
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-brown"
        >
          Happy Birthday,
          <br />
          <span className="text-gold italic">Big Mummy</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-8 text-base md:text-lg text-brown/70 max-w-md mx-auto"
        >
          From someone whose life you quietly changed.
        </motion.p>
      </motion.div>

      <ScrollHint />
    </section>
  );
}