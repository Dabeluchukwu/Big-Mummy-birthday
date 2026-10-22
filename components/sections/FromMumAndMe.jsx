"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/components/motion/variants";
import { dualNotes } from "@/data/letter";

export default function FromMumAndMe() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-brown">
          From both of us
        </h2>
        <p className="mt-4 text-brown/60">Two voices, one thank you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {dualNotes.map((note, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.15 }}
            className="bg-paper rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(92,64,51,0.15)] border border-gold/10"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">
              {note.author}
            </p>
            <p className="font-serif text-base md:text-lg leading-relaxed text-brown/90">
              {note.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}