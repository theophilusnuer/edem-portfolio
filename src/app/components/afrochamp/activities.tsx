"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import pnb from "../../assets/pnb.webp";
import afch from "../../assets/afch.webp";
import tdf from "../../assets/tdf.webp";
import dag from "../../assets/dag.jpg";

type Activity = {
  image: StaticImageData;
  title: string;
  description: string;
};

const activities: Activity[] = [
  {
    image: pnb,
    title: "PanaBIOS",
    description:
      "PanaBIOS is an AU‑aligned biosurveillance suite designed to support safe mobility, contagion monitoring, spatial risk analytics, and cross‑border health clearance. It replaces costly physical restrictions with smart, digital controls.",
  },
  {
    image: afch,
    title: "AfCFTA Hub",
    description:
      "The AfCFTA Hub Super App provides AfCFTA numbers, trust‑building tools, and cross‑border business enablement. It is designed to help enterprises expand across borders and streamline how governments engage businesses and citizens.",
  },
  {
    image: tdf,
    title: "Trillion Dollar Investment Framework (TDF)",
    description:
      "The TDF is a private‑sector‑led investment framework adopted by AU Heads of State to mobilise large‑scale capital for AfCFTA implementation and Agenda 2063.",
  },
  {
    image: dag,
    title: "4D Agenda",
    description:
      "The 4D Agenda is a collaborative innovation engine linking African governments, the African Union, the diaspora, and development finance institutions. It is built on principles of co‑creation, co‑innovation, cost‑sharing, and equitable reward‑sharing.",
  },
];

export default function Activities() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center font-display text-3xl font-medium tracking-tight text-foreground sm:mb-12 sm:text-left md:text-4xl"
        >
          Featured Works
        </motion.h2>

        <div className="space-y-10 md:space-y-12">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="flex flex-col gap-5 border-b border-black/[0.06] pb-10 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:gap-8 md:pb-12"
            >
              {/* Image */}
              <div
                className="relative aspect-[4/3] w-full shrink-0 overflow-hidden border border-black/[0.06] sm:w-56 md:w-64 lg:w-72"
                style={{ borderRadius: "var(--radius-minimal)" }}
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h3 className="font-outfit text-lg font-bold tracking-tight text-foreground sm:text-xl md:text-2xl">
                  {activity.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/65 sm:text-base">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}