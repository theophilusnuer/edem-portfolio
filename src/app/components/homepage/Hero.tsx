"use client";

import Image from "next/image";
import edem from "../../assets/edem-hero.jpeg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative">
      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center gap-8 px-6 py-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:gap-y-0 lg:py-16">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 text-center font-outfit text-[2.5rem] font-bold leading-tight tracking-tight text-slate-900 lg:order-none lg:col-start-2 lg:row-start-1 lg:text-left lg:text-5xl xl:text-6xl"
        >
          Building Systems that Connect Africa Across Borders.
        </motion.h1>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 flex w-full flex-col items-center lg:order-none lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:items-start"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-amber-300/40 via-sky-300/30 to-emerald-300/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-sm shadow-2xl ring-1 ring-slate-200">
              <Image
                src={edem}
                alt="Portrait of Edem Adzogenu"
                width={771}
                height={1080}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right-side content group (subtext + CTAs) */}
        <div className="order-3 flex w-full flex-col items-center gap-6 lg:order-none lg:col-start-2 lg:row-start-2 lg:items-start lg:gap-8">
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="max-w-lg text-center leading-relaxed text-slate-600 md:text-lg lg:text-left"
          >
            Edem Adzogenu is an International Business and Policy Consultant,
            entrepreneur, and Founder &amp; Co Chair of AfroChampions. His work
            focuses on designing continental platforms that strengthen
            coordination, mobilise investment, and advance the African Union’s
            Agenda 2063.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex w-full flex-nowrap justify-center gap-x-3 lg:justify-start lg:gap-x-4"
          >
            <a
              href="/about"
              className="whitespace-nowrap rounded-full bg-slate-900 px-4.5 py-3 text-xs font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-sm"
            >
              Biography
            </a>
            <a
              href="/contact"
              className="whitespace-nowrap rounded-full border border-slate-300 bg-white/70 px-4.5 py-3 text-xs font-semibold text-slate-800 backdrop-blur transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-sm"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}