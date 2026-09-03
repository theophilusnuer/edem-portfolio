"use client";

import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section className="relative overflow-hidden bg-[#f3f1ec] py-32 sm:py-40">

      <div className="pointer-events-none absolute right-[-2%] top-0">
        <span className="font-outfit text-[24vw] font-semibold leading-none tracking-[-0.1em] text-black/[0.025]">
          01
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        <div className="grid lg:grid-cols-12 lg:gap-16">

          {/* Label */}
          <div className="lg:col-span-3">

            <div className="flex items-center gap-4">
              <span className="h-1.5 w-12 bg-amber-500" />

                <span className="text-base font-semibold uppercase tracking-[0.25em] text-slate-600">
                  The Platform
                </span>
            </div>

            

          </div>

          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 lg:col-span-8 lg:col-start-5 lg:mt-0"
          >

            <h2 className="font-outfit text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-900 sm:text-5xl md:text-6xl">
              Africa&apos;s integration cannot be achieved by isolated
              initiatives.
              <span className="block mt-2 text-amber-500">
                It requires connected systems.
              </span>
            </h2>

            <div className="mt-12 grid gap-10 border-t border-slate-400 pt-10">

              <p className="text-base leading-8 text-slate-500">
                The Afrochampions platform brings together public institutions, businesses,
                investors, development partners and other continental
                stakeholders around practical structures capable of turning
                shared ambitions into coordinated action.
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}