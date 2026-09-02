"use client";

import { motion } from "framer-motion";

const topics = [
  "Designing trust systems for cross‑border trade",
  "Why Africa needs transmediary platforms",
  "The future of AfCFTA implementation",
  "Diaspora as a development finance engine",
  "Innovation ecosystems for Agenda 2063",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function SampleTopics() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-10 md:pb-24 lg:px-16">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-foreground/65 md:text-xl"
      >
        Edem writes about systems innovation, continental integration, and
        the future of Africa&apos;s development architecture.
      </motion.p>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-accent">
            Writing
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Sample Topics
          </h2>
        </motion.div>

        {/* Topics */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {topics.map((topic, i) => (
            <motion.div
              key={topic}
              variants={item}
              className="group flex items-start gap-4 border-b border-black/[0.08] py-6 first:pt-0 sm:gap-6"
            >
              <span className="font-outfit text-2xl font-bold text-foreground/15 transition-colors group-hover:text-accent sm:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-lg font-medium text-foreground transition-transform group-hover:translate-x-1 sm:text-xl">
                {topic}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
