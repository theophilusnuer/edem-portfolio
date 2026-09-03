"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import abm1 from "../../assets/abm1.jpg";
import abm2 from "../../assets/amb2.jpeg";

const expertise = [
  "Innovation",
  "Economic Development",
  "Pan-African Integration",
  "Public-Private Partnerships",
];

export default function AboutHero() {
  return (
    <main className="bg-[#f5f4f0] text-slate-900">
      {/* =========================================================
          INTRO / HERO
      ========================================================== */}

      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.10),transparent_28%),linear-gradient(135deg,#f5f4f0_0%,#ffffff_55%,#eeece6_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#111827 1px, transparent 1px),
              linear-gradient(90deg, #111827 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">
          <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
            
            {/* ===============================================
                IMAGE
            ================================================ */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative lg:col-span-5"
            >
              {/* decorative line */}
              <div className="absolute -left-5 top-10 hidden h-[80%] w-px bg-amber-500/50 lg:block" />

              <div className="relative mx-auto max-w-125">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={abm2}
                    alt="Edem Adzogenu"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 500px"
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating caption */}
                <div className="absolute bottom-6 left-6 border border-white/20 bg-black/50 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                    Edem Adzogenu
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Business · Policy · Leadership
                  </p>
                </div>

                
              </div>
              
            </motion.div>

            {/* ===============================================
                INTRODUCTION
            ================================================ */}

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-3"
              >
                <span className="h-1.5 w-12 bg-amber-500" />

                <span className="text-base font-semibold uppercase tracking-[0.25em] text-slate-600">
                  About
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-3xl font-outfit text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-[5.8rem]"
              >
                Building the systems
                <span className="block text-slate-400">
                  that connect Africa.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
              >
                Edem Adzogenu is an International Business and Policy
                Consultant and African entrepreneur who serves as the Founder
                and Co-Chair of AfroChampions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                className="mt-9 flex flex-wrap gap-3"
              >
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="border border-amber-300 bg-white/50 px-4 py-2 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

            
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-slate-400 sm:flex">
          <ArrowDown size={14} />
          Explore
        </div>

        {/* Decorative number */}
                <span className="absolute -bottom-2 right-4 font-outfit text-8xl font-semibold leading-none text-slate-900/[0.035]">
                  01
                </span>
      </section>

      {/* =========================================================
          BIOGRAPHY
      ========================================================== */}

      <section className="bg-white py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
            
            <div className="lg:col-span-3">
              <div className="sticky top-32 flex items-center gap-3 pb-2">
                <span className="h-1.5 w-12 bg-amber-500" />

                <span className="text-base font-semibold uppercase tracking-[0.25em] text-slate-600">
                  Biography
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <p className="font-outfit text-3xl font-medium leading-[1.25] tracking-[-0.025em] text-slate-900 sm:text-4xl">
                Edem&apos;s work sits at the intersection of business strategy,
                public policy and systems innovation.
              </p>

              <div className="mt-10 space-y-7 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  He is driven by the belief that Africa&apos;s transformation
                  requires systems that connect governments, businesses, and
                  citizens across borders — enabling shared prosperity through
                  collaboration, innovation, and trust.
                </p>

                <p>
                  He specialises in innovation, economic development,
                  Pan-African integration, and the design of complex
                  public-private partnerships that mobilise investment,
                  strengthen institutions, and accelerate social
                  transformation across the continent.
                </p>

                <p>
                  His career has been defined by building and advising
                  multi-country initiatives that operate across business,
                  government and institutional environments.
                </p>

                <p>
                  Edem has supported African Heads of State, Fortune 500
                  companies, G7 governments, and regional institutions in
                  navigating complex reforms, designing governance frameworks,
                  and unlocking investment into community-friendly mining,
                  environmental remediation, technology platforms, and
                  health-system strengthening.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* =========================================================
          VISUAL BREAK
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#484d54] opacity-90 py-28 sm:py-36">
        <div className="absolute inset-0">
          <Image
            src={abm1}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#101419]/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-9 lg:col-start-2">

              <h2 className="mt-7 font-outfit text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
                From fragmented initiatives
                <span className="text-amber-500">
                  {" "}
                  to connected systems.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                His work focuses on creating platforms, partnerships and
                structures capable of bringing different actors together
                around shared continental objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AFROCHAMPIONS
      ========================================================== */}

      <section className="bg-[#f5f4f0] py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-12 bg-amber-500" />

                <span className="text-base font-semibold uppercase tracking-[0.25em] text-slate-600">
                   AfroChampions
                </span>
              </div>

              <h2 className="mt-6 font-outfit text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Building for deeper continental integration.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-base leading-8 text-slate-600">
                AfroChampions was founded on the recognition that Africa&apos;s
                integration requires coordinated action between public and
                  private-sector &quot;champions.&quot;
              </p>

              <p className="mt-7 text-base leading-8 text-slate-600">
                Under Edem&apos;s strategic leadership as Founder and Co-Chair, the
                organisation has become known for developing transmediary
                platforms, aggregated systems, and special-purpose vehicles
                that break the fragmentation of existing continental
                initiatives and create the structural conditions for Africa&apos;s
                transformation.
              </p>

              <Link
                href="/afrochampions"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-slate-900"
              >
                Explore AfroChampions

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}