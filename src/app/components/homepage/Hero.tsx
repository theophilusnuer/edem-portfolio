"use client";

import Image from "next/image";
import edem from "../../assets/edem-hero.jpeg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative">
      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center gap-8 px-6 py-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-0 lg:py-16">
        {/* Eyebrow + Heading */}
        <div className="order-1 flex flex-col items-center lg:order-none lg:col-start-2 lg:row-start-1 lg:items-start">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent"
          >
            <span className="h-px w-8 bg-accent" />
            Founder &amp; Co Chair, AfroChampions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="text-center font-display text-[2.5rem] font-medium leading-[1.08] tracking-tight text-foreground lg:text-left lg:text-5xl xl:text-6xl"
          >
            Building Systems that Connect Africa Across Borders.
          </motion.h1>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 flex w-full flex-col items-center lg:order-none lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:items-start"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-px border border-black/10" style={{ borderRadius: "var(--radius-minimal)" }} />
            <div
              className="relative overflow-hidden shadow-[0_30px_60px_-25px_rgba(20,24,31,0.45)] ring-1 ring-black/5"
              style={{ borderRadius: "var(--radius-minimal)" }}
            >
              <Image
                src={edem}
                alt="Portrait of Edem Adzogenu"
                width={771}
                height={1080}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border border-accent/30 sm:block" style={{ borderRadius: "var(--radius-minimal)" }} />
          </div>
        </motion.div>

        {/* Right-side content group (subtext + CTAs) */}
        <div className="order-3 flex w-full flex-col items-center gap-6 lg:order-none lg:col-start-2 lg:row-start-2 lg:items-start lg:gap-8">
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="max-w-lg text-center leading-relaxed text-foreground/65 md:text-lg lg:text-left"
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
              className="whitespace-nowrap border border-foreground bg-foreground px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-transparent hover:text-foreground sm:px-8 sm:text-sm"
              style={{ borderRadius: "var(--radius-minimal)" }}
            >
              Biography
            </a>
            <a
              href="/contact"
              className="whitespace-nowrap border border-black/15 bg-white/70 px-6 py-3 text-xs font-semibold text-foreground backdrop-blur transition-colors hover:border-foreground sm:px-8 sm:text-sm"
              style={{ borderRadius: "var(--radius-minimal)" }}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
