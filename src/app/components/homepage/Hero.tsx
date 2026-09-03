"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  ArrowUpRight,
  Globe2,
  MapPin,
} from "lucide-react";

import abm3Hero from "../../assets/abm3-hero.png";

export default function Hero() {
const [typingComplete, setTypingComplete] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#080b0f] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Main gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(245,158,11,0.16),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(16,185,129,0.12),transparent_30%),linear-gradient(120deg,#080b0f_0%,#111820_55%,#080b0f_100%)]" />

      {/* Large glowing orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-1/4 h-125 w-125 rounded-full bg-amber-400/10 blur-[120px]"
      />

      {/* Green glow */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 left-10 h-112.5 w-112.5 rounded-full bg-emerald-400/10 blur-[120px]"
      />

      {/* =========================================================
          AFRICAN-INSPIRED GRID / CONTOUR PATTERN
      ========================================================== */}

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />

      {/* Decorative rings */}
      <div className="absolute right-[8%] top-[18%] hidden h-[520px] w-[520px] rounded-full border border-white/10 lg:block" />

      <div className="absolute right-[12%] top-[24%] hidden h-[400px] w-[400px] rounded-full border border-white/5 lg:block" />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] items-center px-6 pb-12 pt-28 sm:px-10 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12">
          
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20 lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-1.5 w-26 bg-amber-400" />

              
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl font-outfit text-[3.3rem] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.5rem]"
            >
              Building Systems that Connect
              <span className="block min-h-[1.05em] text-amber-400">
                <TypeAnimation
                  sequence={[
                    "Africa across borders.",
                    2200,
                    
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
  cursor={!typingComplete}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
              }}
              className="mt-7 max-w-xl text-base leading-7 font-outfit text-white/60 sm:text-lg sm:leading-8"
            >
              Edem Adzogenu is an International Business and Policy Consultant,
              entrepreneur, and Founder & Co-Chair of AfroChampions. His work
              focuses on building platforms that strengthen coordination,
              mobilise investment, and advance Africa&apos;s economic transformation.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.1,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Get In Touch
              </Link>
               <Link
                href="/about"
                className="group flex items-center gap-3 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.03] hover:bg-amber-400"
              >
                Explore Biography

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* =================================================
                SMALL INFORMATION ROW
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-12 flex flex-wrap gap-7 border-t border-white/10 pt-6"
            >
              <div className="flex items-center gap-2 text-xs text-white/45">
                <Globe2 size={15} className="text-amber-400" />
                Africa & Global
              </div>

              <div className="flex items-center gap-2 text-xs text-white/45">
                <MapPin size={15} className="text-amber-400" />
                Accra · Ghana
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-14 flex justify-center lg:col-span-5 lg:mt-0 lg:justify-end"
          >
            {/* Image glow */}
            <div className="absolute right-0 top-1/2 h-125 w-87.5 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[100px]" />

            {/* Image frame */}
            <div className="relative w-67.5sm:w-[330px] lg:w-97.5 xl:w-107.5">
              
              {/* Offset decorative border */}
              <div className="absolute -right-5 -top-5 h-full w-full rounded-4xl border border-amber-400/20" />

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl  shadow-2xl shadow-black/50">
                <Image
                  src={abm3Hero}
                  alt="Edem Adzogenu"
                  fill
                  priority
                  sizes="(max-width: 768px) 270px, (max-width: 1024px) 330px, 430px"
                  className="object-cover object-top"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom image label */}
                <div className="absolute sm:hidden bottom-0 left- right-0 p-6">
                  <p className="text-base uppercase tracking-[0.25em] text-white/50">
                    Edem Adzogenu
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                   Founder & Co Chair, AfroChampions
                  </p>
                </div>
              </div>

              {/* =================================================
                  FLOATING GLASS CARD
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                }}
                className="absolute -bottom-7 -left-12 hidden w-[210px] rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:block"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                     Edem Adzogenu
                  </span>
                </div>

                <p className="text-sm font-medium leading-6 text-white">
                  Founder & Co Chair, AfroChampions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
          Scroll to explore
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} className="text-white/50" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#080b0f] to-transparent" />
    </section>
  );
}
