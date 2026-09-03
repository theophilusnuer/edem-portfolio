"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import afcfta from "../../assets/afcfta.svg";
import pnb from "../../assets/pnb.webp";
import tdf from "../../assets/tdf.webp";
import dag from "../../assets/dag.jpg";

const works = [
  {
    number: "01",
    image: pnb,
    alt: "PanaBIOS",
    title: "PanaBIOS",
    category: "Health Systems",
    description:
      "AU-aligned biosurveillance architecture enabling safe mobility and coordinated public-health responses.",
  },
  {
    number: "02",
    image: afcfta,
    alt: "AfCFTA Hub",
    title: "AfCFTA Hub",
    category: "Trade & Integration",
    description:
      "Africa’s first trade super-app, providing AfCFTA numbers, trust-building tools, and cross-border business enablement.",
  },
  {
    number: "03",
    image: tdf,
    alt: "Trillion-Dollar Investment Framework",
    title: "Trillion-Dollar Investment Framework",
    category: "Investment",
    description:
      "Private-sector-led investment framework designed to mobilise large-scale capital for AfCFTA implementation.",
  },
  {
    number: "04",
    image: dag,
    alt: "4D Agenda",
    title: "4D Agenda",
    category: "Innovation & Collaboration",
    description:
      "Collaborative innovation engine linking African governments, the AU, the diaspora, and development finance institutions.",
  },
];

export default function FeaturedWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4f0] py-28 sm:py-36 font-outfit">
      {/* Decorative background */}
      <div className="pointer-events-none absolute right-0 top-0 h-125 w-125 rounded-full bg-amber-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className="h-1.5 w-14 bg-amber-500" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                Featured Works
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 max-w-4xl font-outfit text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-slate-900 sm:text-5xl md:text-6xl"
            >
              Turning ideas into systems
              <span className="text-slate-400"> that move Africa forward.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-base leading-7 text-slate-500 lg:col-span-4 lg:pb-1 md:text-lg"
          >
            From health and trade to investment and innovation, these
            initiatives reflect a focus on building practical systems for
            continental integration.
          </motion.p>
        </div>

        {/* =====================================================
            WORKS
        ====================================================== */}

        <div className="mt-20">
          {works.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
              }}
              className="group border-t border-slate-300/70 py-10 last:border-b lg:py-14"
            >
              <div
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* NUMBER */}
                <div className="hidden lg:col-span-1 lg:block">
                  <span className="font-mono tracking-widest text-slate-400">
                    {work.number}
                  </span>
                </div>

                {/* IMAGE */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                    <Image
                      src={work.image}
                      alt={work.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-400 lg:hidden">
                      {work.number}
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                      {work.category}
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-xl font-outfit text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-900 transition-colors duration-300 group-hover:text-slate-700 sm:text-4xl">
                    {work.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
                    {work.description}
                  </p>
{/* 
                  <Link
                    href="/afrochampions"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                  >
                    Explore project

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link> */}
                </div>

                {/* EMPTY SPACING COLUMN */}
                <div className="hidden lg:col-span-1 lg:block" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex justify-end"
        >
          <Link
            href="/afrochampions"
            className="group inline-flex items-center gap-3 text-base font-semibold text-slate-900"
          >
            View all work

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
