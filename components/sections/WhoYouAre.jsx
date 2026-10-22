"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { stagger, fadeUp } from "@/components/motion/variants";
import { poem } from "@/data/poem";

export default function WhoYouAre() {
  return (
    <SectionWrapper>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center space-y-6"
      >
        {poem.lines.map((line, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className="font-serif text-xl md:text-3xl leading-relaxed text-brown/90"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}