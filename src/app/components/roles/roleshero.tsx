"use client";

import { motion } from "framer-motion";

export default function RolesHero() {
  return (
    <main className="relative overflow-hidden bg-[#f8f7f3] text-slate-900">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative border-b border-slate-900/10">
        {/* Decorative vertical line */}
        <div className="pointer-events-none absolute left-[8%] top-0 hidden h-full w-px bg-slate-900/[0.06] lg:block" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:px-16 lg:pb-36">
          <div className="grid lg:grid-cols-12 lg:gap-12">
            {/* Small index */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-8 lg:col-span-2 lg:mb-0"
            >
              <div className="flex items-center gap-3 lg:sticky lg:top-28">
                <span className="h-1.5 w-12 bg-amber-600" />
              
              </div>
            </motion.div>

            {/* Main heading */}
            <div className="lg:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="font-outfit text-[3.5rem] font-medium leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[6.5rem]"
              >
                Leadership
                <span className="block text-slate-400">
                  beyond the title.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="mt-10 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
              >
                Edem serves on boards, advisory councils, and institutional
                platforms working across health, innovation, governance, and
                Africa&apos;s broader development architecture.
              </motion.p>
            </div>

            {/* Right metadata */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-12 flex items-end lg:col-span-2 lg:mt-0 lg:justify-end"
            >
           
            </motion.div>
          </div>
        </div>
      </section>

     

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(196,161,91,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-500">
              Leadership perspective
            </p>

            <blockquote className="mt-7 font-outfit text-3xl font-light leading-[1.15] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              “The most meaningful leadership is not defined by position,
              but by the ability to connect people, institutions and ideas
              around a common purpose.”
            </blockquote>
          </motion.div>
        </div>
      </section>
    </main>
  );
}