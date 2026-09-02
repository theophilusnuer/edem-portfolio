"use client";

import Image from "next/image";
import afch from "../../assets/afch.webp";
import { motion } from "framer-motion";

export default function AfroHero() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 sm:aspect-[16/9] sm:rounded-3xl md:aspect-[21/9]">
          <Image
            src={afch}
            alt="AfroChampions"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
          />
        </div>
      </motion.div>
    </section>
  );
}