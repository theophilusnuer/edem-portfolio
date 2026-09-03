"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    number: "01",
    title: "Founder & Co-Chair",
    organisation: "AfroChampions",
    description:
      "Leading a public-private partnership platform focused on advancing Africa's deep continental integration.",
  },
  {
    number: "02",
    title: "Architect",
    organisation: "PanaBIOS",
    description:
      "Designed an AU-aligned biosurveillance architecture supporting safe mobility, contagion monitoring and cross-border health clearance.",
  },
  {
    number: "03",
    title: "Co-designer",
    organisation: "AfCFTA Hub",
    description:
      "Contributed to the development of a trade super-app designed to strengthen trust and enable cross-border business.",
  },
  {
    number: "04",
    title: "Investment Framework",
    organisation: "Trillion-Dollar Investment Framework",
    description:
      "Guided the development and adoption of a private-sector-led framework designed to mobilise large-scale capital for AfCFTA implementation.",
  },
  {
    number: "05",
    title: "Co-creator",
    organisation: "4D Agenda",
    description:
      "Helped create a collaborative innovation engine connecting governments, the African Union, the diaspora and development finance institutions.",
  },
  {
    number: "06",
    title: "Strategic Advisor",
    organisation: "Governments, DFIs & Global Institutions",
    description:
      "Advises institutions and organisations navigating complex reforms, innovation, governance and investment opportunities.",
  },
];

export default function CareerMilestones() {
  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-12 bg-amber-500" />

                <span className="text-base font-semibold uppercase tracking-[0.25em] text-slate-600">
                  Career Milestones
                </span>
            </div>

            <h2 className="mt-6 font-outfit text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 sm:text-5xl md:text-6xl">
              A career shaped by
              <span className="text-slate-400">
                {" "}
                continental ambition.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600 lg:col-span-4">
            A selection of initiatives, leadership roles and systems that
            reflect the breadth of Edem&apos;s work across Africa and global
            institutions.
          </p>
        </div>

        {/* Milestones */}
        <div className="mt-20">
          {milestones.map((milestone, index) => (
            <motion.article
              key={milestone.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className="group grid grid-cols-1 border-t border-slate-200 py-9 sm:grid-cols-12 sm:gap-8 sm:py-11"
            >
              {/* Number */}
              <div className="sm:col-span-1">
                <span className="font-mono text-base text-slate-500 font-semibold">
                  {milestone.number}
                </span>
              </div>

              {/* Title */}
              <div className="mt-5 sm:col-span-4 sm:mt-0">
                <h3 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-slate-600 sm:text-3xl">
                  {milestone.title}
                </h3>

                <p className="mt-2 text-base font-semibold uppercase tracking-[0.18em] text-amber-600">
                  {milestone.organisation}
                </p>
              </div>

              {/* Description */}
              <div className="mt-5 sm:col-span-6 sm:col-start-7 sm:mt-0">
                <p className="max-w-xl text-base leading-7 text-slate-500 sm:text-base">
                  {milestone.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}