"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeIn, stagger, fadeUp } from "@/components/motion/variants";
import { letter } from "@/data/letter";

export default function Letter() {
  const paragraphs = letter.split("\n\n");

  return (
    <SectionWrapper>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-paper rounded-2xl shadow-[0_20px_60px_-20px_rgba(92,64,51,0.15)] p-8 md:p-14 border border-gold/10"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="font-serif text-base md:text-lg leading-relaxed text-brown/90 whitespace-pre-line"
            >
              {p}
            </motion.p>
          ))}

          <motion.p
            variants={fadeUp}
            className="font-hand text-3xl md:text-4xl text-gold pt-6 text-right"
          >
            With all my love ❤
          </motion.p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}