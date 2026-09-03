"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-36">
      {/* Decorative vertical line */}
      <div className="absolute left-[8%] top-0 hidden h-full w-px bg-slate-100 lg:block" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
         
          </motion.div>

          {/* Main copy */}
          <div className="mt-8 lg:col-span-8 lg:col-start-4 lg:mt-0">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-outfit text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-5xl md:text-6xl"
            >
              Africa&apos;s transformation requires{"  "}
              <span className="text-amber-500">
                systems that connect.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-2xl"
            >
              <p className="text-base leading-8 text-slate-500 sm:text-lg">
                Edem Adzogenu works at the intersection of business strategy, public
                policy, and systems innovation — designing platforms and
                partnerships that strengthen institutions, mobilise investment,
                and advance continental integration.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
              >
                Get in Touch with Edem

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}