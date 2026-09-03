"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import abm3 from "../../assets/abm3.jpeg";

const topics = [
  {
    number: "01",
    title: "Designing trust systems for cross border trade",
  },
  {
    number: "02",
    title: "Why Africa needs transmediary platforms",
  },
  {
    number: "03",
    title: "The future of AfCFTA implementation",
  },
  {
    number: "04",
    title: "Diaspora as a development finance engine",
  },
  {
    number: "05",
    title: "Innovation ecosystems for Agenda 2063",
  },
];

export default function SampleTopics() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* =================================================
            THINKING BEYOND THE OBVIOUS
        ================================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden bg-slate-100">
              <Image
                src={abm3}
                alt="Edem Adzogenu"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Image fade */}

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Image caption */}

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                  Edem Adzogenu
                </p>
              </div>
            </div>

            {/* Decorative line */}

            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border-b border-r border-[#b39455]/60 sm:block" />
          </motion.div>

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="lg:col-span-7"
          >
           

            <h2 className="mt-7 max-w-3xl font-outfit text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-5xl md:text-6xl lg:text-[5.2rem]">
              Thinking beyond
              <span className="block text-slate-400">
                the obvious.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Edem writes about systems innovation, continental integration,
              and the future of Africa&apos;s development architecture —
              examining the structures, partnerships and ideas capable of
              moving the continent forward.
            </p>

            
          </motion.div>

        </div>

        {/* =================================================
            SAMPLE TOPICS
        ================================================= */}

        <div className="mt-28 sm:mt-36 lg:mt-44">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-between border-b border-slate-200 pb-7"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 bg-amber-500" />

              </div>

              <h3 className="mt-5 font-outfit text-3xl font-medium tracking-[-0.035em] text-slate-900 sm:text-4xl">
                Sample Topics
              </h3>
            </div>

           
          </motion.div>

          {/* Topic list */}

          <div>
            {topics.map((topic, index) => (
              <motion.div
                key={topic.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group relative border-b border-slate-200"
              >
                {/* Hover background */}

                <div className="absolute inset-0 origin-left scale-x-0 bg-[#f7f5f0] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <div className="relative grid min-h-[110px] grid-cols-12 items-center gap-4 py-7 sm:min-h-[125px] sm:py-8">

                  {/* Number */}

                  <div className="col-span-2 sm:col-span-1">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-[#b39455]">
                      {topic.number}
                    </span>
                  </div>

                  {/* Title */}

                  <div className="col-span-9">
                    <h4 className="max-w-4xl font-outfit text-xl font-medium leading-tight tracking-[-0.025em] text-slate-800 transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl md:text-3xl lg:text-[2.1rem]">
                      {topic.title}
                    </h4>
                  </div>

                  {/* Arrow */}

                  <div className="col-span-1 flex justify-end">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-500 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white sm:h-11 sm:w-11">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.3}
                        className="transition-transform duration-500 group-hover:rotate-45"
                      />
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

    

        </div>
      </div>
    </section>
  );
}