"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Coordination",
    text: "Creating structures that allow governments, businesses and institutions to work toward shared continental objectives.",
  },
  {
    number: "02",
    title: "Trust",
    text: "Developing mechanisms that make cross-border engagement easier, more transparent and more dependable.",
  },
  {
    number: "03",
    title: "Innovation",
    text: "Using technology, new platforms and unconventional partnerships to solve complex continental challenges.",
  },
  {
    number: "04",
    title: "Integration",
    text: "Turning the ambition of a connected African market into practical systems, tools and investment structures.",
  },
];

export default function WhyAfro() {
  return (
    <section className="relative overflow-hidden bg-[#171717] py-24 text-white sm:py-32 md:py-40">
      {/* Giant section number – bottom left */}
      <div className="pointer-events-none absolute bottom-0 left-[-2%]">
        <span className="font-outfit text-[24vw] font-semibold leading-none tracking-[-0.1em] text-white/[0.035]">
          02
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left title */}
          <div className="lg:col-span-4">
            <h2 className="font-outfit text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Turning
              <span className="block text-amber-500">ambition</span>
              into systems.
            </h2>
          </div>

          {/* Principles list */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-white/10">
              {principles.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="border-b border-white/10 py-7 sm:py-9"
                >
                  <div className="flex flex-col gap-3 sm:grid sm:grid-cols-12 sm:items-start sm:gap-5">
                    <div className="flex items-baseline gap-4 sm:col-span-5">
                      <span className="font-mono text-sm text-amber-500 sm:text-base">
                        {item.number}
                      </span>
                      <h3 className="font-outfit text-xl font-medium sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[15px] leading-7 text-white/45 sm:col-span-7 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}