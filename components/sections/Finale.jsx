"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";
import ConfettiButton from "@/components/ui/ConfettiButton";

export default function Finale() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-cream via-rose/20 to-cream text-center overflow-hidden">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-2xl"
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl md:text-6xl leading-tight text-brown"
        >
          Happy Birthday,
          <br />
          <span className="text-gold italic">Big Mummy</span> 🎂
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-base md:text-lg text-brown/70 max-w-md mx-auto"
        >
          Thank you for being our Big Mummy.
          <br />
          We love you.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12">
          <ConfettiButton>Make a wish</ConfettiButton>
        </motion.div>
      </motion.div>
    </section>
  );
}