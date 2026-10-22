"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion/variants";

export default function SectionWrapper({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`px-6 py-20 md:py-32 max-w-3xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}