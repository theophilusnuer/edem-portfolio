"use client";

import Image from "next/image";
import abm1 from "../../assets/abm1.jpg";
import abm2 from "../../assets/amb2.jpeg";
import abm3 from "../../assets/abm3.jpeg";
import { motion } from "framer-motion";

const paragraphs = [
  `Edem Adzogenu is an International Business and Policy Consultant and African entrepreneur who serves as the Founder and Co‑Chair of AfroChampions, the public‑private partnership platform driving Africa's deep continental integration. He is driven by the belief that Africa's transformation requires systems that connect governments, businesses, and citizens across borders — enabling shared prosperity through collaboration, innovation, and trust.`,
  `He specialises in innovation, economic development, Pan‑African integration, and the design of complex public‑private partnerships that mobilise investment, strengthen institutions, and accelerate social transformation across the continent.`,
  `His career has been defined by building and advising multi‑country initiatives that sit at the intersection of business strategy, public policy, and systems innovation. Edem has supported African Heads of State, Fortune 500 companies, G7 governments, and regional institutions in navigating complex reforms, designing new governance frameworks, and unlocking investment into community‑friendly mining, environmental remediation, technology platforms, and health‑system strengthening.`,
  `AfroChampions was founded on the recognition that Africa's integration requires coordinated action between public and private sector "champions." Under Edem's strategic leadership as Founder and Co‑Chair, the organisation has become known for developing transmediary platforms, aggregated systems, and special‑purpose vehicles that break the fragmentation of existing continental initiatives and create the structural conditions for Africa's transformation.`,
];

const photos = [
  { src: abm1, alt: "Edem Adzogenu portrait", rotate: "-rotate-6", z: "z-10" },
  { src: abm2, alt: "Edem Adzogenu in the field", rotate: "rotate-0", z: "z-20" },
//   { src: abm3, alt: "Edem Adzogenu working", rotate: "rotate-3", z: "z-15" },
  { src: abm3, alt: "Edem Adzogenu at an event", rotate: "rotate-6", z: "z-10" },
];

export default function AboutHero() {
  return (
    <section className="w-full px-4 pt-14  sm:px-6 md:px-10 md:pt-20 pb-14 lg:px-16">
      {/* Photo collage - responsive */}
      <div className="mx-auto flex max-w-5xl items-center justify-center -space-x-6 sm:-space-x-8 md:-space-x-12 lg:-space-x-14">
        {photos.map((photo, i) => (
          <motion.div
            key={`${photo.alt}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
            className={`relative w-32 shrink-0 xs:w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 ${photo.rotate} ${photo.z}`}
          >
            <div className="overflow-hidden rounded-xl shadow-xl  sm:rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={500}
                priority={i === 1}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* About Me + Bio */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="mx-auto mt-12 max-w-3xl md:mt-16"
      >
        <h1 className="font-outfit text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Biography
        </h1>

        <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-[15px] leading-relaxed text-slate-600 sm:text-base md:text-lg"
            >
              {text}
            </p>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-slate-300 pl-5 sm:mt-10">
          <h2 className="font-outfit text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Leadership Philosophy
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base md:text-lg">
            Edem&apos;s work is rooted in systems thinking, collaborative
            innovation, and the belief that Africa&apos;s future depends on
            fluid structures capable of responding to fast‑shifting
            opportunities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}