"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/components/motion/variants";
import { photos } from "@/data/photos";

export default function Gallery() {
  if (!photos.length) return null;

  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-brown">
          A face we love
        </h2>
        <p className="mt-4 text-brown/60">
          A few glimpses of the woman who changed our lives.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, i) => {
          const rotate = [-2, 1.5, -1, 2, -1.5, 1][i % 6];

          return (
            <motion.figure
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              style={{ rotate }}
              className="bg-paper p-2 md:p-3 rounded-md shadow-[0_10px_30px_-10px_rgba(92,64,51,0.25)] border border-gold/10"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              {photo.caption && (
                <figcaption className="font-hand text-base md:text-lg text-brown/80 text-center mt-2 md:mt-3">
                  {photo.caption}
                </figcaption>
              )}
            </motion.figure>
          );
        })}
      </div>
    </SectionWrapper>
  );
}