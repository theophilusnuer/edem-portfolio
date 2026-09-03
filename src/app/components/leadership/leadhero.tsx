"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import nkrumah from "../../assets/nkrumah.jpeg";
import mandela from "../../assets/mandela.webp";

export default function LeadHero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f1ec]">

      {/* =====================================================
          SUBTLE BACKGROUND DETAIL
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-125 w-125 rounded-full bg-[#000000]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-slate-400/[0.06] blur-3xl"
      />

      {/* =====================================================
          TOP EDITORIAL BAR
      ===================================================== */}

      <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 sm:px-10 lg:px-16">

        <div className="flex items-center gap-3">

          <span className="h-px w-9 bg-[#b39455]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.38em] text-slate-500">
            Thought Leadership
          </span>

        </div>

        <span className="hidden text-[9px] uppercase tracking-[0.3em] text-slate-400 sm:block">
          Ideas · Systems · Africa
        </span>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-10 sm:pb-28 lg:px-16 lg:pt-16">

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">

          {/* =================================================
              IMAGE COMPOSITION
          ================================================= */}

          <div className="relative order-2 lg:order-1 lg:col-span-7">

            {/* Large faint number */}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-5 -top-20 z-0 font-outfit text-[13rem] font-medium leading-none tracking-[-0.08em] text-slate-900/[0.035] sm:text-[18rem]"
            >
              01
            </span>

            <div className="relative z-10 mx-auto h-120 max-w-180 sm:h-145 lg:h-155">

              {/* ---------------------------------------------
                  NKRUMAH
              --------------------------------------------- */}

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-0
                  top-8
                  h-[72%]
                  w-[58%]
                  overflow-hidden
                  sm:top-10
                "
              >

                <Image
                  src={nkrumah}
                  alt="Kwame Nkrumah"
                  fill
                  priority
                  sizes="(max-width: 1024px) 58vw, 400px"
                  className="object-cover object-center grayscale"
                />

                {/* Image texture */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                {/* Caption */}

                <div className="absolute bottom-5 left-5">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                    Kwame Nkrumah
                  </p>

                  <p className="mt-1 text-xs text-white/90">
                    Vision · Unity · Independence
                  </p>

                </div>

              </motion.div>

              {/* ---------------------------------------------
                  MANDELA
              --------------------------------------------- */}

              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-0
                  right-0
                  h-[72%]
                  w-[58%]
                  overflow-hidden
                  border-6
                  border-[#f3f1ec]
                  sm:border-6
                "
              >

                <Image
                  src={mandela}
                  alt="Nelson Mandela"
                  fill
                  priority
                  sizes="(max-width: 1024px) 58vw, 400px"
                  className="object-cover object-center grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                    Nelson Mandela
                  </p>

                  <p className="mt-1 text-xs text-white/90">
                    Leadership · Courage · Reconciliation
                  </p>

                </div>

              </motion.div>

              {/* ---------------------------------------------
                  CENTER DETAIL
              --------------------------------------------- */}


            </div>

          </div>

          {/* =================================================
              TITLE / INTRODUCTION
          ================================================= */}

          <div className="relative z-10 order-1 lg:order-2 lg:col-span-5">

           

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7
                max-w-xl
                font-outfit
                text-[4rem]
                font-medium
                leading-[0.9]
                tracking-[-0.06em]
                text-slate-900
                sm:text-6xl
                md:text-7xl
                lg:text-[5.8rem]
              "
            >
              Thoughtful
              <span className="block text-amber-500">
                Leadership.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-8 max-w-lg text-base leading-8 text-slate-600 sm:text-lg"
            >
              Reflections on systems innovation, continental integration,
              and the future of Africa&apos;s development architecture.
            </motion.p>

            {/* Divider */}

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-10 h-px w-full origin-left bg-slate-300"
            />

            {/* Editorial note */}


          </div>

        </div>

      </div>

     

    </section>
  );
}