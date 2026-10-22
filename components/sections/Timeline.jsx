"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/components/motion/variants";
import { timeline } from "@/data/timeline";

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-16 last:mb-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Left column — desktop only, holds label + title for even items */}
      <div className="hidden md:block md:w-1/2 md:text-right md:pr-8">
        {isEven && (
          <>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
              {item.label}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-brown mb-2">
              {item.title}
            </h3>
          </>
        )}
      </div>

      {/* Dot on the line — sits at left-0 on mobile (inside the pl-8 gutter), centered on desktop */}
      <div className="absolute left-0 md:left-1/2 top-2 md:top-3 md:-translate-x-1/2 z-10">
        <span className="block w-3 h-3 rounded-full bg-gold ring-4 ring-cream" />
      </div>

      {/* Right column — always visible, mobile content here */}
      <div
        className={`w-full pl-8 md:w-1/2 md:pl-0 ${
          isEven ? "md:pl-12" : "md:pr-12 md:text-right"
        }`}
      >
        {/* Label + title — always shown on mobile; only shown on desktop for odd items */}
        <div className={isEven ? "md:hidden" : ""}>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
            {item.label}
          </p>
          <h3 className="font-serif text-xl md:text-2xl text-brown mb-2">
            {item.title}
          </h3>
        </div>

        <p className="text-brown/70 leading-relaxed text-base">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <SectionWrapper className="max-w-4xl">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-brown">
          The ways you showed up
        </h2>
        <p className="mt-4 text-brown/60">Quiet acts of love, remembered.</p>
      </div>

      <div className="relative">
        {/* Vertical line — visible on mobile inside the left gutter, centered on desktop */}
        <div className="absolute left-[5px] md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-1/2" />

        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>

      <p className="text-center mt-8 font-serif italic text-lg md:text-xl text-brown/70">
        …and you're still showing up. Today we celebrate you.
      </p>
    </SectionWrapper>
  );
}