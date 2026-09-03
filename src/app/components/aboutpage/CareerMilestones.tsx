<<<<<<< HEAD
import Image, { type StaticImageData } from "next/image";
import pnb from "../../assets/pnb.webp";
import tdf from "../../assets/tdf.webp";
import afch from "../../assets/afch.webp";
import afcfta from "../../assets/afcfta.svg";
import abm4 from "../../assets/abm4.webp";
import dag from "../../assets/dag.jpg";
import GlideCarousel from "../GlideCarousel";

type Milestone = {
  image: StaticImageData;
  title: string;
};

// Placeholder milestones — replace image and title with real career milestones.
const milestones: Milestone[] = [
  { image: afch, title: "Founder & Co Chair, AfroChampions" },
  { image: pnb, title: "Architect of PanaBIOS" },
  { image: afcfta, title: "Co designer of AfCFTA Hub" },
  { image: tdf, title: "Guided adoption of TDF by AU Heads of State" },
  { image: dag, title: "Co creator of the 4D Agenda" },
  { image: abm4, title: "Advisor to governments, DFIs, and global institutions" },
=======
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
>>>>>>> 5710dc9 (new ui update)
];

export default function CareerMilestones() {
  return (
<<<<<<< HEAD
    <section className="w-full px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Trajectory
        </span>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Career Milestones
        </h2>

        <div className="mt-10">
          <GlideCarousel perView={3} gap={28} bullets={false}>
            {milestones.map((milestone, i) => (
              <div key={i} className="flex h-full flex-col">
                <span
                  className="mb-4 font-display text-sm italic text-accent"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden border border-black/[0.08] bg-white"
                  style={{ borderRadius: "var(--radius-minimal)" }}
                >
                  <Image src={milestone.image} alt={milestone.title} fill className="object-contain p-4" />
                </div>
                <h3 className="mt-4 font-outfit text-lg font-semibold leading-snug text-foreground">
                  {milestone.title}
                </h3>
              </div>
            ))}
          </GlideCarousel>
=======
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
            reflect the breadth of Edem's work across Africa and global
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
>>>>>>> 5710dc9 (new ui update)
        </div>

        
      </div>
    </section>
  );
}